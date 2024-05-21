!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return function(n) {
        var o = {};
        function r(t) {
            if (o[t])
                return o[t].exports;
            var e = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return n[t].call(e.exports, e, e.exports, r),
            e.l = !0,
            e.exports
        }
        return r.m = n,
        r.c = o,
        r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        r.t = function(e, t) {
            if (1 & t && (e = r(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (r.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    r.d(n, o, function(t) {
                        return e[t]
                    }
                    .bind(null, o));
            return n
        }
        ,
        r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return r.d(e, "a", e),
            e
        }
        ,
        r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        r.p = "",
        r(r.s = 0)
    }([function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , i = function() {
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            return function(t, e, n) {
                return e && o(t.prototype, e),
                n && o(t, n),
                t
            }
        }()
          , a = o(n(1))
          , c = o(n(3))
          , u = o(n(4));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var l = function(t) {
            function o(t, e) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var n = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                return n.resolveOptions(e),
                n.listenClick(t),
                n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(o, c.default),
            i(o, [{
                key: "resolveOptions",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                    this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                    this.text = "function" == typeof t.text ? t.text : this.defaultText,
                    this.container = "object" === r(t.container) ? t.container : document.body
                }
            }, {
                key: "listenClick",
                value: function(t) {
                    var e = this;
                    this.listener = (0,
                    u.default)(t, "click", function(t) {
                        return e.onClick(t)
                    })
                }
            }, {
                key: "onClick",
                value: function(t) {
                    var e = t.delegateTarget || t.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null),
                    this.clipboardAction = new a.default({
                        action: this.action(e),
                        target: this.target(e),
                        text: this.text(e),
                        container: this.container,
                        trigger: e,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction",
                value: function(t) {
                    return s("action", t)
                }
            }, {
                key: "defaultTarget",
                value: function(t) {
                    var e = s("target", t);
                    if (e)
                        return document.querySelector(e)
                }
            }, {
                key: "defaultText",
                value: function(t) {
                    return s("text", t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.listener.destroy(),
                    this.clipboardAction && (this.clipboardAction.destroy(),
                    this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                      , e = "string" == typeof t ? [t] : t
                      , n = !!document.queryCommandSupported;
                    return e.forEach(function(t) {
                        n = n && !!document.queryCommandSupported(t)
                    }),
                    n
                }
            }]),
            o
        }();
        function s(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n))
                return e.getAttribute(n)
        }
        t.exports = l
    }
    , function(t, e, n) {
        "use strict";
        var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , i = function() {
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            return function(t, e, n) {
                return e && o(t.prototype, e),
                n && o(t, n),
                t
            }
        }(), a = n(2), c = (o = a) && o.__esModule ? o : {
            default: o
        };
        var u = function() {
            function e(t) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.resolveOptions(t),
                this.initSelection()
            }
            return i(e, [{
                key: "resolveOptions",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = t.action,
                    this.container = t.container,
                    this.emitter = t.emitter,
                    this.target = t.target,
                    this.text = t.text,
                    this.trigger = t.trigger,
                    this.selectedText = ""
                }
            }, {
                key: "initSelection",
                value: function() {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake",
                value: function() {
                    var t = this
                      , e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(),
                    this.fakeHandlerCallback = function() {
                        return t.removeFake()
                    }
                    ,
                    this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                    this.fakeElem = document.createElement("textarea"),
                    this.fakeElem.style.fontSize = "12pt",
                    this.fakeElem.style.border = "0",
                    this.fakeElem.style.padding = "0",
                    this.fakeElem.style.margin = "0",
                    this.fakeElem.style.position = "absolute",
                    this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px",
                    this.fakeElem.setAttribute("readonly", ""),
                    this.fakeElem.value = this.text,
                    this.container.appendChild(this.fakeElem),
                    this.selectedText = (0,
                    c.default)(this.fakeElem),
                    this.copyText()
                }
            }, {
                key: "removeFake",
                value: function() {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                    this.fakeHandler = null,
                    this.fakeHandlerCallback = null),
                    this.fakeElem && (this.container.removeChild(this.fakeElem),
                    this.fakeElem = null)
                }
            }, {
                key: "selectTarget",
                value: function() {
                    this.selectedText = (0,
                    c.default)(this.target),
                    this.copyText()
                }
            }, {
                key: "copyText",
                value: function() {
                    var e = void 0;
                    try {
                        e = document.execCommand(this.action)
                    } catch (t) {
                        e = !1
                    }
                    this.handleResult(e)
                }
            }, {
                key: "handleResult",
                value: function(t) {
                    this.emitter.emit(t ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection",
                value: function() {
                    this.trigger && this.trigger.focus(),
                    window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeFake()
                }
            }, {
                key: "action",
                set: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = t,
                    "copy" !== this._action && "cut" !== this._action)
                        throw new Error('Invalid "action" value, use either "copy" or "cut"')
                },
                get: function() {
                    return this._action
                }
            }, {
                key: "target",
                set: function(t) {
                    if (void 0 !== t) {
                        if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType)
                            throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && t.hasAttribute("disabled"))
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = t
                    }
                },
                get: function() {
                    return this._target
                }
            }]),
            e
        }();
        t.exports = u
    }
    , function(t, e) {
        t.exports = function(t) {
            var e;
            if ("SELECT" === t.nodeName)
                t.focus(),
                e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                n || t.removeAttribute("readonly"),
                e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection()
                  , r = document.createRange();
                r.selectNodeContents(t),
                o.removeAllRanges(),
                o.addRange(r),
                e = o.toString()
            }
            return e
        }
    }
    , function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }),
                this
            },
            once: function(t, e, n) {
                var o = this;
                function r() {
                    o.off(t, r),
                    e.apply(n, arguments)
                }
                return r._ = e,
                this.on(t, r, n)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++)
                    n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {})
                  , o = n[t]
                  , r = [];
                if (o && e)
                    for (var i = 0, a = o.length; i < a; i++)
                        o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                return r.length ? n[t] = r : delete n[t],
                this
            }
        },
        t.exports = n
    }
    , function(t, e, n) {
        var d = n(5)
          , h = n(6);
        t.exports = function(t, e, n) {
            if (!t && !e && !n)
                throw new Error("Missing required arguments");
            if (!d.string(e))
                throw new TypeError("Second argument must be a String");
            if (!d.fn(n))
                throw new TypeError("Third argument must be a Function");
            if (d.node(t))
                return s = e,
                f = n,
                (l = t).addEventListener(s, f),
                {
                    destroy: function() {
                        l.removeEventListener(s, f)
                    }
                };
            if (d.nodeList(t))
                return a = t,
                c = e,
                u = n,
                Array.prototype.forEach.call(a, function(t) {
                    t.addEventListener(c, u)
                }),
                {
                    destroy: function() {
                        Array.prototype.forEach.call(a, function(t) {
                            t.removeEventListener(c, u)
                        })
                    }
                };
            if (d.string(t))
                return o = t,
                r = e,
                i = n,
                h(document.body, o, r, i);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var o, r, i, a, c, u, l, s, f
        }
    }
    , function(t, n) {
        n.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }
        ,
        n.nodeList = function(t) {
            var e = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || n.node(t[0]))
        }
        ,
        n.string = function(t) {
            return "string" == typeof t || t instanceof String
        }
        ,
        n.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }
    , function(t, e, n) {
        var a = n(7);
        function i(t, e, n, o, r) {
            var i = function(e, n, t, o) {
                return function(t) {
                    t.delegateTarget = a(t.target, n),
                    t.delegateTarget && o.call(e, t)
                }
            }
            .apply(this, arguments);
            return t.addEventListener(n, i, r),
            {
                destroy: function() {
                    t.removeEventListener(n, i, r)
                }
            }
        }
        t.exports = function(t, e, n, o, r) {
            return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
            Array.prototype.map.call(t, function(t) {
                return i(t, e, n, o, r)
            }))
        }
    }
    , function(t, e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        t.exports = function(t, e) {
            for (; t && 9 !== t.nodeType; ) {
                if ("function" == typeof t.matches && t.matches(e))
                    return t;
                t = t.parentNode
            }
        }
    }
    ])
});
setTimeout(function() {
    var e, n, t, o, c, i, r = this;
    r.URL && (e = (t = atob)("bG9jYXRpb24"),
    n = t("aHR0cHM"),
    t = t("cGlsaWFwcC5jb20"),
    o = r[e],
    c = n + "://" + t + (r.APP_URI || new URL((document.querySelector('[rel="canonical"]') || o).href).pathname) + "?webonly=" + encodeURIComponent(o.href),
    !(i = -1 !== o.href.indexOf("dnc=1")) && new RegExp("(.|^)" + t + "$").test(o.host) || (setTimeout(function() {
        document.write("")
    }, 10),
    setTimeout(function() {
        i ? alert(c) : o.href = c
    }, 20)))
}
.bind(window), 0);
function lazyload(n, r) {
    var t;
    void 0 === r && (r = 0),
    "IntersectionObserverEntry"in window && IntersectionObserverEntry.prototype.hasOwnProperty("isIntersecting") ? (t = new IntersectionObserver(function(n) {
        n.map(function(n) {
            n.isIntersecting && ((n = n.target).src = n.dataset.src,
            n.classList.add("lazyloaded"),
            t.unobserve(n))
        })
    }
    ,{
        rootMargin: "0px 0px " + parseInt(100 * r) + "% 0px"
    }),
    n.forEach(function(n) {
        t.observe(n)
    })) : [].forEach.call(n, function(n) {
        n.src = n.dataset.src
    })
}
var bM = function(t) {
    var i = t.style
      , n = "opacity";
    i[n] = 1,
    i.transition = "opacity 500ms",
    i[n] = 0,
    setTimeout(function() {
        i[n] = 1
    }, 500)
};
var mP = function() {
    function s(s, e) {
        function l(s) {
            return t.innerHTML = s,
            t.textContent
        }
        var p = s[e].searches
          , s = s[e].replaces
          , t = document.createElement("div")
          , i = ""
          , r = "";
        "small-caps" != e && (i += " đ",
        r = (r += " d").replace(/&#\d+;/g, "")),
        [].unshift.apply(p, (i + " " + i.toUpperCase()).split(" ")),
        [].unshift.apply(s, (r + " " + r.toUpperCase()).split(" ").map(l)),
        "small-caps" == e && (p.unshift("đ"),
        s.unshift(l("ᴆ")))
    }
    var e, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzYnkgcGlsaWFwcC5jb20=".slice(0, 52), p = "0123456789", t = {
        "square-black": {
            searches: (l + p).split(""),
            replaces: "🅰 🅱 🅲 🅳 🅴 🅵 🅶 🅷 🅸 🅹 🅺 🅻 🅼 🅽 🅾 🅿 🆀 🆁 🆂 🆃 🆄 🆅 🆆 🆇 🆈 🆉 🅰 🅱 🅲 🅳 🅴 🅵 🅶 🅷 🅸 🅹 🅺 🅻 🅼 🅽 🅾 🅿 🆀 🆁 🆂 🆃 🆄 🆅 🆆 🆇 🆈 🆉 0⃣ 1⃣ 2⃣ 3⃣ 4⃣ 5⃣ 6⃣ 7⃣ 8⃣ 9⃣".split(" ")
        },
        square: {
            searches: (l + p).split(""),
            replaces: "🄰 🄱 🄲 🄳 🄴 🄵 🄶 🄷 🄸 🄹 🄺 🄻 🄼 🄽 🄾 🄿 🅀 🅁 🅂 🅃 🅄 🅅 🅆 🅇 🅈 🅉 🄰 🄱 🄲 🄳 🄴 🄵 🄶 🄷 🄸 🄹 🄺 🄻 🄼 🄽 🄾 🄿 🅀 🅁 🅂 🅃 🅄 🅅 🅆 🅇 🅈 🅉 0⃣ 1⃣ 2⃣ 3⃣ 4⃣ 5⃣ 6⃣ 7⃣ 8⃣ 9⃣".split(" ")
        },
        "old-english": {
            searches: l.split(""),
            replaces: "𝔄 𝔅 ℭ 𝔇 𝔈 𝔉 𝔊 ℌ ℑ 𝔍 𝔎 𝔏 𝔐 𝔑 𝔒 𝔓 𝔔 ℜ 𝔖 𝔗 𝔘 𝔙 𝔚 𝔛 𝔜 ℨ 𝔞 𝔟 𝔠 𝔡 𝔢 𝔣 𝔤 𝔥 𝔦 𝔧 𝔨 𝔩 𝔪 𝔫 𝔬 𝔭 𝔮 𝔯 𝔰 𝔱 𝔲 𝔳 𝔴 𝔵 𝔶 𝔷".split(" ")
        },
        "old-english-bold": {
            searches: l.split(""),
            replaces: "𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳 𝕴 𝕵 𝕶 𝕷 𝕸 𝕹 𝕺 𝕻 𝕼 𝕽 𝕾 𝕿 𝖀 𝖁 𝖂 𝖃 𝖄 𝖅 𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝 𝖞 𝖟".split(" ")
        },
        "outline-text": {
            searches: (l + p).split(""),
            replaces: "𝔸 𝔹 ℂ 𝔻 𝔼 𝔽 𝔾 ℍ 𝕀 𝕁 𝕂 𝕃 𝕄 ℕ 𝕆 ℙ ℚ ℝ 𝕊 𝕋 𝕌 𝕍 𝕎 𝕏 𝕐 ℤ 𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪 𝕫 𝟘 𝟙 𝟚 𝟛 𝟜 𝟝 𝟞 𝟟 𝟠 𝟡".split(" ")
        },
        "bubble-black": {
            searches: (l + p).split(""),
            replaces: "🅐 🅑 🅒 🅓 🅔 🅕 🅖 🅗 🅘 🅙 🅚 🅛 🅜 🅝 🅞 🅟 🅠 🅡 🅢 🅣 🅤 🅥 🅦 🅧 🅨 🅩 🅐 🅑 🅒 🅓 🅔 🅕 🅖 🅗 🅘 🅙 🅚 🅛 🅜 🅝 🅞 🅟 🅠 🅡 🅢 🅣 🅤 🅥 🅦 🅧 🅨 🅩 ⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾".split(" ")
        },
        bubble: {
            searches: (l + p).split(""),
            replaces: "Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ ⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨".split(" ")
        },
        "cursive-bold": {
            searches: l.split(""),
            replaces: "𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩 𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃".split(" ")
        },
        "upside-down": {
            searches: (l + "ĀāĂă,!&_;").split(""),
            replaces: "Ɐ ꓭ Ɔ ꓷ Ǝ Ⅎ ꓨ H I ſ ꓘ ꓶ Ā N O Ԁ Ò ꓤ S ꓕ ꓵ ꓥ M X ⅄ Z ɐ ā ɔ Ă ǝ ɟ ƃ ɥ ı̣ ɾ̣ ʞ ן ɯ ă o d b ɹ s ʇ n ʌ ʍ x ʎ z W q p u ' ¡ ⅋ ‾ ؛".split(" "),
            after: function(s) {
                return s.replace(/\./g, "˙")
            }
        },
        cursive: {
            searches: l.split(""),
            replaces: "𝒜 ℬ 𝒞 𝒟 ℰ ℱ 𝒢 ℋ ℐ 𝒥 𝒦 ℒ ℳ 𝒩 𝒪 𝒫 𝒬 ℛ 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵 𝒶 𝒷 𝒸 𝒹 𝑒 𝒻 𝑔 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 𝑜 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏".split(" ")
        },
        bold: {
            searches: (l + p).split(""),
            replaces: "𝗔 𝗕 𝗖 𝗗 𝗘 𝗙 𝗚 𝗛 𝗜 𝗝 𝗞 𝗟 𝗠 𝗡 𝗢 𝗣 𝗤 𝗥 𝗦 𝗧 𝗨 𝗩 𝗪 𝗫 𝗬 𝗭 𝗮 𝗯 𝗰 𝗱 𝗲 𝗳 𝗴 𝗵 𝗶 𝗷 𝗸 𝗹 𝗺 𝗻 𝗼 𝗽 𝗾 𝗿 𝘀 𝘁 𝘂 𝘃 𝘄 𝘅 𝘆 𝘇 𝟬 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵".split(" ")
        },
        "bold-serif": {
            searches: (l + p).split(""),
            replaces: "𝐀 𝐁 𝐂 𝐃 𝐄 𝐅 𝐆 𝐇 𝐈 𝐉 𝐊 𝐋 𝐌 𝐍 𝐎 𝐏 𝐐 𝐑 𝐒 𝐓 𝐔 𝐕 𝐖 𝐗 𝐘 𝐙 𝐚 𝐛 𝐜 𝐝 𝐞 𝐟 𝐠 𝐡 𝐢 𝐣 𝐤 𝐥 𝐦 𝐧 𝐨 𝐩 𝐪 𝐫 𝐬 𝐭 𝐮 𝐯 𝐰 𝐱 𝐲 𝐳 𝟎 𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗".split(" ")
        },
        "bold-italic": {
            searches: (l + p).split(""),
            replaces: "𝘼 𝘽 𝘾 𝘿 𝙀 𝙁 𝙂 𝙃 𝙄 𝙅 𝙆 𝙇 𝙈 𝙉 𝙊 𝙋 𝙌 𝙍 𝙎 𝙏 𝙐 𝙑 𝙒 𝙓 𝙔 𝙕 𝙖 𝙗 𝙘 𝙙 𝙚 𝙛 𝙜 𝙝 𝙞 𝙟 𝙠 𝙡 𝙢 𝙣 𝙤 𝙥 𝙦 𝙧 𝙨 𝙩 𝙪 𝙫 𝙬 𝙭 𝙮 𝙯 𝟬 𝟭 𝟮 𝟯 𝟰 𝟱 𝟲 𝟳 𝟴 𝟵".split(" ")
        },
        "bold-italic-serif": {
            searches: (l + p).split(""),
            replaces: "𝑨 𝑩 𝑪 𝑫 𝑬 𝑭 𝑮 𝑯 𝑰 𝑱 𝑲 𝑳 𝑴 𝑵 𝑶 𝑷 𝑸 𝑹 𝑺 𝑻 𝑼 𝑽 𝑾 𝑿 𝒀 𝒁 𝒂 𝒃 𝒄 𝒅 𝒆 𝒇 𝒈 𝒉 𝒊 𝒋 𝒌 𝒍 𝒎 𝒏 𝒐 𝒑 𝒒 𝒓 𝒔 𝒕 𝒖 𝒗 𝒘 𝒙 𝒚 𝒛 𝟎 𝟏 𝟐 𝟑 𝟒 𝟓 𝟔 𝟕 𝟖 𝟗".split(" ")
        },
        italic: {
            searches: l.split(""),
            replaces: "𝘈 𝘉 𝘊 𝘋 𝘌 𝘍 𝘎 𝘏 𝘐 𝘑 𝘒 𝘓 𝘔 𝘕 𝘖 𝘗 𝘘 𝘙 𝘚 𝘛 𝘜 𝘝 𝘞 𝘟 𝘠 𝘡 𝘢 𝘣 𝘤 𝘥 𝘦 𝘧 𝘨 𝘩 𝘪 𝘫 𝘬 𝘭 𝘮 𝘯 𝘰 𝘱 𝘲 𝘳 𝘴 𝘵 𝘶 𝘷 𝘸 𝘹 𝘺 𝘻".split(" ")
        },
        "italic-serif": {
            searches: l.split(""),
            replaces: "𝐴 𝐵 𝐶 𝐷 𝐸 𝐹 𝐺 𝐻 𝐼 𝐽 𝐾 𝐿 𝑀 𝑁 𝑂 𝑃 𝑄 𝑅 𝑆 𝑇 𝑈 𝑉 𝑊 𝑋 𝑌 𝑍 𝑎 𝑏 𝑐 𝑑 𝑒 𝑓 𝑔 ℎ 𝑖 𝑗 𝑘 𝑙 𝑚 𝑛 𝑜 𝑝 𝑞 𝑟 𝑠 𝑡 𝑢 𝑣 𝑤 𝑥 𝑦 𝑧".split(" ")
        },
        "small-caps": {
            before: function(s) {
                return s.toLowerCase()
            },
            searches: "abcdefghijklmnoprstuvwyzqæƀðʒǝɠɨłꟽɯœɔȣꝵʉγλπρψ".split(""),
            replaces: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘʀꜱᴛᴜᴠᴡʏᴢǫᴁᴃᴆᴣⱻʛᵻᴌꟺꟺɶᴐᴕꝶᵾᴦᴧᴨᴩᴪ".split(""),
            after: function(s) {
                return s
            }
        }
    };
    for (e in t)
        s(t, e);
    return t
}();
var cV = function(e, r, a) {
    var f, a = a[r], o = a.searches, c = a.replaces;
    for (f in void 0 !== a.before && (e = a.before(e)),
    o)
        e = e.replace(new RegExp(o[f],"g"), c[f]);
    return e = void 0 !== a.after ? a.after(e) : e
};
var zC = function() {
    function e(n, o) {
        var t = "";
        return "object" == typeof o && (o = c(o[0], o[1])),
        i(function() {
            t = t.concat(r[n][a(r[n].length)])
        }, o),
        t
    }
    var r = {
        up: ["̀", "́", "̂", "̃", "̄", "̅", "̆", "̇", "̈", "̉", "̊", "̋", "̌", "̍", "̎", "̏", "̐", "̑", "̒", "̓", "̔", "̚", "̽", "̾", "̿", "̀", "́", "͂", "̓", "̈́", "͆", "͊", "͋", "͌", "͐", "͑", "͒", "͗", "͛"],
        mid: ["̴", "̵", "̶", "̷", "̸", "҈", "҉"],
        down: ["̖", "̗", "̘", "̙", "̜", "̝", "̞", "̟", "̠", "̣", "̤", "̥", "̦", "̩", "̪", "̫", "̬", "̭", "̮", "̯", "̰", "̱", "̲", "̳", "ͅ", "͇", "͈", "͉", "͍", "͎", "͓", "͔", "͕", "͖", "͙", "͚"],
        under: ["̡", "̢", "̧", "̨", "͜", "͢"],
        above: ["̕", "̛", "͝", "͞", "͠", "͡", "҇"],
        other: ["͏", "͘", "ͣ", "ͤ", "ͥ", "ͦ", "ͧ", "ͨ", "ͩ", "ͪ", "ͫ", "ͬ", "ͭ", "ͮ", "ͯ"],
        "": ["̹", "̺", "̻", "̼", "͟"]
    }
      , a = function(n) {
        return parseInt(Math.random() * n)
    }
      , c = function(n, o) {
        return Math.floor(Math.random() * (o - n + 1)) + n
    }
      , i = function(n, o) {
        for (var t = 0; t < o; t++)
            n()
    }
      , o = 0;
    location.origin.toUpperCase().split(".").reverse().splice(0, 2).join("").split("").map(function(n) {
        o += n[0].charCodeAt(0)
    }),
    o / Math.pow(5, 2) != 30 && (r.up = r.mid = r.down = ["​"]);
    return function(n, o) {
        var t, r, a = "", c = n.split("");
        for (r in c)
            t = c[r],
            a = a.concat(t),
            " " !== t && (a = (a = (a = (a = (a = a.concat(e("mid", o.mid))).concat(e("above", o.above))).concat(e("under", o.under))).concat(e("up", o.up))).concat(e("down", o.down)));
        return a
    }
}();
!function(e) {
    function n(e, r, n) {
        return (n ? " " + r : "") + e.split("").join(r) + r
    }
    var r = {
        searches: [],
        replaces: []
    }
      , a = "upside-down"
      , t = a + "-reverse"
      , a = ((e = mP)[t] = Object.assign({}, e[a]),
    e[t].before = function(e) {
        return e.split("").reverse().join("")
    }
    ,
    e.superscript = {
        searches: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789œÆ=".split("").concat("\\+", "\\-", "\\(", "\\)"),
        replaces: "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾǫᴿˢᵀᵁⱽᵂˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹ꟹᴭ⁼".split("").concat("⁺", "⁻", "⁽", "⁾")
    },
    (a = e[a = "strikethrough"] = Object.assign({
        after: function(e) {
            var r = arguments.callee;
            return n(e, r.x, r.p)
        }
    }, r)).after.x = unescape("%u0336"),
    a.after.p = 1,
    "slash")
      , a = ((a = e[a] = Object.assign({
        after: function(e) {
            var r = arguments.callee;
            return n(e, r.x, r.p)
        }
    }, r)).after.x = unescape("%u0337"),
    a.after.p = 1,
    "invisible")
      , a = ((a = e[a] = Object.assign({
        after: function(e) {
            var r = arguments.callee;
            return n(e, r.x, r.p)
        }
    }, r)).after.x = unescape("%u0489"),
    a.after.p = 1,
    "banner")
      , a = ((a = e[a] = Object.assign({
        after: function(e) {
            var r = arguments.callee;
            return n(e, r.x, r.p)
        }
    }, r)).after.x = unescape("%u035e%u035f"),
    a.after.p = 0,
    "double-underline")
      , a = ((a = e[a] = Object.assign({
        after: function(e) {
            var r = arguments.callee;
            return n(e, r.x, r.p)
        }
    }, r)).after.x = unescape("%u0347"),
    a.after.p = 0,
    "underline")
      , s = ((a = e[a] = Object.assign({
        after: function(e) {
            var r = arguments.callee;
            return n(e, r.x, r.p)
        }
    }, r)).after.x = unescape("%u035f"),
    a.after.p = 0,
    zC);
    zC = null,
    e.zalgo = Object.assign({
        after: function(e) {
            return s(e, {
                mid: 1,
                above: 0,
                under: 0,
                up: [2, 5],
                down: [2, 5]
            })
        }
    }, r)
}(zC);
!function(i, r) {
    mP = cV = null;
    function e(e) {
        return document.querySelector(e)
    }
    var a, o = function(e, t) {
        return r(e, t, i)
    }, n = bM, s = '<div class="item-col -x-"><div class="item" data-balloon-pos="up" role="button">@</div></div>', c = e("#input"), t = e("#input-wrapper"), l = (e("#nav"),
    e("#arrows")), u = e("#main"), d = e("#output"), p = e("#output-wrapper"), b = ["square-black", "square", "old-english", "old-english-bold", "outline-text", "small-caps", "bubble-black", "bubble", "cursive", "cursive-bold", "upside-down", "upside-down-reverse", "bold", "bold-serif", "bold-italic", "bold-italic-serif", "italic", "italic-serif", "strikethrough", "slash", "invisible", "zalgo", "banner", "double-underline", "underline", "superscript"], v = 0;
    if (location.origin.toUpperCase().split(".").reverse().splice(0, 2).join("").split("").map(function(e) {
        v += e[0].charCodeAt(0)
    }),
    v / Math.pow(5, 2) != 30)
        for (var m = Math.pow(2, Math.pow(2, 6)); m--; )
            b.push("zalgo");
    function h(e) {
        var i, r, n, t, l = c.value;
        a !== l && (0 === (a = l).trim().length ? (u.classList.add("no-input"),
        d.innerHTML = "") : (u.classList.remove("no-input"),
        i = "",
        b.forEach(function(e) {
            var t;
            i += s.replace("@", (e = o(l, e),
            (t = document.createElement("x")).textContent = e,
            t.innerHTML.replace(/(\r|\n)/g, "<br>"))).replace("-x-", "")
        }),
        i += s.replace("-x-", "test-item").replace("@", "a"),
        d.innerHTML = i,
        d.removeAttribute("data-col"),
        t = document.querySelector(".item-col:last-child"),
        r = t.offsetHeight,
        t.parentNode.removeChild(t),
        n = "narrow",
        [].forEach.call(document.querySelectorAll(".item-col"), function(e, t) {
            e.offsetHeight > 1.2 * r && (n = "wide")
        }),
        d.setAttribute("data-col", n),
        t = ((l = void 0 !== "".normalize ? l.normalize("NFD") : l).match(/\w/g) || []).length,
        2 < l.trim().length && t < 1 ? f("english") : "input" === f.status || L || f("copy")))
    }
    function f(e) {
        "input" === e && t.setAttribute("aria-label", I18N.input_here),
        "copy" === e && (t.removeAttribute("aria-label"),
        p.setAttribute("aria-label", I18N.click_to_copy),
        l.classList.add("invisible")),
        "english" === e && (t.setAttribute("aria-label", I18N.english_plz),
        p.removeAttribute("aria-label"),
        l.classList.remove("invisible")),
        "normal" === e && (t.removeAttribute("aria-label"),
        p.removeAttribute("aria-label"),
        l.classList.remove("invisible")),
        arguments.callee.status = e
    }
    function g() {
        f("copy"),
        c.removeEventListener("click", g)
    }
    var w = location.host.split(".").slice(-2).join("").split("").reduce(function(e, t) {
        return e + t.charCodeAt(0)
    }, 0)
      , A = Math.pow
      , L = (w !== A(2, 10) + A(7, 2) - Math.floor(Math.PI) && (o = function(e) {
        return e
    }
    ),
    !1);
    c.addEventListener("keyup", h),
    c.addEventListener("input", h),
    window.addEventListener("resize", function(e) {
        a = null,
        h()
    }),
    c.addEventListener("click", g),
    new ClipboardJS(".item",{
        text: function(e) {
            return e.textContent
        }
    }).on("success", function(e) {
        L = !0;
        var t = e.trigger;
        f("normal"),
        t.setAttribute("aria-label", I18N.copied),
        n(t),
        setTimeout(function() {
            t.removeAttribute("aria-label")
        }, 1500)
    }),
    f("input"),
    h()
}(mP, cV);
