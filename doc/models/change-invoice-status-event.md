
# Change Invoice Status Event

## Structure

`ChangeInvoiceStatusEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.ChangeInvoiceStatus` |
| `eventData` | [`ChangeInvoiceStatusEventData`](../../doc/models/change-invoice-status-event-data.md) | Required | Example schema for an `change_invoice_status` event |

## Example

```ts
import {
  ChangeInvoiceStatusEvent,
  InvoiceConsolidationLevel,
  InvoiceEventType,
  InvoiceStatus,
} from '@maxio-com/advanced-billing-sdk';

const changeInvoiceStatusEvent: ChangeInvoiceStatusEvent = {
  id: BigInt(148),
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
  eventType: InvoiceEventType.ChangeInvoiceStatus,
  eventData: {
    fromStatus: InvoiceStatus.Open,
    toStatus: InvoiceStatus.Pending,
    gatewayTransId: 'gateway_trans_id2',
    amount: 'amount8',
    consolidationLevel: InvoiceConsolidationLevel.Child,
  },
};
```

