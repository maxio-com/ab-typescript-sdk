
# Update Invoice Item

A line item change for a draft ad hoc invoice. Supports the same attributes as line items on invoice creation, plus `uid` and `_destroy` for updating or removing existing line items.

## Structure

`UpdateInvoiceItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string \| undefined` | Optional | - |
| `quantity` | [`UpdateInvoiceItemQuantity \| undefined`](../../doc/models/containers/update-invoice-item-quantity.md) | Optional | This is a container for one-of cases. |
| `unitPrice` | [`UpdateInvoiceItemUnitPrice \| undefined`](../../doc/models/containers/update-invoice-item-unit-price.md) | Optional | This is a container for one-of cases. |
| `taxable` | `boolean \| undefined` | Optional | Set to true to automatically calculate taxes. Site must be configured to use and calculate taxes. If using AvaTax, a tax_code parameter must also be sent. |
| `taxCode` | `string \| undefined` | Optional | A string representing the tax code related to the product type. This is especially important when using AvaTax to tax based on locale. This attribute has a max length of 25 characters. |
| `periodRangeStart` | `string \| undefined` | Optional | YYYY-MM-DD |
| `periodRangeEnd` | `string \| undefined` | Optional | YYYY-MM-DD |
| `productId` | [`UpdateInvoiceItemProductId \| undefined`](../../doc/models/containers/update-invoice-item-product-id.md) | Optional | This is a container for one-of cases. |
| `componentId` | [`UpdateInvoiceItemComponentId \| undefined`](../../doc/models/containers/update-invoice-item-component-id.md) | Optional | This is a container for one-of cases. |
| `pricePointId` | [`UpdateInvoiceItemPricePointId \| undefined`](../../doc/models/containers/update-invoice-item-price-point-id.md) | Optional | This is a container for one-of cases. |
| `productPricePointId` | [`UpdateInvoiceItemProductPricePointId \| undefined`](../../doc/models/containers/update-invoice-item-product-price-point-id.md) | Optional | This is a container for one-of cases. |
| `description` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `255` |
| `uid` | `string \| undefined` | Optional | Unique identifier of an existing line item on the invoice. When provided, the matching line item is updated with the submitted attributes. When omitted, a new line item is added to the invoice. |
| `destroy` | `boolean \| undefined` | Optional | Set to `true` together with `uid` to remove the matching line item from the invoice. Line items not referenced in the request remain unchanged. |

## Example

```ts
import { UpdateInvoiceItem } from '@maxio-com/advanced-billing-sdk';

const updateInvoiceItem: UpdateInvoiceItem = {
  title: 'title8',
  quantity: 94.82,
  unitPrice: 78.04,
  taxable: false,
  taxCode: 'tax_code0',
};
```

