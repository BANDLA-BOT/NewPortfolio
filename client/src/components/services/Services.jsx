import "./Services.css";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services_cards">
        <div className="left">
          <h3>Services</h3>
        </div>
        <div className="right">
          <div className="right_title">
            <p>
              I offer a comprehensive range of services to ensure that projects
              run as smoothly as possible.
            </p>
          </div>
          <div className="right_services">
            <div className="right_services_titles">
              <div className="right_services_titles_top">
                <p>01</p>
              </div>
              <div className="right_services_titles_bottom">
                <h1>Web Development</h1>
                <p>
                  <span>Coding</span>
                  <span>Functionality</span>
                </p>
              </div>
            </div>
            <div className="free_line"></div>
            <div className="right_services_titles">
              <div className="right_services_titles_top">
                <p>02</p>
              </div>
              <div className="right_services_titles_bottom">
                <h1>Web Design</h1>
                <p>
                  <span>Design</span>
                  <span>Functionality</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
