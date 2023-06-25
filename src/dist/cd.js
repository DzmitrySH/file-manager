import { stat } from "fs/promises";
import { absPath } from "../utils/fs.js";

export const cd = async (currDir, newDir) => {
    try {
        const path = absPath(currDir, newDir);
        const directory = (await stat(path)).isDirectory();
        if (directory)
           return {currDir: path}
    } catch (error) {
       return {error: error}
    }
};
