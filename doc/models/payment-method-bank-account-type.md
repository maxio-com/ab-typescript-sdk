
# Payment Method Bank Account Type

## Structure

`PaymentMethodBankAccountType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maskedAccountNumber` | `string` | Required | - |
| `maskedRoutingNumber` | `string` | Required | - |
| `type` | `string` | Required | **Default**: `'bank_account'` |

## Example (as JSON)

```json
{
  "masked_account_number": "masked_account_number2",
  "masked_routing_number": "masked_routing_number2",
  "type": "bank_account"
}
```

