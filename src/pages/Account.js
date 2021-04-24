import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { selectIsLoggedIn, selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import "../css/Account.css";
import axios from "../axios";
import { motion } from "framer-motion";

const accountBodyVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.7 },
  },
};

const Account = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const [totalLinks, setTotalLinks] = useState(0);
  const [allLinks, setAllLinks] = useState([]);
  const [usedLinksCount, setUsedLinksCount] = useState(0);

  const truncateLink = (link, char) => {
    return link.length <= char ? link : link.substring(0, char) + "...";
  };

  const deleteLink = async (e) => {
    const parent = e.target.parentElement;
    const link = parent.querySelector(".account__shortenedUrl").innerText;
    const res = await axios.post(
      process.env.REACT_APP_API_URI + "/api/link/delete",
      JSON.stringify({
        link: link,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
  };

  const getCurrentLinksLimit = async () => {
    const res = await axios.get("/api/auth/currentLimit/" + user.id);
    setUsedLinksCount(res.data.used_links);
  };

  useEffect(() => {
    // fetch user info from db
    axios
      .post(
        "/api/link/getAll",
        JSON.stringify({
          id: user.id,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setAllLinks(res.data.links);
        setTotalLinks(res.data.links.length);
      })
      .catch((err) => {
        console.log(err.message);
      });

    getCurrentLinksLimit();
  }, []);

  return (
    <div className="account">
      <div className="wrapper">
        <Header isLoggedIn={isLoggedIn} />
        <motion.div
          className="account__body"
          variants={accountBodyVariant}
          initial="hidden"
          animate="visible"
        >
          <h3 className="account__heading">My Account</h3>
          <div className="account__userInfo">
            <div className="account__userInfoLeft">
              <h3 className="account__nameLabel">
                Full Name: <span className="account__name">{user.name}</span>
              </h3>
              <h3 className="account__emailLabel">
                Email: <span className="account__email">{user.email}</span>
              </h3>
            </div>
            <div className="account__userInfoRight">
              <h3 className="account__plan">Account Plan: FREE</h3>
              <h3 className="account__dailyCount">
                Links daily limit: {usedLinksCount && usedLinksCount} / 10
              </h3>
            </div>
          </div>
          <div className="account__linksHistory">
            <h3 className="account__myLinks">
              My Links: {totalLinks && totalLinks}
            </h3>
            {allLinks.map((link) => (
              <div className="account__link" key={link._id}>
                <h3 className="account__originalUrl">
                  {truncateLink(link.original_url, 50)}
                </h3>
                <div className="account__linkRight">
                  <h3 className="account__shortenedUrl">
                    {link.shortened_url}
                  </h3>
                  <button onClick={deleteLink} className="account__linkDelete">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Account;
