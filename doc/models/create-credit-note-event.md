
# Create Credit Note Event

## Structure

`CreateCreditNoteEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.CreateCreditNote` |
| `eventData` | [`CreditNote`](../../doc/models/credit-note.md) | Required | Example schema for an `create_credit_note` event |

## Example

```ts
import {
  CreateCreditNoteEvent,
  InvoiceEventType,
} from '@maxio-com/advanced-billing-sdk';

const createCreditNoteEvent: CreateCreditNoteEvent = {
  id: BigInt(82),
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
  eventType: InvoiceEventType.CreateCreditNote,
  eventData: {
    uid: 'uid6',
    siteId: 132,
    customerId: 244,
    subscriptionId: 60,
    number: 'number6',
  },
};
```

