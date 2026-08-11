
# Update Subscription Note

Updatable fields for Subscription Note

## Structure

`UpdateSubscriptionNote`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `string` | Required | - |
| `sticky` | `boolean` | Required | - |

## Example

```ts
import { UpdateSubscriptionNote } from '@maxio-com/advanced-billing-sdk';

const updateSubscriptionNote: UpdateSubscriptionNote = {
  body: 'body2',
  sticky: false,
};
```

