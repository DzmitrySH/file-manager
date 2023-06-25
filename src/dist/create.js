import { open } from "fs/promises";
import { absPath } from "../utils/fs.js";

export const create = async (inputDir, fileName) => {
  try {
    const dirPath = absPath(inputDir, fileName);
    const stream = (await open(dirPath, "w+")).createWriteStream();
    stream.close();
  } catch (error) {
    return { error: error };
  }
};
