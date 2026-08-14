
# Segment Price

## Structure

`SegmentPrice`

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
| `segmentId` | `number \| undefined` | Optional | - |

## Example

```ts
import { SegmentPrice } from '@maxio-com/advanced-billing-sdk';

const segmentPrice: SegmentPrice = {
  id: 194,
  componentId: 48,
  startingQuantity: 144,
  endingQuantity: 118,
  unitPrice: 'unit_price0',
};
```

