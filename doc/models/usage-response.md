
# Usage Response

## Structure

`UsageResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `usage` | [`Usage`](../../doc/models/usage.md) | Required | - |

## Example

```ts
import { UsageResponse } from '@maxio-com/advanced-billing-sdk';

const usageResponse: UsageResponse = {
  usage: {
    id: BigInt(150),
    memo: 'memo2',
    createdAt: '2016-03-13T12:52:32.123Z',
    pricePointId: 28,
    quantity: 28,
  },
};
```

