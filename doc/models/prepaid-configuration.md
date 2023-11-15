
# Prepaid Configuration

## Structure

`PrepaidConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `initialFundingAmountInCents` | `bigint \| undefined` | Optional | - |
| `replenishToAmountInCents` | `bigint \| undefined` | Optional | - |
| `autoReplenish` | `boolean \| undefined` | Optional | - |
| `replenishThresholdAmountInCents` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 156,
  "initial_funding_amount_in_cents": 88,
  "replenish_to_amount_in_cents": 166,
  "auto_replenish": false,
  "replenish_threshold_amount_in_cents": 222
}
```

