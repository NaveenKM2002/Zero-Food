import { useState } from "react"

const Calculator=()=>{
    const[input,setInput]=useState('');
    const[result,setResult]=useState(0);

    const reducer=(state,action)=>{
        switch(action.input){
            case 'Add_Input':
                return{...state,input: state.input + action.payload};
                case 'CALCULATE':
                    return
        }
    }
}