
# List Offers Response

## Structure

`ListOffersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `offers` | [`Offer[] \| undefined`](../../doc/models/offer.md) | Optional | - |

## Example

```ts
import { ListOffersResponse } from '@maxio-com/advanced-billing-sdk';

const listOffersResponse: ListOffersResponse = {
  offers: [
    {
      id: 12,
      siteId: 194,
      productFamilyId: 16,
      productId: 210,
      productPricePointId: 134,
    }
  ],
};
```

