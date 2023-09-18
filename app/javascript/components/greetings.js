import React from 'react'

const Greetings = ({ greetings }) => {
    return (<>
        {
            greetings.map((greeting) => (
                <div>{greeting.message}</div>
            ))
        }
    </>
    )
}

export default Greetings