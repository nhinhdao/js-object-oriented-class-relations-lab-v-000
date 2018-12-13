let store = { drivers: [], passengers: [], trips: [] }


let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers(){
    const passengers = []
    this.trips().forEach(function(trip) {
      passengers.push(trip.passenger())
    })
    return passengers;
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers(){
    const drivers = []
    this.trips().forEach(function(trip) {
      drivers.push(trip.driver())
    })
    return drivers;
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if (driver && passenger) {
      this.driverId = driver.id;
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }

  driver(){
    return store.drivers.find(dr => dr.id === this.driverId)
  }

  passenger(){
    return store.passengers.find(ps => ps.id === this.passengerId)
  }
}


// let driver = new Driver("Alfie");
// let passenger = new Passenger("Bob");
// let firstTrip = new Trip(driver, passenger);
// let secondPassenger = new Passenger("Susan");
// let secondTrip = new Trip(driver, secondPassenger);
