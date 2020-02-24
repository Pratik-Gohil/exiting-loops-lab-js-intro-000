function breakOut(array, changeValue, stopValue) {
  for (elem in array) {
    if (elem == stopValue) {
      break
    }
    elem = changeValue
    return array
  }
}
