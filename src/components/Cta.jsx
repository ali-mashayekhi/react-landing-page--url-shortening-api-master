import Button from "./UI/Button";

import "./Cta.css";

function Cta() {
  return (
    <section className="bg-gray-transparent-custom sm:pt-[3.75rem]">
      <div>
        <div className="bg-pattern flex flex-col items-center bg-dark-violet-custom px-2 pb-[5.375rem] pt-24 sm:py-[3.4375rem] ">
          <h2 className="mb-3 bg-no-repeat text-[1.75rem] font-bold tracking-tight text-white sm:mb-5 sm:text-[2.5rem]">
            Boost your links today
          </h2>
          <Button btnHref="#">Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
