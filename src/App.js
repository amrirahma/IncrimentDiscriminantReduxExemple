import logo from './logo.svg';
import React, {useEffect} from 'react';
import {Provider, useSelector} from 'react-redux'
import './App.css';
import {incementValue, discrimentValue, storeRedux} from './storRedux/counterReducer'
import CounterInput from "./storRedux/CounterInput";
import CountIncriment from "./storRedux/CountIncriment";


function App() {

    useEffect(() => {
        incementValue();
    }, [])

    return (
        <Provider store={storeRedux}>
            <div>
                <CounterInput></CounterInput>
                <CountIncriment></CountIncriment>

            </div>
        </Provider>
    );
}

export default App;
