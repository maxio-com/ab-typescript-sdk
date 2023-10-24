
# Payment Profile

## Structure

`PaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The Chargify-assigned ID of the stored card. This value can be used as an input to payment_profile_id when creating a subscription, in order to re-use a stored payment profile for the same customer. |
| `firstName` | `string \| undefined` | Optional | The first name of the card holder. |
| `lastName` | `string \| undefined` | Optional | The last name of the card holder. |
| `maskedCardNumber` | `string \| undefined` | Optional | A string representation of the credit card number with all but the last 4 digits masked with X’s (i.e. ‘XXXX-XXXX-XXXX-1234’). |
| `cardType` | [`CardType \| undefined`](../../doc/models/card-type.md) | Optional | The type of card used. |
| `expirationMonth` | `number \| undefined` | Optional | An integer representing the expiration month of the card(1 – 12). |
| `expirationYear` | `number \| undefined` | Optional | An integer representing the 4-digit expiration year of the card(i.e. ‘2012’). |
| `customerId` | `number \| undefined` | Optional | The Chargify-assigned id for the customer record to which the card belongs. |
| `currentVault` | [`CurrentVault \| undefined`](../../doc/models/current-vault.md) | Optional | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `vaultToken` | `string \| null \| undefined` | Optional | The “token” provided by your vault storage for an already stored payment profile. |
| `billingAddress` | `string \| null \| undefined` | Optional | The current billing street address for the card. |
| `billingCity` | `string \| null \| undefined` | Optional | The current billing address city for the card. |
| `billingState` | `string \| null \| undefined` | Optional | The current billing address state for the card. |
| `billingZip` | `string \| null \| undefined` | Optional | The current billing address zip code for the card. |
| `billingCountry` | `string \| null \| undefined` | Optional | The current billing address country for the card. |
| `customerVaultToken` | `string \| null \| undefined` | Optional | (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token. |
| `billingAddress2` | `string \| null \| undefined` | Optional | The current billing street address, second line, for the card. |
| `paymentType` | [`PaymentType \| undefined`](../../doc/models/payment-type.md) | Optional | **Default**: `PaymentType.CreditCard` |
| `disabled` | `boolean \| undefined` | Optional | - |
| `chargifyToken` | `string \| undefined` | Optional | Token received after sending billing informations using chargify.js. |
| `siteGatewaySettingId` | `number \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | An identifier of connected gateway. |

## Example (as JSON)

```json
{
  "id": 10088716,
  "first_name": "Test",
  "last_name": "Subscription",
  "masked_card_number": "XXXX-XXXX-XXXX-1",
  "card_type": "bogus",
  "expiration_month": 1,
  "expiration_year": 2022,
  "customer_id": 14543792,
  "current_vault": "bogus",
  "vault_token": "1",
  "billing_address": "123 Montana Way",
  "billing_city": "Billings",
  "billing_state": "MT",
  "billing_zip": "59101",
  "billing_country": "US",
  "customer_vault_token": null,
  "billing_address_2": "",
  "payment_type": "credit_card",
  "site_gateway_setting_id": 1,
  "gateway_handle": null
}
```

