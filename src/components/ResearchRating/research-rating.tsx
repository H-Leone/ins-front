function ResearchRating() {
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
            <span className="w-full flex justify-between text-xs">
              <p>NOT AT ALL LIKELY</p>
              <p>EXTREMELY LIKELY</p>
            </span>

            <div className="flex justify-evenly">
              {[...Array(10).keys()].map((el) => (
                <div className={`${colors[el] || colors.default} w-11 h-11 flex justify-center items-center text-white text-xl font-bold rounded`}>
                    {el}
                </div>
              ))}
            </div>
        </div>
    );
}

export default ResearchRating;