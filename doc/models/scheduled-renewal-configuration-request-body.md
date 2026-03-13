
# Scheduled Renewal Configuration Request Body

## Structure

`ScheduledRenewalConfigurationRequestBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `startsAt` | `string \| undefined` | Optional | (Optional) Start of the renewal term. |
| `endsAt` | `string \| undefined` | Optional | (Optional) End of the renewal term. |
| `lockInAt` | `string \| undefined` | Optional | (Optional) Lock-in date for the renewal. |
| `contractId` | `number \| undefined` | Optional | (Optional) Existing contract to associate with the scheduled renewal. Contracts must be enabled for your site. |
| `createNewContract` | `boolean \| undefined` | Optional | (Optional) Set to true to create a new contract when contracts are enabled. Contracts must be enabled for your site. |

## Example (as JSON)

```json
{
  "starts_at": "2016-03-13T12:52:32.123Z",
  "ends_at": "2016-03-13T12:52:32.123Z",
  "lock_in_at": "2016-03-13T12:52:32.123Z",
  "contract_id": 110,
  "create_new_contract": false
}
```

