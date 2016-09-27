const myFilter = (iterable, test) => {
  /*Takes an iterable and a  function as arguments, applies the
  function to each element of the iterable and returns a new transformed
  iterable*/
  if (iterable.length === 0) {
    return []
  } else {
    return (test(iterable[0])) ? [iterable[0]].concat(myFilter(iterable.slice(1), test)) : myFilter(iterable.slice(1), test)
  }
}
console.log (myFilter ([1, 2, 3, 4, 1], a => a !== 1))
