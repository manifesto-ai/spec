---
title: Validation
---

# Section 6 -- Validation

## 6.1 Overview

Validation ensures that snapshots and effects are well-formed, deterministic, and safe to execute. Validation MUST occur before execution.

---

## 6.2 Validation Targets

1. **Snapshot Validation**: Ensures the snapshot structure is correct (namespaces, types).
2. **Path Validation**: Ensures semantic paths are syntactically valid and resolvable.
3. **Effect Validation**: Ensures effect types and payloads are valid for their targets.

---

## 6.3 Snapshot Validation

A snapshot is valid if:

1. It contains exactly the five namespaces: `data`, `state`, `derived`, `async`, `actions`.
2. Each namespace is an object.
3. `derived` is read-only and forms a DAG of dependencies.
4. `async` entries have a valid `status` and consistent `data`/`error` fields.
5. `actions` entries specify `enabled` and optional `reason`/`preconditions`.

---

## 6.4 Path Validation

- Paths MUST match the SemanticPath grammar (Section 3).
- Paths MUST resolve within the snapshot unless the effect type allows creation (e.g., `set` MAY create missing keys under an object parent).
- Paths targeting `derived` for writes MUST fail validation.

---

## 6.5 Effect Validation

For each effect:

1. **Structure**: The effect MUST match its variant's schema.
2. **Target**: The path MUST be valid for the effect type (e.g., `append` requires an array target).
3. **Meta**: `timeoutMs` MUST be a non-negative number if provided.
4. **Policy**: Product-specific policies MAY add constraints but MUST NOT violate core rules.

---

## 6.6 Result Format

```typescript
interface ValidationIssue {
  code: string
  message: string
  path?: SemanticPath
}

interface ValidationResult {
  valid: boolean
  issues: ValidationIssue[]
}
```

Implementations SHOULD provide machine-readable `code` values for remediation.

---

## 6.7 Algorithm

```text
Validate(effects, snapshot):
  issues := []

  if !ValidateSnapshot(snapshot):
    issues.push(...snapshotErrors)

  for effect in effects:
    if !ValidPath(effect.path):
      issues.push({ code: 'PathInvalid', path: effect.path })
      continue

    if effect.targetsDerived():
      issues.push({ code: 'PathReadOnly', path: effect.path })

    if !ValidEffectShape(effect):
      issues.push({ code: 'EffectInvalid', path: effect.path })

    if !ValidTargetType(effect, snapshot):
      issues.push({ code: 'TargetTypeMismatch', path: effect.path })

    applyPolicyChecks(effect, issues)

  return { valid: issues.length === 0, issues }
```

---

## 6.8 Failure Semantics

- If validation fails, execution MUST NOT proceed.
- Validation MUST be side-effect free.
- Issue ordering SHOULD be deterministic.
