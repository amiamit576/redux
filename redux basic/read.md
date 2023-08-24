 to create fake api server wehave to run npm i -g json-server
 json-server db.json (db.json k paath dena hota hai)// then run the command
 it create a fake api
 // how to acess api
 //go new terminal 
 and install npm install axios
 import axios from 'axios'
 to retrive the inialized data weneed tocreate an acction 
in reducer case are increasing hence instead if and else we us swich statements
if we provide async function in action it causes an error stating action must be plain object
async function initUser() {
     const { data } = await axios.get('http://localhost:3000/account/1');
    return {type:init,payload:data.amount}
}// causes an error 
hence we require a middleware  to stop stop dispacth acess and  and callthe dispatch with other action which i provided by a miidle ware  name redux thunk
1.npm i redux-thunk
 after importing it an set tunk default 
 // multiple reducer
 ========================================================
 use of combine reducer to avoid nesting of object
 import conmbine reducer
 pass it to store
 combineReducers({
    account: accountReducer,
    bonus:bonusReducer
})
//reducername


in case multiple state   getstate (state of whole state) while state is locl state 
// ek reducer me usi ki state change hogi

store =[state ,reducer,dispatch]
action{type:,payload:}





==================================================================================================================================================================================================
react-redux
 react-redux library work to link react state with redux state