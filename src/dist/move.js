import { createReadStream, createWriteStream } from "node:fs";
import { absPath } from "./utils/fs";
import { stat, rm } from "fs/promises";
import path from "path";

export const move = async (workDir, inputDir, destDir) => {
  const absolutInput = absPath(workDir, inputDir);
  let absolutDest = absPath(workDir, destDir);

  let pathStat = await stat(absolutDest);
  if (!pathStat.isDirectory())
      throw new Error();
      absolutDest = path.join(absolutDest, path.basename(src));

  const readStream = createReadStream(absolutInput, "utf8");
  await new Promise((res, rej) => {
      readStream.on("open", res);
      readStream.on("error", rej);
  });

  const writeStream = createWriteStream(absolutDest, { flags: "wx" });
  await new Promise((res, rej) => {
      writeStream.on("open", res);
      writeStream.on("error", rej);
  });

  readStream.on("data", (chunk) => {
      writeStream.write(chunk);
  });

  await new Promise((res, rej) => {
      readStream.on("end", () => {
          writeStream.destroy();
          res();
      });
  });
  
  const dirPath = absPath(inputDir, fileName);
  try {
      await rm(dirPath);
  } catch (error) {
      if (error.code == "EEXIST")
          throw Error("FS operation failed");
      else
          throw error;
  }
};