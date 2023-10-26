import { GetQueryInterface } from 'interfaces';

export interface ApplicationStatusInterface {
  id?: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ApplicationStatusGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
}
