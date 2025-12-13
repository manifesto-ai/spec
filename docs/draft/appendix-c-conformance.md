---
title: Appendix C — Conformance Checklist
---

# Appendix C -- Conformance Checklist

Use this checklist to evaluate implementation readiness.

---

## C.1 Snapshot

- [ ] Snapshot contains exactly `data`, `state`, `derived`, `async`, `actions`
- [ ] Each namespace is an object
- [ ] `derived` is read-only and DAG-based
- [ ] `async` entries use the defined status enum
- [ ] `actions` entries expose `enabled` and optional `reason`/`preconditions`

## C.2 SemanticPath

- [ ] Paths conform to grammar and resolve deterministically
- [ ] Wildcards preserve lexicographic ordering
- [ ] Writes to `derived` are rejected

## C.3 Effect

- [ ] Each effect matches its variant schema
- [ ] Targets are compatible (arrays for append/remove, objects for patch)
- [ ] Transactional batches rollback on failure
- [ ] Meta flags (`idempotent`, `retryable`, `timeoutMs`) are honored

## C.4 Expression

- [ ] Expressions are pure and deterministic
- [ ] `get` resolves valid paths
- [ ] Unsupported operators/functions are rejected

## C.5 Validation

- [ ] Validation runs before execution and is side-effect free
- [ ] Issues are machine-readable and deterministic

## C.6 Execution

- [ ] Execution is deterministic and does not mutate input snapshots in place
- [ ] Derived recomputation runs after effects
- [ ] Transactional rollback works as specified
