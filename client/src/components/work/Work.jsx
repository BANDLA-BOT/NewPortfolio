import "./Work.css";
import { FaRegShareSquare } from "react-icons/fa";
import About from "../about/About";
import WorkImg from "../../assets/images/About-img.jpg";
const Work = () => {
  return (
    <div className="work">
      <div className="about">
        <About />
      </div>
      <div className="work_section">
        <h1>WORKS</h1>
        <hr />
      </div>

      <div className="work_cards_section">
      <div className="work-card">
        <div className="work_titles">
          <h1>Work title</h1>
          <p>Categories</p>
          <p>Description</p>
        </div>
        <div className="work_img">
          <img src={WorkImg} alt="" />
          <div className="view_icon">
            <FaRegShareSquare />
          </div>
        </div>
      </div>
      <div className="work-card">
        <div className="work_titles">
          <h1>Work title</h1>
          <p>Categories</p>
          <p>Description</p>
        </div>
        <div className="work_img">
          <img src={WorkImg} alt="" />
          <div className="view_icon">
            <FaRegShareSquare />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Work;
