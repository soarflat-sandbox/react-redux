import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementAction,
  decrementAction,
  zeroAction
} from './actions/counterActions';

const counterSelector = state => state.counter;

function App() {
  // Store に紐づいた dispatch を実行できる
  const dispatch = useDispatch();

  // Store にアクセスし、`state.counter`を取得
  const counter = useSelector(counterSelector);

  const handleIncrementClick = () => {
    dispatch(incrementAction());
  };

  const handleDecrementClick = () => {
    dispatch(decrementAction());
  };

  const handleZeroClick = () => {
    dispatch(zeroAction());
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>count: {counter}</p>
      <button onClick={handleIncrementClick}>increment</button>
      <button onClick={handleDecrementClick}>decrement</button>
      <button onClick={handleZeroClick}>zero</button>
    </div>
  );
}

export default App;
