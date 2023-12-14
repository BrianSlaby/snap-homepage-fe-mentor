import React from "react"

export default function NavItem({ children, classProp }) {

    return(
        <li className={classProp}>
            {children}
        </li>
    )
}