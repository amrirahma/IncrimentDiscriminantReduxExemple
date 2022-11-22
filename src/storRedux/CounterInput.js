
import React from "react";
import {connect } from "react-redux";


const CounterInput=(props)=>{
    return (<>{props.value}</>);
}

const mapStateToProps =  state =>({
      value: state.value
})
const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(CounterInput)
