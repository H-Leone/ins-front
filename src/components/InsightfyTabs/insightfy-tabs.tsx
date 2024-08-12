import Link from "next/link";

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

        <ul className="bg-insightfy-gradient flex items-center cursor-pointer w-full justify-evenly rounded-xl py-3">
          {tabs.map((tab, index) => (
            <Link key={tab.name} href={`/formularios/${research}?tab=${tab.path}`}>
              <li
                key={index}
                className={`px-4 py-2 font-semibold rounded-lg ${
                  tab.path === currentTab
                    ? "text-insightfy-blue border-b-2 border-insightfy-blue bg-white"
                    : "text-white"
                } `}
              >
                {tab.name}
              </li>
            </Link>
          ))}
        </ul>

      </div>

      <div className="py-4">{tabs[activeTab].content}</div>

    </div>
  );
}

export default InsightfyTabs;
