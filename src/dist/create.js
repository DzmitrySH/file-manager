import { writeFile } from "fs/promises";
import { absPath } from "../utils/fs.js";

export const create = async (inputDir, fileName) => {
  try {
    const dirPath = absPath(inputDir, fileName);
    await writeFile(dirPath, "", { flag: "wx" });
  } catch (error) {
    if (error.code == "EEXIST") throw Error("FS operation failed");
    else throw error;
  }
};
