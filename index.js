// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(pickupLocation) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);

    if (feetTravelled <= 400) {
        return 0; // Free sample
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25; // Flat rate for distances over 2000 feet but within 2500 feet
    } else {
        return 'cannot travel that far'; // Beyond 2500 feet is not allowed
    }
}