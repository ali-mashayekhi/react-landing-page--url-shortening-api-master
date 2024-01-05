import UrlLink from "./UrlLink";

function UrlList(props) {
  return (
    <div className="bg-gray-transparent-custom pb-11 sm:pb-[3.75rem] ">
      <ul className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:px-[1.1875rem]">
        <UrlLink />
        <UrlLink />
        <UrlLink />
      </ul>
    </div>
  );
}

export default UrlList;
