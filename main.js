// Associative
  console.log("----------------------------------")
  let yankees =
     {"Ruth": "RF", "Gehrig": "1B", "Mantle": "CF", "Jeter": "SS"};
  console.log(yankees["Gehrig"]);
  console.log(yankees.Gehrig);
  for (let yankee in yankees)
     console.log(
        yankee + " => " + yankees[yankee]);

// Objects
console.log("----------------------------------")
  let orioles =
     {RobinsonB: "3B", RobinsonF: "LF", Palmer: "P", Powell: "1B"};
  console.log(orioles.Palmer);
  console.log(orioles["Palmer"]);
  for (let oriole in orioles)
     console.log(
        oriole + " => " + orioles[oriole]);