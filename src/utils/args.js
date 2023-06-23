export const argumentArgs = () => {
  const args = {};

  for (let i = 0; i < process.argv.length; i++)
      if (process.argv[i].startsWith('--')) {
          let [key, value] = process.argv[i].replace('--', '').split('=');
          args[key] = value;
      }
  return args;
};