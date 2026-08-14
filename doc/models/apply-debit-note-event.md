
# Apply Debit Note Event

## Structure

`ApplyDebitNoteEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.ApplyDebitNote` |
| `eventData` | [`ApplyDebitNoteEventData`](../../doc/models/apply-debit-note-event-data.md) | Required | Example schema for an `apply_debit_note` event |

## Example

```ts
import {
  ApplyDebitNoteEvent,
  InvoiceEventType,
} from '@maxio-com/advanced-billing-sdk';

const applyDebitNoteEvent: ApplyDebitNoteEvent = {
  id: BigInt(180),
  timestamp: '2016-03-13T12:52:32.123Z',
  invoice: {
    id: BigInt(166),
    uid: 'uid6',
    siteId: 92,
    customerId: 204,
    subscriptionId: 20,
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
  eventType: InvoiceEventType.ApplyDebitNote,
  eventData: {
    debitNoteNumber: 'debit_note_number6',
    debitNoteUid: 'debit_note_uid2',
    originalAmount: 'original_amount0',
    appliedAmount: 'applied_amount2',
    memo: 'memo0',
    transactionTime: '2016-03-13T12:52:32.123Z',
  },
};
```

