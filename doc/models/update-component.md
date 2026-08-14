
# Update Component

## Structure

`UpdateComponent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `handle` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | The name of the Component, suitable for display on statements. e.g., Text Messages. |
| `description` | `string \| null \| undefined` | Optional | The description of the component. |
| `accountingCode` | `string \| null \| undefined` | Optional | - |
| `taxable` | `boolean \| undefined` | Optional | Boolean flag describing whether a component is taxable or not. |
| `taxCode` | `string \| null \| undefined` | Optional | A string representing the tax code related to the component type. This is especially important when using AvaTax to tax based on locale. This attribute has a max length of 25 characters. |
| `itemCategory` | [`ItemCategory \| null \| undefined`](../../doc/models/item-category.md) | Optional | One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other |
| `displayOnHostedPage` | `boolean \| undefined` | Optional | - |
| `upgradeCharge` | [`CreditType \| null \| undefined`](../../doc/models/credit-type.md) | Optional | The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. |
| `unspscCode` | `string \| null \| undefined` | Optional | (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. When set, this value is sent as the commodity code on invoice line items for this component instead of the default derived from item_category. |

## Example

```ts
import {
  ItemCategory,
  UpdateComponent,
} from '@maxio-com/advanced-billing-sdk';

const updateComponent: UpdateComponent = {
  handle: 'handle4',
  name: 'name8',
  description: 'description8',
  accountingCode: 'accounting_code4',
  taxable: false,
  itemCategory: ItemCategory.EnumBusinessSoftware,
};
```

