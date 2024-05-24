import { useState } from "react";

export interface IInsightfyTabsProps {
  name: string;
  content: React.ReactNode;
}

export interface IInsightfyTabs {
  tabs: IInsightfyTabsProps[];
}

function InsightfyTabs({ tabs }: IInsightfyTabs) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex w-full border-b-2 py-4 ">
      <ul className="flex cursor-pointer w-full justify-evenly">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`px-4 py-2 ${
              activeTab === index
                ? "text-insightfy-dark-blue border-b-2 font-medium border-insightfy-blue"
                : "text-insightfy-neutral"
            } `}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </li>
        ))}
      </ul>

      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
}

export default InsightfyTabs;
