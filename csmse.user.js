// ==UserScript==
// @version     1.0
// @name        Comic Sans MS everywhere
// @description let's fucking go!
// @author      Shaehl
// @namespace   https://github.com/Shaehl
// @match       *://*/*
// ==/UserScript==

const csStyle = document.createElement("style")
csStyle.innerHTML = '*{font-family:"Comic Sans MS" !important;}'
document.body.appendChild(csStyle)