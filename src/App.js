import "./index.css"
function App() {
  const createDigits = () =>{
    const digits = []
    for (let i = 1 ; i < 10; i++){
      digits.push(
        <button key={i}>{i}</button>
      )
    }
    console.log(digits);
    return digits
    
  }

  return (
    <div className="package">
      <div className="calc">
         <div className="view">
           <span>(0)</span>0
          </div>

         <div className="members">
            <button>/</button>
            <button>*</button>
            <button>+</button>
            <button>-</button>

            <button>DEL</button>

         </div>

         <div className="alldata">
          {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
         </div>
      </div>
    </div>
  );
}

export default App;
