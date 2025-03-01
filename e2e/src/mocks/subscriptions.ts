import {
  BankAccountHolderType,
  BankAccountType,
  CardType,
  PaymentType,
} from 'advanced-billing-sdk';

export const customerAttributes = {
  firstName: 'Joe',
  lastName: 'Blow',
  email: 'joe@example.com',
  zip: '02120',
  state: 'MA',
  // unique attribute
  reference: 'unique',
  phone: '(617) 111 - 0000',
  organization: 'Acme',
  country: 'US',
  city: 'Boston',
  address2: null,
  address: '123 Mass Ave.',
};

export const creditCardAttributes = {
  lastName: 'Smith',
  firstName: 'Joe',
  fullNumber: '4111111111111111',
  expirationYear: new Date().getFullYear(),
  expirationMonth: 12,
  cardType: CardType.Visa,
  billingZip: '02120',
  billingState: 'MA',
  billingCountry: 'US',
  billingCity: 'Boston',
  billingAddress2: null,
  billingAddress: '123 Mass Ave.',
};

export const bankAccountAttributes = {
  bankName: 'Best Bank',
  bankRoutingNumber: '21000089',
  bankAccountNumber: '111111111111',
  bankAccountType: BankAccountType.Checking,
  bankAccountHolderType: BankAccountHolderType.Business,
  paymentType: PaymentType.CreditCard,
};

export function createMockSubscription({
  productHandle,
  customerReference,
}: {
  productHandle: string;
  customerReference: string;
}) {
  return {
    productHandle,
    creditCardAttributes,
    bankAccountAttributes,
    customerAttributes: {
      ...customerAttributes,
      reference: customerReference,
    },
  };
}
