import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import index from '../pages/index'
import Tools from '../pages/tools'
import TodoList from '../pages/todoList'
import './content.scss'

const { Content } = Layout;

class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        <Route path="/index" component={index} />
        <Route path="/tools" component={Tools} />
        <Route path="/todoList" component={TodoList} />
      </Content>
    );
  }
}
export default Contents;
