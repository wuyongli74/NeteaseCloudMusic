<template>
  <div>
    <nav-bar>
      <div class="nav-bar-left" slot="left">
        <img src="~assets/img/nav/fold.png">
      </div>
      <div slot="center">
        <slot name="center"></slot>
      </div>
      <div class="nav-bar-right" slot="right">
        <slot name="right"></slot>
      </div>
    </nav-bar>
    <div slot="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
  import NavBar from "../common/navbar/NavBar";

  export default {
    name: "MainNavBar",
    components: {NavBar}
  }
</script>

<style scoped>
  .nav-bar {
    position: sticky;
    top: 0;
    background-color: var(--background-color);
    z-index: 9;
  }
</style>
