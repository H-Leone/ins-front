import Link from "next/link";
import TabCard from "../TabCard/tab-card";

export interface IInsightfyTabsProps {
  name: string;
  path: string;
  content: React.ReactNode;
}

export interface IInsightfyTabs {
  research: string;
  currentTab: string;
  tabs: IInsightfyTabsProps[];
}

function InsightfyTabs({ research, currentTab, tabs }: IInsightfyTabs) {
  const activeTab = tabs.findIndex((tab) => tab.path === currentTab) ?? 0;

  return (
    <div className="w-full">
      <div className="flex w-full py-4">
        <ul className="grid grid-cols-4 cursor-pointer w-full rounded-xl py-3">
          {tabs.map((tab, index) => (
            <TabCard
              currentTab={currentTab}
              key={index}
              {...tab}
            />
          ))}
        </ul>
      </div>

      <div className="py-4">{tabs[activeTab].content}</div>
    </div>
  );
}

export default InsightfyTabs;
