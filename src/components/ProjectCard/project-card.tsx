import GraphIcon from "../../../public/graph-icon.svg";
import Image from "next/image";
import { IResearch } from "@/types/research";
import Link from "next/link";

function ProjectCard({ id, title }: IResearch) {
    return (
        <Link className="w-full" href={`/formularios/config/${id}`}>
            <div className="w-full h-[140px] flex flex-col justify-evenly px-4 py-2 shadow-md">
                <div className="flex gap-2">
                    <Image
                        src={GraphIcon.src}
                        alt="Graph Icon"
                        width={20}
                        height={20}
                    />
                    <p className="text-sm font-semibold text-insightfy-blue">Pesquisa</p>
                </div>

                <p className="font-semibold text-sm">{title}</p>
                
                <div>
                    <p className="text-xs text-gray-400">142 respostas</p>
                    <span className="w-4 h-4 bg-red-500" />
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;