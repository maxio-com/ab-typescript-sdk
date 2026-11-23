
# Feature Templates List Response

## Structure

`FeatureTemplatesListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `items` | [`FeatureTemplate[]`](../../doc/models/feature-template.md) | Required | - |
| `totalCount` | `number` | Required | Total number of feature templates matching the filters, across all pages. |
| `archivedCount` | `number` | Required | Number of archived feature templates matching the filters. Returned as `0` unless the active result set is empty or `status=archived` was requested. |

## Example

```ts
import {
  FeatureKind,
  FeatureTemplatesListResponse,
} from '@maxio-com/advanced-billing-sdk';

const featureTemplatesListResponse: FeatureTemplatesListResponse = {
  items: [
    {
      id: 66,
      key: 'sso',
      name: 'Single Sign-On',
      description: 'description2',
      kind: FeatureKind.AccessRight,
    }
  ],
  totalCount: 54,
  archivedCount: 78,
};
```

