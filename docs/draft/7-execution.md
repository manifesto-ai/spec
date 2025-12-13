---
title: Execution
---

# Section 7 -- Execution

## 7.1 Overview

Execution applies validated effects to a DomainSnapshot to produce a new snapshot. Execution MUST be deterministic and MUST NOT mutate the input snapshot in place.

---

## 7.2 Execution Model

1. **Input**: A validated snapshot and an ordered list of validated effects
2. **Process**: Apply effects sequentially (or transactionally) to produce intermediate snapshots
3. **Output**: A new snapshot and an execution result (success/failure)

### 7.2.1 Transactional Batches

- When marked transactional, all effects MUST succeed or the batch MUST rollback.
- On failure, the snapshot MUST revert to the pre-batch state.

---

## 7.3 Propagation

After applying effects, recompute `derived` values based on dependency DAGs. Runtimes MAY optimize recomputation but MUST produce the same final `derived` state as a full recompute.

---

## 7.4 Error Handling

- Errors MUST include a machine-readable code and message.
- Timeouts MUST trigger rollback for transactional batches.
- Non-transactional batches MAY stop on first error; applied effects remain unless explicitly rolled back.

---

## 7.5 Algorithm

```text
Execute(effects, snapshot, transactional=false):
  if transactional:
    working := deepCopy(snapshot)
  else:
    working := snapshot

  for effect in effects:
    result := ApplyEffect(working, effect)
    if result.error:
      if transactional:
        return { status: 'failure', snapshot, error: result.error }
      else:
        return { status: 'partial-failure', snapshot: working, error: result.error }
    working := result.snapshot

  working := RecomputeDerived(working)

  return { status: 'success', snapshot: working }
```

---

## 7.6 Eventing

Implementations MAY emit events for observability. If emitted, events SHOULD include:

- Effect/batch identifiers
- Pre- and post-snapshot hashes or versions
- Result status (`success`, `failure`, `partial`)

Events MUST avoid leaking sensitive data unless authorized.
