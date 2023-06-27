
function addRowLockOnFlights(flightId) {
    return `Select * from Flights WHERE Flights.id =  ${flightId} FOR UPDATE;`; // FOR UPDATE is for putting row - lock 
}

module.exports = {
    addRowLockOnFlights
}