import React, { Component } from 'react'


const Board= ({color}) =>  {
    return(
        <div className="board"
         style={{ 
            backgroundColor: color
            }} >
            <h1>this is board</h1>
        </div>
    )
}

export default Board