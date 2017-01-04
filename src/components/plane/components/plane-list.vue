<template lang="html">

  <section class="plane-list">
    <ul>
      <li v-for="plane in planes" class="box">
        <p>ID: {{plane.id}}</p>
        <p>Model: {{plane.model}}</p>
        <p>Seat Count: {{plane.seat_count}}</p>  
        <p>
          <button class="button" @click="$emit('edit', plane)">Edit</button>
          <button class="button is-danger" @click="$emit('deletePlane', plane)">X</button>
        </p>
      </li>
    </ul>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'plane-list',
    props: ['planes'],
}
</script>

<style scoped lang="scss">
  .plane-list {

  }
</style>
