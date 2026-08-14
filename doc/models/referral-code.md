
# Referral Code

## Structure

`ReferralCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `siteId` | `number \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `code` | `string \| undefined` | Optional | - |

## Example

```ts
import { ReferralCode } from '@maxio-com/advanced-billing-sdk';

const referralCode: ReferralCode = {
  id: 186,
  siteId: 112,
  subscriptionId: 40,
  code: 'code6',
};
```

