<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('message', (e) => {
      switch (e.data) {
        case 'reload':
          location.reload(true)
          break
        default:
          try {
            const data = JSON.parse(e.data)
            switch (data.type) {
              case 'push':
                this.$router.push(data.path)
                break
            }
          } catch (e) {
            // console.log(e)
          }
      }
    })
  }
}
</script>

<style lang="less">
html, body, #app {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
