function breakOut(array, changeValue, stopValue) {
  array.forEach(elem => {
    if (elem == stopValue) {
      break
    }
    elem = changeValue
  })
}