
# Get One Time Token Payment Profile

## Structure

`GetOneTimeTokenPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| null \| undefined` | Optional | - |
| `firstName` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `lastName` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `maskedCardNumber` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `cardType` | [`CardType`](../../doc/models/card-type.md) | Required | The type of card used. |
| `expirationMonth` | `number` | Required | - |
| `expirationYear` | `number` | Required | - |
| `customerId` | `string \| null \| undefined` | Optional | - |
| `currentVault` | [`CreditCardVault`](../../doc/models/credit-card-vault.md) | Required | The vault that stores the payment profile with the provided `vault_token`. Use `bogus` for testing. |
| `vaultToken` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingAddress` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingAddress2` | `string \| undefined` | Optional | - |
| `billingCity` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingCountry` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingState` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `billingZip` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `paymentType` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `disabled` | `boolean` | Required | - |
| `siteGatewaySettingId` | `number` | Required | - |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import {
  CardType,
  CreditCardVault,
  GetOneTimeTokenPaymentProfile,
} from '@maxio-com/advanced-billing-sdk';

const getOneTimeTokenPaymentProfile: GetOneTimeTokenPaymentProfile = {
  firstName: 'first_name4',
  lastName: 'last_name2',
  maskedCardNumber: 'masked_card_number2',
  cardType: CardType.MaestroNoLuhn,
  expirationMonth: 28.3,
  expirationYear: 4.96,
  currentVault: CreditCardVault.TrustCommerce,
  vaultToken: 'vault_token6',
  billingAddress: 'billing_address6',
  billingCity: 'billing_city2',
  billingCountry: 'billing_country8',
  billingState: 'billing_state2',
  billingZip: 'billing_zip2',
  paymentType: 'payment_type6',
  disabled: false,
  siteGatewaySettingId: 156,
  id: 'id4',
  customerId: 'customer_id2',
  billingAddress2: 'billing_address_26',
  customerVaultToken: 'customer_vault_token2',
  gatewayHandle: 'gateway_handle6',
};
```

