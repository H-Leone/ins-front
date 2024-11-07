import { ICompany } from "./company";

export interface ICostumer {
  id: string;
  email: string;
  phone: string;
  company: ICompany;
}
