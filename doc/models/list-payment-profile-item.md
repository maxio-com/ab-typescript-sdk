
# List Payment Profile Item

## Structure

`ListPaymentProfileItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `currentVault` | [`CurrentVault \| undefined`](../../doc/models/current-vault.md) | Optional | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `vaultToken` | `string \| undefined` | Optional | - |
| `billingAddress` | `string \| undefined` | Optional | - |
| `billingCity` | `string \| undefined` | Optional | - |
| `billingState` | `string \| undefined` | Optional | - |
| `billingZip` | `string \| undefined` | Optional | - |
| `billingCountry` | `string \| undefined` | Optional | - |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |
| `billingAddress2` | `string \| undefined` | Optional | - |
| `bankName` | `string \| undefined` | Optional | - |
| `maskedBankRoutingNumber` | `string \| undefined` | Optional | - |
| `maskedBankAccountNumber` | `string \| undefined` | Optional | - |
| `bankAccountType` | `string \| undefined` | Optional | - |
| `bankAccountHolderType` | `string \| undefined` | Optional | - |
| `paymentType` | `string \| undefined` | Optional | - |
| `siteGatewaySettingId` | `number \| undefined` | Optional | - |
| `gatewayHandle` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 56,
  "first_name": "first_name6",
  "last_name": "last_name4",
  "customer_id": 94,
  "current_vault": "bogus"
}
```

