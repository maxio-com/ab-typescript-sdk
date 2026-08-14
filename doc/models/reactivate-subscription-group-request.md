
# Reactivate Subscription Group Request

## Structure

`ReactivateSubscriptionGroupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `resume` | `boolean \| undefined` | Optional | - |
| `resumeMembers` | `boolean \| undefined` | Optional | - |

## Example

```ts
import {
  ReactivateSubscriptionGroupRequest,
} from '@maxio-com/advanced-billing-sdk';

const reactivateSubscriptionGroupRequest: ReactivateSubscriptionGroupRequest = {
  resume: false,
  resumeMembers: false,
};
```

