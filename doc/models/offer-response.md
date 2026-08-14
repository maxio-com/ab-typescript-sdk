
# Offer Response

## Structure

`OfferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `offer` | [`Offer \| undefined`](../../doc/models/offer.md) | Optional | - |

## Example

```ts
import { OfferResponse } from '@maxio-com/advanced-billing-sdk';

const offerResponse: OfferResponse = {
  offer: {
    id: 28,
    siteId: 210,
    productFamilyId: 224,
    productId: 30,
    productPricePointId: 150,
  },
};
```

