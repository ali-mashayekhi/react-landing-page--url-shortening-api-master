import { useState } from "react";

function UrlLink({ longUrl, shortUrl }) {
  const [copied, setCopied] = useState(false);

  function copyUrlHandler(e) {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  }

  const btnClasses = `rounded-md  py-3 font-bold text-white transition-all sm:items-center sm:rounded-[5px] sm:justify-center sm:flex duration-300 sm:h-9 sm:w-[6.375rem]  ${
    copied
      ? "hover:bg-dark-violet-custom-tint bg-dark-violet-custom"
      : "bg-cyan-custom hover:bg-cyan-custom-tint"
  }`;

  return (
    <li className="rounded-md bg-white text-base sm:flex sm:content-center sm:items-center sm:justify-between sm:px-6 sm:py-4">
      <p className="border-b border-b-gray-custom px-3 py-3 text-very-dark-violet-custom sm:border-none sm:p-0">
        {longUrl}
      </p>
      <div className="flex flex-col gap-3 px-3 py-3 sm:flex-row sm:items-center sm:gap-6 sm:p-0">
        <p className="text-cyan-custom ">{shortUrl}</p>
        <button onClick={copyUrlHandler} className={btnClasses}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </li>
  );
}

export default UrlLink;
