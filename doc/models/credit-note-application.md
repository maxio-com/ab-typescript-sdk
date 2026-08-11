
# Credit Note Application

## Structure

`CreditNoteApplication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `transactionTime` | `string \| undefined` | Optional | - |
| `invoiceUid` | `string \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `appliedAmount` | `string \| undefined` | Optional | - |

## Example

```ts
import { CreditNoteApplication } from '@maxio-com/advanced-billing-sdk';

const creditNoteApplication: CreditNoteApplication = {
  uid: 'uid0',
  transactionTime: '2016-03-13T12:52:32.123Z',
  invoiceUid: 'invoice_uid0',
  memo: 'memo4',
  appliedAmount: 'applied_amount8',
};
```

