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
            <h2 className=" text-very-dark-violet-custom mb-5 text-center text-[2.5rem] font-bold leading-[1.15]">
              More than just <span className="text-black"> shorter</span> links
            </h2>
            <p className="text-grayish-violet-custom mb-7 text-center">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a
              href="#"
              className="bg-cyan-custom  flex h-[3.5625rem] w-[12.3125rem]  items-center justify-center rounded-full  text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
