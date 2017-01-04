<template lang="html">
  <section class="flight-create-edit">
    <a class="button" @click="isActive = true">Create New Flight</a>
    <div v-bind:class="{ 'is-active': isActive }" class="modal">
      <div class="modal-background" @click="isActive = false"></div>
      <div class="modal-content box">
        <h2 class="title">Create New Flight</h2>
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">Origin</label>
          </div>
          <div class="control">
            <div class="control is-fullwidth">
              <input class="input" v-model="flightToEdit.origin" type="text" placeholder="City Code">
            </div>
          </div>
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
            <div class="select is-fullwidth">
              <select v-model="flightToEdit.plane_id">
                 <option>1</option>
                  <option>2</option>
                   <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <p class="control">
          <button class="button is-primary" @click="save()">Submit</button>
          <button class="button is-link" @click="isActive = false">Cancel</button>
        </p>
        {{flightToEdit.origin}}
        {{flightToEdit.dest}}
        {{flightToEdit.departure_at}}
        {{flightToEdit.plane_id}}
      </div>
      <button class="modal-close" @click="isActive = false"></button>
    </div>
  </section>
</template>

<script lang="js">
  export default {
    name: 'flight-create-edit',
    props: [],
      data() {
            return {
                flight: {origin: '', dest: '', departure_at: '', plane_id:''},
                dataSaved: false,
                isActive: false,
            }
        },
      computed:{
        flightToEdit() {
                let obj = Object.assign({}, this.flight);
                return obj;
                        }
                },
    methods: {
        save() {
          console.log('Saving', this.flightToEdit);
          if (this.flight.id)  this.$http.put(`flightAPI.php?id=${this.flight.id}`, this.flightToEdit);
          else this.$http.post('flightAPI.php', this.flightToEdit);
      }

    }
  }
</script>

<style scoped lang="scss">
  .flight-create-edit {

  }
</style>