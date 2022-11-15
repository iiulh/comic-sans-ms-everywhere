// ==UserScript==
// @version     1.0.5
// @run-at      document-body
// @noframes
// @name        Comic Sans MS everywhere
// @description Changes font to Comic Sans MS where it's possible.
// @author      Shaehl
// @namespace   https://github.com/Shaehl
// @match       *://*/*
// @grant GM_getValue
// @grant GM_setValue
// ==/UserScript==

let fontFamily = GM_getValue("fontFamily")
if (fontFamily == undefined) {
  fontFamily = '"Comic Sans MS", "Comic Sans", cursive'
  GM_setValue("fontFamily", fontFamily)
  // i wish i knew a shorter way to do this
}

document.head.innerHTML += `\n<style>*{font-family: ${fontFamily} !important;}</style>`
