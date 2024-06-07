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
    const [currentBusiness, setCurrentBusiness] = useState<keyof typeof business>("picpay");

    const currentIndex = businessKeys.indexOf(currentBusiness);
    const rearrangedBusinessKeys = [
        ...businessKeys.slice(currentIndex),
        ...businessKeys.slice(0, currentIndex)
    ];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imagesToRender = () => {
        if (windowWidth < 430) {
            return 2;
        } else if (windowWidth < 540) {
            return 3;
        } else if (windowWidth < 700) {
            return 4;
        } else {
            return businessKeys.length;
        }
    }

    return (
        <div className="flex gap-10 justify-center my-8">
            <button onClick={() => setCurrentBusiness(rearrangedBusinessKeys[(currentIndex + businessKeys.length - 1) % businessKeys.length])}>
                <ChevronLeft size={25} />
            </button>

            <div className="flex gap-10">
                {rearrangedBusinessKeys.slice(0, imagesToRender()).map((key) => (
                    <img width={70} key={key} src={business[key]} alt={key} />
                ))}
            </div>

            <button onClick={() => setCurrentBusiness(rearrangedBusinessKeys[(currentIndex + 1) % businessKeys.length])}>
                <ChevronRight size={25} />
            </button>
        </div>
    );
}

export default BusinessCarousel;