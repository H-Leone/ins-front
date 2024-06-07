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
      <div className="flex w-full border-b-2 py-4">
        <ul className="flex cursor-pointer w-full justify-evenly">
          {tabs.map((tab, index) => (
            <Link href={`/formularios/${research}?tab=${tab.path}`}>
              <li
                key={index}
                className={`px-4 py-2 ${
                  tab.path === currentTab
                    ? "text-insightfy-dark-blue border-b-2 font-bold border-insightfy-blue"
                    : "text-insightfy-neutral"
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
