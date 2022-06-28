<template>
  <children>
    <template slot-scope="slotProps">
    {{slotProps.user.firstName}}
    </template>
  </children>
</template>

<script>
import children from './children'
export default {
    components:{children}
}
</script>

<style>

</style>