
# Scheduled Renewal Component Custom Price

Custom pricing for a component within a scheduled renewal.

## Structure

`ScheduledRenewalComponentCustomPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `taxIncluded` | `boolean \| undefined` | Optional | Whether or not the price point includes tax |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | Omit for On/Off components. |
| `prices` | [`Price[]`](../../doc/models/price.md) | Required | On/off components only need one price bracket starting at 1. |

## Example

```ts
import {
  PricingScheme,
  ScheduledRenewalComponentCustomPrice,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalComponentCustomPrice: ScheduledRenewalComponentCustomPrice = {
  pricingScheme: PricingScheme.PerUnit,
  prices: [
    {
      startingQuantity: 242,
      unitPrice: 23.26,
      endingQuantity: 40,
    }
  ],
  taxIncluded: false,
};
```

