
# Configuration-Based Client Initialization

The SDK client can be initialized directly from a JSON configuration file using the `fromJsonConfig` static method available on the `Client` class. This allows you to store and load configuration settings from JSON files, making it easier to organize and manage different configurations across environments.

## Node.js Environment

In Node.js environments, you can use the `fs` module to read the configuration file from the file system.

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from '@maxio-com/advanced-billing-sdk';

// Provide absolute path for the configuration file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

## Providing Credentials

Authentication credentials are left out of the example configuration file below. Keep credentials out of `.env` and configuration files that are committed to source control or shipped with your application, and load them at runtime from a secret manager or your hosting platform's environment instead. Never bundle credentials into browser code. Pass them in code using the `withConfiguration` method:

```ts
import { Client } from '@maxio-com/advanced-billing-sdk';

const client = Client.fromJsonConfig(fileContent).withConfiguration({
  basicAuthCredentials: {
    username: 'BasicAuthUserName',
    password: 'BasicAuthPassword'
  },
});
```

## Example Configuration File

```json
{
  "timeout": 30000,
  "environment": "US",
  "site": "subdomain",
  "httpClientOptions": {
    "timeout": 30000,
    "retryConfig": {
      "maxNumberOfRetries": 3,
      "retryOnTimeout": true,
      "retryInterval": 10,
      "maximumRetryWaitTime": 120,
      "backoffFactor": 2,
      "httpStatusCodesToRetry": [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
      "httpMethodsToRetry": ["GET", "PUT", "DELETE"]
    },
    "proxySettings": {
      "address": "http://localhost:3000",
      "port": 8080
    }
  }
}
```

