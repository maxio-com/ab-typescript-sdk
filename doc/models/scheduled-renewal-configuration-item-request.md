
# Scheduled Renewal Configuration Item Request

## Structure

`ScheduledRenewalConfigurationItemRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `renewalConfigurationItem` | [`ScheduledRenewalConfigurationItemRequestRenewalConfigurationItem`](../../doc/models/containers/scheduled-renewal-configuration-item-request-renewal-configuration-item.md) | Required | This is a container for one-of cases. |

## Example

```ts
import {
  PricingScheme,
  ScheduledRenewalConfigurationItemRequest,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalConfigurationItemRequest: ScheduledRenewalConfigurationItemRequest = {
  renewalConfigurationItem: {
    itemType: 'Component',
    itemId: 108,
    pricePointId: 122,
    quantity: 212,
    customPrice: {
      pricingScheme: PricingScheme.Stairstep,
      prices: [
        {
          startingQuantity: 242,
          unitPrice: 23.26,
          endingQuantity: 40,
        },
        {
          startingQuantity: 242,
          unitPrice: 23.26,
          endingQuantity: 40,
        }
      ],
      taxIncluded: false,
    },
  },
};
```

