
# Referral Validation Response

## Structure

`ReferralValidationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referralCode` | [`ReferralCode \| undefined`](../../doc/models/referral-code.md) | Optional | - |

## Example

```ts
import { ReferralValidationResponse } from '@maxio-com/advanced-billing-sdk';

const referralValidationResponse: ReferralValidationResponse = {
  referralCode: {
    id: 46,
    siteId: 228,
    subscriptionId: 156,
    code: 'code0',
  },
};
```

