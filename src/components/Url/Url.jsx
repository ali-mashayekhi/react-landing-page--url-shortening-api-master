import "./Url.css";

function Url() {
  return (
    <section className=" url-bg-color py-11 sm:pb-[3.75rem] sm:pt-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-[1.1875rem]">
        <form className=" background-image grid grid-cols-1 gap-3 rounded-lg bg-dark-violet-custom bg-right-top bg-no-repeat p-6 sm:grid-cols-10 sm:gap-6 sm:px-16 sm:py-[3.1875rem]">
          <input
            className="h-12 rounded-lg px-4 placeholder:text-base sm:col-span-8 sm:h-[3.875rem] sm:placeholder:px-8 sm:placeholder:text-lg"
            type="text"
            placeholder="Shorten a link here..."
          />
          <button className="h-12 rounded-lg bg-cyan-custom text-lg font-semibold text-white sm:col-span-2 sm:h-[3.875rem]">
            Shorten It!
          </button>
        </form>
      </div>
    </section>
  );
}

export default Url;
