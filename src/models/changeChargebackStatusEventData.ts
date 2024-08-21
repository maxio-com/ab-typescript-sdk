/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema } from '../schema';
import { ChargebackStatus, chargebackStatusSchema } from './chargebackStatus';

/** Example schema for an `change_chargeback_status` event */
export interface ChangeChargebackStatusEventData {
  chargebackStatus: ChargebackStatus;
  [key: string]: unknown;
}

export const changeChargebackStatusEventDataSchema: Schema<ChangeChargebackStatusEventData> = expandoObject(
  { chargebackStatus: ['chargeback_status', chargebackStatusSchema] }
);
