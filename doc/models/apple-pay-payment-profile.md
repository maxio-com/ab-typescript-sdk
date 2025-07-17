
# Apple Pay Payment Profile

## Structure

`ApplePayPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The Chargify-assigned ID of the Apple Pay payment profile. |
| `firstName` | `string \| undefined` | Optional | The first name of the Apple Pay account holder |
| `lastName` | `string \| undefined` | Optional | The last name of the Apple Pay account holder |
| `customerId` | `number \| undefined` | Optional | The Chargify-assigned id for the customer record to which the Apple Pay account belongs |
| `currentVault` | [`ApplePayVault \| undefined`](../../doc/models/apple-pay-vault.md) | Optional | The vault that stores the payment profile with the provided vault_token. |
| `vaultToken` | `string \| undefined` | Optional | The “token” provided by your vault storage for an already stored payment profile |
| `billingAddress` | `string \| null \| undefined` | Optional | The current billing street address for the Apple Pay account |
| `billingCity` | `string \| null \| undefined` | Optional | The current billing address city for the Apple Pay account |
| `billingState` | `string \| null \| undefined` | Optional | The current billing address state for the Apple Pay account |
| `billingZip` | `string \| null \| undefined` | Optional | The current billing address zip code for the Apple Pay account |
| `billingCountry` | `string \| null \| undefined` | Optional | The current billing address country for the Apple Pay account |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |
| `billingAddress2` | `string \| null \| undefined` | Optional | The current billing street address, second line, for the Apple Pay account |
| `paymentType` | [`PaymentType`](../../doc/models/payment-type.md) | Required | **Default**: `PaymentType.ApplePay` |
| `siteGatewaySettingId` | `number \| null \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | A timestamp indicating when this payment profile was created |
| `updatedAt` | `string \| undefined` | Optional | A timestamp indicating when this payment profile was last updated |

## Example (as JSON)

```json
{
  "payment_type": "apple_pay",
  "id": 60,
  "first_name": "first_name2",
  "last_name": "last_name0",
  "customer_id": 98,
  "current_vault": "braintree_blue"
}
```

