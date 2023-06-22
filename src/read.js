import { createReadStream } from "node:fs";
import { absPath } from "./utils/fs";

export const read = async (inputDir, fileName) => {
  const fullPath = absPath(inputDir, fileName);
  const readStream = createReadStream(fullPath, "utf8");
  await new Promise((res, rej) => {
      readStream.on("open", res);
      readStream.on("error", rej);
  });

  readStream.on("data", (chunk) => {
      process.stdout.write(chunk);
  });
  
  const endStream = new Promise((res, rej) => {
      readStream.on("end", () => res());
  });

  await endStream;
};