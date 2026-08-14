
# Create Reason Code

## Structure

`CreateReasonCode`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string` | Required | The unique identifier for the ReasonCode |
| `description` | `string` | Required | The friendly summary of what the code signifies |
| `position` | `number \| undefined` | Optional | The order that code appears in lists |

## Example

```ts
import { CreateReasonCode } from '@maxio-com/advanced-billing-sdk';

const createReasonCode: CreateReasonCode = {
  code: 'code4',
  description: 'description6',
  position: 40,
};
```

