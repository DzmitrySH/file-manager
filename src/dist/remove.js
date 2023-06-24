import { rm } from "fs/promises";
import { absPath } from "./utils/fs";

export const remove = async (inputDir, fileName) => {
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