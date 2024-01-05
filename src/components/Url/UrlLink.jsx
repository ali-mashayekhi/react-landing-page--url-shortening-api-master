function UrlLink(props) {
  return (
    <li className="rounded-md bg-white text-base">
      <p className="border-b border-b-gray-custom px-3 py-3 text-very-dark-violet-custom">
        https://frontendmentor.io
      </p>
      <div className="flex flex-col gap-3 px-3 py-3">
        <p className="text-cyan-custom">https://rel.link/k41Kyk</p>
        <button className="hover:bg-cyan-custom-tint rounded-md bg-cyan-custom py-3 font-bold text-white transition-all duration-300">
          Copy
        </button>
      </div>
    </li>
  );
}

export default UrlLink;
