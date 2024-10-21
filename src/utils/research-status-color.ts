import { ResearchStatusEnum } from "@/types/research-status.enum";

export function researchStatusColor(status: ResearchStatusEnum) {
    switch (status) {
      case ResearchStatusEnum.SCHEDULED:
        return "#F0F2F5";
      case ResearchStatusEnum.ACTIVE:
        return "#63a893";
      case ResearchStatusEnum.DISABLED:
        return "#EF426F";
    }
  };