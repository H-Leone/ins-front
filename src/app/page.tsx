import Graph from "../../public/Graph.svg";
import BusinessCarousel from "@/components/business-carousel";

function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div className="hero-bg h-[650px] flex items-center px-[85px]">
        
        <div className="w-[500px] flex flex-col gap-6">

          <h1 className="text-[35px] text-white font-bold">Lorem ipsum dolor sit amet, consectetur <span className="bg-slate-300">adipscing elit. Sed</span> bibendum purus eget.</h1>

          <p className="text-white text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum purus eget nunc luctus tincidunt. Proin dignissim massa sed aliquam iaculis.</p>

          <div className="flex gap-4">
            <button className="bg-insightfy-gradient px-4 py-2 rounded-md text-white">Começar</button>
            <button className="bg-gray-100 px-4 py-2 rounded-md font-medium">Saber mais</button>
          </div>

        </div>
      </div>

      <p className="text-center">Algumas empresas do grupo que utilizam o NPS</p>

      <BusinessCarousel />

      <div className="flex flex-wrap justify-evenly gap-10 px-6">
        {[1,2,3].map((item) => (
            <div className="w-[315px] h-[385px] flex flex-col justify-evenly items-center shadow-xl rounded-md p-8 transition-transform duration-200 ease-in-out transform hover:-translate-y-1 cursor-pointer" key={item}>
              <section className="text-center">
                <p className="text-zinc-400">Lorem Ipsum</p>
                <p className="text-ins-blue text-3xl font-bold">$454,244</p>
              </section>

              <img width={250} src={Graph.src} alt="" />
            </div>
          ))}
      </div>

      <section className="px-10 my-8 flex justify-around items-center">
        <p className="w-[400px] text-3xl font-bold">Lorem Ipsum Dolor sit Amet, consectur. Sed bibendum.</p>
        <div className="w-[500px] flex flex-col gap-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
          <p>Fique por dentro das novidades:</p>
          <form className="h-[50px] flex gap-4">
            <input placeholder="Digite seu email" type="text" className="w-11/12 outline-none shadow-md p-4 rounded" />
            <button className="w-[150px] h-full bg-ins-blue text-white rounded">Notificar</button>
          </form>
        </div>
      </section>

      <h2 className="text-center text-3xl font-semibold mt-4">Pronto para tentar?</h2>
      <button className="w-[220px] h-[50px] m-auto bg-ins-blue text-white rounded font-semibold">Faça seu registro</button>

    </div>
  );
}

export default Home;
