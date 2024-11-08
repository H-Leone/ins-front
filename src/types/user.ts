import { ICompany } from "./company";

export interface IUser {
    id: string;
    name: string;
    email: string;
    company: ICompany;
}