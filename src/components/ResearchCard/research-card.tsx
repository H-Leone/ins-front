import { IResearch } from "@/types/research";
import { ResearchStatusEnum } from "@/types/research-status.enum";
import { getStatusText } from "@/utils/get-status-text";
import { researchStatusColor } from "@/utils/research-status-color";
import { getSufix } from "@/utils/research-status-sufix";
import { format } from "date-fns";
import Link from "next/link";


function ResearchCard({
  id,
  title,
  status,
  scheduledDate,
}: IResearch) {
  return (
    <Link href={`/formularios/config/${id}`}>
      <div className="px-12 py-6 border-solid border border-[#8A8A8E] rounded-lg flex justify-between items-center gap-2 shadow-md">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm text-insightfy-gray font-semibold">
            149 respostas
          </p>
        </div>

        <span
          style={{ backgroundColor: researchStatusColor(status) }}
          className={`w-48 h-8 flex gap-2 justify-center items-center text-sm font-semibold rounded-lg ${status === ResearchStatusEnum.SCHEDULED ? "text-black" : "text-white"}`}
        >
          <p className="text-center font-medium">
            {getStatusText(status)} {getSufix(status)} {format(scheduledDate, "HH:mm")}
          </p>
          {/* {icon} */}
        </span>
      </div>
    </Link>
  );
}

export default ResearchCard;