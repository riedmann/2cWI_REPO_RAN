import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {   
    readline.question("", (userRes) => {
      resolve(userRes);
      readline.close();
    });
  });
};


console.log("Gib dein Alter ein:");
const inputOfUser = await readLineAsync();

console.log("Dein Alter ist:" + inputOfUser);
