import { createBrotliDecompress } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { resolve, parse } from "path";
import { pipeline } from "stream/promises";
import { absPath } from "../utils/fs.js";

export const decompress = async (workDir, inputDir, destDir) => {
  try {
    const inDirectory = absPath(workDir, inputDir);
    const oldDirectory = absPath(workDir, destDir);
    const pathFileIn = resolve(inDirectory);
    const { name } = parse(pathFileIn);
    const pathFileOut = resolve(oldDirectory, name);
    const uzip = createBrotliDecompress();
    const readerStream = createReadStream(pathFileIn);
    const writerStream = createWriteStream(pathFileOut, { flags: "w+" });
    await pipeline(readerStream, uzip, writerStream);
  } catch (error) {
    return { error: error };
  }
}