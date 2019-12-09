import React, {Component} from 'react'
import {observer, inject, Provider} from 'mobx-react'
import {withRouter, HashRouter, Route} from 'react-router-dom'
import stores from './stores'
import Demo from './view/demo'
import Main from "./components/Main";
import HomePage from "./view/home/List";

const {remote} = window.require('electron')
const db = remote.getGlobal('collDb');


@inject('appStore') @withRouter @observer
export default class App extends Component {
    componentDidMount() {
        this.state = {dbData: []};
    }

    getData() {
        let _this = this;
        db.find({n: 5}, function (err, docs) {
            console.log(docs);
            _this.setState({dbData: docs});
        });
    }





    insertData = () => {
        this.props.appStore.insertData();
    }

    render() {

        return (
            <Provider {...stores}>
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/home" component={HomePage}/>
                        <Route exact path="/demo" component={Demo}/>
                    </div>
                </HashRouter>
            </Provider>

        )
    }


}


