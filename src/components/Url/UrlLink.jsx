function UrlLink({ longUrl, shortUrl }) {
  return (
    <li className="rounded-md bg-white text-base">
      <p className="border-b border-b-gray-custom px-3 py-3 text-very-dark-violet-custom">
        {longUrl}
      </p>
      <div className="flex flex-col gap-3 px-3 py-3">
        <p className="text-cyan-custom">{shortUrl}</p>
        <button className="rounded-md bg-cyan-custom py-3 font-bold text-white transition-all duration-300 hover:bg-cyan-custom-tint">
          Copy
        </button>
      </div>
    </li>
  );
}

export default UrlLink;
