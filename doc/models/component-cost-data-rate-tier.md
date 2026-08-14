
# Component Cost Data Rate Tier

## Structure

`ComponentCostDataRateTier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startingQuantity` | `number \| undefined` | Optional | - |
| `endingQuantity` | `number \| null \| undefined` | Optional | - |
| `quantity` | `string \| undefined` | Optional | - |
| `unitPrice` | `string \| undefined` | Optional | - |
| `amount` | `string \| undefined` | Optional | - |

## Example

```ts
import { ComponentCostDataRateTier } from '@maxio-com/advanced-billing-sdk';

const componentCostDataRateTier: ComponentCostDataRateTier = {
  startingQuantity: 204,
  endingQuantity: 178,
  quantity: 'quantity4',
  unitPrice: 'unit_price6',
  amount: 'amount0',
};
```

