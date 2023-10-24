
# Created Payment Profile

## Structure

`CreatedPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `maskedCardNumber` | `string \| null \| undefined` | Optional | - |
| `cardType` | `string \| undefined` | Optional | - |
| `expirationMonth` | `number \| undefined` | Optional | - |
| `expirationYear` | `number \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `currentVault` | [`CurrentVault \| undefined`](../../doc/models/current-vault.md) | Optional | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `vaultToken` | `string \| undefined` | Optional | - |
| `billingAddress` | `string \| undefined` | Optional | - |
| `billingCity` | `string \| undefined` | Optional | - |
| `billingState` | `string \| undefined` | Optional | - |
| `billingZip` | `string \| undefined` | Optional | - |
| `billingCountry` | `string \| undefined` | Optional | - |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |
| `billingAddress2` | `string \| null \| undefined` | Optional | - |
| `paymentType` | `string \| undefined` | Optional | - |
| `bankName` | `string \| undefined` | Optional | - |
| `maskedBankRoutingNumber` | `string \| undefined` | Optional | - |
| `maskedBankAccountNumber` | `string \| undefined` | Optional | - |
| `bankAccountType` | `string \| undefined` | Optional | - |
| `bankAccountHolderType` | `string \| undefined` | Optional | - |
| `verified` | `boolean \| undefined` | Optional | - |
| `siteGatewaySettingId` | `number \| undefined` | Optional | - |
| `gatewayHandle` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 14,
  "first_name": "first_name0",
  "last_name": "last_name8",
  "masked_card_number": "masked_card_number8",
  "card_type": "card_type4"
}
```

