function takeANumber (line, name){
  // add the new user into the array that they pass in
 // returns the new lenght of the array
  // return a string that welcomes the new user
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`;
}

function nowServing (line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  if (line.length === 0) {
    return 'The line is currently empty.';
  } else {
    var lineMessage = 'The line is currently: ';
    // loop through my line
    line.forEach( function (person, index) {
      // look at each person's place in line and add that value to a string
      lineMessage += `${index + 1}. ${person}, `;
    });
    return lineMessage.slice(0, -2);
    // finish the loop, return the string
  }
}
