
# Get One Time Token Bank Account Payment Profile

## Structure

`GetOneTimeTokenBankAccountPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `firstName` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `lastName` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `customerId` | `string \| null \| undefined` | Optional | - |
| `currentVault` | [`BankAccountVault`](../../doc/models/bank-account-vault.md) | Required | The vault that stores the payment profile with the provided vault_token. Use `bogus` for testing. |
| `vaultToken` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingAddress` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingAddress2` | `string \| undefined` | Optional | - |
| `billingCity` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingCountry` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingState` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingZip` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `bankName` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `maskedBankRoutingNumber` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `maskedBankAccountNumber` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `bankAccountType` | [`BankAccountType`](../../doc/models/bank-account-type.md) | Required | Defaults to checking |
| `bankAccountHolderType` | [`BankAccountHolderType`](../../doc/models/bank-account-holder-type.md) | Required | Defaults to personal |
| `paymentType` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `disabled` | `boolean` | Required | - |
| `siteGatewaySettingId` | `number` | Required | - |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |
| `verified` | `boolean \| null \| undefined` | Optional | - |

## Example

```ts
import {
  BankAccountHolderType,
  BankAccountType,
  BankAccountVault,
  GetOneTimeTokenBankAccountPaymentProfile,
} from '@maxio-com/advanced-billing-sdk';

const getOneTimeTokenBankAccountPaymentProfile: GetOneTimeTokenBankAccountPaymentProfile = {
  firstName: 'first_name0',
  lastName: 'last_name8',
  currentVault: BankAccountVault.Maxp,
  vaultToken: 'vault_token2',
  billingAddress: 'billing_address2',
  billingCity: 'billing_city8',
  billingCountry: 'billing_country4',
  billingState: 'billing_state6',
  billingZip: 'billing_zip8',
  bankName: 'bank_name4',
  maskedBankRoutingNumber: 'masked_bank_routing_number4',
  maskedBankAccountNumber: 'masked_bank_account_number2',
  bankAccountType: BankAccountType.Checking,
  bankAccountHolderType: BankAccountHolderType.Personal,
  paymentType: 'payment_type0',
  disabled: false,
  siteGatewaySettingId: 246,
  id: 'id0',
  customerId: 'customer_id8',
  billingAddress2: 'billing_address_22',
  customerVaultToken: 'customer_vault_token8',
  gatewayHandle: 'gateway_handle2',
};
```

