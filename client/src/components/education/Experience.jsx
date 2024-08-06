
import './Education.css'
import { CiLocationOn } from "react-icons/ci";
const Education = () => {
  return (
    <div className="education">
        <div className="education_cards">
          <div className="left_education">
            <h3>Education</h3>
          </div>
          <div className="right_education">
            <div className="right_educations">
                <h2>Mechanical engineering</h2>
                <p>BTech, <i><span>2020-2023</span></i></p> 
                <p className='location'><CiLocationOn /> <span>Bapatla Engineering College, Baptla, IN, 523116</span></p>
            </div>
            <div className='free_line'></div>
            <div className="right_educations">
                <h2>Mechanical</h2>
                <p>Diploma, <i><span>2016-2019</span></i></p> 
                <span className='location'><CiLocationOn />Pace institutes of technology and sceinces, Ongole, IN, 523116</span>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Education