import {observable, action} from 'mobx'
import {getData, insertData, deleteData, getAllData} from '../db/dbUtil'

class AppStore {
    @observable todos
    @observable ss
    @observable num
    @observable flag
    @observable forms
    @observable editFields
    @observable isLogin
    @observable currentName
    @observable stateforUser
    @observable info
    @observable pagination
    @observable list
    @observable loading
    @observable modal
    @observable userInfo
    @observable modals
    @observable mForm
    @observable page
    @observable collapsed
    @observable leftMenuMode
    @observable temp1
    @observable datas


    constructor() {
        this.datas = []
        this.temp1 = ''
        this.todos = []
        this.ss = ''
        this.collapsed = false
        this.leftMenuMode = 'inline'
        this.isLogin = false
        this.num = 0
        this.flag = ''
        this.forms = {}
        this.editFields = {permissions: {value: []}}
        this.currentName = ''
        this.stateforUser = false
        this.info = []
        this.pagination = {
            current: 0,
            total: 1
        }
        this.list = []
        this.loading = false
        this.modal = 'hide'
        this.userInfo = {}
        this.modal = 'hide'
        this.mForm = {}
        this.page = {
            current: 0,
            total: 1
        }
        this.pagination = {
            current: 0,
            total: 1
        }
    }

    @action.bound
    collapse() {
        this.collapsed = !this.collapsed
        this.leftMenuMode = this.collapsed ? 'vertical' : 'inline'
    }



    @action findData = () => {

        getData(this)
        console.log(this.temp1, 'temp1')
        this.temp1 !== '' ? this.datas.push(this.temp1) :

            console.log(this.datas, 'datas')
    }

    @action insertData = (doc) => {
        console.log(doc, 'doc')
        insertData(doc)
        console.log('insert success')
    }

    @action resetData = () => {
        this.temp1 = ''
        console.log(this.temp1, 'temp12')
    }

    @action deleteData = () => {
        deleteData()
    }

    @action getAllData = () => {
        getAllData(this)
    }
}

export default new AppStore()

