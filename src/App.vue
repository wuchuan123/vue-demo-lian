<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/xxx">xxx</router-link>
      <router-link to="/upload1">upload1</router-link>
      <br>
      <router-link to="/example">example</router-link>
      <br>
      <router-link to="/example1">example</router-link>
      <br>
      <router-link to="/table">table</router-link>
       <br>
      <router-link to="/table2">table2</router-link>
        <br>
      <router-link to="/slot">slot</router-link>
         <br>
      <router-link to="/parent">parent</router-link>
              <br>
      <router-link to="/tree">tree</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
