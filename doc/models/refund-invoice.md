
# Refund Invoice

Refund an invoice or a segment of a consolidated invoice.

## Structure

`RefundInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `string` | Required | The amount to be refunded in decimal format as a string. Example: "10.50". Must not exceed the remaining refundable balance of the payment. |
| `memo` | `string` | Required | A description that will be attached to the refund |
| `paymentId` | `number` | Required | The ID of the payment to be refunded |
| `external` | `boolean \| undefined` | Optional | Flag that marks refund as external (no money is returned to the customer). Defaults to `false`. |
| `applyCredit` | `boolean \| undefined` | Optional | If set to true, creates credit and applies it to an invoice. Defaults to `false`. |
| `voidInvoice` | `boolean \| undefined` | Optional | If `apply_credit` is set to false and refunding full amount, if `void_invoice` is set to true, invoice will be voided after refund. Defaults to `false`. |

## Example

```ts
import { RefundInvoice } from '@maxio-com/advanced-billing-sdk';

const refundInvoice: RefundInvoice = {
  amount: 'amount2',
  memo: 'memo4',
  paymentId: 36,
  external: false,
  applyCredit: false,
  voidInvoice: false,
};
```

