
# Backport Invoice Event

## Structure

`BackportInvoiceEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.BackportInvoice` |
| `eventData` | [`Invoice`](../../doc/models/invoice.md) | Required | Example schema for an `backport_invoice` event |

## Example

```ts
import {
  BackportInvoiceEvent,
  InvoiceEventType,
} from '@maxio-com/advanced-billing-sdk';

const backportInvoiceEvent: BackportInvoiceEvent = {
  id: BigInt(210),
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
  eventType: InvoiceEventType.BackportInvoice,
  eventData: {
    id: BigInt(206),
    uid: 'uid6',
    siteId: 132,
    customerId: 244,
    subscriptionId: 60,
    issueDate: '2024-01-01',
    dueDate: '2024-01-01',
    paidDate: '2024-01-01',
    publicUrlExpiresOn: '2024-01-21',
  },
};
```

