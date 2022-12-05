import React from "react"

export const Project = ({ name, src, bio }) => {
    return (
        <div className="project">
            <div
                className="img--div"
                style={{ backgroundImage: `url(${src})` }}
            ></div>
            <div className="bio--div">
                <h3>{name}</h3>
                <p>{bio}</p>
            </div>
        </div>
    )
}
