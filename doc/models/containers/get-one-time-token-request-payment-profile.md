
# Get One Time Token Request Payment Profile

## Class Name

`GetOneTimeTokenRequestPaymentProfile`

## Cases

| Type |
|  --- |
| [`GetOneTimeTokenPaymentProfile`](../../../doc/models/get-one-time-token-payment-profile.md) |
| [`GetOneTimeTokenBankAccountPaymentProfile`](../../../doc/models/get-one-time-token-bank-account-payment-profile.md) |

## GetOneTimeTokenPaymentProfile

### Initialization Code

#### Example

```ts
const value: GetOneTimeTokenRequestPaymentProfile = {
  firstName: 'first_name2',
  lastName: 'last_name0',
  maskedCardNumber: 'masked_card_number0',
  cardType: CardType.Routex,
  expirationMonth: 187.78,
  expirationYear: 164.44,
  currentVault: CreditCardVault.BraintreeBlue,
  vaultToken: 'vault_token4',
  billingAddress: 'billing_address4',
  billingCity: 'billing_city0',
  billingCountry: 'billing_country6',
  billingState: 'billing_state6',
  billingZip: 'billing_zip0',
  paymentType: 'payment_type2',
  disabled: false,
  siteGatewaySettingId: 232,
};
```

## GetOneTimeTokenBankAccountPaymentProfile

### Initialization Code

#### Example

```ts
const value: GetOneTimeTokenRequestPaymentProfile = {
  firstName: 'first_name8',
  lastName: 'last_name6',
  currentVault: BankAccountVault.Maxp,
  vaultToken: 'vault_token0',
  billingAddress: 'billing_address0',
  billingCity: 'billing_city4',
  billingCountry: 'billing_country2',
  billingState: 'billing_state8',
  billingZip: 'billing_zip6',
  bankName: 'bank_name6',
  maskedBankRoutingNumber: 'masked_bank_routing_number6',
  maskedBankAccountNumber: 'masked_bank_account_number0',
  bankAccountType: BankAccountType.Checking,
  bankAccountHolderType: BankAccountHolderType.Personal,
  paymentType: 'payment_type2',
  disabled: false,
  siteGatewaySettingId: 254,
};
```

