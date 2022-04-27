<template>
  <div class="title-bar">
    <title-bar :titles="titles" :more="more" :icon="icon"></title-bar>
    <card :num="num" :result="personalized"/>
  </div>
</template>

<script>
  import TitleBar from "components/common/titlebar/TitleBar";
  import {getPersonalized} from "network/find";
  import Card from "../../../../components/common/card/Card";

  export default {
    name: "RecomSong",
    components: {Card, TitleBar},
    data() {
      return {
        titles:'推荐歌单',
        refIcon: 'el-icon-refresh-right',
        more: '更多',
        icon: 'el-icon-arrow-right',
        personalized: [],
        num:120,
      }
    },
    created() {
      getPersonalized(6).then(res => {
        console.log(res.result);
        this.personalized = res.result
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .title-bar {
    padding: 8px;
    background: var(--background-color);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
</style>
