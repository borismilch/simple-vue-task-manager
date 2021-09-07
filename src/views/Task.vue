<template>
  <div>
    <div class="container">
    <div v-if="task">
    <h1 class="center-align">{{task.title}}</h1>

     <form v-on:submit.prevent = "submitHandler">
        
        <div class="chips"  ref="chips"></div>

       <div class="input-field ">
          <textarea id="description"  v-model="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>

      <input type="text" :value="new Date(task.dare).toDateString()" ref="datePicker">
      <div v-if = "task.status !== 'готовий'">
        <button  type="submit" class="btn" style="margin-right : 1rem">Update task</button>
        <button class="btn  blue darken-4" @click="completeTask">Complete task</button>
        </div>
      </form>
    </div>
    <h2 v-else class="center-align">No tasks found</h2> 
  </div>
  </div>
</template>

<script>

export default {

 computed : {
    task(){
      return this.$store.getters.taskById(+this.$route.params.id)
    } 
 },
 data : () => ({
    
    description : '',
    chips : null,
    date : null
  }),
  methods : {
    submitHandler(){
      
     this.$store.dispatch('updateTask', {
        id : this.task.id,
        tags : this.chips,
       description : this.description,
       date : new Date(this.date.date).toDateString(),
      })
      this.$router.push('/list')
    },
    completeTask(){
      debugger
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/list')
    }
  },
  mounted (){
  this.description = this.task.description
  this.chips =  M.Chips.init(this.$refs.chips, {
      placeholder : 'Task tags',
      data : this.task.tags
    });
  this.date = M.Datepicker.init(this.$refs.datePicker, {
      format : 'dd.mm.yyyy',
      defaultDate :  new Date(this.task.date),
      setDefaultDate: true

     });
    setTimeout(()=> M.updateTextFields()) 
  }
}

</script>

<style>
 textarea{
   min-height: 100px !important;
   margin: 0.4rem 0px !important;
 }
</style>