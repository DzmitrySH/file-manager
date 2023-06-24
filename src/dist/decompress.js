import { createBrotliDecompress } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { absPath } from "../utils/fs.js";

export const decompress = async (workDir, inputDir, destDir) => {
  try {
    const uzip = createBrotliDecompress();
    const readerStream = createReadStream(await absPath(workDir, inputDir));
    const writerStream = createWriteStream(await absPath(workDir, destDir));

    readerStream.pipe(uzip).pipe(writerStream);
  } catch (error) {
    console.log('Operation failed');
  }


}