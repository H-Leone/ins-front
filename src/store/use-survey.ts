import { IResearch } from "@/types/research";
import { create } from "zustand";

interface SurveyStore {
    survey: IResearch | null;
    setSurvey: (survey: IResearch) => void;
}

export const useSurvey = create<SurveyStore>((set) => ({
    survey: null,
    setSurvey: (survey) => set({ survey }),
}));