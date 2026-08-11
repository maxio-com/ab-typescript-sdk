
# Create or Update Endpoint Request

Used to Create or Update Endpoint.

## Structure

`CreateOrUpdateEndpointRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `endpoint` | [`CreateOrUpdateEndpoint`](../../doc/models/create-or-update-endpoint.md) | Required | Used to Create or Update Endpoint. |

## Example

```ts
import {
  CreateOrUpdateEndpointRequest,
  WebhookSubscription,
} from '@maxio-com/advanced-billing-sdk';

const createOrUpdateEndpointRequest: CreateOrUpdateEndpointRequest = {
  endpoint: {
    url: 'url2',
    webhookSubscriptions: [
      WebhookSubscription.StatementClosed
    ],
  },
};
```

