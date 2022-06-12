import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/counter/actions'

function App() {
  const countValue = useSelector(state=>state.count.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello, I am counter App.</h1>
      <div className="counter-app">
        <div className="count-value">
          <h2>{countValue}</h2>
        </div>
        <div className="btn-areas">
          <button onClick={()=>dispatch(actions.incrementValue())}>Increment</button>
          <button onClick={()=> dispatch(actions.resetValue())}>Reset</button>
          <button onClick={()=> dispatch(actions.decrementValue())}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
