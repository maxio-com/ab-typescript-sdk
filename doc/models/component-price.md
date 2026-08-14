
# Component Price

## Structure

`ComponentPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `componentId` | `number \| undefined` | Optional | - |
| `startingQuantity` | `number \| undefined` | Optional | - |
| `endingQuantity` | `number \| null \| undefined` | Optional | - |
| `unitPrice` | `string \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `formattedUnitPrice` | `string \| undefined` | Optional | - |
| `segmentId` | `number \| null \| undefined` | Optional | - |

## Example

```ts
import { ComponentPrice } from '@maxio-com/advanced-billing-sdk';

const componentPrice: ComponentPrice = {
  id: 18,
  componentId: 128,
  startingQuantity: 64,
  endingQuantity: 218,
  unitPrice: 'unit_price4',
};
```

