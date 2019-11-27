import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {withRouter} from 'react-router-dom'
import {Button} from 'antd'

const {remote} = window.require('electron')
const db = remote.getGlobal('collDb');

@inject('appStore') @withRouter @observer
export default class App extends Component {
    componentDidMount() {

        this.state = {dbData: []};
        var doc = {
            hello: 'world'
            , n: 5
            , today: new Date()
            , nedbIsAwesome: true
            , notthere: null
            , notToBeSaved: undefined  // Will not be saved
            , fruits: ['apple', 'orange', 'pear']
            , infos: {name: 'nedb'}
        };


        db.insert(doc, function (err, newDoc) {   // Callback is optional
        });

    }
    getData(){
        let _this = this;
        db.find({n: 5}, function (err, docs) {
            console.log(docs);
            _this.setState({dbData : docs});
        });
    }



    getReward = (db) => {
        this.getData()
        this.props.appStore.getReward(db)
    }

    getStateInfo = ()=>{
      this.props.appStore.todos = this.state.dbData

    }


    render() {
        const {appStore} = this.props
        return (
            <div>
                <Button onClick={this.getReward}>双击获得惊喜</Button>
                <Button onClick={this.getStateInfo}>从state获得数据</Button>
            </div>
        )
    }


}


