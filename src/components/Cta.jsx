import Button from "./UI/Button";

import bgPattern from "../assets/bg-boost-mobile.svg";

function Cta() {
  return (
    <section className="">
      <div>
        <div
          className="flex flex-col items-center bg-dark-violet-custom px-2 pb-[5.375rem] pt-24"
          style={{ background: `url(${bgPattern}), hsl(257, 27%, 26%)` }}
        >
          <h2 className="mb-3 bg-no-repeat text-[1.75rem] font-bold tracking-tight text-white">
            Boost your links today
          </h2>
          <Button btnHref="#">Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
