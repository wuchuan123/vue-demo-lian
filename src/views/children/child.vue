<template>
  <div>{{title}}</div>
</template>

<script>
export default {
    props:{
      title:{
       validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
      }  
    }
}
</script>

<style>

</style>