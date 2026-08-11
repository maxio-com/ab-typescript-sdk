
# Metafield

## Structure

`Metafield`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `scope` | [`MetafieldScope \| undefined`](../../doc/models/metafield-scope.md) | Optional | Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. |
| `dataCount` | `number \| undefined` | Optional | The amount of subscriptions this metafield has been applied to in Advanced Billing. |
| `inputType` | [`MetafieldInput \| undefined`](../../doc/models/metafield-input.md) | Optional | Indicates the type of metafield. A text metafield allows any string value. Dropdown and radio metafields have a set of values that can be selected. Defaults to 'text'. |
| `mEnum` | [`MetafieldEnum \| null \| undefined`](../../doc/models/containers/metafield-enum.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import {
  IncludeOption,
  Metafield,
  MetafieldInput,
} from '@maxio-com/advanced-billing-sdk';

const metafield: Metafield = {
  id: 242,
  name: 'name4',
  scope: {
    csv: IncludeOption.Exclude,
    invoices: IncludeOption.Exclude,
    statements: IncludeOption.Exclude,
    portal: IncludeOption.Exclude,
    publicShow: IncludeOption.Exclude,
  },
  dataCount: 26,
  inputType: MetafieldInput.BalanceTracker,
};
```

