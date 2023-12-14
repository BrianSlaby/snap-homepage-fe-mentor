import React from "react"
import { WindowSizeContext } from "../../App"

export default function Dropdown({ children }) {
    const { desktopLayoutClassName } = React.useContext(WindowSizeContext)

    return (
        <ul className={`nav-links nav-links-secondary ${desktopLayoutClassName}`}>
            {children}
        </ul>
    )
}