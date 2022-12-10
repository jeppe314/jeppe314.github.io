import React from "react"
import wave from "../assets/wave.svg"

export const Intro = () => {
    return (
        <section className="section--intro">
            <h1>Jesper Lindqvist</h1>
            <h3>Frontend Developer</h3>
            <img src={wave} alt="morjens" class="pyramids" />
        </section>
    )
}
