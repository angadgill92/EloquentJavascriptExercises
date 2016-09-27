const secondLastElementOf = (iterable) => {
  /*Takes an iterable and returns it's second last element */

  if(iterable.length === 1) {
    return 'Error : Only One Element in Iterable'
  } else if (iterable.length === 2) {
    return iterable[0]
  } else {
    return secondLastElementOf(iterable.slice(1))
  }
}
