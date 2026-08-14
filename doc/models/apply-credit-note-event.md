
# Apply Credit Note Event

## Structure

`ApplyCreditNoteEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.ApplyCreditNote` |
| `eventData` | [`ApplyCreditNoteEventData`](../../doc/models/apply-credit-note-event-data.md) | Required | Example schema for an `apply_credit_note` event |

## Example

```ts
import {
  ApplyCreditNoteEvent,
  InvoiceEventType,
} from '@maxio-com/advanced-billing-sdk';

const applyCreditNoteEvent: ApplyCreditNoteEvent = {
  id: BigInt(86),
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
  eventType: InvoiceEventType.ApplyCreditNote,
  eventData: {
    uid: 'uid6',
    creditNoteNumber: 'credit_note_number0',
    creditNoteUid: 'credit_note_uid0',
    originalAmount: 'original_amount0',
    appliedAmount: 'applied_amount2',
    transactionTime: '2016-03-13T12:52:32.123Z',
    memo: 'memo0',
    role: 'role0',
    consolidatedInvoice: false,
    appliedCreditNotes: [
      {
        uid: 'uid4',
        number: 'number8',
      },
      {
        uid: 'uid4',
        number: 'number8',
      },
      {
        uid: 'uid4',
        number: 'number8',
      }
    ],
  },
};
```

