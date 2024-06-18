interface IData {
    name: string;
    value: string;
}

function DataCard({ name, value }: IData) {
    return (
        <div className="relative w-[400px] h-[250px] shadow-md p-5">

            <span className="flex gap-2">
                <div className="w-6 h-6 bg-insightfy-gradient rounded-lg" />
                <p className="text-insightfy-blue font-bold">{name}</p>
            </span>

            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-semibold">{value}</p>

        </div>
    );
}

export default DataCard;