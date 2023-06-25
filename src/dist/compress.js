import { createBrotliCompress } from 'node:zlib';
import { createReadStream, createWriteStream } from "node:fs";
import { absPath } from "../utils/fs.js";

export const compress = async (workDir, inputDir, destDir) => {
  try {
    const gzip = createBrotliCompress();
    const readerStream = createReadStream(await absPath(workDir, inputDir));
    const writerStream = createWriteStream(await absPath(workDir, destDir));
    readerStream.pipe(gzip).pipe(writerStream);
  } catch (error) {
      return { error: error };
  }
}