<template lang="html">

  <section class="passenger-list">
    <ul>
      <li v-for="passenger in passengers" class="box">
        <p>ID: {{passenger.id}}</p>
        <p>Name: {{passenger.name}}</p>
        <p>
          <button class="button" @click="$emit('edit', passenger)">Edit</button>
          <button class="button is-danger" @click="$emit('deletePassenger', passenger)">X</button>
        </p>
        </li>
    </ul>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'passenger-list',
    props: ['passengers'],
}
</script>

<style scoped lang="scss">
  .passenger-list {

  }
</style>
