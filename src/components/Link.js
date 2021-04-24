import React, { useRef } from "react";
import "../css/Link.css";
import Skeleton from "react-loading-skeleton";

const Link = ({ short_link, original_link }) => {
  const copyToClipboard_btn = useRef();

  const truncateLink = (link, char) => {
    return link.length <= char ? link : link.substring(0, char) + "...";
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(short_link);
    copyToClipboard_btn.current.style.backgroundColor = "var(--dark-violet)";
    copyToClipboard_btn.current.innerText = "Copied!";
  };

  return (
    <div className="link">
      <a target="_blank" href={original_link} className="link__original">
        {truncateLink(original_link, 50) || <Skeleton count={2} />}
      </a>
      <div className="link__rightContainer">
        <h3 className="link__short">{short_link}</h3>
        <button
          ref={copyToClipboard_btn}
          onClick={copyToClipboard}
          className="link__copy"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default Link;
