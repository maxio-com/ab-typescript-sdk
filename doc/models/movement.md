
# Movement

## Structure

`Movement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timestamp` | `string \| undefined` | Optional | - |
| `amountInCents` | `number \| undefined` | Optional | - |
| `amountFormatted` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `category` | `string \| undefined` | Optional | - |
| `breakouts` | [`Breakouts \| undefined`](../../doc/models/breakouts.md) | Optional | - |
| `lineItems` | [`MovementLineItem[] \| undefined`](../../doc/models/movement-line-item.md) | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |
| `subscriberName` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "timestamp": "timestamp0",
  "amount_in_cents": 174,
  "amount_formatted": "amount_formatted4",
  "description": "description2",
  "category": "category0"
}
```

