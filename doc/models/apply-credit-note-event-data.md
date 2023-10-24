
# Apply Credit Note Event Data

Example schema for an `apply_credit_note` event

## Structure

`ApplyCreditNoteEventData`

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

## Example (as JSON)

```json
{
  "uid": "uid2",
  "credit_note_number": "credit_note_number4",
  "credit_note_uid": "credit_note_uid4",
  "original_amount": "original_amount6",
  "applied_amount": "applied_amount6"
}
```

