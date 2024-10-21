import { ResearchStatusEnum } from "./research-status.enum";

export interface IForm {
    surveyType: FormTypes;
    description: string;
    responses: (string | number)[];
}
  
export enum FormTypes {
    GRADE = "1",
    TEXT_BOXES = "2",
    ORDERED_TEXT_BOXES = "3",
    TEXT = "4",
}  

export interface IResearch {
    id: string;
    title: string;
    app: boolean;
    email: boolean;
    sms: boolean;
    whatsapp: boolean;
    company: string;
    status: ResearchStatusEnum;
    scheduledDate: Date;
    endDate?: Date;
    form: IForm[];
}