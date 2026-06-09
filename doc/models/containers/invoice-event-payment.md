
# Invoice Event Payment

A nested data structure detailing the method of payment

## Class Name

`InvoiceEventPayment`

## Cases

| Type |
|  --- |
| [`PaymentMethodApplePay`](../../../doc/models/payment-method-apple-pay.md) |
| [`PaymentMethodBankAccount`](../../../doc/models/payment-method-bank-account.md) |
| [`PaymentMethodCreditCard`](../../../doc/models/payment-method-credit-card.md) |
| [`PaymentMethodExternal`](../../../doc/models/payment-method-external.md) |
| [`PaymentMethodPaypal`](../../../doc/models/payment-method-paypal.md) |

## PaymentMethodApplePay

### Initialization Code

#### Example

```ts
const value: InvoiceEventPayment = {
  type: InvoiceEventPaymentMethod.ApplePay,
};
```

## PaymentMethodBankAccount

### Initialization Code

#### Example

```ts
const value: InvoiceEventPayment = {
  maskedAccountNumber: 'masked_account_number2',
  maskedRoutingNumber: 'masked_routing_number2',
  type: InvoiceEventPaymentMethod.BankAccount,
};
```

## PaymentMethodCreditCard

### Initialization Code

#### Example

```ts
const value: InvoiceEventPayment = {
  cardBrand: 'card_brand4',
  maskedCardNumber: 'masked_card_number0',
  type: InvoiceEventPaymentMethod.CreditCard,
};
```

## PaymentMethodExternal

### Initialization Code

#### Example

```ts
const value: InvoiceEventPayment = {
  details: 'details4',
  kind: 'kind2',
  memo: 'memo8',
  type: InvoiceEventPaymentMethod.External,
};
```

## PaymentMethodPaypal

### Initialization Code

#### Example

```ts
const value: InvoiceEventPayment = {
  email: 'email2',
  type: InvoiceEventPaymentMethod.PaypalAccount,
};
```

