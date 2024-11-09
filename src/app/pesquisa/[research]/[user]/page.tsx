"use client";
import InsightfyButton from "@/components/InsightfyButton/insightfy-button";
import ResearchFormIteration from "@/components/ResearchFormIteration/research-form-iteration";
import { getSurveyAsClient } from "@/services/get-survey";
import { IForm, IResearch } from "@/types/research";
import { useEffect, useState } from "react";
import { getCostumerAsClient } from "@/services/get-costumer";
import { ICostumer } from "@/types/costumer";
import { createSurveyResponseAsClient } from "@/services/create-survey-response";

interface ResearchPageProps {
  params: {
    research: string;
    user: string;
  };
}

function ResearchPage({ params: { user, research } }: ResearchPageProps) {
  const [survey, setSurvey] = useState<IResearch>();
  const [questions, setQuestions] = useState<IForm[]>([]);
  const [costumer, setCostumer] = useState<ICostumer>();

  useEffect(() => {
    const fetchSurvey = async () => {
      if (research) {
        const data = await getSurveyAsClient(research);
        setSurvey(data);
        setQuestions(data.form);
      }
    };
    const fetchCostumer = async () => {
      if (user) {
        const data = await getCostumerAsClient(user);
        setCostumer(data);
      }
    };
    fetchCostumer();
    fetchSurvey();
  }, [research, user]);

  const [answers, setAnswers] = useState<{ answer: string; type: string }[]>(
    []
  );

  const buildQuestion = (question: IForm, index: number) => {
    return (
      <ResearchFormIteration
        key={index}
        index={index}
        description={question.description}
        responses={question.responses}
        surveyType={question.surveyType}
        onValueChange={(value: any) => {
          const awns = answers;
          awns[index] = { answer: value, type: question.surveyType };

          setAnswers([...awns]);
        }}
      />
    );
  };

  const checkIsValidResponse = () => {
    if (
      answers.length === questions.length &&
      !answers.every((e) => typeof e === "undefined") &&
      answers
        .map((e) => e?.answer)
        .every((e) => e && e.toString().trim().length >= 1) &&
      survey?.id
    ) {
      return true;
    }
    return false;
  };

  const handleAnswerSurvey = () => {
    if (survey && user && research && costumer) {
      const data = {
        survey: survey.id,
        user: user,
        email: costumer.email,
        phone: costumer.phone,
        survey_answers: answers,
      };
      const createSurveyResponse = async () => {
        const resp = await createSurveyResponseAsClient(survey.id, data);
        if (resp) {
          // window.location.href = "/";
        }
      };
      createSurveyResponse();
    }
  };

  return (
    <div className="flex justify-center align-center bg-insightfy-blue p-12">
      <div className="flex flex-col gap-8 items-center w-fit w-4/6 bg-white p-4 rounded-md">
        <img
          width={110}
          height={60}
          src="https://fidasgabriel.github.io/myAssets/insightfy-logo.svg"
          alt=""
        />
        {questions.map((e, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 justify-start items-start w-full"
          >
            {buildQuestion(e, index)}
          </div>
        ))}
        {!!questions.length && (
          <div className="" onClick={() => handleAnswerSurvey()}>
            <InsightfyButton
              text="Enviar"
              type="button"
              variant="contained"
              disabled={!checkIsValidResponse()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ResearchPage;
