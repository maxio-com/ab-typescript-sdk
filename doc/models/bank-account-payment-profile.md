
# Bank Account Payment Profile

## Structure

`BankAccountPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `currentVault` | `string \| undefined` | Optional | - |
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
| `verified` | `boolean \| undefined` | Optional | denotes whether a bank account has been verified by providing the amounts of two small deposits made into the account<br>**Default**: `false` |
| `siteGatewaySettingId` | `number \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "verified": false,
  "id": 188,
  "first_name": "first_name6",
  "last_name": "last_name4",
  "customer_id": 226,
  "current_vault": "current_vault6"
}
```

