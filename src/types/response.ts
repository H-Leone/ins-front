import { ICostumer } from "./costumer";

export interface IResponse {
    id: string;
    user: ICostumer;
    email: string;
    phone: string;
    answer: string | number;
    surveyAnswers: SurveyAnswer[];
    topic: string;
}

interface SurveyAnswer {
    type: string;
    answer: string;
}