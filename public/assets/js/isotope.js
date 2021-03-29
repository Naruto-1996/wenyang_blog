/*
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function (d) {
    function a() {
    }

    function b(h) {
        function e(i) {
            i.prototype.option || (i.prototype.option = function (j) {
                h.isPlainObject(j) && (this.options = h.extend(!0, this.options, j))
            })
        }

        function f(j, k) {
            h.fn[j] = function (o) {
                if ("string" == typeof o) {
                    for (var r = c.call(arguments, 1), i = 0, t = this.length; t > i; i++) {
                        var q = this[i], m = h.data(q, j);
                        if (m) {
                            if (h.isFunction(m[o]) && "_" !== o.charAt(0)) {
                                var l = m[o].apply(m, r);
                                if (void 0 !== l) {
                                    return l
                                }
                            } else {
                                g("no such method '" + o + "' for " + j + " instance")
                            }
                        } else {
                            g("cannot call methods on " + j + " prior to initialization; attempted to call '" + o + "'")
                        }
                    }
                    return this
                }
                return this.each(function () {
                    var n = h.data(this, j);
                    n ? (n.option(o), n._init()) : (n = new k(this, o), h.data(this, j, n))
                })
            }
        }

        if (h) {
            var g = "undefined" == typeof console ? a : function (i) {
                console.error(i)
            };
            return h.bridget = function (j, i) {
                e(i), f(j, i)
            }, h.bridget
        }
    }

    var c = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], b) : b(d.jQuery)
})(window), function (g) {
    function a(h) {
        var j = g.event;
        return j.target = j.target || j.srcElement || h, j
    }

    var b = document.documentElement, d = function () {
    };
    b.addEventListener ? d = function (k, h, j) {
        k.addEventListener(h, j, !1)
    } : b.attachEvent && (d = function (j, e, h) {
        j[e + h] = h.handleEvent ? function () {
            var k = a(j);
            h.handleEvent.call(h, k)
        } : function () {
            var k = a(j);
            h.call(j, k)
        }, j.attachEvent("on" + e, j[e + h])
    });
    var c = function () {
    };
    b.removeEventListener ? c = function (k, h, j) {
        k.removeEventListener(h, j, !1)
    } : b.detachEvent && (c = function (l, h, j) {
        l.detachEvent("on" + h, l[h + j]);
        try {
            delete l[h + j]
        } catch (k) {
            l[h + j] = void 0
        }
    });
    var f = {bind: d, unbind: c};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : g.eventie = f
}(this), function (g) {
    function a(e) {
        "function" == typeof e && (a.isReady ? e() : f.push(e))
    }

    function b(l) {
        var h = "readystatechange" === l.type && "complete" !== c.readyState;
        if (!a.isReady && !h) {
            a.isReady = !0;
            for (var j = 0, k = f.length; k > j; j++) {
                var e = f[j];
                e()
            }
        }
    }

    function d(e) {
        return e.bind(c, "DOMContentLoaded", b), e.bind(c, "readystatechange", b), e.bind(g, "load", b), a
    }

    var c = g.document, f = [];
    a.isReady = !1, "function" == typeof define && define.amd ? (a.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : g.docReady = d(g.eventie)
}(this), function () {
    function g() {
    }

    function a(k, h) {
        for (var j = k.length; j--;) {
            if (k[j].listener === h) {
                return j
            }
        }
        return -1
    }

    function b(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    var d = g.prototype, c = this, f = c.EventEmitter;
    d.getListeners = function (l) {
        var h, j, k = this._getEvents();
        if (l instanceof RegExp) {
            h = {};
            for (j in k) {
                k.hasOwnProperty(j) && l.test(j) && (h[j] = k[j])
            }
        } else {
            h = k[l] || (k[l] = [])
        }
        return h
    }, d.flattenListeners = function (k) {
        var h, j = [];
        for (h = 0; k.length > h; h += 1) {
            j.push(k[h].listener)
        }
        return j
    }, d.getListenersAsObject = function (k) {
        var h, j = this.getListeners(k);
        return j instanceof Array && (h = {}, h[k] = j), h || j
    }, d.addListener = function (l, e) {
        var j, h = this.getListenersAsObject(l), k = "object" == typeof e;
        for (j in h) {
            h.hasOwnProperty(j) && -1 === a(h[j], e) && h[j].push(k ? e : {listener: e, once: !1})
        }
        return this
    }, d.on = b("addListener"), d.addOnceListener = function (i, h) {
        return this.addListener(i, {listener: h, once: !0})
    }, d.once = b("addOnceListener"), d.defineEvent = function (e) {
        return this.getListeners(e), this
    }, d.defineEvents = function (i) {
        for (var h = 0; i.length > h; h += 1) {
            this.defineEvent(i[h])
        }
        return this
    }, d.removeListener = function (l, e) {
        var j, h, k = this.getListenersAsObject(l);
        for (h in k) {
            k.hasOwnProperty(h) && (j = a(k[h], e), -1 !== j && k[h].splice(j, 1))
        }
        return this
    }, d.off = b("removeListener"), d.addListeners = function (i, h) {
        return this.manipulateListeners(!1, i, h)
    }, d.removeListeners = function (i, h) {
        return this.manipulateListeners(!0, i, h)
    }, d.manipulateListeners = function (q, h, j) {
        var l, k, m = q ? this.removeListener : this.addListener, p = q ? this.removeListeners : this.addListeners;
        if ("object" != typeof h || h instanceof RegExp) {
            for (l = j.length; l--;) {
                m.call(this, h, j[l])
            }
        } else {
            for (l in h) {
                h.hasOwnProperty(l) && (k = h[l]) && ("function" == typeof k ? m.call(this, l, k) : p.call(this, l, k))
            }
        }
        return this
    }, d.removeEvent = function (l) {
        var h, j = typeof l, k = this._getEvents();
        if ("string" === j) {
            delete k[l]
        } else {
            if (l instanceof RegExp) {
                for (h in k) {
                    k.hasOwnProperty(h) && l.test(h) && delete k[h]
                }
            } else {
                delete this._events
            }
        }
        return this
    }, d.removeAllListeners = b("removeEvent"), d.emitEvent = function (q, h) {
        var j, l, k, m, p = this.getListenersAsObject(q);
        for (k in p) {
            if (p.hasOwnProperty(k)) {
                for (l = p[k].length; l--;) {
                    j = p[k][l], j.once === !0 && this.removeListener(q, j.listener), m = j.listener.apply(this, h || []), m === this._getOnceReturnValue() && this.removeListener(q, j.listener)
                }
            }
        }
        return this
    }, d.trigger = b("emitEvent"), d.emit = function (i) {
        var h = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(i, h)
    }, d.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, g.noConflict = function () {
        return c.EventEmitter = f, g
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return g
    }) : "object" == typeof module && module.exports ? module.exports = g : this.EventEmitter = g
}.call(this), function (d) {
    function a(i) {
        if (i) {
            if ("string" == typeof c[i]) {
                return i
            }
            i = i.charAt(0).toUpperCase() + i.slice(1);
            for (var f, g = 0, h = b.length; h > g; g++) {
                if (f = b[g] + i, "string" == typeof c[f]) {
                    return f
                }
            }
        }
    }

    var b = "Webkit Moz ms Ms O".split(" "), c = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return a
    }) : "object" == typeof exports ? module.exports = a : d.getStyleProperty = a
}(window), function (h) {
    function a(l) {
        var j = parseFloat(l), k = -1 === l.indexOf("%") && !isNaN(j);
        return k && j
    }

    function b() {
        for (var m = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, j = 0, k = g.length; k > j; j++) {
            var l = g[j];
            m[l] = 0
        }
        return m
    }

    function d(k) {
        function i(H) {
            if ("string" == typeof H && (H = document.querySelector(H)), H && "object" == typeof H && H.nodeType) {
                var F = f(H);
                if ("none" === F.display) {
                    return b()
                }
                var E = {};
                E.width = H.offsetWidth, E.height = H.offsetHeight;
                for (var x = E.isBorderBox = !(!j || !F[j] || "border-box" !== F[j]), u = 0, r = g.length; r > u; u++) {
                    var s = g[u], B = F[s];
                    B = e(H, B);
                    var K = parseFloat(B);
                    E[s] = isNaN(K) ? 0 : K
                }
                var D = E.paddingLeft + E.paddingRight, w = E.paddingTop + E.paddingBottom,
                    J = E.marginLeft + E.marginRight, p = E.marginTop + E.marginBottom,
                    A = E.borderLeftWidth + E.borderRightWidth, C = E.borderTopWidth + E.borderBottomWidth, M = x && l,
                    G = a(F.width);
                G !== !1 && (E.width = G + (M ? 0 : D + A));
                var q = a(F.height);
                return q !== !1 && (E.height = q + (M ? 0 : w + C)), E.innerWidth = E.width - (D + A), E.innerHeight = E.height - (w + C), E.outerWidth = E.width + J, E.outerHeight = E.height + p, E
            }
        }

        function e(v, m) {
            if (c || -1 === m.indexOf("%")) {
                return m
            }
            var n = v.style, p = n.left, q = v.runtimeStyle, u = q && q.left;
            return u && (q.left = v.currentStyle.left), n.left = m, m = n.pixelLeft, n.left = p, u && (q.left = u), m
        }

        var l, j = k("boxSizing");
        return function () {
            if (j) {
                var p = document.createElement("div");
                p.style.width = "200px", p.style.padding = "1px 2px 3px 4px", p.style.borderStyle = "solid", p.style.borderWidth = "1px 2px 3px 4px", p.style[j] = "border-box";
                var m = document.body || document.documentElement;
                m.appendChild(p);
                var n = f(p);
                l = 200 === a(n.width), m.removeChild(p)
            }
        }(), i
    }

    var c = h.getComputedStyle, f = c ? function (e) {
            return c(e, null)
        } : function (e) {
            return e.currentStyle
        },
        g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : h.getSize = d(h.getStyleProperty)
}(window), function (l, c) {
    function d(i, a) {
        return i[b](a)
    }

    function g(i) {
        if (!i.parentNode) {
            var a = document.createDocumentFragment();
            a.appendChild(i)
        }
    }

    function f(s, a) {
        g(s);
        for (var o = s.parentNode.querySelectorAll(a), p = 0, q = o.length; q > p; p++) {
            if (o[p] === s) {
                return !0
            }
        }
        return !1
    }

    function j(i, a) {
        return g(i), d(i, a)
    }

    var k, b = function () {
        if (c.matchesSelector) {
            return "matchesSelector"
        }
        for (var s = ["webkit", "moz", "ms", "o"], a = 0, p = s.length; p > a; a++) {
            var e = s[a], q = e + "MatchesSelector";
            if (c[q]) {
                return q
            }
        }
    }();
    if (b) {
        var m = document.createElement("div"), h = d(m, "div");
        k = h ? d : j
    } else {
        k = f
    }
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return k
    }) : window.matchesSelector = k
}(this, Element.prototype), function (h) {
    function a(l, j) {
        for (var k in j) {
            l[k] = j[k]
        }
        return l
    }

    function b(j) {
        for (var i in j) {
            return !1
        }
        return i = null, !0
    }

    function d(e) {
        return e.replace(/([A-Z])/g, function (i) {
            return "-" + i.toLowerCase()
        })
    }

    function c(B, x, A) {
        function e(m, l) {
            m && (this.element = m, this.layout = l, this.position = {x: 0, y: 0}, this._create())
        }

        var C = A("transition"), z = A("transform"), q = C && z, k = !!A("perspective"), i = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "otransitionend",
            transition: "transitionend"
        }[C], j = ["transform", "transition", "transitionDuration", "transitionProperty"], s = function () {
            for (var u = {}, l = 0, m = j.length; m > l; l++) {
                var r = j[l], p = A(r);
                p && p !== r && (u[r] = p)
            }
            return u
        }();
        a(e.prototype, B.prototype), e.prototype._create = function () {
            this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
        }, e.prototype.handleEvent = function (m) {
            var l = "on" + m.type;
            this[l] && this[l](m)
        }, e.prototype.getSize = function () {
            this.size = x(this.element)
        }, e.prototype.css = function (p) {
            var l = this.element.style;
            for (var m in p) {
                var n = s[m] || m;
                l[n] = p[m]
            }
        }, e.prototype.getPosition = function () {
            var F = g(this.element), m = this.layout.options, p = m.isOriginLeft, v = m.isOriginTop,
                u = parseInt(F[p ? "left" : "right"], 10), y = parseInt(F[v ? "top" : "bottom"], 10);
            u = isNaN(u) ? 0 : u, y = isNaN(y) ? 0 : y;
            var l = this.layout.size;
            u -= p ? l.paddingLeft : l.paddingRight, y -= v ? l.paddingTop : l.paddingBottom, this.position.x = u, this.position.y = y
        }, e.prototype.layoutPosition = function () {
            var n = this.layout.size, l = this.layout.options, m = {};
            l.isOriginLeft ? (m.left = this.position.x + n.paddingLeft + "px", m.right = "") : (m.right = this.position.x + n.paddingRight + "px", m.left = ""), l.isOriginTop ? (m.top = this.position.y + n.paddingTop + "px", m.bottom = "") : (m.bottom = this.position.y + n.paddingBottom + "px", m.top = ""), this.css(m), this.emitEvent("layout", [this])
        };
        var E = k ? function (m, l) {
            return "translate3d(" + m + "px, " + l + "px, 0)"
        } : function (m, l) {
            return "translate(" + m + "px, " + l + "px)"
        };
        e.prototype._transitionTo = function (K, m) {
            this.getPosition();
            var y = this.position.x, G = this.position.y, F = parseInt(K, 10), I = parseInt(m, 10),
                J = F === this.position.x && I === this.position.y;
            if (this.setPosition(K, m), J && !this.isTransitioning) {
                return this.layoutPosition(), void 0
            }
            var l = K - y, L = m - G, H = {}, v = this.layout.options;
            l = v.isOriginLeft ? l : -l, L = v.isOriginTop ? L : -L, H.transform = E(l, L), this.transition({
                to: H,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        }, e.prototype.goTo = function (m, l) {
            this.setPosition(m, l), this.layoutPosition()
        }, e.prototype.moveTo = q ? e.prototype._transitionTo : e.prototype.goTo, e.prototype.setPosition = function (m, l) {
            this.position.x = parseInt(m, 10), this.position.y = parseInt(l, 10)
        }, e.prototype._nonTransition = function (m) {
            this.css(m.to), m.isCleaning && this._removeStyles(m.to);
            for (var l in m.onTransitionEnd) {
                m.onTransitionEnd[l].call(this)
            }
        }, e.prototype._transition = function (p) {
            if (!parseFloat(this.layout.options.transitionDuration)) {
                return this._nonTransition(p), void 0
            }
            var l = this._transn;
            for (var m in p.onTransitionEnd) {
                l.onEnd[m] = p.onTransitionEnd[m]
            }
            for (m in p.to) {
                l.ingProperties[m] = !0, p.isCleaning && (l.clean[m] = !0)
            }
            if (p.from) {
                this.css(p.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(p.to), this.css(p.to), this.isTransitioning = !0
        };
        var w = z && d(z) + ",opacity";
        e.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: w,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(i, this, !1))
        }, e.prototype.transition = e.prototype[C ? "_transition" : "_nonTransition"], e.prototype.onwebkitTransitionEnd = function (l) {
            this.ontransitionend(l)
        }, e.prototype.onotransitionend = function (l) {
            this.ontransitionend(l)
        };
        var o = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
        e.prototype.ontransitionend = function (r) {
            if (r.target === this.element) {
                var l = this._transn, p = o[r.propertyName] || r.propertyName;
                if (delete l.ingProperties[p], b(l.ingProperties) && this.disableTransition(), p in l.clean && (this.element.style[r.propertyName] = "", delete l.clean[p]), p in l.onEnd) {
                    var m = l.onEnd[p];
                    m.call(this), delete l.onEnd[p]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, e.prototype.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(i, this, !1), this.isTransitioning = !1
        }, e.prototype._removeStyles = function (n) {
            var l = {};
            for (var m in n) {
                l[m] = ""
            }
            this.css(l)
        };
        var D = {transitionProperty: "", transitionDuration: ""};
        return e.prototype.removeTransitionStyles = function () {
            this.css(D)
        }, e.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
        }, e.prototype.remove = function () {
            if (!C || !parseFloat(this.layout.options.transitionDuration)) {
                return this.removeElem(), void 0
            }
            var l = this;
            this.on("transitionEnd", function () {
                return l.removeElem(), !0
            }), this.hide()
        }, e.prototype.reveal = function () {
            delete this.isHidden, this.css({display: ""});
            var l = this.layout.options;
            this.transition({from: l.hiddenStyle, to: l.visibleStyle, isCleaning: !0})
        }, e.prototype.hide = function () {
            this.isHidden = !0, this.css({display: ""});
            var l = this.layout.options;
            this.transition({
                from: l.visibleStyle,
                to: l.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function () {
                        this.isHidden && this.css({display: "none"})
                    }
                }
            })
        }, e.prototype.destroy = function () {
            this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
        }, e
    }

    var f = h.getComputedStyle, g = f ? function (e) {
        return f(e, null)
    } : function (e) {
        return e.currentStyle
    };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], c) : (h.Outlayer = {}, h.Outlayer.Item = c(h.EventEmitter, h.getSize, h.getStyleProperty))
}(window), function (A) {
    function k(d, a) {
        for (var c in a) {
            d[c] = a[c]
        }
        return d
    }

    function q(a) {
        return "[object Array]" === l.call(a)
    }

    function w(f) {
        var a = [];
        if (q(f)) {
            a = f
        } else {
            if (f && "number" == typeof f.length) {
                for (var d = 0, c = f.length; c > d; d++) {
                    a.push(f[d])
                }
            } else {
                a.push(f)
            }
        }
        return a
    }

    function v(d, a) {
        var c = j(a, d);
        -1 !== c && a.splice(c, 1)
    }

    function y(a) {
        return a.replace(/(.)([A-Z])/g, function (f, c, d) {
            return c + "-" + d
        }).toLowerCase()
    }

    function z(h, p, c, a, n, t) {
        function o(s, d) {
            if ("string" == typeof s && (s = b.querySelector(s)), !s || !g(s)) {
                return B && B.error("Bad " + this.constructor.namespace + " element: " + s), void 0
            }
            this.element = s, this.options = k({}, this.constructor.defaults), this.option(d);
            var f = ++e;
            this.element.outlayerGUID = f, r[f] = this, this._create(), this.options.isInitLayout && this.layout()
        }

        var e = 0, r = {};
        return o.namespace = "outlayer", o.Item = t, o.defaults = {
            containerStyle: {position: "relative"},
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
            visibleStyle: {opacity: 1, transform: "scale(1)"}
        }, k(o.prototype, c.prototype), o.prototype.option = function (d) {
            k(this.options, d)
        }, o.prototype._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), k(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, o.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, o.prototype._itemize = function (G) {
            for (var f = this._filterFindItemElements(G), u = this.constructor.Item, D = [], C = 0, E = f.length; E > C; C++) {
                var F = f[C], d = new u(F, this);
                D.push(d)
            }
            return D
        }, o.prototype._filterFindItemElements = function (H) {
            H = w(H);
            for (var f = this.options.itemSelector, C = [], D = 0, F = H.length; F > D; D++) {
                var G = H[D];
                if (g(G)) {
                    if (f) {
                        n(G, f) && C.push(G);
                        for (var d = G.querySelectorAll(f), I = 0, E = d.length; E > I; I++) {
                            C.push(d[I])
                        }
                    } else {
                        C.push(G)
                    }
                }
            }
            return C
        }, o.prototype.getItemElements = function () {
            for (var s = [], d = 0, f = this.items.length; f > d; d++) {
                s.push(this.items[d].element)
            }
            return s
        }, o.prototype.layout = function () {
            this._resetLayout(), this._manageStamps();
            var d = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, d), this._isLayoutInited = !0
        }, o.prototype._init = o.prototype.layout, o.prototype._resetLayout = function () {
            this.getSize()
        }, o.prototype.getSize = function () {
            this.size = a(this.element)
        }, o.prototype._getMeasurement = function (u, d) {
            var f, s = this.options[u];
            s ? ("string" == typeof s ? f = this.element.querySelector(s) : g(s) && (f = s), this[u] = f ? a(f)[d] : s) : this[u] = 0
        }, o.prototype.layoutItems = function (f, d) {
            f = this._getItemsForLayout(f), this._layoutItems(f, d), this._postLayout()
        }, o.prototype._getItemsForLayout = function (C) {
            for (var d = [], f = 0, u = C.length; u > f; f++) {
                var s = C[f];
                s.isIgnored || d.push(s)
            }
            return d
        }, o.prototype._layoutItems = function (H, f) {
            function C() {
                E.emitEvent("layoutComplete", [E, H])
            }

            var E = this;
            if (!H || !H.length) {
                return C(), void 0
            }
            this._itemsOn(H, "layout", C);
            for (var D = [], F = 0, G = H.length; G > F; F++) {
                var d = H[F], I = this._getItemLayoutPosition(d);
                I.item = d, I.isInstant = f || d.isLayoutInstant, D.push(I)
            }
            this._processLayoutQueue(D)
        }, o.prototype._getItemLayoutPosition = function () {
            return {x: 0, y: 0}
        }, o.prototype._processLayoutQueue = function (u) {
            for (var d = 0, f = u.length; f > d; d++) {
                var s = u[d];
                this._positionItem(s.item, s.x, s.y, s.isInstant)
            }
        }, o.prototype._positionItem = function (u, d, f, s) {
            s ? u.goTo(d, f) : u.moveTo(d, f)
        }, o.prototype._postLayout = function () {
            this.resizeContainer()
        }, o.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var d = this._getContainerSize();
                d && (this._setContainerMeasure(d.width, !0), this._setContainerMeasure(d.height, !1))
            }
        }, o.prototype._getContainerSize = m, o.prototype._setContainerMeasure = function (s, d) {
            if (void 0 !== s) {
                var f = this.size;
                f.isBorderBox && (s += d ? f.paddingLeft + f.paddingRight + f.borderLeftWidth + f.borderRightWidth : f.paddingBottom + f.paddingTop + f.borderTopWidth + f.borderBottomWidth), s = Math.max(s, 0), this.element.style[d ? "width" : "height"] = s + "px"
            }
        }, o.prototype._itemsOn = function (I, f, C) {
            function E() {
                return D++, D === G && C.call(H), !0
            }

            for (var D = 0, G = I.length, H = this, d = 0, J = I.length; J > d; d++) {
                var F = I[d];
                F.on(f, E)
            }
        }, o.prototype.ignore = function (f) {
            var d = this.getItem(f);
            d && (d.isIgnored = !0)
        }, o.prototype.unignore = function (f) {
            var d = this.getItem(f);
            d && delete d.isIgnored
        }, o.prototype.stamp = function (u) {
            if (u = this._find(u)) {
                this.stamps = this.stamps.concat(u);
                for (var d = 0, f = u.length; f > d; d++) {
                    var s = u[d];
                    this.ignore(s)
                }
            }
        }, o.prototype.unstamp = function (u) {
            if (u = this._find(u)) {
                for (var d = 0, f = u.length; f > d; d++) {
                    var s = u[d];
                    v(s, this.stamps), this.unignore(s)
                }
            }
        }, o.prototype._find = function (d) {
            return d ? ("string" == typeof d && (d = this.element.querySelectorAll(d)), d = w(d)) : void 0
        }, o.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var s = 0, d = this.stamps.length; d > s; s++) {
                    var f = this.stamps[s];
                    this._manageStamp(f)
                }
            }
        }, o.prototype._getBoundingRect = function () {
            var f = this.element.getBoundingClientRect(), d = this.size;
            this._boundingRect = {
                left: f.left + d.paddingLeft + d.borderLeftWidth,
                top: f.top + d.paddingTop + d.borderTopWidth,
                right: f.right - (d.paddingRight + d.borderRightWidth),
                bottom: f.bottom - (d.paddingBottom + d.borderBottomWidth)
            }
        }, o.prototype._manageStamp = m, o.prototype._getElementOffset = function (C) {
            var d = C.getBoundingClientRect(), f = this._boundingRect, u = a(C), s = {
                left: d.left - f.left - u.marginLeft,
                top: d.top - f.top - u.marginTop,
                right: f.right - d.right - u.marginRight,
                bottom: f.bottom - d.bottom - u.marginBottom
            };
            return s
        }, o.prototype.handleEvent = function (f) {
            var d = "on" + f.type;
            this[d] && this[d](f)
        }, o.prototype.bindResize = function () {
            this.isResizeBound || (h.bind(A, "resize", this), this.isResizeBound = !0)
        }, o.prototype.unbindResize = function () {
            this.isResizeBound && h.unbind(A, "resize", this), this.isResizeBound = !1
        }, o.prototype.onresize = function () {
            function f() {
                d.resize(), delete d.resizeTimeout
            }

            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var d = this;
            this.resizeTimeout = setTimeout(f, 100)
        }, o.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, o.prototype.needsResizeLayout = function () {
            var f = a(this.element), d = this.size && f;
            return d && f.innerWidth !== this.size.innerWidth
        }, o.prototype.addItems = function (f) {
            var d = this._itemize(f);
            return d.length && (this.items = this.items.concat(d)), d
        }, o.prototype.appended = function (f) {
            var d = this.addItems(f);
            d.length && (this.layoutItems(d, !0), this.reveal(d))
        }, o.prototype.prepended = function (s) {
            var d = this._itemize(s);
            if (d.length) {
                var f = this.items.slice(0);
                this.items = d.concat(f), this._resetLayout(), this._manageStamps(), this.layoutItems(d, !0), this.reveal(d), this.layoutItems(f)
            }
        }, o.prototype.reveal = function (u) {
            var d = u && u.length;
            if (d) {
                for (var f = 0; d > f; f++) {
                    var s = u[f];
                    s.reveal()
                }
            }
        }, o.prototype.hide = function (u) {
            var d = u && u.length;
            if (d) {
                for (var f = 0; d > f; f++) {
                    var s = u[f];
                    s.hide()
                }
            }
        }, o.prototype.getItem = function (u) {
            for (var d = 0, f = this.items.length; f > d; d++) {
                var s = this.items[d];
                if (s.element === u) {
                    return s
                }
            }
        }, o.prototype.getItems = function (D) {
            if (D && D.length) {
                for (var d = [], f = 0, u = D.length; u > f; f++) {
                    var s = D[f], C = this.getItem(s);
                    C && d.push(C)
                }
                return d
            }
        }, o.prototype.remove = function (D) {
            D = w(D);
            var d = this.getItems(D);
            if (d && d.length) {
                this._itemsOn(d, "remove", function () {
                    this.emitEvent("removeComplete", [this, d])
                });
                for (var f = 0, u = d.length; u > f; f++) {
                    var C = d[f];
                    C.remove(), v(C, this.items)
                }
            }
        }, o.prototype.destroy = function () {
            var u = this.element.style;
            u.height = "", u.position = "", u.width = "";
            for (var d = 0, f = this.items.length; f > d; d++) {
                var s = this.items[d];
                s.destroy()
            }
            this.unbindResize(), delete this.element.outlayerGUID, x && x.removeData(this.element, this.constructor.namespace)
        }, o.data = function (f) {
            var d = f && f.outlayerGUID;
            return d && r[d]
        }, o.create = function (s, d) {
            function f() {
                o.apply(this, arguments)
            }

            return Object.create ? f.prototype = Object.create(o.prototype) : k(f.prototype, o.prototype), f.prototype.constructor = f, f.defaults = k({}, o.defaults), k(f.defaults, d), f.prototype.settings = {}, f.namespace = s, f.data = o.data, f.Item = function () {
                t.apply(this, arguments)
            }, f.Item.prototype = new t, p(function () {
                for (var D = y(s), G = b.querySelectorAll(".js-" + D), I = "data-" + D + "-options", J = 0, F = G.length; F > J; J++) {
                    var E, u = G[J], C = u.getAttribute(I);
                    try {
                        E = C && JSON.parse(C)
                    } catch (H) {
                        B && B.error("Error parsing " + I + " on " + u.nodeName.toLowerCase() + (u.id ? "#" + u.id : "") + ": " + H);
                        continue
                    }
                    var K = new f(u, E);
                    x && x.data(u, s, K)
                }
            }), x && x.bridget && x.bridget(s, f), f
        }, o.Item = t, o
    }

    var b = A.document, B = A.console, x = A.jQuery, m = function () {
    }, l = Object.prototype.toString, g = "object" == typeof HTMLElement ? function (a) {
        return a instanceof HTMLElement
    } : function (a) {
        return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName
    }, j = Array.prototype.indexOf ? function (c, a) {
        return c.indexOf(a)
    } : function (f, a) {
        for (var c = 0, d = f.length; d > c; c++) {
            if (f[c] === a) {
                return c
            }
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], z) : A.Outlayer = z(A.eventie, A.docReady, A.EventEmitter, A.getSize, A.matchesSelector, A.Outlayer.Item)
}(window), function (b) {
    function a(d) {
        function c() {
            d.Item.apply(this, arguments)
        }

        return c.prototype = new d.Item, c.prototype._create = function () {
            this.id = this.layout.itemGUID++, d.Item.prototype._create.call(this), this.sortData = {}
        }, c.prototype.updateSortData = function () {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var j = this.layout.options.getSortData, f = this.layout._sorters;
                for (var g in j) {
                    var h = f[g];
                    this.sortData[g] = h(this.element, this)
                }
            }
        }, c
    }

    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], a) : (b.Isotope = b.Isotope || {}, b.Isotope.Item = a(b.Outlayer))
}(window), function (b) {
    function a(f, c) {
        function d(e) {
            this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
        }

        return function () {
            function j(k) {
                return function () {
                    return c.prototype[k].apply(this.isotope, arguments)
                }
            }

            for (var g = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, h = g.length; h > e; e++) {
                var i = g[e];
                d.prototype[i] = j(i)
            }
        }(), d.prototype.needsVerticalResizeLayout = function () {
            var g = f(this.isotope.element), h = this.isotope.size && g;
            return h && g.innerHeight !== this.isotope.size.innerHeight
        }, d.prototype._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments)
        }, d.prototype.getColumnWidth = function () {
            this.getSegmentSize("column", "Width")
        }, d.prototype.getRowHeight = function () {
            this.getSegmentSize("row", "Height")
        }, d.prototype.getSegmentSize = function (l, g) {
            var h = l + g, k = "outer" + g;
            if (this._getMeasurement(h, k), !this[h]) {
                var j = this.getFirstItemSize();
                this[h] = j && j[k] || this.isotope.size["inner" + g]
            }
        }, d.prototype.getFirstItemSize = function () {
            var g = this.isotope.filteredItems[0];
            return g && g.element && f(g.element)
        }, d.prototype.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments)
        }, d.prototype.getSize = function () {
            this.isotope.getSize(), this.size = this.isotope.size
        }, d.modes = {}, d.create = function (i, g) {
            function h() {
                d.apply(this, arguments)
            }

            return h.prototype = new d, g && (h.options = g), h.prototype.namespace = i, d.modes[i] = h, h
        }, d
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], a) : (b.Isotope = b.Isotope || {}, b.Isotope.LayoutMode = a(b.getSize, b.Outlayer))
}(window), function (c) {
    function a(g, d) {
        var f = g.create("masonry");
        return f.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var e = this.cols;
            for (this.colYs = []; e--;) {
                this.colYs.push(0)
            }
            this.maxY = 0
        }, f.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var h = this.items[0], e = h && h.element;
                this.columnWidth = e && d(e).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        }, f.prototype.getContainerWidth = function () {
            var h = this.options.isFitWidth ? this.element.parentNode : this.element, e = d(h);
            this.containerWidth = e && e.innerWidth
        }, f.prototype._getItemLayoutPosition = function (y) {
            y.getSize();
            var j = y.size.outerWidth % this.columnWidth, q = j && 1 > j ? "round" : "ceil",
                m = Math[q](y.size.outerWidth / this.columnWidth);
            m = Math.min(m, this.cols);
            for (var w = this._getColGroup(m), x = Math.min.apply(Math, w), i = b(w, x), z = {
                x: this.columnWidth * i,
                y: x
            }, v = x + y.size.outerHeight, l = this.cols + 1 - w.length, k = 0; l > k; k++) {
                this.colYs[i + k] = v
            }
            return z
        }, f.prototype._getColGroup = function (m) {
            if (2 > m) {
                return this.colYs
            }
            for (var h = [], j = this.cols + 1 - m, l = 0; j > l; l++) {
                var k = this.colYs.slice(l, l + m);
                h[l] = Math.max.apply(Math, k)
            }
            return h
        }, f.prototype._manageStamp = function (v) {
            var h = d(v), k = this._getElementOffset(v), j = this.options.isOriginLeft ? k.left : k.right,
                m = j + h.outerWidth, q = Math.floor(j / this.columnWidth);
            q = Math.max(0, q);
            var e = Math.floor(m / this.columnWidth);
            e -= m % this.columnWidth ? 0 : 1, e = Math.min(this.cols - 1, e);
            for (var w = (this.options.isOriginTop ? k.top : k.bottom) + h.outerHeight, l = q; e >= l; l++) {
                this.colYs[l] = Math.max(w, this.colYs[l])
            }
        }, f.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var e = {height: this.maxY};
            return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
        }, f.prototype._getContainerFitWidth = function () {
            for (var i = 0, h = this.cols; --h && 0 === this.colYs[h];) {
                i++
            }
            return (this.cols - i) * this.columnWidth - this.gutter
        }, f.prototype.needsResizeLayout = function () {
            var e = this.containerWidth;
            return this.getContainerWidth(), e !== this.containerWidth
        }, f
    }

    var b = Array.prototype.indexOf ? function (f, d) {
        return f.indexOf(d)
    } : function (j, d) {
        for (var f = 0, h = j.length; h > f; f++) {
            var g = j[f];
            if (g === d) {
                return f
            }
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], a) : c.Masonry = a(c.Outlayer, c.getSize)
}(window), function (c) {
    function a(g, d) {
        for (var f in d) {
            g[f] = d[f]
        }
        return g
    }

    function b(k, e) {
        var g = k.create("masonry"), f = g.prototype._getElementOffset, h = g.prototype.layout,
            j = g.prototype._getMeasurement;
        a(g.prototype, e.prototype), g.prototype._getElementOffset = f, g.prototype.layout = h, g.prototype._getMeasurement = j;
        var d = g.prototype.measureColumns;
        g.prototype.measureColumns = function () {
            this.items = this.isotope.filteredItems, d.call(this)
        };
        var l = g.prototype._manageStamp;
        return g.prototype._manageStamp = function () {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
        }, g
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : b(c.Isotope.LayoutMode, c.Masonry)
}(window), function (b) {
    function a(d) {
        var c = d.create("fitRows");
        return c.prototype._resetLayout = function () {
            this.x = 0, this.y = 0, this.maxY = 0
        }, c.prototype._getItemLayoutPosition = function (g) {
            g.getSize(), 0 !== this.x && g.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var f = {x: this.x, y: this.y};
            return this.maxY = Math.max(this.maxY, this.y + g.size.outerHeight), this.x += g.size.outerWidth, f
        }, c.prototype._getContainerSize = function () {
            return {height: this.maxY}
        }, c
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], a) : a(b.Isotope.LayoutMode)
}(window), function (b) {
    function a(d) {
        var c = d.create("vertical", {horizontalAlignment: 0});
        return c.prototype._resetLayout = function () {
            this.y = 0
        }, c.prototype._getItemLayoutPosition = function (h) {
            h.getSize();
            var f = (this.isotope.size.innerWidth - h.size.outerWidth) * this.options.horizontalAlignment, g = this.y;
            return this.y += h.size.outerHeight, {x: f, y: g}
        }, c.prototype._getContainerSize = function () {
            return {height: this.y}
        }, c
    }

    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], a) : a(b.Isotope.LayoutMode)
}(window), function (w) {
    function c(h, a) {
        for (var f in a) {
            h[f] = a[f]
        }
        return h
    }

    function j(a) {
        return "[object Array]" === g.call(a)
    }

    function l(i) {
        var a = [];
        if (j(i)) {
            a = i
        } else {
            if (i && "number" == typeof i.length) {
                for (var h = 0, f = i.length; f > h; h++) {
                    a.push(i[h])
                }
            } else {
                a.push(i)
            }
        }
        return a
    }

    function k(h, a) {
        var f = d(a, h);
        -1 !== f && a.splice(f, 1)
    }

    function q(z, p, y, A, o) {
        function n(h, f) {
            return function (C, E) {
                for (var D = 0, G = h.length; G > D; D++) {
                    var H = h[D], t = C.sortData[H], I = E.sortData[H];
                    if (t > I || I > t) {
                        var F = void 0 !== f[H] ? f[H] : f, B = F ? 1 : -1;
                        return (t > I ? 1 : -1) * B
                    }
                }
                return 0
            }
        }

        var a = z.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
        a.Item = A, a.LayoutMode = o, a.prototype._create = function () {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), z.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var f in o.modes) {
                this._initLayoutMode(f)
            }
        }, a.prototype.reloadItems = function () {
            this.itemGUID = 0, z.prototype.reloadItems.call(this)
        }, a.prototype._itemize = function () {
            for (var f = z.prototype._itemize.apply(this, arguments), h = 0, t = f.length; t > h; h++) {
                var r = f[h];
                r.id = this.itemGUID++
            }
            return this._updateItemsSortData(f), f
        }, a.prototype._initLayoutMode = function (r) {
            var f = o.modes[r], h = this.options[r] || {};
            this.options[r] = f.options ? c(f.options, h) : h, this.modes[r] = new f(this)
        }, a.prototype.layout = function () {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        }, a.prototype._layout = function () {
            var f = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, f), this._isLayoutInited = !0
        }, a.prototype.arrange = function (f) {
            this.option(f), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
        }, a.prototype._init = a.prototype.arrange, a.prototype._getIsInstant = function () {
            var f = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = f, f
        }, a.prototype._filter = function (L) {
            function C() {
                D.reveal(G), D.hide(J)
            }

            var F = this.options.filter;
            F = F || "*";
            for (var H = [], G = [], J = [], K = this._getFilterTest(F), B = 0, M = L.length; M > B; B++) {
                var I = L[B];
                if (!I.isIgnored) {
                    var E = K(I);
                    E && H.push(I), E && I.isHidden ? G.push(I) : E || I.isHidden || J.push(I)
                }
            }
            var D = this;
            return this._isInstant ? this._noTransition(C) : C(), H
        }, a.prototype._getFilterTest = function (f) {
            return v && this.options.isJQueryFiltering ? function (h) {
                return v(h.element).is(f)
            } : "function" == typeof f ? function (h) {
                return f(h.element)
            } : function (h) {
                return y(h.element, f)
            }
        }, a.prototype.updateSortData = function (h) {
            this._getSorters(), h = l(h);
            var f = this.getItems(h);
            f = f.length ? f : this.items, this._updateItemsSortData(f)
        }, a.prototype._getSorters = function () {
            var r = this.options.getSortData;
            for (var f in r) {
                var h = r[f];
                this._sorters[f] = e(h)
            }
        }, a.prototype._updateItemsSortData = function (u) {
            for (var f = 0, h = u.length; h > f; f++) {
                var r = u[f];
                r.updateSortData()
            }
        };
        var e = function () {
            function h(G) {
                if ("string" != typeof G) {
                    return G
                }
                var B = b(G).split(" "), D = B[0], C = D.match(/^\[(.+)\]$/), E = C && C[1], F = f(E, D),
                    H = a.sortDataParsers[B[1]];
                return G = H ? function (i) {
                    return i && H(F(i))
                } : function (i) {
                    return i && F(i)
                }
            }

            function f(B, r) {
                var u;
                return u = B ? function (i) {
                    return i.getAttribute(B)
                } : function (D) {
                    var C = D.querySelector(r);
                    return C && m(C)
                }
            }

            return h
        }();
        a.sortDataParsers = {
            parseInt: function (f) {
                return parseInt(f, 10)
            }, parseFloat: function (f) {
                return parseFloat(f)
            }
        }, a.prototype._sort = function () {
            var r = this.options.sortBy;
            if (r) {
                var f = [].concat.apply(r, this.sortHistory), h = n(f, this.options.sortAscending);
                this.filteredItems.sort(h), r !== this.sortHistory[0] && this.sortHistory.unshift(r)
            }
        }, a.prototype._mode = function () {
            var h = this.options.layoutMode, f = this.modes[h];
            if (!f) {
                throw Error("No layout mode: " + h)
            }
            return f.options = this.options[h], f
        }, a.prototype._resetLayout = function () {
            z.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, a.prototype._getItemLayoutPosition = function (f) {
            return this._mode()._getItemLayoutPosition(f)
        }, a.prototype._manageStamp = function (f) {
            this._mode()._manageStamp(f)
        }, a.prototype._getContainerSize = function () {
            return this._mode()._getContainerSize()
        }, a.prototype.needsResizeLayout = function () {
            return this._mode().needsResizeLayout()
        }, a.prototype.appended = function (r) {
            var f = this.addItems(r);
            if (f.length) {
                var h = this._filterRevealAdded(f);
                this.filteredItems = this.filteredItems.concat(h)
            }
        }, a.prototype.prepended = function (u) {
            var f = this._itemize(u);
            if (f.length) {
                var h = this.items.slice(0);
                this.items = f.concat(h), this._resetLayout(), this._manageStamps();
                var r = this._filterRevealAdded(f);
                this.layoutItems(h), this.filteredItems = r.concat(this.filteredItems)
            }
        }, a.prototype._filterRevealAdded = function (h) {
            var f = this._noTransition(function () {
                return this._filter(h)
            });
            return this.layoutItems(f, !0), this.reveal(f), h
        }, a.prototype.insert = function (D) {
            var f = this.addItems(D);
            if (f.length) {
                var h, B, u = f.length;
                for (h = 0; u > h; h++) {
                    B = f[h], this.element.appendChild(B.element)
                }
                var C = this._filter(f);
                for (this._noTransition(function () {
                    this.hide(C)
                }), h = 0; u > h; h++) {
                    f[h].isLayoutInstant = !0
                }
                for (this.arrange(), h = 0; u > h; h++) {
                    delete f[h].isLayoutInstant
                }
                this.reveal(C)
            }
        };
        var s = a.prototype.remove;
        return a.prototype.remove = function (C) {
            C = l(C);
            var f = this.getItems(C);
            if (s.call(this, C), f && f.length) {
                for (var h = 0, u = f.length; u > h; h++) {
                    var B = f[h];
                    k(B, this.filteredItems)
                }
            }
        }, a.prototype._noTransition = function (r) {
            var f = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var h = r.call(this);
            return this.options.transitionDuration = f, h
        }, a
    }

    var v = w.jQuery, b = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    }, x = document.documentElement, m = x.textContent ? function (a) {
        return a.textContent
    } : function (a) {
        return a.innerText
    }, g = Object.prototype.toString, d = Array.prototype.indexOf ? function (f, a) {
        return f.indexOf(a)
    } : function (n, a) {
        for (var f = 0, h = n.length; h > f; f++) {
            if (n[f] === a) {
                return f
            }
        }
        return -1
    };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], q) : w.Isotope = q(w.Outlayer, w.getSize, w.matchesSelector, w.Isotope.Item, w.Isotope.LayoutMode)
}(window);