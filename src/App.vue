<template>
  <div id="app">
    <router-view class="router-view" />
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
    },
    created() {
    }
  }
</script>

<style scoped>
  .router-view {
    top: 0px;
    position: sticky;
    overflow: scroll;
  }
</style>

<style>
  html body {
    overflow-y: hidden;
  }
</style>