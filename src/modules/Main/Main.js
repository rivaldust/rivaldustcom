import React, { Component } from "react";
import style from "./Main.module.css";
import DropFades from "./components/DropFade/DropFades";
import HeaderImage from "./resources/Sniper_CityScape.jpg";
import zlirpOpenGif from "./resources/ZLiRP_Opening.gif";
import zlirpGamePlay1 from "./resources/ZLiRP_GamePlay_1.gif";
import zlirpGamePlay2 from "./resources/ZLiRP_GamePlay_2.gif";
import zlirpGamePlay3 from "./resources/ZLiRP_GamePlay_3.gif";
import itunesLink from "./resources/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import { Grid, Row, Col } from "react-bootstrap";
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={style["main-section"]}>
          <div className={style["top-text"]}>
            <h1 className={style["title-header"]}>Rival&nbsp;Dust</h1>
          </div>
          <figure className={style.figure}>
            <img className={style.image} src={HeaderImage} alt="" />
          </figure>
        </section>
        <section>
          <Grid>
            <Row>
              <Col xs={6} sm={6}>
                <h2>Zlirp</h2>
                <h3>Gotta&nbsp;Get&nbsp;Dem&nbsp;Gems</h3>
              </Col>
              <Col xs={6} sm={6} className={style.vcenter}>
                <figure
                  className={`${style.figure} ${style["figure-gif"]}  ${
                    style["itunes-svg"]
                  }`}
                >
                  <a href="https://itunes.apple.com/us/app/zlirp/id1419348285?ls=1&mt=8">
                    <img
                      className={`${style.itunes}`}
                      src={itunesLink}
                      alt=""
                    />
                  </a>
                </figure>
              </Col>
            </Row>
            <Row className={style["gif-row"]}>
              <Col xs={12} sm={6}>
                <figure className={`${style.figure} ${style["figure-gif"]}`}>
                  <img className={style.gif} src={zlirpGamePlay1} alt="" />
                </figure>
              </Col>
              <Col xs={12} sm={6}>
                <figure className={`${style.figure} ${style["figure-gif"]}`}>
                  <img className={style.gif} src={zlirpOpenGif} alt="" />
                </figure>
              </Col>
            </Row>
            <Row className={style["gif-row"]}>
              <Col xs={12} sm={6}>
                <figure className={`${style.figure} ${style["figure-gif"]}`}>
                  <img className={style.gif} src={zlirpGamePlay2} alt="" />
                </figure>
              </Col>
              <Col xs={12} sm={6}>
                <figure className={`${style.figure} ${style["figure-gif"]}`}>
                  <img className={style.gif} src={zlirpGamePlay3} alt="" />
                </figure>
              </Col>
            </Row>
          </Grid>
        </section>
      </React.Fragment>
    );
  }
}

export default Main;
