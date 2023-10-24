
# Prepaid Usage Component

## Structure

`PrepaidUsageComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | A name for this component that is suitable for showing customers and displaying on billing statements, ie. "Minutes". |
| `unitName` | `string \| undefined` | Optional | The name of the unit of measurement for the component. It should be singular since it will be automatically pluralized when necessary. i.e. “message”, which may then be shown as “5 messages” on a subscription’s component line-item |
| `description` | `string \| undefined` | Optional | A description for the component that will be displayed to the user on the hosted signup page. |
| `handle` | `string \| undefined` | Optional | A unique identifier for your use that can be used to retrieve this component is subsequent requests.  Must start with a letter or number and may only contain lowercase letters, numbers, or the characters '.', ':', '-', or '_'.<br>**Constraints**: *Pattern*: `^[a-z0-9][a-z0-9\-_:.]*$` |
| `taxable` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is taxable or not. |
| `pricingScheme` | [`PrepaidUsageComponentPricingScheme \| undefined`](../../doc/models/containers/prepaid-usage-component-pricing-scheme.md) | Optional | This is a container for one-of cases. |
| `prices` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | (Not required for ‘per_unit’ pricing schemes) One or more price brackets. See [Price Bracket Rules](https://chargify.zendesk.com/hc/en-us/articles/4407755865883#general-price-bracket-rules) for an overview of how price brackets work for different pricing schemes. |
| `upgradeCharge` | `string \| undefined` | Optional | - |
| `downgradeCredit` | `string \| undefined` | Optional | - |
| `pricePoints` | [`PrepaidComponentPricePoint[] \| undefined`](../../doc/models/prepaid-component-price-point.md) | Optional | - |
| `unitPrice` | [`PrepaidUsageComponentUnitPrice \| undefined`](../../doc/models/containers/prepaid-usage-component-unit-price.md) | Optional | This is a container for one-of cases. |
| `taxCode` | `string \| undefined` | Optional | A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. |
| `hideDateRangeOnInvoice` | `boolean \| undefined` | Optional | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `priceInCents` | `string \| undefined` | Optional | deprecated May 2011 - use unit_price instead |
| `overagePricing` | [`OveragePricing \| undefined`](../../doc/models/overage-pricing.md) | Optional | - |
| `rolloverPrepaidRemainder` | `boolean \| undefined` | Optional | Boolean which controls whether or not remaining units should be rolled over to the next period |
| `renewPrepaidAllocation` | `boolean \| undefined` | Optional | Boolean which controls whether or not the allocated quantity should be renewed at the beginning of each period |
| `expirationInterval` | `number \| undefined` | Optional | (only for prepaid usage components where rollover_prepaid_remainder is true) The number of `expiration_interval_unit`s after which rollover amounts should expire |
| `expirationIntervalUnit` | [`PrepaidUsageComponentExpirationIntervalUnit \| undefined`](../../doc/models/containers/prepaid-usage-component-expiration-interval-unit.md) | Optional | This is a container for one-of cases. |
| `displayOnHostedPage` | `boolean \| undefined` | Optional | - |
| `allowFractionalQuantities` | `boolean \| undefined` | Optional | - |
| `publicSignupPageIds` | `number[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name2",
  "unit_name": "unit_name4",
  "description": "description8",
  "handle": "handle8",
  "taxable": false
}
```

