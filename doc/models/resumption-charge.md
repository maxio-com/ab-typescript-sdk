
# Resumption Charge

(For calendar billing subscriptions only) The way that the resumed subscription's charge should be handled

## Enumeration

`ResumptionCharge`

## Fields

| Name |
|  --- |
| `Prorated` |
| `Immediate` |
| `Delayed` |

## Example

```ts
import { ResumptionCharge } from '@maxio-com/advanced-billing-sdk';

const resumptionCharge = ResumptionCharge.Immediate;
```

