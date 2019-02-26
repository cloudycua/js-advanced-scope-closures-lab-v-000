function produceDrivingRange(blockRange) {
  return function(start, finish) {
    rangeDifference = Math.abs(start - finish) - blockRange;
    if (rangeDifference <) {
      return `within range by ${blockRange - distance}`;
    } else {
      return `${Math.abs(blockRange - distance)} blocks out of range`;
    };
  }
}
