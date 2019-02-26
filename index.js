function produceDrivingRange(blockRange) {
  return function() {
    if (blockRange < 10) {
      return `${Math.abs(blockRange - 10)} blocks out of range`;
    } else {
      return `within range by ${Math.abs(blockRange - 10)}`;
    };
  }
}
