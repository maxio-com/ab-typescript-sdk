
# Paypal Payment Profile

## Structure

`PaypalPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The Chargify-assigned ID of the stored PayPal payment profile. |
| `firstName` | `string \| undefined` | Optional | The first name of the PayPal account holder |
| `lastName` | `string \| undefined` | Optional | The last name of the PayPal account holder |
| `customerId` | `number \| undefined` | Optional | The Chargify-assigned id for the customer record to which the PayPal account belongs |
| `currentVault` | [`PayPalVault \| undefined`](../../doc/models/pay-pal-vault.md) | Optional | The vault that stores the payment profile with the provided vault_token. |
| `vaultToken` | `string \| undefined` | Optional | The “token” provided by your vault storage for an already stored payment profile |
| `billingAddress` | `string \| null \| undefined` | Optional | The current billing street address for the PayPal account |
| `billingCity` | `string \| null \| undefined` | Optional | The current billing address city for the PayPal account |
| `billingState` | `string \| null \| undefined` | Optional | The current billing address state for the PayPal account |
| `billingZip` | `string \| null \| undefined` | Optional | The current billing address zip code for the PayPal account |
| `billingCountry` | `string \| null \| undefined` | Optional | The current billing address country for the PayPal account |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |
| `billingAddress2` | `string \| null \| undefined` | Optional | The current billing street address, second line, for the PayPal account |
| `paymentType` | [`PaymentType`](../../doc/models/payment-type.md) | Required | **Default**: `PaymentType.PaypalAccount` |
| `siteGatewaySettingId` | `number \| null \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |
| `paypalEmail` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "payment_type": "paypal_account",
  "id": 10,
  "first_name": "first_name0",
  "last_name": "last_name8",
  "customer_id": 48,
  "current_vault": "moduslink"
}
```

