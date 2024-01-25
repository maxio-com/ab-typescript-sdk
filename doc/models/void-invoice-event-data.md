
# Void Invoice Event Data

Example schema for an `void_invoice` event

## Structure

`VoidInvoiceEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditNoteAttributes` | [`CreditNote`](../../doc/models/credit-note.md) | Required | - |
| `memo` | `string` | Required | The memo provided during invoice voiding. |
| `appliedAmount` | `string` | Required | The amount of the void. |
| `transactionTime` | `string` | Required | The time the refund was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |
| `isAdvanceInvoice` | `boolean` | Required | If true, the invoice is an advance invoice. |

## Example (as JSON)

```json
{
  "credit_note_attributes": {
    "uid": "uid2",
    "site_id": 72,
    "customer_id": 184,
    "subscription_id": 0,
    "number": "number0"
  },
  "memo": "memo6",
  "applied_amount": "applied_amount6",
  "transaction_time": "2016-03-13T12:52:32.123Z",
  "is_advance_invoice": false
}
```

