import React from "react"

export default function Dropdown({ children }) {

    return (
        <ul className="nav-links nav-links-secondary">
            {children}
        </ul>
    )
}