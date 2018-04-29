import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout } from 'antd'
import { allMenu } from '../utils/menu'
import Top from './header'
import Contents from './content'
import Bottom from './footer'
import './index.scss'

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;
//const { Header, Content, Footer, Sider } = Layout;

class Container extends React.Component {
  state = {
    theme: 'dark',
    current: 'index',
    collapsed: false,
    mode: 'inline',  // 水平垂直展现
  }
  componentDidMount() {
    this.handleClick([], 'index')
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }
  clear = () => {
    this.setState({
      current: 'index',
    });
  }
  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
  }
  render() {
    return (
      <Layout className="containAll">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="leftMenu"
          style={{"background": this.state.theme === 'light' ? 'white' :'#001529'}}
        >
          {this.state.theme === 'light' ? <a href=" " target='_blank' rel='noopener noreferrer'><Icon type="github" className="github" /></a> :
          <a href=" " target='_blank' rel='noopener noreferrer'><Icon type="github" className="github white" /></a> }
          { this.state.theme === 'light' ? <span className="author">React Site</span> : <span className="author white">React Site</span> }
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['']}
            selectedKeys={[this.state.current]}
            className="menu"
            mode={this.state.mode}
          >
            {
              allMenu.map((subMenu) => {
                if (subMenu.children && subMenu.children.length) {
                  return (
                    <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                      {subMenu.children.map(menu => (
                        <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                      ))}
                    </SubMenu>
                  )
                }
                return (
                  <Menu.Item key={subMenu.url}>
                    <Link to={`/${subMenu.url}`}>
                      <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
          <div className="switch">
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </Sider>
        <Layout>
          <Top toggle={this.toggle} collapsed={this.state.collapsed}/>
          <Contents />
          <Bottom />
        </Layout>
      </Layout>
    );
  }
}
export default Container;
