const headquartersBlock = 42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - headquartersBlock);
}

function distanceFromHqInFeet(block) {
  const feetPerBlock = 264;
  const blocks = distanceFromHqInBlocks(block);
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(block1, block2) {
  const feetPerBlock = 264;
  const blocksTravelled = Math.abs(block1 - block2);
  return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  const freeFeet = 400;

  if (distance <= freeFeet) {
    return 0;
  } else if (distance > freeFeet && distance <= 2000) {
    return (distance - freeFeet) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};

