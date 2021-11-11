import React from 'react'

const Warning = ({tryAgain}) => {
    return (
        <div>
            <h1>Error on fetching</h1>
            <button onClick={tryAgain}><h2>Try again</h2></button>
        </div>
    )
}

export default Warning
