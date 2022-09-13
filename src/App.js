import { useState} from 'react';
import "./index.css"


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ['/', '*', "+", "-", "."];

  const changevalue = value => {
    if (
      operators.includes(value) && calc === '' ||
      operators.includes(value) && operators.includes(calc.slice(-1)
      )
    ){
      return;
    }
    setCalc(calc + value)

    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }

  const createallnumbers = () =>{
    const allnumbers = []
    for (let i = 1 ; i < 10; i++){
      allnumbers.push(
        <button onClick= {() => changevalue(i.toString())} key={i}>{i}</button>
      )
    }
    
    return allnumbers
    
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc === ""){
      return;
    }

    const value = calc.slice(0,-1);
    setCalc(value);
  }


  return (
    <div className="fi-package">
      <div className="fi-calc">
         <div className="fi-view">
         {result ? <span>({result})</span> : ''}
          { calc || "0"}
          </div>

         <div className="fi-members">
         <button onClick= {() => changevalue('/')}>/</button>
          <button onClick= {() => changevalue('*')}>*</button>
          <button onClick= {() => changevalue('+')}>+</button>
          <button onClick= {() => changevalue('-')}>-</button>
          <button onClick = {deleteLast}>DEL</button>

            

         </div>

         <div className="fi-alldata">
          {createallnumbers()}
          <button onClick= {() => changevalue('0')}>0</button>
          <button onClick= {() => changevalue('.')}>.</button>
          <button onClick= {calculate}>=</button>
         </div>
      </div>
    </div>
  );
}

export default App;
