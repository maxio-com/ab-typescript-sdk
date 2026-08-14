
# Update Reason Code

## Structure

`UpdateReasonCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The unique identifier for the ReasonCode |
| `description` | `string \| undefined` | Optional | The friendly summary of what the code signifies |
| `position` | `number \| undefined` | Optional | The order that code appears in lists |

## Example

```ts
import { UpdateReasonCode } from '@maxio-com/advanced-billing-sdk';

const updateReasonCode: UpdateReasonCode = {
  code: 'code4',
  description: 'description6',
  position: 4,
};
```

