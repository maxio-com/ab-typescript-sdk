/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { createAuthProviderFromConfig } from './authProvider';
import {
  AuthParams,
  ClientInterface,
  SdkRequestBuilder,
  SdkRequestBuilderFactory,
  Server,
} from './clientInterface';
import { Configuration, Environment } from './configuration';
import {
  DEFAULT_CONFIGURATION,
  DEFAULT_RETRY_CONFIG,
} from './defaultConfiguration';
import { ApiError } from './core';
import { pathTemplate, SkipEncode } from './core';
import { setHeader } from './core';
import { updateUserAgent } from './core';
import {
  AbortError,
  AuthenticatorInterface,
  createRequestBuilderFactory,
  HttpClientInterface,
  RetryConfiguration,
} from './core';
import { HttpClient } from './clientAdapter';

export class Client implements ClientInterface {
  private _config: Readonly<Configuration>;
  private _timeout: number;
  private _retryConfig: RetryConfiguration;
  private _requestBuilderFactory: SdkRequestBuilderFactory;
  private _userAgent: string;

  constructor(config?: Partial<Configuration>) {
    this._config = {
      ...DEFAULT_CONFIGURATION,
      ...config,
    };
    this._retryConfig = {
      ...DEFAULT_RETRY_CONFIG,
      ...this._config.httpClientOptions?.retryConfig,
    };
    this._timeout =
      typeof this._config.httpClientOptions?.timeout != 'undefined'
        ? this._config.httpClientOptions.timeout
        : this._config.timeout;
    this._userAgent = updateUserAgent(
      'AB SDK TypeScript:7.0.0 on OS {os-info}'
    );
    this._requestBuilderFactory = createRequestHandlerFactory(
      (server) => getBaseUri(server, this._config),
      createAuthProviderFromConfig(this._config),
      new HttpClient(AbortError, {
        timeout: this._timeout,
        clientConfigOverrides: this._config.unstable_httpClientOptions,
        httpAgent: this._config.httpClientOptions?.httpAgent,
        httpsAgent: this._config.httpClientOptions?.httpsAgent,
      }),
      [
        withErrorHandlers,
        withUserAgent(this._userAgent),
        withAuthenticationByDefault,
      ],
      this._retryConfig
    );
  }

  public getRequestBuilderFactory(): SdkRequestBuilderFactory {
    return this._requestBuilderFactory;
  }

  /**
   * Clone this client and override given configuration options
   */
  public withConfiguration(config: Partial<Configuration>) {
    return new Client({ ...this._config, ...config });
  }
}

function createHttpClientAdapter(client: HttpClient): HttpClientInterface {
  return async (request, requestOptions) => {
    return await client.executeRequest(request, requestOptions);
  };
}

function getBaseUri(
  server: Server = 'production',
  config: Configuration
): string {
  if (config.environment === Environment.US) {
    if (server === 'production') {
      return pathTemplate`https://${new SkipEncode(config.site)}.chargify.com`;
    }
    if (server === 'ebb') {
      return pathTemplate`https://events.chargify.com/${new SkipEncode(
        config.site
      )}`;
    }
  }
  if (config.environment === Environment.EU) {
    if (server === 'production') {
      return pathTemplate`https://${new SkipEncode(
        config.site
      )}.ebilling.maxio.com`;
    }
    if (server === 'ebb') {
      return pathTemplate`https://events.chargify.com/${new SkipEncode(
        config.site
      )}`;
    }
  }
  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(
  baseUrlProvider: (server?: Server) => string,
  authProvider: AuthenticatorInterface<AuthParams>,
  httpClient: HttpClient,
  addons: ((rb: SdkRequestBuilder) => void)[],
  retryConfig: RetryConfiguration
): SdkRequestBuilderFactory {
  const requestBuilderFactory = createRequestBuilderFactory(
    createHttpClientAdapter(httpClient),
    baseUrlProvider,
    ApiError,
    authProvider,
    retryConfig
  );

  return tap(requestBuilderFactory, ...addons);
}

function tap(
  requestBuilderFactory: SdkRequestBuilderFactory,
  ...callback: ((requestBuilder: SdkRequestBuilder) => void)[]
): SdkRequestBuilderFactory {
  return (...args) => {
    const requestBuilder = requestBuilderFactory(...args);
    callback.forEach((c) => c(requestBuilder));
    return requestBuilder;
  };
}

function withErrorHandlers(rb: SdkRequestBuilder) {
  rb.defaultToError(ApiError);
}

function withUserAgent(userAgent: string) {
  return (rb: SdkRequestBuilder) => {
    rb.interceptRequest((request) => {
      const headers = request.headers ?? {};
      setHeader(headers, 'user-agent', userAgent);
      return { ...request, headers };
    });
  };
}

function withAuthenticationByDefault(rb: SdkRequestBuilder) {
  rb.authenticate([{ basicAuth: true }]);
}
