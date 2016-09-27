const myFilter = (iterable, predicate) => {
  /*Takes an iterable and a predicate as arguments, and filters out the elements
   based on the predicate*/
  if (iterable.length === 0) {
    return []
  } else {
    return (predicate(iterable[0]))
              ? [iterable[0]].concat(myFilter(iterable.slice(1), predicate))
              : myFilter(iterable.slice(1), predicate)
  }
}
console.log (myFilter ([1, 2, 3, 4, 1], a => a % 2 === 0))
