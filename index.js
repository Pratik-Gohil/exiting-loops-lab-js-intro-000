function breakOut(array, changeValue, stopValue) {
  array.forEach(elem => {
    if (elem == stopValue) {
      return
    }
    elem = changeValue
  })
}
