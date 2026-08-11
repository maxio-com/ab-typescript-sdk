
# Create Subscription Group

## Structure

`CreateSubscriptionGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscriptionId` | `number` | Required | - |
| `memberIds` | `number[] \| undefined` | Optional | - |

## Example

```ts
import { CreateSubscriptionGroup } from '@maxio-com/advanced-billing-sdk';

const createSubscriptionGroup: CreateSubscriptionGroup = {
  subscriptionId: 204,
  memberIds: [
    48
  ],
};
```

