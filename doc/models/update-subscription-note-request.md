
# Update Subscription Note Request

Updatable fields for Subscription Note

## Structure

`UpdateSubscriptionNoteRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `note` | [`UpdateSubscriptionNote`](../../doc/models/update-subscription-note.md) | Required | Updatable fields for Subscription Note |

## Example

```ts
import {
  UpdateSubscriptionNoteRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateSubscriptionNoteRequest: UpdateSubscriptionNoteRequest = {
  note: {
    body: 'body0',
    sticky: false,
  },
};
```

