<template>
  <v-app>
    <template v-if="show">
      <nuxt></nuxt>
    </template>
    <template v-else>
      <div style="height: 100%; display: table">
        <h2
          style="text-align: center; vertical-align: middle; height: 100%; display: table-cell"
        >
          Loading...
        </h2>
      </div>
    </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  }
}
</script>
