import React from "react"
import waveBtm from "../assets/waveBtm.svg"

export const Intro = () => {
    return (
        <section className="section--intro">
            <h1>Jesper Lindqvist</h1>
            <h3>Frontend Developer</h3>
            <img src={waveBtm} alt="morjens" className="btm" />
        </section>
    )
}
