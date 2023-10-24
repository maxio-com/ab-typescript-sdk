
# Subscription Group Signup Item

## Structure

`SubscriptionGroupSignupItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productHandle` | `string \| undefined` | Optional | The API Handle of the product for which you are creating a subscription. Required, unless a `product_id` is given instead. |
| `productId` | `number \| undefined` | Optional | The Product ID of the product for which you are creating a subscription. You can pass either `product_id` or `product_handle`. |
| `productPricePointId` | `number \| undefined` | Optional | The ID of the particular price point on the product. |
| `productPricePointHandle` | `string \| undefined` | Optional | The user-friendly API handle of a product's particular price point. |
| `offerId` | `number \| undefined` | Optional | Use in place of passing product and component information to set up the subscription with an existing offer. May be either the Chargify ID of the offer or its handle prefixed with `handle:` |
| `reference` | `string \| undefined` | Optional | The reference value (provided by your app) for the subscription itelf. |
| `primary` | `boolean \| undefined` | Optional | One of the subscriptions must be marked as primary in the group. |
| `currency` | `string \| undefined` | Optional | (Optional) If Multi-Currency is enabled and the currency is configured in Chargify, pass it at signup to create a subscription on a non-default currency. Note that you cannot update the currency of an existing subscription. |
| `couponCodes` | `string[] \| undefined` | Optional | An array for all the coupons attached to the subscription. |
| `components` | [`SubscriptionGroupSignupComponent[] \| undefined`](../../doc/models/subscription-group-signup-component.md) | Optional | - |
| `customPrice` | [`CustomPriceUsedForSubscriptionCreateUpdate \| undefined`](../../doc/models/custom-price-used-for-subscription-create-update.md) | Optional | (Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription |
| `calendarBilling` | [`CalendarBilling \| undefined`](../../doc/models/calendar-billing.md) | Optional | (Optional). Cannot be used when also specifying next_billing_at |
| `metafields` | `Record<string, string> \| undefined` | Optional | (Optional) A set of key/value pairs representing custom fields and their values. Metafields will be created “on-the-fly” in your site for a given key, if they have not been created yet. |

## Example (as JSON)

```json
{
  "metafields": {
    "custom_field_name_1": "custom_field_value_1",
    "custom_field_name_2": "custom_field_value_2"
  },
  "product_handle": "product_handle2",
  "product_id": 34,
  "product_price_point_id": 214,
  "product_price_point_handle": "product_price_point_handle4",
  "offer_id": 150
}
```

