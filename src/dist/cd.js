import { stat } from "fs/promises";
import { absPath } from "../utils/fs.js";
import { error } from "console";

export const cd = async (currDir, newDir) => {
    const path = absPath(currDir, newDir);
    const directory = (await stat(path)).isDirectory();
    return directory ? {currDir: path} : {error: new Error(error)};
};
