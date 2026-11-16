# How to write answers for this guide

This guide is for people like us: working engineers, many of us with English as a second language.
We want answers that are **easy to understand** and **easy to say out loud in an interview**.

Everything lives in one file: [README.md](README.md).

## Writing rules

1. **Simple English.** Short sentences (under 20 words). Common words. Write like you are explaining to a friend over chai.
2. **Explain every technical word the first time.** Example: "a *replica* (a copy of the database)".
3. **Start with a story.** Use a real-life example first: a restaurant, a bank counter, a railway ticket window, a post office, a cricket match. Then map the story to the tech.
4. **Use real numbers.** "1 million orders a day is about 12 orders per second" is better than "a lot of traffic".
5. **One idea per bullet.** No long paragraphs.
6. **Say what can go wrong.** Interviewers love "what happens when it fails?"
7. **No filler words and no AI-sounding words.** Do not use: *leverage, robust, seamless, delve, crucial, pivotal, paradigm, utilize, facilitate, holistic, cutting-edge, game-changer, synergy, landscape, realm, "in today's world", "it is important to note", "let's dive in"*.
8. **Don't over-complicate.** If a simple answer is correct, stop there. Add depth only where interviewers usually ask.

## Answer template

Use this for every topic. Skip a part if it does not help.

```markdown
#### Topic name

**In one line:** One simple sentence that explains it.

**Story:** A short real-life example (3–6 lines).

**How it works:**
1. Step one
2. Step two

**Diagram:** (only if it helps — see diagram rules)

**Example:** Small code (Java 21+, Spring Boot 3+) or a small calculation.

**Good and bad:**
| Good | Bad |
|---|---|
| ... | ... |

**When to use / when not to use:** short bullets.

**Say this in the interview:**
> 2–4 simple sentences you can say exactly like this.

**They may ask next:**
- **Question?** Short answer.
```

## System design case study template

1. **Clarify the question** (questions to ask the interviewer)
2. **Requirements** (functional and non-functional)
3. **Numbers** (users, requests per second, storage, bandwidth, servers)
4. **APIs**
5. **Data model** (tables / documents, and which database and why)
6. **Simple architecture** (Mermaid diagram)
7. **Deep dive on the 2–3 hard parts**
8. **What can go wrong** (failure cases and how we handle them)
9. **Trade-offs** (what we chose and what we gave up)
10. **Say this in the interview** (a 1-minute summary)
11. **They may ask next**

## Diagram rules

- Use Mermaid (GitHub draws it automatically).
- Keep it small: 10 boxes or fewer.
- Use `flowchart LR` or `flowchart TD` for architecture, `sequenceDiagram` for step-by-step flows.
- Put every label in double quotes: `A["Order Service"]`. This avoids broken diagrams.
- Do not use the word `end` as a node id. No colors or styling.

## Code rules

- Java 21 or newer, Spring Boot 3 or newer.
- Short: 25 lines or fewer. Show only the important part.
- Add a comment on the line that matters.

## Facts and versions

- Check version-specific facts (Java, Spring Boot, Kafka, Next.js) against official docs or release notes.
- If something is still in "preview" (not final), say so.
