
# Create Metafields Request

## Structure

`CreateMetafieldsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metafields` | [`CreateMetafieldsRequestMetafields`](../../doc/models/containers/create-metafields-request-metafields.md) | Required | This is a container for one-of cases. |

## Example

```ts
import {
  CreateMetafieldsRequest,
  IncludeOption,
  MetafieldInput,
} from '@maxio-com/advanced-billing-sdk';

const createMetafieldsRequest: CreateMetafieldsRequest = {
  metafields: {
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
  },
};
```

