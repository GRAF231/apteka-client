<template>
  <div id="app">
    <div class="tab-buttons-container">
      <button class="tab-button"
              v-for="tab in tabs"
              v-bind:key="tab.componentName"
              v-bind:class="['tab-button', { active: currentTab === tab.componentName }]"
              v-on:click="currentTab = tab.componentName"
      >
        {{ tab.title }}
      </button>
    </div>
    <component v-bind:is="currentTabComponent" class="tab"></component>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: [
          
  ],
  data: function() {
    return {
      currentTab: "Login",
      tabs: [
        {
          componentName: "Login",
          title: "Авторизация"
        },
        {
          componentName: "Register",
          title: "Регистрация"
        }
      ]
    }
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab.toLowerCase();
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
