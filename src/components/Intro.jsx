import Button from "./UI/Button";
import illustration from "../assets/illustration-working.svg";

function Intro() {
  return (
    <section className="pb-11 md:pb-8">
      <div className="grid max-w-6xl grid-cols-1 px-6 md:mx-auto md:grid-cols-2  md:px-[1.1875rem] ">
        <img
          className="mb-[2.625rem] min-h-[20.3125rem] overflow-visible object-cover object-left md:col-start-2 md:mb-0 md:h-[clamp(22rem,33vw,30.3125rem)] md:pl-[clamp(5vw,7.77vw,7rem)] "
          src={illustration}
          alt="illustration of a woman sitting behind desk with computer on it."
        />

        <div className="flex flex-col items-center md:col-start-1 md:row-start-1 md:items-start md:justify-center">
          <h1 className=" mb-5 text-center text-[2.6rem] font-bold leading-[1.15] tracking-tight text-very-dark-violet-custom md:mb-1 md:text-left md:text-[clamp(3.2rem,5vw,4rem)] lg:text-[clamp(3.8rem,5vw,4.5625rem)]">
            More than just <span className="text-black"> shorter</span> links
          </h1>
          <p className="mb-7 text-center text-grayish-violet-custom md:text-left md:text-[clamp(1rem,1.3vw,1.25rem)]">
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
