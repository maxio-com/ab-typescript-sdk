/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema } from '../schema';

export interface ReactivateSubscriptionGroupRequest {
  resume?: boolean;
  resumeMembers?: boolean;
  [key: string]: unknown;
}

export const reactivateSubscriptionGroupRequestSchema: Schema<ReactivateSubscriptionGroupRequest> = expandoObject(
  {
    resume: ['resume', optional(boolean())],
    resumeMembers: ['resume_members', optional(boolean())],
  }
);
