
# Subscription Group Bank Account

## Structure

`SubscriptionGroupBankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankName` | `string \| undefined` | Optional | (Required when creating a subscription with ACH or GoCardless) The name of the bank where the customer’s account resides |
| `bankAccountNumber` | `string \| undefined` | Optional | (Required when creating a subscription with ACH. Required when creating a subscription with GoCardless and bank_iban is blank) The customerʼs bank account number |
| `bankRoutingNumber` | `string \| undefined` | Optional | (Required when creating a subscription with ACH. Optional when creating a subscription with GoCardless). The routing number of the bank. It becomes bank_code while passing via GoCardless API |
| `bankIban` | `string \| undefined` | Optional | (Optional when creating a subscription with GoCardless). International Bank Account Number. Alternatively, local bank details can be provided |
| `bankBranchCode` | `string \| undefined` | Optional | (Optional when creating a subscription with GoCardless) Branch code. Alternatively, an IBAN can be provided |
| `bankAccountType` | [`BankAccountTypeEnum \| undefined`](../../doc/models/bank-account-type-enum.md) | Optional | **Default**: `BankAccountTypeEnum.Checking` |
| `bankAccountHolderType` | [`HolderTypeEnum \| undefined`](../../doc/models/holder-type-enum.md) | Optional | - |
| `paymentType` | `string \| undefined` | Optional | - |
| `billingAddress` | `string \| undefined` | Optional | - |
| `billingCity` | `string \| undefined` | Optional | - |
| `billingState` | `string \| undefined` | Optional | - |
| `billingZip` | `string \| undefined` | Optional | - |
| `billingCountry` | `string \| undefined` | Optional | - |
| `chargifyToken` | `string \| undefined` | Optional | - |
| `currentVault` | `string \| undefined` | Optional | - |
| `gatewayHandle` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "bank_account_type": "checking",
  "bank_name": "bank_name2",
  "bank_account_number": "bank_account_number4",
  "bank_routing_number": "bank_routing_number8",
  "bank_iban": "bank_iban6",
  "bank_branch_code": "bank_branch_code6"
}
```

