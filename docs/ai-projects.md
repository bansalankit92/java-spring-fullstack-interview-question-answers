# AI projects end to end: OCR, astrology and a granth assistant

[← Back to README](../README.md) · [LLM basics](ai-llm-basics.md) · [RAG](ai-rag.md) · [Inference and training](ai-inference-training.md)

Three small AI projects you can build on a laptop or a free GPU notebook, and explain in an interview.
Each one teaches a different lesson: when to use a classic model, when to let code do the maths, and when RAG beats training.
Every project is honest about what it cannot do.

**Contents:**

- [How to pick the right approach](#how-to-pick-the-right-approach)
- [Project 1: OCR for printed and handwritten documents (English + Hindi)](#project-1-ocr-for-printed-and-handwritten-documents-english--hindi)
- [Project 2: Astrology assistant (Vedic / Western chart explainer)](#project-2-astrology-assistant-vedic--western-chart-explainer)
- [Project 3: Granth assistant (answers only from one scripture)](#project-3-granth-assistant-answers-only-from-one-scripture)
- [Comparing the three projects](#comparing-the-three-projects)
- [Interview questions](#interview-questions)

**Words used in this file (short meanings):**

| Word | Plain meaning |
|---|---|
| **Model** | A big file of numbers learned from data. It turns an input (text, image) into an output |
| **LLM** | Large language model. A model that reads and writes text, one token at a time |
| **Token** | A small piece of text, about 3/4 of an English word. Hindi often needs more tokens per word |
| **Parameter** | One learned number inside the model. "8B" means 8 billion of them |
| **Quantization** | Storing each parameter with fewer bits (for example 4 bits). An 8B model in 4-bit needs about 5 GB |
| **Embedding** | A list of numbers (a *vector*) that stands for the meaning of a text. Similar meaning, similar numbers |
| **RAG** | Retrieval augmented generation. Search your documents first, then give the found parts to the LLM |
| **Fine-tuning** | Training an existing model a little more on your own examples |
| **LoRA** | A cheap fine-tuning trick. Freeze the big model and train small extra layers (an *adapter*, often 10–100 MB) |
| **QLoRA** | LoRA on a 4-bit quantized model. A 7–8B model then fits on a free 16 GB GPU |
| **VLM** | Vision-language model. An LLM that can also look at images |
| **Ollama** | A tool that downloads and runs models on your own machine, with a simple HTTP API |

---

## How to pick the right approach

**In one line:** Start with the simplest thing that works: plain code, then prompting, then RAG, and fine-tune only when the format or skill is still wrong.

**Story:** You want to go from Delhi to Jaipur.
- You do not buy a plane. You take a bus or a train first.
- Prompting is the bus. RAG is the train with a reserved seat. Fine-tuning is buying your own car.
- Training a model from zero is building a car factory. Almost nobody needs that.

**How it works:**
1. **Can normal code do it?** Maths, dates, lookups and rules belong in code. Code is exact and cheap.
2. **Can a ready model do it with a good prompt?** Try this first. It costs nothing to change.
3. **Does the model need facts it does not have?** Use RAG. Your documents stay the source of truth.
4. **Is the output style, format or a narrow skill still wrong after 1–3?** Then fine-tune, often with LoRA.
5. **Is it a non-text task like reading an image?** A classic, smaller model (like an OCR model) is often better and faster than an LLM.

**Diagram:**

```mermaid
flowchart TD
    Q["New AI feature"] --> C{"Can plain code do it?"}
    C -->|"yes"| CODE["Write code (maths, rules)"]
    C -->|"no"| P{"Works with a good prompt?"}
    P -->|"yes"| PR["Prompting"]
    P -->|"no, needs my facts"| R["RAG over my documents"]
    P -->|"no, wrong tone or skill"| FT["Fine-tune with LoRA"]
    R --> E["Evaluate on a test set"]
    FT --> E
    PR --> E
```

**The three projects and their approach:**

| Project | Main approach | Why | Fine-tune? |
|---|---|---|---|
| [OCR (English + Hindi)](#project-1-ocr-for-printed-and-handwritten-documents-english--hindi) | Classic OCR model + LLM only for "text to JSON" | Reading pixels is a vision task. OCR models are small, fast and measurable | Yes, if your own forms or handwriting give high error |
| [Astrology assistant](#project-2-astrology-assistant-vedic--western-chart-explainer) | Code (astronomy library) as a **tool** + RAG for explanations | Planet positions are maths. LLMs are bad at maths | Optional LoRA for tone and format only |
| [Granth assistant](#project-3-granth-assistant-answers-only-from-one-scripture) | RAG with exact verse citations | Answers must come word for word from the text | Optional LoRA for tone. Never to "memorise" the text |

More depth: [Prompt, RAG, fine-tune or train from scratch?](ai-inference-training.md#prompt-rag-fine-tune-or-train-from-scratch) and [RAG vs fine-tuning vs long context](ai-rag.md#rag-vs-fine-tuning-vs-long-context). Spring AI basics in [spring-ecosystem.md](spring-ecosystem.md#spring-ai).

**Good and bad:**

| Good | Bad |
|---|---|
| Simple first means fast results and easy debugging | Teams often jump to fine-tuning because it sounds impressive |
| RAG keeps facts fresh: change a document, the answer changes | RAG is only as good as the search step |
| Fine-tuning fixes style and format well | Fine-tuning does not reliably add facts. The model can still make things up |

**Say this in the interview:**

> "I pick the simplest approach that passes my test set. Maths and rules go in code. Facts come from RAG, so the source stays the truth. I fine-tune with LoRA only when the format or a narrow skill is still wrong. And for images, a small specialised model often beats a big LLM."

**They may ask next:**
- **Why not fine-tune to add knowledge?** Fine-tuning changes behaviour more than memory. The model may still mix facts. RAG can also show the source.
- **When is training from zero worth it?** Almost never for an app team. It needs huge data and many GPUs.
- **How do you know it works?** A fixed test set with expected answers, run before every change.

---

## Project 1: OCR for printed and handwritten documents (English + Hindi)

**In one line:** Clean the image, find text lines, read them with an OCR model, then turn the text into checked JSON fields.

**Story:** A bank clerk gets a pile of KYC (know your customer) forms.
- First she straightens each page and wipes off coffee stains (cleanup).
- She finds the boxes with writing (detection).
- She reads each box (recognition).
- She types the values into the computer and checks them (post-processing and validation).
- OCR (optical character recognition: turning a picture of text into real text) does the same steps.

### Goal and users

- **Users:** a small office, a school or a clinic with paper forms in English and Hindi.
- **Input:** a phone photo or scan (JPG, PNG, PDF) of an invoice, a form or a handwritten note.
- **Output:** plain text plus JSON fields, for example `{"invoiceNumber": "INV-1043", "total": 1250.00}`.
- **Success:** character error rate under 3% on printed pages, field accuracy over 95% on your own forms.
- **Must not:** keep ID images longer than needed, or send them to an outside API without consent.

### Which approach and why

There are two families of tools:
- **Classic OCR pipelines.** A *detection* model finds text boxes. A *recognition* model reads each box. Small, fast, runs on CPU.
- **VLMs that read documents.** One big model looks at the whole page and writes text or JSON. Better on messy layouts. Slower, needs more memory, and can "fix" text that was never there.

**Options compared (checked Nov 2026):**

| Tool | What it is | Hindi | Runs on | Good for |
|---|---|---|---|---|
| **Tesseract** | Old, open source OCR engine (LSTM based) | Yes: `hin` and `script/Devanagari` trained data files | CPU | Clean printed pages. Easy baseline |
| **PaddleOCR 3.x** | Detection + recognition pipeline, Apache-2.0 | Yes: a Devanagari model (`devanagari_PP-OCRv5_mobile_rec`) | CPU or GPU | Printed text in many scripts. Fine-tuning tools included |
| **PaddleOCR-VL** | Small document VLM (about 0.9B) from the same project | Listed as supported | GPU preferred | Full page to Markdown or JSON, tables |
| **docTR** (Mindee) | Python OCR library, Apache-2.0 | Pretrained models focus on Latin scripts. I could not confirm Hindi | CPU or GPU | English documents, clean Python API |
| **TrOCR** (Microsoft) | Transformer that reads **one text line** image | Public checkpoints are English only | GPU for training | English handwriting. Easy to fine-tune with Hugging Face |
| **Open VLMs** (for example the Qwen3-VL family on Ollama, 2B–235B) | General VLM that can read pages | Depends on the model. Test it | 8B needs about 6 GB | Messy photos, mixed layouts, direct JSON |

Notes:
- PaddleOCR's newest PP-OCRv6 models cover Chinese, English, Japanese and Latin scripts. For Hindi, use the PP-OCRv5 Devanagari model. Check the docs when you build, this moves fast.
- "Hindi supported" in a model card does not mean "good on your forms". Measure it.

**Decision table:**

| Situation | Choose | Why |
|---|---|---|
| Clean printed English or Hindi | Tesseract or PaddleOCR, no training | Already good. Cheap |
| Many layouts, photos, tables | A document VLM | Understands the page as a whole |
| One fixed form type, printed | PaddleOCR + rules or an LLM for fields | Fast and predictable |
| Your own handwriting style, high error | Fine-tune a recognition model on your images | The base model never saw this writing |
| You need JSON fields, not just text | OCR text + LLM with a JSON schema + validation | LLMs are good at "find the total in this text" |

**When to fine-tune:** only after you measure. If CER (see [Evaluation](#evaluation)) on 100 of your own images is too high, label 1,000–5,000 text lines and fine-tune the recognition part. You almost never need to retrain detection.

### Data

| Data | Where from | Notes |
|---|---|---|
| Test set | 100–200 of **your own** images, typed by hand | The most important data. Never train on it |
| Printed English and Hindi samples | Your documents, or render text to images with many fonts | Synthetic (generated) data is cheap and labels are free |
| English handwriting | IAM Handwriting Database | Research licence, registration needed |
| Hindi handwriting | IIIT-HW-Dev (from IIIT Hyderabad) | Check the licence. Research use is common |
| Your forms | Real scans, with personal data removed or fake data filled in | Get consent. Mask names, numbers, photos |

**Labelling** (writing the correct answer for each image):
- For recognition, crop each text line and write its text. One line per row: `crops/0001.png<TAB>राम ने फल खाया`.
- Tools: Label Studio, or PaddleOCR's PPOCRLabel. Two people label the same 10% to catch mistakes.
- Save text in Unicode NFC form (one fixed way to store each letter). Some Hindi letters, like क़, can be stored as one code point or as two (क + nukta). Without NFC, the same word can compare as different.

### Architecture

```mermaid
flowchart LR
    U["Web or mobile upload"] --> API["Spring Boot API"]
    API -->|"multipart image"| OCR["OCR service (FastAPI)"]
    OCR --> CL["Cleanup: deskew, binarize"]
    CL --> DET["Text detection"]
    DET --> REC["Text recognition (Hindi + English)"]
    REC --> LLM["Local LLM: text to JSON (Ollama)"]
    LLM --> VAL["Schema validation"]
    VAL --> API
    API --> DB["Postgres: fields + review status"]
    API --> H["Human review queue"]
```

- The Java app owns users, storage and the review screen.
- The Python service owns the ML. Each side uses the language its libraries live in.
- Low confidence fields go to a person. The system never silently guesses.

### Step-by-step build

**Step 1: clean the image (CPU, no download).** *Deskew* means rotating a tilted page straight. *Binarize* means turning it into pure black and white.

```python
import cv2
import numpy as np

def clean(path: str) -> np.ndarray:
    img = cv2.imread(path, cv2.IMREAD_GRAYSCALE)
    img = cv2.fastNlMeansDenoising(img, h=10)            # remove scan noise
    _, bw = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    ys, xs = np.where(bw < 128)                          # dark pixels = ink
    pts = np.column_stack([xs, ys]).astype(np.float32)
    angle = cv2.minAreaRect(pts)[-1] % 90                # tilt of the text block
    if angle > 45:
        angle -= 90
    h, w = bw.shape
    m = cv2.getRotationMatrix2D((w / 2, h / 2), angle, 1.0)
    return cv2.warpAffine(bw, m, (w, h), borderValue=255)  # straight page
```

- I tested this angle logic on pages tilted by -7 to +12 degrees. OpenCV changed its angle rules in version 4.5, so test on your version.
- Photos with curved pages need more (PaddleOCR has an optional "unwarping" model for this).

**Step 2: a baseline with Tesseract (CPU).** Install `tesseract` and the `hin` language data first.

```python
import pytesseract
from PIL import Image

def ocr_tesseract(img) -> str:
    # "hin+eng" = try Hindi and English together on the same page
    return pytesseract.image_to_string(Image.fromarray(img), lang="hin+eng")
```

Always build the baseline first. Every later model must beat this number.

**Step 3: PaddleOCR with the Devanagari model (downloads models, CPU is fine).**

```python
from paddleocr import PaddleOCR

ocr = PaddleOCR(
    text_recognition_model_name="devanagari_PP-OCRv5_mobile_rec",  # Hindi + English letters
    use_doc_orientation_classify=False,
    use_doc_unwarping=False,
    use_textline_orientation=False,
)

def ocr_paddle(path: str) -> list[tuple[str, float]]:
    lines = []
    for res in ocr.predict(path):
        data = res.json["res"]
        lines += zip(data["rec_texts"], data["rec_scores"])  # text + confidence 0..1
    return lines
```

- The confidence score is useful. Send lines under, say, 0.80 to human review.
- Check that the default detector works well with this recognition model on your pages.

**Step 4: text to JSON with a local LLM and a schema (needs Ollama).** A *schema* is a fixed shape for the answer: field names and types.

```python
from ollama import chat
from pydantic import BaseModel, Field, ValidationError

class Invoice(BaseModel):
    invoice_number: str = Field(pattern=r"^[A-Z0-9-]{3,20}$")
    invoice_date: str = Field(pattern=r"^\d{4}-\d{2}-\d{2}$")  # ISO date
    seller_name: str
    total: float = Field(gt=0)

def to_invoice(ocr_text: str) -> Invoice | None:
    resp = chat(
        model="qwen3:8b",
        messages=[{"role": "user", "content":
                   "Extract the invoice fields. Use only this text. "
                   "Dates as YYYY-MM-DD.\n\n" + ocr_text}],
        format=Invoice.model_json_schema(),   # Ollama forces this JSON shape
        options={"temperature": 0},
    )
    try:
        return Invoice.model_validate_json(resp.message.content)
    except ValidationError:
        return None                            # send to human review
```

- The schema forces the **shape**. It does not prove the **values** are right.
- Add business checks in code: does `total` equal the sum of line items? Is the date in the past?
- Shortcut: a VLM (for example `qwen3-vl:8b`) can take the image itself with the same `format`. Put the image path in the message's `images` list. Compare both on your test set.

**Step 5: fine-tune TrOCR on your handwriting (GPU, free Colab T4 is enough).** TrOCR reads one line at a time. So you train on cropped line images.

```python
from transformers import TrOCRProcessor, VisionEncoderDecoderModel
from transformers import Seq2SeqTrainer, Seq2SeqTrainingArguments

name = "microsoft/trocr-base-handwritten"            # English checkpoint
processor = TrOCRProcessor.from_pretrained(name)
model = VisionEncoderDecoderModel.from_pretrained(name)
model.config.decoder_start_token_id = processor.tokenizer.eos_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id

args = Seq2SeqTrainingArguments(
    output_dir="trocr-my-forms",
    per_device_train_batch_size=8,
    learning_rate=5e-5,
    num_train_epochs=10,
    fp16=True,                                       # T4 GPU has no bf16
    predict_with_generate=True,
)
# train_ds / eval_ds: each item = {"pixel_values": ..., "labels": token ids}
trainer = Seq2SeqTrainer(model=model, args=args,
                         train_dataset=train_ds, eval_dataset=eval_ds)
trainer.train()
```

- The `train_ds` part is your crops plus `processor(image).pixel_values` and `processor.tokenizer(text).input_ids`.
- Replace padding token ids in labels with `-100`, so the loss ignores them.
- **Hindi handwriting:** the public TrOCR checkpoints have an English tokenizer (the part that splits text into tokens). For Hindi, fine-tune PaddleOCR's Devanagari recognition model with its training configs. It uses the same `image<TAB>text` label file. Another option is LoRA on a small VLM. Both need a GPU.
- Expect 1–3 hours on a T4 for a few thousand lines. Watch the eval CER, not only the loss.

**Step 6: serve it with FastAPI (CPU or GPU).**

```python
from fastapi import FastAPI, File, HTTPException, UploadFile
import tempfile

app = FastAPI()
MAX_BYTES = 10 * 1024 * 1024                          # 10 MB limit

@app.post("/ocr")
async def run_ocr(file: UploadFile = File(...)):
    data = await file.read()
    if len(data) > MAX_BYTES or file.content_type not in ("image/png", "image/jpeg"):
        raise HTTPException(status_code=400, detail="PNG or JPEG up to 10 MB")
    with tempfile.NamedTemporaryFile(suffix=".png") as tmp:  # deleted after use
        tmp.write(data)
        tmp.flush()
        lines = ocr_paddle(tmp.name)
    text = "\n".join(t for t, _ in lines)
    low = [t for t, s in lines if s < 0.80]
    return {"text": text, "lowConfidenceLines": low}
```

- Load the models **once** at startup, not per request. Model loading takes seconds.
- Use `uvicorn main:app --workers 1` for GPU. One model copy per worker uses memory.

**Step 7: call it from Spring Boot.**

```java
record OcrResult(String text, List<String> lowConfidenceLines) { }

@Service
class OcrClient {
    private final RestClient rest = RestClient.builder()
            .baseUrl("http://ocr-api:8000")
            .build();

    OcrResult read(MultipartFile file) {
        MultiValueMap<String, Object> parts = new LinkedMultiValueMap<>();
        parts.add("file", file.getResource());            // forward the upload
        return rest.post().uri("/ocr")
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .body(parts)
                .retrieve()
                .body(OcrResult.class);
    }
}
```

- Set connect and read timeouts. OCR on a big page can take 2–10 seconds on CPU. See [timeouts](microservices.md#timeouts).
- For big batches, put jobs on a queue and process them in the background. The user gets a job id.

### Evaluation

**Metrics:**
- **CER (character error rate):** wrong, missing and extra characters divided by the total characters. 2% CER = 2 mistakes in 100 characters.
- **WER (word error rate):** the same, but counting words. One wrong letter makes the whole word wrong, so WER is always higher.
- **Field accuracy:** for JSON output, the percentage of fields that exactly match the truth.
- **Review rate:** how many documents a human must check. This is the business number.

```python
import unicodedata
import jiwer

def norm(s: str) -> str:
    return unicodedata.normalize("NFC", " ".join(s.split()))  # same Unicode form, same spaces

def score(pairs: list[tuple[str, str]]) -> dict:
    refs = [norm(r) for r, _ in pairs]
    hyps = [norm(h) for _, h in pairs]
    return {"cer": jiwer.cer(refs, hyps), "wer": jiwer.wer(refs, hyps)}

# one missing matra: CER about 0.07, WER 0.25 (1 of 4 words wrong)
print(score([("राम ने फल खाया", "राम ने फल खया")]))
```

I ran this example: one missing matra gives CER 0.071 and WER 0.25. Hindi matras are separate Unicode characters, so they count as characters.

**A small test set (keep it fixed, grow it slowly):**

| Group | Images | Example | Target |
|---|---|---|---|
| Printed English invoices | 40 | GST invoice from a shop | CER < 2%, fields > 97% |
| Printed Hindi letters | 30 | Government notice | CER < 4% |
| Mixed Hindi + English forms | 30 | School admission form | Fields > 95% |
| Handwritten English notes | 30 | Doctor's note (fake data) | CER < 10% |
| Handwritten Hindi | 30 | Filled form in Hindi | Measure first, then set a target |
| Bad photos | 20 | Tilted, shadow, low light | No crash. Sent to review |

Report results per group. One average number hides the weak group.

### Run it locally

```yaml
# docker-compose.yml
services:
  ollama:
    image: ollama/ollama
    ports: ["11434:11434"]
    volumes: ["ollama:/root/.ollama"]        # keep downloaded models
  ocr-api:
    build: ./ocr-api                          # FastAPI + PaddleOCR + Tesseract
    environment:
      OLLAMA_HOST: http://ollama:11434
    ports: ["8000:8000"]
  app:
    build: ./spring-app
    ports: ["8080:8080"]
    depends_on: [ocr-api, postgres]
  postgres:
    image: postgres:17
    environment:
      POSTGRES_PASSWORD: dev-only             # dev only, use secrets in prod
volumes:
  ollama: {}
```

- First run: `docker compose up -d`, then `docker compose exec ollama ollama pull qwen3:8b` (about 5 GB).
- A laptop with 16 GB RAM runs all of it on CPU. Expect 1–3 seconds per page for OCR and 5–20 seconds for the LLM step.
- On a Mac, Docker cannot use the Apple GPU. Run Ollama natively for more speed and point `OLLAMA_HOST` to it.

### Limits and risks

- **Handwriting is hard.** Even good models make many mistakes on messy writing. Plan for human review.
- **VLMs can invent text.** A VLM may "correct" a wrong total or fill a blank field. Classic OCR fails more visibly. Keep confidence scores and review.
- **Mixed scripts** (Hindi words inside English lines) confuse some models. Test this group on its own.
- **Privacy of ID documents.** Aadhaar, PAN and passports are sensitive personal data. Under India's DPDP Act you need consent and a clear purpose.
  - Process locally. Do not log images or raw text.
  - Delete images after extraction. Keep only the fields you need.
  - Mask numbers in the UI (show only the last 4 digits). Encrypt at rest.
- **Licences.** Check the licence of every model and dataset. Some handwriting datasets are research-only.
- **Security.** Uploaded files are untrusted. Limit size and type. Never pass a file name into a shell command.

### Say this in the interview

**Say this in the interview:**

> "I built an OCR service for English and Hindi forms. It cleans the image, and PaddleOCR with a Devanagari model reads the text. Then a local LLM turns the text into JSON with a strict schema. I measure character error rate per document type on a fixed test set. I fine-tuned the recognition model only for handwriting, where the base model was weak. Low confidence fields go to a human, and ID images never leave the machine."

### They may ask next

- **Why not send everything to a big VLM?** It is slower, needs more memory and can invent text. For clean printed pages a small OCR model is faster and fails in visible ways. I compare both on the same test set.
- **How much data do you need to fine-tune?** For one handwriting style, a few thousand labelled lines usually help. Start with 1,000, measure, then add more.
- **How do you handle a 50-page PDF?** Split it into pages and put each page on a queue. Process pages in parallel and join the results by page number.
- **How do you know a field is wrong?** Low OCR confidence, a failed schema check or a failed business rule (totals do not add up). Any of these sends it to review.
- **Where does the LLM fit?** Only in the "text to fields" step. It never reads pixels in the main path.

---

## Project 2: Astrology assistant (Vedic / Western chart explainer)

> **A note before we start.** Astrology is a cultural and belief system. It is not science, and there is no good evidence that it predicts events. This project is a **cultural, educational and entertainment** app. It must show a disclaimer and must never give medical, legal or financial advice. The engineering lessons are real and useful in any domain.

**In one line:** Code computes the birth chart exactly; the LLM only explains that chart in plain words, using texts you are allowed to use.

**Story:** A pandit and a calculator.
- In the old days, a pandit used printed tables (a *panchang* or *ephemeris*) to find where each planet was. He did not guess.
- Then he explained the meaning in simple words to the family.
- Our app splits the same two jobs. A library does the table work. The LLM does the talking.
- If you let the LLM do the table work, it guesses. And a guess looks just as confident as a fact.

### Goal and users

- **Users:** people curious about their Vedic (Jyotish) or Western chart, students of the tradition, and app users who want it in Hindi or English.
- **Input:** date of birth, time of birth, place of birth, and the system (Vedic sidereal or Western tropical).
- **Output:** a chart as JSON (planet, sign, degree, house, retrograde) plus a short plain-language explanation with sources.
- **Must:** show a disclaimer, refuse health, legal and money questions, and protect birth data.

Two terms:
- **Tropical (Western):** the zodiac starts where the Sun is at the March equinox.
- **Sidereal (Vedic):** the zodiac is fixed to the stars. The gap between the two is the *ayanamsa*, about 24 degrees today. Different schools use slightly different ayanamsas (Lahiri is the common one in India).

### Which approach and why

**The main lesson: never let an LLM do the maths.**
- LLMs predict likely next tokens. They do not run astronomy formulas.
- Ask an LLM "where was Mars on 15 May 1990 at 10:00 in Delhi?" and you may get a confident, wrong answer.
- So we compute the chart in code. We give it to the LLM as a **tool**: a function the model can ask the app to run. The LLM only explains.

| Option | Use it for | Why / why not |
|---|---|---|
| **Prompting only** | Not for the chart | The model will invent positions |
| **Code (astronomy library) as a tool** | Planet positions, houses, ascendant | Exact, testable, fast (under 10 ms) |
| **RAG over interpretation texts** | "What does Moon in Cancer mean in this tradition?" | Answers come from texts you chose and can cite |
| **LoRA fine-tune** | Optional: a warm tone, a fixed answer format, better Hindi style | Does not add correctness. Only after RAG works |
| **Train a model from zero** | Never | No reason and no data |

**Library choice:**

| Library | Licence | Notes |
|---|---|---|
| **Swiss Ephemeris** via `pyswisseph` (2.10.x) | AGPL-3.0, or a paid professional licence | The standard in astrology software. Has sidereal modes (Lahiri and others) and house systems. AGPL means: if you run it as a public web service, you must share your source code, or buy the licence |
| **Skyfield** | MIT | Very accurate astronomy (NASA JPL data files). No astrology features. You write ayanamsa and houses yourself |

For a portfolio project, `pyswisseph` is the fastest path. Read the AGPL terms before you put it on the public internet.

### Data

| Data | Source | Notes |
|---|---|---|
| Ephemeris data | Swiss Ephemeris files, or its built-in Moshier model (no files needed) | Built-in model is accurate enough for a hobby app. Download the files for the best accuracy |
| Place to latitude, longitude and time zone | A geocoding service or the free GeoNames data | Needed to convert local birth time to UTC |
| Time zone history | The IANA time zone database (`zoneinfo` in Python) | India used other offsets before 1947, and some cities kept local time. Wrong offset = wrong chart |
| Interpretation texts | Only texts you have rights to: your own notes, public domain books, or licensed books | Many modern astrology books are copyrighted. Do not scrape them |
| Reference charts for tests | Charts computed by a trusted program, or astronomical events like equinoxes | Used to test the maths |
| Optional tone examples | 200–500 question and answer pairs written by you, reviewed by someone who knows the tradition | Only for LoRA |

### Architecture

```mermaid
flowchart LR
    UI["Web UI (Hindi or English)"] --> API["Spring Boot API"]
    API --> CACHE["Redis: chart by birth-data hash"]
    API -->|"tool call"| CH["Chart service (Python, pyswisseph)"]
    API --> VS["pgvector: interpretation texts"]
    API --> LLM["Local LLM (Ollama)"]
    CH -->|"chart JSON"| API
    VS -->|"top passages"| API
    LLM -->|"explanation with sources"| API
    API --> CHK["Checks: positions match chart, disclaimer present"]
```

The flow for one question:

```mermaid
sequenceDiagram
    participant User
    participant Api
    participant Chart
    participant Store
    participant Llm
    User->>Api: birth data + "explain my Moon"
    Api->>Chart: compute chart (or read cache)
    Chart-->>Api: chart JSON
    Api->>Store: search texts for "Moon in Sagittarius"
    Store-->>Api: 4 passages with source ids
    Api->>Llm: chart JSON + passages + rules
    Llm-->>Api: explanation with [source] tags
    Api->>Api: check claims against chart JSON
    Api-->>User: answer + disclaimer
```

### Step-by-step build

**Step 1: convert local birth time to UTC (no download).** This is where most wrong charts come from.

```python
from datetime import datetime
from zoneinfo import ZoneInfo

def to_utc_hours(local: str, tz: str) -> tuple[int, int, int, float]:
    """'1990-05-15 10:00' in 'Asia/Kolkata' -> (1990, 5, 15, 4.5)"""
    dt = datetime.strptime(local, "%Y-%m-%d %H:%M").replace(tzinfo=ZoneInfo(tz))
    u = dt.astimezone(ZoneInfo("UTC"))                 # uses historical offsets
    return u.year, u.month, u.day, u.hour + u.minute / 60
```

**Step 2: compute the chart with Swiss Ephemeris (CPU, no download needed).** I ran this code with `pyswisseph` 2.10.

```python
import swisseph as swe

SIGNS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra",
         "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
BODIES = {"Sun": swe.SUN, "Moon": swe.MOON, "Mars": swe.MARS,
          "Mercury": swe.MERCURY, "Jupiter": swe.JUPITER, "Venus": swe.VENUS,
          "Saturn": swe.SATURN, "Rahu": swe.MEAN_NODE}

def place(lng: float) -> dict:
    return {"longitude": round(lng, 4), "sign": SIGNS[int(lng // 30)],
            "degree": round(lng % 30, 2)}

def compute_chart(y, m, d, hour_utc, lat, lon, vedic=True) -> dict:
    jd = swe.julday(y, m, d, hour_utc)                 # Julian day, UTC
    flags = swe.FLG_SWIEPH | swe.FLG_SPEED
    if vedic:
        swe.set_sid_mode(swe.SIDM_LAHIRI)              # Lahiri ayanamsa
        flags |= swe.FLG_SIDEREAL
    planets = {}
    for name, body in BODIES.items():
        pos, _ = swe.calc_ut(jd, body, flags)
        planets[name] = place(pos[0]) | {"retrograde": pos[3] < 0}  # speed < 0
    planets["Ketu"] = place((pos[0] + 180) % 360) | {"retrograde": True}
    hsys = b"W" if vedic else b"P"                     # whole sign or Placidus
    _, ascmc = swe.houses_ex(jd, lat, lon, hsys, flags & swe.FLG_SIDEREAL)
    return {"system": "vedic" if vedic else "western",
            "ascendant": place(ascmc[0]), "planets": planets}
```

- Rahu is the Moon's node. Ketu is always exactly opposite (180 degrees). After the loop, `pos` still holds Rahu's position.
- `set_sid_mode` changes global state inside the library. Call it before each sidereal calculation, as here.
- For Delhi, 15 May 1990, 10:00 IST, this gives a Cancer ascendant, Sun in Taurus and Moon in Sagittarius (sidereal).
- **Sign borders matter.** Here the Moon is at 29.6° Sagittarius and the Sun at 0.4° Taurus. The Moon moves about 0.5° per hour. So a birth time off by one hour can change the Moon's sign. Show a warning when a planet is within 1° of a border.
- Add houses per planet, *nakshatra* (one of 27 star segments of 13°20′ each) and *dasha* periods the same way: as plain code with tests.

**Step 3: test the maths against a reference (CPU).** If these tests fail, nothing else matters.

```python
import swisseph as swe

def angle_diff(a: float, b: float) -> float:
    return abs((a - b + 180) % 360 - 180)          # handles 359.99 vs 0.0

def test_sun_at_march_equinox_is_zero_degrees():
    jd = swe.julday(2024, 3, 20, 3 + 6 / 60)      # equinox: 20 Mar 2024, 03:06 UTC
    sun, _ = swe.calc_ut(jd, swe.SUN, 0)          # tropical
    assert angle_diff(sun[0], 0.0) < 0.01

def test_lahiri_ayanamsa_2024_is_about_24_2():
    swe.set_sid_mode(swe.SIDM_LAHIRI)
    jd = swe.julday(2024, 3, 20, 0)
    assert abs(swe.get_ayanamsa_ut(jd) - 24.19) < 0.05

def test_known_chart_matches_reference():
    chart = compute_chart(1990, 5, 15, 4.5, 28.61, 77.21)
    assert chart["ascendant"]["sign"] == "Cancer"   # from a trusted program
    assert chart["planets"]["Moon"]["sign"] == "Sagittarius"
```

- I ran the first two checks: the Sun came out at 359.9997 degrees and the ayanamsa at 24.195.
- Add 20–30 reference charts from a trusted desktop program. Include births before 1947, near midnight and near sign borders.

**Step 4: cache by birth data (Redis).** The same input always gives the same chart.
- Key: `chart:v1:` + SHA-256 of `date|time|lat|lon|system|ayanamsa`. Put the version in the key, so a code fix can skip old entries.
- A hash in the key avoids storing raw birth data in the key name. The cached value still holds personal data, so set a TTL (time to live, for example 24 hours).
- More on caches: [system-design.md#caching](system-design.md#caching).

**Step 5: RAG over interpretation texts (needs Ollama and pgvector).**
- Split your texts into small passages, one idea each ("Moon in Cancer", "Saturn in 7th house").
- Store each passage with its source (book, page, tradition) and an embedding from a multilingual model like `bge-m3`.
- Search with **exact keys first**: `planet=Moon AND sign=Sagittarius`. Use semantic search (search by meaning) only for free-text questions. The chart already tells you what to look up.
- How retrieval works in detail: [the RAG pipeline](ai-rag.md#the-rag-pipeline-end-to-end).

**Step 6: the LLM explains (needs Ollama).**

```python
import json
from ollama import chat

RULES = """You explain astrology charts for a cultural and educational app.
Use ONLY the chart JSON and the passages below. Never compute or change positions.
Cite passages like [S2]. If the passages do not cover it, say so.
Do not predict death, illness, marriage dates or money outcomes.
For health, legal or money questions, say you cannot advise and suggest a professional.
Answer in {lang}. Keep it under 200 words."""

def explain(chart: dict, passages: list[dict], question: str, lang: str) -> str:
    ctx = "\n".join(f"[S{i + 1}] {p['text']}" for i, p in enumerate(passages))
    resp = chat(
        model="qwen3:8b",
        messages=[{"role": "system", "content": RULES.format(lang=lang)},
                  {"role": "user", "content": f"CHART:\n{json.dumps(chart)}\n\n"
                                              f"PASSAGES:\n{ctx}\n\nQUESTION: {question}"}],
        options={"temperature": 0.3},
    )
    return resp.message.content
```

**Step 7: check the answer in code.** The LLM may still write "your Moon is in Cancer" when the chart says Sagittarius.

```python
import re

SIGN_RE = "|".join(SIGNS)

def wrong_claims(answer: str, chart: dict) -> list[str]:
    errors = []
    for planet, info in chart["planets"].items():
        # finds "Moon in Cancer" or "Moon is in Cancer"
        for sign in re.findall(rf"{planet}\s+(?:is\s+)?in\s+({SIGN_RE})", answer):
            if sign != info["sign"]:
                errors.append(f"{planet}: said {sign}, chart says {info['sign']}")
    return errors
```

- If `wrong_claims` is not empty, retry once with the error added to the prompt. If it fails again, show only the chart table.
- The same idea in Hindi needs a small mapping table (for example "चंद्र" for Moon, "धनु" for Sagittarius).
- The disclaimer is added by code, not by the LLM. Then it is never forgotten.

**Step 8: Spring Boot calls the chart as a tool (Spring AI 2.0).**

```java
@Component
class ChartTools {
    private final RestClient chartApi = RestClient.create("http://chart-api:8001");

    @Tool(description = "Compute a birth chart. Always use this, never guess positions.")
    ChartJson computeChart(
            @ToolParam(description = "local date and time, yyyy-MM-dd HH:mm") String local,
            @ToolParam(description = "IANA time zone, like Asia/Kolkata") String tz,
            double lat, double lon,
            @ToolParam(description = "vedic or western") String system) {
        return chartApi.post().uri("/chart")
                .body(new ChartRequest(local, tz, lat, lon, system))
                .retrieve().body(ChartJson.class);       // exact numbers from code
    }
}
```

- In a simple flow, you do not even need the model to decide. The API computes the chart first and always passes it in. Tool calling helps for chat questions like "what about my partner's chart?".
- Spring AI tool basics: [spring-ecosystem.md#spring-ai](spring-ecosystem.md#spring-ai).

**Step 9 (optional): LoRA for tone and format (GPU, free Colab T4).**
- Only after RAG and the checks work.
- Data: 300 examples of `chart JSON + passages → ideal answer`, written and reviewed by you and a knowledgeable reviewer. Include refusals for health and money questions.
- Train a 3B–8B instruct model with QLoRA. The code pattern is in [Project 3, step 7](#step-by-step-build-2).
- Goal: answers always follow your format (summary, 3 points, sources, no fear words). Not new knowledge.

### Evaluation

| What | How | Target |
|---|---|---|
| **Chart maths** | pytest against 20–30 reference charts and the equinox test | 100% sign match, degrees within 0.05 |
| **Faithfulness** (answer agrees with chart and passages) | `wrong_claims` on every answer, plus a person reading 50 answers | 0 wrong positions. Under 5% unsupported sentences |
| **Citations** | Each [Sx] tag must point to a passage that was given | 100% valid |
| **Safety** | 30 risky questions: "Will I get cancer?", "Should I buy this stock?", "When will I die?" | 100% refusal with a polite message |
| **Language** | 20 Hindi questions, read by a Hindi speaker | Natural, correct Hindi, same facts as English |
| **Latency** | Chart under 50 ms. Full answer under 10 s on a laptop | p95 (95% of requests are faster than this) |

**Small test set example:**

| Input | Expected |
|---|---|
| Delhi, 1990-05-15 10:00, Vedic, "Explain my Moon" | Mentions Moon in Sagittarius, cites a passage, has disclaimer |
| Same, "Is this a good year to invest?" | Polite refusal, no prediction |
| Same, in Hindi | Hindi answer with the same sign |
| London, 1985-01-01 00:30, Western | Correct UTC handling and Western signs |
| Birth time unknown | Says houses and ascendant cannot be computed. Shows planets only |

### Run it locally

```yaml
services:
  chart-api:
    build: ./chart-api                 # FastAPI + pyswisseph (AGPL, see licence)
    ports: ["8001:8001"]
  ollama:
    image: ollama/ollama
    volumes: ["ollama:/root/.ollama"]
  postgres:
    image: pgvector/pgvector:pg17      # Postgres with the vector extension
    environment: { POSTGRES_PASSWORD: dev-only }
  redis:
    image: redis:7
  app:
    build: ./spring-app
    ports: ["8080:8080"]
    depends_on: [chart-api, ollama, postgres, redis]
volumes:
  ollama: {}
```

- Pull models once: `ollama pull qwen3:8b` (about 5 GB) and `ollama pull bge-m3` (about 1.2 GB).
- Everything runs on a 16 GB laptop. The chart part runs on any CPU.

### Limits and risks

- **Not science.** The app explains a tradition. It does not prove or predict anything. Say this in the UI and in the interview.
- **Harm.** People may make big life choices from it. Refuse health, legal, money and "when will X die" questions. Avoid fear words like "bad luck" or "dosha will ruin you".
- **Wrong input = wrong chart.** Birth times are often rounded. Old time zones are messy. Show the UTC time you used, so the user can check.
- **Traditions differ.** Ayanamsa, house system and rules vary by school. Let the user choose, and label every answer with the settings used.
- **Licences.** Swiss Ephemeris is AGPL or paid. Interpretation texts may be copyrighted.
- **Birth data is personal data.** Date, time and place of birth can identify a person.
  - Ask for consent. Store as little as possible. Let users delete their data.
  - Do not log raw birth data. Log the hash.
  - Encrypt at rest. Keep the LLM local, so data never leaves your server.

### Say this in the interview

**Say this in the interview:**

> "In my astrology explainer, the LLM never does the maths. A Swiss Ephemeris service computes the chart as JSON, and I test it against reference charts and the March equinox. The LLM only explains that JSON, using RAG over texts I have rights to. Code then checks that every planet and sign in the answer matches the chart. I treat it as a cultural app with a disclaimer, refuse health and money questions, and keep birth data local."

### They may ask next

- **Why not ask GPT for the chart directly?** It may produce wrong positions with full confidence. Code is exact, fast and testable. The LLM is for language.
- **How is this like a real business app?** Same pattern as "LLM explains your bill" or "LLM explains a loan EMI". Code computes the numbers, the LLM explains them.
- **What if the model ignores the tool and guesses?** In my API flow, code always computes the chart first and passes it in. Then I check the answer against the chart in code.
- **How do you support Hindi?** A multilingual embedding model for search and a model with good Hindi for the answer. A sign-name mapping for the checks. And a Hindi speaker to review samples.
- **Why cache charts?** The same birth data always gives the same chart. Caching saves CPU and makes repeated questions fast.

---

## Project 3: Granth assistant (answers only from one scripture)

> **A note on respect.** A granth (scripture) is sacred to millions of people. This assistant is a **study aid**, not a teacher, priest or guru. It must quote the text exactly, never invent verses, stay neutral between schools of interpretation, and point people to learned teachers for deeper questions. Build it with people from the tradition, not only for them.

**In one line:** Store every verse with its id, find the right verses, and let the LLM answer only from them, with citations that code checks.

**Story:** A library with a careful librarian.
- You ask, "What does the Gita say about doing your duty without worrying about results?"
- The librarian does not answer from memory. She opens the book, finds chapter 2, verse 47, and shows you the exact lines.
- Then she explains it in simple words and tells you, "This is one translation. Your teacher may explain it more deeply."
- If the book does not talk about it, she says, "I could not find this in the text."

### Goal and users

- **Users:** students, readers and devotees who want to find and understand verses. Also people new to the text.
- **Input:** a question in English, Hindi, Punjabi or transliterated Sanskrit, or a direct reference like "2.47".
- **Output:** a short answer, the cited verses in original script, transliteration and translation, and the translator's name.
- **Must:** quote only real verses, exactly. Say "not in the text" when it is not. Stay neutral. Show which translation was used.

**Example granths and licensing (check before you use any text):**

| Granth | Structure | Text sources to check |
|---|---|---|
| **Bhagavad Gita** | 18 chapters, about 700 verses. Id like `BG 2.47` | The Sanskrit original is public domain. Old English translations (for example K. T. Telang, 1882, in *Sacred Books of the East*) are public domain. You may need to align them to verse numbers by hand. Most modern translations and commentaries are copyrighted |
| **Guru Granth Sahib** | 1,430 Ang (pages), organised by raag and shabad. Id like `Ang 2, line 5` | The Gurmukhi text is widely available. Check the licence of any English or Hindi translation and of any API you use. Talk to Sikh community members about how the text is shown |
| **Ramcharitmanas** | 7 Kands, with chaupai, doha and soratha verses. Id like `Bal Kand, Doha 10` | The Awadhi original is public domain. F. S. Growse's 1880s English translation is public domain. Modern translations are usually copyrighted |

Start with **one** granth and **one** translation. The Bhagavad Gita is the easiest: small, clearly numbered, and public domain translations exist.

### Which approach and why

The big mistake is: "Let's fine-tune a model on the Gita so it knows the Gita."
- A fine-tuned model does not store text like a database. It learns patterns.
- It will produce verses that *sound* right but are not real, or mix two verses. For scripture, this is unacceptable.
- It also cannot show you where the answer came from.

| Option | Good for | Problem | Verdict |
|---|---|---|---|
| **Prompting only** ("You know the Gita...") | Nothing here | The model quotes from memory and makes up verses | No |
| **RAG with verse-level chunks** | Finding and citing real verses | Search can miss the right verse | **Yes, the core** |
| **LoRA fine-tune for tone and format** | Respectful tone, fixed answer layout, saying "not in the text" | Needs a small, carefully reviewed data set | Optional, after RAG works |
| **Fine-tune to memorise the text** | Nothing | Made-up verses, no sources, hard to update | **Never** |

### Data

**One row per verse.** A *chunk* is the piece of text you store and search. Here, one verse is one chunk. Never cut a verse in the middle.

| Field | Example (BG 2.47) | Why |
|---|---|---|
| `id` | `BG-2-47` | Stable id for citations |
| `chapter`, `verse` | 2, 47 | Exact lookup and neighbour verses |
| `original` | Sanskrit in Devanagari | Shown exactly as stored |
| `transliteration` | Sanskrit in Latin letters (IAST) | Keyword search for people who type in English letters |
| `translation` | The chosen English or Hindi translation | What the LLM reads and explains |
| `translator`, `licence` | "K. T. Telang, 1882", "public domain" | Shown in every answer |
| `embedding` | 1,024 numbers from `bge-m3` | Search by meaning |

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE verse (
    id              text PRIMARY KEY,           -- 'BG-2-47'
    chapter         int  NOT NULL,
    verse           int  NOT NULL,
    original        text NOT NULL,
    transliteration text,
    translation     text NOT NULL,
    translator      text NOT NULL,
    licence         text NOT NULL,
    embedding       vector(1024),               -- bge-m3 gives 1,024 numbers
    tsv tsvector GENERATED ALWAYS AS
        (to_tsvector('simple', coalesce(transliteration, '') || ' ' || translation)) STORED
);
CREATE INDEX ON verse USING hnsw (embedding vector_cosine_ops);  -- fast meaning search
CREATE INDEX ON verse USING gin (tsv);                           -- fast keyword search
```

- **HNSW** is an index for finding the nearest vectors quickly, without checking every row.
- `'simple'` means no English stemming. It works the same for transliterated Sanskrit and English words.
- About 700 rows for the Gita. Even without an index, search would be fast. The index matters for larger granths.

**Embedding model:** `bge-m3` (about 570M parameters, 1.2 GB on Ollama) supports 100+ languages and gives 1,024-number vectors. Test it on Sanskrit and Gurmukhi queries. Support for these is weaker than for Hindi and English. That is why keyword search on transliteration is also needed.

**Curated Q&A set (for evaluation and optional LoRA):**
- 100–300 questions, each with the correct verse ids and a model answer.
- Written and **reviewed by people who know the text**: a teacher, a scholar or experienced devotees. Two reviewers per answer.
- Include "not in the text" questions and trick questions (a chapter that does not exist).

### Architecture

```mermaid
flowchart LR
    UI["Simple web UI"] --> API["Spring Boot API"]
    API --> REF{"Looks like a verse id?"}
    REF -->|"yes, like 2.47"| EX["Exact lookup by id"]
    REF -->|"no"| HY["Hybrid search: meaning + keywords"]
    EX --> DB["Postgres + pgvector (verse table)"]
    HY --> DB
    DB -->|"top 5 verses + neighbours"| LLM["Local LLM (Ollama)"]
    LLM --> CHK["Citation check: ids exist, quotes from DB"]
    CHK --> UI
    ING["Ingestion script (Python)"] -->|"verses + embeddings"| DB
```

### Step-by-step build

**Step 1: prepare the text as JSON lines (no download).** One verse per line:

```json
{"id": "BG-2-47", "chapter": 2, "verse": 47, "original": "...", "transliteration": "karmaṇy-evādhikāras te ...", "translation": "...", "translator": "K. T. Telang (1882)", "licence": "public domain"}
```

- Clean the text by hand where needed. Check every chapter has the right verse count.
- Normalise Unicode to NFC, so the same letter is always stored the same way.

**Step 2: ingest with embeddings (needs Ollama with `bge-m3`, and Postgres).**

```python
import json
import sys

import ollama
import psycopg

def to_pg(vec: list[float]) -> str:
    return "[" + ",".join(f"{x:.6f}" for x in vec) + "]"   # pgvector text format

def ingest(path: str, dsn: str) -> None:
    rows = [json.loads(line) for line in open(path, encoding="utf-8")]
    with psycopg.connect(dsn) as conn:
        for i in range(0, len(rows), 32):                    # batches of 32
            batch = rows[i:i + 32]
            texts = [f"{r['transliteration']}\n{r['translation']}" for r in batch]
            vecs = ollama.embed(model="bge-m3", input=texts).embeddings
            for r, v in zip(batch, vecs):
                conn.execute(
                    "INSERT INTO verse (id, chapter, verse, original, transliteration,"
                    " translation, translator, licence, embedding)"
                    " VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s::vector)"
                    " ON CONFLICT (id) DO NOTHING",
                    (r["id"], r["chapter"], r["verse"], r["original"], r["transliteration"],
                     r["translation"], r["translator"], r["licence"], to_pg(v)))

if __name__ == "__main__":
    ingest(sys.argv[1], sys.argv[2])
```

Ingesting 700 verses takes about a minute on a laptop CPU.

**Step 3: hybrid search in Spring Boot.** *Hybrid* means two searches at once: by meaning (vectors) and by exact words (full-text). We merge them with **RRF** (reciprocal rank fusion). Each verse gets `1 / (60 + rank)` points from each list. Then we sort by total points. A verse found by both lists rises to the top.

```java
@Service
class VerseSearch {
    private static final Pattern REF = Pattern.compile("\\b(\\d{1,2})[.:](\\d{1,3})\\b");
    private final JdbcClient jdbc;
    private final EmbeddingModel embeddings;   // Spring AI, Ollama bge-m3

    VerseSearch(JdbcClient jdbc, EmbeddingModel embeddings) {
        this.jdbc = jdbc;
        this.embeddings = embeddings;
    }

    List<String> findIds(String question) {
        Matcher m = REF.matcher(question);
        if (m.find()) return List.of("BG-" + m.group(1) + "-" + m.group(2)); // exact id
        String vec = toPg(embeddings.embed(question));
        List<String> byMeaning = jdbc.sql(
                "SELECT id FROM verse ORDER BY embedding <=> ?::vector LIMIT 20")
                .param(vec).query(String.class).list();
        List<String> byWords = jdbc.sql("""
                SELECT id FROM verse WHERE tsv @@ plainto_tsquery('simple', ?)
                ORDER BY ts_rank(tsv, plainto_tsquery('simple', ?)) DESC LIMIT 20""")
                .param(question).param(question).query(String.class).list();
        return rrf(byMeaning, byWords).stream().limit(5).toList();
    }
}
```

```java
static List<String> rrf(List<String> a, List<String> b) {
    Map<String, Double> points = new HashMap<>();
    for (List<String> list : List.of(a, b))
        for (int i = 0; i < list.size(); i++)
            points.merge(list.get(i), 1.0 / (60 + i + 1), Double::sum); // rank 1 = most points
    return points.entrySet().stream()
            .sorted(Map.Entry.<String, Double>comparingByValue().reversed())
            .map(Map.Entry::getKey).toList();
}

static String toPg(float[] v) {
    StringJoiner j = new StringJoiner(",", "[", "]");
    for (float x : v) j.add(Float.toString(x));
    return j.toString();                                // "[0.12,-0.03,...]"
}
```

- `<=>` is pgvector's cosine distance. Smaller means closer in meaning.
- Also fetch the verse before and after each hit. Many verses only make sense with their neighbours.
- If an exact id does not exist (for example "19.5" in an 18-chapter Gita), say so. Do not fall back to a guess.
- More on search: [hybrid search](ai-rag.md#hybrid-search-bm25--vector), [RRF](ai-rag.md#reciprocal-rank-fusion-rrf) and [inverted indexes](system-design.md#inverted-index-how-search-works).

**Step 4: answer only from the retrieved verses.**

```java
String SYSTEM = """
        You are a respectful study aid for the Bhagavad Gita.
        Answer ONLY from the verses given below. Cite each point like [BG-2-47].
        Do not quote verse text yourself. The app shows the exact verses.
        If the verses do not answer the question, reply exactly: NOT_IN_TEXT
        Do not take sides between schools of interpretation. Be brief and kind.
        """;

String answer = chat.prompt()
        .system(SYSTEM)
        .user(u -> u.text("VERSES:\n{verses}\n\nQUESTION: {q}")
                .param("verses", formatted)        // id + translation for each verse
                .param("q", question))
        .call()
        .content();
```

- The LLM writes the explanation. The **verse text always comes from the database**, never from the LLM. This one rule removes most "fake quote" risk.
- `NOT_IN_TEXT` is a fixed token. Code turns it into a polite message in the user's language.

**Step 5: guardrails in code.** A *guardrail* is a check that runs on every answer before the user sees it.

```java
private static final Pattern CITE = Pattern.compile("\\[(BG-\\d{1,2}-\\d{1,3})]");

Answer verify(String llmText, Set<String> retrievedIds) {
    if (llmText.strip().equals("NOT_IN_TEXT")) return Answer.notInText();
    Matcher m = CITE.matcher(llmText);
    List<String> cited = new ArrayList<>();
    while (m.find()) cited.add(m.group(1));
    if (cited.isEmpty()) return Answer.notInText();             // no source, no answer
    for (String id : cited) {
        if (!retrievedIds.contains(id))                         // made-up or unseen verse
            return Answer.notInText();
    }
    List<Verse> quotes = verseRepo.findAllById(cited);          // exact text from DB
    return Answer.of(llmText, quotes);
}
```

- Every cited id must exist **and** must be one of the verses we gave the model.
- The UI shows the quotes from `verseRepo`, with original script, transliteration, translation and translator.
- Log failed checks (without personal data). They show where the prompt or search is weak.

**Step 6: a simple UI.** One text box, one answer area, verse cards below. Each card shows the id, the original, the transliteration, the translation and the translator. A Thymeleaf page or a small React page is enough.

**Step 7 (optional): LoRA fine-tune for tone and format (GPU: free Colab T4, about 1 hour).**

Each training example **includes the retrieved verses in the prompt**. So the model learns "answer from what you are given", not "remember the Gita".

```python
import torch
from datasets import load_dataset
from peft import LoraConfig
from transformers import BitsAndBytesConfig
from trl import SFTConfig, SFTTrainer

# each line: {"messages": [system, user (verses + question), assistant (reviewed answer)]}
data = load_dataset("json", data_files="reviewed_qa.jsonl", split="train")

trainer = SFTTrainer(
    model="Qwen/Qwen3-4B",                               # small instruct model, downloads ~8 GB
    train_dataset=data,
    args=SFTConfig(output_dir="granth-tone-lora", num_train_epochs=3,
                   learning_rate=1e-4, per_device_train_batch_size=2,
                   gradient_accumulation_steps=8, max_length=2048,
                   fp16=True, bf16=False,                # T4 has no bf16
                   assistant_only_loss=True),            # learn only the answers
    peft_config=LoraConfig(r=16, lora_alpha=32, lora_dropout=0.05,
                           target_modules="all-linear", task_type="CAUSAL_LM"),
    quantization_config=BitsAndBytesConfig(load_in_4bit=True,          # QLoRA
                                           bnb_4bit_quant_type="nf4",
                                           bnb_4bit_compute_dtype=torch.float16),
)
trainer.train()
trainer.save_model()                                     # saves only the small adapter
```

- 200–500 reviewed examples are enough for tone and format. Include 20% "NOT_IN_TEXT" examples.
- To run it in Ollama:
  1. Merge the adapter into the base model.
  2. Convert to GGUF (the file format llama.cpp and Ollama use) with llama.cpp's converter.
  3. Quantize to 4-bit and load it with a Modelfile line `FROM ./granth-tone.gguf`.
  4. Check the chat template after import.
- Compare the tuned model with the base model **on the same test set**. Keep it only if it wins. Details: [LoRA code](ai-inference-training.md#fine-tuning-code-lora-with-hugging-face) and [shipping a fine-tuned model locally](ai-inference-training.md#shipping-your-fine-tuned-model-locally).

### Evaluation

| What | How | Target |
|---|---|---|
| **Retrieval hit@5** | For each test question, is a correct verse in the top 5? | Over 85%. Fix search before touching the LLM |
| **Citation validity** | Code: every cited id exists and was retrieved | 100% (the guardrail enforces it) |
| **Quote exactness** | Code: every shown verse matches the source file byte for byte | 100% |
| **Faithfulness** | Two reviewers from the tradition rate 50 answers: 2 = faithful, 1 = partly, 0 = wrong | Average over 1.8. Discuss every 0 |
| **Refusal** | 20 questions the text does not answer | Over 95% NOT_IN_TEXT |
| **Neutrality and tone** | Reviewers flag answers that take sides or sound careless | 0 flags in the release set |

```python
import json

def hit_at_k(test_path: str, search, k: int = 5) -> float:
    """Each test line: {"q": "...", "gold": ["BG-2-47"]}"""
    tests = [json.loads(line) for line in open(test_path, encoding="utf-8")]
    hits = 0
    for t in tests:
        found = search(t["q"])[:k]                       # list of verse ids
        hits += any(g in found for g in t["gold"])
    return hits / len(tests)
```

**Small test set example:**

| Question | Expected |
|---|---|
| "What does 2.47 say?" | Exact lookup. Shows BG-2-47 |
| "Duty without attachment to results" | BG-2-47 in top 5. Answer cites it |
| "कर्म के फल की चिंता के बारे में गीता क्या कहती है?" (Hindi) | Same verse found. Answer in Hindi |
| "karmanye vadhikaraste" (transliteration) | Keyword search finds BG-2-47 |
| "What does 19.5 say?" | "There is no verse 19.5. The Gita has 18 chapters." No guess |
| "Who won the 2011 Cricket World Cup?" | NOT_IN_TEXT |
| "Which religion is the best?" | Polite refusal. Stays neutral |

### Run it locally

```yaml
services:
  postgres:
    image: pgvector/pgvector:pg17          # Postgres + vector extension
    environment:
      POSTGRES_DB: granth
      POSTGRES_PASSWORD: dev-only
    ports: ["5432:5432"]
  ollama:
    image: ollama/ollama
    ports: ["11434:11434"]
    volumes: ["ollama:/root/.ollama"]
  app:
    build: ./granth-api                     # Spring Boot 4 + Spring AI 2.0
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/granth
      SPRING_AI_OLLAMA_BASE_URL: http://ollama:11434
    ports: ["8080:8080"]
    depends_on: [postgres, ollama]
volumes:
  ollama: {}
```

1. `docker compose up -d`
2. `docker compose exec ollama ollama pull bge-m3` and `... ollama pull qwen3:8b`
3. Run the SQL from [Data](#data-2), then `python ingest.py gita.jsonl "postgresql://postgres:dev-only@localhost:5432/granth"`
4. Open `http://localhost:8080` and ask "What does 2.47 say?"

- Set the chat and embedding model names in `application.yml` (for example `spring.ai.ollama.chat.model: qwen3:8b`). Property names changed between Spring AI 1.x and 2.0, so check the docs for your version.
- Memory: `qwen3:8b` in 4-bit needs about 5–6 GB, `bge-m3` about 1.2 GB. A 16 GB laptop is fine.

### Limits and risks

- **Interpretation is plural.** Different schools read the same verse differently. One translation is one view. Say which translation is used. Do not present the LLM's explanation as the meaning.
- **Not a teacher.** Add a line: "For deeper study, please learn from a teacher in the tradition."
- **Small model, deep text.** A 4–8B model can give shallow or flat explanations. Keep answers short and let the verses speak.
- **Search misses.** If retrieval misses the verse, the answer is "not in the text" even when it is. Track hit@5 and grow the test set.
- **Language gaps.** Embeddings for Sanskrit, Awadhi and Gurmukhi are weaker. Transliteration and keyword search help. Measure each language.
- **Licensing.** Modern translations and commentaries are usually copyrighted. Use public domain or licensed text, and show the source.
- **Misuse.** People may try to get "the scripture says X is evil" quotes for arguments. Refuse to rank religions or groups. Stay neutral.
- **Prompt injection** (text that tries to change the model's rules). The verse table is trusted and fixed. Still, never let user text change the system prompt, and keep the code checks.

### Say this in the interview

**Say this in the interview:**

> "For the granth assistant I used RAG, not fine-tuning, because answers must come word for word from the text. Each verse is one row with its id, original, transliteration, translation and an embedding. Search is hybrid: exact verse lookup, meaning search with pgvector and keyword search, merged with RRF. The LLM may only cite verse ids. Code checks every id was retrieved, and the verse text shown always comes from the database. Reviewers from the tradition check faithfulness on a fixed test set."

### They may ask next

- **Why not just fine-tune on the scripture?** The model would learn patterns, not exact text. It would invent verses that sound real and could not show sources.
- **How do you stop made-up verses?** The model only cites ids. Code checks each id exists and was retrieved. The quote is read from the database.
- **What if the question is in Hindi but the translation is English?** `bge-m3` is multilingual, so a Hindi question can find English text. The answer is written in the user's language.
- **Why hybrid search?** Meaning search handles "duty without attachment". Keyword search handles exact words like "karmanye". Exact lookup handles "2.47". Each fixes the others' gaps.
- **How do you evaluate something so subjective?** Split it: retrieval and citations are measured by code. Faithfulness and tone are judged by people from the tradition using a simple 0–2 score.

---

## Comparing the three projects

| | OCR | Astrology assistant | Granth assistant |
|---|---|---|---|
| **Main approach** | Classic OCR model, LLM only for text to JSON | Code as a tool + RAG for explanations | RAG with verse-level citations |
| **Fine-tuning** | Yes, recognition model for your handwriting | Optional LoRA for tone | Optional LoRA for tone, never to memorise |
| **Data needed** | 100–200 labelled test images. 1,000–5,000 labelled lines to fine-tune | Reference charts for tests. Texts you have rights to | One clean, licensed translation. 100–300 reviewed Q&As |
| **Hardware** | CPU laptop to run. Free T4 GPU to fine-tune | Any CPU for charts. 16 GB laptop for the LLM | 16 GB laptop. Free T4 GPU for optional LoRA |
| **Hardest part** | Handwriting and bad photos | Time zones, traditions and responsible wording | Faithfulness, respect and licensing |
| **Key lesson** | Pick a small specialised model for pixels | Never let an LLM do the maths | Retrieval and citations beat memorising |
| **How to demo** | Upload a tilted Hindi form, show JSON and a low-confidence field going to review | Enter a birth date, show the chart JSON, then the explanation, then a refused money question | Ask "2.47", a Hindi question and an off-topic question. Show citations and the NOT_IN_TEXT reply |

**Tips for all three demos:**
- Show the **test set results** table, not only a happy-path demo.
- Show one **failure** and how the system handled it. Interviewers trust honest numbers more than perfect demos.
- Keep a 2-minute screen recording as a backup, in case the laptop or Wi-Fi fails.

---

## Interview questions

**1. How do you decide between prompting, RAG and fine-tuning?** ([How to pick](#how-to-pick-the-right-approach))
Code for maths and rules. Prompting first for language tasks. RAG when the model needs your facts. Fine-tuning when the format or a narrow skill is still wrong after that.

**2. Can fine-tuning teach a model new facts?** ([Granth approach](#which-approach-and-why-2))
A little, but not reliably. The model can still mix or invent facts and cannot show sources. Use RAG for facts and fine-tuning for behaviour.

**3. What is OCR, and what are its main steps?** ([Project 1](#project-1-ocr-for-printed-and-handwritten-documents-english--hindi))
Turning an image of text into real text. Clean the image, detect text regions, recognise each region, then post-process into clean text or JSON.

**4. Tesseract, PaddleOCR or a VLM?** ([OCR approach](#which-approach-and-why))
Tesseract for a quick baseline on clean print. PaddleOCR for better accuracy and Hindi support with fine-tuning tools. A VLM for messy layouts, but it is slower and can invent text.

**5. What are CER and WER?** ([OCR evaluation](#evaluation))
Character and word error rates: wrong, missing and extra characters (or words) divided by the total. WER is higher, because one wrong letter spoils a whole word.

**6. Why normalise Unicode before measuring Hindi OCR?** ([OCR evaluation](#evaluation))
Some Hindi letters, like क़, can be stored as one code point or as two (क + nukta). NFC gives one fixed form, so equal words compare as equal.

**7. When would you fine-tune an OCR model?** ([OCR approach](#which-approach-and-why))
When CER on your own images stays too high, usually for handwriting or unusual fonts. Label 1,000+ lines and fine-tune only the recognition model.

**8. How do you turn OCR text into reliable JSON?** ([OCR build](#step-by-step-build))
An LLM with a JSON schema forces the shape. Pydantic validates types and patterns. Business rules check the values. Failures go to human review.

**9. How do you handle ID documents safely?** ([OCR limits](#limits-and-risks))
Process locally, ask for consent, keep only needed fields, delete images, mask numbers in the UI, encrypt at rest and never log raw text.

**10. Why should an LLM never compute a birth chart?** ([Astrology approach](#which-approach-and-why-1))
LLMs predict likely text. They do not run astronomy formulas. Code is exact and testable, so code computes and the LLM explains.

**11. What is tool calling?** ([Astrology build](#step-by-step-build-1))
The model asks the app to run a named function with arguments. The app runs it and sends the result back. The model never runs code itself.

**12. How do you test the chart maths?** ([Astrology evaluation](#evaluation-1))
Unit tests against reference charts and known events, like the Sun at 0 degrees at the March equinox. Compare angles with wrap-around at 360.

**13. How do you check that the LLM did not change the chart?** ([Astrology build](#step-by-step-build-1))
Parse the answer for "planet in sign" claims and compare each with the chart JSON. On a mismatch, retry once, then show only the table.

**14. How do you present a belief-based product responsibly?** ([Astrology limits](#limits-and-risks-1))
Call it cultural and educational, add a code-controlled disclaimer, refuse health, legal and money questions, and avoid fear-based wording.

**15. What licence issue comes with Swiss Ephemeris?** ([Astrology approach](#which-approach-and-why-1))
It is AGPL or a paid licence. A public AGPL web service must share its source code. Skyfield (MIT) is an option, but you build astrology parts yourself.

**16. Why cache charts, and what is the key?** ([Astrology build](#step-by-step-build-1))
Same input, same chart. Key is a version plus a hash of birth data and settings. Set a TTL because the value holds personal data.

**17. How do you chunk a scripture for RAG?** ([Granth data](#data-2))
One verse per chunk, never split. Keep chapter and verse ids, original script, transliteration, translation and translator as separate fields.

**18. What is hybrid search and RRF?** ([Granth build](#step-by-step-build-2))
Meaning search plus keyword search. RRF merges the two ranked lists by adding `1 / (60 + rank)` from each, so items in both lists rise.

**19. How do you stop the assistant from inventing verses?** ([Granth build](#step-by-step-build-2))
The model only cites ids. Code checks each id exists and was retrieved. The verse text shown always comes from the database.

**20. What should the assistant say when the answer is not in the text?** ([Granth approach](#which-approach-and-why-2))
A fixed NOT_IN_TEXT token that code turns into a polite message. Test it with off-topic questions and impossible references.

**21. How do you evaluate faithfulness for a scripture?** ([Granth evaluation](#evaluation-2))
Code measures retrieval hit@5 and citation validity. Reviewers from the tradition score answers 0–2. Two reviewers, and every 0 is discussed.

**22. Which embedding model for Hindi, Sanskrit and Punjabi?** ([Granth data](#data-2))
A multilingual model like `bge-m3` (1,024 numbers, 100+ languages). Measure each language, and add transliteration keyword search for weak scripts.

**23. What is LoRA, and why use it on a free GPU?** ([Granth build](#step-by-step-build-2))
LoRA trains small adapter layers and freezes the big model. With 4-bit QLoRA, a 4–8B model fits on a 16 GB T4.

**24. How do you run a fine-tuned model in Ollama?** ([Granth build](#step-by-step-build-2))
Merge the LoRA adapter into the base, convert to GGUF with llama.cpp, quantize to 4-bit and load it with a Modelfile. Check the chat template.

**25. Why does a Spring Boot app call a Python service for ML?** ([OCR architecture](#architecture))
The ML libraries live in Python. Java owns users, data and workflow. A small HTTP API with timeouts keeps both sides simple.

**26. How much memory does a local 8B model need?** ([Granth run](#run-it-locally-2))
In 4-bit, about 5–6 GB, plus memory for the context. A 16 GB laptop can run an 8B chat model and an embedding model together.

**27. What makes a good AI portfolio demo?** ([Comparing](#comparing-the-three-projects))
A real problem, a test set with honest numbers, one shown failure, and a clear reason for the chosen approach.
