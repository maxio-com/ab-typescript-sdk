
# Create Prepayment Response

## Structure

`CreatePrepaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayment` | [`CreatedPrepayment`](../../doc/models/created-prepayment.md) | Required | - |

## Example

```ts
import { CreatePrepaymentResponse } from '@maxio-com/advanced-billing-sdk';

const createPrepaymentResponse: CreatePrepaymentResponse = {
  prepayment: {
    id: BigInt(38),
    subscriptionId: 148,
    amountInCents: BigInt(124),
    memo: 'memo2',
    createdAt: '2016-03-13T12:52:32.123Z',
  },
};
```

