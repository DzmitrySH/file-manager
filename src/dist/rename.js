import { rename as renFile } from "fs/promises";
import { absPath } from "../utils/fs.js";

export const rename = async (inputDir, wrongName, wellName) => {
  let incorrectName = absPath(inputDir, wrongName);
  let correctName = absPath(inputDir, wellName);

  try {
    await access(correctName);
    throw Error("FS operation failed");
  } catch (error) {
    if (error.code != "ENOENT") throw error;
  }

  try {
    await renFile(incorrectName, correctName);
  } catch (error) {
    if (error.code == "ENOENT") throw Error("FS operation failed");
    else throw error;
  }
};
