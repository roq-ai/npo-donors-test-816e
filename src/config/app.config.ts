interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Fund Aggregator Employee'],
  customerRoles: [],
  tenantRoles: ['Fund Aggregator Employee', 'Donor Company Profile Creator', 'Donorship Application Viewer'],
  tenantName: 'Company',
  applicationName: 'npo-donors-test',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage donor profiles',
    'Manage donorship applications',
    'Manage non-profit organizations',
    'Manage companies',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/47b52607-b67d-402b-9c4b-00394abadf64',
};
