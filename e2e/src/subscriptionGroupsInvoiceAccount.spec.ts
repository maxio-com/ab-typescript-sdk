import {
  CreatePrepaymentMethod,
  SubscriptionGroupSignupResponse,
  SubscriptionInvoiceAccountController,
} from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';
import { signUpSubscriptionGroup } from './utils/subscriptionsGroups';

describe('Subscription Groups Invoice Account', () => {
  let subscriptionInvoiceAccountController: SubscriptionInvoiceAccountController;
  let invalidSubscriptionInvoiceAccountController: SubscriptionInvoiceAccountController;
  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    subscriptionInvoiceAccountController =
      new SubscriptionInvoiceAccountController(client);
    invalidSubscriptionInvoiceAccountController =
      new SubscriptionInvoiceAccountController(invalidClient);
  });

  describe('Create subscription Group Payment', () => {
    let contextSubscription: SubscriptionGroupSignupResponse;
    beforeAll(async () => {
      const { subscriptionGroupsSignedResponse: context } =
        await signUpSubscriptionGroup();
      contextSubscription = context;
    });
    test('should create a prepaid subscription group', async () => {
      const idSubscription =
        (contextSubscription &&
          contextSubscription.subscriptionIds &&
          contextSubscription.subscriptionIds[0]) ||
        0;

      const prepaidInformation = {
        prepayment: {
          amount: 100.0,
          details: 'details',
          memo: 'Memo description',
          method: CreatePrepaymentMethod.Check,
        },
      };

      const subscriptionResponse =
        await subscriptionInvoiceAccountController.createPrepayment(
          idSubscription,
          prepaidInformation
        );
      expect(subscriptionResponse.statusCode).toBe(201);
    });

    test('should throw an error when user sends a invalid subscription', async () => {
      const idSubscription = 1001;
      const prepaidInformation = {
        prepayment: {
          amount: 100.0,
          details: 'details',
          memo: 'Memo description',
          method: CreatePrepaymentMethod.Check,
        },
      };

      const promise = subscriptionInvoiceAccountController.createPrepayment(
        idSubscription,
        prepaidInformation
      );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw an error when user sends valid subscription with invalid credentials', async () => {
      const idSubscription =
        (contextSubscription &&
          contextSubscription.subscriptionIds &&
          contextSubscription.subscriptionIds[0]) ||
        0;
      const prepaidInformation = {
        prepayment: {
          amount: 100.0,
          details: 'details',
          memo: 'Memo description',
          method: CreatePrepaymentMethod.Check,
        },
      };

      const promise =
        invalidSubscriptionInvoiceAccountController.createPrepayment(
          idSubscription,
          prepaidInformation
        );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('List Prepayments for Subscription Group', () => {
    let contextSubscription: SubscriptionGroupSignupResponse;
    beforeAll(async () => {
      const { subscriptionGroupsSignedResponse: context } =
        await signUpSubscriptionGroup();
      contextSubscription = context;
    });
    test('should list the Prepayments for subscription group', async () => {
      const idSubscription =
        (contextSubscription &&
          contextSubscription.subscriptionIds &&
          contextSubscription.subscriptionIds[0]) ||
        0;

      // Creating
      const prepaidInformation = {
        prepayment: {
          amount: 100.0,
          details: 'details',
          memo: 'Memo description',
          method: CreatePrepaymentMethod.Check,
        },
      };

      const subscriptionCreateResponse =
        await subscriptionInvoiceAccountController.createPrepayment(
          idSubscription,
          prepaidInformation
        );
      expect(subscriptionCreateResponse.statusCode).toBe(201);

      const subscriptionResponse =
        await subscriptionInvoiceAccountController.listPrepayments({
          subscriptionId: idSubscription,
        });
      expect(subscriptionResponse.statusCode).toBe(200);
      expect(subscriptionResponse?.result?.prepayments?.length).toBeGreaterThan(
        0
      );
    });

    test('should throw an error when user sends and invalid subscription group', async () => {
      const idSubscription = 1001;
      const promise =
        invalidSubscriptionInvoiceAccountController.listPrepayments({
          subscriptionId: idSubscription,
        });

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });

    test('should throw an error when user sends valid subscription with invalid credentials', async () => {
      const idSubscription =
        (contextSubscription &&
          contextSubscription.subscriptionIds &&
          contextSubscription.subscriptionIds[0]) ||
        0;

      const promise =
        invalidSubscriptionInvoiceAccountController.listPrepayments({
          subscriptionId: idSubscription,
        });

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Issue Subscription Group Service', () => {
    let contextSubscription: SubscriptionGroupSignupResponse;
    beforeAll(async () => {
      const { subscriptionGroupsSignedResponse: context } =
        await signUpSubscriptionGroup();
      contextSubscription = context;
    });
    test('should create a successful issuance of service credit', async () => {
      const idSubscription =
        (contextSubscription &&
          contextSubscription.subscriptionIds &&
          contextSubscription.subscriptionIds[0]) ||
        0;

      const creditInfo = {
        serviceCredit: {
          amount: 10,
          memo: 'Credit the group account',
        },
      };

      const subscriptionResponse =
        await subscriptionInvoiceAccountController.issueServiceCredit(
          idSubscription,
          creditInfo
        );
      expect(subscriptionResponse.statusCode).toBe(201);
      expect(subscriptionResponse.result.memo).toStrictEqual(
        creditInfo.serviceCredit.memo
      );
    });

    test('should throw an error when user sends and invalid subscription group', async () => {
      const idSubscription = 1001;

      const promise =
        invalidSubscriptionInvoiceAccountController.issueServiceCredit(
          idSubscription
        );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });

    test('should throw an error when user sends valid subscription with invalid credentials', async () => {
      const idSubscription =
        (contextSubscription &&
          contextSubscription.subscriptionIds &&
          contextSubscription.subscriptionIds[0]) ||
        0;

      const promise =
        invalidSubscriptionInvoiceAccountController.listPrepayments({
          subscriptionId: idSubscription,
        });

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Deduct Subscription Group Service Credit', () => {
    let contextSubscription: SubscriptionGroupSignupResponse;
    beforeAll(async () => {
      const { subscriptionGroupsSignedResponse: context } =
        await signUpSubscriptionGroup();
      contextSubscription = context;
    });

    test('should deduct subscription group service credit', async () => {
      const idSubscription =
        (contextSubscription &&
          contextSubscription.subscriptionIds &&
          contextSubscription.subscriptionIds[0]) ||
        0;
      const creditInfo = {
        serviceCredit: {
          amount: 100,
          memo: 'Credit the group account',
        },
      };

      const subscriptionResponse =
        await subscriptionInvoiceAccountController.issueServiceCredit(
          idSubscription,
          creditInfo
        );
      expect(subscriptionResponse.statusCode).toBe(201);

      const deductInfo = {
        deduction: {
          amount: 10,
          memo: 'Deduct from group account',
        },
      };

      const deductSubscriptionResponse =
        await subscriptionInvoiceAccountController.deductServiceCredit(
          idSubscription,
          deductInfo
        );

      expect(deductSubscriptionResponse.statusCode).toBe(201);
    });

    test('should throw an error when the credit is not enough', async () => {
      const idSubscription =
        (contextSubscription &&
          contextSubscription.subscriptionIds &&
          contextSubscription.subscriptionIds[0]) ||
        0;

      const deductionInfo = {
        deduction: {
          amount: 10000,
          memo: 'Deduct from group account',
        },
      };

      const expectedErrorMessage =
        'Amount cannot exceed current service credit account balance.';

      const promise = subscriptionInvoiceAccountController.deductServiceCredit(
        idSubscription,
        deductionInfo
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(422);
        expect(reason.result.errors[0]).toBe(expectedErrorMessage);
      });
    });

    test('should throw an error when user sends valid subscription with invalid credentials', async () => {
      const idSubscription =
        (contextSubscription &&
          contextSubscription.subscriptionIds &&
          contextSubscription.subscriptionIds[0]) ||
        0;

      const promise =
        invalidSubscriptionInvoiceAccountController.deductServiceCredit(
          idSubscription
        );

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});

