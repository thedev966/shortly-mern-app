import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { selectIsLoggedIn, selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import "../css/Account.css";
import axios from "../axios";
import { motion } from "framer-motion";
import Pusher from "pusher-js";
import ReactPaginate from "react-paginate";

const accountBodyVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.7 },
  },
};

const LINKS_PER_PAGE = 5;

const Account = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const [totalLinks, setTotalLinks] = useState(0);
  const [allLinks, setAllLinks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(null);
  const [usedLinksCount, setUsedLinksCount] = useState(0);
  const offset = currentPage * LINKS_PER_PAGE;
  const pageCount = Math.ceil(allLinks.length / LINKS_PER_PAGE);

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
    const res = await axios.get("/api/auth/currentLimit/" + user?.id);
    setUsedLinksCount(res.data.used_links);
  };

  useEffect(() => {
    // fetch user info from db
    axios
      .post(
        "/api/link/getAll",
        JSON.stringify({
          id: user?.id,
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
        setCurrentPageData(allLinks.slice(offset, offset + LINKS_PER_PAGE));
      })
      .catch((err) => {
        console.log(err.message);
      });

    getCurrentLinksLimit();
  }, []);

  useEffect(() => {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    let pusher = new Pusher("fd3cf1f7d5fa1765585c", {
      cluster: "eu",
    });

    let channel = pusher.subscribe("shortened-links");
    channel.bind("delete-link", function (data) {
      let link_id = data.deleted_link.id;
      setAllLinks((prevState) =>
        prevState.filter((link) => {
          return link._id !== link_id;
        })
      );
      setTotalLinks((prevTotal) => prevTotal - 1);
    });

    return () => {
      pusher.unsubscribe("shortened-links");
    };
  }, []);

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

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
                Full Name: <span className="account__name">{user?.name}</span>
              </h3>
              <h3 className="account__emailLabel">
                Email: <span className="account__email">{user?.email}</span>
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
            {currentPageData.map((link) => (
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
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            // containerClassName={"pagination"}
            // previousLinkClassName={"pagination__link"}
            // nextLinkClassName={"pagination__link"}
            // disabledClassName={"pagination__link--disabled"}
            // activeClassName={"pagination__link--active"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Account;
