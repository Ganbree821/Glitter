import React from "react";
import { Link } from "react-scroll";
import "./index.css";
import "./mobile.css";
const Header = ({ setOpenTokenModal, setOpenNavPopUp }) => {
  return (
    <header>
      <section className="heading">
        <div className="left">
          <img
            src="https://glitter.finance//images/logo-w-text-long.png"
            alt="website logo"
          />
        </div>

        <div className="center">
          <p>
            <Link to="about" smooth={true} duration={1000}>
              About
            </Link>
          </p>
          <p>
            <Link to="partners" smooth={true} duration={1000}>
              Partners
            </Link>
          </p>

          <p>
            <Link to="team" smooth={true} duration={1000}>
              Team
            </Link>
          </p>
          <p>
            <Link to="footer" smooth={true} duration={1000}>
              Contact
            </Link>
          </p>
        </div>

        <div className="right">
          <p onClick={() => setOpenTokenModal(true)}>BUY $XGLI</p>
        </div>

        <div className="bread" onClick={() => setOpenNavPopUp(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <section className="widget">
        <marquee>
          <b>Solana Address: D1PPoKckMfq46MZ93TwDW3Xkrqr82amdKg6ffeCkVLNK</b>{" "}
          {/* <a
            href="https://axelar.network/news/axelars-universal-blockchain-interoperability-network-raises-35-million-to-reach-1-billion-valuation/"
            target="_blank"
            rel="nonreferrer"
          >
            {" "}
            - Read the Announcement
          </a> */}
        </marquee>
      </section>
    </header>
  );
};

export default Header;
