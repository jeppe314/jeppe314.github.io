import React from "react"
import angle from "../assets/angle_down.svg"

export const About = () => {
    return (
        <section className="section--about" style={{ position: "relative" }}>
            {/* <img
                src={angle}
                alt="curves"
                style={{
                    width: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    zIndex: "9",
                }}
            /> */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                consectetur vehicula lorem id sodales. Cras vel dignissim elit.
                Cras ut nibh non diam cursus rutrum. Donec rhoncus sollicitudin
                augue, quis imperdiet eros bibendum ac. Cras bibendum euismod
                erat, at vulputate dui placerat sed. Etiam accumsan lacus felis,
                quis lobortis magna interdum in. Suspendisse ac orci eget velit
                auctor sagittis. Donec vitae commodo leo. Pellentesque in dui
                quis magna ornare sodales quis aliquam metus. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.{" "}
            </p>
        </section>
    )
}
