
# Create Prepayment

## Structure

`CreatePrepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | - |
| `details` | `string` | Required | - |
| `memo` | `string` | Required | - |
| `method` | [`CreatePrepaymentMethod`](../../doc/models/create-prepayment-method.md) | Required | When the `method` specified is `"credit_card_on_file"`, the prepayment amount will be collected using the default credit card payment profile and applied to the prepayment account balance. This is especially useful for manual replenishment of prepaid subscriptions. |
| `paymentProfileId` | `number \| undefined` | Optional | - |

## Example

```ts
import {
  CreatePrepayment,
  CreatePrepaymentMethod,
} from '@maxio-com/advanced-billing-sdk';

const createPrepayment: CreatePrepayment = {
  amount: 73.78,
  details: 'details6',
  memo: 'memo0',
  method: CreatePrepaymentMethod.PaypalAccount,
  paymentProfileId: 58,
};
```

