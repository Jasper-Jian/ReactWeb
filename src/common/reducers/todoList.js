import { handleActions } from 'redux-actions'

//initialize the state
const todoListInit = [{
    id: -3,
    text: 'coding',
    completed: false,
  }, {
    id: -2,
    text: 'watch movie',
    completed: false,
  }, {
    id: -1,
    text: 'reading',
    completed: true,
  }]

const todo = (state,action) =>{
    switch (action.type) {
      case 'ADD_TODO':
      return {
        id:action.id,
        text:action.text,
        complete:false
      }
      case "TOGGLE_TODO":
      //check is the state id is same as the action id or not if same then do nothing
      if(state.id !== action.id){
        console.log(state);
        return state
      }
      //can not change the oject and need to create a new object, becasue react can not define is the object changed or not.
      return Object.assign({}, state, {
        completed: !state.completed
      })
      default:
        return state
    }
}

export const todoList = handleActions({
    'ADD_TODO'(state,action){
      return[
        ...state,
        todo(undefined, action.payload)//add the object to the exist list
      ]
    },
    'TOGGLE_TODO'(state,action){
    return state.map(t => todo(t, action.payload))
    },
    'DELETE_TODO'(state,action){
      return state.filter(t=>t.id !== action.payload.id)//filter out the delete id and update the state
    }
},todoListInit)
//initialize the visibility
const setTodoVisibilityInit = {
  filter:'SHOW_ALL'
}

export const setTodoVisibility = handleActions({
    'SET_TODO_VISIBILITY'(state,action){
      return{...state,...action.payload}
    }
},setTodoVisibilityInit)
