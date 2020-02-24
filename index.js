function breakOut(array, changeValue, stopValue) {
  for (let elem in array) {
    if (elem == stopValue) {
      break
    }
    elem = changeValue
  }
}
