
# Prepayments Response

## Structure

`PrepaymentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prepayments` | [`Prepayment[] \| undefined`](../../doc/models/prepayment.md) | Optional | **Constraints**: *Unique Items Required* |

## Example

```ts
import {
  PrepaymentMethod,
  PrepaymentsResponse,
} from '@maxio-com/advanced-billing-sdk';

const prepaymentsResponse: PrepaymentsResponse = {
  prepayments: [
    {
      id: 76,
      subscriptionId: 186,
      amountInCents: BigInt(94),
      remainingAmountInCents: BigInt(220),
      external: false,
      memo: 'memo0',
      createdAt: '2016-03-13T12:52:32.123Z',
      refundedAmountInCents: BigInt(170),
      details: 'details6',
      paymentType: PrepaymentMethod.Cash,
    }
  ],
};
```

