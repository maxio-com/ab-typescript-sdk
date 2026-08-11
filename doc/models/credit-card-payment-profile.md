
# Credit Card Payment Profile

## Structure

`CreditCardPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The Chargify-assigned ID of the stored card. This value can be used as an input to payment_profile_id when creating a subscription, in order to re-use a stored payment profile for the same customer. |
| `firstName` | `string \| undefined` | Optional | The first name of the card holder. |
| `lastName` | `string \| undefined` | Optional | The last name of the card holder. |
| `maskedCardNumber` | `string \| undefined` | Optional | A string representation of the credit card number with all but the last 4 digits masked with X’s (e.g., ‘XXXX-XXXX-XXXX-1234’). |
| `cardType` | [`CardType \| null \| undefined`](../../doc/models/card-type.md) | Optional | The type of card used. |
| `expirationMonth` | `number \| undefined` | Optional | An integer representing the expiration month of the card(1 – 12). |
| `expirationYear` | `number \| undefined` | Optional | An integer representing the 4-digit expiration year of the card(e.g., ‘2012’). |
| `customerId` | `number \| undefined` | Optional | The Chargify-assigned id for the customer record to which the card belongs. |
| `currentVault` | [`CreditCardVault \| undefined`](../../doc/models/credit-card-vault.md) | Optional | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `vaultToken` | `string \| null \| undefined` | Optional | The “token” provided by your vault storage for an already stored payment profile. |
| `billingAddress` | `string \| null \| undefined` | Optional | The current billing street address for the card. |
| `billingCity` | `string \| null \| undefined` | Optional | The current billing address city for the card. |
| `billingState` | `string \| null \| undefined` | Optional | The current billing address state for the card. |
| `billingZip` | `string \| null \| undefined` | Optional | The current billing address zip code for the card. |
| `billingCountry` | `string \| null \| undefined` | Optional | The current billing address country for the card. |
| `customerVaultToken` | `string \| null \| undefined` | Optional | (only for Authorize.Net CIM storage): the customerProfileId for the owner of the customerPaymentProfileId provided as the vault_token. |
| `billingAddress2` | `string \| null \| undefined` | Optional | The current billing street address, second line, for the card. |
| `paymentType` | [`PaymentType`](../../doc/models/payment-type.md) | Required | **Default**: `PaymentType.CreditCard` |
| `disabled` | `boolean \| undefined` | Optional | - |
| `chargifyToken` | `string \| undefined` | Optional | Token received after sending billing information using Maxio.js (formerly Chargify.js). This token will only be received if passed as a sole attribute of credit_card_attributes (e.g., tok_9g6hw85pnpt6knmskpwp4ttt). |
| `siteGatewaySettingId` | `number \| null \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | An identifier of connected gateway. |
| `createdAt` | `string \| undefined` | Optional | A timestamp indicating when this payment profile was created |
| `updatedAt` | `string \| undefined` | Optional | A timestamp indicating when this payment profile was last updated |

## Example

```ts
import {
  CardType,
  CreditCardPaymentProfile,
  CreditCardVault,
  PaymentType,
} from '@maxio-com/advanced-billing-sdk';

const creditCardPaymentProfile: CreditCardPaymentProfile = {
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

