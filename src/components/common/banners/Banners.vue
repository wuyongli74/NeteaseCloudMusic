<template>
  <el-carousel height="150px" :interval="5000" arrow="never">
    <el-carousel-item v-for="(item,index) in banners" :key="index">
      <img class="banners-image" :src="item.imageUrl">
      <div class="banners-title" :style="{background:item.titleColor}">{{item.typeTitle}}</div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "Banners",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-carousel {
    margin: 16px ;
  }

  .banners-image {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  /deep/ .el-carousel__indicator--horizontal {
   padding: 12px 2px;
  }
  /deep/ .el-carousel__indicator--horizontal .el-carousel__button {
    width: 12px;
  }

  .banners-title{
    position: absolute;
    margin-top: -26px;
    right: 0;
    font-size: 12px;
    text-align: center;
    line-height: initial;
    padding: 3px;
    border-top-left-radius: 8px;
    color: white;
    border-bottom-right-radius: 8px;
  }
</style>
