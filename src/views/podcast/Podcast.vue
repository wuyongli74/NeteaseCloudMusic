<template>
  <div id="pod-cast">
    <main-nav-bar class="nav-bar">
      <tab-control slot="center" :titles="titles">
        <p class="prompt-text" slot="prompt-text">人间剧场</p>
      </tab-control>
      <img slot="right" src="~assets/img/nav/add.png"/>
      <search class="search" slot="bottom"/>
    </main-nav-bar>
  </div>
</template>

<script>
  import Search from "components/common/search/Search";
  import MainNavBar from "components/content/MainNavBar";
  import TabControl from "components/content/tabControl/TabControl";

  export default {
    name: "Podcast",
    components: {TabControl, Search, MainNavBar},
    data() {
      return {
        titles: ['听听', '推荐', '故事']
      }
    }
  }
</script>

<style scoped>
  .search {
    margin: 0 8px;
  }
</style>
