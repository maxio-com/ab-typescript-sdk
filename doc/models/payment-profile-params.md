
# Payment Profile Params

PCI-safe cardholder fields only. Full card numbers, CVV, and billing address are never included.

## Structure

`PaymentProfileParams`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `cardType` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "first_name": "first_name2",
  "last_name": "last_name0",
  "card_type": "card_type8"
}
```

