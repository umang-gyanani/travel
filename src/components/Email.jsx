import React from "react";
import mail from "../assets/image/svg/mail.svg";
import blue_arrow from "../assets/image/svg/blue_arrow.svg";
import { Container } from "react-bootstrap";

function Email() {
    return (    
        <>
            <section className=" py-5 ">
               <Container>
                    <div className="email_bg position-relative">
                        <span className=" position-absolute telegram_icon">
                            <img src={blue_arrow} alt="telegram_icon" />
                        </span>
                        <div className=" d-flex align-items-center  flex-column justify-content-center h-100 w-100">
                            <p className=" ff_poppins text-center fw-semibold fs_33 clr_gray">
                                Subscribe to get information, latest news and other
                                <br></br>interesting
                                offers about Jadoo
                            </p>
                            <div className=" d-flex align-items-center justify-content-center gap-4 flex-column flex-lg-row   ">
                                <div className=" input d-flex align-items-center gap-3 ">
                                    <img src={mail} alt="mail" />
                                    <input
                                        className=" w-100  ff_Montserrat fw-normal fs_14"
                                        type="text"
                                        placeholder="Your email"
                                    />
                                </div>
                                <a
                                    href="#"
                                    className=" ff_Open_Sans fs_17 fw-semibold  subscribe_btn"
                                >
                                    Subscribe
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Email;
