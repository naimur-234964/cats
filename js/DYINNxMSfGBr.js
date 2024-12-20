/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /gh/the-lazy-god/tlg-count@1.0.0/tlg-count.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
document.addEventListener("DOMContentLoaded", (function () { const t = document.documentElement, e = [], r = t => parseFloat(t.replace(",", ".").replace(/[^\d.-]/g, "")), a = (t, e, r) => { let [a, o] = t.replace(r, ".").split("."); return a = a.replace(/\B(?=(\d{3})+(?!\d))/g, e), o ? a + r + o : a }, o = (t, e) => { let r = e.toFixed(t.decimals); if (isNaN(t.countDigits)) r = a(r, t.thousandSeparator, t.decimalSeparator); else { r = a(r, t.thousandSeparator, t.decimalSeparator); const e = r.split(t.decimalSeparator); let o = e[0].replace(/,/g, ""); o = o.padStart(t.countDigits, "0"), e[0] = a(o, t.thousandSeparator, "."), r = e.join(t.decimalSeparator) } t.element.innerText !== r && (t.element.innerText = r) }; new MutationObserver((a => { a.forEach((a => { "attributes" === a.type && "style" === a.attributeName && e.forEach((e => { let a = t.style.getPropertyValue(`--tlg--count-${e.index}`).trim() || getComputedStyle(t).getPropertyValue(`--tlg--count-${e.index}`).trim(); if (a) { const t = r(a); o(e, t) } })) })) })).observe(t, { attributes: !0, attributeFilter: ["style"] }), document.querySelectorAll('[tlg-count^="number-"]').forEach(((a, n) => { const l = a.getAttribute("tlg-count-decimals"), i = { element: a, index: a.getAttribute("tlg-count").split("-")[1], decimals: isNaN(parseInt(l)) ? 0 : parseInt(l), thousandSeparator: a.getAttribute("tlg-count-thousand-separator") || "", decimalSeparator: a.getAttribute("tlg-count-decimal-separator") || ".", countDigits: parseInt(a.getAttribute("tlg-count-digits")) }; e.push(i), e.forEach((e => { let a = t.style.getPropertyValue(`--tlg--count-${e.index}`).trim() || getComputedStyle(t).getPropertyValue(`--tlg--count-${e.index}`).trim(); if (a) { const t = r(a); o(e, t) } })) })) }));
//# sourceMappingURL=/sm/2448268b7e8630bf057cc6cc615175dbb90245787bbd110aa800e9d15fdcdf43.map