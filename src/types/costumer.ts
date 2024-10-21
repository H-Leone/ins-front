import { ICompany } from "./company";

export interface ICostumer {
    id: string;
    email: string;
    company: ICompany;
}