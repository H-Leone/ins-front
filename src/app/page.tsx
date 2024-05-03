import LandingImage from "../../public/landing-image.png"
import BusinessCarousel from "@/components/business-carousel";
import Navbar from "@/components/navbar";

function Home() {
  return (
    <div className="pt-[160px]">
      <Navbar />

      <div className="flex justify-evenly items-center">
        
        <div className="w-[500px] flex flex-col gap-6">

          <h1 className="text-[35px] font-bold">Lorem ipsum dolor sit amet, consectetur <span className="bg-slate-300">adipscing elit. Sed</span> bibendum purus eget.</h1>

          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum purus eget nunc luctus tincidunt. Proin dignissim massa sed aliquam iaculis.</p>

          <div className="flex gap-4">
            <button className="bg-insigthfy-gradient px-4 py-2 rounded-md text-white">Começar</button>
            <button className="bg-gray-100 px-4 py-2 rounded-md font-medium">Saber mais</button>
          </div>

        </div>

        <img src={LandingImage.src} alt="" />

      </div>

      <p className="my-12 text-center">Algumas empresas do grupo que utilizam o NPS</p>

      <BusinessCarousel />

    </div>
  );
}

export default Home;
