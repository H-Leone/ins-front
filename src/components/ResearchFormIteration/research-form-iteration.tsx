"use client";
import { useState } from "react";
import { IForm } from "@/types/research";

interface IProps extends IForm {
  onValueChange?: (value: any) => void;
}

function ResearchFormIteration({
  surveyType,
  description,
  responses,
  onValueChange,
  index,
}: IProps & { index: number }) {
  return (
    <section className="w-full flex flex-col gap-8 px-8 py-8 border-2 border-insightfy-light-gray rounded-lg">
      {surveyType === "1" && (
        <>
          <p className="text-sm text-center font-medium text-insightfy-dark-gray">
            {description}
          </p>

          <SurveyRatingIteration
            onRatingChange={(value: number) =>
              onValueChange && onValueChange(value)
            }
          />
        </>
      )}

      {surveyType === "2" && (
        <>
          <p className="text-sm font-medium text-insightfy-dark-gray">
            {description}
          </p>
          {!!responses.length && typeof responses == "object" && (
            <SurveyOptionsIteration
              responses={responses}
              questionIndex={index}
              onOptionChange={onValueChange && onValueChange}
            />
          )}
        </>
      )}

      {surveyType === "4" && (
        <>
          <p className="text-sm font-medium text-insightfy-dark-gray">
            {description}
          </p>

          <textarea
            onChange={(e) => onValueChange && onValueChange(e.target.value)}
            className="resize-none w-full h-44 bg-insightfy-light-gray outline-none text-sm p-4 rounded-lg"
            placeholder="Hint text..."
          ></textarea>
        </>
      )}
    </section>
  );
}

export default ResearchFormIteration;

interface ISurveyRatingIterationProps {
  onRatingChange?: (value: number) => void;
}

interface ISurveyOptionsIterationProps {
  onOptionChange?: (value: string) => void;
  responses: (string | number)[];
}

function SurveyOptionsIteration({
  onOptionChange,
  responses,
  questionIndex,
}: ISurveyOptionsIterationProps & { questionIndex: number }) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <>
      {responses.map((e, index) => {
        const id = Math.random();
        const inputName = `single-choice-${questionIndex}`;
        return (
          <div key={id} className="flex gap-2 items-center">
            <input
              type="radio"
              id={id.toString()}
              name={inputName}
              value={e}
              checked={selectedOption === e}
              onChange={(e) => {
                setSelectedOption(e.target.value);
                onOptionChange && onOptionChange(e.target.value);
              }}
            />
            <label htmlFor={id.toString()}>{e}</label>
          </div>
        );
      })}
    </>
  );
}

function SurveyRatingIteration({
  onRatingChange,
}: ISurveyRatingIterationProps) {
  const colors = {
    0: "bg-[#B72224]",
    1: "bg-[#D52029]",
    2: "bg-[#E95223]",
    3: "bg-[#EA6F22]",
    4: "bg-[#F6A726]",
    5: "bg-[#FDC729]",
    6: "bg-[#EBDB0A]",
    7: "bg-[#E5E044]",
    8: "bg-[#C2D234]",
    9: "bg-[#AEC93C]",
    default: "bg-[#AEC93C]",
  };

  const [selected, setSelected] = useState(-1);

  return (
    <div className="flex flex-col gap-6">
      <span className="w-full flex justify-between text-xs font-medium">
        <p>NOT AT ALL LIKELY</p>
        <p>EXTREMELY LIKELY</p>
      </span>

      <div className="flex justify-evenly">
        {[...Array(10).keys()].map((el, index) => (
          <div
            key={el}
            onClick={() => {
              setSelected(index);
              onRatingChange && onRatingChange(el);
            }}
            className={`${
              colors[el as keyof typeof colors] || colors.default
            } w-12 h-12 flex justify-center items-center text-white text-xl font-bold rounded duration-200 cursor-pointer ${
              selected == index ? "scale-125" : ""
            }`}
          >
            {el + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
