
# Event

## Structure

`Event`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint` | Required | - |
| `key` | [`EventKey`](../../doc/models/event-key.md) | Required | - |
| `message` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `subscriptionId` | `number \| null` | Required | - |
| `customerId` | `number \| null` | Required | - |
| `createdAt` | `string` | Required | - |
| `eventSpecificData` | [`EventEventSpecificData \| null`](../../doc/models/containers/event-event-specific-data.md) | Required | This is a container for one-of cases. |

## Example

```ts
import { Event, EventKey } from '@maxio-com/advanced-billing-sdk';

const event: Event = {
  id: BigInt(242),
  key: EventKey.SubscriptionRemovedFromGroup,
  message: 'message0',
  subscriptionId: 96,
  customerId: 24,
  createdAt: '2016-03-13T12:52:32.123Z',
  eventSpecificData: {
    previousProductId: 126,
    newProductId: 12,
    previousProductPricePointId: 250,
    newProductPricePointId: 244,
    effectiveAt: '2016-03-13T12:52:32.123Z',
  },
};
```

