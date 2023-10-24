
# Get One Time Token Payment Profile

## Structure

`GetOneTimeTokenPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `firstName` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `lastName` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `maskedCardNumber` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `cardType` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `expirationMonth` | `number` | Required | - |
| `expirationYear` | `number` | Required | - |
| `customerId` | `string \| null \| undefined` | Optional | - |
| `currentVault` | [`CurrentVault`](../../doc/models/current-vault.md) | Required | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `vaultToken` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingAddress` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingAddress2` | `string \| undefined` | Optional | - |
| `billingCity` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingCountry` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingState` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingZip` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `paymentType` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `disabled` | `boolean` | Required | - |
| `siteGatewaySettingId` | `number` | Required | - |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": "id2",
  "first_name": "first_name2",
  "last_name": "last_name0",
  "masked_card_number": "masked_card_number0",
  "card_type": "card_type8",
  "expiration_month": 187.78,
  "expiration_year": 164.44,
  "customer_id": "customer_id0",
  "current_vault": "firstdata",
  "vault_token": "vault_token4",
  "billing_address": "billing_address4",
  "billing_address_2": "billing_address_24",
  "billing_city": "billing_city0",
  "billing_country": "billing_country6",
  "billing_state": "billing_state6",
  "billing_zip": "billing_zip0",
  "payment_type": "payment_type2",
  "disabled": false,
  "site_gateway_setting_id": 232,
  "customer_vault_token": "customer_vault_token0",
  "gateway_handle": "gateway_handle4"
}
```

