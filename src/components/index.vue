<template>
    <div>
      <!--头部-->
      <v-head id="v-header"></v-head>
      <router-view/>
    </div>
</template>

<script>
  import head from './common/vHeader'
    export default {
        name: "index",
        components: {
          'v-head': head
        },
    }
</script>

<style scoped>

</style>
