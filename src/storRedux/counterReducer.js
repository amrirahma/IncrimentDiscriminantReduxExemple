import { createStore } from 'redux'

function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

 let store = createStore(counterReducer)
store.subscribe(() => console.log(store.getState()))
export const  storeRedux = store;
    //console.log(" store.getState()"+ JSON.stringify(store.getState()))

export const incementValue=()=>{
    store.dispatch({ type: 'counter/incremented' })
}

export const discrimentValue=()=>{
    store.dispatch({ type: 'counter/decremented' })
}
