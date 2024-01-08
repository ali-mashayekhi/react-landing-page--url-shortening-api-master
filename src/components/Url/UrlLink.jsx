import { useState } from "react";

function UrlLink({ longUrl, shortUrl }) {
  const [copied, setCopied] = useState(false);

  function copyUrlHandler(e) {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  }

  const btnClasses = `rounded-md  py-3 font-bold text-white transition-all duration-300  ${
    copied
      ? "hover:bg-dark-violet-custom-tint bg-dark-violet-custom"
      : "bg-cyan-custom hover:bg-cyan-custom-tint"
  }`;

  return (
    <li className="rounded-md bg-white text-base">
      <p className="border-b border-b-gray-custom px-3 py-3 text-very-dark-violet-custom">
        {longUrl}
      </p>
      <div className="flex flex-col gap-3 px-3 py-3">
        <p className="text-cyan-custom">{shortUrl}</p>
        <button onClick={copyUrlHandler} className={btnClasses}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </li>
  );
}

export default UrlLink;
