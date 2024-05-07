
# Component

## Structure

`Component`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The unique ID assigned to the component by Chargify. This ID can be used to fetch the component from the API. |
| `name` | `string \| undefined` | Optional | The name of the Component, suitable for display on statements. i.e. Text Messages. |
| `handle` | `string \| null \| undefined` | Optional | The component API handle |
| `pricingScheme` | [`PricingScheme \| null \| undefined`](../../doc/models/pricing-scheme.md) | Optional | - |
| `unitName` | `string \| undefined` | Optional | The name of the unit that the component’s usage is measured in. i.e. message |
| `unitPrice` | `string \| null \| undefined` | Optional | The amount the customer will be charged per unit. This field is only populated for ‘per_unit’ pricing schemes, otherwise it may be null. |
| `productFamilyId` | `number \| undefined` | Optional | The id of the Product Family to which the Component belongs |
| `productFamilyName` | `string \| undefined` | Optional | The name of the Product Family to which the Component belongs |
| `pricePerUnitInCents` | `bigint \| null \| undefined` | Optional | deprecated - use unit_price instead |
| `kind` | [`ComponentKind \| undefined`](../../doc/models/component-kind.md) | Optional | A handle for the component type |
| `archived` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is archived or not. |
| `taxable` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is taxable or not. |
| `description` | `string \| null \| undefined` | Optional | The description of the component. |
| `defaultPricePointId` | `number \| null \| undefined` | Optional | - |
| `overagePrices` | [`ComponentPrice[] \| null \| undefined`](../../doc/models/component-price.md) | Optional | An array of price brackets. If the component uses the ‘per_unit’ pricing scheme, this array will be empty. |
| `prices` | [`ComponentPrice[] \| null \| undefined`](../../doc/models/component-price.md) | Optional | An array of price brackets. If the component uses the ‘per_unit’ pricing scheme, this array will be empty. |
| `pricePointCount` | `number \| undefined` | Optional | Count for the number of price points associated with the component |
| `pricePointsUrl` | `string \| null \| undefined` | Optional | URL that points to the location to read the existing price points via GET request |
| `defaultPricePointName` | `string \| undefined` | Optional | - |
| `taxCode` | `string \| null \| undefined` | Optional | A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. |
| `recurring` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `createdAt` | `string \| undefined` | Optional | Timestamp indicating when this component was created |
| `updatedAt` | `string \| undefined` | Optional | Timestamp indicating when this component was updated |
| `archivedAt` | `string \| null \| undefined` | Optional | Timestamp indicating when this component was archived |
| `hideDateRangeOnInvoice` | `boolean \| undefined` | Optional | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `allowFractionalQuantities` | `boolean \| undefined` | Optional | - |
| `itemCategory` | [`ItemCategory \| null \| undefined`](../../doc/models/item-category.md) | Optional | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `useSiteExchangeRate` | `boolean \| null \| undefined` | Optional | - |
| `accountingCode` | `string \| null \| undefined` | Optional | E.g. Internal ID or SKU Number |
| `eventBasedBillingMetricId` | `number \| undefined` | Optional | (Only for Event Based Components) This is an ID of a metric attached to the component. This metric is used to bill upon collected events. |
| `interval` | `number \| undefined` | Optional | The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component's default price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. |
| `intervalUnit` | [`IntervalUnit \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this component's default price point, either month or day. This property is only available for sites with Multifrequency enabled. |

## Example (as JSON)

```json
{
  "item_category": "Business Software",
  "id": 24,
  "name": "name2",
  "handle": "handle8",
  "pricing_scheme": "per_unit",
  "unit_name": "unit_name4"
}
```

