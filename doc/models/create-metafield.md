
# Create Metafield

## Structure

`CreateMetafield`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `scope` | [`MetafieldScope \| undefined`](../../doc/models/metafield-scope.md) | Optional | Warning: When updating a metafield's scope attribute, all scope attributes must be passed. Partially complete scope attributes will override the existing settings. |
| `inputType` | [`MetafieldInput \| undefined`](../../doc/models/metafield-input.md) | Optional | Indicates the type of metafield. A text metafield allows any string value. Dropdown and radio metafields have a set of values that can be selected. Defaults to 'text'. |
| `mEnum` | `string[] \| undefined` | Optional | Only applicable when input_type is radio or dropdown. Empty strings will not be submitted. |

## Example

```ts
import {
  CreateMetafield,
  IncludeOption,
  MetafieldInput,
} from '@maxio-com/advanced-billing-sdk';

const createMetafield: CreateMetafield = {
  name: 'my_field',
  scope: {
    csv: IncludeOption.Exclude,
    invoices: IncludeOption.Exclude,
    statements: IncludeOption.Exclude,
    portal: IncludeOption.Exclude,
    publicShow: IncludeOption.Exclude,
    publicEdit: IncludeOption.Exclude,
  },
  inputType: MetafieldInput.Text,
  mEnum: [
    'string'
  ],
};
```

