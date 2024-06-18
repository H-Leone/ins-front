import GraphIcon from "../../../public/graph-icon.svg";
import Image from "next/image";
import { IProject } from "@/types/project";

function ProjectCard({ name, answers }: IProject) {
    return (
        <div className="w-10/12 h-[140px] flex flex-col justify-evenly px-4 py-2 shadow-md">

            <div className="flex gap-2">

                <Image
                    src={GraphIcon.src}
                    alt="Graph Icon"
                    width={20}
                    height={20}
                />

                <p className="text-sm font-semibold text-insightfy-blue">Pesquisa</p>

            </div>

            <p className="font-semibold text-sm">{name}</p>

            <div>

                <p className="text-xs text-gray-400">{answers} respostas</p>

                <span className="w-4 h-4 bg-red-500" />

            </div>

        </div>
    );
}

export default ProjectCard;