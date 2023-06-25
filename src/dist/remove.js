import { rm as rmFile } from "fs/promises";
import { absPath } from "../utils/fs.js";

export const remove = async (inputDir, fileName) => {
  try {
    const dirPath = absPath(inputDir, fileName);
    await rmFile(dirPath);
  } catch (error) {
    return { error: error };
  }
};
