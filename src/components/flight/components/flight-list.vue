<template lang="html">

  <section class="flight-list">
    
  </section>

</template>

<script lang="js">
  export default  {
    name: 'flight-list',
    props: ['flights'],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
      deleteReq(flightId) {
               this.$emit('deleteReq', flightId)
               console.log("sending delete", flightId);
           }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .flight-list {
    text-align: center;

  }
  .box {
    max-width: 500px;
    margin: 0 auto;
  }

  .caps {
    text-transform: uppercase;
    font-size: 30px;
  }

  .flex {
    display: flex;
  }
</style>
