import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount } from '../reducers/reward';


function Reward() {


   const dispatch = useDispatch();
   const points= useSelector(state=>state.reward.points);

 
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={()=>dispatch(increment())}>Increment +</button>
        <button onClick={()=>dispatch(incrementByAmount(6))}>IncrementBy6 +</button>
      </div>
    </div>
  );
}

export default Reward;