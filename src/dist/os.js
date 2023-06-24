import os from "node:os";

export const osInfo = (_, args) => {
  switch (args) {
    case "--EOL":
      return { data: JSON.stringify(os.EOL) };
    case "--cpus":
      return {
        data: os.cpus().map((cpu) => ({
          core: cpu.model,
          speed: cpu.speed / 1000 + " Ghz",
        })),
        type: "table",
      };
    case "--homedir":
      return { data: os.homedir() };
    case "--username":
      return { data: os.userInfo().username };
    case "--architecture":
      return { data: os.arch() };
    default:
      return { error: "Invalid input" };
  }
}

export default { osInfo, }