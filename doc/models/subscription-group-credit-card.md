
# Subscription Group Credit Card

## Structure

`SubscriptionGroupCreditCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullNumber` | [`SubscriptionGroupCreditCardFullNumber \| undefined`](../../doc/models/containers/subscription-group-credit-card-full-number.md) | Optional | This is a container for one-of cases. |
| `expirationMonth` | [`SubscriptionGroupCreditCardExpirationMonth \| undefined`](../../doc/models/containers/subscription-group-credit-card-expiration-month.md) | Optional | This is a container for one-of cases. |
| `expirationYear` | [`SubscriptionGroupCreditCardExpirationYear \| undefined`](../../doc/models/containers/subscription-group-credit-card-expiration-year.md) | Optional | This is a container for one-of cases. |
| `chargifyToken` | `string \| undefined` | Optional | - |
| `vaultToken` | `string \| undefined` | Optional | - |
| `currentVault` | [`CurrentVault \| undefined`](../../doc/models/current-vault.md) | Optional | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `gatewayHandle` | `string \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `billingAddress` | `string \| undefined` | Optional | - |
| `billingAddress2` | `string \| undefined` | Optional | - |
| `billingCity` | `string \| undefined` | Optional | - |
| `billingState` | `string \| undefined` | Optional | - |
| `billingZip` | `string \| undefined` | Optional | - |
| `billingCountry` | `string \| undefined` | Optional | - |
| `lastFour` | `string \| undefined` | Optional | - |
| `cardType` | `string \| undefined` | Optional | - |
| `customerVaultToken` | `string \| undefined` | Optional | - |
| `cvv` | `string \| undefined` | Optional | - |
| `paymentType` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "full_number": 4111111111111111,
  "chargify_token": "tok_592nf92ng0sjd4300p",
  "card_type": "visa",
  "expiration_month": "String1",
  "expiration_year": "String5",
  "vault_token": "vault_token6"
}
```

