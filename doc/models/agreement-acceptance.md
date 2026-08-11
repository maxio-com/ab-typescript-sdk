
# Agreement Acceptance

Required when creating a subscription with Maxio Payments.

## Structure

`AgreementAcceptance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string \| undefined` | Optional | Required when providing agreement acceptance params. |
| `termsUrl` | `string \| undefined` | Optional | Required when creating a subscription with Maxio Payments. Either terms_url or privacy_policy_url is required when providing agreement_acceptance params. |
| `privacyPolicyUrl` | `string \| undefined` | Optional | - |
| `returnRefundPolicyUrl` | `string \| undefined` | Optional | - |
| `deliveryPolicyUrl` | `string \| undefined` | Optional | - |
| `secureCheckoutPolicyUrl` | `string \| undefined` | Optional | - |

## Example

```ts
import { AgreementAcceptance } from '@maxio-com/advanced-billing-sdk';

const agreementAcceptance: AgreementAcceptance = {
  ipAddress: 'ip_address8',
  termsUrl: 'terms_url6',
  privacyPolicyUrl: 'privacy_policy_url4',
  returnRefundPolicyUrl: 'return_refund_policy_url0',
  deliveryPolicyUrl: 'delivery_policy_url4',
};
```

