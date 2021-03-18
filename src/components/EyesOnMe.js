// Code EyesOnMe Component Here

import React from 'react'

class EyesOnMe extends React.Component {
    constructor() {
        super()
    }

    render(){
        return(
            <div>
                <button onFocus={(e) => {
                    console.log('Good!')}}
                        onBlur={(e) => {
                            console.log('Hey! Eyes on me!')}}>       
                    button</button>
            </div>
        )
    }

}

export default EyesOnMe