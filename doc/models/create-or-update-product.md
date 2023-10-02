
# Create or Update Product

## Structure

`CreateOrUpdateProduct`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `handle` | `string \| undefined` | Optional | - |
| `description` | `string` | Required | - |
| `accountingCode` | `string \| undefined` | Optional | - |
| `requireCreditCard` | `boolean \| undefined` | Optional | - |
| `priceInCents` | `number` | Required | - |
| `interval` | `number` | Required | - |
| `intervalUnit` | `string` | Required | - |
| `autoCreateSignupPage` | `boolean \| undefined` | Optional | - |
| `taxCode` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name8",
  "handle": "handle4",
  "description": "description8",
  "accounting_code": "accounting_code4",
  "require_credit_card": false,
  "price_in_cents": 190,
  "interval": 174,
  "interval_unit": "interval_unit8",
  "auto_create_signup_page": false,
  "tax_code": "tax_code6"
}
```

