
# Subscription Note

## Structure

`SubscriptionNote`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `body` | `string \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `sticky` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { SubscriptionNote } from '@maxio-com/advanced-billing-sdk';

const subscriptionNote: SubscriptionNote = {
  id: 18,
  body: 'body6',
  subscriptionId: 128,
  createdAt: '2016-03-13T12:52:32.123Z',
  updatedAt: '2016-03-13T12:52:32.123Z',
};
```

