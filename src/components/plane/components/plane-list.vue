<template lang="html">

  <section class="plane-list">
    <ul>
      <li v-for="plane in planes" class="box">
        <p>ID: {{plane.id}}
        <p>Model: {{plane.model}}
        <p>Seat Count: {{plane.seat_count}}  
        </li>
    </ul>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'plane-list',
    props: ['planes'],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .plane-list {

  }
</style>
