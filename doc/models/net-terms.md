
# Net Terms

## Structure

`NetTerms`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defaultNetTerms` | `number \| undefined` | Optional | **Default**: `0` |
| `automaticNetTerms` | `number \| undefined` | Optional | **Default**: `0` |
| `remittanceNetTerms` | `number \| undefined` | Optional | **Default**: `0` |
| `netTermsOnRemittanceSignupsEnabled` | `boolean \| undefined` | Optional | **Default**: `false` |
| `customNetTermsEnabled` | `boolean \| undefined` | Optional | **Default**: `false` |

## Example

```ts
import { NetTerms } from '@maxio-com/advanced-billing-sdk';

const netTerms: NetTerms = {
  defaultNetTerms: 0,
  automaticNetTerms: 0,
  remittanceNetTerms: 0,
  netTermsOnRemittanceSignupsEnabled: false,
  customNetTermsEnabled: false,
};
```

