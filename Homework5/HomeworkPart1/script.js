function validatePromptValue(promptTitle) {
  let promptValue = prompt(promptTitle);
  while (!promptValue || promptValue.trim() === "" || !isNaN(promptValue)) {
    alert("Invalid input.");

    promptValue = prompt(promptTitle);
  }

  return promptValue;
}

let animal = {
  name: validatePromptValue("Enter the animal's name:"),
  kind: validatePromptValue("Enter the animal's kind:"),
  speak: function (message) {
    alert(`${this.name} the ${this.kind} says: ${message}.`);
  },
};

let message = validatePromptValue("What should the animal say?");
animal.speak(message);
