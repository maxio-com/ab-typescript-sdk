
# Custom Field Value Change

## Structure

`CustomFieldValueChange`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventType` | `string` | Required | - |
| `metafieldName` | `string` | Required | - |
| `metafieldId` | `number` | Required | - |
| `oldValue` | `string \| null` | Required | - |
| `newValue` | `string \| null` | Required | - |
| `resourceType` | `string` | Required | - |
| `resourceId` | `number` | Required | - |

## Example

```ts
import { CustomFieldValueChange } from '@maxio-com/advanced-billing-sdk';

const customFieldValueChange: CustomFieldValueChange = {
  eventType: 'event_type8',
  metafieldName: 'metafield_name2',
  metafieldId: 138,
  oldValue: 'old_value6',
  newValue: 'new_value2',
  resourceType: 'resource_type6',
  resourceId: 14,
};
```

