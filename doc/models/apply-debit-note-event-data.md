
# Apply Debit Note Event Data

Example schema for an `apply_debit_note` event

## Structure

`ApplyDebitNoteEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `debitNoteNumber` | `string` | Required | A unique, identifying string that appears on the debit note and in places it is referenced. |
| `debitNoteUid` | `string` | Required | Unique identifier for the debit note. It is generated automatically by Chargify and has the prefix "db_" followed by alphanumeric characters. |
| `originalAmount` | `string` | Required | The full, original amount of the debit note. |
| `appliedAmount` | `string` | Required | The amount of the debit note applied to invoice. |
| `memo` | `string \| null \| undefined` | Optional | The debit note memo. |
| `transactionTime` | `string \| null \| undefined` | Optional | The time the debit note was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |

## Example

```ts
import { ApplyDebitNoteEventData } from '@maxio-com/advanced-billing-sdk';

const applyDebitNoteEventData: ApplyDebitNoteEventData = {
  debitNoteNumber: 'debit_note_number8',
  debitNoteUid: 'debit_note_uid4',
  originalAmount: 'original_amount2',
  appliedAmount: 'applied_amount0',
  memo: 'memo2',
  transactionTime: '2016-03-13T12:52:32.123Z',
};
```

