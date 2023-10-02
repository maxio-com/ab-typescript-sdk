
# Customer Change

## Structure

`CustomerChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payer` | [`CustomerPayerChange \| undefined`](../../doc/models/customer-payer-change.md) | Optional | - |
| `shippingAddress` | [`CustomerShippingAddressChange \| undefined`](../../doc/models/customer-shipping-address-change.md) | Optional | - |
| `billingAddress` | [`CustomerBillingAddressChange \| undefined`](../../doc/models/customer-billing-address-change.md) | Optional | - |
| `customFields` | [`CustomerCustomFieldsChange \| undefined`](../../doc/models/customer-custom-fields-change.md) | Optional | - |

## Example (as JSON)

```json
{
  "payer": {
    "before": {
      "key1": "val1",
      "key2": "val2"
    },
    "after": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "shipping_address": {
    "before": {
      "key1": "val1",
      "key2": "val2"
    },
    "after": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "billing_address": {
    "before": {
      "key1": "val1",
      "key2": "val2"
    },
    "after": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "custom_fields": {
    "before": [
      {
        "owner_id": 212.74,
        "owner_type": "owner_type2",
        "name": "name0",
        "value": "value2",
        "metadatum_id": 158.98
      },
      {
        "owner_id": 212.74,
        "owner_type": "owner_type2",
        "name": "name0",
        "value": "value2",
        "metadatum_id": 158.98
      }
    ],
    "after": [
      {
        "owner_id": 80.66,
        "owner_type": "owner_type4",
        "name": "name2",
        "value": "value4",
        "metadatum_id": 26.9
      },
      {
        "owner_id": 80.66,
        "owner_type": "owner_type4",
        "name": "name2",
        "value": "value4",
        "metadatum_id": 26.9
      },
      {
        "owner_id": 80.66,
        "owner_type": "owner_type4",
        "name": "name2",
        "value": "value4",
        "metadatum_id": 26.9
      }
    ]
  }
}
```

