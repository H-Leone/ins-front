import { ResearchStatusEnum } from "@/types/research-status.enum";

export function getSufix(status: ResearchStatusEnum) {
    switch (status) {
      case ResearchStatusEnum.active:
        return "às";
      case ResearchStatusEnum.disabled:
        return "desde";
      case ResearchStatusEnum.scheduled:
        return "para";
    }
  };