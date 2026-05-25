# quick-protocol

API schema for **quick** and generated SDKs for Go, TypeScript and Dart.

Source of truth: `proto/quick/v1/*.proto`.

## Layout

- `proto/` — Protobuf source.
- `gen/go/`, `gen/ts/`, `gen/dart/` — generated SDKs (committed; consumed by clients via Go modules, npm and pub.dev).
- `buf.gen.yaml` — buf code generation config.

## Regenerate locally

Requires `buf` CLI installed.

    make generate
