function produceDrivingRange(blockRange) {
  return function() {
    if (blockRange < 10) {
      return `within range by ${Math.abs(blockRange - 10)}`;
    } else {
      return `${Math.abs(blockRange - 10)} blocks out of range`;
    };
  }
}
