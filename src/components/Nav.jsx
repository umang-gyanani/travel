import React from "react";
import logo from "../assets/image/svg/logo.svg";
import arrowDown from "../assets/image/svg/down-arrow.svg";
import { Container } from "react-bootstrap";



function Nav() {
    return (
        <>
            <section className="pt-3">

                <Container>

                    <nav>
                        <div className="d-flex  align-items-center justify-content-between w-100 ">
                            <a className=" fw-bold  text-white ff_inter fs_2xl z_index1" href="#">
                                <img src={logo} alt="logo-img" />
                            </a>
                        
                            <ul className="d-flex gap-3 gap-xl-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end small_screen">
                                <li>
                                    <a class="  fs_17 fw-normal clr_blue ff_google_sans " href="#home">
                                        Desitnations
                                    </a>
                                </li>
                                <li>
                                    <a class="fs_17 fw-normal clr_blue ff_google_sans " href="#home">
                                        Hotels
                                    </a>
                                </li>
                                <li>
                                    <a class="  fs_17 fw-normal clr_blue ff_google_sans " href="#home">
                                        Flights
                                    </a>
                                </li>
                                <li>
                                    <a class=" fs_17 fw-normal clr_blue ff_google_sans " href="#home">
                                        Bookings
                                    </a>
                                </li>
                                <li>
                                    <a className=" fw-normal fs_17 clr_blue py-2 px-3 ff_google_sans " href="#">
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" fw-normal fs_17 ff_google_sans  clr_blue navbar_btn py-2 px-3"
                                        href="#"
                                    >
                                        Sign up
                                    </a>
                                </li>

                                <select name="language" id="language" class="border-none bg-transparent google_regular" fdprocessedid="qjbodr">
                                    <option value="En">En</option><option value="HI">HI</option><option value="SP">SP</option>
                                
                                </select>
                                {/* <li>

                                    <a className="ff_google_sans fw-normal fs_17 clr_blue  py-2 px-3" href="#">
                                        EN <img src={arrowDown} alt="img" />
                                    </a>
                                </li> */}
                                <li>


                                </li>
                            </ul>
                            <div className=" d-lg-none cursor_pointer">

                            </div>
                        </div>
                    </nav>
                </Container>
            </section>
        </>
    );
}

export default Nav;
