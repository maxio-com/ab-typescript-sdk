
# Scheduled Renewal Item Request Body Component

## Structure

`ScheduledRenewalItemRequestBodyComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `itemType` | `string` | Required, Constant | Item type to add. Either Product or Component.<br><br>**Value**: `'Component'` |
| `itemId` | `number` | Required | Product or component identifier. |
| `pricePointId` | `number \| undefined` | Optional | Price point identifier. |
| `quantity` | `number \| undefined` | Optional | (Optional) Quantity for the item. |
| `customPrice` | [`ScheduledRenewalComponentCustomPrice \| undefined`](../../doc/models/scheduled-renewal-component-custom-price.md) | Optional | Custom pricing for a component within a scheduled renewal. |

## Example

```ts
import {
  PricingScheme,
  ScheduledRenewalItemRequestBodyComponent,
} from '@maxio-com/advanced-billing-sdk';

const scheduledRenewalItemRequestBodyComponent: ScheduledRenewalItemRequestBodyComponent = {
  itemType: 'Component',
  itemId: 20,
  pricePointId: 6,
  quantity: 84,
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
};
```

