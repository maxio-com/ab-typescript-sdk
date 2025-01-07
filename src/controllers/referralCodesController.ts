/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, commaPrefix, RequestOptions } from '../core';
import {
  ReferralValidationResponse,
  referralValidationResponseSchema,
} from '../models/referralValidationResponse';
import { string } from '../schema';
import { BaseController } from './baseController';
import { SingleStringErrorResponseError } from '../errors/singleStringErrorResponseError';

export class ReferralCodesController extends BaseController {
  /**
   * Use this method to determine if the referral code is valid and applicable within your Site. This
   * method is useful for validating referral codes that are entered by a customer.
   *
   * ## Referrals Documentation
   *
   * Full documentation on how to use the referrals feature in the Advanced Billing UI can be located
   * [here](https://maxio.zendesk.com/hc/en-us/sections/24286965611405-Referrals).
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
    req.query('code', mapped.code, commaPrefix);
    req.throwOn(
      404,
      SingleStringErrorResponseError,
      true,
      'Invalid referral code.'
    );
    req.authenticate([{ basicAuth: true }]);
    return req.callAsJson(referralValidationResponseSchema, requestOptions);
  }
}
