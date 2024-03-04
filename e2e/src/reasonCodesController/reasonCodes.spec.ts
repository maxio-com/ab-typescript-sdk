import { ReasonCodesController } from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from '../config';
import { deleteAllReasonCodes } from './utils';

describe('Reason codes', () => {
  let reasonCodesController: ReasonCodesController;
  let invalidReasonCodesController: ReasonCodesController;

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    reasonCodesController = new ReasonCodesController(client);
    invalidReasonCodesController = new ReasonCodesController(invalidClient);
    await deleteAllReasonCodes();
  });

  describe('List Reason Codes', () => {
    test('should get empty list when reason codes are not already created', async () => {
      const reasonCodesResponse = await reasonCodesController.listReasonCodes(
        {}
      );
      expect(reasonCodesResponse.statusCode).toBe(200);
      expect(reasonCodesResponse.result.length).toBe(0);
    });

    test('should get all reason codes when reason codes are created', async () => {
      await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'SMALL',
          description: 'small',
        },
      });

      await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'MEDIUM',
          description: 'medium',
        },
      });

      await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'BIG',
          description: 'big',
        },
      });

      const reasonCodesResponse = await reasonCodesController.listReasonCodes(
        {}
      );
      expect(reasonCodesResponse.statusCode).toBe(200);
      expect(reasonCodesResponse.result.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Create Reason Codes', () => {
    test('should create a valid reason code when user sends a valid payload', async () => {
      const createResponse = await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'NOTHANKYOU',
          description: 'No thank you!',
        },
      });

      expect(createResponse.statusCode).toBe(201);
      expect(createResponse.result.reasonCode.code).toBe('NOTHANKYOU');
    });

    test('should throw a 422 error when the user sends invalid or missing parameters in the request body', async () => {
      const promise = reasonCodesController.createReasonCode();

      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(422);
        expect(reason.result.errors).toEqual({ reason_code: "can't be blank" });
      });
    });

    test('should throw a 401 error when the user sends incorrect credentials', async () => {
      const promise = invalidReasonCodesController.createReasonCode();
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Read Reason Code', () => {
    test('should read a valid reason code when the code exists', async () => {
      const createResponse = await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'CODE',
          description: 'Code!',
        },
      });

      const reasonCodeId = createResponse.result.reasonCode.id;
      const readResponse = await reasonCodesController.readReasonCode(
        reasonCodeId || 0
      );
      expect(readResponse.statusCode).toBe(200);
      expect(readResponse.result.reasonCode.id).toBe(reasonCodeId);
      expect(readResponse.result.reasonCode.code).toBe('CODE');
    });

    test('should throw a 404 error when the user sends a non-existent reason code', async () => {
      const promise = reasonCodesController.readReasonCode(0);
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw a 401 error when the user sends incorrect credentials', async () => {
      const createResponse = await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'NOHERE',
          description: 'No here!',
        },
      });

      const reasonId = createResponse.result.reasonCode.id;
      const promise = invalidReasonCodesController.readReasonCode(
        reasonId || 0
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Delete Reason Code', () => {
    test('should delete a valid reason code when the code was created before', async () => {
      const createResponse = await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'DELETECODE',
          description: 'Delete Code!',
        },
      });

      const reasonCodeId = createResponse.result.reasonCode.id;
      const deleteResponse = await reasonCodesController.deleteReasonCode(
        reasonCodeId || 0
      );
      expect(deleteResponse.statusCode).toBe(200);
      expect(deleteResponse.result.ok).toBe('ok');
    });

    test('should throw a 404 error when the user sends a non-existent reason code', async () => {
      const promise = reasonCodesController.deleteReasonCode(0);
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw a 401 error when the user sends incorrect credentials', async () => {
      const createResponse = await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'NODELETE',
          description: 'No Delete!',
        },
      });

      const reasonId = createResponse.result.reasonCode.id;
      const promise = invalidReasonCodesController.deleteReasonCode(
        reasonId || 0
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });

  describe('Update Reason Code', () => {
    test('should update a valid reason code', async () => {
      const createResponse = await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'PLEASE',
          description: 'please!',
        },
      });

      const reasonCodeId = createResponse.result.reasonCode.id || 0;
      const updateResponse = await reasonCodesController.updateReasonCode(
        reasonCodeId,
        {
          reasonCode: {
            code: 'WELCOME',
            description: 'welcome!',
          },
        }
      );
      expect(updateResponse.statusCode).toBe(200);
      expect(updateResponse.result.reasonCode.code).toBe('WELCOME');
      expect(updateResponse.result.reasonCode.description).toBe('welcome!');
    });

    test('should throw a 404 error when the user sends a non-existent reason code', async () => {
      const promise = reasonCodesController.updateReasonCode(0);
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(404);
      });
    });

    test('should throw a 401 error when the user sends incorrect credentials', async () => {
      const createResponse = await reasonCodesController.createReasonCode({
        reasonCode: {
          code: 'NOUPDATE',
          description: 'No Update!',
        },
      });

      const reasonId = createResponse.result.reasonCode.id;
      const promise = invalidReasonCodesController.updateReasonCode(
        reasonId || 0
      );
      expect(promise).rejects.toThrow();
      await promise.catch((reason) => {
        expect(reason.statusCode).toBe(401);
      });
    });
  });
});
