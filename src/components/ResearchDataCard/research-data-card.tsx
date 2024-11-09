"use client";

import { useState } from "react";
import GraphIcon from "../../../public/graph-icon.svg";
import Graph from "../../../public/Graph.svg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export interface IResearchDataCardProps {
  name: string;
  answers: number;
}

function ResearchDataCard({ name, answers }: IResearchDataCardProps) {
  const [selectDate, setDate] = useState("30");

  const handleClick = (date: string) => () => {
    setDate(date);
  };

  return (
    <div className="flex flex-col justify-around gap-2 w-[380px] h-[225px] shadow-md px-5 py-2">
      <span className="flex justify-between">
        <p className="text-insightfy-blue font-bold">{name}</p>

        <Image src={GraphIcon.src} alt="Graph Icon" width={20} height={20} />
      </span>

      <section className="flex justify-evenly items-center gap-4">
        <Image src={Graph.src} alt="Graph Icon" width={145} height={75} />

        <div className="text-insightfy-blue">
          <p className="font-bold">0 respostas novas</p>

          <p className="text-xs opacity-40">Total de {answers} respostas</p>
        </div>
      </section>

      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1 font-semibold text-sm text-insightfy-blue">
          Dias <ChevronDown size={17.5} />
        </span>

        <div className="flex gap-2">
          {["30", "60", "90"].map((el) => (
            <span
              key={el}
              onClick={handleClick(el)}
              className={`flex justify-center items-center w-11 h-6 text-white text-sm font-bold bg-insightfy-blue rounded-xl ${
                el !== selectDate && "opacity-40"
              } cursor-pointer`}
            >
              <p>{el}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResearchDataCard;
