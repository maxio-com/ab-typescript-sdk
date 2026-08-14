
# Failed Payment Event

## Structure

`FailedPaymentEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.FailedPayment` |
| `eventData` | [`FailedPaymentEventData`](../../doc/models/failed-payment-event-data.md) | Required | Example schema for an `failed_payment` event |

## Example

```ts
import {
  FailedPaymentEvent,
  InvoiceEventType,
  InvoicePaymentMethodType,
} from '@maxio-com/advanced-billing-sdk';

const failedPaymentEvent: FailedPaymentEvent = {
  id: BigInt(186),
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
  eventType: InvoiceEventType.FailedPayment,
  eventData: {
    amountInCents: 220,
    appliedAmount: 194,
    paymentMethod: InvoicePaymentMethodType.Cash,
    transactionId: 78,
    memo: 'memo0',
  },
};
```

