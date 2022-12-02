import React from "react"

export const Header = () => {
    return (
        <header className="header">
            <div className="header--content">
                <div className="header--logo">
                    <h3>JesperLindqvist</h3>
                </div>
                <ul className="header--menu">
                    <li>Start</li>
                    <li>About</li>
                    <li>Projects</li>
                </ul>
            </div>
        </header>
    )
}
