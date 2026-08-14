
# Invoice Display Settings

## Structure

`InvoiceDisplaySettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hideZeroSubtotalLines` | `boolean \| undefined` | Optional | - |
| `includeDiscountsOnLines` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { InvoiceDisplaySettings } from '@maxio-com/advanced-billing-sdk';

const invoiceDisplaySettings: InvoiceDisplaySettings = {
  hideZeroSubtotalLines: false,
  includeDiscountsOnLines: false,
};
```

