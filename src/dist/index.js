import { up } from "./up.js";
import { cd } from "./cd.js";
import { compress } from "./compress.js";
import { copy as cp} from "./copy.js";
import { move as mv} from "./move.js";
import { create as add } from "./create.js";
import { decompress } from "./decompress.js";
import { hash } from "./hash.js";
import { ls } from "./ls.js";
import { osInfo as os } from "./os.js";
import { read as cat } from "./read.js";
import { remove as rm } from "./remove.js";
import { rename as rn } from "./rename.js";

export default {
  up,
  cd,
  ls,
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
  os,
  hash,
  compress,
  decompress,
}