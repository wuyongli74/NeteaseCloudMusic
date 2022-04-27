<template>
  <div class="title-bar">
    <title-bar-item>
      <i slot="icon-ref" :class="refIcon"></i>
      <div slot="tags" class="titles" v-for="item in tags.slice(0,1)">
        <h4 v-for="item1 in (item.tags)">{{item1}}</h4>
      </div>
      <div slot="main-title" :titles="titles" class="title">
        <h4>{{titles}}</h4>
      </div>
      <div slot="more" :more="more" class="more">
        <i :class="playIcon"></i>
        <p>{{more}}</p>
        <i :class="icon"></i>
      </div>
    </title-bar-item>
  </div>

</template>

<script>
  import TitleBarItem from "./TitleBarItem";

  export default {
    name: "TitleBar",
    props: {
      refIcon: String,
      titles: String,
      playIcon: String,
      more: String,
      icon: String,
      tags: {
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {TitleBarItem}
  }
</script>

<style scoped>

</style>
