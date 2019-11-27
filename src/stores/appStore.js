import {observable, action} from 'mobx'


class AppStore {
    @observable todos


    constructor(){
        this.todos = []
    }



    @action addTodo = (todo) => { // 增
        this.todos = [...this.todos, todo]
    }

    @action deleteTodo = (id) => { // 删
        this.todos = this.todos.filter(item => {
            return item.id !== id
        })
    }

    @action completeTodo = (id) => { // 改
        this.todos = this.todos.map(item => {
            let obj = item.id === id ? {...item, isComplete: !item.isComplete} : item
            return obj
        })
    }

    @action searchTodo = (content) => { // 查
        if (content === '') {
            this.todos
        } else {
            this.todos = this.todos.filter(item => {
                return item.content.indexOf(content) !== -1
            })
        }
    }

    @action getReward = (db)=>{
        this.todos = db.fruits
        console.log(this.todos,'todo')
    }
}

export default new AppStore()

