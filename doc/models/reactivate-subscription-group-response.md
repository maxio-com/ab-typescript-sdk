
# Reactivate Subscription Group Response

## Structure

`ReactivateSubscriptionGroupResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `scheme` | `number \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `paymentProfileId` | `number \| undefined` | Optional | - |
| `subscriptionIds` | `number[] \| undefined` | Optional | - |
| `primarySubscriptionId` | `number \| undefined` | Optional | - |
| `nextAssessmentAt` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `cancelAtEndOfPeriod` | `boolean \| undefined` | Optional | - |

## Example

```ts
import {
  ReactivateSubscriptionGroupResponse,
} from '@maxio-com/advanced-billing-sdk';

const reactivateSubscriptionGroupResponse: ReactivateSubscriptionGroupResponse = {
  uid: 'uid0',
  scheme: 10,
  customerId: 30,
  paymentProfileId: 62,
  subscriptionIds: [
    140,
    141,
    142
  ],
};
```

