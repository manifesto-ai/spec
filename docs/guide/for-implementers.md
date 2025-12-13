---
title: For Implementers
---

# For Implementers

This guide highlights the minimum bar to ship a conformant Manifesto runtime.

## Checklist

- **Snapshot** — Emit the five namespaces and keep them deterministic across requests.
- **Paths** — Enforce the Semantic Path grammar; reject unknown namespaces.
- **Effects** — Support all Effect types or clearly document unsupported ones. Reject writes to `derived`.
- **Validation** — Run full validation before execution. Return machine-readable error codes.
- **Execution** — Apply Effects in order, recompute derived values, and rollback transactional batches on failure.

## Versioning

- Include a `version` field alongside the Snapshot. Increment on breaking changes.
- Document any extensions and ensure they do not change normative semantics.

## Testing

- Create fixtures for Snapshot validity, path resolution, and Effect execution.
- Use idempotent test cases to verify determinism.
- Add regression tests for validation failures to prevent silent breakage.

## Observability

- Emit events or logs containing Effect IDs, validation results, and Snapshot hashes.
- Avoid logging sensitive payloads unless explicitly allowed.
