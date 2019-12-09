import React from 'react'
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router-dom'
import {Card, Table, Button} from 'antd'

@inject('demoStore', 'appStore') @observer
class Demos extends React.Component {


    componentDidMount(){
        this.props.appStore.getAllData()
    }
    render() {
        const {appStore} = this.props

        const columns = [
            {
                title: 'hello',
                dataIndex: 'hello',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: 'n',
                dataIndex: 'n',
                key: 'n',
            },
            {
                title: 'today',
                dataIndex: 'today',
                key: 'address',
            },
            {
               title:"photo",
               dataIndex:"photo",
               render:(text,record)=>{
                   const img = require('../../photo/'+text)
                   return (<img src={img}></img>)
                   // return text

               }
            }

        ];

        return (
            <div>
                <Card title="demo示例">
                    <Button> <Link to={'/'}>回到首页</Link></Button>

                    <br/>
                    <Button onClick={this.findData}>查询n为1的数据</Button>
                    <Button onClick={this.insertData}>新增数据</Button>
                    <Button onClick={this.deleteData}>删除数据</Button>
                    <Button onClick={this.getAllData}>查询全部</Button>
                    <Table columns={columns} dataSource={appStore.temp1.slice()}/>


                </Card>
            </div>

        )
    }

    findData = () => {
        this.props.appStore.findData();
    }
    insertData = () => {
        let doc = {
            hello: 'hi',
            n: Math.round(Math.random()),
            today: 'niceday',
            photo:'favicon.ico'

        };
        this.props.appStore.insertData(doc)
    }

    resetData = () => {
        this.props.appStore.resetData()
    }

    deleteData = () => {
        this.props.appStore.deleteData()
    }
    getAllData = () =>[
        this.props.appStore.getAllData()
    ]
}

export default Demos;
