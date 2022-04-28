<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active: currentIndex === index}" @click="contClick(index)">
      <span>{{item}}</span>
    </div>
    <slot name="prompt-text"></slot>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods:{
      contClick(index){
        this.currentIndex=index;
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    align-items: center;
  }

  .tab-control-item {
    flex: 1;
  }

  .active span {
    font-weight: bold;
    padding: 0 4px;
    border-bottom: 4px solid var(--color-tabtxt);
  }

  p.prompt-text {
    width: 30px;
    font-size: 12px;
    line-height: initial;
    margin-left: -12%;
  }
</style>
