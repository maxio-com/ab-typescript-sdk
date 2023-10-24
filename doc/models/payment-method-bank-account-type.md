
# Payment Method Bank Account Type

## Structure

`PaymentMethodBankAccountType`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maskedAccountNumber` | `string \| undefined` | Optional | - |
| `maskedRoutingNumber` | `string \| undefined` | Optional | - |
| `type` | `string \| undefined` | Optional | **Default**: `'bank_account'` |

## Example (as JSON)

```json
{
  "type": "bank_account",
  "masked_account_number": "masked_account_number2",
  "masked_routing_number": "masked_routing_number2"
}
```

