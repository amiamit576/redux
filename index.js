import { createStore, applyMiddleware,combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
 import axios from 'axios'
const history = []
// it needed to be top because varriable decalared const are not hoisted



// actions name and constant
const init = 'account/init';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';
const  getAccUserPending='account/getUser/pending'
const  getAccUserFullFilled='account/getUser/fullfilled'
const  getAccUserRejected='account/getUser/rejected'

const incBonus='bonus/increment'
//store
const store = createStore(combineReducers({
    account: accountReducer,
    bonus: bonusReducer
}), applyMiddleware(logger.default,thunk.default));
// some time applyMiddleware() causes error hence we use logger.defaulat
// reducer


function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
         case getAccUserFullFilled:
            return { amount: action.payload,pending:false }
         case getAccUserRejected:
            return { ...state, error: action.error, pending:false}
        case getAccUserPending:
            return { ...state, pending: true };
        case inc:
            return { amount: state.amount + 1 }
        case dec:
            return { amount: state.amount - 1 }
         case incByAmt:
            return { amount: state.amount + action.payload }
        default:
               return state

            
        
    }





 



// if else is removed by switch
    // // if (action.type === 'increment') {// incase of string  there chances error in typing
    //     if (action.type === inc) {
    //     //state.amount=state.amount+1// state mutate
    //     return {amount:state.amount+1}
        
    // }
    //  if (action.type === dec) {
    //     //state.amount=state.amount+1// state mutate
    //     return {amount:state.amount-1}
        
    // }
    //  if (action.type === incByAmt) {
    //     //amount decided by payload 
    //     return {amount:state.amount+action.payload}
        
    // }
    // return state
}

    function bonusReducer(state = { point: 0 }, action) {
        switch (action.type) {
            case incBonus:
                return { point: state.point + 1 };
            // this case related to amount not bonus
            case incByAmt:
                if (action.payload >= 100)
                    return { point: state.point + 1 };
                
            default:
                return state
            
        }
    }

// global state
console.log(store.getState());
// action
//dispatch===listner

// subscribe
// store.subscribe(() => {
//     console.log(store.getState())
// })
// setInterval(() => {
//  store.dispatch({ type: 'increment' })
// }, 5000)
// setInterval(() => {
//  store.dispatch({ type: 'decrement' })
// }, 5000)
// setInterval(() => {
//     store.dispatch({ type: 'incrementByAmount', payload: 4 }
//     // if you not provide payload then it show nan
//     )
// }, 5000)

// action creator
 function getUserAccount(id) {
     return async (dispatch, getState) => {
         try {
            dispatch(getAccountPending())
            const { data } = await axios.get(`http://localhost:3000/account/${id}`);
            dispatch(getAccountUserFullFilled(data.amount));
        } catch (error) {
            dispatch(getAccountUserRejected(error.message));
                
        }
      
        
    }
     
}
//withoutapi

// function initUser(value) {
//     return {type:init,payload:value}
// }
function getAccountUserFullFilled(value) {
    return {type:getAccUserFullFilled,payload:value}
}
function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error:error };
}
function getAccountPending(value) {
    return {type:getAccUserPending,}
}



function increment() {
    return {type :inc}
}
function decrement() {
    return {type :dec}
}
function incrementByAmount(value) {
    return {type :incByAmt,payload:value}
}

//bonus function
function incrementBonus(value) {
    return{type :incBonus}
}



// setInterval(() => {
//     store.dispatch(increment())
// }, 2000);
// setInterval(() => {
//     store.dispatch(incrementByAmount(6))
// }, 2000);
//use settimeout instead of
// setInterval(() => {
//     //thunk requrire only function declartion remov execuation
//     store.dispatch(initUser)
// }, 2000);
setTimeout(() => {
    //thunk requrire only function declartion remov execuation
    store.dispatch(getUserAccount(2))

}, 2000);
// setTimeout(() => {
//    store.dispatch(incrementByAmount(200))
// }, 2000);
// setTimeout(() => {
//     store.dispatch(incrementBonus())

// },2000)

    



// to  apply middleware you have to install middle waare
// here we install middleware npm intall redux-logger
// 35




// async api call

// async function getUser() {
//     const { data } = await axios.get('http://localhost:3000/account/1');
//     console.log(data)
// }
// getUser()


