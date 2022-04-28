<template>
  <div class="card-center">
    <div class="card" v-for="item in result">
      <div class="card-img-live">
        <img class="rec-img" :src="item.picUrl" alt=""/>
        <div class="play-count-icon">
          <img class="icon-play" src="~assets/img/recommend/play.png" alt=""/>
        </div>
      </div>
      <p class="rec-name">{{item.name}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SongCard",
    props: {
      result: {
        type: Array,
        default() {
          return []
        }
      },
    },

  }
</script>

<style scoped>
  img.rec-img {
    width: 100%;
    border-radius: 8px;
  }

  .card {
    margin: 8px;
  }

  .card-center {
    display: flex;
    overflow: scroll;
  }

  p.rec-name {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    width: 100px;
  }

  p.play-count {
    margin-left: 4px;
    font-size: 12px;
  }

  img.icon-play {
    width: 12px;
  }

  .play-count-icon {
    position: absolute;
    top: 3px;
    right: 3px;

    color: white;
    display: flex;
    width: max-content;
    background: rgb(0 0 0 / 22%);
    padding: 4px 8px;
    border-radius: 50px;
  }

  .card-img-live {
    position: relative;
  }


</style>
