
import { navbar } from "./module/nav.js";
let header = document.getElementById("header");
header.innerHTML = navbar();

import { footer } from "./module/footer.js";
let footerdisplay = document.getElementById("footerdiv");
footerdisplay.innerHTML = footer();