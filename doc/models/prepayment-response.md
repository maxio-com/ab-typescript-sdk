
# Prepayment Response

## Structure

`PrepaymentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayment` | [`Prepayment`](../../doc/models/prepayment.md) | Required | - |

## Example

```ts
import {
  PrepaymentMethod,
  PrepaymentResponse,
} from '@maxio-com/advanced-billing-sdk';

const prepaymentResponse: PrepaymentResponse = {
  prepayment: {
    id: 38,
    subscriptionId: 148,
    amountInCents: BigInt(124),
    remainingAmountInCents: BigInt(182),
    external: false,
    memo: 'memo2',
    createdAt: '2016-03-13T12:52:32.123Z',
    refundedAmountInCents: BigInt(132),
    details: 'details8',
    paymentType: PrepaymentMethod.CreditCard,
  },
};
```

