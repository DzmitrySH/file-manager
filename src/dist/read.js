import { createReadStream } from "node:fs";
import { pipeline } from "stream/promises";
import { absPath } from "../utils/fs.js";

export const read = async (inputDir, fileName) => {
  try {
    const fullPath = absPath(inputDir, fileName);
    const readStream = createReadStream(fullPath, "utf8");
    for await (const chunk of readStream) {
      process.stdout.write(chunk);
    }
    readStream.close();
  } catch (error) {
    return { error: error };
  }
};
