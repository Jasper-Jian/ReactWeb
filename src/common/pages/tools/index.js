import React from 'react'
import {Tabs,Icon} from 'antd'
import Salery from './components/Salery'
import 'whatwg-fetch'
const TabPane = Tabs.TabPane;

export default class Tools extends React.Component {

    render(){

        return(
            //Default Tab is Salery 
            <Tabs defaultActiveKey="1">

            {/*Salery tab*/}
            <TabPane tab={ <span><Icon type="pay-circle" />Salery</span>} key="1">
                    <Salery />
            </TabPane>

            {/*Salery tab*/}
            <TabPane tab={<span><Icon type="home" />Home Loan</span>} key="2">
              Home Loan
            </TabPane>
          </Tabs>
        )
    }
}