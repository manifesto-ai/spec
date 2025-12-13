---
title: Appendix A — Notation Conventions
---

# Appendix A -- Notation Conventions

This appendix explains notation conventions used throughout the specification.

---

## A.1 RFC Keywords

Normative requirements use the RFC 2119 keywords **MUST**, **SHOULD**, and **MAY**. When these keywords are absent, the surrounding text is still normative unless explicitly marked as non-normative.

---

## A.2 Grammar Notation

Grammar rules are written in an EBNF-inspired format:

```
Rule :
  Alternative1 |
  Alternative2
```

- Terminals are written in backticks.
- `*` denotes a wildcard literal, not repetition.

---

## A.3 Algorithms

Algorithms are written in ordered steps. They prioritize determinism and clarity over performance. Implementations MAY optimize as long as observable behavior remains identical.

---

## A.4 Examples and Notes

- **Examples** illustrate valid usage and are non-normative.
- **Notes** provide clarifications and are non-normative unless explicitly stated otherwise.
