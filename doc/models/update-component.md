
# Update Component

## Structure

`UpdateComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `handle` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | The name of the Component, suitable for display on statements. i.e. Text Messages. |
| `description` | `string \| null \| undefined` | Optional | The description of the component. |
| `accountingCode` | `string \| undefined` | Optional | - |
| `taxable` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is taxable or not. |
| `taxCode` | `string \| null \| undefined` | Optional | A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. |
| `itemCategory` | [`ItemCategoryEnum \| undefined`](../../doc/models/item-category-enum.md) | Optional | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `displayOnHostedPage` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | [`CreditTypeEnum \| undefined`](../../doc/models/credit-type-enum.md) | Optional | The type of charge to be applied when a component is upgraded. Valid values are: `prorated`, `full`, `none`. |

## Example (as JSON)

```json
{
  "item_category": "Business Software",
  "handle": "handle6",
  "name": "name0",
  "description": "description0",
  "accounting_code": "accounting_code6",
  "taxable": false
}
```

