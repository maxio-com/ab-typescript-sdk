
# Change Invoice Collection Method Event

## Structure

`ChangeInvoiceCollectionMethodEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.ChangeInvoiceCollectionMethod` |
| `eventData` | [`ChangeInvoiceCollectionMethodEventData`](../../doc/models/change-invoice-collection-method-event-data.md) | Required | Example schema for an `change_invoice_collection_method` event |

## Example

```ts
import {
  ChangeInvoiceCollectionMethodEvent,
  InvoiceEventType,
} from '@maxio-com/advanced-billing-sdk';

const changeInvoiceCollectionMethodEvent: ChangeInvoiceCollectionMethodEvent = {
  id: BigInt(110),
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
  eventType: InvoiceEventType.ChangeInvoiceCollectionMethod,
  eventData: {
    fromCollectionMethod: 'from_collection_method4',
    toCollectionMethod: 'to_collection_method8',
  },
};
```

