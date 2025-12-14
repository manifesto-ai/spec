---
title: Introduction
---

# Manifesto Specification

<div class="text-lg text-muted-foreground mb-8">
Working Draft — {{ $frontmatter.date || 'December 2024' }}
</div>

## Abstract

Manifesto is a semantic state protocol originally created in 2024 for describing the capabilities and state of applications to AI agents.

## Status of this Document

This is a **Working Draft** of the Manifesto Specification. It may be updated, replaced, or obsoleted at any time.

> ⚠️ **Experimental / Living Document** — The specification is intentionally published early to invite feedback and experimentation. APIs, schemas, and semantics **may change incompatibly** between versions while the model stabilizes.

## Specification Status and Intent

- **Working Draft**: Not a finalized standard; breaking changes are expected during 0.x.
- **Early by design**: Published now so engineers and researchers can critique, experiment, and keep architecture discussions auditable.
- **Spec leads implementation**: Implementations may be partial or opinionated; they must respect the conceptual contracts, not necessarily match optimizations.
- **Versioning**: `0.x` artifacts denote an evolving surface without backward-compatibility guarantees.

### What Manifesto Is / Is Not

**Manifesto IS**
- A semantic state model for AI-native systems
- A design framework that formalizes intent → effect → snapshot
- A shared world model for humans, UIs, and agents

**Manifesto is NOT**
- A drop-in production framework (yet)
- A frozen or finalized standard
- A guarantee of backward compatibility
- A replacement for all existing state management libraries

## Copyright Notice

Copyright © 2024-present Manifesto Contributors. This specification is released under the MIT License.

## Table of Contents

1. [Overview](./1-overview) — Design principles and conformance
2. [Snapshot](./2-snapshot) — State representation
3. [Semantic Path](./3-semantic-path) — Path syntax and resolution
4. [Effect](./4-effect) — State mutation protocol
5. [Expression](./5-expression) — Declarative computation model
6. [Validation](./6-validation) — Validation rules
7. [Execution](./7-execution) — Runtime behavior

**Appendices**

- [A. Notation Conventions](./appendix-a-notation)
- [B. Grammar Summary](./appendix-b-grammar)  
- [C. Conformance Checklist](./appendix-c-conformance)
