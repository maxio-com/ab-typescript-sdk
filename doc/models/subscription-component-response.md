
# Subscription Component Response

## Structure

`SubscriptionComponentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `component` | [`SubscriptionComponent \| undefined`](../../doc/models/subscription-component.md) | Optional | - |

## Example

```ts
import {
  ComponentKind,
  SubscriptionComponentResponse,
} from '@maxio-com/advanced-billing-sdk';

const subscriptionComponentResponse: SubscriptionComponentResponse = {
  component: {
    id: 80,
    name: 'name8',
    kind: ComponentKind.EventBasedComponent,
    unitName: 'unit_name0',
    enabled: false,
  },
};
```

