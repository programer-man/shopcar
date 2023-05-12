<template>
  <div>
    <MyHeader background="orange" color="red" title="刘备草鞋"></MyHeader>
    <div class="main">
      <MyGoods v-for="obj in list" :key="obj.id" :obj="obj"></MyGoods>
    </div>
    <MyFooter :arr="list"></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyGoods from "./components/MyGoods.vue";
export default {
  data(){
    return {
      list:[]
    }
  },
  components: {
    MyHeader,
    MyFooter,
    MyGoods,
  },
  created(){
    this.$axios({
      url: '/api/cart',
    }).then(res=>{
      this.list = res.data.list
      this.list.forEach(obj=>{
        if(obj.state){
          obj.state = true
        }
        else {
          obj.state = false
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }
};
</script>

<style scoped>
  .main {
    padding: 45px 0 50px 0;
  }
</style>
