export const argumentArgs = () => {
  // const args = {};

  // for (let i = 0; i < process.argv.length; i++)
  //   if (process.argv[i].startsWith('--')) {
  //     let [key, value] = process.argv[i].replace('--', '').split('=');
  //     args[key] = value;
  //   }
  // return args;
  return process.argv.slice(2)
    .filter((arg) => {
      return arg.startsWith('--');
    })
    .map((arg) => {
      const [key, value] = arg.split('=');
      return {key: key.replace('--', ''), value: value};
    });
};