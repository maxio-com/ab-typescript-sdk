
# Subscription Bank Account

## Structure

`SubscriptionBankAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountHolderType` | `string \| undefined` | Optional | Defaults to personal |
| `bankAccountType` | `string \| undefined` | Optional | Defaults to checking |
| `bankName` | `string \| undefined` | Optional | The bank where the account resides |
| `billingAddress` | `string \| undefined` | Optional | The current billing street address for the bank account |
| `billingAddress2` | `string \| undefined` | Optional | The current billing street address, second line, for the bank account |
| `billingCity` | `string \| undefined` | Optional | The current billing address city for the bank account |
| `billingState` | `string \| undefined` | Optional | The current billing address state for the bank account |
| `billingZip` | `string \| undefined` | Optional | The current billing address zip code for the bank account |
| `billingCountry` | `string \| undefined` | Optional | The current billing address country for the bank account |
| `currentVault` | [`BankAccountVault \| undefined`](../../doc/models/bank-account-vault.md) | Optional | The vault that stores the payment profile with the provided vault_token. |
| `customerId` | `number \| undefined` | Optional | The Chargify-assigned id for the customer record to which the bank account belongs |
| `customerVaultToken` | `string \| undefined` | Optional | (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token |
| `firstName` | `string \| undefined` | Optional | The first name of the bank account holder |
| `lastName` | `string \| undefined` | Optional | The last name of the bank account holder |
| `id` | `number \| undefined` | Optional | The Chargify-assigned ID of the stored bank account. This value can be used as an input to payment_profile_id when creating a subscription, in order to re-use a stored payment profile for the same customer |
| `maskedBankAccountNumber` | `string \| undefined` | Optional | A string representation of the stored bank account number with all but the last 4 digits marked with X’s (i.e. ‘XXXXXXX1111’) |
| `maskedBankRoutingNumber` | `string \| undefined` | Optional | A string representation of the stored bank routing number with all but the last 4 digits marked with X’s (i.e. ‘XXXXXXX1111’). payment_type will be bank_account |
| `vaultToken` | `string \| undefined` | Optional | The “token” provided by your vault storage for an already stored payment profile |
| `chargifyToken` | `string \| undefined` | Optional | Token received after sending billing informations using chargify.js. This token will only be received if passed as a sole attribute of credit_card_attributes (i.e. tok_9g6hw85pnpt6knmskpwp4ttt) |
| `siteGatewaySettingId` | `number \| undefined` | Optional | - |
| `gatewayHandle` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "bank_account_holder_type": "bank_account_holder_type4",
  "bank_account_type": "bank_account_type4",
  "bank_name": "bank_name8",
  "billing_address": "billing_address8",
  "billing_address_2": "billing_address_28"
}
```

