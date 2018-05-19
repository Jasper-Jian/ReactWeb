import React from 'react'
import {Row, Col, Select,Input,Timeline} from 'antd'
const Option = Select.Option;
const options = [
    {
        value: '52',
        label: 'Weekly'
    },
    {
        value: '12',
        label: 'Monthly'
    },
    {
        value: '1',
        label: 'Annually'
    }      
]
const children = [];
for (let i = 0; i < options.length; i++) {
  children.push(<Option value={options[i].value} key={i}>{options[i].label}</Option>);
}

export default class Salery extends React.Component {
    
constructor(props){
        super(props)
        this.state={
            preTax:0,
            afterTax:0,
            totalTax:0,
            taxDetail:[],
            saleryTimeFrame:[14000,48000,70000,70001],
            Annually: [14000,48000,70000,70001]
        }
    }
/*
$0-$14,000，        tax rate 10.5%
$14,001-$48,000，   tax rate 17.5%
$48,001-$70,000，   tax rate 30%
$70,001 above，     tax rate 33%
80000 

14000 * 10.5 + 34000 * 17.5 + 22000 * 30 + (80000-70000) * 33
*/
    handleChange=(e)=>{
       const preTax = e !== undefined ? e.target.value : this.state.preTax;
       let saleryTimeFrame = this.state.saleryTimeFrame;
       let afterTax;
       this.setState(Object.assign({},{preTax}));
       
       let totalTax;
        if(!preTax){
            afterTax = 0;
        }else if(preTax > 0 && preTax <= saleryTimeFrame[0] ){ //First Tire Range 14,000 for Annually
            totalTax = preTax * .105;
            afterTax = preTax - totalTax;
            
            this.setState(Object.assign({},{afterTax,totalTax,taxDetail:[totalTax]}));

        }else if(preTax > saleryTimeFrame[0]  && preTax <= saleryTimeFrame[1]){ //Second Tire Range 14,000  ~ 48,000 for Annually
            totalTax = saleryTimeFrame[0] * .105 + (preTax-saleryTimeFrame[0]) * .175;
            afterTax = preTax - totalTax;
            this.setState(Object.assign({},{afterTax,totalTax,
                taxDetail:[
                    saleryTimeFrame[0] * .105,(preTax-saleryTimeFrame[0]) * .175
                ]
            }));

        }else if(preTax > saleryTimeFrame[1] && preTax <= saleryTimeFrame[2]){//Third Tire Range 48,000 ~ 70,000 for Annually
            totalTax = saleryTimeFrame[0] * .105 + (saleryTimeFrame[1] -saleryTimeFrame[0]) * .175 + (preTax-saleryTimeFrame[1]) * .3;
            afterTax = preTax - totalTax;
            this.setState(Object.assign({},{afterTax,totalTax,
                taxDetail:[
                    saleryTimeFrame[0] * .105,
                    (saleryTimeFrame[1] -saleryTimeFrame[0]) * .175,
                    (preTax-saleryTimeFrame[1]) * .3
                ]
            }));

        }else if(preTax > saleryTimeFrame[2]){//Fourth Tire above 70,001 for Annually
            totalTax = saleryTimeFrame[0] * .105 + (saleryTimeFrame[1] -saleryTimeFrame[0]) * .175 + (saleryTimeFrame[2]-saleryTimeFrame[0]-saleryTimeFrame[1]) * .3 + (preTax-saleryTimeFrame[2]) * .33;
            afterTax = preTax - totalTax;
            this.setState(Object.assign({},{afterTax,totalTax,
                taxDetail:[
                    saleryTimeFrame[0] * .105,
                    (saleryTimeFrame[1] -saleryTimeFrame[0]) * .175,
                    (saleryTimeFrame[2]-saleryTimeFrame[0]-saleryTimeFrame[1]) * .3,
                    (preTax-saleryTimeFrame[2]) * .33
                ]
            }));
        }
    }
    handleSelectionChange=(e)=>{
        const selectedValue = e;

        let defaultValue = this.state.Annually;

        if (selectedValue == 1) {
            this.setState(
                Object.assign({}, {saleryTimeFrame: defaultValue })
            );
        }else if (selectedValue == 12 ){
            let Monthly = defaultValue.map((value)=>{return value/12});
            this.setState(
                Object.assign({}, {saleryTimeFrame:Monthly})
            );
        }else if(selectedValue == 52){
            let Weekly = defaultValue.map((value)=>{return value/52});
            this.setState(
                Object.assign({}, {saleryTimeFrame:Weekly})
            );
        }
        setTimeout(() => {
            this.handleChange();
        }, 1);

    }
    render(){
        return(
            <Row gutter={16}>
            <Col span={6} />
            <Col span={12}>
                <Select
                defaultValue="1"
                onChange={(event)=>this.handleSelectionChange(event)}
                style={{ width: 200, marginBottom: 16}}
                >
                    {children}
                </Select>

                <div style={{ marginBottom: 16 }}>
                    <Input type="number" addonBefore="Gross Salery" addonAfter="NZD" defaultValue="" onChange={(event)=>this.handleChange(event)}   />
                </div>

                <Timeline>
                    {this.state.taxDetail[0]? <Timeline.Item>Rate: 10.5% , {this.state.taxDetail[0].toFixed(2)}</Timeline.Item> :''}
                    {this.state.taxDetail[1]? <Timeline.Item>Rate: 17.5% , {this.state.taxDetail[1].toFixed(2)}</Timeline.Item> :''}
                    {this.state.taxDetail[2]? <Timeline.Item>Rate: 30.0% , {this.state.taxDetail[2].toFixed(2)}</Timeline.Item> :''}
                    {this.state.taxDetail[3]? <Timeline.Item>Rate: 33.0% , {this.state.taxDetail[3].toFixed(2)}</Timeline.Item> :''}
                </Timeline>

                <div style={{ marginBottom: 16 }}>
                    <Input addonBefore="Tax Total" addonAfter="NZD" defaultValue="" value = {this.state.totalTax.toFixed(2)}/>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Input addonBefore="After Tax" addonAfter="NZD" defaultValue="" value={this.state.afterTax.toFixed(2)} />
                </div>                         
            </Col>
            <Col span={6} />
            </Row>
        )
    }
}