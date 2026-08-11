
# Endpoint

## Structure

`Endpoint`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `url` | `string \| undefined` | Optional | - |
| `siteId` | `number \| undefined` | Optional | - |
| `status` | `string \| undefined` | Optional | - |
| `webhookSubscriptions` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { Endpoint } from '@maxio-com/advanced-billing-sdk';

const endpoint: Endpoint = {
  id: 202,
  url: 'url2',
  siteId: 128,
  status: 'status0',
  webhookSubscriptions: [
    'webhook_subscriptions4'
  ],
};
```

