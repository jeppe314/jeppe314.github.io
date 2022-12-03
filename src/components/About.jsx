import React from "react"
import angle from "../assets/angle_down.svg"

export const About = () => {
    return (
        <section className="section--about" style={{ position: "relative" }}>
            <img
                src={angle}
                alt="curves"
                style={{
                    width: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: "9",
                }}
            />
            About
        </section>
    )
}
