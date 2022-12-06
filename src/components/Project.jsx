import React from "react"

export const Project = ({ name, src, bio, url }) => {
    return (
        <div className="project">
            <a href={url} target="_blank">
                <div
                    className="img--div"
                    style={{ backgroundImage: `url(${src})` }}
                ></div>
                <div className="bio--div">
                    <h3>{name}</h3>
                    <p>{bio}</p>
                </div>
            </a>
        </div>
    )
}
