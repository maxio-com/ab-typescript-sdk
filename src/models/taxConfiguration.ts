/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';
import {
  TaxConfigurationKind,
  taxConfigurationKindSchema,
} from './taxConfigurationKind';
import {
  TaxDestinationAddress,
  taxDestinationAddressSchema,
} from './taxDestinationAddress';

export interface TaxConfiguration {
  kind?: TaxConfigurationKind;
  destinationAddress?: TaxDestinationAddress;
  /** Returns `true` when Chargify has been properly configured to charge tax using the specified tax system. More details about taxes: https://maxio-chargify.zendesk.com/hc/en-us/articles/5405488905869-Taxes-Introduction */
  fullyConfigured?: boolean;
}

export const taxConfigurationSchema: Schema<TaxConfiguration> = object({
  kind: ['kind', optional(taxConfigurationKindSchema)],
  destinationAddress: [
    'destination_address',
    optional(taxDestinationAddressSchema),
  ],
  fullyConfigured: ['fully_configured', optional(boolean())],
});
