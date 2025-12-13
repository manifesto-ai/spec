---
title: For AI Agents
---

# For AI Agents

Guidelines for agents consuming and mutating Manifesto Snapshots.

## Reading the Snapshot

- Treat the Snapshot as the authoritative state; avoid guessing from prior responses.
- Prefer `derived` values over recomputing when available.
- Inspect `actions` to determine allowed operations and required preconditions.

## Crafting Effects

- Resolve Semantic Paths locally before sending to avoid obvious errors.
- Honor `actions.*.enabled` and attach rationale to your requests when blocked.
- Mark Effects as `idempotent` when safe to retry.
- Avoid writing to `derived`; request the host to add derived values you need.

## Handling Responses

- If validation fails, adjust the Effect set using the returned issue codes.
- On partial failures (non-transactional batches), re-fetch the Snapshot before retrying.
- Use timeouts conservatively; respect host-provided limits.

<Note type="tip">
  Include a short intent description with your batch to aid observability and debugging.
</Note>
