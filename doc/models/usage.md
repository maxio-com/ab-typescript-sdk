
# Usage

## Structure

`Usage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | **Constraints**: `>= 0` |
| `memo` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `quantity` | [`UsageQuantity \| undefined`](../../doc/models/containers/usage-quantity.md) | Optional | This is a container for one-of cases. |
| `overageQuantity` | `number \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `componentHandle` | `string \| undefined` | Optional | - |
| `subscriptionId` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 252,
  "memo": "memo8",
  "created_at": "2016-03-13T12:52:32.123Z",
  "price_point_id": 126,
  "quantity": 130
}
```

