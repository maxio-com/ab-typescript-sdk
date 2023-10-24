
# Update Subscription

## Structure

`UpdateSubscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creditCardAttributes` | [`CreditCardAttributes \| undefined`](../../doc/models/credit-card-attributes.md) | Optional | - |
| `productHandle` | `string \| undefined` | Optional | Set to the handle of a different product to change the subscription's product |
| `productId` | `number \| undefined` | Optional | Set to the id of a different product to change the subscription's product |
| `productChangeDelayed` | `boolean \| undefined` | Optional | **Default**: `false` |
| `nextProductId` | `string \| undefined` | Optional | Set to an empty string to cancel a delayed product change. |
| `nextProductPricePointId` | `string \| undefined` | Optional | - |
| `snapDay` | [`UpdateSubscriptionSnapDay \| undefined`](../../doc/models/containers/update-subscription-snap-day.md) | Optional | This is a container for one-of cases. |
| `nextBillingAt` | `string \| undefined` | Optional | - |
| `paymentCollectionMethod` | `string \| undefined` | Optional | - |
| `receivesInvoiceEmails` | `boolean \| undefined` | Optional | - |
| `netTerms` | [`UpdateSubscriptionNetTerms \| undefined`](../../doc/models/containers/update-subscription-net-terms.md) | Optional | This is a container for one-of cases. |
| `storedCredentialTransactionId` | `number \| undefined` | Optional | - |
| `reference` | `string \| undefined` | Optional | - |
| `customPrice` | [`CustomPriceUsedForSubscriptionCreateUpdate \| undefined`](../../doc/models/custom-price-used-for-subscription-create-update.md) | Optional | (Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription |
| `components` | [`UpdateSubscriptionComponent[] \| undefined`](../../doc/models/update-subscription-component.md) | Optional | (Optional) An array of component ids and custom prices to be added to the subscription. |
| `dunningCommunicationDelayEnabled` | `boolean \| null \| undefined` | Optional | Enable Communication Delay feature, making sure no communication (email or SMS) is sent to the Customer between 9PM and 8AM in time zone set by the `dunning_communication_delay_time_zone` attribute.<br>**Default**: `false` |
| `dunningCommunicationDelayTimeZone` | `string \| null \| undefined` | Optional | Time zone for the Dunning Communication Delay feature. |

## Example (as JSON)

```json
{
  "product_change_delayed": false,
  "dunning_communication_delay_enabled": false,
  "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
  "credit_card_attributes": {
    "full_number": "full_number2",
    "expiration_month": "expiration_month6",
    "expiration_year": "expiration_year2"
  },
  "product_handle": "product_handle2",
  "product_id": 114,
  "next_product_id": "next_product_id8"
}
```

