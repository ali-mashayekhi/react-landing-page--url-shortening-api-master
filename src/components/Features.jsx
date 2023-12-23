import brandIcon from "../assets/icon-brand-recognition.svg";
import detailedRecordIcon from "../assets/icon-detailed-records.svg";
import fullyCustomizedIcon from "../assets/icon-fully-customizable.svg";

function Features() {
  return (
    <section className="pb-[4.8125rem] pt-11">
      <div className="px-6">
        <div className="mb-[5.625rem] px-4">
          <h2 className="mb-7 text-center text-[1.75rem]  font-bold tracking-tight text-very-dark-violet-custom">
            Advanced Statistics
          </h2>
          <p className="text-center text-base leading-7 text-grayish-violet-custom">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 -z-10 h-full w-full max-w-[0.5rem] -translate-x-1/2 bg-cyan-custom"></div>
          <div className="mb-[5.625rem] flex flex-col items-center rounded-md bg-white px-6 pb-10 shadow-sm">
            <div className="flex h-[5.5rem] w-[5.5rem] -translate-y-1/2 items-center justify-center rounded-full bg-dark-violet-custom">
              <img src={brandIcon} alt="A chart" />
            </div>
            <h3 className="mb-4 text-center text-2xl font-bold text-very-dark-violet-custom">
              Brand Recognition
            </h3>
            <p className="text-center text-base text-grayish-violet-custom">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="mb-[5.625rem] flex flex-col items-center rounded-md bg-white px-6 pb-10 shadow-sm">
            <div className="flex h-[5.5rem] w-[5.5rem] -translate-y-1/2 items-center justify-center rounded-full bg-dark-violet-custom">
              <img src={detailedRecordIcon} alt="A chart" />
            </div>
            <h3 className="mb-4 text-center text-2xl font-bold text-very-dark-violet-custom">
              Detailed Records
            </h3>
            <p className="text-center text-base text-grayish-violet-custom">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-md bg-white px-6 pb-10 shadow-sm ">
            <div className="flex h-[5.5rem] w-[5.5rem] -translate-y-1/2 items-center justify-center rounded-full bg-dark-violet-custom">
              <img src={fullyCustomizedIcon} alt="A chart" />
            </div>
            <h3 className="mb-4 text-center text-2xl font-bold text-very-dark-violet-custom">
              Fully Customizable
            </h3>
            <p className="text-center text-base text-grayish-violet-custom">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
