interface ActionCardProps {
    name: string;
    icon: React.ReactNode;
    callback: () => void;
    index: number;
    actions: number;
}

function ActionCard({ name, icon, callback, index, actions }: ActionCardProps) {
    return (
        <span
            onClick={callback}
            key={name}
            className={`cursor-pointer duration-200 hover:bg-insightfy-gray p-2 relative group
                ${index === 0 ? 'rounded-l-md' : ''}
                ${index === actions - 1 ? 'rounded-r-md' : ''}`}
        >
            <p className="group-active:translate-y-[1px]">{icon}</p>

            <div className="w-24 h-12 hidden group-hover:flex items-center absolute bg-gray-700 text-white text-xs rounded-md px-2 py-1 -top-14 -left-8">
                <p className="w-full text-center select-none">{name}</p>
            </div>
        </span>
    );
}

export default ActionCard;