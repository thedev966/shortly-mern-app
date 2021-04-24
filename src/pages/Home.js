import React, { useEffect } from "react";
import ShortenLink from "../components/ShortenLink";
import FeatureItem from "../components/FeatureItem";
import features_list from "../feature_items";
import Footer from "../components/Footer";
import Header from "../components/Header";
import illustrationWorking from "../assets/illustration-working.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../css/Hero-Section.css";
import "../css/Features.css";
import "../css/Boost-Links.css";
import { selectIsLoggedIn } from "../features/userSlice";
import { useSelector } from "react-redux";

const heroSectionTextVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.7,
      delay: 0.5,
    },
  },
};

const heroSectionImageVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: "100vh",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 1.2,
    },
  },
};

const Home = () => {
  const controls = useAnimation();
  const { inView } = useInView();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }

    if (!inView) {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <div className="home">
      <div className="container">
        <div className="wrapper">
          <Header isLoggedIn={isLoggedIn} />
          <div className="hero-section">
            <motion.div
              className="hero-section__text"
              variants={heroSectionTextVariant}
              initial="hidden"
              animate="visible"
            >
              <div className="hero-section__textContainer">
                <h2 className="hero-section__mainHeading">
                  More than just shorter links
                </h2>
                <p className="hero-section__subHeading">
                  Build your brand's recognition and get detailed insights on
                  how your links are performing.
                </p>
                <button className="hero-section__ctaButton">Get Started</button>
              </div>
            </motion.div>
            <div className="hero-section__image">
              <motion.img
                src={illustrationWorking}
                alt="hero-image"
                variants={heroSectionImageVariant}
                initial="hidden"
                animate="visible"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <ShortenLink />
          <div className="features__container">
            <div className="features__heading">
              <h2 className="features__bigHeading">Advanced Statistics</h2>
              <p className="features__smallHeading">
                Track how your links are performing across the web with our
                advanced statistics dashboard.
              </p>
            </div>
            <div className="features__items">
              {features_list.map((featureItem) => (
                <div className="features__item">
                  <FeatureItem
                    icon={featureItem.icon}
                    heading={featureItem.heading}
                    text={featureItem.text}
                  />
                </div>
              ))}
              <div className="features__itemsHrLine"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="boost-links">
        <div className="boost-links__container">
          <h2 className="boost-links__heading">Boost your links today</h2>
          <button className="boost-links__button" type="submit">
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
