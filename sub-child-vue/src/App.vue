<template>
  <div id="vue">
    <div id="nav">
      <router-link to="/">Test</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
      <p>11</p>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
  #vue {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>