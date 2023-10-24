
# EBB Component

## Structure

`EBBComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | A name for this component that is suitable for showing customers and displaying on billing statements, ie. "Minutes". |
| `unitName` | `string` | Required | The name of the unit of measurement for the component. It should be singular since it will be automatically pluralized when necessary. i.e. “message”, which may then be shown as “5 messages” on a subscription’s component line-item |
| `description` | `string \| undefined` | Optional | A description for the component that will be displayed to the user on the hosted signup page. |
| `handle` | `string \| undefined` | Optional | A unique identifier for your use that can be used to retrieve this component is subsequent requests.  Must start with a letter or number and may only contain lowercase letters, numbers, or the characters '.', ':', '-', or '_'.<br>**Constraints**: *Pattern*: `^[a-z0-9][a-z0-9\-_:.]*$` |
| `taxable` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is taxable or not. |
| `pricingScheme` | [`EBBComponentPricingScheme`](../../doc/models/containers/ebb-component-pricing-scheme.md) | Required | This is a container for one-of cases. |
| `prices` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | (Not required for ‘per_unit’ pricing schemes) One or more price brackets. See [Price Bracket Rules](https://help.chargify.com/products/product-components.html#general-price-bracket-rules) for an overview of how price brackets work for different pricing schemes. |
| `upgradeCharge` | `string \| undefined` | Optional | - |
| `downgradeCredit` | `string \| undefined` | Optional | - |
| `pricePoints` | [`ComponentPricePointItem[] \| undefined`](../../doc/models/component-price-point-item.md) | Optional | - |
| `unitPrice` | [`EBBComponentUnitPrice \| undefined`](../../doc/models/containers/ebb-component-unit-price.md) | Optional | This is a container for one-of cases. |
| `taxCode` | `string \| undefined` | Optional | A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. |
| `hideDateRangeOnInvoice` | `boolean \| undefined` | Optional | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `priceInCents` | `string \| undefined` | Optional | deprecated May 2011 - use unit_price instead |
| `eventBasedBillingMetricId` | `number` | Required | The ID of an event based billing metric that will be attached to this component. |

## Example (as JSON)

```json
{
  "name": "name0",
  "unit_name": "unit_name2",
  "description": "description0",
  "handle": "handle6",
  "taxable": false,
  "pricing_scheme": "tiered",
  "prices": [
    {
      "starting_quantity": 242,
      "ending_quantity": 40,
      "unit_price": 23.26
    }
  ],
  "upgrade_charge": "upgrade_charge2",
  "event_based_billing_metric_id": 190
}
```

