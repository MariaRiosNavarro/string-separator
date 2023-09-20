// Save variables

// inputs

const stringInput = document.querySelector('[data-js="string"]');
const stringSpliter = document.querySelector('[data-js="string-spliter"]');
const beforeInput = document.querySelector('[data-js="davor"]');
const afterInput = document.querySelector('[data-js="dannach"]');

// outputs
const output = document.querySelector('[data-js="output"]');

// Function

function split() {
  // Save Values
  let text = stringInput.value;
  //   console.log(text);
  let spliter = stringSpliter.value;
  //   console.log(spliter);
  let before = beforeInput.checked;
  //   console.log(before);
  let after = afterInput.checked;
  //   console.log(after);

  // find spliter

  let stringIndex = text.indexOf(spliter);
  //   console.log(stringIndex);

  //  split the word with slice if before is true (checked)

  let splitOutput = before
    ? text.slice(stringIndex)
    : text.slice(stringIndex + 1);

  //   console.log(splitOutput);

  // add the beginn of the word to the split

  let restString = before
    ? text.slice(0, stringIndex)
    : text.slice(0, stringIndex + 1);

  //   console.log("restString", restString);

  output.innerHTML = `<p>${restString}</p><br><p>${splitOutput}</p>`;

  //   empty the input at the begin

  text.innerHTML = " ";
  spliter.innerHTML = " ";
}
