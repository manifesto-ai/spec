---
title: Appendix B — Grammar Summary
---

# Appendix B -- Grammar Summary

This appendix summarizes key grammar rules for quick reference.

---

## B.1 Snapshot

```
DomainSnapshot :
  data    : Object
  state   : Object
  derived : Object
  async   : Record<String, AsyncState>
  actions : Record<String, ActionDescriptor>
```

---

## B.2 SemanticPath

```
SemanticPath : Namespace '.' Segment+
Namespace : 'data' | 'state' | 'derived' | 'async' | 'actions'
Segment : Identifier | Index | Wildcard | DeepWildcard
Identifier : [a-zA-Z_][a-zA-Z0-9_]*
Index : '[' Integer ']'
Wildcard : '*'
DeepWildcard : '**'
```

---

## B.3 Effect

```
Effect : EffectType SemanticPath Payload?
EffectType : 'set' | 'patch' | 'delete' | 'append' | 'remove' | 'action'
Payload : { value?: Any, predicate?: Function }
```

---

## B.4 Expression

```
Expression :
  LiteralExpr |
  GetExpr |
  OperatorExpr |
  FunctionExpr
```
