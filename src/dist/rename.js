import { rename as renFile } from "fs/promises";
import { resolve, parse } from "path";
import { absPath } from "../utils/fs.js";

export const rename = async (inputDir, oldName, wellName) => {
  try {
    const correctName = absPath(inputDir, oldName);
    const oldCorrectName = resolve(correctName)
    const { dir } = parse(oldCorrectName)
    const newName = resolve(dir, wellName)
    await renFile(correctName, newName);
  } catch (error) {
    return { error: error };
  }
};
