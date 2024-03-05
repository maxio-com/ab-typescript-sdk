import { ReferralCodesController } from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';
import { createSubscription } from './utils/subscription';
describe('Referral codes', () => {
  let referralCodesController: ReferralCodesController;
  let invalidReferralCodesController: ReferralCodesController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    referralCodesController = new ReferralCodesController(client);
    invalidReferralCodesController = new ReferralCodesController(invalidClient);
  });

  describe('Validate Referral codes', () => {
    test('should get a valid referral code data', async () => {
      const { subscriptionResponse } = await createSubscription({});
      const referralCodesResponse =
        await referralCodesController.validateReferralCode(
          subscriptionResponse?.subscription?.referralCode || ''
        );
      expect(referralCodesResponse.statusCode).toBe(200);
    });

    test('should throw a 404 error when the referral code is invalid', async () => {
      const promise = referralCodesController.validateReferralCode('8y7jqr');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw a 401 error when the user sends incorrect credentials', async () => {
      const promise =
        invalidReferralCodesController.validateReferralCode('CODE');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
