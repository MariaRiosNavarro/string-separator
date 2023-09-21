// #Save variables

// inputs

const stringInput = document.querySelector('[data-js="string"]');
const stringSpliter = document.querySelector('[data-js="string-spliter"]');
const beforeInput = document.querySelector('[data-js="before"]');
const afterInput = document.querySelector('[data-js="after"]');

// *OTHER OPTION: we can extract the input of before and after together with her name like:
// *const radioInput = document.querySelector('input[name = "radio"]')

// form

const form = document.querySelector('[data-js="form"]');

// outputs
const output = document.querySelector('[data-js="output"]');

// !ADD multilenguage

// Save variables language variables

// input language variables

const german = document.querySelector('[data-js="german"]');
const english = document.querySelector('[data-js="english"]');
const spanish = document.querySelector('[data-js="spanish"]');

// output language variables

const labelString = document.querySelector('[data-js="label-string"]');
const labelSpliter = document.querySelector('[data-js="label-spliter"]');
const labelBefore = document.querySelector('[data-js="label-before"]');
const labelAfter = document.querySelector('[data-js="label-after"]');
const submit = document.querySelector('[data-js="submit"]');

// !End language variables

// #MAINFunction

function split() {
  let text = stringInput.value;
  //   console.log(text);
  let spliter = stringSpliter.value;
  let spliterLowCase = spliter.toLowerCase(); // Conversion to lower case so that the search for the second string is not case sensitive in case the user makes a mistake.
  let before = beforeInput.checked;
  //   console.log(before);
  let after = afterInput.checked;
  //   console.log(after);

  // *OTHER OPTION to radio:(see oben)->
  // * let radioValueChecked = radioInput:checked.value

  // Add check if form is empty - Add for other languages:
  let germanTrue = german.checked;
  let englishTrue = english.checked;
  let spanishTrue = spanish.checked;

  if (text === "" || spliter === "" || (before === false && after === false)) {
    switch (true) {
      case germanTrue:
        return (output.innerHTML = `<p style="background-color: red; text-align: center;" >Bitte füllen Sie alle Felder aus!</p>`);
        break;
      case englishTrue:
        return (output.innerHTML = `<p style="background-color: red; text-align: center;" >Please fill in all fields!</p>`);
        break;
      case spanishTrue:
        return (output.innerHTML = `<p style="background-color: red; text-align: center;" >Por favor, rellene todos los campos.</p>`);
        break;
      default:
        return (output.innerHTML = `<p style="background-color: red; text-align: center;" >Bitte füllen Sie alle Felder aus!</p>`);
        break;
    }
  }

  // * Add the option if the Word is NOT in the text with if :

  let textLoweCase = text.toLowerCase(); // Conversion to lower case so that both have the same type (see the case of spliter). The output will have the same type as the one given. The conversion is only for the search

  if (textLoweCase.includes(spliterLowCase)) {
    //  Find the index of the spliter

    let stringIndex = textLoweCase.indexOf(spliterLowCase);

    // Get the length of the spliter

    let spliterLength = spliter.length;

    //  Split the text at the index of the spliter: with slice if before is true (checked)
    let splitOutput = before
      ? text.slice(stringIndex)
      : text.slice(stringIndex + spliterLength);

    //   console.log(splitOutput);

    // add the beginn of the word to the split: Get the rest of the text before the spliter

    let restString = before
      ? text.slice(0, stringIndex)
      : text.slice(0, stringIndex + spliterLength);

    //   console.log("restString", restString);
    // Output the split text

    output.innerHTML = `<p>${restString}</p><br><p>${splitOutput}</p>`;
  } else {
    //  Display an error message if the spliter is not present
    switch (true) {
      case germanTrue:
        return (output.innerHTML = `<p style="background-color: red; text-align: center;" >Bitte geben sie ein Satzt oder Buchstabe die in der Satzt vorkommt</p>`);
        break;
      case englishTrue:
        return (output.innerHTML = `<p style="background-color: red; text-align: center;" >Please enter a sentence or letter that occurs in the sentence</p>`);
        break;
      case spanishTrue:
        return (output.innerHTML = `<p style="background-color: red; text-align: center;" >Introduzca una frase o una letra que aparezca en la frase</p>`);
        break;
      default:
        return (output.innerHTML = `<p style="background-color: red; text-align: center;" >Bitte geben sie ein Satzt oder Buchstabe die in der Satzt vorkommt</p>`);
        break;
    }
  }
  //Clear the input fields
  clearInputsOnFocus();
}

// #Empty the inputs if they have the focus inside

function clearInputsOnFocus() {
  const inputs = [stringInput, stringSpliter];

  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      input.value = ""; // Set the value of the input field to empty when the focus is set on it
    });
  });
}

// #Language Function

function changeLanguage() {
  let germanTrue = german.checked;
  let englishTrue = english.checked;
  let spanishTrue = spanish.checked;

  switch (true) {
    case englishTrue:
      labelString.innerHTML = "String to be separated";
      labelSpliter.innerHTML = "Separate from what?";
      labelBefore.innerHTML = "before";
      labelAfter.innerHTML = "after";
      submit.value = "split";
      break;
    case spanishTrue:
      labelString.innerHTML = "Frase a separar";
      labelSpliter.innerHTML = "¿Separarse de qué?";
      labelBefore.innerHTML = "antes";
      labelAfter.innerHTML = "despues";
      submit.value = "separar";
      break;
    case germanTrue:
      labelString.innerHTML = "Zu trennende Zeichenkette";
      labelSpliter.innerHTML = "Woran trennen?";
      labelBefore.innerHTML = "Davor";
      labelAfter.innerHTML = "Dannach";
      submit.value = "klick mich";
      break;
    default:
      germanTrue;
      break;
  }
}
