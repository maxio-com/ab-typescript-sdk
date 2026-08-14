
# Create Metadata Request

## Structure

`CreateMetadataRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | [`CreateMetadata[]`](../../doc/models/create-metadata.md) | Required | - |

## Example

```ts
import { CreateMetadataRequest } from '@maxio-com/advanced-billing-sdk';

const createMetadataRequest: CreateMetadataRequest = {
  metadata: [
    {
      name: 'name6',
      value: 'value8',
    }
  ],
};
```

