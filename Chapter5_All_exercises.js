/*		Flattening
 Use the reduce method to flatten an array of
 arrays i.e. convert it into a single array of elements*/

var arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
]
console.log(arrays.reduce(function (first, second) {
  return first.concat(second)
}))

/*  Mother-Child Age Difference
	Using the given data set in the chapter,
	compute the average age difference between
	mothers and children

	*/

function average (array) {
  function plus (a, b) {
    return a + b
  }
  return array.reduce(plus) / array.length
}

var byName = {}
ancestry.forEach(function (person) {
  byName[person.name] = person
})

var ageDifference = ancestry.filter(
  /* array to store the age differences between mother
     and child */
  function (person) {
    return (byName[person.mother] != null)
  /* filters out entries where mothers are listed
   but have no entries of their own */
  }
).map(function (person) {
  /* on the filtered array, calculate the age difference
     		between mother and child */
  return (person.born - byName[person.mother].born)
})

console.log(average(ageDifference))

// average lifespan -- incomplete

function average (array) {
  function plus (a, b) {
    return a + b
  }
  return array.reduce(plus) / array.length
}

ancestry.forEach(function (person) {
  return person.century = Math.ceil(person.died / 100)
})

// Every and then Some

/* recursive solution without using map and reduce [uncomment to use]

function every(array, test) {
    if (array.length == 1) {	// when the array has only one element (base case)
        return test(array[0])
    } else {					// recursive stmt, performs logical AND
    							//of the test on the first element with the result of the test on the rest of the array
        return test(array[0]) && every(array.slice(1), test)
    }
}

function some(array, test) {
    if (array.length == 1) {
        return test(array[0])
    } else {
        return test(array[0]) || every(array.slice(1), test)
    }
} */

function every (array, test) {
  return array.map(test).reduce(function (a, b) {
    return a && b
  })
}

function some (array, test) {
  return array.map(test).reduce(function (a, b) {
    return a || b
  })
}

console.log(every([NaN, NaN, NaN], isNaN))
// → true
console.log(every([NaN, NaN, 4], isNaN))
// → false
console.log(some([NaN, 3, 4], isNaN))
// → true
console.log(some([2, 3, 4], isNaN))
// → false
