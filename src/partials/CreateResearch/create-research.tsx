"use client";

import InsightfyButton from "@/components/InsightfyButton/insightfy-button";
import { MessageSquareTextIcon, SendIcon, UsersIcon } from "lucide-react";
import { useState } from "react";

function CreateResearchPage() {
  const [title, setTitle] = useState("Título da pesquisa");

  return (
    <div className="flex gap-10">
      <div className="w-1/3 p4">
        <div className="w-full px-6 py-8 flex flex-col justify-center items-center gap-8 border rounded-md justify-center shadow-lg">
          <InsightfyButton
            text="adicione um grupo"
            width="100%"
            disabled={false}
            type="button"
            variant="outlined"
            click={() => null}
            prefixIcon={
              <UsersIcon className="text-insightfy-blue w-6 h-6 font-light" />
            }
          />
          <InsightfyButton
            text="método de disparo"
            width="100%"
            disabled={false}
            type="button"
            variant="outlined"
            click={() => null}
            prefixIcon={
              <SendIcon className="text-insightfy-blue w-6 h-6 font-light" />
            }
          />
          <InsightfyButton
            text="descrição mensagem"
            width="100%"
            disabled={false}
            type="button"
            variant="outlined"
            click={() => null}
            prefixIcon={
              <MessageSquareTextIcon className="text-insightfy-blue w-6 h-6 font-light" />
            }
          />
          <button
            className="text-white py-2 px-8 font-semibold rounded-md flex align-center justify-center gap-2 bg-insightfy-blue hover:bg-insightfy-blue-hover"
            disabled={false}
            type="button"
            onClick={() => null}
          >
            Disparar
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="px-6 w-full py-8 flex flex-col justify-center items-center gap-8 border rounded-md justify-center shadow-lg">
          <input
            className="w-full border-b-2 text-3xl py-4 focus:outline-none focus:ring-0 focus:caret-insightfy-blue"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="px-6 w-full py-8 flex flex-col justify-center items-center gap-8 border rounded-md justify-center shadow-lg">
          <textarea
            className="w-full text-ins-fidas py-4 focus:outline-none focus:ring-0 focus:caret-insightfy-blue"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />  
          <input
            className="bg-ins-fidas w-full border-b-2 text-placeholder-text py-4 focus:outline-none focus:ring-0 focus:caret-insightfy-blue"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="px-6 w-full py-8 flex flex-col justify-center items-center gap-8 border rounded-md justify-center shadow-lg">
          <input
            className="w-full border-b-2 text-3xl py-4 focus:outline-none focus:ring-0 focus:caret-insightfy-blue"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateResearchPage;
