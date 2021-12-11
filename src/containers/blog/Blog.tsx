import "./blog.css";
import Cover1 from "../../assets/box1.svg";
import Cover2 from "../../assets/box2.svg";
import Cover3 from "../../assets/box3.svg";
import Cover4 from "../../assets/box4.svg";
import Cover5 from "../../assets/box5.svg";

const Blog = () => {
  return (
    <div className="blog__area">
      <div className="container">
        <div className="blog">
          <div className="blog__top">
            <h1>
              A lot is happening, <br />
              We are blogging about it.
            </h1>
          </div>
          <div className="blog__bottom">
            <div className="box1">
              <div className="img-container">
                <img src={Cover1} alt="cover" />
              </div>
              <div className="box__content__container">
                <div className="content">
                  <p className="date">Sep 26, 2021</p>
                  <h1 className="title">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h1>
                </div>
                <a href="#home">Read Full Article</a>
              </div>
            </div>
            <div className="box2">
              <div className="img-container">
                <img src={Cover2} alt="cover" />
              </div>
              <div className="box__content__container">
                <div className="content">
                  <p className="date">Sep 26, 2021</p>
                  <h1 className="title">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h1>
                </div>
                <a href="#home">Read Full Article</a>
              </div>
            </div>
            <div className="box3">
              <div className="img-container">
                <img src={Cover3} alt="cover" />
              </div>
              <div className="box__content__container">
                <div className="content">
                  <p className="date">Sep 26, 2021</p>
                  <h1 className="title">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h1>
                </div>
                <a href="#home">Read Full Article</a>
              </div>
            </div>
            <div className="box4">
              <div className="img-container">
                <img src={Cover4} alt="cover" />
              </div>
              <div className="box__content__container">
                <div className="content">
                  <p className="date">Sep 26, 2021</p>
                  <h1 className="title">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h1>
                </div>
                <a href="#home">Read Full Article</a>
              </div>
            </div>
            <div className="box5">
              <div className="img-container">
                <img src={Cover5} alt="cover" />
              </div>
              <div className="box__content__container">
                <div className="content">
                  <p className="date">Sep 26, 2021</p>
                  <h1 className="title">
                    GPT-3 and Open AI is the future. Let us exlore how it is?
                  </h1>
                </div>
                <a href="#home">Read Full Article</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
