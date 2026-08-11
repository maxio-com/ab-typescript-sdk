
# Renewal Preview Request

## Structure

`RenewalPreviewRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `components` | [`RenewalPreviewComponent[] \| undefined`](../../doc/models/renewal-preview-component.md) | Optional | (Optional) Array of component definitions to preview. Providing any component definitions here will override the actual components on the subscription (and their quantities), and the billing preview will contain only these components (in addition to any product base fees). |

## Example

```ts
import { RenewalPreviewRequest } from '@maxio-com/advanced-billing-sdk';

const renewalPreviewRequest: RenewalPreviewRequest = {
  components: [
    {
      componentId: 'String5',
      quantity: 210,
      pricePointId: 'String3',
    }
  ],
};
```

