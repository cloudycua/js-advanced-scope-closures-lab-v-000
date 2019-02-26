function produceDrivingRange(blockRange) {
  return function(start, finish) {
    distance = Math.abs(start - finish);
    if (blockRange < distance) {
      return `within range by ${Math.abs(blockRange - distance)}`;
    } else {
      return `${Math.abs(blockRange - distance)} blocks out of range`;
    };
  }
}
