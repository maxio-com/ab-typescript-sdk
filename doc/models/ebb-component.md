
# EBB Component

## Structure

`EBBComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | A name for this component that is suitable for showing customers and displaying on billing statements, i.e., "Minutes". |
| `unitName` | `string` | Required | “The name of the unit of measurement for the component. It should be singular since it will be automatically pluralized when necessary. i.e., “message”, which may then be shown as “5 messages” on a subscription’s component line-item” |
| `description` | `string \| undefined` | Optional | A description for the component that will be displayed to the user on the hosted signup page. |
| `handle` | `string \| undefined` | Optional | A unique identifier for your use that can be used to retrieve this component in subsequent requests. Must start with a letter or number and may only contain lowercase letters, numbers, or the characters '.', ':', '-', or '_'.<br><br>**Constraints**: *Pattern*: `^[a-z0-9][a-z0-9\-_:.]*$` |
| `taxable` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is taxable or not. |
| `pricingScheme` | [`PricingScheme`](../../doc/models/pricing-scheme.md) | Required | The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. |
| `prices` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | (Not required for ‘per_unit’ pricing schemes) One or more price brackets. See [Price Bracket Rules](https://docs.maxio.com/billing/catalog/products/use-product-pricing-schemes#price-bracket-rules) for an overview of how price brackets work for different pricing schemes. |
| `pricePoints` | [`ComponentPricePointItem[] \| undefined`](../../doc/models/component-price-point-item.md) | Optional | - |
| `unitPrice` | [`EBBComponentUnitPrice \| undefined`](../../doc/models/containers/ebb-component-unit-price.md) | Optional | This is a container for one-of cases. |
| `taxCode` | `string \| undefined` | Optional | A string representing the tax code related to the component type. This is especially important when using AvaTax to tax based on locale. This attribute has a max length of 25 characters. |
| `hideDateRangeOnInvoice` | `boolean \| undefined` | Optional | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `eventBasedBillingMetricId` | `number \| undefined` | Optional | ID of a site-owned metric. Required to create a component with legacy Events Based Billing. During migration, a meter linked to the metric is attached automatically when present. Sites using Maxio Metering ignore this input; provide metering_meter_id or metering_formula instead. |
| `meteringMeterId` | `number \| undefined` | Optional | ID of a merchant-owned Maxio Metering meter. To create a component with Maxio Metering, provide this ID or metering_formula, but not both. Meter IDs and legacy metric IDs identify different resources. Sites using Events Based Billing ignore this input and require event_based_billing_metric_id instead. |
| `meteringFormula` | `string \| undefined` | Optional | An Advanced Formula using Maxio Metering meters available to the site. To create a component with Maxio Metering, provide a non-blank formula or metering_meter_id, but not both. Sites using Events Based Billing ignore this input and require event_based_billing_metric_id instead. |
| `interval` | `number \| undefined` | Optional | The numerical interval. i.e., an interval of ‘30’ coupled with an interval_unit of day would mean this component's default price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. |
| `intervalUnit` | [`IntervalUnit \| null \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this component's default price point, either month or day. This property is only available for sites with Multifrequency enabled. |
| `unspscCode` | `string \| null \| undefined` | Optional | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. When set, this value is sent as the commodity code on invoice line items for this component instead of the default derived from item_category. |

## Example

```ts
import {
  EBBComponent,
  IntervalUnit,
  PricingScheme,
} from '@maxio-com/advanced-billing-sdk';

const eBBComponent: EBBComponent = {
  name: 'name0',
  unitName: 'unit_name2',
  pricingScheme: PricingScheme.Stairstep,
  description: 'description0',
  handle: 'handle6',
  taxable: false,
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
  pricePoints: [
    {
      name: 'name2',
      handle: 'handle8',
      pricingScheme: PricingScheme.PerUnit,
      interval: 92,
      intervalUnit: IntervalUnit.Day,
    },
    {
      name: 'name2',
      handle: 'handle8',
      pricingScheme: PricingScheme.PerUnit,
      interval: 92,
      intervalUnit: IntervalUnit.Day,
    },
    {
      name: 'name2',
      handle: 'handle8',
      pricingScheme: PricingScheme.PerUnit,
      interval: 92,
      intervalUnit: IntervalUnit.Day,
    }
  ],
};
```

