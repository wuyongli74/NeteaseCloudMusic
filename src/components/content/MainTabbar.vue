<template>
  <div class="tab-bar">
    <tabbar>
      <tab-bar-item class="tab-bar-item" path="/find">
        <img slot="item-icon" class="tab-icon" src="~assets/img/tab/find.png" alt=""/>
        <img slot="item-icon-active" class="tab-icon-active" src="~assets/img/tab/find-active.png" alt=""/>
        <div slot="item-text">发现</div>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/podcast">
        <img slot="item-icon" class="tab-icon" src="~assets/img/tab/podcast.png" alt=""/>
        <img slot="item-icon-active" class="tab-icon-active" src="~assets/img/tab/podcast-active.png" alt=""/>
        <div slot="item-text">播客</div>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/profile">
        <img slot="item-icon" class="tab-icon" src="~assets/img/tab/profile.png" alt=""/>
        <img slot="item-icon-active" class="tab-icon-active" src="~assets/img/tab/profile-active.png" alt=""/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/follow">
        <img slot="item-icon" class="tab-icon" src="~assets/img/tab/follow.png" alt=""/>
        <img slot="item-icon-active" class="tab-icon-active" src="~assets/img/tab/follow-active.png" alt=""/>
        <div slot="item-text">关注</div>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/tribe">
        <img slot="item-icon" class="tab-icon" src="~assets/img/tab/tribe.png" alt=""/>
        <img slot="item-icon-active" class="tab-icon-active" src="~assets/img/tab/tribe-active.png" alt=""/>
        <div slot="item-text">云村</div>
      </tab-bar-item>
    </tabbar>
  </div>
</template>

<script>
  import Tabbar from "../common/tabbar/Tabbar";
  import TabBarItem from "../common/tabbar/TabBarItem";

  export default {
    name: "MainTabbar",
    components: {TabBarItem, Tabbar}
  }
</script>

<style scoped>

</style>
