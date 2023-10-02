
# Offer

## Structure

`Offer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `siteId` | `number \| undefined` | Optional | - |
| `productFamilyId` | `number \| undefined` | Optional | - |
| `productId` | `number \| undefined` | Optional | - |
| `productPricePointId` | `number \| undefined` | Optional | - |
| `productRevisableNumber` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `handle` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `archivedAt` | `string \| null \| undefined` | Optional | - |
| `offerItems` | [`OfferItem[] \| undefined`](../../doc/models/offer-item.md) | Optional | - |
| `offerDiscounts` | [`OfferDiscount[] \| undefined`](../../doc/models/offer-discount.md) | Optional | - |
| `productFamilyName` | `string \| undefined` | Optional | - |
| `productName` | `string \| undefined` | Optional | - |
| `productPricePointName` | `string \| undefined` | Optional | - |
| `productPriceInCents` | `number \| undefined` | Optional | - |
| `offerSignupPages` | [`OfferSignupPage[] \| undefined`](../../doc/models/offer-signup-page.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": 154,
  "site_id": 80,
  "product_family_id": 158,
  "product_id": 96,
  "product_price_point_id": 20
}
```

