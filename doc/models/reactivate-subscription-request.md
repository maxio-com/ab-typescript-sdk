
# Reactivate Subscription Request

## Structure

`ReactivateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `calendarBilling` | [`ReactivationBilling \| undefined`](../../doc/models/reactivation-billing.md) | Optional | These values are only applicable to subscriptions using calendar billing. |
| `includeTrial` | `boolean \| undefined` | Optional | If `true` is sent, the reactivated Subscription will include a trial if one is available. If `false` is sent, the trial period will be ignored. |
| `preserveBalance` | `boolean \| undefined` | Optional | If `true` is passed, the existing subscription balance will NOT be cleared/reset before adding the additional reactivation charges. |
| `couponCode` | `string \| undefined` | Optional | The coupon code to be applied during reactivation. |
| `useCreditsAndPrepayments` | `boolean \| undefined` | Optional | If true is sent, Advanced Billing will use service credits and prepayments upon reactivation. If false is sent, the service credits and prepayments will be ignored. |
| `resume` | [`ReactivateSubscriptionRequestResume \| undefined`](../../doc/models/containers/reactivate-subscription-request-resume.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import {
  ReactivateSubscriptionRequest,
  ReactivationCharge,
} from '@maxio-com/advanced-billing-sdk';

const reactivateSubscriptionRequest: ReactivateSubscriptionRequest = {
  calendarBilling: {
    reactivationCharge: ReactivationCharge.Prorated,
  },
  includeTrial: false,
  preserveBalance: false,
  couponCode: 'coupon_code2',
  useCreditsAndPrepayments: false,
};
```

