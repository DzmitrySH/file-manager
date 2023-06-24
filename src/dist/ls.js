import { readdir, stat } from "fs/promises";
import { join } from "path";

export const ls = async (currentDir) => {
  const dirsList = await readdir(currentDir);
  let data = await Promise.all(dirsList.map(async (item) => {
      const isFile = (await stat(join(currentDir, item))).isFile();
      return {
          type: isFile ? "File" : "Directory",
          name: item,
      };
  }));

  return {data, type: "table"}
};