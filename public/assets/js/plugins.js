  /*------------------------------------*\
                   Plugins - Table of contents
              \*------------------------------------*/
  /*
 - Scroll Spy
 - Bootstrap
 - Menu on scroll
 - anime.js
 - Jarallax
 - AOS
 - Swiper Slider
*/


  /* AOS (Animate on Scroll) JQuery Plugin */
  ! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t() }(this, function() {
      return function(e) {
          function t(o) { if (n[o]) return n[o].exports; var i = n[o] = { exports: {}, id: o, loaded: !1 }; return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports }
          var n = {};
          return t.m = e, t.c = n, t.p = "dist/", t(0)
      }([function(e, t, n) {
          "use strict";

          function o(e) { return e && e.__esModule ? e : { default: e } }
          var i = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e },
              r = n(1),
              a = (o(r), n(6)),
              u = o(a),
              c = n(7),
              f = o(c),
              s = n(8),
              d = o(s),
              l = n(9),
              p = o(l),
              m = n(10),
              b = o(m),
              v = n(11),
              y = o(v),
              g = n(14),
              h = o(g),
              w = [],
              k = !1,
              x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
              j = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w },
              O = function() { w = (0, h.default)(), j() },
              _ = function() { w.forEach(function(e, t) { e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay") }) },
              S = function(e) { return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0 },
              z = function(e) {
                  x = i(x, e), w = (0, h.default)();
                  var t = document.all && !window.atob;
                  return S(x.disable) || t ? _() : (document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() { j(!0) }) : document.addEventListener(x.startEvent, function() { j(!0) }), window.addEventListener("resize", (0, f.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                      (0, b.default)(w, x.once)
                  }, x.throttleDelay)), x.disableMutationObserver || (0, d.default)("[data-aos]", O), w)
              };
          e.exports = { init: z, refresh: j, refreshHard: O }
      }, function(e, t) {}, , , , , function(e, t) {
          (function(t) {
              "use strict";

              function n(e, t, n) {
                  function o(t) {
                      var n = b,
                          o = v;
                      return b = v = void 0, k = t, g = e.apply(o, n)
                  }

                  function r(e) { return k = e, h = setTimeout(s, t), _ ? o(e) : g }

                  function a(e) {
                      var n = e - w,
                          o = e - k,
                          i = t - n;
                      return S ? j(i, y - o) : i
                  }

                  function c(e) {
                      var n = e - w,
                          o = e - k;
                      return void 0 === w || n >= t || n < 0 || S && o >= y
                  }

                  function s() { var e = O(); return c(e) ? d(e) : void(h = setTimeout(s, a(e))) }

                  function d(e) { return h = void 0, z && b ? o(e) : (b = v = void 0, g) }

                  function l() { void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0 }

                  function p() { return void 0 === h ? g : d(O()) }

                  function m() {
                      var e = O(),
                          n = c(e);
                      if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (S) return h = setTimeout(s, t), o(w) }
                      return void 0 === h && (h = setTimeout(s, t)), g
                  }
                  var b, v, y, g, h, w, k = 0,
                      _ = !1,
                      S = !1,
                      z = !0;
                  if ("function" != typeof e) throw new TypeError(f);
                  return t = u(t) || 0, i(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
              }

              function o(e, t, o) {
                  var r = !0,
                      a = !0;
                  if ("function" != typeof e) throw new TypeError(f);
                  return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, { leading: r, maxWait: t, trailing: a })
              }

              function i(e) { var t = "undefined" == typeof e ? "undefined" : c(e); return !!e && ("object" == t || "function" == t) }

              function r(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e)) }

              function a(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d }

              function u(e) {
                  if ("number" == typeof e) return e;
                  if (a(e)) return s;
                  if (i(e)) {
                      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                      e = i(t) ? t + "" : t
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(l, "");
                  var n = m.test(e);
                  return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
              }
              var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                  f = "Expected a function",
                  s = NaN,
                  d = "[object Symbol]",
                  l = /^\s+|\s+$/g,
                  p = /^[-+]0x[0-9a-f]+$/i,
                  m = /^0b[01]+$/i,
                  b = /^0o[0-7]+$/i,
                  v = parseInt,
                  y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                  g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                  h = y || g || Function("return this")(),
                  w = Object.prototype,
                  k = w.toString,
                  x = Math.max,
                  j = Math.min,
                  O = function() { return h.Date.now() };
              e.exports = o
          }).call(t, function() { return this }())
      }, function(e, t) {
          (function(t) {
              "use strict";

              function n(e, t, n) {
                  function i(t) {
                      var n = b,
                          o = v;
                      return b = v = void 0, O = t, g = e.apply(o, n)
                  }

                  function r(e) { return O = e, h = setTimeout(s, t), _ ? i(e) : g }

                  function u(e) {
                      var n = e - w,
                          o = e - O,
                          i = t - n;
                      return S ? x(i, y - o) : i
                  }

                  function f(e) {
                      var n = e - w,
                          o = e - O;
                      return void 0 === w || n >= t || n < 0 || S && o >= y
                  }

                  function s() { var e = j(); return f(e) ? d(e) : void(h = setTimeout(s, u(e))) }

                  function d(e) { return h = void 0, z && b ? i(e) : (b = v = void 0, g) }

                  function l() { void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0 }

                  function p() { return void 0 === h ? g : d(j()) }

                  function m() {
                      var e = j(),
                          n = f(e);
                      if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (S) return h = setTimeout(s, t), i(w) }
                      return void 0 === h && (h = setTimeout(s, t)), g
                  }
                  var b, v, y, g, h, w, O = 0,
                      _ = !1,
                      S = !1,
                      z = !0;
                  if ("function" != typeof e) throw new TypeError(c);
                  return t = a(t) || 0, o(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
              }

              function o(e) { var t = "undefined" == typeof e ? "undefined" : u(e); return !!e && ("object" == t || "function" == t) }

              function i(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e)) }

              function r(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s }

              function a(e) {
                  if ("number" == typeof e) return e;
                  if (r(e)) return f;
                  if (o(e)) {
                      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                      e = o(t) ? t + "" : t
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(d, "");
                  var n = p.test(e);
                  return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
              }
              var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                  c = "Expected a function",
                  f = NaN,
                  s = "[object Symbol]",
                  d = /^\s+|\s+$/g,
                  l = /^[-+]0x[0-9a-f]+$/i,
                  p = /^0b[01]+$/i,
                  m = /^0o[0-7]+$/i,
                  b = parseInt,
                  v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                  y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                  g = v || y || Function("return this")(),
                  h = Object.prototype,
                  w = h.toString,
                  k = Math.max,
                  x = Math.min,
                  j = function() { return g.Date.now() };
              e.exports = n
          }).call(t, function() { return this }())
      }, function(e, t) {
          "use strict";

          function n(e, t) {
              var n = window.document,
                  r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                  a = new r(o);
              i = t, a.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })
          }

          function o(e) {
              e && e.forEach(function(e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                      n = Array.prototype.slice.call(e.removedNodes),
                      o = t.concat(n).filter(function(e) { return e.hasAttribute && e.hasAttribute("data-aos") }).length;
                  o && i()
              })
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = function() {};
          t.default = n
      }, function(e, t) {
          "use strict";

          function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

          function o() { return navigator.userAgent || navigator.vendor || window.opera || "" }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = function() {
                  function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                          var o = t[n];
                          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                      }
                  }
                  return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
              }(),
              r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              f = function() {
                  function e() { n(this, e) }
                  return i(e, [{ key: "phone", value: function() { var e = o(); return !(!r.test(e) && !a.test(e.substr(0, 4))) } }, { key: "mobile", value: function() { var e = o(); return !(!u.test(e) && !c.test(e.substr(0, 4))) } }, { key: "tablet", value: function() { return this.mobile() && !this.phone() } }]), e
              }();
          t.default = new f
      }, function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function(e, t, n) {
                  var o = e.node.getAttribute("data-aos-once");
                  t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
              },
              o = function(e, t) {
                  var o = window.pageYOffset,
                      i = window.innerHeight;
                  e.forEach(function(e, r) { n(e, i + o, t) })
              };
          t.default = o
      }, function(e, t, n) {
          "use strict";

          function o(e) { return e && e.__esModule ? e : { default: e } }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = n(12),
              r = o(i),
              a = function(e, t) { return e.forEach(function(e, n) { e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset) }), e };
          t.default = a
      }, function(e, t, n) {
          "use strict";

          function o(e) { return e && e.__esModule ? e : { default: e } }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = n(13),
              r = o(i),
              a = function(e, t) {
                  var n = 0,
                      o = 0,
                      i = window.innerHeight,
                      a = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") };
                  switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                      case "top-bottom":
                          break;
                      case "center-bottom":
                          n += e.offsetHeight / 2;
                          break;
                      case "bottom-bottom":
                          n += e.offsetHeight;
                          break;
                      case "top-center":
                          n += i / 2;
                          break;
                      case "bottom-center":
                          n += i / 2 + e.offsetHeight;
                          break;
                      case "center-center":
                          n += i / 2 + e.offsetHeight / 2;
                          break;
                      case "top-top":
                          n += i;
                          break;
                      case "bottom-top":
                          n += e.offsetHeight + i;
                          break;
                      case "center-top":
                          n += e.offsetHeight / 2 + i
                  }
                  return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
              };
          t.default = a
      }, function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function(e) { for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent; return { top: n, left: t } };
          t.default = n
      }, function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function(e) { return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) { return { node: e } }) };
          t.default = n
      }])
  });

  /*!
   * Bootstrap v3.3.5 (http://getbootstrap.com)
   * Copyright 2011-2016 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */

  /*!
   * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=1f5002a626ae1905a5600ea651f6fe97)
   * Config saved to config.json and https://gist.github.com/1f5002a626ae1905a5600ea651f6fe97
   */
  if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) { "use strict"; var s = t.fn.jquery.split(" ")[0].split("."); if (s[0] < 2 && s[1] < 9 || 1 == s[0] && 9 == s[1] && s[2] < 1 || s[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3") }(jQuery), + function(t) {
      "use strict";

      function s(e, i) { this.$body = t(document.body), this.$scrollElement = t(t(e).is(document.body) ? window : e), this.options = t.extend({}, s.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

      function e(e) {
          return this.each(function() {
              var i = t(this),
                  o = i.data("bs.scrollspy"),
                  r = "object" == typeof e && e;
              o || i.data("bs.scrollspy", o = new s(this, r)), "string" == typeof e && o[e]()
          })
      }
      s.VERSION = "3.3.6", s.DEFAULTS = { offset: 10 }, s.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, s.prototype.refresh = function() {
          var s = this,
              e = "offset",
              i = 0;
          this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
              var s = t(this),
                  o = s.data("target") || s.attr("href"),
                  r = /^#./.test(o) && t(o);
              return r && r.length && r.is(":visible") && [
                  [r[e]().top + i, o]
              ] || null
          }).sort(function(t, s) { return t[0] - s[0] }).each(function() { s.offsets.push(this[0]), s.targets.push(this[1]) })
      }, s.prototype.process = function() {
          var t, s = this.$scrollElement.scrollTop() + this.options.offset,
              e = this.getScrollHeight(),
              i = this.options.offset + e - this.$scrollElement.height(),
              o = this.offsets,
              r = this.targets,
              l = this.activeTarget;
          if (this.scrollHeight != e && this.refresh(), s >= i) return l != (t = r[r.length - 1]) && this.activate(t);
          if (l && s < o[0]) return this.activeTarget = null, this.clear();
          for (t = o.length; t--;) l != r[t] && s >= o[t] && (void 0 === o[t + 1] || s < o[t + 1]) && this.activate(r[t])
      }, s.prototype.activate = function(s) {
          this.activeTarget = s, this.clear();
          var e = this.selector + '[data-target="' + s + '"],' + this.selector + '[href="' + s + '"]',
              i = t(e).parents("li").addClass("active");
          i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
      }, s.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
      var i = t.fn.scrollspy;
      t.fn.scrollspy = e, t.fn.scrollspy.Constructor = s, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = i, this }, t(window).on("load.bs.scrollspy.data-api", function() {
          t('[data-spy="scroll"]').each(function() {
              var s = t(this);
              e.call(s, s.data())
          })
      })
  }(jQuery);

  /*!
   * Bootstrap v5.0.2 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */

  ! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e() }(this, (function() {
      "use strict";
      const t = {
              find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
              findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
              children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
              parents(t, e) { const i = []; let n = t.parentNode; for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode; return i },
              prev(t, e) {
                  let i = t.previousElementSibling;
                  for (; i;) {
                      if (i.matches(e)) return [i];
                      i = i.previousElementSibling
                  }
                  return []
              },
              next(t, e) {
                  let i = t.nextElementSibling;
                  for (; i;) {
                      if (i.matches(e)) return [i];
                      i = i.nextElementSibling
                  }
                  return []
              }
          },
          e = t => { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t },
          i = t => {
              let e = t.getAttribute("data-bs-target");
              if (!e || "#" === e) {
                  let i = t.getAttribute("href");
                  if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                  i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), e = i && "#" !== i ? i.trim() : null
              }
              return e
          },
          n = t => { const e = i(t); return e && document.querySelector(e) ? e : null },
          s = t => { const e = i(t); return e ? document.querySelector(e) : null },
          o = t => { t.dispatchEvent(new Event("transitionend")) },
          r = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
          a = e => r(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? t.findOne(e) : null,
          l = (t, e, i) => {
              Object.keys(i).forEach(n => {
                  const s = i[n],
                      o = e[n],
                      a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
                  var l;
                  if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
              })
          },
          c = t => !(!r(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"),
          h = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
          d = t => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? d(t.parentNode) : null },
          u = () => {},
          f = t => t.offsetHeight,
          p = () => { const { jQuery: t } = window; return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null },
          m = [],
          g = () => "rtl" === document.documentElement.dir,
          _ = t => {
              var e;
              e = () => {
                  const e = p();
                  if (e) {
                      const i = t.NAME,
                          n = e.fn[i];
                      e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                  }
              }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", () => { m.forEach(t => t()) }), m.push(e)) : e()
          },
          b = t => { "function" == typeof t && t() },
          v = (t, e, i = !0) => {
              if (!i) return void b(t);
              const n = (t => {
                  if (!t) return 0;
                  let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
                  const n = Number.parseFloat(e),
                      s = Number.parseFloat(i);
                  return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
              })(e) + 5;
              let s = !1;
              const r = ({ target: i }) => { i === e && (s = !0, e.removeEventListener("transitionend", r), b(t)) };
              e.addEventListener("transitionend", r), setTimeout(() => { s || o(e) }, n)
          },
          y = (t, e, i, n) => { let s = t.indexOf(e); if (-1 === s) return t[!i && n ? t.length - 1 : 0]; const o = t.length; return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))] },
          w = /[^.]*(?=\..*)\.|.*/,
          E = /\..*/,
          A = /::\d+$/,
          T = {};
      let O = 1;
      const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
          k = /^(mouseenter|mouseleave)/i,
          L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

      function x(t, e) { return e && `${e}::${O++}` || t.uidEvent || O++ }

      function D(t) { const e = x(t); return t.uidEvent = e, T[e] = T[e] || {}, T[e] }

      function S(t, e, i = null) { const n = Object.keys(t); for (let s = 0, o = n.length; s < o; s++) { const o = t[n[s]]; if (o.originalHandler === e && o.delegationSelector === i) return o } return null }

      function I(t, e, i) {
          const n = "string" == typeof e,
              s = n ? i : e;
          let o = M(t);
          return L.has(o) || (o = t), [n, s, o]
      }

      function N(t, e, i, n, s) {
          if ("string" != typeof e || !t) return;
          if (i || (i = n, n = null), k.test(e)) {
              const t = t => function(e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e) };
              n ? n = t(n) : i = t(i)
          }
          const [o, r, a] = I(e, i, n), l = D(t), c = l[a] || (l[a] = {}), h = S(c, r, o ? i : null);
          if (h) return void(h.oneOff = h.oneOff && s);
          const d = x(r, e.replace(w, "")),
              u = o ? function(t, e, i) {
                  return function n(s) {
                      const o = t.querySelectorAll(e);
                      for (let { target: r } = s; r && r !== this; r = r.parentNode)
                          for (let a = o.length; a--;)
                              if (o[a] === r) return s.delegateTarget = r, n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s]);
                      return null
                  }
              }(t, i, n) : function(t, e) { return function i(n) { return n.delegateTarget = t, i.oneOff && P.off(t, n.type, e), e.apply(t, [n]) } }(t, i);
          u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
      }

      function j(t, e, i, n, s) {
          const o = S(e[i], n, s);
          o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
      }

      function M(t) { return t = t.replace(E, ""), C[t] || t }
      const P = {
              on(t, e, i, n) { N(t, e, i, n, !1) },
              one(t, e, i, n) { N(t, e, i, n, !0) },
              off(t, e, i, n) {
                  if ("string" != typeof e || !t) return;
                  const [s, o, r] = I(e, i, n), a = r !== e, l = D(t), c = e.startsWith(".");
                  if (void 0 !== o) { if (!l || !l[r]) return; return void j(t, l, r, o, s ? i : null) }
                  c && Object.keys(l).forEach(i => {
                      ! function(t, e, i, n) {
                          const s = e[i] || {};
                          Object.keys(s).forEach(o => {
                              if (o.includes(n)) {
                                  const n = s[o];
                                  j(t, e, i, n.originalHandler, n.delegationSelector)
                              }
                          })
                      }(t, l, i, e.slice(1))
                  });
                  const h = l[r] || {};
                  Object.keys(h).forEach(i => {
                      const n = i.replace(A, "");
                      if (!a || e.includes(n)) {
                          const e = h[i];
                          j(t, l, r, e.originalHandler, e.delegationSelector)
                      }
                  })
              },
              trigger(t, e, i) {
                  if ("string" != typeof e || !t) return null;
                  const n = p(),
                      s = M(e),
                      o = e !== s,
                      r = L.has(s);
                  let a, l = !0,
                      c = !0,
                      h = !1,
                      d = null;
                  return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, { bubbles: l, cancelable: !0 }), void 0 !== i && Object.keys(i).forEach(t => { Object.defineProperty(d, t, { get: () => i[t] }) }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d
              }
          },
          H = new Map;
      var R = {set(t, e, i) {
              H.has(t) || H.set(t, new Map);
              const n = H.get(t);
              n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
          },
          get: (t, e) => H.has(t) && H.get(t).get(e) || null,
          remove(t, e) {
              if (!H.has(t)) return;
              const i = H.get(t);
              i.delete(e), 0 === i.size && H.delete(t)
          }
      };
      class B {
          constructor(t) {
              (t = a(t)) && (this._element = t, R.set(this._element, this.constructor.DATA_KEY, this))
          }
          dispose() { R.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(t => { this[t] = null }) }
          _queueCallback(t, e, i = !0) { v(t, e, i) }
          static getInstance(t) { return R.get(t, this.DATA_KEY) }
          static getOrCreateInstance(t, e = {}) { return this.getInstance(t) || new this(t, "object" == typeof e ? e : null) }
          static get VERSION() { return "5.0.2" }
          static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!') }
          static get DATA_KEY() { return "bs." + this.NAME }
          static get EVENT_KEY() { return "." + this.DATA_KEY }
      }
      class W extends B {
          static get NAME() { return "alert" }
          close(t) {
              const e = t ? this._getRootElement(t) : this._element,
                  i = this._triggerCloseEvent(e);
              null === i || i.defaultPrevented || this._removeElement(e)
          }
          _getRootElement(t) { return s(t) || t.closest(".alert") }
          _triggerCloseEvent(t) { return P.trigger(t, "close.bs.alert") }
          _removeElement(t) {
              t.classList.remove("show");
              const e = t.classList.contains("fade");
              this._queueCallback(() => this._destroyElement(t), t, e)
          }
          _destroyElement(t) { t.remove(), P.trigger(t, "closed.bs.alert") }
          static jQueryInterface(t) { return this.each((function() { const e = W.getOrCreateInstance(this); "close" === t && e[t](this) })) }
          static handleDismiss(t) { return function(e) { e && e.preventDefault(), t.close(this) } }
      }
      P.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', W.handleDismiss(new W)), _(W);
      class q extends B {
          static get NAME() { return "button" }
          toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) }
          static jQueryInterface(t) { return this.each((function() { const e = q.getOrCreateInstance(this); "toggle" === t && e[t]() })) }
      }

      function z(t) { return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t) }

      function $(t) { return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase()) }
      P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
          t.preventDefault();
          const e = t.target.closest('[data-bs-toggle="button"]');
          q.getOrCreateInstance(e).toggle()
      }), _(q);
      const U = {
              setDataAttribute(t, e, i) { t.setAttribute("data-bs-" + $(e), i) },
              removeDataAttribute(t, e) { t.removeAttribute("data-bs-" + $(e)) },
              getDataAttributes(t) {
                  if (!t) return {};
                  const e = {};
                  return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
                      let n = i.replace(/^bs/, "");
                      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = z(t.dataset[i])
                  }), e
              },
              getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + $(e))),
              offset(t) { const e = t.getBoundingClientRect(); return { top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft } },
              position: t => ({ top: t.offsetTop, left: t.offsetLeft })
          },
          F = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
          V = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
          K = "next",
          X = "prev",
          Y = "left",
          Q = "right",
          G = { ArrowLeft: Q, ArrowRight: Y };
      class Z extends B {
          constructor(e, i) { super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(i), this._indicatorsElement = t.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners() }
          static get Default() { return F }
          static get NAME() { return "carousel" }
          next() { this._slide(K) }
          nextWhenVisible() {!document.hidden && c(this._element) && this.next() }
          prev() { this._slide(X) }
          pause(e) { e || (this._isPaused = !0), t.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }
          cycle(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }
          to(e) {
              this._activeElement = t.findOne(".active.carousel-item", this._element);
              const i = this._getItemIndex(this._activeElement);
              if (e > this._items.length - 1 || e < 0) return;
              if (this._isSliding) return void P.one(this._element, "slid.bs.carousel", () => this.to(e));
              if (i === e) return this.pause(), void this.cycle();
              const n = e > i ? K : X;
              this._slide(n, this._items[e])
          }
          _getConfig(t) { return t = {...F, ...U.getDataAttributes(this._element), ... "object" == typeof t ? t : {} }, l("carousel", t, V), t }
          _handleSwipe() {
              const t = Math.abs(this.touchDeltaX);
              if (t <= 40) return;
              const e = t / this.touchDeltaX;
              this.touchDeltaX = 0, e && this._slide(e > 0 ? Q : Y)
          }
          _addEventListeners() { this._config.keyboard && P.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), P.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners() }
          _addTouchEventListeners() {
              const e = t => {!this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX },
                  i = t => { this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX },
                  n = t => {!this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval)) };
              t.find(".carousel-item img", this._element).forEach(t => { P.on(t, "dragstart.bs.carousel", t => t.preventDefault()) }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", t => e(t)), P.on(this._element, "pointerup.bs.carousel", t => n(t)), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", t => e(t)), P.on(this._element, "touchmove.bs.carousel", t => i(t)), P.on(this._element, "touchend.bs.carousel", t => n(t)))
          }
          _keydown(t) {
              if (/input|textarea/i.test(t.target.tagName)) return;
              const e = G[t.key];
              e && (t.preventDefault(), this._slide(e))
          }
          _getItemIndex(e) { return this._items = e && e.parentNode ? t.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e) }
          _getItemByOrder(t, e) { const i = t === K; return y(this._items, e, i, this._config.wrap) }
          _triggerSlideEvent(e, i) {
              const n = this._getItemIndex(e),
                  s = this._getItemIndex(t.findOne(".active.carousel-item", this._element));
              return P.trigger(this._element, "slide.bs.carousel", { relatedTarget: e, direction: i, from: s, to: n })
          }
          _setActiveIndicatorElement(e) {
              if (this._indicatorsElement) {
                  const i = t.findOne(".active", this._indicatorsElement);
                  i.classList.remove("active"), i.removeAttribute("aria-current");
                  const n = t.find("[data-bs-target]", this._indicatorsElement);
                  for (let t = 0; t < n.length; t++)
                      if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) { n[t].classList.add("active"), n[t].setAttribute("aria-current", "true"); break }
              }
          }
          _updateInterval() {
              const e = this._activeElement || t.findOne(".active.carousel-item", this._element);
              if (!e) return;
              const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
              i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval
          }
          _slide(e, i) {
              const n = this._directionToOrder(e),
                  s = t.findOne(".active.carousel-item", this._element),
                  o = this._getItemIndex(s),
                  r = i || this._getItemByOrder(n, s),
                  a = this._getItemIndex(r),
                  l = Boolean(this._interval),
                  c = n === K,
                  h = c ? "carousel-item-start" : "carousel-item-end",
                  d = c ? "carousel-item-next" : "carousel-item-prev",
                  u = this._orderToDirection(n);
              if (r && r.classList.contains("active")) return void(this._isSliding = !1);
              if (this._isSliding) return;
              if (this._triggerSlideEvent(r, u).defaultPrevented) return;
              if (!s || !r) return;
              this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;
              const p = () => { P.trigger(this._element, "slid.bs.carousel", { relatedTarget: r, direction: u, from: o, to: a }) };
              if (this._element.classList.contains("slide")) {
                  r.classList.add(d), f(r), s.classList.add(h), r.classList.add(h);
                  const t = () => { r.classList.remove(h, d), r.classList.add("active"), s.classList.remove("active", d, h), this._isSliding = !1, setTimeout(p, 0) };
                  this._queueCallback(t, s, !0)
              } else s.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, p();
              l && this.cycle()
          }
          _directionToOrder(t) { return [Q, Y].includes(t) ? g() ? t === Y ? X : K : t === Y ? K : X : t }
          _orderToDirection(t) { return [K, X].includes(t) ? g() ? t === X ? Y : Q : t === X ? Q : Y : t }
          static carouselInterface(t, e) {
              const i = Z.getOrCreateInstance(t, e);
              let { _config: n } = i;
              "object" == typeof e && (n = {...n, ...e });
              const s = "string" == typeof e ? e : n.slide;
              if ("number" == typeof e) i.to(e);
              else if ("string" == typeof s) {
                  if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                  i[s]()
              } else n.interval && n.ride && (i.pause(), i.cycle())
          }
          static jQueryInterface(t) { return this.each((function() { Z.carouselInterface(this, t) })) }
          static dataApiClickHandler(t) {
              const e = s(this);
              if (!e || !e.classList.contains("carousel")) return;
              const i = {...U.getDataAttributes(e), ...U.getDataAttributes(this) },
                  n = this.getAttribute("data-bs-slide-to");
              n && (i.interval = !1), Z.carouselInterface(e, i), n && Z.getInstance(e).to(n), t.preventDefault()
          }
      }
      P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", () => { const e = t.find('[data-bs-ride="carousel"]'); for (let t = 0, i = e.length; t < i; t++) Z.carouselInterface(e[t], Z.getInstance(e[t])) }), _(Z);
      const J = { toggle: !0, parent: "" },
          tt = { toggle: "boolean", parent: "(string|element)" };
      class et extends B {
          constructor(e, i) {
              super(e), this._isTransitioning = !1, this._config = this._getConfig(i), this._triggerArray = t.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
              const s = t.find('[data-bs-toggle="collapse"]');
              for (let e = 0, i = s.length; e < i; e++) {
                  const i = s[e],
                      o = n(i),
                      r = t.find(o).filter(t => t === this._element);
                  null !== o && r.length && (this._selector = o, this._triggerArray.push(i))
              }
              this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
          }
          static get Default() { return J }
          static get NAME() { return "collapse" }
          toggle() { this._element.classList.contains("show") ? this.hide() : this.show() }
          show() {
              if (this._isTransitioning || this._element.classList.contains("show")) return;
              let e, i;
              this._parent && (e = t.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === e.length && (e = null));
              const n = t.findOne(this._selector);
              if (e) { const t = e.find(t => n !== t); if (i = t ? et.getInstance(t) : null, i && i._isTransitioning) return }
              if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
              e && e.forEach(t => { n !== t && et.collapseInterface(t, "hide"), i || R.set(t, "bs.collapse", null) });
              const s = this._getDimension();
              this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach(t => { t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0) }), this.setTransitioning(!0);
              const o = "scroll" + (s[0].toUpperCase() + s.slice(1));
              this._queueCallback(() => { this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[s] = "", this.setTransitioning(!1), P.trigger(this._element, "shown.bs.collapse") }, this._element, !0), this._element.style[s] = this._element[o] + "px"
          }
          hide() {
              if (this._isTransitioning || !this._element.classList.contains("show")) return;
              if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
              const t = this._getDimension();
              this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
              const e = this._triggerArray.length;
              if (e > 0)
                  for (let t = 0; t < e; t++) {
                      const e = this._triggerArray[t],
                          i = s(e);
                      i && !i.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1))
                  }
              this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(() => { this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), P.trigger(this._element, "hidden.bs.collapse") }, this._element, !0)
          }
          setTransitioning(t) { this._isTransitioning = t }
          _getConfig(t) { return (t = {...J, ...t }).toggle = Boolean(t.toggle), l("collapse", t, tt), t }
          _getDimension() { return this._element.classList.contains("width") ? "width" : "height" }
          _getParent() {
              let { parent: e } = this._config;
              e = a(e);
              const i = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
              return t.find(i, e).forEach(t => {
                  const e = s(t);
                  this._addAriaAndCollapsedClass(e, [t])
              }), e
          }
          _addAriaAndCollapsedClass(t, e) {
              if (!t || !e.length) return;
              const i = t.classList.contains("show");
              e.forEach(t => { i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i) })
          }
          static collapseInterface(t, e) {
              let i = et.getInstance(t);
              const n = {...J, ...U.getDataAttributes(t), ... "object" == typeof e && e ? e : {} };
              if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new et(t, n)), "string" == typeof e) {
                  if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                  i[e]()
              }
          }
          static jQueryInterface(t) { return this.each((function() { et.collapseInterface(this, t) })) }
      }
      P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(e) {
          ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
          const i = U.getDataAttributes(this),
              s = n(this);
          t.find(s).forEach(t => {
              const e = et.getInstance(t);
              let n;
              e ? (null === e._parent && "string" == typeof i.parent && (e._config.parent = i.parent, e._parent = e._getParent()), n = "toggle") : n = i, et.collapseInterface(t, n)
          })
      })), _(et);
      var it = "top",
          nt = "bottom",
          st = "right",
          ot = "left",
          rt = [it, nt, st, ot],
          at = rt.reduce((function(t, e) { return t.concat([e + "-start", e + "-end"]) }), []),
          lt = [].concat(rt, ["auto"]).reduce((function(t, e) { return t.concat([e, e + "-start", e + "-end"]) }), []),
          ct = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

      function ht(t) { return t ? (t.nodeName || "").toLowerCase() : null }

      function dt(t) { if (null == t) return window; if ("[object Window]" !== t.toString()) { var e = t.ownerDocument; return e && e.defaultView || window } return t }

      function ut(t) { return t instanceof dt(t).Element || t instanceof Element }

      function ft(t) { return t instanceof dt(t).HTMLElement || t instanceof HTMLElement }

      function pt(t) { return "undefined" != typeof ShadowRoot && (t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot) }
      var mt = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function(t) {
              var e = t.state;
              Object.keys(e.elements).forEach((function(t) {
                  var i = e.styles[t] || {},
                      n = e.attributes[t] || {},
                      s = e.elements[t];
                  ft(s) && ht(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function(t) { var e = n[t];!1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e) })))
              }))
          },
          effect: function(t) {
              var e = t.state,
                  i = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
              return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                  function() {
                      Object.keys(e.elements).forEach((function(t) {
                          var n = e.elements[t],
                              s = e.attributes[t] || {},
                              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function(t, e) { return t[e] = "", t }), {});
                          ft(n) && ht(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function(t) { n.removeAttribute(t) })))
                      }))
                  }
          },
          requires: ["computeStyles"]
      };

      function gt(t) { return t.split("-")[0] }

      function _t(t) { var e = t.getBoundingClientRect(); return { width: e.width, height: e.height, top: e.top, right: e.right, bottom: e.bottom, left: e.left, x: e.left, y: e.top } }

      function bt(t) {
          var e = _t(t),
              i = t.offsetWidth,
              n = t.offsetHeight;
          return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
      }

      function vt(t, e) {
          var i = e.getRootNode && e.getRootNode();
          if (t.contains(e)) return !0;
          if (i && pt(i)) {
              var n = e;
              do {
                  if (n && t.isSameNode(n)) return !0;
                  n = n.parentNode || n.host
              } while (n)
          }
          return !1
      }

      function yt(t) { return dt(t).getComputedStyle(t) }

      function wt(t) { return ["table", "td", "th"].indexOf(ht(t)) >= 0 }

      function Et(t) { return ((ut(t) ? t.ownerDocument : t.document) || window.document).documentElement }

      function At(t) { return "html" === ht(t) ? t : t.assignedSlot || t.parentNode || (pt(t) ? t.host : null) || Et(t) }

      function Tt(t) { return ft(t) && "fixed" !== yt(t).position ? t.offsetParent : null }

      function Ot(t) {
          for (var e = dt(t), i = Tt(t); i && wt(i) && "static" === yt(i).position;) i = Tt(i);
          return i && ("html" === ht(i) || "body" === ht(i) && "static" === yt(i).position) ? e : i || function(t) {
              var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
              if (-1 !== navigator.userAgent.indexOf("Trident") && ft(t) && "fixed" === yt(t).position) return null;
              for (var i = At(t); ft(i) && ["html", "body"].indexOf(ht(i)) < 0;) {
                  var n = yt(i);
                  if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                  i = i.parentNode
              }
              return null
          }(t) || e
      }

      function Ct(t) { return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y" }
      var kt = Math.max,
          Lt = Math.min,
          xt = Math.round;

      function Dt(t, e, i) { return kt(t, Lt(e, i)) }

      function St(t) { return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t) }

      function It(t, e) { return e.reduce((function(e, i) { return e[i] = t, e }), {}) }
      var Nt = {
              name: "arrow",
              enabled: !0,
              phase: "main",
              fn: function(t) {
                  var e, i = t.state,
                      n = t.name,
                      s = t.options,
                      o = i.elements.arrow,
                      r = i.modifiersData.popperOffsets,
                      a = gt(i.placement),
                      l = Ct(a),
                      c = [ot, st].indexOf(a) >= 0 ? "height" : "width";
                  if (o && r) {
                      var h = function(t, e) { return St("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : It(t, rt)) }(s.padding, i),
                          d = bt(o),
                          u = "y" === l ? it : ot,
                          f = "y" === l ? nt : st,
                          p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                          m = r[l] - i.rects.reference[l],
                          g = Ot(o),
                          _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                          b = p / 2 - m / 2,
                          v = h[u],
                          y = _ - d[c] - h[f],
                          w = _ / 2 - d[c] / 2 + b,
                          E = Dt(v, w, y),
                          A = l;
                      i.modifiersData[n] = ((e = {})[A] = E, e.centerOffset = E - w, e)
                  }
              },
              effect: function(t) {
                  var e = t.state,
                      i = t.options.element,
                      n = void 0 === i ? "[data-popper-arrow]" : i;
                  null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && vt(e.elements.popper, n) && (e.elements.arrow = n)
              },
              requires: ["popperOffsets"],
              requiresIfExists: ["preventOverflow"]
          },
          jt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };

      function Mt(t) {
          var e, i = t.popper,
              n = t.popperRect,
              s = t.placement,
              o = t.offsets,
              r = t.position,
              a = t.gpuAcceleration,
              l = t.adaptive,
              c = t.roundOffsets,
              h = !0 === c ? function(t) {
                  var e = t.x,
                      i = t.y,
                      n = window.devicePixelRatio || 1;
                  return { x: xt(xt(e * n) / n) || 0, y: xt(xt(i * n) / n) || 0 }
              }(o) : "function" == typeof c ? c(o) : o,
              d = h.x,
              u = void 0 === d ? 0 : d,
              f = h.y,
              p = void 0 === f ? 0 : f,
              m = o.hasOwnProperty("x"),
              g = o.hasOwnProperty("y"),
              _ = ot,
              b = it,
              v = window;
          if (l) {
              var y = Ot(i),
                  w = "clientHeight",
                  E = "clientWidth";
              y === dt(i) && "static" !== yt(y = Et(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === it && (b = nt, p -= y[w] - n.height, p *= a ? 1 : -1), s === ot && (_ = st, u -= y[E] - n.width, u *= a ? 1 : -1)
          }
          var A, T = Object.assign({ position: r }, l && jt);
          return a ? Object.assign({}, T, ((A = {})[b] = g ? "0" : "", A[_] = m ? "0" : "", A.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", A)) : Object.assign({}, T, ((e = {})[b] = g ? p + "px" : "", e[_] = m ? u + "px" : "", e.transform = "", e))
      }
      var Pt = {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function(t) {
                  var e = t.state,
                      i = t.options,
                      n = i.gpuAcceleration,
                      s = void 0 === n || n,
                      o = i.adaptive,
                      r = void 0 === o || o,
                      a = i.roundOffsets,
                      l = void 0 === a || a,
                      c = { placement: gt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s };
                  null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Mt(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: l })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Mt(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement })
              },
              data: {}
          },
          Ht = { passive: !0 },
          Rt = {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function() {},
              effect: function(t) {
                  var e = t.state,
                      i = t.instance,
                      n = t.options,
                      s = n.scroll,
                      o = void 0 === s || s,
                      r = n.resize,
                      a = void 0 === r || r,
                      l = dt(e.elements.popper),
                      c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                  return o && c.forEach((function(t) { t.addEventListener("scroll", i.update, Ht) })), a && l.addEventListener("resize", i.update, Ht),
                      function() { o && c.forEach((function(t) { t.removeEventListener("scroll", i.update, Ht) })), a && l.removeEventListener("resize", i.update, Ht) }
              },
              data: {}
          },
          Bt = { left: "right", right: "left", bottom: "top", top: "bottom" };

      function Wt(t) { return t.replace(/left|right|bottom|top/g, (function(t) { return Bt[t] })) }
      var qt = { start: "end", end: "start" };

      function zt(t) { return t.replace(/start|end/g, (function(t) { return qt[t] })) }

      function $t(t) { var e = dt(t); return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset } }

      function Ut(t) { return _t(Et(t)).left + $t(t).scrollLeft }

      function Ft(t) {
          var e = yt(t),
              i = e.overflow,
              n = e.overflowX,
              s = e.overflowY;
          return /auto|scroll|overlay|hidden/.test(i + s + n)
      }

      function Vt(t, e) {
          var i;
          void 0 === e && (e = []);
          var n = function t(e) { return ["html", "body", "#document"].indexOf(ht(e)) >= 0 ? e.ownerDocument.body : ft(e) && Ft(e) ? e : t(At(e)) }(t),
              s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
              o = dt(n),
              r = s ? [o].concat(o.visualViewport || [], Ft(n) ? n : []) : n,
              a = e.concat(r);
          return s ? a : a.concat(Vt(At(r)))
      }

      function Kt(t) { return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height }) }

      function Xt(t, e) {
          return "viewport" === e ? Kt(function(t) {
              var e = dt(t),
                  i = Et(t),
                  n = e.visualViewport,
                  s = i.clientWidth,
                  o = i.clientHeight,
                  r = 0,
                  a = 0;
              return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), { width: s, height: o, x: r + Ut(t), y: a }
          }(t)) : ft(e) ? function(t) { var e = _t(t); return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e }(e) : Kt(function(t) {
              var e, i = Et(t),
                  n = $t(t),
                  s = null == (e = t.ownerDocument) ? void 0 : e.body,
                  o = kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                  r = kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                  a = -n.scrollLeft + Ut(t),
                  l = -n.scrollTop;
              return "rtl" === yt(s || i).direction && (a += kt(i.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: r, x: a, y: l }
          }(Et(t)))
      }

      function Yt(t) { return t.split("-")[1] }

      function Qt(t) {
          var e, i = t.reference,
              n = t.element,
              s = t.placement,
              o = s ? gt(s) : null,
              r = s ? Yt(s) : null,
              a = i.x + i.width / 2 - n.width / 2,
              l = i.y + i.height / 2 - n.height / 2;
          switch (o) {
              case it:
                  e = { x: a, y: i.y - n.height };
                  break;
              case nt:
                  e = { x: a, y: i.y + i.height };
                  break;
              case st:
                  e = { x: i.x + i.width, y: l };
                  break;
              case ot:
                  e = { x: i.x - n.width, y: l };
                  break;
              default:
                  e = { x: i.x, y: i.y }
          }
          var c = o ? Ct(o) : null;
          if (null != c) {
              var h = "y" === c ? "height" : "width";
              switch (r) {
                  case "start":
                      e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                      break;
                  case "end":
                      e[c] = e[c] + (i[h] / 2 - n[h] / 2)
              }
          }
          return e
      }

      function Gt(t, e) {
          void 0 === e && (e = {});
          var i = e,
              n = i.placement,
              s = void 0 === n ? t.placement : n,
              o = i.boundary,
              r = void 0 === o ? "clippingParents" : o,
              a = i.rootBoundary,
              l = void 0 === a ? "viewport" : a,
              c = i.elementContext,
              h = void 0 === c ? "popper" : c,
              d = i.altBoundary,
              u = void 0 !== d && d,
              f = i.padding,
              p = void 0 === f ? 0 : f,
              m = St("number" != typeof p ? p : It(p, rt)),
              g = "popper" === h ? "reference" : "popper",
              _ = t.elements.reference,
              b = t.rects.popper,
              v = t.elements[u ? g : h],
              y = function(t, e, i) {
                  var n = "clippingParents" === e ? function(t) {
                          var e = Vt(At(t)),
                              i = ["absolute", "fixed"].indexOf(yt(t).position) >= 0 && ft(t) ? Ot(t) : t;
                          return ut(i) ? e.filter((function(t) { return ut(t) && vt(t, i) && "body" !== ht(t) })) : []
                      }(t) : [].concat(e),
                      s = [].concat(n, [i]),
                      o = s[0],
                      r = s.reduce((function(e, i) { var n = Xt(t, i); return e.top = kt(n.top, e.top), e.right = Lt(n.right, e.right), e.bottom = Lt(n.bottom, e.bottom), e.left = kt(n.left, e.left), e }), Xt(t, o));
                  return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
              }(ut(v) ? v : v.contextElement || Et(t.elements.popper), r, l),
              w = _t(_),
              E = Qt({ reference: w, element: b, strategy: "absolute", placement: s }),
              A = Kt(Object.assign({}, b, E)),
              T = "popper" === h ? A : w,
              O = { top: y.top - T.top + m.top, bottom: T.bottom - y.bottom + m.bottom, left: y.left - T.left + m.left, right: T.right - y.right + m.right },
              C = t.modifiersData.offset;
          if ("popper" === h && C) {
              var k = C[s];
              Object.keys(O).forEach((function(t) {
                  var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
                      i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
                  O[t] += k[i] * e
              }))
          }
          return O
      }

      function Zt(t, e) {
          void 0 === e && (e = {});
          var i = e,
              n = i.placement,
              s = i.boundary,
              o = i.rootBoundary,
              r = i.padding,
              a = i.flipVariations,
              l = i.allowedAutoPlacements,
              c = void 0 === l ? lt : l,
              h = Yt(n),
              d = h ? a ? at : at.filter((function(t) { return Yt(t) === h })) : rt,
              u = d.filter((function(t) { return c.indexOf(t) >= 0 }));
          0 === u.length && (u = d);
          var f = u.reduce((function(e, i) { return e[i] = Gt(t, { placement: i, boundary: s, rootBoundary: o, padding: r })[gt(i)], e }), {});
          return Object.keys(f).sort((function(t, e) { return f[t] - f[e] }))
      }
      var Jt = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: function(t) {
              var e = t.state,
                  i = t.options,
                  n = t.name;
              if (!e.modifiersData[n]._skip) {
                  for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = gt(g), b = l || (_ !== g && p ? function(t) { if ("auto" === gt(t)) return []; var e = Wt(t); return [zt(t), e, zt(e)] }(g) : [Wt(g)]), v = [g].concat(b).reduce((function(t, i) { return t.concat("auto" === gt(i) ? Zt(e, { placement: i, boundary: h, rootBoundary: d, padding: c, flipVariations: p, allowedAutoPlacements: m }) : i) }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, A = !0, T = v[0], O = 0; O < v.length; O++) {
                      var C = v[O],
                          k = gt(C),
                          L = "start" === Yt(C),
                          x = [it, nt].indexOf(k) >= 0,
                          D = x ? "width" : "height",
                          S = Gt(e, { placement: C, boundary: h, rootBoundary: d, altBoundary: u, padding: c }),
                          I = x ? L ? st : ot : L ? nt : it;
                      y[D] > w[D] && (I = Wt(I));
                      var N = Wt(I),
                          j = [];
                      if (o && j.push(S[k] <= 0), a && j.push(S[I] <= 0, S[N] <= 0), j.every((function(t) { return t }))) { T = C, A = !1; break }
                      E.set(C, j)
                  }
                  if (A)
                      for (var M = function(t) { var e = v.find((function(e) { var i = E.get(e); if (i) return i.slice(0, t).every((function(t) { return t })) })); if (e) return T = e, "break" }, P = p ? 3 : 1; P > 0 && "break" !== M(P); P--);
                  e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
              }
          },
          requiresIfExists: ["offset"],
          data: { _skip: !1 }
      };

      function te(t, e, i) { return void 0 === i && (i = { x: 0, y: 0 }), { top: t.top - e.height - i.y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x } }

      function ee(t) { return [it, st, nt, ot].some((function(e) { return t[e] >= 0 })) }
      var ie = {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function(t) {
                  var e = t.state,
                      i = t.name,
                      n = e.rects.reference,
                      s = e.rects.popper,
                      o = e.modifiersData.preventOverflow,
                      r = Gt(e, { elementContext: "reference" }),
                      a = Gt(e, { altBoundary: !0 }),
                      l = te(r, n),
                      c = te(a, s, o),
                      h = ee(l),
                      d = ee(c);
                  e.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: h, hasPopperEscaped: d }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": d })
              }
          },
          ne = {
              name: "offset",
              enabled: !0,
              phase: "main",
              requires: ["popperOffsets"],
              fn: function(t) {
                  var e = t.state,
                      i = t.options,
                      n = t.name,
                      s = i.offset,
                      o = void 0 === s ? [0, 0] : s,
                      r = lt.reduce((function(t, i) {
                          return t[i] = function(t, e, i) {
                              var n = gt(t),
                                  s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
                                  o = "function" == typeof i ? i(Object.assign({}, e, { placement: t })) : i,
                                  r = o[0],
                                  a = o[1];
                              return r = r || 0, a = (a || 0) * s, [ot, st].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                          }(i, e.rects, o), t
                      }), {}),
                      a = r[e.placement],
                      l = a.x,
                      c = a.y;
                  null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
              }
          },
          se = {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function(t) {
                  var e = t.state,
                      i = t.name;
                  e.modifiersData[i] = Qt({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement })
              },
              data: {}
          },
          oe = {
              name: "preventOverflow",
              enabled: !0,
              phase: "main",
              fn: function(t) {
                  var e = t.state,
                      i = t.options,
                      n = t.name,
                      s = i.mainAxis,
                      o = void 0 === s || s,
                      r = i.altAxis,
                      a = void 0 !== r && r,
                      l = i.boundary,
                      c = i.rootBoundary,
                      h = i.altBoundary,
                      d = i.padding,
                      u = i.tether,
                      f = void 0 === u || u,
                      p = i.tetherOffset,
                      m = void 0 === p ? 0 : p,
                      g = Gt(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: h }),
                      _ = gt(e.placement),
                      b = Yt(e.placement),
                      v = !b,
                      y = Ct(_),
                      w = "x" === y ? "y" : "x",
                      E = e.modifiersData.popperOffsets,
                      A = e.rects.reference,
                      T = e.rects.popper,
                      O = "function" == typeof m ? m(Object.assign({}, e.rects, { placement: e.placement })) : m,
                      C = { x: 0, y: 0 };
                  if (E) {
                      if (o || a) {
                          var k = "y" === y ? it : ot,
                              L = "y" === y ? nt : st,
                              x = "y" === y ? "height" : "width",
                              D = E[y],
                              S = E[y] + g[k],
                              I = E[y] - g[L],
                              N = f ? -T[x] / 2 : 0,
                              j = "start" === b ? A[x] : T[x],
                              M = "start" === b ? -T[x] : -A[x],
                              P = e.elements.arrow,
                              H = f && P ? bt(P) : { width: 0, height: 0 },
                              R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                              B = R[k],
                              W = R[L],
                              q = Dt(0, A[x], H[x]),
                              z = v ? A[x] / 2 - N - q - B - O : j - q - B - O,
                              $ = v ? -A[x] / 2 + N + q + W + O : M + q + W + O,
                              U = e.elements.arrow && Ot(e.elements.arrow),
                              F = U ? "y" === y ? U.clientTop || 0 : U.clientLeft || 0 : 0,
                              V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                              K = E[y] + z - V - F,
                              X = E[y] + $ - V;
                          if (o) {
                              var Y = Dt(f ? Lt(S, K) : S, D, f ? kt(I, X) : I);
                              E[y] = Y, C[y] = Y - D
                          }
                          if (a) {
                              var Q = "x" === y ? it : ot,
                                  G = "x" === y ? nt : st,
                                  Z = E[w],
                                  J = Z + g[Q],
                                  tt = Z - g[G],
                                  et = Dt(f ? Lt(J, K) : J, Z, f ? kt(tt, X) : tt);
                              E[w] = et, C[w] = et - Z
                          }
                      }
                      e.modifiersData[n] = C
                  }
              },
              requiresIfExists: ["offset"]
          };

      function re(t, e, i) {
          void 0 === i && (i = !1);
          var n, s, o = Et(e),
              r = _t(t),
              a = ft(e),
              l = { scrollLeft: 0, scrollTop: 0 },
              c = { x: 0, y: 0 };
          return (a || !a && !i) && (("body" !== ht(e) || Ft(o)) && (l = (n = e) !== dt(n) && ft(n) ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop } : $t(n)), ft(e) ? ((c = _t(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = Ut(o))), { x: r.left + l.scrollLeft - c.x, y: r.top + l.scrollTop - c.y, width: r.width, height: r.height }
      }
      var ae = { placement: "bottom", modifiers: [], strategy: "absolute" };

      function le() { for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i]; return !e.some((function(t) { return !(t && "function" == typeof t.getBoundingClientRect) })) }

      function ce(t) {
          void 0 === t && (t = {});
          var e = t,
              i = e.defaultModifiers,
              n = void 0 === i ? [] : i,
              s = e.defaultOptions,
              o = void 0 === s ? ae : s;
          return function(t, e, i) {
              void 0 === i && (i = o);
              var s, r, a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ae, o), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} },
                  l = [],
                  c = !1,
                  h = {
                      state: a,
                      setOptions: function(i) {
                          d(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = { reference: ut(t) ? Vt(t) : t.contextElement ? Vt(t.contextElement) : [], popper: Vt(e) };
                          var s, r, c = function(t) {
                              var e = function(t) {
                                  var e = new Map,
                                      i = new Set,
                                      n = [];
                                  return t.forEach((function(t) { e.set(t.name, t) })), t.forEach((function(t) {
                                      i.has(t.name) || function t(s) {
                                          i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function(n) {
                                              if (!i.has(n)) {
                                                  var s = e.get(n);
                                                  s && t(s)
                                              }
                                          })), n.push(s)
                                      }(t)
                                  })), n
                              }(t);
                              return ct.reduce((function(t, i) { return t.concat(e.filter((function(t) { return t.phase === i }))) }), [])
                          }((s = [].concat(n, a.options.modifiers), r = s.reduce((function(t, e) { var i = t[e.name]; return t[e.name] = i ? Object.assign({}, i, e, { options: Object.assign({}, i.options, e.options), data: Object.assign({}, i.data, e.data) }) : e, t }), {}), Object.keys(r).map((function(t) { return r[t] }))));
                          return a.orderedModifiers = c.filter((function(t) { return t.enabled })), a.orderedModifiers.forEach((function(t) {
                              var e = t.name,
                                  i = t.options,
                                  n = void 0 === i ? {} : i,
                                  s = t.effect;
                              if ("function" == typeof s) {
                                  var o = s({ state: a, name: e, instance: h, options: n });
                                  l.push(o || function() {})
                              }
                          })), h.update()
                      },
                      forceUpdate: function() {
                          if (!c) {
                              var t = a.elements,
                                  e = t.reference,
                                  i = t.popper;
                              if (le(e, i)) {
                                  a.rects = { reference: re(e, Ot(i), "fixed" === a.options.strategy), popper: bt(i) }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) { return a.modifiersData[t.name] = Object.assign({}, t.data) }));
                                  for (var n = 0; n < a.orderedModifiers.length; n++)
                                      if (!0 !== a.reset) {
                                          var s = a.orderedModifiers[n],
                                              o = s.fn,
                                              r = s.options,
                                              l = void 0 === r ? {} : r,
                                              d = s.name;
                                          "function" == typeof o && (a = o({ state: a, options: l, name: d, instance: h }) || a)
                                      } else a.reset = !1, n = -1
                              }
                          }
                      },
                      update: (s = function() { return new Promise((function(t) { h.forceUpdate(), t(a) })) }, function() { return r || (r = new Promise((function(t) { Promise.resolve().then((function() { r = void 0, t(s()) })) }))), r }),
                      destroy: function() { d(), c = !0 }
                  };
              if (!le(t, e)) return h;

              function d() { l.forEach((function(t) { return t() })), l = [] }
              return h.setOptions(i).then((function(t) {!c && i.onFirstUpdate && i.onFirstUpdate(t) })), h
          }
      }
      var he = ce(),
          de = ce({ defaultModifiers: [Rt, se, Pt, mt] }),
          ue = ce({ defaultModifiers: [Rt, se, Pt, mt, ne, Jt, oe, Nt, ie] }),
          fe = Object.freeze({ __proto__: null, popperGenerator: ce, detectOverflow: Gt, createPopperBase: he, createPopper: ue, createPopperLite: de, top: it, bottom: nt, right: st, left: ot, auto: "auto", basePlacements: rt, start: "start", end: "end", clippingParents: "clippingParents", viewport: "viewport", popper: "popper", reference: "reference", variationPlacements: at, placements: lt, beforeRead: "beforeRead", read: "read", afterRead: "afterRead", beforeMain: "beforeMain", main: "main", afterMain: "afterMain", beforeWrite: "beforeWrite", write: "write", afterWrite: "afterWrite", modifierPhases: ct, applyStyles: mt, arrow: Nt, computeStyles: Pt, eventListeners: Rt, flip: Jt, hide: ie, offset: ne, popperOffsets: se, preventOverflow: oe });
      const pe = new RegExp("ArrowUp|ArrowDown|Escape"),
          me = g() ? "top-end" : "top-start",
          ge = g() ? "top-start" : "top-end",
          _e = g() ? "bottom-end" : "bottom-start",
          be = g() ? "bottom-start" : "bottom-end",
          ve = g() ? "left-start" : "right-start",
          ye = g() ? "right-start" : "left-start",
          we = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
          Ee = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
      class Ae extends B {
          constructor(t, e) { super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
          static get Default() { return we }
          static get DefaultType() { return Ee }
          static get NAME() { return "dropdown" }
          toggle() { h(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show()) }
          show() {
              if (h(this._element) || this._menu.classList.contains("show")) return;
              const t = Ae.getParentFromElement(this._element),
                  e = { relatedTarget: this._element };
              if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                  if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");
                  else {
                      if (void 0 === fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                      let e = this._element;
                      "parent" === this._config.reference ? e = t : r(this._config.reference) ? e = a(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                      const i = this._getPopperConfig(),
                          n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
                      this._popper = ue(e, this._menu, i), n && U.setDataAttribute(this._menu, "popper", "static")
                  }
                  "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => P.on(t, "mouseover", u)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), P.trigger(this._element, "shown.bs.dropdown", e)
              }
          }
          hide() {
              if (h(this._element) || !this._menu.classList.contains("show")) return;
              const t = { relatedTarget: this._element };
              this._completeHide(t)
          }
          dispose() { this._popper && this._popper.destroy(), super.dispose() }
          update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() }
          _addEventListeners() { P.on(this._element, "click.bs.dropdown", t => { t.preventDefault(), this.toggle() }) }
          _completeHide(t) { P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => P.off(t, "mouseover", u)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t)) }
          _getConfig(t) { if (t = {...this.constructor.Default, ...U.getDataAttributes(this._element), ...t }, l("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'); return t }
          _getMenuElement() { return t.next(this._element, ".dropdown-menu")[0] }
          _getPlacement() { const t = this._element.parentNode; if (t.classList.contains("dropend")) return ve; if (t.classList.contains("dropstart")) return ye; const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return t.classList.contains("dropup") ? e ? ge : me : e ? be : _e }
          _detectNavbar() { return null !== this._element.closest(".navbar") }
          _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t }
          _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return "static" === this._config.display && (t.modifiers = [{ name: "applyStyles", enabled: !1 }]), {...t, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig } }
          _selectMenuItem({ key: e, target: i }) {
              const n = t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
              n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus()
          }
          static dropdownInterface(t, e) {
              const i = Ae.getOrCreateInstance(t, e);
              if ("string" == typeof e) {
                  if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
                  i[e]()
              }
          }
          static jQueryInterface(t) { return this.each((function() { Ae.dropdownInterface(this, t) })) }
          static clearMenus(e) {
              if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
              const i = t.find('[data-bs-toggle="dropdown"]');
              for (let t = 0, n = i.length; t < n; t++) {
                  const n = Ae.getInstance(i[t]);
                  if (!n || !1 === n._config.autoClose) continue;
                  if (!n._element.classList.contains("show")) continue;
                  const s = { relatedTarget: n._element };
                  if (e) {
                      const t = e.composedPath(),
                          i = t.includes(n._menu);
                      if (t.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                      if (n._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                      "click" === e.type && (s.clickEvent = e)
                  }
                  n._completeHide(s)
              }
          }
          static getParentFromElement(t) { return s(t) || t.parentNode }
          static dataApiKeydownHandler(e) { if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !pe.test(e.key)) return; const i = this.classList.contains("show"); if (!i && "Escape" === e.key) return; if (e.preventDefault(), e.stopPropagation(), h(this)) return; const n = () => this.matches('[data-bs-toggle="dropdown"]') ? this : t.prev(this, '[data-bs-toggle="dropdown"]')[0]; return "Escape" === e.key ? (n().focus(), void Ae.clearMenus()) : "ArrowUp" === e.key || "ArrowDown" === e.key ? (i || n().click(), void Ae.getInstance(n())._selectMenuItem(e)) : void(i && "Space" !== e.key || Ae.clearMenus()) }
      }
      P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Ae.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Ae.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", Ae.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", Ae.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) { t.preventDefault(), Ae.dropdownInterface(this) })), _(Ae);
      class Te {
          constructor() { this._element = document.body }
          getWidth() { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t) }
          hide() {
              const t = this.getWidth();
              this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", e => e + t), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), this._setElementAttributes(".sticky-top", "marginRight", e => e - t)
          }
          _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" }
          _setElementAttributes(t, e, i) {
              const n = this.getWidth();
              this._applyManipulationCallback(t, t => {
                  if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                  this._saveInitialAttribute(t, e);
                  const s = window.getComputedStyle(t)[e];
                  t.style[e] = i(Number.parseFloat(s)) + "px"
              })
          }
          reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight") }
          _saveInitialAttribute(t, e) {
              const i = t.style[e];
              i && U.setDataAttribute(t, e, i)
          }
          _resetElementAttributes(t, e) {
              this._applyManipulationCallback(t, t => {
                  const i = U.getDataAttribute(t, e);
                  void 0 === i ? t.style.removeProperty(e) : (U.removeDataAttribute(t, e), t.style[e] = i)
              })
          }
          _applyManipulationCallback(e, i) { r(e) ? i(e) : t.find(e, this._element).forEach(i) }
          isOverflowing() { return this.getWidth() > 0 }
      }
      const Oe = { isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
          Ce = { isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" };
      class ke {
          constructor(t) { this._config = this._getConfig(t), this._isAppended = !1, this._element = null }
          show(t) { this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => { b(t) })) : b(t) }
          hide(t) { this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => { this.dispose(), b(t) })) : b(t) }
          _getElement() {
              if (!this._element) {
                  const t = document.createElement("div");
                  t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t
              }
              return this._element
          }
          _getConfig(t) { return (t = {...Oe, ... "object" == typeof t ? t : {} }).rootElement = a(t.rootElement), l("backdrop", t, Ce), t }
          _append() { this._isAppended || (this._config.rootElement.appendChild(this._getElement()), P.on(this._getElement(), "mousedown.bs.backdrop", () => { b(this._config.clickCallback) }), this._isAppended = !0) }
          dispose() { this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = !1) }
          _emulateAnimation(t) { v(t, this._getElement(), this._config.isAnimated) }
      }
      const Le = { backdrop: !0, keyboard: !0, focus: !0 },
          xe = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
      class De extends B {
          constructor(e, i) { super(e), this._config = this._getConfig(i), this._dialog = t.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new Te }
          static get Default() { return Le }
          static get NAME() { return "modal" }
          toggle(t) { return this._isShown ? this.hide() : this.show(t) }
          show(t) { this._isShown || this._isTransitioning || P.trigger(this._element, "show.bs.modal", { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), P.on(this._dialog, "mousedown.dismiss.bs.modal", () => { P.one(this._element, "mouseup.dismiss.bs.modal", t => { t.target === this._element && (this._ignoreBackdropClick = !0) }) }), this._showBackdrop(() => this._showElement(t))) }
          hide(t) {
              if (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(), !this._isShown || this._isTransitioning) return;
              if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
              this._isShown = !1;
              const e = this._isAnimated();
              e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), P.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, e)
          }
          dispose() {
              [window, this._dialog].forEach(t => P.off(t, ".bs.modal")), this._backdrop.dispose(), super.dispose(), P.off(document, "focusin.bs.modal")
          }
          handleUpdate() { this._adjustDialog() }
          _initializeBackDrop() { return new ke({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) }
          _getConfig(t) { return t = {...Le, ...U.getDataAttributes(this._element), ... "object" == typeof t ? t : {} }, l("modal", t, xe), t }
          _showElement(e) {
              const i = this._isAnimated(),
                  n = t.findOne(".modal-body", this._dialog);
              this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), i && f(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(() => { this._config.focus && this._element.focus(), this._isTransitioning = !1, P.trigger(this._element, "shown.bs.modal", { relatedTarget: e }) }, this._dialog, i)
          }
          _enforceFocus() { P.off(document, "focusin.bs.modal"), P.on(document, "focusin.bs.modal", t => { document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus() }) }
          _setEscapeEvent() { this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", t => { this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition() }) : P.off(this._element, "keydown.dismiss.bs.modal") }
          _setResizeEvent() { this._isShown ? P.on(window, "resize.bs.modal", () => this._adjustDialog()) : P.off(window, "resize.bs.modal") }
          _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => { document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, "hidden.bs.modal") }) }
          _showBackdrop(t) { P.on(this._element, "click.dismiss.bs.modal", t => { this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition()) }), this._backdrop.show(t) }
          _isAnimated() { return this._element.classList.contains("fade") }
          _triggerBackdropTransition() { if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return; const { classList: t, scrollHeight: e, style: i } = this._element, n = e > document.documentElement.clientHeight;!n && "hidden" === i.overflowY || t.contains("modal-static") || (n || (i.overflowY = "hidden"), t.add("modal-static"), this._queueCallback(() => { t.remove("modal-static"), n || this._queueCallback(() => { i.overflowY = "" }, this._dialog) }, this._dialog), this._element.focus()) }
          _adjustDialog() {
              const t = this._element.scrollHeight > document.documentElement.clientHeight,
                  e = this._scrollBar.getWidth(),
                  i = e > 0;
              (!i && t && !g() || i && !t && g()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !g() || !i && t && g()) && (this._element.style.paddingRight = e + "px")
          }
          _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }
          static jQueryInterface(t, e) {
              return this.each((function() {
                  const i = De.getOrCreateInstance(this, t);
                  if ("string" == typeof t) {
                      if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                      i[t](e)
                  }
              }))
          }
      }
      P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
          const e = s(this);
          ["A", "AREA"].includes(this.tagName) && t.preventDefault(), P.one(e, "show.bs.modal", t => { t.defaultPrevented || P.one(e, "hidden.bs.modal", () => { c(this) && this.focus() }) }), De.getOrCreateInstance(e).toggle(this)
      })), _(De);
      const Se = { backdrop: !0, keyboard: !0, scroll: !1 },
          Ie = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
      class Ne extends B {
          constructor(t, e) { super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners() }
          static get NAME() { return "offcanvas" }
          static get Default() { return Se }
          toggle(t) { return this._isShown ? this.hide() : this.show(t) }
          show(t) { this._isShown || P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || ((new Te).hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => { P.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t }) }, this._element, !0)) }
          hide() { this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (P.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => { this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new Te).reset(), P.trigger(this._element, "hidden.bs.offcanvas") }, this._element, !0))) }
          dispose() { this._backdrop.dispose(), super.dispose(), P.off(document, "focusin.bs.offcanvas") }
          _getConfig(t) { return t = {...Se, ...U.getDataAttributes(this._element), ... "object" == typeof t ? t : {} }, l("offcanvas", t, Ie), t }
          _initializeBackDrop() { return new ke({ isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() }) }
          _enforceFocusOnElement(t) { P.off(document, "focusin.bs.offcanvas"), P.on(document, "focusin.bs.offcanvas", e => { document === e.target || t === e.target || t.contains(e.target) || t.focus() }), t.focus() }
          _addEventListeners() { P.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), P.on(this._element, "keydown.dismiss.bs.offcanvas", t => { this._config.keyboard && "Escape" === t.key && this.hide() }) }
          static jQueryInterface(t) {
              return this.each((function() {
                  const e = Ne.getOrCreateInstance(this, t);
                  if ("string" == typeof t) {
                      if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                      e[t](this)
                  }
              }))
          }
      }
      P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(e) {
          const i = s(this);
          if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this)) return;
          P.one(i, "hidden.bs.offcanvas", () => { c(this) && this.focus() });
          const n = t.findOne(".offcanvas.show");
          n && n !== i && Ne.getInstance(n).hide(), Ne.getOrCreateInstance(i).toggle(this)
      })), P.on(window, "load.bs.offcanvas.data-api", () => t.find(".offcanvas.show").forEach(t => Ne.getOrCreateInstance(t).show())), _(Ne);
      const je = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
          Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
          Pe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
          He = (t, e) => {
              const i = t.nodeName.toLowerCase();
              if (e.includes(i)) return !je.has(i) || Boolean(Me.test(t.nodeValue) || Pe.test(t.nodeValue));
              const n = e.filter(t => t instanceof RegExp);
              for (let t = 0, e = n.length; t < e; t++)
                  if (n[t].test(i)) return !0;
              return !1
          };

      function Re(t, e, i) {
          if (!t.length) return t;
          if (i && "function" == typeof i) return i(t);
          const n = (new window.DOMParser).parseFromString(t, "text/html"),
              s = Object.keys(e),
              o = [].concat(...n.body.querySelectorAll("*"));
          for (let t = 0, i = o.length; t < i; t++) {
              const i = o[t],
                  n = i.nodeName.toLowerCase();
              if (!s.includes(n)) { i.remove(); continue }
              const r = [].concat(...i.attributes),
                  a = [].concat(e["*"] || [], e[n] || []);
              r.forEach(t => { He(t, a) || i.removeAttribute(t.nodeName) })
          }
          return n.body.innerHTML
      }
      const Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          We = new Set(["sanitize", "allowList", "sanitizeFn"]),
          qe = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" },
          ze = { AUTO: "auto", TOP: "top", RIGHT: g() ? "left" : "right", BOTTOM: "bottom", LEFT: g() ? "right" : "left" },
          $e = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: [0, 0], container: !1, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: !0, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null },
          Ue = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" };
      class Fe extends B {
          constructor(t, e) {
              if (void 0 === fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
              super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
          }
          static get Default() { return $e }
          static get NAME() { return "tooltip" }
          static get Event() { return Ue }
          static get DefaultType() { return qe }
          enable() { this._isEnabled = !0 }
          disable() { this._isEnabled = !1 }
          toggleEnabled() { this._isEnabled = !this._isEnabled }
          toggle(t) {
              if (this._isEnabled)
                  if (t) {
                      const e = this._initializeOnDelegatedTarget(t);
                      e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                  } else {
                      if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                      this._enter(null, this)
                  }
          }
          dispose() { clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose() }
          show() {
              if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
              if (!this.isWithContent() || !this._isEnabled) return;
              const t = P.trigger(this._element, this.constructor.Event.SHOW),
                  i = d(this._element),
                  n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
              if (t.defaultPrevented || !n) return;
              const s = this.getTipElement(),
                  o = e(this.constructor.NAME);
              s.setAttribute("id", o), this._element.setAttribute("aria-describedby", o), this.setContent(), this._config.animation && s.classList.add("fade");
              const r = "function" == typeof this._config.placement ? this._config.placement.call(this, s, this._element) : this._config.placement,
                  a = this._getAttachment(r);
              this._addAttachmentClass(a);
              const { container: l } = this._config;
              R.set(s, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.appendChild(s), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = ue(this._element, s, this._getPopperConfig(a)), s.classList.add("show");
              const c = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
              c && s.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => { P.on(t, "mouseover", u) });
              const h = this.tip.classList.contains("fade");
              this._queueCallback(() => {
                  const t = this._hoverState;
                  this._hoverState = null, P.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
              }, this.tip, h)
          }
          hide() {
              if (!this._popper) return;
              const t = this.getTipElement();
              if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
              t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => P.off(t, "mouseover", u)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
              const e = this.tip.classList.contains("fade");
              this._queueCallback(() => { this._isWithActiveTrigger() || ("show" !== this._hoverState && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null)) }, this.tip, e), this._hoverState = ""
          }
          update() { null !== this._popper && this._popper.update() }
          isWithContent() { return Boolean(this.getTitle()) }
          getTipElement() { if (this.tip) return this.tip; const t = document.createElement("div"); return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip }
          setContent() {
              const e = this.getTipElement();
              this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show")
          }
          setElementContent(t, e) { if (null !== t) return r(e) ? (e = a(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Re(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e) }
          getTitle() { let t = this._element.getAttribute("data-bs-original-title"); return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t }
          updateAttachment(t) { return "right" === t ? "end" : "left" === t ? "start" : t }
          _initializeOnDelegatedTarget(t, e) { const i = this.constructor.DATA_KEY; return (e = e || R.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), R.set(t.delegateTarget, i, e)), e }
          _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t }
          _getPopperConfig(t) { const e = { placement: t, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: !0, phase: "afterWrite", fn: t => this._handlePopperPlacementChange(t) }], onFirstUpdate: t => { t.options.placement !== t.placement && this._handlePopperPlacementChange(t) } }; return {...e, ... "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig } }
          _addAttachmentClass(t) { this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t)) }
          _getAttachment(t) { return ze[t.toUpperCase()] }
          _setListeners() {
              this._config.trigger.split(" ").forEach(t => {
                  if ("click" === t) P.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
                  else if ("manual" !== t) {
                      const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                          i = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                      P.on(this._element, e, this._config.selector, t => this._enter(t)), P.on(this._element, i, this._config.selector, t => this._leave(t))
                  }
              }), this._hideModalHandler = () => { this._element && this.hide() }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {...this._config, trigger: "manual", selector: "" } : this._fixTitle()
          }
          _fixTitle() {
              const t = this._element.getAttribute("title"),
                  e = typeof this._element.getAttribute("data-bs-original-title");
              (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
          }
          _enter(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(() => { "show" === e._hoverState && e.show() }, e._config.delay.show) : e.show()) }
          _leave(t, e) { e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(() => { "out" === e._hoverState && e.hide() }, e._config.delay.hide) : e.hide()) }
          _isWithActiveTrigger() {
              for (const t in this._activeTrigger)
                  if (this._activeTrigger[t]) return !0;
              return !1
          }
          _getConfig(t) { const e = U.getDataAttributes(this._element); return Object.keys(e).forEach(t => { We.has(t) && delete e[t] }), (t = {...this.constructor.Default, ...e, ... "object" == typeof t && t ? t : {} }).container = !1 === t.container ? document.body : a(t.container), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = Re(t.template, t.allowList, t.sanitizeFn)), t }
          _getDelegateConfig() {
              const t = {};
              if (this._config)
                  for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
              return t
          }
          _cleanTipClass() {
              const t = this.getTipElement(),
                  e = t.getAttribute("class").match(Be);
              null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
          }
          _handlePopperPlacementChange(t) {
              const { state: e } = t;
              e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
          }
          static jQueryInterface(t) {
              return this.each((function() {
                  const e = Fe.getOrCreateInstance(this, t);
                  if ("string" == typeof t) {
                      if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                      e[t]()
                  }
              }))
          }
      }
      _(Fe);
      const Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          Ke = {...Fe.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' },
          Xe = {...Fe.DefaultType, content: "(string|element|function)" },
          Ye = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
      class Qe extends Fe {
          static get Default() { return Ke }
          static get NAME() { return "popover" }
          static get Event() { return Ye }
          static get DefaultType() { return Xe }
          isWithContent() { return this.getTitle() || this._getContent() }
          getTipElement() { return this.tip || (this.tip = super.getTipElement(), this.getTitle() || t.findOne(".popover-header", this.tip).remove(), this._getContent() || t.findOne(".popover-body", this.tip).remove()), this.tip }
          setContent() {
              const e = this.getTipElement();
              this.setElementContent(t.findOne(".popover-header", e), this.getTitle());
              let i = this._getContent();
              "function" == typeof i && (i = i.call(this._element)), this.setElementContent(t.findOne(".popover-body", e), i), e.classList.remove("fade", "show")
          }
          _addAttachmentClass(t) { this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t)) }
          _getContent() { return this._element.getAttribute("data-bs-content") || this._config.content }
          _cleanTipClass() {
              const t = this.getTipElement(),
                  e = t.getAttribute("class").match(Ve);
              null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
          }
          static jQueryInterface(t) {
              return this.each((function() {
                  const e = Qe.getOrCreateInstance(this, t);
                  if ("string" == typeof t) {
                      if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                      e[t]()
                  }
              }))
          }
      }
      _(Qe);
      const Ge = { offset: 10, method: "auto", target: "" },
          Ze = { offset: "number", method: "string", target: "(string|element)" };
      class Je extends B {
          constructor(t, e) { super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process() }
          static get Default() { return Ge }
          static get NAME() { return "scrollspy" }
          refresh() {
              const e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                  i = "auto" === this._config.method ? e : this._config.method,
                  s = "position" === i ? this._getScrollTop() : 0;
              this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.find(this._selector).map(e => {
                  const o = n(e),
                      r = o ? t.findOne(o) : null;
                  if (r) { const t = r.getBoundingClientRect(); if (t.width || t.height) return [U[i](r).top + s, o] }
                  return null
              }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => { this._offsets.push(t[0]), this._targets.push(t[1]) })
          }
          dispose() { P.off(this._scrollElement, ".bs.scrollspy"), super.dispose() }
          _getConfig(t) {
              if ("string" != typeof(t = {...Ge, ...U.getDataAttributes(this._element), ... "object" == typeof t && t ? t : {} }).target && r(t.target)) {
                  let { id: i } = t.target;
                  i || (i = e("scrollspy"), t.target.id = i), t.target = "#" + i
              }
              return l("scrollspy", t, Ze), t
          }
          _getScrollTop() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }
          _getScrollHeight() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }
          _getOffsetHeight() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }
          _process() {
              const t = this._getScrollTop() + this._config.offset,
                  e = this._getScrollHeight(),
                  i = this._config.offset + e - this._getOffsetHeight();
              if (this._scrollHeight !== e && this.refresh(), t >= i) {
                  const t = this._targets[this._targets.length - 1];
                  this._activeTarget !== t && this._activate(t)
              } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]) }
          }
          _activate(e) {
              this._activeTarget = e, this._clear();
              const i = this._selector.split(",").map(t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
                  n = t.findOne(i.join(","));
              n.classList.contains("dropdown-item") ? (t.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), t.parents(n, ".nav, .list-group").forEach(e => { t.prev(e, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), t.prev(e, ".nav-item").forEach(e => { t.children(e, ".nav-link").forEach(t => t.classList.add("active")) }) })), P.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: e })
          }
          _clear() { t.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active")) }
          static jQueryInterface(t) {
              return this.each((function() {
                  const e = Je.getOrCreateInstance(this, t);
                  if ("string" == typeof t) {
                      if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                      e[t]()
                  }
              }))
          }
      }
      P.on(window, "load.bs.scrollspy.data-api", () => { t.find('[data-bs-spy="scroll"]').forEach(t => new Je(t)) }), _(Je);
      class ti extends B {
          static get NAME() { return "tab" }
          show() {
              if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
              let e;
              const i = s(this._element),
                  n = this._element.closest(".nav, .list-group");
              if (n) {
                  const i = "UL" === n.nodeName || "OL" === n.nodeName ? ":scope > li > .active" : ".active";
                  e = t.find(i, n), e = e[e.length - 1]
              }
              const o = e ? P.trigger(e, "hide.bs.tab", { relatedTarget: this._element }) : null;
              if (P.trigger(this._element, "show.bs.tab", { relatedTarget: e }).defaultPrevented || null !== o && o.defaultPrevented) return;
              this._activate(this._element, n);
              const r = () => { P.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }), P.trigger(this._element, "shown.bs.tab", { relatedTarget: e }) };
              i ? this._activate(i, i.parentNode, r) : r()
          }
          _activate(e, i, n) {
              const s = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t.children(i, ".active") : t.find(":scope > li > .active", i))[0],
                  o = n && s && s.classList.contains("fade"),
                  r = () => this._transitionComplete(e, s, n);
              s && o ? (s.classList.remove("show"), this._queueCallback(r, e, !0)) : r()
          }
          _transitionComplete(e, i, n) {
              if (i) {
                  i.classList.remove("active");
                  const e = t.findOne(":scope > .dropdown-menu .active", i.parentNode);
                  e && e.classList.remove("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
              }
              e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f(e), e.classList.contains("fade") && e.classList.add("show");
              let s = e.parentNode;
              if (s && "LI" === s.nodeName && (s = s.parentNode), s && s.classList.contains("dropdown-menu")) {
                  const i = e.closest(".dropdown");
                  i && t.find(".dropdown-toggle", i).forEach(t => t.classList.add("active")), e.setAttribute("aria-expanded", !0)
              }
              n && n()
          }
          static jQueryInterface(t) {
              return this.each((function() {
                  const e = ti.getOrCreateInstance(this);
                  if ("string" == typeof t) {
                      if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                      e[t]()
                  }
              }))
          }
      }
      P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
          ["A", "AREA"].includes(this.tagName) && t.preventDefault(), h(this) || ti.getOrCreateInstance(this).show()
      })), _(ti);
      const ei = { animation: "boolean", autohide: "boolean", delay: "number" },
          ii = { animation: !0, autohide: !0, delay: 5e3 };
      class ni extends B {
          constructor(t, e) { super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners() }
          static get DefaultType() { return ei }
          static get Default() { return ii }
          static get NAME() { return "toast" }
          show() { P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), f(this._element), this._element.classList.add("showing"), this._queueCallback(() => { this._element.classList.remove("showing"), this._element.classList.add("show"), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide() }, this._element, this._config.animation)) }
          hide() { this._element.classList.contains("show") && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(() => { this._element.classList.add("hide"), P.trigger(this._element, "hidden.bs.toast") }, this._element, this._config.animation))) }
          dispose() { this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose() }
          _getConfig(t) { return t = {...ii, ...U.getDataAttributes(this._element), ... "object" == typeof t && t ? t : {} }, l("toast", t, this.constructor.DefaultType), t }
          _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => { this.hide() }, this._config.delay))) }
          _onInteraction(t, e) {
              switch (t.type) {
                  case "mouseover":
                  case "mouseout":
                      this._hasMouseInteraction = e;
                      break;
                  case "focusin":
                  case "focusout":
                      this._hasKeyboardInteraction = e
              }
              if (e) return void this._clearTimeout();
              const i = t.relatedTarget;
              this._element === i || this._element.contains(i) || this._maybeScheduleHide()
          }
          _setListeners() { P.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()), P.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)), P.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)), P.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)), P.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1)) }
          _clearTimeout() { clearTimeout(this._timeout), this._timeout = null }
          static jQueryInterface(t) {
              return this.each((function() {
                  const e = ni.getOrCreateInstance(this, t);
                  if ("string" == typeof t) {
                      if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                      e[t](this)
                  }
              }))
          }
      }
      return _(ni), { Alert: W, Button: q, Carousel: Z, Collapse: et, Dropdown: Ae, Modal: De, Offcanvas: Ne, Popover: Qe, ScrollSpy: Je, Tab: ti, Toast: ni, Tooltip: Fe }
  }));


  //# sourceMappingURL=bootstrap.bundle.min.js.map


  /*
   anime.js
   2017 Julian Garnier
   Released under the MIT license
  */
  var $jscomp$this = this;
  (function(v, p) { "function" === typeof define && define.amd ? define([], p) : "object" === typeof module && module.exports ? module.exports = p() : v.anime = p() })(this, function() {
      function v(a) { if (!g.col(a)) try { return document.querySelectorAll(a) } catch (b) {} }

      function p(a) { return a.reduce(function(a, d) { return a.concat(g.arr(d) ? p(d) : d) }, []) }

      function w(a) {
          if (g.arr(a)) return a;
          g.str(a) && (a = v(a) || a);
          return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a]
      }

      function F(a, b) { return a.some(function(a) { return a === b }) }

      function A(a) {
          var b = {},
              d;
          for (d in a) b[d] = a[d];
          return b
      }

      function G(a, b) {
          var d = A(a),
              c;
          for (c in a) d[c] = b.hasOwnProperty(c) ? b[c] : a[c];
          return d
      }

      function B(a, b) {
          var d = A(a),
              c;
          for (c in b) d[c] = g.und(a[c]) ? b[c] : a[c];
          return d
      }

      function S(a) {
          a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(a, b, d, h) { return b + b + d + d + h + h });
          var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
          a = parseInt(b[1], 16);
          var d = parseInt(b[2], 16),
              b = parseInt(b[3], 16);
          return "rgb(" + a + "," + d + "," + b + ")"
      }

      function T(a) {
          function b(a, b, c) {
              0 >
                  c && (c += 1);
              1 < c && --c;
              return c < 1 / 6 ? a + 6 * (b - a) * c : .5 > c ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a
          }
          var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);
          a = parseInt(d[1]) / 360;
          var c = parseInt(d[2]) / 100,
              d = parseInt(d[3]) / 100;
          if (0 == c) c = d = a = d;
          else {
              var e = .5 > d ? d * (1 + c) : d + c - d * c,
                  l = 2 * d - e,
                  c = b(l, e, a + 1 / 3),
                  d = b(l, e, a);
              a = b(l, e, a - 1 / 3)
          }
          return "rgb(" + 255 * c + "," + 255 * d + "," + 255 * a + ")"
      }

      function x(a) { if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a)) return a[2] }

      function U(a) {
          if (-1 < a.indexOf("translate")) return "px";
          if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg"
      }

      function H(a, b) { return g.fnc(a) ? a(b.target, b.id, b.total) : a }

      function C(a, b) { if (b in a.style) return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0" }

      function I(a, b) { if (g.dom(a) && F(V, b)) return "transform"; if (g.dom(a) && (a.getAttribute(b) || g.svg(a) && a[b])) return "attribute"; if (g.dom(a) && "transform" !== b && C(a, b)) return "css"; if (null != a[b]) return "object" }

      function W(a, b) {
          var d = U(b),
              d = -1 < b.indexOf("scale") ?
              1 : 0 + d;
          a = a.style.transform;
          if (!a) return d;
          for (var c = [], e = [], l = [], h = /(\w+)\((.+?)\)/g; c = h.exec(a);) e.push(c[1]), l.push(c[2]);
          a = l.filter(function(a, c) { return e[c] === b });
          return a.length ? a[0] : d
      }

      function J(a, b) {
          switch (I(a, b)) {
              case "transform":
                  return W(a, b);
              case "css":
                  return C(a, b);
              case "attribute":
                  return a.getAttribute(b)
          }
          return a[b] || 0
      }

      function K(a, b) {
          var d = /^(\*=|\+=|-=)/.exec(a);
          if (!d) return a;
          b = parseFloat(b);
          a = parseFloat(a.replace(d[0], ""));
          switch (d[0][0]) {
              case "+":
                  return b + a;
              case "-":
                  return b - a;
              case "*":
                  return b *
                      a
          }
      }

      function D(a) { return g.obj(a) && a.hasOwnProperty("totalLength") }

      function X(a, b) {
          function d(c) { c = void 0 === c ? 0 : c; return a.el.getPointAtLength(1 <= b + c ? b + c : 0) }
          var c = d(),
              e = d(-1),
              l = d(1);
          switch (a.property) {
              case "x":
                  return c.x;
              case "y":
                  return c.y;
              case "angle":
                  return 180 * Math.atan2(l.y - e.y, l.x - e.x) / Math.PI
          }
      }

      function L(a, b) {
          var d = /-?\d*\.?\d+/g;
          a = D(a) ? a.totalLength : a;
          if (g.col(a)) b = g.rgb(a) ? a : g.hex(a) ? S(a) : g.hsl(a) ? T(a) : void 0;
          else {
              var c = x(a);
              a = c ? a.substr(0, a.length - c.length) : a;
              b = b ? a + b : a
          }
          b += "";
          return {
              original: b,
              numbers: b.match(d) ? b.match(d).map(Number) : [0],
              strings: b.split(d)
          }
      }

      function Y(a, b) { return b.reduce(function(b, c, e) { return b + a[e - 1] + c }) }

      function M(a) { return (a ? p(g.arr(a) ? a.map(w) : w(a)) : []).filter(function(a, d, c) { return c.indexOf(a) === d }) }

      function Z(a) { var b = M(a); return b.map(function(a, c) { return { target: a, id: c, total: b.length } }) }

      function aa(a, b) {
          var d = A(b);
          if (g.arr(a)) {
              var c = a.length;
              2 !== c || g.obj(a[0]) ? g.fnc(b.duration) || (d.duration = b.duration / c) : a = { value: a }
          }
          return w(a).map(function(a, c) {
              c = c ? 0 : b.delay;
              a = g.obj(a) && !D(a) ? a : { value: a };
              g.und(a.delay) && (a.delay = c);
              return a
          }).map(function(a) { return B(a, d) })
      }

      function ba(a, b) {
          var d = {},
              c;
          for (c in a) {
              var e = H(a[c], b);
              g.arr(e) && (e = e.map(function(a) { return H(a, b) }), 1 === e.length && (e = e[0]));
              d[c] = e
          }
          d.duration = parseFloat(d.duration);
          d.delay = parseFloat(d.delay);
          return d
      }

      function ca(a) { return g.arr(a) ? y.apply(this, a) : N[a] }

      function da(a, b) {
          var d;
          return a.tweens.map(function(c) {
              c = ba(c, b);
              var e = c.value,
                  l = J(b.target, a.name),
                  h = d ? d.to.original : l,
                  h = g.arr(e) ? e[0] : h,
                  m = K(g.arr(e) ?
                      e[1] : e, h),
                  l = x(m) || x(h) || x(l);
              c.isPath = D(e);
              c.from = L(h, l);
              c.to = L(m, l);
              c.start = d ? d.end : a.offset;
              c.end = c.start + c.delay + c.duration;
              c.easing = ca(c.easing);
              c.elasticity = (1E3 - Math.min(Math.max(c.elasticity, 1), 999)) / 1E3;
              g.col(c.from.original) && (c.round = 1);
              return d = c
          })
      }

      function ea(a, b) {
          return p(a.map(function(a) {
              return b.map(function(b) {
                  var c = I(a.target, b.name);
                  if (c) {
                      var d = da(b, a);
                      b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay }
                  } else b = void 0;
                  return b
              })
          })).filter(function(a) { return !g.und(a) })
      }

      function O(a, b, d) { var c = "delay" === a ? Math.min : Math.max; return b.length ? c.apply(Math, b.map(function(b) { return b[a] })) : d[a] }

      function fa(a) {
          var b = G(ga, a),
              d = G(ha, a),
              c = Z(a.targets),
              e = [],
              g = B(b, d),
              h;
          for (h in a) g.hasOwnProperty(h) || "targets" === h || e.push({ name: h, offset: g.offset, tweens: aa(a[h], d) });
          a = ea(c, e);
          return B(b, { children: [], animatables: c, animations: a, duration: O("duration", a, d), delay: O("delay", a, d) })
      }

      function n(a) {
          function b() { return window.Promise && new Promise(function(a) { return Q = a }) }

          function d(a) {
              return f.reversed ?
                  f.duration - a : a
          }

          function c(a) {
              for (var b = 0, c = {}, d = f.animations, e = {}; b < d.length;) {
                  var g = d[b],
                      h = g.animatable,
                      m = g.tweens;
                  e.tween = m.filter(function(b) { return a < b.end })[0] || m[m.length - 1];
                  e.isPath$1 = e.tween.isPath;
                  e.round = e.tween.round;
                  e.eased = e.tween.easing(Math.min(Math.max(a - e.tween.start - e.tween.delay, 0), e.tween.duration) / e.tween.duration, e.tween.elasticity);
                  m = Y(e.tween.to.numbers.map(function(a) {
                      return function(b, c) {
                          c = a.isPath$1 ? 0 : a.tween.from.numbers[c];
                          b = c + a.eased * (b - c);
                          a.isPath$1 && (b = X(a.tween.value,
                              b));
                          a.round && (b = Math.round(b * a.round) / a.round);
                          return b
                      }
                  }(e)), e.tween.to.strings);
                  ia[g.type](h.target, g.property, m, c, h.id);
                  g.currentValue = m;
                  b++;
                  e = { isPath$1: e.isPath$1, tween: e.tween, eased: e.eased, round: e.round }
              }
              if (c)
                  for (var k in c) E || (E = C(document.body, "transform") ? "transform" : "-webkit-transform"), f.animatables[k].target.style[E] = c[k].join(" ");
              f.currentTime = a;
              f.progress = a / f.duration * 100
          }

          function e(a) { if (f[a]) f[a](f) }

          function g() { f.remaining && !0 !== f.remaining && f.remaining-- }

          function h(a) {
              var h = f.duration,
                  l = f.offset,
                  n = f.delay,
                  P = f.currentTime,
                  q = f.reversed,
                  r = d(a),
                  r = Math.min(Math.max(r, 0), h);
              if (f.children) {
                  var p = f.children;
                  if (r >= f.currentTime)
                      for (var u = 0; u < p.length; u++) p[u].seek(r);
                  else
                      for (u = p.length; u--;) p[u].seek(r)
              }
              r > l && r < h ? (c(r), !f.began && r >= n && (f.began = !0, e("begin")), e("run")) : (r <= l && 0 !== P && (c(0), q && g()), r >= h && P !== h && (c(h), q || g()));
              a >= h && (f.remaining ? (t = m, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), "Promise" in window && (Q(), R = b()), f.completed || (f.completed = !0, e("complete"))),
                  k = 0);
              e("update")
          }
          a = void 0 === a ? {} : a;
          var m, t, k = 0,
              Q = null,
              R = b(),
              f = fa(a);
          f.reset = function() {
              var a = f.direction,
                  b = f.loop;
              f.currentTime = 0;
              f.progress = 0;
              f.paused = !0;
              f.began = !1;
              f.completed = !1;
              f.reversed = "reverse" === a;
              f.remaining = "alternate" === a && 1 === b ? 2 : b;
              for (a = f.children.length; a--;) b = f.children[a], b.seek(b.offset), b.reset()
          };
          f.tick = function(a) {
              m = a;
              t || (t = m);
              h((k + m - t) * n.speed)
          };
          f.seek = function(a) { h(d(a)) };
          f.pause = function() {
              var a = q.indexOf(f); - 1 < a && q.splice(a, 1);
              f.paused = !0
          };
          f.play = function() {
              f.paused && (f.paused = !1, t = 0, k = d(f.currentTime), q.push(f), z || ja())
          };
          f.reverse = function() {
              f.reversed = !f.reversed;
              t = 0;
              k = d(f.currentTime)
          };
          f.restart = function() {
              f.pause();
              f.reset();
              f.play()
          };
          f.finished = R;
          f.reset();
          f.autoplay && f.play();
          return f
      }
      var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
          ha = { duration: 1E3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
          V = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
          E, g = {
              arr: function(a) { return Array.isArray(a) },
              obj: function(a) { return -1 < Object.prototype.toString.call(a).indexOf("Object") },
              svg: function(a) { return a instanceof SVGElement },
              dom: function(a) { return a.nodeType || g.svg(a) },
              str: function(a) { return "string" === typeof a },
              fnc: function(a) { return "function" === typeof a },
              und: function(a) { return "undefined" === typeof a },
              hex: function(a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) },
              rgb: function(a) { return /^rgb/.test(a) },
              hsl: function(a) { return /^hsl/.test(a) },
              col: function(a) {
                  return g.hex(a) ||
                      g.rgb(a) || g.hsl(a)
              }
          },
          y = function() {
              function a(a, d, c) { return (((1 - 3 * c + 3 * d) * a + (3 * c - 6 * d)) * a + 3 * d) * a }
              return function(b, d, c, e) {
                  if (0 <= b && 1 >= b && 0 <= c && 1 >= c) {
                      var g = new Float32Array(11);
                      if (b !== d || c !== e)
                          for (var h = 0; 11 > h; ++h) g[h] = a(.1 * h, b, c);
                      return function(h) {
                          if (b === d && c === e) return h;
                          if (0 === h) return 0;
                          if (1 === h) return 1;
                          for (var m = 0, k = 1; 10 !== k && g[k] <= h; ++k) m += .1;
                          --k;
                          var k = m + (h - g[k]) / (g[k + 1] - g[k]) * .1,
                              l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
                          if (.001 <= l) {
                              for (m = 0; 4 > m; ++m) {
                                  l = 3 * (1 - 3 * c + 3 * b) * k * k + 2 * (3 * c - 6 * b) * k + 3 * b;
                                  if (0 === l) break;
                                  var n = a(k, b, c) - h,
                                      k = k - n / l
                              }
                              h = k
                          } else if (0 === l) h = k;
                          else {
                              var k = m,
                                  m = m + .1,
                                  f = 0;
                              do n = k + (m - k) / 2, l = a(n, b, c) - h, 0 < l ? m = n : k = n; while (1e-7 < Math.abs(l) && 10 > ++f);
                              h = n
                          }
                          return a(h, d, e)
                      }
                  }
              }
          }(),
          N = function() {
              function a(a, b) { return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b) }
              var b = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                  d = {
                      In: [
                          [.55, .085, .68, .53],
                          [.55, .055, .675, .19],
                          [.895, .03, .685, .22],
                          [.755, .05, .855, .06],
                          [.47, 0, .745, .715],
                          [.95, .05, .795, .035],
                          [.6, .04, .98,
                              .335
                          ],
                          [.6, -.28, .735, .045], a
                      ],
                      Out: [
                          [.25, .46, .45, .94],
                          [.215, .61, .355, 1],
                          [.165, .84, .44, 1],
                          [.23, 1, .32, 1],
                          [.39, .575, .565, 1],
                          [.19, 1, .22, 1],
                          [.075, .82, .165, 1],
                          [.175, .885, .32, 1.275],
                          function(b, c) { return 1 - a(1 - b, c) }
                      ],
                      InOut: [
                          [.455, .03, .515, .955],
                          [.645, .045, .355, 1],
                          [.77, 0, .175, 1],
                          [.86, 0, .07, 1],
                          [.445, .05, .55, .95],
                          [1, 0, 0, 1],
                          [.785, .135, .15, .86],
                          [.68, -.55, .265, 1.55],
                          function(b, c) { return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2 }
                      ]
                  },
                  c = { linear: y(.25, .25, .75, .75) },
                  e = {},
                  l;
              for (l in d) e.type = l, d[e.type].forEach(function(a) {
                  return function(d,
                      e) { c["ease" + a.type + b[e]] = g.fnc(d) ? d : y.apply($jscomp$this, d) }
              }(e)), e = { type: e.type };
              return c
          }(),
          ia = {
              css: function(a, b, d) { return a.style[b] = d },
              attribute: function(a, b, d) { return a.setAttribute(b, d) },
              object: function(a, b, d) { return a[b] = d },
              transform: function(a, b, d, c, e) {
                  c[e] || (c[e] = []);
                  c[e].push(b + "(" + d + ")")
              }
          },
          q = [],
          z = 0,
          ja = function() {
              function a() { z = requestAnimationFrame(b) }

              function b(b) {
                  var c = q.length;
                  if (c) {
                      for (var d = 0; d < c;) q[d] && q[d].tick(b), d++;
                      a()
                  } else cancelAnimationFrame(z), z = 0
              }
              return a
          }();
      n.version = "2.0.2";
      n.speed = 1;
      n.running = q;
      n.remove = function(a) {
          a = M(a);
          for (var b = q.length; b--;)
              for (var d = q[b], c = d.animations, e = c.length; e--;) F(a, c[e].animatable.target) && (c.splice(e, 1), c.length || d.pause())
      };
      n.getValue = J;
      n.path = function(a, b) {
          var d = g.str(a) ? v(a)[0] : a,
              c = b || 100;
          return function(a) { return { el: d, property: a, totalLength: d.getTotalLength() * (c / 100) } }
      };
      n.setDashoffset = function(a) {
          var b = a.getTotalLength();
          a.setAttribute("stroke-dasharray", b);
          return b
      };
      n.bezier = y;
      n.easings = N;
      n.timeline = function(a) {
          var b = n(a);
          b.pause();
          b.duration = 0;
          b.add = function(a) {
              b.children.forEach(function(a) {
                  a.began = !0;
                  a.completed = !0
              });
              w(a).forEach(function(a) {
                  var c = b.duration,
                      d = a.offset;
                  a.autoplay = !1;
                  a.offset = g.und(d) ? c : K(d, c);
                  b.seek(a.offset);
                  a = n(a);
                  a.duration > c && (b.duration = a.duration);
                  a.began = !0;
                  b.children.push(a)
              });
              b.reset();
              b.seek(0);
              b.autoplay && b.restart();
              return b
          };
          return b
      };
      n.random = function(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a };
      return n
  });

  /*!
   * Jarallax v2.0.2 (https://github.com/nk-o/jarallax)
   * Copyright 2022 nK <https://nkdev.info>
   * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
   */
  ! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).jarallax = t() }(this, (function() {
      "use strict";

      function e(e) { "complete" === document.readyState || "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e, { capture: !0, once: !0, passive: !0 }) }
      let t;
      t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
      var i = t;
      const { navigator: o } = i, n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(o.userAgent);
      let a, s;

      function l() { n ? (!a && document.body && (a = document.createElement("div"), a.style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(a)), s = (a ? a.clientHeight : 0) || i.innerHeight || document.documentElement.clientHeight) : s = i.innerHeight || document.documentElement.clientHeight }
      l(), i.addEventListener("resize", l), i.addEventListener("orientationchange", l), i.addEventListener("load", l), e((() => { l() }));
      const r = [];

      function m() {
          r.length && (r.forEach(((e, t) => {
              const { instance: o, oldData: n } = e, a = o.$item.getBoundingClientRect(), l = { width: a.width, height: a.height, top: a.top, bottom: a.bottom, wndW: i.innerWidth, wndH: s }, m = !n || n.wndW !== l.wndW || n.wndH !== l.wndH || n.width !== l.width || n.height !== l.height, c = m || !n || n.top !== l.top || n.bottom !== l.bottom;
              r[t].oldData = l, m && o.onResize(), c && o.onScroll()
          })), i.requestAnimationFrame(m))
      }
      let c = 0;
      class p {
          constructor(e, t) {
              const i = this;
              i.instanceID = c, c += 1, i.$item = e, i.defaults = { type: "scroll", speed: .5, imgSrc: null, imgElement: ".jarallax-img", imgSize: "cover", imgPosition: "50% 50%", imgRepeat: "no-repeat", keepImg: !1, elementInViewport: null, zIndex: -100, disableParallax: !1, disableVideo: !1, videoSrc: null, videoStartTime: 0, videoEndTime: 0, videoVolume: 0, videoLoop: !0, videoPlayOnlyVisible: !0, videoLazyLoading: !0, onScroll: null, onInit: null, onDestroy: null, onCoverImage: null };
              const n = i.$item.dataset || {},
                  a = {};
              if (Object.keys(n).forEach((e => {
                      const t = e.substr(0, 1).toLowerCase() + e.substr(1);
                      t && void 0 !== i.defaults[t] && (a[t] = n[e])
                  })), i.options = i.extend({}, i.defaults, a, t), i.pureOptions = i.extend({}, i.options), Object.keys(i.options).forEach((e => { "true" === i.options[e] ? i.options[e] = !0 : "false" === i.options[e] && (i.options[e] = !1) })), i.options.speed = Math.min(2, Math.max(-1, parseFloat(i.options.speed))), "string" == typeof i.options.disableParallax && (i.options.disableParallax = new RegExp(i.options.disableParallax)), i.options.disableParallax instanceof RegExp) {
                  const e = i.options.disableParallax;
                  i.options.disableParallax = () => e.test(o.userAgent)
              }
              if ("function" != typeof i.options.disableParallax && (i.options.disableParallax = () => !1), "string" == typeof i.options.disableVideo && (i.options.disableVideo = new RegExp(i.options.disableVideo)), i.options.disableVideo instanceof RegExp) {
                  const e = i.options.disableVideo;
                  i.options.disableVideo = () => e.test(o.userAgent)
              }
              "function" != typeof i.options.disableVideo && (i.options.disableVideo = () => !1);
              let s = i.options.elementInViewport;
              s && "object" == typeof s && void 0 !== s.length && ([s] = s), s instanceof Element || (s = null), i.options.elementInViewport = s, i.image = { src: i.options.imgSrc || null, $container: null, useImgTag: !1, position: "fixed" }, i.initImg() && i.canInitParallax() && i.init()
          }
          css(e, t) { return "string" == typeof t ? i.getComputedStyle(e).getPropertyValue(t) : (Object.keys(t).forEach((i => { e.style[i] = t[i] })), e) }
          extend(e, ...t) { return e = e || {}, Object.keys(t).forEach((i => { t[i] && Object.keys(t[i]).forEach((o => { e[o] = t[i][o] })) })), e }
          getWindowData() { return { width: i.innerWidth || document.documentElement.clientWidth, height: s, y: document.documentElement.scrollTop } }
          initImg() { const e = this; let t = e.options.imgElement; return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image, t.src = e.options.imgSrc) : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage)) }
          canInitParallax() { return !this.options.disableParallax() }
          init() {
              const e = this,
                  t = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden" };
              let o = { pointerEvents: "none", transformStyle: "preserve-3d", backfaceVisibility: "hidden", willChange: "transform,opacity" };
              if (!e.options.keepImg) {
                  const t = e.$item.getAttribute("style");
                  if (t && e.$item.setAttribute("data-jarallax-original-styles", t), e.image.useImgTag) {
                      const t = e.image.$item.getAttribute("style");
                      t && e.image.$item.setAttribute("data-jarallax-original-styles", t)
                  }
              }
              if ("static" === e.css(e.$item, "position") && e.css(e.$item, { position: "relative" }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, { zIndex: 0 }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, { "z-index": e.options.zIndex }), "fixed" === this.image.position && e.css(e.image.$container, { "-webkit-clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)", "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }), e.image.$container.setAttribute("id", `jarallax-container-${e.instanceID}`), e.$item.appendChild(e.image.$container), e.image.useImgTag ? o = e.extend({ "object-fit": e.options.imgSize, "object-position": e.options.imgPosition, "max-width": "none" }, t, o) : (e.image.$item = document.createElement("div"), e.image.src && (o = e.extend({ "background-position": e.options.imgPosition, "background-size": e.options.imgSize, "background-repeat": e.options.imgRepeat, "background-image": e.image.bgImage || `url("${e.image.src}")` }, t, o))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) {
                  const t = function(e) { const t = []; for (; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e); return t }(e.$item).filter((e => {
                      const t = i.getComputedStyle(e),
                          o = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                      return o && "none" !== o || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                  }));
                  e.image.position = t.length ? "absolute" : "fixed"
              }
              o.position = e.image.position, e.css(e.image.$item, o), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, { "background-image": "none" }), e.addToParallaxList()
          }
          addToParallaxList() { r.push({ instance: this }), 1 === r.length && i.requestAnimationFrame(m) }
          removeFromParallaxList() {
              const e = this;
              r.forEach(((t, i) => { t.instance.instanceID === e.instanceID && r.splice(i, 1) }))
          }
          destroy() {
              const e = this;
              e.removeFromParallaxList();
              const t = e.$item.getAttribute("data-jarallax-original-styles");
              if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                  const i = e.image.$item.getAttribute("data-jarallax-original-styles");
                  e.image.$item.removeAttribute("data-jarallax-original-styles"), i ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
              }
              e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
          }
          clipContainer() {}
          coverImage() {
              const e = this,
                  t = e.image.$container.getBoundingClientRect(),
                  i = t.height,
                  { speed: o } = e.options,
                  n = "scroll" === e.options.type || "scroll-opacity" === e.options.type;
              let a = 0,
                  l = i,
                  r = 0;
              return n && (0 > o ? (a = o * Math.max(i, s), s < i && (a -= o * (i - s))) : a = o * (i + s), 1 < o ? l = Math.abs(a - s) : 0 > o ? l = a / o + Math.abs(a) : l += (s - i) * (1 - o), a /= 2), e.parallaxScrollDistance = a, r = n ? (s - l) / 2 : (i - l) / 2, e.css(e.image.$item, { height: `${l}px`, marginTop: `${r}px`, left: "fixed" === e.image.position ? `${t.left}px` : "0", width: `${t.width}px` }), e.options.onCoverImage && e.options.onCoverImage.call(e), { image: { height: l, marginTop: r }, container: t }
          }
          isVisible() { return this.isElementInViewport || !1 }
          onScroll(e) {
              const t = this,
                  o = t.$item.getBoundingClientRect(),
                  n = o.top,
                  a = o.height,
                  l = {};
              let r = o;
              if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= s && r.left <= i.innerWidth, !e && !t.isElementInViewport) return;
              const m = Math.max(0, n),
                  c = Math.max(0, a + n),
                  p = Math.max(0, -n),
                  d = Math.max(0, n + a - s),
                  g = Math.max(0, a - (n + a - s)),
                  u = Math.max(0, -n + s - a),
                  f = 1 - (s - n) / (s + a) * 2;
              let h = 1;
              if (a < s ? h = 1 - (p || d) / a : c <= s ? h = c / s : g <= s && (h = g / s), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (l.transform = "translate3d(0,0,0)", l.opacity = h), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                  let e = 1;
                  0 > t.options.speed ? e -= t.options.speed * h : e += t.options.speed * (1 - h), l.transform = `scale(${e}) translate3d(0,0,0)`
              }
              if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) { let e = t.parallaxScrollDistance * f; "absolute" === t.image.position && (e -= n), l.transform = `translate3d(0,${e}px,0)` }
              t.css(t.image.$item, l), t.options.onScroll && t.options.onScroll.call(t, { section: o, beforeTop: m, beforeTopEnd: c, afterTop: p, beforeBottom: d, beforeBottomEnd: g, afterBottom: u, visiblePercent: h, fromViewportCenter: f })
          }
          onResize() { this.coverImage() }
      }
      const d = function(e, t, ...i) {
          ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
          const o = e.length;
          let n, a = 0;
          for (; a < o; a += 1)
              if ("object" == typeof t || void 0 === t ? e[a].jarallax || (e[a].jarallax = new p(e[a], t)) : e[a].jarallax && (n = e[a].jarallax[t].apply(e[a].jarallax, i)), void 0 !== n) return n;
          return e
      };
      d.constructor = p;
      const g = i.jQuery;
      if (void 0 !== g) {
          const e = function(...e) { Array.prototype.unshift.call(e, this); const t = d.apply(i, e); return "object" != typeof t ? t : this };
          e.constructor = d.constructor;
          const t = g.fn.jarallax;
          g.fn.jarallax = e, g.fn.jarallax.noConflict = function() { return g.fn.jarallax = t, this }
      }
      return e((() => { d(document.querySelectorAll("[data-jarallax]")) })), d
  }));


  //# sourceMappingURL=jarallax.min.js.map


  //# sourceMappingURL=bootstrap.min.js.map

  ! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t() }(this, function() {
      return function(e) {
          function t(o) { if (n[o]) return n[o].exports; var i = n[o] = { exports: {}, id: o, loaded: !1 }; return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports }
          var n = {};
          return t.m = e, t.c = n, t.p = "dist/", t(0)
      }([function(e, t, n) {
          "use strict";

          function o(e) { return e && e.__esModule ? e : { default: e } }
          var i = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e },
              r = n(1),
              a = (o(r), n(6)),
              u = o(a),
              c = n(7),
              f = o(c),
              s = n(8),
              d = o(s),
              l = n(9),
              p = o(l),
              m = n(10),
              b = o(m),
              v = n(11),
              y = o(v),
              g = n(14),
              h = o(g),
              w = [],
              k = !1,
              x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
              j = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w },
              O = function() { w = (0, h.default)(), j() },
              _ = function() { w.forEach(function(e, t) { e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay") }) },
              S = function(e) { return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0 },
              z = function(e) {
                  x = i(x, e), w = (0, h.default)();
                  var t = document.all && !window.atob;
                  return S(x.disable) || t ? _() : (document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() { j(!0) }) : document.addEventListener(x.startEvent, function() { j(!0) }), window.addEventListener("resize", (0, f.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                      (0, b.default)(w, x.once)
                  }, x.throttleDelay)), x.disableMutationObserver || (0, d.default)("[data-aos]", O), w)
              };
          e.exports = { init: z, refresh: j, refreshHard: O }
      }, function(e, t) {}, , , , , function(e, t) {
          (function(t) {
              "use strict";

              function n(e, t, n) {
                  function o(t) {
                      var n = b,
                          o = v;
                      return b = v = void 0, k = t, g = e.apply(o, n)
                  }

                  function r(e) { return k = e, h = setTimeout(s, t), _ ? o(e) : g }

                  function a(e) {
                      var n = e - w,
                          o = e - k,
                          i = t - n;
                      return S ? j(i, y - o) : i
                  }

                  function c(e) {
                      var n = e - w,
                          o = e - k;
                      return void 0 === w || n >= t || n < 0 || S && o >= y
                  }

                  function s() { var e = O(); return c(e) ? d(e) : void(h = setTimeout(s, a(e))) }

                  function d(e) { return h = void 0, z && b ? o(e) : (b = v = void 0, g) }

                  function l() { void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0 }

                  function p() { return void 0 === h ? g : d(O()) }

                  function m() {
                      var e = O(),
                          n = c(e);
                      if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (S) return h = setTimeout(s, t), o(w) }
                      return void 0 === h && (h = setTimeout(s, t)), g
                  }
                  var b, v, y, g, h, w, k = 0,
                      _ = !1,
                      S = !1,
                      z = !0;
                  if ("function" != typeof e) throw new TypeError(f);
                  return t = u(t) || 0, i(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
              }

              function o(e, t, o) {
                  var r = !0,
                      a = !0;
                  if ("function" != typeof e) throw new TypeError(f);
                  return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, { leading: r, maxWait: t, trailing: a })
              }

              function i(e) { var t = "undefined" == typeof e ? "undefined" : c(e); return !!e && ("object" == t || "function" == t) }

              function r(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e)) }

              function a(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d }

              function u(e) {
                  if ("number" == typeof e) return e;
                  if (a(e)) return s;
                  if (i(e)) {
                      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                      e = i(t) ? t + "" : t
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(l, "");
                  var n = m.test(e);
                  return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
              }
              var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                  f = "Expected a function",
                  s = NaN,
                  d = "[object Symbol]",
                  l = /^\s+|\s+$/g,
                  p = /^[-+]0x[0-9a-f]+$/i,
                  m = /^0b[01]+$/i,
                  b = /^0o[0-7]+$/i,
                  v = parseInt,
                  y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                  g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                  h = y || g || Function("return this")(),
                  w = Object.prototype,
                  k = w.toString,
                  x = Math.max,
                  j = Math.min,
                  O = function() { return h.Date.now() };
              e.exports = o
          }).call(t, function() { return this }())
      }, function(e, t) {
          (function(t) {
              "use strict";

              function n(e, t, n) {
                  function i(t) {
                      var n = b,
                          o = v;
                      return b = v = void 0, O = t, g = e.apply(o, n)
                  }

                  function r(e) { return O = e, h = setTimeout(s, t), _ ? i(e) : g }

                  function u(e) {
                      var n = e - w,
                          o = e - O,
                          i = t - n;
                      return S ? x(i, y - o) : i
                  }

                  function f(e) {
                      var n = e - w,
                          o = e - O;
                      return void 0 === w || n >= t || n < 0 || S && o >= y
                  }

                  function s() { var e = j(); return f(e) ? d(e) : void(h = setTimeout(s, u(e))) }

                  function d(e) { return h = void 0, z && b ? i(e) : (b = v = void 0, g) }

                  function l() { void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0 }

                  function p() { return void 0 === h ? g : d(j()) }

                  function m() {
                      var e = j(),
                          n = f(e);
                      if (b = arguments, v = this, w = e, n) { if (void 0 === h) return r(w); if (S) return h = setTimeout(s, t), i(w) }
                      return void 0 === h && (h = setTimeout(s, t)), g
                  }
                  var b, v, y, g, h, w, O = 0,
                      _ = !1,
                      S = !1,
                      z = !0;
                  if ("function" != typeof e) throw new TypeError(c);
                  return t = a(t) || 0, o(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
              }

              function o(e) { var t = "undefined" == typeof e ? "undefined" : u(e); return !!e && ("object" == t || "function" == t) }

              function i(e) { return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e)) }

              function r(e) { return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s }

              function a(e) {
                  if ("number" == typeof e) return e;
                  if (r(e)) return f;
                  if (o(e)) {
                      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                      e = o(t) ? t + "" : t
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(d, "");
                  var n = p.test(e);
                  return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
              }
              var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
                  c = "Expected a function",
                  f = NaN,
                  s = "[object Symbol]",
                  d = /^\s+|\s+$/g,
                  l = /^[-+]0x[0-9a-f]+$/i,
                  p = /^0b[01]+$/i,
                  m = /^0o[0-7]+$/i,
                  b = parseInt,
                  v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                  y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                  g = v || y || Function("return this")(),
                  h = Object.prototype,
                  w = h.toString,
                  k = Math.max,
                  x = Math.min,
                  j = function() { return g.Date.now() };
              e.exports = n
          }).call(t, function() { return this }())
      }, function(e, t) {
          "use strict";

          function n(e, t) {
              var n = window.document,
                  r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                  a = new r(o);
              i = t, a.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })
          }

          function o(e) {
              e && e.forEach(function(e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                      n = Array.prototype.slice.call(e.removedNodes),
                      o = t.concat(n).filter(function(e) { return e.hasAttribute && e.hasAttribute("data-aos") }).length;
                  o && i()
              })
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = function() {};
          t.default = n
      }, function(e, t) {
          "use strict";

          function n(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

          function o() { return navigator.userAgent || navigator.vendor || window.opera || "" }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = function() {
                  function e(e, t) {
                      for (var n = 0; n < t.length; n++) {
                          var o = t[n];
                          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                      }
                  }
                  return function(t, n, o) { return n && e(t.prototype, n), o && e(t, o), t }
              }(),
              r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              f = function() {
                  function e() { n(this, e) }
                  return i(e, [{ key: "phone", value: function() { var e = o(); return !(!r.test(e) && !a.test(e.substr(0, 4))) } }, { key: "mobile", value: function() { var e = o(); return !(!u.test(e) && !c.test(e.substr(0, 4))) } }, { key: "tablet", value: function() { return this.mobile() && !this.phone() } }]), e
              }();
          t.default = new f
      }, function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function(e, t, n) {
                  var o = e.node.getAttribute("data-aos-once");
                  t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
              },
              o = function(e, t) {
                  var o = window.pageYOffset,
                      i = window.innerHeight;
                  e.forEach(function(e, r) { n(e, i + o, t) })
              };
          t.default = o
      }, function(e, t, n) {
          "use strict";

          function o(e) { return e && e.__esModule ? e : { default: e } }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = n(12),
              r = o(i),
              a = function(e, t) { return e.forEach(function(e, n) { e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset) }), e };
          t.default = a
      }, function(e, t, n) {
          "use strict";

          function o(e) { return e && e.__esModule ? e : { default: e } }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = n(13),
              r = o(i),
              a = function(e, t) {
                  var n = 0,
                      o = 0,
                      i = window.innerHeight,
                      a = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") };
                  switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                      case "top-bottom":
                          break;
                      case "center-bottom":
                          n += e.offsetHeight / 2;
                          break;
                      case "bottom-bottom":
                          n += e.offsetHeight;
                          break;
                      case "top-center":
                          n += i / 2;
                          break;
                      case "bottom-center":
                          n += i / 2 + e.offsetHeight;
                          break;
                      case "center-center":
                          n += i / 2 + e.offsetHeight / 2;
                          break;
                      case "top-top":
                          n += i;
                          break;
                      case "bottom-top":
                          n += e.offsetHeight + i;
                          break;
                      case "center-top":
                          n += e.offsetHeight / 2 + i
                  }
                  return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
              };
          t.default = a
      }, function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function(e) { for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent; return { top: n, left: t } };
          t.default = n
      }, function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function(e) { return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) { return { node: e } }) };
          t.default = n
      }])
  });


  /* Chocolat-1.0.4 */
  /* jQuery plugin for lightbox */
  ! function() {
      "use strict";
      let e = void 0;

      function t(e, t) {
          return new Promise(s => {
              const i = () => { t.removeEventListener("transitionend", i), s() };
              t.addEventListener("transitionend", i);
              const l = t.getAttribute("class"),
                  n = t.getAttribute("style");
              e(), l === t.getAttribute("class") && n === t.getAttribute("style") && i(), 0 === parseFloat(getComputedStyle(t).transitionDuration) && i()
          })
      }

      function s({ src: e, srcset: t, sizes: s }) { const i = new Image; return i.src = e, t && (i.srcset = t), s && (i.sizes = s), "decode" in i ? new Promise((e, t) => { i.decode().then(() => { e(i) }).catch(() => { t(i) }) }) : new Promise((e, t) => { i.onload = e(i), i.onerror = t(i) }) }

      function i(e) { let t, s; const { imgHeight: i, imgWidth: l, containerHeight: n, containerWidth: a, canvasWidth: o, canvasHeight: c, imageSize: h } = e, r = i / l; return "cover" == h ? r < n / a ? s = (t = n) / r : t = (s = a) * r : "native" == h ? (t = i, s = l) : (r > c / o ? s = (t = c) / r : t = (s = o) * r, "scale-down" === h && (s >= l || t >= i) && (s = l, t = i)), { height: t, width: s } }

      function l(e) { return e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : Promise.reject() }

      function n() { return document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : Promise.reject() }
      const a = { container: document.body, className: void 0, imageSize: "scale-down", fullScreen: !1, loop: !1, linkImages: !0, setIndex: 0, firstImageIndex: 0, lastImageIndex: !1, currentImageIndex: void 0, allowZoom: !0, closeOnBackgroundClick: !0, setTitle: function() { return "" }, description: function() { return this.images[this.settings.currentImageIndex].title }, pagination: function() { const e = this.settings.lastImageIndex + 1; return this.settings.currentImageIndex + 1 + "/" + e }, afterInitialize() {}, afterMarkup() {}, afterImageLoad() {}, afterClose() {}, zoomedPaddingX: function(e, t) { return 0 }, zoomedPaddingY: function(e, t) { return 0 } };
      class o {
          constructor(e, t) { this.settings = t, this.elems = {}, this.images = [], this.events = [], this.state = { fullScreenOpen: !1, initialZoomState: null, initialized: !1, timer: !1, visible: !1 }, this._cssClasses = ["chocolat-open", "chocolat-in-container", "chocolat-cover", "chocolat-zoomable", "chocolat-zoomed", "chocolat-zooming-in", "chocolat-zooming-out"], NodeList.prototype.isPrototypeOf(e) || HTMLCollection.prototype.isPrototypeOf(e) ? e.forEach((e, t) => { this.images.push({ title: e.getAttribute("title"), src: e.getAttribute("href"), srcset: e.getAttribute("data-srcset"), sizes: e.getAttribute("data-sizes") }), this.off(e, "click.chocolat"), this.on(e, "click.chocolat", e => { this.init(t), e.preventDefault() }) }) : this.images = e, this.settings.container instanceof Element || this.settings.container instanceof HTMLElement ? this.elems.container = this.settings.container : this.elems.container = document.body, this.api = { open: e => (e = parseInt(e) || 0, this.init(e)), close: () => this.close(), next: () => this.change(1), prev: () => this.change(-1), goto: e => this.open(e), current: () => this.settings.currentImageIndex, position: () => this.position(this.elems.img), destroy: () => this.destroy(), set: (e, t) => (this.settings[e] = t, t), get: e => this.settings[e], getElem: e => this.elems[e] } }
          init(e) { return this.state.initialized || (this.markup(), this.attachListeners(), this.settings.lastImageIndex = this.images.length - 1, this.state.initialized = !0), this.settings.afterInitialize.call(this), this.load(e) }
          load(e) {
              if (this.state.visible || (this.state.visible = !0, setTimeout(() => { this.elems.overlay.classList.add("chocolat-visible"), this.elems.wrapper.classList.add("chocolat-visible") }, 0), this.elems.container.classList.add("chocolat-open")), this.settings.fullScreen && l(this.elems.wrapper), this.settings.currentImageIndex === e) return Promise.resolve();
              let i, n, a = setTimeout(() => { this.elems.loader.classList.add("chocolat-visible") }, 1e3),
                  o = setTimeout(() => { o = void 0, i = t(() => { this.elems.imageCanvas.classList.remove("chocolat-visible") }, this.elems.imageCanvas) }, 80);
              return s(this.images[e]).then(e => (n = e, o ? (clearTimeout(o), Promise.resolve()) : i)).then(() => { const t = e + 1; return null != this.images[t] && s(this.images[t]), this.settings.currentImageIndex = e, this.elems.description.textContent = this.settings.description.call(this), this.elems.pagination.textContent = this.settings.pagination.call(this), this.arrows(), this.position(n).then(() => (this.elems.loader.classList.remove("chocolat-visible"), clearTimeout(a), this.appear(n))) }).then(() => { this.elems.container.classList.toggle("chocolat-zoomable", this.zoomable(n, this.elems.wrapper)), this.settings.afterImageLoad.call(this) })
          }
          position({ naturalHeight: e, naturalWidth: s }) {
              const l = { imgHeight: e, imgWidth: s, containerHeight: this.elems.container.clientHeight, containerWidth: this.elems.container.clientWidth, canvasWidth: this.elems.imageCanvas.clientWidth, canvasHeight: this.elems.imageCanvas.clientHeight, imageSize: this.settings.imageSize },
                  { width: n, height: a } = i(l);
              return t(() => { Object.assign(this.elems.imageWrapper.style, { width: n + "px", height: a + "px" }) }, this.elems.imageWrapper)
          }
          appear(e) { return this.elems.imageWrapper.removeChild(this.elems.img), this.elems.img = e, this.elems.img.setAttribute("class", "chocolat-img"), this.elems.imageWrapper.appendChild(this.elems.img), t(() => { this.elems.imageCanvas.classList.add("chocolat-visible") }, this.elems.imageCanvas) }
          change(e) {
              if (!this.state.visible) return;
              if (!this.settings.linkImages) return;
              this.zoomOut();
              const t = this.settings.currentImageIndex + parseInt(e);
              if (t > this.settings.lastImageIndex) { if (this.settings.loop) return this.load(this.settings.firstImageIndex) } else { if (!(t < this.settings.firstImageIndex)) return this.load(t); if (this.settings.loop) return this.load(this.settings.lastImageIndex) }
          }
          arrows() { this.settings.loop ? (this.elems.left.classList.add("active"), this.elems.right.classList.add("active")) : this.settings.linkImages ? (this.elems.right.classList.toggle("active", this.settings.currentImageIndex !== this.settings.lastImageIndex), this.elems.left.classList.toggle("active", this.settings.currentImageIndex !== this.settings.firstImageIndex)) : (this.elems.left.classList.remove("active"), this.elems.right.classList.remove("active")) }
          close() {
              if (this.state.fullScreenOpen) return void n();
              this.state.visible = !1;
              const e = t(() => { this.elems.overlay.classList.remove("chocolat-visible") }, this.elems.overlay),
                  s = t(() => { this.elems.wrapper.classList.remove("chocolat-visible") }, this.elems.wrapper);
              return Promise.all([e, s]).then(() => { this.elems.container.classList.remove("chocolat-open"), this.settings.afterClose.call(this) })
          }
          destroy() {
              for (let e = this.events.length - 1; e >= 0; e--) {
                  const { element: t, eventName: s } = this.events[e];
                  this.off(t, s)
              }
              this.state.initialized && (this.state.fullScreenOpen && n(), this.settings.currentImageIndex = void 0, this.state.visible = !1, this.state.initialized = !1, this.elems.container.classList.remove(...this._cssClasses), this.elems.wrapper.parentNode.removeChild(this.elems.wrapper))
          }
          markup() { this.elems.container.classList.add("chocolat-open", this.settings.className), "cover" == this.settings.imageSize && this.elems.container.classList.add("chocolat-cover"), this.elems.container !== document.body && this.elems.container.classList.add("chocolat-in-container"), this.elems.wrapper = document.createElement("div"), this.elems.wrapper.setAttribute("id", "chocolat-content-" + this.settings.setIndex), this.elems.wrapper.setAttribute("class", "chocolat-wrapper"), this.elems.container.appendChild(this.elems.wrapper), this.elems.overlay = document.createElement("div"), this.elems.overlay.setAttribute("class", "chocolat-overlay"), this.elems.wrapper.appendChild(this.elems.overlay), this.elems.loader = document.createElement("div"), this.elems.loader.setAttribute("class", "chocolat-loader"), this.elems.wrapper.appendChild(this.elems.loader), this.elems.layout = document.createElement("div"), this.elems.layout.setAttribute("class", "chocolat-layout"), this.elems.wrapper.appendChild(this.elems.layout), this.elems.top = document.createElement("div"), this.elems.top.setAttribute("class", "chocolat-top"), this.elems.layout.appendChild(this.elems.top), this.elems.center = document.createElement("div"), this.elems.center.setAttribute("class", "chocolat-center"), this.elems.layout.appendChild(this.elems.center), this.elems.left = document.createElement("div"), this.elems.left.setAttribute("class", "chocolat-left"), this.elems.center.appendChild(this.elems.left), this.elems.imageCanvas = document.createElement("div"), this.elems.imageCanvas.setAttribute("class", "chocolat-image-canvas"), this.elems.center.appendChild(this.elems.imageCanvas), this.elems.imageWrapper = document.createElement("div"), this.elems.imageWrapper.setAttribute("class", "chocolat-image-wrapper"), this.elems.imageCanvas.appendChild(this.elems.imageWrapper), this.elems.img = document.createElement("img"), this.elems.img.setAttribute("class", "chocolat-img"), this.elems.imageWrapper.appendChild(this.elems.img), this.elems.right = document.createElement("div"), this.elems.right.setAttribute("class", "chocolat-right"), this.elems.center.appendChild(this.elems.right), this.elems.bottom = document.createElement("div"), this.elems.bottom.setAttribute("class", "chocolat-bottom"), this.elems.layout.appendChild(this.elems.bottom), this.elems.close = document.createElement("span"), this.elems.close.setAttribute("class", "chocolat-close"), this.elems.top.appendChild(this.elems.close), this.elems.description = document.createElement("span"), this.elems.description.setAttribute("class", "chocolat-description"), this.elems.bottom.appendChild(this.elems.description), this.elems.pagination = document.createElement("span"), this.elems.pagination.setAttribute("class", "chocolat-pagination"), this.elems.bottom.appendChild(this.elems.pagination), this.elems.setTitle = document.createElement("span"), this.elems.setTitle.setAttribute("class", "chocolat-set-title"), this.elems.setTitle.textContent = this.settings.setTitle(), this.elems.bottom.appendChild(this.elems.setTitle), this.elems.fullscreen = document.createElement("span"), this.elems.fullscreen.setAttribute("class", "chocolat-fullscreen"), this.elems.bottom.appendChild(this.elems.fullscreen), this.settings.afterMarkup.call(this) }
          attachListeners() {
              this.off(document, "keydown.chocolat"), this.on(document, "keydown.chocolat", e => { this.state.initialized && (37 == e.keyCode ? this.change(-1) : 39 == e.keyCode ? this.change(1) : 27 == e.keyCode && this.close()) });
              const t = this.elems.wrapper.querySelector(".chocolat-right");
              this.off(t, "click.chocolat"), this.on(t, "click.chocolat", () => { this.change(1) });
              const s = this.elems.wrapper.querySelector(".chocolat-left");
              this.off(s, "click.chocolat"), this.on(s, "click.chocolat", () => { this.change(-1) }), this.off(this.elems.close, "click.chocolat"), this.on(this.elems.close, "click.chocolat", this.close.bind(this)), this.off(this.elems.fullscreen, "click.chocolat"), this.on(this.elems.fullscreen, "click.chocolat", () => { this.state.fullScreenOpen ? n() : l(this.elems.wrapper) }), this.off(document, "fullscreenchange.chocolat"), this.on(document, "fullscreenchange.chocolat", () => { document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement ? this.state.fullScreenOpen = !0 : this.state.fullScreenOpen = !1 }), this.off(document, "webkitfullscreenchange.chocolat"), this.on(document, "webkitfullscreenchange.chocolat", () => { document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement ? this.state.fullScreenOpen = !0 : this.state.fullScreenOpen = !1 }), this.settings.closeOnBackgroundClick && (this.off(this.elems.overlay, "click.chocolat"), this.on(this.elems.overlay, "click.chocolat", this.close.bind(this))), this.off(this.elems.wrapper, "click.chocolat"), this.on(this.elems.wrapper, "click.chocolat", () => { null !== this.state.initialZoomState && this.state.visible && (this.elems.container.classList.add("chocolat-zooming-out"), this.zoomOut().then(() => { this.elems.container.classList.remove("chocolat-zoomed"), this.elems.container.classList.remove("chocolat-zooming-out") })) }), this.off(this.elems.imageWrapper, "click.chocolat"), this.on(this.elems.imageWrapper, "click.chocolat", e => { null === this.state.initialZoomState && this.elems.container.classList.contains("chocolat-zoomable") && (e.stopPropagation(), this.elems.container.classList.add("chocolat-zooming-in"), this.zoomIn(e).then(() => { this.elems.container.classList.add("chocolat-zoomed"), this.elems.container.classList.remove("chocolat-zooming-in") })) }), this.on(this.elems.wrapper, "mousemove.chocolat", e => {
                  if (null === this.state.initialZoomState || !this.state.visible) return;
                  const t = this.elems.wrapper.getBoundingClientRect(),
                      s = t.top + window.scrollY,
                      i = t.left + window.scrollX,
                      l = this.elems.wrapper.clientHeight,
                      n = this.elems.wrapper.clientWidth,
                      a = this.elems.img.width,
                      o = this.elems.img.height,
                      c = [e.pageX - n / 2 - i, e.pageY - l / 2 - s];
                  let h = 0;
                  if (a > n) {
                      const e = this.settings.zoomedPaddingX(a, n);
                      h = c[0] / (n / 2), h *= (a - n) / 2 + e
                  }
                  let r = 0;
                  if (o > l) {
                      const e = this.settings.zoomedPaddingY(o, l);
                      r = c[1] / (l / 2), r *= (o - l) / 2 + e
                  }
                  this.elems.img.style.marginLeft = -h + "px", this.elems.img.style.marginTop = -r + "px"
              }), this.on(window, "resize.chocolat", t => {
                  this.state.initialized && this.state.visible && function(t, s) { clearTimeout(e), e = setTimeout(function() { s() }, t) }(50, () => {
                      const e = { imgHeight: this.elems.img.naturalHeight, imgWidth: this.elems.img.naturalWidth, containerHeight: this.elems.wrapper.clientHeight, containerWidth: this.elems.wrapper.clientWidth, canvasWidth: this.elems.imageCanvas.clientWidth, canvasHeight: this.elems.imageCanvas.clientHeight, imageSize: this.settings.imageSize },
                          { width: t, height: s } = i(e);
                      this.position(this.elems.img).then(() => { this.elems.container.classList.toggle("chocolat-zoomable", this.zoomable(this.elems.img, this.elems.wrapper)) })
                  })
              })
          }
          zoomable(e, t) {
              const s = t.clientWidth,
                  i = t.clientHeight,
                  l = !(!this.settings.allowZoom || !(e.naturalWidth > s || e.naturalHeight > i)),
                  n = e.clientWidth > e.naturalWidth || e.clientHeight > e.naturalHeight;
              return l && !n
          }
          zoomIn(e) { return this.state.initialZoomState = this.settings.imageSize, this.settings.imageSize = "native", this.position(this.elems.img) }
          zoomOut(e) { return this.settings.imageSize = this.state.initialZoomState || this.settings.imageSize, this.state.initialZoomState = null, this.elems.img.style.margin = 0, this.position(this.elems.img) }
          on(e, t, s) {
              const i = this.events.push({ element: e, eventName: t, cb: s });
              e.addEventListener(t.split(".")[0], this.events[i - 1].cb)
          }
          off(e, t) {
              const s = this.events.findIndex(s => s.element === e && s.eventName === t);
              this.events[s] && (e.removeEventListener(t.split(".")[0], this.events[s].cb), this.events.splice(s, 1))
          }
      }
      const c = [];
      window.Chocolat = function(e, t) {
          const s = Object.assign({}, a, { images: [] }, t, { setIndex: c.length }),
              i = new o(e, s);
          return c.push(i), i
      }
  }();

  /* Stellar Nav - jQuery Menu */
  ! function(u) {
      u.fn.stellarNav = function(n, r, h) {
          nav = u(this), r = u(window).width();
          var f = u.extend({ theme: "plain", breakpoint: 768, menuLabel: "Menu", sticky: !1, position: "static", openingSpeed: 250, closingDelay: 250, showArrows: !0, phoneBtn: "", phoneLabel: "Call Us", locationBtn: "", locationLabel: "Location", closeBtn: !1, closeLabel: "Close", mobileMode: !1, scrollbarFix: !1 }, n);
          return this.each(function() {
              if ("light" != f.theme && "dark" != f.theme || nav.addClass(f.theme), f.breakpoint && (h = f.breakpoint), f.menuLabel ? menuLabel = f.menuLabel : menuLabel = "", f.phoneLabel ? phoneLabel = f.phoneLabel : phoneLabel = "", f.locationLabel ? locationLabel = f.locationLabel : locationLabel = "", f.closeLabel ? closeLabel = f.closeLabel : closeLabel = "", f.phoneBtn && f.locationBtn) var n = "third";
              else if (f.phoneBtn || f.locationBtn) n = "half";
              else n = "full";
              if ("right" == f.position || "left" == f.position ? nav.prepend('<a href="#" class="menu-toggle"><span class="bars"><span></span><span></span><span></span></span> ' + menuLabel + "</a>") : nav.prepend('<a href="#" class="menu-toggle ' + n + '"><span class="bars"><span></span><span></span><span></span></span> ' + menuLabel + "</a>"), f.phoneBtn && "right" != f.position && "left" != f.position) {
                  var e = '<a href="tel:' + f.phoneBtn + '" class="call-btn-mobile ' + n + '"><svg id="icon-phone"></svg> <span>' + phoneLabel + "</span></a>";
                  nav.find("a.menu-toggle").after(e)
              }
              if (f.locationBtn && "right" != f.position && "left" != f.position) {
                  e = '<a href="' + f.locationBtn + '" class="location-btn-mobile ' + n + '" target="_blank"><svg id="icon-location"></svg> <span>' + locationLabel + "</span></a>";
                  nav.find("a.menu-toggle").after(e)
              }
              if (f.sticky && (navPos = nav.offset().top, h <= r && u(window).on("scroll", function() { u(window).scrollTop() > navPos ? nav.addClass("fixed") : nav.removeClass("fixed") })), "top" == f.position && nav.addClass("top"), "left" == f.position || "right" == f.position) {
                  var i = '<a href="#" class="close-menu ' + n + '"><span class="icon-close"></span>' + closeLabel + "</a>",
                      s = '<a href="tel:' + f.phoneBtn + '" class="call-btn-mobile ' + n + '"><svg id="icon-phone"></svg></a>',
                      t = '<a href="' + f.locationBtn + '" class="location-btn-mobile ' + n + '" target="_blank"><svg id="icon-location"></svg></i></a>';
                  nav.find("ul:first").prepend(i), f.locationBtn && nav.find("ul:first").prepend(t), f.phoneBtn && nav.find("ul:first").prepend(s)
              }
              "right" == f.position && nav.addClass("right"), "left" == f.position && nav.addClass("left"), f.showArrows || nav.addClass("hide-arrows"), f.closeBtn && "right" != f.position && "left" != f.position && nav.find("ul:first").append('<li><a href="#" class="close-menu"><span class="icon-close"></span> ' + closeLabel + "</a></li>"), f.scrollbarFix && u("body").addClass("stellarnav-noscroll-x");
              var a = document.getElementById("icon-phone");
              if (a) {
                  a.setAttribute("viewBox", "0 0 480 480");
                  var l = document.createElementNS("http://www.w3.org/2000/svg", "path");
                  l.setAttribute("d", "M340.273,275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518,0.744l-27.082,27.076 c-1.711-0.943-3.482-1.928-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113c-24.704-24.701-37.704-48.144-47.209-65.257     c-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149l8.936-8.947c11.097-11.1,11.403-28.826,0.721-39.521L73.39,8.194 C62.708-2.486,44.969-2.162,33.872,8.938l-15.15,15.237l0.414,0.411c-5.08,6.482-9.325,13.958-12.484,22.02     C3.74,54.28,1.927,61.603,1.098,68.941C-6,127.785,20.89,181.564,93.866,254.541c100.875,100.868,182.167,93.248,185.674,92.876 c7.638-0.913,14.958-2.738,22.397-5.627c7.992-3.122,15.463-7.361,21.941-12.43l0.331,0.294l15.348-15.029     C350.631,303.527,350.95,285.795,340.273,275.083z"), a.appendChild(l)
              }
              var o = document.getElementById("icon-location");
              if (o) {
                  o.setAttribute("viewBox", "0 0 480 480");
                  var d = document.createElementNS("http://www.w3.org/2000/svg", "path");
                  d.setAttribute("d", "M322.621,42.825C294.073,14.272,259.619,0,219.268,0c-40.353,0-74.803,14.275-103.353,42.825 c-28.549,28.549-42.825,63-42.825,103.353c0,20.749,3.14,37.782,9.419,51.106l104.21,220.986   c2.856,6.276,7.283,11.225,13.278,14.838c5.996,3.617,12.419,5.428,19.273,5.428c6.852,0,13.278-1.811,19.273-5.428 c5.996-3.613,10.513-8.562,13.559-14.838l103.918-220.986c6.282-13.324,9.424-30.358,9.424-51.106 C365.449,105.825,351.176,71.378,322.621,42.825z M270.942,197.855c-14.273,14.272-31.497,21.411-51.674,21.411 s-37.401-7.139-51.678-21.411c-14.275-14.277-21.414-31.501-21.414-51.678c0-20.175,7.139-37.402,21.414-51.675 c14.277-14.275,31.504-21.414,51.678-21.414c20.177,0,37.401,7.139,51.674,21.414c14.274,14.272,21.413,31.5,21.413,51.675 C292.355,166.352,285.217,183.575,270.942,197.855z"), o.appendChild(d)
              }
              u(".menu-toggle, .stellarnav-open").on("click", function(n) { n.preventDefault(), "left" == f.position || "right" == f.position ? (nav.find("ul:first").stop(!0, !0).fadeToggle(f.openingSpeed), nav.toggleClass("active"), nav.hasClass("active") && nav.hasClass("mobile") && u(document).on("click", function(n) { nav.hasClass("mobile") && (u(n.target).closest(nav).length || (nav.find("ul:first").stop(!0, !0).fadeOut(f.openingSpeed), nav.removeClass("active"))) })) : (nav.find("ul:first").stop(!0, !0).slideToggle(f.openingSpeed), nav.toggleClass("active")) }), u(".close-menu, .stellarnav-close").on("click", function() { nav.removeClass("active"), "left" == f.position || "right" == f.position ? nav.find("ul:first").stop(!0, !0).fadeToggle(f.openingSpeed) : nav.find("ul:first").stop(!0, !0).slideUp(f.openingSpeed).toggleClass("active") }), nav.find("li a").each(function() { 0 < u(this).next().length && u(this).parent("li").addClass("has-sub").append('<a class="dd-toggle" href="#"><span class="icon-plus"></span></a>') }), nav.find("li .dd-toggle").on("click", function(n) { n.preventDefault(), u(this).parent("li").children("ul").stop(!0, !0).slideToggle(f.openingSpeed), u(this).parent("li").toggleClass("open") });
              var c = function() { nav.find("li").off("mouseenter"), nav.find("li").off("mouseleave") };
              parentItems = nav.find("> ul > li");

              function p() { window.innerWidth <= h || f.mobileMode ? (c(), nav.addClass("mobile"), nav.removeClass("desktop"), !nav.hasClass("active") && nav.find("ul:first").is(":visible") && nav.find("ul:first").hide(), nav.find("li.mega").each(function() { u(this).find("ul").first().removeAttr("style"), u(this).find("ul").first().children().removeAttr("style") })) : (nav.addClass("desktop"), nav.removeClass("mobile"), nav.hasClass("active") && nav.removeClass("active"), !nav.hasClass("active") && nav.find("ul:first").is(":hidden") && nav.find("ul:first").show(), u("li.open").removeClass("open").find("ul:visible").hide(), c(), u(parentItems).each(function() { u(this).hasClass("mega") ? (u(this).on("mouseenter", function() { u(this).find("ul").first().stop(!0, !0).slideDown(f.openingSpeed) }), u(this).on("mouseleave", function() { u(this).find("ul").first().stop(!0, !0).slideUp(f.openingSpeed) })) : (u(this).on("mouseenter", function() { u(this).children("ul").stop(!0, !0).slideDown(f.openingSpeed) }), u(this).on("mouseleave", function() { u(this).children("ul").stop(!0, !0).delay(f.closingDelay).slideUp(f.openingSpeed) }), u(this).find("li.has-sub").on("mouseenter", function() { u(this).children("ul").stop(!0, !0).slideDown(f.openingSpeed) }), u(this).find("li.has-sub").on("mouseleave", function() { u(this).children("ul").stop(!0, !0).delay(f.closingDelay).slideUp(f.openingSpeed) })) }), navWidth = 0, u(parentItems).each(function() { navWidth += u(this)[0].getBoundingClientRect().width, navWidth = Math.round(navWidth), u(this).hasClass("mega") && (u(this).find("ul").first().css({ left: 0, right: 0, margin: "0px auto" }), numCols = u(this).attr("data-columns"), 2 == numCols ? u(this).find("li.has-sub").width("50%") : 3 == numCols ? u(this).find("ul").first().children().width("33.33%") : 4 == numCols ? u(this).find("ul").first().children().width("25%") : 5 == numCols ? u(this).find("ul").first().children().width("20%") : 6 == numCols ? u(this).find("ul").first().children().width("16.66%") : 7 == numCols ? u(this).find("ul").first().children().width("14.28%") : 8 == numCols ? u(this).find("ul").first().children().width("12.5%") : u(this).find("ul").first().children().width("25%")) }), parentItems.hasClass("mega") && nav.find("li.mega > ul").css({ "max-width": navWidth })) }
              p(), u(window).on("resize", function() { p() })
          })
      }
  }(jQuery);


  /**
   * Swiper 8.4.5
   * Most modern mobile touch slider and framework with hardware accelerated transitions
   * https://swiperjs.com
   *
   * Copyright 2014-2022 Vladimir Kharlampidi
   *
   * Released under the MIT License
   *
   * Released on: November 21, 2022
   */

  ! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t() }(this, (function() {
              "use strict";

              function e(e) { return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object }

              function t(s, a) { void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => { void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]) })) }
              const s = { body: {}, addEventListener() {}, removeEventListener() {}, activeElement: { blur() {}, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() {} }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };

              function a() { const e = "undefined" != typeof document ? document : {}; return t(e, s), e }
              const i = { document: s, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {}, pushState() {}, go() {}, back() {} }, CustomEvent: function() { return this }, addEventListener() {}, removeEventListener() {}, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() {}, Date() {}, screen: {}, setTimeout() {}, clearTimeout() {}, matchMedia: () => ({}), requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0), cancelAnimationFrame(e) { "undefined" != typeof setTimeout && clearTimeout(e) } };

              function r() { const e = "undefined" != typeof window ? window : {}; return t(e, i), e }
              class n extends Array {
                  constructor(e) {
                      "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                          const t = e.__proto__;
                          Object.defineProperty(e, "__proto__", { get: () => t, set(e) { t.__proto__ = e } })
                      }(this))
                  }
              }

              function l(e) { void 0 === e && (e = []); const t = []; return e.forEach((e => { Array.isArray(e) ? t.push(...l(e)) : t.push(e) })), t }

              function o(e, t) { return Array.prototype.filter.call(e, t) }

              function d(e, t) {
                  const s = r(),
                      i = a();
                  let l = [];
                  if (!t && e instanceof n) return e;
                  if (!e) return new n(l);
                  if ("string" == typeof e) {
                      const s = e.trim();
                      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                          let e = "div";
                          0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                          const t = i.createElement(e);
                          t.innerHTML = s;
                          for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
                      } else l = function(e, t) {
                          if ("string" != typeof e) return [e];
                          const s = [],
                              a = t.querySelectorAll(e);
                          for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                          return s
                      }(e.trim(), t || i)
                  } else if (e.nodeType || e === s || e === i) l.push(e);
                  else if (Array.isArray(e)) {
                      if (e instanceof n) return e;
                      l = e
                  }
                  return new n(function(e) { const t = []; for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]); return t }(l))
              }
              d.fn = n.prototype;
              const c = {
                  addClass: function() { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s]; const a = l(t.map((e => e.split(" ")))); return this.forEach((e => { e.classList.add(...a) })), this },
                  removeClass: function() { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s]; const a = l(t.map((e => e.split(" ")))); return this.forEach((e => { e.classList.remove(...a) })), this },
                  hasClass: function() { for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s]; const a = l(t.map((e => e.split(" ")))); return o(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0 },
                  toggleClass: function() {
                      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                      const a = l(t.map((e => e.split(" "))));
                      this.forEach((e => { a.forEach((t => { e.classList.toggle(t) })) }))
                  },
                  attr: function(e, t) {
                      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                      for (let s = 0; s < this.length; s += 1)
                          if (2 === arguments.length) this[s].setAttribute(e, t);
                          else
                              for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
                      return this
                  },
                  removeAttr: function(e) { for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e); return this },
                  transform: function(e) { for (let t = 0; t < this.length; t += 1) this[t].style.transform = e; return this },
                  transition: function(e) { for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e; return this },
                  on: function() {
                      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                      let [a, i, r, n] = t;

                      function l(e) {
                          const t = e.target;
                          if (!t) return;
                          const s = e.target.dom7EventData || [];
                          if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s);
                          else { const e = d(t).parents(); for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s) }
                      }

                      function o(e) {
                          const t = e && e.target && e.target.dom7EventData || [];
                          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
                      }
                      "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
                      const c = a.split(" ");
                      let p;
                      for (let e = 0; e < this.length; e += 1) {
                          const t = this[e];
                          if (i)
                              for (p = 0; p < c.length; p += 1) {
                                  const e = c[p];
                                  t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({ listener: r, proxyListener: l }), t.addEventListener(e, l, n)
                              } else
                                  for (p = 0; p < c.length; p += 1) {
                                      const e = c[p];
                                      t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({ listener: r, proxyListener: o }), t.addEventListener(e, o, n)
                                  }
                      }
                      return this
                  },
                  off: function() {
                      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                      let [a, i, r, n] = t;
                      "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
                      const l = a.split(" ");
                      for (let e = 0; e < l.length; e += 1) {
                          const t = l[e];
                          for (let e = 0; e < this.length; e += 1) {
                              const s = this[e];
                              let a;
                              if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length)
                                  for (let e = a.length - 1; e >= 0; e -= 1) {
                                      const i = a[e];
                                      r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                                  }
                          }
                      }
                      return this
                  },
                  trigger: function() {
                      const e = r();
                      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
                      const i = s[0].split(" "),
                          n = s[1];
                      for (let t = 0; t < i.length; t += 1) {
                          const a = i[t];
                          for (let t = 0; t < this.length; t += 1) {
                              const i = this[t];
                              if (e.CustomEvent) {
                                  const t = new e.CustomEvent(a, { detail: n, bubbles: !0, cancelable: !0 });
                                  i.dom7EventData = s.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
                              }
                          }
                      }
                      return this
                  },
                  transitionEnd: function(e) { const t = this; return e && t.on("transitionend", (function s(a) { a.target === this && (e.call(this, a), t.off("transitionend", s)) })), this },
                  outerWidth: function(e) { if (this.length > 0) { if (e) { const e = this.styles(); return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null },
                  outerHeight: function(e) { if (this.length > 0) { if (e) { const e = this.styles(); return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null },
                  styles: function() { const e = r(); return this[0] ? e.getComputedStyle(this[0], null) : {} },
                  offset: function() {
                      if (this.length > 0) {
                          const e = r(),
                              t = a(),
                              s = this[0],
                              i = s.getBoundingClientRect(),
                              n = t.body,
                              l = s.clientTop || n.clientTop || 0,
                              o = s.clientLeft || n.clientLeft || 0,
                              d = s === e ? e.scrollY : s.scrollTop,
                              c = s === e ? e.scrollX : s.scrollLeft;
                          return { top: i.top + d - l, left: i.left + c - o }
                      }
                      return null
                  },
                  css: function(e, t) {
                      const s = r();
                      let a;
                      if (1 === arguments.length) {
                          if ("string" != typeof e) {
                              for (a = 0; a < this.length; a += 1)
                                  for (const t in e) this[a].style[t] = e[t];
                              return this
                          }
                          if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                      }
                      if (2 === arguments.length && "string" == typeof e) { for (a = 0; a < this.length; a += 1) this[a].style[e] = t; return this }
                      return this
                  },
                  each: function(e) { return e ? (this.forEach(((t, s) => { e.apply(t, [t, s]) })), this) : this },
                  html: function(e) { if (void 0 === e) return this[0] ? this[0].innerHTML : null; for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e; return this },
                  text: function(e) { if (void 0 === e) return this[0] ? this[0].textContent.trim() : null; for (let t = 0; t < this.length; t += 1) this[t].textContent = e; return this },
                  is: function(e) {
                      const t = r(),
                          s = a(),
                          i = this[0];
                      let l, o;
                      if (!i || void 0 === e) return !1;
                      if ("string" == typeof e) {
                          if (i.matches) return i.matches(e);
                          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                          if (i.msMatchesSelector) return i.msMatchesSelector(e);
                          for (l = d(e), o = 0; o < l.length; o += 1)
                              if (l[o] === i) return !0;
                          return !1
                      }
                      if (e === s) return i === s;
                      if (e === t) return i === t;
                      if (e.nodeType || e instanceof n) {
                          for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
                              if (l[o] === i) return !0;
                          return !1
                      }
                      return !1
                  },
                  index: function() { let e, t = this[0]; if (t) { for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1); return e } },
                  eq: function(e) { if (void 0 === e) return this; const t = this.length; if (e > t - 1) return d([]); if (e < 0) { const s = t + e; return d(s < 0 ? [] : [this[s]]) } return d([this[e]]) },
                  append: function() {
                      let e;
                      const t = a();
                      for (let s = 0; s < arguments.length; s += 1) {
                          e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                          for (let s = 0; s < this.length; s += 1)
                              if ("string" == typeof e) { const a = t.createElement("div"); for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild) } else if (e instanceof n)
                              for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
                          else this[s].appendChild(e)
                      }
                      return this
                  },
                  prepend: function(e) {
                      const t = a();
                      let s, i;
                      for (s = 0; s < this.length; s += 1)
                          if ("string" == typeof e) { const a = t.createElement("div"); for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]) } else if (e instanceof n)
                          for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
                      else this[s].insertBefore(e, this[s].childNodes[0]);
                      return this
                  },
                  next: function(e) { return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]) },
                  nextAll: function(e) {
                      const t = [];
                      let s = this[0];
                      if (!s) return d([]);
                      for (; s.nextElementSibling;) {
                          const a = s.nextElementSibling;
                          e ? d(a).is(e) && t.push(a) : t.push(a), s = a
                      }
                      return d(t)
                  },
                  prev: function(e) { if (this.length > 0) { const t = this[0]; return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([]) } return d([]) },
                  prevAll: function(e) {
                      const t = [];
                      let s = this[0];
                      if (!s) return d([]);
                      for (; s.previousElementSibling;) {
                          const a = s.previousElementSibling;
                          e ? d(a).is(e) && t.push(a) : t.push(a), s = a
                      }
                      return d(t)
                  },
                  parent: function(e) { const t = []; for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode)); return d(t) },
                  parents: function(e) { const t = []; for (let s = 0; s < this.length; s += 1) { let a = this[s].parentNode; for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode } return d(t) },
                  closest: function(e) { let t = this; return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t) },
                  find: function(e) { const t = []; for (let s = 0; s < this.length; s += 1) { const a = this[s].querySelectorAll(e); for (let e = 0; e < a.length; e += 1) t.push(a[e]) } return d(t) },
                  children: function(e) { const t = []; for (let s = 0; s < this.length; s += 1) { const a = this[s].children; for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s]) } return d(t) },
                  filter: function(e) { return d(o(this, e)) },
                  remove: function() { for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]); return this }
              };

              function p(e, t) { return void 0 === t && (t = 0), setTimeout(e, t) }

              function u() { return Date.now() }

              function h(e, t) { void 0 === t && (t = "x"); const s = r(); let a, i, n; const l = function(e) { const t = r(); let s; return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s }(e); return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0 }

              function m(e) { return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) }

              function f(e) { return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType) }

              function g() {
                  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                      t = ["__proto__", "constructor", "prototype"];
                  for (let s = 1; s < arguments.length; s += 1) {
                      const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                      if (null != a && !f(a)) {
                          const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                          for (let t = 0, i = s.length; t < i; t += 1) {
                              const i = s[t],
                                  r = Object.getOwnPropertyDescriptor(a, i);
                              void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
                          }
                      }
                  }
                  return e
              }

              function v(e, t, s) { e.style.setProperty(t, s) }

              function w(e) {
                  let { swiper: t, targetPosition: s, side: a } = e;
                  const i = r(),
                      n = -t.translate;
                  let l, o = null;
                  const d = t.params.speed;
                  t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
                  const c = s > n ? "next" : "prev",
                      p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                      u = () => {
                          l = (new Date).getTime(), null === o && (o = l);
                          const e = Math.max(Math.min((l - o) / d, 1), 0),
                              r = .5 - Math.cos(e * Math.PI) / 2;
                          let c = n + r * (s - n);
                          if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                                  [a]: c
                              }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                  [a]: c
                              })
                          })), void i.cancelAnimationFrame(t.cssModeFrameID);
                          t.cssModeFrameID = i.requestAnimationFrame(u)
                      };
                  u()
              }
              let b, x, y;

              function E() {
                  return b || (b = function() {
                      const e = r(),
                          t = a();
                      return {
                          smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                          passiveListener: function() {
                              let t = !1;
                              try {
                                  const s = Object.defineProperty({}, "passive", {get() { t = !0 } });
                                  e.addEventListener("testPassiveListener", null, s)
                              } catch (e) {}
                              return t
                          }(),
                          gestures: "ongesturestart" in e
                      }
                  }()), b
              }

              function C(e) {
                  return void 0 === e && (e = {}), x || (x = function(e) {
                      let { userAgent: t } = void 0 === e ? {} : e;
                      const s = E(),
                          a = r(),
                          i = a.navigator.platform,
                          n = t || a.navigator.userAgent,
                          l = { ios: !1, android: !1 },
                          o = a.screen.width,
                          d = a.screen.height,
                          c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                      let p = n.match(/(iPad).*OS\s([\d_]+)/);
                      const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                          h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                          m = "Win32" === i;
                      let f = "MacIntel" === i;
                      return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l
                  }(e)), x
              }

              function T() { return y || (y = function() { const e = r(); return { isSafari: function() { const t = e.navigator.userAgent.toLowerCase(); return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0 }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) } }()), y }
              Object.keys(c).forEach((e => { Object.defineProperty(d.fn, e, { value: c[e], writable: !0 }) }));
              var $ = {
                  on(e, t, s) { const a = this; if (!a.eventsListeners || a.destroyed) return a; if ("function" != typeof t) return a; const i = s ? "unshift" : "push"; return e.split(" ").forEach((e => { a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t) })), a },
                  once(e, t, s) {
                      const a = this;
                      if (!a.eventsListeners || a.destroyed) return a;
                      if ("function" != typeof t) return a;

                      function i() {
                          a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                          t.apply(a, r)
                      }
                      return i.__emitterProxy = t, a.on(e, i, s)
                  },
                  onAny(e, t) { const s = this; if (!s.eventsListeners || s.destroyed) return s; if ("function" != typeof e) return s; const a = t ? "unshift" : "push"; return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s },
                  offAny(e) { const t = this; if (!t.eventsListeners || t.destroyed) return t; if (!t.eventsAnyListeners) return t; const s = t.eventsAnyListeners.indexOf(e); return s >= 0 && t.eventsAnyListeners.splice(s, 1), t },
                  off(e, t) {
                      const s = this;
                      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                          void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                              (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                          }))
                      })), s) : s
                  },
                  emit() { const e = this; if (!e.eventsListeners || e.destroyed) return e; if (!e.eventsListeners) return e; let t, s, a; for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n]; "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a); return (Array.isArray(t) ? t : t.split(" ")).forEach((t => { e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => { e.apply(a, [t, ...s]) })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => { e.apply(a, s) })) })), e }
              };
              var S = {
                  updateSize: function() {
                      const e = this;
                      let t, s;
                      const a = e.$el;
                      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }))
                  },
                  updateSlides: function() {
                      const e = this;

                      function t(t) { return e.isHorizontal() ? t : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t] }

                      function s(e, s) { return parseFloat(e.getPropertyValue(t(s)) || 0) }
                      const a = e.params,
                          { $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
                          o = e.virtual && a.virtual.enabled,
                          d = o ? e.virtual.slides.length : e.slides.length,
                          c = i.children(`.${e.params.slideClass}`),
                          p = o ? e.virtual.slides.length : c.length;
                      let u = [];
                      const h = [],
                          m = [];
                      let f = a.slidesOffsetBefore;
                      "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
                      let g = a.slidesOffsetAfter;
                      "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
                      const w = e.snapGrid.length,
                          b = e.slidesGrid.length;
                      let x = a.spaceBetween,
                          y = -f,
                          E = 0,
                          C = 0;
                      if (void 0 === r) return;
                      "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : c.css({ marginRight: "", marginBottom: "", marginTop: "" }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
                      const T = a.grid && a.grid.rows > 1 && e.grid;
                      let $;
                      T && e.grid.initSlides(p);
                      const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
                      for (let i = 0; i < p; i += 1) {
                          $ = 0;
                          const n = c.eq(i);
                          if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
                              if ("auto" === a.slidesPerView) {
                                  S && (c[i].style[t("width")] = "");
                                  const r = getComputedStyle(n[0]),
                                      l = n[0].style.transform,
                                      o = n[0].style.webkitTransform;
                                  if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                  else {
                                      const e = s(r, "width"),
                                          t = s(r, "padding-left"),
                                          a = s(r, "padding-right"),
                                          i = s(r, "margin-left"),
                                          l = s(r, "margin-right"),
                                          o = r.getPropertyValue("box-sizing");
                                      if (o && "border-box" === o) $ = e + i + l;
                                      else {
                                          const { clientWidth: s, offsetWidth: r } = n[0];
                                          $ = e + t + a + i + l + (r - s)
                                      }
                                  }
                                  l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
                              } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
                              c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1
                          }
                      }
                      if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({ width: `${e.virtualSize+a.spaceBetween}px` }), a.setWrapperSize && i.css({
                              [t("width")]: `${e.virtualSize+a.spaceBetween}px`
                          }), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                          const t = [];
                          for (let s = 0; s < u.length; s += 1) {
                              let i = u[s];
                              a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                          }
                          u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
                      }
                      if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                          const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                          c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({
                              [s]: `${x}px`
                          })
                      }
                      if (a.centeredSlides && a.centeredSlidesBounds) {
                          let e = 0;
                          m.forEach((t => { e += t + (a.spaceBetween ? a.spaceBetween : 0) })), e -= a.spaceBetween;
                          const t = e - r;
                          u = u.map((e => e < 0 ? -f : e > t ? t + g : e))
                      }
                      if (a.centerInsufficientSlides) {
                          let e = 0;
                          if (m.forEach((t => { e += t + (a.spaceBetween ? a.spaceBetween : 0) })), e -= a.spaceBetween, e < r) {
                              const t = (r - e) / 2;
                              u.forEach(((e, s) => { u[s] = e - t })), h.forEach(((e, s) => { h[s] = e + t }))
                          }
                      }
                      if (Object.assign(e, { slides: c, snapGrid: u, slidesGrid: h, slidesSizesGrid: m }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                          v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                          const t = -e.snapGrid[0],
                              s = -e.slidesGrid[0];
                          e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                      }
                      if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                          const t = `${a.containerModifierClass}backface-hidden`,
                              s = e.$el.hasClass(t);
                          p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
                      }
                  },
                  updateAutoHeight: function(e) {
                      const t = this,
                          s = [],
                          a = t.virtual && t.params.virtual.enabled;
                      let i, r = 0;
                      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                      const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                          if (t.params.centeredSlides)(t.visibleSlides || d([])).each((e => { s.push(e) }));
                          else
                              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                  const e = t.activeIndex + i;
                                  if (e > t.slides.length && !a) break;
                                  s.push(n(e))
                              } else s.push(n(t.activeIndex));
                      for (i = 0; i < s.length; i += 1)
                          if (void 0 !== s[i]) {
                              const e = s[i].offsetHeight;
                              r = e > r ? e : r
                          }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
                  },
                  updateSlidesOffset: function() {
                      const e = this,
                          t = e.slides;
                      for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                  },
                  updateSlidesProgress: function(e) {
                      void 0 === e && (e = this && this.translate || 0);
                      const t = this,
                          s = t.params,
                          { slides: a, rtlTranslate: i, snapGrid: r } = t;
                      if (0 === a.length) return;
                      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                      let n = -e;
                      i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                      for (let e = 0; e < a.length; e += 1) {
                          const l = a[e];
                          let o = l.swiperSlideOffset;
                          s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                          const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                              c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                              p = -(n - o),
                              u = p + t.slidesSizesGrid[e];
                          (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c
                      }
                      t.visibleSlides = d(t.visibleSlides)
                  },
                  updateProgress: function(e) {
                      const t = this;
                      if (void 0 === e) {
                          const s = t.rtlTranslate ? -1 : 1;
                          e = t && t.translate && t.translate * s || 0
                      }
                      const s = t.params,
                          a = t.maxTranslate() - t.minTranslate();
                      let { progress: i, isBeginning: r, isEnd: n } = t;
                      const l = r,
                          o = n;
                      0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, { progress: i, isBeginning: r, isEnd: n }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
                  },
                  updateSlidesClasses: function() {
                      const e = this,
                          { slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r } = e,
                          n = e.virtual && s.virtual.enabled;
                      let l;
                      t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                      let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                      s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                      let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                      s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                  },
                  updateActiveIndex: function(e) {
                      const t = this,
                          s = t.rtlTranslate ? t.translate : -t.translate,
                          { slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o } = t;
                      let d, c = e;
                      if (void 0 === c) {
                          for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                      }
                      if (i.indexOf(s) >= 0) d = i.indexOf(s);
                      else {
                          const e = Math.min(r.slidesPerGroupSkip, c);
                          d = e + Math.floor((c - e) / r.slidesPerGroup)
                      }
                      if (d >= i.length && (d = i.length - 1), c === n) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                      const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                      Object.assign(t, { snapIndex: d, realIndex: p, previousIndex: n, activeIndex: c }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                  },
                  updateClickedSlide: function(e) {
                      const t = this,
                          s = t.params,
                          a = d(e).closest(`.${s.slideClass}`)[0];
                      let i, r = !1;
                      if (a)
                          for (let e = 0; e < t.slides.length; e += 1)
                              if (t.slides[e] === a) { r = !0, i = e; break }
                      if (!a || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                  }
              };
              var M = {
                  getTranslate: function(e) { void 0 === e && (e = this.isHorizontal() ? "x" : "y"); const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this; if (t.virtualTranslate) return s ? -a : a; if (t.cssMode) return a; let r = h(i[0], e); return s && (r = -r), r || 0 },
                  setTranslate: function(e, t) {
                      const s = this,
                          { rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l } = s;
                      let o, d = 0,
                          c = 0;
                      s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                      const p = s.maxTranslate() - s.minTranslate();
                      o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                  },
                  minTranslate: function() { return -this.snapGrid[0] },
                  maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] },
                  translateTo: function(e, t, s, a, i) {
                      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
                      const r = this,
                          { params: n, wrapperEl: l } = r;
                      if (r.animating && n.preventInteractionOnTransition) return !1;
                      const o = r.minTranslate(),
                          d = r.maxTranslate();
                      let c;
                      if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                          const e = r.isHorizontal();
                          if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                          else {
                              if (!r.support.smoothScroll) return w({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0;
                              l.scrollTo({
                                  [e ? "left" : "top"]: -c,
                                  behavior: "smooth"
                              })
                          }
                          return !0
                      }
                      return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) { r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd")) }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                  }
              };

              function P(e) {
                  let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
                  const { activeIndex: r, previousIndex: n } = t;
                  let l = a;
                  if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
                      if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
                      t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
                  }
              }
              var k = {
                  slideTo: function(e, t, s, a, i) {
                      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                      if ("string" == typeof e) {
                          const t = parseInt(e, 10);
                          if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                          e = t
                      }
                      const r = this;
                      let n = e;
                      n < 0 && (n = 0);
                      const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m } = r;
                      if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
                      const f = Math.min(r.params.slidesPerGroupSkip, n);
                      let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
                      g >= o.length && (g = o.length - 1);
                      const v = -o[g];
                      if (l.normalizeSlideIndex)
                          for (let e = 0; e < d.length; e += 1) {
                              const t = -Math.floor(100 * v),
                                  s = Math.floor(100 * d[e]),
                                  a = Math.floor(100 * d[e + 1]);
                              void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                          }
                      if (r.initialized && n !== p) { if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1; if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1 }
                      let b;
                      if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
                      if (l.cssMode) {
                          const e = r.isHorizontal(),
                              s = u ? v : -v;
                          if (0 === t) {
                              const t = r.virtual && r.params.virtual.enabled;
                              t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => { r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1 }))
                          } else {
                              if (!r.support.smoothScroll) return w({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0;
                              h.scrollTo({
                                  [e ? "left" : "top"]: s,
                                  behavior: "smooth"
                              })
                          }
                          return !0
                      }
                      return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) { r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b)) }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
                  },
                  slideToLoop: function(e, t, s, a) {
                      if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                          const t = parseInt(e, 10);
                          if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                          e = t
                      }
                      const i = this;
                      let r = e;
                      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
                  },
                  slideNext: function(e, t, s) {
                      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                      const a = this,
                          { animating: i, enabled: r, params: n } = a;
                      if (!r) return a;
                      let l = n.slidesPerGroup;
                      "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                      const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                      if (n.loop) {
                          if (i && n.loopPreventsSlide) return !1;
                          a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                      }
                      return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
                  },
                  slidePrev: function(e, t, s) {
                      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                      const a = this,
                          { params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d } = a;
                      if (!d) return a;
                      if (i.loop) {
                          if (r && i.loopPreventsSlide) return !1;
                          a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                      }

                      function c(e) { return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e) }
                      const p = c(o ? a.translate : -a.translate),
                          u = n.map((e => c(e)));
                      let h = n[u.indexOf(p) - 1];
                      if (void 0 === h && i.cssMode) {
                          let e;
                          n.forEach(((t, s) => { p >= t && (e = s) })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
                      }
                      let m = 0;
                      if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) { const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1; return a.slideTo(i, e, t, s) }
                      return a.slideTo(m, e, t, s)
                  },
                  slideReset: function(e, t, s) { return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s) },
                  slideToClosest: function(e, t, s, a) {
                      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
                      const i = this;
                      let r = i.activeIndex;
                      const n = Math.min(i.params.slidesPerGroupSkip, r),
                          l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                          o = i.rtlTranslate ? i.translate : -i.translate;
                      if (o >= i.snapGrid[l]) {
                          const e = i.snapGrid[l];
                          o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
                      } else {
                          const e = i.snapGrid[l - 1];
                          o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
                      }
                      return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
                  },
                  slideToClickedSlide: function() {
                      const e = this,
                          { params: t, $wrapperEl: s } = e,
                          a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                      let i, r = e.clickedIndex;
                      if (t.loop) {
                          if (e.animating) return;
                          i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => { e.slideTo(r) }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => { e.slideTo(r) }))) : e.slideTo(r)
                      } else e.slideTo(r)
                  }
              };
              var z = {
                  loopCreate: function() {
                      const e = this,
                          t = a(),
                          { params: s, $wrapperEl: i } = e,
                          r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
                      r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                      let n = r.children(`.${s.slideClass}`);
                      if (s.loopFillGroupWithBlank) {
                          const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                          if (e !== s.slidesPerGroup) {
                              for (let a = 0; a < e; a += 1) {
                                  const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                  r.append(e)
                              }
                              n = r.children(`.${s.slideClass}`)
                          }
                      }
                      "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
                      const l = [],
                          o = [];
                      n.each(((e, t) => { d(e).attr("data-swiper-slide-index", t) }));
                      for (let t = 0; t < e.loopedSlides; t += 1) {
                          const e = t - Math.floor(t / n.length) * n.length;
                          o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0])
                      }
                      for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                      for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
                  },
                  loopFix: function() {
                      const e = this;
                      e.emit("beforeLoopFix");
                      const { activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l } = e;
                      let o;
                      e.allowSlidePrev = !0, e.allowSlideNext = !0;
                      const d = -n[t] - e.getTranslate();
                      if (t < a) {
                          o = s.length - 3 * a + t, o += a;
                          e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                      } else if (t >= s.length - a) {
                          o = -s.length + t + a, o += a;
                          e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                      }
                      e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
                  },
                  loopDestroy: function() {
                      const { $wrapperEl: e, params: t, slides: s } = this;
                      e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                  }
              };

              function L(e) {
                  const t = this,
                      s = a(),
                      i = r(),
                      n = t.touchEventsData,
                      { params: l, touches: o, enabled: c } = t;
                  if (!c) return;
                  if (t.animating && l.preventInteractionOnTransition) return;
                  !t.animating && l.cssMode && l.loop && t.loopFix();
                  let p = e;
                  p.originalEvent && (p = p.originalEvent);
                  let h = d(p.target);
                  if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
                  if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
                  if (!n.isTouchEvent && "button" in p && p.button > 0) return;
                  if (n.isTouched && n.isMoved) return;
                  const m = !!l.noSwipingClass && "" !== l.noSwipingClass,
                      f = e.composedPath ? e.composedPath() : e.path;
                  m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
                  const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
                      v = !(!p.target || !p.target.shadowRoot);
                  if (l.noSwiping && (v ? function(e, t) {
                          return void 0 === t && (t = this),
                              function t(s) {
                                  if (!s || s === a() || s === r()) return null;
                                  s.assignedSlot && (s = s.assignedSlot);
                                  const i = s.closest(e);
                                  return i || s.getRootNode ? i || t(s.getRootNode().host) : null
                              }(t)
                      }(g, h[0]) : h.closest(g)[0])) return void(t.allowClick = !0);
                  if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
                  o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
                  const w = o.currentX,
                      b = o.currentY,
                      x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
                      y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
                  if (x && (w <= y || w >= i.innerWidth - y)) {
                      if ("prevent" !== x) return;
                      e.preventDefault()
                  }
                  if (Object.assign(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), o.startX = w, o.startY = b, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
                      let e = !0;
                      h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
                      const a = e && t.allowTouchMove && l.touchStartPreventDefault;
                      !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
                  }
                  t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
              }

              function O(e) {
                  const t = a(),
                      s = this,
                      i = s.touchEventsData,
                      { params: r, touches: n, rtlTranslate: l, enabled: o } = s;
                  if (!o) return;
                  let c = e;
                  if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
                  if (i.isTouchEvent && "touchmove" !== c.type) return;
                  const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                      h = "touchmove" === c.type ? p.pageX : c.pageX,
                      m = "touchmove" === c.type ? p.pageY : c.pageY;
                  if (c.preventedByNestedSwiper) return n.startX = h, void(n.startY = m);
                  if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void(i.isTouched && (Object.assign(n, { startX: h, startY: m, currentX: h, currentY: m }), i.touchStartTime = u()));
                  if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                      if (s.isVertical()) { if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1) } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
                  if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
                  if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
                  n.currentX = h, n.currentY = m;
                  const f = n.currentX - n.startX,
                      g = n.currentY - n.startY;
                  if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
                  if (void 0 === i.isScrolling) {
                      let e;
                      s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
                  }
                  if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
                  if (!i.startMoving) return;
                  s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
                  let v = s.isHorizontal() ? f : g;
                  n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                  let w = !0,
                      b = r.resistanceRatio;
                  if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) { if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate); if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY) }
                  r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
              }

              function I(e) {
                  const t = this,
                      s = t.touchEventsData,
                      { params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t;
                  if (!l) return;
                  let o = e;
                  if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                  a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                  const d = u(),
                      c = d - s.touchStartTime;
                  if (t.allowClick) {
                      const e = o.path || o.composedPath && o.composedPath();
                      t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
                  }
                  if (s.lastClickTime = u(), p((() => { t.destroyed || (t.allowClick = !0) })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                  let h;
                  if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
                  if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: h });
                  let m = 0,
                      f = t.slidesSizesGrid[0];
                  for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
                      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                      void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
                  }
                  let g = null,
                      v = null;
                  a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
                  const w = (h - n[m]) / f,
                      b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
                  if (c > a.longSwipesMs) { if (!a.longSwipes) return void t.slideTo(t.activeIndex); "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m)) } else {
                      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
                      t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
                  }
              }

              function A() {
                  const e = this,
                      { params: t, el: s } = e;
                  if (s && 0 === s.offsetWidth) return;
                  t.breakpoints && e.setBreakpoint();
                  const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
                  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
              }

              function D(e) {
                  const t = this;
                  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
              }

              function G() {
                  const e = this,
                      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
                  if (!a) return;
                  let i;
                  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                  const r = e.maxTranslate() - e.minTranslate();
                  i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
              }
              let N = !1;

              function B() {}
              const H = (e, t) => {
                  const s = a(),
                      { params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d } = e,
                      c = !!i.nested,
                      p = "on" === t ? "addEventListener" : "removeEventListener",
                      u = t;
                  if (d.touch) {
                      const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
                      n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? { passive: !1, capture: c } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
                  } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
                  (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
              };
              var X = {
                  attachEvents: function() {
                      const e = this,
                          t = a(),
                          { params: s, support: i } = e;
                      e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on")
                  },
                  detachEvents: function() { H(this, "off") }
              };
              const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
              var R = {
                  addClasses: function() {
                      const e = this,
                          { classNames: t, params: s, rtl: a, $el: i, device: r, support: n } = e,
                          l = function(e, t) { const s = []; return e.forEach((e => { "object" == typeof e ? Object.keys(e).forEach((a => { e[a] && s.push(t + a) })) : "string" == typeof e && s.push(t + e) })), s }(["initialized", s.direction, { "pointer-events": !n.touch }, { "free-mode": e.params.freeMode && s.freeMode.enabled }, { autoheight: s.autoHeight }, { rtl: a }, { grid: s.grid && s.grid.rows > 1 }, { "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill }, { android: r.android }, { ios: r.ios }, { "css-mode": s.cssMode }, { centered: s.cssMode && s.centeredSlides }, { "watch-progress": s.watchSlidesProgress }], s.containerModifierClass);
                      t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
                  },
                  removeClasses: function() {
                      const { $el: e, classNames: t } = this;
                      e.removeClass(t.join(" ")), this.emitContainerClasses()
                  }
              };
              var W = { init: !0, direction: "horizontal", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: !1, updateOnWindowResize: !0, resizeObserver: !0, nested: !1, createElements: !1, enabled: !0, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: !1, userAgent: null, url: null, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: !1, centeredSlides: !1, centeredSlidesBounds: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !1, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopedSlidesLimit: !0, loopFillGroupWithBlank: !1, loopPreventsSlide: !0, rewind: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0, _emitClasses: !1 };

              function q(e, t) {
                  return function(s) {
                      void 0 === s && (s = {});
                      const a = Object.keys(s)[0],
                          i = s[a];
                      "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = { auto: !0 }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = { enabled: !0 }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = { enabled: !1 }), g(t, s)) : g(t, s)) : g(t, s)
                  }
              }
              const j = {
                      eventsEmitter: $,
                      update: S,
                      translate: M,
                      transition: {
                          setTransition: function(e, t) {
                              const s = this;
                              s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                          },
                          transitionStart: function(e, t) {
                              void 0 === e && (e = !0);
                              const s = this,
                                  { params: a } = s;
                              a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({ swiper: s, runCallbacks: e, direction: t, step: "Start" }))
                          },
                          transitionEnd: function(e, t) {
                              void 0 === e && (e = !0);
                              const s = this,
                                  { params: a } = s;
                              s.animating = !1, a.cssMode || (s.setTransition(0), P({ swiper: s, runCallbacks: e, direction: t, step: "End" }))
                          }
                      },
                      slide: k,
                      loop: z,
                      grabCursor: {
                          setGrabCursor: function(e) {
                              const t = this;
                              if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                              const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                              s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                          },
                          unsetGrabCursor: function() {
                              const e = this;
                              e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                          }
                      },
                      events: X,
                      breakpoints: {
                          setBreakpoint: function() {
                              const e = this,
                                  { activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r } = e,
                                  n = i.breakpoints;
                              if (!n || n && 0 === Object.keys(n).length) return;
                              const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                              if (!l || e.currentBreakpoint === l) return;
                              const o = (l in n ? n[l] : void 0) || e.originalParams,
                                  d = Y(e, i),
                                  c = Y(e, o),
                                  p = i.enabled;
                              d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                                  const s = i[t] && i[t].enabled,
                                      a = o[t] && o[t].enabled;
                                  s && !a && e[t].disable(), !s && a && e[t].enable()
                              }));
                              const u = o.direction && o.direction !== i.direction,
                                  h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                              u && s && e.changeDirection(), g(e.params, o);
                              const m = e.params.enabled;
                              Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                          },
                          getBreakpoint: function(e, t, s) {
                              if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                              let a = !1;
                              const i = r(),
                                  n = "window" === t ? i.innerHeight : s.clientHeight,
                                  l = Object.keys(e).map((e => { if ("string" == typeof e && 0 === e.indexOf("@")) { const t = parseFloat(e.substr(1)); return { value: n * t, point: e } } return { value: e, point: e } }));
                              l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                              for (let e = 0; e < l.length; e += 1) { const { point: r, value: n } = l[e]; "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r) }
                              return a || "max"
                          }
                      },
                      checkOverflow: {
                          checkOverflow: function() {
                              const e = this,
                                  { isLocked: t, params: s } = e,
                                  { slidesOffsetBefore: a } = s;
                              if (a) {
                                  const t = e.slides.length - 1,
                                      s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                                  e.isLocked = e.size > s
                              } else e.isLocked = 1 === e.snapGrid.length;
                              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                          }
                      },
                      classes: R,
                      images: {
                          loadImage: function(e, t, s, a, i, n) {
                              const l = r();
                              let o;

                              function c() { n && n() }
                              d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c()
                          },
                          preloadImages: function() {
                              const e = this;

                              function t() { null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady"))) }
                              e.imagesToLoad = e.$el.find("img");
                              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                  const a = e.imagesToLoad[s];
                                  e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                              }
                          }
                      }
                  },
                  _ = {};
              class V {
                  constructor() {
                      let e, t;
                      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
                      if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                          const e = [];
                          return d(t.el).each((s => {
                              const a = g({}, t, { el: s });
                              e.push(new V(a))
                          })), e
                      }
                      const r = this;
                      r.__swiper__ = !0, r.support = E(), r.device = C({ userAgent: t.userAgent }), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
                      const n = {};
                      r.modules.forEach((e => { e({ swiper: r, extendParams: q(t, n), on: r.on.bind(r), once: r.once.bind(r), off: r.off.bind(r), emit: r.emit.bind(r) }) }));
                      const l = g({}, W, n);
                      return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => { r.on(e, r.params.on[e]) })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
                          enabled: r.params.enabled,
                          el: e,
                          classNames: [],
                          slides: d(),
                          slidesGrid: [],
                          snapGrid: [],
                          slidesSizesGrid: [],
                          isHorizontal: () => "horizontal" === r.params.direction,
                          isVertical: () => "vertical" === r.params.direction,
                          activeIndex: 0,
                          realIndex: 0,
                          isBeginning: !0,
                          isEnd: !1,
                          translate: 0,
                          previousTranslate: 0,
                          progress: 0,
                          velocity: 0,
                          animating: !1,
                          allowSlideNext: r.params.allowSlideNext,
                          allowSlidePrev: r.params.allowSlidePrev,
                          touchEvents: function() {
                              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                  t = ["pointerdown", "pointermove", "pointerup"];
                              return r.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }, r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                          }(),
                          touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: r.params.focusableElements, lastClickTime: u(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 },
                          allowClick: !0,
                          allowTouchMove: r.params.allowTouchMove,
                          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                          imagesToLoad: [],
                          imagesLoaded: 0
                      }), r.emit("_swiper"), r.params.init && r.init(), r
                  }
                  enable() {
                      const e = this;
                      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                  }
                  disable() {
                      const e = this;
                      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                  }
                  setProgress(e, t) {
                      const s = this;
                      e = Math.min(Math.max(e, 0), 1);
                      const a = s.minTranslate(),
                          i = (s.maxTranslate() - a) * e + a;
                      s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
                  }
                  emitContainerClasses() {
                      const e = this;
                      if (!e.params._emitClasses || !e.el) return;
                      const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                      e.emit("_containerClasses", t.join(" "))
                  }
                  getSlideClasses(e) { const t = this; return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ") }
                  emitSlidesClasses() {
                      const e = this;
                      if (!e.params._emitClasses || !e.el) return;
                      const t = [];
                      e.slides.each((s => {
                          const a = e.getSlideClasses(s);
                          t.push({ slideEl: s, classNames: a }), e.emit("_slideClass", s, a)
                      })), e.emit("_slideClasses", t)
                  }
                  slidesPerViewDynamic(e, t) {
                      void 0 === e && (e = "current"), void 0 === t && (t = !1);
                      const { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l } = this;
                      let o = 1;
                      if (s.centeredSlides) { let e, t = a[l].swiperSlideSize; for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0)); for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0)) } else if ("current" === e)
                          for (let e = l + 1; e < a.length; e += 1) {
                              (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                          } else
                              for (let e = l - 1; e >= 0; e -= 1) { i[l] - i[e] < n && (o += 1) }
                      return o
                  }
                  update() {
                      const e = this;
                      if (!e || e.destroyed) return;
                      const { snapGrid: t, params: s } = e;

                      function a() {
                          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                      }
                      let i;
                      s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                  }
                  changeDirection(e, t) {
                      void 0 === t && (t = !0);
                      const s = this,
                          a = s.params.direction;
                      return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => { "vertical" === e ? t.style.width = "" : t.style.height = "" })), s.emit("changeDirection"), t && s.update()), s
                  }
                  changeLanguageDirection(e) {
                      const t = this;
                      t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                  }
                  mount(e) {
                      const t = this;
                      if (t.mounted) return !0;
                      const s = d(e || t.params.el);
                      if (!(e = s[0])) return !1;
                      e.swiper = t;
                      const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                      let r = (() => { if (e && e.shadowRoot && e.shadowRoot.querySelector) { const t = d(e.shadowRoot.querySelector(i())); return t.children = e => s.children(e), t } return s.children ? s.children(i()) : d(s).children(i()) })();
                      if (0 === r.length && t.params.createElements) {
                          const e = a().createElement("div");
                          r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => { r.append(e) }))
                      }
                      return Object.assign(t, { $el: s, el: e, $wrapperEl: r, wrapperEl: r[0], mounted: !0, rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"), rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")), wrongRTL: "-webkit-box" === r.css("display") }), !0
                  }
                  init(e) { const t = this; if (t.initialized) return t; return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t }
                  destroy(e, t) {
                      void 0 === e && (e = !0), void 0 === t && (t = !0);
                      const s = this,
                          { params: a, $el: i, $wrapperEl: r, slides: n } = s;
                      return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => { s.off(e) })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                          const t = e;
                          Object.keys(t).forEach((e => { try { t[e] = null } catch (e) {} try { delete t[e] } catch (e) {} }))
                      }(s)), s.destroyed = !0), null
                  }
                  static extendDefaults(e) { g(_, e) }
                  static get extendedDefaults() { return _ }
                  static get defaults() { return W }
                  static installModule(e) { V.prototype.__modules__ || (V.prototype.__modules__ = []); const t = V.prototype.__modules__; "function" == typeof e && t.indexOf(e) < 0 && t.push(e) }
                  static use(e) { return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V) }
              }

              function F(e, t, s, i) {
                  const r = a();
                  return e.params.createElements && Object.keys(i).forEach((a => {
                      if (!s[a] && !0 === s.auto) {
                          let n = e.$el.children(`.${i[a]}`)[0];
                          n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
                      }
                  })), s
              }

              function U(e) { return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}` }

              function K(e) {
                  const t = this,
                      { $wrapperEl: s, params: a } = t;
                  if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                      for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
                  else s.append(e);
                  a.loop && t.loopCreate(), a.observer || t.update()
              }

              function Z(e) {
                  const t = this,
                      { params: s, $wrapperEl: a, activeIndex: i } = t;
                  s.loop && t.loopDestroy();
                  let r = i + 1;
                  if ("object" == typeof e && "length" in e) {
                      for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
                      r = i + e.length
                  } else a.prepend(e);
                  s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
              }

              function Q(e, t) {
                  const s = this,
                      { $wrapperEl: a, params: i, activeIndex: r } = s;
                  let n = r;
                  i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
                  const l = s.slides.length;
                  if (e <= 0) return void s.prependSlide(t);
                  if (e >= l) return void s.appendSlide(t);
                  let o = n > e ? n + 1 : n;
                  const d = [];
                  for (let t = l - 1; t >= e; t -= 1) {
                      const e = s.slides.eq(t);
                      e.remove(), d.unshift(e)
                  }
                  if ("object" == typeof t && "length" in t) {
                      for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
                      o = n > e ? n + t.length : n
                  } else a.append(t);
                  for (let e = 0; e < d.length; e += 1) a.append(d[e]);
                  i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
              }

              function J(e) {
                  const t = this,
                      { params: s, $wrapperEl: a, activeIndex: i } = t;
                  let r = i;
                  s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
                  let n, l = r;
                  if ("object" == typeof e && "length" in e) {
                      for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
                      l = Math.max(l, 0)
                  } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
                  s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
              }

              function ee() {
                  const e = this,
                      t = [];
                  for (let s = 0; s < e.slides.length; s += 1) t.push(s);
                  e.removeSlide(t)
              }

              function te(e) {
                  const { effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d } = e;
                  let c;
                  a("beforeInit", (() => {
                      if (s.params.effect !== t) return;
                      s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                      const e = n ? n() : {};
                      Object.assign(s.params, e), Object.assign(s.originalParams, e)
                  })), a("setTranslate", (() => { s.params.effect === t && i() })), a("setTransition", ((e, a) => { s.params.effect === t && r(a) })), a("transitionEnd", (() => {
                      if (s.params.effect === t && o) {
                          if (!d || !d().slideShadows) return;
                          s.slides.each((e => { s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove() })), o()
                      }
                  })), a("virtualUpdate", (() => { s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => { c && s.slides && s.slides.length && (i(), c = !1) }))) }))
              }

              function se(e, t) { return e.transformEl ? t.find(e.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t }

              function ae(e) {
                  let { swiper: t, duration: s, transformEl: a, allSlides: i } = e;
                  const { slides: r, activeIndex: n, $wrapperEl: l } = t;
                  if (t.params.virtualTranslate && 0 !== s) {
                      let e, s = !1;
                      e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd((() => {
                          if (s) return;
                          if (!t || t.destroyed) return;
                          s = !0, t.animating = !1;
                          const e = ["webkitTransitionEnd", "transitionend"];
                          for (let t = 0; t < e.length; t += 1) l.trigger(e[t])
                      }))
                  }
              }

              function ie(e, t, s) {
                  const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
                      i = e.transformEl ? t.find(e.transformEl) : t;
                  let r = i.children(`.${a}`);
                  return r.length || (r = d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(j).forEach((e=>{Object.keys(j[e]).forEach((t=>{V.prototype[t]=j[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],C=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?C.push(t):(t>c&&C.push(t),t<d&&E.push(t)));C.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?h():(p(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}));const h=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),p(),l()},disable:h,update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{!1===t.params.pagination.enabled?f():(h(),u(),p())})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}}));const f=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),m()};Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),h(),u(),p()},disable:f,render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el;if(!o)return;const d=o[0],c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!d)return;const u="on"===e?"addEventListener":"removeEventListener";l.touch?(d[u](a.start,x,c),d[u](a.move,y,c),d[u](a.end,E,p)):(d[u](i.start,x,c),n[u](i.move,y,c),n[u](i.end,E,p))}function T(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el)),i.addClass(t.isHorizontal()?a.horizontalClass:a.verticalClass);let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){const e=t.params.scrollbar,s=t.scrollbar.$el;s&&s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?S():(T(),v(),g())})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()}));const S=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),$()};Object.assign(t.scrollbar,{enable:()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),T(),v(),g()},disable:S,updateSize:v,setTranslate:g,init:T,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function C(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function T(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,C,T,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),C=-y,T=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>C&&(h=C),g<E&&(g=E),g>T&&(g=T)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():T(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function L(){l&&(l=!1,k("off"))}function O(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function I(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&O()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:O,disable:I,in:T,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=Math.ceil(c),s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+t;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),a("destroy",(()=>{t.$el&&t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=()=>{t.a11y.clicked=!0},b=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.destroyed||(t.a11y.clicked=!1)}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||e.sourceCapabilities&&e.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},y=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),e.slideRole&&o(d(t.slides),e.slideRole);const s=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;e.slideLabelMessage&&t.slides.each(((a,i)=>{const r=d(a),n=t.params.loop?parseInt(r.attr("data-swiper-slide-index"),10):i;p(r,e.slideLabelMessage.replace(/\{\{index\}\}/,n+1).replace(/\{\{slidesLength\}\}/,s))}))},E=()=>{const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var o;let d,u;o=r,a.attr("id",o),function(e,t){e.attr("aria-live",t)}(a,l),y(),t.navigation&&t.navigation.$nextEl&&(d=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(u=t.navigation.$prevEl),d&&d.length&&v(d,r,e.nextSlideMessage),u&&u.length&&v(u,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",x,!0),t.$el.on("pointerdown",w,!0),t.$el.on("pointerup",b,!0)};a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&E()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&y()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",x,!0),t.$el.off("pointerdown",w,!0),t.$el.off("pointerup",b,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){if(!s.size)return s.autoplay.running=!1,void(s.autoplay.paused=!1);const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.removeClass(r),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);else for(let e=0;e<i;e+=1)s.slides.eq(t.realIndex+e).addClass(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){let i,r,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();i=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,r=t.activeIndex>t.previousIndex?"next":"prev"}else i=t.realIndex,r=i>t.previousIndex?"next":"prev";l&&(i+="next"===r?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(i)<0&&(s.params.centeredSlides?i=i>o?i-Math.floor(a/2)+1:i+Math.floor(a/2)-1:i>o&&s.params.slidesPerGroup,s.slideTo(i,e?0:void 0))}}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:Q.bind(t),removeSlide:J.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),i=s?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===a.length&&(a=d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`),e.append(a)),0===i.length&&(i=d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`),e.append(i)),a.length&&(a[0].style.opacity=Math.max(-t,0)),i.length&&(i[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:c}=t,p=t.params.cubeEffect,u=t.isHorizontal(),h=t.virtual&&t.params.virtual.enabled;let m,f=0;p.shadow&&(u?(m=s.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),s.append(m)),m.css({height:`${r}px`})):(m=e.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;h&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t[0].progress,1),-1);let c=0,m=0,g=0;s%4==0?(c=4*-n*o,g=0):(s-1)%4==0?(c=0,g=4*-n*o):(s-2)%4==0?(c=o+4*n*o,g=o):(s-3)%4==0&&(c=-o,g=3*o+4*o*n),l&&(c=-c),u||(m=c,c=0);const v=`rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;d<=1&&d>-1&&(f=90*s+90*d,l&&(f=90*-s-90*d)),t.transform(v),p.slideShadows&&i(t,d,u)}if(s.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),p.shadow)if(u)m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)}const g=c.isSafari||c.isWebView?-o/2:0;s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(d(t),s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=ie(a,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=ie(a,e,t.isHorizontal()?"right":"bottom")),i.length&&(i[0].style.opacity=Math.max(-s,0)),r.length&&(r[0].style.opacity=Math.max(s,0))};te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e.eq(r);let l=n[0].progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n[0].progress,1),-1));const o=n[0].swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l,a);const h=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;se(a,n).transform(h)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((s=>{const a=d(s);let r=a[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s.progress,1),-1)),i(a,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-a.perSlideRotate*c,v=a.perSlideOffset-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));
//# sourceMappingURL=swiper-bundle.min.js.map