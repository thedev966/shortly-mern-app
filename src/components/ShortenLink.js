import React, { useRef, useState } from "react";
import "../css/ShortenLink.css";
import validUrl from "valid-url";
import axios from "axios";
import Link from "./Link";

const ShortenLink = () => {
  const urlRef = useRef();
  const errorRef = useRef();
  const linksListRef = useRef();
  const [error, setError] = useState(null);
  const [links, setLinks] = useState([]);

  const showError = (msg) => {
    setError(msg);
    // change border of input box
    urlRef.current.style.border = "2px solid var(--red)";
  };

  const refreshInput = () => {
    urlRef.current.style.border = "0";
    errorRef.current.innerText = "";
  };

  const shortenLink = async () => {
    const urlInput = urlRef.current.value;

    // check if input is empty
    if (urlInput === "") {
      showError("Input url field cannot be empty!");
    } else {
      // check if it's valid url
      if (!validUrl.isUri(urlInput)) {
        showError("Seems like your input is not a valid url!");
      } else {
        refreshInput();
        // send api call
        const res = await axios.post(
          process.env.REACT_APP_API_URI + "/api/link/shorten",
          JSON.stringify({
            url: urlInput,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.data.success) {
          // link was shortened
          console.log(res.data);
          setLinks((currentLinks) => [...currentLinks, res.data.shortenedLink]);
          if (linksListRef.current.offsetHeight > 258) {
            linksListRef.current.style.overflowY = "scroll";
            linksListRef.current.style.height = "258px";
          }
        } else {
          // failed attempt
          setError(res.data.error);
        }
      }
    }
  };

  console.log(links);
  return (
    <div className="shorten-link">
      <input
        ref={urlRef}
        className="shorten-link__input"
        type="text"
        placeholder="Shorten a link here.."
      />
      <button
        className="shorten-link__button"
        type="submit"
        onClick={shortenLink}
      >
        Shorten It!
      </button>
      <span ref={errorRef} className="shorten-link__error">
        {error !== null && error}
      </span>
      <div ref={linksListRef} className="shorten-link__linksList">
        {links &&
          links.map((link) => (
            <Link
              key={link._id}
              short_link={link.shortened_url}
              original_link={link.original_url}
            />
          ))}
      </div>
    </div>
  );
};

export default ShortenLink;
