<template>
  <span>
  <slot :user="user">
    {{ user.lastName }}
  </slot>
</span>
</template>

<script>

export default {
 data(){
     return{
        user:{
            lastName:'Chuan',
            firstName:'Wu'
        } 
     }
 }
}
</script>

<style>

</style>