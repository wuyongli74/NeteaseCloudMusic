<template>
  <div class="hot-ranking">
    <title-bar :refIcon="refIcon" :tags="tags" :titles="titles" :playIcon="playIcon" :more="more"/>
    <song-card :result="tags"/>
  </div>
</template>

<script>
  import TitleBar from "components/common/titlebar/TitleBar";
  import SongCard from "components/common/card/SongCard";

  import {getHotRanking, getHotCatlist} from "network/find";


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
        num: '80'
      }
    },
    created() {
      getHotCatlist().then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });

      getHotRanking(3).then(res => {
        this.tags = res.playlists;
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
