---
title: Snapshot
---

# Section 2 -- Snapshot

## 2.1 Overview

A **DomainSnapshot** is the canonical representation of application state. It is immutable within a single evaluation and is the only authoritative source of truth for reads and writes.

A snapshot MUST contain the following namespaces:

- `data` — Durable domain entities
- `state` — Ephemeral UI/system state
- `derived` — Computed values
- `async` — Asynchronous job status
- `actions` — Declarative actions

---

## 2.2 Structure

### 2.2.1 Type Definition

```typescript
type DomainSnapshot = {
  data: Record<string, unknown>
  state: Record<string, unknown>
  derived: Record<string, unknown>
  async: Record<string, AsyncState>
  actions: Record<string, ActionDescriptor>
}

interface AsyncState<T = unknown> {
  status: 'idle' | 'pending' | 'success' | 'error'
  data: T | null
  error: Error | null
}

interface ActionDescriptor {
  enabled: boolean
  reason?: string
  preconditions?: string[]
}
```

### 2.2.2 Required Properties

1. **`data`**: Durable domain objects keyed by stable identifiers
2. **`state`**: Ephemeral UI/system state (e.g., selections, toggles)
3. **`derived`**: Computed values; MUST NOT be directly mutated by effects
4. **`async`**: Asynchronous job tracking with `status`, `data`, and `error`
5. **`actions`**: Available actions with enablement metadata

---

## 2.3 Namespaces

### 2.3.1 `data`

- Represents persistent domain objects (users, orders, products)
- SHOULD use stable identifiers and avoid presentation-specific fields
- MAY include nested structures and arrays

### 2.3.2 `state`

- Represents ephemeral UI/system state (e.g., modal visibility)
- SHOULD avoid nondeterministic values unless explicitly required

### 2.3.3 `derived`

- Represents computed values derived from `data` and `state`
- MUST form a Directed Acyclic Graph (DAG) of dependencies
- MUST NOT be targeted by effects (read-only)

### 2.3.4 `async`

- Represents asynchronous jobs or in-flight operations
- MUST include `status` and optionally `data` or `error`
- MAY be used to inform UI state or derived computations

### 2.3.5 `actions`

- Represents callable actions available to the agent
- Each action MUST specify whether it is `enabled`
- MAY include `reason` for disabled actions and `preconditions`

---

## 2.4 Example Snapshot

```json
{
  "data": {
    "users": {
      "u1": { "name": "Ada", "role": "admin" }
    }
  },
  "state": {
    "ui": { "modal": { "isOpen": false } }
  },
  "derived": {
    "userCount": 1,
    "adminUsers": ["u1"]
  },
  "async": {
    "fetchUsers": { "status": "success", "data": ["u1"], "error": null }
  },
  "actions": {
    "user:create": { "enabled": true },
    "user:delete": { "enabled": false, "reason": "Forbidden" }
  }
}
```

---

## 2.5 Serialization

- Snapshots MUST be JSON-serializable
- Runtimes SHOULD use stable key ordering for deterministic hashes
- Binary formats (e.g., CBOR) MAY be used if semantics are preserved

---

## 2.6 Constraints

- The snapshot MUST contain exactly the five namespaces above
- `derived` values MUST NOT have side effects or external dependencies
- `async` entries MUST use the defined status enum
- `actions` entries MUST be stable across a single evaluation
