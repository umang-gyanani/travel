import React from "react";
import playBtn from "../assets/image/png/Play button.png";
import headerImg from "../assets/image/png/hero_section_image.png";
import layar from "../assets/image/png/hero-yellow-shadow.png";
import enjoy_line from "../assets/image/svg/enjoy_line.svg";
import Nav from "./Nav";
import { Col, Container, Row } from "react-bootstrap";



function Hero() {
    return (
        <>
            <section className="position-relative">
                <div className="position-relative z-2">
                    <Nav />

                </div>
                <img
                    className="position-absolute top-0 end-0 z-0"
                    src={layar}
                    alt="layar"
                />
                <Container>
                    <div className=" z-1 position-relative mt-5">

                        <Row className=" flex-lg-row flex-column-reverse">
                            <Col lg={5}>
                                
                                <div data-aos="fade-right">
                                    <p className="ff_poppins fs_20 fw-bold clr_red">
                                        Best Destinations around the world
                                    </p>
                                    <h1 className="ff_volkhov fs_84 clr_navy fw-bold mt-md-4">
                                        Travel,enjoy  and live a new and full life
                                    </h1>

                                    <p className="ff_poppins fs_16 fw-medium clr_gray mt-4 pt-1">
                                        Built Wicket longer admire do barton vanity itself do in it.
                                        Preferred to sportsmen it engrossed listening. Park gate sell
                                        they west hard for the.
                                    </p>
                                    <img src={enjoy_line} alt="enjoy" className="enjoy_line d-none d-xl-block" />
                                    <div className="mt-4 pt-2 d-flex flex-column flex-sm-row gap-2 gap-sm-0">
                                        <span className="mt-2">
                                            <a
                                                className="ff_google fs_18 text-white hero_btn py-3 d-inline-block px-4"
                                                href="#"
                                            >
                                                Find out more
                                            </a>
                                        </span>
                                        <span className=" pb-3 px-4">
                                            <img src={playBtn} alt="bnt" />
                                            <a className="ff_google fs_18 clr_gray" href="#">
                                                Find out more
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={7}>
                                <div className=" mt-4 mt-lg-0" data-aos="fade-left">
                                    <img className="w-100" src={headerImg} alt="img" />
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Container>
            </section>
        </>
    );
}

export default Hero;
