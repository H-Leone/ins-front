"use client";

import { useState } from "react";

function Balls() {
    const [selectedBall, setBall] = useState(0);

    const handleClick = (el: number) => () => {
        setBall(el);
    }

    return (
        <div className="m-auto flex gap-2">

            {[0, 1, 2].map((ball) => (
                <div onClick={handleClick(ball)} className={`w-5 h-5 bg-insightfy-blue rounded-full ${ball !== selectedBall && "opacity-40"} cursor-pointer`}>

                </div>
            ))}

        </div>
    );
}

export default Balls;