import Atlassian from "../../assets/atlassian.svg";
import Google from "../../assets/google.svg";
import Dropbox from "../../assets/dropbox.svg";
import Slack from "../../assets/slack.svg";
import Shopify from "../../assets/shopify.svg";

import "./brand.css";

const Brand = () => {
  return (
    <div className="brand">
      <img src={Google} alt="brand" />
      <img src={Slack} alt="brand" />
      <img src={Atlassian} alt="brand" />
      <img src={Dropbox} alt="brand" />
      <img src={Shopify} alt="brand" />
    </div>
  );
};

export default Brand;
