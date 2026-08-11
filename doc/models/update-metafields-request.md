
# Update Metafields Request

## Structure

`UpdateMetafieldsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metafields` | [`UpdateMetafieldsRequestMetafields \| undefined`](../../doc/models/containers/update-metafields-request-metafields.md) | Optional | This is a container for one-of cases. |

## Example

```ts
import {
  IncludeOption,
  MetafieldInput,
  UpdateMetafieldsRequest,
} from '@maxio-com/advanced-billing-sdk';

const updateMetafieldsRequest: UpdateMetafieldsRequest = {
  metafields: {
    currentName: 'current_name0',
    name: 'name6',
    scope: {
      csv: IncludeOption.Exclude,
      invoices: IncludeOption.Exclude,
      statements: IncludeOption.Exclude,
      portal: IncludeOption.Exclude,
      publicShow: IncludeOption.Exclude,
    },
    inputType: MetafieldInput.BalanceTracker,
    mEnum: [
      'enum2'
    ],
  },
};
```

