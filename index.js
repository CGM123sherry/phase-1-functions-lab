

const headquarters = 42;

// calculates the number of blocks from Scuber's headquarters
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - headquarters);
}

//calculates the number of feet from Scuber's headquarters
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue);
  return blocks * 264;
}

// calculates the number of feet travelled given a starting and ending block
function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * 264;
}

// calculates the fare price given a starting and ending block
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare for distances over 2000 feet but under 2500 feet
  } else {
    return 'cannot travel that far'; // Distance over 2500 feet
  }
}

