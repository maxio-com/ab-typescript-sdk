
# Change Chargeback Status Event

## Structure

`ChangeChargebackStatusEvent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `timestamp` | `string` | Required | - |
| `invoice` | [`Invoice`](../../doc/models/invoice.md) | Required | - |
| `eventType` | [`InvoiceEventType`](../../doc/models/invoice-event-type.md) | Required | **Default**: `InvoiceEventType.ChangeChargebackStatus` |
| `eventData` | [`ChangeChargebackStatusEventData`](../../doc/models/change-chargeback-status-event-data.md) | Required | Example schema for an `change_chargeback_status` event |

## Example

```ts
import {
  ChangeChargebackStatusEvent,
  ChargebackStatus,
  InvoiceEventType,
} from '@maxio-com/advanced-billing-sdk';

const changeChargebackStatusEvent: ChangeChargebackStatusEvent = {
  id: BigInt(136),
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
  eventType: InvoiceEventType.ChangeChargebackStatus,
  eventData: {
    chargebackStatus: ChargebackStatus.Won,
  },
};
```

