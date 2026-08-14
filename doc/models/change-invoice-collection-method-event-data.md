
# Change Invoice Collection Method Event Data

Example schema for an `change_invoice_collection_method` event

## Structure

`ChangeInvoiceCollectionMethodEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromCollectionMethod` | `string` | Required | The previous collection method of the invoice. |
| `toCollectionMethod` | `string` | Required | The new collection method of the invoice. |

## Example

```ts
import {
  ChangeInvoiceCollectionMethodEventData,
} from '@maxio-com/advanced-billing-sdk';

const changeInvoiceCollectionMethodEventData: ChangeInvoiceCollectionMethodEventData = {
  fromCollectionMethod: 'from_collection_method8',
  toCollectionMethod: 'to_collection_method4',
};
```

