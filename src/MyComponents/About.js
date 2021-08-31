import React from 'react'

export default function About(props) {
    return (
        <div className={`container my-4 text-${props.mode.navbar.navbtnStyle} text-center`}>
            <h2>Hello, I am Krishna nickname kai.</h2>
            <h2>I was build this application on 22,August 2021.</h2>
            <h2>Currently I am pursing by B.Tech degree from university ccsu, meerut.</h2>
        </div>
    )
}
