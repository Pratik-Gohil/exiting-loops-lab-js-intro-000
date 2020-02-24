function breakOut(array, changeValue, stopValue) {
  for (let elem in array) {
    elem = changeValue
    if (elem == stopValue) {
      break
    }
    return array
  }
}
