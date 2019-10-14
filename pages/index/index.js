Page({
    
    data: {
        input: "",
        todos: [
            {item: "weapp", completed:true}, 
            {item: "vue", completed:false}
        ],
        leftCount: 1,
        isAllCompleted: false
    },
    
    // 1.获取输入框的值,重新设置给页面
    getInput: function(e){
        
        this.setData({input: e.detail.value})
    },
    //2.添加到todos
    addToTodos: function(){
        if(!this.data.input) return
        var newTodos = this.data.todos
        newTodos.push({
            item: this.data.input,
            completed: false
        })
        
        this.setData({
            todos: newTodos, 
            input: "", 
            leftCount: this.data.leftCount+1
        })
    },
    toggleTodoHandler: function(e){
        const index = e.currentTarget.dataset.index;

        const item = this.data.todos[index]
        item.completed = !item.completed 

        const leftCount = this.data.leftCount+ (item.completed ? -1:1)

        this.setData({todos: this.data.todos , leftCount: leftCount})
        
    },
    delItem(e){
        const index = e.currentTarget.dataset.index;
        this.data.todos.splice(index,1)
        this.setData({todos: this.data.todos})
    },
    toggleAllHandler(){

        if(this.data.isAllCompleted){
            this.data.todos.forEach(item =>{
                item.completed = false
                this.data.isAllCompleted = false
            })
        }else {
            this.data.todos.forEach(item =>{
                item.completed = true
                this.data.isAllCompleted = true
            })
        }
        this.setData({todos: this.data.todos})
    },
    clearDoneHandler(){
        // const todos = []
        // this.data.todos.forEach(item =>{
        //     if (!item.completed) {
        //         todos.push(item)
        //     }  
        // })

        // 使用filter代替foreach
        const todos = this.data.todos.filter(item => !item.completed)

        this.setData({todos: todos})
    }

})