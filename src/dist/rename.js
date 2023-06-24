import { access, rename as renFile } from "fs/promises";
import { absPath } from "../utils/fs.js";

export const rename = async (inputDir, wrongName, wellName) => {
  let incorrectName = absPath(inputDir, wrongName);
  let correctName = absPath(inputDir, wellName);

  try {
    await access(correctName);
  } catch (error) {
  }

  try {
    await renFile(incorrectName, correctName);
  } catch (error) {
  }
};
