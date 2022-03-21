// Code your solution in this file!
// The headquarters are located at 42st
const hqLocation = 42;
// In NY City a block is 264 feet long
const blockLong = 264;

// returns distance in blocks from Headquarters to pick up location
function distanceFromHqInBlocks(blocks) {
    return Math.abs(hqLocation - blocks);
}

// Returns distance in feet from HQ to pick up location
function distanceFromHqInFeet(blocks) {
    const blocksFromHq = distanceFromHqInBlocks(blocks);
    return (blocksFromHq * blockLong);
}

// Calculates distance in feet between start and destination of a trip
function distanceTravelledInFeet(start, destination) {
    const blocksTraveled = Math.abs(start - destination);
    return blocksTraveled * blockLong;
}

// Calculates the fare price applying certain conditions:
// There is a number of feet free of charge and up to a maximum. After the maximum, there is a fixed fare.
// There is also a limit in the number of feet allowed to travel
function calculatesFarePrice(start, destination) {
    // Charge per feet traveled
    const pricePerFeet = 0.02;

    // No charge for specified number of feet
    const feetFreeOfCharge = 400;

    // After certain number of feet there is a fixed fare
    const extraAfter = 2000;
    const fixedFare = 25;

    // Limit of feet traveled
    const feetLimit = 2500;

    const distanceTraveled = distanceTravelledInFeet(start, destination);
    if (distanceTraveled > feetLimit)
        return "cannot travel that far";

    let fare = 0;
    if (distanceTraveled > feetFreeOfCharge) {
        fare = (distanceTraveled - feetFreeOfCharge) * pricePerFeet;
        if (distanceTraveled > extraAfter)
            fare = fixedFare;
    }

    return fare;
}
