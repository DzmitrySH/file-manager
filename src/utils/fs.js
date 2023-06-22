import {isAbsolute, join} from 'path';

export const absPath = (inputDir, fileName) => {
    return isAbsolute(fileName) ? fileName : join(inputDir, fileName);
};