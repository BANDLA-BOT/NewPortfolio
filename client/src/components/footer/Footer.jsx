import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_section">
        <h3 className="available_text">Available for freelance</h3>
        <div className="scrolling_contact">
          <div className="text">
           CONTACT US
          </div>
        </div>

        <div className="footer_bottom">
          <div className="footer_bottom_left">
              <h4>GURUPRASAD</h4>
              <p>Based in Bangalore <br /> Working worldwide</p>
          </div>
          <div className="footer_bottom_right">
              <div>
                <p className="head">Links</p>
                <p>Home</p>
                <p>About</p>
                <p>Work</p>
                <p>Services</p>
              </div>
              <div>
                <p className="head">Utility</p>
                <p>Blog</p>
              </div>
              <div>
              <p className="head">Social</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>GitHub</p>
                <p>LinkedIn</p>
              </div>
          </div>
        </div>
         
         <div className="free_line">

         </div>
         <div className="footer_last">
          <p>@2024</p>
          <p>Made by <span>Guruprasad</span></p>
         </div>
      </div>
    </div>
  );
};

export default Footer;
