
# Endpoint Response

## Structure

`EndpointResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `endpoint` | [`Endpoint \| undefined`](../../doc/models/endpoint.md) | Optional | - |

## Example

```ts
import { EndpointResponse } from '@maxio-com/advanced-billing-sdk';

const endpointResponse: EndpointResponse = {
  endpoint: {
    id: 202,
    url: 'url2',
    siteId: 128,
    status: 'status0',
    webhookSubscriptions: [
      'webhook_subscriptions4'
    ],
  },
};
```

