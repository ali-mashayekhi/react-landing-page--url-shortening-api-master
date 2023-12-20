import bgUrlMobile from "../../assets/bg-shorten-mobile.svg";

function Url() {
  return (
    <section className="py-11">
      <div className="px-6 ">
        <form
          className="grid grid-cols-1 gap-3 rounded-lg bg-dark-violet-custom bg-right-top bg-no-repeat p-6"
          style={{ backgroundImage: `url(${bgUrlMobile})` }}
        >
          <input
            className="h-12 rounded-lg px-4 placeholder:text-base"
            type="text"
            placeholder="Shorten a link here..."
          />
          <button className="h-12 rounded-lg bg-cyan-custom text-lg font-semibold text-white">
            Shorten It!
          </button>
        </form>
      </div>
    </section>
  );
}

export default Url;
