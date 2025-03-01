
# Invoice Debit

## Structure

`InvoiceDebit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `debitNoteNumber` | `string \| undefined` | Optional | - |
| `debitNoteUid` | `string \| undefined` | Optional | - |
| `role` | [`DebitNoteRole \| undefined`](../../doc/models/debit-note-role.md) | Optional | The role of the debit note. |
| `transactionTime` | `string \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `originalAmount` | `string \| undefined` | Optional | - |
| `appliedAmount` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "uid": "uid2",
  "debit_note_number": "debit_note_number2",
  "debit_note_uid": "debit_note_uid8",
  "role": "chargeback",
  "transaction_time": "2016-03-13T12:52:32.123Z"
}
```

