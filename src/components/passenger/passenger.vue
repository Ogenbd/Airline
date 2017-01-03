<template lang="html">

  <section class="passenger">
    <h1 class="title is-1">Our Lovely Passengers</h1>
    <div>
      <button class="button is-medium is-primary" @click="registerPassenger">Register Passenger</button>
      <div id="modal" class="modal" :class="{ 'is-active': showForm }">
        <div class="modal-background" @click="resetModal"></div>
        <div class="box modal-content">
          <h2 class="title"><span v-if="isNew">Register New</span><span v-else>Edit Existing</span> Passenger</h2>
          <h4 v-show="isEdit" class="subtitle">{{passengerToEdit.id}}</h4>
          <label class="label">Passenger Name</label>
          <p class="control">
            <input class="input" type="text" v-model="passengerToEdit.name">
          </p>
          <button class="button is-medium is-primary is-pulled-right" @click="save">Save</button>
        </div>
        <button @click="resetModal" class="modal-close"></button>
      </div>
    </div>
    <passenger-list :passengers="passengers" @edit="edit" @deletePassenger="deletePassenger"></passenger-list>
  </section>

</template>

<script lang="js">
  import PassengerList from './components/passenger-list.vue'

export default  {
    name: 'passenger',
    created() {
      this.getPassengers();
    },

    data() {
      return {
        passengers: [],
        passengerToEdit: {},
        showForm: false,
        isNew: false,
        isEdit: false,
      }
    },
    methods: {
      getPassengers() {
        this.$http.get('passengerAPI.php')
          .then(res => res.json())
          .then(passengers => {
            this.passengers = passengers;
          })
      },
      save() {
        console.log('save', this.passengerToEdit.id);
        if(this.passengerToEdit.id) {
          this.$http.put(`passengerAPI.php?id=${this.passengerToEdit.id}` , this.passengerToEdit)
            .then(this.getPassengers)
        }
        else {
          this.$http.post('passengerAPI.php', this.passengerToEdit)
            .then(this.getPassengers)
        }
        this.resetModal();
      },

      edit(passenger) {
        this.passengerToEdit = passenger;
        this.isEdit = true;
        this.showForm = true;
        console.log('passengerToEdit', this.passengerToEdit);
      },

      deletePassenger(passenger) {
        this.$http.delete(`passengerAPI.php?id=${passenger.id}`)
          .then(this.getPassengers)
      },

       registerPassenger() {
        this.showForm = true;
        this.isNew = true
      },

      resetModal() {
        this.showForm = false;
        this.isEdit = false;
        this.isNew = false;
        this.passengerToEdit = {};
      }
    },
    computed: {

    },
    components: {
      'passenger-list' : PassengerList,
    }
}
</script>

<style scoped lang="scss">
  .passenger {
    text-align: center;
  }
</style>