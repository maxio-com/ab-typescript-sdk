
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

## Example

```ts
import { DebitNoteRole, InvoiceDebit } from '@maxio-com/advanced-billing-sdk';

const invoiceDebit: InvoiceDebit = {
  uid: 'uid8',
  debitNoteNumber: 'debit_note_number8',
  debitNoteUid: 'debit_note_uid4',
  role: DebitNoteRole.Chargeback,
  transactionTime: '2016-03-13T12:52:32.123Z',
};
```

