import {
  OfferResponse,
  OffersController,
  ProductFamiliesController,
  ProductFamilyResponse,
  ProductsController,
  ProductResponse,
  IntervalUnit,
} from 'advanced-billing-sdk';
import { createClient, createInvalidClient } from './config';
import { uid } from 'uid';

describe('Offers Controller', () => {
  let offersController: OffersController;
  let productFamilyResponse: ProductFamilyResponse;
  let productResponse: ProductResponse;
  let invalidOffersController: OffersController;
  const productId = `${uid()}-offers`;
  const productFamilyName = `${uid()}-offers-family`;

  const productFamilyBody = {
    productFamily: {
      name: productFamilyName,
      description: 'Amazing project management tool',
    },
  };

  const productBody = {
    product: {
      name: productId,
      handle: productId,
      description: 'premium-desc',
      priceInCents: BigInt(1000),
      interval: 1,
      intervalUnit: IntervalUnit.Month,
    },
  };

  beforeAll(async () => {
    const client = createClient();
    const invalidClient = createInvalidClient();
    const productFamiliesController = new ProductFamiliesController(client);
    const productsController = new ProductsController(client);
    offersController = new OffersController(client);
    invalidOffersController = new OffersController(invalidClient);
    productFamilyResponse = await (
      await productFamiliesController.createProductFamily(productFamilyBody)
    ).result;
    productResponse = await (
      await productsController.createProduct(
        String(productFamilyResponse.productFamily?.id || 0),
        productBody
      )
    ).result;
  });

  describe('List offers', () => {
    test('should list all offers on the list', async () => {
      const offersResponse = await offersController.listOffers({});
      expect(offersResponse.statusCode).toBe(200);
    });

    test('should throw 401 error when user use invalid credentials', async () => {
      const promise = invalidOffersController.listOffers({});
      expect(promise).rejects.toThrowError();

      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });

    test('should list all of the offers already created', async () => {
      const offers = [
        {
          name: 'Solo A',
          handle: uid(),
          description: 'A Star Wars Story A',
          productId: productResponse.product.id || 0,
          components: [],
        },
        {
          name: 'Solo B',
          handle: uid(),
          description: 'A Star Wars Story B',
          productId: productResponse.product.id || 0,
          components: [],
        },
        {
          name: 'Solo C',
          handle: uid(),
          description: 'A Star Wars Story C',
          productId: productResponse.product.id || 0,
          components: [],
        },
      ];
      const promises = offers.map((offer) =>
        offersController.createOffer({ offer })
      );
      await Promise.all(promises);

      const offersResponse = await offersController.listOffers({});
      const offersNames = offersResponse.result.offers
        ?.map((offer: OfferResponse['offer']) => offer?.name)
        .sort();
      expect(offersResponse.statusCode).toBe(200);
      expect(offersNames?.includes('Solo A')).toBeTruthy();
      expect(offersNames?.includes('Solo B')).toBeTruthy();
      expect(offersNames?.includes('Solo C')).toBeTruthy();
    });
  });

  describe('Create Offer', () => {
    test('should create an offer when user sends correct product id', async () => {
      const offerHandle = uid();
      const offerBody = {
        offer: {
          name: 'Solo',
          handle: offerHandle,
          description: 'A Star Wars Story',
          productId: productResponse.product.id || 0,
          components: [],
        },
      };
      const offer = await offersController.createOffer(offerBody);
      expect(offer);

      expect(offer.result.offer).toEqual(
        expect.objectContaining({
          productFamilyId: productFamilyResponse.productFamily?.id,
          productId: productResponse.product.id || 0,
          productRevisableNumber: 0,
          name: 'Solo',
          handle: offerHandle,
          description: 'A Star Wars Story',
          archivedAt: null,
          offerItems: [],
          offerDiscounts: [],
          productFamilyName: productFamilyName,
          productName: productId,
          productPricePointName: 'Original',
          productPriceInCents: BigInt(1000),
          offerSignupPages: [],
        })
      );
    });

    test('should throw an error when the user use invalid payload information', async () => {
      const offerBody = {
        offer: {
          name: '',
          handle: '',
          description: 'A Star Wars Story',
          productId: productResponse.product.id || 0,
          components: [],
        },
      };
      const promise = offersController.createOffer(offerBody);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(422);
        expect(error.result.errors).toEqual({
          name: ['Name cannot be blank.'],
          handle: ['Handle cannot be blank.'],
        });
      });
    });

    test('should throw 422 error when handle was sent with an invalid format', async () => {
      const offerBody = {
        offer: {
          name: 'Solo',
          handle: 'han_shot_first A',
          description: 'A Star Wars Story',
          productId: productResponse.product.id || 0,
          components: [],
        },
      };
      const promise = offersController.createOffer(offerBody);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.result.errors).toEqual({
          handle: [
            'Handle is invalid. Handles can only contain lowercase letters, numbers, dashes and underscores.',
          ],
        });
        expect(error.statusCode).toBe(422);
      });
    });

    test('should throw 401 error when the user use invalid credentials', async () => {
      const offerBody = {
        offer: {
          name: 'Solo',
          handle: 'han_shot_first',
          description: 'A Star Wars Story',
          productId: productResponse.product.id || 0,
          components: [],
        },
      };
      const promise = invalidOffersController.createOffer(offerBody);
      expect(promise).rejects.toThrow();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Read Offers', () => {
    let offerCreated: OfferResponse;

    beforeAll(async () => {
      const offer = {
        name: 'golden A',
        handle: uid(),
        description: 'A Star Wars Story A',
        productId: productResponse.product.id || 0,
        components: [],
      };
      offerCreated = (await offersController.createOffer({ offer })).result;
    });
    test('should read a offer with a valid offer id', async () => {
      const response = await offersController.readOffer(
        offerCreated.offer?.id || 0
      );
      expect(response.statusCode).toBe(200);
      expect(response.result.offer).toEqual(offerCreated.offer);
    });

    test('should throw 404 error sends an invalid offer id', async () => {
      const promise = offersController.readOffer(123);
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should throw 401 error when user use invalid credentials', async () => {
      const promise = invalidOffersController.readOffer(
        offerCreated.offer?.id || 0
      );
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
  });

  describe('Archive/Unarchive Offer', () => {
    let offersResponses: OfferResponse[];
    beforeAll(async () => {
      const offers = [
        {
          name: 'Premium A',
          handle: uid(),
          description: 'A Star Wars Story A',
          productId: productResponse.product.id || 0,
          components: [],
        },
        {
          name: 'Premium B',
          handle: uid(),
          description: 'A Star Wars Story B',
          productId: productResponse.product.id || 0,
          components: [],
        },
        {
          name: 'Premium C',
          handle: uid(),
          description: 'A Star Wars Story C',
          productId: productResponse.product.id || 0,
          components: [],
        },
      ];
      const promises = offers.map((offer) =>
        offersController.createOffer({ offer })
      );
      const responses = await Promise.all(promises);
      offersResponses = responses.map((response) => response.result);
    });
    test('should archive the offer correctly', async () => {
      const [archivedOffer] = offersResponses;
      const archiveResponse = await offersController.archiveOffer(
        archivedOffer.offer?.id || 0
      );
      const readResponse = await offersController.readOffer(
        archivedOffer.offer?.id || 0
      );
      expect(readResponse.statusCode).toBe(200);
      expect(archiveResponse.statusCode).toBe(200);
      expect(readResponse.result.offer?.archivedAt).toBeTruthy();
    });
    test('should throw 401 error when user use invalid credentials', async () => {
      const [archivedOffer] = offersResponses;
      const promise = invalidOffersController.archiveOffer(
        archivedOffer.offer?.id || 0
      );
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
    test('should throw 404 error user sends an invalid offer id', async () => {
      const promise = offersController.archiveOffer(123);
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });

    test('should unarchive a offer correctly', async () => {
      const [archivedOffer] = offersResponses;
      const archiveResponse = await offersController.unarchiveOffer(
        archivedOffer.offer?.id || 0
      );
      const readResponse = await offersController.readOffer(
        archivedOffer.offer?.id || 0
      );
      expect(readResponse.statusCode).toBe(200);
      expect(archiveResponse.statusCode).toBe(200);
      expect(readResponse.result.offer?.archivedAt).toBeNull();
    });
    test('should throw 401 error when user use invalid credentials with unarchive endpoint', async () => {
      const [archivedOffer] = offersResponses;
      const promise = invalidOffersController.unarchiveOffer(
        archivedOffer.offer?.id || 0
      );
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(401);
      });
    });
    test('should throw 404 error user sends an invalid offer id to unarchive endpoint', async () => {
      const promise = offersController.unarchiveOffer(123);
      expect(promise).rejects.toThrowError();
      await promise.catch((error) => {
        expect(error.statusCode).toBe(404);
      });
    });
  });
});
