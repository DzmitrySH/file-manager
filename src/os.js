import os from "node:os";

export const osInfo = async (args) => {
  switch (args) {
    case "--EOL":
        console.log(JSON.stringify(os.EOL));
      break;
    case "--cpus":
        let info = os.cpus()
        let total = `Total: ${info.length}`;
        info = info.map(core => `Model: ${core.model} Speed: ${Math.round(core.speed / 1000)} GHz`);
        info = [total, ...info].join('\n');
        console.log(info);
      break;
    case "--homedir":
        console.log(os.homedir());
      break;
    case "--username":
        console.log(os.userInfo().username);
      break;
    case "--architecture":
        console.log(os.arch());
      break;
    default:
      console.log('Operation failed');
      break;
  }
}