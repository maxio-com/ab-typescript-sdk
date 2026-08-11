
# Create Prepayment Request

## Structure

`CreatePrepaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayment` | [`CreatePrepayment`](../../doc/models/create-prepayment.md) | Required | - |

## Example

```ts
import {
  CreatePrepaymentMethod,
  CreatePrepaymentRequest,
} from '@maxio-com/advanced-billing-sdk';

const createPrepaymentRequest: CreatePrepaymentRequest = {
  prepayment: {
    amount: 11.6,
    details: 'details8',
    memo: 'memo2',
    method: CreatePrepaymentMethod.MoneyOrder,
    paymentProfileId: 240,
  },
};
```

