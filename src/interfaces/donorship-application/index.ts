import { NonProfitOrganizationInterface } from 'interfaces/non-profit-organization';
import { DonorProfileInterface } from 'interfaces/donor-profile';
import { GetQueryInterface } from 'interfaces';

export interface DonorshipApplicationInterface {
  id?: string;
  non_profit_organisation_id: string;
  status?: string;
  donot_profile_id: string;
  created_at?: any;
  updated_at?: any;

  non_profit_organization?: NonProfitOrganizationInterface;
  donor_profile?: DonorProfileInterface;
  _count?: {};
}

export interface DonorshipApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  non_profit_organisation_id?: string;
  status?: string;
  donot_profile_id?: string;
}
