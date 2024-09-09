interface IData {
    name: string;
    value: string;
}

function DataCard({ name, value }: IData) {
    return (
        <div className="relative w-[400px] h-52 shadow-md p-5">

            <span className="flex items-center gap-2">
                <div className="w-5 h-5 bg-insightfy-gradient rounded-lg" />
                <p className="text-insightfy-blue text-[15px] font-bold">{name}</p>
            </span>

            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-semibold">{value}</p>

        </div>
    );
}

export default DataCard;