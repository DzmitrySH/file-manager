import { rm } from "fs/promises";
import { absPath } from "../utils/fs.js";

export const remove = async (inputDir, fileName) => {
  const dirPath = absPath(inputDir, fileName);
  try {
    await rm(dirPath);
  } catch (error) {
    return { error: error };
  }
};
