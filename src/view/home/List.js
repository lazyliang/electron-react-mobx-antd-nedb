import React  from 'react'
import {observer, inject} from 'mobx-react'
import {Link, withRouter} from 'react-router-dom'




@inject('appStore') @withRouter @observer
export default class HomePage extends React.Component {

    render() {
        const photo = require('../../photo/favicon.ico')
        return (
            <div>
                <Link to={'/'}>回到首页</Link>
                123
                <img src={photo}></img>
            </div>

        )
    }
}

