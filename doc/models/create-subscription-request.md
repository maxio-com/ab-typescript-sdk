
# Create Subscription Request

## Structure

`CreateSubscriptionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `subscription` | [`CreateSubscription`](../../doc/models/create-subscription.md) | Required | - |

## Example (as JSON)

```json
{
  "subscription": {
    "payment_collection_method": "automatic",
    "metafields": {
      "custom_field_name_1": "custom_field_value_1",
      "custom_field_name_2": "custom_field_value_2"
    },
    "dunning_communication_delay_enabled": false,
    "dunning_communication_delay_time_zone": "\"Eastern Time (US & Canada)\"",
    "skip_billing_manifest_taxes": false,
    "product_handle": "product_handle6",
    "product_id": "product_id0",
    "product_price_point_handle": "product_price_point_handle2",
    "product_price_point_id": "product_price_point_id8",
    "custom_price": {
      "name": "name4",
      "handle": "handle0",
      "price_in_cents": "String3",
      "interval": "String3",
      "interval_unit": "day"
    }
  }
}
```

