<template>
  <div class="nav-bar">
    <slot name="top">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    align-items: center;
    line-height: 44px;
    text-align: center;
  }

  .left, .right {
    width: 60px;
  }

  .left img, .right img {
    width: 36px;
  }

  .center {
    flex: 1;
  }

  .nav-bar-left, .nav-bar-right {
    display: flex;
    justify-content: center;
  }

</style>
