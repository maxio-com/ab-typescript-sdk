
# Invoice Line Item Event Data

## Structure

`InvoiceLineItemEventData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uid` | `string \| undefined` | Optional | - |
| `title` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |
| `quantity` | `number \| undefined` | Optional | - |
| `quantityDelta` | `number \| null \| undefined` | Optional | - |
| `unitPrice` | `string \| undefined` | Optional | - |
| `periodRangeStart` | `string \| undefined` | Optional | - |
| `periodRangeEnd` | `string \| undefined` | Optional | - |
| `amount` | `string \| undefined` | Optional | - |
| `lineReferences` | `string \| undefined` | Optional | - |
| `pricingDetailsIndex` | `number \| null \| undefined` | Optional | - |
| `pricingDetails` | [`InvoiceLineItemPricingDetail[] \| undefined`](../../doc/models/invoice-line-item-pricing-detail.md) | Optional | - |
| `taxCode` | `string \| undefined` | Optional | - |
| `taxAmount` | `string \| undefined` | Optional | - |
| `productId` | `number \| undefined` | Optional | - |
| `productPricePointId` | `number \| undefined` | Optional | - |
| `pricePointId` | `number \| null \| undefined` | Optional | - |
| `componentId` | `number \| null \| undefined` | Optional | - |
| `billingScheduleItemId` | `number \| null \| undefined` | Optional | - |
| `customItem` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "uid": "uid4",
  "title": "title0",
  "description": "description6",
  "quantity": 40,
  "quantity_delta": 114
}
```

