
# Payment for Allocation

Information for captured payment, if applicable

## Structure

`PaymentForAllocation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `amountInCents` | `bigint \| undefined` | Optional | - |
| `success` | `boolean \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |

## Example

```ts
import { PaymentForAllocation } from '@maxio-com/advanced-billing-sdk';

const paymentForAllocation: PaymentForAllocation = {
  id: 68,
  amountInCents: BigInt(102),
  success: false,
  memo: 'memo6',
};
```

