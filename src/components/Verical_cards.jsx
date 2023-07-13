import React from "react";
import men_img from "../assets/image/svg/smiling_boy.svg";
import { Container, Row } from "react-bootstrap";

function Verical_cards() {
    return (
        <>
            <section className=" py-5">
               <Container>
                    <Row className=" overflow-visible">
                        <div className="col-lg-5">
                            <p className="text-uppercase ff_poppins clr_gray fw-semibold fs_18 mb-0">
                                Testimonials
                            </p>
                            <p className="text-capitalize clr_blue fw-bold fs_50 ff_Volkhov mx_409">
                                What people say about Us.
                            </p>
                        </div>
                        <div className="col-lg-7">

                            <div className=" d-flex justify-content-center">
                                <div className="box position-relative">
                                    <span className="position-absolute img_position">
                                        <img src={men_img} alt="men_img" />
                                    </span>
                                    <p className="ff_poppins fw-medium fs_16 clr_gray">
                                        “On the Windows talking painted pasture yet its express
                                        parties use. Sure last upon he same as knew next. Of
                                        believed or diverted no.”
                                    </p>
                                    <p className="fw-semibold clr_gray fs_16 ff_poppins">
                                        Mike taylor
                                    </p>
                                    <p className="fw-medium fs_16 ff_poppins clr_gray">
                                        Lahore, Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                   </Row>
                </Container>
            </section>
        </>
    );
}

export default Verical_cards;