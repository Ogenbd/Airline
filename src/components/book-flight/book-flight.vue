<template>
  <section class="book-flight">
    <h1>Book a Flight</h1>

    <div>
          {{msg}}
    </div>
    <label class="label">Origin</label>
    <p>
      <input class="input" type="text" placeholder="Origin Airport" v-model="search.origin">
    </p>
    <label class="label">Destination</label>
    <p>  
      <input class="input" type="text" placeholder="Dest Airport" v-model="search.dest">
    </p>
    <button class="button" @click="searchFlights">Search</button>

    <section v-if="flights.length">
        <h2>Matching Flights</h2>
        <ul>
          <li v-for="flight in flights">
            <h2>{{flight.origin}} -> {{flight.dest}}</h2>
            <h5>{{flight.departure_at}}</h5>
            <h6>Available Seats {{flight.seat_count - flight.passengers_count}}</h6>

            <button @click="selectedFlightId = flight.id">Book It</button>


          </li>
        </ul>
        <section v-if="selectedFlightId">
              <h6>Book this flight for:</h6>
              <select v-model="selectedPassengerId">
                <option v-for="passenger in passengers" :value="passenger.id">{{passenger.name}}</option>
              </select>
              <button @click="bookFlight()">Book</button>
          </section>
    </section>


  </section>
</template>


<script>
  export default {
    data() {
      return {
        search: {origin: 'TLV', dest: ''},
        msg: '',
        flights: [],
        passengers: [],
        selectedPassengerId: null,
        selectedFlightId: null

      }
    },
    methods: {
      searchFlights() {
        this.msg = 'Searching...'
        this.loadFlights();
      },
      loadFlights() {
          this.$http.get(`flightAPI.php`, {params: this.search})
              .then(res => res.json())
              .then(flights => this.flights = flights);
      },
      loadPassengers() {
            this.$http.get('passengerAPI.php')
                .then(res => res.json())
                .then(passengers => this.passengers = passengers);
      },
      bookFlight() {
        this.msg = 'Booking a flight for: ' + this.selectedPassengerId;
         this.$http.post('flightPassengerAPI.php',
            {
              passengerId:  this.selectedPassengerId,
              flightId:     this.selectedFlightId
            })
              .then(res => console.log(res));
              // .then(res => res.json());
              // .then(x => this.msg = 'Booked!');
              

      }
    },
    created() {
      this.loadPassengers();
    }
  }


</script>

<style>
  .book-flight {
    text-align: center;
  }

  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    padding: 5px;
    margin: 10px;
    background-color: cadetblue;
    border-radius: 5px;
    text-align: center;
  }


</style>
