import StatusFilter from "../StatusFilter/status-filter";

function ResponseGenericAnalytics() {
    return (
        <section className="w-full flex flex-col gap-6">

            <div className="w-full flex" style={{ justifyContent: "right" }}>
                <StatusFilter options={[ { label: "All", value: "All" } ]} />
            </div>

            <div className="w-full rounded-lg border border-insightfy-light-gray p-6">
                <p className="text-lg font-bold">Resumo geral</p>
                <p className="text-sm">Os produtos da swift são muitos bons as lojas são limpas ebla bla bla bla</p>
            </div>

            <section className="flex justify-between">
                <div className="w-52 h-44 flex justify-center flex-col gap-4 text-center border border-insightfy-light-gray rounded-lg p-4">
                    <p className="text-lg font-medium">Tópico negativo</p>
                    <p className="text-3xl font-semibold">144</p>
                    <p className="text-xs">detratores sobre validade do produto</p>
                </div>
                <div className="w-52 h-44 flex justify-center flex-col gap-4 text-center border border-insightfy-light-gray rounded-lg p-4">
                    <p className="text-lg font-medium">Tópico negativo</p>
                    <p className="text-3xl font-semibold">144</p>
                    <p className="text-xs">detratores sobre validade do produto</p>
                </div>
                <div className="w-52 h-44 flex justify-center flex-col justify-center gap-4 text-center border border-insightfy-light-gray rounded-lg p-4">
                    <p>O produto x foi citado 200 vezes de forma negativa</p>
                </div>
            </section>

        </section>
    );
}

export default ResponseGenericAnalytics;