import { ResearchStatusEnum } from "@/types/research-status.enum";

export function getStatusText(status: ResearchStatusEnum) {
    const statuses: { [key: string]: string } = {
        ACTIVE: "Ativo",
        SCHEDULED: "Agendado",
        DISABLED: "Inativo"
    }

    return statuses[status] || statuses.SCHEDULED;
}