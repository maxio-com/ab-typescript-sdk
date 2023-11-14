
# Upsert Prepaid Configuration

## Structure

`UpsertPrepaidConfiguration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `initialFundingAmountInCents` | `bigint \| undefined` | Optional | - |
| `replenishToAmountInCents` | `bigint \| undefined` | Optional | - |
| `autoReplenish` | `boolean \| undefined` | Optional | - |
| `replenishThresholdAmountInCents` | `bigint \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "initial_funding_amount_in_cents": 40,
  "replenish_to_amount_in_cents": 42,
  "auto_replenish": false,
  "replenish_threshold_amount_in_cents": 242
}
```

