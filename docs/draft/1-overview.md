---
title: Overview
---

# Section 1 -- Overview

## 1.1 Introduction

**Manifesto Core** is a semantic state protocol designed for AI-native applications. It provides a structured approach for AI agents to interact with application state through semantic addressing, declarative computations, and explicit side effects.

Traditional application architectures scatter business logic across UI components, event handlers, and backend services. Manifesto consolidates this logic into a single, declarative domain model that both humans and AI agents can understand and manipulate.

### 1.1.1 Purpose

This specification defines:

1. **DomainSnapshot**: The structure representing application state at a point in time
2. **SemanticPath**: The addressing system for accessing values within a snapshot
3. **Expression**: A declarative DSL for computing derived values
4. **Effect**: A type system for describing side effects
5. **Execution**: The runtime model for propagating changes and executing effects

### 1.1.2 Audience

This specification is intended for:

- Library implementers creating Manifesto-compatible runtimes
- Tool developers building code generators, validators, or debuggers
- Platform developers integrating Manifesto into frameworks

---

## 1.2 Design Principles

Manifesto Core is built on five foundational principles:

### 1.2.1 Semantic-First

Every value in a Manifesto domain has a **SemanticPath** - a unique, meaningful address that describes what the value represents.

```
data.user.email       // User's email address
state.cart.isOpen     // Whether cart drawer is open
derived.order.total   // Computed order total
actions.checkout.run  // Callable checkout action
```

### 1.2.2 Single Source of Truth

The **DomainSnapshot** is the canonical source of application state. All reads and writes MUST be expressed in terms of the snapshot.

### 1.2.3 Deterministic Behavior

Given the same snapshot and the same inputs:

- **Expressions** MUST produce the same output
- **Effects** MUST produce the same resulting snapshot

### 1.2.4 Declarative by Default

All state transformations are described declaratively:

- **Expressions** describe computations
- **Effects** describe side effects
- **Execution** describes how effects are applied

### 1.2.5 AI-Readable

The specification is designed to be machine-readable and easily parseable by AI agents. Structures are JSON-compatible and avoid ambiguous semantics.

---

## 1.3 Terminology

- **DomainSnapshot**: A structured representation of the application state at a specific point in time.
- **SemanticPath**: A string-based addressing scheme for referencing values within a snapshot.
- **Expression**: A declarative structure for computing values based on snapshot data.
- **Effect**: A declarative structure representing a side effect to be applied.
- **Execution Engine**: A runtime component that validates and applies effects to produce new snapshots.

---

## 1.4 Conformance

A conforming implementation MUST:

1. Represent state using **DomainSnapshot** (Section 2)
2. Address state using **SemanticPath** (Section 3)
3. Compute derived values using **Expression** (Section 5)
4. Apply mutations using **Effect** (Section 4)
5. Execute effects using the **Execution Model** (Section 7)

---

## 1.5 Document Structure

- **Section 2**: DomainSnapshot - Defines the snapshot structure and namespaces
- **Section 3**: SemanticPath - Defines addressing semantics
- **Section 4**: Effect - Defines mutation descriptors
- **Section 5**: Expression - Defines the declarative computation model
- **Section 6**: Validation - Defines validation rules for snapshots and effects
- **Section 7**: Execution - Defines how effects are applied and propagated
