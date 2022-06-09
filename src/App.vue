<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <button @click="changeMode">{{ btnText }}</button>
  <router-view/>
</template>

<script setup>
import { ref, computed } from 'vue'
import initTheme from '@/theme'

const check = ref(false)

const btnText = computed(() => {
  return check.value  ? '深色模式' : '浅色模式'
})

const changeMode = function() {
  check.value = !check.value
  initTheme(check.value ? 'ligth' : 'dark')
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
