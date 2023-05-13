import "./About.css";

function About() {
  return (
    <div className="main_field col-lg-6 col-md-8 col-sm-8">
      <div className="about_me ">
        <h6>About Me</h6>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          debitis deleniti placeat quia, consequuntur fugit voluptatibus?
          Blanditiis fuga ullam, in quidem facilis error ab molestiae aliquid
          sint atque sequi ea?
        </p>
      </div>
      <div className="personal_info">
        <h6>PERSONAL INFO</h6>
        <div className="details_info d-flex">
          <div className="info_ground">
            <div className="info_content">
              <p>
                <span>Address: </span>
                <span>City Coming</span>
              </p>
              <p>
                <span>Email: </span>
                <span>elngoueni@gmail.com</span>
              </p>
              <p>
                <span>Phone: </span>
                <span>+237 600 00 00 00</span>
              </p>
            </div>
          </div>
          <div className="info_ground">
            <div className="info_content">
              <p>
                <span>Main Language - </span>
                <span>English</span>
              </p>
              <p>
                <span>Second Language - </span>
                <span>French</span>
              </p>
              <p>
                <span>Third Language - </span>
                <span>Spanish</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
