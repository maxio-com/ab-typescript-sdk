/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import { Register, registerSchema } from './register.js';

/** Contract linked to the scheduled renewal configuration. */
export interface Contract {
  id?: number;
  maxioId?: string;
  number?: string | null;
  register?: Register;
  [key: string]: unknown;
}

export const contractSchema: Schema<Contract> = lazy(() =>
  expandoObject({
    id: ['id', optional(number())],
    maxioId: ['maxio_id', optional(string())],
    number: ['number', optional(nullable(string()))],
    register: ['register', optional(registerSchema)],
  })
);
