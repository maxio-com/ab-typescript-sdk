
# Credit Card Payment Profile

## Structure

`CreditCardPaymentProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `maskedCardNumber` | `string \| undefined` | Optional | - |
| `cardType` | [`CardType1Enum \| undefined`](../../doc/models/card-type-1-enum.md) | Optional | - |
| `expirationMonth` | `number \| undefined` | Optional | - |
| `expirationYear` | `number \| undefined` | Optional | - |
| `customerId` | `number \| undefined` | Optional | - |
| `currentVault` | `string \| undefined` | Optional | - |
| `vaultToken` | `string \| undefined` | Optional | - |
| `billingAddress` | `string \| undefined` | Optional | - |
| `billingCity` | `string \| undefined` | Optional | - |
| `billingState` | `string \| undefined` | Optional | - |
| `billingZip` | `string \| undefined` | Optional | - |
| `billingCountry` | `string \| undefined` | Optional | - |
| `customerVaultToken` | `string \| null \| undefined` | Optional | - |
| `billingAddress2` | `string \| undefined` | Optional | - |
| `paymentType` | `string \| undefined` | Optional | - |
| `disabled` | `boolean \| undefined` | Optional | - |
| `siteGatewaySettingId` | `string \| undefined` | Optional | - |
| `gatewayHandle` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 252,
  "first_name": "first_name0",
  "last_name": "last_name8",
  "masked_card_number": "masked_card_number8",
  "card_type": "synchrony"
}
```

