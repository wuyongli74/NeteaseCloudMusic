<template>
  <div class="title-bar-item">
    <div class="title-text">
      <slot name="icon-ref"></slot>
      <slot name="tags"></slot>
      <slot name="main-title"></slot>
    </div>
    <slot name="more"></slot>
  </div>
</template>

<script>
  export default {
    name: "TitleBarItem"
  }
</script>

<style scoped>

  .title-bar-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-text {
    display: flex;
  }

  .more {
    border: 1px solid #e4e4e4;
    padding: 5px 10px;
    font-size: 12px;
    display: flex;
    text-align: center;
    border-radius: 50px;
    align-items: center;
  }

  .title {
    padding: 0 8px;
    border-right: 2px solid var(--color-text);
  }

  .titles h4 {
    padding: 0 8px;
    border-right: 2px solid #333;
  }

  .title:nth-of-type(1) {
    margin-left: -8px;
  }

  .title:last-child {
    border: none;
  }
</style>
