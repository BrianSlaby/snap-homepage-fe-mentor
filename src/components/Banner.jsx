import React from 'react'

export default function Banner({ children, classProp }) {

    return (
        <div className={`banner ${classProp}`}>
            {children}
        </div>
    )
}