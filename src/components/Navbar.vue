<template>
  <nav class="indigo darken-3">
    <div class="nav-wrapper ">
        <div class="container">
      <router-link to="/" href="#" class="brand-logo">Tasks</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link
        tag = "li"
        to="/"
        exact
        active-class = "active"
        
        >
        <a href="#">Create</a>
        </router-link>


         <router-link
        tag = "li"
        to="/list"
    
        active-class = "active"
        >
        <a href="#">List</a>
        </router-link>
      </ul>
      </div>
    </div>
  </nav>
        
</template>

<script>
export default {

}
</script>

<style>

</style>