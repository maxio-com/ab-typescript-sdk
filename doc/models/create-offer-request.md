
# Create Offer Request

## Structure

`CreateOfferRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `offer` | [`CreateOffer`](../../doc/models/create-offer.md) | Required | - |

## Example

```ts
import { CreateOfferRequest } from '@maxio-com/advanced-billing-sdk';

const createOfferRequest: CreateOfferRequest = {
  offer: {
    name: 'name4',
    handle: 'handle0',
    productId: 30,
    description: 'description6',
    productPricePointId: 150,
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
      }
    ],
    coupons: [
      'coupons6'
    ],
  },
};
```

