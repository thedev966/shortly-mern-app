import React, { useRef, useState } from "react";
import "../css/ShortenLink.css";
import validUrl from "valid-url";
import axios from "axios";
import Link from "./Link";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../features/userSlice";

const ShortenLink = () => {
  const [isProccessing, setIsProccessing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const urlRef = useRef();
  const errorRef = useRef();
  const linksListRef = useRef();
  const [error, setError] = useState(null);
  const [links, setLinks] = useState([]);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const showError = (msg) => {
    setError(msg);
    // change border of input box
    urlRef.current.style.border = "2px solid var(--red)";
  };

  const refreshInput = () => {
    urlRef.current.style.border = "0";
    errorRef.current.innerText = "";
  };

  const substractLinksUsed = async () => {
    const res = await axios.post(
      process.env.REACT_APP_API_URI + "/api/auth/userLimit",
      JSON.stringify({
        owner: isLoggedIn ? user.id : "none",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.success) {
      console.log(res.data.message);
    }
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
        setIsProccessing(true);
        setIsDisabled(true);
        const res = await axios.post(
          process.env.REACT_APP_API_URI + "/api/link/shorten",
          JSON.stringify({
            url: urlInput,
            owner: isLoggedIn ? user.id : "none",
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
          setIsProccessing(false);
          setIsDisabled(false);
          if (linksListRef.current.offsetHeight > 258) {
            linksListRef.current.style.overflowY = "scroll";
            linksListRef.current.style.height = "258px";
          }
          // substract - 1 daily used links for this user
          substractLinksUsed();
        } else {
          // failed attempt
          setError(res.data.error);
          setIsProccessing(false);
          setIsDisabled(false);
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
      <span ref={errorRef} className="shorten-link__error">
        {error !== null && error}
      </span>
      <button
        className="shorten-link__button"
        type="submit"
        onClick={shortenLink}
        disabled={isDisabled}
      >
        {isProccessing ? (
          <Loader
            visible={isProccessing}
            type="ThreeDots"
            color="#00BFFF"
            height={20}
            width={20}
          />
        ) : (
          "Shorten It!"
        )}
      </button>

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
