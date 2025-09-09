/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema } from '../schema.js';
import {
  TaxConfigurationKind,
  taxConfigurationKindSchema,
} from './taxConfigurationKind.js';
import {
  TaxDestinationAddress,
  taxDestinationAddressSchema,
} from './taxDestinationAddress.js';

export interface TaxConfiguration {
  kind?: TaxConfigurationKind;
  destinationAddress?: TaxDestinationAddress;
  /** Returns `true` when Chargify has been properly configured to charge tax using the specified tax system. More details about taxes: https://maxio.zendesk.com/hc/en-us/articles/24287012608909-Taxes-Overview */
  fullyConfigured?: boolean;
  [key: string]: unknown;
}

export const taxConfigurationSchema: Schema<TaxConfiguration> = expandoObject({
  kind: ['kind', optional(taxConfigurationKindSchema)],
  destinationAddress: [
    'destination_address',
    optional(taxDestinationAddressSchema),
  ],
  fullyConfigured: ['fully_configured', optional(boolean())],
});
