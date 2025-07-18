import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const config = [[1,0,1],[0,0,1],[1,1,0]]

  return (
    <div style={{width:"80vw", height:"70vh", }}>
      {config.map((row, rowIndex)=>{
        return (
            <div key={rowIndex} style={{display:"flex"}}>
                {row.map((col,colIndex)=>{
                  
                  return<div key={`${rowIndex}-${colIndex}`} 
                  style={{
                    width:"100px", height:"100px",border:"1px solid red", 
                  display:"flex",alignItems:"center", justifyContent:"center", 
                  backgroundColor:col==1?"green":"blue"
                }}>
                    {col}
                    </div>
                })}
            </div>
        )
      })}
    </div>
  )
}

export default App
