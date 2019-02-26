function produceDrivingRange(blockRange) {
  return function(start, finish) {
    distance = Math.abs(parseInt(start) - parseInt(finish));
    if (blockRange > distance) {
      return `within range by ${rangeDifference}`;
    } else {
      return `${rangeDifference} blocks out of range`;
    };
  }
}
