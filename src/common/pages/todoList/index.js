import React from 'react'
import {connect} from 'react-redux'
import {addTodo,toggleTodo, deleteTodo} from '../../actions/todoList'
import FilterLine from './filterList'
import './index.scss'
//0, because the biggest reducer id is -1;
let nextTodoId = 0;
//get the state from the redux store
@connect(
  (state)=>({
    todoList:state.todoList,
    setTodoVisibility:state.setTodoVisibility
  })
)
export default class todoList extends React.Component {
  submit = (e) => {
      e.preventDefault()
      if(!this.input.value.trim()){
          return
      }
      this.props.dispatch(addTodo({
          id: nextTodoId++,
          text: this.input.value,
          type: 'ADD_TODO',
      }))
      this.input.value = ''
  }


  render(){
      const todoList = this.props.todoList;//data set
      const setTodoVisibility = this.props.setTodoVisibility;//todo filtering state

      let todos = todoList;//create a temp value to store all the list
      if (setTodoVisibility.filter === 'SHOW_COMPLETED') {
        todos = todoList.filter(t=>t.completed)
      }else if (setTodoVisibility.filter === 'SHOW_ACTIVE'){
        todos = todoList.filter(t=>!t.completed)
      }
      
      return(
        <div className = "todo-box">
          <div className="todo-innerBox">
            <div className="todo-tab">
              <FilterLine filter="SHOW_ALL" name="ALL"/>
              <FilterLine  filter="SHOW_ACTIVE" name="Active"/>
              <FilterLine filter="SHOW_COMPLETED" name="Completed"/>
            </div>

          <ul className="list-group">
            {
              todos.map(todo=>
              <li className="todo-list_li" style={{ textDecoration:todo.completed ? "line-through" : "none" }}>
                  <input type="checkbox" className="check-box"
                    checked={todo.completed}
                    onClick={
                      e=>this.props.dispatch(toggleTodo({
                        id:todo.id,
                        type:"TOGGLE_TODO"
                      }))
                    }
                  />
                {todo.text}
                <button className="todo-list_del" onClick={e=>this.props.dispatch(deleteTodo({
                  id:todo.id,
                  type:"DELETE_TODO"
                }))}>Delete</button>
              </li>
              )
            }
          </ul>
          <form onSubmit={this.submit} className="todo-add">
            <input placeholder="what do you want to add?" ref={r=>this.input=r} className="todo-input"/>
            <button type="Submit" className="todo-btn">add</button>
          </form>
        </div>
      </div>
      )
    }

}
