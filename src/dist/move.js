import { createReadStream, createWriteStream } from "node:fs";
import { absPath } from "../utils/fs.js";
import { rm } from "fs/promises";

export const move = async (workDir, inputDir, destDir) => {
  try {
    const absolutInput = await absPath(workDir, inputDir);
    const absolutDest = await absPath(workDir, destDir);
    const readStream = createReadStream(absolutInput, "utf8");
    const writeStream = createWriteStream(absolutDest, { flags: "wx" });
    readStream.on("error", () => {
      console.log("Operation failed");
    });
    writeStream.on("error", () => {
      console.log("Operation failed");
    });
    try {
      readStream.pipe(writeStream).on("close", async () => {
        await rm(absolutInput);
      });
    } catch (error) {
      return { error: error };
    }
  } catch (error) {
    return { error: error };
  }
};
