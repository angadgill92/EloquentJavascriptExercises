/* simple for loop to print the following pattern
  #
  ##
  ###
  ####
  #####
  ######
  #######
  */

  for (var outputStr = '';          // start with an empty string
           outputStr != '#######';  // if string is not equal to '#######', continue; else break loop
           outputStr += '#')        // append a # to the end of the string
           console.log(outputStr);  // print the current value of the string
