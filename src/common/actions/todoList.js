import {createAction} from 'redux-actions'

export const addTodo = new createAction('ADD_TODO')

export const toggleTodo = new createAction('TOGGLE_TODO')

export const deleteTodo = new createAction('DELETE_TODO')

export const setTodoVisibility = new createAction('SET_TODO_VISIBILITY')
