import React from 'react'

export default function Alerts(props) {

    return (
        props.alert &&
        <div className="container">
            <div className={`alert alert-${props.alert.typ} alert-dismissible fade show container my-3`} role="alert">
                <strong>{props.alert.typ}</strong> {props.alert.msg}
            </div>
        </div>
    )
}
