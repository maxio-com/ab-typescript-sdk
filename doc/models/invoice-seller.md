
# Invoice Seller

Information about the seller (merchant) listed on the masthead of the invoice.

## Structure

`InvoiceSeller`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | - |
| `address` | [`InvoiceAddress \| undefined`](../../doc/models/invoice-address.md) | Optional | - |
| `phone` | `string \| undefined` | Optional | - |
| `logoUrl` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name0",
  "address": {
    "street": "street6",
    "line2": "line20",
    "city": "city6",
    "state": "state2",
    "zip": "zip0"
  },
  "phone": "phone0",
  "logo_url": "logo_url0"
}
```

