import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import index from '../pages/index'
import music from '../pages/music'
import TodoList from '../pages/todoList'
import './content.scss'

const { Content } = Layout;

class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        <Route path="/index" component={index} />
        
        <Route path="/todoList" component={TodoList} />
      </Content>
    );
  }
}
export default Contents;
