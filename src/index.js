import _ from "lodash";
import nav from "./nav";
import homeContent from "./home";
const content = document.getElementById("content");
content.appendChild(nav().navBar);
content.appendChild(homeContent().contentContainer);
