
# Invoice Credit

## Structure

`InvoiceCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `creditNoteNumber` | `string \| undefined` | Optional | - |
| `creditNoteUid` | `string \| undefined` | Optional | - |
| `transactionTime` | `string \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `originalAmount` | `string \| undefined` | Optional | - |
| `appliedAmount` | `string \| undefined` | Optional | - |

## Example

```ts
import { InvoiceCredit } from '@maxio-com/advanced-billing-sdk';

const invoiceCredit: InvoiceCredit = {
  uid: 'uid8',
  creditNoteNumber: 'credit_note_number2',
  creditNoteUid: 'credit_note_uid2',
  transactionTime: '2016-03-13T12:52:32.123Z',
  memo: 'memo2',
};
```

