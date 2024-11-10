import { ISurveySummary } from "@/types/survey-summary";
import StatusFilter from "../StatusFilter/status-filter";
import Loading from "../../../public/loading.gif";
import Image from "next/image";

interface ResponseGenericAnalyticsProps {
  summary: ISurveySummary;
}

function ResponseGenericAnalytics({
  summary,
  loading,
}: ResponseGenericAnalyticsProps & { loading: boolean }) {
  return loading ? (
    <Image src={Loading.src} alt="Loading GIF" width={100} height={100} />
  ) : (
    <section className="w-full flex flex-col gap-6">
      <div className="w-full flex" style={{ justifyContent: "right" }}>
        <StatusFilter options={[{ label: "All", value: "All" }]} />
      </div>

      <div className="w-full flex flex-col gap-2 rounded-lg border border-insightfy-light-gray p-6">
        <p className="text-xl font-bold">Resumo geral</p>
        <p className="text-sm">{summary.summary}</p>
      </div>

      <section className="flex justify-between">
        <div className="w-52 h-44 flex justify-center flex-col gap-4 text-center border border-insightfy-light-gray rounded-lg p-4">
          <p className="text-lg font-medium">Tópicos positivos</p>
          <p className="text-3xl font-semibold">
            {summary?.positiveTopicsCount}
          </p>
        </div>
        <div className="w-52 h-44 flex justify-center flex-col gap-4 text-center border border-insightfy-light-gray rounded-lg p-4">
          <p className="text-lg font-medium">Tópicos negativos</p>
          <p className="text-3xl font-semibold">
            {summary.negativeTopicsCount}
          </p>
        </div>
        <div className="w-52 h-44 flex justify-center flex-col justify-center gap-4 text-center border border-insightfy-light-gray rounded-lg p-4">
          <p className="text-lg font-medium">Total de tópicos</p>
          <p className="text-3xl font-semibold">
            {summary.negativeTopicsCount + summary.positiveTopicsCount}
          </p>
        </div>
      </section>
    </section>
  );
}

export default ResponseGenericAnalytics;
