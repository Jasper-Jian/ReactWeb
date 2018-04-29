import React from 'react'
import { Layout } from 'antd'
import './footer.scss'

const { Footer } = Layout

export default class Bottom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }
    }

    tick = () => {
        this.setState({ timer:this.state.timer + 1 });
    }

    // 组件渲染后开始循环执行tick函数
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    // 组件销毁
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Footer className="bottom animated bounceInLeft">
              <div className="text">
                <div><span className="me">@User</span>
                  <span className="stay">You have been stay in this site for  <span className="time">{this.state.timer}</span> seconds</span></div>
                </div>
            </Footer>
        );
    }
}
