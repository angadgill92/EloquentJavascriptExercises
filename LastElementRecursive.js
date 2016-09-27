const lastElementOf = (iterable) => {
  /*Takes an iterable and returns it's last element */

  if(iterable.toString() === [].toString()) {
    return null
  } else if (iterable.length === 1) {
    return iterable[0]
  } else {
    return lastElementOf(iterable.slice(1))
  }
}
