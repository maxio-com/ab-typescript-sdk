
# Void Remainder Event Data

Example schema for an `void_remainder` event

## Structure

`VoidRemainderEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditNoteAttributes` | [`CreditNote`](../../doc/models/credit-note.md) | Required | - |
| `memo` | `string` | Required | The memo provided during invoice remainder voiding. |
| `appliedAmount` | `string` | Required | The amount of the void. |
| `transactionTime` | `string` | Required | The time the refund was applied, in ISO 8601 format, i.e. "2019-06-07T17:20:06Z" |

## Example

```ts
import { VoidRemainderEventData } from '@maxio-com/advanced-billing-sdk';

const voidRemainderEventData: VoidRemainderEventData = {
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
};
```

