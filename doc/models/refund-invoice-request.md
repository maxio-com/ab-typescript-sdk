
# Refund Invoice Request

## Structure

`RefundInvoiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refund` | [`RefundInvoiceRequestRefund`](../../doc/models/containers/refund-invoice-request-refund.md) | Required | This is a container for any-of cases. |

## Example

```ts
import { RefundInvoiceRequest } from '@maxio-com/advanced-billing-sdk';

const refundInvoiceRequest: RefundInvoiceRequest = {
  refund: {
    amount: 'amount8',
    memo: 'memo0',
    paymentId: 0,
    external: false,
    applyCredit: false,
    voidInvoice: false,
  },
};
```

