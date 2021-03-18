// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
constructor(){
    super()
}

    render(){
        return(
            <div>
                <input onKeyUp={(e) => {
                    console.log('Entering password...')}} type="password"></input>
            </div>
        )
    }
}

export default Keypad;