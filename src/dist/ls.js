import { readdir } from "fs/promises";

export const ls = async (currentDir) => {
  let entries = await readdir(currentDir, { withFileTypes: true });
  let dirsList = [];
  let filesList = [];

  for (let entry of entries)
    if (entry.isFile())
      filesList.push({"Name": entry[""], "Type": "file"});
    else if (entry.isDirectory())
      dirsList.push({"Name": entry[""], "Type": "directory"});
  const compareTo = (a, b) => a.Name.localeCompare(b.Name);
  return dirsList.sort(compareTo).concat(filesList.sort(compareTo));
};