
# Payment Method Credit Card Type

## Structure

`PaymentMethodCreditCardType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardBrand` | `string` | Required | - |
| `cardExpiration` | `string \| undefined` | Optional | - |
| `lastFour` | `string \| null \| undefined` | Optional | - |
| `maskedCardNumber` | `string` | Required | - |
| `type` | `string` | Required | **Default**: `'credit_card'` |

## Example (as JSON)

```json
{
  "card_brand": "card_brand0",
  "masked_card_number": "masked_card_number4",
  "type": "credit_card",
  "card_expiration": "card_expiration8",
  "last_four": "last_four0"
}
```

