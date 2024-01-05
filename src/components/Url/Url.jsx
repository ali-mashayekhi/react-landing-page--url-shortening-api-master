import UrlList from "./UrlList";
import UrlForm from "./UrlFrom";

import "./Url.css";
import { useState } from "react";

function Url() {
  useState();

  function shortenUrl(enteredUrl) {
    const body = JSON.stringify({
      url: "https://google.com",
    });

    const options = {
      body: JSON.stringify({
        message: "Added!",
        short: "param",
        long: "https://www.param.me",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };

    // console.log(body, options);

    fetch("https://csclub.uwaterloo.ca/~phthakka/1pt-express", options)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <section className="pt-11 sm:pt-8">
      <UrlForm shortenUrl={shortenUrl} />
      <UrlList />
    </section>
  );
}

export default Url;
