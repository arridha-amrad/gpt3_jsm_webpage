import "./header.css";
import Illustration from "../../assets/illustration.svg";
import GroupIllustration from "../../assets/group.svg";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="left">
          <div className="left__content">
            <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <form className="inline-form">
              <input placeholder="Your Email Address" />
              <button>Get Started</button>
            </form>
            <div className="group">
              <img src={GroupIllustration} alt="group" />
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
};
export default Header;
