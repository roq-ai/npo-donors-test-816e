import { DonorshipApplicationInterface } from 'interfaces/donorship-application';
import { GetQueryInterface } from 'interfaces';

export interface NonProfitOrganizationInterface {
  id?: string;
  name?: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  donorship_application?: DonorshipApplicationInterface[];

  _count?: {
    donorship_application?: number;
  };
}

export interface NonProfitOrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
