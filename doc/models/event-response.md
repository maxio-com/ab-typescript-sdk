
# Event Response

## Structure

`EventResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | [`Event`](../../doc/models/event.md) | Required | - |

## Example

```ts
import { EventKey, EventResponse } from '@maxio-com/advanced-billing-sdk';

const eventResponse: EventResponse = {
  event: {
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
  },
};
```

