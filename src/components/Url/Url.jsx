import UrlList from "./UrlList";
import UrlForm from "./UrlFrom";

import "./Url.css";
import { useState } from "react";

function Url() {
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingError, setFetchingError] = useState(false);

  async function shortenUrl(enteredUrl) {
    setLoading(true);
    setFetchingError(false);

    let fixedUrl = enteredUrl;

    if (!enteredUrl.startsWith("https://")) fixedUrl = `https://${enteredUrl}`;

    const options = {
      body: JSON.stringify({ url: fixedUrl }),
      headers: {
        "api-key": import.meta.env.VITE_URL_SHORTENER_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    };

    try {
      const response = await fetch(
        "https://www.shrtlnk.dev/api/v2/link",
        options,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      setShortenedLinks((state) => {
        return [
          { shortUrl: data.shrtlnk, longUrl: data.url, id: data.key },
          ...state,
        ];
      });
    } catch (error) {
      setFetchingError(true);
    }

    setLoading(false);
  }

  return (
    <section className="pt-11 sm:pt-8">
      <UrlForm shortenUrl={shortenUrl} />
      <UrlList links={shortenedLinks} loading={loading} error={fetchingError} />
    </section>
  );
}

export default Url;
