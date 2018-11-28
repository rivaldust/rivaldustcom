import React, { Component } from "react";
import style from "./Main.module.css";
import DropFades from "./components/DropFade/DropFades";
import HeaderImage from "./resources/Sniper_CityScape.jpg";
import { Grid, Row, Col } from "react-bootstrap";
class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={style["main-section"]}>
          <div className={style["top-text"]}>
            <h1 className={style["title-header"]}>Rival Dust</h1>
          </div>
          <figure className={style.figure}>
            <img className={style.image} src={HeaderImage} alt="" />
          </figure>
        </section>
        <section>
          <Grid>
            <h2>Zlirp</h2>
            <Row>
              <Col xs={12}>
                <h3>Eat Bank Love</h3>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} sm={6}>
                <p />
              </Col>
              <Col xs={12} md={4} sm={6}>
                <p />
              </Col>
            </Row>
          </Grid>
        </section>
      </React.Fragment>
    );
  }
}

export default Main;
