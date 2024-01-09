import UrlLink from "./UrlLink";
import spinner from "../../assets/spinner-1s-200px.svg";

function UrlList(props) {
  const links = props.links.map((link) => (
    <UrlLink longUrl={link.longUrl} shortUrl={link.shortUrl} key={link.id} />
  ));

  return (
    <div className="bg-gray-transparent-custom pb-11 sm:pb-[3.75rem] ">
      <ul className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:gap-3 sm:px-[1.1875rem]">
        {(props.loading || props.error) && (
          <li className="self-center ">
            {props.loading && (
              <img
                className="h-16 w-16"
                src={spinner}
                alt="An animated spinner"
              />
            )}
            {props.error && (
              <p className="text-red-custom">
                There is a problem in communating to server.
              </p>
            )}
          </li>
        )}
        {links}
      </ul>
    </div>
  );
}

export default UrlList;
