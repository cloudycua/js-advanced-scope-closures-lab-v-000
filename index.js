function produceDrivingRange(blockRange) {
  return function(start, finish) {
    distance = Math.abs(parseInt(start) - parseInt(finish));
    if (blockRange > distance) {
      return `within range by ${blockRange - distance}`;
    } else {
      return `${distance - blockRange} blocks out of range`;
    };
  }
}
