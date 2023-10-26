
# Invoice Event 1

The event data is the data that, when combined with the command, results in the output invoice found in the invoice field.

## Structure

`InvoiceEvent1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | Unique identifier for the credit note application. It is generated automatically by Chargify and has the prefix "cdt_" followed by alphanumeric characters. |
| `creditNoteNumber` | `string \| undefined` | Optional | A unique, identifying string that appears on the credit note and in places it is referenced. |
| `creditNoteUid` | `string \| undefined` | Optional | Unique identifier for the credit note. It is generated automatically by Chargify and has the prefix "cn_" followed by alphanumeric characters. |
| `originalAmount` | `string \| undefined` | Optional | The full, original amount of the credit note. |
| `appliedAmount` | `string \| undefined` | Optional | The amount of the credit note applied to invoice. |
| `transactionTime` | `string \| undefined` | Optional | The time the credit note was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |
| `memo` | `string \| undefined` | Optional | The credit note memo. |
| `role` | `string \| undefined` | Optional | The role of the credit note (e.g. 'general') |
| `consolidatedInvoice` | `boolean \| undefined` | Optional | Shows whether it was applied to consolidated invoice or not |
| `appliedCreditNotes` | [`AppliedCreditNote[] \| undefined`](../../doc/models/applied-credit-note.md) | Optional | List of credit notes applied to children invoices (if consolidated invoice) |
| `debitNoteNumber` | `string \| undefined` | Optional | A unique, identifying string that appears on the debit note and in places it is referenced. |
| `debitNoteUid` | `string \| undefined` | Optional | Unique identifier for the debit note. It is generated automatically by Chargify and has the prefix "db_" followed by alphanumeric characters. |
| `paymentMethod` | [`InvoiceEvent1PaymentMethod \| undefined`](../../doc/models/containers/invoice-event-1-payment-method.md) | Optional | This is a container for one-of cases. |
| `transactionId` | `number \| undefined` | Optional | The Chargify id of the original payment |
| `fromCollectionMethod` | `string \| undefined` | Optional | The previous collection method of the invoice. |
| `toCollectionMethod` | `string \| undefined` | Optional | The new collection method of the invoice. |
| `consolidationLevel` | [`InvoiceConsolidationLevel \| undefined`](../../doc/models/invoice-consolidation-level.md) | Optional | Consolidation level of the invoice, which is applicable to invoice consolidation.  It will hold one of the following values:<br><br>* "none": A normal invoice with no consolidation.<br>* "child": An invoice segment which has been combined into a consolidated invoice.<br>* "parent": A consolidated invoice, whose contents are composed of invoice segments.<br><br>"Parent" invoices do not have lines of their own, but they have subtotals and totals which aggregate the member invoice segments.<br><br>See also the [invoice consolidation documentation](https://chargify.zendesk.com/hc/en-us/articles/4407746391835). |
| `fromStatus` | [`Status \| undefined`](../../doc/models/status.md) | Optional | The status of the invoice before event occurence. See [Invoice Statuses](https://chargify.zendesk.com/hc/en-us/articles/4407737494171#line-item-breakdowns) for more. |
| `toStatus` | [`Status \| undefined`](../../doc/models/status.md) | Optional | The status of the invoice after event occurence. See [Invoice Statuses](https://chargify.zendesk.com/hc/en-us/articles/4407737494171#line-item-breakdowns) for more. |
| `dueAmount` | `string \| undefined` | Optional | Amount due on the invoice, which is `total_amount - credit_amount - paid_amount`. |
| `totalAmount` | `string \| undefined` | Optional | The invoice total, which is `subtotal_amount - discount_amount + tax_amount`.' |
| `applyCredit` | `boolean \| undefined` | Optional | If true, credit was created and applied it to the invoice. |
| `creditNoteAttributes` | [`CreditNote1 \| undefined`](../../doc/models/credit-note-1.md) | Optional | - |
| `paymentId` | `number \| undefined` | Optional | The ID of the payment transaction to be refunded. |
| `refundAmount` | `string \| undefined` | Optional | The amount of the refund. |
| `refundId` | `number \| undefined` | Optional | The ID of the refund transaction. |
| `prepayment` | `boolean \| undefined` | Optional | The flag that shows whether the original payment was a prepayment or not |
| `isAdvanceInvoice` | `boolean \| undefined` | Optional | If true, the invoice is an advance invoice. |

## Example (as JSON)

```json
{
  "uid": "uid0",
  "credit_note_number": "credit_note_number4",
  "credit_note_uid": "credit_note_uid4",
  "original_amount": "original_amount4",
  "applied_amount": "applied_amount8"
}
```

