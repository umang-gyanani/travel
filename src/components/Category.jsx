import React from "react";
import calcult from "../assets/image/svg/claculted.svg";
import flight from "../assets/image/png/airplain.png";
import clrBox from "../assets/image/png/clr-box.png";
import mike from "../assets/image/svg/mike.svg";
import settings from "../assets/image/svg/setting.svg";
import { Container, Row } from "react-bootstrap";

function Category() {
    return (
        <>
            <section className="py-lg-5 my-lg-5">
                <Container>
                    <p className="ff_poppins fw-semibold fs_18 clr-gray text-center">
                        CATEGORY
                    </p>
                    <h2 className="ff_volkhov fw-bold fs_50 text-center clr_navy">
                        We Offer Best Services
                    </h2>
                    <Row className="mt-5">
                        <div className="col-lg-3 col-sm-6 position-relative" data-aos="zoom-in">
                            <div className="offer_card px-xl-5 px-4 py-4 d-flex flex-column align-items-center justify-content-center ">
                                <img
                                    className="position-absolute red_box"
                                    src={clrBox}
                                    alt="box"
                                />
                                <img src={calcult} alt="img" />
                                <h3 className="ff_open fw-semibold fs_20 text-center mt-3">
                                    Calculated Weather
                                </h3>
                                <p className="ff_poppins text-center fw-medium fs_16 mt-3 mw_181 clr_gray">
                                    Built Wicket longer admire do barton vanity itself do in it.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 position-relative" data-aos="zoom-in">
                            <div className="offer_card px-xl-5 px-4 py-4 d-flex flex-column align-items-center justify-content-center ">
                                <img
                                    className="position-absolute red_box"
                                    src={clrBox}
                                    alt="box"
                                />
                                <img src={flight} alt="img" />
                                <h3 className="ff_open fw-semibold fs_20 text-center mt-3">
                                    Best Flights
                                </h3>
                                <p className="ff_poppins text-center fw-medium fs_16 mt-3 mw_181 clr_gray">
                                    Engrossed listening. Park gate sell they west hard for the.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 position-relative" data-aos="zoom-in">
                            <div className="offer_card px-xl-5 px-4 py-4 d-flex flex-column align-items-center justify-content-center ">
                                <img
                                    className="position-absolute red_box"
                                    src={clrBox}
                                    alt="box"
                                />
                                <img src={mike} alt="img" />
                                <h3 className="ff_open fw-semibold fs_20 text-center mt-3">
                                    Local Events
                                </h3>
                                <p className="ff_poppins text-center fw-medium fs_16 mt-3 mw_181 clr_gray">
                                    Barton vanity itself do in it. Preferd to men it engrossed listening. 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 position-relative" data-aos="zoom-in">
                            <div className="offer_card px-xl-5 px-4 py-4 d-flex flex-column align-items-center justify-content-center ">
                                <img
                                    className="position-absolute red_box"
                                    src={clrBox}
                                    alt="box"
                                />
                                <img src={settings} alt="img" />
                                <h3 className="ff_open fw-semibold fs_20 text-center mt-3">
                                    Customization
                                </h3>
                                <p className="ff_poppins text-center fw-medium clr_gray fs_16 mt-3 mw_181">
                                    We deliver outsourced
                                    aviation services for
                                    military customers
                                </p>
                            </div>
                        </div>
                   </Row>
              </Container>
            </section>
            ;
        </>
    );
}

export default Category;
