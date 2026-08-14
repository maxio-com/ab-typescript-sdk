
# Bulk Components Price Point Assignment

## Structure

`BulkComponentsPricePointAssignment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `components` | [`ComponentPricePointAssignment[] \| undefined`](../../doc/models/component-price-point-assignment.md) | Optional | - |

## Example

```ts
import {
  BulkComponentsPricePointAssignment,
} from '@maxio-com/advanced-billing-sdk';

const bulkComponentsPricePointAssignment: BulkComponentsPricePointAssignment = {
  components: [
    {
      componentId: 108,
      pricePoint: 'String5',
    }
  ],
};
```

