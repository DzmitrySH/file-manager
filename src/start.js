import { createInterface } from "readline";
import { EOL, homedir } from "os";
import command from "./dist/index.js";

const username = getArguments()[0].value;
console.info(`Welcome to the File Manager, ${username}!`);

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let oneDir = homedir();

export const start = () => {
  readline.question("You are currently in " + oneDir + EOL + ">",
    async (input) => {
      if (input === ".exit") {
        process.exit();
      }
      const [cmd, ...args] = input.split(" ");
      if (Object.keys(command).includes(cmd)) {
        const result = await command[cmd](oneDir, ...args);
        if (result?.oneDir) {
          oneDir = result.oneDir;
        }
        if (result?.data) {
          console[result.type || "info"](result.data);
        }
        if (result?.error) {
          console.error("Operation failed");
        }
      } else {
        console.error("Invalid input")
      }
      start();
    }
  );
};

process.on("exit", () => {
  console.info(`Thank you for using File Manager, ${username}!`);
  process.exit();
});