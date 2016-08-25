function myMap (iterable, functionToBeApplied) {
  /*Takes an iterable and a  function as arguments, applies the
  function to each element of the iterable and returns a new transformed
  iterable*/

  var returnedIterable = iterable
  // Create a local copy of the iterable to operate on.

  for (var i = 0; i < iterable.length; i++) {
    returnedIterable[i] = functionToBeApplied(returnedIterable[i])
  }
  return returnedIterable
}
