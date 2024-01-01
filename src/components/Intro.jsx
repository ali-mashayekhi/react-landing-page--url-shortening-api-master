import Button from "./UI/Button";
import illustration from "../assets/illustration-working.svg";

function Intro() {
  return (
    <section className="pb-11 sm:pb-8">
      <div className="grid max-w-6xl grid-cols-1 px-6 sm:mx-auto sm:grid-cols-2  sm:px-[1.1875rem] ">
        <img
          className="mb-[2.625rem] min-h-[20.3125rem] overflow-visible object-cover object-left sm:col-start-2 sm:mb-0 lg:min-h-[30.3125rem] xl:pl-28"
          src={illustration}
          alt="illustration of a woman sitting behind desk with computer on it."
        />

        <div className="flex flex-col items-center sm:col-start-1 sm:row-start-1 sm:items-start sm:justify-center">
          <h1 className=" mb-5 text-center text-[2.6rem] font-bold leading-[1.15] tracking-tight text-very-dark-violet-custom sm:mb-1 sm:text-left sm:text-[4.5625rem]">
            More than just <span className="text-black"> shorter</span> links
          </h1>
          <p className="mb-7 text-center text-grayish-violet-custom sm:text-left sm:text-xl">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button btnHref="#">Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
