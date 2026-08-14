
# List Subscription Components Response

## Structure

`ListSubscriptionComponentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionsComponents` | [`SubscriptionComponent[]`](../../doc/models/subscription-component.md) | Required | - |

## Example

```ts
import {
  ComponentKind,
  ListSubscriptionComponentsResponse,
} from '@maxio-com/advanced-billing-sdk';

const listSubscriptionComponentsResponse: ListSubscriptionComponentsResponse = {
  subscriptionsComponents: [
    {
      id: 138,
      name: 'name2',
      kind: ComponentKind.MeteredComponent,
      unitName: 'unit_name4',
      enabled: false,
    }
  ],
};
```

