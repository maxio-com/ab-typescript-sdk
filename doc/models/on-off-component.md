
# On Off Component

## Structure

`OnOffComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | A name for this component that is suitable for showing customers and displaying on billing statements, ie. "Minutes". |
| `description` | `string \| undefined` | Optional | A description for the component that will be displayed to the user on the hosted signup page. |
| `handle` | `string \| undefined` | Optional | A unique identifier for your use that can be used to retrieve this component is subsequent requests.  Must start with a letter or number and may only contain lowercase letters, numbers, or the characters '.', ':', '-', or '_'.<br>**Constraints**: *Pattern*: `^[a-z0-9][a-z0-9\-_:.]*$` |
| `taxable` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is taxable or not. |
| `prices` | [`Price[] \| undefined`](../../doc/models/price.md) | Optional | (Not required for ‘per_unit’ pricing schemes) One or more price brackets. See [Price Bracket Rules](https://maxio.zendesk.com/hc/en-us/articles/24261191737101-Price-Points-Components) for an overview of how price brackets work for different pricing schemes. |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `downgradeCredit` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.<br>Available values: `full`, `prorated`, `none`. |
| `pricePoints` | [`ComponentPricePointItem[] \| undefined`](../../doc/models/component-price-point-item.md) | Optional | - |
| `unitPrice` | [`OnOffComponentUnitPrice \| undefined`](../../doc/models/containers/on-off-component-unit-price.md) | Optional | This is a container for one-of cases. |
| `taxCode` | `string \| undefined` | Optional | A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. |
| `hideDateRangeOnInvoice` | `boolean \| undefined` | Optional | (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. |
| `priceInCents` | `string \| undefined` | Optional | deprecated May 2011 - use unit_price instead |
| `displayOnHostedPage` | `boolean \| undefined` | Optional | - |
| `allowFractionalQuantities` | `boolean \| undefined` | Optional | - |
| `publicSignupPageIds` | `number[] \| undefined` | Optional | - |
| `interval` | `number \| undefined` | Optional | The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component's default price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. |
| `intervalUnit` | [`IntervalUnit \| null \| undefined`](../../doc/models/interval-unit.md) | Optional | A string representing the interval unit for this component's default price point, either month or day. This property is only available for sites with Multifrequency enabled. |

## Example (as JSON)

```json
{
  "name": "name2",
  "description": "description2",
  "handle": "handle8",
  "taxable": false,
  "prices": [
    {
      "starting_quantity": 242,
      "ending_quantity": 40,
      "unit_price": 23.26
    },
    {
      "starting_quantity": 242,
      "ending_quantity": 40,
      "unit_price": 23.26
    },
    {
      "starting_quantity": 242,
      "ending_quantity": 40,
      "unit_price": 23.26
    }
  ],
  "upgrade_charge": "prorated"
}
```

