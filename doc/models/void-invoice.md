
# Void Invoice

## Structure

`VoidInvoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string` | Required | **Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { VoidInvoice } from '@maxio-com/advanced-billing-sdk';

const voidInvoice: VoidInvoice = {
  reason: 'reason8',
};
```

