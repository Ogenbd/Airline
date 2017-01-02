<template lang="html">

  <section class="plane">
    <h1 class="title is-1">Our Lovely Planes</h1>
    <plane-list :planes="planes"></plane-list>
  </section>

</template>

<script lang="js">
import PlaneList from './components/plane-list.vue'
export default  {
    name: 'plane',
    props: [],
    created() {
      this.getPlanes();
    },

    mounted() {

    },
    data() {
      return {
        planes: []
      }
    },
    methods: {
      getPlanes() {
        this.$http.get('planeAPI.php')
          .then(res => res.json())
          .then(planes => {
            this.planes = planes;
          })
      }
    },
    computed: {

    },
    components: {
      'plane-list' : PlaneList
    }
}
</script>

<style scoped lang="scss">
  .plane {
    text-align: center;
  }
</style>
