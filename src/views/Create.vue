<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create Task</h1>
      <form v-on:submit.prevent = "submitHandler">
        <div class="input-field ">
          <input id="title" v-model="title" type="text" class="validate" required>
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div> 
        <div class="chips" ref="chips"></div>

       <div class="input-field ">
          <textarea id="description" v-model="description" class="materialize-textarea"></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>

      <input type="text" ref="datePicker">
        <button  type="submit" class="btn">Create task</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'create',
  data : () => ({
    description : '',
    title : '',
    chips : null,
    date : null
  }),
  methods : {
    submitHandler(){
      const task = {
        title : this.title,
        description : this.description,
        id : Date.now(),
        status : 'active',
        tags : this.chips.chipsData,
        dare : this.date.date

      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
      console.log(this.$router)
    }
  },
  mounted (){
  this.chips =  M.Chips.init(this.$refs.chips, {
      placeholder : 'Task tags',
    });
  this.date = M.Datepicker.init(this.$refs.datePicker, {
      format : 'dd.mm.yyyy',
      defaultDate :  Date.now(),
      setDefaultDate: true

     });
  }
}
</script>
