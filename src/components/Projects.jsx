import React from "react"
import { Project } from "./Project"
import { ProjectsData as data } from "./ProjectsData"
import { nanoid } from "nanoid"

export const Projects = () => {
    const projectsEl = data.map((project) => {
        return (
            <Project
                src={project[0].src}
                name={project[0].name}
                bio={project[0].bio}
                key={nanoid()}
            />
        )
    })

    return (
        <section className="section--projects">
            <div className="projects--title">
                <h1>Projects</h1>
            </div>
            <div className="projects--grid">{projectsEl}</div>
        </section>
    )
}
