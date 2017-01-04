<template lang="html">

  <section class="plane">
    <h1 class="title is-1">Our Lovely Planes</h1>
    <div>
      <button class="button is-medium is-primary" @click="registerPlane">Register Plane</button>
      <div id="modal" class="modal" :class="{ 'is-active': showForm }">
        <div class="modal-background" @click="resetModal"></div>
        <div class="box modal-content">
          <h2 class="title"><span v-if="isNew">Register New</span><span v-else>Edit Existing</span> Plane</h2>
          <h4 v-show="isEdit" class="subtitle">{{planeToEdit.id}}</h4>
          <label class="label">Plane Model</label>
          <p class="control">
            <input class="input" type="text" v-model="planeToEdit.model">
          </p>
          <label class="label">Seat Count</label>
          <p class="control">
            <input class="input" type="number" v-model="planeToEdit.seat_count">
          </p>
          <button class="button is-medium is-primary is-pulled-right" @click="save">Save</button>
        </div>
        <button @click="resetModal" class="modal-close"></button>
      </div>
    </div>
    <plane-list :planes="planes" @edit="edit" @deletePlane="deletePlane"></plane-list>
  </section>

</template>

<script lang="js">

import PlaneList from './components/plane-list.vue'

export default  {
    name: 'plane',
    created() {
      this.getPlanes();
    },

    data() {
      return {
        planes: [],
        planeToEdit: {},
        showForm: false,
        isNew: false,
        isEdit: false,
      }
    },
    methods: {
      getPlanes() {
        this.$http.get('planeAPI.php')
          .then(res => res.json())
          .then(planes => {
            this.planes = planes;
          })
      },
      save() {
        console.log('save', this.planeToEdit.id);
        if(this.planeToEdit.id) {
          this.$http.put(`planeAPI.php?id=${this.planeToEdit.id}` , this.planeToEdit)
            .then(this.getPlanes)
        }
        else {
          this.$http.post('planeAPI.php', this.planeToEdit)
            .then(this.getPlanes)
        }
        this.resetModal();
      },

      edit(plane) {
        this.planeToEdit = plane;
        this.isEdit = true;
        this.showForm = true;
        console.log('planeToEdit', this.planeToEdit);
      },

      deletePlane(plane) {
        this.$http.delete(`planeAPI.php?id=${plane.id}`)
          .then(this.getPlanes)
      },

       registerPlane() {
        this.showForm = true;
        this.isNew = true
      },

      resetModal() {
        this.showForm = false;
        this.isEdit = false;
        this.isNew = false;
        this.planeToEdit = {};
      }
    },
    computed: {

    },
    components: {
      'plane-list' : PlaneList,
    }
}
</script>

<style scoped lang="scss">
  .plane {
    text-align: center;
  }
</style>
