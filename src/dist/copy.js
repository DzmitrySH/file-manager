import { createReadStream, createWriteStream, readFile } from "node:fs";
import { absPath } from "../utils/fs.js";

export const copy = async (workDir, inputDir, destDir) => {
  try {
    const absolutInput = await absPath(workDir, inputDir);
    const absolutDest = await absPath(workDir, destDir);
    const readStream = createReadStream(absolutInput, "utf8");
    const writeStream = createWriteStream(absolutDest, { flags: "wx" });
    readStream.on('error', () => {
        console.log("Operation failed");
      })
    writeStream.on("error", () => {
        console.log("Operation failed");
    });
    readStream.pipe(writeStream);
  } catch (error) {
    return { error: error };
  }
};
