import { Company, LoginMethod } from 'types/v3';

export const companies: Company[] = [
  {
    insuranceCompany: 'se-agria',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Agria',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-bliwa',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Bliwa',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-demo',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Demo Company',
    loginMethods: [
      LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE,
      LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE_TEST,
      LoginMethod.SWEDISH_MOBILE_BANKID_OTHER_DEVICE_MOCK,
    ],
  },
  {
    insuranceCompany: 'se-dina',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Dina Försäkringar',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-euroaccident',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Euroaccident',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-folksam',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Folksam',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-gjensidige',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Gjensidige',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-hedvig',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Hedvig',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-ica',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'ICA',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-if',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'If',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-lansforsakringar',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Länsförsäkringar',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-lassie',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Lassie',
    loginMethods: [LoginMethod.USERNAME_AND_PASSWORD],
  },
  {
    insuranceCompany: 'se-moderna',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Moderna',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-movestic',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Movestic',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-paydrive',
    functional: false,
    status: 'OK',
    insuranceCompanyDisplayName: 'Paydrive',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-skandia',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Skandia',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_SAME_DEVICE, LoginMethod.SWEDISH_MOBILE_BANKID_OTHER_DEVICE],
  },
  {
    insuranceCompany: 'se-svedea',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Svedea',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-sveland',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Sveland',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-trekronor',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Trekronor',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_OTHER_DEVICE],
  },
  {
    insuranceCompany: 'se-trygg-hansa',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Trygg-Hansa',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
  {
    insuranceCompany: 'se-volvia',
    functional: true,
    status: 'OK',
    insuranceCompanyDisplayName: 'Volvia',
    loginMethods: [LoginMethod.SWEDISH_MOBILE_BANKID_ANY_DEVICE],
  },
];
