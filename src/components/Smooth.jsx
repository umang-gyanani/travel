import React from "react";
import airlines from "../assets/image/svg/airline.svg";
import jetstar from "../assets/image/svg/slider2.svg";
import expedia from "../assets/image/svg/expedia.svg";
import quantas from "../assets/image/svg/quants.svg";
import alitalia from "../assets/image/svg/altila.svg";
import { Container } from "react-bootstrap";

function Smooth() {
    return (
        <>
            <section className=" py-4 py-lg-5  ">
           <Container>
                    <div class="marquee ">
                        <div class="marquee__group">
                            <img className="  mx-5 img_clr" src={airlines} alt="top" />
                            <img className=" mx-5 img_clr " src={jetstar} alt="top" />
                            <img className=" mx-5 img_clr" src={expedia} alt="top" />
                            <img className=" mx-5 img_clr" src={quantas} alt="top" />
                            <img className=" mx-5 img_clr" src={alitalia} alt="top" />
                        </div>
                        <div class="marquee__group">
                            <img className=" mx-5 img_clr" src={airlines} alt="top" />
                            <img className=" mx-5 img_clr" src={jetstar} alt="top" />
                            <img className=" mx-5 img_clr" src={expedia} alt="top" />
                            <img className=" mx-5 img_clr" src={quantas} alt="top" />
                            <img className=" mx-5 img_clr" src={alitalia} alt="top" />
                        </div>
                        <div  class="marquee__group">
                            <img className=" mx-5 img_clr" src={airlines} alt="top" />
                            <img className=" mx-5 img_clr" src={jetstar} alt="top" />
                            <img className=" mx-5 img_clr" src={expedia} alt="top" />
                            <img className=" mx-5 img_clr" src={quantas} alt="top" />
                            <img className=" mx-5 img_clr" src={alitalia} alt="top" />
                        </div>
                        <div  class="marquee__group">
                            <img className=" mx-5 img_clr" src={airlines} alt="top" />
                            <img className=" mx-5 img_clr" src={jetstar} alt="top" />
                            <img className=" mx-5 img_clr" src={expedia} alt="top" />
                            <img className=" mx-5 img_clr" src={quantas} alt="top" />
                            <img className=" mx-5 img_clr" src={alitalia} alt="top" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Smooth;
