// Save variables

// inputs

const stringInput = document.querySelector('[data-js="string"]');
const stringSpliter = document.querySelector('[data-js="string-spliter"]');
const beforeInput = document.querySelector('[data-js="before"]');
const afterInput = document.querySelector('[data-js="after"]');

// outputs
const output = document.querySelector('[data-js="output"]');

// Function

function split() {
  let text = stringInput.value;
  //   console.log(text);
  let spliter = stringSpliter.value.toLowerCase(); // Umwandlung in Kleinbuchstaben
  //   console.log(spliter);
  let before = beforeInput.checked;
  //   console.log(before);
  let after = afterInput.checked;
  //   console.log(after);

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

  // find spliter

  let stringIndex = text.toLowerCase().indexOf(spliter); // Umwandlung dazu des Haupttexts in Kleinbuchstaben
  //   console.log(stringIndex);

  // Add the option for all lenghts of spliter

  let spliterLength = spliter.length;

  //  split the word with slice if before is true (checked)
  let splitOutput = before
    ? text.slice(stringIndex)
    : text.slice(stringIndex + spliterLength);

  //   console.log(splitOutput);

  // add the beginn of the word to the split

  let restString = before
    ? text.slice(0, stringIndex)
    : text.slice(0, stringIndex + spliterLength);

  //   console.log("restString", restString);

  output.innerHTML = `<p>${restString}</p><br><p>${splitOutput}</p>`;
}

// !ADD multilenguage

// Save variables

// input

const german = document.querySelector('[data-js="german"]');
const english = document.querySelector('[data-js="english"]');
const spanish = document.querySelector('[data-js="spanish"]');

// output

const labelString = document.querySelector('[data-js="label-string"]');
const labelSpliter = document.querySelector('[data-js="label-spliter"]');
const labelBefore = document.querySelector('[data-js="label-before"]');
const labelAfter = document.querySelector('[data-js="label-after"]');
const submit = document.querySelector('[data-js="submit"]');

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
