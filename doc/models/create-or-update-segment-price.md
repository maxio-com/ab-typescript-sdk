
# Create or Update Segment Price

## Structure

`CreateOrUpdateSegmentPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startingQuantity` | `number \| undefined` | Optional | - |
| `endingQuantity` | `number \| undefined` | Optional | - |
| `unitPrice` | [`CreateOrUpdateSegmentPriceUnitPrice`](../../doc/models/containers/create-or-update-segment-price-unit-price.md) | Required | This is a container for one-of cases. |

## Example

```ts
import { CreateOrUpdateSegmentPrice } from '@maxio-com/advanced-billing-sdk';

const createOrUpdateSegmentPrice: CreateOrUpdateSegmentPrice = {
  unitPrice: 'String9',
  startingQuantity: 98,
  endingQuantity: 184,
};
```

