<template>
  <div>
      <div>{{msg}}</div>
      <div>2</div>
      <div>{{$store.state.tab.a}}</div>
      

  </div>
</template>

<script>

export default {
    name:'mind',
    data(){
      return {
        msg:'我是图图'

      }
    },
    methods:{
      sub(){
        this.$store.dispatch('asyncUpdateUser',{name:this.from.name})
      }
    }


}
</script>

<style>

</style>