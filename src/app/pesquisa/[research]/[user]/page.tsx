import { getSurvey } from "@/services/get-survey";

interface ResearchPageProps {
  params: {
    research: string;
    user: string;
  };
}

interface QuestionsData {
  typeId: number;
  question: string;
  id: number;
}

async function ResearchPage({ params: { user, research } }: ResearchPageProps) {
  // const survey = await getSurvey(research).then((data) => data);
  // console.log(survey);

  const questions: QuestionsData[] = [
    {
      id: 1,
      question: "Descreva sua experiência",
      typeId: 1,
    },
    {
      id: 2,
      question: "Avalie aqui!",
      typeId: 3,
    },
  ];

  const buildQuestion = (typeId: number) => {
    return <p>{typeId}</p>;
  };

  return (
    <div className="flex justify-center align-center">
      <div className="flex flex-col gap-8 items-center w-fit mt-12">
        <h1 className="">{decodeURIComponent(user)}</h1>
        {questions.map((e, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 justify-start items-start w-full"
          >
            <p className="text-xl font-semibold">{e.question}</p>
            {buildQuestion(e.typeId)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchPage;
