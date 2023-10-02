
# Custom Price Used for Subscription Create Update

(Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription

## Structure

`CustomPriceUsedForSubscriptionCreateUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | (Optional) |
| `handle` | `string \| undefined` | Optional | (Optional) |
| `priceInCents` | [`CustomPriceUsedForSubscriptionCreateUpdatePriceInCents \| undefined`](../../doc/models/containers/custom-price-used-for-subscription-create-update-price-in-cents.md) | Optional | This is a container for one-of cases. |
| `interval` | [`CustomPriceUsedForSubscriptionCreateUpdateInterval \| undefined`](../../doc/models/containers/custom-price-used-for-subscription-create-update-interval.md) | Optional | This is a container for one-of cases. |
| `intervalUnit` | [`CustomPriceUsedForSubscriptionCreateUpdateIntervalUnit \| undefined`](../../doc/models/containers/custom-price-used-for-subscription-create-update-interval-unit.md) | Optional | This is a container for one-of cases. |
| `trialPriceInCents` | [`CustomPriceUsedForSubscriptionCreateUpdateTrialPriceInCents \| undefined`](../../doc/models/containers/custom-price-used-for-subscription-create-update-trial-price-in-cents.md) | Optional | This is a container for one-of cases. |
| `trialInterval` | [`CustomPriceUsedForSubscriptionCreateUpdateTrialInterval \| undefined`](../../doc/models/containers/custom-price-used-for-subscription-create-update-trial-interval.md) | Optional | This is a container for one-of cases. |
| `trialIntervalUnit` | [`CustomPriceUsedForSubscriptionCreateUpdateTrialIntervalUnit \| undefined`](../../doc/models/containers/custom-price-used-for-subscription-create-update-trial-interval-unit.md) | Optional | This is a container for one-of cases. |
| `initialChargeInCents` | [`CustomPriceUsedForSubscriptionCreateUpdateInitialChargeInCents \| undefined`](../../doc/models/containers/custom-price-used-for-subscription-create-update-initial-charge-in-cents.md) | Optional | This is a container for one-of cases. |
| `initialChargeAfterTrial` | `boolean \| undefined` | Optional | (Optional) |
| `expirationInterval` | [`CustomPriceUsedForSubscriptionCreateUpdateExpirationInterval \| undefined`](../../doc/models/containers/custom-price-used-for-subscription-create-update-expiration-interval.md) | Optional | This is a container for one-of cases. |
| `expirationIntervalUnit` | [`CustomPriceUsedForSubscriptionCreateUpdateExpirationIntervalUnit \| undefined`](../../doc/models/containers/custom-price-used-for-subscription-create-update-expiration-interval-unit.md) | Optional | This is a container for one-of cases. |
| `taxIncluded` | `boolean \| undefined` | Optional | (Optional) |

## Example (as JSON)

```json
{
  "name": "name4",
  "handle": "handle0",
  "price_in_cents": "String3",
  "interval": "String3",
  "interval_unit": "day"
}
```

