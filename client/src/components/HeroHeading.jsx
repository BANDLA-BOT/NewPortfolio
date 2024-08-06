import './Hero/Hero.css'
import { PiMouseScrollLight } from "react-icons/pi";
const HeroHeading = () => {
  return (
    <div className='heroheader_text_'>
        <div className="color_ball1">
            
        </div>
        <div>
            <h1>Transforming Ideas into <br /> Seamless <span className="header_title_title">Web Solutions.</span></h1>
        </div>
        <div className="color_ball2">

        </div>
        <div className='scroll_text'>
          <p>scroll <PiMouseScrollLight /></p>
        </div>
    </div>
  )
}

export default HeroHeading