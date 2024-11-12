"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Seara from '../../public/seara.svg';
import BancoOriginal from '../../public/banco-original.svg';
import Picpay from '../../public/picpay.svg';
import Swift from '../../public/swift.svg';
import Friboi from '../../public/friboi.svg';

function BusinessCarousel() {
    const business = {
        "seara": Seara.src,
        "banco-original": BancoOriginal.src,
        "picpay": Picpay.src,
        "swift": Swift.src,
        "friboi": Friboi.src,
    };
    const businessKeys = Object.keys(business) as (keyof typeof business)[];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (direction: "left" | "right") => () => {
        if (direction === "right") {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? businessKeys.length - 1 : prevIndex - 1
            );
        } else {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % businessKeys.length
            );
        }
    };

    const visibleImages = (): (keyof typeof business)[] => {
        const images: (keyof typeof business)[] = [];
        for (let i = 0; i < 5; i++) {
            images.push(businessKeys[(currentIndex + i) % businessKeys.length]);
        }
        return images;
    };    

    return (
        <div className="flex gap-10 justify-center my-8">
            <button onClick={handleClick("left")}>
                <ChevronLeft size={25} />
            </button>

            <div className="flex gap-10">
                {visibleImages().map((key) => (
                    <img
                        width={70}
                        key={key}
                        src={business[key]}
                        alt={key}
                    />
                ))}
            </div>

            <button onClick={handleClick("right")}>
                <ChevronRight size={25} />
            </button>
        </div>
    );
}

export default BusinessCarousel;