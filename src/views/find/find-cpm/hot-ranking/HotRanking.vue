<template>
  <div class="hot-ranking">
    <title-bar :refIcon="refIcon" :tags="tags" :titles="titles" :playIcon="playIcon" :more="more"/>
    <song-card :result="songs"/>
  </div>
</template>

<script>
  import TitleBar from "components/common/titlebar/TitleBar";
  import SongCard from "components/common/card/SongCard";

  import {getRecomSong, getHotCatlist} from "network/find";


  export default {
    name: "HotRanking",
    components: {SongCard, TitleBar},
    data() {
      return {
        refIcon: 'el-icon-refresh-right',
        titles: '热门精选',
        more: '播放',
        playIcon: 'el-icon-caret-right',
        tags: [],
        songs:[],
        num: '80'
      }
    },
    created() {
      getHotCatlist().then(res => {
        console.log(res);
        this.tags= res.tags
      }).catch(err => {
        console.log(err);
      });

      getRecomSong().then(res => {
        this.songs = res.result;
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .hot-ranking {
    margin-top: 16px;
    padding: 16px;
    background: var(--background-color);
  }
</style>
