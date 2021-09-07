Vue.createApp({
    data : () => ({
        title : 'Simple todo list',
        template : '<h1>I Am Putin</h1>',
        person : {
            name: 'Vladilen',
            surName: 'Minin',
            age: 27
        },
        todos: [],
        completed:[],
        inputVal : '',
        placeHolder: 'input your todo here',
        all: true,
        copm:false,
        uncomp:false
    }),
    methods: {
        deleteLi(index){
            this.items.splice(index, 1)
        },
        addNewTodo(){
        if(this.inputVal.length > 3 ){
         this.todos.push(this.inputVal)
         this.inputVal = ''}
        },
        completeItem(title,i, e){
          let li =  e.target.closest('li')
          li.classList.add('completed')
          setTimeout(()=> {this.todos.splice(i, 1); this.completed.push(title)},400)
        },
        unCompleteItem(title, i, e){
            let li =  e.target.closest('li')
            li.classList.remove('completed')
            setTimeout(()=> {this.completed.splice(i, 1); this.todos.unshift(title)},400)
        },
        filterTodos(){
            let selectVal =  this.$refs.select.value 
            selectVal === 'all' ? this.all = true : this.all = false
            selectVal === 'completed' ? this.copm = true : this.copm = false
            selectVal === 'uncompleted' ? this.uncomp = true : this.uncomp = false
            console.log(this.all, this.copm, this.uncomp)
        }

    },
    computed:{
        filter(){
            return this.items.filter(item => item > 4)
        },

    }
  

}).mount('#app')
