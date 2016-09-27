const myMap = (iterable, functionToBeApplied) => {
  /*Takes an iterable and a  function as arguments, applies the
  function to each element of the iterable and returns a new transformed
  iterable*/
  if (iterable.length === 0) {
    return []
  } else {
    return [functionToBeApplied(iterable[0])]
    .concat(myMap (iterable.slice(1), functionToBeApplied))
  }
}

let b = myMap([], a =>  2 * a)
console.log(b)
