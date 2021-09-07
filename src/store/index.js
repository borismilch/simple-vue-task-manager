import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks : JSON.parse(localStorage.getItem('tasks') || '[]' )
  },
  mutations: {
    createTask(state, task){
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
     
    },
    updateTask(state, {id, description, date}){
      
    const tasks = state.tasks.concat(),
    idx = tasks.findIndex(t => t.id === id),
    task = tasks[idx],
    status = new Date(date) > new Date() ? 'active' : 'Просрочено';
    
    tasks[idx] =
    {
      ...task, 
      description,
      'dare' : date,
      status,
    }

    state.tasks = tasks  
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
   
    },
    completeTask(state, id){
      debugger
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks[idx].status = 'готовий'
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task){
      commit('createTask', task)
    }, 
    updateTask({commit}, task){
      commit('updateTask', task)
    },
    completeTask({commit}, id){
      commit('completeTask', id)
    }
  },
  modules: {
   
  },
  getters : {
    tasks : s => s.tasks,
    taskById : s => id => s.tasks.find(t => t.id === id)
  }
})
