import { resolve } from "path";
import { absPath } from "../utils/fs.js";
import { unlink } from "fs/promises";
import { copy } from "./copy.js";

export const move = async (workDir, inputDir, destDir) => {
  try {
    const absolutInput = absPath(workDir, inputDir);
    const oldPathRemov = resolve(absolutInput)
    await copy(workDir, inputDir, destDir);
    await unlink(oldPathRemov);
  } catch (error) {
    return { error: error };
  }
};
