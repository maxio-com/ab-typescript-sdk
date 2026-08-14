
# Refund Prepayment Request

## Structure

`RefundPrepaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refund` | [`RefundPrepayment`](../../doc/models/refund-prepayment.md) | Required | - |

## Example

```ts
import { RefundPrepaymentRequest } from '@maxio-com/advanced-billing-sdk';

const refundPrepaymentRequest: RefundPrepaymentRequest = {
  refund: {
    amountInCents: BigInt(132),
    amount: 'String1',
    memo: 'memo2',
    external: false,
  },
};
```

