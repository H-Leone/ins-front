import { ResearchStatusEnum } from "@/types/research-status.enum";

export function researchStatusColor(status: ResearchStatusEnum) {
    switch (status) {
      case ResearchStatusEnum.scheduled:
        return "bg-[#F0F2F5]";
      case ResearchStatusEnum.active:
        return "bg-[#63a893]";
      case ResearchStatusEnum.disabled:
        return "bg-red-500";
    }
  };