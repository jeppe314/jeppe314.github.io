import React from "react"
import waveTop from "../assets/waveTop.svg"
import waveBtm from "../assets/waveBtm.svg"

export const Skills = () => {
    return (
        <section className="section--skills">
            <img src={waveTop} alt="morjens" className="top" />
            {/* <h1>Core technologies</h1> */}
            <div className="skillgrid">
                <i className="devicon-html5-plain colored"></i>
                <i className="devicon-css3-plain colored"></i>
                <i className="devicon-javascript-plain colored"></i>
                <i className="devicon-react-original colored"></i>
                <i className="devicon-git-plain colored"></i>
            </div>
            <img src={waveBtm} alt="morjens" className="btm" />
        </section>
    )
}
