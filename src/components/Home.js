import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


function Home(props) {
    const navigate = useNavigate();

    const handleLoginRoute = () =>{
        navigate("/login")
    }

  return (
    <div>
      <Header />
      <div className="main_div">
        <div className="upper_div">
          <div className="left_side">
            <h2>
              Welcome to
              <br />
              My<span className="text_color">Jobs</span>
            </h2>
            <button className="button_secondary" onClick={handleLoginRoute}>Get Started</button>
          </div>
          <div className="right_side">
            <img className="up_img" src="./image_1.png" />
          </div>
        </div>
        <div className="lower_div">
          <div className="why_us">Why Us</div>
          <div className="card_div">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Get More<br/> Visibility</Card.Title>
                
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Organize Your <br/> Candidates</Card.Title>
                
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Verify Their <br/> Abilities</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="why_us">
            Companies Who Trust Us
          </div>
          <div className="logo_div">
            <img src="./solaytic.png" className="client_logo" alt="solaytic"/>
            <img src="./kanba.png" className="client_logo" alt="kanba"/>
            <img src="./lighting.png" className="client_logo" alt="lighting"/>
            <img src="./ztos.png" className="client_logo" alt=""/>
            <img src="./kanba.png" className="client_logo" alt=""/>
          </div>
          <div className="logo_div">
            <img src="./goldline.png" className="client_logo" alt=""/>
            <img src="./ideaa.png" className="client_logo" alt=""/>
            <img src="./liva.png" className="client_logo" alt=""/>
            <img src="./velocity-9.png" className="client_logo"  alt=""/>
            {/* <img src="./kanba.png"/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
