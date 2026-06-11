
# Payment Profile 2

## Class Name

`PaymentProfile2`

## Cases

| Type |
|  --- |
| [`ApplePayPaymentProfile`](../../../doc/models/apple-pay-payment-profile.md) |
| [`BankAccountPaymentProfile`](../../../doc/models/bank-account-payment-profile.md) |
| [`CreditCardPaymentProfile`](../../../doc/models/credit-card-payment-profile.md) |
| [`PaypalPaymentProfile`](../../../doc/models/paypal-payment-profile.md) |

## ApplePayPaymentProfile

### Initialization Code

#### Example

```ts
const value: PaymentProfile2 = {
  paymentType: PaymentType.ApplePay,
};
```

## BankAccountPaymentProfile

### Initialization Code

#### Example

```ts
const value: PaymentProfile2 = {
  paymentType: PaymentType.BankAccount,
  verified: false,
};
```

## CreditCardPaymentProfile

### Initialization Code

#### Example

```ts
const value: PaymentProfile2 = {
  paymentType: PaymentType.CreditCard,
  id: 10088716,
  firstName: 'Test',
  lastName: 'Subscription',
  maskedCardNumber: 'XXXX-XXXX-XXXX-1',
  cardType: CardType.Bogus,
  expirationMonth: 1,
  expirationYear: 2022,
  customerId: 14543792,
  currentVault: CreditCardVault.Bogus,
  vaultToken: '1',
  billingAddress: '123 Montana Way',
  billingCity: 'Billings',
  billingState: 'MT',
  billingZip: '59101',
  billingCountry: 'US',
  customerVaultToken: 'customer_vault_token2',
  billingAddress2: '',
  siteGatewaySettingId: 1,
  gatewayHandle: 'gateway_handle8',
};
```

## PaypalPaymentProfile

### Initialization Code

#### Example

```ts
const value: PaymentProfile2 = {
  paymentType: PaymentType.PaypalAccount,
};
```

