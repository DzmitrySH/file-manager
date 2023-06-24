import { join } from "path";

export const up = (currDir) => {
  return { currDir: join(currDir, "..") };
};
