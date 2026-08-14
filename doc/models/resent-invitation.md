
# Resent Invitation

## Structure

`ResentInvitation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lastSentAt` | `string \| undefined` | Optional | - |
| `lastAcceptedAt` | `string \| undefined` | Optional | - |
| `sendInviteLinkText` | `string \| undefined` | Optional | - |
| `uninvitedCount` | `number \| undefined` | Optional | - |
| `lastInviteSentAt` | `string \| undefined` | Optional | - |
| `lastInviteAcceptedAt` | `string \| undefined` | Optional | - |

## Example

```ts
import { ResentInvitation } from '@maxio-com/advanced-billing-sdk';

const resentInvitation: ResentInvitation = {
  lastSentAt: 'last_sent_at0',
  lastAcceptedAt: 'last_accepted_at0',
  sendInviteLinkText: 'send_invite_link_text8',
  uninvitedCount: 178,
  lastInviteSentAt: '2024-01-01T04:30:00+00:00',
  lastInviteAcceptedAt: '2024-01-01T04:35:00+00:00',
};
```

