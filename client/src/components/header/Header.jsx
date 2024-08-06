
import './Header.css'
const Header = () => {
  return (
    <div className='nav'>
        <div className="header">
            <div className="logo_location">
                <div className="logo">
                    <a className='logo_text'><h1>GURUPRASAD.</h1></a>
                </div>
                <div className="location">
                    <p>Based in Bangalore</p>
                    <p>Working Worldwide</p>
                </div>
            </div>
            <div className="navbar">
                <a href='#about'>About</a>
                <a href='#work'>Work</a>
                <a href='#services'>Services</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Header
