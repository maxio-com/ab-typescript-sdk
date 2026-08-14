
# Update Metafield

## Structure

`UpdateMetafield`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentName` | `string \| undefined` | Optional | - |
| `name` | `string \| undefined` | Optional | - |
| `scope` | [`MetafieldScope \| undefined`](../../doc/models/metafield-scope.md) | Optional | Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. |
| `inputType` | [`MetafieldInput \| undefined`](../../doc/models/metafield-input.md) | Optional | Indicates the type of metafield. A text metafield allows any string value. Dropdown and radio metafields have a set of values that can be selected. Defaults to 'text'. |
| `mEnum` | `string[] \| undefined` | Optional | Only applicable when input_type is radio or dropdown. |

## Example

```ts
import {
  IncludeOption,
  MetafieldInput,
  UpdateMetafield,
} from '@maxio-com/advanced-billing-sdk';

const updateMetafield: UpdateMetafield = {
  currentName: 'current_name6',
  name: 'name2',
  scope: {
    csv: IncludeOption.Exclude,
    invoices: IncludeOption.Exclude,
    statements: IncludeOption.Exclude,
    portal: IncludeOption.Exclude,
    publicShow: IncludeOption.Exclude,
  },
  inputType: MetafieldInput.Radio,
  mEnum: [
    'enum8',
    'enum9',
    'enum0'
  ],
};
```

