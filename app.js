import { calcBtnIml } from "./iml.js";
import { applyDiscIml } from "./iml.js";

import { calcBtnAtl } from "./atl.js";
import { applyDiscAtl } from "./atl.js";

import { calcBtnFlo } from "./flo.js";
import { applyDiscFlo } from "./flo.js";

import { calcBtnDes } from "./des.js";
import { applyDiscDes } from "./des.js";

calcBtnIml.onclick = applyDiscIml;
calcBtnAtl.onclick = applyDiscAtl;
calcBtnFlo.onclick = applyDiscFlo;
calcBtnDes.onclick = applyDiscDes;
