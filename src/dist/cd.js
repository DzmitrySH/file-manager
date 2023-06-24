import { open, constants } from "fs/promises";
import path from "path";

export const cd = async (currDir, newDir) => {
    let dirPathTo;
    if (path.isAbsolute(newDir))
        dirPathTo = newDir;
    else
        dirPathTo = path.normalize(path.join(currDir, newDir));  
    let fileDiscrip = await open(dirPathTo, constants.O_DIRECTORY);
    await fileDiscrip.close()
    return dirPathTo;
};