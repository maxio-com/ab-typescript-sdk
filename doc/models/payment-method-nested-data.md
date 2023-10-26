
# Payment Method Nested Data

A nested data structure detailing the method of payment

## Structure

`PaymentMethodNestedData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | **Default**: `'apple_pay'` |
| `maskedAccountNumber` | `string \| undefined` | Optional | - |
| `maskedRoutingNumber` | `string \| undefined` | Optional | - |
| `cardBrand` | `string \| undefined` | Optional | - |
| `cardExpiration` | `string \| undefined` | Optional | - |
| `lastFour` | `string \| null \| undefined` | Optional | - |
| `maskedCardNumber` | `string \| undefined` | Optional | - |
| `details` | `string \| undefined` | Optional | - |
| `kind` | `string \| undefined` | Optional | - |
| `memo` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "type": "apple_pay",
  "masked_account_number": "masked_account_number8",
  "masked_routing_number": "masked_routing_number8",
  "card_brand": "card_brand4",
  "card_expiration": "card_expiration2"
}
```

