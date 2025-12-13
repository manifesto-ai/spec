---
title: Semantic Path
---

# Section 3 -- Semantic Path

## 3.1 Overview

A **SemanticPath** is a deterministic, human-readable address for values within a DomainSnapshot. It is used by expressions to read values and by effects to target mutations.

Semantic paths are structurally similar to object accessors in JavaScript but constrained to ensure determinism and analyzability.

---

## 3.2 Grammar

```
SemanticPath : Namespace '.' Segment+
Namespace : 'data' | 'state' | 'derived' | 'async' | 'actions'
Segment : Identifier | Index | Wildcard | DeepWildcard
Identifier : [a-zA-Z_][a-zA-Z0-9_]*
Index : '[' Integer ']'
Wildcard : '*'
DeepWildcard : '**'
```

### 3.2.1 Examples

```
data.users.u1.email
state.ui.cart.isOpen
derived.order.total
async.fetchUsers.status
actions.checkout.run
```

---

## 3.3 Resolution Rules

1. The first segment MUST be one of the five namespaces.
2. `Identifier` accesses a property on the current object.
3. `Index` accesses an array element; it MUST be within bounds.
4. `Wildcard (*)` expands to all immediate child properties of the current object.
5. `DeepWildcard (**)` expands to all descendant properties depth-first.

### 3.3.1 Determinism

- Resolution MUST be deterministic: the same snapshot and path produce the same set of addresses.
- Wildcard expansion MUST preserve lexicographic ordering of keys.

### 3.3.2 Errors

- If any segment fails to resolve (missing key, type mismatch), resolution MUST fail with `PathResolutionError`.
- Paths targeting `derived` are read-only; writes MUST fail validation.

---

## 3.4 Normalization

Implementations SHOULD normalize paths to a canonical form:

- Remove redundant separators
- Use lowercase namespace
- Preserve identifier casing

This ensures consistent hashing, caching, and logging.
