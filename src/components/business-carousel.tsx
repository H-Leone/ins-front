import Seara from "../../public/seara.png";
import BancoOriginal from "../../public/banco-original.png";
import Picpay from "../../public/picpay.png";
import Swift from "../../public/swift.png";
import Friboi from "../../public/friboi.png";
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