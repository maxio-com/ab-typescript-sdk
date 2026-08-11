
# Apply Payment Event

## Structure

`ApplyPaymentEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.ApplyPayment` |
| `eventData` | [`ApplyPaymentEventData`](../../doc/models/apply-payment-event-data.md) | Required | Example schema for an `apply_payment` event |

## Example

```ts
import {
  ApplyPaymentEvent,
  InvoiceConsolidationLevel,
  InvoiceEventPaymentMethod,
  InvoiceEventType,
} from '@maxio-com/advanced-billing-sdk';

const applyPaymentEvent: ApplyPaymentEvent = {
  id: BigInt(112),
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
  eventType: InvoiceEventType.ApplyPayment,
  eventData: {
    consolidationLevel: InvoiceConsolidationLevel.Child,
    memo: 'memo0',
    originalAmount: 'original_amount0',
    appliedAmount: 'applied_amount2',
    transactionTime: '2016-03-13T12:52:32.123Z',
    paymentMethod: {
      type: InvoiceEventPaymentMethod.ApplePay,
    },
    transactionId: 78,
    parentInvoiceNumber: 36,
    remainingPrepaymentAmount: 'remaining_prepayment_amount6',
    prepayment: false,
    external: false,
  },
};
```

