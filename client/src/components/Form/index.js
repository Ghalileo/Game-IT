import React from "react"


export function Input (props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "left", }} className="btn btn-sucess">
            {props.children}
        </button>
    )
}