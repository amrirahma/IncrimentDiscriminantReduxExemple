import React from "react";
import {ReactReduxContext, useDispatch} from "react-redux";


const CountIncriment =()=>{

    const dispatch = useDispatch();

    const incriment =()=>{
        dispatch({ type: 'counter/incremented' })
    }

    const diincriment =()=>{
        dispatch({ type: 'counter/decremented' })
    }

    return(
        <div>
            <div>
                <p onClick={incriment}> Incriment +</p>
                <p onClick={diincriment}> Descriment - </p>
            </div>
        </div>
    )
}


export default CountIncriment