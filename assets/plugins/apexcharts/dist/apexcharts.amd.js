!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ApexCharts = e() : t.ApexCharts = e()
}(window, (function () {
    return function (t) {
        var e = {};

        function i(a) {
            if (e[a]) return e[a].exports;
            var s = e[a] = {i: a, l: !1, exports: {}};
            return t[a].call(s.exports, s, s.exports, i), s.l = !0, s.exports
        }

        return i.m = t, i.c = e, i.d = function (t, e, a) {
            i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a})
        }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var a = Object.create(null);
            if (i.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var s in t) i.d(a, s, function (e) {
                return t[e]
            }.bind(null, s));
            return a
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 8)
    }([function (t) {
        t.exports = JSON.parse('{"name":"en","options":{"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"shortMonths":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"days":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"shortDays":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"toolbar":{"exportToSVG":"Download SVG","exportToPNG":"Download PNG","exportToCSV":"Download CSV","menu":"Menu","selection":"Selection","selectionZoom":"Selection Zoom","zoomIn":"Zoom In","zoomOut":"Zoom Out","pan":"Panning","reset":"Reset Zoom"}}}')
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" viewBox="0 0 24 24"><defs><path d="M0 0h24v24H0z" id="a"></path></defs><clipPath id="b"><use overflow="visible" xlink:href="#a"></use></clipPath><path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg fill="#6E8192" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"></path></svg>'
    }, function (t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>'
    }, function (t, e, i) {
        t.exports = i(20)
    }, function (t, e, i) {
        var a, s;

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        /*!
* svg.js - A lightweight library for manipulating and animating SVG.
* @version 2.6.6
* https://svgdotjs.github.io/
*/
        s = "undefined" != typeof window ? window : this, void 0 === (a = function () {
            return function (t, e) {
                var i = (void 0 !== this ? this : t).SVG = function (t) {
                    if (i.supported) return t = new i.Doc(t), i.parser.draw || i.prepare(), t
                };
                if (i.ns = "http://www.w3.org/2000/svg", i.xmlns = "http://www.w3.org/2000/xmlns/", i.xlink = "http://www.w3.org/1999/xlink", i.svgjs = "http://svgjs.com/svgjs", i.supported = !0, !i.supported) return !1;
                i.did = 1e3, i.eid = function (t) {
                    return "Svgjs" + d(t) + i.did++
                }, i.create = function (t) {
                    var i = e.createElementNS(this.ns, t);
                    return i.setAttribute("id", this.eid(t)), i
                }, i.extend = function () {
                    var t, e, a, s;
                    for (e = (t = [].slice.call(arguments)).pop(), s = t.length - 1; s >= 0; s--) if (t[s]) for (a in e) t[s].prototype[a] = e[a];
                    i.Set && i.Set.inherit && i.Set.inherit()
                }, i.invent = function (t) {
                    var e = "function" == typeof t.create ? t.create : function () {
                        this.constructor.call(this, i.create(t.create))
                    };
                    return t.inherit && (e.prototype = new t.inherit), t.extend && i.extend(e, t.extend), t.construct && i.extend(t.parent || i.Container, t.construct), e
                }, i.adopt = function (e) {
                    return e ? e.instance ? e.instance : ((a = "svg" == e.nodeName ? e.parentNode instanceof t.SVGElement ? new i.Nested : new i.Doc : "linearGradient" == e.nodeName ? new i.Gradient("linear") : "radialGradient" == e.nodeName ? new i.Gradient("radial") : i[d(e.nodeName)] ? new (i[d(e.nodeName)]) : new i.Element(e)).type = e.nodeName, a.node = e, e.instance = a, a instanceof i.Doc && a.namespace().defs(), a.setData(JSON.parse(e.getAttribute("svgjs:data")) || {}), a) : null;
                    var a
                }, i.prepare = function () {
                    var t = e.getElementsByTagName("body")[0],
                        a = (t ? new i.Doc(t) : i.adopt(e.documentElement).nested()).size(2, 0);
                    i.parser = {
                        body: t || e.documentElement,
                        draw: a.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
                        poly: a.polyline().node,
                        path: a.path().node,
                        native: i.create("svg")
                    }
                }, i.parser = {native: i.create("svg")}, e.addEventListener("DOMContentLoaded", (function () {
                    i.parser.draw || i.prepare()
                }), !1), i.regex = {
                    numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
                    hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                    rgb: /rgb\((\d+),(\d+),(\d+)\)/,
                    reference: /#([a-z0-9\-_]+)/i,
                    transforms: /\)\s*,?\s*/,
                    whitespace: /\s/g,
                    isHex: /^#[a-f0-9]{3,6}$/i,
                    isRgb: /^rgb\(/,
                    isCss: /[^:]+:[^;]+;?/,
                    isBlank: /^(\s+)?$/,
                    isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                    isPercent: /^-?[\d\.]+%$/,
                    isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
                    delimiter: /[\s,]+/,
                    hyphen: /([^e])\-/gi,
                    pathLetters: /[MLHVCSQTAZ]/gi,
                    isPathLetter: /[MLHVCSQTAZ]/i,
                    numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
                    dots: /\./g
                }, i.utils = {
                    map: function (t, e) {
                        var i, a = t.length, s = [];
                        for (i = 0; i < a; i++) s.push(e(t[i]));
                        return s
                    }, filter: function (t, e) {
                        var i, a = t.length, s = [];
                        for (i = 0; i < a; i++) e(t[i]) && s.push(t[i]);
                        return s
                    }, radians: function (t) {
                        return t % 360 * Math.PI / 180
                    }, degrees: function (t) {
                        return 180 * t / Math.PI % 360
                    }, filterSVGElements: function (e) {
                        return this.filter(e, (function (e) {
                            return e instanceof t.SVGElement
                        }))
                    }
                }, i.defaults = {
                    attrs: {
                        "fill-opacity": 1,
                        "stroke-opacity": 1,
                        "stroke-width": 0,
                        "stroke-linejoin": "miter",
                        "stroke-linecap": "butt",
                        fill: "#000000",
                        stroke: "#000000",
                        opacity: 1,
                        x: 0,
                        y: 0,
                        cx: 0,
                        cy: 0,
                        width: 0,
                        height: 0,
                        r: 0,
                        rx: 0,
                        ry: 0,
                        offset: 0,
                        "stop-opacity": 1,
                        "stop-color": "#000000",
                        "font-size": 16,
                        "font-family": "Helvetica, Arial, sans-serif",
                        "text-anchor": "start"
                    }
                }, i.Color = function (t) {
                    var e, a;
                    this.r = 0, this.g = 0, this.b = 0, t && ("string" == typeof t ? i.regex.isRgb.test(t) ? (e = i.regex.rgb.exec(t.replace(i.regex.whitespace, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : i.regex.isHex.test(t) && (e = i.regex.hex.exec(4 == (a = t).length ? ["#", a.substring(1, 2), a.substring(1, 2), a.substring(2, 3), a.substring(2, 3), a.substring(3, 4), a.substring(3, 4)].join("") : a), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" === r(t) && (this.r = t.r, this.g = t.g, this.b = t.b))
                }, i.extend(i.Color, {
                    toString: function () {
                        return this.toHex()
                    }, toHex: function () {
                        return "#" + u(this.r) + u(this.g) + u(this.b)
                    }, toRgb: function () {
                        return "rgb(" + [this.r, this.g, this.b].join() + ")"
                    }, brightness: function () {
                        return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11
                    }, morph: function (t) {
                        return this.destination = new i.Color(t), this
                    }, at: function (t) {
                        return this.destination ? (t = t < 0 ? 0 : t > 1 ? 1 : t, new i.Color({
                            r: ~~(this.r + (this.destination.r - this.r) * t),
                            g: ~~(this.g + (this.destination.g - this.g) * t),
                            b: ~~(this.b + (this.destination.b - this.b) * t)
                        })) : this
                    }
                }), i.Color.test = function (t) {
                    return t += "", i.regex.isHex.test(t) || i.regex.isRgb.test(t)
                }, i.Color.isRgb = function (t) {
                    return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
                }, i.Color.isColor = function (t) {
                    return i.Color.isRgb(t) || i.Color.test(t)
                }, i.Array = function (t, e) {
                    0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t)
                }, i.extend(i.Array, {
                    morph: function (t) {
                        if (this.destination = this.parse(t), this.value.length != this.destination.length) {
                            for (var e = this.value[this.value.length - 1], i = this.destination[this.destination.length - 1]; this.value.length > this.destination.length;) this.destination.push(i);
                            for (; this.value.length < this.destination.length;) this.value.push(e)
                        }
                        return this
                    }, at: function (t) {
                        if (!this.destination) return this;
                        for (var e = 0, a = this.value.length, s = []; e < a; e++) s.push(this.value[e] + (this.destination[e] - this.value[e]) * t);
                        return new i.Array(s)
                    }, toString: function () {
                        return this.value.join(" ")
                    }, valueOf: function () {
                        return this.value
                    }, parse: function (t) {
                        return t = t.valueOf(), Array.isArray(t) ? t : this.split(t)
                    }, split: function (t) {
                        return t.trim().split(i.regex.delimiter).map(parseFloat)
                    }, reverse: function () {
                        return this.value.reverse(), this
                    }, clone: function () {
                        var t = new this.constructor;
                        return t.value = function t(e) {
                            for (var i = e.slice(0), a = i.length; a--;) Array.isArray(i[a]) && (i[a] = t(i[a]));
                            return i
                        }(this.value), t
                    }
                }), i.PointArray = function (t, e) {
                    i.Array.call(this, t, e || [[0, 0]])
                }, i.PointArray.prototype = new i.Array, i.PointArray.prototype.constructor = i.PointArray;
                for (var a = {
                    M: function (t, e, i) {
                        return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
                    }, L: function (t, e) {
                        return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
                    }, H: function (t, e) {
                        return e.x = t[0], ["H", t[0]]
                    }, V: function (t, e) {
                        return e.y = t[0], ["V", t[0]]
                    }, C: function (t, e) {
                        return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
                    }, S: function (t, e) {
                        return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]]
                    }, Q: function (t, e) {
                        return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
                    }, T: function (t, e) {
                        return e.x = t[0], e.y = t[1], ["T", t[0], t[1]]
                    }, Z: function (t, e, i) {
                        return e.x = i.x, e.y = i.y, ["Z"]
                    }, A: function (t, e) {
                        return e.x = t[5], e.y = t[6], ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]]
                    }
                }, s = "mlhvqtcsaz".split(""), n = 0, o = s.length; n < o; ++n) a[s[n]] = function (t) {
                    return function (e, i, s) {
                        if ("H" == t) e[0] = e[0] + i.x; else if ("V" == t) e[0] = e[0] + i.y; else if ("A" == t) e[5] = e[5] + i.x, e[6] = e[6] + i.y; else for (var r = 0, n = e.length; r < n; ++r) e[r] = e[r] + (r % 2 ? i.y : i.x);
                        return a[t](e, i, s)
                    }
                }(s[n].toUpperCase());
                i.PathArray = function (t, e) {
                    i.Array.call(this, t, e || [["M", 0, 0]])
                }, i.PathArray.prototype = new i.Array, i.PathArray.prototype.constructor = i.PathArray, i.extend(i.PathArray, {
                    toString: function () {
                        return function (t) {
                            for (var e = 0, i = t.length, a = ""; e < i; e++) a += t[e][0], null != t[e][1] && (a += t[e][1], null != t[e][2] && (a += " ", a += t[e][2], null != t[e][3] && (a += " ", a += t[e][3], a += " ", a += t[e][4], null != t[e][5] && (a += " ", a += t[e][5], a += " ", a += t[e][6], null != t[e][7] && (a += " ", a += t[e][7])))));
                            return a + " "
                        }(this.value)
                    }, move: function (t, e) {
                        var i = this.bbox();
                        if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e)) for (var a, s = this.value.length - 1; s >= 0; s--) "M" == (a = this.value[s][0]) || "L" == a || "T" == a ? (this.value[s][1] += t, this.value[s][2] += e) : "H" == a ? this.value[s][1] += t : "V" == a ? this.value[s][1] += e : "C" == a || "S" == a || "Q" == a ? (this.value[s][1] += t, this.value[s][2] += e, this.value[s][3] += t, this.value[s][4] += e, "C" == a && (this.value[s][5] += t, this.value[s][6] += e)) : "A" == a && (this.value[s][6] += t, this.value[s][7] += e);
                        return this
                    }, equalCommands: function (t) {
                        var e, a, s;
                        for (t = new i.PathArray(t), s = this.value.length === t.value.length, e = 0, a = this.value.length; s && e < a; e++) s = this.value[e][0] === t.value[e][0];
                        return s
                    }, morph: function (t) {
                        return t = new i.PathArray(t), this.equalCommands(t) ? this.destination = t : this.destination = null, this
                    }, at: function (t) {
                        if (!this.destination) return this;
                        var e, a, s, r, n = this.value, o = this.destination.value, l = [], h = new i.PathArray;
                        for (e = 0, a = n.length; e < a; e++) {
                            for (l[e] = [n[e][0]], s = 1, r = n[e].length; s < r; s++) l[e][s] = n[e][s] + (o[e][s] - n[e][s]) * t;
                            "A" === l[e][0] && (l[e][4] = +(0 != l[e][4]), l[e][5] = +(0 != l[e][5]))
                        }
                        return h.value = l, h
                    }, parse: function (t) {
                        if (t instanceof i.PathArray) return t.valueOf();
                        var e, s = {M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0};
                        t = "string" == typeof t ? t.replace(i.regex.numbersWithDots, h).replace(i.regex.pathLetters, " $& ").replace(i.regex.hyphen, "$1 -").trim().split(i.regex.delimiter) : t.reduce((function (t, e) {
                            return [].concat.call(t, e)
                        }), []);
                        var r = [], n = new i.Point, o = new i.Point, l = 0, c = t.length;
                        do {
                            i.regex.isPathLetter.test(t[l]) ? (e = t[l], ++l) : "M" == e ? e = "L" : "m" == e && (e = "l"), r.push(a[e].call(null, t.slice(l, l += s[e.toUpperCase()]).map(parseFloat), n, o))
                        } while (c > l);
                        return r
                    }, bbox: function () {
                        return i.parser.draw || i.prepare(), i.parser.path.setAttribute("d", this.toString()), i.parser.path.getBBox()
                    }
                }), i.Number = i.invent({
                    create: function (t, e) {
                        this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(i.regex.numberAndUnit)) && (this.value = parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]) : t instanceof i.Number && (this.value = t.valueOf(), this.unit = t.unit)
                    }, extend: {
                        toString: function () {
                            return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit
                        }, toJSON: function () {
                            return this.toString()
                        }, valueOf: function () {
                            return this.value
                        }, plus: function (t) {
                            return t = new i.Number(t), new i.Number(this + t, this.unit || t.unit)
                        }, minus: function (t) {
                            return t = new i.Number(t), new i.Number(this - t, this.unit || t.unit)
                        }, times: function (t) {
                            return t = new i.Number(t), new i.Number(this * t, this.unit || t.unit)
                        }, divide: function (t) {
                            return t = new i.Number(t), new i.Number(this / t, this.unit || t.unit)
                        }, to: function (t) {
                            var e = new i.Number(this);
                            return "string" == typeof t && (e.unit = t), e
                        }, morph: function (t) {
                            return this.destination = new i.Number(t), t.relative && (this.destination.value += this.value), this
                        }, at: function (t) {
                            return this.destination ? new i.Number(this.destination).minus(this).times(t).plus(this) : this
                        }
                    }
                }), i.Element = i.invent({
                    create: function (t) {
                        this._stroke = i.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type = t.nodeName, this.node.instance = this, this._stroke = t.getAttribute("stroke") || this._stroke)
                    }, extend: {
                        x: function (t) {
                            return this.attr("x", t)
                        }, y: function (t) {
                            return this.attr("y", t)
                        }, cx: function (t) {
                            return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
                        }, cy: function (t) {
                            return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
                        }, move: function (t, e) {
                            return this.x(t).y(e)
                        }, center: function (t, e) {
                            return this.cx(t).cy(e)
                        }, width: function (t) {
                            return this.attr("width", t)
                        }, height: function (t) {
                            return this.attr("height", t)
                        }, size: function (t, e) {
                            var a = g(this, t, e);
                            return this.width(new i.Number(a.width)).height(new i.Number(a.height))
                        }, clone: function (t) {
                            this.writeDataToDom();
                            var e = x(this.node.cloneNode(!0));
                            return t ? t.add(e) : this.after(e), e
                        }, remove: function () {
                            return this.parent() && this.parent().removeElement(this), this
                        }, replace: function (t) {
                            return this.after(t).remove(), t
                        }, addTo: function (t) {
                            return t.put(this)
                        }, putIn: function (t) {
                            return t.add(this)
                        }, id: function (t) {
                            return this.attr("id", t)
                        }, show: function () {
                            return this.style("display", "")
                        }, hide: function () {
                            return this.style("display", "none")
                        }, visible: function () {
                            return "none" != this.style("display")
                        }, toString: function () {
                            return this.attr("id")
                        }, classes: function () {
                            var t = this.attr("class");
                            return null == t ? [] : t.trim().split(i.regex.delimiter)
                        }, hasClass: function (t) {
                            return -1 != this.classes().indexOf(t)
                        }, addClass: function (t) {
                            if (!this.hasClass(t)) {
                                var e = this.classes();
                                e.push(t), this.attr("class", e.join(" "))
                            }
                            return this
                        }, removeClass: function (t) {
                            return this.hasClass(t) && this.attr("class", this.classes().filter((function (e) {
                                return e != t
                            })).join(" ")), this
                        }, toggleClass: function (t) {
                            return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
                        }, reference: function (t) {
                            return i.get(this.attr(t))
                        }, parent: function (e) {
                            var a = this;
                            if (!a.node.parentNode) return null;
                            if (a = i.adopt(a.node.parentNode), !e) return a;
                            for (; a && a.node instanceof t.SVGElement;) {
                                if ("string" == typeof e ? a.matches(e) : a instanceof e) return a;
                                if (!a.node.parentNode || "#document" == a.node.parentNode.nodeName) return null;
                                a = i.adopt(a.node.parentNode)
                            }
                        }, doc: function () {
                            return this instanceof i.Doc ? this : this.parent(i.Doc)
                        }, parents: function (t) {
                            var e = [], i = this;
                            do {
                                if (!(i = i.parent(t)) || !i.node) break;
                                e.push(i)
                            } while (i.parent);
                            return e
                        }, matches: function (t) {
                            return function (t, e) {
                                return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e)
                            }(this.node, t)
                        }, native: function () {
                            return this.node
                        }, svg: function (t) {
                            var a = e.createElement("svg");
                            if (!(t && this instanceof i.Parent)) return a.appendChild(t = e.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), a.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                            a.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                            for (var s = 0, r = a.firstChild.childNodes.length; s < r; s++) this.node.appendChild(a.firstChild.firstChild);
                            return this
                        }, writeDataToDom: function () {
                            return (this.each || this.lines) && (this.each ? this : this.lines()).each((function () {
                                this.writeDataToDom()
                            })), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this
                        }, setData: function (t) {
                            return this.dom = t, this
                        }, is: function (t) {
                            return function (t, e) {
                                return t instanceof e
                            }(this, t)
                        }
                    }
                }), i.easing = {
                    "-": function (t) {
                        return t
                    }, "<>": function (t) {
                        return -Math.cos(t * Math.PI) / 2 + .5
                    }, ">": function (t) {
                        return Math.sin(t * Math.PI / 2)
                    }, "<": function (t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    }
                }, i.morph = function (t) {
                    return function (e, a) {
                        return new i.MorphObj(e, a).at(t)
                    }
                }, i.Situation = i.invent({
                    create: function (t) {
                        this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new i.Number(t.duration).valueOf(), this.delay = new i.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {}
                    }
                }), i.FX = i.invent({
                    create: function (t) {
                        this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1
                    }, extend: {
                        animate: function (t, e, a) {
                            "object" === r(t) && (e = t.ease, a = t.delay, t = t.duration);
                            var s = new i.Situation({duration: t || 1e3, delay: a || 0, ease: i.easing[e || "-"] || e});
                            return this.queue(s), this
                        }, target: function (t) {
                            return t && t instanceof i.Element ? (this._target = t, this) : this._target
                        }, timeToAbsPos: function (t) {
                            return (t - this.situation.start) / (this.situation.duration / this._speed)
                        }, absPosToTime: function (t) {
                            return this.situation.duration / this._speed * t + this.situation.start
                        }, startAnimFrame: function () {
                            this.stopAnimFrame(), this.animationFrame = t.requestAnimationFrame(function () {
                                this.step()
                            }.bind(this))
                        }, stopAnimFrame: function () {
                            t.cancelAnimationFrame(this.animationFrame)
                        }, start: function () {
                            return !this.active && this.situation && (this.active = !0, this.startCurrent()), this
                        }, startCurrent: function () {
                            return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step()
                        }, queue: function (t) {
                            return ("function" == typeof t || t instanceof i.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this
                        }, dequeue: function () {
                            return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof i.Situation ? this.start() : this.situation.call(this)), this
                        }, initAnimations: function () {
                            var t, e, a, s = this.situation;
                            if (s.init) return this;
                            for (t in s.animations) for (a = this.target()[t](), Array.isArray(a) || (a = [a]), Array.isArray(s.animations[t]) || (s.animations[t] = [s.animations[t]]), e = a.length; e--;) s.animations[t][e] instanceof i.Number && (a[e] = new i.Number(a[e])), s.animations[t][e] = a[e].morph(s.animations[t][e]);
                            for (t in s.attrs) s.attrs[t] = new i.MorphObj(this.target().attr(t), s.attrs[t]);
                            for (t in s.styles) s.styles[t] = new i.MorphObj(this.target().style(t), s.styles[t]);
                            return s.initialTransformation = this.target().matrixify(), s.init = !0, this
                        }, clearQueue: function () {
                            return this.situations = [], this
                        }, clearCurrent: function () {
                            return this.situation = null, this
                        }, stop: function (t, e) {
                            var i = this.active;
                            return this.active = !1, e && this.clearQueue(), t && this.situation && (!i && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent()
                        }, reset: function () {
                            if (this.situation) {
                                var t = this.situation;
                                this.stop(), this.situation = t, this.atStart()
                            }
                            return this
                        }, finish: function () {
                            for (this.stop(!0, !1); this.dequeue().situation && this.stop(!0, !1);) ;
                            return this.clearQueue().clearCurrent(), this
                        }, atStart: function () {
                            return this.at(0, !0)
                        }, at: function (t, e) {
                            var i = this.situation.duration / this._speed;
                            return this.absPos = t, e || (this.situation.reversed && (this.absPos = 1 - this.absPos), this.absPos += this.situation.loop), this.situation.start = +new Date - this.absPos * i, this.situation.finish = this.situation.start + i, this.step(!0)
                        }, speed: function (t) {
                            return 0 === t ? this.pause() : t ? (this._speed = t, this.at(this.absPos, !0)) : this._speed
                        }, after: function (t) {
                            var e = this.last();
                            return this.target().on("finished.fx", (function i(a) {
                                a.detail.situation == e && (t.call(this, e), this.off("finished.fx", i))
                            })), this._callStart()
                        }, during: function (t) {
                            var e = this.last(), a = function (a) {
                                a.detail.situation == e && t.call(this, a.detail.pos, i.morph(a.detail.pos), a.detail.eased, e)
                            };
                            return this.target().off("during.fx", a).on("during.fx", a), this.after((function () {
                                this.off("during.fx", a)
                            })), this._callStart()
                        }, afterAll: function (t) {
                            var e = function e(i) {
                                t.call(this), this.off("allfinished.fx", e)
                            };
                            return this.target().off("allfinished.fx", e).on("allfinished.fx", e), this._callStart()
                        }, last: function () {
                            return this.situations.length ? this.situations[this.situations.length - 1] : this.situation
                        }, add: function (t, e, i) {
                            return this.last()[i || "animations"][t] = e, this._callStart()
                        }, step: function (t) {
                            var e, i, a;
                            t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops ? (e = Math.max(this.absPos, 0), i = Math.floor(e), !0 === this.situation.loops || i < this.situation.loops ? (this.pos = e - i, a = this.situation.loop, this.situation.loop = i) : (this.absPos = this.situation.loops, this.pos = 1, a = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - a) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
                            var s = this.situation.ease(this.pos);
                            for (var r in this.situation.once) r > this.lastPos && r <= s && (this.situation.once[r].call(this.target(), this.pos, s), delete this.situation.once[r]);
                            return this.active && this.target().fire("during", {
                                pos: this.pos,
                                eased: s,
                                fx: this,
                                situation: this.situation
                            }), this.situation ? (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", {
                                fx: this,
                                situation: this.situation
                            }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = s, this) : this
                        }, eachAt: function () {
                            var t, e, a, s = this, r = this.target(), n = this.situation;
                            for (t in n.animations) a = [].concat(n.animations[t]).map((function (t) {
                                return "string" != typeof t && t.at ? t.at(n.ease(s.pos), s.pos) : t
                            })), r[t].apply(r, a);
                            for (t in n.attrs) a = [t].concat(n.attrs[t]).map((function (t) {
                                return "string" != typeof t && t.at ? t.at(n.ease(s.pos), s.pos) : t
                            })), r.attr.apply(r, a);
                            for (t in n.styles) a = [t].concat(n.styles[t]).map((function (t) {
                                return "string" != typeof t && t.at ? t.at(n.ease(s.pos), s.pos) : t
                            })), r.style.apply(r, a);
                            if (n.transforms.length) {
                                for (a = n.initialTransformation, t = 0, e = n.transforms.length; t < e; t++) {
                                    var o = n.transforms[t];
                                    o instanceof i.Matrix ? a = o.relative ? a.multiply((new i.Matrix).morph(o).at(n.ease(this.pos))) : a.morph(o).at(n.ease(this.pos)) : (o.relative || o.undo(a.extract()), a = a.multiply(o.at(n.ease(this.pos))))
                                }
                                r.matrix(a)
                            }
                            return this
                        }, once: function (t, e, i) {
                            var a = this.last();
                            return i || (t = a.ease(t)), a.once[t] = e, this
                        }, _callStart: function () {
                            return setTimeout(function () {
                                this.start()
                            }.bind(this), 0), this
                        }
                    }, parent: i.Element, construct: {
                        animate: function (t, e, a) {
                            return (this.fx || (this.fx = new i.FX(this))).animate(t, e, a)
                        }, delay: function (t) {
                            return (this.fx || (this.fx = new i.FX(this))).delay(t)
                        }, stop: function (t, e) {
                            return this.fx && this.fx.stop(t, e), this
                        }, finish: function () {
                            return this.fx && this.fx.finish(), this
                        }, speed: function (t) {
                            if (this.fx) {
                                if (null == t) return this.fx.speed();
                                this.fx.speed(t)
                            }
                            return this
                        }
                    }
                }), i.MorphObj = i.invent({
                    create: function (t, e) {
                        return i.Color.isColor(e) ? new i.Color(t).morph(e) : i.regex.delimiter.test(t) ? i.regex.pathLetters.test(t) ? new i.PathArray(t).morph(e) : new i.Array(t).morph(e) : i.regex.numberAndUnit.test(e) ? new i.Number(t).morph(e) : (this.value = t, void (this.destination = e))
                    }, extend: {
                        at: function (t, e) {
                            return e < 1 ? this.value : this.destination
                        }, valueOf: function () {
                            return this.value
                        }
                    }
                }), i.extend(i.FX, {
                    attr: function (t, e, i) {
                        if ("object" === r(t)) for (var a in t) this.attr(a, t[a]); else this.add(t, e, "attrs");
                        return this
                    }, style: function (t, e) {
                        if ("object" === r(t)) for (var i in t) this.style(i, t[i]); else this.add(t, e, "styles");
                        return this
                    }, x: function (t, e) {
                        if (this.target() instanceof i.G) return this.transform({x: t}, e), this;
                        var a = new i.Number(t);
                        return a.relative = e, this.add("x", a)
                    }, y: function (t, e) {
                        if (this.target() instanceof i.G) return this.transform({y: t}, e), this;
                        var a = new i.Number(t);
                        return a.relative = e, this.add("y", a)
                    }, cx: function (t) {
                        return this.add("cx", new i.Number(t))
                    }, cy: function (t) {
                        return this.add("cy", new i.Number(t))
                    }, move: function (t, e) {
                        return this.x(t).y(e)
                    }, center: function (t, e) {
                        return this.cx(t).cy(e)
                    }, size: function (t, e) {
                        var a;
                        return this.target() instanceof i.Text ? this.attr("font-size", t) : (t && e || (a = this.target().bbox()), t || (t = a.width / a.height * e), e || (e = a.height / a.width * t), this.add("width", new i.Number(t)).add("height", new i.Number(e))), this
                    }, width: function (t) {
                        return this.add("width", new i.Number(t))
                    }, height: function (t) {
                        return this.add("height", new i.Number(t))
                    }, plot: function (t, e, i, a) {
                        return 4 == arguments.length ? this.plot([t, e, i, a]) : this.add("plot", new (this.target().morphArray)(t))
                    }, leading: function (t) {
                        return this.target().leading ? this.add("leading", new i.Number(t)) : this
                    }, viewbox: function (t, e, a, s) {
                        return this.target() instanceof i.Container && this.add("viewbox", new i.ViewBox(t, e, a, s)), this
                    }, update: function (t) {
                        if (this.target() instanceof i.Stop) {
                            if ("number" == typeof t || t instanceof i.Number) return this.update({
                                offset: arguments[0],
                                color: arguments[1],
                                opacity: arguments[2]
                            });
                            null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", t.offset)
                        }
                        return this
                    }
                }), i.Box = i.invent({
                    create: function (t, e, a, s) {
                        if (!("object" !== r(t) || t instanceof i.Element)) return i.Box.call(this, null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
                        4 == arguments.length && (this.x = t, this.y = e, this.width = a, this.height = s), b(this)
                    }, extend: {
                        merge: function (t) {
                            var e = new this.constructor;
                            return e.x = Math.min(this.x, t.x), e.y = Math.min(this.y, t.y), e.width = Math.max(this.x + this.width, t.x + t.width) - e.x, e.height = Math.max(this.y + this.height, t.y + t.height) - e.y, b(e)
                        }
                    }
                }), i.BBox = i.invent({
                    create: function (t) {
                        if (i.Box.apply(this, [].slice.call(arguments)), t instanceof i.Element) {
                            var a;
                            try {
                                if (!e.documentElement.contains) {
                                    for (var s = t.node; s.parentNode;) s = s.parentNode;
                                    if (s != e) throw new Error("Element not in the dom")
                                }
                                a = t.node.getBBox()
                            } catch (e) {
                                if (t instanceof i.Shape) {
                                    i.parser.draw || i.prepare();
                                    var r = t.clone(i.parser.draw.instance).show();
                                    a = r.node.getBBox(), r.remove()
                                } else a = {
                                    x: t.node.clientLeft,
                                    y: t.node.clientTop,
                                    width: t.node.clientWidth,
                                    height: t.node.clientHeight
                                }
                            }
                            i.Box.call(this, a)
                        }
                    }, inherit: i.Box, parent: i.Element, construct: {
                        bbox: function () {
                            return new i.BBox(this)
                        }
                    }
                }), i.BBox.prototype.constructor = i.BBox, i.Matrix = i.invent({
                    create: function (t) {
                        var e, a = p([1, 0, 0, 1, 0, 0]);
                        for (t = t instanceof i.Element ? t.matrixify() : "string" == typeof t ? p(t.split(i.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? p([].slice.call(arguments)) : Array.isArray(t) ? p(t) : "object" === r(t) ? t : a, e = m.length - 1; e >= 0; --e) this[m[e]] = null != t[m[e]] ? t[m[e]] : a[m[e]]
                    }, extend: {
                        extract: function () {
                            var t = f(this, 0, 1), e = (f(this, 1, 0), 180 / Math.PI * Math.atan2(t.y, t.x) - 90);
                            return {
                                x: this.e,
                                y: this.f,
                                transformedX: (this.e * Math.cos(e * Math.PI / 180) + this.f * Math.sin(e * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                                transformedY: (this.f * Math.cos(e * Math.PI / 180) + this.e * Math.sin(-e * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                                rotation: e,
                                a: this.a,
                                b: this.b,
                                c: this.c,
                                d: this.d,
                                e: this.e,
                                f: this.f,
                                matrix: new i.Matrix(this)
                            }
                        }, clone: function () {
                            return new i.Matrix(this)
                        }, morph: function (t) {
                            return this.destination = new i.Matrix(t), this
                        }, multiply: function (t) {
                            return new i.Matrix(this.native().multiply(function (t) {
                                return t instanceof i.Matrix || (t = new i.Matrix(t)), t
                            }(t).native()))
                        }, inverse: function () {
                            return new i.Matrix(this.native().inverse())
                        }, translate: function (t, e) {
                            return new i.Matrix(this.native().translate(t || 0, e || 0))
                        }, native: function () {
                            for (var t = i.parser.native.createSVGMatrix(), e = m.length - 1; e >= 0; e--) t[m[e]] = this[m[e]];
                            return t
                        }, toString: function () {
                            return "matrix(" + v(this.a) + "," + v(this.b) + "," + v(this.c) + "," + v(this.d) + "," + v(this.e) + "," + v(this.f) + ")"
                        }
                    }, parent: i.Element, construct: {
                        ctm: function () {
                            return new i.Matrix(this.node.getCTM())
                        }, screenCTM: function () {
                            if (this instanceof i.Nested) {
                                var t = this.rect(1, 1), e = t.node.getScreenCTM();
                                return t.remove(), new i.Matrix(e)
                            }
                            return new i.Matrix(this.node.getScreenCTM())
                        }
                    }
                }), i.Point = i.invent({
                    create: function (t, e) {
                        var i;
                        i = Array.isArray(t) ? {x: t[0], y: t[1]} : "object" === r(t) ? {
                            x: t.x,
                            y: t.y
                        } : null != t ? {x: t, y: null != e ? e : t} : {x: 0, y: 0}, this.x = i.x, this.y = i.y
                    }, extend: {
                        clone: function () {
                            return new i.Point(this)
                        }, morph: function (t, e) {
                            return this.destination = new i.Point(t, e), this
                        }
                    }
                }), i.extend(i.Element, {
                    point: function (t, e) {
                        return new i.Point(t, e).transform(this.screenCTM().inverse())
                    }
                }), i.extend(i.Element, {
                    attr: function (t, e, a) {
                        if (null == t) {
                            for (t = {}, a = (e = this.node.attributes).length - 1; a >= 0; a--) t[e[a].nodeName] = i.regex.isNumber.test(e[a].nodeValue) ? parseFloat(e[a].nodeValue) : e[a].nodeValue;
                            return t
                        }
                        if ("object" === r(t)) for (e in t) this.attr(e, t[e]); else if (null === e) this.node.removeAttribute(t); else {
                            if (null == e) return null == (e = this.node.getAttribute(t)) ? i.defaults.attrs[t] : i.regex.isNumber.test(e) ? parseFloat(e) : e;
                            "stroke-width" == t ? this.attr("stroke", parseFloat(e) > 0 ? this._stroke : null) : "stroke" == t && (this._stroke = e), "fill" != t && "stroke" != t || (i.regex.isImage.test(e) && (e = this.doc().defs().image(e, 0, 0)), e instanceof i.Image && (e = this.doc().defs().pattern(0, 0, (function () {
                                this.add(e)
                            })))), "number" == typeof e ? e = new i.Number(e) : i.Color.isColor(e) ? e = new i.Color(e) : Array.isArray(e) && (e = new i.Array(e)), "leading" == t ? this.leading && this.leading(e) : "string" == typeof a ? this.node.setAttributeNS(a, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e)
                        }
                        return this
                    }
                }), i.extend(i.Element, {
                    transform: function (t, e) {
                        var a;
                        return "object" !== r(t) ? (a = new i.Matrix(this).extract(), "string" == typeof t ? a[t] : a) : (a = new i.Matrix(this), e = !!e || !!t.relative, null != t.a ? a = e ? a.multiply(new i.Matrix(t)) : new i.Matrix(t) : null == t.x && null == t.y || (e ? a = a.translate(t.x, t.y) : (null != t.x && (a.e = t.x), null != t.y && (a.f = t.y))), this.attr("transform", a))
                    }
                }), i.extend(i.Element, {
                    untransform: function () {
                        return this.attr("transform", null)
                    }, matrixify: function () {
                        return (this.attr("transform") || "").split(i.regex.transforms).slice(0, -1).map((function (t) {
                            var e = t.trim().split("(");
                            return [e[0], e[1].split(i.regex.delimiter).map((function (t) {
                                return parseFloat(t)
                            }))]
                        })).reduce((function (t, e) {
                            return "matrix" == e[0] ? t.multiply(p(e[1])) : t[e[0]].apply(t, e[1])
                        }), new i.Matrix)
                    }, toParent: function (t) {
                        if (this == t) return this;
                        var e = this.screenCTM(), i = t.screenCTM().inverse();
                        return this.addTo(t).untransform().transform(i.multiply(e)), this
                    }, toDoc: function () {
                        return this.toParent(this.doc())
                    }
                }), i.Transformation = i.invent({
                    create: function (t, e) {
                        if (arguments.length > 1 && "boolean" != typeof e) return this.constructor.call(this, [].slice.call(arguments));
                        if (Array.isArray(t)) for (var i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[i]; else if ("object" === r(t)) for (i = 0, a = this.arguments.length; i < a; ++i) this[this.arguments[i]] = t[this.arguments[i]];
                        this.inversed = !1, !0 === e && (this.inversed = !0)
                    }, extend: {
                        arguments: [], method: "", at: function (t) {
                            for (var e = [], a = 0, s = this.arguments.length; a < s; ++a) e.push(this[this.arguments[a]]);
                            var r = this._undo || new i.Matrix;
                            return r = (new i.Matrix).morph(i.Matrix.prototype[this.method].apply(r, e)).at(t), this.inversed ? r.inverse() : r
                        }, undo: function (t) {
                            for (var e = 0, a = this.arguments.length; e < a; ++e) t[this.arguments[e]] = void 0 === this[this.arguments[e]] ? 0 : t[this.arguments[e]];
                            return t.cx = this.cx, t.cy = this.cy, this._undo = new (i[d(this.method)])(t, !0).at(1), this
                        }
                    }
                }), i.Translate = i.invent({
                    parent: i.Matrix, inherit: i.Transformation, create: function (t, e) {
                        this.constructor.apply(this, [].slice.call(arguments))
                    }, extend: {arguments: ["transformedX", "transformedY"], method: "translate"}
                }), i.extend(i.Element, {
                    style: function (t, e) {
                        if (0 == arguments.length) return this.node.style.cssText || "";
                        if (arguments.length < 2) if ("object" === r(t)) for (e in t) this.style(e, t[e]); else {
                            if (!i.regex.isCss.test(t)) return this.node.style[c(t)];
                            for (t = t.split(/\s*;\s*/).filter((function (t) {
                                return !!t
                            })).map((function (t) {
                                return t.split(/\s*:\s*/)
                            })); e = t.pop();) this.style(e[0], e[1])
                        } else this.node.style[c(t)] = null === e || i.regex.isBlank.test(e) ? "" : e;
                        return this
                    }
                }), i.Parent = i.invent({
                    create: function (t) {
                        this.constructor.call(this, t)
                    }, inherit: i.Element, extend: {
                        children: function () {
                            return i.utils.map(i.utils.filterSVGElements(this.node.childNodes), (function (t) {
                                return i.adopt(t)
                            }))
                        }, add: function (t, e) {
                            return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this
                        }, put: function (t, e) {
                            return this.add(t, e), t
                        }, has: function (t) {
                            return this.index(t) >= 0
                        }, index: function (t) {
                            return [].slice.call(this.node.childNodes).indexOf(t.node)
                        }, get: function (t) {
                            return i.adopt(this.node.childNodes[t])
                        }, first: function () {
                            return this.get(0)
                        }, last: function () {
                            return this.get(this.node.childNodes.length - 1)
                        }, each: function (t, e) {
                            var a, s, r = this.children();
                            for (a = 0, s = r.length; a < s; a++) r[a] instanceof i.Element && t.apply(r[a], [a, r]), e && r[a] instanceof i.Container && r[a].each(t, e);
                            return this
                        }, removeElement: function (t) {
                            return this.node.removeChild(t.node), this
                        }, clear: function () {
                            for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                            return delete this._defs, this
                        }, defs: function () {
                            return this.doc().defs()
                        }
                    }
                }), i.extend(i.Parent, {
                    ungroup: function (t, e) {
                        return 0 === e || this instanceof i.Defs || this.node == i.parser.draw ? this : (t = t || (this instanceof i.Doc ? this : this.parent(i.Parent)), e = e || 1 / 0, this.each((function () {
                            return this instanceof i.Defs ? this : this instanceof i.Parent ? this.ungroup(t, e - 1) : this.toParent(t)
                        })), this.node.firstChild || this.remove(), this)
                    }, flatten: function (t, e) {
                        return this.ungroup(t, e)
                    }
                }), i.Container = i.invent({
                    create: function (t) {
                        this.constructor.call(this, t)
                    }, inherit: i.Parent
                }), i.ViewBox = i.invent({
                    create: function (t) {
                        var e, a, s, n, o, l, h, c = [0, 0, 0, 0], d = 1, u = 1,
                            g = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;
                        if (t instanceof i.Element) {
                            for (l = t, h = t, o = (t.attr("viewBox") || "").match(g), t.bbox, s = new i.Number(t.width()), n = new i.Number(t.height()); "%" == s.unit;) d *= s.value, s = new i.Number(l instanceof i.Doc ? l.parent().offsetWidth : l.parent().width()), l = l.parent();
                            for (; "%" == n.unit;) u *= n.value, n = new i.Number(h instanceof i.Doc ? h.parent().offsetHeight : h.parent().height()), h = h.parent();
                            this.x = 0, this.y = 0, this.width = s * d, this.height = n * u, this.zoom = 1, o && (e = parseFloat(o[0]), a = parseFloat(o[1]), s = parseFloat(o[2]), n = parseFloat(o[3]), this.zoom = this.width / this.height > s / n ? this.height / n : this.width / s, this.x = e, this.y = a, this.width = s, this.height = n)
                        } else t = "string" == typeof t ? t.match(g).map((function (t) {
                            return parseFloat(t)
                        })) : Array.isArray(t) ? t : "object" === r(t) ? [t.x, t.y, t.width, t.height] : 4 == arguments.length ? [].slice.call(arguments) : c, this.x = t[0], this.y = t[1], this.width = t[2], this.height = t[3]
                    }, extend: {
                        toString: function () {
                            return this.x + " " + this.y + " " + this.width + " " + this.height
                        }, morph: function (t, e, a, s) {
                            return this.destination = new i.ViewBox(t, e, a, s), this
                        }, at: function (t) {
                            return this.destination ? new i.ViewBox([this.x + (this.destination.x - this.x) * t, this.y + (this.destination.y - this.y) * t, this.width + (this.destination.width - this.width) * t, this.height + (this.destination.height - this.height) * t]) : this
                        }
                    }, parent: i.Container, construct: {
                        viewbox: function (t, e, a, s) {
                            return 0 == arguments.length ? new i.ViewBox(this) : this.attr("viewBox", new i.ViewBox(t, e, a, s))
                        }
                    }
                }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach((function (t) {
                    i.Element.prototype[t] = function (e) {
                        return i.on(this.node, t, e), this
                    }
                })), i.listeners = [], i.handlerMap = [], i.listenerId = 0, i.on = function (t, e, a, s, r) {
                    var n = a.bind(s || t.instance || t), o = (i.handlerMap.indexOf(t) + 1 || i.handlerMap.push(t)) - 1,
                        l = e.split(".")[0], h = e.split(".")[1] || "*";
                    i.listeners[o] = i.listeners[o] || {}, i.listeners[o][l] = i.listeners[o][l] || {}, i.listeners[o][l][h] = i.listeners[o][l][h] || {}, a._svgjsListenerId || (a._svgjsListenerId = ++i.listenerId), i.listeners[o][l][h][a._svgjsListenerId] = n, t.addEventListener(l, n, r || !1)
                }, i.off = function (t, e, a) {
                    var s = i.handlerMap.indexOf(t), r = e && e.split(".")[0], n = e && e.split(".")[1], o = "";
                    if (-1 != s) if (a) {
                        if ("function" == typeof a && (a = a._svgjsListenerId), !a) return;
                        i.listeners[s][r] && i.listeners[s][r][n || "*"] && (t.removeEventListener(r, i.listeners[s][r][n || "*"][a], !1), delete i.listeners[s][r][n || "*"][a])
                    } else if (n && r) {
                        if (i.listeners[s][r] && i.listeners[s][r][n]) {
                            for (a in i.listeners[s][r][n]) i.off(t, [r, n].join("."), a);
                            delete i.listeners[s][r][n]
                        }
                    } else if (n) for (e in i.listeners[s]) for (o in i.listeners[s][e]) n === o && i.off(t, [e, n].join(".")); else if (r) {
                        if (i.listeners[s][r]) {
                            for (o in i.listeners[s][r]) i.off(t, [r, o].join("."));
                            delete i.listeners[s][r]
                        }
                    } else {
                        for (e in i.listeners[s]) i.off(t, e);
                        delete i.listeners[s], delete i.handlerMap[s]
                    }
                }, i.extend(i.Element, {
                    on: function (t, e, a, s) {
                        return i.on(this.node, t, e, a, s), this
                    }, off: function (t, e) {
                        return i.off(this.node, t, e), this
                    }, fire: function (e, a) {
                        return e instanceof t.Event ? this.node.dispatchEvent(e) : this.node.dispatchEvent(e = new i.CustomEvent(e, {
                            detail: a,
                            cancelable: !0
                        })), this._event = e, this
                    }, event: function () {
                        return this._event
                    }
                }), i.Defs = i.invent({create: "defs", inherit: i.Container}), i.G = i.invent({
                    create: "g",
                    inherit: i.Container,
                    extend: {
                        x: function (t) {
                            return null == t ? this.transform("x") : this.transform({x: t - this.x()}, !0)
                        }, y: function (t) {
                            return null == t ? this.transform("y") : this.transform({y: t - this.y()}, !0)
                        }, cx: function (t) {
                            return null == t ? this.gbox().cx : this.x(t - this.gbox().width / 2)
                        }, cy: function (t) {
                            return null == t ? this.gbox().cy : this.y(t - this.gbox().height / 2)
                        }, gbox: function () {
                            var t = this.bbox(), e = this.transform();
                            return t.x += e.x, t.x2 += e.x, t.cx += e.x, t.y += e.y, t.y2 += e.y, t.cy += e.y, t
                        }
                    },
                    construct: {
                        group: function () {
                            return this.put(new i.G)
                        }
                    }
                }), i.Doc = i.invent({
                    create: function (t) {
                        t && ("svg" == (t = "string" == typeof t ? e.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, i.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs())
                    }, inherit: i.Container, extend: {
                        namespace: function () {
                            return this.attr({
                                xmlns: i.ns,
                                version: "1.1"
                            }).attr("xmlns:xlink", i.xlink, i.xmlns).attr("xmlns:svgjs", i.svgjs, i.xmlns)
                        }, defs: function () {
                            var t;
                            return this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = i.adopt(t) : this._defs = new i.Defs, this.node.appendChild(this._defs.node)), this._defs
                        }, parent: function () {
                            return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null
                        }, remove: function () {
                            return this.parent() && this.parent().removeChild(this.node), this
                        }, clear: function () {
                            for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                            return delete this._defs, i.parser.draw && !i.parser.draw.parentNode && this.node.appendChild(i.parser.draw), this
                        }, clone: function (t) {
                            this.writeDataToDom();
                            var e = this.node, i = x(e.cloneNode(!0));
                            return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i
                        }
                    }
                }), i.extend(i.Element, {
                    siblings: function () {
                        return this.parent().children()
                    }, position: function () {
                        return this.parent().index(this)
                    }, next: function () {
                        return this.siblings()[this.position() + 1]
                    }, previous: function () {
                        return this.siblings()[this.position() - 1]
                    }, before: function (t) {
                        t.remove();
                        var e = this.position();
                        return this.parent().add(t, e), this
                    }, after: function (t) {
                        t.remove();
                        var e = this.position();
                        return this.parent().add(t, e + 1), this
                    }
                }), i.Gradient = i.invent({
                    create: function (t) {
                        this.constructor.call(this, i.create(t + "Gradient")), this.type = t
                    }, inherit: i.Container, extend: {
                        at: function (t, e, a) {
                            return this.put(new i.Stop).update(t, e, a)
                        }, update: function (t) {
                            return this.clear(), "function" == typeof t && t.call(this, this), this
                        }, fill: function () {
                            return "url(#" + this.id() + ")"
                        }, toString: function () {
                            return this.fill()
                        }, attr: function (t, e, a) {
                            return "transform" == t && (t = "gradientTransform"), i.Container.prototype.attr.call(this, t, e, a)
                        }
                    }, construct: {
                        gradient: function (t, e) {
                            return this.defs().gradient(t, e)
                        }
                    }
                }), i.extend(i.Gradient, i.FX, {
                    from: function (t, e) {
                        return "radial" == (this._target || this).type ? this.attr({
                            fx: new i.Number(t),
                            fy: new i.Number(e)
                        }) : this.attr({x1: new i.Number(t), y1: new i.Number(e)})
                    }, to: function (t, e) {
                        return "radial" == (this._target || this).type ? this.attr({
                            cx: new i.Number(t),
                            cy: new i.Number(e)
                        }) : this.attr({x2: new i.Number(t), y2: new i.Number(e)})
                    }
                }), i.extend(i.Defs, {
                    gradient: function (t, e) {
                        return this.put(new i.Gradient(t)).update(e)
                    }
                }), i.Stop = i.invent({
                    create: "stop", inherit: i.Element, extend: {
                        update: function (t) {
                            return ("number" == typeof t || t instanceof i.Number) && (t = {
                                offset: arguments[0],
                                color: arguments[1],
                                opacity: arguments[2]
                            }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new i.Number(t.offset)), this
                        }
                    }
                }), i.Pattern = i.invent({
                    create: "pattern", inherit: i.Container, extend: {
                        fill: function () {
                            return "url(#" + this.id() + ")"
                        }, update: function (t) {
                            return this.clear(), "function" == typeof t && t.call(this, this), this
                        }, toString: function () {
                            return this.fill()
                        }, attr: function (t, e, a) {
                            return "transform" == t && (t = "patternTransform"), i.Container.prototype.attr.call(this, t, e, a)
                        }
                    }, construct: {
                        pattern: function (t, e, i) {
                            return this.defs().pattern(t, e, i)
                        }
                    }
                }), i.extend(i.Defs, {
                    pattern: function (t, e, a) {
                        return this.put(new i.Pattern).update(a).attr({
                            x: 0,
                            y: 0,
                            width: t,
                            height: e,
                            patternUnits: "userSpaceOnUse"
                        })
                    }
                }), i.Shape = i.invent({
                    create: function (t) {
                        this.constructor.call(this, t)
                    }, inherit: i.Element
                }), i.Symbol = i.invent({
                    create: "symbol", inherit: i.Container, construct: {
                        symbol: function () {
                            return this.put(new i.Symbol)
                        }
                    }
                }), i.Use = i.invent({
                    create: "use", inherit: i.Shape, extend: {
                        element: function (t, e) {
                            return this.attr("href", (e || "") + "#" + t, i.xlink)
                        }
                    }, construct: {
                        use: function (t, e) {
                            return this.put(new i.Use).element(t, e)
                        }
                    }
                }), i.Rect = i.invent({
                    create: "rect", inherit: i.Shape, construct: {
                        rect: function (t, e) {
                            return this.put(new i.Rect).size(t, e)
                        }
                    }
                }), i.Circle = i.invent({
                    create: "circle", inherit: i.Shape, construct: {
                        circle: function (t) {
                            return this.put(new i.Circle).rx(new i.Number(t).divide(2)).move(0, 0)
                        }
                    }
                }), i.extend(i.Circle, i.FX, {
                    rx: function (t) {
                        return this.attr("r", t)
                    }, ry: function (t) {
                        return this.rx(t)
                    }
                }), i.Ellipse = i.invent({
                    create: "ellipse", inherit: i.Shape, construct: {
                        ellipse: function (t, e) {
                            return this.put(new i.Ellipse).size(t, e).move(0, 0)
                        }
                    }
                }), i.extend(i.Ellipse, i.Rect, i.FX, {
                    rx: function (t) {
                        return this.attr("rx", t)
                    }, ry: function (t) {
                        return this.attr("ry", t)
                    }
                }), i.extend(i.Circle, i.Ellipse, {
                    x: function (t) {
                        return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
                    }, y: function (t) {
                        return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
                    }, cx: function (t) {
                        return null == t ? this.attr("cx") : this.attr("cx", t)
                    }, cy: function (t) {
                        return null == t ? this.attr("cy") : this.attr("cy", t)
                    }, width: function (t) {
                        return null == t ? 2 * this.rx() : this.rx(new i.Number(t).divide(2))
                    }, height: function (t) {
                        return null == t ? 2 * this.ry() : this.ry(new i.Number(t).divide(2))
                    }, size: function (t, e) {
                        var a = g(this, t, e);
                        return this.rx(new i.Number(a.width).divide(2)).ry(new i.Number(a.height).divide(2))
                    }
                }), i.Line = i.invent({
                    create: "line", inherit: i.Shape, extend: {
                        array: function () {
                            return new i.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]])
                        }, plot: function (t, e, a, s) {
                            return null == t ? this.array() : (t = void 0 !== e ? {
                                x1: t,
                                y1: e,
                                x2: a,
                                y2: s
                            } : new i.PointArray(t).toLine(), this.attr(t))
                        }, move: function (t, e) {
                            return this.attr(this.array().move(t, e).toLine())
                        }, size: function (t, e) {
                            var i = g(this, t, e);
                            return this.attr(this.array().size(i.width, i.height).toLine())
                        }
                    }, construct: {
                        line: function (t, e, a, s) {
                            return i.Line.prototype.plot.apply(this.put(new i.Line), null != t ? [t, e, a, s] : [0, 0, 0, 0])
                        }
                    }
                }), i.Polyline = i.invent({
                    create: "polyline", inherit: i.Shape, construct: {
                        polyline: function (t) {
                            return this.put(new i.Polyline).plot(t || new i.PointArray)
                        }
                    }
                }), i.Polygon = i.invent({
                    create: "polygon", inherit: i.Shape, construct: {
                        polygon: function (t) {
                            return this.put(new i.Polygon).plot(t || new i.PointArray)
                        }
                    }
                }), i.extend(i.Polyline, i.Polygon, {
                    array: function () {
                        return this._array || (this._array = new i.PointArray(this.attr("points")))
                    }, plot: function (t) {
                        return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new i.PointArray(t))
                    }, clear: function () {
                        return delete this._array, this
                    }, move: function (t, e) {
                        return this.attr("points", this.array().move(t, e))
                    }, size: function (t, e) {
                        var i = g(this, t, e);
                        return this.attr("points", this.array().size(i.width, i.height))
                    }
                }), i.extend(i.Line, i.Polyline, i.Polygon, {
                    morphArray: i.PointArray, x: function (t) {
                        return null == t ? this.bbox().x : this.move(t, this.bbox().y)
                    }, y: function (t) {
                        return null == t ? this.bbox().y : this.move(this.bbox().x, t)
                    }, width: function (t) {
                        var e = this.bbox();
                        return null == t ? e.width : this.size(t, e.height)
                    }, height: function (t) {
                        var e = this.bbox();
                        return null == t ? e.height : this.size(e.width, t)
                    }
                }), i.Path = i.invent({
                    create: "path",
                    inherit: i.Shape,
                    extend: {
                        morphArray: i.PathArray, array: function () {
                            return this._array || (this._array = new i.PathArray(this.attr("d")))
                        }, plot: function (t) {
                            return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new i.PathArray(t))
                        }, clear: function () {
                            return delete this._array, this
                        }, move: function (t, e) {
                            return this.attr("d", this.array().move(t, e))
                        }, x: function (t) {
                            return null == t ? this.bbox().x : this.move(t, this.bbox().y)
                        }, y: function (t) {
                            return null == t ? this.bbox().y : this.move(this.bbox().x, t)
                        }, size: function (t, e) {
                            var i = g(this, t, e);
                            return this.attr("d", this.array().size(i.width, i.height))
                        }, width: function (t) {
                            return null == t ? this.bbox().width : this.size(t, this.bbox().height)
                        }, height: function (t) {
                            return null == t ? this.bbox().height : this.size(this.bbox().width, t)
                        }
                    },
                    construct: {
                        path: function (t) {
                            return this.put(new i.Path).plot(t || new i.PathArray)
                        }
                    }
                }), i.Image = i.invent({
                    create: "image", inherit: i.Shape, extend: {
                        load: function (e) {
                            if (!e) return this;
                            var a = this, s = new t.Image;
                            return i.on(s, "load", (function () {
                                i.off(s);
                                var t = a.parent(i.Pattern);
                                null !== t && (0 == a.width() && 0 == a.height() && a.size(s.width, s.height), t && 0 == t.width() && 0 == t.height() && t.size(a.width(), a.height()), "function" == typeof a._loaded && a._loaded.call(a, {
                                    width: s.width,
                                    height: s.height,
                                    ratio: s.width / s.height,
                                    url: e
                                }))
                            })), i.on(s, "error", (function (t) {
                                i.off(s), "function" == typeof a._error && a._error.call(a, t)
                            })), this.attr("href", s.src = this.src = e, i.xlink)
                        }, loaded: function (t) {
                            return this._loaded = t, this
                        }, error: function (t) {
                            return this._error = t, this
                        }
                    }, construct: {
                        image: function (t, e, a) {
                            return this.put(new i.Image).load(t).size(e || 0, a || e || 0)
                        }
                    }
                }), i.Text = i.invent({
                    create: function () {
                        this.constructor.call(this, i.create("text")), this.dom.leading = new i.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", i.defaults.attrs["font-family"])
                    }, inherit: i.Shape, extend: {
                        x: function (t) {
                            return null == t ? this.attr("x") : this.attr("x", t)
                        }, y: function (t) {
                            var e = this.attr("y"), i = "number" == typeof e ? e - this.bbox().y : 0;
                            return null == t ? "number" == typeof e ? e - i : e : this.attr("y", "number" == typeof t.valueOf() ? t + i : t)
                        }, cx: function (t) {
                            return null == t ? this.bbox().cx : this.x(t - this.bbox().width / 2)
                        }, cy: function (t) {
                            return null == t ? this.bbox().cy : this.y(t - this.bbox().height / 2)
                        }, text: function (t) {
                            if (void 0 === t) {
                                t = "";
                                for (var e = this.node.childNodes, a = 0, s = e.length; a < s; ++a) 0 != a && 3 != e[a].nodeType && 1 == i.adopt(e[a]).dom.newLined && (t += "\n"), t += e[a].textContent;
                                return t
                            }
                            if (this.clear().build(!0), "function" == typeof t) t.call(this, this); else {
                                a = 0;
                                for (var r = (t = t.split("\n")).length; a < r; a++) this.tspan(t[a]).newLine()
                            }
                            return this.build(!1).rebuild()
                        }, size: function (t) {
                            return this.attr("font-size", t).rebuild()
                        }, leading: function (t) {
                            return null == t ? this.dom.leading : (this.dom.leading = new i.Number(t), this.rebuild())
                        }, lines: function () {
                            var t = (this.textPath && this.textPath() || this).node,
                                e = i.utils.map(i.utils.filterSVGElements(t.childNodes), (function (t) {
                                    return i.adopt(t)
                                }));
                            return new i.Set(e)
                        }, rebuild: function (t) {
                            if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
                                var e = this, a = 0, s = this.dom.leading * new i.Number(this.attr("font-size"));
                                this.lines().each((function () {
                                    this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? a += s : (this.attr("dy", s + a), a = 0))
                                })), this.fire("rebuild")
                            }
                            return this
                        }, build: function (t) {
                            return this._build = !!t, this
                        }, setData: function (t) {
                            return this.dom = t, this.dom.leading = new i.Number(t.leading || 1.3), this
                        }
                    }, construct: {
                        text: function (t) {
                            return this.put(new i.Text).text(t)
                        }, plain: function (t) {
                            return this.put(new i.Text).plain(t)
                        }
                    }
                }), i.Tspan = i.invent({
                    create: "tspan", inherit: i.Shape, extend: {
                        text: function (t) {
                            return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this)
                        }, dx: function (t) {
                            return this.attr("dx", t)
                        }, dy: function (t) {
                            return this.attr("dy", t)
                        }, newLine: function () {
                            var t = this.parent(i.Text);
                            return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x())
                        }
                    }
                }), i.extend(i.Text, i.Tspan, {
                    plain: function (t) {
                        return !1 === this._build && this.clear(), this.node.appendChild(e.createTextNode(t)), this
                    }, tspan: function (t) {
                        var e = (this.textPath && this.textPath() || this).node, a = new i.Tspan;
                        return !1 === this._build && this.clear(), e.appendChild(a.node), a.text(t)
                    }, clear: function () {
                        for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild);
                        return this
                    }, length: function () {
                        return this.node.getComputedTextLength()
                    }
                }), i.TextPath = i.invent({
                    create: "textPath",
                    inherit: i.Parent,
                    parent: i.Text,
                    construct: {
                        morphArray: i.PathArray, path: function (t) {
                            for (var e = new i.TextPath, a = this.doc().defs().path(t); this.node.hasChildNodes();) e.node.appendChild(this.node.firstChild);
                            return this.node.appendChild(e.node), e.attr("href", "#" + a, i.xlink), this
                        }, array: function () {
                            var t = this.track();
                            return t ? t.array() : null
                        }, plot: function (t) {
                            var e = this.track(), i = null;
                            return e && (i = e.plot(t)), null == t ? i : this
                        }, track: function () {
                            var t = this.textPath();
                            if (t) return t.reference("href")
                        }, textPath: function () {
                            if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return i.adopt(this.node.firstChild)
                        }
                    }
                }), i.Nested = i.invent({
                    create: function () {
                        this.constructor.call(this, i.create("svg")), this.style("overflow", "visible")
                    }, inherit: i.Container, construct: {
                        nested: function () {
                            return this.put(new i.Nested)
                        }
                    }
                });
                var l = {
                    stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
                    fill: ["color", "opacity", "rule"],
                    prefix: function (t, e) {
                        return "color" == e ? t : t + "-" + e
                    }
                };

                function h(t, e, a, s) {
                    return a + s.replace(i.regex.dots, " .")
                }

                function c(t) {
                    return t.toLowerCase().replace(/-(.)/g, (function (t, e) {
                        return e.toUpperCase()
                    }))
                }

                function d(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }

                function u(t) {
                    var e = t.toString(16);
                    return 1 == e.length ? "0" + e : e
                }

                function g(t, e, i) {
                    if (null == e || null == i) {
                        var a = t.bbox();
                        null == e ? e = a.width / a.height * i : null == i && (i = a.height / a.width * e)
                    }
                    return {width: e, height: i}
                }

                function f(t, e, i) {
                    return {x: e * t.a + i * t.c + 0, y: e * t.b + i * t.d + 0}
                }

                function p(t) {
                    return {a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5]}
                }

                function x(e) {
                    for (var a = e.childNodes.length - 1; a >= 0; a--) e.childNodes[a] instanceof t.SVGElement && x(e.childNodes[a]);
                    return i.adopt(e).id(i.eid(e.nodeName))
                }

                function b(t) {
                    return null == t.x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2, t
                }

                function v(t) {
                    return Math.abs(t) > 1e-37 ? t : 0
                }

                ["fill", "stroke"].forEach((function (t) {
                    var e, a = {};
                    a[t] = function (a) {
                        if (void 0 === a) return this;
                        if ("string" == typeof a || i.Color.isRgb(a) || a && "function" == typeof a.fill) this.attr(t, a); else for (e = l[t].length - 1; e >= 0; e--) null != a[l[t][e]] && this.attr(l.prefix(t, l[t][e]), a[l[t][e]]);
                        return this
                    }, i.extend(i.Element, i.FX, a)
                })), i.extend(i.Element, i.FX, {
                    translate: function (t, e) {
                        return this.transform({x: t, y: e})
                    }, matrix: function (t) {
                        return this.attr("transform", new i.Matrix(6 == arguments.length ? [].slice.call(arguments) : t))
                    }, opacity: function (t) {
                        return this.attr("opacity", t)
                    }, dx: function (t) {
                        return this.x(new i.Number(t).plus(this instanceof i.FX ? 0 : this.x()), !0)
                    }, dy: function (t) {
                        return this.y(new i.Number(t).plus(this instanceof i.FX ? 0 : this.y()), !0)
                    }
                }), i.extend(i.Path, {
                    length: function () {
                        return this.node.getTotalLength()
                    }, pointAt: function (t) {
                        return this.node.getPointAtLength(t)
                    }
                }), i.Set = i.invent({
                    create: function (t) {
                        Array.isArray(t) ? this.members = t : this.clear()
                    }, extend: {
                        add: function () {
                            var t, e, i = [].slice.call(arguments);
                            for (t = 0, e = i.length; t < e; t++) this.members.push(i[t]);
                            return this
                        }, remove: function (t) {
                            var e = this.index(t);
                            return e > -1 && this.members.splice(e, 1), this
                        }, each: function (t) {
                            for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
                            return this
                        }, clear: function () {
                            return this.members = [], this
                        }, length: function () {
                            return this.members.length
                        }, has: function (t) {
                            return this.index(t) >= 0
                        }, index: function (t) {
                            return this.members.indexOf(t)
                        }, get: function (t) {
                            return this.members[t]
                        }, first: function () {
                            return this.get(0)
                        }, last: function () {
                            return this.get(this.members.length - 1)
                        }, valueOf: function () {
                            return this.members
                        }, bbox: function () {
                            if (0 == this.members.length) return new i.RBox;
                            var t = this.members[0].rbox(this.members[0].doc());
                            return this.each((function () {
                                t = t.merge(this.rbox(this.doc()))
                            })), t
                        }
                    }, construct: {
                        set: function (t) {
                            return new i.Set(t)
                        }
                    }
                }), i.FX.Set = i.invent({
                    create: function (t) {
                        this.set = t
                    }
                }), i.Set.inherit = function () {
                    var t = [];
                    for (var e in i.Shape.prototype) "function" == typeof i.Shape.prototype[e] && "function" != typeof i.Set.prototype[e] && t.push(e);
                    for (var e in t.forEach((function (t) {
                        i.Set.prototype[t] = function () {
                            for (var e = 0, a = this.members.length; e < a; e++) this.members[e] && "function" == typeof this.members[e][t] && this.members[e][t].apply(this.members[e], arguments);
                            return "animate" == t ? this.fx || (this.fx = new i.FX.Set(this)) : this
                        }
                    })), t = [], i.FX.prototype) "function" == typeof i.FX.prototype[e] && "function" != typeof i.FX.Set.prototype[e] && t.push(e);
                    t.forEach((function (t) {
                        i.FX.Set.prototype[t] = function () {
                            for (var e = 0, i = this.set.members.length; e < i; e++) this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments);
                            return this
                        }
                    }))
                }, i.extend(i.Element, {
                    data: function (t, e, i) {
                        if ("object" === r(t)) for (e in t) this.data(e, t[e]); else if (arguments.length < 2) try {
                            return JSON.parse(this.attr("data-" + t))
                        } catch (e) {
                            return this.attr("data-" + t)
                        } else this.attr("data-" + t, null === e ? null : !0 === i || "string" == typeof e || "number" == typeof e ? e : JSON.stringify(e));
                        return this
                    }
                }), i.extend(i.Element, {
                    remember: function (t, e) {
                        if ("object" === r(arguments[0])) for (var e in t) this.remember(e, t[e]); else {
                            if (1 == arguments.length) return this.memory()[t];
                            this.memory()[t] = e
                        }
                        return this
                    }, forget: function () {
                        if (0 == arguments.length) this._memory = {}; else for (var t = arguments.length - 1; t >= 0; t--) delete this.memory()[arguments[t]];
                        return this
                    }, memory: function () {
                        return this._memory || (this._memory = {})
                    }
                }), i.get = function (t) {
                    var a = e.getElementById(function (t) {
                        var e = (t || "").toString().match(i.regex.reference);
                        if (e) return e[1]
                    }(t) || t);
                    return i.adopt(a)
                }, i.select = function (t, a) {
                    return new i.Set(i.utils.map((a || e).querySelectorAll(t), (function (t) {
                        return i.adopt(t)
                    })))
                }, i.extend(i.Parent, {
                    select: function (t) {
                        return i.select(t, this.node)
                    }
                });
                var m = "abcdef".split("");
                return i.CustomEvent = t.CustomEvent, i
            }(s, s.document)
        }.call(e, i, e, t)) || (t.exports = a)
    }, function (t, e) {
        (function () {
            SVG.Filter = SVG.invent({
                create: "filter", inherit: SVG.Parent, extend: {
                    source: "SourceGraphic",
                    sourceAlpha: "SourceAlpha",
                    background: "BackgroundImage",
                    backgroundAlpha: "BackgroundAlpha",
                    fill: "FillPaint",
                    stroke: "StrokePaint",
                    autoSetIn: !0,
                    put: function (t, e) {
                        return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t
                    },
                    blend: function (t, e, i) {
                        return this.put(new SVG.BlendEffect(t, e, i))
                    },
                    colorMatrix: function (t, e) {
                        return this.put(new SVG.ColorMatrixEffect(t, e))
                    },
                    convolveMatrix: function (t) {
                        return this.put(new SVG.ConvolveMatrixEffect(t))
                    },
                    componentTransfer: function (t) {
                        return this.put(new SVG.ComponentTransferEffect(t))
                    },
                    composite: function (t, e, i) {
                        return this.put(new SVG.CompositeEffect(t, e, i))
                    },
                    flood: function (t, e) {
                        return this.put(new SVG.FloodEffect(t, e))
                    },
                    offset: function (t, e) {
                        return this.put(new SVG.OffsetEffect(t, e))
                    },
                    image: function (t) {
                        return this.put(new SVG.ImageEffect(t))
                    },
                    merge: function () {
                        var t = [void 0];
                        for (var e in arguments) t.push(arguments[e]);
                        return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, t)))
                    },
                    gaussianBlur: function (t, e) {
                        return this.put(new SVG.GaussianBlurEffect(t, e))
                    },
                    morphology: function (t, e) {
                        return this.put(new SVG.MorphologyEffect(t, e))
                    },
                    diffuseLighting: function (t, e, i) {
                        return this.put(new SVG.DiffuseLightingEffect(t, e, i))
                    },
                    displacementMap: function (t, e, i, a, s) {
                        return this.put(new SVG.DisplacementMapEffect(t, e, i, a, s))
                    },
                    specularLighting: function (t, e, i, a) {
                        return this.put(new SVG.SpecularLightingEffect(t, e, i, a))
                    },
                    tile: function () {
                        return this.put(new SVG.TileEffect)
                    },
                    turbulence: function (t, e, i, a, s) {
                        return this.put(new SVG.TurbulenceEffect(t, e, i, a, s))
                    },
                    toString: function () {
                        return "url(#" + this.attr("id") + ")"
                    }
                }
            }), SVG.extend(SVG.Defs, {
                filter: function (t) {
                    var e = this.put(new SVG.Filter);
                    return "function" == typeof t && t.call(e, e), e
                }
            }), SVG.extend(SVG.Container, {
                filter: function (t) {
                    return this.defs().filter(t)
                }
            }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
                filter: function (t) {
                    return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer
                }, unfilter: function (t) {
                    return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null)
                }
            }), SVG.Effect = SVG.invent({
                create: function () {
                    this.constructor.call(this)
                }, inherit: SVG.Element, extend: {
                    in: function (t) {
                        return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                    }, result: function (t) {
                        return null == t ? this.attr("result") : this.attr("result", t)
                    }, toString: function () {
                        return this.result()
                    }
                }
            }), SVG.ParentEffect = SVG.invent({
                create: function () {
                    this.constructor.call(this)
                }, inherit: SVG.Parent, extend: {
                    in: function (t) {
                        return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                    }, result: function (t) {
                        return null == t ? this.attr("result") : this.attr("result", t)
                    }, toString: function () {
                        return this.result()
                    }
                }
            });
            var t = {
                blend: function (t, e) {
                    return this.parent() && this.parent().blend(this, t, e)
                }, colorMatrix: function (t, e) {
                    return this.parent() && this.parent().colorMatrix(t, e).in(this)
                }, convolveMatrix: function (t) {
                    return this.parent() && this.parent().convolveMatrix(t).in(this)
                }, componentTransfer: function (t) {
                    return this.parent() && this.parent().componentTransfer(t).in(this)
                }, composite: function (t, e) {
                    return this.parent() && this.parent().composite(this, t, e)
                }, flood: function (t, e) {
                    return this.parent() && this.parent().flood(t, e)
                }, offset: function (t, e) {
                    return this.parent() && this.parent().offset(t, e).in(this)
                }, image: function (t) {
                    return this.parent() && this.parent().image(t)
                }, merge: function () {
                    return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments))
                }, gaussianBlur: function (t, e) {
                    return this.parent() && this.parent().gaussianBlur(t, e).in(this)
                }, morphology: function (t, e) {
                    return this.parent() && this.parent().morphology(t, e).in(this)
                }, diffuseLighting: function (t, e, i) {
                    return this.parent() && this.parent().diffuseLighting(t, e, i).in(this)
                }, displacementMap: function (t, e, i, a) {
                    return this.parent() && this.parent().displacementMap(this, t, e, i, a)
                }, specularLighting: function (t, e, i, a) {
                    return this.parent() && this.parent().specularLighting(t, e, i, a).in(this)
                }, tile: function () {
                    return this.parent() && this.parent().tile().in(this)
                }, turbulence: function (t, e, i, a, s) {
                    return this.parent() && this.parent().turbulence(t, e, i, a, s).in(this)
                }
            };
            SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect = SVG.invent({
                create: function () {
                    this.constructor.call(this)
                }, inherit: SVG.Element, extend: {
                    in: function (t) {
                        this.attr("in", t)
                    }
                }
            });
            var e = {
                blend: function (t, e, i) {
                    this.attr({in: t, in2: e, mode: i || "normal"})
                }, colorMatrix: function (t, e) {
                    "matrix" == t && (e = s(e)), this.attr({type: t, values: void 0 === e ? null : e})
                }, convolveMatrix: function (t) {
                    t = s(t), this.attr({order: Math.sqrt(t.split(" ").length), kernelMatrix: t})
                }, composite: function (t, e, i) {
                    this.attr({in: t, in2: e, operator: i})
                }, flood: function (t, e) {
                    this.attr("flood-color", t), null != e && this.attr("flood-opacity", e)
                }, offset: function (t, e) {
                    this.attr({dx: t, dy: e})
                }, image: function (t) {
                    this.attr("href", t, SVG.xlink)
                }, displacementMap: function (t, e, i, a, s) {
                    this.attr({in: t, in2: e, scale: i, xChannelSelector: a, yChannelSelector: s})
                }, gaussianBlur: function (t, e) {
                    null != t || null != e ? this.attr("stdDeviation", r(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0")
                }, morphology: function (t, e) {
                    this.attr({operator: t, radius: e})
                }, tile: function () {
                }, turbulence: function (t, e, i, a, s) {
                    this.attr({numOctaves: e, seed: i, stitchTiles: a, baseFrequency: t, type: s})
                }
            }, i = {
                merge: function () {
                    var t;
                    if (arguments[0] instanceof SVG.Set) {
                        var e = this;
                        arguments[0].each((function (t) {
                            this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this))
                        }))
                    } else {
                        t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                        for (var i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i]))
                    }
                }, componentTransfer: function (t) {
                    if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function (t) {
                        this[t] = new (SVG["Func" + t.toUpperCase()])("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node)
                    }.bind(this)), t) for (var e in t.rgb && (["r", "g", "b"].forEach(function (e) {
                        this[e].attr(t.rgb)
                    }.bind(this)), delete t.rgb), t) this[e].attr(t[e])
                }, diffuseLighting: function (t, e, i) {
                    this.attr({surfaceScale: t, diffuseConstant: e, kernelUnitLength: i})
                }, specularLighting: function (t, e, i, a) {
                    this.attr({surfaceScale: t, diffuseConstant: e, specularExponent: i, kernelUnitLength: a})
                }
            }, a = {
                distantLight: function (t, e) {
                    this.attr({azimuth: t, elevation: e})
                }, pointLight: function (t, e, i) {
                    this.attr({x: t, y: e, z: i})
                }, spotLight: function (t, e, i, a, s, r) {
                    this.attr({x: t, y: e, z: i, pointsAtX: a, pointsAtY: s, pointsAtZ: r})
                }, mergeNode: function (t) {
                    this.attr("in", t)
                }
            };

            function s(t) {
                return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ")
            }

            function r(t) {
                if (!Array.isArray(t)) return t;
                for (var e = 0, i = t.length, a = []; e < i; e++) a.push(t[e]);
                return a.join(" ")
            }

            function n() {
                var t = function () {
                };
                for (var e in "function" == typeof arguments[arguments.length - 1] && (t = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments) for (var i in arguments[e]) t(arguments[e][i], i, arguments[e])
            }

            ["r", "g", "b", "a"].forEach((function (t) {
                a["Func" + t.toUpperCase()] = function (t) {
                    switch (this.attr("type", t), t) {
                        case"table":
                            this.attr("tableValues", arguments[1]);
                            break;
                        case"linear":
                            this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
                            break;
                        case"gamma":
                            this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2])
                    }
                }
            })), n(e, (function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i + "Effect"] = SVG.invent({
                    create: function () {
                        this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                    }, inherit: SVG.Effect, extend: {}
                })
            })), n(i, (function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i + "Effect"] = SVG.invent({
                    create: function () {
                        this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                    }, inherit: SVG.ParentEffect, extend: {}
                })
            })), n(a, (function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i] = SVG.invent({
                    create: function () {
                        this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments)
                    }, inherit: SVG.ChildEffect, extend: {}
                })
            })), SVG.extend(SVG.MergeEffect, {
                in: function (t) {
                    return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this
                }
            }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
                in2: function (t) {
                    return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t)
                }
            }), SVG.filter = {sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0]}
        }).call(this)
    }, function (t, e) {
        !function () {
            "use strict";

            function t(t, s, r, n, o, l, h) {
                for (var c = t.slice(s, r || h), d = n.slice(o, l || h), u = 0, g = {
                    pos: [0, 0],
                    start: [0, 0]
                }, f = {pos: [0, 0], start: [0, 0]}; ;) {
                    if (c[u] = e.call(g, c[u]), d[u] = e.call(f, d[u]), c[u][0] != d[u][0] || "M" == c[u][0] || "A" == c[u][0] && (c[u][4] != d[u][4] || c[u][5] != d[u][5]) ? (Array.prototype.splice.apply(c, [u, 1].concat(a.call(g, c[u]))), Array.prototype.splice.apply(d, [u, 1].concat(a.call(f, d[u])))) : (c[u] = i.call(g, c[u]), d[u] = i.call(f, d[u])), ++u == c.length && u == d.length) break;
                    u == c.length && c.push(["C", g.pos[0], g.pos[1], g.pos[0], g.pos[1], g.pos[0], g.pos[1]]), u == d.length && d.push(["C", f.pos[0], f.pos[1], f.pos[0], f.pos[1], f.pos[0], f.pos[1]])
                }
                return {start: c, dest: d}
            }

            function e(t) {
                switch (t[0]) {
                    case"z":
                    case"Z":
                        t[0] = "L", t[1] = this.start[0], t[2] = this.start[1];
                        break;
                    case"H":
                        t[0] = "L", t[2] = this.pos[1];
                        break;
                    case"V":
                        t[0] = "L", t[2] = t[1], t[1] = this.pos[0];
                        break;
                    case"T":
                        t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0];
                        break;
                    case"S":
                        t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[0]
                }
                return t
            }

            function i(t) {
                var e = t.length;
                return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t
            }

            function a(t) {
                var e = [t];
                switch (t[0]) {
                    case"M":
                        return this.pos = this.start = [t[1], t[2]], e;
                    case"L":
                        t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1];
                        break;
                    case"Q":
                        t[6] = t[4], t[5] = t[3], t[4] = 1 * t[4] / 3 + 2 * t[2] / 3, t[3] = 1 * t[3] / 3 + 2 * t[1] / 3, t[2] = 1 * this.pos[1] / 3 + 2 * t[2] / 3, t[1] = 1 * this.pos[0] / 3 + 2 * t[1] / 3;
                        break;
                    case"A":
                        t = (e = function (t, e) {
                            var i, a, s, r, n, o, l, h, c, d, u, g, f, p, x, b, v, m, y, w, k, S, A, C, P, L,
                                T = Math.abs(e[1]), E = Math.abs(e[2]), O = e[3] % 360, z = e[4], I = e[5], M = e[6],
                                X = e[7], Y = new SVG.Point(t), D = new SVG.Point(M, X), R = [];
                            if (0 === T || 0 === E || Y.x === D.x && Y.y === D.y) return [["C", Y.x, Y.y, D.x, D.y, D.x, D.y]];
                            i = new SVG.Point((Y.x - D.x) / 2, (Y.y - D.y) / 2).transform((new SVG.Matrix).rotate(O)), (a = i.x * i.x / (T * T) + i.y * i.y / (E * E)) > 1 && (a = Math.sqrt(a), T *= a, E *= a);
                            s = (new SVG.Matrix).rotate(O).scale(1 / T, 1 / E).rotate(-O), Y = Y.transform(s), D = D.transform(s), r = [D.x - Y.x, D.y - Y.y], o = r[0] * r[0] + r[1] * r[1], n = Math.sqrt(o), r[0] /= n, r[1] /= n, l = o < 4 ? Math.sqrt(1 - o / 4) : 0, z === I && (l *= -1);
                            h = new SVG.Point((D.x + Y.x) / 2 + l * -r[1], (D.y + Y.y) / 2 + l * r[0]), c = new SVG.Point(Y.x - h.x, Y.y - h.y), d = new SVG.Point(D.x - h.x, D.y - h.y), u = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y)), c.y < 0 && (u *= -1);
                            g = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y)), d.y < 0 && (g *= -1);
                            I && u > g && (g += 2 * Math.PI);
                            !I && u < g && (g -= 2 * Math.PI);
                            for (p = Math.ceil(2 * Math.abs(u - g) / Math.PI), b = [], v = u, f = (g - u) / p, x = 4 * Math.tan(f / 4) / 3, k = 0; k <= p; k++) y = Math.cos(v), m = Math.sin(v), w = new SVG.Point(h.x + y, h.y + m), b[k] = [new SVG.Point(w.x + x * m, w.y - x * y), w, new SVG.Point(w.x - x * m, w.y + x * y)], v += f;
                            for (b[0][0] = b[0][1].clone(), b[b.length - 1][2] = b[b.length - 1][1].clone(), s = (new SVG.Matrix).rotate(O).scale(T, E).rotate(-O), k = 0, S = b.length; k < S; k++) b[k][0] = b[k][0].transform(s), b[k][1] = b[k][1].transform(s), b[k][2] = b[k][2].transform(s);
                            for (k = 1, S = b.length; k < S; k++) w = b[k - 1][2], A = w.x, C = w.y, w = b[k][0], P = w.x, L = w.y, w = b[k][1], M = w.x, X = w.y, R.push(["C", A, C, P, L, M, X]);
                            return R
                        }(this.pos, t))[0]
                }
                return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e
            }

            function s(t, e) {
                if (!1 === e) return !1;
                for (var i = e, a = t.length; i < a; ++i) if ("M" == t[i][0]) return i;
                return !1
            }

            SVG.extend(SVG.PathArray, {
                morph: function (e) {
                    for (var i = this.value, a = this.parse(e), r = 0, n = 0, o = !1, l = !1; !1 !== r || !1 !== n;) {
                        var h;
                        o = s(i, !1 !== r && r + 1), l = s(a, !1 !== n && n + 1), !1 === r && (r = 0 == (h = new SVG.PathArray(c.start).bbox()).height || 0 == h.width ? i.push(i[0]) - 1 : i.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1), !1 === n && (n = 0 == (h = new SVG.PathArray(c.dest).bbox()).height || 0 == h.width ? a.push(a[0]) - 1 : a.push(["M", h.x + h.width / 2, h.y + h.height / 2]) - 1);
                        var c = t(i, r, o, a, n, l);
                        i = i.slice(0, r).concat(c.start, !1 === o ? [] : i.slice(o)), a = a.slice(0, n).concat(c.dest, !1 === l ? [] : a.slice(l)), r = !1 !== o && r + c.start.length, n = !1 !== l && n + c.dest.length
                    }
                    return this.value = i, this.destination = new SVG.PathArray, this.destination.value = a, this
                }
            })
        }()
    }, function (t, e) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        /*! svg.draggable.js - v2.2.2 - 2019-01-08
* https://github.com/svgdotjs/svg.draggable.js
* Copyright (c) 2019 Wout Fierens; Licensed MIT */
        (function () {
            function t(t) {
                t.remember("_draggable", this), this.el = t
            }

            t.prototype.init = function (t, e) {
                var i = this;
                this.constraint = t, this.value = e, this.el.on("mousedown.drag", (function (t) {
                    i.start(t)
                })), this.el.on("touchstart.drag", (function (t) {
                    i.start(t)
                }))
            }, t.prototype.transformPoint = function (t, e) {
                var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
                return this.p.x = i.clientX - (e || 0), this.p.y = i.clientY, this.p.matrixTransform(this.m)
            }, t.prototype.getBBox = function () {
                var t = this.el.bbox();
                return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t
            }, t.prototype.start = function (t) {
                if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) {
                    var e = this;
                    if (this.el.fire("beforedrag", {event: t, handler: this}), !this.el.event().defaultPrevented) {
                        t.preventDefault(), t.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
                        var i, a = this.getBBox();
                        if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
                            case"middle":
                                i /= 2;
                                break;
                            case"start":
                                i = 0
                        }
                        this.startPoints = {
                            point: this.transformPoint(t, i),
                            box: a,
                            transform: this.el.transform()
                        }, SVG.on(window, "mousemove.drag", (function (t) {
                            e.drag(t)
                        })), SVG.on(window, "touchmove.drag", (function (t) {
                            e.drag(t)
                        })), SVG.on(window, "mouseup.drag", (function (t) {
                            e.end(t)
                        })), SVG.on(window, "touchend.drag", (function (t) {
                            e.end(t)
                        })), this.el.fire("dragstart", {event: t, p: this.startPoints.point, m: this.m, handler: this})
                    }
                }
            }, t.prototype.drag = function (t) {
                var e = this.getBBox(), a = this.transformPoint(t),
                    s = this.startPoints.box.x + a.x - this.startPoints.point.x,
                    r = this.startPoints.box.y + a.y - this.startPoints.point.y, n = this.constraint,
                    o = a.x - this.startPoints.point.x, l = a.y - this.startPoints.point.y;
                if (this.el.fire("dragmove", {
                    event: t,
                    p: a,
                    m: this.m,
                    handler: this
                }), this.el.event().defaultPrevented) return a;
                if ("function" == typeof n) {
                    var h = n.call(this.el, s, r, this.m);
                    "boolean" == typeof h && (h = {
                        x: h,
                        y: h
                    }), !0 === h.x ? this.el.x(s) : !1 !== h.x && this.el.x(h.x), !0 === h.y ? this.el.y(r) : !1 !== h.y && this.el.y(h.y)
                } else "object" == i(n) && (null != n.minX && s < n.minX ? o = (s = n.minX) - this.startPoints.box.x : null != n.maxX && s > n.maxX - e.width && (o = (s = n.maxX - e.width) - this.startPoints.box.x), null != n.minY && r < n.minY ? l = (r = n.minY) - this.startPoints.box.y : null != n.maxY && r > n.maxY - e.height && (l = (r = n.maxY - e.height) - this.startPoints.box.y), null != n.snapToGrid && (s -= s % n.snapToGrid, r -= r % n.snapToGrid, o -= o % n.snapToGrid, l -= l % n.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({
                    x: o,
                    y: l
                }, !0) : this.el.move(s, r));
                return a
            }, t.prototype.end = function (t) {
                var e = this.drag(t);
                this.el.fire("dragend", {
                    event: t,
                    p: e,
                    m: this.m,
                    handler: this
                }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag")
            }, SVG.extend(SVG.Element, {
                draggable: function (e, a) {
                    "function" != typeof e && "object" != i(e) || (a = e, e = !0);
                    var s = this.remember("_draggable") || new t(this);
                    return (e = void 0 === e || e) ? s.init(a || {}, e) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this
                }
            })
        }).call(this)
    }, function (t, e) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        /*!
* svg.select.js - An extension of svg.js which allows to select elements with mouse
* @version 2.1.2
* https://github.com/svgdotjs/svg.select.js
*
* @copyright Ulrich-Matthias Schäfer
* @license MIT
*/
        !function () {
            "use strict";

            function t(t) {
                this.el = t, t.remember("_selectHandler", this), this.pointSelection = {isSelected: !1}, this.rectSelection = {isSelected: !1}
            }

            t.prototype.init = function (t, e) {
                var i = this.el.bbox();
                for (var a in this.options = {}, this.el.selectize.defaults) this.options[a] = this.el.selectize.defaults[a], void 0 !== e[a] && (this.options[a] = e[a]);
                this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup()
            }, t.prototype.selectPoints = function (t) {
                return this.pointSelection.isSelected = t, this.pointSelection.set ? this : (this.pointSelection.set = this.parent.set(), this.drawCircles(), this)
            }, t.prototype.getPointArray = function () {
                var t = this.el.bbox();
                return this.el.array().valueOf().map((function (e) {
                    return [e[0] - t.x, e[1] - t.y]
                }))
            }, t.prototype.drawCircles = function () {
                for (var t = this, e = this.getPointArray(), i = 0, a = e.length; i < a; ++i) {
                    var s = function (e) {
                        return function (i) {
                            (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopPropagation();
                            var a = i.pageX || i.touches[0].pageX, s = i.pageY || i.touches[0].pageY;
                            t.el.fire("point", {x: a, y: s, i: e, event: i})
                        }
                    }(i);
                    this.pointSelection.set.add(this.nested.circle(this.options.radius).center(e[i][0], e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s).on("mousedown", s))
                }
            }, t.prototype.updatePointSelection = function () {
                var t = this.getPointArray();
                this.pointSelection.set.each((function (e) {
                    this.cx() === t[e][0] && this.cy() === t[e][1] || this.center(t[e][0], t[e][1])
                }))
            }, t.prototype.updateRectSelection = function () {
                var t = this.el.bbox();
                this.rectSelection.set.get(0).attr({
                    width: t.width,
                    height: t.height
                }), this.options.points && (this.rectSelection.set.get(2).center(t.width, 0), this.rectSelection.set.get(3).center(t.width, t.height), this.rectSelection.set.get(4).center(0, t.height), this.rectSelection.set.get(5).center(t.width / 2, 0), this.rectSelection.set.get(6).center(t.width, t.height / 2), this.rectSelection.set.get(7).center(t.width / 2, t.height), this.rectSelection.set.get(8).center(0, t.height / 2)), this.options.rotationPoint && (this.options.points ? this.rectSelection.set.get(9).center(t.width / 2, 20) : this.rectSelection.set.get(1).center(t.width / 2, 20))
            }, t.prototype.selectRect = function (t) {
                var e = this, i = this.el.bbox();

                function a(t) {
                    return function (i) {
                        (i = i || window.event).preventDefault ? i.preventDefault() : i.returnValue = !1, i.stopPropagation();
                        var a = i.pageX || i.touches[0].pageX, s = i.pageY || i.touches[0].pageY;
                        e.el.fire(t, {x: a, y: s, event: i})
                    }
                }

                if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i.width, i.height).addClass(this.options.classRect)), this.options.points && !this.rectSelection.set.get(1)) {
                    var s = "touchstart", r = "mousedown";
                    this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, 0).attr("class", this.options.classPoints + "_lt").on(r, a("lt")).on(s, a("lt"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width, 0).attr("class", this.options.classPoints + "_rt").on(r, a("rt")).on(s, a("rt"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width, i.height).attr("class", this.options.classPoints + "_rb").on(r, a("rb")).on(s, a("rb"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, i.height).attr("class", this.options.classPoints + "_lb").on(r, a("lb")).on(s, a("lb"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width / 2, 0).attr("class", this.options.classPoints + "_t").on(r, a("t")).on(s, a("t"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width, i.height / 2).attr("class", this.options.classPoints + "_r").on(r, a("r")).on(s, a("r"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width / 2, i.height).attr("class", this.options.classPoints + "_b").on(r, a("b")).on(s, a("b"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, i.height / 2).attr("class", this.options.classPoints + "_l").on(r, a("l")).on(s, a("l"))), this.rectSelection.set.each((function () {
                        this.addClass(e.options.classPoints)
                    }))
                }
                if (this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
                    var n = function (t) {
                        (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                        var i = t.pageX || t.touches[0].pageX, a = t.pageY || t.touches[0].pageY;
                        e.el.fire("rot", {x: i, y: a, event: t})
                    };
                    this.rectSelection.set.add(this.nested.circle(this.options.radius).center(i.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", n).on("mousedown", n))
                }
            }, t.prototype.handler = function () {
                var t = this.el.bbox();
                this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection()
            }, t.prototype.observe = function () {
                var t = this;
                if (MutationObserver) if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver((function () {
                    t.handler()
                })), this.observerInst.observe(this.el.node, {attributes: !0}); else try {
                    this.observerInst.disconnect(), delete this.observerInst
                } catch (t) {
                } else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", (function () {
                    t.handler()
                }))
            }, t.prototype.cleanup = function () {
                !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each((function () {
                    this.remove()
                })), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each((function () {
                    this.remove()
                })), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested)
            }, SVG.extend(SVG.Element, {
                selectize: function (e, a) {
                    return "object" === i(e) && (a = e, e = !0), (this.remember("_selectHandler") || new t(this)).init(void 0 === e || e, a || {}), this
                }
            }), SVG.Element.prototype.selectize.defaults = {
                points: !0,
                classRect: "svg_select_boundingRect",
                classPoints: "svg_select_points",
                radius: 7,
                rotationPoint: !0,
                deepSelect: !1
            }
        }()
    }, function (t, e) {
        !function () {
            "use strict";
            (function () {
                function t(t) {
                    t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint()
                }

                t.prototype.transformPoint = function (t, e, i) {
                    return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m)
                }, t.prototype._extractPosition = function (t) {
                    return {
                        x: null != t.clientX ? t.clientX : t.touches[0].clientX,
                        y: null != t.clientY ? t.clientY : t.touches[0].clientY
                    }
                }, t.prototype.init = function (t) {
                    var e = this;
                    if (this.stop(), "stop" !== t) {
                        for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i], void 0 !== t[i] && (this.options[i] = t[i]);
                        this.el.on("lt.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.el.on("rt.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.el.on("rb.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.el.on("lb.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.el.on("t.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.el.on("r.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.el.on("b.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.el.on("l.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.el.on("rot.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.el.on("point.resize", (function (t) {
                            e.resize(t || window.event)
                        })), this.update()
                    }
                }, t.prototype.stop = function () {
                    return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this
                }, t.prototype.resize = function (t) {
                    var e = this;
                    this.m = this.el.node.getScreenCTM().inverse(), this.offset = {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    };
                    var i = this._extractPosition(t.detail.event);
                    if (this.parameters = {
                        type: this.el.type,
                        p: this.transformPoint(i.x, i.y),
                        x: t.detail.x,
                        y: t.detail.y,
                        box: this.el.bbox(),
                        rotation: this.el.transform().rotation
                    }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail.i) {
                        var a = this.el.array().valueOf();
                        this.parameters.i = t.detail.i, this.parameters.pointCoords = [a[t.detail.i][0], a[t.detail.i][1]]
                    }
                    switch (t.type) {
                        case"lt":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e);
                                if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height - i[1] > 0) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(this.parameters.box.width - i[0], this.parameters.box.height - i[1])
                                }
                            };
                            break;
                        case"rt":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 2);
                                if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height - i[1] > 0) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                    i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(this.parameters.box.width + i[0], this.parameters.box.height - i[1])
                                }
                            };
                            break;
                        case"rb":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 0);
                                if (this.parameters.box.width + i[0] > 0 && this.parameters.box.height + i[1] > 0) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i[0], this.parameters.box.height + i[1])
                                }
                            };
                            break;
                        case"lb":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 1);
                                if (this.parameters.box.width - i[0] > 0 && this.parameters.box.height + i[1] > 0) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                    i = this.checkAspectRatio(i, !0), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(this.parameters.box.width - i[0], this.parameters.box.height + i[1])
                                }
                            };
                            break;
                        case"t":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 2);
                                if (this.parameters.box.height - i[1] > 0) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[1])
                                }
                            };
                            break;
                        case"r":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 0);
                                if (this.parameters.box.width + i[0] > 0) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0])
                                }
                            };
                            break;
                        case"b":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 0);
                                if (this.parameters.box.height + i[1] > 0) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1])
                                }
                            };
                            break;
                        case"l":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 1);
                                if (this.parameters.box.width - i[0] > 0) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0])
                                }
                            };
                            break;
                        case"rot":
                            this.calc = function (t, e) {
                                var i = t + this.parameters.p.x, a = e + this.parameters.p.y,
                                    s = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
                                    r = Math.atan2(a - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box.x - this.parameters.box.width / 2),
                                    n = this.parameters.rotation + 180 * (r - s) / Math.PI + this.options.snapToAngle / 2;
                                this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(n - n % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy)
                            };
                            break;
                        case"point":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]),
                                    a = this.el.array().valueOf();
                                a[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0], a[this.parameters.i][1] = this.parameters.pointCoords[1] + i[1], this.el.plot(a)
                            }
                    }
                    this.el.fire("resizestart", {
                        dx: this.parameters.x,
                        dy: this.parameters.y,
                        event: t
                    }), SVG.on(window, "touchmove.resize", (function (t) {
                        e.update(t || window.event)
                    })), SVG.on(window, "touchend.resize", (function () {
                        e.done()
                    })), SVG.on(window, "mousemove.resize", (function (t) {
                        e.update(t || window.event)
                    })), SVG.on(window, "mouseup.resize", (function () {
                        e.done()
                    }))
                }, t.prototype.update = function (t) {
                    if (t) {
                        var e = this._extractPosition(t), i = this.transformPoint(e.x, e.y),
                            a = i.x - this.parameters.p.x, s = i.y - this.parameters.p.y;
                        this.lastUpdateCall = [a, s], this.calc(a, s), this.el.fire("resizing", {
                            dx: a,
                            dy: s,
                            event: t
                        })
                    } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1])
                }, t.prototype.done = function () {
                    this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone")
                }, t.prototype.snapToGrid = function (t, e, i, a) {
                    var s;
                    return void 0 !== a ? s = [(i + t) % this.options.snapToGrid, (a + e) % this.options.snapToGrid] : (i = null == i ? 3 : i, s = [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t < 0 && (s[0] -= this.options.snapToGrid), e < 0 && (s[1] -= this.options.snapToGrid), t -= Math.abs(s[0]) < this.options.snapToGrid / 2 ? s[0] : s[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(s[1]) < this.options.snapToGrid / 2 ? s[1] : s[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, a)
                }, t.prototype.constraintToBox = function (t, e, i, a) {
                    var s, r, n = this.options.constraint || {};
                    return void 0 !== a ? (s = i, r = a) : (s = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), r = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), void 0 !== n.minX && s + t < n.minX && (t = n.minX - s), void 0 !== n.maxX && s + t > n.maxX && (t = n.maxX - s), void 0 !== n.minY && r + e < n.minY && (e = n.minY - r), void 0 !== n.maxY && r + e > n.maxY && (e = n.maxY - r), [t, e]
                }, t.prototype.checkAspectRatio = function (t, e) {
                    if (!this.options.saveAspectRatio) return t;
                    var i = t.slice(), a = this.parameters.box.width / this.parameters.box.height,
                        s = this.parameters.box.width + t[0], r = this.parameters.box.height - t[1], n = s / r;
                    return n < a ? (i[1] = s / a - this.parameters.box.height, e && (i[1] = -i[1])) : n > a && (i[0] = this.parameters.box.width - r * a, e && (i[0] = -i[0])), i
                }, SVG.extend(SVG.Element, {
                    resize: function (e) {
                        return (this.remember("_resizeHandler") || new t(this)).init(e || {}), this
                    }
                }), SVG.Element.prototype.resize.defaults = {
                    snapToAngle: .1,
                    snapToGrid: 1,
                    constraint: {},
                    saveAspectRatio: !1
                }
            }).call(this)
        }()
    }, function (t, e, i) {
        var a = i(16), s = i(17);
        "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[t.i, s, ""]]);
        var r = {insert: "head", singleton: !1}, n = (a(t.i, s, r), s.locals ? s.locals : {});
        t.exports = n
    }, function (t, e, i) {
        "use strict";
        var a, s = function () {
            return void 0 === a && (a = Boolean(window && document && document.all && !window.atob)), a
        }, r = function () {
            var t = {};
            return function (e) {
                if (void 0 === t[e]) {
                    var i = document.querySelector(e);
                    if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                        i = i.contentDocument.head
                    } catch (t) {
                        i = null
                    }
                    t[e] = i
                }
                return t[e]
            }
        }(), n = {};

        function o(t, e, i) {
            for (var a = 0; a < e.length; a++) {
                var s = {css: e[a][1], media: e[a][2], sourceMap: e[a][3]};
                n[t][a] ? n[t][a](s) : n[t].push(p(s, i))
            }
        }

        function l(t) {
            var e = document.createElement("style"), a = t.attributes || {};
            if (void 0 === a.nonce) {
                var s = i.nc;
                s && (a.nonce = s)
            }
            if (Object.keys(a).forEach((function (t) {
                e.setAttribute(t, a[t])
            })), "function" == typeof t.insert) t.insert(e); else {
                var n = r(t.insert || "head");
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                n.appendChild(e)
            }
            return e
        }

        var h, c = (h = [], function (t, e) {
            return h[t] = e, h.filter(Boolean).join("\n")
        });

        function d(t, e, i, a) {
            var s = i ? "" : a.css;
            if (t.styleSheet) t.styleSheet.cssText = c(e, s); else {
                var r = document.createTextNode(s), n = t.childNodes;
                n[e] && t.removeChild(n[e]), n.length ? t.insertBefore(r, n[e]) : t.appendChild(r)
            }
        }

        function u(t, e, i) {
            var a = i.css, s = i.media, r = i.sourceMap;
            if (s ? t.setAttribute("media", s) : t.removeAttribute("media"), r && btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), t.styleSheet) t.styleSheet.cssText = a; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(a))
            }
        }

        var g = null, f = 0;

        function p(t, e) {
            var i, a, s;
            if (e.singleton) {
                var r = f++;
                i = g || (g = l(e)), a = d.bind(null, i, r, !1), s = d.bind(null, i, r, !0)
            } else i = l(e), a = u.bind(null, i, e), s = function () {
                !function (t) {
                    if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t)
                }(i)
            };
            return a(t), function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    a(t = e)
                } else s()
            }
        }

        t.exports = function (t, e, i) {
            return (i = i || {}).singleton || "boolean" == typeof i.singleton || (i.singleton = s()), t = i.base ? t + i.base : t, e = e || [], n[t] || (n[t] = []), o(t, e, i), function (e) {
                if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                    n[t] || (n[t] = []), o(t, e, i);
                    for (var a = e.length; a < n[t].length; a++) n[t][a]();
                    n[t].length = e.length, 0 === n[t].length && delete n[t]
                }
            }
        }
    }, function (t, e, i) {
        (e = i(18)(!1)).push([t.i, '.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n.apexcharts-canvas.dark {\n  background: #343F57;\n}\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-gridline, .apexcharts-text, .apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n.apexcharts-tooltip.light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n.apexcharts-tooltip.dark {\n  color: #fff;\n  background: rgba(30,30,30, 0.8);\n}\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.apexcharts-tooltip.light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n.apexcharts-tooltip.dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n.apexcharts-tooltip-series-group.active, .apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n.apexcharts-tooltip-candlestick > div {\n  margin: 4px 0;\n}\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after, .apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after, .apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after, .apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-xaxistooltip-bottom.dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color:#ECEFF1\n}\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n.apexcharts-xaxistooltip-top.dark:after {\n  border-top-color:rgba(0, 0, 0, 0.5);\n}\n.apexcharts-xaxistooltip-top.dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n\n.apexcharts-xaxistooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after, .apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after, .apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after, .apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n.apexcharts-yaxistooltip-left.dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-yaxistooltip-left.dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n.apexcharts-yaxistooltip-right.dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-yaxistooltip-right.dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.active {\n  opacity: 1;\n}\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs, .apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.active, .apexcharts-ycrosshairs.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-zoom-rect {\n  pointer-events: none;\n}\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_points, .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n.svg_select_points_l, .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n  fill: #888;\n}\n.apexcharts-canvas.zoomable .hovering-zoom {\n  cursor: crosshair\n}\n.apexcharts-canvas.zoomable .hovering-pan {\n  cursor: move\n}\n\n.apexcharts-xaxis,\n.apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoom-in-icon,\n.apexcharts-zoom-out-icon,\n.apexcharts-reset-zoom-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoom-in-icon svg,\n.apexcharts-zoom-out-icon svg,\n.apexcharts-reset-zoom-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.dark .apexcharts-zoom-icon svg,\n.dark .apexcharts-zoom-in-icon svg,\n.dark .apexcharts-zoom-out-icon svg,\n.dark .apexcharts-reset-zoom-icon svg,\n.dark .apexcharts-pan-icon svg,\n.dark .apexcharts-selection-icon svg,\n.dark .apexcharts-menu-icon svg,\n.dark .apexcharts-toolbar-custom-icon svg{\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.selected svg {\n  fill: #008FFB;\n}\n.light .apexcharts-selection-icon:not(.selected):hover svg,\n.light .apexcharts-zoom-icon:not(.selected):hover svg,\n.light .apexcharts-zoom-in-icon:hover svg,\n.light .apexcharts-zoom-out-icon:hover svg,\n.light .apexcharts-reset-zoom-icon:hover svg,\n.light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon, .apexcharts-menu-icon {\n  position: relative;\n}\n.apexcharts-reset-zoom-icon {\n  margin-left: 5px;\n}\n.apexcharts-zoom-icon, .apexcharts-reset-zoom-icon, .apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoom-in-icon, .apexcharts-zoom-out-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoom-out-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n.apexcharts-pan-icon.selected svg {\n  stroke: #008FFB;\n}\n.apexcharts-pan-icon:not(.selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  top: 0px;\n  right: 3px;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-toolbar svg {\n  pointer-events: none;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n.dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-toolbar {\n    /*opacity: 0;*/\n  }\n\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels, .apexcharts-datalabel, .apexcharts-datalabel-label, .apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events, .apexcharts-radar-series path, .apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n/* Resize generated styles */\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers, .resize-triggers > div, .contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers > div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}\n', ""]), t.exports = e
    }, function (t, e, i) {
        "use strict";
        t.exports = function (t) {
            var e = [];
            return e.toString = function () {
                return this.map((function (e) {
                    var i = function (t, e) {
                        var i = t[1] || "", a = t[3];
                        if (!a) return i;
                        if (e && "function" == typeof btoa) {
                            var s = (n = a, o = btoa(unescape(encodeURIComponent(JSON.stringify(n)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o), "/*# ".concat(l, " */")),
                                r = a.sources.map((function (t) {
                                    return "/*# sourceURL=".concat(a.sourceRoot).concat(t, " */")
                                }));
                            return [i].concat(r).concat([s]).join("\n")
                        }
                        var n, o, l;
                        return [i].join("\n")
                    }(e, t);
                    return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i
                })).join("")
            }, e.i = function (t, i) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var a = 0; a < t.length; a++) {
                    var s = [].concat(t[a]);
                    i && (s[2] ? s[2] = "".concat(i, " and ").concat(s[2]) : s[2] = i), e.push(s)
                }
            }, e
        }
    }, function (t, e) {
        !function () {
            function t(t) {
                var e = t.__resizeTriggers__, i = e.firstElementChild, a = e.lastElementChild, s = i.firstElementChild;
                a.scrollLeft = a.scrollWidth, a.scrollTop = a.scrollHeight, s.style.width = i.offsetWidth + 1 + "px", s.style.height = i.offsetHeight + 1 + "px", i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight
            }

            function e(e) {
                var i = this;
                t(this), this.__resizeRAF__ && r(this.__resizeRAF__), this.__resizeRAF__ = s((function () {
                    (function (t) {
                        return t.offsetWidth != t.__resizeLast__.width || t.offsetHeight != t.__resizeLast__.height
                    })(i) && (i.__resizeLast__.width = i.offsetWidth, i.__resizeLast__.height = i.offsetHeight, i.__resizeListeners__.forEach((function (t) {
                        t.call(e)
                    })))
                }))
            }

            var i, a,
                s = (i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 20)
                }, function (t) {
                    return i(t)
                }),
                r = (a = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout, function (t) {
                    return a(t)
                }), n = !1, o = "animationstart", l = "Webkit Moz O ms".split(" "),
                h = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
                c = document.createElement("fakeelement");
            if (void 0 !== c.style.animationName && (n = !0), !1 === n) for (var d = 0; d < l.length; d++) if (void 0 !== c.style[l[d] + "AnimationName"]) {
                o = h[d];
                break
            }
            window.addResizeListener = function (i, a) {
                i.__resizeTriggers__ || ("static" == getComputedStyle(i).position && (i.style.position = "relative"), i.__resizeLast__ = {}, i.__resizeListeners__ = [], (i.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", i.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', i.appendChild(i.__resizeTriggers__), t(i), i.addEventListener("scroll", e, !0), o && i.__resizeTriggers__.addEventListener(o, (function (e) {
                    "resizeanim" == e.animationName && t(i)
                }))), i.__resizeListeners__.push(a)
            }, window.removeResizeListener = function (t, i) {
                t && (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(i), 1), t.__resizeListeners__.length || (t.removeEventListener("scroll", e), t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__)))
            }
        }()
    }, function (t, e, i) {
        "use strict";

        function a(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function r(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        i.r(e);
        var n = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }

            var e, i, n;
            return e = t, n = [{
                key: "bind", value: function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }
            }, {
                key: "isObject", value: function (t) {
                    return t && "object" === s(t) && !Array.isArray(t) && null != t
                }
            }, {
                key: "listToArray", value: function (t) {
                    var e, i = [];
                    for (e = 0; e < t.length; e++) i[e] = t[e];
                    return i
                }
            }, {
                key: "extend", value: function (t, e) {
                    var i = this;
                    "function" != typeof Object.assign && (Object.assign = function (t) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        for (var e = Object(t), i = 1; i < arguments.length; i++) {
                            var a = arguments[i];
                            if (null != a) for (var s in a) a.hasOwnProperty(s) && (e[s] = a[s])
                        }
                        return e
                    });
                    var s = Object.assign({}, t);
                    return this.isObject(t) && this.isObject(e) && Object.keys(e).forEach((function (r) {
                        i.isObject(e[r]) && r in t ? s[r] = i.extend(t[r], e[r]) : Object.assign(s, a({}, r, e[r]))
                    })), s
                }
            }, {
                key: "extendArray", value: function (e, i) {
                    var a = [];
                    return e.map((function (e) {
                        a.push(t.extend(i, e))
                    })), e = a
                }
            }, {
                key: "monthMod", value: function (t) {
                    return t % 12
                }
            }, {
                key: "clone", value: function (t) {
                    if ("[object Array]" === Object.prototype.toString.call(t)) {
                        for (var e = [], i = 0; i < t.length; i++) e[i] = this.clone(t[i]);
                        return e
                    }
                    if ("object" === s(t)) {
                        var a = {};
                        for (var r in t) t.hasOwnProperty(r) && (a[r] = this.clone(t[r]));
                        return a
                    }
                    return t
                }
            }, {
                key: "log10", value: function (t) {
                    return Math.log(t) / Math.LN10
                }
            }, {
                key: "roundToBase10", value: function (t) {
                    return Math.pow(10, Math.floor(Math.log10(t)))
                }
            }, {
                key: "roundToBase", value: function (t, e) {
                    return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)))
                }
            }, {
                key: "parseNumber", value: function (t) {
                    return null === t ? t : parseFloat(t)
                }
            }, {
                key: "randomId", value: function () {
                    return (Math.random() + 1).toString(36).substring(4)
                }
            }, {
                key: "noExponents", value: function (t) {
                    var e = String(t).split(/[eE]/);
                    if (1 === e.length) return e[0];
                    var i = "", a = t < 0 ? "-" : "", s = e[0].replace(".", ""), r = Number(e[1]) + 1;
                    if (r < 0) {
                        for (i = a + "0."; r++;) i += "0";
                        return i + s.replace(/^-/, "")
                    }
                    for (r -= s.length; r--;) i += "0";
                    return s + i
                }
            }, {
                key: "getDimensions", value: function (t) {
                    var e = getComputedStyle(t), i = [], a = t.clientHeight, s = t.clientWidth;
                    return a -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), s -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i.push(s), i.push(a), i
                }
            }, {
                key: "getBoundingClientRect", value: function (t) {
                    var e = t.getBoundingClientRect();
                    return {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.width,
                        height: e.height,
                        x: e.x,
                        y: e.y
                    }
                }
            }, {
                key: "hexToRgba", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .6;
                    "#" !== t.substring(0, 1) && (t = "#999999");
                    var i = t.replace("#", "");
                    i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
                    for (var a = 0; a < i.length; a++) i[a] = parseInt(1 === i[a].length ? i[a] + i[a] : i[a], 16);
                    return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")"
                }
            }, {
                key: "getOpacityFromRGBA", value: function (t) {
                    return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))[3]
                }
            }, {
                key: "rgb2hex", value: function (t) {
                    return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
                }
            }, {
                key: "isColorHex", value: function (t) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
                }
            }, {
                key: "polarToCartesian", value: function (t, e, i, a) {
                    var s = (a - 90) * Math.PI / 180;
                    return {x: t + i * Math.cos(s), y: e + i * Math.sin(s)}
                }
            }, {
                key: "escapeString", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                        i = t.toString().slice();
                    return i = i.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, e)
                }
            }, {
                key: "negToZero", value: function (t) {
                    return t < 0 ? 0 : t
                }
            }, {
                key: "moveIndexInArray", value: function (t, e, i) {
                    if (i >= t.length) for (var a = i - t.length + 1; a--;) t.push(void 0);
                    return t.splice(i, 0, t.splice(e, 1)[0]), t
                }
            }, {
                key: "extractNumber", value: function (t) {
                    return parseFloat(t.replace(/[^\d.]*/g, ""))
                }
            }, {
                key: "findAncestor", value: function (t, e) {
                    for (; (t = t.parentElement) && !t.classList.contains(e);) ;
                    return t
                }
            }, {
                key: "setELstyles", value: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
                }
            }, {
                key: "isNumber", value: function (t) {
                    return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10))
                }
            }, {
                key: "isFloat", value: function (t) {
                    return Number(t) === t && t % 1 != 0
                }
            }, {
                key: "isSafari", value: function () {
                    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                }
            }, {
                key: "isFirefox", value: function () {
                    return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                }
            }, {
                key: "isIE11", value: function () {
                    if (-1 !== window.navigator.userAgent.indexOf("MSIE") || window.navigator.appVersion.indexOf("Trident/") > -1) return !0
                }
            }, {
                key: "isIE", value: function () {
                    var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
                    if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                    if (t.indexOf("Trident/") > 0) {
                        var i = t.indexOf("rv:");
                        return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
                    }
                    var a = t.indexOf("Edge/");
                    return a > 0 && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
                }
            }], (i = [{
                key: "shadeRGBColor", value: function (t, e) {
                    var i = e.split(","), a = t < 0 ? 0 : 255, s = t < 0 ? -1 * t : t, r = parseInt(i[0].slice(4), 10),
                        n = parseInt(i[1], 10), o = parseInt(i[2], 10);
                    return "rgb(" + (Math.round((a - r) * s) + r) + "," + (Math.round((a - n) * s) + n) + "," + (Math.round((a - o) * s) + o) + ")"
                }
            }, {
                key: "shadeHexColor", value: function (t, e) {
                    var i = parseInt(e.slice(1), 16), a = t < 0 ? 0 : 255, s = t < 0 ? -1 * t : t, r = i >> 16,
                        n = i >> 8 & 255, o = 255 & i;
                    return "#" + (16777216 + 65536 * (Math.round((a - r) * s) + r) + 256 * (Math.round((a - n) * s) + n) + (Math.round((a - o) * s) + o)).toString(16).slice(1)
                }
            }, {
                key: "shadeColor", value: function (t, e) {
                    return e.length > 7 ? this.shadeRGBColor(t, e) : this.shadeHexColor(t, e)
                }
            }]) && r(e.prototype, i), n && r(e, n), t
        }();

        function o(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var l = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "getDefaultFilter", value: function (t, e) {
                    var i = this.w;
                    t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i.config.states.normal.filter ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addNormalFilter", value: function (t, e) {
                    var i = this.w;
                    i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addLightenFilter", value: function (t, e, i) {
                    var a = this, s = this.w, r = i.intensity;
                    if (!n.isFirefox()) {
                        t.unfilter(!0);
                        var o = new window.SVG.Filter;
                        o.size("120%", "180%", "-5%", "-40%"), t.filter((function (t) {
                            var i = s.config.chart.dropShadow;
                            (o = i.enabled ? a.addShadow(t, e, i) : t).componentTransfer({
                                rgb: {
                                    type: "linear",
                                    slope: 1.5,
                                    intercept: r
                                }
                            })
                        })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
                    }
                }
            }, {
                key: "addDarkenFilter", value: function (t, e, i) {
                    var a = this, s = this.w, r = i.intensity;
                    if (!n.isFirefox()) {
                        t.unfilter(!0);
                        var o = new window.SVG.Filter;
                        o.size("120%", "180%", "-5%", "-40%"), t.filter((function (t) {
                            var i = s.config.chart.dropShadow;
                            (o = i.enabled ? a.addShadow(t, e, i) : t).componentTransfer({
                                rgb: {
                                    type: "linear",
                                    slope: r
                                }
                            })
                        })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
                    }
                }
            }, {
                key: "applyFilter", value: function (t, e, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                    switch (i) {
                        case"none":
                            this.addNormalFilter(t, e);
                            break;
                        case"lighten":
                            this.addLightenFilter(t, e, {intensity: a});
                            break;
                        case"darken":
                            this.addDarkenFilter(t, e, {intensity: a})
                    }
                }
            }, {
                key: "addShadow", value: function (t, e, i) {
                    var a = i.blur, s = i.top, r = i.left, n = i.color, o = i.opacity,
                        l = t.flood(Array.isArray(n) ? n[e] : n, o).composite(t.sourceAlpha, "in").offset(r, s).gaussianBlur(a).merge(t.source);
                    return t.blend(t.source, l)
                }
            }, {
                key: "dropShadow", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a = e.top, s = e.left,
                        r = e.blur, o = e.color, l = e.opacity, h = e.noUserSpaceOnUse, c = this.w;
                    if (t.unfilter(!0), n.isIE() && "radialBar" === c.config.chart.type) return t;
                    o = Array.isArray(o) ? o[i] : o;
                    var d = new window.SVG.Filter;
                    return d.size("120%", "180%", "-5%", "-40%"), t.filter((function (t) {
                        var e = null;
                        e = n.isSafari() || n.isFirefox() || n.isIE() ? t.flood(o, l).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(r) : t.flood(o, l).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(r).merge(t.source), t.blend(t.source, e)
                    })), h || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), t
                }
            }, {
                key: "setSelectionFilter", value: function (t, e, i) {
                    var a = this.w;
                    if (void 0 !== a.globals.selectedDataPoints[e] && a.globals.selectedDataPoints[e].indexOf(i) > -1) {
                        t.node.setAttribute("selected", !0);
                        var s = a.config.states.active.filter;
                        "none" !== s && this.applyFilter(t, e, s.type, s.value)
                    }
                }
            }]) && o(e.prototype, i), a && o(e, a), t
        }();

        function h(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var c = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.setEasingFunctions()
            }

            var e, i, a;
            return e = t, (i = [{
                key: "setEasingFunctions", value: function () {
                    var t;
                    if (!this.w.globals.easing) {
                        switch (this.w.config.chart.animations.easing) {
                            case"linear":
                                t = "-";
                                break;
                            case"easein":
                                t = "<";
                                break;
                            case"easeout":
                                t = ">";
                                break;
                            case"easeinout":
                                t = "<>";
                                break;
                            case"swing":
                                t = function (t) {
                                    var e = 1.70158;
                                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                                };
                                break;
                            case"bounce":
                                t = function (t) {
                                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                                };
                                break;
                            case"elastic":
                                t = function (t) {
                                    return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                                };
                                break;
                            default:
                                t = "<>"
                        }
                        this.w.globals.easing = t
                    }
                }
            }, {
                key: "animateLine", value: function (t, e, i, a) {
                    t.attr(e).animate(a).attr(i)
                }
            }, {
                key: "animateCircleRadius", value: function (t, e, i, a, s) {
                    e || (e = 0), t.attr({r: e}).animate(a, s).attr({r: i})
                }
            }, {
                key: "animateCircle", value: function (t, e, i, a, s) {
                    t.attr({r: e.r, cx: e.cx, cy: e.cy}).animate(a, s).attr({r: i.r, cx: i.cx, cy: i.cy})
                }
            }, {
                key: "animateRect", value: function (t, e, i, a, s) {
                    t.attr(e).animate(a).attr(i).afterAll((function () {
                        return s()
                    }))
                }
            }, {
                key: "animatePathsGradually", value: function (t) {
                    var e = t.el, i = t.j, a = t.pathFrom, s = t.pathTo, r = t.speed, n = t.delay, o = this.w, l = 0;
                    o.config.chart.animations.animateGradually.enabled && (l = o.config.chart.animations.animateGradually.delay), o.config.chart.animations.dynamicAnimation.enabled && o.globals.dataChanged && (l = 0), this.morphSVG(e, i, a, s, r, n * l)
                }
            }, {
                key: "showDelayedElements", value: function () {
                    this.w.globals.delayedElements.forEach((function (t) {
                        t.el.classList.remove("hidden")
                    }))
                }
            }, {
                key: "animationCompleted", value: function (t) {
                    var e = this.w;
                    e.globals.animationEnded = !0, "function" == typeof e.config.chart.events.animationEnd && e.config.chart.events.animationEnd(this.ctx, {
                        el: t,
                        w: e
                    })
                }
            }, {
                key: "morphSVG", value: function (t, e, i, a, s, r) {
                    var o = this, l = this.w;
                    i || (i = t.attr("pathFrom")), a || (a = t.attr("pathTo")), (!i || i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(l.globals.gridHeight), s = 1), (a.indexOf("undefined") > -1 || a.indexOf("NaN") > -1) && (a = "M 0 ".concat(l.globals.gridHeight), s = 1), l.globals.shouldAnimate || (s = 1), t.plot(i).animate(1, l.globals.easing, r).plot(i).animate(s, l.globals.easing, r).plot(a).afterAll((function () {
                        n.isNumber(e) ? e === l.globals.series[l.globals.maxValsInArrayIndex].length - 2 && l.globals.shouldAnimate && o.animationCompleted(t) : l.globals.shouldAnimate && o.animationCompleted(t), o.showDelayedElements()
                    }))
                }
            }]) && h(e.prototype, i), a && h(e, a), t
        }();

        function d(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(i), !0).forEach((function (e) {
                    g(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : d(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function g(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function f(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var p = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, a = [{
                key: "setAttrs", value: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
                }
            }], (i = [{
                key: "drawLine", value: function (t, e, i, a) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
                        r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, o = this.w,
                        l = o.globals.dom.Paper.line().attr({
                            x1: t,
                            y1: e,
                            x2: i,
                            y2: a,
                            stroke: s,
                            "stroke-dasharray": r,
                            "stroke-width": n
                        });
                    return l
                }
            }, {
                key: "drawRect", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
                        n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                        o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                        l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                        h = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, c = this.w,
                        d = c.globals.dom.Paper.rect();
                    return d.attr({
                        x: t,
                        y: e,
                        width: i > 0 ? i : 0,
                        height: a > 0 ? a : 0,
                        rx: s,
                        ry: s,
                        fill: r,
                        opacity: n,
                        "stroke-width": null !== o ? o : 0,
                        stroke: null !== l ? l : "none",
                        "stroke-dasharray": h
                    }), d
                }
            }, {
                key: "drawPolygon", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none", a = this.w,
                        s = a.globals.dom.Paper.polygon(t).attr({fill: i, stroke: e});
                    return s
                }
            }, {
                key: "drawCircle", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this.w,
                        a = i.globals.dom.Paper.circle(2 * t);
                    return null !== e && a.attr(e), a
                }
            }, {
                key: "drawPath", value: function (t) {
                    var e = t.d, i = void 0 === e ? "" : e, a = t.stroke, s = void 0 === a ? "#a8a8a8" : a,
                        r = t.strokeWidth, n = void 0 === r ? 1 : r, o = t.fill, l = t.fillOpacity,
                        h = void 0 === l ? 1 : l, c = t.strokeOpacity, d = void 0 === c ? 1 : c, u = t.classes,
                        g = t.strokeLinecap, f = void 0 === g ? null : g, p = t.strokeDashArray,
                        x = void 0 === p ? 0 : p, b = this.w;
                    return null === f && (f = b.config.stroke.lineCap), (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(b.globals.gridHeight)), b.globals.dom.Paper.path(i).attr({
                        fill: o,
                        "fill-opacity": h,
                        stroke: s,
                        "stroke-opacity": d,
                        "stroke-linecap": f,
                        "stroke-width": n,
                        "stroke-dasharray": x,
                        class: u
                    })
                }
            }, {
                key: "group", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = this.w,
                        i = e.globals.dom.Paper.group();
                    return null !== t && i.attr(t), i
                }
            }, {
                key: "move", value: function (t, e) {
                    var i = ["M", t, e].join(" ");
                    return i
                }
            }, {
                key: "line", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = null;
                    return null === i ? a = ["L", t, e].join(" ") : "H" === i ? a = ["H", t].join(" ") : "V" === i && (a = ["V", e].join(" ")), a
                }
            }, {
                key: "curve", value: function (t, e, i, a, s, r) {
                    var n = ["C", t, e, i, a, s, r].join(" ");
                    return n
                }
            }, {
                key: "quadraticCurve", value: function (t, e, i, a) {
                    return ["Q", t, e, i, a].join(" ")
                }
            }, {
                key: "arc", value: function (t, e, i, a, s, r, n) {
                    var o = arguments.length > 7 && void 0 !== arguments[7] && arguments[7], l = "A";
                    o && (l = "a");
                    var h = [l, t, e, i, a, s, r, n].join(" ");
                    return h
                }
            }, {
                key: "renderPaths", value: function (t) {
                    var e, i = t.j, a = t.realIndex, s = t.pathFrom, r = t.pathTo, n = t.stroke, o = t.strokeWidth,
                        h = t.strokeLinecap, d = t.fill, g = t.animationDelay, f = t.initialSpeed,
                        p = t.dataChangeSpeed, x = t.className, b = t.shouldClipToGrid, v = void 0 === b || b,
                        m = t.bindEventsOnPaths, y = void 0 === m || m, w = t.drawShadow, k = void 0 === w || w,
                        S = this.w, A = new l(this.ctx), C = new c(this.ctx),
                        P = this.w.config.chart.animations.enabled,
                        L = P && this.w.config.chart.animations.dynamicAnimation.enabled,
                        T = !!(P && !S.globals.resized || L && S.globals.dataChanged && S.globals.shouldAnimate);
                    T ? e = s : (e = r, S.globals.animationEnded = !0);
                    var E = S.config.stroke.dashArray, O = 0;
                    O = Array.isArray(E) ? E[a] : S.config.stroke.dashArray;
                    var z = this.drawPath({
                        d: e,
                        stroke: n,
                        strokeWidth: o,
                        fill: d,
                        fillOpacity: 1,
                        classes: x,
                        strokeLinecap: h,
                        strokeDashArray: O
                    });
                    if (z.attr("index", a), v && z.attr({"clip-path": "url(#gridRectMask".concat(S.globals.cuid, ")")}), "none" !== S.config.states.normal.filter.type) A.getDefaultFilter(z, a); else if (S.config.chart.dropShadow.enabled && k && (!S.config.chart.dropShadow.enabledSeries || S.config.chart.dropShadow.enabledSeries && -1 !== S.config.chart.dropShadow.enabledSeries.indexOf(a))) {
                        var I = S.config.chart.dropShadow;
                        A.dropShadow(z, I, a)
                    }
                    y && (z.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, z)), z.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, z)), z.node.addEventListener("mousedown", this.pathMouseDown.bind(this, z))), z.attr({
                        pathTo: r,
                        pathFrom: s
                    });
                    var M = {el: z, j: i, pathFrom: s, pathTo: r, strokeWidth: o};
                    return !P || S.globals.resized || S.globals.dataChanged ? !S.globals.resized && S.globals.dataChanged || C.showDelayedElements() : C.animatePathsGradually(u({}, M, {
                        speed: f,
                        delay: g
                    })), S.globals.dataChanged && L && T && C.animatePathsGradually(u({}, M, {speed: p})), z
                }
            }, {
                key: "drawPattern", value: function (t, e, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8",
                        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        r = (arguments.length > 5 && void 0 !== arguments[5] && arguments[5], this.w),
                        n = r.globals.dom.Paper.pattern(e, i, (function (r) {
                            "horizontalLines" === t ? r.line(0, 0, i, 0).stroke({
                                color: a,
                                width: s + 1
                            }) : "verticalLines" === t ? r.line(0, 0, 0, e).stroke({
                                color: a,
                                width: s + 1
                            }) : "slantedLines" === t ? r.line(0, 0, e, i).stroke({
                                color: a,
                                width: s
                            }) : "squares" === t ? r.rect(e, i).fill("none").stroke({
                                color: a,
                                width: s
                            }) : "circles" === t && r.circle(e).fill("none").stroke({color: a, width: s})
                        }));
                    return n
                }
            }, {
                key: "drawGradient", value: function (t, e, i, a, s) {
                    var r, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                        l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                        h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
                        c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, d = this.w;
                    e = n.hexToRgba(e, a), i = n.hexToRgba(i, s);
                    var u = 0, g = 1, f = 1, p = null;
                    null !== l && (u = void 0 !== l[0] ? l[0] / 100 : 0, g = void 0 !== l[1] ? l[1] / 100 : 1, f = void 0 !== l[2] ? l[2] / 100 : 1, p = void 0 !== l[3] ? l[3] / 100 : null);
                    var x = !("donut" !== d.config.chart.type && "pie" !== d.config.chart.type && "bubble" !== d.config.chart.type);
                    if (r = null === h || 0 === h.length ? d.globals.dom.Paper.gradient(x ? "radial" : "linear", (function (t) {
                        t.at(u, e, a), t.at(g, i, s), t.at(f, i, s), null !== p && t.at(p, e, a)
                    })) : d.globals.dom.Paper.gradient(x ? "radial" : "linear", (function (t) {
                        (Array.isArray(h[c]) ? h[c] : h).forEach((function (e) {
                            t.at(e.offset / 100, e.color, e.opacity)
                        }))
                    })), x) {
                        var b = d.globals.gridWidth / 2, v = d.globals.gridHeight / 2;
                        "bubble" !== d.config.chart.type ? r.attr({
                            gradientUnits: "userSpaceOnUse",
                            cx: b,
                            cy: v,
                            r: o
                        }) : r.attr({cx: .5, cy: .5, r: .8, fx: .2, fy: .2})
                    } else "vertical" === t ? r.from(0, 0).to(0, 1) : "diagonal" === t ? r.from(0, 0).to(1, 1) : "horizontal" === t ? r.from(0, 1).to(1, 1) : "diagonal2" === t && r.from(0, 1).to(2, 2);
                    return r
                }
            }, {
                key: "drawText", value: function (t) {
                    var e, i = this.w, a = t.x, s = t.y, r = t.text, n = t.textAnchor, o = t.fontSize, l = t.fontFamily,
                        h = t.fontWeight, c = t.foreColor, d = t.opacity;
                    return void 0 === r && (r = ""), n || (n = "start"), c || (c = i.config.chart.foreColor), l = l || i.config.chart.fontFamily, h = h || "regular", (e = Array.isArray(r) ? i.globals.dom.Paper.text((function (t) {
                        for (var e = 0; e < r.length; e++) t.tspan(r[e])
                    })) : i.globals.dom.Paper.plain(r)).attr({
                        x: a,
                        y: s,
                        "text-anchor": n,
                        "dominant-baseline": "auto",
                        "font-size": o,
                        "font-family": l,
                        "font-weight": h,
                        fill: c,
                        class: t.cssClass
                    }), e.node.style.fontFamily = l, e.node.style.opacity = d, e
                }
            }, {
                key: "addTspan", value: function (t, e, i) {
                    var a = t.tspan(e);
                    i || (i = this.w.config.chart.fontFamily), a.node.style.fontFamily = i
                }
            }, {
                key: "drawMarker", value: function (t, e, i) {
                    t = t || 0;
                    var a = i.pSize || 0, s = null;
                    if ("square" === i.shape) {
                        var r = void 0 === i.pRadius ? a / 2 : i.pRadius;
                        null !== e && a || (a = 0, r = 0);
                        var o = 1.2 * a + r, l = this.drawRect(o, o, o, o, r);
                        l.attr({
                            x: t - o / 2,
                            y: e - o / 2,
                            cx: t,
                            cy: e,
                            class: i.class ? i.class : "",
                            fill: i.pointFillColor,
                            "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                            stroke: i.pointStrokeColor,
                            "stroke-width": i.pWidth ? i.pWidth : 0,
                            "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                        }), s = l
                    } else "circle" !== i.shape && i.shape || (n.isNumber(e) || (a = 0, e = 0), s = this.drawCircle(a, {
                        cx: t,
                        cy: e,
                        class: i.class ? i.class : "",
                        stroke: i.pointStrokeColor,
                        fill: i.pointFillColor,
                        "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                        "stroke-width": i.pWidth ? i.pWidth : 0,
                        "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                    }));
                    return s
                }
            }, {
                key: "pathMouseEnter", value: function (t, e) {
                    var i = this.w, a = new l(this.ctx), s = parseInt(t.node.getAttribute("index"), 10),
                        r = parseInt(t.node.getAttribute("j"), 10);
                    if ("function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, {
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }), this.ctx.fireEvent("dataPointMouseEnter", [e, this.ctx, {
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }]), ("none" === i.config.states.active.filter.type || "true" !== t.node.getAttribute("selected")) && "none" !== i.config.states.hover.filter.type && "none" !== i.config.states.active.filter.type && !i.globals.isTouchDevice) {
                        var n = i.config.states.hover.filter;
                        a.applyFilter(t, s, n.type, n.value)
                    }
                }
            }, {
                key: "pathMouseLeave", value: function (t, e) {
                    var i = this.w, a = new l(this.ctx), s = parseInt(t.node.getAttribute("index"), 10),
                        r = parseInt(t.node.getAttribute("j"), 10);
                    "function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, {
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }), this.ctx.fireEvent("dataPointMouseLeave", [e, this.ctx, {
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" !== i.config.states.hover.filter.type && a.getDefaultFilter(t, s)
                }
            }, {
                key: "pathMouseDown", value: function (t, e) {
                    var i = this.w, a = new l(this.ctx), s = parseInt(t.node.getAttribute("index"), 10),
                        r = parseInt(t.node.getAttribute("j"), 10), n = "false";
                    if ("true" === t.node.getAttribute("selected")) {
                        if (t.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[s].indexOf(r) > -1) {
                            var o = i.globals.selectedDataPoints[s].indexOf(r);
                            i.globals.selectedDataPoints[s].splice(o, 1)
                        }
                    } else {
                        if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) {
                            i.globals.selectedDataPoints = [];
                            var h = i.globals.dom.Paper.select(".apexcharts-series path").members,
                                c = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members,
                                d = function (t) {
                                    t.forEach((function (t) {
                                        t.node.setAttribute("selected", "false"), a.getDefaultFilter(t, s)
                                    }))
                                };
                            d(h), d(c)
                        }
                        t.node.setAttribute("selected", "true"), n = "true", void 0 === i.globals.selectedDataPoints[s] && (i.globals.selectedDataPoints[s] = []), i.globals.selectedDataPoints[s].push(r)
                    }
                    if ("true" === n) {
                        var u = i.config.states.active.filter;
                        "none" !== u && a.applyFilter(t, s, u.type, u.value)
                    } else "none" !== i.config.states.active.filter.type && a.getDefaultFilter(t, s);
                    "function" == typeof i.config.chart.events.dataPointSelection && i.config.chart.events.dataPointSelection(e, this.ctx, {
                        selectedDataPoints: i.globals.selectedDataPoints,
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }), e && this.ctx.fireEvent("dataPointSelection", [e, this.ctx, {
                        selectedDataPoints: i.globals.selectedDataPoints,
                        seriesIndex: s,
                        dataPointIndex: r,
                        w: i
                    }])
                }
            }, {
                key: "rotateAroundCenter", value: function (t) {
                    var e = t.getBBox();
                    return {x: e.x + e.width / 2, y: e.y + e.height / 2}
                }
            }, {
                key: "getTextRects", value: function (t, e, i, a) {
                    var s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], r = this.w,
                        n = this.drawText({
                            x: -200,
                            y: -200,
                            text: t,
                            textAnchor: "start",
                            fontSize: e,
                            fontFamily: i,
                            foreColor: "#fff",
                            opacity: 0
                        });
                    a && n.attr("transform", a), r.globals.dom.Paper.add(n);
                    var o = n.bbox();
                    return s || (o = n.node.getBoundingClientRect()), n.remove(), {width: o.width, height: o.height}
                }
            }, {
                key: "placeTextWithEllipsis", value: function (t, e, i) {
                    if (t.textContent = e, e.length > 0 && t.getComputedTextLength() >= i) {
                        for (var a = e.length - 3; a > 0; a -= 3) if (t.getSubStringLength(0, a) <= i) return void (t.textContent = e.substring(0, a) + "...");
                        t.textContent = ""
                    }
                }
            }]) && f(e.prototype, i), a && f(e, a), t
        }();

        function x(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var b = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.annoCtx = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "setOrientations", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this.w;
                    if ("vertical" === t.label.orientation) {
                        var a = null !== e ? e : 0,
                            s = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a, "']"));
                        if (null !== s) {
                            var r = s.getBoundingClientRect();
                            s.setAttribute("x", parseFloat(s.getAttribute("x")) - r.height + 4), "top" === t.label.position ? s.setAttribute("y", parseFloat(s.getAttribute("y")) + r.width) : s.setAttribute("y", parseFloat(s.getAttribute("y")) - r.width);
                            var n = this.annoCtx.graphics.rotateAroundCenter(s), o = n.x, l = n.y;
                            s.setAttribute("transform", "rotate(-90 ".concat(o, " ").concat(l, ")"))
                        }
                    }
                }
            }, {
                key: "addBackgroundToAnno", value: function (t, e) {
                    var i = this.w;
                    if (!e.label.text || e.label.text && !e.label.text.trim()) return null;
                    var a = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),
                        s = t.getBoundingClientRect(), r = e.label.style.padding.left, n = e.label.style.padding.right,
                        o = e.label.style.padding.top, l = e.label.style.padding.bottom;
                    "vertical" === e.label.orientation && (o = e.label.style.padding.left, l = e.label.style.padding.right, r = e.label.style.padding.top, n = e.label.style.padding.bottom);
                    var h = s.left - a.left - r, c = s.top - a.top - o,
                        d = this.annoCtx.graphics.drawRect(h, c, s.width + r + n, s.height + o + l, 0, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0);
                    return e.id && d.node.classList.add(e.id), d
                }
            }, {
                key: "annotationsBackground", value: function () {
                    var t = this, e = this.w, i = function (i, a, s) {
                        var r = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(a, "']"));
                        if (r) {
                            var n = r.parentNode, o = t.addBackgroundToAnno(r, i);
                            o && n.insertBefore(o.node, r)
                        }
                    };
                    e.config.annotations.xaxis.map((function (t, e) {
                        i(t, e, "xaxis")
                    })), e.config.annotations.yaxis.map((function (t, e) {
                        i(t, e, "yaxis")
                    })), e.config.annotations.points.map((function (t, e) {
                        i(t, e, "point")
                    }))
                }
            }, {
                key: "getStringX", value: function (t) {
                    var e = this.w, i = t, a = e.globals.labels.slice();
                    e.config.xaxis.convertedCatToNumeric && (a = a.map((function (t) {
                        return e.config.xaxis.labels.formatter(t)
                    })));
                    var s = a.indexOf(t),
                        r = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (s + 1) + ")");
                    return r && (i = parseFloat(r.getAttribute("x"))), i
                }
            }]) && x(e.prototype, i), a && x(e, a), t
        }();

        function v(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var m = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.annoCtx = e, this.invertAxis = this.annoCtx.invertAxis
            }

            var e, i, a;
            return e = t, (i = [{
                key: "addXaxisAnnotation", value: function (t, e, i) {
                    var a = this.w, s = this.invertAxis ? a.globals.minY : a.globals.minX,
                        r = this.invertAxis ? a.globals.maxY : a.globals.maxX,
                        n = this.invertAxis ? a.globals.yRange[0] : a.globals.xRange,
                        o = (t.x - s) / (n / a.globals.gridWidth);
                    this.annoCtx.inversedReversedAxis && (o = (r - t.x) / (n / a.globals.gridWidth));
                    var l = t.label.text;
                    "category" !== a.config.xaxis.type && !a.config.xaxis.convertedCatToNumeric || this.invertAxis || (o = this.annoCtx.helpers.getStringX(t.x));
                    var h = t.strokeDashArray;
                    if (!(o < 0 || o > a.globals.gridWidth)) {
                        if (null === t.x2) {
                            var c = this.annoCtx.graphics.drawLine(o + t.offsetX, 0 + t.offsetY, o + t.offsetX, a.globals.gridHeight + t.offsetY, t.borderColor, h, t.borderWidth);
                            e.appendChild(c.node), t.id && c.node.classList.add(t.id)
                        } else {
                            var d = (t.x2 - s) / (n / a.globals.gridWidth);
                            if (this.annoCtx.inversedReversedAxis && (d = (r - t.x2) / (n / a.globals.gridWidth)), "category" !== a.config.xaxis.type && !a.config.xaxis.convertedCatToNumeric || this.invertAxis || (d = this.annoCtx.helpers.getStringX(t.x2)), d < o) {
                                var u = o;
                                o = d, d = u
                            }
                            if (l) {
                                var g = this.annoCtx.graphics.drawRect(o + t.offsetX, 0 + t.offsetY, d - o, a.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, h);
                                e.appendChild(g.node), t.id && g.node.classList.add(t.id)
                            }
                        }
                        var f = "top" === t.label.position ? -3 : a.globals.gridHeight,
                            p = this.annoCtx.graphics.getTextRects(l, parseFloat(t.label.style.fontSize)),
                            x = this.annoCtx.graphics.drawText({
                                x: o + t.label.offsetX,
                                y: f + t.label.offsetY - ("top" === t.label.position ? p.width / 2 - 12 : -p.width / 2),
                                text: l,
                                textAnchor: t.label.textAnchor,
                                fontSize: t.label.style.fontSize,
                                fontFamily: t.label.style.fontFamily,
                                foreColor: t.label.style.color,
                                cssClass: "apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "")
                            });
                        x.attr({rel: i}), e.appendChild(x.node), this.annoCtx.helpers.setOrientations(t, i)
                    }
                }
            }, {
                key: "drawXAxisAnnotations", value: function () {
                    var t = this, e = this.w, i = this.annoCtx.graphics.group({class: "apexcharts-xaxis-annotations"});
                    return e.config.annotations.xaxis.map((function (e, a) {
                        t.addXaxisAnnotation(e, i.node, a)
                    })), i
                }
            }]) && v(e.prototype, i), a && v(e, a), t
        }();

        function y(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var w = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.annoCtx = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "addYaxisAnnotation", value: function (t, e, i) {
                    var a, s, r = this.w, n = t.strokeDashArray;
                    if (this.annoCtx.invertAxis) {
                        var o = r.globals.labels.indexOf(t.y),
                            l = r.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (o + 1) + ")");
                        l && (a = parseFloat(l.getAttribute("y")))
                    } else a = r.globals.gridHeight - (t.y - r.globals.minYArr[t.yAxisIndex]) / (r.globals.yRange[t.yAxisIndex] / r.globals.gridHeight), r.config.yaxis[t.yAxisIndex] && r.config.yaxis[t.yAxisIndex].reversed && (a = (t.y - r.globals.minYArr[t.yAxisIndex]) / (r.globals.yRange[t.yAxisIndex] / r.globals.gridHeight));
                    var h = t.label.text;
                    if (null === t.y2) {
                        var c = this.annoCtx.graphics.drawLine(0 + t.offsetX, a + t.offsetY, r.globals.gridWidth + t.offsetX, a + t.offsetY, t.borderColor, n, t.borderWidth);
                        e.appendChild(c.node), t.id && c.node.classList.add(t.id)
                    } else {
                        if (this.annoCtx.invertAxis) {
                            var d = r.globals.labels.indexOf(t.y2),
                                u = r.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (d + 1) + ")");
                            u && (s = parseFloat(u.getAttribute("y")))
                        } else s = r.globals.gridHeight - (t.y2 - r.globals.minYArr[t.yAxisIndex]) / (r.globals.yRange[t.yAxisIndex] / r.globals.gridHeight), r.config.yaxis[t.yAxisIndex] && r.config.yaxis[t.yAxisIndex].reversed && (s = (t.y2 - r.globals.minYArr[t.yAxisIndex]) / (r.globals.yRange[t.yAxisIndex] / r.globals.gridHeight));
                        if (s > a) {
                            var g = a;
                            a = s, s = g
                        }
                        if (h) {
                            var f = this.annoCtx.graphics.drawRect(0 + t.offsetX, s + t.offsetY, r.globals.gridWidth + t.offsetX, a - s, 0, t.fillColor, t.opacity, 1, t.borderColor, n);
                            e.appendChild(f.node), t.id && f.node.classList.add(t.id)
                        }
                    }
                    var p = "right" === t.label.position ? r.globals.gridWidth : 0, x = this.annoCtx.graphics.drawText({
                        x: p + t.label.offsetX,
                        y: (s || a) + t.label.offsetY - 3,
                        text: h,
                        textAnchor: t.label.textAnchor,
                        fontSize: t.label.style.fontSize,
                        fontFamily: t.label.style.fontFamily,
                        foreColor: t.label.style.color,
                        cssClass: "apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "")
                    });
                    x.attr({rel: i}), e.appendChild(x.node)
                }
            }, {
                key: "drawYAxisAnnotations", value: function () {
                    var t = this, e = this.w, i = this.annoCtx.graphics.group({class: "apexcharts-yaxis-annotations"});
                    return e.config.annotations.yaxis.map((function (e, a) {
                        t.addYaxisAnnotation(e, i.node, a)
                    })), i
                }
            }]) && y(e.prototype, i), a && y(e, a), t
        }();

        function k(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var S = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.annoCtx = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "addPointAnnotation", value: function (t, e, i) {
                    var a = this.w, s = 0, r = 0, n = 0;
                    if (this.annoCtx.invertAxis && console.warn("Point annotation is not supported in horizontal bar charts."), "string" == typeof t.x) {
                        var o = a.globals.labels.indexOf(t.x),
                            l = a.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (o + 1) + ")");
                        s = parseFloat(l.getAttribute("x"));
                        var h = t.y;
                        null === t.y && (h = a.globals.series[t.seriesIndex][o]), r = a.globals.gridHeight - (h - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) - parseFloat(t.label.style.fontSize) - t.marker.size, n = a.globals.gridHeight - (h - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight), a.config.yaxis[t.yAxisIndex] && a.config.yaxis[t.yAxisIndex].reversed && (r = (h - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) + parseFloat(t.label.style.fontSize) + t.marker.size, n = (h - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight))
                    } else s = (t.x - a.globals.minX) / (a.globals.xRange / a.globals.gridWidth), r = a.globals.gridHeight - (parseFloat(t.y) - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) - parseFloat(t.label.style.fontSize) - t.marker.size, n = a.globals.gridHeight - (t.y - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight), a.config.yaxis[t.yAxisIndex] && a.config.yaxis[t.yAxisIndex].reversed && (r = (parseFloat(t.y) - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight) - parseFloat(t.label.style.fontSize) - t.marker.size, n = (t.y - a.globals.minYArr[t.yAxisIndex]) / (a.globals.yRange[t.yAxisIndex] / a.globals.gridHeight));
                    if (!(s < 0 || s > a.globals.gridWidth)) {
                        var c = {
                            pSize: t.marker.size,
                            pWidth: t.marker.strokeWidth,
                            pointFillColor: t.marker.fillColor,
                            pointStrokeColor: t.marker.strokeColor,
                            shape: t.marker.shape,
                            radius: t.marker.radius,
                            class: "apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id ? t.id : "")
                        }, d = this.annoCtx.graphics.drawMarker(s + t.marker.offsetX, n + t.marker.offsetY, c);
                        e.appendChild(d.node);
                        var u = t.label.text ? t.label.text : "", g = this.annoCtx.graphics.drawText({
                            x: s + t.label.offsetX,
                            y: r + t.label.offsetY,
                            text: u,
                            textAnchor: t.label.textAnchor,
                            fontSize: t.label.style.fontSize,
                            fontFamily: t.label.style.fontFamily,
                            foreColor: t.label.style.color,
                            cssClass: "apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "")
                        });
                        if (g.attr({rel: i}), e.appendChild(g.node), t.customSVG.SVG) {
                            var f = this.annoCtx.graphics.group({class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass});
                            f.attr({transform: "translate(".concat(s + t.customSVG.offsetX, ", ").concat(r + t.customSVG.offsetY, ")")}), f.node.innerHTML = t.customSVG.SVG, e.appendChild(f.node)
                        }
                    }
                }
            }, {
                key: "drawPointAnnotations", value: function () {
                    var t = this, e = this.w, i = this.annoCtx.graphics.group({class: "apexcharts-point-annotations"});
                    return e.config.annotations.points.map((function (e, a) {
                        t.addPointAnnotation(e, i.node, a)
                    })), i
                }
            }]) && k(e.prototype, i), a && k(e, a), t
        }();

        function A(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function C(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? A(Object(i), !0).forEach((function (e) {
                    P(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : A(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function P(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        var L = {
            background: "#fff",
            color: void 0,
            fontSize: "11px",
            fontFamily: void 0,
            cssClass: "",
            padding: {left: 5, right: 5, top: 2, bottom: 2}
        }, T = {
            strokeDashArray: 1,
            fillColor: "#c2c2c2",
            borderColor: "#c2c2c2",
            borderWidth: 1,
            opacity: .3,
            offsetX: 0,
            offsetY: 0
        }, E = C({x: 0, x2: null}, T, {
            label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                text: void 0,
                textAnchor: "middle",
                orientation: "vertical",
                position: "top",
                offsetX: 0,
                offsetY: 0,
                style: C({}, L)
            }
        }), O = C({y: 0, y2: null}, T, {
            yAxisIndex: 0,
            label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                text: void 0,
                textAnchor: "end",
                position: "right",
                offsetX: 0,
                offsetY: -3,
                style: C({}, L)
            }
        }), z = {
            x: 0,
            y: null,
            yAxisIndex: 0,
            seriesIndex: 0,
            marker: {
                size: 4,
                fillColor: "#fff",
                strokeWidth: 2,
                strokeColor: "#333",
                shape: "circle",
                offsetX: 0,
                offsetY: 0,
                radius: 2,
                cssClass: ""
            },
            label: {
                borderColor: "#c2c2c2",
                borderWidth: 1,
                text: void 0,
                textAnchor: "middle",
                offsetX: 0,
                offsetY: -15,
                style: C({}, L)
            },
            customSVG: {SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0}
        };

        function I(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var M = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.graphics = new p(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new b(this), this.xAxisAnnotations = new m(this), this.yAxisAnnotations = new w(this), this.pointsAnnotations = new S(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints
            }

            var e, i, a;
            return e = t, (i = [{
                key: "drawAnnotations", value: function () {
                    var t = this.w;
                    if (t.globals.axisCharts) {
                        for (var e = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), a = this.pointsAnnotations.drawPointAnnotations(), s = t.config.chart.animations.enabled, r = [e, i, a], n = [i.node, e.node, a.node], o = 0; o < 3; o++) t.globals.dom.elGraphical.add(r[o]), !s || t.globals.resized || t.globals.dataChanged || "scatter" !== t.config.chart.type && "bubble" !== t.config.chart.type && n[o].classList.add("hidden"), t.globals.delayedElements.push({
                            el: n[o],
                            index: 0
                        });
                        this.helpers.annotationsBackground()
                    }
                }
            }, {
                key: "addXaxisAnnotation", value: function (t, e, i) {
                    this.xAxisAnnotations.addXaxisAnnotation(t, e, i)
                }
            }, {
                key: "addYaxisAnnotation", value: function (t, e, i) {
                    this.yAxisAnnotations.addYaxisAnnotation(t, e, i)
                }
            }, {
                key: "addPointAnnotation", value: function (t, e, i) {
                    this.pointsAnnotations.addPointAnnotation(t, e, i)
                }
            }, {
                key: "clearAnnotations", value: function (t) {
                    var e = t.w,
                        i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
                    e.globals.memory.methodsToExec.map((function (t, i) {
                        "addText" !== t.label && "addAnnotation" !== t.label || e.globals.memory.methodsToExec.splice(i, 1)
                    })), (i = n.listToArray(i)).forEach((function (t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    }))
                }
            }, {
                key: "removeAnnotation", value: function (t, e) {
                    var i = t.w, a = i.globals.dom.baseEl.querySelectorAll(".".concat(e));
                    a && (i.globals.memory.methodsToExec.map((function (t, a) {
                        t.id === e && i.globals.memory.methodsToExec.splice(a, 1)
                    })), a.forEach((function (t) {
                        t.parentElement.removeChild(t)
                    })))
                }
            }, {
                key: "addText", value: function (t, e, i) {
                    var a = t.x, s = t.y, r = t.text, n = t.textAnchor, o = t.appendTo,
                        l = void 0 === o ? ".apexcharts-inner" : o, h = t.foreColor, c = t.fontSize, d = t.fontFamily,
                        u = t.cssClass, g = t.backgroundColor, f = t.borderWidth, p = t.strokeDashArray, x = t.radius,
                        b = t.borderColor, v = t.paddingLeft, m = void 0 === v ? 4 : v, y = t.paddingRight,
                        w = void 0 === y ? 4 : y, k = t.paddingBottom, S = void 0 === k ? 2 : k, A = t.paddingTop,
                        C = void 0 === A ? 2 : A, P = i, L = P.w, T = L.globals.dom.baseEl.querySelector(l),
                        E = this.graphics.drawText({
                            x: a,
                            y: s,
                            text: r,
                            textAnchor: n || "start",
                            fontSize: c || "12px",
                            fontFamily: d || L.config.chart.fontFamily,
                            foreColor: h || L.config.chart.foreColor,
                            cssClass: u
                        });
                    T.appendChild(E.node);
                    var O = E.bbox();
                    if (r) {
                        var z = this.graphics.drawRect(O.x - m, O.y - C, O.width + m + w, O.height + S + C, x, g, 1, f, b, p);
                        E.before(z)
                    }
                    return e && L.globals.memory.methodsToExec.push({
                        context: P,
                        method: P.addText,
                        label: "addText",
                        params: t
                    }), i
                }
            }, {
                key: "addXaxisAnnotationExternal", value: function (t, e, i) {
                    return this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "xaxis",
                        contextMethod: i.addXaxisAnnotation
                    }), i
                }
            }, {
                key: "addYaxisAnnotationExternal", value: function (t, e, i) {
                    return this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "yaxis",
                        contextMethod: i.addYaxisAnnotation
                    }), i
                }
            }, {
                key: "addPointAnnotationExternal", value: function (t, e, i) {
                    return void 0 === this.invertAxis && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "point",
                        contextMethod: i.addPointAnnotation
                    }), i
                }
            }, {
                key: "addAnnotationExternal", value: function (t) {
                    var e = t.params, i = t.pushToMemory, a = t.context, s = t.type, r = t.contextMethod, o = a,
                        l = o.w, h = l.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations")),
                        c = h.childNodes.length + 1, d = Object.assign({}, "xaxis" === s ? E : "yaxis" === s ? O : z),
                        u = n.extend(d, e);
                    switch (s) {
                        case"xaxis":
                            this.addXaxisAnnotation(u, h, c);
                            break;
                        case"yaxis":
                            this.addYaxisAnnotation(u, h, c);
                            break;
                        case"point":
                            this.addPointAnnotation(u, h, c)
                    }
                    var g = l.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(c, "']")),
                        f = this.helpers.addBackgroundToAnno(g, u);
                    return f && h.insertBefore(f.node, g), i && l.globals.memory.methodsToExec.push({
                        context: o,
                        id: u.id ? u.id : n.randomId(),
                        method: r,
                        label: "addAnnotation",
                        params: e
                    }), a
                }
            }]) && I(e.prototype, i), a && I(e, a), t
        }();

        function X(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                    return i
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Y(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var D = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
            }

            var e, i, a;
            return e = t, (i = [{
                key: "isValidDate", value: function (t) {
                    return !isNaN(this.parseDate(t))
                }
            }, {
                key: "getUTCTimeStamp", value: function (t) {
                    return Date.parse(t) ? new Date(new Date(t).toISOString().substr(0, 25)).getTime() : t
                }
            }, {
                key: "parseDate", value: function (t) {
                    var e = Date.parse(t);
                    if (!isNaN(e)) return this.getUTCTimeStamp(t);
                    var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
                    return i = this.getUTCTimeStamp(i)
                }
            }, {
                key: "formatDate", value: function (t, e) {
                    var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = this.w.globals.locale, s = ["\0"].concat(X(a.months)), r = [""].concat(X(a.shortMonths)),
                        n = [""].concat(X(a.days)), o = [""].concat(X(a.shortDays));

                    function l(t, e) {
                        var i = t + "";
                        for (e = e || 2; i.length < e;) i = "0" + i;
                        return i
                    }

                    var h = t.getUTCFullYear();
                    e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + h)).replace(/(^|[^\\])yy/g, "$1" + h.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h);
                    var c = t.getUTCMonth() + 1;
                    e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + s[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(/(^|[^\\])MM/g, "$1" + l(c))).replace(/(^|[^\\])M/g, "$1" + c);
                    var d = t.getUTCDate();
                    e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + n[0])).replace(/(^|[^\\])ddd/g, "$1" + o[0])).replace(/(^|[^\\])dd/g, "$1" + l(d))).replace(/(^|[^\\])d/g, "$1" + d);
                    var u = t.getUTCHours(), g = u > 12 ? u - 12 : 0 === u ? 12 : u;
                    e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + l(u))).replace(/(^|[^\\])H/g, "$1" + u)).replace(/(^|[^\\])hh+/g, "$1" + l(g))).replace(/(^|[^\\])h/g, "$1" + g);
                    var f = t.getUTCMinutes();
                    e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + l(f))).replace(/(^|[^\\])m/g, "$1" + f);
                    var p = t.getUTCSeconds();
                    e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + l(p))).replace(/(^|[^\\])s/g, "$1" + p);
                    var x = t.getUTCMilliseconds();
                    e = e.replace(/(^|[^\\])fff+/g, "$1" + l(x, 3)), x = Math.round(x / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + l(x)), x = Math.round(x / 10);
                    var b = u < 12 ? "AM" : "PM";
                    e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + x)).replace(/(^|[^\\])TT+/g, "$1" + b)).replace(/(^|[^\\])T/g, "$1" + b.charAt(0));
                    var v = b.toLowerCase();
                    e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + v)).replace(/(^|[^\\])t/g, "$1" + v.charAt(0));
                    var m = -t.getTimezoneOffset(), y = i || !m ? "Z" : m > 0 ? "+" : "-";
                    e = e.replace(/(^|[^\\])K/g, "$1" + y);
                    var w = t.getUTCDay() + 1;
                    return e = (e = (e = (e = (e = e.replace(new RegExp(n[0], "g"), n[w])).replace(new RegExp(o[0], "g"), o[w])).replace(new RegExp(s[0], "g"), s[c])).replace(new RegExp(r[0], "g"), r[c])).replace(/\\(.)/g, "$1")
                }
            }, {
                key: "getTimeUnitsfromTimestamp", value: function (t, e) {
                    var i = this.w;
                    void 0 !== i.config.xaxis.min && (t = i.config.xaxis.min), void 0 !== i.config.xaxis.max && (e = i.config.xaxis.max);
                    var a = new Date(t).getUTCFullYear(), s = new Date(e).getUTCFullYear(),
                        r = new Date(t).getUTCMonth(), n = new Date(e).getUTCMonth(), o = new Date(t).getUTCDate(),
                        l = new Date(e).getUTCDate(), h = new Date(t).getUTCHours(), c = new Date(e).getUTCHours();
                    return {
                        minMinute: new Date(t).getUTCMinutes(),
                        maxMinute: new Date(e).getUTCMinutes(),
                        minHour: h,
                        maxHour: c,
                        minDate: o,
                        maxDate: l,
                        minMonth: r,
                        maxMonth: n,
                        minYear: a,
                        maxYear: s
                    }
                }
            }, {
                key: "isLeapYear", value: function (t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                }
            }, {
                key: "calculcateLastDaysOfMonth", value: function (t, e, i) {
                    return this.determineDaysOfMonths(t, e) - i
                }
            }, {
                key: "determineDaysOfYear", value: function (t) {
                    var e = 365;
                    return this.isLeapYear(t) && (e = 366), e
                }
            }, {
                key: "determineRemainingDaysOfYear", value: function (t, e, i) {
                    var a = this.daysCntOfYear[e] + i;
                    return e > 1 && this.isLeapYear() && a++, a
                }
            }, {
                key: "determineDaysOfMonths", value: function (t, e) {
                    var i = 30;
                    switch (t = n.monthMod(t), !0) {
                        case this.months30.indexOf(t) > -1:
                            2 === t && (i = this.isLeapYear(e) ? 29 : 28);
                            break;
                        case this.months31.indexOf(t) > -1:
                        default:
                            i = 31
                    }
                    return i
                }
            }]) && Y(e.prototype, i), a && Y(e, a), t
        }();

        function R(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var F = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.tooltipKeyFormat = "dd MMM"
            }

            var e, i, a;
            return e = t, (i = [{
                key: "xLabelFormat", value: function (t, e, i) {
                    var a = this.w;
                    return "datetime" === a.config.xaxis.type && void 0 === a.config.xaxis.labels.formatter && void 0 === a.config.tooltip.x.formatter ? new D(this.ctx).formatDate(new Date(e), a.config.tooltip.x.format) : t(e, i)
                }
            }, {
                key: "setLabelFormatters", value: function () {
                    var t = this.w;
                    return t.globals.xLabelFormatter = function (t) {
                        return t
                    }, t.globals.xaxisTooltipFormatter = function (t) {
                        return t
                    }, t.globals.ttKeyFormatter = function (t) {
                        return t
                    }, t.globals.ttZFormatter = function (t) {
                        return t
                    }, t.globals.legendFormatter = function (t) {
                        return t
                    }, void 0 !== t.config.xaxis.labels.formatter ? t.globals.xLabelFormatter = t.config.xaxis.labels.formatter : t.globals.xLabelFormatter = function (e) {
                        return n.isNumber(e) ? "numeric" === t.config.xaxis.type && t.globals.dataPoints < 50 ? e.toFixed(1) : t.globals.isBarHorizontal && t.globals.maxY - t.globals.minYArr < 4 ? e.toFixed(1) : e.toFixed(0) : e
                    }, "function" == typeof t.config.tooltip.x.formatter ? t.globals.ttKeyFormatter = t.config.tooltip.x.formatter : t.globals.ttKeyFormatter = t.globals.xLabelFormatter, "function" == typeof t.config.xaxis.tooltip.formatter && (t.globals.xaxisTooltipFormatter = t.config.xaxis.tooltip.formatter), Array.isArray(t.config.tooltip.y) ? t.globals.ttVal = t.config.tooltip.y : void 0 !== t.config.tooltip.y.formatter && (t.globals.ttVal = t.config.tooltip.y), void 0 !== t.config.tooltip.z.formatter && (t.globals.ttZFormatter = t.config.tooltip.z.formatter), void 0 !== t.config.legend.formatter && (t.globals.legendFormatter = t.config.legend.formatter), t.config.yaxis.forEach((function (e, i) {
                        void 0 !== e.labels.formatter ? t.globals.yLabelFormatters[i] = e.labels.formatter : t.globals.yLabelFormatters[i] = function (a) {
                            return t.globals.xyCharts && n.isNumber(a) ? 0 !== t.globals.yValueDecimal ? a.toFixed(void 0 !== e.decimalsInFloat ? e.decimalsInFloat : t.globals.yValueDecimal) : t.globals.maxYArr[i] - t.globals.minYArr[i] < 10 ? a.toFixed(1) : a.toFixed(0) : a
                        }
                    })), t.globals
                }
            }, {
                key: "heatmapLabelFormatters", value: function () {
                    var t = this.w;
                    if ("heatmap" === t.config.chart.type) {
                        t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
                        var e = t.globals.seriesNames.reduce((function (t, e) {
                            return t.length > e.length ? t : e
                        }), 0);
                        t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e
                    }
                }
            }]) && R(e.prototype, i), a && R(e, a), t
        }();

        function H(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var N = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "getLabel", value: function (t, e, i, a) {
                    var s, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [], n = this.w,
                        o = void 0 === t[a] ? "" : t[a], l = n.globals.xLabelFormatter,
                        h = n.config.xaxis.labels.formatter, c = !1, d = new F(this.ctx), u = o;
                    s = d.xLabelFormat(l, o, u), void 0 !== h && (s = h(o, t[a], a));
                    var g = function (t) {
                        var i = null;
                        return e.forEach((function (t) {
                            "month" === t.unit ? i = "year" : "day" === t.unit ? i = "month" : "hour" === t.unit ? i = "day" : "minute" === t.unit && (i = "hour")
                        })), i === t
                    };
                    return e.length > 0 ? (c = g(e[a].unit), i = e[a].position, s = e[a].value) : "datetime" === n.config.xaxis.type && void 0 === h && (s = ""), void 0 === s && (s = ""), (0 === (s = s.toString()).indexOf("NaN") || 0 === s.toLowerCase().indexOf("invalid") || s.toLowerCase().indexOf("infinity") >= 0 || r.indexOf(s) >= 0 && !n.config.xaxis.labels.showDuplicates) && (s = ""), {
                        x: i,
                        text: s,
                        isBold: c
                    }
                }
            }, {
                key: "drawYAxisTicks", value: function (t, e, i, a, s, r, n) {
                    var o = this.w, l = new p(this.ctx), h = o.globals.translateY;
                    if (a.show && e > 0) {
                        !0 === o.config.yaxis[s].opposite && (t += a.width);
                        for (var c = e; c >= 0; c--) {
                            var d = h + e / 10 + o.config.yaxis[s].labels.offsetY - 1;
                            o.globals.isBarHorizontal && (d = r * c), "heatmap" === o.config.chart.type && (d += r / 2);
                            var u = l.drawLine(t + i.offsetX - a.width + a.offsetX, d + a.offsetY, t + i.offsetX + a.offsetX, d + a.offsetY, a.color);
                            n.add(u), h += r
                        }
                    }
                }
            }]) && H(e.prototype, i), a && H(e, a), t
        }();

        function W(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var B = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w;
                var i = this.w;
                this.xaxisLabels = i.globals.labels.slice(), i.globals.timescaleLabels.length > 0 && !i.globals.isBarHorizontal && (this.xaxisLabels = i.globals.timescaleLabels.slice()), this.drawnLabels = [], "top" === i.config.xaxis.position ? this.offY = 0 : this.offY = i.globals.gridHeight + 1, this.offY = this.offY + i.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === i.config.chart.type && i.config.plotOptions.bar.horizontal, this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.xaxisBorderWidth = i.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = i.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = i.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = i.config.xaxis.axisBorder.height, this.yaxis = i.config.yaxis[0], this.axesUtils = new N(e)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "drawXaxis", value: function () {
                    var t, e = this.w, i = new p(this.ctx), a = i.group({
                        class: "apexcharts-xaxis",
                        transform: "translate(".concat(e.config.xaxis.offsetX, ", ").concat(e.config.xaxis.offsetY, ")")
                    }), s = i.group({
                        class: "apexcharts-xaxis-texts-g",
                        transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")")
                    });
                    a.add(s);
                    for (var r = e.globals.padHorizontal, n = [], o = 0; o < this.xaxisLabels.length; o++) n.push(this.xaxisLabels[o]);
                    r = e.globals.isXNumeric ? r + (t = e.globals.gridWidth / (n.length - 1)) / 2 + e.config.xaxis.labels.offsetX : r + (t = e.globals.gridWidth / n.length) + e.config.xaxis.labels.offsetX;
                    var l = n.length;
                    if (e.config.xaxis.labels.show) for (var h = 0; h <= l - 1; h++) {
                        var c = r - t / 2 + e.config.xaxis.labels.offsetX,
                            d = this.axesUtils.getLabel(n, e.globals.timescaleLabels, c, h, this.drawnLabels);
                        this.drawnLabels.push(d.text);
                        var u = 28;
                        e.globals.rotateXLabels && (u = 22);
                        var g = i.drawText({
                            x: d.x,
                            y: this.offY + e.config.xaxis.labels.offsetY + u,
                            text: "",
                            textAnchor: "middle",
                            fontWeight: d.isBold ? 600 : 400,
                            fontSize: this.xaxisFontSize,
                            fontFamily: this.xaxisFontFamily,
                            foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[h] : this.xaxisForeColors,
                            cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
                        });
                        if (0 === h) {
                            var f = i.getTextRects(d.text),
                                x = e.globals.rotateXLabels || e.config.xaxis.labels.rotateAlways ? 1 : 2;
                            (e.globals.skipFirstTimelinelabel || d.x + f.width / x > e.globals.dom.elGraphical.x() && d.x <= 0) && (d.text = "")
                        }
                        if (h === l - 1) {
                            var b = i.getTextRects(d.text);
                            (e.globals.skipLastTimelinelabel || b.width / 2 + d.x > e.globals.gridWidth + e.globals.x2SpaceAvailable || d.x > e.globals.gridWidth) && (d.text = "")
                        }
                        s.add(g), i.addTspan(g, d.text, this.xaxisFontFamily);
                        var v = document.createElementNS(e.globals.SVGNS, "title");
                        v.textContent = d.text, g.node.appendChild(v), r += t
                    }
                    if (void 0 !== e.config.xaxis.title.text) {
                        var m = i.group({class: "apexcharts-xaxis-title"}), y = i.drawText({
                            x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX,
                            y: this.offY - parseFloat(this.xaxisFontSize) + e.globals.xAxisLabelsHeight + e.config.xaxis.title.offsetY,
                            text: e.config.xaxis.title.text,
                            textAnchor: "middle",
                            fontSize: e.config.xaxis.title.style.fontSize,
                            fontFamily: e.config.xaxis.title.style.fontFamily,
                            foreColor: e.config.xaxis.title.style.color,
                            cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass
                        });
                        m.add(y), a.add(m)
                    }
                    if (e.config.xaxis.axisBorder.show) {
                        var w = 0;
                        "bar" === e.config.chart.type && e.globals.isXNumeric && (w -= 15);
                        var k = i.drawLine(e.globals.padHorizontal + w + e.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, e.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                        a.add(k)
                    }
                    return a
                }
            }, {
                key: "drawXaxisInversed", value: function (t) {
                    var e, i, a = this.w, s = new p(this.ctx),
                        r = a.config.yaxis[0].opposite ? a.globals.translateYAxisX[t] : 0,
                        n = s.group({class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t}), o = s.group({
                            class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
                            transform: "translate(" + r + ", 0)"
                        });
                    n.add(o);
                    var l = [];
                    if (a.config.yaxis[t].show) for (var h = 0; h < this.xaxisLabels.length; h++) l.push(this.xaxisLabels[h]);
                    i = -(e = a.globals.gridHeight / l.length) / 2.2;
                    var c = a.globals.yLabelFormatters[0], d = a.config.yaxis[0].labels;
                    if (d.show) for (var u = 0; u <= l.length - 1; u++) {
                        var g = void 0 === l[u] ? "" : l[u];
                        g = c(g, {seriesIndex: t, dataPointIndex: u, w: a});
                        var f = s.drawText({
                            x: d.offsetX - 15,
                            y: i + e + d.offsetY,
                            text: g,
                            textAnchor: this.yaxis.opposite ? "start" : "end",
                            foreColor: d.style.color ? d.style.color : d.style.colors[u],
                            fontSize: d.style.fontSize,
                            fontFamily: d.style.fontFamily,
                            cssClass: "apexcharts-yaxis-label " + d.style.cssClass
                        });
                        if (o.add(f), 0 !== a.config.yaxis[t].labels.rotate) {
                            var x = s.rotateAroundCenter(f.node);
                            f.node.setAttribute("transform", "rotate(".concat(a.config.yaxis[t].labels.rotate, " 0 ").concat(x.y, ")"))
                        }
                        i += e
                    }
                    if (void 0 !== a.config.yaxis[0].title.text) {
                        var b = s.group({
                            class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
                            transform: "translate(" + r + ", 0)"
                        }), v = s.drawText({
                            x: 0,
                            y: a.globals.gridHeight / 2,
                            text: a.config.yaxis[0].title.text,
                            textAnchor: "middle",
                            foreColor: a.config.yaxis[0].title.style.color,
                            fontSize: a.config.yaxis[0].title.style.fontSize,
                            fontFamily: a.config.yaxis[0].title.style.fontFamily,
                            cssClass: "apexcharts-yaxis-title-text " + a.config.yaxis[0].title.style.cssClass
                        });
                        b.add(v), n.add(b)
                    }
                    var m = 0;
                    this.isCategoryBarHorizontal && a.config.yaxis[0].opposite && (m = a.globals.gridWidth);
                    var y = a.config.xaxis.axisBorder;
                    if (y.show) {
                        var w = s.drawLine(a.globals.padHorizontal + y.offsetX + m, 1 + y.offsetY, a.globals.padHorizontal + y.offsetX + m, a.globals.gridHeight + y.offsetY, y.color, 0);
                        n.add(w)
                    }
                    return a.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(m, l.length, a.config.yaxis[0].axisBorder, a.config.yaxis[0].axisTicks, 0, e, n), n
                }
            }, {
                key: "drawXaxisTicks", value: function (t, e) {
                    var i = this.w, a = t;
                    if (!(t < 0 || t - 2 > i.globals.gridWidth)) {
                        var s = this.offY + i.config.xaxis.axisTicks.offsetY, r = s + i.config.xaxis.axisTicks.height;
                        if (i.config.xaxis.axisTicks.show) {
                            var n = new p(this.ctx).drawLine(t + i.config.xaxis.axisTicks.offsetX, s + i.config.xaxis.offsetY, a + i.config.xaxis.axisTicks.offsetX, r + i.config.xaxis.offsetY, i.config.xaxis.axisTicks.color);
                            e.add(n), n.node.classList.add("apexcharts-xaxis-tick")
                        }
                    }
                }
            }, {
                key: "getXAxisTicksPositions", value: function () {
                    var t = this.w, e = [], i = this.xaxisLabels.length, a = t.globals.padHorizontal;
                    if (t.globals.timescaleLabels.length > 0) for (var s = 0; s < i; s++) a = this.xaxisLabels[s].position, e.push(a); else for (var r = i, n = 0; n < r; n++) {
                        var o = r;
                        t.globals.isXNumeric && "bar" !== t.config.chart.type && (o -= 1), a += t.globals.gridWidth / o, e.push(a)
                    }
                    return e
                }
            }, {
                key: "xAxisLabelCorrections", value: function () {
                    var t = this.w, e = new p(this.ctx),
                        i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
                        a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),
                        s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
                        r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text");
                    if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways) for (var n = 0; n < a.length; n++) {
                        var o = e.rotateAroundCenter(a[n]);
                        o.y = o.y - 1, o.x = o.x + 1, a[n].setAttribute("transform", "rotate(".concat(t.config.xaxis.labels.rotate, " ").concat(o.x, " ").concat(o.y, ")")), a[n].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0, ".concat(-10, ")"));
                        var l = a[n].childNodes;
                        t.config.xaxis.labels.trim && e.placeTextWithEllipsis(l[0], l[0].textContent, t.config.xaxis.labels.maxHeight - ("bottom" === t.config.legend.position ? 20 : 10))
                    } else for (var h = t.globals.gridWidth / (t.globals.labels.length + 1), c = 0; c < a.length; c++) {
                        var d = a[c].childNodes;
                        t.config.xaxis.labels.trim && "datetime" !== t.config.xaxis.type && e.placeTextWithEllipsis(d[0], d[0].textContent, h)
                    }
                    if (s.length > 0) {
                        var u = s[s.length - 1].getBBox(), g = s[0].getBBox();
                        u.x < -20 && s[s.length - 1].parentNode.removeChild(s[s.length - 1]), g.x + g.width > t.globals.gridWidth && !t.globals.isBarHorizontal && s[0].parentNode.removeChild(s[0]);
                        for (var f = 0; f < r.length; f++) e.placeTextWithEllipsis(r[f], r[f].textContent, t.config.yaxis[0].labels.maxWidth - 2 * parseFloat(t.config.yaxis[0].title.style.fontSize) - 20)
                    }
                }
            }]) && W(e.prototype, i), a && W(e, a), t
        }();

        function j(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var V = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w;
                var i = this.w;
                this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.axisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === i.config.chart.type && i.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, "bottom" === i.config.xaxis.position && (this.xAxisoffX = i.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new N(e)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "drawYaxis", value: function (t) {
                    var e = this.w, i = new p(this.ctx), a = e.config.yaxis[t].labels.style.fontSize,
                        s = e.config.yaxis[t].labels.style.fontFamily, r = i.group({
                            class: "apexcharts-yaxis",
                            rel: t,
                            transform: "translate(" + e.globals.translateYAxisX[t] + ", 0)"
                        });
                    if (!e.config.yaxis[t].show) return r;
                    var n = i.group({class: "apexcharts-yaxis-texts-g"});
                    r.add(n);
                    var o = e.globals.yAxisScale[t].result.length - 1, l = e.globals.gridHeight / o,
                        h = e.globals.translateY, c = e.globals.yLabelFormatters[t],
                        d = e.globals.yAxisScale[t].result.slice();
                    e.config.yaxis[t] && e.config.yaxis[t].reversed && d.reverse();
                    var u = "";
                    if (e.config.yaxis[t].labels.show) for (var g = o; g >= 0; g--) {
                        var f = d[g];
                        f = c(f, g);
                        var x = e.config.yaxis[t].labels.padding;
                        e.config.yaxis[t].opposite && 0 !== e.config.yaxis.length && (x *= -1);
                        var b = i.drawText({
                            x: x,
                            y: h + o / 10 + e.config.yaxis[t].labels.offsetY + 1,
                            text: f,
                            textAnchor: e.config.yaxis[t].opposite ? "start" : "end",
                            fontSize: a,
                            fontFamily: s,
                            foreColor: e.config.yaxis[t].labels.style.color,
                            cssClass: "apexcharts-yaxis-label " + e.config.yaxis[t].labels.style.cssClass
                        });
                        if (g === o && (u = b), n.add(b), 0 !== e.config.yaxis[t].labels.rotate) {
                            var v = i.rotateAroundCenter(u.node), m = i.rotateAroundCenter(b.node);
                            b.node.setAttribute("transform", "rotate(".concat(e.config.yaxis[t].labels.rotate, " ").concat(v.x, " ").concat(m.y, ")"))
                        }
                        h += l
                    }
                    if (void 0 !== e.config.yaxis[t].title.text) {
                        var y = i.group({class: "apexcharts-yaxis-title"}), w = 0;
                        e.config.yaxis[t].opposite && (w = e.globals.translateYAxisX[t]);
                        var k = i.drawText({
                            x: w,
                            y: e.globals.gridHeight / 2 + e.globals.translateY + e.config.yaxis[t].title.offsetY,
                            text: e.config.yaxis[t].title.text,
                            textAnchor: "end",
                            foreColor: e.config.yaxis[t].title.style.color,
                            fontSize: e.config.yaxis[t].title.style.fontSize,
                            fontFamily: e.config.yaxis[t].title.style.fontFamily,
                            cssClass: "apexcharts-yaxis-title-text " + e.config.yaxis[t].title.style.cssClass
                        });
                        y.add(k), r.add(y)
                    }
                    var S = e.config.yaxis[t].axisBorder, A = 31 + S.offsetX;
                    if (e.config.yaxis[t].opposite && (A = -31 - S.offsetX), S.show) {
                        var C = i.drawLine(A, e.globals.translateY + S.offsetY - 2, A, e.globals.gridHeight + e.globals.translateY + S.offsetY + 2, S.color, 0, S.width);
                        r.add(C)
                    }
                    return e.config.yaxis[t].axisTicks.show && this.axesUtils.drawYAxisTicks(A, o, S, e.config.yaxis[t].axisTicks, t, l, r), r
                }
            }, {
                key: "drawYaxisInversed", value: function (t) {
                    var e = this.w, i = new p(this.ctx),
                        a = i.group({class: "apexcharts-xaxis apexcharts-yaxis-inversed"}), s = i.group({
                            class: "apexcharts-xaxis-texts-g",
                            transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")")
                        });
                    a.add(s);
                    var r = e.globals.yAxisScale[t].result.length - 1, n = e.globals.gridWidth / r + .1,
                        o = n + e.config.xaxis.labels.offsetX, l = e.globals.xLabelFormatter,
                        h = e.globals.yAxisScale[t].result.slice(), c = e.globals.timescaleLabels;
                    c.length > 0 && (this.xaxisLabels = c.slice(), r = (h = c.slice()).length), e.config.yaxis[t] && e.config.yaxis[t].reversed && h.reverse();
                    var d = c.length;
                    if (e.config.xaxis.labels.show) for (var u = d ? 0 : r; d ? u < d : u >= 0; d ? u++ : u--) {
                        var g = h[u];
                        g = l(g, u);
                        var f = e.globals.gridWidth + e.globals.padHorizontal - (o - n + e.config.xaxis.labels.offsetX);
                        if (c.length) {
                            var x = this.axesUtils.getLabel(h, c, f, u, this.drawnLabels);
                            f = x.x, g = x.text, this.drawnLabels.push(x.text), 0 === u && e.globals.skipFirstTimelinelabel && (g = ""), u === h.length - 1 && e.globals.skipLastTimelinelabel && (g = "")
                        }
                        var b = i.drawText({
                            x: f,
                            y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30,
                            text: "",
                            textAnchor: "middle",
                            foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
                            fontSize: this.xaxisFontSize,
                            fontFamily: this.xaxisFontFamily,
                            cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
                        });
                        s.add(b), b.tspan(g);
                        var v = document.createElementNS(e.globals.SVGNS, "title");
                        v.textContent = g, b.node.appendChild(v), o += n
                    }
                    if (void 0 !== e.config.xaxis.title.text) {
                        var m = i.group({class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"}),
                            y = i.drawText({
                                x: e.globals.gridWidth / 2,
                                y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e.config.xaxis.title.style.fontSize) + 20,
                                text: e.config.xaxis.title.text,
                                textAnchor: "middle",
                                fontSize: e.config.xaxis.title.style.fontSize,
                                fontFamily: e.config.xaxis.title.style.fontFamily,
                                cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass
                            });
                        m.add(y), a.add(m)
                    }
                    var w = e.config.xaxis.axisBorder;
                    if (w.show) {
                        var k = 0;
                        "bar" === e.config.chart.type && e.globals.isXNumeric && (k -= 15);
                        var S = i.drawLine(e.globals.padHorizontal + k + w.offsetX, this.xAxisoffX, e.globals.gridWidth, this.xAxisoffX, w.color, 0, w.height);
                        a.add(S)
                    }
                    return a
                }
            }, {
                key: "yAxisTitleRotate", value: function (t, e) {
                    var i = this.w, a = new p(this.ctx), s = {width: 0, height: 0}, r = {width: 0, height: 0},
                        n = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
                    null !== n && (s = n.getBoundingClientRect());
                    var o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text"));
                    if (null !== o && (r = o.getBoundingClientRect()), null !== o) {
                        var l = this.xPaddingForYAxisTitle(t, s, r, e);
                        o.setAttribute("x", l.xPos - (e ? 10 : 0))
                    }
                    if (null !== o) {
                        var h = a.rotateAroundCenter(o);
                        e ? o.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].title.rotate, " ").concat(h.x, " ").concat(h.y, ")")) : o.setAttribute("transform", "rotate(-".concat(i.config.yaxis[t].title.rotate, " ").concat(h.x, " ").concat(h.y, ")"))
                    }
                }
            }, {
                key: "xPaddingForYAxisTitle", value: function (t, e, i, a) {
                    var s = this.w, r = 0, n = 0, o = 10;
                    return void 0 === s.config.yaxis[t].title.text || t < 0 ? {
                        xPos: n,
                        padd: 0
                    } : (a ? (n = e.width + s.config.yaxis[t].title.offsetX + i.width / 2 + o / 2, 0 === (r += 1) && (n -= o / 2)) : (n = -1 * e.width + s.config.yaxis[t].title.offsetX + o / 2 + i.width / 2, s.globals.isBarHorizontal && (o = 25, n = -1 * e.width - s.config.yaxis[t].title.offsetX - o)), {
                        xPos: n,
                        padd: o
                    })
                }
            }, {
                key: "setYAxisXPosition", value: function (t, e) {
                    var i = this.w, a = 0, s = 0, r = 21, n = 1;
                    i.config.yaxis.length > 1 && (this.multipleYs = !0), i.config.yaxis.map((function (o, l) {
                        var h = i.globals.ignoreYAxisIndexes.indexOf(l) > -1 || !o.show || o.floating || 0 === t[l].width,
                            c = t[l].width + e[l].width;
                        o.opposite ? i.globals.isBarHorizontal ? (s = i.globals.gridWidth + i.globals.translateX - 1, i.globals.translateYAxisX[l] = s - o.labels.offsetX) : (s = i.globals.gridWidth + i.globals.translateX + n, h || (n = n + c + 20), i.globals.translateYAxisX[l] = s - o.labels.offsetX + 20) : (a = i.globals.translateX - r, h || (r = r + c + 20), i.globals.translateYAxisX[l] = a + o.labels.offsetX)
                    }))
                }
            }, {
                key: "setYAxisTextAlignments", value: function () {
                    var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis");
                    (e = n.listToArray(e)).forEach((function (e, i) {
                        var a = t.config.yaxis[i];
                        if (void 0 !== a.labels.align) {
                            var s = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-texts-g")),
                                r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i, "'] .apexcharts-yaxis-label"));
                            r = n.listToArray(r);
                            var o = s.getBoundingClientRect();
                            "left" === a.labels.align ? (r.forEach((function (t, e) {
                                t.setAttribute("text-anchor", "start")
                            })), a.opposite || s.setAttribute("transform", "translate(-".concat(o.width, ", 0)"))) : "center" === a.labels.align ? (r.forEach((function (t, e) {
                                t.setAttribute("text-anchor", "middle")
                            })), s.setAttribute("transform", "translate(".concat(o.width / 2 * (a.opposite ? 1 : -1), ", 0)"))) : "right" === a.labels.align && (r.forEach((function (t, e) {
                                t.setAttribute("text-anchor", "end")
                            })), a.opposite && s.setAttribute("transform", "translate(".concat(o.width, ", 0)")))
                        }
                    }))
                }
            }]) && j(e.prototype, i), a && j(e, a), t
        }();

        function G(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var _ = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "drawAxis", value: function (t, e) {
                    var i, a, s = this.w.globals, r = this.w.config, n = new B(this.ctx), o = new V(this.ctx);
                    s.axisCharts && "radar" !== t && (s.isBarHorizontal ? (a = o.drawYaxisInversed(0), i = n.drawXaxisInversed(0), s.dom.elGraphical.add(i), s.dom.elGraphical.add(a)) : (i = n.drawXaxis(), s.dom.elGraphical.add(i), r.yaxis.map((function (t, e) {
                        -1 === s.ignoreYAxisIndexes.indexOf(e) && (a = o.drawYaxis(e), s.dom.Paper.add(a))
                    })))), r.yaxis.map((function (t, e) {
                        -1 === s.ignoreYAxisIndexes.indexOf(e) && o.yAxisTitleRotate(e, t.opposite)
                    }))
                }
            }]) && G(e.prototype, i), a && G(e, a), t
        }();

        function U(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var q = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.opts = e
            }

            var e, i, a;
            return e = t, a = [{
                key: "convertCatToNumeric", value: function (t) {
                    t.xaxis.type = "numeric", t.xaxis.convertedCatToNumeric = !0, t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function (t) {
                        return t
                    }, t.chart = t.chart || {}, t.chart.zoom = t.chart.zoom || window.Apex.chart && window.Apex.chart.zoom || {};
                    var e = t.xaxis.labels.formatter,
                        i = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels;
                    return i && i.length && (t.xaxis.labels.formatter = function (t) {
                        return e(i[t - 1])
                    }), t.xaxis.categories = [], t.labels = [], t.chart.zoom.enabled = t.chart.zoom.enabled || !1, t
                }
            }], (i = [{
                key: "line", value: function () {
                    return {
                        chart: {animations: {easing: "swing"}},
                        dataLabels: {enabled: !1},
                        stroke: {width: 5, curve: "straight"},
                        markers: {size: 0, hover: {sizeOffset: 6}},
                        xaxis: {crosshairs: {width: 1}}
                    }
                }
            }, {
                key: "sparkline", value: function (t) {
                    return this.opts.yaxis[0].labels.show = !1, this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0, n.extend(t, {
                        grid: {
                            show: !1,
                            padding: {left: 0, right: 0, top: 0, bottom: 0}
                        },
                        legend: {show: !1},
                        xaxis: {
                            labels: {show: !1},
                            tooltip: {enabled: !1},
                            axisBorder: {show: !1},
                            axisTicks: {show: !1}
                        },
                        chart: {toolbar: {show: !1}, zoom: {enabled: !1}},
                        dataLabels: {enabled: !1}
                    })
                }
            }, {
                key: "bar", value: function () {
                    return {
                        chart: {stacked: !1, animations: {easing: "swing"}},
                        plotOptions: {bar: {dataLabels: {position: "center"}}},
                        dataLabels: {style: {colors: ["#fff"]}},
                        stroke: {width: 0},
                        fill: {opacity: .85},
                        legend: {markers: {shape: "square", radius: 2, size: 8}},
                        tooltip: {shared: !1},
                        xaxis: {
                            tooltip: {enabled: !1},
                            crosshairs: {
                                width: "barWidth",
                                position: "back",
                                fill: {type: "gradient"},
                                dropShadow: {enabled: !1},
                                stroke: {width: 0}
                            }
                        }
                    }
                }
            }, {
                key: "candlestick", value: function () {
                    return {
                        stroke: {width: 1, colors: ["#333"]},
                        dataLabels: {enabled: !1},
                        tooltip: {
                            shared: !0, custom: function (t) {
                                var e = t.seriesIndex, i = t.dataPointIndex, a = t.w;
                                return '<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">' + a.globals.seriesCandleO[e][i] + '</span></div><div>High: <span class="value">' + a.globals.seriesCandleH[e][i] + '</span></div><div>Low: <span class="value">' + a.globals.seriesCandleL[e][i] + '</span></div><div>Close: <span class="value">' + a.globals.seriesCandleC[e][i] + "</span></div></div>"
                            }
                        },
                        states: {active: {filter: {type: "none"}}},
                        xaxis: {crosshairs: {width: 1}}
                    }
                }
            }, {
                key: "rangeBar", value: function () {
                    return {
                        stroke: {width: 0},
                        plotOptions: {bar: {dataLabels: {position: "center"}}},
                        dataLabels: {
                            enabled: !1, formatter: function (t, e) {
                                e.ctx;
                                var i = e.seriesIndex, a = e.dataPointIndex, s = e.w,
                                    r = s.globals.seriesRangeStart[i][a];
                                return s.globals.seriesRangeEnd[i][a] - r
                            }, style: {colors: ["#fff"]}
                        },
                        tooltip: {
                            shared: !1, followCursor: !0, custom: function (t) {
                                var e = t.ctx, i = t.seriesIndex, a = t.dataPointIndex, s = t.y1, r = t.y2, n = t.w,
                                    o = n.globals.seriesRangeStart[i][a], l = n.globals.seriesRangeEnd[i][a],
                                    h = n.globals.labels[a];
                                s && r && (o = s, l = r, n.config.series[i].data[a].x && (h = n.config.series[i].data[a].x));
                                var c = "", d = "", u = n.globals.colors[i];
                                if (void 0 === n.config.tooltip.x.formatter) if ("datetime" === n.config.xaxis.type) {
                                    var g = new D(e);
                                    c = g.formatDate(new Date(o), n.config.tooltip.x.format), d = g.formatDate(new Date(l), n.config.tooltip.x.format)
                                } else c = o, d = l; else c = n.config.tooltip.x.formatter(o), d = n.config.tooltip.x.formatter(l);
                                return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + u + '">' + (n.config.series[i].name ? n.config.series[i].name : "") + '</span></div><div> <span class="category">' + h + ': </span> <span class="value start-value">' + c + '</span> <span class="separator">-</span> <span class="value end-value">' + d + "</span></div></div>"
                            }
                        },
                        xaxis: {tooltip: {enabled: !1}, crosshairs: {stroke: {width: 0}}}
                    }
                }
            }, {
                key: "area", value: function () {
                    return {
                        stroke: {width: 4},
                        fill: {
                            type: "gradient",
                            gradient: {
                                inverseColors: !1,
                                shade: "light",
                                type: "vertical",
                                opacityFrom: .65,
                                opacityTo: .5,
                                stops: [0, 100, 100]
                            }
                        },
                        markers: {size: 0, hover: {sizeOffset: 6}},
                        tooltip: {followCursor: !1}
                    }
                }
            }, {
                key: "brush", value: function (t) {
                    return n.extend(t, {
                        chart: {toolbar: {autoSelected: "selection", show: !1}, zoom: {enabled: !1}},
                        dataLabels: {enabled: !1},
                        stroke: {width: 1},
                        tooltip: {enabled: !1},
                        xaxis: {tooltip: {enabled: !1}}
                    })
                }
            }, {
                key: "stacked100", value: function () {
                    var t = this;
                    this.opts.dataLabels = this.opts.dataLabels || {}, this.opts.dataLabels.formatter = this.opts.dataLabels.formatter || void 0;
                    var e = this.opts.dataLabels.formatter;
                    this.opts.yaxis.forEach((function (e, i) {
                        t.opts.yaxis[i].min = 0, t.opts.yaxis[i].max = 100
                    })), "bar" === this.opts.chart.type && (this.opts.dataLabels.formatter = e || function (t) {
                        return "number" == typeof t && t ? t.toFixed(0) + "%" : t
                    })
                }
            }, {
                key: "bubble", value: function () {
                    return {
                        dataLabels: {style: {colors: ["#fff"]}},
                        tooltip: {shared: !1, intersect: !0},
                        xaxis: {crosshairs: {width: 0}},
                        fill: {
                            type: "solid",
                            gradient: {shade: "light", inverse: !0, shadeIntensity: .55, opacityFrom: .4, opacityTo: .8}
                        }
                    }
                }
            }, {
                key: "scatter", value: function () {
                    return {
                        dataLabels: {enabled: !1},
                        tooltip: {shared: !1, intersect: !0},
                        markers: {size: 6, strokeWidth: 1, hover: {sizeOffset: 2}}
                    }
                }
            }, {
                key: "heatmap", value: function () {
                    return {
                        chart: {stacked: !1, zoom: {enabled: !1}},
                        fill: {opacity: 1},
                        dataLabels: {style: {colors: ["#fff"]}},
                        stroke: {colors: ["#fff"]},
                        tooltip: {followCursor: !0, marker: {show: !1}, x: {show: !1}},
                        legend: {position: "top", markers: {shape: "square", size: 10, offsetY: 2}},
                        grid: {padding: {right: 20}}
                    }
                }
            }, {
                key: "pie", value: function () {
                    return {
                        chart: {toolbar: {show: !1}},
                        plotOptions: {pie: {donut: {labels: {show: !1}}}},
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            }, style: {colors: ["#fff"]}, dropShadow: {enabled: !0}
                        },
                        stroke: {colors: ["#fff"]},
                        fill: {
                            opacity: 1,
                            gradient: {shade: "dark", shadeIntensity: .35, inverseColors: !1, stops: [0, 100, 100]}
                        },
                        padding: {right: 0, left: 0},
                        tooltip: {theme: "dark", fillSeriesColor: !0},
                        legend: {position: "right"}
                    }
                }
            }, {
                key: "donut", value: function () {
                    return {
                        chart: {toolbar: {show: !1}},
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            }, style: {colors: ["#fff"]}, dropShadow: {enabled: !0}
                        },
                        stroke: {colors: ["#fff"]},
                        fill: {
                            opacity: 1,
                            gradient: {
                                shade: "dark",
                                shadeIntensity: .4,
                                inverseColors: !1,
                                type: "vertical",
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [70, 98, 100]
                            }
                        },
                        padding: {right: 0, left: 0},
                        tooltip: {theme: "dark", fillSeriesColor: !0},
                        legend: {position: "right"}
                    }
                }
            }, {
                key: "radar", value: function () {
                    return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, {
                        dataLabels: {
                            enabled: !1,
                            style: {fontSize: "11px"}
                        },
                        stroke: {width: 2},
                        markers: {size: 3, strokeWidth: 1, strokeOpacity: 1},
                        fill: {opacity: .2},
                        tooltip: {shared: !1, intersect: !0, followCursor: !0},
                        grid: {show: !1},
                        xaxis: {
                            labels: {
                                formatter: function (t) {
                                    return t
                                }, style: {colors: ["#a8a8a8"], fontSize: "11px"}
                            }, tooltip: {enabled: !1}, crosshairs: {show: !1}
                        }
                    }
                }
            }, {
                key: "radialBar", value: function () {
                    return {
                        chart: {animations: {dynamicAnimation: {enabled: !0, speed: 800}}, toolbar: {show: !1}},
                        fill: {
                            gradient: {
                                shade: "dark",
                                shadeIntensity: .4,
                                inverseColors: !1,
                                type: "diagonal2",
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [70, 98, 100]
                            }
                        },
                        padding: {right: 0, left: 0},
                        legend: {show: !1, position: "right"},
                        tooltip: {enabled: !1, fillSeriesColor: !0}
                    }
                }
            }]) && U(e.prototype, i), a && U(e, a), t
        }();

        function Z(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var $ = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, a = [{
                key: "checkComboSeries", value: function (t) {
                    var e = !1, i = !1;
                    return t.length && void 0 !== t[0].type && (e = !0, t.forEach((function (t) {
                        "bar" !== t.type && "column" !== t.type || (i = !0)
                    }))), {comboCharts: e, comboChartsHasBars: i}
                }
            }, {
                key: "extendArrayProps", value: function (t, e) {
                    return e.yaxis && (e = t.extendYAxis(e)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e
                }
            }], (i = [{
                key: "getStackedSeriesTotals", value: function () {
                    var t = this.w, e = [];
                    if (0 === t.globals.series.length) return e;
                    for (var i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) {
                        for (var a = 0, s = 0; s < t.globals.series.length; s++) void 0 !== t.globals.series[s][i] && (a += t.globals.series[s][i]);
                        e.push(a)
                    }
                    return t.globals.stackedSeriesTotals = e, e
                }
            }, {
                key: "getSeriesTotalByIndex", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return null === t ? this.w.config.series.reduce((function (t, e) {
                        return t + e
                    }), 0) : this.w.globals.series[t].reduce((function (t, e) {
                        return t + e
                    }), 0)
                }
            }, {
                key: "isSeriesNull", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return 0 === (null === t ? this.w.config.series.filter((function (t) {
                        return null !== t
                    })) : this.w.globals.series[t].filter((function (t) {
                        return null !== t
                    }))).length
                }
            }, {
                key: "seriesHaveSameValues", value: function (t) {
                    return this.w.globals.series[t].every((function (t, e, i) {
                        return t === i[0]
                    }))
                }
            }, {
                key: "getLargestSeries", value: function () {
                    var t = this.w;
                    t.globals.maxValsInArrayIndex = t.globals.series.map((function (t) {
                        return t.length
                    })).indexOf(Math.max.apply(Math, t.globals.series.map((function (t) {
                        return t.length
                    }))))
                }
            }, {
                key: "getLargestMarkerSize", value: function () {
                    var t = this.w, e = 0;
                    return t.globals.markers.size.forEach((function (t) {
                        e = Math.max(e, t)
                    })), t.globals.markers.largestSize = e, e
                }
            }, {
                key: "getSeriesTotals", value: function () {
                    var t = this.w;
                    t.globals.seriesTotals = t.globals.series.map((function (t, e) {
                        var i = 0;
                        if (Array.isArray(t)) for (var a = 0; a < t.length; a++) i += t[a]; else i += t;
                        return i
                    }))
                }
            }, {
                key: "getSeriesTotalsXRange", value: function (t, e) {
                    var i = this.w;
                    return i.globals.series.map((function (a, s) {
                        for (var r = 0, n = 0; n < a.length; n++) i.globals.seriesX[s][n] > t && i.globals.seriesX[s][n] < e && (r += a[n]);
                        return r
                    }))
                }
            }, {
                key: "getPercentSeries", value: function () {
                    var t = this.w;
                    t.globals.seriesPercent = t.globals.series.map((function (e, i) {
                        var a = [];
                        if (Array.isArray(e)) for (var s = 0; s < e.length; s++) {
                            var r = t.globals.stackedSeriesTotals[s], n = 0;
                            r && (n = 100 * e[s] / r), a.push(n)
                        } else {
                            var o = 100 * e / t.globals.seriesTotals.reduce((function (t, e) {
                                return t + e
                            }), 0);
                            a.push(o)
                        }
                        return a
                    }))
                }
            }, {
                key: "getCalculatedRatios", value: function () {
                    var t, e, i, a, s = this.w.globals, r = [], n = 0, o = [], l = .1, h = 0;
                    if (s.yRange = [], s.isMultipleYAxis) for (var c = 0; c < s.minYArr.length; c++) s.yRange.push(Math.abs(s.minYArr[c] - s.maxYArr[c])), o.push(0); else s.yRange.push(Math.abs(s.minY - s.maxY));
                    s.xRange = Math.abs(s.maxX - s.minX), s.zRange = Math.abs(s.maxZ - s.minZ);
                    for (var d = 0; d < s.yRange.length; d++) r.push(s.yRange[d] / s.gridHeight);
                    if (e = s.xRange / s.gridWidth, i = Math.abs(s.initialmaxX - s.initialminX) / s.gridWidth, t = s.yRange / s.gridWidth, a = s.xRange / s.gridHeight, (n = s.zRange / s.gridHeight * 16) || (n = 1), s.minY !== Number.MIN_VALUE && 0 !== Math.abs(s.minY) && (s.hasNegs = !0), s.isMultipleYAxis) {
                        o = [];
                        for (var u = 0; u < r.length; u++) o.push(-s.minYArr[u] / r[u])
                    } else o.push(-s.minY / r[0]), s.minY !== Number.MIN_VALUE && 0 !== Math.abs(s.minY) && (l = -s.minY / t, h = s.minX / e);
                    return {
                        yRatio: r,
                        invertedYRatio: t,
                        zRatio: n,
                        xRatio: e,
                        initialXRatio: i,
                        invertedXRatio: a,
                        baseLineInvertedY: l,
                        baseLineY: o,
                        baseLineX: h
                    }
                }
            }, {
                key: "getLogSeries", value: function (t) {
                    var e = this.w;
                    return e.globals.seriesLog = t.map((function (t, i) {
                        return e.config.yaxis[i] && e.config.yaxis[i].logarithmic ? t.map((function (t) {
                            return null === t ? null : (Math.log(t) - Math.log(e.globals.minYArr[i])) / (Math.log(e.globals.maxYArr[i]) - Math.log(e.globals.minYArr[i]))
                        })) : t
                    })), e.globals.invalidLogScale ? t : e.globals.seriesLog
                }
            }, {
                key: "getLogYRatios", value: function (t) {
                    var e = this, i = this.w, a = this.w.globals;
                    return a.yLogRatio = t.slice(), a.logYRange = a.yRange.map((function (t, s) {
                        if (i.config.yaxis[s] && e.w.config.yaxis[s].logarithmic) {
                            var r, n = -Number.MAX_VALUE, o = Number.MIN_VALUE;
                            return a.seriesLog.forEach((function (t, e) {
                                t.forEach((function (t) {
                                    i.config.yaxis[e] && i.config.yaxis[e].logarithmic && (n = Math.max(t, n), o = Math.min(t, o))
                                }))
                            })), r = Math.pow(a.yRange[s], Math.abs(o - n) / a.yRange[s]), a.yLogRatio[s] = r / a.gridHeight, r
                        }
                    })), a.invalidLogScale ? t.slice() : a.yLogRatio
                }
            }]) && Z(e.prototype, i), a && Z(e, a), t
        }(), J = {
            show: !0,
            showAlways: !1,
            seriesName: void 0,
            opposite: !1,
            reversed: !1,
            logarithmic: !1,
            tickAmount: void 0,
            forceNiceScale: !1,
            max: void 0,
            min: void 0,
            floating: !1,
            decimalsInFloat: void 0,
            labels: {
                show: !0,
                minWidth: 0,
                maxWidth: 160,
                offsetX: 0,
                offsetY: 0,
                align: void 0,
                rotate: 0,
                padding: 20,
                style: {colors: [], fontSize: "11px", fontFamily: void 0, cssClass: ""},
                formatter: void 0
            },
            axisBorder: {show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0},
            axisTicks: {show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0},
            title: {
                text: void 0,
                rotate: 90,
                offsetY: 0,
                offsetX: 0,
                style: {color: void 0, fontSize: "11px", fontFamily: void 0, cssClass: ""}
            },
            tooltip: {enabled: !1, offsetX: 0},
            crosshairs: {show: !0, position: "front", stroke: {color: "#b6b6b6", width: 1, dashArray: 0}}
        }, Q = {
            type: "category",
            categories: [],
            offsetX: 0,
            offsetY: 0,
            labels: {
                show: !0,
                rotate: -45,
                rotateAlways: !1,
                hideOverlappingLabels: !0,
                trim: !0,
                minHeight: void 0,
                maxHeight: 120,
                showDuplicates: !0,
                style: {colors: [], fontSize: "12px", fontFamily: void 0, cssClass: ""},
                offsetX: 0,
                offsetY: 0,
                format: void 0,
                formatter: void 0,
                datetimeFormatter: {year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss"}
            },
            axisBorder: {show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0},
            axisTicks: {show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0},
            tickAmount: void 0,
            tickPlacement: "on",
            min: void 0,
            max: void 0,
            range: void 0,
            floating: !1,
            position: "bottom",
            title: {
                text: void 0,
                offsetX: 0,
                offsetY: 0,
                style: {color: void 0, fontSize: "12px", fontFamily: void 0, cssClass: ""}
            },
            crosshairs: {
                show: !0,
                width: 1,
                position: "back",
                opacity: .9,
                stroke: {color: "#b6b6b6", width: 1, dashArray: 3},
                fill: {
                    type: "solid",
                    color: "#B1B9C4",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: .4,
                        opacityTo: .5
                    }
                },
                dropShadow: {enabled: !1, left: 0, top: 0, blur: 1, opacity: .4}
            },
            tooltip: {enabled: !0, offsetY: 0, formatter: void 0, style: {fontSize: "12px", fontFamily: void 0}}
        }, K = i(0), tt = {
            animations: {
                enabled: !0,
                easing: "easeinout",
                speed: 800,
                animateGradually: {delay: 150, enabled: !0},
                dynamicAnimation: {enabled: !0, speed: 350}
            },
            background: "transparent",
            locales: [K],
            defaultLocale: "en",
            dropShadow: {enabled: !1, enabledSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: .35},
            events: {
                animationEnd: void 0,
                beforeMount: void 0,
                mounted: void 0,
                updated: void 0,
                click: void 0,
                mouseMove: void 0,
                legendClick: void 0,
                markerClick: void 0,
                selection: void 0,
                dataPointSelection: void 0,
                dataPointMouseEnter: void 0,
                dataPointMouseLeave: void 0,
                beforeZoom: void 0,
                zoomed: void 0,
                scrolled: void 0
            },
            foreColor: "#373d3f",
            fontFamily: "Helvetica, Arial, sans-serif",
            height: "auto",
            parentHeightOffset: 15,
            id: void 0,
            group: void 0,
            offsetX: 0,
            offsetY: 0,
            selection: {
                enabled: !1,
                type: "x",
                fill: {color: "#24292e", opacity: .1},
                stroke: {width: 1, color: "#24292e", opacity: .4, dashArray: 3},
                xaxis: {min: void 0, max: void 0},
                yaxis: {min: void 0, max: void 0}
            },
            sparkline: {enabled: !1},
            brush: {enabled: !1, autoScaleYaxis: !0, target: void 0},
            stacked: !1,
            stackType: "normal",
            toolbar: {
                show: !0,
                tools: {
                    download: !0,
                    selection: !0,
                    zoom: !0,
                    zoomin: !0,
                    zoomout: !0,
                    pan: !0,
                    reset: !0,
                    customIcons: []
                },
                autoSelected: "zoom"
            },
            type: "line",
            width: "100%",
            zoom: {
                enabled: !0,
                type: "x",
                autoScaleYaxis: !1,
                zoomedArea: {fill: {color: "#90CAF9", opacity: .4}, stroke: {color: "#0D47A1", opacity: .4, width: 1}}
            }
        }, et = {
            bar: {
                horizontal: !1,
                columnWidth: "70%",
                barHeight: "70%",
                distributed: !1,
                endingShape: "flat",
                colors: {ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1},
                dataLabels: {position: "top", maxItems: 100, hideOverflowingLabels: !0, orientation: "horizontal"}
            },
            bubble: {minBubbleRadius: void 0, maxBubbleRadius: void 0},
            candlestick: {colors: {upward: "#00B746", downward: "#EF403C"}, wick: {useFillColor: !0}},
            heatmap: {
                radius: 2,
                enableShades: !0,
                shadeIntensity: .5,
                reverseNegativeShade: !1,
                distributed: !1,
                colorScale: {inverse: !1, ranges: [], min: void 0, max: void 0}
            },
            radialBar: {
                size: void 0,
                inverseOrder: !1,
                startAngle: 0,
                endAngle: 360,
                offsetX: 0,
                offsetY: 0,
                hollow: {
                    margin: 5,
                    size: "50%",
                    background: "transparent",
                    image: void 0,
                    imageWidth: 150,
                    imageHeight: 150,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    imageClipped: !0,
                    position: "front",
                    dropShadow: {enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5}
                },
                track: {
                    show: !0,
                    startAngle: void 0,
                    endAngle: void 0,
                    background: "#f2f2f2",
                    strokeWidth: "97%",
                    opacity: 1,
                    margin: 5,
                    dropShadow: {enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: .5}
                },
                dataLabels: {
                    show: !0,
                    name: {show: !0, fontSize: "16px", fontFamily: void 0, color: void 0, offsetY: 0},
                    value: {
                        show: !0,
                        fontSize: "14px",
                        fontFamily: void 0,
                        color: void 0,
                        offsetY: 16,
                        formatter: function (t) {
                            return t + "%"
                        }
                    },
                    total: {
                        show: !1, label: "Total", color: void 0, formatter: function (t) {
                            return t.globals.seriesTotals.reduce((function (t, e) {
                                return t + e
                            }), 0) / t.globals.series.length + "%"
                        }
                    }
                }
            },
            pie: {
                size: void 0,
                customScale: 1,
                offsetX: 0,
                offsetY: 0,
                expandOnClick: !0,
                dataLabels: {offset: 0, minAngleToShowLabel: 10},
                donut: {
                    size: "65%",
                    background: "transparent",
                    labels: {
                        show: !1,
                        name: {show: !0, fontSize: "16px", fontFamily: void 0, color: void 0, offsetY: -10},
                        value: {
                            show: !0,
                            fontSize: "20px",
                            fontFamily: void 0,
                            color: void 0,
                            offsetY: 10,
                            formatter: function (t) {
                                return t
                            }
                        },
                        total: {
                            show: !1, showAlways: !1, label: "Total", color: void 0, formatter: function (t) {
                                return t.globals.seriesTotals.reduce((function (t, e) {
                                    return t + e
                                }), 0)
                            }
                        }
                    }
                }
            },
            radar: {
                size: void 0,
                offsetX: 0,
                offsetY: 0,
                polygons: {strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: {colors: void 0}}
            }
        }, it = {
            enabled: !0,
            enabledOnSeries: void 0,
            shared: !0,
            followCursor: !1,
            intersect: !1,
            inverseOrder: !1,
            custom: void 0,
            fillSeriesColor: !1,
            theme: "light",
            style: {fontSize: "12px", fontFamily: void 0},
            onDatasetHover: {highlightDataSeries: !1},
            x: {show: !0, format: "dd MMM", formatter: void 0},
            y: {
                formatter: void 0, title: {
                    formatter: function (t) {
                        return t
                    }
                }
            },
            z: {formatter: void 0, title: "Size: "},
            marker: {show: !0, fillColors: void 0},
            items: {display: "flex"},
            fixed: {enabled: !1, position: "topRight", offsetX: 0, offsetY: 0}
        }, at = {
            show: !0,
            showForSingleSeries: !1,
            showForNullSeries: !0,
            showForZeroSeries: !0,
            floating: !1,
            position: "bottom",
            horizontalAlign: "center",
            inverseOrder: !1,
            fontSize: "12px",
            fontFamily: void 0,
            width: void 0,
            height: void 0,
            formatter: void 0,
            tooltipHoverFormatter: void 0,
            offsetX: -20,
            offsetY: 0,
            labels: {colors: void 0, useSeriesColors: !1},
            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                fillColors: void 0,
                strokeColor: "#fff",
                radius: 12,
                customHTML: void 0,
                offsetX: 0,
                offsetY: 0,
                onClick: void 0
            },
            itemMargin: {horizontal: 0, vertical: 5},
            onItemClick: {toggleDataSeries: !0},
            onItemHover: {highlightDataSeries: !0}
        }, st = {
            show: !0,
            borderColor: "#e0e0e0",
            strokeDashArray: 0,
            position: "back",
            xaxis: {lines: {show: !1}},
            yaxis: {lines: {show: !0}},
            row: {colors: void 0, opacity: .5},
            column: {colors: void 0, opacity: .5},
            padding: {top: 0, right: 10, bottom: 0, left: 12}
        }, rt = {
            text: void 0,
            align: "left",
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: !1,
            style: {fontSize: "14px", fontFamily: void 0, color: void 0}
        }, nt = {
            text: void 0,
            align: "left",
            margin: 10,
            offsetX: 0,
            offsetY: 30,
            floating: !1,
            style: {fontSize: "12px", fontFamily: void 0, color: void 0}
        };

        function ot(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var lt = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "init", value: function () {
                    return {
                        annotations: {position: "front", yaxis: [O], xaxis: [E], points: [z]},
                        chart: tt,
                        plotOptions: et,
                        colors: void 0,
                        dataLabels: {
                            enabled: !0,
                            enabledOnSeries: void 0,
                            formatter: function (t) {
                                return null !== t ? t : ""
                            },
                            textAnchor: "middle",
                            offsetX: 0,
                            offsetY: 0,
                            style: {fontSize: "12px", fontFamily: void 0, fontWeight: "bold", colors: void 0},
                            background: {
                                enabled: !0,
                                foreColor: "#fff",
                                borderRadius: 2,
                                padding: 4,
                                opacity: .9,
                                borderWidth: 1,
                                borderColor: "#fff"
                            },
                            dropShadow: {enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: .45}
                        },
                        fill: {
                            type: "solid",
                            colors: void 0,
                            opacity: .85,
                            gradient: {
                                shade: "dark",
                                type: "horizontal",
                                shadeIntensity: .5,
                                gradientToColors: void 0,
                                inverseColors: !0,
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [0, 50, 100],
                                colorStops: []
                            },
                            image: {src: [], width: void 0, height: void 0},
                            pattern: {style: "sqaures", width: 6, height: 6, strokeWidth: 2}
                        },
                        grid: st,
                        labels: [],
                        legend: at,
                        markers: {
                            discrete: [],
                            size: 0,
                            colors: void 0,
                            strokeColors: "#fff",
                            strokeWidth: 2,
                            strokeOpacity: .9,
                            strokeDashArray: 0,
                            fillOpacity: 1,
                            shape: "circle",
                            radius: 2,
                            offsetX: 0,
                            offsetY: 0,
                            onClick: void 0,
                            onDblClick: void 0,
                            hover: {size: void 0, sizeOffset: 3}
                        },
                        noData: {
                            text: void 0,
                            align: "center",
                            verticalAlign: "middle",
                            offsetX: 0,
                            offsetY: 0,
                            style: {color: void 0, fontSize: "14px", fontFamily: void 0}
                        },
                        responsive: [],
                        series: void 0,
                        states: {
                            normal: {filter: {type: "none", value: 0}},
                            hover: {filter: {type: "lighten", value: .15}},
                            active: {allowMultipleDataPointsSelection: !1, filter: {type: "darken", value: .65}}
                        },
                        title: rt,
                        subtitle: nt,
                        stroke: {show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0},
                        tooltip: it,
                        xaxis: Q,
                        yaxis: J,
                        theme: {
                            mode: "light",
                            palette: "palette1",
                            monochrome: {enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: .65}
                        }
                    }
                }
            }]) && ot(e.prototype, i), a && ot(e, a), t
        }();

        function ht(t) {
            return (ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function ct(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var dt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.opts = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "init", value: function () {
                    var t = this.opts, e = new lt, i = new q(t);
                    this.chartType = t.chart.type, "histogram" === this.chartType && (t.chart.type = "bar", t = n.extend({plotOptions: {bar: {columnWidth: "99.99%"}}}, t)), t = this.extendYAxis(t), t = this.extendAnnotations(t);
                    var a = e.init(), s = {};
                    if (t && "object" === ht(t)) {
                        var r = {};
                        r = -1 !== ["line", "area", "bar", "candlestick", "rangeBar", "histogram", "bubble", "scatter", "heatmap", "pie", "donut", "radar", "radialBar"].indexOf(t.chart.type) ? i[t.chart.type]() : i.line(), t.chart.brush && t.chart.brush.enabled && (r = i.brush(r)), t.chart.stacked && "100%" === t.chart.stackType && i.stacked100(), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(t), t.xaxis = t.xaxis || window.Apex.xaxis || {};
                        var o = $.checkComboSeries(t.series);
                        "line" !== t.chart.type && "area" !== t.chart.type && "scatter" !== t.chart.type || o.comboChartsHasBars || "datetime" === t.xaxis.type || "numeric" === t.xaxis.type || "between" === t.xaxis.tickPlacement || (t = q.convertCatToNumeric(t)), (t.chart.sparkline && t.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled) && (r = i.sparkline(r)), s = n.extend(a, r)
                    }
                    var l = n.extend(s, window.Apex);
                    return a = n.extend(l, t), a = this.handleUserInputErrors(a)
                }
            }, {
                key: "extendYAxis", value: function (t) {
                    return void 0 === t.yaxis && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = n.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !== Array ? t.yaxis = [n.extend(J, t.yaxis)] : t.yaxis = n.extendArray(t.yaxis, J), t
                }
            }, {
                key: "extendAnnotations", value: function (t) {
                    return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), t = this.extendPointAnnotations(t)
                }
            }, {
                key: "extendYAxisAnnotations", value: function (t) {
                    return t.annotations.yaxis = n.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], O), t
                }
            }, {
                key: "extendXAxisAnnotations", value: function (t) {
                    return t.annotations.xaxis = n.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], E), t
                }
            }, {
                key: "extendPointAnnotations", value: function (t) {
                    return t.annotations.points = n.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], z), t
                }
            }, {
                key: "checkForDarkTheme", value: function (t) {
                    t.theme && "dark" === t.theme.mode && (t.tooltip || (t.tooltip = {}), "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.theme.palette || (t.theme.palette = "palette4"))
                }
            }, {
                key: "handleUserInputErrors", value: function (t) {
                    var e = t;
                    if (e.tooltip.shared && e.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
                    if (("bar" === e.chart.type || "rangeBar" === e.chart.type) && e.plotOptions.bar.horizontal) {
                        if (e.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
                        e.yaxis[0].reversed && (e.yaxis[0].opposite = !0), e.xaxis.tooltip.enabled = !1, e.yaxis[0].tooltip.enabled = !1, e.chart.zoom.enabled = !1
                    }
                    return "bar" !== e.chart.type && "rangeBar" !== e.chart.type || e.tooltip.shared && ("barWidth" === e.xaxis.crosshairs.width && e.series.length > 1 && (console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart.'), e.xaxis.crosshairs.width = "tickWidth"), e.plotOptions.bar.horizontal && (e.states.hover.type = "none", e.tooltip.shared = !1), e.tooltip.followCursor || (console.warn("followCursor option in shared columns cannot be turned off. Please set %ctooltip.followCursor: true", "color: blue;"), e.tooltip.followCursor = !0)), "candlestick" === e.chart.type && e.yaxis[0].reversed && (console.warn("Reversed y-axis in candlestick chart is not supported."), e.yaxis[0].reversed = !1), e.chart.group && 0 === e.yaxis[0].labels.minWidth && console.warn("It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour."), Array.isArray(e.stroke.width) && "line" !== e.chart.type && "area" !== e.chart.type && (console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"), e.stroke.width = e.stroke.width[0]), e
                }
            }]) && ct(e.prototype, i), a && ct(e, a), t
        }();

        function ut(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var gt = function () {
            function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "initGlobalVars", value: function (t) {
                    t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesRangeBarTimeline = [], t.seriesPercent = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.stackedSeriesTotals = [], t.seriesXvalues = [], t.seriesYvalues = [], t.labels = [], t.timescaleLabels = [], t.noLabelsProvided = !1, t.resizeTimer = null, t.selectionResizeTimer = null, t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.skipLastTimelinelabel = !1, t.skipFirstTimelinelabel = !1, t.x2SpaceAvailable = 0, t.isDataXYZ = !1, t.isMultipleYAxis = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialmaxX = -Number.MAX_VALUE, t.initialminX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0
                }
            }, {
                key: "globalVars", value: function (t) {
                    return {
                        chartID: null,
                        cuid: null,
                        events: {
                            beforeMount: [],
                            mounted: [],
                            updated: [],
                            clicked: [],
                            selection: [],
                            dataPointSelection: [],
                            zoomed: [],
                            scrolled: []
                        },
                        colors: [],
                        clientX: null,
                        clientY: null,
                        fill: {colors: []},
                        stroke: {colors: []},
                        dataLabels: {style: {colors: []}},
                        radarPolygons: {fill: {colors: []}},
                        markers: {colors: [], size: t.markers.size, largestSize: 0},
                        animationEnded: !1,
                        isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
                        isDirty: !1,
                        isExecCalled: !1,
                        initialConfig: null,
                        lastXAxis: [],
                        lastYAxis: [],
                        columnSeries: null,
                        labels: [],
                        timescaleLabels: [],
                        noLabelsProvided: !1,
                        allSeriesCollapsed: !1,
                        collapsedSeries: [],
                        collapsedSeriesIndices: [],
                        ancillaryCollapsedSeries: [],
                        ancillaryCollapsedSeriesIndices: [],
                        risingSeries: [],
                        dataFormatXNumeric: !1,
                        capturedSeriesIndex: -1,
                        capturedDataPointIndex: -1,
                        selectedDataPoints: [],
                        goldenPadding: 35,
                        invalidLogScale: !1,
                        ignoreYAxisIndexes: [],
                        yAxisSameScaleIndices: [],
                        padHorizontal: 0,
                        maxValsInArrayIndex: 0,
                        radialSize: 0,
                        zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
                        panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
                        selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
                        yaxis: null,
                        mousedown: !1,
                        lastClientPosition: {},
                        visibleXRange: void 0,
                        yValueDecimal: 0,
                        total: 0,
                        SVGNS: "http://www.w3.org/2000/svg",
                        svgWidth: 0,
                        svgHeight: 0,
                        noData: !1,
                        locale: {},
                        dom: {},
                        memory: {methodsToExec: []},
                        shouldAnimate: !0,
                        skipLastTimelinelabel: !1,
                        skipFirstTimelinelabel: !1,
                        delayedElements: [],
                        axisCharts: !0,
                        isXNumeric: !1,
                        isDataXYZ: !1,
                        resized: !1,
                        resizeTimer: null,
                        comboCharts: !1,
                        comboChartsHasBars: !1,
                        dataChanged: !1,
                        previousPaths: [],
                        allSeriesHasEqualX: !0,
                        pointsArray: [],
                        dataLabelsRects: [],
                        lastDrawnDataLabelsIndexes: [],
                        x2SpaceAvailable: 0,
                        hasNullValues: !1,
                        easing: null,
                        zoomed: !1,
                        gridWidth: 0,
                        gridHeight: 0,
                        rotateXLabels: !1,
                        defaultLabels: !1,
                        xLabelFormatter: void 0,
                        yLabelFormatters: [],
                        xaxisTooltipFormatter: void 0,
                        ttKeyFormatter: void 0,
                        ttVal: void 0,
                        ttZFormatter: void 0,
                        LINE_HEIGHT_RATIO: 1.618,
                        xAxisLabelsHeight: 0,
                        yAxisLabelsWidth: 0,
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0,
                        translateY: 0,
                        translateYAxisX: [],
                        yAxisWidths: [],
                        translateXAxisY: 0,
                        translateXAxisX: 0,
                        tooltip: null
                    }
                }
            }, {
                key: "init", value: function (t) {
                    var e = this.globalVars(t);
                    return this.initGlobalVars(e), e.initialConfig = n.extend({}, t), e.initialSeries = JSON.parse(JSON.stringify(e.initialConfig.series)), e.lastXAxis = JSON.parse(JSON.stringify(e.initialConfig.xaxis)), e.lastYAxis = JSON.parse(JSON.stringify(e.initialConfig.yaxis)), e
                }
            }]) && ut(e.prototype, i), a && ut(e, a), t
        }();

        function ft(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var pt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.opts = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "init", value: function () {
                    var t = new dt(this.opts).init();
                    return {config: t, globals: (new gt).init(t)}
                }
            }]) && ft(e.prototype, i), a && ft(e, a), t
        }();

        function xt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var bt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.opts = null, this.seriesIndex = 0
            }

            var e, i, a;
            return e = t, (i = [{
                key: "clippedImgArea", value: function (t) {
                    var e = this.w, i = e.config, a = parseInt(e.globals.gridWidth, 10),
                        s = parseInt(e.globals.gridHeight, 10), r = a > s ? a : s, n = t.image, o = 0, l = 0;
                    void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? (o = i.fill.image.width + 1, l = i.fill.image.height) : (o = r + 1, l = r) : (o = t.width, l = t.height);
                    var h = document.createElementNS(e.globals.SVGNS, "pattern");
                    p.setAttrs(h, {
                        id: t.patternID,
                        patternUnits: t.patternUnits ? t.patternUnits : "userSpaceOnUse",
                        width: o + "px",
                        height: l + "px"
                    });
                    var c = document.createElementNS(e.globals.SVGNS, "image");
                    h.appendChild(c), c.setAttributeNS("http://www.w3.org/1999/xlink", "href", n), p.setAttrs(c, {
                        x: 0,
                        y: 0,
                        preserveAspectRatio: "none",
                        width: o + "px",
                        height: l + "px"
                    }), c.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(h)
                }
            }, {
                key: "getSeriesIndex", value: function (t) {
                    var e = this.w;
                    return ("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && e.config.plotOptions.bar.distributed || "heatmap" === e.config.chart.type ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex
                }
            }, {
                key: "fillPath", value: function (t) {
                    var e = this.w;
                    this.opts = t;
                    var i, a, s, r = this.w.config;
                    this.seriesIndex = this.getSeriesIndex(t);
                    var o = this.getFillColors()[this.seriesIndex];
                    "function" == typeof o && (o = o({seriesIndex: this.seriesIndex, value: t.value, w: e}));
                    var l = this.getFillType(this.seriesIndex),
                        h = Array.isArray(r.fill.opacity) ? r.fill.opacity[this.seriesIndex] : r.fill.opacity, c = o;
                    if (t.color && (o = t.color), -1 === o.indexOf("rgb") ? c = n.hexToRgba(o, h) : o.indexOf("rgba") > -1 && (h = "0." + n.getOpacityFromRGBA(o)), t.opacity && (h = t.opacity), "pattern" === l && (a = this.handlePatternFill(a, o, h, c)), "gradient" === l && (s = this.handleGradientFill(s, o, h, this.seriesIndex)), "image" === l) {
                        var d = r.fill.image.src, u = t.patternID ? t.patternID : "";
                        this.clippedImgArea({
                            opacity: h,
                            image: Array.isArray(d) ? t.seriesNumber < d.length ? d[t.seriesNumber] : d[0] : d,
                            width: t.width ? t.width : void 0,
                            height: t.height ? t.height : void 0,
                            patternUnits: t.patternUnits,
                            patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(u)
                        }), i = "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(u, ")")
                    } else i = "gradient" === l ? s : "pattern" === l ? a : c;
                    return t.solid && (i = c), i
                }
            }, {
                key: "getFillType", value: function (t) {
                    var e = this.w;
                    return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type
                }
            }, {
                key: "getFillColors", value: function () {
                    var t = this.w, e = t.config, i = this.opts, a = [];
                    return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? t.globals.stroke.colors instanceof Array ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : t.globals.fill.colors instanceof Array ? a = t.globals.fill.colors : a.push(t.globals.fill.colors) : "line" === e.chart.type ? t.globals.stroke.colors instanceof Array ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : t.globals.fill.colors instanceof Array ? a = t.globals.fill.colors : a.push(t.globals.fill.colors), void 0 !== i.fillColors && (a = [], i.fillColors instanceof Array ? a = i.fillColors.slice() : a.push(i.fillColors)), a
                }
            }, {
                key: "handlePatternFill", value: function (t, e, i, a) {
                    var s = this.w.config, r = this.opts, n = new p(this.ctx),
                        o = void 0 === s.fill.pattern.strokeWidth ? Array.isArray(s.stroke.width) ? s.stroke.width[this.seriesIndex] : s.stroke.width : Array.isArray(s.fill.pattern.strokeWidth) ? s.fill.pattern.strokeWidth[this.seriesIndex] : s.fill.pattern.strokeWidth,
                        l = e;
                    return s.fill.pattern.style instanceof Array ? void 0 !== s.fill.pattern.style[r.seriesNumber] ? n.drawPattern(s.fill.pattern.style[r.seriesNumber], s.fill.pattern.width, s.fill.pattern.height, l, o, i) : a : n.drawPattern(s.fill.pattern.style, s.fill.pattern.width, s.fill.pattern.height, l, o, i)
                }
            }, {
                key: "handleGradientFill", value: function (t, e, i, a) {
                    var s, r, o = this.w.config, l = this.opts, h = new p(this.ctx), c = new n,
                        d = o.fill.gradient.type,
                        u = void 0 === o.fill.gradient.opacityFrom ? i : Array.isArray(o.fill.gradient.opacityFrom) ? o.fill.gradient.opacityFrom[a] : o.fill.gradient.opacityFrom,
                        g = void 0 === o.fill.gradient.opacityTo ? i : Array.isArray(o.fill.gradient.opacityTo) ? o.fill.gradient.opacityTo[a] : o.fill.gradient.opacityTo;
                    if (s = e, r = void 0 === o.fill.gradient.gradientToColors || 0 === o.fill.gradient.gradientToColors.length ? "dark" === o.fill.gradient.shade ? c.shadeColor(-1 * parseFloat(o.fill.gradient.shadeIntensity), e) : c.shadeColor(parseFloat(o.fill.gradient.shadeIntensity), e) : o.fill.gradient.gradientToColors[l.seriesNumber], o.fill.gradient.inverseColors) {
                        var f = s;
                        s = r, r = f
                    }
                    return h.drawGradient(d, s, r, u, g, l.size, o.fill.gradient.stops, o.fill.gradient.colorStops, a)
                }
            }]) && xt(e.prototype, i), a && xt(e, a), t
        }();

        function vt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var mt = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "setGlobalMarkerSize", value: function () {
                    var t = this.w;
                    if (t.globals.markers.size = Array.isArray(t.config.markers.size) ? t.config.markers.size : [t.config.markers.size], t.globals.markers.size.length > 0) {
                        if (t.globals.markers.size.length < t.globals.series.length + 1) for (var e = 0; e <= t.globals.series.length; e++) void 0 === t.globals.markers.size[e] && t.globals.markers.size.push(t.globals.markers.size[0])
                    } else t.globals.markers.size = t.config.series.map((function (e) {
                        return t.config.markers.size
                    }))
                }
            }, {
                key: "plotChartMarkers", value: function (t, e, i) {
                    var a, s = this.w, r = e, o = t, h = null, c = new p(this.ctx);
                    if (s.globals.markers.size[e] > 0 && (h = c.group({class: "apexcharts-series-markers"})).attr("clip-path", "url(#gridRectMarkerMask".concat(s.globals.cuid, ")")), o.x instanceof Array) for (var d = 0; d < o.x.length; d++) {
                        var u = i;
                        1 === i && 0 === d && (u = 0), 1 === i && 1 === d && (u = 1);
                        var g = "apexcharts-marker";
                        if ("line" !== s.config.chart.type && "area" !== s.config.chart.type || s.globals.comboCharts || s.config.tooltip.intersect || (g += " no-pointer-events"), Array.isArray(s.config.markers.size) ? s.globals.markers.size[e] > 0 : s.config.markers.size > 0) {
                            n.isNumber(o.y[d]) ? g += " w".concat(n.randomId()) : g = "apexcharts-nullpoint";
                            var f = this.getMarkerConfig(g, e, u);
                            s.config.series[r].data[i] && (s.config.series[r].data[i].fillColor && (f.pointFillColor = s.config.series[r].data[i].fillColor), s.config.series[r].data[i].strokeColor && (f.pointStrokeColor = s.config.series[r].data[i].strokeColor)), (a = c.drawMarker(o.x[d], o.y[d], f)).attr("rel", u), a.attr("j", u), a.attr("index", e), a.node.setAttribute("default-marker-size", f.pSize), new l(this.ctx).setSelectionFilter(a, e, u), this.addEvents(a), h && h.add(a)
                        } else void 0 === s.globals.pointsArray[e] && (s.globals.pointsArray[e] = []), s.globals.pointsArray[e].push([o.x[d], o.y[d]])
                    }
                    return h
                }
            }, {
                key: "getMarkerConfig", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = this.w,
                        s = this.getMarkerStyle(e), r = a.globals.markers.size[e], n = a.config.markers;
                    return null !== i && n.discrete.length && n.discrete.map((function (t) {
                        t.seriesIndex === e && t.dataPointIndex === i && (s.pointStrokeColor = t.strokeColor, s.pointFillColor = t.fillColor, r = t.size)
                    })), {
                        pSize: r,
                        pRadius: n.radius,
                        pWidth: n.strokeWidth instanceof Array ? n.strokeWidth[e] : n.strokeWidth,
                        pointStrokeColor: s.pointStrokeColor,
                        pointFillColor: s.pointFillColor,
                        shape: n.shape instanceof Array ? n.shape[e] : n.shape,
                        class: t,
                        pointStrokeOpacity: n.strokeOpacity instanceof Array ? n.strokeOpacity[e] : n.strokeOpacity,
                        pointStrokeDashArray: n.strokeDashArray instanceof Array ? n.strokeDashArray[e] : n.strokeDashArray,
                        pointFillOpacity: n.fillOpacity instanceof Array ? n.fillOpacity[e] : n.fillOpacity,
                        seriesIndex: e
                    }
                }
            }, {
                key: "addEvents", value: function (t) {
                    var e = this.w, i = new p(this.ctx);
                    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t), {passive: !0})
                }
            }, {
                key: "getMarkerStyle", value: function (t) {
                    var e = this.w, i = e.globals.markers.colors,
                        a = e.config.markers.strokeColor || e.config.markers.strokeColors;
                    return {
                        pointStrokeColor: a instanceof Array ? a[t] : a,
                        pointFillColor: i instanceof Array ? i[t] : i
                    }
                }
            }]) && vt(e.prototype, i), a && vt(e, a), t
        }();

        function yt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var wt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled
            }

            var e, i, a;
            return e = t, (i = [{
                key: "draw", value: function (t, e, i) {
                    var a = this.w, s = new p(this.ctx), r = i.realIndex, n = i.pointsPos, o = i.zRatio, l = i.elParent,
                        h = s.group({class: "apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type)});
                    if (h.attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")), n.x instanceof Array) for (var c = 0; c < n.x.length; c++) {
                        var d = e + 1, u = !0;
                        0 === e && 0 === c && (d = 0), 0 === e && 1 === c && (d = 1);
                        var g = 0, f = a.globals.markers.size[r];
                        if (o !== 1 / 0) {
                            f = a.globals.seriesZ[r][d] / o;
                            var x = a.config.plotOptions.bubble;
                            x.minBubbleRadius && f < x.minBubbleRadius && (f = x.minBubbleRadius), x.maxBubbleRadius && f > x.maxBubbleRadius && (f = x.maxBubbleRadius)
                        }
                        a.config.chart.animations.enabled || (g = f);
                        var b = n.x[c], v = n.y[c];
                        if (g = g || 0, null !== v && void 0 !== a.globals.series[r][d] || (u = !1), u) {
                            var m = this.drawPoint(b, v, g, f, r, d, e);
                            h.add(m)
                        }
                        l.add(h)
                    }
                }
            }, {
                key: "drawPoint", value: function (t, e, i, a, s, r, n) {
                    var o = this.w, h = s, d = new c(this.ctx), u = new l(this.ctx), g = new bt(this.ctx),
                        f = new mt(this.ctx), x = new p(this.ctx), b = f.getMarkerConfig("apexcharts-marker", h),
                        v = g.fillPath({
                            seriesNumber: s,
                            patternUnits: "objectBoundingBox",
                            value: o.globals.series[s][n]
                        }), m = x.drawCircle(i);
                    if (o.config.series[h].data[r] && o.config.series[h].data[r].fillColor && (v = o.config.series[h].data[r].fillColor), m.attr({
                        cx: t,
                        cy: e,
                        fill: v,
                        stroke: b.pointStrokeColor,
                        "stroke-width": b.pWidth,
                        "stroke-dasharray": b.pointStrokeDashArray,
                        "stroke-opacity": b.pointStrokeOpacity
                    }), o.config.chart.dropShadow.enabled) {
                        var y = o.config.chart.dropShadow;
                        u.dropShadow(m, y, s)
                    }
                    if (this.initialAnim && !o.globals.dataChanged) {
                        var w = 1;
                        o.globals.resized || (w = o.config.chart.animations.speed), d.animateCircleRadius(m, 0, a, w, o.globals.easing)
                    }
                    if (o.globals.dataChanged) if (this.dynamicAnim) {
                        var k, S, A, C, P = o.config.chart.animations.dynamicAnimation.speed;
                        null != (C = o.globals.previousPaths[s] && o.globals.previousPaths[s][n]) && (k = C.x, S = C.y, A = void 0 !== C.r ? C.r : a);
                        for (var L = 0; L < o.globals.collapsedSeries.length; L++) o.globals.collapsedSeries[L].index === s && (P = 1, a = 0);
                        0 === t && 0 === e && (a = 0), d.animateCircle(m, {cx: k, cy: S, r: A}, {
                            cx: t,
                            cy: e,
                            r: a
                        }, P, o.globals.easing)
                    } else m.attr({r: a});
                    return m.attr({
                        rel: r,
                        j: r,
                        index: s,
                        "default-marker-size": a
                    }), u.setSelectionFilter(m, s, r), f.addEvents(m), m.node.classList.add("apexcharts-marker"), m
                }
            }, {
                key: "centerTextInBubble", value: function (t) {
                    var e = this.w;
                    return {y: t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4}
                }
            }]) && yt(e.prototype, i), a && yt(e, a), t
        }();

        function kt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var St = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "dataLabelsCorrection", value: function (t, e, i, a, s, r, n) {
                    var o = this.w, l = !1, h = new p(this.ctx).getTextRects(i, n), c = h.width, d = h.height;
                    void 0 === o.globals.dataLabelsRects[a] && (o.globals.dataLabelsRects[a] = []), o.globals.dataLabelsRects[a].push({
                        x: t,
                        y: e,
                        width: c,
                        height: d
                    });
                    var u = o.globals.dataLabelsRects[a].length - 2,
                        g = void 0 !== o.globals.lastDrawnDataLabelsIndexes[a] ? o.globals.lastDrawnDataLabelsIndexes[a][o.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
                    if (void 0 !== o.globals.dataLabelsRects[a][u]) {
                        var f = o.globals.dataLabelsRects[a][g];
                        (t > f.x + f.width + 2 || e > f.y + f.height + 2 || t + c < f.x) && (l = !0)
                    }
                    return (0 === s || r) && (l = !0), {x: t, y: e, textRects: h, drawnextLabel: l}
                }
            }, {
                key: "drawDataLabel", value: function (t, e, i) {
                    var a = this,
                        s = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2),
                        r = this.w, n = new p(this.ctx), o = r.config.dataLabels, l = 0, h = 0, c = i, d = null;
                    if (!o.enabled || t.x instanceof Array != 1) return d;
                    d = n.group({class: "apexcharts-data-labels"});
                    for (var u = 0; u < t.x.length; u++) if (l = t.x[u] + o.offsetX, h = t.y[u] + o.offsetY + s, !isNaN(l)) {
                        1 === i && 0 === u && (c = 0), 1 === i && 1 === u && (c = 1);
                        var g = r.globals.series[e][c], f = "", x = function (t) {
                            return r.config.dataLabels.formatter(t, {
                                ctx: a.ctx,
                                seriesIndex: e,
                                dataPointIndex: c,
                                w: r
                            })
                        };
                        if ("bubble" === r.config.chart.type) {
                            f = x(g = r.globals.seriesZ[e][c]), h = t.y[u] + r.config.dataLabels.offsetY;
                            var b = new wt(this.ctx), v = b.centerTextInBubble(h, e, c);
                            h = v.y
                        } else void 0 !== g && (f = x(g));
                        this.plotDataLabelsText({
                            x: l,
                            y: h,
                            text: f,
                            i: e,
                            j: c,
                            parent: d,
                            offsetCorrection: !0,
                            dataLabelsConfig: r.config.dataLabels
                        })
                    }
                    return d
                }
            }, {
                key: "plotDataLabelsText", value: function (t) {
                    var e = this.w, i = new p(this.ctx), a = t.x, s = t.y, r = t.i, n = t.j, o = t.text,
                        h = t.textAnchor, c = t.parent, d = t.dataLabelsConfig, u = t.color, g = t.alwaysDrawDataLabel,
                        f = t.offsetCorrection;
                    if (!(Array.isArray(e.config.dataLabels.enabledOnSeries) && e.config.dataLabels.enabledOnSeries.indexOf(r) < 0)) {
                        var x = {x: a, y: s, drawnextLabel: !0};
                        f && (x = this.dataLabelsCorrection(a, s, o, r, n, g, parseInt(d.style.fontSize, 10))), e.globals.zoomed || (a = x.x, s = x.y), x.textRects && (a + x.textRects.width < 10 || a > e.globals.gridWidth + 10) && (o = "");
                        var b = e.globals.dataLabels.style.colors[r];
                        if ("bar" !== e.config.chart.type && "rangeBar" !== e.config.chart.type || !e.config.plotOptions.bar.distributed || (b = e.globals.dataLabels.style.colors[n]), u && (b = u), x.drawnextLabel) {
                            var v = i.drawText({
                                width: 100,
                                height: parseInt(d.style.fontSize, 10),
                                x: a,
                                y: s,
                                foreColor: b,
                                textAnchor: h || d.textAnchor,
                                text: o,
                                fontSize: d.style.fontSize,
                                fontFamily: d.style.fontFamily,
                                fontWeight: d.style.fontWeight || "normal"
                            });
                            if (v.attr({class: "apexcharts-datalabel", cx: a, cy: s}), d.dropShadow.enabled) {
                                var m = d.dropShadow;
                                new l(this.ctx).dropShadow(v, m)
                            }
                            c.add(v), void 0 === e.globals.lastDrawnDataLabelsIndexes[r] && (e.globals.lastDrawnDataLabelsIndexes[r] = []), e.globals.lastDrawnDataLabelsIndexes[r].push(n)
                        }
                    }
                }
            }, {
                key: "addBackgroundToDataLabel", value: function (t, e) {
                    var i = this.w, a = i.config.dataLabels.background, s = a.padding, r = a.padding / 2, n = e.width,
                        o = e.height;
                    return new p(this.ctx).drawRect(e.x - s, e.y - r / 2, n + 2 * s, o + r, a.borderRadius, "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background, a.opacity, a.borderWidth, a.borderColor)
                }
            }, {
                key: "dataLabelsBackground", value: function () {
                    var t = this.w, e = t.config.chart.type;
                    if ("bar" !== e && "rangeBar" !== e && "bubble" !== e) for (var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), a = 0; a < i.length; a++) {
                        var s = i[a], r = s.getBBox(), n = this.addBackgroundToDataLabel(s, r);
                        if (n) {
                            s.parentNode.insertBefore(n.node, s);
                            var o = s.getAttribute("fill");
                            !t.config.chart.animations.enabled || t.globals.resized || t.globals.dataChanged ? n.attr({fill: o}) : n.animate().attr({fill: o}), s.setAttribute("fill", t.config.dataLabels.background.foreColor)
                        }
                    }
                }
            }, {
                key: "bringForward", value: function () {
                    for (var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = t.globals.dom.baseEl.querySelector(".apexcharts-plot-series"), a = 0; a < e.length; a++) i.insertAdjacentElement("beforeEnd", e[a])
                }
            }]) && kt(e.prototype, i), a && kt(e, a), t
        }();

        function At(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function Ct(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function Pt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Lt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.barCtx = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "handleBarDataLabels", value: function (t) {
                    var e = t.x, i = t.y, a = t.y1, s = t.y2, r = t.i, n = t.j, o = t.realIndex, l = t.series,
                        h = t.barHeight, c = t.barWidth, d = t.barYPosition, u = t.visibleSeries, g = t.renderedPath,
                        f = this.w, x = new p(this.barCtx.ctx),
                        b = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[o] : this.barCtx.strokeWidth,
                        v = e + parseFloat(c * u), m = i + parseFloat(h * u);
                    f.globals.isXNumeric && !f.globals.isBarHorizontal && (v = e + parseFloat(c * (u + 1)), m = i + parseFloat(h * (u + 1)) - b);
                    var y = e, w = i, k = {}, S = f.config.dataLabels, A = this.barCtx.barOptions.dataLabels;
                    void 0 !== d && this.barCtx.isTimelineBar && (m = d, w = d);
                    var C = S.offsetX, P = S.offsetY, L = {width: 0, height: 0};
                    f.config.dataLabels.enabled && (L = x.getTextRects(f.globals.yLabelFormatters[0](f.globals.maxY), parseFloat(S.style.fontSize)));
                    var T = {
                        x: e,
                        y: i,
                        i: r,
                        j: n,
                        renderedPath: g,
                        bcx: v,
                        bcy: m,
                        barHeight: h,
                        barWidth: c,
                        textRects: L,
                        strokeWidth: b,
                        dataLabelsX: y,
                        dataLabelsY: w,
                        barDataLabelsConfig: A,
                        offX: C,
                        offY: P
                    };
                    return k = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(T) : this.calculateColumnsDataLabelsPosition(T), g.attr({
                        cy: k.bcy,
                        cx: k.bcx,
                        j: n,
                        val: l[r][n],
                        barHeight: h,
                        barWidth: c
                    }), this.drawCalculatedDataLabels({
                        x: k.dataLabelsX,
                        y: k.dataLabelsY,
                        val: this.barCtx.isTimelineBar ? [a, s] : l[r][n],
                        i: o,
                        j: n,
                        barWidth: c,
                        barHeight: h,
                        textRects: L,
                        dataLabelsConfig: S
                    })
                }
            }, {
                key: "calculateColumnsDataLabelsPosition", value: function (t) {
                    var e, i = this.w, a = t.i, s = t.j, r = t.y, n = t.bcx, o = t.barWidth, l = t.barHeight,
                        h = t.textRects, c = t.dataLabelsY, d = t.barDataLabelsConfig, u = t.strokeWidth, g = t.offX,
                        f = t.offY, p = "vertical" === i.config.plotOptions.bar.dataLabels.orientation;
                    n -= u / 2;
                    var x = i.globals.gridWidth / i.globals.dataPoints;
                    e = i.globals.isXNumeric ? n - o / 2 + g : n - x + o / 2 + g, p && (e = e + h.height / 2 - u / 2 - 2);
                    var b = this.barCtx.series[a][s] <= 0;
                    switch (this.barCtx.isReversed && (r -= l), d.position) {
                        case"center":
                            c = p ? b ? r + l / 2 + f : r + l / 2 - f : b ? r + l / 2 + h.height / 2 + f : r + l / 2 + h.height / 2 - f;
                            break;
                        case"bottom":
                            c = p ? b ? r + l + f : r + l - f : b ? r + l + h.height + u + f : r + l - h.height / 2 + u - f;
                            break;
                        case"top":
                            c = p ? b ? r + f : r - f : b ? r - h.height / 2 - f : r + h.height + f
                    }
                    return i.config.chart.stacked || (c < 0 ? c = 0 + u : c + h.height / 3 > i.globals.gridHeight && (c = i.globals.gridHeight - u)), {
                        bcx: n,
                        bcy: r,
                        dataLabelsX: e,
                        dataLabelsY: c
                    }
                }
            }, {
                key: "calculateBarsDataLabelsPosition", value: function (t) {
                    var e = this.w, i = t.x, a = t.i, s = t.j, r = t.bcy, n = t.barHeight, o = t.barWidth,
                        l = t.textRects, h = t.dataLabelsX, c = t.strokeWidth, d = t.barDataLabelsConfig, u = t.offX,
                        g = t.offY, f = e.globals.gridHeight / e.globals.dataPoints,
                        p = r - (this.barCtx.isTimelineBar ? 0 : f) + n / 2 + l.height / 2 + g - 3,
                        x = this.barCtx.series[a][s] <= 0;
                    switch (this.barCtx.isReversed && (i += o), d.position) {
                        case"center":
                            h = x ? i - o / 2 - u : i - o / 2 + u;
                            break;
                        case"bottom":
                            h = x ? i - o - c - Math.round(l.width / 2) - u : i - o + c + Math.round(l.width / 2) + u;
                            break;
                        case"top":
                            h = x ? i - c + Math.round(l.width / 2) - u : i - c - Math.round(l.width / 2) + u
                    }
                    return e.config.chart.stacked || (h < 0 ? h = h + l.width + c : h + l.width / 2 > e.globals.gridWidth && (h = e.globals.gridWidth - l.width - c)), {
                        bcx: i,
                        bcy: r,
                        dataLabelsX: h,
                        dataLabelsY: p
                    }
                }
            }, {
                key: "drawCalculatedDataLabels", value: function (t) {
                    var e = t.x, i = t.y, a = t.val, s = t.i, r = t.j, n = t.textRects, o = t.barHeight, l = t.barWidth,
                        h = t.dataLabelsConfig, c = this.w, d = "rotate(0)";
                    "vertical" === c.config.plotOptions.bar.dataLabels.orientation && (d = "rotate(-90, ".concat(e, ", ").concat(i, ")"));
                    var u = new St(this.barCtx.ctx), g = new p(this.barCtx.ctx), f = h.formatter, x = null,
                        b = c.globals.collapsedSeriesIndices.indexOf(s) > -1;
                    if (h.enabled && !b) {
                        x = g.group({class: "apexcharts-data-labels", transform: d});
                        var v = "";
                        void 0 !== a && (v = f(a, {
                            seriesIndex: s,
                            dataPointIndex: r,
                            w: c
                        })), 0 === a && c.config.chart.stacked && (v = "");
                        var m = c.globals.series[s][r] <= 0, y = c.config.plotOptions.bar.dataLabels.position;
                        "vertical" === c.config.plotOptions.bar.dataLabels.orientation && ("top" === y && (h.textAnchor = m ? "end" : "start"), "center" === y && (h.textAnchor = "middle"), "bottom" === y && (h.textAnchor = m ? "end" : "start")), this.barCtx.isTimelineBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && l < g.getTextRects(v, parseFloat(h.style.fontSize)).width && (v = ""), c.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? ((l = c.globals.series[s][r] / this.barCtx.invertedYRatio[this.barCtx.yaxisIndex]) > 0 && n.width / 1.6 > l || l < 0 && n.width / 1.6 < l) && (v = "") : (o = c.globals.series[s][r] / this.barCtx.yRatio[this.barCtx.yaxisIndex], n.height / 1.6 > o && (v = "")));
                        var w = function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var i = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? At(Object(i), !0).forEach((function (e) {
                                    Ct(t, e, i[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : At(Object(i)).forEach((function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                                }))
                            }
                            return t
                        }({}, h);
                        this.barCtx.isHorizontal && a < 0 && ("start" === h.textAnchor ? w.textAnchor = "end" : "end" === h.textAnchor && (w.textAnchor = "start")), u.plotDataLabelsText({
                            x: e,
                            y: i,
                            text: v,
                            i: s,
                            j: r,
                            parent: x,
                            dataLabelsConfig: w,
                            alwaysDrawDataLabel: !0,
                            offsetCorrection: !0
                        })
                    }
                    return x
                }
            }]) && Pt(e.prototype, i), a && Pt(e, a), t
        }();

        function Tt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Et = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.barCtx = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "initVariables", value: function (t) {
                    var e = this.w;
                    this.barCtx.series = t, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
                    for (var i = 0; i < t.length; i++) if (t[i].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t[i].length), e.globals.isXNumeric) for (var a = 0; a < t[i].length; a++) e.globals.seriesX[i][a] > e.globals.minX && e.globals.seriesX[i][a] < e.globals.maxX && this.barCtx.visibleItems++; else this.barCtx.visibleItems = e.globals.dataPoints;
                    0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1)
                }
            }, {
                key: "initialPositions", value: function () {
                    var t, e, i, a, s, r, n, o, l = this.w, h = l.globals.dataPoints;
                    return this.barCtx.isTimelineBar && (h = l.globals.labels.length), this.barCtx.isHorizontal ? (s = (i = l.globals.gridHeight / h) / this.barCtx.seriesLen, l.globals.isXNumeric && (s = (i = l.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), s = s * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, o = this.barCtx.baseLineInvertedY + l.globals.padHorizontal + (this.barCtx.isReversed ? l.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), e = (i - s * this.barCtx.seriesLen) / 2) : (r = (a = l.globals.gridWidth / this.barCtx.visibleItems) / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, l.globals.isXNumeric && (l.globals.minXDiff && l.globals.minXDiff / this.barCtx.xRatio > 0 && (a = l.globals.minXDiff / this.barCtx.xRatio), (r = a / this.barCtx.seriesLen * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (r = 1)), n = l.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? l.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), t = l.globals.padHorizontal + (a - r * this.barCtx.seriesLen) / 2), {
                        x: t,
                        y: e,
                        yDivision: i,
                        xDivision: a,
                        barHeight: s,
                        barWidth: r,
                        zeroH: n,
                        zeroW: o
                    }
                }
            }, {
                key: "getPathFillColor", value: function (t, e, i, a) {
                    var s = this.w, r = new bt(this.barCtx.ctx), n = null,
                        o = this.barCtx.barOptions.distributed ? i : e;
                    return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map((function (a) {
                        t[e][i] >= a.from && t[e][i] <= a.to && (n = a.color)
                    })), s.config.series[e].data[i] && s.config.series[e].data[i].fillColor && (n = s.config.series[e].data[i].fillColor), r.fillPath({
                        seriesNumber: this.barCtx.barOptions.distributed ? o : a,
                        color: n,
                        value: t[e][i]
                    })
                }
            }, {
                key: "getStrokeWidth", value: function (t, e, i) {
                    var a = 0, s = this.w;
                    return void 0 === this.barCtx.series[t][e] || null === this.barCtx.series[t][e] ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, s.config.stroke.show && (this.barCtx.isNullValue || (a = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), a
                }
            }, {
                key: "getBarEndingShape", value: function (t, e, i, a, s) {
                    var r = new p(this.barCtx.ctx);
                    if (this.barCtx.isHorizontal) {
                        var n = null, o = e.x;
                        if (void 0 !== i[a][s] || null !== i[a][s]) {
                            var l = i[a][s] < 0, h = e.barHeight / 2 - e.strokeWidth;
                            switch (l && (h = -e.barHeight / 2 - e.strokeWidth), t.config.chart.stacked || "rounded" === this.barCtx.barOptions.endingShape && (o = e.x - h / 2), this.barCtx.barOptions.endingShape) {
                                case"flat":
                                    n = r.line(o, e.barYPosition + e.barHeight - e.strokeWidth);
                                    break;
                                case"rounded":
                                    n = r.quadraticCurve(o + h, e.barYPosition + (e.barHeight - e.strokeWidth) / 2, o, e.barYPosition + e.barHeight - e.strokeWidth)
                            }
                        }
                        return {path: n, ending_p_from: "", newX: o}
                    }
                    var c = null, d = e.y;
                    if (void 0 !== i[a][s] || null !== i[a][s]) {
                        var u = i[a][s] < 0, g = e.barWidth / 2 - e.strokeWidth;
                        switch (u && (g = -e.barWidth / 2 - e.strokeWidth), t.config.chart.stacked || "rounded" === this.barCtx.barOptions.endingShape && (d += g / 2), this.barCtx.barOptions.endingShape) {
                            case"flat":
                                c = r.line(e.barXPosition + e.barWidth - e.strokeWidth, d);
                                break;
                            case"rounded":
                                c = r.quadraticCurve(e.barXPosition + (e.barWidth - e.strokeWidth) / 2, d - g, e.barXPosition + e.barWidth - e.strokeWidth, d)
                        }
                    }
                    return {path: c, ending_p_from: "", newY: d}
                }
            }]) && Tt(e.prototype, i), a && Tt(e, a), t
        }();

        function Ot(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function zt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ot(Object(i), !0).forEach((function (e) {
                    It(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ot(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function It(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function Mt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Xt = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w;
                var a = this.w;
                this.barOptions = a.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = a.config.stroke.width, this.isNullValue = !1, this.isTimelineBar = "datetime" === a.config.xaxis.type && a.globals.seriesRangeBarTimeline.length, this.xyRatios = i, null !== this.xyRatios && (this.xRatio = i.xRatio, this.yRatio = i.yRatio, this.invertedXRatio = i.invertedXRatio, this.invertedYRatio = i.invertedYRatio, this.baseLineY = i.baseLineY, this.baseLineInvertedY = i.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.barHelpers = new Et(this)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "draw", value: function (t, e) {
                    var i = this.w, a = new p(this.ctx), s = new $(this.ctx, i);
                    t = s.getLogSeries(t), this.series = t, this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
                    var r = a.group({class: "apexcharts-bar-series apexcharts-plot-series"});
                    i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");
                    for (var o = 0, l = 0; o < t.length; o++, l++) {
                        var h, c, d, u, g = void 0, f = void 0, x = [], b = [], v = i.globals.comboCharts ? e[o] : o,
                            m = a.group({
                                class: "apexcharts-series",
                                rel: o + 1,
                                seriesName: n.escapeString(i.globals.seriesNames[v]),
                                "data:realIndex": v
                            });
                        this.ctx.series.addCollapsedClassToSeries(m, v), t[o].length > 0 && (this.visibleI = this.visibleI + 1);
                        var y = 0, w = 0;
                        this.yRatio.length > 1 && (this.yaxisIndex = v), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
                        var k = this.barHelpers.initialPositions();
                        f = k.y, y = k.barHeight, c = k.yDivision, u = k.zeroW, g = k.x, w = k.barWidth, h = k.xDivision, d = k.zeroH, this.horizontal || b.push(g + w / 2);
                        for (var S = a.group({class: "apexcharts-datalabels"}), A = 0; A < i.globals.dataPoints; A++) {
                            var C = this.barHelpers.getStrokeWidth(o, A, v), P = null, L = {
                                indexes: {i: o, j: A, realIndex: v, bc: l},
                                x: g,
                                y: f,
                                strokeWidth: C,
                                elSeries: m
                            };
                            this.isHorizontal ? (P = this.drawBarPaths(zt({}, L, {
                                barHeight: y,
                                zeroW: u,
                                yDivision: c
                            })), w = this.series[o][A] / this.invertedYRatio) : (P = this.drawColumnPaths(zt({}, L, {
                                xDivision: h,
                                barWidth: w,
                                zeroH: d
                            })), y = this.series[o][A] / this.yRatio[this.yaxisIndex]), f = P.y, g = P.x, A > 0 && b.push(g + w / 2), x.push(f);
                            var T = this.barHelpers.getPathFillColor(t, o, A, v);
                            this.renderSeries({
                                realIndex: v,
                                pathFill: T,
                                j: A,
                                i: o,
                                pathFrom: P.pathFrom,
                                pathTo: P.pathTo,
                                strokeWidth: C,
                                elSeries: m,
                                x: g,
                                y: f,
                                series: t,
                                barHeight: y,
                                barWidth: w,
                                elDataLabelsWrap: S,
                                visibleSeries: this.visibleI,
                                type: "bar"
                            })
                        }
                        i.globals.seriesXvalues[v] = b, i.globals.seriesYvalues[v] = x, r.add(m)
                    }
                    return r
                }
            }, {
                key: "renderSeries", value: function (t) {
                    var e = t.realIndex, i = t.pathFill, a = t.lineFill, s = t.j, r = t.i, n = t.pathFrom, o = t.pathTo,
                        h = t.strokeWidth, c = t.elSeries, d = t.x, u = t.y, g = t.y1, f = t.y2, x = t.series,
                        b = t.barHeight, v = t.barWidth, m = t.barYPosition, y = t.elDataLabelsWrap,
                        w = t.visibleSeries, k = t.type, S = this.w, A = new p(this.ctx);
                    a || (a = this.barOptions.distributed ? S.globals.stroke.colors[s] : S.globals.stroke.colors[e]), S.config.series[r].data[s] && S.config.series[r].data[s].strokeColor && (a = S.config.series[r].data[s].strokeColor), this.isNullValue && (i = "none");
                    var C = s / S.config.chart.animations.animateGradually.delay * (S.config.chart.animations.speed / S.globals.dataPoints) / 2.4,
                        P = A.renderPaths({
                            i: r,
                            j: s,
                            realIndex: e,
                            pathFrom: n,
                            pathTo: o,
                            stroke: a,
                            strokeWidth: h,
                            strokeLineCap: S.config.stroke.lineCap,
                            fill: i,
                            animationDelay: C,
                            initialSpeed: S.config.chart.animations.speed,
                            dataChangeSpeed: S.config.chart.animations.dynamicAnimation.speed,
                            className: "apexcharts-".concat(k, "-area")
                        });
                    P.attr("clip-path", "url(#gridRectMask".concat(S.globals.cuid, ")")), void 0 !== g && void 0 !== f && (P.attr("data-range-y1", g), P.attr("data-range-y2", f)), new l(this.ctx).setSelectionFilter(P, e, s), c.add(P);
                    var L = new Lt(this).handleBarDataLabels({
                        x: d,
                        y: u,
                        y1: g,
                        y2: f,
                        i: r,
                        j: s,
                        series: x,
                        realIndex: e,
                        barHeight: b,
                        barWidth: v,
                        barYPosition: m,
                        renderedPath: P,
                        visibleSeries: w
                    });
                    return null !== L && y.add(L), c.add(y), c
                }
            }, {
                key: "drawBarPaths", value: function (t) {
                    var e = t.indexes, i = t.barHeight, a = t.strokeWidth, s = t.zeroW, r = t.x, n = t.y,
                        o = t.yDivision, l = t.elSeries, h = this.w, c = new p(this.ctx), d = e.i, u = e.j,
                        g = e.realIndex, f = e.bc;
                    h.globals.isXNumeric && (n = (h.globals.seriesX[d][u] - h.globals.minX) / this.invertedXRatio - i);
                    var x = n + i * this.visibleI, b = c.move(s, x), v = c.move(s, x);
                    h.globals.previousPaths.length > 0 && (v = this.getPreviousPath(g, u));
                    var m = {
                        barHeight: i,
                        strokeWidth: a,
                        barYPosition: x,
                        x: r = void 0 === this.series[d][u] || null === this.series[d][u] ? s : s + this.series[d][u] / this.invertedYRatio - 2 * (this.isReversed ? this.series[d][u] / this.invertedYRatio : 0),
                        zeroW: s
                    }, y = this.barHelpers.getBarEndingShape(h, m, this.series, d, u);
                    if (b = b + c.line(y.newX, x) + y.path + c.line(s, x + i - a) + c.line(s, x), v = v + c.line(s, x) + y.ending_p_from + c.line(s, x + i - a) + c.line(s, x + i - a) + c.line(s, x), h.globals.isXNumeric || (n += o), this.barOptions.colors.backgroundBarColors.length > 0 && 0 === d) {
                        f >= this.barOptions.colors.backgroundBarColors.length && (f = 0);
                        var w = this.barOptions.colors.backgroundBarColors[f],
                            k = c.drawRect(0, x - i * this.visibleI, h.globals.gridWidth, i * this.seriesLen, 0, w, this.barOptions.colors.backgroundBarOpacity);
                        l.add(k), k.node.classList.add("apexcharts-backgroundBar")
                    }
                    return {pathTo: b, pathFrom: v, x: r, y: n, barYPosition: x}
                }
            }, {
                key: "drawColumnPaths", value: function (t) {
                    var e = t.indexes, i = t.x, a = t.y, s = t.xDivision, r = t.barWidth, n = t.zeroH,
                        o = t.strokeWidth, l = t.elSeries, h = this.w, c = new p(this.ctx), d = e.i, u = e.j,
                        g = e.realIndex, f = e.bc;
                    if (h.globals.isXNumeric) {
                        var x = d;
                        h.globals.seriesX[d].length || (x = h.globals.maxValsInArrayIndex), i = (h.globals.seriesX[x][u] - h.globals.minX) / this.xRatio - r / 2
                    }
                    var b = i + r * this.visibleI, v = c.move(b, n), m = c.move(b, n);
                    h.globals.previousPaths.length > 0 && (m = this.getPreviousPath(g, u));
                    var y = {
                        barWidth: r,
                        strokeWidth: o,
                        barXPosition: b,
                        y: a = void 0 === this.series[d][u] || null === this.series[d][u] ? n : n - this.series[d][u] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[d][u] / this.yRatio[this.yaxisIndex] : 0),
                        zeroH: n
                    }, w = this.barHelpers.getBarEndingShape(h, y, this.series, d, u);
                    if (v = v + c.line(b, w.newY) + w.path + c.line(b + r - o, n) + c.line(b - o / 2, n), m = m + c.line(b, n) + w.ending_p_from + c.line(b + r - o, n) + c.line(b + r - o, n) + c.line(b - o / 2, n), h.globals.isXNumeric || (i += s), this.barOptions.colors.backgroundBarColors.length > 0 && 0 === d) {
                        f >= this.barOptions.colors.backgroundBarColors.length && (f = 0);
                        var k = this.barOptions.colors.backgroundBarColors[f],
                            S = c.drawRect(b - r * this.visibleI, 0, r * this.seriesLen, h.globals.gridHeight, 0, k, this.barOptions.colors.backgroundBarOpacity);
                        l.add(S), S.node.classList.add("apexcharts-backgroundBar")
                    }
                    return {pathTo: v, pathFrom: m, x: i, y: a, barXPosition: b}
                }
            }, {
                key: "getPreviousPath", value: function (t, e) {
                    for (var i, a = this.w, s = 0; s < a.globals.previousPaths.length; s++) {
                        var r = a.globals.previousPaths[s];
                        r.paths && r.paths.length > 0 && parseInt(r.realIndex, 10) === parseInt(t, 10) && void 0 !== a.globals.previousPaths[s].paths[e] && (i = a.globals.previousPaths[s].paths[e].d)
                    }
                    return i
                }
            }]) && Mt(e.prototype, i), a && Mt(e, a), t
        }();

        function Yt(t) {
            return (Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Dt(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function Rt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Dt(Object(i), !0).forEach((function (e) {
                    Ft(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Dt(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Ft(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function Ht(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function Nt(t, e) {
            return !e || "object" !== Yt(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Wt(t) {
            return (Wt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Bt(t, e) {
            return (Bt = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        var jt = function (t) {
            function e() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Nt(this, Wt(e).apply(this, arguments))
            }

            var i, a, s;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Bt(t, e)
            }(e, t), i = e, (a = [{
                key: "draw", value: function (t, e) {
                    var i = this.w;
                    this.graphics = new p(this.ctx), this.bar = new Xt(this.ctx, this.xyRatios);
                    var a = new $(this.ctx, i);
                    t = a.getLogSeries(t), this.yRatio = a.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t), "100%" === i.config.chart.stackType && (t = i.globals.seriesPercent.slice()), this.series = t, this.totalItems = 0, this.prevY = [], this.prevX = [], this.prevYF = [], this.prevXF = [], this.prevYVal = [], this.prevXVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [], this.yArrj = [], this.yArrjF = [], this.yArrjVal = [];
                    for (var s = 0; s < t.length; s++) t[s].length > 0 && (this.totalItems += t[s].length);
                    for (var r = this.graphics.group({class: "apexcharts-bar-series apexcharts-plot-series"}), o = 0, l = 0, h = 0, c = 0; h < t.length; h++, c++) {
                        var d = void 0, u = void 0, g = void 0, f = void 0, x = [], b = [],
                            v = i.globals.comboCharts ? e[h] : h;
                        this.yRatio.length > 1 && (this.yaxisIndex = v), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
                        var m = this.graphics.group({
                                class: "apexcharts-series",
                                seriesName: n.escapeString(i.globals.seriesNames[v]),
                                rel: h + 1,
                                "data:realIndex": v
                            }), y = this.graphics.group({class: "apexcharts-datalabels"}), w = 0, k = 0,
                            S = this.initialPositions(o, l, d, u, g, f);
                        l = S.y, w = S.barHeight, u = S.yDivision, f = S.zeroW, o = S.x, k = S.barWidth, d = S.xDivision, g = S.zeroH, this.yArrj = [], this.yArrjF = [], this.yArrjVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [];
                        for (var A = 0; A < i.globals.dataPoints; A++) {
                            var C = this.barHelpers.getStrokeWidth(h, A, v), P = {
                                indexes: {i: h, j: A, realIndex: v, bc: c},
                                strokeWidth: C,
                                x: o,
                                y: l,
                                elSeries: m
                            }, L = null;
                            this.isHorizontal ? (L = this.drawBarPaths(Rt({}, P, {
                                zeroW: f,
                                barHeight: w,
                                yDivision: u
                            })), k = this.series[h][A] / this.invertedYRatio) : (L = this.drawColumnPaths(Rt({}, P, {
                                xDivision: d,
                                barWidth: k,
                                zeroH: g
                            })), w = this.series[h][A] / this.yRatio[this.yaxisIndex]), l = L.y, o = L.x, x.push(o), b.push(l);
                            var T = this.barHelpers.getPathFillColor(t, h, A, v);
                            m = this.renderSeries({
                                realIndex: v,
                                pathFill: T,
                                j: A,
                                i: h,
                                pathFrom: L.pathFrom,
                                pathTo: L.pathTo,
                                strokeWidth: C,
                                elSeries: m,
                                x: o,
                                y: l,
                                series: t,
                                barHeight: w,
                                barWidth: k,
                                elDataLabelsWrap: y,
                                type: "bar",
                                visibleSeries: 0
                            })
                        }
                        i.globals.seriesXvalues[v] = x, i.globals.seriesYvalues[v] = b, this.prevY.push(this.yArrj), this.prevYF.push(this.yArrjF), this.prevYVal.push(this.yArrjVal), this.prevX.push(this.xArrj), this.prevXF.push(this.xArrjF), this.prevXVal.push(this.xArrjVal), r.add(m)
                    }
                    return r
                }
            }, {
                key: "initialPositions", value: function (t, e, i, a, s, r) {
                    var n, o, l = this.w;
                    return this.isHorizontal ? (n = (n = a = l.globals.gridHeight / l.globals.dataPoints) * parseInt(l.config.plotOptions.bar.barHeight, 10) / 100, r = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e = (a - n) / 2) : (o = i = l.globals.gridWidth / l.globals.dataPoints, o = l.globals.isXNumeric ? (i = l.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : o * parseInt(l.config.plotOptions.bar.columnWidth, 10) / 100, s = this.baseLineY[this.yaxisIndex] + (this.isReversed ? l.globals.gridHeight : 0) - (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t = l.globals.padHorizontal + (i - o) / 2), {
                        x: t,
                        y: e,
                        yDivision: a,
                        xDivision: i,
                        barHeight: n,
                        barWidth: o,
                        zeroH: s,
                        zeroW: r
                    }
                }
            }, {
                key: "drawBarPaths", value: function (t) {
                    for (var e, i = t.indexes, a = t.barHeight, s = t.strokeWidth, r = t.zeroW, n = t.x, o = t.y, l = t.yDivision, h = t.elSeries, c = this.w, d = o, u = i.i, g = i.j, f = i.realIndex, p = i.bc, x = 0, b = 0; b < this.prevXF.length; b++) x += this.prevXF[b][g];
                    if (u > 0) {
                        var v = r;
                        this.prevXVal[u - 1][g] < 0 ? v = this.series[u][g] >= 0 ? this.prevX[u - 1][g] + x - 2 * (this.isReversed ? x : 0) : this.prevX[u - 1][g] : this.prevXVal[u - 1][g] >= 0 && (v = this.series[u][g] >= 0 ? this.prevX[u - 1][g] : this.prevX[u - 1][g] - x + 2 * (this.isReversed ? x : 0)), e = v
                    } else e = r;
                    n = null === this.series[u][g] ? e : e + this.series[u][g] / this.invertedYRatio - 2 * (this.isReversed ? this.series[u][g] / this.invertedYRatio : 0);
                    var m = {barHeight: a, strokeWidth: s, invertedYRatio: this.invertedYRatio, barYPosition: d, x: n},
                        y = this.barHelpers.getBarEndingShape(c, m, this.series, u, g);
                    this.series.length > 1 && u !== this.endingShapeOnSeriesNumber && (y.path = this.graphics.line(y.newX, d + a - s)), this.xArrj.push(y.newX), this.xArrjF.push(Math.abs(e - y.newX)), this.xArrjVal.push(this.series[u][g]);
                    var w = this.graphics.move(e, d), k = this.graphics.move(e, d);
                    if (c.globals.previousPaths.length > 0 && (k = this.bar.getPreviousPath(f, g, !1)), w = w + this.graphics.line(y.newX, d) + y.path + this.graphics.line(e, d + a - s) + this.graphics.line(e, d), k = k + this.graphics.line(e, d) + this.graphics.line(e, d + a - s) + this.graphics.line(e, d + a - s) + this.graphics.line(e, d + a - s) + this.graphics.line(e, d), c.config.plotOptions.bar.colors.backgroundBarColors.length > 0 && 0 === u) {
                        p >= c.config.plotOptions.bar.colors.backgroundBarColors.length && (p = 0);
                        var S = c.config.plotOptions.bar.colors.backgroundBarColors[p],
                            A = this.graphics.drawRect(0, d, c.globals.gridWidth, a, 0, S, c.config.plotOptions.bar.colors.backgroundBarOpacity);
                        h.add(A), A.node.classList.add("apexcharts-backgroundBar")
                    }
                    return {pathTo: w, pathFrom: k, x: n, y: o += l}
                }
            }, {
                key: "drawColumnPaths", value: function (t) {
                    var e = t.indexes, i = t.x, a = t.y, s = t.xDivision, r = t.barWidth, n = t.zeroH,
                        o = t.strokeWidth, l = t.elSeries, h = this.w, c = e.i, d = e.j, u = e.realIndex, g = e.bc;
                    if (h.globals.isXNumeric) {
                        var f = h.globals.seriesX[c][d];
                        f || (f = 0), i = (f - h.globals.minX) / this.xRatio - r / 2
                    }
                    for (var p, x = i, b = 0, v = 0; v < this.prevYF.length; v++) b += this.prevYF[v][d];
                    if (c > 0 && !h.globals.isXNumeric || c > 0 && h.globals.isXNumeric && h.globals.seriesX[c - 1][d] === h.globals.seriesX[c][d]) {
                        var m = this.prevY[c - 1][d];
                        p = this.prevYVal[c - 1][d] < 0 ? this.series[c][d] >= 0 ? m - b + 2 * (this.isReversed ? b : 0) : m : this.series[c][d] >= 0 ? m : m + b - 2 * (this.isReversed ? b : 0)
                    } else p = h.globals.gridHeight - n;
                    a = p - this.series[c][d] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[c][d] / this.yRatio[this.yaxisIndex] : 0);
                    var y = {barWidth: r, strokeWidth: o, yRatio: this.yRatio[this.yaxisIndex], barXPosition: x, y: a},
                        w = this.barHelpers.getBarEndingShape(h, y, this.series, c, d);
                    this.yArrj.push(w.newY), this.yArrjF.push(Math.abs(p - w.newY)), this.yArrjVal.push(this.series[c][d]);
                    var k = this.graphics.move(x, p), S = this.graphics.move(x, p);
                    if (h.globals.previousPaths.length > 0 && (S = this.bar.getPreviousPath(u, d, !1)), k = k + this.graphics.line(x, w.newY) + w.path + this.graphics.line(x + r - o, p) + this.graphics.line(x - o / 2, p), S = S + this.graphics.line(x, p) + this.graphics.line(x + r - o, p) + this.graphics.line(x + r - o, p) + this.graphics.line(x + r - o, p) + this.graphics.line(x - o / 2, p), h.config.plotOptions.bar.colors.backgroundBarColors.length > 0 && 0 === c) {
                        g >= h.config.plotOptions.bar.colors.backgroundBarColors.length && (g = 0);
                        var A = h.config.plotOptions.bar.colors.backgroundBarColors[g],
                            C = this.graphics.drawRect(x, 0, r, h.globals.gridHeight, 0, A, h.config.plotOptions.bar.colors.backgroundBarOpacity);
                        l.add(C), C.node.classList.add("apexcharts-backgroundBar")
                    }
                    return i += s, {pathTo: k, pathFrom: S, x: h.globals.isXNumeric ? i - s : i, y: a}
                }
            }]) && Ht(i.prototype, a), s && Ht(i, s), e
        }(Xt);

        function Vt(t) {
            return (Vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Gt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function _t(t, e) {
            return !e || "object" !== Vt(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Ut(t) {
            return (Ut = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function qt(t, e) {
            return (qt = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        var Zt = function (t) {
            function e() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), _t(this, Ut(e).apply(this, arguments))
            }

            var i, a, s;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && qt(t, e)
            }(e, t), i = e, (a = [{
                key: "draw", value: function (t, e) {
                    var i = this.w, a = new p(this.ctx), s = new bt(this.ctx);
                    this.candlestickOptions = this.w.config.plotOptions.candlestick;
                    var r = new $(this.ctx, i);
                    t = r.getLogSeries(t), this.series = t, this.yRatio = r.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
                    for (var o = a.group({class: "apexcharts-candlestick-series apexcharts-plot-series"}), l = 0; l < t.length; l++) {
                        var h, c, d, u, g = void 0, f = void 0, x = [], b = [], v = i.globals.comboCharts ? e[l] : l,
                            m = a.group({
                                class: "apexcharts-series",
                                seriesName: n.escapeString(i.globals.seriesNames[v]),
                                rel: l + 1,
                                "data:realIndex": v
                            });
                        t[l].length > 0 && (this.visibleI = this.visibleI + 1), this.yRatio.length > 1 && (this.yaxisIndex = v);
                        var y = this.barHelpers.initialPositions();
                        f = y.y, d = y.barHeight, g = y.x, u = y.barWidth, h = y.xDivision, c = y.zeroH, b.push(g + u / 2);
                        for (var w = a.group({class: "apexcharts-datalabels"}), k = 0; k < i.globals.dataPoints; k++) {
                            var S, A = this.barHelpers.getStrokeWidth(l, k, v), C = this.drawCandleStickPaths({
                                indexes: {i: l, j: k, realIndex: v},
                                x: g,
                                y: f,
                                xDivision: h,
                                barWidth: u,
                                zeroH: c,
                                strokeWidth: A,
                                elSeries: m
                            });
                            f = C.y, g = C.x, S = C.color, k > 0 && b.push(g + u / 2), x.push(f);
                            var P = s.fillPath({seriesNumber: v, color: S, value: t[l][k]}),
                                L = this.candlestickOptions.wick.useFillColor ? S : void 0;
                            this.renderSeries({
                                realIndex: v,
                                pathFill: P,
                                lineFill: L,
                                j: k,
                                i: l,
                                pathFrom: C.pathFrom,
                                pathTo: C.pathTo,
                                strokeWidth: A,
                                elSeries: m,
                                x: g,
                                y: f,
                                series: t,
                                barHeight: d,
                                barWidth: u,
                                elDataLabelsWrap: w,
                                visibleSeries: this.visibleI,
                                type: "candlestick"
                            })
                        }
                        i.globals.seriesXvalues[v] = b, i.globals.seriesYvalues[v] = x, o.add(m)
                    }
                    return o
                }
            }, {
                key: "drawCandleStickPaths", value: function (t) {
                    var e = t.indexes, i = t.x, a = (t.y, t.xDivision), s = t.barWidth, r = t.zeroH, n = t.strokeWidth,
                        o = this.w, l = new p(this.ctx), h = e.i, c = e.j, d = !0,
                        u = o.config.plotOptions.candlestick.colors.upward,
                        g = o.config.plotOptions.candlestick.colors.downward, f = this.yRatio[this.yaxisIndex],
                        x = e.realIndex, b = this.getOHLCValue(x, c), v = r, m = r;
                    b.o > b.c && (d = !1);
                    var y = Math.min(b.o, b.c), w = Math.max(b.o, b.c);
                    o.globals.isXNumeric && (i = (o.globals.seriesX[x][c] - o.globals.minX) / this.xRatio - s / 2);
                    var k = i + s * this.visibleI;
                    void 0 === this.series[h][c] || null === this.series[h][c] ? y = r : (y = r - y / f, w = r - w / f, v = r - b.h / f, m = r - b.l / f);
                    var S = l.move(k, r), A = l.move(k, y);
                    return o.globals.previousPaths.length > 0 && (A = this.getPreviousPath(x, c, !0)), S = l.move(k, w) + l.line(k + s / 2, w) + l.line(k + s / 2, v) + l.line(k + s / 2, w) + l.line(k + s, w) + l.line(k + s, y) + l.line(k + s / 2, y) + l.line(k + s / 2, m) + l.line(k + s / 2, y) + l.line(k, y) + l.line(k, w - n / 2), A += l.move(k, y), o.globals.isXNumeric || (i += a), {
                        pathTo: S,
                        pathFrom: A,
                        x: i,
                        y: w,
                        barXPosition: k,
                        color: d ? u : g
                    }
                }
            }, {
                key: "getOHLCValue", value: function (t, e) {
                    var i = this.w;
                    return {
                        o: i.globals.seriesCandleO[t][e],
                        h: i.globals.seriesCandleH[t][e],
                        l: i.globals.seriesCandleL[t][e],
                        c: i.globals.seriesCandleC[t][e]
                    }
                }
            }]) && Gt(i.prototype, a), s && Gt(i, s), e
        }(Xt);

        function $t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Jt = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "drawXCrosshairs", value: function () {
                    var t = this.w, e = new p(this.ctx), i = new l(this.ctx),
                        a = t.config.xaxis.crosshairs.fill.gradient, s = t.config.xaxis.crosshairs.dropShadow,
                        r = t.config.xaxis.crosshairs.fill.type, o = a.colorFrom, h = a.colorTo, c = a.opacityFrom,
                        d = a.opacityTo, u = a.stops, g = s.enabled, f = s.left, x = s.top, b = s.blur, v = s.color,
                        m = s.opacity, y = t.config.xaxis.crosshairs.fill.color;
                    if (t.config.xaxis.crosshairs.show) {
                        "gradient" === r && (y = e.drawGradient("vertical", o, h, c, d, null, u, null));
                        var w = e.drawRect();
                        1 === t.config.xaxis.crosshairs.width && (w = e.drawLine()), w.attr({
                            class: "apexcharts-xcrosshairs",
                            x: 0,
                            y: 0,
                            y2: t.globals.gridHeight,
                            width: n.isNumber(t.config.xaxis.crosshairs.width) ? t.config.xaxis.crosshairs.width : 0,
                            height: t.globals.gridHeight,
                            fill: y,
                            filter: "none",
                            "fill-opacity": t.config.xaxis.crosshairs.opacity,
                            stroke: t.config.xaxis.crosshairs.stroke.color,
                            "stroke-width": t.config.xaxis.crosshairs.stroke.width,
                            "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray
                        }), g && (w = i.dropShadow(w, {
                            left: f,
                            top: x,
                            blur: b,
                            color: v,
                            opacity: m
                        })), t.globals.dom.elGraphical.add(w)
                    }
                }
            }, {
                key: "drawYCrosshairs", value: function () {
                    var t = this.w, e = new p(this.ctx), i = t.config.yaxis[0].crosshairs;
                    if (t.config.yaxis[0].crosshairs.show) {
                        var a = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
                        a.attr({class: "apexcharts-ycrosshairs"}), t.globals.dom.elGraphical.add(a)
                    }
                    var s = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, 0, 0);
                    s.attr({class: "apexcharts-ycrosshairs-hidden"}), t.globals.dom.elGraphical.add(s)
                }
            }]) && $t(e.prototype, i), a && $t(e, a), t
        }();

        function Qt(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                    return i
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Kt(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var te = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.xRatio = i.xRatio, this.yRatio = i.yRatio, this.negRange = !1, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.width
            }

            var e, i, a;
            return e = t, (i = [{
                key: "draw", value: function (t) {
                    var e = this.w, i = new p(this.ctx), a = i.group({class: "apexcharts-heatmap"});
                    a.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")"));
                    var s = e.globals.gridWidth / e.globals.dataPoints,
                        r = e.globals.gridHeight / e.globals.series.length, o = 0, h = !1;
                    this.checkColorRange();
                    var c = t.slice();
                    e.config.yaxis[0].reversed && (h = !0, c.reverse());
                    for (var d = h ? 0 : c.length - 1; h ? d < c.length : d >= 0; h ? d++ : d--) {
                        var u = i.group({
                            class: "apexcharts-series apexcharts-heatmap-series",
                            seriesName: n.escapeString(e.globals.seriesNames[d]),
                            rel: d + 1,
                            "data:realIndex": d
                        });
                        if (e.config.chart.dropShadow.enabled) {
                            var g = e.config.chart.dropShadow;
                            new l(this.ctx).dropShadow(u, g, d)
                        }
                        for (var f = 0, x = 0; x < c[d].length; x++) {
                            var b = 1, v = e.config.plotOptions.heatmap.shadeIntensity,
                                m = this.determineHeatColor(d, x);
                            b = e.globals.hasNegs || this.negRange ? e.config.plotOptions.heatmap.reverseNegativeShade ? m.percent < 0 ? m.percent / 100 * (1.25 * v) : (1 - m.percent / 100) * (1.25 * v) : m.percent < 0 ? 1 - (1 + m.percent / 100) * v : (1 - m.percent / 100) * v : 1 - m.percent / 100;
                            var y = m.color, w = new n;
                            e.config.plotOptions.heatmap.enableShades && (y = n.hexToRgba(w.shadeColor(b, m.color), e.config.fill.opacity)), "image" === e.config.fill.type && (y = new bt(this.ctx).fillPath({
                                seriesNumber: d,
                                opacity: e.globals.hasNegs ? m.percent < 0 ? 1 - (1 + m.percent / 100) : v + m.percent / 100 : m.percent / 100,
                                patternID: n.randomId(),
                                width: e.config.fill.image.width ? e.config.fill.image.width : s,
                                height: e.config.fill.image.height ? e.config.fill.image.height : r
                            }));
                            var k = this.rectRadius, S = i.drawRect(f, o, s, r, k);
                            if (S.attr({
                                cx: f,
                                cy: o
                            }), S.node.classList.add("apexcharts-heatmap-rect"), u.add(S), S.attr({
                                fill: y,
                                i: d,
                                index: d,
                                j: x,
                                val: c[d][x],
                                "stroke-width": this.strokeWidth,
                                stroke: e.globals.stroke.colors[0],
                                color: y
                            }), S.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, S)), S.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, S)), S.node.addEventListener("mousedown", i.pathMouseDown.bind(this, S)), e.config.chart.animations.enabled && !e.globals.dataChanged) {
                                var A = 1;
                                e.globals.resized || (A = e.config.chart.animations.speed), this.animateHeatMap(S, f, o, s, r, A)
                            }
                            if (e.globals.dataChanged) {
                                var C = 1;
                                if (this.dynamicAnim.enabled && e.globals.shouldAnimate) {
                                    C = this.dynamicAnim.speed;
                                    var P = e.globals.previousPaths[d] && e.globals.previousPaths[d][x] && e.globals.previousPaths[d][x].color;
                                    P || (P = "rgba(255, 255, 255, 0)"), this.animateHeatColor(S, n.isColorHex(P) ? P : n.rgb2hex(P), n.isColorHex(y) ? y : n.rgb2hex(y), C)
                                }
                            }
                            var L = this.calculateHeatmapDataLabels({
                                x: f,
                                y: o,
                                i: d,
                                j: x,
                                series: c,
                                rectHeight: r,
                                rectWidth: s
                            });
                            null !== L && u.add(L), f += s
                        }
                        o += r, a.add(u)
                    }
                    var T = e.globals.yAxisScale[0].result.slice();
                    e.config.yaxis[0].reversed ? T.unshift("") : T.push(""), e.globals.yAxisScale[0].result = T;
                    var E = e.globals.gridHeight / e.globals.series.length;
                    return e.config.yaxis[0].labels.offsetY = -E / 2, a
                }
            }, {
                key: "checkColorRange", value: function () {
                    var t = this, e = this.w.config.plotOptions.heatmap;
                    e.colorScale.ranges.length > 0 && e.colorScale.ranges.map((function (e, i) {
                        e.from < 0 && (t.negRange = !0)
                    }))
                }
            }, {
                key: "determineHeatColor", value: function (t, e) {
                    var i = this.w, a = i.globals.series[t][e], s = i.config.plotOptions.heatmap,
                        r = s.colorScale.inverse ? e : t, n = i.globals.colors[r],
                        o = Math.min.apply(Math, Qt(i.globals.series[t])),
                        l = Math.max.apply(Math, Qt(i.globals.series[t]));
                    s.distributed || (o = i.globals.minY, l = i.globals.maxY), void 0 !== s.colorScale.min && (o = s.colorScale.min < i.globals.minY ? s.colorScale.min : i.globals.minY, l = s.colorScale.max > i.globals.maxY ? s.colorScale.max : i.globals.maxY);
                    var h = Math.abs(l) + Math.abs(o);
                    0 === a && (a = 1e-6);
                    var c = 100 * a / (0 === h ? h - 1e-6 : h);
                    return s.colorScale.ranges.length > 0 && s.colorScale.ranges.map((function (t, e) {
                        if (a >= t.from && a <= t.to) {
                            n = t.color, o = t.from, l = t.to;
                            var i = Math.abs(l) + Math.abs(o);
                            c = 100 * a / (0 === i ? i - 1e-6 : i)
                        }
                    })), {color: n, percent: c}
                }
            }, {
                key: "calculateHeatmapDataLabels", value: function (t) {
                    var e = t.x, i = t.y, a = t.i, s = t.j, r = (t.series, t.rectHeight), n = t.rectWidth, o = this.w,
                        l = o.config.dataLabels, h = new p(this.ctx), c = new St(this.ctx), d = l.formatter, u = null;
                    if (l.enabled) {
                        u = h.group({class: "apexcharts-data-labels"});
                        var g = l.offsetX, f = l.offsetY, x = e + n / 2 + g,
                            b = i + r / 2 + parseFloat(l.style.fontSize) / 3 + f,
                            v = d(o.globals.series[a][s], {seriesIndex: a, dataPointIndex: s, w: o});
                        c.plotDataLabelsText({x: x, y: b, text: v, i: a, j: s, parent: u, dataLabelsConfig: l})
                    }
                    return u
                }
            }, {
                key: "animateHeatMap", value: function (t, e, i, a, s, r) {
                    var n = new c(this.ctx);
                    n.animateRect(t, {x: e + a / 2, y: i + s / 2, width: 0, height: 0}, {
                        x: e,
                        y: i,
                        width: a,
                        height: s
                    }, r, (function () {
                        n.animationCompleted(t)
                    }))
                }
            }, {
                key: "animateHeatColor", value: function (t, e, i, a) {
                    t.attr({fill: e}).animate(a).attr({fill: i})
                }
            }]) && Kt(e.prototype, i), a && Kt(e, a), t
        }();

        function ee(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ie = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels;
                var i = this.w;
                this.lineColorArr = void 0 !== i.globals.stroke.colors ? i.globals.stroke.colors : i.globals.colors, this.defaultSize = i.globals.svgHeight < i.globals.svgWidth ? i.globals.gridHeight : i.globals.gridWidth, this.centerY = this.defaultSize / 2, this.centerX = i.globals.gridWidth / 2, this.fullAngle = 360, i.globals.radialSize = this.defaultSize / 2.05 - i.config.stroke.width - i.config.chart.dropShadow.blur, void 0 !== i.config.plotOptions.pie.size && (i.globals.radialSize = i.config.plotOptions.pie.size), this.donutSize = i.globals.radialSize * parseInt(i.config.plotOptions.pie.donut.size, 10) / 100, this.sliceLabels = [], this.prevSectorAngleArr = []
            }

            var e, i, a;
            return e = t, (i = [{
                key: "draw", value: function (t) {
                    var e = this.w, i = new p(this.ctx), a = i.group({class: "apexcharts-pie"});
                    if (e.globals.noData) return a;
                    for (var s = 0, r = 0; r < t.length; r++) s += n.negToZero(t[r]);
                    var o = [], l = i.group();
                    0 === s && (s = 1e-5);
                    for (var h = 0; h < t.length; h++) {
                        var c = this.fullAngle * n.negToZero(t[h]) / s;
                        o.push(c)
                    }
                    if (e.globals.dataChanged) {
                        for (var d, u = 0, g = 0; g < e.globals.previousPaths.length; g++) u += n.negToZero(e.globals.previousPaths[g]);
                        for (var f = 0; f < e.globals.previousPaths.length; f++) d = this.fullAngle * n.negToZero(e.globals.previousPaths[f]) / u, this.prevSectorAngleArr.push(d)
                    }
                    this.donutSize < 0 && (this.donutSize = 0);
                    var x = e.config.plotOptions.pie.customScale, b = e.globals.gridWidth / 2,
                        v = e.globals.gridHeight / 2, m = b - e.globals.gridWidth / 2 * x,
                        y = v - e.globals.gridHeight / 2 * x;
                    if ("donut" === e.config.chart.type) {
                        var w = i.drawCircle(this.donutSize);
                        w.attr({
                            cx: this.centerX,
                            cy: this.centerY,
                            fill: e.config.plotOptions.pie.donut.background
                        }), l.add(w)
                    }
                    var k = this.drawArcs(o, t);
                    if (this.sliceLabels.forEach((function (t) {
                        k.add(t)
                    })), l.attr({transform: "translate(".concat(m, ", ").concat(y - 5, ") scale(").concat(x, ")")}), a.attr({
                        "data:innerTranslateX": m,
                        "data:innerTranslateY": y - 25
                    }), l.add(k), a.add(l), this.donutDataLabels.show) {
                        var S = this.renderInnerDataLabels(this.donutDataLabels, {
                            hollowSize: this.donutSize,
                            centerX: this.centerX,
                            centerY: this.centerY,
                            opacity: this.donutDataLabels.show,
                            translateX: m,
                            translateY: y
                        });
                        a.add(S)
                    }
                    return a
                }
            }, {
                key: "drawArcs", value: function (t, e) {
                    var i = this.w, a = new l(this.ctx), s = new p(this.ctx), r = new bt(this.ctx),
                        o = s.group({class: "apexcharts-slices"}), h = 0, c = 0, d = 0, u = 0;
                    this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
                    for (var g = 0; g < t.length; g++) {
                        var f = s.group({
                            class: "apexcharts-series apexcharts-pie-series",
                            seriesName: n.escapeString(i.globals.seriesNames[g]),
                            rel: g + 1,
                            "data:realIndex": g
                        });
                        o.add(f), c = u, d = (h = d) + t[g], u = c + this.prevSectorAngleArr[g];
                        var x = d - h, b = r.fillPath({seriesNumber: g, size: i.globals.radialSize, value: e[g]}),
                            v = this.getChangedPath(c, u), m = s.drawPath({
                                d: v,
                                stroke: this.lineColorArr instanceof Array ? this.lineColorArr[g] : this.lineColorArr,
                                strokeWidth: this.strokeWidth,
                                fill: b,
                                fillOpacity: i.config.fill.opacity,
                                classes: "apexcharts-pie-area apexcharts-".concat(i.config.chart.type, "-slice-").concat(g)
                            });
                        if (m.attr({index: 0, j: g}), i.config.chart.dropShadow.enabled) {
                            var y = i.config.chart.dropShadow;
                            a.dropShadow(m, y, g)
                        }
                        this.addListeners(m, this.donutDataLabels), p.setAttrs(m.node, {
                            "data:angle": x,
                            "data:startAngle": h,
                            "data:strokeWidth": this.strokeWidth,
                            "data:value": e[g]
                        });
                        var w = {x: 0, y: 0};
                        "pie" === i.config.chart.type ? w = n.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, h + (d - h) / 2) : "donut" === i.config.chart.type && (w = n.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, h + (d - h) / 2)), f.add(m);
                        var k = 0;
                        if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : (k = (d - h) / this.fullAngle * i.config.chart.animations.speed, this.animDur = k + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(m, {
                            size: i.globals.radialSize,
                            endAngle: d,
                            startAngle: h,
                            prevStartAngle: c,
                            prevEndAngle: u,
                            animateStartingPos: !0,
                            i: g,
                            animBeginArr: this.animBeginArr,
                            dur: i.config.chart.animations.dynamicAnimation.speed
                        }) : this.animatePaths(m, {
                            size: i.globals.radialSize,
                            endAngle: d,
                            startAngle: h,
                            i: g,
                            totalItems: t.length - 1,
                            animBeginArr: this.animBeginArr,
                            dur: k
                        }), i.config.plotOptions.pie.expandOnClick && m.click(this.pieClicked.bind(this, g)), i.config.dataLabels.enabled) {
                            var S = w.x, A = w.y, C = 100 * (d - h) / 360 + "%";
                            if (0 !== x && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[g]) {
                                var P = i.config.dataLabels.formatter;
                                void 0 !== P && (C = P(i.globals.seriesPercent[g][0], {seriesIndex: g, w: i}));
                                var L = i.globals.dataLabels.style.colors[g], T = s.drawText({
                                    x: S,
                                    y: A,
                                    text: C,
                                    textAnchor: "middle",
                                    fontSize: i.config.dataLabels.style.fontSize,
                                    fontFamily: i.config.dataLabels.style.fontFamily,
                                    foreColor: L
                                });
                                if (i.config.dataLabels.dropShadow.enabled) {
                                    var E = i.config.dataLabels.dropShadow;
                                    a.dropShadow(T, E)
                                }
                                T.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && !1 === i.globals.resized && (T.node.classList.add("apexcharts-pie-label-delay"), T.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(T)
                            }
                        }
                    }
                    return o
                }
            }, {
                key: "addListeners", value: function (t, e) {
                    var i = new p(this.ctx);
                    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways || (t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e)))
                }
            }, {
                key: "animatePaths", value: function (t, e) {
                    var i = this.w, a = e.endAngle - e.startAngle, s = a, r = e.startAngle, n = e.startAngle;
                    void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (r = e.prevEndAngle, s = e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (a + n > this.fullAngle ? e.endAngle = e.endAngle - (a + n) : a + n < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (a + n)))), a === this.fullAngle && (a = this.fullAngle - .01), this.animateArc(t, r, n, a, s, e)
                }
            }, {
                key: "animateArc", value: function (t, e, i, a, s, r) {
                    var n, o = this, l = this.w, h = new c(this.ctx), d = r.size;
                    (isNaN(e) || isNaN(s)) && (e = i, s = a, r.dur = 0);
                    var u = a, g = i, f = e - i;
                    l.globals.dataChanged && r.shouldSetPrevPaths && (n = o.getPiePath({
                        me: o,
                        startAngle: g,
                        angle: s,
                        size: d
                    }), t.attr({d: n})), 0 !== r.dur ? t.animate(r.dur, l.globals.easing, r.animBeginArr[r.i]).afterAll((function () {
                        "pie" !== l.config.chart.type && "donut" !== l.config.chart.type || this.animate(300).attr({"stroke-width": l.config.stroke.width}), r.i === l.config.series.length - 1 && h.animationCompleted(t)
                    })).during((function (l) {
                        u = f + (a - f) * l, r.animateStartingPos && (u = s + (a - s) * l, g = e - s + (i - (e - s)) * l), n = o.getPiePath({
                            me: o,
                            startAngle: g,
                            angle: u,
                            size: d
                        }), t.node.setAttribute("data:pathOrig", n), t.attr({d: n})
                    })) : (n = o.getPiePath({
                        me: o,
                        startAngle: g,
                        angle: a,
                        size: d
                    }), r.isTrack || (l.globals.animationEnded = !0), t.node.setAttribute("data:pathOrig", n), t.attr({d: n}))
                }
            }, {
                key: "pieClicked", value: function (t) {
                    var e, i = this.w, a = this.w.globals.radialSize + (i.config.plotOptions.pie.expandOnClick ? 4 : 0),
                        s = i.globals.dom.Paper.select(".apexcharts-".concat(i.config.chart.type.toLowerCase(), "-slice-").concat(t)).members[0],
                        r = s.attr("d");
                    if ("true" !== s.attr("data:pieClicked")) {
                        var n = i.globals.dom.baseEl.querySelectorAll(".apexcharts-pie-area");
                        Array.prototype.forEach.call(n, (function (t) {
                            t.setAttribute("data:pieClicked", "false");
                            var e = t.getAttribute("data:pathOrig");
                            t.setAttribute("d", e)
                        })), s.attr("data:pieClicked", "true");
                        var o = parseInt(s.attr("data:startAngle"), 10), l = parseInt(s.attr("data:angle"), 10);
                        e = this.getPiePath({
                            me: this,
                            startAngle: o,
                            angle: l,
                            size: a
                        }), 360 !== l && s.plot(e).animate(1).plot(r).animate(100).plot(e)
                    } else {
                        s.attr({"data:pieClicked": "false"}), this.revertDataLabelsInner(s.node, this.donutDataLabels);
                        var h = s.attr("data:pathOrig");
                        s.attr({d: h})
                    }
                }
            }, {
                key: "getChangedPath", value: function (t, e) {
                    var i = "";
                    return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({
                        me: this,
                        startAngle: t,
                        angle: e - t,
                        size: this.size
                    })), i
                }
            }, {
                key: "getPiePath", value: function (t) {
                    var e = t.me, i = t.startAngle, a = t.angle, s = t.size, r = this.w, o = i,
                        l = Math.PI * (o - 90) / 180, h = a + i;
                    Math.ceil(h) >= 360 && (h = 359.99);
                    var c = Math.PI * (h - 90) / 180, d = e.centerX + s * Math.cos(l), u = e.centerY + s * Math.sin(l),
                        g = e.centerX + s * Math.cos(c), f = e.centerY + s * Math.sin(c),
                        p = n.polarToCartesian(e.centerX, e.centerY, e.donutSize, h),
                        x = n.polarToCartesian(e.centerX, e.centerY, e.donutSize, o), b = a > 180 ? 1 : 0,
                        v = ["M", d, u, "A", s, s, 0, b, 1, g, f];
                    return "donut" === r.config.chart.type ? [].concat(v, ["L", p.x, p.y, "A", e.donutSize, e.donutSize, 0, b, 0, x.x, x.y, "L", d, u, "z"]).join(" ") : "pie" === r.config.chart.type ? [].concat(v, ["L", e.centerX, e.centerY, "L", d, u]).join(" ") : [].concat(v).join(" ")
                }
            }, {
                key: "renderInnerDataLabels", value: function (t, e) {
                    var i = this.w, a = new p(this.ctx), s = a.group({
                        class: "apexcharts-datalabels-group",
                        transform: "translate(".concat(e.translateX ? e.translateX : 0, ", ").concat(e.translateY ? e.translateY : 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")")
                    }), r = t.total.show;
                    s.node.style.opacity = e.opacity;
                    var n, o, l = e.centerX, h = e.centerY;
                    n = void 0 === t.name.color ? i.globals.colors[0] : t.name.color, o = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color;
                    var c = t.value.formatter, d = "", u = "";
                    if (r ? (n = t.total.color, u = t.total.label, d = t.total.formatter(i)) : 1 === i.globals.series.length && (d = c(i.globals.series[0], i), u = i.globals.seriesNames[0]), t.name.show) {
                        var g = a.drawText({
                            x: l,
                            y: h + parseFloat(t.name.offsetY),
                            text: u,
                            textAnchor: "middle",
                            foreColor: n,
                            fontSize: t.name.fontSize,
                            fontFamily: t.name.fontFamily
                        });
                        g.node.classList.add("apexcharts-datalabel-label"), s.add(g)
                    }
                    if (t.value.show) {
                        var f = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, x = a.drawText({
                            x: l,
                            y: h + f,
                            text: d,
                            textAnchor: "middle",
                            foreColor: o,
                            fontSize: t.value.fontSize,
                            fontFamily: t.value.fontFamily
                        });
                        x.node.classList.add("apexcharts-datalabel-value"), s.add(x)
                    }
                    return s
                }
            }, {
                key: "printInnerLabels", value: function (t, e, i, a) {
                    var s, r = this.w;
                    a ? s = void 0 === t.name.color ? r.globals.colors[parseInt(a.parentNode.getAttribute("rel"), 10) - 1] : t.name.color : r.globals.series.length > 1 && t.total.show && (s = t.total.color);
                    var n = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),
                        o = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
                    i = (0, t.value.formatter)(i, r), a || "function" != typeof t.total.formatter || (i = t.total.formatter(r)), null !== n && (n.textContent = e), null !== o && (o.textContent = i), null !== n && (n.style.fill = s)
                }
            }, {
                key: "printDataLabelsInner", value: function (t, e) {
                    var i = this.w, a = t.getAttribute("data:value"),
                        s = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10) - 1];
                    i.globals.series.length > 1 && this.printInnerLabels(e, s, a, t);
                    var r = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                    null !== r && (r.style.opacity = 1)
                }
            }, {
                key: "revertDataLabelsInner", value: function (t, e, i) {
                    var a = this, s = this.w, r = s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                    if (e.total.show && s.globals.series.length > 1) this.printInnerLabels(e, e.total.label, e.total.formatter(s)); else {
                        var n = document.querySelectorAll(".apexcharts-pie-area"), o = !1;
                        if (Array.prototype.forEach.call(n, (function (t) {
                            "true" === t.getAttribute("data:pieClicked") && (o = !0, a.printDataLabelsInner(t, e))
                        })), !o) if (s.globals.selectedDataPoints.length && s.globals.series.length > 1) if (s.globals.selectedDataPoints[0].length > 0) {
                            var l = s.globals.selectedDataPoints[0],
                                h = s.globals.dom.baseEl.querySelector(".apexcharts-".concat(s.config.chart.type.toLowerCase(), "-slice-").concat(l));
                            this.printDataLabelsInner(h, e)
                        } else r && s.globals.selectedDataPoints.length && 0 === s.globals.selectedDataPoints[0].length && (r.style.opacity = 0); else r && s.globals.series.length > 1 && (r.style.opacity = 0)
                    }
                }
            }]) && ee(e.prototype, i), a && ee(e, a), t
        }();

        function ae(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function se(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ae(Object(i), !0).forEach((function (e) {
                    re(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ae(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function re(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function ne(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var oe = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
                var i = this.w;
                this.graphics = new p(this.ctx), this.lineColorArr = void 0 !== i.globals.stroke.colors ? i.globals.stroke.colors : i.globals.colors, this.defaultSize = i.globals.svgHeight < i.globals.svgWidth ? i.globals.gridHeight + 1.5 * i.globals.goldenPadding : i.globals.gridWidth, this.maxValue = this.w.globals.maxY, this.minValue = this.w.globals.minY, this.polygons = i.config.plotOptions.radar.polygons;
                var a = i.globals.labels.slice().sort((function (t, e) {
                    return e.length - t.length
                }))[0], s = this.graphics.getTextRects(a, i.config.xaxis.labels.style.fontSize);
                this.size = this.defaultSize / 2.1 - i.config.stroke.width - i.config.chart.dropShadow.blur, i.config.xaxis.labels.show && (this.size = this.size - s.width / 1.75), void 0 !== i.config.plotOptions.radar.size && (this.size = i.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = []
            }

            var e, i, a;
            return e = t, (i = [{
                key: "draw", value: function (t) {
                    var e = this, i = this.w, a = new bt(this.ctx), s = [], r = new St(this.ctx);
                    t.length && (this.dataPointsLen = t[i.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
                    var o = i.globals.gridWidth / 2, h = i.globals.gridHeight / 2, c = this.graphics.group({
                        class: "apexcharts-radar-series apexcharts-plot-series",
                        "data:innerTranslateX": o,
                        "data:innerTranslateY": h - 25,
                        transform: "translate(".concat(o || 0, ", ").concat(h || 0, ")")
                    }), d = [], u = null, g = null;
                    if (this.yaxisLabels = this.graphics.group({class: "apexcharts-yaxis"}), t.forEach((function (t, o) {
                        var h = e.graphics.group().attr({
                            class: "apexcharts-series",
                            seriesName: n.escapeString(i.globals.seriesNames[o]),
                            rel: o + 1,
                            "data:realIndex": o
                        });
                        e.dataRadiusOfPercent[o] = [], e.dataRadius[o] = [], e.angleArr[o] = [], t.forEach((function (t, i) {
                            var a = Math.abs(e.maxValue - e.minValue);
                            t += Math.abs(e.minValue), e.dataRadiusOfPercent[o][i] = t / a, e.dataRadius[o][i] = e.dataRadiusOfPercent[o][i] * e.size, e.angleArr[o][i] = i * e.disAngle
                        })), d = e.getDataPointsPos(e.dataRadius[o], e.angleArr[o]);
                        var c = e.createPaths(d, {x: 0, y: 0});
                        u = e.graphics.group({class: "apexcharts-series-markers-wrap hidden"}), g = e.graphics.group({class: "apexcharts-datalabels"}), i.globals.delayedElements.push({
                            el: u.node,
                            index: o
                        });
                        var f = {
                            i: o,
                            realIndex: o,
                            animationDelay: o,
                            initialSpeed: i.config.chart.animations.speed,
                            dataChangeSpeed: i.config.chart.animations.dynamicAnimation.speed,
                            className: "apexcharts-radar",
                            shouldClipToGrid: !1,
                            bindEventsOnPaths: !1,
                            stroke: i.globals.stroke.colors[o],
                            strokeLineCap: i.config.stroke.lineCap
                        }, p = null;
                        i.globals.previousPaths.length > 0 && (p = e.getPreviousPath(o));
                        for (var x = 0; x < c.linePathsTo.length; x++) {
                            var b = e.graphics.renderPaths(se({}, f, {
                                pathFrom: null === p ? c.linePathsFrom[x] : p,
                                pathTo: c.linePathsTo[x],
                                strokeWidth: Array.isArray(i.config.stroke.width) ? i.config.stroke.width[o] : i.config.stroke.width,
                                fill: "none",
                                drawShadow: !1
                            }));
                            h.add(b);
                            var v = a.fillPath({seriesNumber: o}), m = e.graphics.renderPaths(se({}, f, {
                                pathFrom: null === p ? c.areaPathsFrom[x] : p,
                                pathTo: c.areaPathsTo[x],
                                strokeWidth: 0,
                                fill: v,
                                drawShadow: !1
                            }));
                            if (i.config.chart.dropShadow.enabled) {
                                var y = new l(e.ctx), w = i.config.chart.dropShadow;
                                y.dropShadow(m, Object.assign({}, w, {noUserSpaceOnUse: !0}), o)
                            }
                            h.add(m)
                        }
                        t.forEach((function (t, a) {
                            var s = new mt(e.ctx).getMarkerConfig("apexcharts-marker", o, a),
                                n = e.graphics.drawMarker(d[a].x, d[a].y, s);
                            n.attr("rel", a), n.attr("j", a), n.attr("index", o), n.node.setAttribute("default-marker-size", s.pSize);
                            var l = e.graphics.group({class: "apexcharts-series-markers"});
                            if (l && l.add(n), u.add(l), h.add(u), i.config.dataLabels.enabled) {
                                var c = i.config.dataLabels;
                                r.plotDataLabelsText({
                                    x: d[a].x,
                                    y: d[a].y,
                                    text: i.globals.series[o][a],
                                    textAnchor: "middle",
                                    i: o,
                                    j: o,
                                    parent: g,
                                    offsetCorrection: !1,
                                    dataLabelsConfig: se({}, c)
                                })
                            }
                            h.add(g)
                        })), s.push(h)
                    })), this.drawPolygons({parent: c}), i.config.xaxis.labels.show) {
                        var f = this.drawXAxisTexts();
                        c.add(f)
                    }
                    return c.add(this.yaxisLabels), s.forEach((function (t) {
                        c.add(t)
                    })), c
                }
            }, {
                key: "drawPolygons", value: function (t) {
                    for (var e = this, i = this.w, a = t.parent, s = i.globals.yAxisScale[0].result.reverse(), r = s.length, n = [], o = this.size / (r - 1), l = 0; l < r; l++) n[l] = o * l;
                    n.reverse();
                    var h = [], c = [];
                    n.forEach((function (t, i) {
                        var a = e.getPolygonPos(t), s = "";
                        a.forEach((function (t, a) {
                            if (0 === i) {
                                var r = e.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(e.polygons.connectorColors) ? e.polygons.connectorColors[a] : e.polygons.connectorColors);
                                c.push(r)
                            }
                            0 === a && e.yaxisLabelsTextsPos.push({x: t.x, y: t.y}), s += t.x + "," + t.y + " "
                        })), h.push(s)
                    })), h.forEach((function (t, s) {
                        var r = e.polygons.strokeColors,
                            n = e.graphics.drawPolygon(t, Array.isArray(r) ? r[s] : r, i.globals.radarPolygons.fill.colors[s]);
                        a.add(n)
                    })), c.forEach((function (t) {
                        a.add(t)
                    })), i.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach((function (t, i) {
                        var a = e.drawYAxisTexts(t.x, t.y, i, s[i]);
                        e.yaxisLabels.add(a)
                    }))
                }
            }, {
                key: "drawYAxisTexts", value: function (t, e, i, a) {
                    var s = this.w, r = s.config.yaxis[0], n = s.globals.yLabelFormatters[0];
                    return this.graphics.drawText({
                        x: t + r.labels.offsetX,
                        y: e + r.labels.offsetY,
                        text: n(a, i),
                        textAnchor: "middle",
                        fontSize: r.labels.style.fontSize,
                        fontFamily: r.labels.style.fontFamily,
                        foreColor: r.labels.style.color
                    })
                }
            }, {
                key: "drawXAxisTexts", value: function () {
                    var t = this, e = this.w, i = e.config.xaxis.labels,
                        a = this.graphics.group({class: "apexcharts-xaxis"}), s = this.getPolygonPos(this.size);
                    return e.globals.labels.forEach((function (r, n) {
                        var o = e.config.xaxis.labels.formatter, l = new St(t.ctx);
                        if (s[n]) {
                            var h = t.getTextPos(s[n], t.size), c = o(r, {seriesIndex: -1, dataPointIndex: n, w: e});
                            l.plotDataLabelsText({
                                x: h.newX,
                                y: h.newY,
                                text: c,
                                textAnchor: h.textAnchor,
                                i: n,
                                j: n,
                                parent: a,
                                color: i.style.colors[n] ? i.style.colors[n] : "#a8a8a8",
                                dataLabelsConfig: se({textAnchor: h.textAnchor, dropShadow: {enabled: !1}}, i),
                                offsetCorrection: !1
                            })
                        }
                    })), a
                }
            }, {
                key: "createPaths", value: function (t, e) {
                    var i = this, a = [], s = [], r = [], n = [];
                    if (t.length) {
                        s = [this.graphics.move(e.x, e.y)], n = [this.graphics.move(e.x, e.y)];
                        var o = this.graphics.move(t[0].x, t[0].y), l = this.graphics.move(t[0].x, t[0].y);
                        t.forEach((function (e, a) {
                            o += i.graphics.line(e.x, e.y), l += i.graphics.line(e.x, e.y), a === t.length - 1 && (o += "Z", l += "Z")
                        })), a.push(o), r.push(l)
                    }
                    return {linePathsFrom: s, linePathsTo: a, areaPathsFrom: n, areaPathsTo: r}
                }
            }, {
                key: "getTextPos", value: function (t, e) {
                    var i = "middle", a = t.x, s = t.y;
                    return Math.abs(t.x) >= 10 ? t.x > 0 ? (i = "start", a += 10) : t.x < 0 && (i = "end", a -= 10) : i = "middle", Math.abs(t.y) >= e - 10 && (t.y < 0 ? s -= 10 : t.y > 0 && (s += 10)), {
                        textAnchor: i,
                        newX: a,
                        newY: s
                    }
                }
            }, {
                key: "getPreviousPath", value: function (t) {
                    for (var e = this.w, i = null, a = 0; a < e.globals.previousPaths.length; a++) {
                        var s = e.globals.previousPaths[a];
                        s.paths.length > 0 && parseInt(s.realIndex, 10) === parseInt(t, 10) && void 0 !== e.globals.previousPaths[a].paths[0] && (i = e.globals.previousPaths[a].paths[0].d)
                    }
                    return i
                }
            }, {
                key: "getDataPointsPos", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
                    t = t || [], e = e || [];
                    for (var a = [], s = 0; s < i; s++) {
                        var r = {};
                        r.x = t[s] * Math.sin(e[s]), r.y = -t[s] * Math.cos(e[s]), a.push(r)
                    }
                    return a
                }
            }, {
                key: "getPolygonPos", value: function (t) {
                    for (var e = [], i = 2 * Math.PI / this.dataPointsLen, a = 0; a < this.dataPointsLen; a++) {
                        var s = {};
                        s.x = t * Math.sin(a * i), s.y = -t * Math.cos(a * i), e.push(s)
                    }
                    return e
                }
            }]) && ne(e.prototype, i), a && ne(e, a), t
        }();

        function le(t) {
            return (le = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function he(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function ce(t, e) {
            return !e || "object" !== le(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function de(t) {
            return (de = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function ue(t, e) {
            return (ue = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        var ge = function (t) {
            function e(t) {
                var i;
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = ce(this, de(e).call(this, t))).ctx = t, i.w = t.w, i.animBeginArr = [0], i.animDur = 0;
                var a = i.w;
                return i.startAngle = a.config.plotOptions.radialBar.startAngle, i.endAngle = a.config.plotOptions.radialBar.endAngle, i.totalAngle = Math.abs(a.config.plotOptions.radialBar.endAngle - a.config.plotOptions.radialBar.startAngle), i.trackStartAngle = a.config.plotOptions.radialBar.track.startAngle, i.trackEndAngle = a.config.plotOptions.radialBar.track.endAngle, i.radialDataLabels = a.config.plotOptions.radialBar.dataLabels, i.trackStartAngle || (i.trackStartAngle = i.startAngle), i.trackEndAngle || (i.trackEndAngle = i.endAngle), 360 === i.endAngle && (i.endAngle = 359.99), i.fullAngle = 360 - a.config.plotOptions.radialBar.endAngle - a.config.plotOptions.radialBar.startAngle, i.margin = parseInt(a.config.plotOptions.radialBar.track.margin, 10), i
            }

            var i, a, s;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ue(t, e)
            }(e, t), i = e, (a = [{
                key: "draw", value: function (t) {
                    var e = this.w, i = new p(this.ctx), a = i.group({class: "apexcharts-radialbar"});
                    if (e.globals.noData) return a;
                    var s = i.group(), r = this.defaultSize / 2, n = e.globals.gridWidth / 2,
                        o = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur;
                    void 0 !== e.config.plotOptions.radialBar.size && (o = e.config.plotOptions.radialBar.size);
                    var l = e.globals.fill.colors;
                    if (e.config.plotOptions.radialBar.track.show) {
                        var h = this.drawTracks({size: o, centerX: n, centerY: r, colorArr: l, series: t});
                        s.add(h)
                    }
                    var c = this.drawArcs({size: o, centerX: n, centerY: r, colorArr: l, series: t}), d = 360;
                    e.config.plotOptions.radialBar.startAngle < 0 && (d = this.totalAngle);
                    var u = (360 - d) / 360;
                    if (e.globals.radialSize = o - o * u, this.radialDataLabels.value.show) {
                        var g = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
                        e.globals.radialSize += g * u
                    }
                    return s.add(c.g), "front" === e.config.plotOptions.radialBar.hollow.position && (c.g.add(c.elHollow), c.dataLabels && c.g.add(c.dataLabels)), a.add(s), a
                }
            }, {
                key: "drawTracks", value: function (t) {
                    var e = this.w, i = new p(this.ctx), a = i.group({class: "apexcharts-tracks"}), s = new l(this.ctx),
                        r = new bt(this.ctx), n = this.getStrokeWidth(t);
                    t.size = t.size - n / 2;
                    for (var o = 0; o < t.series.length; o++) {
                        var h = i.group({class: "apexcharts-radialbar-track apexcharts-track"});
                        a.add(h), h.attr({rel: o + 1}), t.size = t.size - n - this.margin;
                        var c = e.config.plotOptions.radialBar.track, d = r.fillPath({
                            seriesNumber: 0,
                            size: t.size,
                            fillColors: Array.isArray(c.background) ? c.background[o] : c.background,
                            solid: !0
                        }), u = this.trackStartAngle, g = this.trackEndAngle;
                        Math.abs(g) + Math.abs(u) >= 360 && (g = 360 - Math.abs(this.startAngle) - .1);
                        var f = i.drawPath({
                            d: "",
                            stroke: d,
                            strokeWidth: n * parseInt(c.strokeWidth, 10) / 100,
                            fill: "none",
                            strokeOpacity: c.opacity,
                            classes: "apexcharts-radialbar-area"
                        });
                        if (c.dropShadow.enabled) {
                            var x = c.dropShadow;
                            s.dropShadow(f, x)
                        }
                        h.add(f), f.attr("id", "apexcharts-radialbarTrack-" + o), this.animatePaths(f, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: g,
                            startAngle: u,
                            size: t.size,
                            i: o,
                            totalItems: 2,
                            animBeginArr: 0,
                            dur: 0,
                            isTrack: !0,
                            easing: e.globals.easing
                        })
                    }
                    return a
                }
            }, {
                key: "drawArcs", value: function (t) {
                    var e = this.w, i = new p(this.ctx), a = new bt(this.ctx), s = new l(this.ctx), r = i.group(),
                        o = this.getStrokeWidth(t);
                    t.size = t.size - o / 2;
                    var h = e.config.plotOptions.radialBar.hollow.background,
                        c = t.size - o * t.series.length - this.margin * t.series.length - o * parseInt(e.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2,
                        d = c - e.config.plotOptions.radialBar.hollow.margin;
                    void 0 !== e.config.plotOptions.radialBar.hollow.image && (h = this.drawHollowImage(t, r, c, h));
                    var u = this.drawHollow({size: d, centerX: t.centerX, centerY: t.centerY, fill: h});
                    if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
                        var g = e.config.plotOptions.radialBar.hollow.dropShadow;
                        s.dropShadow(u, g)
                    }
                    var f = 1;
                    !this.radialDataLabels.total.show && e.globals.series.length > 1 && (f = 0);
                    var x = null;
                    this.radialDataLabels.show && (x = this.renderInnerDataLabels(this.radialDataLabels, {
                        hollowSize: c,
                        centerX: t.centerX,
                        centerY: t.centerY,
                        opacity: f
                    })), "back" === e.config.plotOptions.radialBar.hollow.position && (r.add(u), x && r.add(x));
                    var b = !1;
                    e.config.plotOptions.radialBar.inverseOrder && (b = !0);
                    for (var v = b ? t.series.length - 1 : 0; b ? v >= 0 : v < t.series.length; b ? v-- : v++) {
                        var m = i.group({
                            class: "apexcharts-series apexcharts-radial-series",
                            seriesName: n.escapeString(e.globals.seriesNames[v])
                        });
                        r.add(m), m.attr({
                            rel: v + 1,
                            "data:realIndex": v
                        }), this.ctx.series.addCollapsedClassToSeries(m, v), t.size = t.size - o - this.margin;
                        var y = a.fillPath({seriesNumber: v, size: t.size, value: t.series[v]}), w = this.startAngle,
                            k = void 0, S = n.negToZero(t.series[v] > 100 ? 100 : t.series[v]) / 100,
                            A = Math.round(this.totalAngle * S) + this.startAngle, C = void 0;
                        e.globals.dataChanged && (k = this.startAngle, C = Math.round(this.totalAngle * n.negToZero(e.globals.previousPaths[v]) / 100) + k), Math.abs(A) + Math.abs(w) >= 360 && (A -= .01), Math.abs(C) + Math.abs(k) >= 360 && (C -= .01);
                        var P = A - w,
                            L = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[v] : e.config.stroke.dashArray,
                            T = i.drawPath({
                                d: "",
                                stroke: y,
                                strokeWidth: o,
                                fill: "none",
                                fillOpacity: e.config.fill.opacity,
                                classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + v,
                                strokeDashArray: L
                            });
                        if (p.setAttrs(T.node, {
                            "data:angle": P,
                            "data:value": t.series[v]
                        }), e.config.chart.dropShadow.enabled) {
                            var E = e.config.chart.dropShadow;
                            s.dropShadow(T, E, v)
                        }
                        this.addListeners(T, this.radialDataLabels), m.add(T), T.attr({index: 0, j: v});
                        var O = 0;
                        !this.initialAnim || e.globals.resized || e.globals.dataChanged || (O = (A - w) / 360 * e.config.chart.animations.speed, this.animDur = O / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), e.globals.dataChanged && (O = (A - w) / 360 * e.config.chart.animations.dynamicAnimation.speed, this.animDur = O / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), this.animatePaths(T, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: A,
                            startAngle: w,
                            prevEndAngle: C,
                            prevStartAngle: k,
                            size: t.size,
                            i: v,
                            totalItems: 2,
                            animBeginArr: this.animBeginArr,
                            dur: O,
                            shouldSetPrevPaths: !0,
                            easing: e.globals.easing
                        })
                    }
                    return {g: r, elHollow: u, dataLabels: x}
                }
            }, {
                key: "drawHollow", value: function (t) {
                    var e = new p(this.ctx).drawCircle(2 * t.size);
                    return e.attr({
                        class: "apexcharts-radialbar-hollow",
                        cx: t.centerX,
                        cy: t.centerY,
                        r: t.size,
                        fill: t.fill
                    }), e
                }
            }, {
                key: "drawHollowImage", value: function (t, e, i, a) {
                    var s = this.w, r = new bt(this.ctx), o = n.randomId(),
                        l = s.config.plotOptions.radialBar.hollow.image;
                    if (s.config.plotOptions.radialBar.hollow.imageClipped) r.clippedImgArea({
                        width: i,
                        height: i,
                        image: l,
                        patternID: "pattern".concat(s.globals.cuid).concat(o)
                    }), a = "url(#pattern".concat(s.globals.cuid).concat(o, ")"); else {
                        var h = s.config.plotOptions.radialBar.hollow.imageWidth,
                            c = s.config.plotOptions.radialBar.hollow.imageHeight;
                        if (void 0 === h && void 0 === c) {
                            var d = s.globals.dom.Paper.image(l).loaded((function (e) {
                                this.move(t.centerX - e.width / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - e.height / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY)
                            }));
                            e.add(d)
                        } else {
                            var u = s.globals.dom.Paper.image(l).loaded((function (e) {
                                this.move(t.centerX - h / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetX, t.centerY - c / 2 + s.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(h, c)
                            }));
                            e.add(u)
                        }
                    }
                    return a
                }
            }, {
                key: "getStrokeWidth", value: function (t) {
                    var e = this.w;
                    return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t.series.length + 1) - this.margin
                }
            }]) && he(i.prototype, a), s && he(i, s), e
        }(ie);

        function fe(t) {
            return (fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function pe(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function xe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pe(Object(i), !0).forEach((function (e) {
                    be(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : pe(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function be(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function ve(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function me(t, e) {
            return !e || "object" !== fe(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ye(t) {
            return (ye = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function we(t, e) {
            return (we = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        var ke = function (t) {
            function e() {
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), me(this, ye(e).apply(this, arguments))
            }

            var i, a, s;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && we(t, e)
            }(e, t), i = e, (a = [{
                key: "draw", value: function (t, e) {
                    var i = this.w, a = new p(this.ctx);
                    this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t, this.seriesRangeStart = i.globals.seriesRangeStart, this.seriesRangeEnd = i.globals.seriesRangeEnd, this.barHelpers.initVariables(t);
                    for (var s = a.group({class: "apexcharts-rangebar-series apexcharts-plot-series"}), r = 0; r < t.length; r++) {
                        var o, l, h, c = void 0, d = void 0, u = void 0, g = i.globals.comboCharts ? e[r] : r,
                            f = a.group({
                                class: "apexcharts-series",
                                seriesName: n.escapeString(i.globals.seriesNames[g]),
                                rel: r + 1,
                                "data:realIndex": g
                            });
                        t[r].length > 0 && (this.visibleI = this.visibleI + 1);
                        var x = 0, b = 0;
                        this.yRatio.length > 1 && (this.yaxisIndex = g);
                        var v = this.barHelpers.initialPositions();
                        d = v.y, h = v.zeroW, c = v.x, b = v.barWidth, o = v.xDivision, l = v.zeroH;
                        for (var m = a.group({class: "apexcharts-datalabels"}), y = 0; y < i.globals.dataPoints; y++) {
                            var w = this.barHelpers.getStrokeWidth(r, y, g), k = this.seriesRangeStart[r][y],
                                S = this.seriesRangeEnd[r][y], A = null, C = null,
                                P = {x: c, y: d, strokeWidth: w, elSeries: f};
                            if (u = v.yDivision, x = v.barHeight, this.isHorizontal) {
                                C = d + x * this.visibleI;
                                var L = (u - x * this.seriesLen) / 2;
                                if (void 0 === i.config.series[r].data[y]) break;
                                if (this.isTimelineBar && i.config.series[r].data[y].x) {
                                    var T = this.detectOverlappingBars({
                                        i: r,
                                        j: y,
                                        barYPosition: C,
                                        srty: L,
                                        barHeight: x,
                                        yDivision: u,
                                        initPositions: v
                                    });
                                    x = T.barHeight, C = T.barYPosition
                                }
                                b = (A = this.drawRangeBarPaths(xe({
                                    indexes: {i: r, j: y, realIndex: g},
                                    barHeight: x,
                                    barYPosition: C,
                                    zeroW: h,
                                    yDivision: u,
                                    y1: k,
                                    y2: S
                                }, P))).barWidth
                            } else x = (A = this.drawRangeColumnPaths(xe({
                                indexes: {i: r, j: y, realIndex: g},
                                zeroH: l,
                                barWidth: b,
                                xDivision: o
                            }, P))).barHeight;
                            d = A.y, c = A.x;
                            var E = this.barHelpers.getPathFillColor(t, r, y, g), O = i.globals.stroke.colors[g];
                            this.renderSeries({
                                realIndex: g,
                                pathFill: E,
                                lineFill: O,
                                j: y,
                                i: r,
                                x: c,
                                y: d,
                                y1: k,
                                y2: S,
                                pathFrom: A.pathFrom,
                                pathTo: A.pathTo,
                                strokeWidth: w,
                                elSeries: f,
                                series: t,
                                barHeight: x,
                                barYPosition: C,
                                barWidth: b,
                                elDataLabelsWrap: m,
                                visibleSeries: this.visibleI,
                                type: "rangebar"
                            })
                        }
                        s.add(f)
                    }
                    return s
                }
            }, {
                key: "detectOverlappingBars", value: function (t) {
                    var e = t.i, i = t.j, a = t.barYPosition, s = t.srty, r = t.barHeight, n = t.yDivision,
                        o = t.initPositions, l = this.w, h = [], c = l.config.series[e].data[i].rangeName,
                        d = l.config.series[e].data[i].x, u = l.globals.labels.indexOf(d),
                        g = l.globals.seriesRangeBarTimeline[e].findIndex((function (t) {
                            return t.x === d && t.overlaps.length > 0
                        }));
                    return a = s + r * this.visibleI + n * u, g > -1 && (h = l.globals.seriesRangeBarTimeline[e][g].overlaps).indexOf(c) > -1 && (a = (r = o.barHeight / h.length) * this.visibleI + n * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + r * (this.visibleI + h.indexOf(c)) + n * u), {
                        barYPosition: a,
                        barHeight: r
                    }
                }
            }, {
                key: "drawRangeColumnPaths", value: function (t) {
                    var e = t.indexes, i = t.x, a = t.strokeWidth, s = t.xDivision, r = t.barWidth, n = t.zeroH,
                        o = this.w, l = new p(this.ctx), h = e.i, c = e.j, d = this.yRatio[this.yaxisIndex],
                        u = e.realIndex, g = this.getRangeValue(u, c), f = Math.min(g.start, g.end),
                        x = Math.max(g.start, g.end);
                    o.globals.isXNumeric && (i = (o.globals.seriesX[h][c] - o.globals.minX) / this.xRatio - r / 2);
                    var b = i + r * this.visibleI;
                    void 0 === this.series[h][c] || null === this.series[h][c] ? f = n : (f = n - f / d, x = n - x / d);
                    var v = Math.abs(x - f), m = l.move(b, n), y = l.move(b, f);
                    return o.globals.previousPaths.length > 0 && (y = this.getPreviousPath(u, c, !0)), m = l.move(b, x) + l.line(b + r, x) + l.line(b + r, f) + l.line(b, f) + l.line(b, x - a / 2), y = y + l.move(b, f) + l.line(b + r, f) + l.line(b + r, f) + l.line(b, f), o.globals.isXNumeric || (i += s), {
                        pathTo: m,
                        pathFrom: y,
                        barHeight: v,
                        x: i,
                        y: x,
                        barXPosition: b
                    }
                }
            }, {
                key: "drawRangeBarPaths", value: function (t) {
                    var e = t.indexes, i = t.y, a = t.y1, s = t.y2, r = t.yDivision, n = t.barHeight,
                        o = t.barYPosition, l = t.zeroW, h = this.w, c = new p(this.ctx),
                        d = l + a / this.invertedYRatio, u = l + s / this.invertedYRatio, g = c.move(l, o),
                        f = c.move(d, o);
                    h.globals.previousPaths.length > 0 && (f = this.getPreviousPath(e.realIndex, e.j));
                    var x = Math.abs(u - d);
                    return g = c.move(d, o) + c.line(u, o) + c.line(u, o + n) + c.line(d, o + n) + c.line(d, o), f = f + c.line(d, o) + c.line(d, o + n) + c.line(d, o + n) + c.line(d, o), h.globals.isXNumeric || (i += r), {
                        pathTo: g,
                        pathFrom: f,
                        barWidth: x,
                        x: u,
                        y: i
                    }
                }
            }, {
                key: "getRangeValue", value: function (t, e) {
                    var i = this.w;
                    return {start: i.globals.seriesRangeStart[t][e], end: i.globals.seriesRangeEnd[t][e]}
                }
            }]) && ve(i.prototype, a), s && ve(i, s), e
        }(Xt);

        function Se(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ae = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.xPadRight = 0, this.xPadLeft = 0
            }

            var e, i, a;
            return e = t, (i = [{
                key: "plotCoords", value: function () {
                    var t = this.w, e = t.globals, i = this.getLegendsRect();
                    e.axisCharts ? this.setGridCoordsForAxisCharts(i) : this.setGridCoordsForNonAxisCharts(i), this.titleSubtitleOffset(), e.gridHeight = e.gridHeight - t.config.grid.padding.top - t.config.grid.padding.bottom, e.gridWidth = e.gridWidth - t.config.grid.padding.left - t.config.grid.padding.right - this.xPadRight - this.xPadLeft, e.translateX = e.translateX + t.config.grid.padding.left + this.xPadLeft, e.translateY = e.translateY + t.config.grid.padding.top
                }
            }, {
                key: "conditionalChecksForAxisCoords", value: function (t, e) {
                    var i = this.w;
                    this.xAxisHeight = (t.height + e.height) * i.globals.LINE_HEIGHT_RATIO + 15, this.xAxisWidth = t.width, this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels.maxHeight), i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (this.xAxisHeight = i.config.xaxis.labels.minHeight), i.config.xaxis.floating && (this.xAxisHeight = 0), this.yAxisWidth = this.getTotalYAxisWidth();
                    var a = 0, s = 0;
                    i.config.yaxis.forEach((function (t) {
                        a += t.labels.minWidth, s += t.labels.maxWidth
                    })), this.yAxisWidth < a && (this.yAxisWidth = a), this.yAxisWidth > s && (this.yAxisWidth = s)
                }
            }, {
                key: "setGridCoordsForAxisCharts", value: function (t) {
                    var e = this.w, i = e.globals, a = this.getyAxisLabelsCoords(), s = this.getxAxisLabelsCoords(),
                        r = this.getyAxisTitleCoords(), n = this.getxAxisTitleCoords();
                    e.globals.yLabelsCoords = [], e.globals.yTitleCoords = [], e.config.yaxis.map((function (t, i) {
                        e.globals.yLabelsCoords.push({
                            width: a[i].width,
                            index: i
                        }), e.globals.yTitleCoords.push({width: r[i].width, index: i})
                    })), this.conditionalChecksForAxisCoords(s, n), i.translateXAxisY = e.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i.translateXAxisX = e.globals.rotateXLabels && e.globals.isXNumeric && e.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e.globals.isBarHorizontal && (i.rotateXLabels = !1, i.translateXAxisY = parseInt(e.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i.translateXAxisY = i.translateXAxisY + e.config.xaxis.labels.offsetY, i.translateXAxisX = i.translateXAxisX + e.config.xaxis.labels.offsetX;
                    var o = this.yAxisWidth, l = this.xAxisHeight;
                    i.xAxisLabelsHeight = this.xAxisHeight, i.xAxisHeight = this.xAxisHeight;
                    var h = 10;
                    switch (("radar" === e.config.chart.type || this.isSparkline) && (o = 0, l = i.goldenPadding), this.isSparkline && (t = {
                        height: 0,
                        width: 0
                    }, l = 0, o = 0, h = 0), this.additionalPaddingXLabels(s), e.config.legend.position) {
                        case"bottom":
                            i.translateY = h, i.translateX = o, i.gridHeight = i.svgHeight - t.height - l - (this.isSparkline ? 0 : e.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - o;
                            break;
                        case"top":
                            i.translateY = t.height + h, i.translateX = o, i.gridHeight = i.svgHeight - t.height - l - (this.isSparkline ? 0 : e.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - o;
                            break;
                        case"left":
                            i.translateY = h, i.translateX = t.width + o, i.gridHeight = i.svgHeight - l - 12, i.gridWidth = i.svgWidth - t.width - o;
                            break;
                        case"right":
                            i.translateY = h, i.translateX = o, i.gridHeight = i.svgHeight - l - 12, i.gridWidth = i.svgWidth - t.width - o - 5;
                            break;
                        default:
                            throw new Error("Legend position not supported")
                    }
                    this.setGridXPosForDualYAxis(r, a), new V(this.ctx).setYAxisXPosition(a, r)
                }
            }, {
                key: "setGridCoordsForNonAxisCharts", value: function (t) {
                    var e = this.w, i = e.globals, a = e.config, s = 0;
                    e.config.legend.show && !e.config.legend.floating && (s = 20);
                    var r = 10, n = 0;
                    if ("pie" === a.chart.type || "donut" === a.chart.type ? (r += a.plotOptions.pie.offsetY, n += a.plotOptions.pie.offsetX) : "radialBar" === a.chart.type && (r += a.plotOptions.radialBar.offsetY, n += a.plotOptions.radialBar.offsetX), !a.legend.show || a.legend.floating) return i.gridHeight = i.svgHeight - i.goldenPadding, i.gridWidth = i.gridHeight, i.translateY = r - 10, void (i.translateX = n + (i.svgWidth - i.gridWidth) / 2);
                    switch (a.legend.position) {
                        case"bottom":
                            i.gridHeight = i.svgHeight - t.height - i.goldenPadding, i.gridWidth = i.gridHeight, i.translateY = r - 20, i.translateX = n + (i.svgWidth - i.gridWidth) / 2;
                            break;
                        case"top":
                            i.gridHeight = i.svgHeight - t.height - i.goldenPadding, i.gridWidth = i.gridHeight, i.translateY = t.height + r + 10, i.translateX = n + (i.svgWidth - i.gridWidth) / 2;
                            break;
                        case"left":
                            i.gridWidth = i.svgWidth - t.width - s, i.gridHeight = "auto" !== a.chart.height ? i.svgHeight : i.gridWidth, i.translateY = r, i.translateX = n + t.width + s;
                            break;
                        case"right":
                            i.gridWidth = i.svgWidth - t.width - s - 5, i.gridHeight = "auto" !== a.chart.height ? i.svgHeight : i.gridWidth, i.translateY = r, i.translateX = n + 10;
                            break;
                        default:
                            throw new Error("Legend position not supported")
                    }
                }
            }, {
                key: "setGridXPosForDualYAxis", value: function (t, e) {
                    var i = this.w;
                    i.config.yaxis.map((function (a, s) {
                        -1 === i.globals.ignoreYAxisIndexes.indexOf(s) && !i.config.yaxis[s].floating && i.config.yaxis[s].show && a.opposite && (i.globals.translateX = i.globals.translateX - (e[s].width + t[s].width) - parseInt(i.config.yaxis[s].labels.style.fontSize, 10) / 1.2 - 12)
                    }))
                }
            }, {
                key: "additionalPaddingXLabels", value: function (t) {
                    var e = this, i = this.w, a = i.globals, s = i.config, r = s.xaxis.type, n = t.width;
                    a.skipLastTimelinelabel = !1, a.skipFirstTimelinelabel = !1;
                    var o = i.config.yaxis[0].opposite && i.globals.isBarHorizontal, l = function (t, i) {
                        (function (t) {
                            return -1 !== a.collapsedSeriesIndices.indexOf(t)
                        })(i) || ("datetime" !== r && s.grid.padding.left < n / 2 - e.yAxisWidthLeft && (e.xPadLeft = n / 2 + 1), function (t) {
                            if (e.timescaleLabels && e.timescaleLabels.length) {
                                var i = e.timescaleLabels[0],
                                    o = e.timescaleLabels[e.timescaleLabels.length - 1].position + n / 1.75 + e.yAxisWidthRight,
                                    l = i.position - n / 1.75 + (t.opposite ? 0 : e.yAxisWidthLeft);
                                o > a.gridWidth && (a.skipLastTimelinelabel = !0), l < 0 && (a.skipFirstTimelinelabel = !0)
                            } else "datetime" === r ? s.grid.padding.right < n && (a.skipLastTimelinelabel = !0) : "datetime" !== r && s.grid.padding.right < n / 2 - e.yAxisWidthRight && !a.rotateXLabels && (e.xPadRight = n / 2 + 1)
                        }(t))
                    };
                    s.yaxis.forEach((function (t, i) {
                        o ? (s.grid.padding.left < n && (e.xPadLeft = n / 2 + 1), e.xPadRight = n / 2 + 1) : l(t, i)
                    }))
                }
            }, {
                key: "titleSubtitleOffset", value: function () {
                    var t = this.w, e = t.globals, i = this.isSparkline || !t.globals.axisCharts ? 0 : 10;
                    void 0 !== t.config.title.text ? i += t.config.title.margin : i += this.isSparkline || !t.globals.axisCharts ? 0 : 5, void 0 !== t.config.subtitle.text ? i += t.config.subtitle.margin : i += this.isSparkline || !t.globals.axisCharts ? 0 : 5;
                    var a = t.config.series.length > 1 || !t.globals.axisCharts || t.config.legend.showForSingleSeries;
                    t.config.legend.show && "bottom" === t.config.legend.position && !t.config.legend.floating && a && (i += 10);
                    var s = this.getTitleSubtitleCoords("title"), r = this.getTitleSubtitleCoords("subtitle");
                    e.gridHeight = e.gridHeight - s.height - r.height - i, e.translateY = e.translateY + s.height + r.height + i
                }
            }, {
                key: "getTotalYAxisWidth", value: function () {
                    var t = this.w, e = 0, i = 0, a = 0, s = t.globals.yAxisScale.length > 1 ? 10 : 0,
                        r = function (r, n) {
                            var o = t.config.yaxis[n].floating, l = 0;
                            r.width > 0 && !o ? (l = r.width + s, function (e) {
                                return t.globals.ignoreYAxisIndexes.indexOf(e) > -1
                            }(n) && (l = l - r.width - s)) : l = o || !t.config.yaxis[n].show ? 0 : 5, t.config.yaxis[n].opposite ? a += l : i += l, e += l
                        };
                    return t.globals.yLabelsCoords.map((function (t, e) {
                        r(t, e)
                    })), t.globals.yTitleCoords.map((function (t, e) {
                        r(t, e)
                    })), t.globals.isBarHorizontal && (e = t.globals.yLabelsCoords[0].width + t.globals.yTitleCoords[0].width + 15), this.yAxisWidthLeft = i, this.yAxisWidthRight = a, e
                }
            }, {
                key: "getxAxisTimeScaleLabelsCoords", value: function () {
                    var t, e = this.w;
                    this.timescaleLabels = e.globals.timescaleLabels.slice();
                    var i = this.timescaleLabels.map((function (t) {
                        return t.value
                    })), a = i.reduce((function (t, e) {
                        return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e
                    }), 0);
                    return 1.05 * (t = new p(this.ctx).getTextRects(a, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && 0 !== e.config.xaxis.labels.rotate && (e.globals.overlappingXLabels = !0), t
                }
            }, {
                key: "getxAxisLabelsCoords", value: function () {
                    var t, e = this.w, i = e.globals.labels.slice();
                    if (e.globals.timescaleLabels.length > 0) {
                        var a = this.getxAxisTimeScaleLabelsCoords();
                        t = {width: a.width, height: a.height}
                    } else {
                        var s = "left" !== e.config.legend.position || "right" !== e.config.legend.position || e.config.legend.floating ? 0 : this.lgRect.width,
                            r = e.globals.xLabelFormatter, n = i.reduce((function (t, e) {
                                return t.length > e.length ? t : e
                            }), 0);
                        e.globals.isBarHorizontal && (n = e.globals.yAxisScale[0].result.reduce((function (t, e) {
                            return t.length > e.length ? t : e
                        }), 0));
                        var o = n;
                        n = new F(this.ctx).xLabelFormat(r, n, o);
                        var l = new p(this.ctx), h = l.getTextRects(n, e.config.xaxis.labels.style.fontSize);
                        (t = {
                            width: h.width,
                            height: h.height
                        }).width * i.length > e.globals.svgWidth - s - this.yAxisWidth && 0 !== e.config.xaxis.labels.rotate ? e.globals.isBarHorizontal || (e.globals.rotateXLabels = !0, h = l.getTextRects(n, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1), t.height = h.height / 1.66) : e.globals.rotateXLabels = !1
                    }
                    return e.config.xaxis.labels.show || (t = {width: 0, height: 0}), {width: t.width, height: t.height}
                }
            }, {
                key: "getyAxisLabelsCoords", value: function () {
                    var t = this, e = this.w, i = [], a = 10;
                    return e.config.yaxis.map((function (s, r) {
                        if (s.show && s.labels.show && e.globals.yAxisScale[r].result.length) {
                            var n = e.globals.yLabelFormatters[r],
                                o = n(e.globals.yAxisScale[r].niceMax, {seriesIndex: r, dataPointIndex: -1, w: e});
                            void 0 !== o && 0 !== o.length || (o = e.globals.yAxisScale[r].niceMax), e.globals.isBarHorizontal && (a = 0, o = n(o = e.globals.labels.slice().reduce((function (t, e) {
                                return t.length > e.length ? t : e
                            }), 0), {seriesIndex: r, dataPointIndex: -1, w: e}));
                            var l = new p(t.ctx).getTextRects(o, s.labels.style.fontSize);
                            i.push({width: l.width + a, height: l.height})
                        } else i.push({width: 0, height: 0})
                    })), i
                }
            }, {
                key: "getxAxisTitleCoords", value: function () {
                    var t = this.w, e = 0, i = 0;
                    if (void 0 !== t.config.xaxis.title.text) {
                        var a = new p(this.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
                        e = a.width, i = a.height
                    }
                    return {width: e, height: i}
                }
            }, {
                key: "getyAxisTitleCoords", value: function () {
                    var t = this, e = this.w, i = [];
                    return e.config.yaxis.map((function (e, a) {
                        if (e.show && void 0 !== e.title.text) {
                            var s = new p(t.ctx).getTextRects(e.title.text, e.title.style.fontSize, e.title.style.fontFamily, "rotate(-90 0 0)", !1);
                            i.push({width: s.width, height: s.height})
                        } else i.push({width: 0, height: 0})
                    })), i
                }
            }, {
                key: "getTitleSubtitleCoords", value: function (t) {
                    var e = this.w, i = 0, a = 0,
                        s = "title" === t ? e.config.title.floating : e.config.subtitle.floating,
                        r = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
                    if (null !== r && !s) {
                        var n = r.getBoundingClientRect();
                        i = n.width, a = e.globals.axisCharts ? n.height + 5 : n.height
                    }
                    return {width: i, height: a}
                }
            }, {
                key: "getLegendsRect", value: function () {
                    var t = this.w, e = t.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                        i = Object.assign({}, n.getBoundingClientRect(e));
                    return null !== e && !t.config.legend.floating && t.config.legend.show ? this.lgRect = {
                        x: i.x,
                        y: i.y,
                        height: i.height,
                        width: 0 === i.height ? 0 : i.width
                    } : this.lgRect = {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    }, "left" !== t.config.legend.position && "right" !== t.config.legend.position || 1.5 * this.lgRect.width > t.globals.svgWidth && (this.lgRect.width = t.globals.svgWidth / 1.5), this.lgRect
                }
            }]) && Se(e.prototype, i), a && Se(e, a), t
        }();

        function Ce(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Pe = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "getAllSeriesEls", value: function () {
                    return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series")
                }
            }, {
                key: "getSeriesByName", value: function (t) {
                    return this.w.globals.dom.baseEl.querySelector("[seriesName='".concat(n.escapeString(t), "']"))
                }
            }, {
                key: "isSeriesHidden", value: function (t) {
                    var e = this.getSeriesByName(t), i = parseInt(e.getAttribute("data:realIndex"), 10);
                    return {isHidden: e.classList.contains("apexcharts-series-collapsed"), realIndex: i}
                }
            }, {
                key: "addCollapsedClassToSeries", value: function (t, e) {
                    var i = this.w;

                    function a(i) {
                        for (var a = 0; a < i.length; a++) i[a].index === e && t.node.classList.add("apexcharts-series-collapsed")
                    }

                    a(i.globals.collapsedSeries), a(i.globals.ancillaryCollapsedSeries)
                }
            }, {
                key: "resetSeries", value: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e = this.w,
                        i = e.globals.initialSeries.slice();
                    e.config.series = i, e.globals.collapsedSeries = [], e.globals.ancillaryCollapsedSeries = [], e.globals.collapsedSeriesIndices = [], e.globals.ancillaryCollapsedSeriesIndices = [], e.globals.previousPaths = [], t && this.ctx._updateSeries(i, e.config.chart.animations.dynamicAnimation.enabled)
                }
            }, {
                key: "toggleSeriesOnHover", value: function (t, e) {
                    var i = this.w, a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                    if ("mousemove" === t.type) {
                        var s = parseInt(e.getAttribute("rel"), 10) - 1, r = null;
                        r = i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s, "']")) : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "']")) : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "'] path"));
                        for (var n = 0; n < a.length; n++) a[n].classList.add("legend-mouseover-inactive");
                        null !== r && (i.globals.axisCharts || r.parentNode.classList.remove("legend-mouseover-inactive"), r.classList.remove("legend-mouseover-inactive"))
                    } else if ("mouseout" === t.type) for (var o = 0; o < a.length; o++) a[o].classList.remove("legend-mouseover-inactive")
                }
            }, {
                key: "highlightRangeInSeries", value: function (t, e) {
                    var i = this.w, a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap-rect"),
                        s = function () {
                            for (var t = 0; t < a.length; t++) a[t].classList.remove("legend-mouseover-inactive")
                        };
                    if ("mousemove" === t.type) {
                        var r = parseInt(e.getAttribute("rel"), 10) - 1;
                        s(), function () {
                            for (var t = 0; t < a.length; t++) a[t].classList.add("legend-mouseover-inactive")
                        }(), function (t) {
                            for (var e = 0; e < a.length; e++) {
                                var i = parseInt(a[e].getAttribute("val"), 10);
                                i >= t.from && i <= t.to && a[e].classList.remove("legend-mouseover-inactive")
                            }
                        }(i.config.plotOptions.heatmap.colorScale.ranges[r])
                    } else "mouseout" === t.type && s()
                }
            }, {
                key: "getActiveSeriesIndex", value: function () {
                    var t = this.w, e = 0;
                    if (t.globals.series.length > 1) for (var i = t.globals.series.map((function (e, i) {
                        return e.length > 0 && "bar" !== t.config.series[i].type && "column" !== t.config.series[i].type ? i : -1
                    })), a = 0; a < i.length; a++) if (-1 !== i[a]) {
                        e = i[a];
                        break
                    }
                    return e
                }
            }, {
                key: "getActiveConfigSeriesIndex", value: function () {
                    var t = this.w, e = 0;
                    if (t.config.series.length > 1) for (var i = t.config.series.map((function (t, e) {
                        return t.data && t.data.length > 0 ? e : -1
                    })), a = 0; a < i.length; a++) if (-1 !== i[a]) {
                        e = i[a];
                        break
                    }
                    return e
                }
            }, {
                key: "getPreviousPaths", value: function () {
                    var t = this.w;

                    function e(e, i, a) {
                        for (var s = e[i].childNodes, r = {
                            type: a,
                            paths: [],
                            realIndex: e[i].getAttribute("data:realIndex")
                        }, n = 0; n < s.length; n++) if (s[n].hasAttribute("pathTo")) {
                            var o = s[n].getAttribute("pathTo");
                            r.paths.push({d: o})
                        }
                        t.globals.previousPaths.push(r)
                    }

                    t.globals.previousPaths = [];
                    var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-series");
                    if (i.length > 0) for (var a = i.length - 1; a >= 0; a--) e(i, a, "line");
                    var s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-series");
                    if (s.length > 0) for (var r = s.length - 1; r >= 0; r--) e(s, r, "area");
                    var n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series .apexcharts-series");
                    if (n.length > 0) for (var o = 0; o < n.length; o++) e(n, o, "bar");
                    var l = t.globals.dom.baseEl.querySelectorAll(".apexcharts-candlestick-series .apexcharts-series");
                    if (l.length > 0) for (var h = 0; h < l.length; h++) e(l, h, "candlestick");
                    var c = t.globals.dom.baseEl.querySelectorAll(".apexcharts-radar-series .apexcharts-series");
                    if (c.length > 0) for (var d = 0; d < c.length; d++) e(c, d, "radar");
                    var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series");
                    if (u.length > 0) for (var g = 0; g < u.length; g++) {
                        for (var f = t.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series[data\\:realIndex='".concat(g, "'] circle")), p = [], x = 0; x < f.length; x++) p.push({
                            x: f[x].getAttribute("cx"),
                            y: f[x].getAttribute("cy"),
                            r: f[x].getAttribute("r")
                        });
                        t.globals.previousPaths.push(p)
                    }
                    var b = t.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series");
                    if (b.length > 0) for (var v = 0; v < b.length; v++) {
                        for (var m = t.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series[data\\:realIndex='".concat(v, "'] circle")), y = [], w = 0; w < m.length; w++) y.push({
                            x: m[w].getAttribute("cx"),
                            y: m[w].getAttribute("cy"),
                            r: m[w].getAttribute("r")
                        });
                        t.globals.previousPaths.push(y)
                    }
                    var k = t.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series");
                    if (k.length > 0) for (var S = 0; S < k.length; S++) {
                        for (var A = t.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series[data\\:realIndex='".concat(S, "'] rect")), C = [], P = 0; P < A.length; P++) C.push({color: A[P].getAttribute("color")});
                        t.globals.previousPaths.push(C)
                    }
                    t.globals.axisCharts || (t.globals.previousPaths = t.globals.series)
                }
            }, {
                key: "handleNoData", value: function () {
                    var t = this.w, e = t.config.noData, i = new p(this.ctx), a = t.globals.svgWidth / 2,
                        s = t.globals.svgHeight / 2, r = "middle";
                    if (t.globals.noData = !0, t.globals.animationEnded = !0, "left" === e.align ? (a = 10, r = "start") : "right" === e.align && (a = t.globals.svgWidth - 10, r = "end"), "top" === e.verticalAlign ? s = 50 : "bottom" === e.verticalAlign && (s = t.globals.svgHeight - 50), a += e.offsetX, s = s + parseInt(e.style.fontSize, 10) + 2 + e.offsetY, void 0 !== e.text && "" !== e.text) {
                        var n = i.drawText({
                            x: a,
                            y: s,
                            text: e.text,
                            textAnchor: r,
                            fontSize: e.style.fontSize,
                            fontFamily: e.style.fontFamily,
                            foreColor: e.style.color,
                            opacity: 1,
                            class: "apexcharts-text-nodata"
                        });
                        n.node.setAttribute("class", "apexcharts-title-text"), t.globals.dom.Paper.add(n)
                    }
                }
            }, {
                key: "setNullSeriesToZeroValues", value: function (t) {
                    for (var e = this.w, i = 0; i < t.length; i++) if (0 === t[i].length) for (var a = 0; a < t[e.globals.maxValsInArrayIndex].length; a++) t[i].push(0);
                    return t
                }
            }, {
                key: "hasAllSeriesEqualX", value: function () {
                    for (var t = !0, e = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++) if (i[a][0] !== i[a + 1][0]) {
                        t = !1;
                        break
                    }
                    return e.globals.allSeriesHasEqualX = t, t
                }
            }, {
                key: "filteredSeriesX", value: function () {
                    var t = this.w.globals.seriesX.map((function (t) {
                        return t.length > 0 ? t : []
                    }));
                    return t
                }
            }]) && Ce(e.prototype, i), a && Ce(e, a), t
        }();

        function Le(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Te = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length
            }

            var e, i, a;
            return e = t, (i = [{
                key: "init", value: function () {
                    var t = this.w, e = t.globals, i = t.config;
                    if ((i.legend.showForSingleSeries && 1 === e.series.length || this.isBarsDistributed || e.series.length > 1 || !e.axisCharts) && i.legend.show) {
                        for (; e.dom.elLegendWrap.firstChild;) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
                        this.drawLegends(), n.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.getLegendStyles()) : this.appendToForeignObject(), "bottom" === i.legend.position || "top" === i.legend.position ? this.legendAlignHorizontal() : "right" !== i.legend.position && "left" !== i.legend.position || this.legendAlignVertical()
                    }
                }
            }, {
                key: "getLegendStyles", value: function () {
                    var t = document.createElement("style");
                    t.setAttribute("type", "text/css");
                    var e = document.createTextNode("\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.position-bottom.center, .apexcharts-legend.position-top.center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.position-bottom.right, .apexcharts-legend.position-top.right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n      }\t\n      \t\n      .apexcharts-legend.right .apexcharts-legend-series, .apexcharts-legend.left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .inactive-legend {\t\n        opacity: 0.45;\t\n      }");
                    return t.appendChild(e), t
                }
            }, {
                key: "appendToForeignObject", value: function () {
                    var t = this.w.globals;
                    t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject");
                    var e = t.dom.elLegendForeign;
                    e.setAttribute("x", 0), e.setAttribute("y", 0), e.setAttribute("width", t.svgWidth), e.setAttribute("height", t.svgHeight), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e.appendChild(t.dom.elLegendWrap), e.appendChild(this.getLegendStyles()), t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node)
                }
            }, {
                key: "drawLegends", value: function () {
                    var t = this.w, e = t.config.legend.fontFamily, i = t.globals.seriesNames,
                        a = t.globals.colors.slice();
                    if ("heatmap" === t.config.chart.type) {
                        var s = t.config.plotOptions.heatmap.colorScale.ranges;
                        i = s.map((function (t) {
                            return t.name ? t.name : t.from + " - " + t.to
                        })), a = s.map((function (t) {
                            return t.color
                        }))
                    } else this.isBarsDistributed && (i = t.globals.labels.slice());
                    for (var r = t.globals.legendFormatter, n = t.config.legend.inverseOrder, o = n ? i.length - 1 : 0; n ? o >= 0 : o <= i.length - 1; n ? o-- : o++) {
                        var l = r(i[o], {seriesIndex: o, w: t}), h = !1, c = !1;
                        if (t.globals.collapsedSeries.length > 0) for (var d = 0; d < t.globals.collapsedSeries.length; d++) t.globals.collapsedSeries[d].index === o && (h = !0);
                        if (t.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var u = 0; u < t.globals.ancillaryCollapsedSeriesIndices.length; u++) t.globals.ancillaryCollapsedSeriesIndices[u] === o && (c = !0);
                        var g = document.createElement("span");
                        g.classList.add("apexcharts-legend-marker");
                        var f = t.config.legend.markers.offsetX, x = t.config.legend.markers.offsetY,
                            b = t.config.legend.markers.height, v = t.config.legend.markers.width,
                            m = t.config.legend.markers.strokeWidth, y = t.config.legend.markers.strokeColor,
                            w = t.config.legend.markers.radius, k = g.style;
                        k.background = a[o], k.color = a[o], t.config.legend.markers.fillColors && t.config.legend.markers.fillColors[o] && (k.background = t.config.legend.markers.fillColors[o]), k.height = Array.isArray(b) ? parseFloat(b[o]) + "px" : parseFloat(b) + "px", k.width = Array.isArray(v) ? parseFloat(v[o]) + "px" : parseFloat(v) + "px", k.left = Array.isArray(f) ? f[o] : f, k.top = Array.isArray(x) ? x[o] : x, k.borderWidth = Array.isArray(m) ? m[o] : m, k.borderColor = Array.isArray(y) ? y[o] : y, k.borderRadius = Array.isArray(w) ? parseFloat(w[o]) + "px" : parseFloat(w) + "px", t.config.legend.markers.customHTML && (Array.isArray(t.config.legend.markers.customHTML) ? g.innerHTML = t.config.legend.markers.customHTML[o]() : g.innerHTML = t.config.legend.markers.customHTML()), p.setAttrs(g, {
                            rel: o + 1,
                            "data:collapsed": h || c
                        }), (h || c) && g.classList.add("inactive-legend");
                        var S = document.createElement("div"), A = document.createElement("span");
                        A.classList.add("apexcharts-legend-text"), A.innerHTML = l;
                        var C = t.config.legend.labels.useSeriesColors ? t.globals.colors[o] : t.config.legend.labels.colors;
                        C || (C = t.config.chart.foreColor), A.style.color = C, A.style.fontSize = parseFloat(t.config.legend.fontSize) + "px", A.style.fontFamily = e || t.config.chart.fontFamily, p.setAttrs(A, {
                            rel: o + 1,
                            i: o,
                            "data:default-text": encodeURIComponent(l),
                            "data:collapsed": h || c
                        }), S.appendChild(g), S.appendChild(A);
                        var P = new $(this.ctx);
                        t.config.legend.showForZeroSeries || 0 === P.getSeriesTotalByIndex(o) && P.seriesHaveSameValues(o) && !P.isSeriesNull(o) && -1 === t.globals.collapsedSeriesIndices.indexOf(o) && -1 === t.globals.ancillaryCollapsedSeriesIndices.indexOf(o) && S.classList.add("apexcharts-hidden-zero-series"), t.config.legend.showForNullSeries || P.isSeriesNull(o) && -1 === t.globals.collapsedSeriesIndices.indexOf(o) && -1 === t.globals.ancillaryCollapsedSeriesIndices.indexOf(o) && S.classList.add("apexcharts-hidden-null-series"), t.globals.dom.elLegendWrap.appendChild(S), t.globals.dom.elLegendWrap.classList.add(t.config.legend.horizontalAlign), t.globals.dom.elLegendWrap.classList.add("position-" + t.config.legend.position), S.classList.add("apexcharts-legend-series"), S.style.margin = "".concat(t.config.legend.itemMargin.horizontal, "px ").concat(t.config.legend.itemMargin.vertical, "px"), t.globals.dom.elLegendWrap.style.width = t.config.legend.width ? t.config.legend.width + "px" : "", t.globals.dom.elLegendWrap.style.height = t.config.legend.height ? t.config.legend.height + "px" : "", p.setAttrs(S, {
                            rel: o + 1,
                            "data:collapsed": h || c
                        }), (h || c) && S.classList.add("inactive-legend"), t.config.legend.onItemClick.toggleDataSeries || S.classList.add("no-click")
                    }
                    "heatmap" !== t.config.chart.type && !this.isBarsDistributed && t.config.legend.onItemClick.toggleDataSeries && t.globals.dom.elWrap.addEventListener("click", this.onLegendClick, !0), t.config.legend.onItemHover.highlightDataSeries && (t.globals.dom.elWrap.addEventListener("mousemove", this.onLegendHovered, !0), t.globals.dom.elWrap.addEventListener("mouseout", this.onLegendHovered, !0))
                }
            }, {
                key: "getLegendBBox", value: function () {
                    var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),
                        e = t.width;
                    return {clwh: t.height, clww: e}
                }
            }, {
                key: "setLegendWrapXY", value: function (t, e) {
                    var i = this.w, a = i.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                        s = a.getBoundingClientRect(), r = 0, n = 0;
                    if ("bottom" === i.config.legend.position) n += i.globals.svgHeight - s.height / 2; else if ("top" === i.config.legend.position) {
                        var o = new Ae(this.ctx), l = o.getTitleSubtitleCoords("title").height,
                            h = o.getTitleSubtitleCoords("subtitle").height;
                        n = n + (l > 0 ? l - 10 : 0) + (h > 0 ? h - 10 : 0)
                    }
                    a.style.position = "absolute", r = r + t + i.config.legend.offsetX, n = n + e + i.config.legend.offsetY, a.style.left = r + "px", a.style.top = n + "px", "bottom" === i.config.legend.position ? (a.style.top = "auto", a.style.bottom = 10 + i.config.legend.offsetY + "px") : "right" === i.config.legend.position && (a.style.left = "auto", a.style.right = 25 + i.config.legend.offsetX + "px"), a.style.width && (a.style.width = parseInt(i.config.legend.width, 10) + "px"), a.style.height && (a.style.height = parseInt(i.config.legend.height, 10) + "px")
                }
            }, {
                key: "legendAlignHorizontal", value: function () {
                    var t = this.w;
                    t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right = 0;
                    var e = this.getLegendBBox(), i = new Ae(this.ctx), a = i.getTitleSubtitleCoords("title"),
                        s = i.getTitleSubtitleCoords("subtitle"), r = 0;
                    "bottom" === t.config.legend.position ? r = -e.clwh / 1.8 : "top" === t.config.legend.position && (r = a.height + s.height + t.config.title.margin + t.config.subtitle.margin - 15), this.setLegendWrapXY(20, r)
                }
            }, {
                key: "legendAlignVertical", value: function () {
                    var t = this.w, e = this.getLegendBBox(), i = 0;
                    "left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20)
                }
            }, {
                key: "onLegendHovered", value: function (t) {
                    var e = this.w,
                        i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
                    if ("heatmap" === e.config.chart.type || this.isBarsDistributed) {
                        if (i) {
                            var a = parseInt(t.target.getAttribute("rel"), 10) - 1;
                            this.ctx.fireEvent("legendHover", [this.ctx, a, this.w]), new Pe(this.ctx).highlightRangeInSeries(t, t.target)
                        }
                    } else !t.target.classList.contains("inactive-legend") && i && new Pe(this.ctx).toggleSeriesOnHover(t, t.target)
                }
            }, {
                key: "onLegendClick", value: function (t) {
                    if (t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker")) {
                        var e = parseInt(t.target.getAttribute("rel"), 10) - 1,
                            i = "true" === t.target.getAttribute("data:collapsed"),
                            a = this.w.config.chart.events.legendClick;
                        "function" == typeof a && a(this.ctx, e, this.w), this.ctx.fireEvent("legendClick", [this.ctx, e, this.w]);
                        var s = this.w.config.legend.markers.onClick;
                        "function" == typeof s && t.target.classList.contains("apexcharts-legend-marker") && (s(this.ctx, e, this.w), this.ctx.fireEvent("legendMarkerClick", [this.ctx, e, this.w])), this.toggleDataSeries(e, i)
                    }
                }
            }, {
                key: "toggleDataSeries", value: function (t, e) {
                    var i = this.w;
                    if (i.globals.axisCharts || "radialBar" === i.config.chart.type) {
                        i.globals.resized = !0;
                        var a = null, s = null;
                        if (i.globals.risingSeries = [], i.globals.axisCharts ? (a = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), s = parseInt(a.getAttribute("data:realIndex"), 10)) : (a = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), s = parseInt(a.getAttribute("rel"), 10) - 1), e) this.riseCollapsedSeries(i.globals.collapsedSeries, i.globals.collapsedSeriesIndices, s), this.riseCollapsedSeries(i.globals.ancillaryCollapsedSeries, i.globals.ancillaryCollapsedSeriesIndices, s); else {
                            if (i.globals.axisCharts) {
                                var r = !1;
                                if (i.config.yaxis[s] && i.config.yaxis[s].show && i.config.yaxis[s].showAlways && (r = !0, i.globals.ancillaryCollapsedSeriesIndices.indexOf(s) < 0 && (i.globals.ancillaryCollapsedSeries.push({
                                    index: s,
                                    data: i.config.series[s].data.slice(),
                                    type: a.parentNode.className.baseVal.split("-")[1]
                                }), i.globals.ancillaryCollapsedSeriesIndices.push(s))), !r) {
                                    i.globals.collapsedSeries.push({
                                        index: s,
                                        data: i.config.series[s].data.slice(),
                                        type: a.parentNode.className.baseVal.split("-")[1]
                                    }), i.globals.collapsedSeriesIndices.push(s);
                                    var n = i.globals.risingSeries.indexOf(s);
                                    i.globals.risingSeries.splice(n, 1)
                                }
                                i.config.series[s].data = []
                            } else i.globals.collapsedSeries.push({
                                index: s,
                                data: i.config.series[s]
                            }), i.globals.collapsedSeriesIndices.push(s), i.config.series[s] = 0;
                            for (var o = a.childNodes, l = 0; l < o.length; l++) o[l].classList.contains("apexcharts-series-markers-wrap") && (o[l].classList.contains("apexcharts-hide") ? o[l].classList.remove("apexcharts-hide") : o[l].classList.add("apexcharts-hide"));
                            i.globals.allSeriesCollapsed = i.globals.collapsedSeries.length === i.globals.series.length, this.ctx._updateSeries(i.config.series, i.config.chart.animations.dynamicAnimation.enabled)
                        }
                    } else {
                        var h = i.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")),
                            c = i.config.chart.type;
                        if ("pie" === c || "donut" === c) {
                            var d = i.config.plotOptions.pie.donut.labels, u = new p(this.ctx), g = new ie(this.ctx);
                            u.pathMouseDown(h.members[0], null), g.printDataLabelsInner(h.members[0].node, d)
                        }
                        h.fire("click")
                    }
                }
            }, {
                key: "riseCollapsedSeries", value: function (t, e, i) {
                    var a = this.w;
                    if (t.length > 0) for (var s = 0; s < t.length; s++) t[s].index === i && (a.globals.axisCharts ? (a.config.series[i].data = t[s].data.slice(), t.splice(s, 1), e.splice(s, 1), a.globals.risingSeries.push(i)) : (a.config.series[i] = t[s].data, t.splice(s, 1), e.splice(s, 1), a.globals.risingSeries.push(i)), this.ctx._updateSeries(a.config.series, a.config.chart.animations.dynamicAnimation.enabled))
                }
            }]) && Le(e.prototype, i), a && Le(e, a), t
        }();

        function Ee(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function Oe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ee(Object(i), !0).forEach((function (e) {
                    ze(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Ee(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function ze(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function Ie(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Me = function () {
            function t(e, i, a) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.xyRatios = i, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || a, this.scatter = new wt(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.yaxisIndex = 0
            }

            var e, i, a;
            return e = t, (i = [{
                key: "draw", value: function (t, e, i) {
                    var a = this.w, s = new p(this.ctx), r = new bt(this.ctx), o = new St(this.ctx),
                        l = a.globals.comboCharts ? e : a.config.chart.type,
                        h = s.group({class: "apexcharts-".concat(l, "-series apexcharts-plot-series")}),
                        c = new $(this.ctx, a);
                    t = c.getLogSeries(t);
                    var d = this.xyRatios.yRatio;
                    d = c.getLogYRatios(d);
                    for (var u = this.xyRatios.zRatio, g = this.xyRatios.xRatio, f = this.xyRatios.baseLineY, x = [], b = [], v = 0, m = 0; m < t.length; m++) {
                        if ("line" === l && ("gradient" === a.config.fill.type || "gradient" === a.config.fill.type[m]) && c.seriesHaveSameValues(m)) {
                            var y = t[m].slice();
                            y[y.length - 1] = y[y.length - 1] + 1e-6, t[m] = y
                        }
                        var w = a.globals.gridWidth / a.globals.dataPoints, k = a.globals.comboCharts ? i[m] : m,
                            S = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[k] : a.config.stroke.width;
                        d.length > 1 && (this.yaxisIndex = k), this.isReversed = a.config.yaxis[this.yaxisIndex] && a.config.yaxis[this.yaxisIndex].reversed;
                        var A = [], C = [],
                            P = a.globals.gridHeight - f[this.yaxisIndex] - (this.isReversed ? a.globals.gridHeight : 0) + (this.isReversed ? 2 * f[this.yaxisIndex] : 0),
                            L = P;
                        P > a.globals.gridHeight && (L = a.globals.gridHeight), v = w / 2;
                        var T = a.globals.padHorizontal + v, E = 1;
                        a.globals.isXNumeric && a.globals.seriesX.length > 0 && (T = (a.globals.seriesX[k][0] - a.globals.minX) / g), C.push(T);
                        var O = void 0, z = void 0, I = void 0, M = void 0, X = [], Y = [], D = s.group({
                                class: "apexcharts-series",
                                seriesName: n.escapeString(a.globals.seriesNames[k])
                            }), R = s.group({class: "apexcharts-series-markers-wrap"}),
                            F = s.group({class: "apexcharts-datalabels"});
                        this.ctx.series.addCollapsedClassToSeries(D, k);
                        var H = t[m].length === a.globals.dataPoints;
                        D.attr({"data:longestSeries": H, rel: m + 1, "data:realIndex": k}), this.appendPathFrom = !0;
                        var N = T, W = void 0, B = N, j = P, V = 0;
                        if (j = this.determineFirstPrevY({
                            i: m,
                            series: t,
                            yRatio: d[this.yaxisIndex],
                            zeroY: P,
                            prevY: j,
                            prevSeriesY: b,
                            lineYPosition: V
                        }).prevY, A.push(j), W = j, null === t[m][0]) {
                            for (var G = 0; G < t[m].length; G++) if (null !== t[m][G]) {
                                B = w * G, j = P - t[m][G] / d[this.yaxisIndex], O = s.move(B, j), z = s.move(B, L);
                                break
                            }
                        } else O = s.move(B, j), z = s.move(B, L) + s.line(B, j);
                        if (I = s.move(-1, P) + s.line(-1, P), M = s.move(-1, P) + s.line(-1, P), a.globals.previousPaths.length > 0) {
                            var _ = this.checkPreviousPaths({pathFromLine: I, pathFromArea: M, realIndex: k});
                            I = _.pathFromLine, M = _.pathFromArea
                        }
                        for (var U = a.globals.dataPoints > 1 ? a.globals.dataPoints - 1 : a.globals.dataPoints, q = 0; q < U; q++) {
                            var Z = void 0 === t[m][q + 1] || null === t[m][q + 1];
                            if (a.globals.isXNumeric) {
                                var J = a.globals.seriesX[k][q + 1];
                                void 0 === a.globals.seriesX[k][q + 1] && (J = a.globals.seriesX[k][U - 1]), T = (J - a.globals.minX) / g
                            } else T += w;
                            var Q = n.isNumber(a.globals.minYArr[k]) ? a.globals.minYArr[k] : a.globals.minY;
                            V = a.config.chart.stacked && m > 0 && a.globals.collapsedSeries.length < a.config.series.length - 1 ? b[m - 1][q + 1] : P, E = Z ? V - Q / d[this.yaxisIndex] + 2 * (this.isReversed ? Q / d[this.yaxisIndex] : 0) : V - t[m][q + 1] / d[this.yaxisIndex] + 2 * (this.isReversed ? t[m][q + 1] / d[this.yaxisIndex] : 0), C.push(T), A.push(E);
                            var K = this.createPaths({
                                series: t,
                                i: m,
                                j: q,
                                x: T,
                                y: E,
                                xDivision: w,
                                pX: N,
                                pY: W,
                                areaBottomY: L,
                                linePath: O,
                                areaPath: z,
                                linePaths: X,
                                areaPaths: Y,
                                seriesIndex: i
                            });
                            Y = K.areaPaths, X = K.linePaths, N = K.pX, W = K.pY, z = K.areaPath, O = K.linePath, this.appendPathFrom && (I += s.line(T, P), M += s.line(T, P));
                            var tt = this.calculatePoints({
                                series: t,
                                x: T,
                                y: E,
                                realIndex: k,
                                i: m,
                                j: q,
                                prevY: j,
                                categoryAxisCorrection: v,
                                xRatio: g
                            });
                            if (this.pointsChart) this.scatter.draw(D, q, {
                                realIndex: k,
                                pointsPos: tt,
                                zRatio: u,
                                elParent: R
                            }); else {
                                var et = new mt(this.ctx);
                                a.globals.dataPoints > 1 && R.node.classList.add("hidden");
                                var it = et.plotChartMarkers(tt, k, q + 1);
                                null !== it && R.add(it)
                            }
                            var at = o.drawDataLabel(tt, k, q + 1, null, S);
                            null !== at && F.add(at)
                        }
                        b.push(A), a.globals.seriesXvalues[k] = C, a.globals.seriesYvalues[k] = A, this.pointsChart || a.globals.delayedElements.push({
                            el: R.node,
                            index: k
                        });
                        var st = {
                            i: m,
                            realIndex: k,
                            animationDelay: m,
                            initialSpeed: a.config.chart.animations.speed,
                            dataChangeSpeed: a.config.chart.animations.dynamicAnimation.speed,
                            className: "apexcharts-".concat(l)
                        };
                        if ("area" === l) for (var rt = r.fillPath({seriesNumber: k}), nt = 0; nt < Y.length; nt++) {
                            var ot = s.renderPaths(Oe({}, st, {
                                pathFrom: M,
                                pathTo: Y[nt],
                                stroke: "none",
                                strokeWidth: 0,
                                strokeLineCap: null,
                                fill: rt
                            }));
                            D.add(ot)
                        }
                        if (a.config.stroke.show && !this.pointsChart) {
                            var lt = null;
                            lt = "line" === l ? r.fillPath({seriesNumber: k, i: m}) : a.globals.stroke.colors[k];
                            for (var ht = 0; ht < X.length; ht++) {
                                var ct = s.renderPaths(Oe({}, st, {
                                    pathFrom: I,
                                    pathTo: X[ht],
                                    stroke: lt,
                                    strokeWidth: S,
                                    strokeLineCap: a.config.stroke.lineCap,
                                    fill: "none"
                                }));
                                D.add(ct)
                            }
                        }
                        D.add(R), D.add(F), x.push(D)
                    }
                    for (var dt = x.length; dt > 0; dt--) h.add(x[dt - 1]);
                    return h
                }
            }, {
                key: "createPaths", value: function (t) {
                    var e = t.series, i = t.i, a = t.j, s = t.x, r = t.y, n = t.pX, o = t.pY, l = t.xDivision,
                        h = t.areaBottomY, c = t.linePath, d = t.areaPath, u = t.linePaths, g = t.areaPaths,
                        f = t.seriesIndex, x = this.w, b = new p(this.ctx), v = x.config.stroke.curve;
                    if (Array.isArray(x.config.stroke.curve) && (v = Array.isArray(f) ? x.config.stroke.curve[f[i]] : x.config.stroke.curve[i]), "smooth" === v) {
                        var m = .35 * (s - n);
                        x.globals.hasNullValues ? (null !== e[i][a] && (null !== e[i][a + 1] ? (c = b.move(n, o) + b.curve(n + m, o, s - m, r, s + 1, r), d = b.move(n + 1, o) + b.curve(n + m, o, s - m, r, s + 1, r) + b.line(s, h) + b.line(n, h) + "z") : (c = b.move(n, o), d = b.move(n, o) + "z")), u.push(c), g.push(d)) : (c += b.curve(n + m, o, s - m, r, s, r), d += b.curve(n + m, o, s - m, r, s, r)), n = s, o = r, a === e[i].length - 2 && (d = d + b.curve(n, o, s, r, s, h) + b.move(s, r) + "z", x.globals.hasNullValues || (u.push(c), g.push(d)))
                    } else null === e[i][a + 1] && (c += b.move(s, r), d = d + b.line(s - l, h) + b.move(s, r)), null === e[i][a] && (c += b.move(s, r), d += b.move(s, h)), "stepline" === v ? (c = c + b.line(s, null, "H") + b.line(null, r, "V"), d = d + b.line(s, null, "H") + b.line(null, r, "V")) : "straight" === v && (c += b.line(s, r), d += b.line(s, r)), a === e[i].length - 2 && (d = d + b.line(s, h) + b.move(s, r) + "z", u.push(c), g.push(d));
                    return {linePaths: u, areaPaths: g, pX: n, pY: o, linePath: c, areaPath: d}
                }
            }, {
                key: "calculatePoints", value: function (t) {
                    var e = t.series, i = t.realIndex, a = t.x, s = t.y, r = t.i, o = t.j, l = t.prevY,
                        h = t.categoryAxisCorrection, c = t.xRatio, d = this.w, u = [], g = [];
                    if (0 === o) {
                        var f = h + d.config.markers.offsetX;
                        d.globals.isXNumeric && (f = (d.globals.seriesX[i][0] - d.globals.minX) / c + d.config.markers.offsetX), u.push(f), g.push(n.isNumber(e[r][0]) ? l + d.config.markers.offsetY : null), u.push(a + d.config.markers.offsetX), g.push(n.isNumber(e[r][o + 1]) ? s + d.config.markers.offsetY : null)
                    } else u.push(a + d.config.markers.offsetX), g.push(n.isNumber(e[r][o + 1]) ? s + d.config.markers.offsetY : null);
                    return {x: u, y: g}
                }
            }, {
                key: "checkPreviousPaths", value: function (t) {
                    for (var e = t.pathFromLine, i = t.pathFromArea, a = t.realIndex, s = this.w, r = 0; r < s.globals.previousPaths.length; r++) {
                        var n = s.globals.previousPaths[r];
                        ("line" === n.type || "area" === n.type) && n.paths.length > 0 && parseInt(n.realIndex, 10) === parseInt(a, 10) && ("line" === n.type ? (this.appendPathFrom = !1, e = s.globals.previousPaths[r].paths[0].d) : "area" === n.type && (this.appendPathFrom = !1, i = s.globals.previousPaths[r].paths[0].d, s.config.stroke.show && (e = s.globals.previousPaths[r].paths[1].d)))
                    }
                    return {pathFromLine: e, pathFromArea: i}
                }
            }, {
                key: "determineFirstPrevY", value: function (t) {
                    var e = t.i, i = t.series, a = t.yRatio, s = t.zeroY, r = t.prevY, n = t.prevSeriesY,
                        o = t.lineYPosition, l = this.w;
                    if (void 0 !== i[e][0]) r = (o = l.config.chart.stacked && e > 0 ? n[e - 1][0] : s) - i[e][0] / a + 2 * (this.isReversed ? i[e][0] / a : 0); else if (l.config.chart.stacked && e > 0 && void 0 === i[e][0]) for (var h = e - 1; h >= 0; h--) if (null !== i[h][0] && void 0 !== i[h][0]) {
                        r = o = n[h][0];
                        break
                    }
                    return {prevY: r, lineYPosition: o}
                }
            }]) && Ie(e.prototype, i), a && Ie(e, a), t
        }();

        function Xe(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ye = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "niceScale", value: function (t, e, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 10, r = this.w,
                        o = void 0 === this.w.config.yaxis[a].max && void 0 === this.w.config.yaxis[a].min || this.w.config.yaxis[a].forceNiceScale;
                    if (t === Number.MIN_VALUE && 0 === e || !n.isNumber(t) && !n.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE) {
                        t = 0, e = s;
                        var l = this.linearScale(t, e, s);
                        return l
                    }
                    t > e ? (console.warn("yaxis.min cannot be greater than yaxis.max"), e = t + .1) : t === e && (t = 0 === t ? 0 : t - .5, e = 0 === e ? 2 : e + .5);
                    var h = [], c = Math.abs(e - t);
                    c < 1 && o && ("candlestick" === r.config.chart.type || "candlestick" === r.config.series[a].type || r.globals.isRangeData) && (e *= 1.01);
                    var d = s + 1;
                    d < 2 ? d = 2 : d > 2 && (d -= 2);
                    var u = c / d, g = Math.floor(n.log10(u)), f = Math.pow(10, g), p = Math.round(u / f);
                    p < 1 && (p = 1);
                    var x = p * f, b = x * Math.floor(t / x), v = x * Math.ceil(e / x), m = b;
                    if (o && c > 2) {
                        for (; h.push(m), !((m += x) > v);) ;
                        return {result: h, niceMin: h[0], niceMax: h[h.length - 1]}
                    }
                    var y = t;
                    (h = []).push(y);
                    for (var w = Math.abs(e - t) / s, k = 0; k <= s; k++) y += w, h.push(y);
                    return h[h.length - 2] >= e && h.pop(), {result: h, niceMin: h[0], niceMax: h[h.length - 1]}
                }
            }, {
                key: "linearScale", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a = Math.abs(e - t),
                        s = a / i;
                    i === Number.MAX_VALUE && (i = 10, s = 1);
                    for (var r = [], n = t; i >= 0;) r.push(n), n += s, i -= 1;
                    return {result: r, niceMin: r[0], niceMax: r[r.length - 1]}
                }
            }, {
                key: "logarithmicScale", value: function (t, e, i, a) {
                    (e < 0 || e === Number.MIN_VALUE) && (e = .01);
                    for (var s = Math.log(e) / Math.log(10), r = Math.log(i) / Math.log(10), o = Math.abs(i - e) / a, l = [], h = e; a >= 0;) l.push(h), h += o, a -= 1;
                    var c = l.map((function (t, a) {
                        t <= 0 && (t = .01);
                        var o = (r - s) / (i - e), l = Math.pow(10, s + o * (t - s));
                        return Math.round(l / n.roundToBase(l, 10)) * n.roundToBase(l, 10)
                    }));
                    return 0 === c[0] && (c[0] = 1), {result: c, niceMin: c[0], niceMax: c[c.length - 1]}
                }
            }, {
                key: "setYScaleForIndex", value: function (t, e, i) {
                    var a = this.w.globals, s = this.w.config, r = a.isBarHorizontal ? s.xaxis : s.yaxis[t];
                    void 0 === a.yAxisScale[t] && (a.yAxisScale[t] = []);
                    var o = Math.abs(i - e);
                    r.logarithmic && o <= 5 && (a.invalidLogScale = !0), r.logarithmic && o > 5 ? (a.allSeriesCollapsed = !1, a.yAxisScale[t] = this.logarithmicScale(t, e, i, r.tickAmount ? r.tickAmount : Math.floor(Math.log10(i)))) : i !== -Number.MAX_VALUE && n.isNumber(i) ? (a.allSeriesCollapsed = !1, void 0 === r.min && void 0 === r.max || r.forceNiceScale ? a.yAxisScale[t] = this.niceScale(e, i, o, t, r.tickAmount ? r.tickAmount : o < 5 && o > 1 ? o + 1 : 5) : a.yAxisScale[t] = this.linearScale(e, i, r.tickAmount)) : a.yAxisScale[t] = this.linearScale(0, 5, 5)
                }
            }, {
                key: "setMultipleYScales", value: function () {
                    var t = this, e = this.w.globals, i = this.w.config, a = e.minYArr.concat([]),
                        s = e.maxYArr.concat([]), r = [];
                    i.yaxis.forEach((function (n, o) {
                        var l = o;
                        i.series.forEach((function (t, i) {
                            t.name === n.seriesName && -1 === e.collapsedSeriesIndices.indexOf(i) && (l = i, o !== i ? r.push({
                                index: i,
                                similarIndex: o,
                                alreadyExists: !0
                            }) : r.push({index: i}))
                        }));
                        var h = a[l], c = s[l];
                        t.setYScaleForIndex(o, h, c)
                    })), this.sameScaleInMultipleAxes(a, s, r)
                }
            }, {
                key: "sameScaleInMultipleAxes", value: function (t, e, i) {
                    var a = this, s = this.w.config, r = this.w.globals, n = [];
                    i.forEach((function (t) {
                        t.alreadyExists && (void 0 === n[t.index] && (n[t.index] = []), n[t.index].push(t.index), n[t.index].push(t.similarIndex))
                    })), r.yAxisSameScaleIndices = n, n.forEach((function (t, e) {
                        n.forEach((function (i, a) {
                            var s, r;
                            e !== a && (s = t, r = i, s.filter((function (t) {
                                return -1 !== r.indexOf(t)
                            }))).length > 0 && (n[e] = n[e].concat(n[a]))
                        }))
                    }));
                    var o = n.map((function (t) {
                        return t.filter((function (e, i) {
                            return t.indexOf(e) === i
                        }))
                    })).map((function (t) {
                        return t.sort()
                    }));
                    n = n.filter((function (t) {
                        return !!t
                    }));
                    var l = o.slice(), h = l.map((function (t) {
                        return JSON.stringify(t)
                    }));
                    l = l.filter((function (t, e) {
                        return h.indexOf(JSON.stringify(t)) === e
                    }));
                    var c = [], d = [];
                    t.forEach((function (t, i) {
                        l.forEach((function (a, s) {
                            a.indexOf(i) > -1 && (void 0 === c[s] && (c[s] = [], d[s] = []), c[s].push({
                                key: i,
                                value: t
                            }), d[s].push({key: i, value: e[i]}))
                        }))
                    }));
                    var u = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, Number.MIN_VALUE),
                        g = Array.apply(null, Array(l.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
                    c.forEach((function (t, e) {
                        t.forEach((function (t, i) {
                            u[e] = Math.min(t.value, u[e])
                        }))
                    })), d.forEach((function (t, e) {
                        t.forEach((function (t, i) {
                            g[e] = Math.max(t.value, g[e])
                        }))
                    })), t.forEach((function (t, e) {
                        d.forEach((function (t, i) {
                            var n = u[i], o = g[i];
                            s.chart.stacked && (o = 0, t.forEach((function (t, e) {
                                o += t.value, n !== Number.MIN_VALUE && (n += c[i][e].value)
                            }))), t.forEach((function (i, l) {
                                t[l].key === e && (void 0 !== s.yaxis[e].min && (n = "function" == typeof s.yaxis[e].min ? s.yaxis[e].min(r.minY) : s.yaxis[e].min), void 0 !== s.yaxis[e].max && (o = "function" == typeof s.yaxis[e].max ? s.yaxis[e].max(r.maxY) : s.yaxis[e].max), a.setYScaleForIndex(e, n, o))
                            }))
                        }))
                    }))
                }
            }, {
                key: "autoScaleY", value: function (t, e, i) {
                    t || (t = this);
                    var a = t.w;
                    if (a.globals.isMultipleYAxis || a.globals.collapsedSeries.length) return console.warn("autoScaleYaxis is not supported in a multi-yaxis chart."), e;
                    var s = a.globals.seriesX[0], r = a.config.chart.stacked;
                    return e.forEach((function (t, n) {
                        for (var o = 0, l = 0; l < s.length; l++) if (s[l] >= i.xaxis.min) {
                            o = l;
                            break
                        }
                        var h, c, d = a.globals.minYArr[n], u = a.globals.maxYArr[n], g = a.globals.stackedSeriesTotals;
                        a.globals.series.forEach((function (n, l) {
                            var f = n[o];
                            r ? (f = g[o], h = c = f, g.forEach((function (t, e) {
                                s[e] <= i.xaxis.max && s[e] >= i.xaxis.min && (t > c && null !== t && (c = t), n[e] < h && null !== n[e] && (h = n[e]))
                            }))) : (h = c = f, n.forEach((function (t, e) {
                                if (s[e] <= i.xaxis.max && s[e] >= i.xaxis.min) {
                                    var r = t, n = t;
                                    a.globals.series.forEach((function (i, a) {
                                        null !== t && (r = Math.min(i[e], r), n = Math.max(i[e], n))
                                    })), n > c && null !== n && (c = n), r < h && null !== r && (h = r)
                                }
                            }))), void 0 === h && void 0 === c && (h = d, c = u), (c *= c < 0 ? .9 : 1.1) < 0 && c < u && (c = u), (h *= h < 0 ? 1.1 : .9) < 0 && h > d && (h = d), e.length > 1 ? (e[l].min = void 0 === t.min ? h : t.min, e[l].max = void 0 === t.max ? c : t.max) : (e[0].min = void 0 === t.min ? h : t.min, e[0].max = void 0 === t.max ? c : t.max)
                        }))
                    })), e
                }
            }]) && Xe(e.prototype, i), a && Xe(e, a), t
        }();

        function De(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Re = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.scales = new Ye(e)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "init", value: function () {
                    this.setYRange(), this.setXRange(), this.setZRange()
                }
            }, {
                key: "getMinYMaxY", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s = this.w.config,
                        r = this.w.globals, o = -Number.MAX_VALUE, l = Number.MIN_VALUE;
                    null === a && (a = t + 1);
                    var h = r.series, c = h, d = h;
                    "candlestick" === s.chart.type ? (c = r.seriesCandleL, d = r.seriesCandleH) : r.isRangeData && (c = r.seriesRangeStart, d = r.seriesRangeEnd);
                    for (var u = t; u < a; u++) {
                        r.dataPoints = Math.max(r.dataPoints, h[u].length);
                        for (var g = 0; g < r.series[u].length; g++) {
                            var f = h[u][g];
                            null !== f && n.isNumber(f) ? (o = Math.max(o, d[u][g]), e = Math.min(e, c[u][g]), i = Math.max(i, c[u][g]), "candlestick" === this.w.config.chart.type && (o = Math.max(o, r.seriesCandleO[u][g]), o = Math.max(o, r.seriesCandleH[u][g]), o = Math.max(o, r.seriesCandleL[u][g]), i = o = Math.max(o, r.seriesCandleC[u][g])), n.isFloat(f) && (f = n.noExponents(f), r.yValueDecimal = Math.max(r.yValueDecimal, f.toString().split(".")[1].length)), l > c[u][g] && c[u][g] < 0 && (l = c[u][g])) : r.hasNullValues = !0
                        }
                    }
                    return "rangeBar" === s.chart.type && r.seriesRangeStart.length && "datetime" === s.xaxis.type && (l = e), {
                        minY: l,
                        maxY: o,
                        lowestY: e,
                        highestY: i
                    }
                }
            }, {
                key: "setYRange", value: function () {
                    var t = this.w.globals, e = this.w.config;
                    t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE;
                    var i = Number.MAX_VALUE;
                    if (t.isMultipleYAxis) for (var a = 0; a < t.series.length; a++) {
                        var s = this.getMinYMaxY(a, i, null, a + 1);
                        t.minYArr.push(s.minY), t.maxYArr.push(s.maxY), i = s.lowestY
                    }
                    var r = this.getMinYMaxY(0, i, null, t.series.length);
                    if (t.minY = r.minY, t.maxY = r.maxY, i = r.lowestY, e.chart.stacked) {
                        var o = [], l = [];
                        if (t.series.length) for (var h = 0; h < t.series[t.maxValsInArrayIndex].length; h++) for (var c = 0, d = 0, u = 0; u < t.series.length; u++) null !== t.series[u][h] && n.isNumber(t.series[u][h]) && (t.series[u][h] > 0 ? c = c + parseFloat(t.series[u][h]) + 1e-4 : d += parseFloat(t.series[u][h])), u === t.series.length - 1 && (o.push(c), l.push(d));
                        for (var g = 0; g < o.length; g++) t.maxY = Math.max(t.maxY, o[g]), t.minY = Math.min(t.minY, l[g])
                    }
                    if (("line" === e.chart.type || "area" === e.chart.type || "candlestick" === e.chart.type) && t.minY === Number.MIN_VALUE && i !== -Number.MAX_VALUE && i !== t.maxY) {
                        var f = t.maxY - i;
                        i >= 0 && i <= 10 && (f = 0), t.minY = i - 5 * f / 100, i > 0 && t.minY < 0 && (t.minY = 0), t.maxY = t.maxY + 5 * f / 100
                    }
                    return e.yaxis.map((function (e, i) {
                        void 0 !== e.max && ("number" == typeof e.max ? t.maxYArr[i] = e.max : "function" == typeof e.max && (t.maxYArr[i] = e.max(t.maxY)), t.maxY = t.maxYArr[i]), void 0 !== e.min && ("number" == typeof e.min ? t.minYArr[i] = e.min : "function" == typeof e.min && (t.minYArr[i] = e.min(t.minY)), t.minY = t.minYArr[i])
                    })), t.isBarHorizontal && (void 0 !== e.xaxis.min && "number" == typeof e.xaxis.min && (t.minY = e.xaxis.min), void 0 !== e.xaxis.max && "number" == typeof e.xaxis.max && (t.maxY = e.xaxis.max)), t.isMultipleYAxis ? (this.scales.setMultipleYScales(), t.minY = i, t.yAxisScale.forEach((function (e, i) {
                        t.minYArr[i] = e.niceMin, t.maxYArr[i] = e.niceMax
                    }))) : (this.scales.setYScaleForIndex(0, t.minY, t.maxY), t.minY = t.yAxisScale[0].niceMin, t.maxY = t.yAxisScale[0].niceMax, t.minYArr[0] = t.yAxisScale[0].niceMin, t.maxYArr[0] = t.yAxisScale[0].niceMax), {
                        minY: t.minY,
                        maxY: t.maxY,
                        minYArr: t.minYArr,
                        maxYArr: t.maxYArr
                    }
                }
            }, {
                key: "setXRange", value: function () {
                    var t, e = this.w.globals, i = this.w.config,
                        a = "numeric" === i.xaxis.type || "datetime" === i.xaxis.type || "category" === i.xaxis.type && !e.noLabelsProvided || e.noLabelsProvided || e.isXNumeric;
                    if (e.isXNumeric) for (var s = 0; s < e.series.length; s++) if (e.labels[s]) for (var r = 0; r < e.labels[s].length; r++) null !== e.labels[s][r] && n.isNumber(e.labels[s][r]) && (e.maxX = Math.max(e.maxX, e.labels[s][r]), e.initialmaxX = Math.max(e.maxX, e.labels[s][r]), e.minX = Math.min(e.minX, e.labels[s][r]), e.initialminX = Math.min(e.minX, e.labels[s][r]));
                    if (e.noLabelsProvided && 0 === i.xaxis.categories.length && (e.maxX = e.labels[e.labels.length - 1], e.initialmaxX = e.labels[e.labels.length - 1], e.minX = 1, e.initialminX = 1), (e.comboChartsHasBars || "candlestick" === i.chart.type || "bar" === i.chart.type && e.isXNumeric) && ("category" !== i.xaxis.type || e.isXNumeric)) {
                        var o = e.svgWidth / e.dataPoints * (Math.abs(e.maxX - e.minX) / e.svgWidth),
                            l = e.minX - o / 2;
                        e.minX = l, e.initialminX = l;
                        var h = e.maxX + o / ((e.series.length + 1) / e.series.length);
                        e.maxX = h, e.initialmaxX = h
                    }
                    if (!e.isXNumeric && !e.noLabelsProvided || i.xaxis.convertedCatToNumeric && !e.dataFormatXNumeric || (void 0 === i.xaxis.tickAmount ? (t = Math.round(e.svgWidth / 150), "numeric" === i.xaxis.type && e.dataPoints < 20 && (t = e.dataPoints - 1), t > e.dataPoints && 0 !== e.dataPoints && (t = e.dataPoints - 1)) : t = "dataPoints" === i.xaxis.tickAmount ? e.series[e.maxValsInArrayIndex].length - 1 : i.xaxis.tickAmount, void 0 !== i.xaxis.max && "number" == typeof i.xaxis.max && (e.maxX = i.xaxis.max), void 0 !== i.xaxis.min && "number" == typeof i.xaxis.min && (e.minX = i.xaxis.min), void 0 !== i.xaxis.range && (e.minX = e.maxX - i.xaxis.range), e.minX !== Number.MAX_VALUE && e.maxX !== -Number.MAX_VALUE ? e.xAxisScale = this.scales.linearScale(e.minX, e.maxX, t) : (e.xAxisScale = this.scales.linearScale(1, t, t), e.noLabelsProvided && e.labels.length > 0 && (e.xAxisScale = this.scales.linearScale(1, e.labels.length, t - 1), e.seriesX = e.labels.slice())), a && (e.labels = e.xAxisScale.result.slice())), e.minX === e.maxX) if ("datetime" === i.xaxis.type) {
                        var c = new Date(e.minX);
                        c.setDate(c.getDate() - 2), e.minX = new Date(c).getTime();
                        var d = new Date(e.maxX);
                        d.setDate(d.getDate() + 2), e.maxX = new Date(d).getTime()
                    } else ("numeric" === i.xaxis.type || "category" === i.xaxis.type && !e.noLabelsProvided) && (e.minX = e.minX - 2, e.maxX = e.maxX + 2);
                    return e.isXNumeric && e.seriesX.forEach((function (t, i) {
                        1 === t.length && t.push(e.seriesX[e.maxValsInArrayIndex][e.seriesX[e.maxValsInArrayIndex].length - 1]);
                        var a = t.slice();
                        a.sort((function (t, e) {
                            return t - e
                        })), a.forEach((function (t, a) {
                            if (a > 0) {
                                var s = t - e.seriesX[i][a - 1];
                                s > 0 && (e.minXDiff = Math.min(s, e.minXDiff))
                            }
                        }))
                    })), {minX: e.minX, maxX: e.maxX}
                }
            }, {
                key: "setZRange", value: function () {
                    var t = this.w.globals;
                    if (t.isDataXYZ) for (var e = 0; e < t.series.length; e++) if (void 0 !== t.seriesZ[e]) for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && n.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]))
                }
            }]) && De(e.prototype, i), a && De(e, a), t
        }();

        function Fe(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function He(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Fe(Object(i), !0).forEach((function (e) {
                    Ne(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Fe(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Ne(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function We(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Be = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.timeScaleArray = []
            }

            var e, i, a;
            return e = t, (i = [{
                key: "calculateTimeScaleTicks", value: function (t, e) {
                    var i = this, a = this.w;
                    if (a.globals.allSeriesCollapsed) return a.globals.labels = [], a.globals.timescaleLabels = [], [];
                    var s = new D(this.ctx), r = (e - t) / 864e5;
                    this.determineInterval(r), a.globals.disableZoomIn = !1, a.globals.disableZoomOut = !1, r < .005 ? a.globals.disableZoomIn = !0 : r > 5e4 && (a.globals.disableZoomOut = !0);
                    var n = s.getTimeUnitsfromTimestamp(t, e), o = a.globals.gridWidth / r, l = o / 24, h = l / 60,
                        c = Math.floor(24 * r), d = Math.floor(24 * r * 60), u = Math.floor(r), g = Math.floor(r / 30),
                        f = Math.floor(r / 365), p = {
                            minMinute: n.minMinute,
                            minHour: n.minHour,
                            minDate: n.minDate,
                            minMonth: n.minMonth,
                            minYear: n.minYear
                        }, x = {
                            firstVal: p,
                            currentMinute: p.minMinute,
                            currentHour: p.minHour,
                            currentMonthDate: p.minDate,
                            currentDate: p.minDate,
                            currentMonth: p.minMonth,
                            currentYear: p.minYear,
                            daysWidthOnXAxis: o,
                            hoursWidthOnXAxis: l,
                            minutesWidthOnXAxis: h,
                            numberOfMinutes: d,
                            numberOfHours: c,
                            numberOfDays: u,
                            numberOfMonths: g,
                            numberOfYears: f
                        };
                    switch (this.tickInterval) {
                        case"years":
                            this.generateYearScale(x);
                            break;
                        case"months":
                        case"half_year":
                            this.generateMonthScale(x);
                            break;
                        case"months_days":
                        case"months_fortnight":
                        case"days":
                        case"week_days":
                            this.generateDayScale(x);
                            break;
                        case"hours":
                            this.generateHourScale(x);
                            break;
                        case"minutes":
                            this.generateMinuteScale(x)
                    }
                    var b = this.timeScaleArray.map((function (t) {
                        var e = {
                            position: t.position,
                            unit: t.unit,
                            year: t.year,
                            day: t.day ? t.day : 1,
                            hour: t.hour ? t.hour : 0,
                            month: t.month + 1
                        };
                        return "month" === t.unit ? He({}, e, {
                            day: 1,
                            value: t.value + 1
                        }) : "day" === t.unit || "hour" === t.unit ? He({}, e, {value: t.value}) : "minute" === t.unit ? He({}, e, {
                            value: t.value,
                            minute: t.value
                        }) : t
                    }));
                    return b.filter((function (t) {
                        var e = 1, s = Math.ceil(a.globals.gridWidth / 120), r = t.value;
                        void 0 !== a.config.xaxis.tickAmount && (s = a.config.xaxis.tickAmount), b.length > s && (e = Math.floor(b.length / s));
                        var n = !1, o = !1;
                        switch (i.tickInterval) {
                            case"half_year":
                                e = 7, "year" === t.unit && (n = !0);
                                break;
                            case"months":
                                e = 1, "year" === t.unit && (n = !0);
                                break;
                            case"months_fortnight":
                                e = 15, "year" !== t.unit && "month" !== t.unit || (n = !0), 30 === r && (o = !0);
                                break;
                            case"months_days":
                                e = 10, "month" === t.unit && (n = !0), 30 === r && (o = !0);
                                break;
                            case"week_days":
                                e = 8, "month" === t.unit && (n = !0);
                                break;
                            case"days":
                                e = 1, "month" === t.unit && (n = !0);
                                break;
                            case"hours":
                                "day" === t.unit && (n = !0);
                                break;
                            case"minutes":
                                r % 5 != 0 && (o = !0)
                        }
                        if ("minutes" === i.tickInterval || "hours" === i.tickInterval) {
                            if (!o) return !0
                        } else if ((r % e == 0 || n) && !o) return !0
                    }))
                }
            }, {
                key: "recalcDimensionsBasedOnFormat", value: function (t, e) {
                    var i = this.w, a = this.formatDates(t), s = this.removeOverlappingTS(a);
                    i.globals.timescaleLabels = s.slice(), new Ae(this.ctx).plotCoords()
                }
            }, {
                key: "determineInterval", value: function (t) {
                    switch (!0) {
                        case t > 1825:
                            this.tickInterval = "years";
                            break;
                        case t > 800 && t <= 1825:
                            this.tickInterval = "half_year";
                            break;
                        case t > 180 && t <= 800:
                            this.tickInterval = "months";
                            break;
                        case t > 90 && t <= 180:
                            this.tickInterval = "months_fortnight";
                            break;
                        case t > 60 && t <= 90:
                            this.tickInterval = "months_days";
                            break;
                        case t > 30 && t <= 60:
                            this.tickInterval = "week_days";
                            break;
                        case t > 2 && t <= 30:
                            this.tickInterval = "days";
                            break;
                        case t > .1 && t <= 2:
                            this.tickInterval = "hours";
                            break;
                        case t < .1:
                            this.tickInterval = "minutes";
                            break;
                        default:
                            this.tickInterval = "days"
                    }
                }
            }, {
                key: "generateYearScale", value: function (t) {
                    var e = t.firstVal, i = t.currentMonth, a = t.currentYear, s = t.daysWidthOnXAxis,
                        r = t.numberOfYears, o = e.minYear, l = 0, h = new D(this.ctx);
                    if (e.minDate > 1 && e.minMonth > 0) {
                        var c = h.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
                        l = (h.determineDaysOfYear(e.minYear) - c + 1) * s, o = e.minYear + 1, this.timeScaleArray.push({
                            position: l,
                            value: o,
                            unit: "year",
                            year: o,
                            month: n.monthMod(i + 1)
                        })
                    } else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({
                        position: l,
                        value: o,
                        unit: "year",
                        year: a,
                        month: n.monthMod(i + 1)
                    });
                    for (var d = o, u = l, g = 0; g < r; g++) d++, u = h.determineDaysOfYear(d - 1) * s + u, this.timeScaleArray.push({
                        position: u,
                        value: d,
                        unit: "year",
                        year: d,
                        month: 1
                    })
                }
            }, {
                key: "generateMonthScale", value: function (t) {
                    var e = t.firstVal, i = t.currentMonthDate, a = t.currentMonth, s = t.currentYear,
                        r = t.daysWidthOnXAxis, o = t.numberOfMonths, l = a, h = 0, c = new D(this.ctx), d = "month",
                        u = 0;
                    if (e.minDate > 1) {
                        h = (c.determineDaysOfMonths(a + 1, e.minYear) - i + 1) * r, l = n.monthMod(a + 1);
                        var g = s + u, f = n.monthMod(l), p = l;
                        0 === l && (d = "year", p = g, f = 1, g += u += 1), this.timeScaleArray.push({
                            position: h,
                            value: p,
                            unit: d,
                            year: g,
                            month: f
                        })
                    } else this.timeScaleArray.push({position: h, value: l, unit: d, year: s, month: n.monthMod(a)});
                    for (var x = l + 1, b = h, v = 0, m = 1; v < o; v++, m++) {
                        0 === (x = n.monthMod(x)) ? (d = "year", u += 1) : d = "month";
                        var y = s + Math.floor(x / 12) + u;
                        b = c.determineDaysOfMonths(x, y) * r + b;
                        var w = 0 === x ? y : x;
                        this.timeScaleArray.push({position: b, value: w, unit: d, year: y, month: 0 === x ? 1 : x}), x++
                    }
                }
            }, {
                key: "generateDayScale", value: function (t) {
                    var e = t.firstVal, i = t.currentMonth, a = t.currentYear, s = t.hoursWidthOnXAxis,
                        r = t.numberOfDays, o = new D(this.ctx), l = "day", h = (24 - e.minHour) * s, c = e.minDate + 1,
                        d = c, u = function (t, e, i) {
                            return t > o.determineDaysOfMonths(e + 1, i) ? (g = 1, l = "month", d = e += 1, e) : e
                        }, g = c, f = u(g, i, a);
                    this.timeScaleArray.push({position: h, value: d, unit: l, year: a, month: n.monthMod(f), day: g});
                    for (var p = h, x = 0; x < r; x++) {
                        l = "day", f = u(g += 1, f, a + Math.floor(f / 12) + 0);
                        var b = a + Math.floor(f / 12) + 0;
                        p = 24 * s + p;
                        var v = 1 === g ? n.monthMod(f) : g;
                        this.timeScaleArray.push({
                            position: p,
                            value: v,
                            unit: l,
                            year: b,
                            month: n.monthMod(f),
                            day: v
                        })
                    }
                }
            }, {
                key: "generateHourScale", value: function (t) {
                    var e = t.firstVal, i = t.currentDate, a = t.currentMonth, s = t.currentYear,
                        r = t.minutesWidthOnXAxis, o = t.numberOfHours, l = new D(this.ctx), h = "hour",
                        c = function (t, e) {
                            return t > l.determineDaysOfMonths(e + 1, s) && (x = 1, e += 1), {month: e, date: x}
                        }, d = function (t, e) {
                            return t > l.determineDaysOfMonths(e + 1, s) ? e += 1 : e
                        }, u = 60 - e.minMinute, g = u * r, f = e.minHour + 1, p = f + 1;
                    60 === u && (g = 0, p = (f = e.minHour) + 1);
                    var x = i, b = d(x, a);
                    this.timeScaleArray.push({
                        position: g,
                        value: f,
                        unit: h,
                        day: x,
                        hour: p,
                        year: s,
                        month: n.monthMod(b)
                    });
                    for (var v = g, m = 0; m < o; m++) {
                        h = "hour", p >= 24 && (p = 0, h = "day", b = c(x += 1, b).month, b = d(x, b));
                        var y = s + Math.floor(b / 12) + 0;
                        v = 0 === p && 0 === m ? u * r : 60 * r + v;
                        var w = 0 === p ? x : p;
                        this.timeScaleArray.push({
                            position: v,
                            value: w,
                            unit: h,
                            hour: p,
                            day: x,
                            year: y,
                            month: n.monthMod(b)
                        }), p++
                    }
                }
            }, {
                key: "generateMinuteScale", value: function (t) {
                    var e = t.firstVal, i = t.currentMinute, a = t.currentHour, s = t.currentDate, r = t.currentMonth,
                        o = t.currentYear, l = t.minutesWidthOnXAxis, h = t.numberOfMinutes, c = l - (i - e.minMinute),
                        d = e.minMinute + 1, u = d + 1, g = s, f = r, p = o, x = a;
                    this.timeScaleArray.push({
                        position: c,
                        value: d,
                        unit: "minute",
                        day: g,
                        hour: x,
                        minute: u,
                        year: p,
                        month: n.monthMod(f)
                    });
                    for (var b = c, v = 0; v < h; v++) u >= 60 && (u = 0, 24 === (x += 1) && (x = 0)), b = l + b, this.timeScaleArray.push({
                        position: b,
                        value: u,
                        unit: "minute",
                        hour: x,
                        minute: u,
                        day: g,
                        year: o + Math.floor(f / 12) + 0,
                        month: n.monthMod(f)
                    }), u++
                }
            }, {
                key: "createRawDateString", value: function (t, e) {
                    var i = t.year;
                    return i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), "hour" === t.unit ? i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2), i += "minute" === t.unit ? ":" + ("0" + e).slice(-2) + ":00.000Z" : ":00:00.000Z"
                }
            }, {
                key: "formatDates", value: function (t) {
                    var e = this, i = this.w;
                    return t.map((function (t) {
                        var a = t.value.toString(), s = new D(e.ctx), r = e.createRawDateString(t, a),
                            n = new Date(Date.parse(r));
                        if (void 0 === i.config.xaxis.labels.format) {
                            var o = "dd MMM", l = i.config.xaxis.labels.datetimeFormatter;
                            "year" === t.unit && (o = l.year), "month" === t.unit && (o = l.month), "day" === t.unit && (o = l.day), "hour" === t.unit && (o = l.hour), "minute" === t.unit && (o = l.minute), a = s.formatDate(n, o)
                        } else a = s.formatDate(n, i.config.xaxis.labels.format);
                        return {
                            dateString: r,
                            position: t.position,
                            value: a,
                            unit: t.unit,
                            year: t.year,
                            month: t.month
                        }
                    }))
                }
            }, {
                key: "removeOverlappingTS", value: function (t) {
                    var e = this, i = new p(this.ctx), a = 0, s = t.map((function (s, r) {
                        if (r > 0 && e.w.config.xaxis.labels.hideOverlappingLabels) {
                            var n = i.getTextRects(t[a].value).width, o = t[a].position;
                            return s.position > o + n + 10 ? (a = r, s) : null
                        }
                        return s
                    }));
                    return s = s.filter((function (t) {
                        return null !== t
                    }))
                }
            }]) && We(e.prototype, i), a && We(e, a), t
        }();

        function je(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function Ve(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? je(Object(i), !0).forEach((function (e) {
                    Ge(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : je(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Ge(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function _e(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ue = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = i, this.w = i.w, this.el = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "setupElements", value: function () {
                    var t = this.w.globals, e = this.w.config, i = e.chart.type;
                    t.axisCharts = ["line", "area", "bar", "rangeBar", "candlestick", "scatter", "bubble", "radar", "heatmap"].indexOf(i) > -1, t.xyCharts = ["line", "area", "bar", "rangeBar", "candlestick", "scatter", "bubble"].indexOf(i) > -1, t.isBarHorizontal = ("bar" === e.chart.type || "rangeBar" === e.chart.type) && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.cuid, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), p.setAttrs(t.dom.elWrap, {
                        id: t.chartClass.substring(1),
                        class: "apexcharts-canvas " + t.chartClass.substring(1)
                    }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({
                        class: "apexcharts-svg",
                        "xmlns:data": "ApexChartsNS",
                        transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")")
                    }), t.dom.Paper.node.style.background = e.chart.background, this.setSVGDimensions(), t.dom.elGraphical = t.dom.Paper.group().attr({class: "apexcharts-inner apexcharts-graphical"}), t.dom.elDefs = t.dom.Paper.defs(), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs)
                }
            }, {
                key: "plotChartType", value: function (t, e) {
                    var i = this.w, a = i.config, s = i.globals, r = {series: [], i: []}, n = {series: [], i: []},
                        o = {series: [], i: []}, l = {series: [], i: []}, h = {series: [], i: []},
                        c = {series: [], i: []};
                    s.series.map((function (e, d) {
                        void 0 !== t[d].type ? ("column" === t[d].type || "bar" === t[d].type ? (s.series.length > 1 && a.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), h.series.push(e), h.i.push(d), i.globals.columnSeries = h.series) : "area" === t[d].type ? (n.series.push(e), n.i.push(d)) : "line" === t[d].type ? (r.series.push(e), r.i.push(d)) : "scatter" === t[d].type ? (o.series.push(e), o.i.push(d)) : "bubble" === t[d].type ? (l.series.push(e), l.i.push(d)) : "candlestick" === t[d].type ? (c.series.push(e), c.i.push(d)) : console.warn("You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar/scatter/bubble"), s.comboCharts = !0) : (r.series.push(e), r.i.push(d))
                    }));
                    var d = new Me(this.ctx, e), u = new Zt(this.ctx, e), g = new ie(this.ctx), f = new ge(this.ctx),
                        p = new ke(this.ctx, e), x = new oe(this.ctx), b = [];
                    if (s.comboCharts) {
                        if (n.series.length > 0 && b.push(d.draw(n.series, "area", n.i)), h.series.length > 0) if (i.config.chart.stacked) {
                            var v = new jt(this.ctx, e);
                            b.push(v.draw(h.series, h.i))
                        } else {
                            var m = new Xt(this.ctx, e);
                            b.push(m.draw(h.series, h.i))
                        }
                        if (r.series.length > 0 && b.push(d.draw(r.series, "line", r.i)), c.series.length > 0 && b.push(u.draw(c.series, c.i)), o.series.length > 0) {
                            var y = new Me(this.ctx, e, !0);
                            b.push(y.draw(o.series, "scatter", o.i))
                        }
                        if (l.series.length > 0) {
                            var w = new Me(this.ctx, e, !0);
                            b.push(w.draw(l.series, "bubble", l.i))
                        }
                    } else switch (a.chart.type) {
                        case"line":
                            b = d.draw(s.series, "line");
                            break;
                        case"area":
                            b = d.draw(s.series, "area");
                            break;
                        case"bar":
                            b = a.chart.stacked ? new jt(this.ctx, e).draw(s.series) : new Xt(this.ctx, e).draw(s.series);
                            break;
                        case"candlestick":
                            b = new Zt(this.ctx, e).draw(s.series);
                            break;
                        case"rangeBar":
                            b = p.draw(s.series);
                            break;
                        case"heatmap":
                            b = new te(this.ctx, e).draw(s.series);
                            break;
                        case"pie":
                        case"donut":
                            b = g.draw(s.series);
                            break;
                        case"radialBar":
                            b = f.draw(s.series);
                            break;
                        case"radar":
                            b = x.draw(s.series);
                            break;
                        default:
                            b = d.draw(s.series)
                    }
                    return b
                }
            }, {
                key: "setSVGDimensions", value: function () {
                    var t = this.w.globals, e = this.w.config;
                    t.svgWidth = e.chart.width, t.svgHeight = e.chart.height;
                    var i = n.getDimensions(this.el), a = e.chart.width.toString().split(/[0-9]+/g).pop();
                    if ("%" === a ? n.isNumber(i[0]) && (0 === i[0].width && (i = n.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width, 10) / 100) : "px" !== a && "" !== a || (t.svgWidth = parseInt(e.chart.width, 10)), "auto" !== t.svgHeight && "" !== t.svgHeight) if ("%" === e.chart.height.toString().split(/[0-9]+/g).pop()) {
                        var s = n.getDimensions(this.el.parentNode);
                        t.svgHeight = s[1] * parseInt(e.chart.height, 10) / 100
                    } else t.svgHeight = parseInt(e.chart.height, 10); else t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth / 1.2;
                    t.svgWidth < 0 && (t.svgWidth = 0), t.svgHeight < 0 && (t.svgHeight = 0), p.setAttrs(t.dom.Paper.node, {
                        width: t.svgWidth,
                        height: t.svgHeight
                    });
                    var r = e.chart.sparkline.enabled ? 0 : t.axisCharts ? e.chart.parentHeightOffset : 0;
                    t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + r + "px", t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px"
                }
            }, {
                key: "shiftGraphPosition", value: function () {
                    var t = this.w.globals, e = t.translateY,
                        i = {transform: "translate(" + t.translateX + ", " + e + ")"};
                    p.setAttrs(t.dom.elGraphical.node, i), t.x2SpaceAvailable = t.svgWidth - t.dom.elGraphical.x() - t.gridWidth
                }
            }, {
                key: "resizeNonAxisCharts", value: function () {
                    var t = this.w, e = t.globals, i = 0;
                    "top" !== t.config.legend.position && "bottom" !== t.config.legend.position || (i = new Te(this.ctx).getLegendBBox().clwh + 10);
                    var a = t.globals.dom.baseEl.querySelector(".apexcharts-radialbar .apexcharts-tracks"),
                        s = t.globals.dom.baseEl.querySelector(".apexcharts-radialbar .apexcharts-datalabels-group"),
                        r = 2 * t.globals.radialSize;
                    if (a) {
                        var o = n.getBoundingClientRect(a);
                        if (r = o.bottom, s) {
                            var l = n.getBoundingClientRect(s), h = Math.max(o.bottom, l.bottom) - o.top + l.height;
                            r = Math.max(2 * t.globals.radialSize, h)
                        }
                    }
                    var c = r + e.translateY + i + 20;
                    e.dom.elLegendForeign && e.dom.elLegendForeign.setAttribute("height", c), e.dom.elWrap.style.height = c + "px", p.setAttrs(e.dom.Paper.node, {height: c}), e.dom.Paper.node.parentNode.parentNode.style.minHeight = c + "px"
                }
            }, {
                key: "coreCalculations", value: function () {
                    new Re(this.ctx).init()
                }
            }, {
                key: "resetGlobals", value: function () {
                    var t = this, e = function () {
                        return t.w.config.series.map((function (t) {
                            return []
                        }))
                    }, i = new gt, a = this.w.globals;
                    i.initGlobalVars(a), a.seriesXvalues = e(), a.seriesYvalues = e()
                }
            }, {
                key: "isMultipleY", value: function () {
                    if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1) return this.w.globals.isMultipleYAxis = !0, !0
                }
            }, {
                key: "xySettings", value: function () {
                    var t = null, e = this.w;
                    if (e.globals.axisCharts && ("back" === e.config.xaxis.crosshairs.position && new Jt(this.ctx).drawXCrosshairs(), "back" === e.config.yaxis[0].crosshairs.position && new Jt(this.ctx).drawYCrosshairs(), t = new $(this.ctx).getCalculatedRatios(), "datetime" === e.config.xaxis.type && void 0 === e.config.xaxis.labels.formatter)) {
                        var i = new Be(this.ctx), a = [];
                        isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? a = i.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (a = i.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), i.recalcDimensionsBasedOnFormat(a)
                    }
                    return t
                }
            }, {
                key: "setupBrushHandler", value: function () {
                    var t = this, e = this.w;
                    if (e.config.chart.brush.enabled && "function" != typeof e.config.chart.events.selection) {
                        var i = e.config.chart.brush.targets || [e.config.chart.brush.target];
                        i.forEach((function (e) {
                            var i = ApexCharts.getChartByID(e);
                            i.w.globals.brushSource = t.ctx;
                            var a = function () {
                                t.ctx._updateOptions({
                                    chart: {
                                        selection: {
                                            xaxis: {
                                                min: i.w.globals.minX,
                                                max: i.w.globals.maxX
                                            }
                                        }
                                    }
                                }, !1, !1)
                            };
                            "function" != typeof i.w.config.chart.events.zoomed && (i.w.config.chart.events.zoomed = function () {
                                a()
                            }), "function" != typeof i.w.config.chart.events.scrolled && (i.w.config.chart.events.scrolled = function () {
                                a()
                            })
                        })), e.config.chart.events.selection = function (t, a) {
                            i.forEach((function (t) {
                                var i = ApexCharts.getChartByID(t), s = n.clone(e.config.yaxis);
                                e.config.chart.brush.autoScaleYaxis && (s = new Ye(i).autoScaleY(i, s, a)), i._updateOptions({
                                    xaxis: {
                                        min: a.xaxis.min,
                                        max: a.xaxis.max
                                    }, yaxis: Ve({}, i.w.config.yaxis[0], {min: s[0].min, max: s[0].max})
                                }, !1, !1, !1, !1)
                            }))
                        }
                    }
                }
            }]) && _e(e.prototype, i), a && _e(e, a), t
        }();

        function qe(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ze = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.coreUtils = new $(this.ctx)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "isMultiFormat", value: function () {
                    return this.isFormatXY() || this.isFormat2DArray()
                }
            }, {
                key: "isFormatXY", value: function () {
                    var t = this.w.config.series.slice(), e = new Pe(this.ctx);
                    if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && t[this.activeSeriesIndex].data.length > 0 && null !== t[this.activeSeriesIndex].data[0] && void 0 !== t[this.activeSeriesIndex].data[0].x && null !== t[this.activeSeriesIndex].data[0]) return !0
                }
            }, {
                key: "isFormat2DArray", value: function () {
                    var t = this.w.config.series.slice(), e = new Pe(this.ctx);
                    if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && t[this.activeSeriesIndex].data.length > 0 && void 0 !== t[this.activeSeriesIndex].data[0] && null !== t[this.activeSeriesIndex].data[0] && t[this.activeSeriesIndex].data[0].constructor === Array) return !0
                }
            }, {
                key: "handleFormat2DArray", value: function (t, e) {
                    for (var i = this.w.config, a = this.w.globals, s = 0; s < t[e].data.length; s++) if (void 0 !== t[e].data[s][1] && (Array.isArray(t[e].data[s][1]) && 4 === t[e].data[s][1].length ? this.twoDSeries.push(n.parseNumber(t[e].data[s][1][3])) : 5 === t[e].data[s].length ? this.twoDSeries.push(n.parseNumber(t[e].data[s][4])) : this.twoDSeries.push(n.parseNumber(t[e].data[s][1])), a.dataFormatXNumeric = !0), "datetime" === i.xaxis.type) {
                        var r = new Date(t[e].data[s][0]);
                        r = new Date(r).getTime(), this.twoDSeriesX.push(r)
                    } else this.twoDSeriesX.push(t[e].data[s][0]);
                    for (var o = 0; o < t[e].data.length; o++) void 0 !== t[e].data[o][2] && (this.threeDSeries.push(t[e].data[o][2]), a.isDataXYZ = !0)
                }
            }, {
                key: "handleFormatXY", value: function (t, e) {
                    var i = this.w.config, a = this.w.globals, s = new D(this.ctx), r = e;
                    a.collapsedSeriesIndices.indexOf(e) > -1 && (r = this.activeSeriesIndex);
                    for (var o = 0; o < t[e].data.length; o++) void 0 !== t[e].data[o].y && (Array.isArray(t[e].data[o].y) ? this.twoDSeries.push(n.parseNumber(t[e].data[o].y[t[e].data[o].y.length - 1])) : this.twoDSeries.push(n.parseNumber(t[e].data[o].y)));
                    for (var l = 0; l < t[r].data.length; l++) {
                        var h = "string" == typeof t[r].data[l].x, c = !!s.isValidDate(t[r].data[l].x.toString());
                        h || c ? h ? "datetime" !== i.xaxis.type || a.isRangeData ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[r].data[l].x)) : this.twoDSeriesX.push(s.parseDate(t[r].data[l].x)) : "datetime" === i.xaxis.type ? this.twoDSeriesX.push(s.parseDate(t[r].data[l].x.toString())) : (a.dataFormatXNumeric = !0, a.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[r].data[l].x))) : (a.isXNumeric = !0, a.dataFormatXNumeric = !0, this.twoDSeriesX.push(t[r].data[l].x))
                    }
                    if (t[e].data[0] && void 0 !== t[e].data[0].z) {
                        for (var d = 0; d < t[e].data.length; d++) this.threeDSeries.push(t[e].data[d].z);
                        a.isDataXYZ = !0
                    }
                }
            }, {
                key: "handleRangeData", value: function (t, e) {
                    var i = this.w.config, a = this.w.globals, s = {};
                    return this.isFormat2DArray() ? s = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (s = this.handleRangeDataFormat("xy", t, e)), a.seriesRangeStart.push(s.start), a.seriesRangeEnd.push(s.end), "datetime" === i.xaxis.type && a.seriesRangeBarTimeline.push(s.rangeUniques), a.seriesRangeBarTimeline.forEach((function (t, e) {
                        t.forEach((function (t, e) {
                            t.y.forEach((function (e, i) {
                                for (var a = 0; a < t.y.length; a++) if (i !== a) {
                                    var s = e.y1, r = e.y2, n = t.y[a].y1;
                                    s <= t.y[a].y2 && n <= r && (t.overlaps.indexOf(e.rangeName) < 0 && t.overlaps.push(e.rangeName), t.overlaps.indexOf(t.y[a].rangeName) < 0 && t.overlaps.push(t.y[a].rangeName))
                                }
                            }))
                        }))
                    })), s
                }
            }, {
                key: "handleCandleStickData", value: function (t, e) {
                    var i = this.w.globals, a = {};
                    return this.isFormat2DArray() ? a = this.handleCandleStickDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleCandleStickDataFormat("xy", t, e)), i.seriesCandleO[e] = a.o, i.seriesCandleH[e] = a.h, i.seriesCandleL[e] = a.l, i.seriesCandleC[e] = a.c, a
                }
            }, {
                key: "handleRangeDataFormat", value: function (t, e, i) {
                    var a = [], s = [], r = e[i].data.filter((function (t, e, i) {
                            return e === i.findIndex((function (e) {
                                return e.x === t.x
                            }))
                        })).map((function (t, e) {
                            return {x: t.x, overlaps: [], y: []}
                        })),
                        o = "Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",
                        l = new Pe(this.ctx).getActiveConfigSeriesIndex();
                    if ("array" === t) {
                        if (2 !== e[l].data[0][1].length) throw new Error(o);
                        for (var h = 0; h < e[i].data.length; h++) a.push(e[i].data[h][1][0]), s.push(e[i].data[h][1][1])
                    } else if ("xy" === t) {
                        if (2 !== e[l].data[0].y.length) throw new Error(o);
                        for (var c = function (t) {
                            var o = n.randomId(), l = e[i].data[t].x,
                                h = {y1: e[i].data[t].y[0], y2: e[i].data[t].y[1], rangeName: o};
                            e[i].data[t].rangeName = o;
                            var c = r.findIndex((function (t) {
                                return t.x === l
                            }));
                            r[c].y.push(h), a.push(h.y1), s.push(h.y2)
                        }, d = 0; d < e[i].data.length; d++) c(d)
                    }
                    return {start: a, end: s, rangeUniques: r}
                }
            }, {
                key: "handleCandleStickDataFormat", value: function (t, e, i) {
                    var a = [], s = [], r = [], n = [],
                        o = "Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick";
                    if ("array" === t) {
                        if (!Array.isArray(e[i].data[0][1]) && 5 !== e[i].data[0].length || Array.isArray(e[i].data[0][1]) && 4 !== e[i].data[0][1].length) throw new Error(o);
                        if (5 === e[i].data[0].length) for (var l = 0; l < e[i].data.length; l++) a.push(e[i].data[l][1]), s.push(e[i].data[l][2]), r.push(e[i].data[l][3]), n.push(e[i].data[l][4]); else for (var h = 0; h < e[i].data.length; h++) a.push(e[i].data[h][1][0]), s.push(e[i].data[h][1][1]), r.push(e[i].data[h][1][2]), n.push(e[i].data[h][1][3])
                    } else if ("xy" === t) {
                        if (4 !== e[i].data[0].y.length) throw new Error(o);
                        for (var c = 0; c < e[i].data.length; c++) a.push(e[i].data[c].y[0]), s.push(e[i].data[c].y[1]), r.push(e[i].data[c].y[2]), n.push(e[i].data[c].y[3])
                    }
                    return {o: a, h: s, l: r, c: n}
                }
            }, {
                key: "parseDataAxisCharts", value: function (t) {
                    for (var e = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx, a = this.w.config, s = this.w.globals, r = new D(i), o = a.labels.length > 0 ? a.labels.slice() : a.xaxis.categories.slice(), l = function () {
                        for (var t = 0; t < o.length; t++) if ("string" == typeof o[t]) {
                            if (!r.isValidDate(o[t])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
                            e.twoDSeriesX.push(r.parseDate(o[t]))
                        } else {
                            if (13 !== String(o[t]).length) throw new Error("Please provide a valid JavaScript timestamp");
                            e.twoDSeriesX.push(o[t])
                        }
                    }, h = 0; h < t.length; h++) {
                        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t[h].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
                        if ("rangeBar" !== a.chart.type && "rangeArea" !== a.chart.type && "rangeBar" !== t[h].type && "rangeArea" !== t[h].type || (s.isRangeData = !0, this.handleRangeData(t, h)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, h) : this.isFormatXY() && this.handleFormatXY(t, h), "candlestick" !== a.chart.type && "candlestick" !== t[h].type || this.handleCandleStickData(t, h), s.series.push(this.twoDSeries), s.labels.push(this.twoDSeriesX), s.seriesX.push(this.twoDSeriesX), this.fallbackToCategory || (s.isXNumeric = !0); else {
                            "datetime" === a.xaxis.type ? (s.isXNumeric = !0, l(), s.seriesX.push(this.twoDSeriesX)) : "numeric" === a.xaxis.type && (s.isXNumeric = !0, o.length > 0 && (this.twoDSeriesX = o, s.seriesX.push(this.twoDSeriesX))), s.labels.push(this.twoDSeriesX);
                            var c = t[h].data.map((function (t) {
                                return n.parseNumber(t)
                            }));
                            s.series.push(c)
                        }
                        s.seriesZ.push(this.threeDSeries), void 0 !== t[h].name ? s.seriesNames.push(t[h].name) : s.seriesNames.push("series-" + parseInt(h + 1, 10))
                    }
                    return this.w
                }
            }, {
                key: "parseDataNonAxisCharts", value: function (t) {
                    var e = this.w.globals, i = this.w.config;
                    e.series = t.slice(), e.seriesNames = i.labels.slice();
                    for (var a = 0; a < e.series.length; a++) void 0 === e.seriesNames[a] && e.seriesNames.push("series-" + (a + 1));
                    return this.w
                }
            }, {
                key: "handleExternalLabelsData", value: function (t) {
                    var e = this.w.config, i = this.w.globals;
                    if (e.xaxis.categories.length > 0) i.labels = e.xaxis.categories; else if (e.labels.length > 0) i.labels = e.labels.slice(); else if (this.fallbackToCategory) i.labels = i.labels[0], i.seriesRangeBarTimeline.length && (i.seriesRangeBarTimeline.map((function (t) {
                        t.forEach((function (t) {
                            i.labels.indexOf(t.x) < 0 && t.x && i.labels.push(t.x)
                        }))
                    })), i.labels = i.labels.filter((function (t, e, i) {
                        return i.indexOf(t) === e
                    }))); else {
                        var a = [];
                        if (i.axisCharts) {
                            if (i.series.length > 0) for (var s = 0; s < i.series[i.maxValsInArrayIndex].length; s++) a.push(s + 1);
                            for (var r = 0; r < t.length; r++) i.seriesX.push(a);
                            i.isXNumeric = !0
                        }
                        if (0 === a.length) {
                            a = i.axisCharts ? [0, 10] : i.series.map((function (t, e) {
                                return e + 1
                            }));
                            for (var n = 0; n < t.length; n++) i.seriesX.push(a)
                        }
                        i.labels = a, i.noLabelsProvided = !0
                    }
                }
            }, {
                key: "parseData", value: function (t) {
                    var e = this.w, i = e.config, a = e.globals;
                    if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a.axisCharts ? this.parseDataAxisCharts(t) : this.parseDataNonAxisCharts(t), this.coreUtils.getLargestSeries(), "bar" === i.chart.type && i.chart.stacked) {
                        var s = new Pe(this.ctx);
                        a.series = s.setNullSeriesToZeroValues(a.series)
                    }
                    this.coreUtils.getSeriesTotals(), a.axisCharts && this.coreUtils.getStackedSeriesTotals(), this.coreUtils.getPercentSeries(), a.dataFormatXNumeric || a.isXNumeric && ("numeric" !== i.xaxis.type || 0 !== i.labels.length || 0 !== i.xaxis.categories.length) || this.handleExternalLabelsData(t)
                }
            }, {
                key: "excludeCollapsedSeriesInYAxis", value: function () {
                    var t = this, e = this.w;
                    e.globals.ignoreYAxisIndexes = e.globals.collapsedSeries.map((function (e, i) {
                        if (t.w.globals.isMultipleYAxis) return e.index
                    }))
                }
            }]) && qe(e.prototype, i), a && qe(e, a), t
        }();

        function $e(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Je = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "getSvgString", value: function () {
                    return this.w.globals.dom.Paper.svg()
                }
            }, {
                key: "cleanup", value: function () {
                    var t = this.w, e = t.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs"),
                        i = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs");
                    e && (e.setAttribute("x1", -500), e.setAttribute("x2", -500)), i && (i.setAttribute("y1", -100), i.setAttribute("y2", -100))
                }
            }, {
                key: "svgUrl", value: function () {
                    this.cleanup();
                    var t = this.getSvgString(), e = new Blob([t], {type: "image/svg+xml;charset=utf-8"});
                    return URL.createObjectURL(e)
                }
            }, {
                key: "dataURI", value: function () {
                    var t = this;
                    return new Promise((function (e) {
                        var i = t.w;
                        t.cleanup();
                        var a = document.createElement("canvas");
                        a.width = i.globals.svgWidth, a.height = parseInt(i.globals.dom.elWrap.style.height, 10);
                        var s = "transparent" === i.config.chart.background ? "#fff" : i.config.chart.background,
                            r = a.getContext("2d");
                        r.fillStyle = s, r.fillRect(0, 0, a.width, a.height);
                        var n = window.URL || window.webkitURL || window, o = new Image;
                        o.crossOrigin = "anonymous";
                        var l = t.getSvgString(), h = "data:image/svg+xml," + encodeURIComponent(l);
                        o.onload = function () {
                            r.drawImage(o, 0, 0), n.revokeObjectURL(h);
                            var t = a.toDataURL("image/png");
                            e(t)
                        }, o.src = h
                    }))
                }
            }, {
                key: "exportToSVG", value: function () {
                    this.triggerDownload(this.svgUrl(), ".svg")
                }
            }, {
                key: "exportToPng", value: function () {
                    var t = this;
                    this.dataURI().then((function (e) {
                        t.triggerDownload(e, ".png")
                    }))
                }
            }, {
                key: "exportToCSV", value: function (t) {
                    var e = this, i = t.series, a = t.columnDelimiter, s = void 0 === a ? "," : a, r = t.lineDelimiter,
                        n = void 0 === r ? "\n" : r, o = this.w, l = [], h = [], c = "data:text/csv;charset=utf-8,",
                        d = new Ze(this.ctx), u = new N(this.ctx), g = function (t) {
                            var i = "";
                            if (o.globals.axisCharts) {
                                if ("category" === o.config.xaxis.type || o.config.xaxis.convertedCatToNumeric) if (o.globals.isBarHorizontal) {
                                    var a = o.globals.yLabelFormatters[0], s = new Pe(e.ctx).getActiveSeriesIndex();
                                    i = a(o.globals.labels[t], {seriesIndex: s, dataPointIndex: t, w: o})
                                } else i = u.getLabel(o.globals.labels, o.globals.timescaleLabels, 0, t).text;
                                "datetime" === o.config.xaxis.type && (o.config.xaxis.categories.length ? i = o.config.xaxis.categories[t] : o.config.labels.length && (i = o.config.labels[t]))
                            } else i = o.config.labels[t];
                            return i
                        };
                    i.map((function (t, e) {
                        o.globals.axisCharts ? function (t, e) {
                            if (h.push(t.name), (l = []).push("x"), l.push("y"), h.push(l.join(s)), t.data && t.data.length) for (var a = 0; a < t.data.length; a++) {
                                l = [];
                                var r = g(a);
                                r || (d.isFormatXY() ? r = i[e].data[a].x : d.isFormat2DArray() && (r = i[e].data[a] ? i[e].data[a][0] : "")), l.push(r), l.push(o.globals.series[e][a]), ("candlestick" === o.config.chart.type || t.type && "candlestick" === t.type) && (l.pop(), l.push(o.globals.seriesCandleO[e][a]), l.push(o.globals.seriesCandleH[e][a]), l.push(o.globals.seriesCandleL[e][a]), l.push(o.globals.seriesCandleC[e][a])), "rangeBar" === o.config.chart.type && (l.pop(), l.push(o.globals.seriesRangeStart[e][a]), l.push(o.globals.seriesRangeEnd[e][a])), h.push(l.join(s))
                            }
                        }(t, e) : ((l = []).push(o.globals.labels[e]), l.push(o.globals.series[e]), h.push(l.join(s)))
                    })), c += h.join(n), this.triggerDownload(encodeURI(c), ".csv")
                }
            }, {
                key: "triggerDownload", value: function (t, e) {
                    var i = document.createElement("a");
                    i.href = t, i.download = this.w.globals.chartID + e, document.body.appendChild(i), i.click(), document.body.removeChild(i)
                }
            }]) && $e(e.prototype, i), a && $e(e, a), t
        }();

        function Qe(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Ke = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w;
                var i = this.w;
                this.xaxisLabels = i.globals.labels.slice(), this.isTimelineBar = "datetime" === i.config.xaxis.type && i.globals.seriesRangeBarTimeline.length, i.globals.timescaleLabels.length > 0 && (this.xaxisLabels = i.globals.timescaleLabels.slice())
            }

            var e, i, a;
            return e = t, (i = [{
                key: "drawGridArea", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = this.w,
                        i = new p(this.ctx);
                    null === t && (t = i.group({class: "apexcharts-grid"}));
                    var a = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"),
                        s = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
                    return t.add(s), t.add(a), t
                }
            }, {
                key: "drawGrid", value: function () {
                    var t = this.w.globals, e = null;
                    return t.axisCharts && (e = this.renderGrid(), t.dom.elGraphical.add(e.el), this.drawGridArea(e.el)), e
                }
            }, {
                key: "createGridMask", value: function () {
                    var t = this.w, e = t.globals, i = new p(this.ctx),
                        a = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
                    if (Array.isArray(t.config.stroke.width)) {
                        var s = 0;
                        t.config.stroke.width.forEach((function (t) {
                            s = Math.max(s, t)
                        })), a = s
                    }
                    e.dom.elGridRectMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)), e.dom.elGridRectMarkerMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)), e.dom.elGridRect = i.drawRect(-a / 2, -a / 2, e.gridWidth + a, e.gridHeight + a, 0, "#fff"), new $(this).getLargestMarkerSize();
                    var r = t.globals.markers.largestSize + 1;
                    e.dom.elGridRectMarker = i.drawRect(-r, -r, e.gridWidth + 2 * r, e.gridHeight + 2 * r, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
                    var n = e.dom.baseEl.querySelector("defs");
                    n.appendChild(e.dom.elGridRectMask), n.appendChild(e.dom.elGridRectMarkerMask)
                }
            }, {
                key: "_drawGridLines", value: function (t) {
                    var e = t.i, i = t.x1, a = t.y1, s = t.x2, r = t.y2, n = t.xCount, o = t.parent, l = this.w;
                    0 === e && l.globals.skipFirstTimelinelabel || e === n - 1 && l.globals.skipLastTimelinelabel || "radar" === l.config.chart.type || (l.config.grid.xaxis.lines.show && this._drawGridLine({
                        x1: i,
                        y1: a,
                        x2: s,
                        y2: r,
                        parent: o
                    }), new B(this.ctx).drawXaxisTicks(i, this.elg))
                }
            }, {
                key: "_drawGridLine", value: function (t) {
                    var e = t.x1, i = t.y1, a = t.x2, s = t.y2, r = t.parent, n = this.w,
                        o = n.config.grid.strokeDashArray,
                        l = new p(this).drawLine(e, i, a, s, n.config.grid.borderColor, o);
                    l.node.classList.add("apexcharts-gridline"), r.add(l)
                }
            }, {
                key: "_drawGridBandRect", value: function (t) {
                    var e = t.c, i = t.x1, a = t.y1, s = t.x2, r = t.y2, n = t.type, o = this.w, l = new p(this.ctx);
                    if ("column" !== n || "datetime" !== o.config.xaxis.type) {
                        var h = o.config.grid[n].colors[e], c = l.drawRect(i, a, s, r, 0, h, o.config.grid[n].opacity);
                        this.elg.add(c), c.node.classList.add("apexcharts-grid-".concat(n))
                    }
                }
            }, {
                key: "_drawXYLines", value: function (t) {
                    var e = this, i = t.xCount, a = t.tickAmount, s = this.w;
                    if (s.config.grid.xaxis.lines.show || s.config.xaxis.axisTicks.show) {
                        var r = s.globals.padHorizontal, n = s.globals.gridHeight;
                        s.globals.timescaleLabels.length ? function (t) {
                            for (var a = t.xC, s = t.x1, r = t.y1, n = t.x2, o = t.y2, l = 0; l < a; l++) s = e.xaxisLabels[l].position, n = e.xaxisLabels[l].position, e._drawGridLines({
                                i: l,
                                x1: s,
                                y1: r,
                                x2: n,
                                y2: o,
                                xCount: i,
                                parent: e.elgridLinesV
                            })
                        }({xC: i, x1: r, y1: 0, x2: void 0, y2: n}) : function (t) {
                            for (var a = t.xC, r = t.x1, n = t.y1, o = t.x2, l = t.y2, h = 0; h < a + (s.globals.isXNumeric ? 0 : 1); h++) e._drawGridLines({
                                i: h,
                                x1: r,
                                y1: n,
                                x2: o,
                                y2: l,
                                xCount: i,
                                parent: e.elgridLinesV
                            }), o = r += s.globals.gridWidth / (s.globals.isXNumeric ? a - 1 : a)
                        }({xC: i, x1: r, y1: 0, x2: void 0, y2: n})
                    }
                    if (s.config.grid.yaxis.lines.show) {
                        var o = 0, l = 0, h = s.globals.gridWidth, c = a + 1;
                        this.isTimelineBar && (c = s.globals.labels.length);
                        for (var d = 0; d < c + (this.isTimelineBar ? 1 : 0); d++) this._drawGridLine({
                            x1: 0,
                            y1: o,
                            x2: h,
                            y2: l,
                            parent: this.elgridLinesH
                        }), l = o += s.globals.gridHeight / (this.isTimelineBar ? c : a)
                    }
                }
            }, {
                key: "_drawInvertedXYLines", value: function (t) {
                    var e = t.xCount, i = this.w;
                    if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show) for (var a, s = i.globals.padHorizontal, r = i.globals.gridHeight, n = 0; n < e + 1; n++) i.config.grid.xaxis.lines.show && this._drawGridLine({
                        x1: s,
                        y1: 0,
                        x2: a,
                        y2: r,
                        parent: this.elgridLinesV
                    }), new B(this.ctx).drawXaxisTicks(s, this.elg), a = s = s + i.globals.gridWidth / e + .3;
                    if (i.config.grid.yaxis.lines.show) for (var o = 0, l = 0, h = i.globals.gridWidth, c = 0; c < i.globals.dataPoints + 1; c++) this._drawGridLine({
                        x1: 0,
                        y1: o,
                        x2: h,
                        y2: l,
                        parent: this.elgridLinesH
                    }), l = o += i.globals.gridHeight / i.globals.dataPoints
                }
            }, {
                key: "renderGrid", value: function () {
                    var t = this.w, e = new p(this.ctx);
                    this.elg = e.group({class: "apexcharts-grid"}), this.elgridLinesH = e.group({class: "apexcharts-gridlines-horizontal"}), this.elgridLinesV = e.group({class: "apexcharts-gridlines-vertical"}), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide());
                    for (var i, a = 8, s = 0; s < t.globals.series.length && (void 0 !== t.globals.yAxisScale[s] && (a = t.globals.yAxisScale[s].result.length - 1), !(a > 2)); s++) ;
                    return !t.globals.isBarHorizontal || this.isTimelineBar ? (i = this.xaxisLabels.length, this.isTimelineBar && (a = t.globals.labels.length), this._drawXYLines({
                        xCount: i,
                        tickAmount: a
                    })) : (i = a, this._drawInvertedXYLines({
                        xCount: i,
                        tickAmount: a
                    })), this.drawGridBands(i, a), {el: this.elg, xAxisTickWidth: t.globals.gridWidth / i}
                }
            }, {
                key: "drawGridBands", value: function (t, e) {
                    var i = this.w;
                    if (void 0 !== i.config.grid.row.colors && i.config.grid.row.colors.length > 0) for (var a = 0, s = i.globals.gridHeight / e, r = i.globals.gridWidth, n = 0, o = 0; n < e; n++, o++) o >= i.config.grid.row.colors.length && (o = 0), this._drawGridBandRect({
                        c: o,
                        x1: 0,
                        y1: a,
                        x2: r,
                        y2: s,
                        type: "row"
                    }), a += i.globals.gridHeight / e;
                    if (void 0 !== i.config.grid.column.colors && i.config.grid.column.colors.length > 0) for (var l = "category" === i.config.xaxis.type || i.config.xaxis.convertedCatToNumeric ? t - 1 : t, h = i.globals.padHorizontal, c = i.globals.padHorizontal + i.globals.gridWidth / l, d = i.globals.gridHeight, u = 0, g = 0; u < t; u++, g++) g >= i.config.grid.column.colors.length && (g = 0), this._drawGridBandRect({
                        c: g,
                        x1: h,
                        y1: 0,
                        x2: c,
                        y2: d,
                        type: "column"
                    }), h += i.globals.gridWidth / l
                }
            }]) && Qe(e.prototype, i), a && Qe(e, a), t
        }();

        function ti(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ei = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "checkResponsiveConfig", value: function (t) {
                    var e = this, i = this.w, a = i.config;
                    if (0 !== a.responsive.length) {
                        var s = a.responsive.slice();
                        s.sort((function (t, e) {
                            return t.breakpoint > e.breakpoint ? 1 : e.breakpoint > t.breakpoint ? -1 : 0
                        })).reverse();
                        var r = new dt({}), o = function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                a = s[0].breakpoint, o = window.innerWidth > 0 ? window.innerWidth : screen.width;
                            if (o > a) {
                                var l = $.extendArrayProps(r, i.globals.initialConfig);
                                t = n.extend(l, t), t = n.extend(i.config, t), e.overrideResponsiveOptions(t)
                            } else for (var h = 0; h < s.length; h++) o < s[h].breakpoint && (t = $.extendArrayProps(r, s[h].options), t = n.extend(i.config, t), e.overrideResponsiveOptions(t))
                        };
                        if (t) {
                            var l = $.extendArrayProps(r, t);
                            l = n.extend(i.config, l), o(l = n.extend(l, t))
                        } else o({})
                    }
                }
            }, {
                key: "overrideResponsiveOptions", value: function (t) {
                    var e = new dt(t).init();
                    this.w.config = e
                }
            }]) && ti(e.prototype, i), a && ti(e, a), t
        }();

        function ii(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ai = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.colors = [], this.w = e.w;
                var i = this.w;
                this.isBarDistributed = i.config.plotOptions.bar.distributed && ("bar" === i.config.chart.type || "rangeBar" === i.config.chart.type)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "init", value: function () {
                    this.setDefaultColors()
                }
            }, {
                key: "setDefaultColors", value: function () {
                    var t = this.w, e = new n;
                    if (t.globals.dom.elWrap.classList.add(t.config.theme.mode), void 0 === t.config.colors ? t.globals.colors = this.predefined() : (t.globals.colors = t.config.colors, t.globals.axisCharts && "bar" !== t.config.chart.type && Array.isArray(t.config.colors) && t.config.colors.length > 0 && t.config.colors.length === t.config.series.length && (t.globals.colors = t.config.colors.map((function (e, i) {
                        return "function" == typeof e ? e({
                            value: t.globals.axisCharts ? t.globals.series[i][0] ? t.globals.series[i][0] : 0 : t.globals.series[i],
                            seriesIndex: i,
                            w: t
                        }) : e
                    })))), t.config.theme.monochrome.enabled) {
                        var i = [], a = t.globals.series.length;
                        this.isBarDistributed && (a = t.globals.series[0].length * t.globals.series.length);
                        for (var s = t.config.theme.monochrome.color, r = 1 / (a / t.config.theme.monochrome.shadeIntensity), o = t.config.theme.monochrome.shadeTo, l = 0, h = 0; h < a; h++) {
                            var c = void 0;
                            "dark" === o ? (c = e.shadeColor(-1 * l, s), l += r) : (c = e.shadeColor(l, s), l += r), i.push(c)
                        }
                        t.globals.colors = i.slice()
                    }
                    var d = t.globals.colors.slice();
                    this.pushExtraColors(t.globals.colors), void 0 === t.config.stroke.colors ? t.globals.stroke.colors = d : t.globals.stroke.colors = t.config.stroke.colors, this.pushExtraColors(t.globals.stroke.colors), void 0 === t.config.fill.colors ? t.globals.fill.colors = d : t.globals.fill.colors = t.config.fill.colors, this.pushExtraColors(t.globals.fill.colors), void 0 === t.config.dataLabels.style.colors ? t.globals.dataLabels.style.colors = d : t.globals.dataLabels.style.colors = t.config.dataLabels.style.colors, this.pushExtraColors(t.globals.dataLabels.style.colors, 50), void 0 === t.config.plotOptions.radar.polygons.fill.colors ? t.globals.radarPolygons.fill.colors = ["dark" === t.config.theme.mode ? "#202D48" : "#fff"] : t.globals.radarPolygons.fill.colors = t.config.plotOptions.radar.polygons.fill.colors, this.pushExtraColors(t.globals.radarPolygons.fill.colors, 20), void 0 === t.config.markers.colors ? t.globals.markers.colors = d : t.globals.markers.colors = t.config.markers.colors, this.pushExtraColors(t.globals.markers.colors)
                }
            }, {
                key: "pushExtraColors", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = this.w,
                        s = e || a.globals.series.length;
                    if (null === i && (i = this.isBarDistributed || "heatmap" === a.config.chart.type && a.config.plotOptions.heatmap.colorScale.inverse), i && (s = a.globals.series[0].length * a.globals.series.length), t.length < s) for (var r = s - t.length, n = 0; n < r; n++) t.push(t[n])
                }
            }, {
                key: "updateThemeOptions", value: function (t) {
                    t.chart = t.chart || {}, t.tooltip = t.tooltip || {};
                    var e = t.theme.mode || "light",
                        i = t.theme.palette ? t.theme.palette : "dark" === e ? "palette4" : "palette1",
                        a = t.chart.foreColor ? t.chart.foreColor : "dark" === e ? "#f6f7f8" : "#373d3f";
                    return t.tooltip.theme = e, t.chart.foreColor = a, t.theme.palette = i, t
                }
            }, {
                key: "predefined", value: function () {
                    switch (this.w.config.theme.palette) {
                        case"palette1":
                            this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
                            break;
                        case"palette2":
                            this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
                            break;
                        case"palette3":
                            this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
                            break;
                        case"palette4":
                            this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
                            break;
                        case"palette5":
                            this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
                            break;
                        case"palette6":
                            this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
                            break;
                        case"palette7":
                            this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
                            break;
                        case"palette8":
                            this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
                            break;
                        case"palette9":
                            this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
                            break;
                        case"palette10":
                            this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
                            break;
                        default:
                            this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]
                    }
                    return this.colors
                }
            }]) && ii(e.prototype, i), a && ii(e, a), t
        }();

        function si(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                    return i
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function ri(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ni = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx
            }

            var e, i, a;
            return e = t, (i = [{
                key: "getNearestValues", value: function (t) {
                    var e = t.hoverArea, i = t.elGrid, a = t.clientX, s = t.clientY, r = t.hasBars, o = this.w,
                        l = o.globals.gridWidth, h = l / (o.globals.dataPoints - 1), c = i.getBoundingClientRect();
                    (r && o.globals.comboCharts || r) && (h = l / o.globals.dataPoints);
                    var d = a - c.left, u = s - c.top;
                    d < 0 || u < 0 || d > o.globals.gridWidth || u > o.globals.gridHeight ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : o.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : o.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
                    var g = Math.round(d / h);
                    r && (g = Math.ceil(d / h), g -= 1);
                    for (var f, p = null, x = null, b = [], v = 0; v < o.globals.seriesXvalues.length; v++) b.push([o.globals.seriesXvalues[v][0] - 1e-6].concat(o.globals.seriesXvalues[v]));
                    return b = b.map((function (t) {
                        return t.filter((function (t) {
                            return t
                        }))
                    })), f = o.globals.seriesYvalues.map((function (t) {
                        return t.filter((function (t) {
                            return n.isNumber(t)
                        }))
                    })), o.globals.isXNumeric && (p = (x = this.closestInMultiArray(d, u, b, f)).index, g = x.j, null !== p && (b = o.globals.seriesXvalues[p], g = (x = this.closestInArray(d, b)).index)), o.globals.capturedSeriesIndex = null === p ? -1 : p, o.globals.capturedDataPointIndex = null === g ? -1 : g, (!g || g < 1) && (g = 0), {
                        capturedSeries: p,
                        j: g,
                        hoverX: d,
                        hoverY: u
                    }
                }
            }, {
                key: "closestInMultiArray", value: function (t, e, i, a) {
                    var s = this.w, r = 0, n = null, o = -1;
                    s.globals.series.length > 1 ? r = this.getFirstActiveXArray(i) : n = 0;
                    var l = a[r][0], h = i[r][0], c = Math.abs(t - h), d = Math.abs(e - l), u = d + c;
                    return a.map((function (s, r) {
                        s.map((function (s, l) {
                            var h = Math.abs(e - a[r][l]), g = Math.abs(t - i[r][l]), f = g + h;
                            f < u && (u = f, c = g, d = h, n = r, o = l)
                        }))
                    })), {index: n, j: o}
                }
            }, {
                key: "getFirstActiveXArray", value: function (t) {
                    for (var e = 0, i = new $(this.ctx), a = t.map((function (t, e) {
                        return t.length > 0 ? e : -1
                    })), s = 0; s < a.length; s++) {
                        var r = i.getSeriesTotalByIndex(s);
                        if (-1 !== a[s] && 0 !== r && !i.seriesHaveSameValues(s)) {
                            e = a[s];
                            break
                        }
                    }
                    return e
                }
            }, {
                key: "closestInArray", value: function (t, e) {
                    for (var i = e[0], a = null, s = Math.abs(t - i), r = 0; r < e.length; r++) {
                        var n = Math.abs(t - e[r]);
                        n < s && (s = n, a = r)
                    }
                    return {index: a}
                }
            }, {
                key: "isXoverlap", value: function (t) {
                    var e = [], i = this.w.globals.seriesX.filter((function (t) {
                        return void 0 !== t[0]
                    }));
                    if (i.length > 0) for (var a = 0; a < i.length - 1; a++) void 0 !== i[a][t] && void 0 !== i[a + 1][t] && i[a][t] !== i[a + 1][t] && e.push("unEqual");
                    return 0 === e.length
                }
            }, {
                key: "isInitialSeriesSameLen", value: function () {
                    for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++) if (e[i].data.length !== e[i + 1].data.length) {
                        t = !1;
                        break
                    }
                    return t
                }
            }, {
                key: "getBarsHeight", value: function (t) {
                    return si(t).reduce((function (t, e) {
                        return t + e.getBBox().height
                    }), 0)
                }
            }, {
                key: "toggleAllTooltipSeriesGroups", value: function (t) {
                    var e = this.w, i = this.ttCtx;
                    0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
                    for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++) "enable" === t ? (a[s].classList.add("active"), a[s].style.display = e.config.tooltip.items.display) : (a[s].classList.remove("active"), a[s].style.display = "none")
                }
            }]) && ri(e.prototype, i), a && ri(e, a), t
        }();

        function oi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var li = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.ctx = e.ctx, this.ttCtx = e, this.tooltipUtil = new ni(e)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "drawSeriesTexts", value: function (t) {
                    var e = t.shared, i = void 0 === e || e, a = t.ttItems, s = t.i, r = void 0 === s ? 0 : s, n = t.j,
                        o = void 0 === n ? null : n, l = t.y1, h = t.y2;
                    void 0 !== this.w.config.tooltip.custom ? this.handleCustomTooltip({
                        i: r,
                        j: o,
                        y1: l,
                        y2: h
                    }) : this.toggleActiveInactiveSeries(i);
                    var c = this.getValuesToPrint({i: r, j: o});
                    this.printLabels({i: r, j: o, values: c, ttItems: a, shared: i});
                    var d = this.ttCtx.getElTooltip();
                    this.ttCtx.tooltipRect.ttWidth = d.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = d.getBoundingClientRect().height
                }
            }, {
                key: "printLabels", value: function (t) {
                    var e, i = this, a = t.i, s = t.j, r = t.values, n = t.ttItems, o = t.shared, l = this.w,
                        h = r.xVal, c = r.zVal, d = r.xAxisTTVal, u = "", g = l.globals.colors[a];
                    null !== s && l.config.plotOptions.bar.distributed && (g = l.globals.colors[s]);
                    for (var f = function (t, r) {
                        var f = i.getFormatters(a);
                        u = i.getSeriesName({fn: f.yLbTitleFormatter, index: a, seriesIndex: a, j: s});
                        var p = l.config.tooltip.inverseOrder ? r : t;
                        if (l.globals.axisCharts) {
                            var x = function (t) {
                                return f.yLbFormatter(l.globals.series[t][s], {
                                    series: l.globals.series,
                                    seriesIndex: t,
                                    dataPointIndex: s,
                                    w: l
                                })
                            };
                            o ? (f = i.getFormatters(p), u = i.getSeriesName({
                                fn: f.yLbTitleFormatter,
                                index: p,
                                seriesIndex: a,
                                j: s
                            }), g = l.globals.colors[p], e = x(p), (i.ttCtx.hasBars() && l.config.chart.stacked && 0 === l.globals.series[p][s] || void 0 === l.globals.series[p][s]) && (e = void 0)) : e = x(a)
                        }
                        null === s && (e = f.yLbFormatter(l.globals.series[a], l)), i.DOMHandling({
                            i: a,
                            t: p,
                            ttItems: n,
                            values: {val: e, xVal: h, xAxisTTVal: d, zVal: c},
                            seriesName: u,
                            shared: o,
                            pColor: g
                        })
                    }, p = 0, x = l.globals.series.length - 1; p < l.globals.series.length; p++, x--) f(p, x)
                }
            }, {
                key: "getFormatters", value: function (t) {
                    var e, i = this.w, a = i.globals.yLabelFormatters[t];
                    return void 0 !== i.globals.ttVal ? Array.isArray(i.globals.ttVal) ? (a = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (a = i.globals.ttVal.formatter, "function" == typeof i.globals.ttVal.title.formatter && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, "function" != typeof a && (a = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function (t) {
                        return t
                    }), "function" != typeof e && (e = function (t) {
                        return t
                    }), {yLbFormatter: a, yLbTitleFormatter: e}
                }
            }, {
                key: "getSeriesName", value: function (t) {
                    var e = t.fn, i = t.index, a = t.seriesIndex, s = t.j, r = this.w;
                    return e(String(r.globals.seriesNames[i]), {
                        series: r.globals.series,
                        seriesIndex: a,
                        dataPointIndex: s,
                        w: r
                    })
                }
            }, {
                key: "DOMHandling", value: function (t) {
                    var e = t.i, i = t.t, a = t.ttItems, s = t.values, r = t.seriesName, n = t.shared, o = t.pColor,
                        l = this.w, h = this.ttCtx, c = s.val, d = s.xVal, u = s.xAxisTTVal, g = s.zVal, f = null;
                    f = a[i].children, l.config.tooltip.fillSeriesColor && (a[i].style.backgroundColor = o, f[0].style.display = "none"), h.showTooltipTitle && (null === h.tooltipTitle && (h.tooltipTitle = l.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h.tooltipTitle.innerHTML = d), h.blxaxisTooltip && (h.xaxisTooltipText.innerHTML = "" !== u ? u : d);
                    var p = a[i].querySelector(".apexcharts-tooltip-text-label");
                    p && (p.innerHTML = r ? r + ": " : "");
                    var x = a[i].querySelector(".apexcharts-tooltip-text-value");
                    x && (x.innerHTML = c), f[0] && f[0].classList.contains("apexcharts-tooltip-marker") && (l.config.tooltip.marker.fillColors && Array.isArray(l.config.tooltip.marker.fillColors) && (o = l.config.tooltip.marker.fillColors[e]), f[0].style.backgroundColor = o), l.config.tooltip.marker.show || (f[0].style.display = "none"), null !== g && (a[i].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l.config.tooltip.z.title, a[i].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== g ? g : ""), n && f[0] && (null == c || l.globals.collapsedSeriesIndices.indexOf(i) > -1 ? f[0].parentNode.style.display = "none" : f[0].parentNode.style.display = l.config.tooltip.items.display)
                }
            }, {
                key: "toggleActiveInactiveSeries", value: function (t) {
                    var e = this.w;
                    if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable"); else {
                        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
                        var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
                        i && (i.classList.add("active"), i.style.display = e.config.tooltip.items.display)
                    }
                }
            }, {
                key: "getValuesToPrint", value: function (t) {
                    var e = t.i, i = t.j, a = this.w, s = this.ctx.series.filteredSeriesX(), r = "", n = null, o = null,
                        l = {series: a.globals.series, seriesIndex: e, dataPointIndex: i, w: a},
                        h = a.globals.ttZFormatter;
                    null === i ? o = a.globals.series[e] : a.globals.isXNumeric ? (r = s[e][i], 0 === s[e].length && (r = s[this.tooltipUtil.getFirstActiveXArray(s)][i])) : r = void 0 !== a.globals.labels[i] ? a.globals.labels[i] : "";
                    var c = r;
                    return a.globals.isXNumeric && "datetime" === a.config.xaxis.type ? r = new F(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, c, c) : a.globals.isBarHorizontal || (r = a.globals.xLabelFormatter(c, l)), void 0 !== a.config.tooltip.x.formatter && (r = a.globals.ttKeyFormatter(c, l)), a.globals.seriesZ.length > 0 && a.globals.seriesZ[0].length > 0 && (n = h(a.globals.seriesZ[e][i], a)), {
                        val: o,
                        xVal: r,
                        xAxisTTVal: "function" == typeof a.config.xaxis.tooltip.formatter ? a.globals.xaxisTooltipFormatter(c, l) : r,
                        zVal: n
                    }
                }
            }, {
                key: "handleCustomTooltip", value: function (t) {
                    var e = t.i, i = t.j, a = t.y1, s = t.y2, r = this.w, n = this.ttCtx.getElTooltip(),
                        o = r.config.tooltip.custom;
                    Array.isArray(o) && o[e] && (o = o[e]), n.innerHTML = o({
                        ctx: this.ctx,
                        series: r.globals.series,
                        seriesIndex: e,
                        dataPointIndex: i,
                        y1: a,
                        y2: s,
                        w: r
                    })
                }
            }]) && oi(e.prototype, i), a && oi(e, a), t
        }();

        function hi(t) {
            return function (t) {
                if (Array.isArray(t)) {
                    for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                    return i
                }
            }(t) || function (t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
            }(t) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function ci(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var di = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ttCtx = e, this.ctx = e.ctx, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "moveXCrosshairs", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = this.ttCtx,
                        a = this.w, s = i.getElXCrosshairs(), r = t - i.xcrosshairsWidth / 2,
                        n = a.globals.labels.slice().length;
                    if (null !== e && (r = a.globals.gridWidth / n * e), "tickWidth" === a.config.xaxis.crosshairs.width || "barWidth" === a.config.xaxis.crosshairs.width ? r + i.xcrosshairsWidth > a.globals.gridWidth && (r = a.globals.gridWidth - i.xcrosshairsWidth) : null !== e && (r += a.globals.gridWidth / n / 2), r < 0 && (r = 0), r > a.globals.gridWidth && (r = a.globals.gridWidth), null !== s && (s.setAttribute("x", r), s.setAttribute("x1", r), s.setAttribute("x2", r), s.setAttribute("y2", a.globals.gridHeight), s.classList.add("active")), i.blxaxisTooltip) {
                        var o = r;
                        "tickWidth" !== a.config.xaxis.crosshairs.width && "barWidth" !== a.config.xaxis.crosshairs.width || (o = r + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(o)
                    }
                }
            }, {
                key: "moveYCrosshairs", value: function (t) {
                    var e = this.ttCtx;
                    null !== e.ycrosshairs && (p.setAttrs(e.ycrosshairs, {
                        y1: t,
                        y2: t
                    }), p.setAttrs(e.ycrosshairsHidden, {y1: t, y2: t}))
                }
            }, {
                key: "moveXAxisTooltip", value: function (t) {
                    var e = this.w, i = this.ttCtx;
                    if (null !== i.xaxisTooltip) {
                        i.xaxisTooltip.classList.add("active");
                        var a,
                            s = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY;
                        if (t -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t)) t += e.globals.translateX, a = new p(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = a.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = s + "px"
                    }
                }
            }, {
                key: "moveYAxisTooltip", value: function (t) {
                    var e = this.w, i = this.ttCtx;
                    null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                    var a = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), s = e.globals.translateY + a,
                        r = i.yaxisTTEls[t].getBoundingClientRect().height, n = e.globals.translateYAxisX[t] - 2;
                    e.config.yaxis[t].opposite && (n -= 26), s -= r / 2, -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add("active"), i.yaxisTTEls[t].style.top = s + "px", i.yaxisTTEls[t].style.left = n + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("active")
                }
            }, {
                key: "moveTooltip", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a = this.w,
                        s = this.ttCtx, r = s.getElTooltip(), n = s.tooltipRect, o = null !== i ? parseFloat(i) : 1,
                        l = parseFloat(t) + o + 5, h = parseFloat(e) + o / 2;
                    if (l > a.globals.gridWidth / 2 && (l = l - n.ttWidth - o - 15), l > a.globals.gridWidth - n.ttWidth - 10 && (l = a.globals.gridWidth - n.ttWidth), l < -20 && (l = -20), a.config.tooltip.followCursor) {
                        var c = s.getElGrid(), d = c.getBoundingClientRect();
                        h = s.e.clientY + a.globals.translateY - d.top - n.ttHeight / 2
                    }
                    var u = this.positionChecks(n, l, h);
                    l = u.x, h = u.y, isNaN(l) || (l += a.globals.translateX, r.style.left = l + "px", r.style.top = h + "px")
                }
            }, {
                key: "positionChecks", value: function (t, e, i) {
                    var a = this.w;
                    return t.ttHeight + i > a.globals.gridHeight && (i = a.globals.gridHeight - t.ttHeight + a.globals.translateY), i < 0 && (i = 0), {
                        x: e,
                        y: i
                    }
                }
            }, {
                key: "moveMarkers", value: function (t, e) {
                    var i = this.w, a = this.ttCtx;
                    if (i.globals.markers.size[t] > 0) for (var s = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), r = 0; r < s.length; r++) parseInt(s[r].getAttribute("rel"), 10) === e && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(e, s[r])); else a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t)
                }
            }, {
                key: "moveDynamicPointOnHover", value: function (t, e) {
                    var i, a, s = this.w, r = this.ttCtx, n = s.globals.pointsArray, o = s.config.markers.hover.size;
                    if (void 0 === o && (o = s.globals.markers.size[e] + s.config.markers.hover.sizeOffset), !s.config.series[e].type || "column" !== s.config.series[e].type && "candlestick" !== s.config.series[e].type) {
                        i = n[e][t][0], a = n[e][t][1] ? n[e][t][1] : 0;
                        var l = s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"));
                        l && (l.setAttribute("r", o), l.setAttribute("cx", i), l.setAttribute("cy", a)), this.moveXCrosshairs(i), r.fixedTooltip || this.moveTooltip(i, a, o)
                    }
                }
            }, {
                key: "moveDynamicPointsOnHover", value: function (t) {
                    var e, i = this.ttCtx, a = i.w, s = 0, r = 0, n = a.globals.pointsArray;
                    e = new Pe(this.ctx).getActiveSeriesIndex();
                    var o = a.config.markers.hover.size;
                    void 0 === o && (o = a.globals.markers.size[e] + a.config.markers.hover.sizeOffset), n[e] && (s = n[e][t][0], r = n[e][t][1]);
                    var l = null, h = i.getAllMarkers();
                    if (null !== (l = null !== h ? h : a.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers circle"))) for (var c = 0; c < a.globals.series.length; c++) {
                        var d = n[c];
                        if (a.globals.comboCharts && void 0 === d && (l = hi(l)).splice(c, 0, null), d && d.length) {
                            var u = n[c][t][1];
                            l[c].setAttribute("cx", s);
                            var g = parseInt(l[c].parentNode.parentNode.parentNode.getAttribute("data:realIndex"), 10);
                            null === u || isNaN(u) ? l[g] && l[g].setAttribute("r", 0) : (l[g] && l[g].setAttribute("r", o), l[g] && l[g].setAttribute("cy", u))
                        }
                    }
                    if (this.moveXCrosshairs(s), !i.fixedTooltip) {
                        var f = r || a.globals.gridHeight;
                        this.moveTooltip(s, f, o)
                    }
                }
            }, {
                key: "moveStickyTooltipOverBars", value: function (t) {
                    var e, i = this.w, a = this.ttCtx,
                        s = i.globals.columnSeries ? i.globals.columnSeries.length : i.globals.series.length,
                        r = s >= 2 && s % 2 == 0 ? Math.floor(s / 2) : Math.floor(s / 2) + 1,
                        n = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r, "'] path[j='").concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(t, "']")),
                        o = n ? parseFloat(n.getAttribute("cx")) : 0,
                        l = n ? parseFloat(n.getAttribute("barWidth")) : 0;
                    i.globals.isXNumeric ? o -= s % 2 != 0 ? l / 2 : 0 : (o = a.xAxisTicksPositions[t - 1] + a.dataPointsDividedWidth / 2, isNaN(o) && (o = a.xAxisTicksPositions[t] - a.dataPointsDividedWidth / 2));
                    var h = a.getElGrid().getBoundingClientRect();
                    if (e = a.e.clientY - h.top - a.tooltipRect.ttHeight / 2, this.moveXCrosshairs(o), !a.fixedTooltip) {
                        var c = e || i.globals.gridHeight;
                        this.moveTooltip(o, c)
                    }
                }
            }]) && ci(e.prototype, i), a && ci(e, a), t
        }();

        function ui(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var gi = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx, this.tooltipPosition = new di(e)
            }

            var e, i, a;
            return e = t, (i = [{
                key: "drawDynamicPoints", value: function () {
                    for (var t = this.w, e = new p(this.ctx), i = new mt(this.ctx), a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"), s = 0; s < a.length; s++) {
                        var r = parseInt(a[s].getAttribute("data:realIndex"), 10),
                            n = t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(r, "'] .apexcharts-series-markers-wrap"));
                        if (null !== n) {
                            var o = void 0,
                                l = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
                            "line" !== t.config.chart.type && "area" !== t.config.chart.type || t.globals.comboCharts || t.config.tooltip.intersect || (l += " no-pointer-events");
                            var h = i.getMarkerConfig(l, r);
                            (o = e.drawMarker(0, 0, h)).node.setAttribute("default-marker-size", 0);
                            var c = document.createElementNS(t.globals.SVGNS, "g");
                            c.classList.add("apexcharts-series-markers"), c.appendChild(o.node), n.appendChild(c)
                        }
                    }
                }
            }, {
                key: "enlargeCurrentPoint", value: function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s = this.w;
                    "bubble" !== s.config.chart.type && this.newPointSize(t, e);
                    var r = e.getAttribute("cx"), n = e.getAttribute("cy");
                    if (null !== i && null !== a && (r = i, n = a), this.tooltipPosition.moveXCrosshairs(r), !this.fixedTooltip) {
                        if ("radar" === s.config.chart.type) {
                            var o = this.ttCtx.getElGrid(), l = o.getBoundingClientRect();
                            r = this.ttCtx.e.clientX - l.left
                        }
                        this.tooltipPosition.moveTooltip(r, n, s.config.markers.hover.size)
                    }
                }
            }, {
                key: "enlargePoints", value: function (t) {
                    for (var e = this.w, i = this.ttCtx, a = t, s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), r = e.config.markers.hover.size, n = 0; n < s.length; n++) {
                        var o = s[n].getAttribute("rel"), l = s[n].getAttribute("index");
                        if (void 0 === r && (r = e.globals.markers.size[l] + e.config.markers.hover.sizeOffset), a === parseInt(o, 10)) {
                            this.newPointSize(a, s[n]);
                            var h = s[n].getAttribute("cx"), c = s[n].getAttribute("cy");
                            this.tooltipPosition.moveXCrosshairs(h), i.fixedTooltip || this.tooltipPosition.moveTooltip(h, c, r)
                        } else this.oldPointSize(s[n])
                    }
                }
            }, {
                key: "newPointSize", value: function (t, e) {
                    var i = this.w, a = i.config.markers.hover.size,
                        s = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild;
                    if ("0" !== s.getAttribute("default-marker-size")) {
                        var r = parseInt(s.getAttribute("index"), 10);
                        void 0 === a && (a = i.globals.markers.size[r] + i.config.markers.hover.sizeOffset), s.setAttribute("r", a)
                    }
                }
            }, {
                key: "oldPointSize", value: function (t) {
                    var e = parseFloat(t.getAttribute("default-marker-size"));
                    t.setAttribute("r", e)
                }
            }, {
                key: "resetPointsSize", value: function () {
                    for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
                        var i = parseFloat(t[e].getAttribute("default-marker-size"));
                        n.isNumber(i) ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0)
                    }
                }
            }]) && ui(e.prototype, i), a && ui(e, a), t
        }();

        function fi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var pi = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.ttCtx = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "getAttr", value: function (t, e) {
                    return parseFloat(t.target.getAttribute(e))
                }
            }, {
                key: "handleHeatTooltip", value: function (t) {
                    var e = t.e, i = t.opt, a = t.x, s = t.y, r = this.ttCtx, n = this.w;
                    if (e.target.classList.contains("apexcharts-heatmap-rect")) {
                        var o = this.getAttr(e, "i"), l = this.getAttr(e, "j"), h = this.getAttr(e, "cx"),
                            c = this.getAttr(e, "cy"), d = this.getAttr(e, "width"), u = this.getAttr(e, "height");
                        if (r.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: o,
                            j: l,
                            shared: !1
                        }), n.globals.capturedSeriesIndex = o, n.globals.capturedDataPointIndex = l, a = h + r.tooltipRect.ttWidth / 2 + d, s = c + r.tooltipRect.ttHeight / 2 - u / 2, r.tooltipPosition.moveXCrosshairs(h + d / 2), a > n.globals.gridWidth / 2 && (a = h - r.tooltipRect.ttWidth / 2 + d), r.w.config.tooltip.followCursor) {
                            var g = r.getElGrid().getBoundingClientRect();
                            s = r.e.clientY - g.top + n.globals.translateY / 2 - 10
                        }
                    }
                    return {x: a, y: s}
                }
            }, {
                key: "handleMarkerTooltip", value: function (t) {
                    var e, i, a = t.e, s = t.opt, r = t.x, o = t.y, l = this.w, h = this.ttCtx;
                    if (a.target.classList.contains("apexcharts-marker")) {
                        var c = parseInt(s.paths.getAttribute("cx"), 10), d = parseInt(s.paths.getAttribute("cy"), 10),
                            u = parseFloat(s.paths.getAttribute("val"));
                        if (i = parseInt(s.paths.getAttribute("rel"), 10), e = parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, h.intersect) {
                            var g = n.findAncestor(s.paths, "apexcharts-series");
                            g && (e = parseInt(g.getAttribute("data:realIndex"), 10))
                        }
                        if (h.tooltipLabels.drawSeriesTexts({
                            ttItems: s.ttItems,
                            i: e,
                            j: i,
                            shared: !h.showOnIntersect && l.config.tooltip.shared
                        }), "mouseup" === a.type && h.markerClick(a, e, i), l.globals.capturedSeriesIndex = e, l.globals.capturedDataPointIndex = i, r = c, o = d + l.globals.translateY - 1.4 * h.tooltipRect.ttHeight, h.w.config.tooltip.followCursor) {
                            var f = h.getElGrid().getBoundingClientRect();
                            o = h.e.clientY + l.globals.translateY - f.top
                        }
                        u < 0 && (o = d), h.marker.enlargeCurrentPoint(i, s.paths, r, o)
                    }
                    return {x: r, y: o}
                }
            }, {
                key: "handleBarTooltip", value: function (t) {
                    var e, i, a = t.e, s = t.opt, r = this.w, n = this.ttCtx, o = n.getElTooltip(), l = 0, h = 0, c = 0,
                        d = this.getBarTooltipXY({e: a, opt: s});
                    e = d.i;
                    var u = d.barHeight, g = d.j;
                    if (r.globals.capturedSeriesIndex = e, r.globals.capturedDataPointIndex = g, r.globals.isBarHorizontal && n.hasBars() || !r.config.tooltip.shared ? (h = d.x, c = d.y, i = Array.isArray(r.config.stroke.width) ? r.config.stroke.width[e] : r.config.stroke.width, l = h) : r.globals.comboCharts || r.config.tooltip.shared || (l /= 2), isNaN(c) && (c = r.globals.svgHeight - n.tooltipRect.ttHeight), h + n.tooltipRect.ttWidth > r.globals.gridWidth ? h -= n.tooltipRect.ttWidth : h < 0 && (h += n.tooltipRect.ttWidth), n.w.config.tooltip.followCursor) {
                        var f = n.getElGrid().getBoundingClientRect();
                        c = n.e.clientY - f.top
                    }
                    if (null === n.tooltip && (n.tooltip = r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r.config.tooltip.shared || (r.globals.comboChartsHasBars ? n.tooltipPosition.moveXCrosshairs(l + i / 2) : n.tooltipPosition.moveXCrosshairs(l)), !n.fixedTooltip && (!r.config.tooltip.shared || r.globals.isBarHorizontal && n.hasBars())) {
                        var p = r.globals.isMultipleYAxis ? r.config.yaxis[x] && r.config.yaxis[x].reversed : r.config.yaxis[0].reversed;
                        p && (h = r.globals.gridWidth - h), o.style.left = h + r.globals.translateX + "px";
                        var x = parseInt(s.paths.parentNode.getAttribute("data:realIndex"), 10);
                        !p || r.globals.isBarHorizontal && n.hasBars() || (c = c + u - 2 * (r.globals.series[e][g] < 0 ? u : 0)), n.tooltipRect.ttHeight + c > r.globals.gridHeight ? (c = r.globals.gridHeight - n.tooltipRect.ttHeight + r.globals.translateY, o.style.top = c + "px") : o.style.top = c + r.globals.translateY - n.tooltipRect.ttHeight / 2 + "px"
                    }
                }
            }, {
                key: "getBarTooltipXY", value: function (t) {
                    var e = t.e, i = t.opt, a = this.w, s = null, r = this.ttCtx, n = 0, o = 0, l = 0, h = 0, c = 0,
                        d = e.target.classList;
                    if (d.contains("apexcharts-bar-area") || d.contains("apexcharts-candlestick-area") || d.contains("apexcharts-rangebar-area")) {
                        var u = e.target, g = u.getBoundingClientRect(), f = i.elGrid.getBoundingClientRect(),
                            p = g.height;
                        c = g.height;
                        var x = g.width, b = parseInt(u.getAttribute("cx"), 10), v = parseInt(u.getAttribute("cy"), 10);
                        h = parseFloat(u.getAttribute("barWidth"));
                        var m = "touchmove" === e.type ? e.touches[0].clientX : e.clientX;
                        s = parseInt(u.getAttribute("j"), 10), n = parseInt(u.parentNode.getAttribute("rel"), 10) - 1;
                        var y = u.getAttribute("data-range-y1"), w = u.getAttribute("data-range-y2");
                        a.globals.comboCharts && (n = parseInt(u.parentNode.getAttribute("data:realIndex"), 10)), r.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: n,
                            j: s,
                            y1: y ? parseInt(y, 10) : null,
                            y2: w ? parseInt(w, 10) : null,
                            shared: !r.showOnIntersect && a.config.tooltip.shared
                        }), a.config.tooltip.followCursor ? a.globals.isBarHorizontal ? (o = m - f.left + 15, l = v - r.dataPointsDividedHeight + p / 2 - r.tooltipRect.ttHeight / 2) : (o = a.globals.isXNumeric ? b - x / 2 : b - r.dataPointsDividedWidth + x / 2, l = e.clientY - f.top - r.tooltipRect.ttHeight / 2 - 15) : a.globals.isBarHorizontal ? ((o = b) < r.xyRatios.baseLineInvertedY && (o = b - r.tooltipRect.ttWidth), l = v - r.dataPointsDividedHeight + p / 2 - r.tooltipRect.ttHeight / 2) : (o = a.globals.isXNumeric ? b - x / 2 : b - r.dataPointsDividedWidth + x / 2, l = v)
                    }
                    return {x: o, y: l, barHeight: c, barWidth: h, i: n, j: s}
                }
            }]) && fi(e.prototype, i), a && fi(e, a), t
        }();

        function xi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var bi = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.w = e.w, this.ttCtx = e
            }

            var e, i, a;
            return e = t, (i = [{
                key: "drawXaxisTooltip", value: function () {
                    var t = this.w, e = this.ttCtx, i = "bottom" === t.config.xaxis.position;
                    e.xaxisOffY = i ? t.globals.gridHeight + 1 : 1;
                    var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
                        s = t.globals.dom.elWrap;
                    e.blxaxisTooltip && null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", a + " " + t.config.tooltip.theme), s.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText))
                }
            }, {
                key: "drawYaxisTooltip", value: function () {
                    for (var t = this.w, e = this.ttCtx, i = function (i) {
                        var a = t.config.yaxis[i].opposite || t.config.yaxis[i].crosshairs.opposite;
                        e.yaxisOffX = a ? t.globals.gridWidth + 1 : 1;
                        var s = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, a ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left");
                        t.globals.yAxisSameScaleIndices.map((function (e, a) {
                            e.map((function (e, a) {
                                a === i && (s += t.config.yaxis[a].show ? " " : " apexcharts-yaxistooltip-hidden")
                            }))
                        }));
                        var r = t.globals.dom.elWrap;
                        e.blyaxisTooltip && null === t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", s + " " + t.config.tooltip.theme), r.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []), e.yaxisTooltipText.push(document.createElement("div")), e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))
                    }, a = 0; a < t.config.yaxis.length; a++) i(a)
                }
            }, {
                key: "setXCrosshairWidth", value: function () {
                    var t = this.w, e = this.ttCtx, i = e.getElXCrosshairs();
                    if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width, 10), t.globals.comboCharts) {
                        var a = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                        if (null !== a && "barWidth" === t.config.xaxis.crosshairs.width) {
                            var s = parseFloat(a.getAttribute("barWidth"));
                            e.xcrosshairsWidth = s
                        } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                            var r = t.globals.labels.length;
                            e.xcrosshairsWidth = t.globals.gridWidth / r
                        }
                    } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                        var n = t.globals.labels.length;
                        e.xcrosshairsWidth = t.globals.gridWidth / n
                    } else if ("barWidth" === t.config.xaxis.crosshairs.width) {
                        var o = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                        if (null !== o) {
                            var l = parseFloat(o.getAttribute("barWidth"));
                            e.xcrosshairsWidth = l
                        } else e.xcrosshairsWidth = 1
                    }
                    t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0), null !== i && e.xcrosshairsWidth > 0 && i.setAttribute("width", e.xcrosshairsWidth)
                }
            }, {
                key: "handleYCrosshair", value: function () {
                    var t = this.w, e = this.ttCtx;
                    e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")
                }
            }, {
                key: "drawYaxisTooltipText", value: function (t, e, i) {
                    var a = this.ttCtx, s = this.w, r = s.globals.yLabelFormatters[t];
                    if (a.blyaxisTooltip) {
                        var n = a.getElGrid().getBoundingClientRect(), o = (e - n.top) * i.yRatio[t],
                            l = s.globals.maxYArr[t] - s.globals.minYArr[t], h = s.globals.minYArr[t] + (l - o);
                        a.tooltipPosition.moveYCrosshairs(e - n.top), a.yaxisTooltipText[t].innerHTML = r(h), a.tooltipPosition.moveYAxisTooltip(t)
                    }
                }
            }]) && xi(e.prototype, i), a && xi(e, a), t
        }();

        function vi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var mi = function () {
                function t(e) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.ctx = e, this.w = e.w;
                    var i = this.w;
                    this.tConfig = i.config.tooltip, this.tooltipUtil = new ni(this), this.tooltipLabels = new li(this), this.tooltipPosition = new di(this), this.marker = new gi(this), this.intersect = new pi(this), this.axesTooltip = new bi(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !i.globals.isBarHorizontal && this.tConfig.shared
                }

                var e, i, a;
                return e = t, (i = [{
                    key: "getElTooltip", value: function (t) {
                        return t || (t = this), t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")
                    }
                }, {
                    key: "getElXCrosshairs", value: function () {
                        return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")
                    }
                }, {
                    key: "getElGrid", value: function () {
                        return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")
                    }
                }, {
                    key: "drawTooltip", value: function (t) {
                        var e = this.w;
                        this.xyRatios = t, this.blxaxisTooltip = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.blyaxisTooltip = e.config.yaxis[0].tooltip.enabled && e.globals.axisCharts, this.allTooltipSeriesGroups = [], e.globals.axisCharts || (this.showTooltipTitle = !1);
                        var i = document.createElement("div");
                        if (i.classList.add("apexcharts-tooltip"), i.classList.add(this.tConfig.theme), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) {
                            this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
                            var a = new B(this.ctx);
                            this.xAxisTicksPositions = a.getXAxisTicksPositions()
                        }
                        if ((e.globals.comboCharts && !this.tConfig.shared || this.tConfig.intersect && !this.tConfig.shared || ("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && !this.tConfig.shared) && (this.showOnIntersect = !0), 0 !== e.config.markers.size && 0 !== e.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length) {
                            this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle));
                            var s = e.globals.series.length;
                            (e.globals.xyCharts || e.globals.comboCharts) && this.tConfig.shared && (s = this.showOnIntersect ? 1 : e.globals.series.length), this.legendLabels = e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s), this.addSVGEvents()
                        }
                    }
                }, {
                    key: "createTTElements", value: function (t) {
                        for (var e = this.w, i = [], a = this.getElTooltip(), s = 0; s < t; s++) {
                            var r = document.createElement("div");
                            r.classList.add("apexcharts-tooltip-series-group"), this.tConfig.shared && this.tConfig.enabledOnSeries && Array.isArray(this.tConfig.enabledOnSeries) && this.tConfig.enabledOnSeries.indexOf(s) < 0 && r.classList.add("apexcharts-tooltip-series-group-hidden");
                            var n = document.createElement("span");
                            n.classList.add("apexcharts-tooltip-marker"), n.style.backgroundColor = e.globals.colors[s], r.appendChild(n);
                            var o = document.createElement("div");
                            o.classList.add("apexcharts-tooltip-text"), o.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily, o.style.fontSize = this.tConfig.style.fontSize;
                            var l = document.createElement("div");
                            l.classList.add("apexcharts-tooltip-y-group");
                            var h = document.createElement("span");
                            h.classList.add("apexcharts-tooltip-text-label"), l.appendChild(h);
                            var c = document.createElement("span");
                            c.classList.add("apexcharts-tooltip-text-value"), l.appendChild(c);
                            var d = document.createElement("div");
                            d.classList.add("apexcharts-tooltip-z-group");
                            var u = document.createElement("span");
                            u.classList.add("apexcharts-tooltip-text-z-label"), d.appendChild(u);
                            var g = document.createElement("span");
                            g.classList.add("apexcharts-tooltip-text-z-value"), d.appendChild(g), o.appendChild(l), o.appendChild(d), r.appendChild(o), a.appendChild(r), i.push(r)
                        }
                        return i
                    }
                }, {
                    key: "addSVGEvents", value: function () {
                        var t = this.w, e = t.config.chart.type, i = this.getElTooltip(),
                            a = !("bar" !== e && "candlestick" !== e && "rangeBar" !== e), s = t.globals.dom.Paper.node,
                            r = this.getElGrid();
                        r && (this.seriesBound = r.getBoundingClientRect());
                        var n, o = [], l = [],
                            h = {hoverArea: s, elGrid: r, tooltipEl: i, tooltipY: o, tooltipX: l, ttItems: this.ttItems};
                        if (t.globals.axisCharts && ("area" === e || "line" === e || "scatter" === e || "bubble" === e ? n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ? n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" === e ? n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap") : "radar" === e && (n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-marker")), n && n.length)) for (var c = 0; c < n.length; c++) o.push(n[c].getAttribute("cy")), l.push(n[c].getAttribute("cx"));
                        if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || a && this.hasBars() && this.tConfig.shared) this.addPathsEventListeners([s], h); else if (a && !t.globals.comboCharts) this.addBarsEventListeners(h); else if ("bubble" === e || "scatter" === e || "radar" === e || this.showOnIntersect && ("area" === e || "line" === e)) this.addPointsEventsListeners(h); else if (!t.globals.axisCharts || "heatmap" === e) {
                            var d = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                            this.addPathsEventListeners(d, h)
                        }
                        if (this.showOnIntersect) {
                            var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker");
                            u.length > 0 && this.addPathsEventListeners(u, h);
                            var g = t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-marker");
                            g.length > 0 && this.addPathsEventListeners(g, h), this.hasBars() && !this.tConfig.shared && this.addBarsEventListeners(h)
                        }
                    }
                }, {
                    key: "drawFixedTooltipRect", value: function () {
                        var t = this.w, e = this.getElTooltip(), i = e.getBoundingClientRect(), a = i.width + 10,
                            s = i.height + 10, r = this.tConfig.fixed.offsetX, n = this.tConfig.fixed.offsetY;
                        return this.tConfig.fixed.position.toLowerCase().indexOf("right") > -1 && (r = r + t.globals.svgWidth - a + 10), this.tConfig.fixed.position.toLowerCase().indexOf("bottom") > -1 && (n = n + t.globals.svgHeight - s - 10), e.style.left = r + "px", e.style.top = n + "px", {
                            x: r,
                            y: n,
                            ttWidth: a,
                            ttHeight: s
                        }
                    }
                }, {
                    key: "addPointsEventsListeners", value: function (t) {
                        var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker");
                        this.addPathsEventListeners(e, t)
                    }
                }, {
                    key: "addBarsEventListeners", value: function (t) {
                        var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-rangebar-area");
                        this.addPathsEventListeners(e, t)
                    }
                }, {
                    key: "addPathsEventListeners", value: function (t, e) {
                        for (var i = this, a = function (a) {
                            var s = {
                                paths: t[a],
                                tooltipEl: e.tooltipEl,
                                tooltipY: e.tooltipY,
                                tooltipX: e.tooltipX,
                                elGrid: e.elGrid,
                                hoverArea: e.hoverArea,
                                ttItems: e.ttItems
                            };
                            ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map((function (e) {
                                return t[a].addEventListener(e, i.seriesHover.bind(i, s), {capture: !1, passive: !0})
                            }))
                        }, s = 0; s < t.length; s++) a(s)
                    }
                }, {
                    key: "seriesHover", value: function (t, e) {
                        var i = this, a = [], s = this.w;
                        s.config.chart.group && (a = this.ctx.getGroupedCharts()), s.globals.axisCharts && (s.globals.minX === -1 / 0 && s.globals.maxX === 1 / 0 || 0 === s.globals.dataPoints) || (a.length ? a.forEach((function (a) {
                            var s = i.getElTooltip(a), r = {
                                paths: t.paths,
                                tooltipEl: s,
                                tooltipY: t.tooltipY,
                                tooltipX: t.tooltipX,
                                elGrid: t.elGrid,
                                hoverArea: t.hoverArea,
                                ttItems: a.w.globals.tooltip.ttItems
                            };
                            a.w.globals.minX === i.w.globals.minX && a.w.globals.maxX === i.w.globals.maxX && a.w.globals.tooltip.seriesHoverByContext({
                                chartCtx: a,
                                ttCtx: a.w.globals.tooltip,
                                opt: r,
                                e: e
                            })
                        })) : this.seriesHoverByContext({chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t, e: e}))
                    }
                }, {
                    key: "seriesHoverByContext", value: function (t) {
                        var e = t.chartCtx, i = t.ttCtx, a = t.opt, s = t.e, r = e.w, n = this.getElTooltip();
                        i.tooltipRect = {
                            x: 0,
                            y: 0,
                            ttWidth: n.getBoundingClientRect().width,
                            ttHeight: n.getBoundingClientRect().height
                        }, i.e = s, !i.hasBars() || r.globals.comboCharts || i.isBarShared || this.tConfig.onDatasetHover.highlightDataSeries && new Pe(e).toggleSeriesOnHover(s, s.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), r.globals.axisCharts ? i.axisChartsTooltips({
                            e: s,
                            opt: a,
                            tooltipRect: i.tooltipRect
                        }) : i.nonAxisChartsTooltips({e: s, opt: a, tooltipRect: i.tooltipRect})
                    }
                }, {
                    key: "axisChartsTooltips", value: function (t) {
                        var e, i, a, s = t.e, r = t.opt, n = this.w, o = null, l = r.elGrid.getBoundingClientRect(),
                            h = "touchmove" === s.type ? s.touches[0].clientX : s.clientX,
                            c = "touchmove" === s.type ? s.touches[0].clientY : s.clientY;
                        if (this.clientY = c, this.clientX = h, n.globals.capturedSeriesIndex = -1, n.globals.capturedDataPointIndex = -1, c < l.top || c > l.top + l.height) this.handleMouseOut(r); else {
                            if (Array.isArray(this.tConfig.enabledOnSeries) && !n.config.tooltip.shared) {
                                var d = parseInt(r.paths.getAttribute("index"), 10);
                                if (this.tConfig.enabledOnSeries.indexOf(d) < 0) return void this.handleMouseOut(r)
                            }
                            var u = this.getElTooltip(), g = this.getElXCrosshairs(),
                                f = n.globals.xyCharts || "bar" === n.config.chart.type && !n.globals.isBarHorizontal && this.hasBars() && this.tConfig.shared || n.globals.comboCharts && this.hasBars;
                            if (n.globals.isBarHorizontal && this.hasBars() && (f = !1), "mousemove" === s.type || "touchmove" === s.type || "mouseup" === s.type) {
                                if (null !== g && g.classList.add("active"), null !== this.ycrosshairs && this.blyaxisTooltip && this.ycrosshairs.classList.add("active"), f && !this.showOnIntersect) {
                                    e = (o = this.tooltipUtil.getNearestValues({
                                        context: this,
                                        hoverArea: r.hoverArea,
                                        elGrid: r.elGrid,
                                        clientX: h,
                                        clientY: c,
                                        hasBars: this.hasBars
                                    })).j;
                                    var p = o.capturedSeries;
                                    if (o.hoverX < 0 || o.hoverX > n.globals.gridWidth) return void this.handleMouseOut(r);
                                    if (null !== p) {
                                        if (null === n.globals.series[p][e]) return void this.handleMouseOut(r);
                                        void 0 !== n.globals.series[p][e] ? this.tConfig.shared && this.tooltipUtil.isXoverlap(e) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(s, this, p, e, r.ttItems) : this.create(s, this, p, e, r.ttItems, !1) : this.tooltipUtil.isXoverlap(e) && this.create(s, this, 0, e, r.ttItems)
                                    } else this.tooltipUtil.isXoverlap(e) && this.create(s, this, 0, e, r.ttItems)
                                } else if ("heatmap" === n.config.chart.type) {
                                    var x = this.intersect.handleHeatTooltip({e: s, opt: r, x: i, y: a});
                                    i = x.x, a = x.y, u.style.left = i + "px", u.style.top = a + "px"
                                } else this.hasBars && this.intersect.handleBarTooltip({
                                    e: s,
                                    opt: r
                                }), this.hasMarkers && this.intersect.handleMarkerTooltip({e: s, opt: r, x: i, y: a});
                                if (this.blyaxisTooltip) for (var b = 0; b < n.config.yaxis.length; b++) this.axesTooltip.drawYaxisTooltipText(b, c, this.xyRatios);
                                r.tooltipEl.classList.add("active")
                            } else "mouseout" !== s.type && "touchend" !== s.type || this.handleMouseOut(r)
                        }
                    }
                }, {
                    key: "nonAxisChartsTooltips", value: function (t) {
                        var e = t.e, i = t.opt, a = t.tooltipRect, s = this.w, r = i.paths.getAttribute("rel"),
                            n = this.getElTooltip(), o = s.globals.dom.elWrap.getBoundingClientRect();
                        if ("mousemove" === e.type || "touchmove" === e.type) {
                            n.classList.add("active"), this.tooltipLabels.drawSeriesTexts({
                                ttItems: i.ttItems,
                                i: parseInt(r, 10) - 1,
                                shared: !1
                            });
                            var l = s.globals.clientX - o.left - a.ttWidth / 2,
                                h = s.globals.clientY - o.top - a.ttHeight - 10;
                            n.style.left = l + "px", n.style.top = h + "px"
                        } else "mouseout" !== e.type && "touchend" !== e.type || n.classList.remove("active")
                    }
                }, {
                    key: "deactivateHoverFilter", value: function () {
                        for (var t = this.w, e = new p(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), a = 0; a < i.length; a++) e.pathMouseLeave(i[a])
                    }
                }, {
                    key: "handleMouseOut", value: function (t) {
                        var e = this.w, i = this.getElXCrosshairs();
                        if (t.tooltipEl.classList.remove("active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove("active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("active"), this.blxaxisTooltip && this.xaxisTooltip.classList.remove("active"), this.blyaxisTooltip) {
                            null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                            for (var a = 0; a < this.yaxisTTEls.length; a++) this.yaxisTTEls[a].classList.remove("active")
                        }
                        e.config.legend.tooltipHoverFormatter && this.legendLabels.forEach((function (t) {
                            var e = t.getAttribute("data:default-text");
                            t.innerHTML = decodeURIComponent(e)
                        }))
                    }
                }, {
                    key: "getElMarkers", value: function () {
                        return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")
                    }
                }, {
                    key: "getAllMarkers", value: function () {
                        return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker")
                    }
                }, {
                    key: "hasMarkers", value: function () {
                        return this.getElMarkers().length > 0
                    }
                }, {
                    key: "getElBars", value: function () {
                        return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-rangebar-series")
                    }
                }, {
                    key: "hasBars", value: function () {
                        return this.getElBars().length > 0
                    }
                }, {
                    key: "markerClick", value: function (t, e, i) {
                        var a = this.w;
                        "function" == typeof a.config.chart.events.markerClick && a.config.chart.events.markerClick(t, this.ctx, {
                            seriesIndex: e,
                            dataPointIndex: i,
                            w: a
                        }), this.ctx.fireEvent("markerClick", [t, this.ctx, {seriesIndex: e, dataPointIndex: i, w: a}])
                    }
                }, {
                    key: "create", value: function (t, e, i, a, s) {
                        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, n = this.w, o = e;
                        "mouseup" === t.type && this.markerClick(t, i, a), null === r && (r = this.tConfig.shared);
                        var l = this.hasMarkers(), h = this.getElBars();
                        if (n.config.legend.tooltipHoverFormatter) {
                            var c = n.config.legend.tooltipHoverFormatter, d = Array.from(this.legendLabels);
                            d.forEach((function (t) {
                                var e = t.getAttribute("data:default-text");
                                t.innerHTML = decodeURIComponent(e)
                            }));
                            for (var u = 0; u < d.length; u++) {
                                var g = d[u], f = parseInt(g.getAttribute("i"), 10),
                                    x = decodeURIComponent(g.getAttribute("data:default-text")),
                                    b = c(x, {seriesIndex: r ? f : i, dataPointIndex: a, w: n});
                                if (r) g.innerHTML = n.globals.collapsedSeriesIndices.indexOf(f) < 0 ? b : x; else if (g.innerHTML = f === i ? b : x, i === f) break
                            }
                        }
                        if (r) {
                            if (o.tooltipLabels.drawSeriesTexts({
                                ttItems: s,
                                i: i,
                                j: a,
                                shared: !this.showOnIntersect && this.tConfig.shared
                            }), l && (n.globals.markers.largestSize > 0 ? o.marker.enlargePoints(a) : o.tooltipPosition.moveDynamicPointsOnHover(a)), this.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(h), this.barSeriesHeight > 0)) {
                                var v = new p(this.ctx),
                                    m = n.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a, "']"));
                                this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a);
                                for (var y = 0; y < m.length; y++) v.pathMouseEnter(m[y])
                            }
                        } else o.tooltipLabels.drawSeriesTexts({
                            shared: !1,
                            ttItems: s,
                            i: i,
                            j: a
                        }), this.hasBars() && o.tooltipPosition.moveStickyTooltipOverBars(a), l && o.tooltipPosition.moveMarkers(i, a)
                    }
                }]) && vi(e.prototype, i), a && vi(e, a), t
            }(), yi = i(1), wi = i.n(yi), ki = i(2), Si = i.n(ki), Ai = i(3), Ci = i.n(Ai), Pi = i(4), Li = i.n(Pi),
            Ti = i(5), Ei = i.n(Ti), Oi = i(6), zi = i.n(Oi), Ii = i(7), Mi = i.n(Ii);

        function Xi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var Yi = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w, this.ev = this.w.config.chart.events, this.localeValues = this.w.globals.locale.toolbar
            }

            var e, i, a;
            return e = t, (i = [{
                key: "createToolbar", value: function () {
                    var t = this.w, e = document.createElement("div");
                    if (e.setAttribute("class", "apexcharts-toolbar"), t.globals.dom.elWrap.appendChild(e), this.elZoom = document.createElement("div"), this.elZoomIn = document.createElement("div"), this.elZoomOut = document.createElement("div"), this.elPan = document.createElement("div"), this.elSelection = document.createElement("div"), this.elZoomReset = document.createElement("div"), this.elMenuIcon = document.createElement("div"), this.elMenu = document.createElement("div"), this.elCustomIcons = [], this.t = t.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var i = 0; i < this.t.customIcons.length; i++) this.elCustomIcons.push(document.createElement("div"));
                    this.elMenuItems = [];
                    var a = [];
                    this.t.zoomin && t.config.chart.zoom.enabled && a.push({
                        el: this.elZoomIn,
                        icon: "string" == typeof this.t.zoomin ? this.t.zoomin : Li.a,
                        title: this.localeValues.zoomIn,
                        class: "apexcharts-zoom-in-icon"
                    }), this.t.zoomout && t.config.chart.zoom.enabled && a.push({
                        el: this.elZoomOut,
                        icon: "string" == typeof this.t.zoomout ? this.t.zoomout : Ei.a,
                        title: this.localeValues.zoomOut,
                        class: "apexcharts-zoom-out-icon"
                    }), this.t.zoom && t.config.chart.zoom.enabled && a.push({
                        el: this.elZoom,
                        icon: "string" == typeof this.t.zoom ? this.t.zoom : Si.a,
                        title: this.localeValues.selectionZoom,
                        class: t.globals.isTouchDevice ? "hidden" : "apexcharts-zoom-icon"
                    }), this.t.selection && t.config.chart.selection.enabled && a.push({
                        el: this.elSelection,
                        icon: "string" == typeof this.t.selection ? this.t.selection : zi.a,
                        title: this.localeValues.selection,
                        class: t.globals.isTouchDevice ? "hidden" : "apexcharts-selection-icon"
                    }), this.t.pan && t.config.chart.zoom.enabled && a.push({
                        el: this.elPan,
                        icon: "string" == typeof this.t.pan ? this.t.pan : wi.a,
                        title: this.localeValues.pan,
                        class: t.globals.isTouchDevice ? "hidden" : "apexcharts-pan-icon"
                    }), this.t.reset && t.config.chart.zoom.enabled && a.push({
                        el: this.elZoomReset,
                        icon: "string" == typeof this.t.reset ? this.t.reset : Ci.a,
                        title: this.localeValues.reset,
                        class: "apexcharts-reset-zoom-icon"
                    }), this.t.download && a.push({
                        el: this.elMenuIcon,
                        icon: "string" == typeof this.t.download ? this.t.download : Mi.a,
                        title: this.localeValues.menu,
                        class: "apexcharts-menu-icon"
                    });
                    for (var s = 0; s < this.elCustomIcons.length; s++) a.push({
                        el: this.elCustomIcons[s],
                        icon: this.t.customIcons[s].icon,
                        title: this.t.customIcons[s].title,
                        index: this.t.customIcons[s].index,
                        class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[s].class
                    });
                    a.forEach((function (t, e) {
                        t.index && n.moveIndexInArray(a, e, t.index)
                    }));
                    for (var r = 0; r < a.length; r++) p.setAttrs(a[r].el, {
                        class: a[r].class,
                        title: a[r].title
                    }), a[r].el.innerHTML = a[r].icon, e.appendChild(a[r].el);
                    e.appendChild(this.elMenu), p.setAttrs(this.elMenu, {class: "apexcharts-menu"});
                    for (var o = [{name: "exportSVG", title: this.localeValues.exportToSVG}, {
                        name: "exportPNG",
                        title: this.localeValues.exportToPNG
                    }, {
                        name: "exportCSV",
                        title: this.localeValues.exportToCSV
                    }], l = 0; l < o.length; l++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[l].innerHTML = o[l].title, p.setAttrs(this.elMenuItems[l], {
                        class: "apexcharts-menu-item ".concat(o[l].name),
                        title: o[l].title
                    }), this.elMenu.appendChild(this.elMenuItems[l]);
                    t.globals.zoomEnabled ? this.elZoom.classList.add("selected") : t.globals.panEnabled ? this.elPan.classList.add("selected") : t.globals.selectionEnabled && this.elSelection.classList.add("selected"), this.addToolbarEventListeners()
                }
            }, {
                key: "addToolbarEventListeners", value: function () {
                    var t = this;
                    this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleSelection.bind(this)), this.elZoom.addEventListener("click", this.toggleZooming.bind(this)), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach((function (e) {
                        e.classList.contains("exportSVG") ? e.addEventListener("click", t.downloadSVG.bind(t)) : e.classList.contains("exportPNG") ? e.addEventListener("click", t.downloadPNG.bind(t)) : e.classList.contains("exportCSV") && e.addEventListener("click", t.downloadCSV.bind(t))
                    }));
                    for (var e = 0; e < this.t.customIcons.length; e++) this.elCustomIcons[e].addEventListener("click", this.t.customIcons[e].click.bind(this, this.ctx, this.ctx.w))
                }
            }, {
                key: "toggleSelection", value: function () {
                    this.toggleOtherControls(), this.w.globals.selectionEnabled = !this.w.globals.selectionEnabled, this.elSelection.classList.contains("selected") ? this.elSelection.classList.remove("selected") : this.elSelection.classList.add("selected")
                }
            }, {
                key: "toggleZooming", value: function () {
                    this.toggleOtherControls(), this.w.globals.zoomEnabled = !this.w.globals.zoomEnabled, this.elZoom.classList.contains("selected") ? this.elZoom.classList.remove("selected") : this.elZoom.classList.add("selected")
                }
            }, {
                key: "getToolbarIconsReference", value: function () {
                    var t = this.w;
                    this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))
                }
            }, {
                key: "enableZooming", value: function () {
                    this.toggleOtherControls(), this.w.globals.zoomEnabled = !0, this.elZoom && this.elZoom.classList.add("selected"), this.elPan && this.elPan.classList.remove("selected")
                }
            }, {
                key: "enablePanning", value: function () {
                    this.toggleOtherControls(), this.w.globals.panEnabled = !0, this.elPan && this.elPan.classList.add("selected"), this.elZoom && this.elZoom.classList.remove("selected")
                }
            }, {
                key: "togglePanning", value: function () {
                    this.toggleOtherControls(), this.w.globals.panEnabled = !this.w.globals.panEnabled, this.elPan.classList.contains("selected") ? this.elPan.classList.remove("selected") : this.elPan.classList.add("selected")
                }
            }, {
                key: "toggleOtherControls", value: function () {
                    var t = this.w;
                    t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), this.elPan && this.elPan.classList.remove("selected"), this.elSelection && this.elSelection.classList.remove("selected"), this.elZoom && this.elZoom.classList.remove("selected")
                }
            }, {
                key: "handleZoomIn", value: function () {
                    var t = this.w, e = (t.globals.minX + t.globals.maxX) / 2, i = (t.globals.minX + e) / 2,
                        a = (t.globals.maxX + e) / 2;
                    t.globals.disableZoomIn || this.zoomUpdateOptions(i, a)
                }
            }, {
                key: "handleZoomOut", value: function () {
                    var t = this.w;
                    if (!("datetime" === t.config.xaxis.type && new Date(t.globals.minX).getUTCFullYear() < 1e3)) {
                        var e = (t.globals.minX + t.globals.maxX) / 2, i = t.globals.minX - (e - t.globals.minX),
                            a = t.globals.maxX - (e - t.globals.maxX);
                        t.globals.disableZoomOut || this.zoomUpdateOptions(i, a)
                    }
                }
            }, {
                key: "zoomUpdateOptions", value: function (t, e) {
                    var i = this.w, a = {min: t, max: e}, s = this.getBeforeZoomRange(a);
                    s && (a = s.xaxis);
                    var r = {xaxis: a}, o = n.clone(i.globals.initialConfig.yaxis);
                    i.config.chart.zoom.autoScaleYaxis && (o = new Ye(this.ctx).autoScaleY(this.ctx, o, {xaxis: a})), i.config.chart.group || (r.yaxis = o), this.w.globals.zoomed = !0, this.ctx._updateOptions(r, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a, o)
                }
            }, {
                key: "zoomCallback", value: function (t, e) {
                    "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {xaxis: t, yaxis: e})
                }
            }, {
                key: "getBeforeZoomRange", value: function (t, e) {
                    var i = null;
                    return "function" == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, {
                        xaxis: t,
                        yaxis: e
                    })), i
                }
            }, {
                key: "toggleMenu", value: function () {
                    var t = this;
                    window.setTimeout((function () {
                        t.elMenu.classList.contains("open") ? t.elMenu.classList.remove("open") : t.elMenu.classList.add("open")
                    }), 0)
                }
            }, {
                key: "downloadPNG", value: function () {
                    new Je(this.ctx).exportToPng(this.ctx)
                }
            }, {
                key: "downloadSVG", value: function () {
                    new Je(this.ctx).exportToSVG()
                }
            }, {
                key: "downloadCSV", value: function () {
                    var t = this.w;
                    new Je(this.ctx).exportToCSV({series: t.config.series})
                }
            }, {
                key: "handleZoomReset", value: function (t) {
                    var e = this;
                    this.ctx.getSyncedCharts().forEach((function (t) {
                        var i = t.w;
                        i.globals.minX !== i.globals.initialminX && i.globals.maxX !== i.globals.initialmaxX && (t.revertDefaultAxisMinMax(), "function" == typeof i.config.chart.events.zoomed && e.zoomCallback({
                            min: i.config.xaxis.min,
                            max: i.config.xaxis.max
                        }), i.globals.zoomed = !1, t._updateSeries(i.globals.initialSeries, i.config.chart.animations.dynamicAnimation.enabled))
                    }))
                }
            }, {
                key: "destroy", value: function () {
                    this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null
                }
            }]) && Xi(e.prototype, i), a && Xi(e, a), t
        }();

        function Di(t) {
            return (Di = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Ri(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        function Fi(t, e) {
            return !e || "object" !== Di(e) && "function" != typeof e ? function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Hi(t) {
            return (Hi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function Ni(t, e) {
            return (Ni = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        var Wi = function (t) {
            function e(t) {
                var i;
                return function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (i = Fi(this, Hi(e).call(this, t))).ctx = t, i.w = t.w, i.dragged = !1, i.graphics = new p(i.ctx), i.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], i.clientX = 0, i.clientY = 0, i.startX = 0, i.endX = 0, i.dragX = 0, i.startY = 0, i.endY = 0, i.dragY = 0, i
            }

            var i, a, s;
            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Ni(t, e)
            }(e, t), i = e, (a = [{
                key: "init", value: function (t) {
                    var e = this, i = t.xyRatios, a = this.w, s = this;
                    this.xyRatios = i, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a.globals.dom.elGraphical.add(this.zoomRect), a.globals.dom.elGraphical.add(this.selectionRect), "x" === a.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                        minX: 0,
                        minY: 0,
                        maxX: a.globals.gridWidth,
                        maxY: a.globals.gridHeight
                    }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === a.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                        minX: 0,
                        maxX: a.globals.gridWidth
                    }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a.globals.dom.baseEl.querySelector(a.globals.chartClass), this.hoverArea.classList.add("zoomable"), this.eventList.forEach((function (t) {
                        e.hoverArea.addEventListener(t, s.svgMouseEvents.bind(s, i), {capture: !1, passive: !0})
                    }))
                }
            }, {
                key: "destroy", value: function () {
                    this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null
                }
            }, {
                key: "svgMouseEvents", value: function (t, e) {
                    var i = this.w, a = this, s = this.ctx.toolbar,
                        r = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type;
                    if (e.shiftKey ? (this.shiftWasPressed = !0, s.enablePanning()) : this.shiftWasPressed && (s.enableZooming(), this.shiftWasPressed = !1), !e.target.classList.contains("apexcharts-selection-rect") && !e.target.parentNode.classList.contains("apexcharts-toolbar")) {
                        if (a.clientX = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientX : "touchend" === e.type ? e.changedTouches[0].clientX : e.clientX, a.clientY = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientY : "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY, "mousedown" === e.type && 1 === e.which) {
                            var n = a.gridRect.getBoundingClientRect();
                            a.startX = a.clientX - n.left, a.startY = a.clientY - n.top, a.dragged = !1, a.w.globals.mousedown = !0
                        }
                        if (("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (a.dragged = !0, i.globals.panEnabled ? (i.globals.selection = null, a.w.globals.mousedown && a.panDragging({
                            context: a,
                            zoomtype: r,
                            xyRatios: t
                        })) : (a.w.globals.mousedown && i.globals.zoomEnabled || a.w.globals.mousedown && i.globals.selectionEnabled) && (a.selection = a.selectionDrawing({
                            context: a,
                            zoomtype: r
                        }))), "mouseup" === e.type || "touchend" === e.type || "mouseleave" === e.type) {
                            var o = a.gridRect.getBoundingClientRect();
                            a.w.globals.mousedown && (a.endX = a.clientX - o.left, a.endY = a.clientY - o.top, a.dragX = Math.abs(a.endX - a.startX), a.dragY = Math.abs(a.endY - a.startY), (i.globals.zoomEnabled || i.globals.selectionEnabled) && a.selectionDrawn({
                                context: a,
                                zoomtype: r
                            })), i.globals.zoomEnabled && a.hideSelectionRect(this.selectionRect), a.dragged = !1, a.w.globals.mousedown = !1
                        }
                        this.makeSelectionRectDraggable()
                    }
                }
            }, {
                key: "makeSelectionRectDraggable", value: function () {
                    var t = this.w;
                    if (this.selectionRect) {
                        var e = this.selectionRect.node.getBoundingClientRect();
                        e.width > 0 && e.height > 0 && this.slDraggableRect.selectize().resize({
                            constraint: {
                                minX: 0,
                                minY: 0,
                                maxX: t.globals.gridWidth,
                                maxY: t.globals.gridHeight
                            }
                        }).on("resizing", this.selectionDragging.bind(this, "resizing"))
                    }
                }
            }, {
                key: "preselectedSelection", value: function () {
                    var t = this.w, e = this.xyRatios;
                    if (!t.globals.zoomEnabled) if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection); else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) {
                        var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio, a = {
                            x: i,
                            y: 0,
                            width: t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i,
                            height: t.globals.gridHeight,
                            translateX: 0,
                            translateY: 0,
                            selectionEnabled: !0
                        };
                        this.drawSelectionRect(a), this.makeSelectionRectDraggable(), "function" == typeof t.config.chart.events.selection && t.config.chart.events.selection(this.ctx, {
                            xaxis: {
                                min: t.config.chart.selection.xaxis.min,
                                max: t.config.chart.selection.xaxis.max
                            }, yaxis: {}
                        })
                    }
                }
            }, {
                key: "drawSelectionRect", value: function (t) {
                    var e = t.x, i = t.y, a = t.width, s = t.height, r = t.translateX, n = t.translateY, o = this.w,
                        l = this.zoomRect, h = this.selectionRect;
                    if (this.dragged || null !== o.globals.selection) {
                        var c = {transform: "translate(" + r + ", " + n + ")"};
                        o.globals.zoomEnabled && this.dragged && (a < 0 && (a = 1), l.attr({
                            x: e,
                            y: i,
                            width: a,
                            height: s,
                            fill: o.config.chart.zoom.zoomedArea.fill.color,
                            "fill-opacity": o.config.chart.zoom.zoomedArea.fill.opacity,
                            stroke: o.config.chart.zoom.zoomedArea.stroke.color,
                            "stroke-width": o.config.chart.zoom.zoomedArea.stroke.width,
                            "stroke-opacity": o.config.chart.zoom.zoomedArea.stroke.opacity
                        }), p.setAttrs(l.node, c)), o.globals.selectionEnabled && (h.attr({
                            x: e,
                            y: i,
                            width: a > 0 ? a : 0,
                            height: s > 0 ? s : 0,
                            fill: o.config.chart.selection.fill.color,
                            "fill-opacity": o.config.chart.selection.fill.opacity,
                            stroke: o.config.chart.selection.stroke.color,
                            "stroke-width": o.config.chart.selection.stroke.width,
                            "stroke-dasharray": o.config.chart.selection.stroke.dashArray,
                            "stroke-opacity": o.config.chart.selection.stroke.opacity
                        }), p.setAttrs(h.node, c))
                    }
                }
            }, {
                key: "hideSelectionRect", value: function (t) {
                    t && t.attr({x: 0, y: 0, width: 0, height: 0})
                }
            }, {
                key: "selectionDrawing", value: function (t) {
                    var e = t.context, i = t.zoomtype, a = this.w, s = e, r = this.gridRect.getBoundingClientRect(),
                        n = s.startX - 1, o = s.startY, l = s.clientX - r.left - n, h = s.clientY - r.top - o, c = 0,
                        d = 0, u = {};
                    return Math.abs(l + n) > a.globals.gridWidth ? l = a.globals.gridWidth - n : s.clientX - r.left < 0 && (l = n), n > s.clientX - r.left && (c = -(l = Math.abs(l))), o > s.clientY - r.top && (d = -(h = Math.abs(h))), u = "x" === i ? {
                        x: n,
                        y: 0,
                        width: l,
                        height: a.globals.gridHeight,
                        translateX: c,
                        translateY: 0
                    } : "y" === i ? {
                        x: 0,
                        y: o,
                        width: a.globals.gridWidth,
                        height: h,
                        translateX: 0,
                        translateY: d
                    } : {
                        x: n,
                        y: o,
                        width: l,
                        height: h,
                        translateX: c,
                        translateY: d
                    }, s.drawSelectionRect(u), s.selectionDragging("resizing"), u
                }
            }, {
                key: "selectionDragging", value: function (t, e) {
                    var i = this, a = this.w, s = this.xyRatios, r = this.selectionRect, n = 0;
                    "resizing" === t && (n = 30), "function" == typeof a.config.chart.events.selection && a.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout((function () {
                        var t = i.gridRect.getBoundingClientRect(), e = r.node.getBoundingClientRect(),
                            n = a.globals.xAxisScale.niceMin + (e.left - t.left) * s.xRatio,
                            o = a.globals.xAxisScale.niceMin + (e.right - t.left) * s.xRatio,
                            l = a.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * s.yRatio[0],
                            h = a.globals.yAxisScale[0].niceMax - (e.top - t.top) * s.yRatio[0];
                        a.config.chart.events.selection(i.ctx, {xaxis: {min: n, max: o}, yaxis: {min: l, max: h}})
                    }), n))
                }
            }, {
                key: "selectionDrawn", value: function (t) {
                    var e = t.context, i = t.zoomtype, a = this.w, s = e, r = this.xyRatios, o = this.ctx.toolbar;
                    if (s.startX > s.endX) {
                        var l = s.startX;
                        s.startX = s.endX, s.endX = l
                    }
                    if (s.startY > s.endY) {
                        var h = s.startY;
                        s.startY = s.endY, s.endY = h
                    }
                    var c = a.globals.xAxisScale.niceMin + s.startX * r.xRatio,
                        d = a.globals.xAxisScale.niceMin + s.endX * r.xRatio, u = [], g = [];
                    if (a.config.yaxis.forEach((function (t, e) {
                        u.push(a.globals.yAxisScale[e].niceMax - r.yRatio[e] * s.startY), g.push(a.globals.yAxisScale[e].niceMax - r.yRatio[e] * s.endY)
                    })), s.dragged && (s.dragX > 10 || s.dragY > 10) && c !== d) if (a.globals.zoomEnabled) {
                        var f = n.clone(a.globals.initialConfig.yaxis);
                        a.globals.zoomed || (a.globals.lastXAxis = n.clone(a.config.xaxis), a.globals.lastYAxis = n.clone(a.config.yaxis));
                        var p = {min: c, max: d};
                        if ("xy" !== i && "y" !== i || f.forEach((function (t, e) {
                            f[e].min = g[e], f[e].max = u[e]
                        })), a.config.chart.zoom.autoScaleYaxis) {
                            var x = new Ye(s.ctx);
                            f = x.autoScaleY(s.ctx, f, {xaxis: p})
                        }
                        if (o) {
                            var b = o.getBeforeZoomRange(p, f);
                            b && (p = b.xaxis ? b.xaxis : p, f = b.yaxis ? b.yaxe : f)
                        }
                        var v = {xaxis: p};
                        a.config.chart.group || (v.yaxis = f), s.ctx._updateOptions(v, !1, s.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof a.config.chart.events.zoomed && o.zoomCallback(p, f), a.globals.zoomed = !0
                    } else if (a.globals.selectionEnabled) {
                        var m, y = null;
                        m = {
                            min: c,
                            max: d
                        }, "xy" !== i && "y" !== i || (y = n.clone(a.config.yaxis)).forEach((function (t, e) {
                            y[e].min = g[e], y[e].max = u[e]
                        })), a.globals.selection = s.selection, "function" == typeof a.config.chart.events.selection && a.config.chart.events.selection(s.ctx, {
                            xaxis: m,
                            yaxis: y
                        })
                    }
                }
            }, {
                key: "panDragging", value: function (t) {
                    var e, i = t.context, a = this.w, s = i;
                    if (void 0 !== a.globals.lastClientPosition.x) {
                        var r = a.globals.lastClientPosition.x - s.clientX,
                            n = a.globals.lastClientPosition.y - s.clientY;
                        Math.abs(r) > Math.abs(n) && r > 0 ? e = "left" : Math.abs(r) > Math.abs(n) && r < 0 ? e = "right" : Math.abs(n) > Math.abs(r) && n > 0 ? e = "up" : Math.abs(n) > Math.abs(r) && n < 0 && (e = "down")
                    }
                    a.globals.lastClientPosition = {x: s.clientX, y: s.clientY};
                    var o = a.globals.minX, l = a.globals.maxX;
                    s.panScrolled(e, o, l)
                }
            }, {
                key: "panScrolled", value: function (t, e, i) {
                    var a = this.w, s = this.xyRatios, r = n.clone(a.globals.initialConfig.yaxis);
                    "left" === t ? (e = a.globals.minX + a.globals.gridWidth / 15 * s.xRatio, i = a.globals.maxX + a.globals.gridWidth / 15 * s.xRatio) : "right" === t && (e = a.globals.minX - a.globals.gridWidth / 15 * s.xRatio, i = a.globals.maxX - a.globals.gridWidth / 15 * s.xRatio), (e < a.globals.initialminX || i > a.globals.initialmaxX) && (e = a.globals.minX, i = a.globals.maxX);
                    var o = {min: e, max: i};
                    a.config.chart.zoom.autoScaleYaxis && (r = new Ye(this.ctx).autoScaleY(this.ctx, r, {xaxis: o}));
                    var l = {xaxis: {min: e, max: i}};
                    a.config.chart.group || (l.yaxis = r), this.ctx._updateOptions(l, !1, !1), "function" == typeof a.config.chart.events.scrolled && a.config.chart.events.scrolled(this.ctx, {
                        xaxis: {
                            min: e,
                            max: i
                        }
                    })
                }
            }]) && Ri(i.prototype, a), s && Ri(i, s), e
        }(Yi);

        function Bi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        var ji = function () {
            function t(e) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.ctx = e, this.w = e.w
            }

            var e, i, a;
            return e = t, (i = [{
                key: "draw", value: function () {
                    this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle")
                }
            }, {
                key: "drawTitleSubtitle", value: function (t) {
                    var e = this.w, i = "title" === t ? e.config.title : e.config.subtitle, a = e.globals.svgWidth / 2,
                        s = i.offsetY, r = "middle";
                    if ("left" === i.align ? (a = 10, r = "start") : "right" === i.align && (a = e.globals.svgWidth - 10, r = "end"), a += i.offsetX, s = s + parseInt(i.style.fontSize, 10) + 2, void 0 !== i.text) {
                        var n = new p(this.ctx).drawText({
                            x: a,
                            y: s,
                            text: i.text,
                            textAnchor: r,
                            fontSize: i.style.fontSize,
                            fontFamily: i.style.fontFamily,
                            foreColor: i.style.color,
                            opacity: 1
                        });
                        n.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(n)
                    }
                }
            }]) && Bi(e.prototype, i), a && Bi(e, a), t
        }();
        i(9), i(10), i(11), i(12), i(13), i(14), i(15), i(19);

        function Vi(t) {
            return (Vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Gi(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function _i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Gi(Object(i), !0).forEach((function (e) {
                    Ui(t, e, i[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Gi(Object(i)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }))
            }
            return t
        }

        function Ui(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function qi(t, e) {
            for (var i = 0; i < e.length; i++) {
                var a = e[i];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }

        i.d(e, "default", (function () {
            return Zi
        })), window.Apex = {};
        var Zi = function () {
            function t(e, i) {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.opts = i, this.ctx = this, this.w = new pt(i).init(), this.el = e, this.w.globals.cuid = n.randomId(), this.w.globals.chartID = this.w.config.chart.id ? this.w.config.chart.id : this.w.globals.cuid, this.eventList = ["click", "mousedown", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], this.initModules(), this.create = n.bind(this.create, this), this.documentEvent = n.bind(this.documentEvent, this), this.windowResizeHandler = this.windowResize.bind(this)
            }

            var e, i, a;
            return e = t, a = [{
                key: "initOnLoad", value: function () {
                    for (var e = document.querySelectorAll("[data-apexcharts]"), i = 0; i < e.length; i++) new t(e[i], JSON.parse(e[i].getAttribute("data-options"))).render()
                }
            }, {
                key: "exec", value: function (t, e) {
                    var i = this.getChartByID(t);
                    if (i) {
                        i.w.globals.isExecCalled = !0;
                        var a = ["updateOptions", "updateSeries", "appendData", "appendSeries", "toggleSeries", "resetSeries", "toggleDataPointSelection", "dataURI", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "addText", "clearAnnotations", "removeAnnotation", "paper", "destroy"],
                            s = null;
                        if (-1 !== a.indexOf(e)) {
                            for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
                            s = i[e].apply(i, n)
                        }
                        return s
                    }
                }
            }, {
                key: "merge", value: function (t, e) {
                    return n.extend(t, e)
                }
            }, {
                key: "getChartByID", value: function (t) {
                    return Apex._chartInstances.filter((function (e) {
                        return e.id === t
                    }))[0].chart
                }
            }], (i = [{
                key: "render", value: function () {
                    var t = this;
                    return new Promise((function (e, i) {
                        if (null !== t.el) {
                            void 0 === Apex._chartInstances && (Apex._chartInstances = []), t.w.config.chart.id && Apex._chartInstances.push({
                                id: t.w.globals.chartID,
                                group: t.w.config.chart.group,
                                chart: t
                            }), t.setLocale(t.w.config.chart.defaultLocale);
                            var a = t.w.config.chart.events.beforeMount;
                            "function" == typeof a && a(t, t.w), t.fireEvent("beforeMount", [t, t.w]), window.addEventListener("resize", t.windowResizeHandler), window.addResizeListener(t.el.parentNode, t.parentResizeCallback.bind(t));
                            var s = t.create(t.w.config.series, {});
                            if (!s) return e(t);
                            t.mount(s).then((function () {
                                e(s), "function" == typeof t.w.config.chart.events.mounted && t.w.config.chart.events.mounted(t, t.w), t.fireEvent("mounted", [t, t.w])
                            })).catch((function (t) {
                                i(t)
                            }))
                        } else i(new Error("Element not found"))
                    }))
                }
            }, {
                key: "initModules", value: function () {
                    this.animations = new c(this), this.axes = new _(this), this.core = new Ue(this.el, this), this.data = new Ze(this), this.grid = new Ke(this), this.coreUtils = new $(this), this.config = new dt({}), this.crosshairs = new Jt(this), this.options = new lt, this.responsive = new ei(this), this.series = new Pe(this), this.theme = new ai(this), this.formatters = new F(this), this.titleSubtitle = new ji(this), this.legend = new Te(this), this.toolbar = new Yi(this), this.dimensions = new Ae(this), this.zoomPanSelection = new Wi(this), this.w.globals.tooltip = new mi(this)
                }
            }, {
                key: "addEventListener", value: function (t, e) {
                    var i = this.w;
                    i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e]
                }
            }, {
                key: "removeEventListener", value: function (t, e) {
                    var i = this.w;
                    if (i.globals.events.hasOwnProperty(t)) {
                        var a = i.globals.events[t].indexOf(e);
                        -1 !== a && i.globals.events[t].splice(a, 1)
                    }
                }
            }, {
                key: "fireEvent", value: function (t, e) {
                    var i = this.w;
                    if (i.globals.events.hasOwnProperty(t)) {
                        e && e.length || (e = []);
                        for (var a = i.globals.events[t], s = a.length, r = 0; r < s; r++) a[r].apply(null, e)
                    }
                }
            }, {
                key: "create", value: function (t, e) {
                    var i = this.w;
                    this.initModules();
                    var a = this.w.globals;
                    if (a.noData = !1, a.animationEnded = !1, this.responsive.checkResponsiveConfig(e), null === this.el) return a.animationEnded = !0, null;
                    if (this.core.setupElements(), 0 === a.svgWidth) return a.animationEnded = !0, null;
                    var s = $.checkComboSeries(t);
                    a.comboCharts = s.comboCharts, a.comboChartsHasBars = s.comboChartsHasBars, (0 === t.length || 1 === t.length && t[0].data && 0 === t[0].data.length) && this.series.handleNoData(), this.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new mt(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a.noData && a.collapsedSeries.length !== a.series.length || this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters()), this.formatters.heatmapLabelFormatters(), this.dimensions.plotCoords();
                    var r = this.core.xySettings();
                    this.grid.createGridMask();
                    var n = this.core.plotChartType(t, r), o = new St(this);
                    o.bringForward(), i.config.dataLabels.background.enabled && o.dataLabelsBackground(), this.core.shiftGraphPosition();
                    var l = {
                        plot: {
                            left: i.globals.translateX,
                            top: i.globals.translateY,
                            width: i.globals.gridWidth,
                            height: i.globals.gridHeight
                        }
                    };
                    return {elGraph: n, xyRatios: r, elInner: i.globals.dom.elGraphical, dimensions: l}
                }
            }, {
                key: "mount", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = this,
                        a = i.w;
                    return new Promise((function (s, r) {
                        if (null === i.el) return r(new Error("Not enough data to display or target element not found"));
                        (null === e || a.globals.allSeriesCollapsed) && i.series.handleNoData(), i.annotations = new M(i), i.axes.drawAxis(a.config.chart.type, e.xyRatios), i.grid = new Ke(i);
                        var n = null;
                        "back" === a.config.grid.position && (n = i.grid.drawGrid());
                        var o = new B(t.ctx), l = new V(t.ctx);
                        if (null !== n && (o.xAxisLabelCorrections(n.xAxisTickWidth), l.setYAxisTextAlignments()), "back" === a.config.annotations.position && i.annotations.drawAnnotations(), e.elGraph instanceof Array) for (var h = 0; h < e.elGraph.length; h++) a.globals.dom.elGraphical.add(e.elGraph[h]); else a.globals.dom.elGraphical.add(e.elGraph);
                        if ("front" === a.config.grid.position && i.grid.drawGrid(), "front" === a.config.xaxis.crosshairs.position && i.crosshairs.drawXCrosshairs(), "front" === a.config.yaxis[0].crosshairs.position && i.crosshairs.drawYCrosshairs(), "front" === a.config.annotations.position && i.annotations.drawAnnotations(), !a.globals.noData) {
                            if (a.config.tooltip.enabled && !a.globals.noData && i.w.globals.tooltip.drawTooltip(e.xyRatios), a.globals.axisCharts && a.globals.isXNumeric) (a.config.chart.zoom.enabled || a.config.chart.selection && a.config.chart.selection.enabled || a.config.chart.pan && a.config.chart.pan.enabled) && i.zoomPanSelection.init({xyRatios: e.xyRatios}); else {
                                var c = a.config.chart.toolbar.tools;
                                c.zoom = !1, c.zoomin = !1, c.zoomout = !1, c.selection = !1, c.pan = !1, c.reset = !1
                            }
                            a.config.chart.toolbar.show && !a.globals.allSeriesCollapsed && i.toolbar.createToolbar()
                        }
                        a.globals.memory.methodsToExec.length > 0 && a.globals.memory.methodsToExec.forEach((function (t) {
                            t.method(t.params, !1, t.context)
                        })), a.globals.axisCharts || a.globals.noData || i.core.resizeNonAxisCharts(), s(i)
                    }))
                }
            }, {
                key: "clearPreviousPaths", value: function () {
                    var t = this.w;
                    t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1, t.globals.collapsedSeries = [], t.globals.collapsedSeriesIndices = []
                }
            }, {
                key: "updateOptions", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], r = this.w;
                    return t.series && (this.resetSeries(!1), t.series.length && t.series[0].data && (t.series = t.series.map((function (t, e) {
                        return _i({}, r.config.series[e], {
                            name: t.name ? t.name : r.config.series[e] && r.config.series[e].name,
                            type: t.type ? t.type : r.config.series[e] && r.config.series[e].type,
                            data: t.data ? t.data : r.config.series[e] && r.config.series[e].data
                        })
                    }))), this.revertDefaultAxisMinMax()), t.xaxis && ((t.xaxis.min || t.xaxis.max) && this.forceXAxisUpdate(t), t.xaxis.categories && t.xaxis.categories.length && r.config.xaxis.convertedCatToNumeric && (t = q.convertCatToNumeric(t))), r.globals.collapsedSeriesIndices.length > 0 && this.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this._updateOptions(t, e, i, a, s)
                }
            }, {
                key: "_updateOptions", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], r = [this];
                    a && (r = this.getSyncedCharts()), this.w.globals.isExecCalled && (r = [this], this.w.globals.isExecCalled = !1), r.forEach((function (a) {
                        var r = a.w;
                        return r.globals.shouldAnimate = i, e || (r.globals.resized = !0, r.globals.dataChanged = !0, i && a.series.getPreviousPaths()), t && "object" === Vi(t) && (a.config = new dt(t), t = $.extendArrayProps(a.config, t), r.config = n.extend(r.config, t), s && (r.globals.lastXAxis = [], r.globals.lastYAxis = [], r.globals.initialConfig = n.extend({}, r.config), r.globals.initialSeries = JSON.parse(JSON.stringify(r.config.series)))), a.update(t)
                    }))
                }
            }, {
                key: "updateSeries", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return this.resetSeries(!1), this.revertDefaultAxisMinMax(), this._updateSeries(t, e, i)
                }
            }, {
                key: "appendSeries", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        a = this.w.config.series.slice();
                    return a.push(t), this.resetSeries(!1), this.revertDefaultAxisMinMax(), this._updateSeries(a, e, i)
                }
            }, {
                key: "_updateSeries", value: function (t, e) {
                    var i, a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s = this.w;
                    return this.w.globals.shouldAnimate = e, s.globals.dataChanged = !0, s.globals.allSeriesCollapsed && (s.globals.allSeriesCollapsed = !1), e && this.series.getPreviousPaths(), s.globals.axisCharts ? (0 === (i = t.map((function (t, e) {
                        return _i({}, s.config.series[e], {
                            name: t.name ? t.name : s.config.series[e] && s.config.series[e].name,
                            type: t.type ? t.type : s.config.series[e] && s.config.series[e].type,
                            data: t.data ? t.data : s.config.series[e] && s.config.series[e].data
                        })
                    }))).length && (i = [{data: []}]), s.config.series = i) : s.config.series = t.slice(), a && (s.globals.initialConfig.series = JSON.parse(JSON.stringify(s.config.series)), s.globals.initialSeries = JSON.parse(JSON.stringify(s.config.series))), this.update()
                }
            }, {
                key: "getSyncedCharts", value: function () {
                    var t = this.getGroupedCharts(), e = [this];
                    return t.length && (e = [], t.forEach((function (t) {
                        e.push(t)
                    }))), e
                }
            }, {
                key: "getGroupedCharts", value: function () {
                    var t = this;
                    return Apex._chartInstances.filter((function (t) {
                        if (t.group) return !0
                    })).map((function (e) {
                        return t.w.config.chart.group === e.group ? e.chart : t
                    }))
                }
            }, {
                key: "appendData", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = this;
                    i.w.globals.dataChanged = !0, i.series.getPreviousPaths();
                    for (var a = i.w.config.series.slice(), s = 0; s < a.length; s++) if (void 0 !== t[s]) for (var r = 0; r < t[s].data.length; r++) a[s].data.push(t[s].data[r]);
                    return i.w.config.series = a, e && (i.w.globals.initialSeries = JSON.parse(JSON.stringify(i.w.config.series))), this.update()
                }
            }, {
                key: "update", value: function (t) {
                    var e = this;
                    return new Promise((function (i, a) {
                        e.clear();
                        var s = e.create(e.w.config.series, t);
                        if (!s) return i(e);
                        e.mount(s).then((function () {
                            "function" == typeof e.w.config.chart.events.updated && e.w.config.chart.events.updated(e, e.w), e.fireEvent("updated", [e, e.w]), e.w.globals.isDirty = !0, i(e)
                        })).catch((function (t) {
                            a(t)
                        }))
                    }))
                }
            }, {
                key: "forceXAxisUpdate", value: function (t) {
                    var e = this.w;
                    ["min", "max"].forEach((function (i) {
                        void 0 !== t.xaxis[i] && (e.config.xaxis[i] = t.xaxis[i], e.globals.lastXAxis[i] = t.xaxis[i])
                    }))
                }
            }, {
                key: "revertDefaultAxisMinMax", value: function () {
                    var t = this, e = this.w;
                    e.config.xaxis.min = e.globals.lastXAxis.min, e.config.xaxis.max = e.globals.lastXAxis.max, e.config.yaxis.map((function (i, a) {
                        e.globals.zoomed ? void 0 !== e.globals.lastYAxis[a] && (i.min = e.globals.lastYAxis[a].min, i.max = e.globals.lastYAxis[a].max) : void 0 !== t.opts.yaxis[a] && (i.min = t.opts.yaxis[a].min, i.max = t.opts.yaxis[a].max)
                    }))
                }
            }, {
                key: "clear", value: function () {
                    this.zoomPanSelection && this.zoomPanSelection.destroy(), this.toolbar && this.toolbar.destroy(), this.animations = null, this.axes = null, this.annotations = null, this.core = null, this.data = null, this.grid = null, this.series = null, this.responsive = null, this.theme = null, this.formatters = null, this.titleSubtitle = null, this.legend = null, this.dimensions = null, this.options = null, this.crosshairs = null, this.zoomPanSelection = null, this.toolbar = null, this.w.globals.tooltip = null, this.clearDomElements()
                }
            }, {
                key: "killSVG", value: function (t) {
                    return new Promise((function (e, i) {
                        t.each((function (t, e) {
                            this.removeClass("*"), this.off(), this.stop()
                        }), !0), t.ungroup(), t.clear(), e("done")
                    }))
                }
            }, {
                key: "clearDomElements", value: function () {
                    var t = this;
                    this.eventList.forEach((function (e) {
                        document.removeEventListener(e, t.documentEvent)
                    }));
                    var e = this.w.globals.dom;
                    if (null !== this.el) for (; this.el.firstChild;) this.el.removeChild(this.el.firstChild);
                    this.killSVG(e.Paper), e.Paper.remove(), e.elWrap = null, e.elGraphical = null, e.elLegendWrap = null, e.baseEl = null, e.elGridRect = null, e.elGridRectMask = null, e.elGridRectMarkerMask = null, e.elDefs = null
                }
            }, {
                key: "destroy", value: function () {
                    this.clear();
                    var t = this.w.config.chart.id;
                    t && Apex._chartInstances.forEach((function (e, i) {
                        e.id === t && Apex._chartInstances.splice(i, 1)
                    })), window.removeEventListener("resize", this.windowResizeHandler), window.removeResizeListener(this.el.parentNode, this.parentResizeCallback.bind(this))
                }
            }, {
                key: "toggleSeries", value: function (t) {
                    var e = this.series.isSeriesHidden(t);
                    return this.legend.toggleDataSeries(e.realIndex, e.isHidden), e.isHidden
                }
            }, {
                key: "showSeries", value: function (t) {
                    var e = this.series.isSeriesHidden(t);
                    e.isHidden && this.legend.toggleDataSeries(e.realIndex, !0)
                }
            }, {
                key: "hideSeries", value: function (t) {
                    var e = this.series.isSeriesHidden(t);
                    e.isHidden || this.legend.toggleDataSeries(e.realIndex, !1)
                }
            }, {
                key: "resetSeries", value: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.series.resetSeries(t)
                }
            }, {
                key: "setupEventHandlers", value: function () {
                    var t = this, e = this.w, i = this, a = e.globals.dom.baseEl.querySelector(e.globals.chartClass);
                    this.eventList.forEach((function (t) {
                        a.addEventListener(t, (function (t) {
                            var a = Object.assign({}, e, {
                                seriesIndex: e.globals.capturedSeriesIndex,
                                dataPointIndex: e.globals.capturedDataPointIndex
                            });
                            "mousemove" === t.type || "touchmove" === t.type ? "function" == typeof e.config.chart.events.mouseMove && e.config.chart.events.mouseMove(t, i, a) : ("mouseup" === t.type && 1 === t.which || "touchend" === t.type) && ("function" == typeof e.config.chart.events.click && e.config.chart.events.click(t, i, a), i.fireEvent("click", [t, i, a]))
                        }), {capture: !1, passive: !0})
                    })), this.eventList.forEach((function (e) {
                        document.addEventListener(e, t.documentEvent)
                    })), this.core.setupBrushHandler()
                }
            }, {
                key: "documentEvent", value: function (t) {
                    var e = this.w;
                    if ("click" === t.type) {
                        var i = t.target.className, a = e.globals.dom.baseEl.querySelector(".apexcharts-menu");
                        a && a.classList.contains("open") && "apexcharts-menu-icon" !== i && a.classList.remove("open")
                    }
                    e.globals.clientX = "touchmove" === t.type ? t.touches[0].clientX : t.clientX, e.globals.clientY = "touchmove" === t.type ? t.touches[0].clientY : t.clientY
                }
            }, {
                key: "addXaxisAnnotation", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this;
                    i && (a = i), a.annotations.addXaxisAnnotationExternal(t, e, a)
                }
            }, {
                key: "addYaxisAnnotation", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this;
                    i && (a = i), a.annotations.addYaxisAnnotationExternal(t, e, a)
                }
            }, {
                key: "addPointAnnotation", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this;
                    i && (a = i), a.annotations.addPointAnnotationExternal(t, e, a)
                }
            }, {
                key: "clearAnnotations", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, e = this;
                    t && (e = t), e.annotations.clearAnnotations(e)
                }
            }, {
                key: "removeAnnotation", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i = this;
                    e && (i = e), i.annotations.removeAnnotation(i, t)
                }
            }, {
                key: "addText", value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = this;
                    i && (a = i), a.annotations.addText(t, e, a)
                }
            }, {
                key: "getChartArea", value: function () {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")
                }
            }, {
                key: "getSeriesTotalXRange", value: function (t, e) {
                    return this.coreUtils.getSeriesTotalsXRange(t, e)
                }
            }, {
                key: "getHighestValueInSeries", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = new Re(this.ctx);
                    return e.getMinYMaxY(t).highestY
                }
            }, {
                key: "getLowestValueInSeries", value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = new Re(this.ctx);
                    return e.getMinYMaxY(t).lowestY
                }
            }, {
                key: "getSeriesTotal", value: function () {
                    return this.w.globals.seriesTotals
                }
            }, {
                key: "setLocale", value: function (t) {
                    this.setCurrentLocaleValues(t)
                }
            }, {
                key: "toggleDataPointSelection", value: function (t, e) {
                    var i = this.w, a = null, s = ".apexcharts-series[data\\:realIndex='".concat(t, "']");
                    return i.globals.axisCharts ? a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(e, "'], ").concat(s, " circle[j='").concat(e, "'], ").concat(s, " rect[j='").concat(e, "']")).members[0] : void 0 === e && (a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(t, "']")).members[0], ("pie" === i.config.chart.type || "donut" === i.config.chart.type) && new ie(this.ctx).pieClicked(t)), a ? new p(this.ctx).pathMouseDown(a, null) : console.warn("toggleDataPointSelection: Element not found"), a.node ? a.node : null
                }
            }, {
                key: "setCurrentLocaleValues", value: function (t) {
                    var e = this.w.config.chart.locales;
                    window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e = this.w.config.chart.locales.concat(window.Apex.chart.locales));
                    var i = e.filter((function (e) {
                        return e.name === t
                    }))[0];
                    if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
                    var a = n.extend(K, i);
                    this.w.globals.locale = a.options
                }
            }, {
                key: "dataURI", value: function () {
                    return new Je(this.ctx).dataURI()
                }
            }, {
                key: "paper", value: function () {
                    return this.w.globals.dom.Paper
                }
            }, {
                key: "parentResizeCallback", value: function () {
                    this.w.globals.animationEnded && this.windowResize()
                }
            }, {
                key: "windowResize", value: function () {
                    var t = this;
                    clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout((function () {
                        t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.update()
                    }), 150)
                }
            }]) && qi(e.prototype, i), a && qi(e, a), t
        }()
    }])
}));