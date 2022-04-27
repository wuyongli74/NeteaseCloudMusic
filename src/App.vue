<template>
  <div id="app">
    <router-view/>
    <main-tabbar/>
  </div>
</template>

<script>

  import Find from "views/find/Find";
  import MainTabbar from "components/content/MainTabbar";

  export default {
    name: 'App',
    components: {MainTabbar, Find}
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
