---
layout: home
title: Manifesto Specification
titleTemplate: Semantic State Protocol for AI Agents

hero:
  name: Manifesto
  text: Specification
  tagline: Semantic State Protocol for AI Agents
  image:
    src: /logo.png
    alt: Manifesto
  actions:
    - theme: brand
      text: Read the Spec
      link: /draft/
    - theme: alt
      text: Getting Started
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/manifesto-ai/manifesto-spec

features:
  - icon: 🎯
    title: Semantic Over Visual
    details: AI agents consume meaning, not pixels. Expose application state as structured semantic data.
  - icon: 📍
    title: Single Source of Truth
    details: All state in one Snapshot. No hidden states, no implicit contexts, no out-of-band information.
  - icon: ⚡
    title: Deterministic
    details: Same Intent + Same Snapshot = Same Effect. Predictable, testable, reproducible.
  - icon: 🔍
    title: Explicit Effects
    details: All state transitions are explicit Effect Descriptors. No hidden side effects.
---

<div class="my-12 p-4 rounded-lg border border-border bg-muted/50">
  <p class="text-sm">
    <strong>⚠️ Working Draft</strong> — This specification is experimental and evolving. Breaking changes may occur while we incorporate feedback from real implementations.
    <a href="/draft/" class="text-primary hover:underline">Read the spec →</a>
  </p>
</div>

## Quick Overview

Manifesto defines a protocol for AI agents to interact with applications through **semantic state** rather than visual interpretation.

```typescript
// A Manifesto Snapshot
const snapshot = {
  data: { users: { 'u1': { name: 'Alice' } } },
  state: { ui: { modal: { isOpen: false } } },
  derived: { userCount: 1 },
  validity: {
    'data.users.u1.email': { valid: true, issues: [] }
  },
  timestamp: 1702500000000,
  version: 3
}

// An Effect Descriptor
const effect = {
  _tag: 'SetState',
  path: 'state.ui.modal.isOpen',
  value: true,
  description: 'Open the modal'
}
```

## Specification Versions

| Version | Status | Date |
|---------|--------|------|
| [Working Draft](/draft/) | 🚧 In Progress | — |
| v0.1 | 📋 Planned | Q1 2025 |

### Stability & Intent

- **Experimental / Living Document**: Published early to invite critique and hands-on experimentation; not a finalized standard.
- **Spec leads implementation**: Implementations may be partial or opinionated as long as they respect the semantic model.
- **Versioning**: `0.x` signals active evolution with no compatibility guarantee.

## Get Involved

- [GitHub Repository](https://github.com/manifesto-ai/manifesto-spec)
- [Open an Issue](https://github.com/manifesto-ai/manifesto-spec/issues)
- [RFC Process](/rfc/)
