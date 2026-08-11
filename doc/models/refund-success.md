
# Refund Success

## Structure

`RefundSuccess`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refundId` | `number` | Required | - |
| `gatewayTransactionId` | `number` | Required | - |
| `productId` | `number` | Required | - |

## Example

```ts
import { RefundSuccess } from '@maxio-com/advanced-billing-sdk';

const refundSuccess: RefundSuccess = {
  refundId: 34,
  gatewayTransactionId: 160,
  productId: 190,
};
```

