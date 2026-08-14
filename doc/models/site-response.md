
# Site Response

## Structure

`SiteResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `site` | [`Site`](../../doc/models/site.md) | Required | - |

## Example

```ts
import { SiteResponse } from '@maxio-com/advanced-billing-sdk';

const siteResponse: SiteResponse = {
  site: {
    id: 64,
    name: 'name4',
    subdomain: 'subdomain0',
    currency: 'currency4',
    sellerId: 228,
  },
};
```

