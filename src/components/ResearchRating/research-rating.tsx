interface ResearchRatingProps {
  responses: number[];
}

function ResearchRating({ responses }: ResearchRatingProps) {
    const colors = {
        0: "bg-[#B72224]",
        1: "bg-[#D52029]",
        2: "bg-[#E95223]",
        3: "bg-[#EA6F22]",
        4: "bg-[#F6A726]",
        5: "bg-[#FDC729]",
        6: "bg-[#EBDB0A]",
        7: "bg-[#E5E044]",
        8: "bg-[#C2D234]",
        9: "bg-[#AEC93C]",
        default: "bg-[#AEC93C]"
    };

    return (
        <div className="flex flex-col gap-6">
            <span className="w-full flex justify-between text-xs font-medium">
              <p>NOT AT ALL LIKELY</p>
              <p>EXTREMELY LIKELY</p>
            </span>

            <div className="flex justify-evenly">
              {responses.map((el, index) => (
                <div key={el} className={`${colors[index as keyof typeof colors] || colors.default} w-12 h-12 flex justify-center items-center text-white text-xl font-bold rounded`}>
                    {el}
                </div>
              ))}
            </div>
        </div>
    );
}

export default ResearchRating;