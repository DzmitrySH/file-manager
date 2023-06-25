import { createReadStream, createWriteStream } from "node:fs";
import { resolve, parse } from "path";
import { pipeline } from "stream/promises";
import { absPath } from "../utils/fs.js";

export const copy = async (workDir, inputDir, destDir) => {
  try {
    const absolutInput = absPath(workDir, inputDir);
    const oldPath = resolve(absolutInput)
    const { base } = parse(absolutInput)
    const newPath = resolve(destDir, base)
    const readStream = createReadStream(oldPath, "utf8");
    const writeStream = createWriteStream(newPath, { flags: "wx" });
    await pipeline(readStream, writeStream);
  } catch (error) {
    return { error: error };
  }
};
