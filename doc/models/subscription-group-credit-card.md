
# Subscription Group Credit Card

## Structure

`SubscriptionGroupCreditCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargifyToken` | `string \| undefined` | Optional | - |
| `vaultToken` | `string \| undefined` | Optional | - |
| `currentVault` | [`CreditCardVault \| undefined`](../../doc/models/credit-card-vault.md) | Optional | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `gatewayHandle` | `string \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `billingAddress` | `string \| undefined` | Optional | - |
| `billingAddress2` | `string \| undefined` | Optional | - |
| `billingCity` | `string \| undefined` | Optional | - |
| `billingState` | `string \| undefined` | Optional | - |
| `billingZip` | `string \| undefined` | Optional | - |
| `billingCountry` | `string \| undefined` | Optional | - |
| `fullNumber` | [`SubscriptionGroupCreditCardFullNumber \| undefined`](../../doc/models/containers/subscription-group-credit-card-full-number.md) | Optional | This is a container for one-of cases. |
| `expirationMonth` | [`SubscriptionGroupCreditCardExpirationMonth \| undefined`](../../doc/models/containers/subscription-group-credit-card-expiration-month.md) | Optional | This is a container for one-of cases. |
| `expirationYear` | [`SubscriptionGroupCreditCardExpirationYear \| undefined`](../../doc/models/containers/subscription-group-credit-card-expiration-year.md) | Optional | This is a container for one-of cases. |
| `lastFour` | `string \| undefined` | Optional | - |
| `cardType` | [`CardType \| undefined`](../../doc/models/card-type.md) | Optional | The type of card used. |
| `customerVaultToken` | `string \| undefined` | Optional | - |
| `cvv` | `string \| undefined` | Optional | - |
| `paymentType` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "chargify_token": "tok_592nf92ng0sjd4300p",
  "full_number": 4111111111111111,
  "vault_token": "vault_token6",
  "current_vault": "braintree_blue",
  "gateway_handle": "gateway_handle6",
  "first_name": "first_name4"
}
```

