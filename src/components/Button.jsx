import React from 'react'

export default function Button({ children, classProp, clickProp }) {

    return(
        <button 
            className={classProp}
            onClick={clickProp}>
                {children}
        </button>
    )
}