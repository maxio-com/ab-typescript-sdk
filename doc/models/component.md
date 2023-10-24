
# Component

## Structure

`Component`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | The unique ID assigned to the component by Chargify. This ID can be used to fetch the component from the API. |
| `name` | `string \| undefined` | Optional | The name of the Component, suitable for display on statements. i.e. Text Messages. |
| `handle` | `string \| undefined` | Optional | The component API handle |
| `pricingScheme` | `string \| null \| undefined` | Optional | The handle for the pricing scheme. Available options: per_unit, volume, tiered, stairstep. See [Price Bracket Rules](https://chargify.zendesk.com/hc/en-us/articles/4407755865883#price-bracket-rules) for an overview of pricing schemes. |
| `unitName` | `string \| undefined` | Optional | The name of the unit that the component’s usage is measured in. i.e. message |
| `unitPrice` | `string \| null \| undefined` | Optional | The amount the customer will be charged per unit. This field is only populated for ‘per_unit’ pricing schemes, otherwise it may be null. |
| `productFamilyId` | `number \| undefined` | Optional | The id of the Product Family to which the Component belongs |
| `productFamilyName` | `string \| undefined` | Optional | The name of the Product Family to which the Component belongs |
| `pricePerUnitInCents` | `number \| null \| undefined` | Optional | deprecated - use unit_price instead |
| `kind` | [`ComponentKind \| undefined`](../../doc/models/component-kind.md) | Optional | A handle for the component type |
| `archived` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is archived or not. |
| `taxable` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is taxable or not. |
| `description` | `string \| null \| undefined` | Optional | The description of the component. |
| `defaultPricePointId` | `number \| undefined` | Optional | - |
| `prices` | [`ComponentPrice[] \| null \| undefined`](../../doc/models/component-price.md) | Optional | An array of price brackets. If the component uses the ‘per_unit’ pricing scheme, this array will be empty. |
| `pricePointCount` | `number \| undefined` | Optional | Count for the number of price points associated with the component |
| `pricePointsUrl` | `string \| undefined` | Optional | URL that points to the location to read the existing price points via GET request |
| `defaultPricePointName` | `string \| undefined` | Optional | - |
| `taxCode` | `string \| null \| undefined` | Optional | A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. |
| `recurring` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | `string \| null \| undefined` | Optional | - |
| `downgradeCredit` | `string \| null \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | Timestamp indicating when this component was created |
| `updatedAt` | `string \| undefined` | Optional | Timestamp indicating when this component was updated |
| `archivedAt` | `string \| null \| undefined` | Optional | Timestamp indicating when this component was archived |
| `hideDateRangeOnInvoice` | `boolean \| undefined` | Optional | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `allowFractionalQuantities` | `boolean \| undefined` | Optional | - |
| `itemCategory` | [`ItemCategory \| undefined`](../../doc/models/item-category.md) | Optional | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `useSiteExchangeRate` | `boolean \| null \| undefined` | Optional | - |
| `accountingCode` | `string \| null \| undefined` | Optional | E.g. Internal ID or SKU Number |
| `eventBasedBillingMetricId` | `number \| undefined` | Optional | (Only for Event Based Components) This is an ID of a metric attached to the component. This metric is used to bill upon collected events. |

## Example (as JSON)

```json
{
  "item_category": "Business Software",
  "id": 24,
  "name": "name2",
  "handle": "handle8",
  "pricing_scheme": "pricing_scheme6",
  "unit_name": "unit_name4"
}
```

