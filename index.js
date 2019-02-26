function produceDrivingRange(blockRange) {
  return function(start, finish) {
    rangeDifference = Math.abs(start - finish) - blockRange;
    if (rangeDifference < 0) {
      return `within range by ${rangeDifference}`;
    } else {
      return `${rangeDifference} blocks out of range`;
    };
  }
}
