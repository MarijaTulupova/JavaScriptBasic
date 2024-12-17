function tellStory(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "string") {
      return `Enter valid input.`;
    }
  }

  let name = array[0];
  let mood = array[1];
  let activity = array[2];

  return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
}

console.log(tellStory(["Marija", "happy", "dancing"]));
console.log(tellStory(["Marija", 2, "dancing"]));
