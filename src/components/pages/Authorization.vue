<template>
    <div class="authorization page">
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
    </div>
</template>

<script>
    import Login from '../Login'
    export default {
        name: "Authorization",
        components: {
          Login
        },
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
        }
}
</script>

<style scoped>

</style>