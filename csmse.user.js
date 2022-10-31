// ==UserScript==
// @version     1.0.4
// @name        Comic Sans MS everywhere
// @description Changes font to Comic Sans MS where it's possible.
// @author      Shaehl
// @namespace   https://github.com/Shaehl
// @match       *://*/*
// ==/UserScript==

const csStyle = document.createElement("style")
csStyle.innerHTML = '*{font-family:"Comic Sans MS" !important;}'
document.head.appendChild(csStyle)
