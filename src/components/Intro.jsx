import Button from "./UI/Button";
import illustration from "../assets/illustration-working.svg";

function Intro() {
  return (
    <section className="pb-11">
      <div>
        <div>
          <img
            className="mb-[2.625rem] h-[20.3125rem] object-cover object-left pl-6"
            src={illustration}
            alt="illustration of a woman sitting behind desk with computer on it."
          />
          <div className="flex flex-col items-center px-6">
            <h1 className=" mb-5 text-center text-[2.6rem] font-bold leading-[1.15] tracking-tight text-very-dark-violet-custom">
              More than just <span className="text-black"> shorter</span> links
            </h1>
            <p className="mb-7 text-center text-grayish-violet-custom">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button btnHref="#">Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
