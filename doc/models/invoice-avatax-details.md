
# Invoice Avatax Details

## Structure

`InvoiceAvataxDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| null \| undefined` | Optional | - |
| `status` | `string \| null \| undefined` | Optional | - |
| `documentCode` | `string \| null \| undefined` | Optional | - |
| `commitDate` | `string \| null \| undefined` | Optional | - |
| `modifyDate` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { InvoiceAvataxDetails } from '@maxio-com/advanced-billing-sdk';

const invoiceAvataxDetails: InvoiceAvataxDetails = {
  id: BigInt(184),
  status: 'status2',
  documentCode: 'document_code4',
  commitDate: '2016-03-13T12:52:32.123Z',
  modifyDate: '2016-03-13T12:52:32.123Z',
};
```

