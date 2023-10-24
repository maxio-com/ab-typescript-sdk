
# Webhook

## Structure

`Webhook`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `event` | `string \| undefined` | Optional | A string describing which event type produced the given webhook |
| `id` | `number \| undefined` | Optional | The unique identifier for the webhooks (unique across all of Chargify). This is not changed on a retry/replay of the same webhook, so it may be used to avoid duplicate action for the same event. |
| `createdAt` | `string \| undefined` | Optional | Timestamp indicating when the webhook was created |
| `lastError` | `string \| undefined` | Optional | Text describing the status code and/or error from the last failed attempt to send the Webhook. When a webhook is retried and accepted, this field will be cleared. |
| `lastErrorAt` | `string \| undefined` | Optional | Timestamp indicating when the last non-acceptance occurred. If a webhook is later resent and accepted, this field will be cleared. |
| `acceptedAt` | `string \| null \| undefined` | Optional | Timestamp indicating when the webhook was accepted by the merchant endpoint. When a webhook is explicitly replayed by the merchant, this value will be cleared until it is accepted again. |
| `lastSentAt` | `string \| undefined` | Optional | Timestamp indicating when the most recent attempt was made to send the webhook |
| `lastSentUrl` | `string \| undefined` | Optional | The url that the endpoint was last sent to. |
| `successful` | `boolean \| undefined` | Optional | A boolean flag describing whether the webhook was accepted by the webhook endpoint for the most recent attempt. (Acceptance is defined by receiving a “200 OK” HTTP response within a reasonable timeframe, i.e. 15 seconds) |
| `body` | `string \| undefined` | Optional | The data sent within the webhook post |
| `signature` | `string \| undefined` | Optional | The calculated webhook signature |
| `signatureHmacSha256` | `string \| undefined` | Optional | The calculated HMAC-SHA-256 webhook signature |

## Example (as JSON)

```json
{
  "event": "event6",
  "id": 154,
  "created_at": "created_at6",
  "last_error": "last_error8",
  "last_error_at": "last_error_at6"
}
```

