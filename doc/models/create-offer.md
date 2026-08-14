
# Create Offer

## Structure

`CreateOffer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `handle` | `string` | Required | - |
| `description` | `string \| undefined` | Optional | - |
| `productId` | `number` | Required | - |
| `productPricePointId` | `number \| undefined` | Optional | - |
| `components` | [`CreateOfferComponent[] \| undefined`](../../doc/models/create-offer-component.md) | Optional | - |
| `coupons` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { CreateOffer } from '@maxio-com/advanced-billing-sdk';

const createOffer: CreateOffer = {
  name: 'name6',
  handle: 'handle2',
  productId: 66,
  description: 'description6',
  productPricePointId: 246,
  components: [
    {
      componentId: 108,
      pricePointId: 124,
      startingQuantity: 84,
    },
    {
      componentId: 108,
      pricePointId: 124,
      startingQuantity: 84,
    },
    {
      componentId: 108,
      pricePointId: 124,
      startingQuantity: 84,
    }
  ],
  coupons: [
    'coupons6',
    'coupons5',
    'coupons4'
  ],
};
```

