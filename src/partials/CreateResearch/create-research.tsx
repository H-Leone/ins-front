"use client";

import CommunicationMethods from "@/components/CommunicationMethods/communication-methods";
import InsightfyButton from "@/components/InsightfyButton/insightfy-button";
import ResearchForm from "@/components/ResearchForm/research-form";
import { getBases } from "@/services/get-bases";
import { getCostumerBase } from "@/services/get-costumers-base";
import { patchResearch } from "@/services/patch-research";
import { sendEmails } from "@/services/send-email";
import { useModal } from "@/store/use-modal";
import { IImports } from "@/types/imports";
import { IResearch } from "@/types/research";
import { ResearchStatusEnum } from "@/types/research-status.enum";
import { researchStatusColor } from "@/utils/research-status-color";
import { format } from "date-fns";
import { ChevronDown, Database } from "lucide-react";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface CreateResearchPageProps {
  research: IResearch;
  bases: IImports[];
}

function CreateResearchPage({ research, bases }: CreateResearchPageProps) {
  const [survey, setSurvey] = useState<IResearch>(research);
  const [title, setTitle] = useState<string>(research.title);
  const { onOpen } = useModal();

  const handleToggleCommunication = (method: string) => {
    const updatedSurvey = {
      ...survey,
      [method]: !survey[method as keyof IResearch],
    };

    if (updatedSurvey.id) {
      setSurvey(updatedSurvey);
      patchResearch(updatedSurvey.id, updatedSurvey);
    }
  };

  const handleDeleteQuestion = (index: number) => {
    const updatedSurvey = {
      ...survey,
      form: survey.form.filter((f, i) => index !== i),
    };

    if (updatedSurvey.id) {
      patchResearch(updatedSurvey.id, updatedSurvey);
      setSurvey(updatedSurvey);
    }
  };

  const handleChangeForm = (index: number, newDescription: string) => {
    const updatedSurvey = {
      ...survey,
      form: survey.form.map((f, i) =>
        i === index ? { ...f, description: newDescription } : f
      ),
    };
    setSurvey(updatedSurvey);
  };

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const base = e.target.value;

    const updatedSurvey = {
      ...survey,
      base,
    };

    if (updatedSurvey.id) {
      patchResearch(updatedSurvey.id, updatedSurvey);
    }
  };

  const handleUpdateQuestion = () => {
    if (survey.id) patchResearch(survey.id, survey);
  };

  const handleDisable = () => {
    const updatedSurvey = {
      ...survey,
      status: ResearchStatusEnum.DISABLED,
    };

    if (updatedSurvey.id) {
      patchResearch(updatedSurvey.id, updatedSurvey);
      setSurvey(updatedSurvey);
    }
  };

  const handleTrigger = async () => {
    const updatedSurvey = {
      ...survey,
      status: ResearchStatusEnum.ACTIVE,
    };

    const selectedBase = bases.find((e) => typeof survey.base === "object" && "name" in survey.base && e.id == survey.base["id"]);

    if (updatedSurvey.id && selectedBase) {
      const emails = await getCostumerBase(selectedBase.id);
      if (!!emails.length) {
        patchResearch(updatedSurvey.id, updatedSurvey);

        sendEmails(
          updatedSurvey.id,
          emails.map((e) => e.email)
        );

        setSurvey(updatedSurvey);
      }
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleUpdate = () => {
    if (survey.id && title !== survey.title) {
      const updatedSurvey = { ...survey, title };

      if (updatedSurvey.id) {
        patchResearch(updatedSurvey.id, updatedSurvey);
        setSurvey(updatedSurvey);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="min-w-[300px] max-w-[300px] flex flex-col gap-6 px-6">
        <div>
          <p
            className={`text-lg font-semibold ${researchStatusColor(
              survey.status
            )}`}
          >
            {survey.status}
          </p>
          <p className="text-insightfy-dark-gray">
            desde {format(survey.scheduledDate, "dd/mm/yyyy HH:mm")}
          </p>
        </div>

        <span className="relative flex items-center">
          <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-3">
            <Database size={20} />
          </span>

          <select
            onChange={handleChange}
            className="w-full h-12 indent-10 rounded-lg bg-insightfy-light-gray cursor-pointer outline-none appearance-none"
            defaultValue={
              typeof survey.base === "object" && "id" in survey.base
                ? survey.base.id
                : ""
            }
          >
            {bases.map((base) => (
              <option key={base.id} value={base.id}>
                {base.name || "All"}
              </option>
            ))}

          </select>

          <span className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
            <ChevronDown size={20} />
          </span>
        </span>
        {/* <input type="text" className="h-12 border border-insightfy-gray rounded-lg outline-none px-3" /> */}

        <CommunicationMethods {...survey} change={handleToggleCommunication} />

        <div className="flex gap-4 h-12 px-2 text-white font-semibold">
          {survey.status !== ResearchStatusEnum.ACTIVE && (
            <button
              onClick={handleTrigger}
              className="w-full bg-insightfy-blue rounded-lg"
            >
              Disparar
            </button>
          )}
          <button
            onClick={handleDisable}
            className="w-full rounded-lg"
            style={{ backgroundColor: "#AE0101" }}
          >
            Desativar
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 shadow-3xl">
        <section className="w-full flex justify-center flex-col px-8 py-8 rounded-lg border-2 border-insightfy-light-gray">
          <input
            type="text"
            className="w-full text-3xl border-b-2 px-4 py-3 outline-none font-semibold"
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleUpdate}
          />
        </section>

        {survey.form.map((f, index) => (
          <ResearchForm
            deleteQuestion={() => handleDeleteQuestion(index)}
            isActive={survey.status === ResearchStatusEnum.ACTIVE}
            key={index}
            updateQuestion={handleUpdateQuestion}
            changeForm={(newDescription: string) =>
              handleChangeForm(index, newDescription)
            }
            {...f}
          />
        ))}

        <div className="flex" style={{ justifyContent: "right" }}>
          <InsightfyButton
            type="button"
            click={() => onOpen("create-question", { research: survey })}
            disabled={survey.status === ResearchStatusEnum.ACTIVE}
            text="Nova Pergunta"
            variant="contained"
            width="170px"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateResearchPage;
