import React from 'react'

const TodoButton = ({ id, todoDeleteHandler }) => {
    return (
        (
            <div>
                <button onClick={() => { todoDeleteHandler(id) }}>❌</button>
                {/* callback laga ke hum */}
            </div>
        )
    )
}

export default TodoButton