import Header from "./components/Header";
import illustrationWorking from "./assets/illustration-working.svg";
import "./css/Hero-Section.css";
import "./css/Features.css";
import "./css/Boost-Links.css";
import ShortenLink from "./components/ShortenLink";
import FeatureItem from "./components/FeatureItem";
import features_list from "./feature_items";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Header />
          <div className="hero-section">
            <div className="hero-section__text">
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
            </div>
            <div className="hero-section__image">
              <img src={illustrationWorking} alt="hero-image" />
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
}

export default App;
