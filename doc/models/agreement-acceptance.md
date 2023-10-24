
# Agreement Acceptance

Required when creating a subscription with Maxio Payments.

## Structure

`AgreementAcceptance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ipAddress` | `string \| undefined` | Optional | Required when providing agreement acceptance params. |
| `termsUrl` | `string \| undefined` | Optional | Required when creating a subscription with Maxio Payments. Either terms_url or provacy_policy_url required when providing agreement_acceptance params. |
| `privacyPolicyUrl` | `string \| undefined` | Optional | - |
| `returnRefundPolicyUrl` | `string \| undefined` | Optional | - |
| `deliveryPolicyUrl` | `string \| undefined` | Optional | - |
| `secureCheckoutPolicyUrl` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "ip_address": "ip_address2",
  "terms_url": "terms_url0",
  "privacy_policy_url": "privacy_policy_url0",
  "return_refund_policy_url": "return_refund_policy_url4",
  "delivery_policy_url": "delivery_policy_url8"
}
```

