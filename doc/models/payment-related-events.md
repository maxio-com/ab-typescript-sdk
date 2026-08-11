
# Payment Related Events

## Structure

`PaymentRelatedEvents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `number` | Required | - |
| `accountTransactionId` | `number` | Required | - |

## Example

```ts
import { PaymentRelatedEvents } from '@maxio-com/advanced-billing-sdk';

const paymentRelatedEvents: PaymentRelatedEvents = {
  productId: 186,
  accountTransactionId: 170,
};
```

