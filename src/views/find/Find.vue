<template>
  <div id="find">
    <main-nav-bar class="nav-bar">
      <search slot="center"/>
      <img slot="right" src="~assets/img/nav/listen-music.png">
    </main-nav-bar>
    <banners :banners="banners"/>
    <recommend/>
    <div class="center">
      <recom-song/>
      <hot-ranking/>
    </div>

  </div>
</template>

<script>
  import MainNavBar from "components/content/MainNavBar";
  import Banners from "components/common/banners/Banners";
  import Recommend from "components/common/recommend/Recommend";
  import Search from "components/common/search/Search";

  import RecomSong from "./find-cpm/recomsong/RecomSong";
  import HotRanking from "./find-cpm/hot-ranking/HotRanking";

  import {getFindBanner,} from "network/find";


  export default {
    name: "Find",
    components: {Search, MainNavBar, HotRanking, RecomSong, Recommend, Banners,},
    data() {
      return {
        banners: [],
      }
    },
    created() {
      // 1.请求多个数据
      getFindBanner().then(res => {
        console.log(res.banners);
        this.banners = res.banners;
      }).catch(err => {
        console.log(err);
      });

    },
  }

</script>

<style scoped>
  .center {
    padding-top: 1px;
    background: #eeeeee;
  }

</style>
