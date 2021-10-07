import React from 'react'

function ButtonComp({buttonAction, buttonText}) {
    return (
        <>
        <button className="buttonComp" onClick={buttonAction}>
            {buttonText}
        </button>
        </>
    )
}

export default ButtonComp
