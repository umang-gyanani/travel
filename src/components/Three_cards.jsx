import React from "react";
import rome_img from "../assets/image/png/rome-img.png";
import london_img from "../assets/image/png/london-img.jpg";
import europe_img from "../assets/image/png/europe-img.png";
import send_icon from "../assets/image/svg/send-icon.svg";
import round_shdow from "../assets/image/png/destination-hover-img.png";
import { Container, Row } from "react-bootstrap";

function Three_cards() {
    return (
        <>
            <section className="py-5 position-relative">
                <Container>

                    <p className="ff_poppins fs_18 fw-semibold clr_gray text-center mb-0">
                        Top Selling
                    </p>
                    <h2 className=" fw-bold fs_50 ff_Volkhov mb-0 clr_navy text-center mt-2">
                        Top Destinations
                    </h2>
                    <Row className=" justify-content-center mt-sm-5 pt-3 position-relative">
                        <img src={round_shdow} alt="round_shdow " className="round_shdow" />
                        <div className="col-md-4 col-sm-6 mt-4 mt-sm-0">
                            <div className="destination_cards  shadow rounded-4 h-100 ">
                                <img
                                    className="w-100 destination_img_radius"
                                    src={rome_img}
                                    alt="rome_img"
                                />
                                <div className="px-4 pt-4 pb-5">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className=" ff_poppins fw-medium fs_18 mb-0 clr_gray">
                                            Rome, Italty
                                        </p>
                                        <p className=" ff_poppins fw-medium fs_18 mb-0 clr_gray">
                                            $5,42k
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <img src={send_icon} alt="send_icon" />
                                        <p className=" mb-0 ff_poppins fw-medium fs_16 clr_gray ms-3">
                                            10 Days Trip
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mt-4 mt-sm-0">
                            <div className="destination_cards shadow rounded-4 h-100">
                                <img
                                    className="w-100 destination_img_radius"
                                    src={london_img}
                                    alt="london_img"
                                />
                                <div className="px-4 pt-4 pb-5">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className=" ff_poppins fw-medium fs_18 mb-0 clr_gray">
                                            London, UK
                                        </p>
                                        <p className=" ff_poppins fw-medium fs_18 mb-0 clr_gray">
                                            $4.2k
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <img src={send_icon} alt="send_icon" />
                                        <p className=" mb-0 ff_poppins fw-medium fs_16 clr_gray ms-3">
                                            12 Days Trip
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mt-4 mt-md-0 position-relative z-5">
                           
                            <div className="destination_cards shadow rounded-4 h-100 ">
                                <img
                                    className="w-100 destination_img_radius"
                                    src={europe_img}
                                    alt="europe_img"
                                />
                                <div className="px-4 pt-4 pb-5">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className=" ff_poppins fw-medium fs_18 mb-0 clr_gray">
                                            Full Europe
                                        </p>
                                        <p className=" ff_poppins fw-medium fs_18 mb-0 clr_gray">
                                            $15k
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center mt-3">
                                        <img src={send_icon} alt="send_icon" />
                                        <p className=" mb-0 ff_poppins fw-medium fs_16 clr_gray ms-3">
                                            28 Days Trip
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </Row>
                    
                </Container>
            </section>
        </>
    );
}

export default Three_cards;
