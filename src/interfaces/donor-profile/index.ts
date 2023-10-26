import { DonorshipApplicationInterface } from 'interfaces/donorship-application';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DonorProfileInterface {
  id?: string;
  name?: string;
  description?: string;
  created_by: string;
  created_at?: any;
  updated_at?: any;
  donorship_application?: DonorshipApplicationInterface[];
  user?: UserInterface;
  _count?: {
    donorship_application?: number;
  };
}

export interface DonorProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  created_by?: string;
}
