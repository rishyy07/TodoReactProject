import React from 'react'

const Todo = (props) => {
    return (
        (<div className="container">
            <div className="title">{props.title}</div>
            <div className="desc">{props.desc}</div>
        </div>)
    )
}

export default Todo