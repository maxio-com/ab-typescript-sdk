
# Scheduled Renewal Update Request

## Structure

`ScheduledRenewalUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `renewalConfigurationItem` | [`ScheduledRenewalUpdateRequestRenewalConfigurationItem`](../../doc/models/containers/scheduled-renewal-update-request-renewal-configuration-item.md) | Required | This is a container for one-of cases. |

## Example

```ts
import {
  PricingScheme,
  ScheduledRenewalUpdateRequest,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalUpdateRequest: ScheduledRenewalUpdateRequest = {
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

