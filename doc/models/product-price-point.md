
# Product Price Point

## Structure

`ProductPricePoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `handle` | `string \| undefined` | Optional | - |
| `priceInCents` | `number \| undefined` | Optional | - |
| `interval` | `number \| undefined` | Optional | - |
| `intervalUnit` | `string \| undefined` | Optional | - |
| `trialPriceInCents` | `number \| undefined` | Optional | - |
| `trialInterval` | `number \| undefined` | Optional | - |
| `trialIntervalUnit` | `string \| undefined` | Optional | - |
| `trialType` | `string \| undefined` | Optional | - |
| `introductoryOffer` | `boolean \| undefined` | Optional | reserved for future use |
| `initialChargeInCents` | `number \| undefined` | Optional | - |
| `initialChargeAfterTrial` | `boolean \| undefined` | Optional | - |
| `expirationInterval` | `number \| undefined` | Optional | - |
| `expirationIntervalUnit` | `string \| undefined` | Optional | - |
| `productId` | `number \| undefined` | Optional | - |
| `archivedAt` | `string \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `useSiteExchangeRate` | `boolean \| undefined` | Optional | Whether or not to use the site's exchange rate or define your own pricing when your site has multiple currencies defined. |
| `type` | [`PricePointType \| undefined`](../../doc/models/price-point-type.md) | Optional | Price point type. We expose the following types:<br><br>1. **default**: a price point that is marked as a default price for a certain product.<br>2. **custom**: a custom price point.<br>3. **catalog**: a price point that is **not** marked as a default price for a certain product and is **not** a custom one. |
| `taxIncluded` | `boolean \| undefined` | Optional | - |
| `subscriptionId` | `number \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 196,
  "name": "name6",
  "handle": "handle2",
  "price_in_cents": 248,
  "interval": 8
}
```

