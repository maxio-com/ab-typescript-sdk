
# Basic Authentication



Documentation for accessing and setting credentials for BasicAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| basicAuthUserName | `string` | The username to use with basic authentication | `username` |
| basicAuthPassword | `string` | The password to use with basic authentication | `password` |



**Note:** Auth credentials can be set using `basicAuthCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
import { Client } from '@maxio-com/advanced-billing-sdk';

const client = new Client({
  basicAuthCredentials: {
    username: 'BasicAuthUserName',
    password: 'BasicAuthPassword'
  },
});
```


