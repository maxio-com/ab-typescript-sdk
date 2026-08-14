
# Refund Invoice Event

## Structure

`RefundInvoiceEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.RefundInvoice` |
| `eventData` | [`RefundInvoiceEventData`](../../doc/models/refund-invoice-event-data.md) | Required | Example schema for an `refund_invoice` event |

## Example

```ts
import {
  InvoiceConsolidationLevel,
  InvoiceEventType,
  RefundInvoiceEvent,
} from '@maxio-com/advanced-billing-sdk';

const refundInvoiceEvent: RefundInvoiceEvent = {
  id: BigInt(132),
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
  eventType: InvoiceEventType.RefundInvoice,
  eventData: {
    applyCredit: false,
    creditNoteAttributes: {
      uid: 'uid2',
      siteId: 72,
      customerId: 184,
      subscriptionId: 0,
      number: 'number0',
    },
    paymentId: 204,
    refundAmount: 'refund_amount8',
    refundId: 248,
    transactionTime: '2016-03-13T12:52:32.123Z',
    consolidationLevel: InvoiceConsolidationLevel.Child,
    memo: 'memo0',
    originalAmount: 'original_amount0',
  },
};
```

