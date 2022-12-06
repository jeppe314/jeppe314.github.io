import React from "react"
import Typist from "react-typist"
import "./Typist.css"

export default function JesperObject() {
    return (
        <div className="jesper">
            <p>
                <Typist avgTypingDelay={25}>
                    <Typist.Delay ms={2000} />
                    <span style={{ color: "#3e99ec" }}>const </span>
                    devlepoer =
                    <Typist.Backspace count={11} delay={500} />
                    developer = <span style={{ color: "#fc00f2" }}>&#123;</span>
                    <br />
                    <span>name: </span>
                    <span style={{ color: "#d87832" }}>
                        "Jesper Olof Lindqvist"
                    </span>
                    ,
                    <br />
                    <span>age: </span>
                    <span style={{ color: "#c5f478" }}>29</span>,
                    <br />
                    <span>nationality: </span>
                    <span style={{ color: "#3e99ec" }}>[</span>
                    <span style={{ color: "#d87832" }}>"Finland"</span>,{" "}
                    <span style={{ color: "#d87832" }}>"Åland"</span>
                    <span style={{ color: "#3e99ec" }}>]</span>,
                    <br />
                    <span>location: </span>
                    <span style={{ color: "#d87832" }}>"Stockholm"</span>,
                    <br />
                    <span>interests: </span>
                    <br />
                    <span style={{ color: "#3e99ec" }}>[</span>
                    <span style={{ color: "#d87832" }}>"WebDev"</span>,{" "}
                    <span style={{ color: "#d87832" }}>"Sports"</span>,
                    <span style={{ color: "#d87832" }}>"Reading"</span>,{" "}
                    <span style={{ color: "#d87832" }}>"Outdoors"</span>
                    <span style={{ color: "#3e99ec" }}>]</span>
                    <br />
                    <span style={{ color: "#fc00f2" }}>&#125;</span>
                    <br />
                </Typist>
            </p>
        </div>
    )
}
