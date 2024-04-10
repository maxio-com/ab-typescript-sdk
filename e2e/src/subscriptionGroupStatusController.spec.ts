import {
  SubscriptionGroupSignupResponse,
  SubscriptionGroupStatusController,
} from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';
import { signUpSubscriptionGroup } from './utils/subscriptionsGroups';

describe('Subscription Group Status Controller', () => {
  let subscriptionGroupStatusController: SubscriptionGroupStatusController;
  let invalidSubscriptionGroupStatusController: SubscriptionGroupStatusController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    subscriptionGroupStatusController = new SubscriptionGroupStatusController(
      client
    );
    invalidSubscriptionGroupStatusController =
      new SubscriptionGroupStatusController(invalidClient);
  });

  describe('Cancel grouped subscriptions', () => {
    let contextSubscriptionCancel: SubscriptionGroupSignupResponse;
    beforeAll(async () => {
      const { subscriptionGroupsSignedResponse: context } =
        await signUpSubscriptionGroup();
      contextSubscriptionCancel = context;
    });
    it('should cancel a subscription', async () => {
      const uid = contextSubscriptionCancel.uid || '';
      const response =
        await subscriptionGroupStatusController.cancelSubscriptionsInGroup(uid);

      expect(response.statusCode).toBe(204);
    });

    test('should throw 404 error when the user sends invalid id', async () => {
      const promise =
        subscriptionGroupStatusController.cancelSubscriptionsInGroup('1000');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw an 401 error when user sends valid subscription with invalid credentials', async () => {
      const uid = contextSubscriptionCancel.uid || '';
      const promise =
        invalidSubscriptionGroupStatusController.cancelSubscriptionsInGroup(
          uid
        );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Delayed group cancellation subscriptions', () => {
    let contextSubscriptionDelay: SubscriptionGroupSignupResponse;
    beforeAll(async () => {
      const { subscriptionGroupsSignedResponse: context } =
        await signUpSubscriptionGroup();
      contextSubscriptionDelay = context;
    });
    it('should delay a group cancellation subscription', async () => {
      const uid = contextSubscriptionDelay.uid || '';
      const response =
        await subscriptionGroupStatusController.initiateDelayedCancellationForGroup(
          uid
        );

      expect(response.statusCode).toBe(204);
    });

    test('should throw 404 error when the user sends invalid id', async () => {
      const promise =
        subscriptionGroupStatusController.initiateDelayedCancellationForGroup(
          '1000'
        );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw an 401 error when user sends valid subscription with invalid credentials', async () => {
      const uid = contextSubscriptionDelay.uid || '';
      const promise =
        invalidSubscriptionGroupStatusController.initiateDelayedCancellationForGroup(
          uid
        );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Cancel delayed group cancellation subscriptions', () => {
    let contextSubscriptionCancelDelay: SubscriptionGroupSignupResponse;
    beforeAll(async () => {
      const { subscriptionGroupsSignedResponse: context } =
        await signUpSubscriptionGroup();
      contextSubscriptionCancelDelay = context;
    });

    it('should cancel delay a group cancellation subscription', async () => {
      const uid = contextSubscriptionCancelDelay.uid || '';
      await subscriptionGroupStatusController.initiateDelayedCancellationForGroup(
        uid
      );
      const response =
        await subscriptionGroupStatusController.cancelDelayedCancellationForGroup(
          uid
        );

      expect(response.statusCode).toBe(204);
    });

    test('should throw 404 error when the user sends invalid id', async () => {
      const promise =
        subscriptionGroupStatusController.cancelDelayedCancellationForGroup(
          '1000'
        );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw an 401 error when user sends valid subscription with invalid credentials', async () => {
      const uid = contextSubscriptionCancelDelay.uid || '';
      const promise =
        invalidSubscriptionGroupStatusController.cancelDelayedCancellationForGroup(
          uid
        );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Reactivate / Resume Subscription Group', () => {
    let contextSubscriptionReactivateResume: SubscriptionGroupSignupResponse;
    beforeAll(async () => {
      const { subscriptionGroupsSignedResponse: context } =
        await signUpSubscriptionGroup();
      contextSubscriptionReactivateResume = context;
    });

    it('should reactivate/resume a group subscription', async () => {
      const uid = contextSubscriptionReactivateResume.uid || '';
      await subscriptionGroupStatusController.cancelSubscriptionsInGroup(uid);
      const response =
        await subscriptionGroupStatusController.reactivateSubscriptionGroup(
          uid,
          {
            resume: true,
          }
        );

      expect(response.statusCode).toBe(200);
    });

    test('should throw 404 error when the user sends invalid id', async () => {
      const promise =
        subscriptionGroupStatusController.reactivateSubscriptionGroup('1000');
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw an 401 error when user sends valid subscription with invalid credentials', async () => {
      const uid = contextSubscriptionReactivateResume.uid || '';
      const promise =
        invalidSubscriptionGroupStatusController.reactivateSubscriptionGroup(
          uid
        );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
