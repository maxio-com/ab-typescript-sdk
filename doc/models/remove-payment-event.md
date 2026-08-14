
# Remove Payment Event

## Structure

`RemovePaymentEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.RemovePayment` |
| `eventData` | [`RemovePaymentEventData`](../../doc/models/remove-payment-event-data.md) | Required | Example schema for an `remove_payment` event |

## Example

```ts
import {
  InvoiceEventPaymentMethod,
  InvoiceEventType,
  RemovePaymentEvent,
} from '@maxio-com/advanced-billing-sdk';

const removePaymentEvent: RemovePaymentEvent = {
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
  eventType: InvoiceEventType.RemovePayment,
  eventData: {
    transactionId: 78,
    memo: 'memo0',
    appliedAmount: 'applied_amount2',
    transactionTime: '2016-03-13T12:52:32.123Z',
    paymentMethod: {
      type: InvoiceEventPaymentMethod.ApplePay,
    },
    prepayment: false,
    originalAmount: 'original_amount0',
  },
};
```

