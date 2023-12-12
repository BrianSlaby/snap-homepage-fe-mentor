import React from 'react'

export default function Nav({ children, classProp }) {

    return(
        <nav className={classProp}>
            {children}
        </nav>
    )
}