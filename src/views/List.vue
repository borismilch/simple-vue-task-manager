<template>
  <div>
    <h1>List</h1>
    <div class="row">
     <div class="input-field col s6">
    <select class="col s3" ref="select" v-model="filter">
      <option value="" disabled selected>Choose your option</option>
      <option value="active">Активні</option>
      <option value="Просрочено">Просрочені</option>
      <option value="готовий">Готові</option>
    </select>
     </div></div>
    <button class="btn btn-small red" @click="filter = null" v-if="filter"> CLEAR FILLTER </button>

    <hr>
    <table v-if = "tasks.length">
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>Status</th>
                <th>Open</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(task, index) in displayTasks"
            :key = 'task.id'>
            <td>{{index + 1}}</td>
            <td>{{task.title}}</td>
            <td>{{new Date(task.dare).toLocaleDateString()}}</td>
            <td><div class="text">{{task.description}}</div></td>
            <td class="status" :style=" { color: task.status === 'готовий' ? 'green' : task.status === 'active' ?  'orange' : 'red'}">{{task.status}}</td>
            <td>
                <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id ">OPEN</router-link>
            </td>
            </tr>
        </tbody>
    </table>
    <h5 v-else>No tasks</h5>
  </div>
</template>

<script>
export default {
    data : ()=> ({
        filter : null
    }),
    computed : {
        tasks(){
            return this.$store.getters.tasks
        },
        displayTasks(){
            return this.tasks.filter(t => {
                if(!this.filter) return true

                return t.status === this.filter
            })
        }

    },
    mounted(){
        select = M.FormSelect.init(this.$refs.select);
    }
}
</script>

<style>
 .text{
    white-space : nowrap;
    width: 250px;
    text-overflow: ellipsis;
    overflow :hidden;
 }
 .status{
    font-weight: 700;
 }
</style>