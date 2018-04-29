import React from 'react'
import {connect} from 'react-redux'
import {setTodoVisibility } from '../../actions/todoList'

//get the state from the redux store
@connect(
  (state)=>({
    setTodoVisibility:state.setTodoVisibility
  })
)
export default class FilterLine extends React.Component {
  onClick = ()=>{
    var a = setTodoVisibility({filter:this.props.filter});
    this.props.dispatch(a)
  }
  render(){
    const {name,filter}=this.props
    const active = this.props.setTodoVisibility.filter===filter
    return(
        <div className="todo-tab_item">
          <a style={{color:active?'#f01414':'#4d111d'}} onClick={this.onClick}>{name}</a>
        </div>
    )
  }
}
