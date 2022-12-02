import React from "react"
import { About } from "./About"
import { Intro } from "./Intro"
import { Projects } from "./Projects"
import { Skills } from "./Skills"

export const Body = () => {
    return (
        <div className="body--content">
            <Intro />
            <About />
            <Skills />
            <Projects />
        </div>
    )
}
