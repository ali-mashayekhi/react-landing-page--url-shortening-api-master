import { useState } from "react";
import { isUrl } from "../../helpers/helpers";

function UrlForm(props) {
  const [enteredUrl, setEnteredUrl] = useState("");
  const [hasError, setHasError] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  function setUrlhandler(e) {
    setEnteredUrl(e.target.value);
    if (hasError && isUrl(e.target.value)) setHasError(false);
    if (!hasError && !isUrl(e.target.value) && isSubmited) setHasError(true);
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsSubmited(true);
    if (!isUrl(enteredUrl)) return setHasError(true);

    props.shortenUrl(enteredUrl);

    //Resetting functionality
    setEnteredUrl("");
    setIsSubmited(false);
  }

  const inputClasses = `h-12 w-full rounded-lg px-4  placeholder:text-base sm:col-span-8 sm:h-[3.875rem] sm:placeholder:px-8 sm:placeholder:text-lg ${
    hasError &&
    "placeholder:text-red-custom focus:outline-[3px] focus:outline-red-custom border-red-custom border-[3px]"
  }`;

  return (
    <div className="url-bg-color">
      <div className="mx-auto max-w-6xl px-6 pb-6 sm:px-[1.1875rem]">
        <form
          className=" background-image grid grid-cols-1 gap-3 rounded-lg bg-dark-violet-custom bg-right-top bg-no-repeat p-6 sm:grid-cols-10 sm:gap-6 sm:px-16 sm:py-[3.1875rem]"
          onSubmit={submitHandler}
        >
          <div>
            <input
              className={inputClasses}
              type="text"
              placeholder="Shorten a link here..."
              onChange={setUrlhandler}
              value={enteredUrl}
            />
            {hasError && (
              <p className="mt-[0.375rem] text-xs italic text-red-custom">
                Please add a link
              </p>
            )}
          </div>
          <button className="h-12 rounded-lg bg-cyan-custom text-lg font-semibold text-white transition-all duration-300 hover:bg-cyan-custom-tint sm:col-span-2 sm:h-[3.875rem]">
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  );
}

export default UrlForm;
