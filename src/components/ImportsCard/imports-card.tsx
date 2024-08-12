interface Props {
  name: string;
  size: string;
}

function ImportsCard({ name, size }: Props) {
  return (
    <div className="text-center px-4 py-4 flex justify-center items-center w-full h-[217px] flex-col gap-2 rounded border-insightfy-border border border-solid">
      <h2 className="text-[22px] font-bold">{name}</h2>
      <p className="text-[18px] ">{size}</p>
    </div>
  );
}

export default ImportsCard;
