<template>
  <section class="main">
    <div
      v-for="i in 4"
      class="qwe"
      @click="tmp"
    >
      {{ i }}
    </div>
  </section>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    tmp () {
      console.log('123')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
