
# Portal Management Link

## Structure

`PortalManagementLink`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | - |
| `fetchCount` | `number \| undefined` | Optional | - |
| `createdAt` | `string \| undefined` | Optional | - |
| `newLinkAvailableAt` | `string \| undefined` | Optional | - |
| `expiresAt` | `string \| undefined` | Optional | - |
| `lastInviteSentAt` | `string \| null \| undefined` | Optional | - |

## Example

```ts
import { PortalManagementLink } from '@maxio-com/advanced-billing-sdk';

const portalManagementLink: PortalManagementLink = {
  url: 'url8',
  fetchCount: 88,
  createdAt: '2016-03-13T12:52:32.123Z',
  newLinkAvailableAt: '2016-03-13T12:52:32.123Z',
  expiresAt: '2016-03-13T12:52:32.123Z',
};
```

