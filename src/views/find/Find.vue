<template>
  <div id="find">
    <nav-bar class="nav-bar" slot="top">
      <div class="nav-bar-left" slot="left">
        <img src="~assets/img/nav/fold.png">
      </div>
      <search slot="center"/>
      <div class="nav-bar-right" slot="right">
        <img src="~assets/img/nav/listen-music.png">
      </div>
    </nav-bar>
    <banners :banners="banners"/>
    <recommend/>
    <div class="center">
      <recom-song/>
      <hot-ranking/>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Banners from "components/common/banners/Banners";
  import Search from "components/common/search/Search";
  import Recommend from "components/common/recommend/Recommend";

  import RecomSong from "./find-cpm/recomsong/RecomSong";
  import HotRanking from "./find-cpm/hot-ranking/HotRanking";

  import {getFindBanner,} from "network/find";


  export default {
    name: "Find",
    components: {HotRanking, RecomSong, Recommend, Search, Banners, NavBar},
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
  .nav-bar {
    box-shadow: 0 1px 1px rgba(150, 150, 150, 0.1);
  }

  .center {
    padding-top: 1px;
    background: #eeeeee;
  }

</style>
