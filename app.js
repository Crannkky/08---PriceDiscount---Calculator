import { calcBtnImola } from "./imola.js";
import { applyDiscImola } from "./imola.js";

import { calcBtnAtlas } from "./atlas.js";
import { applyDiscAtlas } from "./atlas.js";

import { calcBtnFlorim } from "./florim.js";
import { applyDiscFlorim } from "./florim.js";

calcBtnImola.onclick = applyDiscImola;
calcBtnAtlas.onclick = applyDiscAtlas;
calcBtnFlorim.onclick = applyDiscFlorim;
