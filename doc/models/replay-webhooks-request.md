
# Replay Webhooks Request

## Structure

`ReplayWebhooksRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `bigint[]` | Required | - |

## Example

```ts
import { ReplayWebhooksRequest } from '@maxio-com/advanced-billing-sdk';

const replayWebhooksRequest: ReplayWebhooksRequest = {
  ids: [
    BigInt(209),
    BigInt(210),
    BigInt(211)
  ],
};
```

