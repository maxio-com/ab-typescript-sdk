
# Movement Line Item

## Structure

`MovementLineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productId` | `number \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | For Product (or "baseline") line items, this field will have a value of `0`. |
| `pricePointId` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `mrr` | `number \| undefined` | Optional | - |
| `mrrMovements` | [`MRRMovement[] \| undefined`](../../doc/models/mrr-movement.md) | Optional | - |
| `quantity` | `number \| undefined` | Optional | - |
| `prevQuantity` | `number \| undefined` | Optional | - |
| `recurring` | `boolean \| undefined` | Optional | When `true`, the line item's MRR value will contribute to the `plan` breakout. When `false`, the line item contributes to the `usage` breakout. |

## Example

```ts
import { MovementLineItem } from '@maxio-com/advanced-billing-sdk';

const movementLineItem: MovementLineItem = {
  productId: 146,
  componentId: 58,
  pricePointId: 82,
  name: 'name8',
  mrr: 92,
};
```

