import { format } from "date-fns";

export interface IResearchCardProps {
  title: string;
  answers: number;
  status: "active" | "scheduled" | "disabled";
  startDate: Date;
  endDate?: Date;
}

function ResearchCard({
  title,
  answers,
  status,
  startDate,
  endDate,
}: IResearchCardProps) {
  return (
    <div className="px-16 py-8 border-solid border border-[#8A8A8E] rounded-lg flex justify-between flex-col gap-2">
      <div className="flex justify-between align-center">
        <span className="size-20 text-black text-xl h-fit w-fit">{title}</span>
        <span
          className={`size-16 text-green text-base h-fit w-fit font-medium ${
            status === "active"
              ? "text-insightfy-green"
              : status === "disabled"
              ? "text-insightfy-red"
              : "text-[#4E4E4E]"
          }`}
        >
          {status === "active"
            ? "Ativo"
            : status === "disabled"
            ? "Inativo"
            : status === "scheduled"
            ? "Agendado"
            : "Desconhecido"}
        </span>
      </div>
      <div className="flex justify-between align-center">
        <span className="size-12 text-black text-base h-fit w-fit">
          {answers === 1 ? answers + " resposta" : answers + " respostas"}
        </span>
        <span className="size-12 text-green text-base h-fit w-fit">
          {status === "active"
            ? "Disparado às " + format(startDate, "dd/MM/yyyy HH:mm")
            : status === "disabled"
            ? "Inativado às " + format(endDate ?? new Date(), "dd/MM/yyyy HH:mm")
            : status === "scheduled"
            ? "Agendado para às " + format(startDate, "dd/MM/yyyy HH:mm")
            : ""}
        </span>
      </div>
    </div>
  );
}

export default ResearchCard;
