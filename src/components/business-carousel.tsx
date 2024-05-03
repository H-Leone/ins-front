"use client";

import Seara from "../../public/seara.svg";
import BancoOriginal from "../../public/banco-original.svg";
import Picpay from "../../public/picpay.svg";
import Swift from "../../public/swift.svg";
import Friboi from "../../public/friboi.svg";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function BusinessCarousel() {
    const business = {
        "seara": Seara.src,
        "banco-original": BancoOriginal.src,
        "picpay": Picpay.src,
        "swift": Swift.src,
        "friboi": Friboi.src,
    };
    const businessKeys = Object.keys(business) as (keyof typeof business)[];
    const [currentBusiness, setCurrentBusiness] = useState<keyof typeof business>("picpay");

    const currentIndex = businessKeys.indexOf(currentBusiness);
    const rearrangedBusinessKeys = [
        ...businessKeys.slice(currentIndex),
        ...businessKeys.slice(0, currentIndex)
    ];

    return (
        <div className="flex gap-10 justify-center my-12">
            <button onClick={() => setCurrentBusiness(rearrangedBusinessKeys[0])}>
                <ChevronLeft size={25} />
            </button>

            <div className="flex gap-10">
                {rearrangedBusinessKeys.map((key) => (
                    <img width={70} key={key} src={business[key]} alt={key} />
                ))}
            </div>

            <button onClick={() => setCurrentBusiness(rearrangedBusinessKeys[rearrangedBusinessKeys.length - 1])}>
                <ChevronRight size={25} />
            </button>
        </div>
    );
}

export default BusinessCarousel;