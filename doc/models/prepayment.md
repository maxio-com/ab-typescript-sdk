
# Prepayment

## Structure

`Prepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `subscriptionId` | `number` | Required | - |
| `amountInCents` | `bigint` | Required | - |
| `remainingAmountInCents` | `bigint` | Required | - |
| `refundedAmountInCents` | `bigint \| undefined` | Optional | - |
| `details` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `external` | `boolean` | Required | - |
| `memo` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `paymentType` | [`PrepaymentMethod \| undefined`](../../doc/models/prepayment-method.md) | Optional | The payment type of the prepayment. |
| `createdAt` | `string` | Required | - |

## Example

```ts
import {
  Prepayment,
  PrepaymentMethod,
} from '@maxio-com/advanced-billing-sdk';

const prepayment: Prepayment = {
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
};
```

