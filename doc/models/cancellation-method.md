
# Cancellation Method

The process used to cancel the subscription, if the subscription has been canceled. It is nil if the subscription's state is not canceled.

## Enumeration

`CancellationMethod`

## Fields

| Name |
|  --- |
| `MerchantUi` |
| `MerchantApi` |
| `Dunning` |
| `BillingPortal` |
| `Unknown` |
| `Imported` |

## Example

```ts
import { CancellationMethod } from '@maxio-com/advanced-billing-sdk';

const cancellationMethod = CancellationMethod.MerchantUi;
```

