
# Void Invoice Event Data

Example schema for an `void_invoice` event

## Structure

`VoidInvoiceEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditNoteAttributes` | [`CreditNote \| null`](../../doc/models/credit-note.md) | Required | - |
| `memo` | `string \| null` | Required | The memo provided during invoice voiding. |
| `appliedAmount` | `string \| null` | Required | The amount of the void. |
| `transactionTime` | `string \| null` | Required | The time the refund was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |
| `isAdvanceInvoice` | `boolean` | Required | If true, the invoice is an advance invoice. |
| `reason` | `string` | Required | The reason for the void. |

## Example

```ts
import { VoidInvoiceEventData } from '@maxio-com/advanced-billing-sdk';

const voidInvoiceEventData: VoidInvoiceEventData = {
  creditNoteAttributes: {
    uid: 'uid2',
    siteId: 72,
    customerId: 184,
    subscriptionId: 0,
    number: 'number0',
  },
  memo: 'memo6',
  appliedAmount: 'applied_amount6',
  transactionTime: '2016-03-13T12:52:32.123Z',
  isAdvanceInvoice: false,
  reason: 'reason8',
};
```

