
# Updated Payment Profile

## Structure

`UpdatedPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `cardType` | `string \| undefined` | Optional | - |
| `expirationMonth` | `number \| undefined` | Optional | - |
| `expirationYear` | `number \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `currentVault` | [`CurrentVault \| undefined`](../../doc/models/current-vault.md) | Optional | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `vaultToken` | `string \| undefined` | Optional | - |
| `billingAddress` | `string \| undefined` | Optional | - |
| `billingAddress2` | `string \| undefined` | Optional | - |
| `billingCity` | `string \| undefined` | Optional | - |
| `billingState` | `string \| undefined` | Optional | - |
| `billingZip` | `string \| undefined` | Optional | - |
| `billingCountry` | `string \| undefined` | Optional | - |
| `paymentType` | `string \| undefined` | Optional | - |
| `siteGatewaySettingId` | `number \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |
| `maskedCardNumber` | `string \| undefined` | Optional | - |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 232,
  "first_name": "first_name0",
  "last_name": "last_name8",
  "card_type": "card_type4",
  "expiration_month": 150
}
```

