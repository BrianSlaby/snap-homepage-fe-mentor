import React from "react"

export default function DropdownButton({ open, toggle }) {

    const icon = open ? "icon-arrow-up.svg" : "icon-arrow-down.svg"

    return(
        <button onClick={toggle}>
            <img 
                src={`../../public/icons/${icon}`}
                className={`dropdown-btn`}/>
        </button>
    )
}