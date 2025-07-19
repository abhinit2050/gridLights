import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const config = [[1,0,1],[0,0,1],[1,1,0]];

  const [stack, setStack] = useState({});

  let gridTrueLength = config.flat().filter(e => e==1).length;

  const handleClick = (eve, rowIndex, colIndex) =>{
    
    const newStack = structuredClone(stack);
    let key = `${rowIndex}-${colIndex}`;

    if(newStack[key] || !config[rowIndex][colIndex]){
      return;
    }
    else{
      eve.target.style.backgroundColor='purple';
      newStack[key] = true;
    }

    setStack(newStack);

  }

  useEffect(()=>{

      if(Object.keys(stack).length==gridTrueLength){
       gridReversal();
      }
  },[stack])

  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  async function gridReversal(){
    
      let arr = Object.keys(stack);

      for(let i=arr.length-1;i>=0;i--){
         await sleep(1000);
         let element = document.getElementById(arr[i]);
         element.style.backgroundColor = 'red';
                
      }

  }

  return (
    <div style={{width:"80vw", height:"70vh", }}>
      {config.map((row, rowIndex)=>{
        return (
            <div key={rowIndex} style={{display:"flex"}}>
                {row.map((col,colIndex)=>{
                  
                  return<div key={`${rowIndex}-${colIndex}`} 
                  className='gridBox'
                  onClick={(eve)=>handleClick(eve,rowIndex, colIndex)}
                  id={`${rowIndex}-${colIndex}`}
                  style={{ backgroundColor:col==1?"red":"yellow" }}>
                    
                    </div>
                })}
            </div>
        )
      })}
    </div>
  )
}

export default App
