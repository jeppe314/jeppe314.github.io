import React from "react"
import angle from "../assets/angle_down.svg"
import JesperObject from "./JesperObject"

export const About = () => {
    return (
        <section className="section--about" style={{ position: "relative" }}>
            <div className="jesper--div">
                <JesperObject />
            </div>
            <div className="about--text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque consectetur vehicula lorem id sodales. Cras vel
                    dignissim elit. Cras ut nibh non diam cursus rutrum. Donec
                    rhoncus sollicitudin augue, quis imperdiet eros bibendum ac.
                    Cras bibendum euismod erat, at vulputate dui placerat sed.
                </p>
            </div>
        </section>
    )
}
