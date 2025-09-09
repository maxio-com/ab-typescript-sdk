
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| site | `string` | The subdomain for your Advanced Billing site.<br>*Default*: `'subdomain'` |
| environment | `Environment` | The API environment. <br> **Default: `Environment.US`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `120000` |
| httpClientOptions | [`Partial<HttpClientOptions>`](../doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| basicAuthCredentials | [`BasicAuthCredentials`](auth/basic-authentication.md) | The credential object for basicAuth |

The API client can be initialized as follows:

```ts
import { Client, Environment } from '@maxio-com/advanced-billing-sdk';

const client = new Client({
  basicAuthCredentials: {
    username: 'BasicAuthUserName',
    password: 'BasicAuthPassword'
  },
  timeout: 120000,
  environment: Environment.US,
  site: 'subdomain',
});
```

