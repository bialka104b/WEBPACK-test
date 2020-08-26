const { message, messageDOM } = require("./tools/mess.js");
import title from "./data/title.txt"; //import do działania loadera
//import "./css/style.css";//style css
import "./scss/index.scss"; //style w sass
import "./component/footer.js";
import addImage from "./tools/image.js";
import CreatorDefaultClass from "./tools/create";

message("działam po bundlingu");
message(title);
messageDOM("działam po bundlingu w przeglądarce");
messageDOM(title); //wywołanie loadera
//aby wywołanie zadziałało trzeba dać komendę npm install --save-dev raw-loader

addImage("h1");

const c1 = new CreatorDefaultClass();
c1.addBg_color("red");
const c2 = new CreatorDefaultClass();
c2.addBg_color("blue");
const c3 = new CreatorDefaultClass();
c3.addBg_color();
c3.showColor();
