import React from "react";
import "./index.css";
import { Link } from "react-scroll";
const Navigation = ({ setOpenNavPopUp }) => {
  return (
    <section className="navigation">
      {/* <div className="center"> */}
      <p className="link">
        <Link
          to="about"
          onClick={() => setOpenNavPopUp(false)}
          smooth={true}
          duration={1000}
        >
          About
        </Link>
      </p>
      <p className="link">
        <Link
          to="partners"
          onClick={() => setOpenNavPopUp(false)}
          smooth={true}
          duration={1000}
        >
          Partners
        </Link>
      </p>

      <p className="link">
        <Link
          to="team"
          onClick={() => setOpenNavPopUp(false)}
          smooth={true}
          duration={1000}
        >
          Team
        </Link>
      </p>
      <p className="link">
        <Link
          to="footer"
          onClick={() => setOpenNavPopUp(false)}
          smooth={true}
          duration={1000}
        >
          Contact
        </Link>
      </p>
      {/* </div> */}

      {/* <div className="right"> */}
      {/* <p className="linking" onClick={() => setOpenNavPopUp(false)}>
        BUY SIPHER
      </p> */}
      {/* </div> */}
    </section>
  );
};

export default Navigation;
