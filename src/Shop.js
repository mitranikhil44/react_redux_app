import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from "./state/index"

const Shop = () => {
  const balance = useSelector(state => state.amount);
  const dispatch = useDispatch();
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <h1>Deposit & Wtihdraw Money in State Bank Of Nikhil</h1>
      <button className="btn btn-primary mx-2 mt-3" onClick={() => {withdrawMoney(100)}}> - </button>
      Update Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={() => {depositMoney(100)}}> + </button>
    </>
  )
}

export default Shop
