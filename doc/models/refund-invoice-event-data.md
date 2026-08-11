
# Refund Invoice Event Data

Example schema for an `refund_invoice` event

## Structure

`RefundInvoiceEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applyCredit` | `boolean` | Required | If true, credit was created and applied it to the invoice. |
| `consolidationLevel` | [`InvoiceConsolidationLevel \| undefined`](../../doc/models/invoice-consolidation-level.md) | Optional | Consolidation level of the invoice, which is applicable to invoice consolidation. It will hold one of the following values:<br><br>* "none": A normal invoice with no consolidation.<br>* "child": An invoice segment which has been combined into a consolidated invoice.<br>* "parent": A consolidated invoice, whose contents are composed of invoice segments.<br><br>"Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.<br><br>See also the [invoice consolidation documentation](https://maxio.zendesk.com/hc/en-us/articles/24252269909389-Invoice-Consolidation). |
| `creditNoteAttributes` | [`CreditNote`](../../doc/models/credit-note.md) | Required | - |
| `memo` | `string \| undefined` | Optional | The refund memo. |
| `originalAmount` | `string \| undefined` | Optional | The full, original amount of the refund. |
| `paymentId` | `number` | Required | The ID of the payment transaction to be refunded. |
| `refundAmount` | `string` | Required | The amount of the refund. |
| `refundId` | `number` | Required | The ID of the refund transaction. |
| `transactionTime` | `string` | Required | The time the refund was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |

## Example

```ts
import {
  InvoiceConsolidationLevel,
  RefundInvoiceEventData,
} from '@maxio-com/advanced-billing-sdk';

const refundInvoiceEventData: RefundInvoiceEventData = {
  applyCredit: false,
  creditNoteAttributes: {
    uid: 'uid2',
    siteId: 72,
    customerId: 184,
    subscriptionId: 0,
    number: 'number0',
  },
  paymentId: 140,
  refundAmount: 'refund_amount8',
  refundId: 184,
  transactionTime: '2016-03-13T12:52:32.123Z',
  consolidationLevel: InvoiceConsolidationLevel.Parent,
  memo: 'memo0',
  originalAmount: 'original_amount0',
};
```

