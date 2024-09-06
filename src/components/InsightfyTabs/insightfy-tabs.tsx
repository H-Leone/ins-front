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
        <ul className="grid grid-cols-3 cursor-pointer w-full rounded-xl py-3">
          {tabs.map((tab, index) => (
            <Link key={tab.name} href={`/formularios/${research}?tab=${tab.path}`}>
              <li
                key={index}
                className={`w-full text-center px-4 py-3 font-semibold border-b-[3px] ${
                  tab.path === currentTab
                    ? "text-insightfy-blue border-insightfy-blue"
                    : "text-insightfy-dark-gray border-insightfy-light-gray"
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
