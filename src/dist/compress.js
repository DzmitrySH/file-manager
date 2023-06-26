import { createBrotliCompress } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { resolve, parse } from "path";
import { pipeline } from "stream/promises";
import { absPath } from "../utils/fs.js";

export const compress = async (workDir, inputDir, destDir) => {
  try {
    const inDirectory = absPath(workDir, inputDir);
    const oldDirectory = absPath(workDir, destDir);
    const pathFileIn = resolve(inDirectory);
    const { base } = parse(pathFileIn);
    const fileName = `${base}.br`;
    const pathFileOut = resolve(oldDirectory, fileName);
    const gzip = createBrotliCompress();
    const readerStream = createReadStream(pathFileIn, "utf8");
    const writerStream = createWriteStream(pathFileOut, { flags: "wx" });
    await pipeline(readerStream, gzip, writerStream);
  } catch (error) {
      return { error: error };
  }
}