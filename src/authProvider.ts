/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  basicAuthenticationProvider,
  compositeAuthenticationProvider,
} from './authentication';
import { Configuration } from './configuration';

export function createAuthProviderFromConfig(config: Partial<Configuration>) {
  const authConfig = {
    basicAuth:
      config.basicAuthCredentials &&
      basicAuthenticationProvider(
        config.basicAuthCredentials.username,
        config.basicAuthCredentials.password
      ),
  };

  return compositeAuthenticationProvider<
    keyof typeof authConfig,
    typeof authConfig
  >(authConfig);
}
