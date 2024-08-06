import './Numbers.css'
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
const Numbers = () => {
  return (
    <div className='numbers'>
      <div className='skills_card'>
          <div className='skills_title'>
              <h3>Skills</h3>
          </div>
          <div className='skills_icons'>
            <div>
              <span>REACT JS</span>
              <p><GrReactjs /></p>
            </div>
            <div>
              <span>NODE JS</span>
              <p><FaNodeJs /></p>
            </div>
            <div>
              <span>EXPRESS JS</span>
              <p><SiExpress /></p>
            </div>
            <div>
              <span>MONGO DB</span>
              <p><SiMongodb /></p>
            </div>
            <div>
              <span>FIGMA</span>
              <p><FaFigma /></p>
            </div>
            <div>
              <span>TAILWINDCSS</span>
              <p><RiTailwindCssFill /></p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Numbers