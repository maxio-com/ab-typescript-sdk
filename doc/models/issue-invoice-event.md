
# Issue Invoice Event

## Structure

`IssueInvoiceEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.IssueInvoice` |
| `eventData` | [`IssueInvoiceEventData`](../../doc/models/issue-invoice-event-data.md) | Required | Example schema for an `issue_invoice` event |

## Example

```ts
import {
  InvoiceConsolidationLevel,
  InvoiceEventType,
  InvoiceStatus,
  IssueInvoiceEvent,
} from '@maxio-com/advanced-billing-sdk';

const issueInvoiceEvent: IssueInvoiceEvent = {
  id: BigInt(144),
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
  eventType: InvoiceEventType.IssueInvoice,
  eventData: {
    consolidationLevel: InvoiceConsolidationLevel.Child,
    fromStatus: InvoiceStatus.Open,
    toStatus: InvoiceStatus.Pending,
    dueAmount: 'due_amount8',
    totalAmount: 'total_amount2',
  },
};
```

