import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { absPath } from "./utils/fs.js";

export const hash = async (inputDir, fileName) => {
  try {
    const filePath = absPath(inputDir, fileName);
    const file = await readFile(filePath);
    const hash = createHash("sha256").update(file).digest("hex");
    return hash;
  } catch (error) {
    console.log('Operation failed');
  }
};