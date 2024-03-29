
# Movement

## Structure

`Movement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timestamp` | `string \| undefined` | Optional | - |
| `amountInCents` | `bigint \| undefined` | Optional | - |
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
  "timestamp": "2016-03-13T12:52:32.123Z",
  "amount_in_cents": 174,
  "amount_formatted": "amount_formatted4",
  "description": "description2",
  "category": "category0"
}
```

