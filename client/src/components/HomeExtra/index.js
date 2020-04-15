import React from "react"
import "./style.css"

function HomeExtra({children}) {
    return (
        <div className="wrap">
            <h2>Extras</h2>
            {children}
        </div>
    )
}

export default HomeExtra;