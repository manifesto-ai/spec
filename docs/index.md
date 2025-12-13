---
layout: home
title: Manifesto Specification
titleTemplate: Semantic State Protocol for AI Agents

hero:
  name: Manifesto
  text: Specification
  tagline: Semantic State Protocol for AI Agents
  image:
    src: /logo.svg
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
    <strong>Working Draft</strong> — This is the latest working draft of the Manifesto Specification.
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
  async: { fetchUsers: { status: 'success' } },
  actions: { 'user:create': { enabled: true } }
}

// An Effect Descriptor
const effect = {
  type: 'set',
  path: 'state.ui.modal.isOpen',
  payload: { value: true }
}
```

## Specification Versions

| Version | Status | Date |
|---------|--------|------|
| [Working Draft](/draft/) | 🚧 In Progress | — |
| v0.1 | 📋 Planned | Q1 2025 |

## Get Involved

- [GitHub Repository](https://github.com/manifesto-ai/manifesto-spec)
- [Open an Issue](https://github.com/manifesto-ai/manifesto-spec/issues)
- [RFC Process](/rfc/)
