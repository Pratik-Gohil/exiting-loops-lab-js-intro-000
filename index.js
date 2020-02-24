function breakOut(array, changeValue, stopValue) {
  let i = 0
  while (i < array.length+1) {
    array[i] = changeValue
    if (array[i] == stopValue) {
      break
    }
    i++
    return array
  }
}
