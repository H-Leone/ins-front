import InsightfyButton from "@/components/InsightfyButton/insightfy-button";
import ResearchRating from "@/components/ResearchRating/research-rating";
import { MessageSquareTextIcon, SendIcon, UsersIcon } from "lucide-react";

function CreateResearchPage() {
  const actions = [
    {
      icon: <UsersIcon className="text-insightfy-blue w-6 h-6 font-light" />,
      name: "Adicione um grupo",
      action: null,
    },
    {
      icon: <SendIcon className="text-insightfy-blue w-6 h-6 font-light" />,
      name: "Método de disparo",
      action: null,
    },
    {
      icon: <MessageSquareTextIcon className="text-insightfy-blue w-6 h-6 font-light" />,
      name: "Descrição mensagem",
      action: null,
    },
  ];

  return (
    <div className="flex gap-10">
      <div className="w-[400px] h-fit flex flex-col gap-8 shadow-lg p-6">
        {actions.map(action => (
          <InsightfyButton
            key={action.name}
            text={action.name}
            width="100%"
            disabled={false}
            type="button"
            variant="outlined"
            prefixIcon={action.icon}
          />
        ))}
      </div>

      <div className="w-full flex flex-col gap-8 shadow-3xl">

        <section className="w-full flex justify-center flex-col px-8 py-8 shadow-lg rounded-md">
          <input 
            type="text"
            className="w-full text-3xl border-b-2 px-4 py-3 outline-none"
            value="Pesquisa NPS"
          />
        </section>

        <section className="w-full flex flex-col gap-8 px-8 py-8 shadow-lg rounded-md">
          <p className="text-sm text-center font-medium text-insightfy-dark-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          <ResearchRating />

        </section>

        <div className="text-center w-full py-12 border border-dashed border-red-500">

          <p>+ Nova Pergunta</p>

        </div>

      </div>
    </div>
  );
}

export default CreateResearchPage;
