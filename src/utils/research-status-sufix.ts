import { ResearchStatusEnum } from "@/types/research-status.enum";

export function getSufix(status: ResearchStatusEnum) {
    switch (status) {
      case ResearchStatusEnum.ACTIVE:
        return "às";
      case ResearchStatusEnum.DISABLED:
        return "desde";
      case ResearchStatusEnum.SCHEDULED:
        return "para";
    }
  };