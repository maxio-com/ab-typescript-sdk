
# Create Invoice Item

## Structure

`CreateInvoiceItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string \| undefined` | Optional | - |
| `quantity` | [`CreateInvoiceItemQuantity \| undefined`](../../doc/models/containers/create-invoice-item-quantity.md) | Optional | This is a container for one-of cases. |
| `unitPrice` | [`CreateInvoiceItemUnitPrice \| undefined`](../../doc/models/containers/create-invoice-item-unit-price.md) | Optional | This is a container for one-of cases. |
| `taxable` | `boolean \| undefined` | Optional | Set to true to automatically calculate taxes. Site must be configured to use and calculate taxes.<br><br>If using Avalara, a tax_code parameter must also be sent. |
| `taxCode` | `string \| undefined` | Optional | - |
| `periodRangeStart` | `string \| undefined` | Optional | YYYY-MM-DD |
| `periodRangeEnd` | `string \| undefined` | Optional | YYYY-MM-DD |
| `productId` | [`CreateInvoiceItemProductId \| undefined`](../../doc/models/containers/create-invoice-item-product-id.md) | Optional | This is a container for one-of cases. |
| `componentId` | [`CreateInvoiceItemComponentId \| undefined`](../../doc/models/containers/create-invoice-item-component-id.md) | Optional | This is a container for one-of cases. |
| `pricePointId` | [`CreateInvoiceItemPricePointId \| undefined`](../../doc/models/containers/create-invoice-item-price-point-id.md) | Optional | This is a container for one-of cases. |
| `productPricePointId` | [`CreateInvoiceItemProductPricePointId \| undefined`](../../doc/models/containers/create-invoice-item-product-price-point-id.md) | Optional | This is a container for one-of cases. |
| `description` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "title": "title2",
  "quantity": 154.86,
  "unit_price": 138.08,
  "taxable": false,
  "tax_code": "tax_code4"
}
```

