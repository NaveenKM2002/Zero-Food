import React, { useReducer, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Calculator = () => {
  
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADDINPUT':
        return { ...state, input: state.input + action.payload };
      case 'CALCULATE':
        return { ...state, result: eval(state.input) };
      case 'CLEAR':
        return { input: '', result: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { input: '', result: 0 });

  useEffect(() => {
    setResult(state.result);
  }, [state.result]);

  const handleClick = (value) => {
    if (value === '=') {
      dispatch({ type: 'CALCULATE' });
    } else if (value === 'C') {
      dispatch({ type: 'CLEAR' });
    } else {
      dispatch({ type: 'ADDINPUT', payload: value });
    }
  };
  const gradientStyle = {
    background: 'linear-gradient(to right, skyblue,#03fcb1)', 
    
    height: '100vh', 
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff', 
    fontSize: '2rem',
  };
  return (
    <center>
    <div className="calculator " style={gradientStyle} >
      <h1 className='text-primary p-3 text-white' style={{fontFamily:'cursive',fontSize:80}}>Calculator</h1>  
      <input
        type="text"
        className="form-control"
        value={state.input}
        readOnly
        style={{width:500,backgroundColor:'   #03fc9d',color:'white'}}
      />
      <input
        type="text"
        className="form-control"
        value={result}
        readOnly
        style={{width:500,backgroundColor:'#4dff88',color:'white'}}
      />
      <div className="buttons m-2 p-2">
        {['7',   '8', '9', '+','C'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="btn btn-info"
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="buttons m-2">
        {['6', '5', '4', '-','*'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="btn btn-info"
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="buttons m-2">
        {['3', '2', '1', '=','/'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="btn btn-info"
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="buttons m-2">
        {[',', '.', '0', '%'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="btn btn-info"
          >
            {btn}
          </button>
        ))}
      </div>
    </div></center>
  );
};

export default Calculator;
