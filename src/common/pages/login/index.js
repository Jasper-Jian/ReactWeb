import React from 'react';
import { Form, Input, Button, notification, Icon } from 'antd';
import { Redirect } from 'react-router-dom'
import fakeAuth from '../../utils/fakeAuth'
import './index.scss'

const FormItem = Form.Item;

class LoginPage extends React.Component {
    state = {
        redirectToReferrer: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        if (n === '123' && p === '123') {
            // 表单的路由处理
            //history.push('/index');
            fakeAuth.authenticate(() => {
                this.setState({redirectToReferrer: true});
            });
        } else {
            this.openNotificationWithIcon('info');
        }
    }


    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        return notification[type]({
                 message: 'Username&Password',
                 description: 'usually are：123',
                 duration: 6,
                 icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
               })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const {redirectToReferrer} = this.state

        if (redirectToReferrer) {
          return (
            <Redirect to='/index' />
          )
        }

        return (
            <div className="loginpagewrap">
              <div className="box">
                <p>Welcome to the React</p>
                <div className="loginWrap">
                  <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                      {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please enter username' }],
                      })(
                        <Input placeholder="Username" />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please enter password' }],
                      })(
                        <Input type="password" placeholder="Password" />
                      )}
                    </FormItem>
                    <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                  </Form>
                </div>
              </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage);
export default Login;
