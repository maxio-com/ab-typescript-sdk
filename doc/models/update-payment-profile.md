
# Update Payment Profile

## Structure

`UpdatePaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | The first name of the card holder. |
| `lastName` | `string \| undefined` | Optional | The last name of the card holder. |
| `fullNumber` | `string \| undefined` | Optional | The full credit card number |
| `cardType` | [`CardType \| undefined`](../../doc/models/card-type.md) | Optional | The type of card used. |
| `expirationMonth` | `string \| undefined` | Optional | (Optional when performing an Import via vault_token, required otherwise) The 1- or 2-digit credit card expiration month, as an integer or string, e.g., 5 |
| `expirationYear` | `string \| undefined` | Optional | (Optional when performing an Import via vault_token, required otherwise) The 4-digit credit card expiration year, as an integer or string, e.g., 2012 |
| `currentVault` | [`AllVaults \| undefined`](../../doc/models/all-vaults.md) | Optional | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `billingAddress` | `string \| undefined` | Optional | The credit card or bank account billing street address (e.g., 123 Main St.). This value is merely passed through to the payment gateway. |
| `billingCity` | `string \| undefined` | Optional | The credit card or bank account billing address city (e.g., “Boston”). This value is merely passed through to the payment gateway. |
| `billingState` | `string \| undefined` | Optional | The credit card or bank account billing address state (e.g., MA). This value is merely passed through to the payment gateway. This must conform to the [ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) in order to be valid for tax locale purposes. |
| `billingZip` | `string \| undefined` | Optional | The credit card or bank account billing address zip code (e.g., 12345). This value is merely passed through to the payment gateway. |
| `billingCountry` | `string \| undefined` | Optional | The credit card or bank account billing address country, required in [ISO_3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (e.g., “US”). This value is merely passed through to the payment gateway. Some gateways require country codes in a specific format. Check your gateway’s documentation. If creating an ACH subscription, only US is supported at this time. |
| `billingAddress2` | `string \| null \| undefined` | Optional | Second line of the customer’s billing address, e.g., Apt. 100 |

## Example

```ts
import {
  CardType,
  UpdatePaymentProfile,
} from '@maxio-com/advanced-billing-sdk';

const updatePaymentProfile: UpdatePaymentProfile = {
  firstName: 'first_name6',
  lastName: 'last_name4',
  fullNumber: '5424000000000015',
  cardType: CardType.AmericanExpress,
  expirationMonth: 'expiration_month8',
};
```

