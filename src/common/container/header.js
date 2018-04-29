import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import './header.scss'

const SubMenu = Menu.SubMenu;
const { Header } = Layout;

class Top extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      username:'123'
    }
  }
  render() {
    return (
      <Header style={{ background: '#fff'}}>
        <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Menu mode="horizontal" className="logOut">
          <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>} >
            <Menu.Item key="logOut"><Link to="/login" >Logout</Link></Menu.Item>
            </SubMenu>
        </Menu>
      </Header>
    );
  }
}
export default Top;
