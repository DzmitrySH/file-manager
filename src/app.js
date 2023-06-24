import { createInterface } from "readline";
import { EOL, homedir } from "os";
import command from "./dist/index.js";
import { argumentArgs } from "./utils/args.js"

const username = argumentArgs()[0].value;
console.info(`Welcome to the File Manager, ${username ? username : "user"}!`);

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currDir = homedir();

const start = () => {
  readline.question("You are currently in " + currDir + EOL + ">",
    async (input) => {
      if (input === ".exit") {
        process.exit();
      }
      const [cmd, ...args] = input.split(" ");
      if (Object.keys(command).includes(cmd)) {
        const result = await command[cmd](currDir, ...args);
        if (result?.currDir) {
          currDir = result.currDir;
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

start();

process.on("exit", () => {
  console.info(`Thank you for using File Manager, ${username ? username : "user"}!`);
  process.exit();
});