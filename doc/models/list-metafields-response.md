
# List Metafields Response

## Structure

`ListMetafieldsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalCount` | `number \| undefined` | Optional | - |
| `currentPage` | `number \| undefined` | Optional | - |
| `totalPages` | `number \| undefined` | Optional | - |
| `perPage` | `number \| undefined` | Optional | - |
| `metafields` | [`Metafield[] \| undefined`](../../doc/models/metafield.md) | Optional | - |

## Example

```ts
import {
  IncludeOption,
  ListMetafieldsResponse,
  MetafieldInput,
} from '@maxio-com/advanced-billing-sdk';

const listMetafieldsResponse: ListMetafieldsResponse = {
  totalCount: 228,
  currentPage: 204,
  totalPages: 216,
  perPage: 74,
  metafields: [
    {
      id: 22,
      name: 'name2',
      scope: {
        csv: IncludeOption.Exclude,
        invoices: IncludeOption.Exclude,
        statements: IncludeOption.Exclude,
        portal: IncludeOption.Exclude,
        publicShow: IncludeOption.Exclude,
      },
      dataCount: 10,
      inputType: MetafieldInput.BalanceTracker,
    },
    {
      id: 22,
      name: 'name2',
      scope: {
        csv: IncludeOption.Exclude,
        invoices: IncludeOption.Exclude,
        statements: IncludeOption.Exclude,
        portal: IncludeOption.Exclude,
        publicShow: IncludeOption.Exclude,
      },
      dataCount: 10,
      inputType: MetafieldInput.BalanceTracker,
    },
    {
      id: 22,
      name: 'name2',
      scope: {
        csv: IncludeOption.Exclude,
        invoices: IncludeOption.Exclude,
        statements: IncludeOption.Exclude,
        portal: IncludeOption.Exclude,
        publicShow: IncludeOption.Exclude,
      },
      dataCount: 10,
      inputType: MetafieldInput.BalanceTracker,
    }
  ],
};
```

