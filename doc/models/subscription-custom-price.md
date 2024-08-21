
# Subscription Custom Price

(Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription

## Structure

`SubscriptionCustomPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | (Optional) |
| `handle` | `string \| undefined` | Optional | (Optional) |
| `priceInCents` | [`SubscriptionCustomPricePriceInCents`](../../doc/models/containers/subscription-custom-price-price-in-cents.md) | Required | This is a container for one-of cases. |
| `interval` | [`SubscriptionCustomPriceInterval`](../../doc/models/containers/subscription-custom-price-interval.md) | Required | This is a container for one-of cases. |
| `intervalUnit` | [`IntervalUnit \| null`](../../doc/models/interval-unit.md) | Required | Required if using `custom_price` attribute. |
| `trialPriceInCents` | [`SubscriptionCustomPriceTrialPriceInCents \| undefined`](../../doc/models/containers/subscription-custom-price-trial-price-in-cents.md) | Optional | This is a container for one-of cases. |
| `trialInterval` | [`SubscriptionCustomPriceTrialInterval \| undefined`](../../doc/models/containers/subscription-custom-price-trial-interval.md) | Optional | This is a container for one-of cases. |
| `trialIntervalUnit` | [`IntervalUnit \| undefined`](../../doc/models/interval-unit.md) | Optional | (Optional) |
| `initialChargeInCents` | [`SubscriptionCustomPriceInitialChargeInCents \| undefined`](../../doc/models/containers/subscription-custom-price-initial-charge-in-cents.md) | Optional | This is a container for one-of cases. |
| `initialChargeAfterTrial` | `boolean \| undefined` | Optional | (Optional) |
| `expirationInterval` | [`SubscriptionCustomPriceExpirationInterval \| undefined`](../../doc/models/containers/subscription-custom-price-expiration-interval.md) | Optional | This is a container for one-of cases. |
| `expirationIntervalUnit` | [`ExpirationIntervalUnit \| null \| undefined`](../../doc/models/expiration-interval-unit.md) | Optional | (Optional) |
| `taxIncluded` | `boolean \| undefined` | Optional | (Optional) |

## Example (as JSON)

```json
{
  "name": "name4",
  "handle": "handle0",
  "price_in_cents": "String3",
  "interval": "String3",
  "interval_unit": "day",
  "trial_price_in_cents": "String3",
  "trial_interval": "String5",
  "trial_interval_unit": "day"
}
```

