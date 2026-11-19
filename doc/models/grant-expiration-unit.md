
# Grant Expiration Unit

How long a wallet grant funded by a `usage_limit` feature stays spendable. `day` and `month` need a `grant_expiration_interval`; `until_next_refill` takes none and expires the grant when the next refill lands. Omit both fields for a grant that never expires.

## Enumeration

`GrantExpirationUnit`

## Fields

| Name |
|  --- |
| `Day` |
| `Month` |
| `UntilNextRefill` |

## Example

```ts
import { GrantExpirationUnit } from '@maxio-com/advanced-billing-sdk';

const grantExpirationUnit = GrantExpirationUnit.Day;
```

