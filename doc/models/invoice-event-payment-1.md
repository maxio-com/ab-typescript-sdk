
# Invoice Event Payment 1

A nested data structure detailing the method of payment

## Structure

`InvoiceEventPayment1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `maskedAccountNumber` | `string` | Required | - |
| `maskedRoutingNumber` | `string` | Required | - |
| `cardBrand` | `string` | Required | - |
| `cardExpiration` | `string \| undefined` | Optional | - |
| `lastFour` | `string \| null \| undefined` | Optional | - |
| `maskedCardNumber` | `string` | Required | - |
| `details` | `string \| null` | Required | - |
| `kind` | `string` | Required | - |
| `memo` | `string \| null` | Required | - |
| `email` | `string` | Required | - |

## Example (as JSON)

```json
{
  "type": "Invoice Event Payment1",
  "masked_account_number": "masked_account_number4",
  "masked_routing_number": "masked_routing_number4",
  "card_brand": "card_brand8",
  "card_expiration": "card_expiration4",
  "last_four": "last_four2",
  "masked_card_number": "masked_card_number6",
  "details": "details8",
  "kind": "kind6",
  "memo": "memo2",
  "email": "email8"
}
```

