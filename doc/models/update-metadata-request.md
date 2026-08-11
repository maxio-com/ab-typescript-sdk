
# Update Metadata Request

## Structure

`UpdateMetadataRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | [`UpdateMetadata \| undefined`](../../doc/models/update-metadata.md) | Optional | - |

## Example

```ts
import { UpdateMetadataRequest } from '@maxio-com/advanced-billing-sdk';

const updateMetadataRequest: UpdateMetadataRequest = {
  metadata: {
    currentName: 'current_name0',
    name: 'name6',
    value: 'value8',
  },
};
```

