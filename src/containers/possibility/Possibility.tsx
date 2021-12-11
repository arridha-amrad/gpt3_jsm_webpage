import "./possibility.css";
import AI from "../../assets/feature.svg";

const Possibility = () => {
  return (
    <div className="container">
      <div className="possibility">
        <div className="possibility__left">
          <img src={AI} alt="feature" />
        </div>
        <div className="possibility__right">
          <p className="possibility__right__title">
            Request Early Access to Get Started
          </p>
          <h1 className="possibility__right__big-title">
            The possibilities are beyond your imagination
          </h1>
          <p className="possibility__right__description">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a className="possibility__right__link" href="#home">
            Request Early Access to Get Started
          </a>
        </div>
      </div>
    </div>
  );
};
export default Possibility;
