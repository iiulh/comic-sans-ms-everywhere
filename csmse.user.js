// ==UserScript==
// @version     1.0.1
// @name        Comic Sans MS everywhere
// @description let's fucking go!
// @author      Shaehl
// @namespace   https://github.com/Shaehl
// @match       *://*/*
// ==/UserScript==

const csStyle = document.createElement("style")
csStyle.innerHTML = 'body{font-family:"Comic Sans MS";}'
document.head.appendChild(csStyle)
