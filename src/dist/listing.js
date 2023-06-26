import { readdir, stat } from "fs/promises";
import { join } from "path";

export const listing = async (currentDir) => {
  const dirsList = await readdir(currentDir);
  let data = await Promise.all(dirsList.map(async (item) => {
      const isFile = (await stat(join(currentDir, item))).isFile();
      return {
          type: isFile ? "File" : "Directory",
          name: item,
      };
  }));
  data.sort((a, b) => a.type.localeCompare(b.type));
  return {data, type: "table"}
};