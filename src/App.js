import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  
  let [upperCase,Setuppercase]=useState(false)
  let [lowerCase,Setlowercase]=useState(false)
  let [numbers,SetNumbers]=useState(false)
  let [symbols,SetSymbols]=useState(false)
  let [passwordLen,SetPasswordlen]=useState(10)
  let [fpassword,SetFpassword]=useState(10)

  let generatePassword = ()=>{
    
    let charSet = ''
    let finalPass = ''
    if(upperCase || lowerCase || numbers || symbols){
      if(upperCase) charSet+=UC
      if(lowerCase) charSet+=LC
      if(numbers) charSet+=NC
      if(symbols) charSet+=SC
      for(let i=0;i<passwordLen;i++){
         finalPass += charSet.charAt( Math.floor(Math.random()*charSet.length) )
         SetFpassword(finalPass)
      }
    }else{
      alert('Select atleast one checkbox...')
    }
  }

  
  let CopyPassword = ()=>{
    navigator.clipboard.writeText(fpassword)
    
  }

  return (
    <>
      <div className='passwordBox'>
        <h2>Password generator</h2>
        <div className='passwordBoxin' >
            <input type='text' name='finalpassValue' value={fpassword} readOnly /><button onClick={CopyPassword} >Copy</button>
        </div>
        <div className='passwordLength' >
          <label>Password Length</label>
          <input  type='number' value={passwordLen} max={20} min={10} onChange={(event)=>SetPasswordlen(event.target.value)} />
        </div>
        <div className='passwordLength' >
          <label>Include Uppercase Letter</label>
          <input  type='checkbox' checked={upperCase} onChange={()=>Setuppercase(!upperCase)} />
        </div>
        <div className='passwordLength' >
          <label>Include Lowercase Letter</label>
          <input  type='checkbox' checked={lowerCase} onChange={()=>Setlowercase(!lowerCase)} />
        </div>
        <div className='passwordLength' >
          <label>Include Numbers</label>
          <input  type='checkbox' checked={numbers} onChange={()=>SetNumbers(!numbers)} />
        </div>
        <div className='passwordLength' >
          <label>Include Symbols</label>
          <input  type='checkbox' checked={symbols} onChange={()=>SetSymbols(!symbols)} />
        </div>
        <div>
          <button className='btn' onClick={generatePassword} >Generate Password</button>
        </div>
      </div>
    </>
  );
}

export default App;
