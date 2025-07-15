import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const config = [[1,0,1],[0,0,1],[1,1,0]]

  return (
    <div style={{width:"80vw", height:"70vh", border:"1px solid red"}}>
        {config.map((row,rowIndex)=>{
          row.map((col, colIndex)=>{
            console.log(row, col);
            return (
            <div key={`${rowIndex}-${colIndex}`} style={{width:"100px", height:"100px", border:"1px solid green"}}>
                
            </div>
            )
          })
        })}
    </div>
  )
}

export default App
