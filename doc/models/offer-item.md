
# Offer Item

## Structure

`OfferItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `componentId` | `number \| undefined` | Optional | - |
| `pricePointId` | `number \| undefined` | Optional | - |
| `startingQuantity` | `string \| undefined` | Optional | - |
| `editable` | `boolean \| undefined` | Optional | - |
| `componentUnitPrice` | `string \| undefined` | Optional | - |
| `componentName` | `string \| undefined` | Optional | - |
| `pricePointName` | `string \| undefined` | Optional | - |
| `currencyPrices` | [`CurrencyPrice[] \| undefined`](../../doc/models/currency-price.md) | Optional | - |
| `interval` | `number \| undefined` | Optional | The numerical interval. e.g., an interval of '30' coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. |
| `intervalUnit` | [`IntervalUnit \| null \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. |

## Example

```ts
import { OfferItem } from '@maxio-com/advanced-billing-sdk';

const offerItem: OfferItem = {
  componentId: 234,
  pricePointId: 254,
  startingQuantity: 'starting_quantity6',
  editable: false,
  componentUnitPrice: 'component_unit_price2',
};
```

