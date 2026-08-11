
# Cancel Grouped Subscriptions Request

## Structure

`CancelGroupedSubscriptionsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeUnbilledUsage` | `boolean \| undefined` | Optional | - |

## Example

```ts
import {
  CancelGroupedSubscriptionsRequest,
} from '@maxio-com/advanced-billing-sdk';

const cancelGroupedSubscriptionsRequest: CancelGroupedSubscriptionsRequest = {
  chargeUnbilledUsage: false,
};
```

