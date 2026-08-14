
# Scheduled Renewal Item Request Body Product

## Structure

`ScheduledRenewalItemRequestBodyProduct`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemType` | `string` | Required, Constant | Item type to add. Either Product or Component.<br><br>**Value**: `'Product'` |
| `itemId` | `number` | Required | Product or component identifier. |
| `pricePointId` | `number \| undefined` | Optional | Price point identifier. |
| `quantity` | `number \| undefined` | Optional | (Optional) Quantity for the item. |
| `customPrice` | [`ScheduledRenewalProductPricePoint \| undefined`](../../doc/models/scheduled-renewal-product-price-point.md) | Optional | Custom pricing for a product within a scheduled renewal. |

## Example

```ts
import {
  IntervalUnit,
  ScheduledRenewalItemRequestBodyProduct,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalItemRequestBodyProduct: ScheduledRenewalItemRequestBodyProduct = {
  itemType: 'Product',
  itemId: 154,
  pricePointId: 168,
  quantity: 166,
  customPrice: {
    priceInCents: 'String3',
    interval: 'String3',
    intervalUnit: IntervalUnit.Day,
    name: 'name4',
    handle: 'handle0',
    taxIncluded: false,
    initialChargeInCents: BigInt(30),
    expirationInterval: 52,
  },
};
```

