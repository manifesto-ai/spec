---
title: Expression
---

# Section 5 -- Expression

## 5.1 Overview

An **Expression** is a declarative, JSON-serializable structure that computes a value. Expressions are inspired by the MapGL Style Specification and provide:

- **JSON-serializable**: Expressions are data, not code
- **Side-effect free**: Pure functions only
- **Statically analyzable**: Dependencies can be extracted
- **AI-parseable**: Structured format for machine understanding

---

## 5.2 Expression Type

### 5.2.1 Type Definition

```typescript
type Expression = LiteralExpr | GetExpr | OperatorExpr | FunctionExpr;
```

### 5.2.2 Grammar

```
Expression :
  LiteralExpr |
  GetExpr |
  OperatorExpr |
  FunctionExpr

LiteralExpr : string | number | boolean | null

GetExpr : ["get", SemanticPath]

OperatorExpr : ComparisonExpr | LogicalExpr | ArithmeticExpr

FunctionExpr : ConditionalExpr | StringFn | ArrayFn | NumberFn | ObjectFn | TypeFn | DateFn
```

---

## 5.3 Literal Expressions

Literal expressions are primitive values used directly.

```typescript
type LiteralExpr = string | number | boolean | null;
```

<Example :number="1" title="Literal expressions">

```typescript
// String
"hello world"

// Number
42
3.14

// Boolean
true
false

// Null
null
```

</Example>

---

## 5.4 Value Access

### 5.4.1 GetExpr

Retrieves a value from the snapshot using a semantic path.

```typescript
type GetExpr = ['get', SemanticPath];
```

<Example :number="2" title="Get expressions">

```typescript
// Access user email
['get', 'data.users.u1.email']

// Access derived total
['get', 'derived.order.total']
```

</Example>

---

## 5.5 Operators

### 5.5.1 Comparison Operators

```typescript
type ComparisonExpr =
  | ['==', Expression, Expression]
  | ['!=', Expression, Expression]
  | ['>', Expression, Expression]
  | ['>=', Expression, Expression]
  | ['<', Expression, Expression]
  | ['<=', Expression, Expression];
```

### 5.5.2 Logical Operators

```typescript
type LogicalExpr =
  | ['and', Expression, Expression]
  | ['or', Expression, Expression]
  | ['not', Expression];
```

### 5.5.3 Arithmetic Operators

```typescript
type ArithmeticExpr =
  | ['+', Expression, Expression]
  | ['-', Expression, Expression]
  | ['*', Expression, Expression]
  | ['/', Expression, Expression];
```

<Example :number="3" title="Operator expressions">

```typescript
['and', ['==', ['get', 'state.ui.modal.isOpen'], true], ['>', ['get', 'derived.order.total'], 0]]
```

</Example>

---

## 5.6 Functions

### 5.6.1 Conditional Functions

```typescript
type ConditionalExpr = ['case', ...Expression[]]; // even length: predicate/value pairs, optional default
```

### 5.6.2 String Functions

```typescript
type StringFn = ['concat', ...Expression[]] | ['lower', Expression] | ['upper', Expression];
```

### 5.6.3 Array Functions

```typescript
type ArrayFn = ['length', Expression] | ['includes', Expression, Expression];
```

### 5.6.4 Number Functions

```typescript
type NumberFn = ['abs', Expression] | ['ceil', Expression] | ['floor', Expression] | ['round', Expression];
```

### 5.6.5 Object Functions

```typescript
type ObjectFn = ['has', Expression, Expression];
```

### 5.6.6 Type Functions

```typescript
type TypeFn = ['type', Expression];
```

### 5.6.7 Date Functions

```typescript
type DateFn = ['now'];
```

<Example :number="4" title="Function expressions">

```typescript
['case',
  ['>', ['get', 'derived.order.total'], 100], 'VIP',
  ['>', ['get', 'derived.order.total'], 0], 'STANDARD',
  'EMPTY'
]
```

</Example>

---

## 5.7 Evaluation Rules

1. Expressions MUST be pure and side-effect free.
2. Evaluation MUST be deterministic; same inputs produce same outputs.
3. `['get', path]` MUST fail if the path does not resolve.
4. Division by zero MUST raise an `ExpressionError`.
5. Unknown operators or functions MUST raise `ExpressionError`.

---

## 5.8 Dependency Analysis

Implementations SHOULD statically analyze expressions to extract referenced semantic paths for caching, invalidation, and recomputation planning.
