<template>
    <div class="dragon">
      <div class="dragon-center" v-for="item in dragons">
        <div class="dragon-item">
          <img :src="item.icon">
        </div>
        <p>{{item.title}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Recommend",
    data() {
      return {
        dragons: [
          {
            id: 0,
            icon: require('assets/img/recommend/recommend.png'),
            title: '每日推荐'
          },
          {
            id: 1,
            icon: require('assets/img/recommend/MF.png'),
            title: '私人MF'
          },
          {
            id: 2,
            icon: require('assets/img/recommend/song-sheet.png'),
            title: '歌单'
          },
          {
            id: 3,
            icon: require('assets/img/recommend/ranking.png'),
            title: '排行榜'
          },
          {
            id: 4,
            icon: require('assets/img/recommend/live.png'),
            title: '直播'
          },
          {
            id: 5,
            icon: require('assets/img/recommend/record.png'),
            title: '数字专辑'
          },
          {
            id: 6,
            icon: require('assets/img/recommend/book.png'),
            title: '有声书'
          },
          {
            id: 7,
            icon: require('assets/img/recommend/attention.png'),
            title: '关注新歌'
          },
          {
            id: 8,
            icon: require('assets/img/recommend/song-room.png'),
            title: '歌房'
          },
          {
            id: 9,
            icon: require('assets/img/recommend/game-zone.png'),
            title: '游戏专区'
          },
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .dragon {
    display: flex;
    overflow: scroll;
    margin-bottom: 16px;
  }

  .dragon-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 16px;
  }

  .dragon-center:last-child {
    margin-right: 16px;
  }

  .dragon-center p {
    padding-top: 8px;
    font-size: 12px;
  }
  .dragon-item {
    padding: 10px;
    height: 52px;
    background: #efdddd;
    border-radius: 50px;

    img {
      width: 30px;
      height: 30px;
    }
  }



</style>
