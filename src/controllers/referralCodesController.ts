/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  SingleStringErrorResponseError,
} from '../errors/singleStringErrorResponseError';
import {
  ReferralValidationResponse,
  referralValidationResponseSchema,
} from '../models/referralValidationResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class ReferralCodesController extends BaseController {
  /**
   * Use this method to determine if the referral code is valid and applicable within your Site. This
   * method is useful for validating referral codes that are entered by a customer.
   *
   * ## Referrals Documentation
   *
   * Full documentation on how to use the referrals feature in the Chargify UI can be located
   * [here](https://chargify.zendesk.com/hc/en-us/articles/4407802831643).
   *
   * ## Server Response
   *
   * If the referral code is valid the status code will be `200` and the referral code will be returned.
   * If the referral code is invalid, a `404` response will be returned.
   *
   * @param code The referral code you are trying to validate
   * @return Response from the API call
   */
  async validateReferralCode(
    code: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ReferralValidationResponse>> {
    const req = this.createRequest('GET', '/referral_codes/validate.json');
    const mapped = req.prepareArgs({ code: [code, string()] });
    req.query('code', mapped.code);
    req.throwOn(404, SingleStringErrorResponseError, 'Not Found');
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(referralValidationResponseSchema, requestOptions);
  }
}
