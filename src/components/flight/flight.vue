<template lang="html">

  <section class="flight">
    <h1 class="title is-1">Flight List</h1>
    <a class="button is-primary" @click="editMode = true">Create New Flight</a>
    <a class="button is-link" v-if="editMode" @click="editMode = false">Cancel</a>
    <div v-if="editMode" class="form box">
      <div class="control is-horizontal">
        <label class="label" for="email">Origin</label>
          <p :class="{ 'control': true }">
            <input v-validate data-vv-rules="required|email" data-vv-delay="1000" v-model="flightToEdit.origin" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
          </p>
      </div>  
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Destination</label>
          </div>
          <div class="control">
            <div class="control is-fullwidth">
              <input class="input" v-model="flightToEdit.dest" type="text" placeholder="City Code">
            </div>
          </div>
        </div>
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Departure Time</label>
          </div>
          <div class="control">
            <div class="control is-fullwidth">
              <input class="input" v-model="flightToEdit.departure_at" type="datetime-local" placeholder="Text input">
            </div>
          </div>
        </div>
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Plane</label>
          </div>
          <div class="control">
            <div class="select">
              <select v-model="flightToEdit.plane_id">
                 <option>1</option>
                  <option>2</option>
                   <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <p class="control">
          <button class="button is-primary" @click="saveFlight">Submit</button>
          <button class="button is-link">Cancel</button>
        </p>
      </div>
    <ul>
      <div v-for="flight in flights" class="card">
        <div class="card-content">
         <div class="content">
        <div>
        <p>ID: {{flight.id}}</p>
        </div>
          <div class="flex">
            <div>
              <p class="caps">{{flight.origin}}</p>
            </div>
            <div>
              <span class="icon is-large">
                <i class="fa fa-fighter-jet" aria-hidden="true"></i>
              </span>
            </div>
            <div>
              <p class="caps">{{flight.dest}} </p>
            </div>
          </div>
         </div>
        </div>
          <footer class="card-footer">
              <a class="card-footer-item" @click="saveFlight(flight.id)">Update</a>
              <a class="card-footer-item" @click="deleteReq(flight.id)">Delete</a>
          </footer>
    </div>
  </section>

</template>

<script lang="js">


export default  {
    name: 'flight',
    props: [],
    created() {
      this.getFlights();
    },

    mounted() {

    },
    data() {
      return {
        flights: [],
        flight: {origin: '', dest: '', departure_at: '', plane_id:''},
        editMode: false,
      }
    },
    methods: {
      getFlights() {
        this.$http.get('flightAPI.php')
          .then(res => res.json())
          .then(flights => {
            this.flights = flights;
          })
      },
      deleteFlight(flightId) {
        console.log('Deleting Flight: ',flightId);
                    // this.cars = this.cars.filter(car => car.id !== deleteReq.carId);
                    this.$http.delete(`flightAPI.php?id=${flightId}`);
      },
       deleteReq(flightId) {
               this.$emit('deleteReq', flightId)
               console.log("sending delete", flightId);
        },
        saveFlight() {
          console.log('Saving', this.flightToEdit);
          if (this.flight.id)  this.$http.put(`flightAPI.php?id=${this.flight.id}`, this.flightToEdit);
          else this.$http.post('flightAPI.php', this.flightToEdit);
          this.getFlights();
          this.editMode = false;
      }
    },
    computed: {
        flightToEdit() {
                let obj = Object.assign({}, this.flight);
                return obj;
                        }
    },
    components: {
    }
}
</script>

<style scoped lang="scss">
  .flight {
    text-align: center;
  }
    .flight-list {
    text-align: center;

  }
  .card {
    max-width: 500px;
    margin: 5px auto;
  }

  .caps {
    text-transform: uppercase;
    font-size: 30px;
  }

  .flex {
    display: flex;
  }
  .form {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
