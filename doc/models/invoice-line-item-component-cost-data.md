
# Invoice Line Item Component Cost Data

## Structure

`InvoiceLineItemComponentCostData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rates` | [`ComponentCostData[] \| undefined`](../../doc/models/component-cost-data.md) | Optional | - |

## Example

```ts
import {
  InvoiceLineItemComponentCostData,
} from '@maxio-com/advanced-billing-sdk';

const invoiceLineItemComponentCostData: InvoiceLineItemComponentCostData = {
  rates: [
    {
      componentCodeId: 116,
      pricePointId: 226,
      productId: 94,
      quantity: 'quantity0',
      amount: 'amount6',
    },
    {
      componentCodeId: 116,
      pricePointId: 226,
      productId: 94,
      quantity: 'quantity0',
      amount: 'amount6',
    }
  ],
};
```

