
# Revoked Invitation

## Structure

`RevokedInvitation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lastSentAt` | `string \| undefined` | Optional | - |
| `lastAcceptedAt` | `string \| undefined` | Optional | - |
| `uninvitedCount` | `number \| undefined` | Optional | - |

## Example

```ts
import { RevokedInvitation } from '@maxio-com/advanced-billing-sdk';

const revokedInvitation: RevokedInvitation = {
  lastSentAt: 'last_sent_at8',
  lastAcceptedAt: 'last_accepted_at8',
  uninvitedCount: 130,
};
```

