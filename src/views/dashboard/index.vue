<template>
  <div class="dashboard-container">
    <span class="dashboard-text">欢迎 {{name}} 访问！</span>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    created() {
      console.log(this.name)
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 20px;
      line-height: 36px;
    }
  }
</style>
