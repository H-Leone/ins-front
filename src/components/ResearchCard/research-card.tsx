import { ResearchStatusEnum } from "@/types/research-status.enum";
import { researchStatusColor } from "@/utils/research-status-color";
import { getSufix } from "@/utils/research-status-sufix";
import { format } from "date-fns";
import Link from "next/link";

export interface IResearchCardProps {
  id: number;
  title: string;
  answers: number;
  status: ResearchStatusEnum;
  startDate: Date;
  endDate?: Date;
}

function ResearchCard({
  id,
  title,
  answers,
  status,
  startDate,
  endDate,
}: IResearchCardProps) {

  return (
    <Link href={`/formularios/${id}`}>
      <div className="px-12 py-6 border-solid border border-[#8A8A8E] rounded-lg flex justify-between items-center gap-2 shadow-md">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm text-insightfy-gray font-semibold">
            {answers} respostas
          </p>
        </div>

        <span
          className={`w-48 h-8 flex gap-2 justify-center items-center text-sm rounded-lg ${
            status === ResearchStatusEnum.scheduled
              ? "text-black"
              : "text-white"
          } ${researchStatusColor(status)}`}
        >
          <p className="text-center font-medium">
            {status} {getSufix(status)} {format(startDate, "HH:mm")}
          </p>
          {/* {icon} */}
        </span>
      </div>
    </Link>
  );
}

export default ResearchCard;
