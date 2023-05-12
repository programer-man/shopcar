<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="obj.count>1 && obj.count--" :disabled='obj.count === 1'>-</button>
    <input type="number" class="form-control inp" v-model.number="obj.count" />
    <button type="button" class="btn btn-light" @click="obj.count++">+</button>
  </div>
</template>

<script>
export default {
  props: {
    obj: Object,
  },
  watch:{
    obj:{
        deep: true,
        handler(){
            if(this.obj.count < 1){
                this.obj.count = 1
            }
        }
    }
  }
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>