import { join } from "path";

export const upper = (currDir) => {
  return { currDir: join(currDir, "..") };
};
