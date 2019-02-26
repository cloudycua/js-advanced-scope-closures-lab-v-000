function produceDrivingRange(blockRange) {
  return function() {
    if (blockRange > 10) {
      return true;
    } else {
      return `${Math.abs(blockRange - 10)} blocks out of range`;
    };
  }
}
