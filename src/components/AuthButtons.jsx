import React from 'react'
import Button from "./Button"
import { WindowSizeContext } from "../App"

export default function AuthButtons() {
    const { desktopLayoutClassName } = React.useContext(WindowSizeContext)

    return(
        <div className={`auth-buttons-container ${desktopLayoutClassName}`}>
            <Button classProp="ghost-btn">Login</Button>
            <Button classProp="secondary-btn">Register</Button>
        </div>
    )
}