
# Create Payment Profile

## Structure

`CreatePaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargifyToken` | `string \| undefined` | Optional | Token received after sending billing informations using chargify.js. |
| `id` | `number \| undefined` | Optional | - |
| `paymentType` | [`PaymentType \| undefined`](../../doc/models/payment-type.md) | Optional | **Default**: `PaymentType.CreditCard` |
| `firstName` | `string \| undefined` | Optional | First name on card or bank account. If omitted, the first_name from customer attributes will be used. |
| `lastName` | `string \| undefined` | Optional | Last name on card or bank account. If omitted, the last_name from customer attributes will be used. |
| `maskedCardNumber` | `string \| undefined` | Optional | - |
| `fullNumber` | `string \| undefined` | Optional | The full credit card number |
| `cardType` | [`CardType \| undefined`](../../doc/models/card-type.md) | Optional | The type of card used. |
| `expirationMonth` | [`CreatePaymentProfileExpirationMonth \| undefined`](../../doc/models/containers/create-payment-profile-expiration-month.md) | Optional | This is a container for one-of cases. |
| `expirationYear` | [`CreatePaymentProfileExpirationYear \| undefined`](../../doc/models/containers/create-payment-profile-expiration-year.md) | Optional | This is a container for one-of cases. |
| `billingAddress` | `string \| undefined` | Optional | The credit card or bank account billing street address (i.e. 123 Main St.). This value is merely passed through to the payment gateway. |
| `billingAddress2` | `string \| null \| undefined` | Optional | Second line of the customer’s billing address i.e. Apt. 100 |
| `billingCity` | `string \| undefined` | Optional | The credit card or bank account billing address city (i.e. “Boston”). This value is merely passed through to the payment gateway. |
| `billingState` | `string \| undefined` | Optional | The credit card or bank account billing address state (i.e. MA). This value is merely passed through to the payment gateway. This must conform to the [ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) in order to be valid for tax locale purposes. |
| `billingCountry` | `string \| undefined` | Optional | The credit card or bank account billing address country, required in [ISO_3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (i.e. “US”). This value is merely passed through to the payment gateway. Some gateways require country codes in a specific format. Please check your gateway’s documentation. If creating an ACH subscription, only US is supported at this time. |
| `billingZip` | `string \| undefined` | Optional | The credit card or bank account billing address zip code (i.e. 12345). This value is merely passed through to the payment gateway. |
| `currentVault` | [`CurrentVault \| undefined`](../../doc/models/current-vault.md) | Optional | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `vaultToken` | `string \| undefined` | Optional | The “token” provided by your vault storage for an already stored payment profile |
| `customerVaultToken` | `string \| undefined` | Optional | (only for Authorize.Net CIM storage or Square) The customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token |
| `customerId` | `number \| undefined` | Optional | (Required when creating a new payment profile) The Chargify customer id. |
| `paypalEmail` | `string \| undefined` | Optional | used by merchants that implemented BraintreeBlue javaScript libraries on their own. We recommend using Chargify.js instead. |
| `paymentMethodNonce` | `string \| undefined` | Optional | used by merchants that implemented BraintreeBlue javaScript libraries on their own. We recommend using Chargify.js instead. |
| `gatewayHandle` | `string \| undefined` | Optional | This attribute is only available if MultiGateway feature is enabled for your Site. This feature is in the Private Beta currently. gateway_handle is used to directly select a gateway where a payment profile will be stored in. Every connected gateway must have a unique gateway handle specified. Read [Multigateway description](https://chargify.zendesk.com/hc/en-us/articles/4407761759643#connecting-with-multiple-gateways) to learn more about new concepts that MultiGateway introduces and the default behavior when this attribute is not passed. |
| `cvv` | `string \| undefined` | Optional | The 3- or 4-digit Card Verification Value. This value is merely passed through to the payment gateway. |
| `bankName` | `string \| undefined` | Optional | (Required when creating with ACH or GoCardless, optional with Stripe Direct Debit). The name of the bank where the customerʼs account resides |
| `bankIban` | `string \| undefined` | Optional | (Optional when creating with GoCardless, required with Stripe Direct Debit). International Bank Account Number. Alternatively, local bank details can be provided |
| `bankRoutingNumber` | `string \| undefined` | Optional | (Required when creating with ACH. Optional when creating a subscription with GoCardless). The routing number of the bank. It becomes bank_code while passing via GoCardless API |
| `bankAccountNumber` | `string \| undefined` | Optional | (Required when creating with ACH, GoCardless, Stripe BECS Direct Debit and bank_iban is blank) The customerʼs bank account number |
| `bankBranchCode` | `string \| undefined` | Optional | (Optional when creating with GoCardless, required with Stripe BECS Direct Debit) Branch code. Alternatively, an IBAN can be provided |
| `bankAccountType` | `string \| undefined` | Optional | - |
| `bankAccountHolderType` | `string \| undefined` | Optional | - |
| `lastFour` | `string \| undefined` | Optional | (Optional) Used for creating subscription with payment profile imported using vault_token, for proper display in Advanced Billing UI |

## Example (as JSON)

```json
{
  "chargify_token": "tok_9g6hw85pnpt6knmskpwp4ttt",
  "payment_type": "credit_card",
  "full_number": "5424000000000015",
  "id": 76,
  "first_name": "first_name8",
  "last_name": "last_name6"
}
```

