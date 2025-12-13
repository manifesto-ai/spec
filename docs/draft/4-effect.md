---
title: Effect
---

# Section 4 -- Effect

## 4.1 Overview

An **Effect** is a declarative description of a state mutation or external side effect. Effects are validated before execution and applied by the execution engine to produce a new snapshot.

---

## 4.2 Type System

### 4.2.1 Definition

```typescript
type Effect =
  | SetEffect
  | PatchEffect
  | DeleteEffect
  | AppendEffect
  | RemoveEffect
  | ActionEffect;

interface BaseEffect {
  type: string;
  path: SemanticPath;
  meta?: {
    idempotent?: boolean;
    retryable?: boolean;
    timeoutMs?: number;
  };
}
```

### 4.2.2 Effect Variants

```typescript
interface SetEffect extends BaseEffect {
  type: 'set';
  value: unknown;
}

interface PatchEffect extends BaseEffect {
  type: 'patch';
  value: Record<string, unknown>;
}

interface DeleteEffect extends BaseEffect {
  type: 'delete';
}

interface AppendEffect extends BaseEffect {
  type: 'append';
  value: unknown;
}

interface RemoveEffect extends BaseEffect {
  type: 'remove';
  predicate?: (item: unknown) => boolean;
  value?: unknown; // Fallback equality-based removal
}

interface ActionEffect extends BaseEffect {
  type: 'action';
  args?: Record<string, unknown>;
}
```

---

## 4.3 Semantics

- **set**: Replaces the value at `path` with `value`. MAY create missing keys when parent exists.
- **patch**: Shallow-merges `value` into the object at `path`. Target MUST be an object.
- **delete**: Removes the value at `path`. If targeting an array index, the array MUST be compacted.
- **append**: Appends `value` to an array at `path`. Target MUST be an array.
- **remove**: Removes items matching `predicate` OR deep-equal to `value`. At least one removal SHOULD occur; otherwise report `NoOp`.
- **action**: Invokes a declarative action at `actions.*`. MUST check `enabled === true` before invoking.

### 4.3.1 Meta Fields

- `idempotent`: If true, reapplying the effect MUST produce the same outcome.
- `retryable`: If true, runtimes MAY retry on transient errors (MUST respect idempotency).
- `timeoutMs`: Maximum execution time in milliseconds; on timeout, execution MUST rollback transactional batches.

---

## 4.4 Batching

Effects MAY be submitted as an ordered list. Execution rules:

1. Validate all effects before execution (Section 6).
2. Apply effects sequentially unless marked transactional.
3. Transactional batches are all-or-nothing; any failure MUST rollback.
4. Effects targeting `derived` MUST be rejected during validation.

---

## 4.5 Examples

```json
[
  { "type": "set", "path": "state.ui.modal.isOpen", "value": true },
  { "type": "append", "path": "data.users", "value": { "id": "u2", "name": "Bea" } },
  { "type": "action", "path": "actions.user:create", "args": { "name": "Bea" } }
]
```
