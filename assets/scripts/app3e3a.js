! function() {

    function l(t, e, i, n, s, o, a) {
        try {
            var r = t[o](a),
                l = r.value
        } catch (t) {
            return void i(t)
        }
        r.done ? e(l) : Promise.resolve(l).then(n, s)
    }

    function s(r) {
        return function() {
            var t = this,
                a = arguments;
            return new Promise(function(e, i) {
                var n = r.apply(t, a);

                function s(t) {
                    l(n, e, i, s, o, "next", t)
                }

                function o(t) {
                    l(n, e, i, s, o, "throw", t)
                }
                s(void 0)
            })
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function a(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function u(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable
            }))), n.forEach(function(t) {
                u(e, t, i[t])
            })
        }
        return e
    }

    function c(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && i(t, e)
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function h(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function f(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? h(t) : e
    }

    function p(t, e, i) {
        return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var n = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                return t
            }(t, e);
            if (n) {
                var s = Object.getOwnPropertyDescriptor(n, e);
                return s.get ? s.get.call(i) : s.value
            }
        })(t, e, i || t)
    }

    function m(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var i = [],
                n = !0,
                s = !1,
                o = void 0;
            try {
                for (var a, r = t[Symbol.iterator](); !(n = (a = r.next()).done) && (i.push(a.value), !e || i.length !== e); n = !0);
            } catch (t) {
                s = !0, o = t
            } finally {
                try {
                    n || null == r.return || r.return()
                } finally {
                    if (s) throw o
                }
            }
            return i
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function e(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var t = "Locomotive",
        g = $(document),
        v = $(window),
        y = $(document.documentElement).removeClass("has-no-js").addClass("has-js"),
        w = $(document.body),
        T = $(".js-lisa-toggle-bg"),
        E = (y.data("debug"), document.getElementsByTagName("html")[0]),
        k = (document.getElementsByTagName("body")[0], "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {});

    function b(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    b(function(t) {
        var e, i;
        e = k, i = function() {
            function g(t, e, i) {
                if (i) {
                    var n = document.createDocumentFragment(),
                        s = !e.hasAttribute("viewBox") && i.getAttribute("viewBox");
                    s && e.setAttribute("viewBox", s);
                    for (var o = i.cloneNode(!0); o.childNodes.length;) n.appendChild(o.firstChild);
                    t.appendChild(n)
                }
            }

            function v(n) {
                n.onreadystatechange = function() {
                    if (4 === n.readyState) {
                        var i = n._cachedDocument;
                        i || ((i = n._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = n.responseText, n._cachedTarget = {}), n._embeds.splice(0).map(function(t) {
                            var e = n._cachedTarget[t.id];
                            e || (e = n._cachedTarget[t.id] = i.getElementById(t.id)), g(t.parent, t.svg, e)
                        })
                    }
                }, n.onreadystatechange()
            }

            function y(t) {
                for (var e = t;
                    "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode););
                return e
            }
            return function(t) {
                var c, u = Object(t),
                    e = window.top !== window.self;
                c = "polyfill" in u ? u.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && e;
                var d = {},
                    f = window.requestAnimationFrame || setTimeout,
                    p = document.getElementsByTagName("use"),
                    m = 0;
                c && function t() {
                    for (var e = 0; e < p.length;) {
                        var i = p[e],
                            n = i.parentNode,
                            s = y(n),
                            o = i.getAttribute("xlink:href") || i.getAttribute("href");
                        if (!o && u.attributeName && (o = i.getAttribute(u.attributeName)), s && o) {
                            if (c)
                                if (!u.validate || u.validate(o, s, i)) {
                                    n.removeChild(i);
                                    var a = o.split("#"),
                                        r = a.shift(),
                                        l = a.join("#");
                                    if (r.length) {
                                        var h = d[r];
                                        h || ((h = d[r] = new XMLHttpRequest).open("GET.html", r), h.send(), h._embeds = []), h._embeds.push({
                                            parent: n,
                                            svg: s,
                                            id: l
                                        }), v(h)
                                    } else g(n, s, document.getElementById(l))
                                } else ++e, ++m
                        } else ++e
                    }(!p.length || 0 < p.length - m) && f(t, 67)
                }()
            }
        }, t.exports ? t.exports = i() : e.svg4everybody = i()
    });
    var S = b(function(t) {
        var e, i;
        e = k, i = function() {
            var S = !0;

            function a(i) {
                function t(t) {
                    var e = i.match(t);
                    return e && 1 < e.length && e[1] || ""
                }

                function e(t) {
                    var e = i.match(t);
                    return e && 1 < e.length && e[2] || ""
                }
                var n, s = t(/(ipod|iphone|ipad)/i).toLowerCase(),
                    o = !/like android/i.test(i) && /android/i.test(i),
                    a = /nexus\s*[0-6]\s*/i.test(i),
                    r = !a && /nexus\s*[0-9]+/i.test(i),
                    l = /CrOS/.test(i),
                    h = /silk/i.test(i),
                    c = /sailfish/i.test(i),
                    u = /tizen/i.test(i),
                    d = /(web|hpw)(o|0)s/i.test(i),
                    f = /windows phone/i.test(i),
                    p = (/SamsungBrowser/i.test(i), !f && /windows/i.test(i)),
                    m = !s && !h && /macintosh/i.test(i),
                    g = !o && !c && !u && !d && /linux/i.test(i),
                    v = e(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
                    y = t(/version\/(\d+(\.\d+)?)/i),
                    w = /tablet/i.test(i) && !/tablet pc/i.test(i),
                    T = !w && /[^-]mobi/i.test(i),
                    E = /xbox/i.test(i);
                /opera/i.test(i) ? n = {
                    name: "Opera",
                    opera: S,
                    version: y || t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                } : /opr\/|opios/i.test(i) ? n = {
                    name: "Opera",
                    opera: S,
                    version: t(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || y
                } : /SamsungBrowser/i.test(i) ? n = {
                    name: "Samsung Internet for Android",
                    samsungBrowser: S,
                    version: y || t(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                } : /Whale/i.test(i) ? n = {
                    name: "NAVER Whale browser",
                    whale: S,
                    version: t(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
                } : /MZBrowser/i.test(i) ? n = {
                    name: "MZ Browser",
                    mzbrowser: S,
                    version: t(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
                } : /coast/i.test(i) ? n = {
                    name: "Opera Coast",
                    coast: S,
                    version: y || t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                } : /focus/i.test(i) ? n = {
                    name: "Focus",
                    focus: S,
                    version: t(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
                } : /yabrowser/i.test(i) ? n = {
                    name: "Yandex Browser",
                    yandexbrowser: S,
                    version: y || t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                } : /ucbrowser/i.test(i) ? n = {
                    name: "UC Browser",
                    ucbrowser: S,
                    version: t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                } : /mxios/i.test(i) ? n = {
                    name: "Maxthon",
                    maxthon: S,
                    version: t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                } : /epiphany/i.test(i) ? n = {
                    name: "Epiphany",
                    epiphany: S,
                    version: t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                } : /puffin/i.test(i) ? n = {
                    name: "Puffin",
                    puffin: S,
                    version: t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                } : /sleipnir/i.test(i) ? n = {
                    name: "Sleipnir",
                    sleipnir: S,
                    version: t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                } : /k-meleon/i.test(i) ? n = {
                    name: "K-Meleon",
                    kMeleon: S,
                    version: t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                } : f ? (n = {
                    name: "Windows Phone",
                    osname: "Windows Phone",
                    windowsphone: S
                }).version = v ? (n.msedge = S, v) : (n.msie = S, t(/iemobile\/(\d+(\.\d+)?)/i)) : /msie|trident/i.test(i) ? n = {
                    name: "Internet Explorer",
                    msie: S,
                    version: t(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                } : l ? n = {
                    name: "Chrome",
                    osname: "Chrome OS",
                    chromeos: S,
                    chromeBook: S,
                    chrome: S,
                    version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : /edg([ea]|ios)/i.test(i) ? n = {
                    name: "Microsoft Edge",
                    msedge: S,
                    version: v
                } : /vivaldi/i.test(i) ? n = {
                    name: "Vivaldi",
                    vivaldi: S,
                    version: t(/vivaldi\/(\d+(\.\d+)?)/i) || y
                } : c ? n = {
                    name: "Sailfish",
                    osname: "Sailfish OS",
                    sailfish: S,
                    version: t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                } : /seamonkey\//i.test(i) ? n = {
                    name: "SeaMonkey",
                    seamonkey: S,
                    version: t(/seamonkey\/(\d+(\.\d+)?)/i)
                } : /firefox|iceweasel|fxios/i.test(i) ? (n = {
                    name: "Firefox",
                    firefox: S,
                    version: t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(i) && (n.firefoxos = S, n.osname = "Firefox OS")) : h ? n = {
                    name: "Amazon Silk",
                    silk: S,
                    version: t(/silk\/(\d+(\.\d+)?)/i)
                } : /phantom/i.test(i) ? n = {
                    name: "PhantomJS",
                    phantom: S,
                    version: t(/phantomjs\/(\d+(\.\d+)?)/i)
                } : /slimerjs/i.test(i) ? n = {
                    name: "SlimerJS",
                    slimer: S,
                    version: t(/slimerjs\/(\d+(\.\d+)?)/i)
                } : /blackberry|\bbb\d+/i.test(i) || /rim\stablet/i.test(i) ? n = {
                    name: "BlackBerry",
                    osname: "BlackBerry OS",
                    blackberry: S,
                    version: y || t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                } : d ? (n = {
                    name: "WebOS",
                    osname: "WebOS",
                    webos: S,
                    version: y || t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                }, /touchpad\//i.test(i) && (n.touchpad = S)) : /bada/i.test(i) ? n = {
                    name: "Bada",
                    osname: "Bada",
                    bada: S,
                    version: t(/dolfin\/(\d+(\.\d+)?)/i)
                } : u ? n = {
                    name: "Tizen",
                    osname: "Tizen",
                    tizen: S,
                    version: t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || y
                } : /qupzilla/i.test(i) ? n = {
                    name: "QupZilla",
                    qupzilla: S,
                    version: t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || y
                } : /chromium/i.test(i) ? n = {
                    name: "Chromium",
                    chromium: S,
                    version: t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || y
                } : /chrome|crios|crmo/i.test(i) ? n = {
                    name: "Chrome",
                    chrome: S,
                    version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : o ? n = {
                    name: "Android",
                    version: y
                } : /safari|applewebkit/i.test(i) ? (n = {
                    name: "Safari",
                    safari: S
                }, y && (n.version = y)) : s ? (n = {
                    name: "iphone" == s ? "iPhone" : "ipad" == s ? "iPad" : "iPod"
                }, y && (n.version = y)) : n = /googlebot/i.test(i) ? {
                    name: "Googlebot",
                    googlebot: S,
                    version: t(/googlebot\/(\d+(\.\d+))/i) || y
                } : {
                    name: t(/^(.*)\/(.*) /),
                    version: e(/^(.*)\/(.*) /)
                }, !n.msedge && /(apple)?webkit/i.test(i) ? (/(apple)?webkit\/537\.36/i.test(i) ? (n.name = n.name || "Blink", n.blink = S) : (n.name = n.name || "Webkit", n.webkit = S), !n.version && y && (n.version = y)) : !n.opera && /gecko\//i.test(i) && (n.name = n.name || "Gecko", n.gecko = S, n.version = n.version || t(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !o && !n.silk ? !n.windowsphone && s ? (n[s] = S, n.ios = S, n.osname = "iOS") : m ? (n.mac = S, n.osname = "macOS") : E ? (n.xbox = S, n.osname = "Xbox") : p ? (n.windows = S, n.osname = "Windows") : g && (n.linux = S, n.osname = "Linux") : (n.android = S, n.osname = "Android");
                var k = "";
                n.windows ? k = function(t) {
                    switch (t) {
                        case "NT":
                            return "NT";
                        case "XP":
                            return "XP";
                        case "NT 5.0":
                            return "2000";
                        case "NT 5.1":
                            return "XP";
                        case "NT 5.2":
                            return "2003";
                        case "NT 6.0":
                            return "Vista";
                        case "NT 6.1":
                            return "7";
                        case "NT 6.2":
                            return "8";
                        case "NT 6.3":
                            return "8.1";
                        case "NT 10.0":
                            return "10";
                        default:
                            return
                    }
                }(t(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? k = t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? k = (k = t(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : s ? k = (k = t(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? k = t(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? k = t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? k = t(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? k = t(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (k = t(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (n.osversion = k);
                var b = !n.windows && k.split(".")[0];
                return w || r || "ipad" == s || o && (3 == b || 4 <= b && !T) || n.silk ? n.tablet = S : (T || "iphone" == s || "ipod" == s || o || a || n.blackberry || n.webos || n.bada) && (n.mobile = S), n.msedge || n.msie && 10 <= n.version || n.yandexbrowser && 15 <= n.version || n.vivaldi && 1 <= n.version || n.chrome && 20 <= n.version || n.samsungBrowser && 4 <= n.version || n.whale && 1 === C([n.version, "1.0"]) || n.mzbrowser && 1 === C([n.version, "6.0"]) || n.focus && 1 === C([n.version, "1.0"]) || n.firefox && 20 <= n.version || n.safari && 6 <= n.version || n.opera && 10 <= n.version || n.ios && n.osversion && 6 <= n.osversion.split(".")[0] || n.blackberry && 10.1 <= n.version || n.chromium && 20 <= n.version ? n.a = S : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = S : n.x = S, n
            }
            var r = a("undefined" != typeof navigator && navigator.userAgent || "");

            function n(t) {
                return t.split(".").length
            }

            function s(t, e) {
                var i, n = [];
                if (Array.prototype.map) return Array.prototype.map.call(t, e);
                for (i = 0; i < t.length; i++) n.push(e(t[i]));
                return n
            }

            function C(t) {
                for (var i = Math.max(n(t[0]), n(t[1])), e = s(t, function(t) {
                        var e = i - n(t);
                        return s((t += new Array(e + 1).join(".0")).split("."), function(t) {
                            return new Array(20 - t.length).join("0") + t
                        }).reverse()
                    }); 0 <= --i;) {
                    if (e[0][i] > e[1][i]) return 1;
                    if (e[0][i] !== e[1][i]) return -1;
                    if (0 === i) return 0
                }
            }

            function o(t, e, i) {
                var n = r;
                "string" == typeof e && (i = e, e = void 0), void 0 === e && (e = !1), i && (n = a(i));
                var s = "" + n.version;
                for (var o in t)
                    if (t.hasOwnProperty(o) && n[o]) {
                        if ("string" != typeof t[o]) throw new Error("Browser version in the minVersion map should be a string: " + o + ": " + String(t));
                        return C([s, t[o]]) < 0
                    } return e
            }
            return r.test = function(t) {
                for (var e = 0; e < t.length; ++e) {
                    var i = t[e];
                    if ("string" == typeof i && i in r) return !0
                }
                return !1
            }, r.isUnsupportedBrowser = o, r.compareVersions = C, r.check = function(t, e, i) {
                return !o(t, e, i)
            }, r._detect = a, r.detect = a, r
        }, t.exports ? t.exports = i() : e.bowser = i()
    });
    b(function(t) {
        var e = function(o) {
            var l, t = Object.prototype,
                h = t.hasOwnProperty,
                e = "function" == typeof Symbol ? Symbol : {},
                s = e.iterator || "@@iterator",
                i = e.asyncIterator || "@@asyncIterator",
                n = e.toStringTag || "@@toStringTag";

            function a(t, e, i, n) {
                var o, a, r, l, s = e && e.prototype instanceof v ? e : v,
                    h = Object.create(s.prototype),
                    c = new M(n || []);
                return h._invoke = (o = t, a = i, r = c, l = d, function(t, e) {
                    if (l === p) throw new Error("Generator is already running");
                    if (l === m) {
                        if ("throw" === t) throw e;
                        return L()
                    }
                    for (r.method = t, r.arg = e;;) {
                        var i = r.delegate;
                        if (i) {
                            var n = S(i, r);
                            if (n) {
                                if (n === g) continue;
                                return n
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (l === d) throw l = m, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        l = p;
                        var s = u(o, a, r);
                        if ("normal" === s.type) {
                            if (l = r.done ? m : f, s.arg === g) continue;
                            return {
                                value: s.arg,
                                done: r.done
                            }
                        }
                        "throw" === s.type && (l = m, r.method = "throw", r.arg = s.arg)
                    }
                }), h
            }

            function u(t, e, i) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, i)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            o.wrap = a;
            var d = "suspendedStart",
                f = "suspendedYield",
                p = "executing",
                m = "completed",
                g = {};

            function v() {}

            function r() {}

            function c() {}
            var y = {};
            y[s] = function() {
                return this
            };
            var w = Object.getPrototypeOf,
                T = w && w(w($([])));
            T && T !== t && h.call(T, s) && (y = T);
            var E = c.prototype = v.prototype = Object.create(y);

            function k(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function b(l) {
                var e;
                this._invoke = function(i, n) {
                    function t() {
                        return new Promise(function(t, e) {
                            ! function e(t, i, n, s) {
                                var o = u(l[t], l, i);
                                if ("throw" !== o.type) {
                                    var a = o.arg,
                                        r = a.value;
                                    return r && "object" == typeof r && h.call(r, "__await") ? Promise.resolve(r.__await).then(function(t) {
                                        e("next", t, n, s)
                                    }, function(t) {
                                        e("throw", t, n, s)
                                    }) : Promise.resolve(r).then(function(t) {
                                        a.value = t, n(a)
                                    }, function(t) {
                                        return e("throw", t, n, s)
                                    })
                                }
                                s(o.arg)
                            }(i, n, t, e)
                        })
                    }
                    return e = e ? e.then(t, t) : t()
                }
            }

            function S(t, e) {
                var i = t.iterator[e.method];
                if (i === l) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = l, S(t, e), "throw" === e.method)) return g;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return g
                }
                var n = u(i, t.iterator, e.arg);
                if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, g;
                var s = n.arg;
                return s ? s.done ? (e[t.resultName] = s.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = l), e.delegate = null, g) : s : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, g)
            }

            function C(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function x(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function M(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(C, this), this.reset(!0)
            }

            function $(e) {
                if (e) {
                    var t = e[s];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var i = -1,
                            n = function t() {
                                for (; ++i < e.length;)
                                    if (h.call(e, i)) return t.value = e[i], t.done = !1, t;
                                return t.value = l, t.done = !0, t
                            };
                        return n.next = n
                    }
                }
                return {
                    next: L
                }
            }

            function L() {
                return {
                    value: l,
                    done: !0
                }
            }
            return r.prototype = E.constructor = c, c.constructor = r, c[n] = r.displayName = "GeneratorFunction", o.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === r || "GeneratorFunction" === (e.displayName || e.name))
            }, o.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c, n in t || (t[n] = "GeneratorFunction")), t.prototype = Object.create(E), t
            }, o.awrap = function(t) {
                return {
                    __await: t
                }
            }, k(b.prototype), b.prototype[i] = function() {
                return this
            }, o.AsyncIterator = b, o.async = function(t, e, i, n) {
                var s = new b(a(t, e, i, n));
                return o.isGeneratorFunction(e) ? s : s.next().then(function(t) {
                    return t.done ? t.value : s.next()
                })
            }, k(E), E[n] = "Generator", E[s] = function() {
                return this
            }, E.toString = function() {
                return "[object Generator]"
            }, o.keys = function(i) {
                var n = [];
                for (var t in i) n.push(t);
                return n.reverse(),
                    function t() {
                        for (; n.length;) {
                            var e = n.pop();
                            if (e in i) return t.value = e, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
            }, o.values = $, M.prototype = {
                constructor: M,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = l, this.done = !1, this.delegate = null, this.method = "next", this.arg = l, this.tryEntries.forEach(x), !t)
                        for (var e in this) "t" === e.charAt(0) && h.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = l)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(i) {
                    if (this.done) throw i;
                    var n = this;

                    function t(t, e) {
                        return o.type = "throw", o.arg = i, n.next = t, e && (n.method = "next", n.arg = l), !!e
                    }
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var s = this.tryEntries[e],
                            o = s.completion;
                        if ("root" === s.tryLoc) return t("end");
                        if (s.tryLoc <= this.prev) {
                            var a = h.call(s, "catchLoc"),
                                r = h.call(s, "finallyLoc");
                            if (a && r) {
                                if (this.prev < s.catchLoc) return t(s.catchLoc, !0);
                                if (this.prev < s.finallyLoc) return t(s.finallyLoc)
                            } else if (a) {
                                if (this.prev < s.catchLoc) return t(s.catchLoc, !0)
                            } else {
                                if (!r) throw new Error("try statement without catch or finally");
                                if (this.prev < s.finallyLoc) return t(s.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                        var n = this.tryEntries[i];
                        if (n.tryLoc <= this.prev && h.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var s = n;
                            break
                        }
                    }
                    s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                    var o = s ? s.completion : {};
                    return o.type = t, o.arg = e, s ? (this.method = "next", this.next = s.finallyLoc, g) : this.complete(o)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var i = this.tryEntries[e];
                        if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), x(i), g
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var i = this.tryEntries[e];
                        if (i.tryLoc === t) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                                var s = n.arg;
                                x(i)
                            }
                            return s
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, i) {
                    return this.delegate = {
                        iterator: $(t),
                        resultName: e,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = l), g
                }
            }, o
        }(t.exports);
        try {
            regeneratorRuntime = e
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(e)
        }
    });

    function M(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function C(t, e) {
        for (var i = 0, n = t.length; i < n; i++)
            if (t[i] == e) return !0;
        return !1
    }

    function x(t) {
        for (var e = t.length - 1; 0 < e; e--) {
            var i = Math.floor(Math.random() * (e + 1)),
                n = [t[i], t[e]];
            t[e] = n[0], t[i] = n[1]
        }
        return t
    }

    function L(t, e) {
        for (var i = e[0], n = Math.abs(t - i), s = 0; s < e.length; s++) {
            var o = Math.abs(t - e[s]);
            o < n && (n = o, i = e[s])
        }
        return i
    }

    function R(t) {
        var e = t.attributes,
            i = /^data\-(.+)$/,
            n = {};
        for (var s in e)
            if (e[s]) {
                var o = e[s].name;
                if (o) {
                    var a = o.match(i);
                    a && (n[a[1]] = I(t.getAttribute(o)))
                }
            } return n
    }
    var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;

    function I(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : O.test(t) ? JSON.parse(t) : t)
    }
    var P = function() {
            function e(t) {
                o(this, e), this.defaults = {
                    name: "load",
                    loadingClass: "is-loading",
                    loadedClass: "is-loaded",
                    readyClass: "is-ready",
                    transitionsPrefix: "is-",
                    enterDelay: 0,
                    exitDelay: 0,
                    isLoaded: !1,
                    isEntered: !1,
                    isUrl: !1,
                    transitionContainer: null
                }, Object.assign(this, this.defaults, t), this.options = t, this.namespace = "modular", this.html = document.documentElement, this.href = window.location.href, this.container = "data-" + this.name + "-container", this.subContainer = !1, this.prevTransition = null, this.loadAttributes = ["src", "srcset", "style", "href"], this.isInserted = !1, this.isLoading = !1, this.enterTimeout = !1, this.controller = new AbortController, this.classContainer = this.html, this.isChrome = -1 != navigator.userAgent.indexOf("Chrome"), this.init()
            }
            return a(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    window.addEventListener("popstate", function(t) {
                        return e.checkState(t)
                    }, !1), this.html.addEventListener("click", function(t) {
                        return e.checkClick(t)
                    }, !1), this.loadEls(document)
                }
            }, {
                key: "checkClick",
                value: function(t) {
                    if (!t.ctrlKey && !t.metaKey)
                        for (var e = t.target; e && e !== document;) {
                            if (e.matches("a")) {
                                t.preventDefault(), this.reset(), this.getClickOptions(e);
                                break
                            }
                            e = e.parentNode
                        }
                }
            }, {
                key: "checkState",
                value: function() {
                    this.reset(), this.getStateOptions()
                }
            }, {
                key: "reset",
                value: function() {
                    this.isLoading && (this.controller.abort(), this.isLoading = !1, this.controller = new AbortController), window.clearTimeout(this.enterTimeout), this.isInserted && this.removeContainer(), this.classContainer = this.html, Object.assign(this, this.defaults, this.options)
                }
            }, {
                key: "getClickOptions",
                value: function(t) {
                    this.transition = t.getAttribute("data-" + this.name), this.isUrl = t.getAttribute("data-" + this.name + "-url");
                    var e = t.getAttribute("href");
                    "_blank" != t.getAttribute("target") ? "false" != this.transition ? e.startsWith("#") || this.setOptions(e, !0) : window.location = e : window.open(e, "_blank")
                }
            }, {
                key: "getStateOptions",
                value: function() {
                    this.transition = history.state;
                    var t = window.location.href;
                    this.setOptions(t)
                }
            }, {
                key: "setOptions",
                value: function(t, e) {
                    var i, n = "[" + this.container + "]";
                    this.transition && "true" != this.transition && (this.transitionContainer = "[" + this.container + '="' + this.transition + '"]', this.loadingClass = this.transitions[this.transition].loadingClass || this.loadingClass, this.loadedClass = this.transitions[this.transition].loadedClass || this.loadedClass, this.readyClass = this.transitions[this.transition].readyClass || this.readyClass, this.transitionsPrefix = this.transitions[this.transition].transitionsPrefix || this.transitionsPrefix, this.enterDelay = this.transitions[this.transition].enterDelay || this.enterDelay, this.exitDelay = this.transitions[this.transition].exitDelay || this.exitDelay, i = document.querySelector(this.transitionContainer)), this.subContainer = i ? (n = this.transitionContainer, this.oldContainer = i, this.classContainer = this.oldContainer.parentNode, this.subContainer || history.replaceState(this.transition, null, this.href), !0) : (this.oldContainer = document.querySelector(n), this.subContainer && history.replaceState(this.prevTransition, null, this.href), !1), this.href = t, this.parentContainer = this.oldContainer.parentNode, null != this.isUrl && "false" != this.isUrl && 0 != this.isUrl ? history.pushState(this.transition, null, t) : (this.oldContainer.classList.add("is-old"), this.setLoading(), this.startEnterDelay(), this.goTo(t, n, e))
                }
            }, {
                key: "setLoading",
                value: function() {
                    this.classContainer.classList.remove(this.loadedClass, this.readyClass), this.classContainer.classList.add(this.loadingClass), this.classContainer.classList.remove(this.transitionsPrefix + this.prevTransition), this.transition && this.classContainer.classList.add(this.transitionsPrefix + this.transition), this.subContainer || (this.prevTransition = this.transition);
                    var t = new Event(this.namespace + "loading");
                    window.dispatchEvent(t)
                }
            }, {
                key: "startEnterDelay",
                value: function() {
                    var t = this;
                    this.enterTimeout = window.setTimeout(function() {
                        t.isEntered = !0, t.isLoaded && t.transitionContainers()
                    }, this.enterDelay)
                }
            }, {
                key: "goTo",
                value: function(t, i, e) {
                    var n = this;
                    this.isLoading = !0;
                    var s = this.controller.signal;
                    fetch(t, {
                        signal: s
                    }).then(function(t) {
                        return t.text()
                    }).then(function(t) {
                        var e = new DOMParser;
                        n.data = e.parseFromString(t, "text/html"), n.newContainer = n.data.querySelector(i), n.newContainer.classList.add("is-new"), n.parentNewContainer = n.newContainer.parentNode, n.hideContainer(), n.parentContainer.insertBefore(n.newContainer, n.oldContainer), n.isInserted = !0, n.setSvgs(), n.isLoaded = !0, n.isEntered && n.transitionContainers(), n.loadEls(n.newContainer), n.isLoading = !1
                    }).catch(function(t) {}), e && history.pushState(this.transition, null, t)
                }
            }, {
                key: "transitionContainers",
                value: function() {
                    var t = this;
                    this.setAttributes(), this.showContainer(), this.setLoaded(), setTimeout(function() {
                        t.removeContainer(), t.setReady()
                    }, this.exitDelay)
                }
            }, {
                key: "setSvgs",
                value: function() {
                    if (this.isChrome) {
                        var t = this.newContainer.querySelectorAll("use");
                        t.length && t.forEach(function(t) {
                            var e = t.getAttribute("xlink:href");
                            if (e) t.parentNode.innerHTML = '<use xlink:href="' + e + '"></use>';
                            else {
                                var i = t.getAttribute("href");
                                i && (t.parentNode.innerHTML = '<use href="' + i + '"></use>')
                            }
                        })
                    }
                }
            }, {
                key: "setAttributes",
                value: function() {
                    var s, t, o = this,
                        e = this.data.getElementsByTagName("title")[0],
                        i = this.data.head.querySelector('meta[name="description"]'),
                        n = document.head.querySelector('meta[name="description"]');
                    s = this.subContainer ? (t = this.parentNewContainer, document.querySelector(this.transitionContainer).parentNode) : (t = this.data.querySelector("html"), document.querySelector("html"));
                    var a = Object.assign({}, t.dataset);
                    e && (document.title = e.innerHTML), n && i && n.setAttribute("content", i.getAttribute("content")), a && Object.entries(a).forEach(function(t) {
                        var e = m(t, 2),
                            i = e[0],
                            n = e[1];
                        s.setAttribute("data-" + o.toDash(i), n)
                    })
                }
            }, {
                key: "toDash",
                value: function(t) {
                    return t.split(/(?=[A-Z])/).join("-").toLowerCase()
                }
            }, {
                key: "hideContainer",
                value: function() {
                    this.newContainer.style.visibility = "hidden", this.newContainer.style.height = 0, this.newContainer.style.overflow = "hidden"
                }
            }, {
                key: "showContainer",
                value: function() {
                    this.newContainer.style.visibility = "", this.newContainer.style.height = "", this.newContainer.style.overflow = ""
                }
            }, {
                key: "loadEls",
                value: function(e) {
                    var i = this,
                        o = [];
                    this.loadAttributes.forEach(function(n) {
                        var s = "data-" + i.name + "-" + n,
                            t = e.querySelectorAll("[" + s + "]");
                        t.length && t.forEach(function(e) {
                            var t = e.getAttribute(s);
                            if (e.setAttribute(n, t), "src" == n || "srcset" == n) {
                                var i = new Promise(function(t) {
                                    e.onload = function() {
                                        return t(e)
                                    }
                                });
                                o.push(i)
                            }
                        })
                    }), Promise.all(o).then(function(t) {
                        var e = new Event(i.namespace + "images");
                        window.dispatchEvent(e)
                    })
                }
            }, {
                key: "setLoaded",
                value: function() {
                    this.classContainer.classList.add(this.loadedClass);
                    var t = new Event(this.namespace + "loaded");
                    window.dispatchEvent(t)
                }
            }, {
                key: "removeContainer",
                value: function() {
                    this.parentContainer.removeChild(this.oldContainer), this.newContainer.classList.remove("is-new"), this.isInserted = !1
                }
            }, {
                key: "setReady",
                value: function() {
                    this.classContainer.classList.add(this.readyClass);
                    var t = new Event(this.namespace + "ready");
                    window.dispatchEvent(t)
                }
            }, {
                key: "on",
                value: function(t, e) {
                    var i = this;
                    window.addEventListener(this.namespace + t, function() {
                        switch (t) {
                            case "loading":
                                return e(i.transition, i.oldContainer);
                            case "loaded":
                                return e(i.transition, i.oldContainer, i.newContainer);
                            case "ready":
                                return e(i.transition, i.newContainer);
                            default:
                                return e()
                        }
                    }, !1)
                }
            }]), e
        }(),
        A = 0,
        j = function() {
            function e(t) {
                o(this, e), this.$el = t.$el || null, this.el = t.el || null, this.uid = "m-" + A++, this.$el.attr("data-uid", this.uid)
            }
            return a(e, [{
                key: "init",
                value: function() {}
            }, {
                key: "destroy",
                value: function() {
                    this.$el && this.$el.removeData("uid")
                }
            }]), e
        }();

    function H() {
        for (var r = 1, l = 1, h = [], t = 0; t < 256; ++t) h.push(Math.random());
        var c = function(t, e, i) {
            return t * (1 - i) + e * i
        };
        return {
            getVal: function(t) {
                var e = t * l,
                    i = Math.floor(e),
                    n = e - i,
                    s = n * n * (3 - 2 * n),
                    o = 255 & i,
                    a = o + 1 & 255;
                return c(h[o], h[a], s) * r
            },
            setAmplitude: function(t) {
                r = t
            },
            setScale: function(t) {
                l = t
            }
        }
    }
    var D = "".concat(t, ".").concat("PlayShapes"),
        N = {
            CLICK: "click.".concat(D),
            MOUSEENTER: "mouseenter.".concat(D),
            MOUSELEAVE: "mouseleave.".concat(D),
            MOUSEMOVE: "mousemove.".concat(D),
            COLOR_SCHEME: "colorScheme.".concat(D)
        },
        B = "default",
        _ = "play",
        U = "has-shapes-ready",
        z = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).colorScheme = B, e.updatingScheme = !1, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var t, e, i, n, s, o, a, r, l, h = this;
                    this.width = window.innerWidth, this.height = window.innerHeight, this.canvas = this.el, this.canvas.width = this.width, this.canvas.height = this.height, this.offscreenCanvas = document.createElement("canvas"), this.offscreenCanvas.width = this.canvas.width, this.offscreenCanvas.height = this.canvas.height, this.shapes = [], this.backgroundColorSchemes = (u(t = {}, B, {
                        r: 131,
                        g: 149,
                        b: 164
                    }), u(t, _, {
                        r: 58,
                        g: 91,
                        b: 159
                    }), t), this.backgroundColor = JSON.parse(JSON.stringify(this.backgroundColorSchemes[this.colorScheme]));
                    var c = [(e = {}, u(e, B, {
                        r: 113,
                        g: 131,
                        b: 146
                    }), u(e, _, {
                        r: 53,
                        g: 83,
                        b: 141
                    }), e), (i = {}, u(i, B, {
                        r: 147,
                        g: 170,
                        b: 189
                    }), u(i, _, {
                        r: 62,
                        g: 101,
                        b: 178
                    }), i), (n = {}, u(n, B, {
                        r: 59,
                        g: 75,
                        b: 91
                    }), u(n, _, {
                        r: 41,
                        g: 57,
                        b: 89
                    }), n), (s = {}, u(s, B, {
                        r: 109,
                        g: 116,
                        b: 134
                    }), u(s, _, {
                        r: 51,
                        g: 77,
                        b: 130
                    }), s), (o = {}, u(o, B, {
                        r: 44,
                        g: 46,
                        b: 62
                    }), u(o, _, {
                        r: 36,
                        g: 47,
                        b: 69
                    }), o), (a = {}, u(a, B, {
                        r: 61,
                        g: 65,
                        b: 94
                    }), u(a, _, {
                        r: 40,
                        g: 55,
                        b: 85
                    }), a), (r = {}, u(r, B, {
                        r: 42,
                        g: 41,
                        b: 56
                    }), u(r, _, {
                        r: 36,
                        g: 46,
                        b: 66
                    }), r), (l = {}, u(l, B, {
                        r: 62,
                        g: 61,
                        b: 81
                    }), u(l, _, {
                        r: 39,
                        g: 54,
                        b: 82
                    }), l)];
                    this.initShape(100, 100, 100, c[0], c[1], 10), this.initShape(this.height / 3, this.height / 3, this.height / 3, c[2], c[3], 10), this.initShape(this.height - this.height / 2.5, this.height - this.height / 2.5, this.height - this.height / 3, c[4], c[5], 10), this.initShape(this.height - this.height / 6, this.height - this.height / 6, this.height - this.height / 6, c[6], c[7], 1), this.ctx = this.canvas.getContext("2d"), this.offscreenCtx = this.offscreenCanvas.getContext("2d"), this.amplitude = {
                        value: this.height / 3
                    }, this.scale = {
                        value: 1
                    }, this.position = {
                        x: 0,
                        y: 0
                    }, this.mousePosition = {
                        x: 0,
                        y: 0
                    }, this.$el.on(N.MOUSEENTER, function(t) {
                        TweenMax.to(h.amplitude, 2, {
                            value: h.height / 1.8
                        }), TweenMax.to(h.scale, 2, {
                            value: 2
                        })
                    }), this.$el.on(N.MOUSELEAVE, function(t) {
                        TweenMax.to(h.amplitude, 2, {
                            value: h.height / 3
                        }), TweenMax.to(h.scale, 2, {
                            value: 1
                        })
                    }), v.on(N.MOUSEMOVE, function(t) {
                        h.mousePosition.x = 300 * (t.clientX - window.innerWidth / 2) / window.innerWidth, h.mousePosition.y = 100 * (t.clientY - window.innerHeight / 2) / window.innerHeight
                    }), g.on(N.COLOR_SCHEME, function(t) {
                        h.updateScheme(t.options.scheme)
                    }), "play" == y.data("template") && setTimeout(function() {
                        h.updateScheme("play")
                    }, 300), this.render(), y.addClass(U)
                }
            }, {
                key: "updateScheme",
                value: function(t) {
                    var e = this;
                    this.updatingScheme = !0, this.colorScheme = t, this.colorSchemeTl && this.colorSchemeTl.kill && this.colorSchemeTl.kill(), this.colorSchemeTl = new TimelineMax({
                        onComplete: function() {
                            e.updatingScheme = !1
                        }
                    });
                    var i = this.backgroundColorSchemes[t];
                    this.colorSchemeTl.to(this.backgroundColor, .5, {
                        r: i.r,
                        g: i.g,
                        b: i.b
                    }, 0);
                    for (var n = 0; n < this.shapes.length; n++) {
                        var s = this.shapes[n].fromColorSchemes[t];
                        this.colorSchemeTl.to(this.shapes[n].fromColor, .5, {
                            r: s.r,
                            g: s.g,
                            b: s.b
                        }, 0);
                        var o = this.shapes[n].toColorSchemes[t];
                        this.colorSchemeTl.to(this.shapes[n].toColor, .5, {
                            r: o.r,
                            g: o.g,
                            b: o.b
                        }, 0)
                    }
                    cancelAnimationFrame(this.raf), this.raf = requestAnimationFrame(function() {
                        return e.render()
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    if (!this.updatingScheme && window.safari || (this.raf = requestAnimationFrame(function() {
                            return t.render()
                        })), !y.hasClass("has-nav-open") || "play" === y.attr("data-template") || 1e3 < window.innerWidth || y.hasClass("has-dom-loading") && y.hasClass("is-transition-play")) {
                        this.offscreenCtx.fillStyle = "rgb(".concat(this.backgroundColor.r, ", ").concat(this.backgroundColor.g, ", ").concat(this.backgroundColor.b, ")"), this.offscreenCtx.fillRect(0, 0, this.width, this.height), this.position.x = this.lerp(this.position.x, this.mousePosition.x, .2), this.position.y = this.lerp(this.position.y, this.mousePosition.y, .2);
                        for (var e = 0; e < this.shapes.length; e++) this.shapes[e].iterator = this.shapes[e].iterator + this.scale.value, this.drawShape(this.shapes[e].fromX, this.shapes[e].noiseFrom.getVal(this.shapes[e].iterator) * this.amplitude.value - this.amplitude.value / 2 + this.shapes[e].fromY, this.shapes[e].pX + this.position.x, this.shapes[e].noiseP.getVal(this.shapes[e].iterator + 150) * this.amplitude.value - this.amplitude.value / 2 + this.shapes[e].pY + this.position.y, this.shapes[e].toX, this.shapes[e].noiseTo.getVal(this.shapes[e].iterator + 500) * this.amplitude.value - this.amplitude.value / 2 + this.shapes[e].toY, this.shapes[e].fromColor, this.shapes[e].toColor);
                        this.ctx.drawImage(this.offscreenCanvas, 0, 0)
                    }
                }
            }, {
                key: "lerp",
                value: function(t, e, i) {
                    return (1 - i) * t + i * e
                }
            }, {
                key: "initShape",
                value: function(t, e, i, n, s, o) {
                    var a = new H,
                        r = new H,
                        l = new H;
                    a.setScale(.005), r.setScale(.005), l.setScale(.005);
                    var h = {
                        fromX: 0,
                        fromY: t,
                        pX: this.width / 2,
                        pY: e,
                        toX: this.width,
                        toY: i,
                        fromColorSchemes: n,
                        toColorSchemes: s,
                        fromColor: JSON.parse(JSON.stringify(n[this.colorScheme])),
                        toColor: JSON.parse(JSON.stringify(s[this.colorScheme])),
                        iterator: o,
                        noiseFrom: a,
                        noiseP: r,
                        noiseTo: l
                    };
                    this.shapes.push(h)
                }
            }, {
                key: "drawShape",
                value: function(t, e, i, n, s, o, a, r) {
                    this.offscreenCtx.beginPath(), this.offscreenCtx.fillStyle = "rgb(".concat(Math.round(a.r), ", ").concat(Math.round(a.g), ", ").concat(Math.round(a.b), ")"), this.offscreenCtx.moveTo(t, e), this.offscreenCtx.quadraticCurveTo(i, n, s, o), this.offscreenCtx.lineTo(this.width, this.height), this.offscreenCtx.lineTo(0, this.height), this.offscreenCtx.lineTo(t, e), this.offscreenCtx.fill(), this.offscreenCtx.closePath()
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(D)), v.off(".".concat(D)), g.off(".".concat(D)), cancelAnimationFrame(this.raf)
                }
            }]), i
        }();

    function F(n, s, o) {
        var a;
        return function() {
            var t = this,
                e = arguments,
                i = o && !a;
            clearTimeout(a), a = setTimeout(function() {
                a = null, o || n.apply(t, e)
            }, s), i && n.apply(t, e)
        }
    }
    var W = "".concat(t, ".").concat("HomeFlag"),
        G = {
            CLICK: "click.".concat(W),
            MOUSEDOWN: "mousedown.".concat(W),
            MOUSEMOVE: "mousemove.".concat(W),
            MOUSEUP: "mouseup.".concat(W),
            RESIZE: "resize.".concat(W),
            TRIGGER: "trigger.".concat(W),
            SET: "set.".concat(W),
            GRAB: "Grag.".concat(W),
            RELEASE: "release.".concat(W),
            ENTER: "enter.".concat(W),
            LEAVE: "leave.".concat(W),
            GROW: "grow.".concat(W),
            UPDATE_COLOR: "updateColor.".concat(W)
        },
        q = ".js-preloader-background",
        V = function(t) {
            function e(t) {
                return o(this, e), f(this, d(e).call(this, t))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    this.count = 0, this.BCR = this.el.getBoundingClientRect(), this.width = this.BCR.width, this.height = this.BCR.height, this.renderer = new THREE.WebGLRenderer({
                        antialias: !(2 <= window.devicePixelRatio),
                        alpha: !0
                    }), this.renderer.setPixelRatio(Math.max(window.devicePixelRatio, 1)), this.renderer.setSize(this.width, this.height), this.el.appendChild(this.renderer.domElement), this.initScene(), this.initCamera(), this.initLights(), this.initShape(), this.values = {
                        x: 0,
                        y: -1,
                        factor: 0,
                        color: new THREE.Color(218 / 255, 31 / 255, 38 / 255),
                        scale: 1
                    }, this.hasMouseDown = !1, this.render(), this.events()
                }
            }, {
                key: "events",
                value: function() {
                    var i = this;
                    g.on(G.UPDATE_COLOR, function(t) {
                        i.values.color = {
                            r: t.options.r / 255,
                            g: t.options.g / 255,
                            b: t.options.b / 255
                        }
                    }), 1025 < window.innerWidth && (this.$el.on("".concat(G.MOUSEDOWN), function(t) {
                        i.hasMouseDown = !0;
                        var e = 2 * (t.clientY - i.$el.height() / 2) / i.$el.height();
                        i.set(e, 0), TweenMax.to(i.values, .6, {
                            factor: 1
                        })
                    }), this.$el.on("".concat(G.MOUSEMOVE), function(t) {
                        if (i.hasMouseDown) {
                            var e = 2 * (t.clientY - i.$el.height() / 2) / i.$el.height();
                            i.set(e)
                        }
                    }), this.$el.on("".concat(G.MOUSEUP), function(t) {
                        i.hasMouseDown = !1, TweenMax.to(i.values, .6, {
                            factor: 0
                        })
                    })), v.on(G.RESIZE, F(function() {
                        i.resize()
                    }, 20)), g.on(G.TRIGGER, function(t) {
                        "next" === t.options.direction ? i.goToNext() : i.goToPrev()
                    }), g.on(G.SET, function(t) {
                        return i.set(t.options.offset, t.options.factor)
                    }), g.on(G.GRAB, function(t) {
                        TweenMax.to(i.values, .2, {
                            factor: 1
                        })
                    }), g.on(G.RELEASE, function(t) {
                        TweenMax.to(i.values, 1, {
                            factor: 0
                        })
                    }), g.on(G.ENTER, function(t) {
                        TweenMax.to(i.plane.scale, .8, {
                            x: 1.1,
                            y: 1.05,
                            ease: Elastic.easeOut.config(1, .75)
                        })
                    }), g.on(G.LEAVE, function(t) {
                        y.hasClass("has-dom-loading") || TweenMax.to(i.plane.scale, .4, {
                            x: 1,
                            y: 1,
                            ease: Power2.easeInOut
                        })
                    }), g.on(G.GROW, function(t) {
                        TweenMax.to(i.plane.scale, .6, {
                            x: 4.5,
                            y: 2.2,
                            ease: Power1.easeInOut
                        }), $(q).css({
                            "background-color": "rgb(".concat(parseInt(255 * parseFloat(i.values.color.r)), ", ").concat(parseInt(255 * parseFloat(i.values.color.g)), ", ").concat(parseInt(255 * parseFloat(i.values.color.b)), ")")
                        })
                    })
                }
            }, {
                key: "goToPrev",
                value: function() {
                    TweenMax.to(this.values, .6, {
                        factor: 1
                    })
                }
            }, {
                key: "goToNext",
                value: function() {
                    TweenMax.to(this.values, .6, {
                        factor: 1
                    })
                }
            }, {
                key: "initScene",
                value: function() {
                    this.scene = new THREE.Scene
                }
            }, {
                key: "initCamera",
                value: function() {
                    this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, .1, 3e3), this.camera.position.set(0, 0, 10)
                }
            }, {
                key: "initLights",
                value: function() {
                    this.ambientLight = new THREE.AmbientLight(4210752), this.scene.add(this.ambientLight)
                }
            }, {
                key: "initShape",
                value: function() {
                    this.lineLength = 50, this.planeGeometry = new THREE.PlaneBufferGeometry(6.5, 8, this.lineLength, this.lineLength);
                    var t = new THREE.Matrix3;
                    t.setUvTransform(0, 0, 1, 1, 0, 0, 0);
                    var e = (new THREE.TextureLoader).load(window.isTouch ? "../ib20/assets/images/flag-displacement-vertical.png" : "../ib20/assets/images/flag-displacement.png");
                    e.minFilter = THREE.LinearFilter, this.planeMaterial = new THREE.ShaderMaterial({
                        vertexShader: "\n    uniform sampler2D texture;\n    uniform float factor;\n\n    #include <common>\n    #include <uv_pars_vertex>\n\n    void main() {\n        #include <uv_vertex>\n\n        vec3 newPosition = vec3(position.x, position.y, position.z + ((texture2D(texture, vUv).r ) * factor * 2.));\n\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.);\n    }\n",
                        fragmentShader: "\n\n    uniform vec3 color;\n\n    void main() {\n\n      // colour is RGBA: u, v, 0, 1\n      gl_FragColor = vec4( color , 1. );\n\n    }\n",
                        uniforms: {
                            texture: {
                                value: e
                            },
                            uvTransform: {
                                value: t
                            },
                            factor: {
                                value: 1
                            },
                            color: {
                                value: new THREE.Color("#db1f28")
                            }
                        },
                        defines: {
                            USE_MAP: !0
                        }
                    }), this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial), this.positionPlane(), this.scene.add(this.plane), this.offset = {
                        y: -1
                    };
                    var i = new TimelineMax({
                        repeat: -1
                    });
                    i.to(this.offset, 2, {
                        y: 1
                    }), i.to(this.offset, 2, {
                        y: -1
                    })
                }
            }, {
                key: "positionPlane",
                value: function() {
                    this.plane.position.set(0, 0, 2), 700 < this.width && this.width < 1025 && this.plane.scale.set(1, 1.2, 1), this.width < 1025 && this.plane.position.set(0, 0, 0), this.width < 700 && this.plane.scale.set(1, 1.1, 1)
                }
            }, {
                key: "set",
                value: function(t, e, i) {
                    this.values.offset = t || this.values.offset, this.values.factor = e || this.values.factor, this.values.color = i || this.values.color
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    this.raf = requestAnimationFrame(function() {
                        return t.render()
                    }), this.planeMaterial.uniforms.uvTransform.value.setUvTransform(window.isTouch ? -this.values.offset : 0, window.isTouch ? 0 : this.values.offset, this.values.scale, this.values.scale, 0, 0, 0), this.planeMaterial.uniforms.factor.value = this.values.factor, this.planeMaterial.uniforms.color.value = this.values.color, this.renderer.render(this.scene, this.camera)
                }
            }, {
                key: "resize",
                value: function() {
                    var t = this.el.getBoundingClientRect();
                    this.BCR && this.BCR.width == t.width && this.BCR.height == t.height || (this.BCR = t, this.width = this.BCR.width, this.height = this.BCR.height, this.positionPlane(), this.camera.aspect = this.width / this.height, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.width, this.height))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(e.prototype), "destroy", this).call(this), cancelAnimationFrame(this.raf), this.$el.off(".".concat(W)), v.off(".".concat(W)), g.off(".".concat(W))
                }
            }]), e
        }(),
        K = function() {
            function e(t) {
                o(this, e), this.$visual = t, this.current = !1, this.init()
            }
            return a(e, [{
                key: "init",
                value: function() {
                    this.initializeElements(), this.initTweens(), this.initializeEvents()
                }
            }, {
                key: "initializeElements",
                value: function() {
                    this.$phoneLeft = this.$visual.find(".js-visual-phone-left"), this.$phoneRight = this.$visual.find(".js-visual-phone-right"), this.$laptop = this.$visual.find(".js-visual-laptop"), this.$inner = this.$visual.find(".js-visual-inner")
                }
            }, {
                key: "initializeEvents",
                value: function() {}
            }, {
                key: "initTweens",
                value: function() {
                    this.tweenVisual && this.tweenVisual.kill && this.tweenVisual.kill(), TweenMax.set([this.$phoneLeft, this.$phoneRight, this.$laptop, this.$inner], {
                        clearProps: "all"
                    }), this.tweenVisual = new TimelineMax({}), this.tweenVisual.addLabel("start", 0).addLabel("middle", 1).addLabel("end", 2), window.isTouch ? this.tweenVisual.fromTo(this.$inner, 1, {
                        x: "30%"
                    }, {
                        x: "0%",
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "start").fromTo(this.$phoneLeft, 1, {
                        rotation: -30
                    }, {
                        rotation: 0,
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "start").fromTo(this.$phoneRight, 1, {
                        rotation: 30,
                        x: "50%"
                    }, {
                        rotation: 0,
                        x: "0%",
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "start").fromTo(this.$laptop, 1, {
                        rotation: 30
                    }, {
                        rotation: 0,
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "start").fromTo(this.$inner, 1, {
                        x: "0%"
                    }, {
                        x: "-30%",
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "middle").fromTo(this.$phoneLeft, 1, {
                        rotation: 0
                    }, {
                        rotation: 30,
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "middle").fromTo(this.$phoneRight, 1, {
                        rotation: 0,
                        x: "0%"
                    }, {
                        rotation: -30,
                        x: "-50%",
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "middle").fromTo(this.$laptop, 1, {
                        rotation: 0
                    }, {
                        rotation: -20,
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "middle") : this.tweenVisual.fromTo(this.$inner, 1, {
                        y: "30%"
                    }, {
                        y: "0%",
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "start").fromTo(this.$phoneLeft, 1, {
                        rotation: -30
                    }, {
                        rotation: 0,
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "start").fromTo(this.$phoneRight, 1, {
                        rotation: 30,
                        y: "50%"
                    }, {
                        rotation: 0,
                        y: "0%",
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "start").fromTo(this.$laptop, 1, {
                        rotation: 30
                    }, {
                        rotation: 0,
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "start").fromTo(this.$inner, 1, {
                        y: "0%"
                    }, {
                        y: "-30%",
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "middle").fromTo(this.$phoneLeft, 1, {
                        rotation: 0
                    }, {
                        rotation: 30,
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "middle").fromTo(this.$phoneRight, 1, {
                        rotation: 0,
                        y: "0%"
                    }, {
                        rotation: -30,
                        y: "-50%",
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "middle").fromTo(this.$laptop, 1, {
                        rotation: 0
                    }, {
                        rotation: -20,
                        ease: Linear.easeNone,
                        force3D: !0
                    }, "middle"), this.tweenVisual.progress(.01).progress(0).pause()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.tweenVisual.kill(), this.tweenVisual = null
                }
            }]), e
        }();

    function Y(t, e, i) {
        return (1 - i) * t + i * e
    }
    var X = "LocomotiveScroll",
        Z = {
            CLICK: "click.".concat(X),
            ISREADY: "isReady.".concat(X),
            REBUILD: "rebuild.".concat(X),
            RENDER: "render.".concat(X),
            RESIZE: "resize.".concat(X),
            SCROLL: "scroll.".concat(X),
            SCROLLTO: "scrollTo.".concat(X),
            UPDATE: "update.".concat(X),
            STOP: "stop.".concat(X),
            START: "start.".concat(X)
        },
        Q = {
            container: g,
            mobileContainer: g,
            onScroll: function() {},
            selector: ".js-animate",
            smooth: !1,
            smoothMobile: !1,
            reversed: !1,
            getDirection: !1,
            getSpeed: !1,
            scrollBarClassName: "o-scrollbar",
            isScrollingClassName: "is-scrolling"
        },
        J = function() {
            function e(t) {
                o(this, e), this.$container = t.container ? t.container : Q.container, this.selector = t.selector ? t.selector : Q.selector, this.callbacks = {
                    onScroll: "function" == typeof t.onScroll ? t.onScroll : Q.onScroll
                }, this.instance = {
                    scroll: {
                        x: 0,
                        y: 0,
                        direction: ""
                    }
                }, this.windowHeight = v.height(), this.windowMiddle = this.windowHeight / 2, this.animatedElements = [], this.requestId = void 0
            }
            return a(e, [{
                key: "init",
                value: function() {
                    var n = this;
                    this.addElements(), this.render(), this.$container.on(Z.SCROLL, function() {
                        n.render()
                    }), this.$container.on(Z.REBUILD, function() {
                        n.scrollTo({
                            targetOffset: 0
                        }), n.update()
                    }), this.$container.on(Z.UPDATE, function(t, e) {
                        return n.update(e)
                    }), this.$container.on(Z.RENDER, function() {
                        return n.render()
                    }), this.$container.on(Z.CLICK, ".js-scrollto", function(t) {
                        t.preventDefault();
                        var e = $(t.currentTarget),
                            i = e.data("offset");
                        n.scrollTo({
                            sourceElem: e,
                            offsetElem: i
                        })
                    }), this.$container.on(Z.SCROLLTO, function(t) {
                        return n.scrollTo(t.options)
                    }), g.triggerHandler({
                        type: Z.ISREADY
                    }), v.on(Z.RESIZE, F(function() {
                        n.update()
                    }, 20))
                }
            }, {
                key: "addElements",
                value: function() {
                    this.animatedElements = [];
                    for (var t = $(this.selector), e = t.length, i = 0; i < e; i++) {
                        var n = t.eq(i),
                            s = n.attr("data-target"),
                            o = n.attr("data-position"),
                            a = s && $(s).length ? $(s) : n,
                            r = a.offset().top,
                            l = r + a.outerHeight(),
                            h = "string" == typeof n.attr("data-sticky"),
                            c = n.attr("data-sticky-target"),
                            u = null;
                        "string" == typeof n.attr("data-viewport-offset") && (u = n.attr("data-viewport-offset").split(","));
                        var d = "string" == typeof n.attr("data-callback") ? n.attr("data-callback") : null,
                            f = null;
                        if (null != d) {
                            for (var p = d.substr(0, d.indexOf("(")), m = d.substr(d.indexOf("("), d.length - p.length), g = (m = (m = m.replace("(", "")).replace(")", "")).split("|"), v = {}, y = 0; y < g.length; y++) {
                                var w = g[y].split(":");
                                w[0] = w[0].replace(" ", "");
                                var T = void 0;
                                T = "true" === w[1] || "false" !== w[1] && (/^\d+$/.test(w[1]) ? parseInt(w[1]) : w[1]), v[w[0]] = T
                            }
                            f = {
                                event: p,
                                options: v
                            }
                        }
                        var E = "string" == typeof n.attr("data-repeat"),
                            k = n.attr("data-inview-class");
                        void 0 === k && (k = "is-show"), h && (l = void 0 === c ? this.$container.height() : $(c).offset().top - n.height(), n.removeClass(k), n.removeClass("is-unstuck"), n.css({
                            "-webkit-transform": "translate3d(0, 0, 0)",
                            "-ms-transform": "translate3d(0, 0, 0)",
                            transform: "translate3d(0, 0, 0)"
                        })), !E && n.hasClass(k) || (this.animatedElements[i] = {
                            $element: n,
                            offset: Math.round(r),
                            repeat: E,
                            position: o,
                            limit: l,
                            inViewClass: k,
                            sticky: h,
                            callback: f,
                            viewportOffset: u
                        })
                    }
                }
            }, {
                key: "animateElements",
                value: function() {
                    for (var t = this.animatedElements.length, e = [], i = 0; i < t; i++) {
                        var n = this.animatedElements[i];
                        this.toggleElement(n, i) && e.push(i)
                    }
                    for (i = e.length; i--;) this.animatedElements.splice(e[i], 1)
                }
            }, {
                key: "render",
                value: function() {
                    this.instance.scroll.y !== window.pageYOffset && (this.instance.scroll.y = window.pageYOffset), this.instance.scroll.x !== window.pageXOffset && (this.instance.scroll.x = window.pageXOffset), this.callbacks.onScroll(this.scroll), this.animateElements()
                }
            }, {
                key: "toggleElement",
                value: function(t, e) {
                    var i = !1;
                    if (void 0 !== t) {
                        var n = this.instance.scroll.y,
                            s = n + this.windowHeight,
                            o = !1;
                        if ("top" === t.position) o = n >= t.offset && n <= t.limit;
                        else if ("below" === t.position) o = n > t.limit;
                        else if (t.sticky) o = n >= t.offset && n <= t.limit;
                        else if (null != t.viewportOffset)
                            if (1 < t.viewportOffset.length) {
                                var a = n + this.windowHeight * t.viewportOffset[1];
                                o = s - this.windowHeight * t.viewportOffset[0] > t.offset && a < t.limit
                            } else {
                                var r = s - this.windowHeight * t.viewportOffset[0];
                                o = r > t.offset && r < t.limit
                            }
                        else o = s >= t.offset && n <= t.limit;
                        if (t.sticky && (n > t.limit ? t.$element.addClass("is-unstuck") : t.$element.removeClass("is-unstuck"), n < t.offset && t.$element.removeClass(t.inViewClass)), o) {
                            if (t.$element.hasClass(t.inViewClass) || (t.$element.addClass(t.inViewClass), this.triggerCallback(t, "enter")), t.repeat || t.sticky || (i = !0), t.sticky) {
                                var l = this.instance.scroll.y - t.offset;
                                t.$element.css({
                                    "-webkit-transform": "translate3d(0, ".concat(l, "px, 0)"),
                                    "-ms-transform": "translate3d(0, ".concat(l, "px, 0)"),
                                    transform: "translate3d(0, ".concat(l, "px, 0)")
                                })
                            }
                        } else t.repeat && t.$element.hasClass(t.inViewClass) && (t.$element.removeClass(t.inViewClass), this.triggerCallback(t, "leave"))
                    }
                    return i
                }
            }, {
                key: "triggerCallback",
                value: function(t, e) {
                    null != t.callback && t.$element.trigger({
                        type: t.callback.event,
                        options: t.callback.options,
                        way: e
                    })
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = t.targetElem,
                        i = t.sourceElem,
                        n = t.offsetElem,
                        s = M(t.targetOffset) ? parseInt(t.targetOffset) : 0,
                        o = M(t.speed) ? parseInt(t.speed) : 800,
                        a = M(t.delay) ? parseInt(t.delay) : 0,
                        r = t.toTop,
                        l = t.toBottom,
                        h = 0;
                    if (void 0 === e && void 0 === i && void 0 === s) return console.warn("You must specify at least one parameter."), !1;
                    if (void 0 !== e && e instanceof jQuery && 0 < e.length && (s = e.offset().top + s), void 0 !== i && i instanceof jQuery && 0 < i.length) {
                        var c = "";
                        c = i.attr("data-target") ? i.attr("data-target") : i.attr("href"), s = $(c).offset().top + s
                    }
                    void 0 !== n && (h = $(n).outerHeight(), s -= h), !0 === r ? s = 0 : !0 === l && (s = g.height()), setTimeout(function() {
                        $("html, body").animate({
                            scrollTop: s
                        }, o)
                    }, a)
                }
            }, {
                key: "update",
                value: function() {
                    this.addElements(), this.animateElements(), this.windowHeight = v.height(), this.windowMiddle = this.windowHeight / 2
                }
            }, {
                key: "destroy",
                value: function() {
                    v.off(".".concat(X)), this.$container.off(".".concat(X)), window.cancelAnimationFrame(this.requestId), this.requestId = void 0, this.animatedElements = void 0
                }
            }]), e
        }(),
        tt = X,
        et = Object.assign(Z, {
            PAUSE: "pause.".concat(tt),
            RESUME: "resume.".concat(tt),
            SCROLLING: "scrolling.".concat(tt)
        }),
        it = Object.assign(Q, {
            isDraggingClassName: "is-dragging"
        }),
        nt = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).$container = t.container ? t.container : it.container, e.selector = t.selector ? t.selector : it.selector, e.callbacks = {
                    onScroll: "function" == typeof t.onScroll ? t.onScroll : it.onScroll
                }, e.instance = {
                    scroll: {
                        x: 0,
                        y: 0,
                        direction: ""
                    }
                }, e.windowHeight = v.height(), e.windowMiddle = e.windowHeight / 2, e.animatedElements = [], e.requestId = void 0, e
            }
            return c(i, J), a(i, [{
                key: "init",
                value: function() {
                    var n = this;
                    this.addElements(), this.render(), this.$container.on(et.SCROLL, function() {
                        n.render()
                    }), this.$container.on(et.REBUILD, function() {
                        n.update()
                    }), this.$container.on(et.UPDATE, function(t, e) {
                        return n.update(e)
                    }), this.$container.on(et.RENDER, function() {
                        return n.render()
                    }), this.$container.on(et.CLICK, ".js-scrollto", function(t) {
                        t.preventDefault();
                        var e = $(t.currentTarget),
                            i = e.data("offset");
                        n.scrollTo({
                            sourceElem: e,
                            offsetElem: i
                        })
                    }), this.$container.on(et.SCROLLTO, function(t) {
                        return n.scrollTo(t.options)
                    }), g.triggerHandler({
                        type: et.ISREADY
                    }), v.on(et.RESIZE, F(function() {
                        n.update()
                    }, 20))
                }
            }, {
                key: "toggleElement",
                value: function(t, e) {
                    var i = !1;
                    if (void 0 !== t) {
                        var n = this.instance.scroll.y,
                            s = n + this.windowHeight,
                            o = !1;
                        if ("top" === t.position) o = n >= t.offset && n <= t.limit;
                        else if ("below" === t.position) o = n > t.limit;
                        else if (t.sticky) o = n >= t.offset && n <= t.limit;
                        else if (null != t.viewportOffset)
                            if (1 < t.viewportOffset.length) {
                                var a = n + this.windowHeight * t.viewportOffset[1];
                                o = s - this.windowHeight * t.viewportOffset[0] > t.offset && a < t.limit
                            } else {
                                var r = s - this.windowHeight * t.viewportOffset[0];
                                o = r > t.offset && r < t.limit
                            }
                        else o = s >= t.offset && n <= t.limit;
                        if (t.sticky && (n > t.limit ? t.$element.addClass("is-unstuck") : t.$element.removeClass("is-unstuck"), n < t.offset && t.$element.removeClass(t.inViewClass)), o) {
                            if (t.$element.hasClass(t.inViewClass) || (t.$element.addClass(t.inViewClass), this.triggerCallback(t, "enter")), t.repeat || t.sticky || (i = !0), t.sticky) {
                                var l = this.instance.scroll.y - t.offset;
                                y.hasClass("has-smooth-scroll") && t.$element.css({
                                    "-webkit-transform": "translate3d(0, ".concat(l, "px, 0)"),
                                    "-ms-transform": "translate3d(0, ".concat(l, "px, 0)"),
                                    transform: "translate3d(0, ".concat(l, "px, 0)")
                                })
                            }
                        } else if (t.repeat && t.$element.hasClass(t.inViewClass) && (t.$element.removeClass(t.inViewClass), this.triggerCallback(t, "leave")), t.sticky && y.hasClass("has-smooth-scroll") && n > t.limit) {
                            var h = t.limit - t.offset;
                            t.$element.css({
                                "-webkit-transform": "translate3d(0, ".concat(h, "px, 0)"),
                                "-ms-transform": "translate3d(0, ".concat(h, "px, 0)"),
                                transform: "translate3d(0, ".concat(h, "px, 0)")
                            })
                        }
                    }
                    return i
                }
            }, {
                key: "render",
                value: function() {
                    window.pageYOffset > this.instance.scroll.y && 0 < window.pageYOffset ? "down" !== this.instance.scroll.direction && (this.instance.scroll.direction = "down", y.attr("data-direction", "down")) : (window.pageYOffset < this.instance.scroll.y || window.pageYOffset < 0) && "up" !== this.instance.scroll.direction && (this.instance.scroll.direction = "up", y.attr("data-direction", "up")), this.instance.scroll.y !== window.pageYOffset && (this.instance.scroll.y = window.pageYOffset), this.instance.scroll.x !== window.pageXOffset && (this.instance.scroll.x = window.pageXOffset), this.callbacks.onScroll(this.instance.scroll), this.animateElements()
                }
            }]), i
        }(),
        st = "".concat(t, ".").concat("RailMove"),
        ot = function() {
            function s(t, e, i, n) {
                o(this, s), this.$wrapper = t, this.isFixed = i, this.containerWidth = 0, this.requestAnimation = null, this.scrollPosition = -1, this.translation = 0, this.grabbed = !1, this.preventClick = !1, this.paused = n, this.originalVelocity = -e, this.velocity = this.originalVelocity, this.lastDelta = null, this.initializeElements(), this.initializeEvents()
            }
            return a(s, [{
                key: "initializeElements",
                value: function() {
                    this.$railMove = this.$wrapper.find(".c-rail_group-container"), this.$railMoveChildren = this.$railMove.find(".c-rail_item"), this.getBCR()
                }
            }, {
                key: "initializeEvents",
                value: function() {
                    this.update(), this.checkScrollBind = this.updateScroll.bind(this), g.on(et.SCROLLING, this.checkScrollBind)
                }
            }, {
                key: "setContainerWidth",
                value: function(t) {
                    this.containerWidth = t
                }
            }, {
                key: "getBCR",
                value: function() {
                    this.railMoveBCR = this.$railMove[0].getBoundingClientRect()
                }
            }, {
                key: "updateScroll",
                value: function() {
                    if (!y.hasClass("is-mobile") && !this.isFixed) {
                        var t = Math.round(window.scroll.y) ? Math.round(window.scroll.y) : 0,
                            e = t - this.scrollPosition;
                        this.scrollPosition = t, 0 != e && (this.velocity = this.originalVelocity * e)
                    }
                }
            }, {
                key: "pause",
                value: function() {
                    this.paused = !0, cancelAnimationFrame(this.requestAnimation)
                }
            }, {
                key: "resume",
                value: function() {
                    var t = this;
                    this.paused = !1, cancelAnimationFrame(this.requestAnimation), this.requestAnimation = requestAnimationFrame(function() {
                        return t.update()
                    })
                }
            }, {
                key: "update",
                value: function() {
                    var t, e = this;
                    this.grabbed || (this.translation > this.railMoveBCR.width / 2 || this.translation < -this.railMoveBCR.width / 2 ? this.translation = 0 : this.translation = this.translation + this.velocity), t = 0 < this.translation ? -this.containerWidth + this.translation % this.containerWidth : this.translation % this.containerWidth, TweenMax.set(this.$railMoveChildren, {
                        x: Math.round(t),
                        force3D: !0
                    }), this.paused || (this.requestAnimation = requestAnimationFrame(function() {
                        return e.update()
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$wrapper.off(".".concat(st)), g.off(".".concat(st)), g.off(et.SCROLLING, this.checkScrollBind), cancelAnimationFrame(this.requestAnimation), TweenMax.set(this.$railMove, {
                        x: 0
                    }), this.translation = 0
                }
            }]), s
        }(),
        at = "".concat(t, ".").concat("Rail"),
        rt = {
            CLICK: "click.".concat(at),
            PAUSE: "pause.".concat(at),
            RESUME: "resume.".concat(at)
        },
        lt = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).options = t, e.$wrapper = e.$el, e.speed = t["rail-speed"], e.isFixed = "string" == typeof e.$el.attr("data-fixed"), e.initialHTML = e.$el[0].outerHTML, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    this.setClasses(), this.wrapItem(), this.initializeElements(), this.fillScreen(), this.groupTrack(), this.duplicateGroup(), this.wrapGroup(), this.railMove = new ot(this.$wrapper, this.speed, this.isFixed, this.options.paused), this.railMove.setContainerWidth(this.groupTrackBCR.width), this.pauseBind = this.pause.bind(this), this.$el.on(rt.PAUSE, this.pauseBind), this.resumeBind = this.resume.bind(this), this.$el.on(rt.RESUME, this.resumeBind)
                }
            }, {
                key: "setClasses",
                value: function() {
                    this.$wrapper.toggleClass("c-rail_wrapper");
                    var t = this.$wrapper.find("> *");
                    if (null != this.options.shuffle) {
                        t.toggleClass("c-rail_item");
                        var e = x(Array.from(t)),
                            i = !0,
                            n = !1,
                            s = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(i = (o = a.next()).done); i = !0) {
                                var r = o.value;
                                this.$wrapper.append($(r))
                            }
                        } catch (t) {
                            n = !0, s = t
                        } finally {
                            try {
                                i || null == a.return || a.return()
                            } finally {
                                if (n) throw s
                            }
                        }
                    } else t.toggleClass("c-rail_item")
                }
            }, {
                key: "wrapItem",
                value: function() {
                    var t = '<div class="c-rail_track">' + this.$wrapper[0].innerHTML + "</div>";
                    this.$wrapper[0].innerHTML = t
                }
            }, {
                key: "initializeElements",
                value: function() {
                    this.$item = this.$wrapper.find(".c-rail_item"), this.$track = this.$wrapper.find(".c-rail_track"), this.$container = this.$wrapper.find(".c-rail_container")
                }
            }, {
                key: "fillScreen",
                value: function() {
                    var t = window.innerWidth / this.$track[0].getBoundingClientRect().width;
                    if (t === 1 / 0) throw new Error("Ratio is Infinity");
                    for (var e = 0; e < t; e++) this.$wrapper.append(this.$track[0].outerHTML)
                }
            }, {
                key: "groupTrack",
                value: function() {
                    var t = '<div class="c-rail_track-container">' + this.$wrapper[0].innerHTML + "</div>";
                    this.$wrapper[0].innerHTML = t, this.$groupTracks = this.$wrapper.find(".c-rail_track-container"), this.groupTrackBCR = this.$groupTracks[0].getBoundingClientRect()
                }
            }, {
                key: "duplicateGroup",
                value: function() {
                    this.$wrapper.append(this.$groupTracks[0].outerHTML)
                }
            }, {
                key: "wrapGroup",
                value: function() {
                    var t = '<div class="c-rail_group-container">' + this.$wrapper[0].innerHTML + "</div>";
                    this.$wrapper[0].innerHTML = t, this.$groupContainer = this.$wrapper.find(".c-rail_group-container")
                }
            }, {
                key: "pause",
                value: function() {
                    this.railMove.pause()
                }
            }, {
                key: "resume",
                value: function() {
                    this.railMove.resume()
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(at)), this.railMove && this.railMove.destroy && this.railMove.destroy(), this.$el[0].outerHTML = this.initialHTML
                }
            }]), i
        }(),
        ht = "".concat(t, ".").concat("HomeSimpleSlider"),
        ct = {
            GOTO: "goto.".concat(ht)
        },
        ut = "is-active",
        dt = "is-out",
        ft = function(t) {
            function e() {
                return o(this, e), f(this, d(e).apply(this, arguments))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    var n = this;
                    this.$items = $(".js-item", this.$el), this.$items.eq(0).addClass(ut), requestAnimationFrame(function() {
                        n.$items.eq(0).find('[data-module="Rail"]').trigger(rt.RESUME), n.$items.eq(0).filter('[data-module="Rail"]').trigger(rt.RESUME)
                    }), g.on(ct.GOTO, function(i) {
                        n.$items.filter(".".concat(ut)).addClass(dt).removeClass(ut), void 0 !== n.timeout && clearTimeout(n.timeout), n.timeout = setTimeout(function() {
                            var t = n.$items.filter(".".concat(dt));
                            t.removeClass(dt), t.find('[data-module="Rail"]').trigger(rt.PAUSE), t.filter('[data-module="Rail"]').trigger(rt.PAUSE);
                            var e = n.$items.eq(i.options.index);
                            e.addClass(ut), e.find('[data-module="Rail"]').trigger(rt.RESUME), e.filter('[data-module="Rail"]').trigger(rt.RESUME)
                        }, 600)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(e.prototype), "destroy", this).call(this), clearTimeout(this.timeout), g.off(".".concat(ht))
                }
            }]), e
        }(),
        pt = "".concat(t, ".").concat("Rope"),
        mt = {
            SET: "set.".concat(pt),
            GRAB: "grab.".concat(pt),
            RELEASE: "release.".concat(pt),
            INVIEW: "inview.".concat("Rope")
        },
        gt = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).delay = t.delay, e.color = t.color, e.auto = t.auto, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.dpr = Math.min(window.devicePixelRatio, 2), this.canvas = this.el, this.ctx = this.canvas.getContext("2d"), this.width = this.$el.width() * this.dpr, this.height = this.$el.height() * this.dpr, this.canvas.width = this.width, this.canvas.height = this.height, this.point = {
                        x: this.width / 2,
                        y: this.height / 2
                    }, g.on(mt.SET, function(t) {
                        return e.set(t)
                    }), g.on(mt.GRAB, function(t) {
                        return e.grab(t)
                    }), g.on(mt.RELEASE, function() {
                        return e.release()
                    }), this.$el.on(mt.INVIEW, function(t) {
                        return e.animate(e.height)
                    }), this.auto && (y.hasClass("-first") ? this.animate(0) : setTimeout(function() {
                        e.animate(0)
                    }, 600)), this.render()
                }
            }, {
                key: "set",
                value: function(t) {
                    var e = this;
                    void 0 !== this.tw && this.tw.kill(), void 0 !== this.animation && this.animation.kill(), this.point.y = 2 * t.options.y + this.height / 2, this.raf = requestAnimationFrame(function() {
                        return e.render()
                    })
                }
            }, {
                key: "animate",
                value: function(t) {
                    var e = this;
                    void 0 !== this.animation && this.animation.kill(), this.animation = new TimelineMax({
                        delay: this.delay
                    }), this.animation.eventCallback("onUpdate", function() {
                        return e.render()
                    }), this.animation.to(this.point, .3, {
                        y: t,
                        ease: Power0.easeNone
                    }), this.animation.to(this.point, 3, {
                        y: this.height / 2,
                        ease: Elastic.easeOut.config(.8, .2)
                    })
                }
            }, {
                key: "release",
                value: function() {
                    var t = this;
                    void 0 !== this.tw && this.tw.kill(), this.tw = TweenMax.to(this.point, 2, {
                        y: this.height / 2,
                        ease: Elastic.easeOut.config(1.5, .2)
                    }), this.tw = this.tw.eventCallback("onUpdate", function() {
                        return t.render()
                    })
                }
            }, {
                key: "render",
                value: function() {
                    this.ctx.clearRect(0, 0, this.width, this.height), this.ctx.beginPath(), this.ctx.lineWidth = 1 * this.dpr, this.ctx.strokeStyle = this.color, this.ctx.moveTo(0, this.height / 2), this.ctx.quadraticCurveTo(this.point.x, this.point.y, this.width, this.height / 2), this.ctx.stroke()
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), void 0 !== this.animation && this.animation.kill(), void 0 !== this.tw && this.tw.kill(), cancelAnimationFrame(this.raf), this.$el.off(".".concat(pt)), g.off(".".concat(pt))
                }
            }]), i
        }(),
        vt = "".concat(t, ".").concat("HomeLinkSlider"),
        yt = {
            CLICK: "click.".concat(vt),
            MOUSEENTER: "mouseenter.".concat(vt),
            MOUSELEAVE: "mouseleave.".concat(vt),
            UPDATE: "update.".concat(vt),
            HOVER: "hover.".concat(vt)
        },
        wt = "has-slider-hover",
        Tt = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).noHover = t["no-hover"], e.tap = t.tap, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.noHover || (this.$el.on(yt.MOUSEENTER, function() {
                        g.triggerHandler({
                            type: G.ENTER
                        }), g.triggerHandler({
                            type: yt.HOVER,
                            options: {
                                value: "enter"
                            }
                        }), y.addClass(wt)
                    }), this.$el.on(yt.MOUSELEAVE, function() {
                        g.triggerHandler({
                            type: G.LEAVE
                        }), g.triggerHandler({
                            type: yt.HOVER,
                            options: {
                                value: "leave"
                            }
                        }), y.removeClass(wt)
                    })), this.tap && (this.$el.on(yt.CLICK, function(t) {
                        t.preventDefault(), t.stopPropagation()
                    }), this.hammerManager = new Hammer.Manager(this.el), this.hammerManager.add(new Hammer.Tap({})), this.onTap = function(t) {
                        g.triggerHandler({
                            type: xt.GOTO,
                            target: e.el
                        })
                    }, this.hammerManager.on("tap", this.onTap)), g.on(yt.UPDATE, function(t) {
                        e.$el.attr("href", t.options.url)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.hammerManager && (this.hammerManager.off("tap", this.onTap), this.hammerManager.destroy(), this.hammerManager = null), this.$el.off(".".concat(vt)), g.off(".".concat(vt))
                }
            }]), i
        }(),
        Et = "".concat(t, ".").concat("FancySlider"),
        kt = {
            CLICK: "click.".concat(Et),
            GOING_TO: "goingTo.".concat(Et),
            KILL: "kill.".concat(Et),
            KEYDOWN: "keydown.".concat(Et),
            RESIZE: "resize.".concat(Et)
        },
        bt = "has-slider-grabbing",
        St = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).progressTarget = 0, e.grabbed = !1, e.lerpFactors = {
                    visuals: .2,
                    color: .1
                }, e.getDeltaScreenDivider = function() {
                    return window.innerHeight / 2
                }, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.initElements(), t.initColorTween(), t.initTween(), t.progressTarget = -.125, t.initLerp(), t.startTimer(), t.launch(), t.setCurrentSlide(0)
                    }, 400)
                }
            }, {
                key: "initElements",
                value: function() {
                    this.elBCR = this.$el[0].getBoundingClientRect(), this.$visuals = this.$el.find(".js-visuals"), this.$visualsList = this.$el.find(".js-visuals-list"), this.$visualsItem = this.$el.find(".js-visuals-item"), this.visualsListBCR = this.$visualsList[0].getBoundingClientRect(), window.isTouch ? this.visualsListSizeRelativeToViewport = this.visualsListBCR.width / this.elBCR.width : this.visualsListSizeRelativeToViewport = this.visualsListBCR.height / this.elBCR.height, this.items = [];
                    for (var t = 0; t < this.$visualsItem.length; t++) {
                        var e = new K(this.$visualsItem.eq(t)),
                            i = e.$visual[0].getBoundingClientRect(),
                            n = void 0;
                        n = window.isTouch ? (i.left - this.elBCR.left) / this.elBCR.width : (i.top - this.elBCR.top) / this.elBCR.height, e.coords = parseFloat((n / this.visualsListSizeRelativeToViewport).toFixed(6)), e.color = this.$visualsItem.eq(t).data("color"), e.url = this.$visualsItem.eq(t).attr("data-url"), this.items.push(e)
                    }
                    this.percentageTable = [];
                    for (var s = 0; s < this.items.length; s++) {
                        var o = this.items[s].coords,
                            a = void 0;
                        a = 0 == s ? this.items[this.items.length - 1].coords : this.items[s - 1].coords;
                        var r = void 0;
                        r = s == this.items.length - 1 ? this.items[0].coords : this.items[s + 1].coords, this.percentageTable[s] = {
                            min: a,
                            mid: o,
                            max: r
                        }
                    }
                }
            }, {
                key: "initEvents",
                value: function() {
                    var e = this;
                    this.manageDragAndDrop(), this.manageKeyboard(), this.manageResize(), g.on(kt.GOING_TO, function(t) {
                        e.triggerEvents(t.options.index), y.removeClass(bt)
                    }), this.onHomeLinkSliderHoverBind = function(t) {
                        "enter" == t.options.value ? e.pauseTimer() : e.resumeTimerCountdown()
                    }, g.on(yt.HOVER, this.onHomeLinkSliderHoverBind), g.on(kt.KILL, function() {
                        return e.kill()
                    })
                }
            }, {
                key: "initTween",
                value: function() {
                    var d = this;
                    this.masterTween = new TimelineMax({
                        onUpdate: function() {
                            var t = d.masterTween.progress();
                            for (var e in d.items) {
                                var i = d.percentageTable[e],
                                    n = void 0;
                                if (i.mid > i.max && (t > i.mid || t < i.max)) {
                                    var s = i.mid,
                                        o = i.max,
                                        a = t;
                                    o < s && (a < (o = o + 1 - s) ? a = a + 1 - s : a -= s, s -= s), n = (a - s) / (o - s), n *= .5, n += .5
                                } else if (i.min > i.mid && (t > i.min || t < i.mid)) {
                                    var r = i.min,
                                        l = i.mid,
                                        h = t;
                                    l < r && (h < (l = l + 1 - r) ? h = h + 1 - r : h -= r, r -= r), n = (h - r) / (l - r), n *= .5
                                } else if (t < i.mid) {
                                    var c = i.min;
                                    n = (t - c) / (i.mid - c), n *= .5
                                } else {
                                    var u = i.mid;
                                    n = (t - u) / (i.max - u), n *= .5, n += .5
                                }
                                n < 0 ? n = 0 : 1 < n && (n = 1), d.items && d.items[e] && d.items[e].tweenVisual && d.items[e].tweenVisual.progress && d.items[e].tweenVisual.progress(n)
                            }
                        }
                    }), this.masterTween.addLabel("start", 0), window.isTouch ? this.masterTween.fromTo([this.$visualsList], 10, {
                        x: "0%"
                    }, {
                        x: "-100%",
                        force3D: !0,
                        ease: Linear.easeNone
                    }, "start") : this.masterTween.fromTo([this.$visualsList], 10, {
                        y: "0%"
                    }, {
                        y: "-100%",
                        force3D: !0,
                        ease: Linear.easeNone
                    }, "start"), this.masterTween.progress(.01).progress(0).pause()
                }
            }, {
                key: "initColorTween",
                value: function() {
                    var t = this;
                    this.flag = {
                        offset: 0
                    }, this.color = JSON.parse(JSON.stringify(this.items[0].color)), this.colorTween = new TimelineMax({
                        onUpdate: function() {
                            g.triggerHandler({
                                type: G.UPDATE_COLOR,
                                options: t.color
                            }), g.triggerHandler({
                                type: G.SET,
                                options: {
                                    offset: t.flag.offset
                                }
                            })
                        }
                    });
                    for (var e = 0; e < this.items.length / 2; e++) {
                        var i = e + 1;
                        i >= this.items.length / 2 && (i = 0), this.colorTween.fromTo(this.flag, .5, {
                            offset: .8
                        }, {
                            offset: 0,
                            ease: Linear.easeNone
                        }, e), this.colorTween.fromTo(this.flag, .5, {
                            offset: 0
                        }, {
                            offset: -.8,
                            ease: Linear.easeNone
                        }, e + .5), this.colorTween.fromTo(this.color, 1, {
                            r: this.items[e].color.r,
                            g: this.items[e].color.g,
                            b: this.items[e].color.b
                        }, {
                            r: this.items[i].color.r,
                            g: this.items[i].color.g,
                            b: this.items[i].color.b,
                            ease: Linear.easeNone
                        }, e)
                    }
                    this.colorTween.progress(0), this.colorTween.pause()
                }
            }, {
                key: "initLerp",
                value: function() {
                    var i = this;
                    this.updateRAF = function() {
                        var t = Y(i.masterTween.progress(), i.getClosestInfiniteCoord(i.progressTarget, i.masterTween.progress()), i.lerpFactors.visuals);
                        t < 0 ? t = 1 - Math.abs(t) : 1 < t && (t = Math.abs(t) - 1), i.masterTween.progress(t);
                        var e = Y(i.colorTween.progress(), i.getClosestInfiniteCoord(i.progressTarget, i.colorTween.progress()), i.lerpFactors.color);
                        e < 0 ? e = 1 - Math.abs(e) : 1 < e && (e = Math.abs(e) - 1), i.colorTween.progress(e), i.raf = requestAnimationFrame(i.updateRAF)
                    }, this.updateRAF()
                }
            }, {
                key: "setCurrentSlide",
                value: function(t) {
                    -1 == t && console.error(t), this.items[this.currentSlide] && (this.items[this.currentSlide].current = !1), this.currentSlide = t, this.items[this.currentSlide].current = !0
                }
            }, {
                key: "launch",
                value: function() {
                    var t = this;
                    this.initEvents(), this.goTo(0), setTimeout(function() {
                        g.triggerHandler({
                            type: yt.UPDATE,
                            options: {
                                url: t.$visualsItem.eq(0).attr("data-url")
                            }
                        })
                    }, 300)
                }
            }, {
                key: "goTo",
                value: function(t) {
                    var e = this,
                        i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : CustomEase.create("custom", "M0,0,C0.378,0,0.192,1,1,1");
                    this.canScroll = !1, this.setCurrentSlide(t);
                    var s = {
                        value: this.progressTarget
                    };
                    this.throwTween = TweenMax.to(s, i, {
                        value: this.getClosestInfiniteCoord(this.items[t].coords),
                        ease: n,
                        onUpdate: function() {
                            var t = s.value;
                            t < 0 ? t = 1 - Math.abs(t) : 1 < t && (t = Math.abs(t) - 1), e.progressTarget = t
                        },
                        onComplete: function() {
                            e.grabbed = !1, e.canScroll = !0, e.timerPaused ? e.resumeTimerCountdown() : e.interval && e.interval.restart && e.interval.restart()
                        }
                    })
                }
            }, {
                key: "goToNext",
                value: function(t) {
                    var e;
                    e = this.currentSlide == this.items.length - 1 ? 0 : this.currentSlide + 1, this.goTo(e, 1.4, t), g.triggerHandler({
                        type: G.TRIGGER,
                        options: {
                            direction: "next"
                        }
                    }), g.triggerHandler({
                        type: kt.GOING_TO,
                        options: {
                            index: e
                        }
                    })
                }
            }, {
                key: "goToPrev",
                value: function(t) {
                    var e;
                    e = 0 == this.currentSlide ? this.items.length - 1 : this.currentSlide - 1, this.goTo(e, 1.4, t), g.triggerHandler({
                        type: G.TRIGGER,
                        options: {
                            direction: "prev"
                        }
                    }), g.triggerHandler({
                        type: kt.GOING_TO,
                        options: {
                            index: e
                        }
                    })
                }
            }, {
                key: "triggerEvents",
                value: function(t) {
                    g.triggerHandler({
                        type: ct.GOTO,
                        options: {
                            index: t
                        }
                    }), g.triggerHandler({
                        type: yt.UPDATE,
                        options: {
                            url: this.items[t].url
                        }
                    })
                }
            }, {
                key: "startTimer",
                value: function() {
                    var t = this;
                    this.$sliderProgress = $(".js-fancy-slider-progress"), this.timerStatus = {
                        progress: 0
                    }, this.interval = TweenMax.fromTo(this.timerStatus, 6, {
                        progress: 0
                    }, {
                        progress: 1,
                        ease: Linear.easeNone,
                        onStart: function() {
                            TweenMax.to(t.$sliderProgress, .5, {
                                opacity: 1,
                                ease: Linear.easeNone
                            })
                        },
                        onComplete: function() {
                            TweenMax.to(t.$sliderProgress, .5, {
                                opacity: 0,
                                ease: Linear.easeNone
                            }), t.goToNext()
                        },
                        onUpdate: function() {
                            TweenMax.set(t.$sliderProgress, {
                                scaleX: t.timerStatus.progress
                            })
                        }
                    })
                }
            }, {
                key: "resumeTimer",
                value: function() {
                    this.timerPaused && this.interval && (clearTimeout(this.delayTimerTimeout), this.interval.restart(), this.timerPaused = !1)
                }
            }, {
                key: "resumeTimerCountdown",
                value: function() {
                    var t = this,
                        e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3;
                    this.timerPaused && this.interval && (clearTimeout(this.delayTimerTimeout), this.delayTimerTimeout = setTimeout(function() {
                        t.interval.restart(), t.timerPaused = !1
                    }, e))
                }
            }, {
                key: "pauseTimer",
                value: function() {
                    this.interval && (TweenMax.to(this.$sliderProgress, .5, {
                        scaleX: 0
                    }), this.timerPaused = !0, this.interval.pause(), clearTimeout(this.delayTimerTimeout))
                }
            }, {
                key: "manageResize",
                value: function() {
                    var a = this;
                    this.checkResize = function() {
                        a.resizeTick || (requestAnimationFrame(function() {
                            ! function() {
                                var t = a.masterTween.progress();
                                a.masterTween.progress(0);
                                var e = !0,
                                    i = !1,
                                    n = void 0;
                                try {
                                    for (var s, o = a.items[Symbol.iterator](); !(e = (s = o.next()).done); e = !0) s.value.initTweens()
                                } catch (t) {
                                    i = !0, n = t
                                } finally {
                                    try {
                                        e || null == o.return || o.return()
                                    } finally {
                                        if (i) throw n
                                    }
                                }
                                a.masterTween.progress(t)
                            }(), a.resizeTick = !1
                        }), a.resizeTick = !0)
                    }, v.on(kt.RESIZE, this.checkResize), this.$el.find("img").each(function(t, e) {
                        e.onload = a.checkResize.bind(a)
                    })
                }
            }, {
                key: "manageDragAndDrop",
                value: function() {
                    var s = this;
                    this.panManager = new Hammer.Manager(this.el), this.panManager.add(new Hammer.Pan({
                        direction: window.isTouch ? Hammer.DIRECTION_HORIZONTAL : Hammer.DIRECTION_VERTICAL,
                        threshold: window.isTouch ? 10 : 0
                    })), this.onPanStart = function(t) {
                        s.pauseTimer(), s.$el.toggleClass("grabbed", !0), s.grabbed = !0, s.thrown = !1, s.throwTween && s.throwTween.kill && s.throwTween.kill(), s.progressOnGrabStart = s.progressTarget, g.triggerHandler({
                            type: G.GRAB
                        }), y.addClass(bt)
                    }, this.panManager.on("panstart", this.onPanStart), this.onPanMove = function(t) {
                        if (s.grabbed) {
                            var e, i;
                            window.isTouch ? (e = t.deltaX / s.getDeltaScreenDivider() / s.items.length, i = s.progressOnGrabStart - e, s.panSpeed = t.velocityX) : (e = t.deltaY / s.getDeltaScreenDivider() / s.items.length, i = s.progressOnGrabStart - e, s.panSpeed = t.velocityY), i < 0 ? i = 1 - Math.abs(i) : 1 < i && (i = Math.abs(i) - 1), s.progressTarget = i;
                            var n = 100 * (t.center.y - s.$el.height() / 2) / s.$el.height();
                            g.triggerHandler({
                                type: mt.SET,
                                options: {
                                    y: n
                                }
                            })
                        }
                    }, this.panManager.on("panstart panmove", this.onPanMove), this.onPanEnd = function(t) {
                        s.grabbed && (s.$el.toggleClass("grabbed", !1), s.thrown = !0, s.speed = s.panSpeed, s.grabbEnd = Date.now(), s.lastUpdateAfterThrow = s.grabbEnd, s.resumeTimerCountdown(), s.updateAfterThrow(), g.triggerHandler({
                            type: G.RELEASE
                        }), g.triggerHandler({
                            type: mt.RELEASE
                        }))
                    }, this.panManager.on("panend", this.onPanEnd)
                }
            }, {
                key: "manageKeyboard",
                value: function() {
                    var e = this;
                    g.on(kt.KEYDOWN, function(t) {
                        if (e.canScroll) switch (t.keyCode) {
                            case 40:
                                e.pauseTimer(), e.goToNext();
                                break;
                            case 38:
                                e.pauseTimer(), e.goToPrev()
                        }
                    })
                }
            }, {
                key: "updateAfterThrow",
                value: function() {
                    var s = this,
                        t = Date.now(),
                        e = t - this.lastUpdateAfterThrow,
                        i = this.speed * e / this.getDeltaScreenDivider() / this.items.length,
                        n = this.progressTarget - i;
                    if (n < 0 ? n = 1 - Math.abs(n) : 1 < n && (n = Math.abs(n) - 1), this.progressTarget = n, this.speed *= .88, Math.abs(this.speed) < .01) {
                        this.thrown = !1;
                        var o = L(this.progressTarget, this.getInfiniteCoords());
                        o < 0 ? o = 1 - Math.abs(o) : 1 < o && (o = Math.abs(o) - 1);
                        var a = this.items.find(function(t) {
                            if (t.coords == parseFloat((o % 1).toFixed(6))) return !0
                        });
                        this.goTo(this.items.indexOf(a), .5, Power2.easeOut), g.triggerHandler({
                            type: kt.GOING_TO,
                            options: {
                                index: this.items.indexOf(a)
                            }
                        })
                    } else if (t >= this.grabbEnd + 50) {
                        this.thrown = !1, this.canScroll = !1;
                        var r = 1e3 * this.speed / this.getDeltaScreenDivider() / this.items.length,
                            l = {
                                value: this.progressTarget
                            };
                        this.throwTween && this.throwTween.kill && this.throwTween.kill(), this.throwTween = TweenMax.to(l, 1.33, {
                            throwProps: {
                                value: {
                                    velocity: -r,
                                    end: function(t) {
                                        var e = L(t, s.getInfiniteCoords()),
                                            i = s.getCoordFromInfiniteCoord(e),
                                            n = s.items.map(function(t) {
                                                return t.coords
                                            }).indexOf(parseFloat((i % 1).toFixed(6)));
                                        return g.triggerHandler({
                                            type: kt.GOING_TO,
                                            options: {
                                                index: n
                                            }
                                        }), e
                                    }
                                }
                            },
                            ease: Power4.easeOut,
                            onUpdate: function() {
                                var t = l.value;
                                t < 0 ? t = 1 - Math.abs(t) : 1 < t && (t = Math.abs(t) - 1), s.progressTarget = t
                            },
                            onComplete: function() {
                                s.grabbed = !1, s.canScroll = !0;
                                var t = s.items.map(function(t) {
                                    return t.coords
                                });
                                0 == s.items[0].coords && t.push(1);
                                var e = L(s.progressTarget, t);
                                s.setCurrentSlide(t.indexOf(e) % s.items.length), s.goTo(s.currentSlide, 0), s.timerPaused ? s.resumeTimerCountdown() : s.interval && s.interval.restart && s.interval.restart()
                            }
                        })
                    }
                    this.lastUpdateAfterThrow = t, !this.toDestroy && this.thrown && 0 != this.speed && requestAnimationFrame(this.updateAfterThrow.bind(this))
                }
            }, {
                key: "getInfiniteCoords",
                value: function() {
                    var t = e(new Set(this.items.map(function(t) {
                        return t.coords
                    })));
                    return e(new Set([].concat(e(t.map(function(t) {
                        return t - 1
                    })), e(t), e(t.map(function(t) {
                        return t + 1
                    }))))).sort(function(t, e) {
                        return t - e
                    })
                }
            }, {
                key: "getClosestInfiniteCoord",
                value: function(t, e) {
                    return t = parseFloat((t % 1).toFixed(6)), null == e && (e = this.progressTarget), L(e, [t - 1, t, t + 1])
                }
            }, {
                key: "getCoordFromInfiniteCoord",
                value: function(t) {
                    return t < 0 ? t + 1 : 2 <= t ? t - 1 : t
                }
            }, {
                key: "kill",
                value: function() {
                    var t = !0,
                        e = !1,
                        i = void 0;
                    try {
                        for (var n, s = this.items[Symbol.iterator](); !(t = (n = s.next()).done); t = !0) {
                            var o = n.value;
                            o.destroy(), o = null
                        }
                    } catch (t) {
                        e = !0, i = t
                    } finally {
                        try {
                            t || null == s.return || s.return()
                        } finally {
                            if (e) throw i
                        }
                    }
                    v.off(".fancySlider"), g.off(".fancySlider")
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), clearTimeout(this.delayTimerTimeout), this.interval.kill(), this.masterTween.kill(), this.throwTween && this.throwTween.kill && this.throwTween.kill(), this.panManager.off("panstart", this.onPanStart), this.panManager.off("panstart panmove", this.onPanMove), this.panManager.off("panend", this.onPanEnd), this.panManager.destroy(), this.panManager = null, v.off(kt.RESIZE, this.checkResize), this.$el.off(".".concat(Et)), g.off(".".concat(Et)), window.cancelAnimationFrame(this.raf), g.off(yt.HOVER, this.onHomeLinkSliderHoverBind)
                }
            }]), i
        }(),
        Ct = "".concat(t, ".").concat("Load"),
        xt = {
            CLICK: "click.".concat(Ct),
            GOTO: "goto.".concat(Ct),
            RESIZE: "resize.".concat(Ct),
            INIT_MODULES: "initModules.".concat(Ct),
            INIT_SCOPED_MODULES: "initScopedModules.".concat(Ct),
            DELETE_SCOPED_MODULES: "deleteScopedModules.".concat(Ct),
            INIT_GLOBALS: "initGlobals.".concat(Ct),
            READYTOANIMATE: "readyToAnimate.".concat(Ct),
            PAGE_CHANGE: "pageChange.".concat(Ct)
        },
        Mt = function(t) {
            function e(t) {
                return o(this, e), f(this, d(e).call(this, t))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    var e = new P({
                        enterDelay: 1e3,
                        loadingClass: "has-dom-loading",
                        loadedClass: "has-dom-ready",
                        readyClass: "has-dom-animated",
                        transitionsPrefix: "is-transition-",
                        transitions: {
                            nav: {},
                            play: {
                                exitDelay: 1600
                            },
                            back: {},
                            project: {},
                            projectList: {
                                enterDelay: 0
                            },
                            playArticle: {
                                enterDelay: 100,
                                loadingClass: "is-loading",
                                loadedClass: "is-loaded",
                                readyClass: "is-animated"
                            }
                        }
                    });
                    e.on("loading", function(t) {
                        y.removeClass("has-nav-open is-not-top -first ui-light ui-dark has-quick-menu"), TweenMax.set(T, {
                            clearProps: "background-color"
                        }), g.triggerHandler({
                            type: xt.PAGE_CHANGE
                        }), "playArticle" != t && "projectList" != t && y.removeClass("has-dom-loaded"), "project" == t ? (g.triggerHandler({
                            type: G.GROW
                        }), g.triggerHandler({
                            type: kt.KILL
                        })) : $(".js-preloader-background").css({
                            "background-color": "black"
                        })
                    }), e.on("loaded", function(t, e, i) {
                        g.triggerHandler({
                            type: xt.DELETE_SCOPED_MODULES,
                            $scope: $(e)
                        }), window.scroll = {
                            x: 0,
                            y: 0,
                            direction: null,
                            limit: 0
                        }, g.triggerHandler({
                            type: xt.INIT_SCOPED_MODULES,
                            $scope: $(i)
                        }), setTimeout(function() {
                            y.addClass("has-dom-loaded"), y.removeClass("has-dom-loading")
                        }, 600), "play" == y.attr("data-template") ? setTimeout(function() {
                            g.triggerHandler({
                                type: N.COLOR_SCHEME,
                                options: {
                                    scheme: _
                                }
                            })
                        }, 300) : g.triggerHandler({
                            type: N.COLOR_SCHEME,
                            options: {
                                scheme: B
                            }
                        }), "default" == y.attr("data-pageColor") ? TweenMax.set(T, {
                            clearProps: "background-color"
                        }) : TweenMax.set(T, {
                            backgroundColor: y.attr("data-pageColor")
                        }), "projectList" === t && $(".c-projectList_wrapper").removeClass("has-dom-loading")
                    }), e.on("ready", function(t, e) {
                        "projectList" === t && (g.triggerHandler({
                            type: et.REBUILD
                        }), g.triggerHandler({
                            type: et.SCROLLTO,
                            options: {
                                targetElem: $(".js-project-list")
                            }
                        }), v.triggerHandler({
                            type: "resize"
                        })), g.triggerHandler({
                            type: xt.READYTOANIMATE
                        }), window.ga && ga("send", "pageview")
                    }), e.on("images", function() {
                        requestAnimationFrame(function() {
                            requestAnimationFrame(function() {
                                v.triggerHandler({
                                    type: "resize"
                                })
                            })
                        })
                    }), g.on(xt.GOTO, function(t) {
                        e.checkClick(t)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(e.prototype), "destroy", this).call(this), g.off(".".concat(Ct))
                }
            }]), e
        }(),
        $t = Object.getOwnPropertySymbols,
        Lt = Object.prototype.hasOwnProperty,
        Rt = Object.prototype.propertyIsEnumerable;
    var Ot = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                }).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                n[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var i, n, s = function(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }(t), o = 1; o < arguments.length; o++) {
            for (var a in i = Object(arguments[o])) Lt.call(i, a) && (s[a] = i[a]);
            if ($t) {
                n = $t(i);
                for (var r = 0; r < n.length; r++) Rt.call(i, n[r]) && (s[n[r]] = i[n[r]])
            }
        }
        return s
    };

    function It() {}
    It.prototype = {
        on: function(t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({
                fn: e,
                ctx: i
            }), this
        },
        once: function(t, e, i) {
            var n = this;

            function s() {
                n.off(t, s), e.apply(i, arguments)
            }
            return s._ = e, this.on(t, s, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++) i[n].fn.apply(i[n].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {}),
                n = i[t],
                s = [];
            if (n && e)
                for (var o = 0, a = n.length; o < a; o++) n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
            return s.length ? i[t] = s : delete i[t], this
        }
    };
    var Pt = It,
        At = b(function(t, e) {
            (function() {
                (null !== e ? e : this).Lethargy = function() {
                    function t(t, e, i, n) {
                        this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != e ? 1 + Math.abs(e) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != n ? n : 150, this.lastUpDeltas = function() {
                            var t, e, i;
                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--) i.push(null);
                            return i
                        }.call(this), this.lastDownDeltas = function() {
                            var t, e, i;
                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--) i.push(null);
                            return i
                        }.call(this), this.deltasTimestamp = function() {
                            var t, e, i;
                            for (i = [], t = 1, e = 2 * this.stability; 1 <= e ? t <= e : e <= t; 1 <= e ? t++ : t--) i.push(null);
                            return i
                        }.call(this)
                    }
                    return t.prototype.check = function(t) {
                        var e;
                        return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), 0 < e ? (this.lastUpDeltas.push(e), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(e), this.lastDownDeltas.shift(), this.isInertia(-1))
                    }, t.prototype.isInertia = function(t) {
                        var e, i, n, s, o, a, r;
                        return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (n = e.slice(0, this.stability), i = e.slice(this.stability, 2 * this.stability), r = n.reduce(function(t, e) {
                            return t + e
                        }), o = i.reduce(function(t, e) {
                            return t + e
                        }), a = r / n.length, s = o / i.length, Math.abs(a) < Math.abs(s * this.tolerance) && this.sensitivity < Math.abs(s) && t)
                    }, t.prototype.showLastUpDeltas = function() {
                        return this.lastUpDeltas
                    }, t.prototype.showLastDownDeltas = function() {
                        return this.lastDownDeltas
                    }, t
                }()
            }).call(k)
        }),
        jt = {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch: "ontouchstart" in document,
            hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: -1 < navigator.userAgent.indexOf("Firefox")
        },
        Ht = Object.prototype.toString,
        Dt = Object.prototype.hasOwnProperty;

    function Nt(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    var Bt = At.Lethargy,
        _t = "virtualscroll",
        Ut = Vt,
        zt = 37,
        Ft = 38,
        Wt = 39,
        Gt = 40,
        qt = 32;

    function Vt(t) {
        ! function(t) {
            if (!t) return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
                for (var i in t) Dt.call(t, i) && "function" == typeof t[i] && "[object Function]" == Ht.call(t[i]) && e.push(i);
            for (var n = 0; n < e.length; n++) {
                var s = e[n];
                t[s] = Nt(t[s], t)
            }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"), this.el = window, t && t.el && (this.el = t.el, delete t.el), this.options = Ot({
            mouseMultiplier: 1,
            touchMultiplier: 2,
            firefoxMultiplier: 15,
            keyStep: 120,
            preventTouch: !1,
            unpreventTouchClass: "vs-touchmove-allowed",
            limitInertia: !1,
            useKeyboard: !0
        }, t), this.options.limitInertia && (this._lethargy = new Bt), this._emitter = new Pt, this._event = {
            y: 0,
            x: 0,
            deltaX: 0,
            deltaY: 0
        }, this.touchStartX = null, this.touchStartY = null, this.bodyTouchAction = null, void 0 !== this.options.passive && (this.listenerOptions = {
            passive: this.options.passive
        })
    }
    Vt.prototype._notify = function(t) {
        var e = this._event;
        e.x += e.deltaX, e.y += e.deltaY, this._emitter.emit(_t, {
            x: e.x,
            y: e.y,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            originalEvent: t
        })
    }, Vt.prototype._onWheel = function(t) {
        var e = this.options;
        if (!this._lethargy || !1 !== this._lethargy.check(t)) {
            var i = this._event;
            i.deltaX = t.wheelDeltaX || -1 * t.deltaX, i.deltaY = t.wheelDeltaY || -1 * t.deltaY, jt.isFirefox && 1 == t.deltaMode && (i.deltaX *= e.firefoxMultiplier, i.deltaY *= e.firefoxMultiplier), i.deltaX *= e.mouseMultiplier, i.deltaY *= e.mouseMultiplier, this._notify(t)
        }
    }, Vt.prototype._onMouseWheel = function(t) {
        if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
            var e = this._event;
            e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0, e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta, this._notify(t)
        }
    }, Vt.prototype._onTouchStart = function(t) {
        var e = t.targetTouches ? t.targetTouches[0] : t;
        this.touchStartX = e.pageX, this.touchStartY = e.pageY
    }, Vt.prototype._onTouchMove = function(t) {
        var e = this.options;
        e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
        var i = this._event,
            n = t.targetTouches ? t.targetTouches[0] : t;
        i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier, i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier, this.touchStartX = n.pageX, this.touchStartY = n.pageY, this._notify(t)
    }, Vt.prototype._onKeyDown = function(t) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var i = window.innerHeight - 40;
        switch (t.keyCode) {
            case zt:
            case Ft:
                e.deltaY = this.options.keyStep;
                break;
            case Wt:
            case Gt:
                e.deltaY = -this.options.keyStep;
                break;
            case t.shiftKey:
                e.deltaY = i;
                break;
            case qt:
                e.deltaY = -i;
                break;
            default:
                return
        }
        this._notify(t)
    }, Vt.prototype._bind = function() {
        jt.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions), jt.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), jt.hasTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), jt.hasPointer && jt.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", this.el.addEventListener("MSPointerDown", this._onTouchStart, !0), this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)), jt.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
    }, Vt.prototype._unbind = function() {
        jt.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel), jt.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel), jt.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)), jt.hasPointer && jt.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction, this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)), jt.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
    }, Vt.prototype.on = function(t, e) {
        this._emitter.on(_t, t, e);
        var i = this._emitter.e;
        i && i[_t] && 1 === i[_t].length && this._bind()
    }, Vt.prototype.off = function(t, e) {
        this._emitter.off(_t, t, e);
        var i = this._emitter.e;
        (!i[_t] || i[_t].length <= 0) && this._unbind()
    }, Vt.prototype.reset = function() {
        var t = this._event;
        t.x = 0, t.y = 0
    }, Vt.prototype.destroy = function() {
        this._emitter.off(), this._unbind()
    };
    var Kt = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).isReversed = t.reversed || it.reversed, e.getDirection = t.getDirection || it.getDirection, e.getSpeed = t.getSpeed || it.getSpeed, e.inertia = t.inertia || it.inertia, e.scrollBarClassName = t.scrollBarClassName || it.scrollBarClassName, e.isScrollingClassName = t.isScrollingClassName || it.isScrollingClassName, e.parallaxElements = [], e.isDraggingScrollBar = !1, e
            }
            return c(i, nt), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    y.addClass("has-smooth-scroll"), this.instance = new Ut({
                        mouseMultiplier: -1 < navigator.platform.indexOf("Win") ? 1 : .4,
                        touchMultiplier: 4,
                        firefoxMultiplier: 30
                    }), this.inertia = .1 * this.inertia, this.instance.scroll = {
                        x: 0,
                        y: 0,
                        direction: null
                    }, this.instance.delta = {
                        x: 0,
                        y: 0
                    }, this.getSpeed && (this.instance.scroll.speed = 0), this.instance.on(function(t) {
                        e.stop || e.isDraggingScrollBar || (e.instance.delta.y -= t.deltaY, e.isScrolling = !0, E.classList.add(e.isScrollingClassName), e.instance.delta.y < 0 && (e.instance.delta.y = 0), e.instance.delta.y > e.instance.limit && (e.instance.delta.y = e.instance.limit))
                    }), this.setScrollLimit(), this.initScrollBar(), this.addElements(), this.events(), this.preloadImages(), this.timestamp = Date.now(), this.render()
                }
            }, {
                key: "events",
                value: function() {
                    var n = this;
                    this.$container.on(et.REBUILD, function() {
                        n.update()
                    }), this.$container.on(et.UPDATE, function(t, e) {
                        return n.update(e)
                    }), this.$container.on(et.CLICK, ".js-scrollto", function(t) {
                        t.preventDefault();
                        var e = $(t.currentTarget),
                            i = e.data("offset");
                        n.scrollTo({
                            sourceElem: e,
                            offsetElem: i
                        })
                    }), this.$container.on(et.SCROLLTO, function(t) {
                        return n.scrollTo(t.options)
                    }), g.triggerHandler({
                        type: et.ISREADY
                    }), v.on(et.RESIZE, function() {
                        n.update()
                    }), this.$container.on(et.STOP, function() {
                        n.stop = !0
                    }), this.$container.on(et.START, function() {
                        n.stop = !1
                    })
                }
            }, {
                key: "initScrollBar",
                value: function() {
                    var e = this;
                    this.scrollbarWrapper = document.createElement("span"), this.scrollbar = document.createElement("span"), this.scrollbarWrapper.classList.add("".concat(this.scrollBarClassName, "_wrapper")), this.scrollbar.classList.add("".concat(this.scrollBarClassName)), this.scrollbarWrapper.append(this.scrollbar), document.body.append(this.scrollbarWrapper), this.scrollbar.style.height = "".concat(window.innerHeight * window.innerHeight / this.instance.limit, "px"), this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height, this.scrollbar.addEventListener("mousedown", function(t) {
                        return e.getScrollBar(t)
                    }), window.addEventListener("mouseup", function(t) {
                        return e.releaseScrollBar(t)
                    }), window.addEventListener("mousemove", function(t) {
                        return e.moveScrollBar(t)
                    })
                }
            }, {
                key: "reinitScrollBar",
                value: function() {
                    this.scrollbar.style.height = "".concat(window.innerHeight * window.innerHeight / this.instance.limit, "px"), this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height
                }
            }, {
                key: "destroyScrollBar",
                value: function() {
                    var e = this;
                    this.scrollbar.removeEventListener("mousedown", function(t) {
                        return e.getScrollBar(t)
                    }), window.removeEventListener("mouseup", function(t) {
                        return e.releaseScrollBar(t)
                    }), window.removeEventListener("mousemove", function(t) {
                        return e.moveScrollBar(t)
                    })
                }
            }, {
                key: "getScrollBar",
                value: function(t) {
                    this.isScrolling = !1, this.isDraggingScrollBar = !0, E.classList.remove(this.isScrollingClassName)
                }
            }, {
                key: "releaseScrollBar",
                value: function(t) {
                    this.isScrolling = !0, this.isDraggingScrollBar = !1, E.classList.add(this.isScrollingClassName)
                }
            }, {
                key: "moveScrollBar",
                value: function(t) {
                    if (this.isDraggingScrollBar) {
                        var e = 100 * t.pageY / window.innerHeight * this.instance.limit / 100;
                        0 < e && e < this.instance.limit && (this.instance.delta.y = e)
                    }
                }
            }, {
                key: "addElements",
                value: function() {
                    this.animatedElements = [], this.parallaxElements = [];
                    for (var t = $(this.selector), e = t.length, i = 0; i < e; i++) {
                        var n = t.eq(i),
                            s = !!n.attr("data-speed") && n.attr("data-speed") / 10,
                            o = (n.attr("data-position"), n.attr("data-target")),
                            a = (n.attr("data-horizontal"), "string" == typeof n.attr("data-sticky")),
                            r = n.attr("data-sticky-target"),
                            l = o && $(o).length ? $(o) : n,
                            h = l.offset().top + this.instance.scroll.y,
                            c = h + l.outerHeight(),
                            u = null;
                        "string" == typeof n.attr("data-viewport-offset") && (u = n.attr("data-viewport-offset").split(","));
                        var d = "string" == typeof n.attr("data-callback") ? n.attr("data-callback") : null,
                            f = null;
                        if (null != d) {
                            for (var p = d.substr(0, d.indexOf("(")), m = d.substr(d.indexOf("("), d.length - p.length), g = (m = (m = m.replace("(", "")).replace(")", "")).split("|"), v = {}, y = 0; y < g.length; y++) {
                                var w = g[y].split(":");
                                w[0] = w[0].replace(" ", "");
                                var T = void 0;
                                T = "true" === w[1] || "false" !== w[1] && (/^\d+$/.test(w[1]) ? parseInt(w[1]) : w[1]), v[w[0]] = T
                            }
                            f = {
                                event: p,
                                options: v
                            }
                        }
                        var E = "string" == typeof n.attr("data-repeat"),
                            k = n.attr("data-inview-class");
                        void 0 === k && (k = "is-show"), !o && n.attr("data-transform") && (c = (h -= parseFloat(n.attr("data-transform").y)) + l.outerHeight()), a && (c = void 0 === r ? 1 / 0 : $(r).offset().top - n.height() + this.instance.scroll.y);
                        var b = {
                            $element: n,
                            inViewClass: k,
                            limit: c,
                            offset: Math.round(h),
                            repeat: E,
                            callback: f,
                            viewportOffset: u
                        };
                        if (!1 !== s) {
                            var S = n.attr("data-position"),
                                C = "string" == typeof n.attr("data-horizontal"),
                                x = (c - h) / 2 + h,
                                M = n.attr("data-delay");
                            b.horizontal = C, b.middle = x, b.offset = h, b.position = S, b.speed = s, b.delay = M, this.parallaxElements.push(b)
                        } else b.sticky = a, this.animatedElements.push(b), a && this.toggleElement(b)
                    }
                }
            }, {
                key: "render",
                value: function(t, e) {
                    var i = this;
                    this.raf = requestAnimationFrame(function() {
                        return i.render()
                    }), this.isScrolling ? this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia) : this.isDraggingScrollBar ? this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, .2) : this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, .5 * this.inertia), this.$container.css({
                        "-webkit-transform": "translate3d(0, ".concat(-this.instance.scroll.y, "px, 0)"),
                        "-ms-transform": "translate3d(0, ".concat(-this.instance.scroll.y, "px, 0)"),
                        transform: "translate3d(0, ".concat(-this.instance.scroll.y, "px, 0)")
                    }), this.getDirection && (this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.scroll.direction && (this.instance.scroll.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.scroll.direction && (this.instance.scroll.direction = "up")), this.getSpeed && (this.instance.delta.y !== this.instance.scroll.y ? (this.instance.scroll.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp), this.instance.delta.y = this.instance.delta.y) : this.instance.scroll.speed = 0), Math.abs(this.instance.scroll.y - this.instance.delta.y) < 1 && E.classList.remove(this.isScrollingClassName), this.transformElements(t), this.animateElements(), this.callbacks.onScroll(this.instance), this.timestamp = Date.now();
                    var n = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
                    this.scrollbar.style.transform = "translate3d(0,".concat(n, "px,0)")
                }
            }, {
                key: "lerp",
                value: function(t, e, i) {
                    return (1 - i) * t + i * e
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    var e = this,
                        i = t.targetElem,
                        n = t.sourceElem,
                        s = t.offsetElem,
                        o = M(t.targetOffset) ? parseInt(t.targetOffset) : 0,
                        a = M(t.delay) ? parseInt(t.delay) : 0,
                        r = (M(t.speed) && parseInt(t.speed), t.toTop),
                        l = t.toBottom,
                        h = 0;
                    if (void 0 === i && void 0 === n && void 0 === o) return console.warn("You must specify at least one parameter."), !1;
                    if (void 0 !== i && i instanceof jQuery && 0 < i.length && (o = i.offset().top + this.instance.scroll.y + o), void 0 !== n && n instanceof jQuery && 0 < n.length) {
                        var c = "";
                        c = n.attr("data-target") ? n.attr("data-target") : n.attr("href"), o = $(c).offset().top + this.instance.scroll.y + o
                    }
                    void 0 !== s && (h = $(s).outerHeight(), o -= h), !0 === r ? o = 0 : !0 === l && (o = this.instance.limit), setTimeout(function() {
                        e.isScrolling = !1, e.instance.delta.y = o, E.classList.remove(e.isScrollingClassName)
                    }, a)
                }
            }, {
                key: "setScrollLimit",
                value: function() {
                    this.instance.limit = this.$container[0].offsetHeight - this.windowHeight
                }
            }, {
                key: "transformElement",
                value: function(t, e, i, n, s) {
                    if (e = e || 0, i = i || 0, n = n || 0, s) {
                        var o = this.getTranslate(t[0]),
                            a = this.lerp(o.y, i, s),
                            r = this.lerp(o.x, e, s);
                        t.css({
                            "-webkit-transform": "translate3d(".concat(r, "px, ").concat(a, "px, ").concat(n, "px)"),
                            "-ms-transform": "translate3d(".concat(r, "px, ").concat(a, "px, ").concat(n, "px)"),
                            transform: "translate3d(".concat(r, "px, ").concat(a, "px, ").concat(n, "px)")
                        }).data("transform", {
                            x: r,
                            y: a,
                            z: n
                        })
                    } else t.css({
                        "-webkit-transform": "translate3d(".concat(e, "px, ").concat(i, "px, ").concat(n, "px)"),
                        "-ms-transform": "translate3d(".concat(e, "px, ").concat(i, "px, ").concat(n, "px)"),
                        transform: "translate3d(".concat(e, "px, ").concat(i, "px, ").concat(n, "px)")
                    }).data("transform", {
                        x: e,
                        y: i,
                        z: n
                    })
                }
            }, {
                key: "getTranslate",
                value: function(t) {
                    var e = {};
                    if (window.getComputedStyle) {
                        var i = getComputedStyle(t),
                            n = i.transform || i.webkitTransform || i.mozTransform,
                            s = n.match(/^matrix3d\((.+)\)$/);
                        return s ? parseFloat(s[1].split(", ")[13]) : (s = n.match(/^matrix\((.+)\)$/), e.x = s ? parseFloat(s[1].split(", ")[4]) : 0, e.y = s ? parseFloat(s[1].split(", ")[5]) : 0, e)
                    }
                }
            }, {
                key: "transformElements",
                value: function(t) {
                    if (0 < this.parallaxElements.length)
                        for (var e = this.instance.scroll.y + this.windowHeight, i = this.instance.scroll.y + this.windowMiddle, n = 0, s = this.parallaxElements.length; n < s; n++) {
                            var o = this.parallaxElements[n],
                                a = !1,
                                r = e + this.windowHeight >= o.offset && this.instance.scroll.y <= o.limit;
                            if (this.toggleElement(o, n), t && !r && o.speed && "top" !== o.position && (a = (o.offset - this.windowMiddle - o.middle) * -o.speed), r && o.speed) switch (o.position) {
                                case "top":
                                    a = this.instance.scroll.y * -o.speed;
                                    break;
                                case "bottom":
                                    a = (this.instance.limit - e + this.windowHeight) * o.speed;
                                    break;
                                default:
                                    a = (i - o.middle) * -o.speed
                            }
                            M(a) && (o.horizontal ? this.transformElement(o.$element, a, 0, 0, o.delay) : this.transformElement(o.$element, 0, a, 0, o.delay))
                        }
                }
            }, {
                key: "update",
                value: function(t) {
                    t = t || {}, this.windowHeight = v.height(), this.windowMiddle = this.windowHeight / 2, this.setScrollLimit(), this.addElements(), this.transformElements(!0), this.reinitScrollBar()
                }
            }, {
                key: "setWheelDirection",
                value: function(t) {
                    this.scrollbar.reverseWheel(t)
                }
            }, {
                key: "preloadImages",
                value: function() {
                    var i = this,
                        n = Array.from(document.querySelectorAll("img"));
                    n.forEach(function(t) {
                        var e = document.createElement("img");
                        e.addEventListener("load", function() {
                            n.splice(n.indexOf(t), 1), 0 === n.length && i.update()
                        }), e.src = t.getAttribute("src")
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), y.removeClass("has-smooth-scroll"), this.parallaxElements = [], this.instance.destroy(), cancelAnimationFrame(this.raf)
                }
            }]), i
        }(),
        Yt = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).isDraggingClassName = t.isDraggingClassName || it.isDraggingClassName, e.isSmooth = !0, e
            }
            return c(i, Kt), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    y.addClass("has-smooth-scroll"), this.instance = new Ut({
                        mouseMultiplier: -1 < navigator.platform.indexOf("Win") ? 1 : .4,
                        touchMultiplier: 4,
                        firefoxMultiplier: 30
                    }), this.inertia = .1 * this.inertia, this.instance.scroll = {
                        x: 0,
                        y: 0,
                        direction: null
                    }, this.instance.delta = {
                        x: 0,
                        y: 0
                    }, this.getSpeed && (this.instance.scroll.speed = 0), this.instance.on(function(t) {
                        e.isDraggingScrollBar || (e.instance.delta.y -= t.deltaY, e.isScrolling = !0, E.classList.add(e.isScrollingClassName), e.instance.delta.y < 0 && (e.instance.delta.y = 0), e.instance.delta.y > e.instance.limit && (e.instance.delta.y = e.instance.limit))
                    }), this.setScrollLimit(), this.initScrollBar(), this.addElements(), this.events(), this.preloadImages(), this.timestamp = Date.now(), this.render()
                }
            }, {
                key: "events",
                value: function() {
                    var n = this;
                    this.$container.on(et.REBUILD, function() {
                        n.update()
                    }), this.$container.on(et.UPDATE, function(t, e) {
                        return n.update(e)
                    }), this.$container.on(et.CLICK, ".js-scrollto", function(t) {
                        t.preventDefault();
                        var e = $(t.currentTarget),
                            i = e.data("offset");
                        n.scrollTo({
                            sourceElem: e,
                            offsetElem: i
                        })
                    }), g.on(et.SCROLLTO, function(t) {
                        return n.scrollTo(t.options)
                    }), g.triggerHandler({
                        type: et.ISREADY
                    }), v.on(et.RESIZE, function() {
                        n.update()
                    })
                }
            }, {
                key: "addElements",
                value: function() {
                    this.animatedElements = [], this.parallaxElements = [];
                    for (var t = $(this.selector), e = t.length, i = 0; i < e; i++) {
                        var n = t.eq(i);
                        TweenMax.set(n, {
                            clearProps: "transform"
                        });
                        var s = !!M(n.attr("data-speed")) && n.attr("data-speed") / 10,
                            o = (n.attr("data-position"), n.attr("data-target")),
                            a = (n.attr("data-horizontal"), "string" == typeof n.attr("data-sticky")),
                            r = n.attr("data-sticky-target"),
                            l = o && $(o).length ? $(o) : n,
                            h = l.offset().top + this.instance.scroll.y,
                            c = h + l.outerHeight(),
                            u = null;
                        "string" == typeof n.attr("data-viewport-offset") && (u = n.attr("data-viewport-offset").split(","));
                        var d = "string" == typeof n.attr("data-callback") ? n.attr("data-callback") : null,
                            f = null;
                        if (null != d) {
                            for (var p = d.substr(0, d.indexOf("(")), m = d.substr(d.indexOf("("), d.length - p.length), g = (m = (m = m.replace("(", "")).replace(")", "")).split("|"), v = {}, y = 0; y < g.length; y++) {
                                var w = g[y].split(":");
                                w[0] = w[0].replace(" ", "");
                                var T = void 0;
                                T = "true" === w[1] || "false" !== w[1] && (/^\d+$/.test(w[1]) ? parseInt(w[1]) : w[1]), v[w[0]] = T
                            }
                            f = {
                                event: p,
                                options: v
                            }
                        }
                        var E = "string" == typeof n.attr("data-repeat"),
                            k = n.attr("data-inview-class");
                        void 0 === k && (k = "is-show"), !o && n.attr("data-transform") && (h -= parseFloat(n.attr("data-transform").y)), a && (c = void 0 === r ? 1 / 0 : $(r).offset().top - n.outerHeight() + this.instance.scroll.y);
                        var b = {
                            $element: n,
                            inViewClass: k,
                            limit: c,
                            offset: Math.round(h),
                            repeat: E,
                            callback: f,
                            viewportOffset: u
                        };
                        if (!1 !== s) {
                            var S = n.attr("data-position"),
                                C = n.attr("data-horizontal"),
                                x = (c - h) / 2 + h;
                            b.horizontal = C, b.middle = x, b.offset = h, b.position = S, b.speed = s, this.parallaxElements.push(b)
                        } else b.sticky = a, this.animatedElements.push(b), a && this.toggleElement(b)
                    }
                }
            }, {
                key: "transformElements",
                value: function(t) {
                    if (0 < this.parallaxElements.length)
                        for (var e = this.instance.scroll.y + this.windowHeight, i = this.instance.scroll.y + this.windowMiddle, n = 0, s = this.parallaxElements.length; n < s; n++) {
                            var o = this.parallaxElements[n],
                                a = e,
                                r = !1,
                                l = !1;
                            if (l = "full" === o.position ? a >= o.offset && a <= o.limit : a >= o.offset && this.instance.scroll.y <= o.limit, this.toggleElement(o, n), t && !l && o.speed && "top" !== o.position && (r = (o.offset - this.windowMiddle - o.middle) * -o.speed), l && o.speed) switch (o.position) {
                                case "top":
                                    r = this.instance.scroll.y * -o.speed;
                                    break;
                                case "bottom":
                                    r = (this.instance.limit - a) * o.speed;
                                    break;
                                case "after":
                                    r = (e - o.middle) * -o.speed;
                                    break;
                                case "full":
                                    r = (a - o.limit) * o.speed;
                                    break;
                                default:
                                    r = (i - o.middle) * -o.speed
                            } else o.stickyScroll && ((l = a > o.limit) && "down" == this.instance.scroll.direction && this.stickyScrollDistance + o.limit <= a ? (this.stickyScrollDistance = a - o.limit, r = this.stickyScrollDistance) : "up" == this.instance.scroll.direction && this.instance.scroll.y <= this.stickyScrollDistance && (this.stickyScrollDistance = this.instance.scroll.y, r = this.instance.scroll.y));
                            M(r) && (o.horizontal ? this.transformElement(o.$element, r) : this.transformElement(o.$element, 0, r))
                        }
                }
            }, {
                key: "render",
                value: function(t, e) {
                    var i = this;
                    this.raf = requestAnimationFrame(function() {
                        return i.render()
                    }), this.isScrolling ? this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia) : this.isDraggingScrollBar ? this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, .2) : this.instance.scroll.y = this.lerp(this.instance.scroll.y, this.instance.delta.y, this.inertia), this.callbacks.onScroll(this.instance.scroll);
                    var n = "matrix(1,0,0,1,0,".concat(-Math.round(this.instance.scroll.y), ")");
                    this.$container[0].style.webkitTransform = n, this.$container[0].style.MozTransform = n, this.$container[0].style.msTransform = n, this.$container[0].style.OTransform = n, this.$container[0].style.transform = n, this.getDirection && (this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.scroll.direction && (this.instance.scroll.direction = "down", y.attr("data-direction", "down")) : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.scroll.direction && (this.instance.scroll.direction = "up", y.attr("data-direction", "up"))), this.getSpeed && (this.instance.delta.y !== this.instance.scroll.y ? (this.instance.scroll.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp), this.instance.delta.y = this.instance.delta.y) : this.instance.scroll.speed = 0), Math.abs(this.instance.scroll.y - this.instance.delta.y) < 1 && E.classList.remove(this.isScrollingClassName), this.transformElements(t), this.animateElements(), this.timestamp = Date.now();
                    var s = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
                    this.scrollbar.style.transform = "translate3d(0,".concat(s, "px,0)")
                }
            }, {
                key: "getScrollBar",
                value: function(t) {
                    this.isScrolling = !1, this.isDraggingScrollBar = !0, E.classList.remove(this.isScrollingClassName), E.classList.add(this.isDraggingClassName)
                }
            }, {
                key: "releaseScrollBar",
                value: function(t) {
                    this.isScrolling = !0, this.isDraggingScrollBar = !1, E.classList.add(this.isScrollingClassName), E.classList.remove(this.isDraggingClassName)
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), y.removeClass("has-smooth-scroll"), this.parallaxElements = [], this.instance.destroy(), this.scrollbarWrapper.remove(), cancelAnimationFrame(this.raf), g.off(et.PAUSE), g.off(et.RESUME), g.off(et.UPDATE)
                }
            }]), i
        }(),
        Xt = function() {
            function e(t) {
                o(this, e), this.options = t, this.smooth = t.smooth || it.smooth, this.smoothMobile = t.smoothMobile || it.smoothMobile, this.mobileContainer = t.mobileContainer || it.mobileContainer, this.isMobile = !1, this.init()
            }
            return a(e, [{
                key: "init",
                value: function() {
                    var t = this;
                    y[0].scrollTop = 0, w[0].scrollTop = 0, this.smoothMobile || (this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)), this.instance = !0 !== t.smooth || t.isMobile ? (t.mobileContainer && (t.options.container = t.mobileContainer), new nt(t.options)) : new Yt(t.options), this.instance.init();
                    var e = $(".js-scrollto-on-load").first();
                    1 === e.length && g.triggerHandler({
                        type: "Event.SCROLLTO",
                        options: {
                            targetElem: e
                        }
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.instance.destroy()
                }
            }]), e
        }(),
        Zt = "".concat(t, ".").concat("Scroll"),
        Qt = {
            TRIGGER_UI_DARK: "triggerUIDark.".concat(Zt),
            TRIGGER_UI_LIGHT: "triggerUILight.".concat(Zt),
            SHOW_QUICK_MENU: "showQuickMenu.".concat(Zt),
            HIDE_QUICK_MENU: "hideQuickMenu.".concat(Zt)
        },
        Jt = "ui-dark",
        te = "ui-light",
        ee = "has-quick-menu",
        ie = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).mainScroll = "string" == typeof t["main-scroll"], e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.timeout = setTimeout(function() {
                        e.scrollManager = new Xt({
                            container: e.$el,
                            selector: ".js-animate",
                            smooth: !0,
                            smoothMobile: !1,
                            mobileContainer: g,
                            getDirection: !0,
                            getSpeed: !1,
                            inertia: 1,
                            scrollBarClassName: "o-scrollbar",
                            isScrollingClassName: "is-scrolling",
                            isDraggingClassName: "is-dragging",
                            onScroll: function(t) {
                                e.mainScroll && (y.toggleClass("is-top", t.y < 100), y.toggleClass("is-not-top", 100 <= t.y), window.scroll = t, g.triggerHandler({
                                    type: et.SCROLLING
                                }))
                            }
                        })
                    }, 100), this.onUiDarkTrigger = function(t) {
                        null != t.options.direction ? window.scroll.direction === t.options.direction && t.way === t.options.way && (y.addClass(Jt), y.removeClass("".concat(te))) : null == t.options.way ? (y.addClass(Jt), y.removeClass("".concat(te))) : t.way === t.options.way ? (y.addClass(Jt), y.removeClass("".concat(te))) : y.removeClass(Jt)
                    }, g.on(Qt.TRIGGER_UI_DARK, this.onUiDarkTrigger), this.onUiLightTrigger = function(t) {
                        null != t.options.direction ? window.scroll.direction === t.options.direction && t.way === t.options.way && (y.addClass(te), y.removeClass("".concat(Jt))) : null == t.options.way ? (y.addClass(te), y.removeClass("".concat(Jt))) : t.way === t.options.way ? (y.addClass(te), y.removeClass("".concat(Jt))) : y.removeClass(te)
                    }, g.on(Qt.TRIGGER_UI_LIGHT, this.onUiLightTrigger), this.onShowQuickMenuTrigger = function(t) {
                        null != t.options.direction && window.scroll.direction === t.options.direction && t.way === t.options.way && y.addClass(ee)
                    }, g.on(Qt.SHOW_QUICK_MENU, this.onShowQuickMenuTrigger), this.onHideQuickMenuTrigger = function(t) {
                        null != t.options.direction && window.scroll.direction === t.options.direction && t.way === t.options.way && y.removeClass(ee)
                    }, g.on(Qt.HIDE_QUICK_MENU, this.onHideQuickMenuTrigger)
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), g.off(Qt.TRIGGER_UI_DARK, this.onUiDarkTrigger), g.off(Qt.TRIGGER_UI_LIGHT, this.onUiLightTrigger), g.off(Qt.SHOW_QUICK_MENU, this.onShowQuickMenuTrigger), g.off(Qt.HIDE_QUICK_MENU, this.onHideQuickMenuTrigger), clearTimeout(this.timeout), this.scrollManager && this.scrollManager.destroy && this.scrollManager.destroy()
                }
            }]), i
        }(),
        ne = ".js-words",
        se = ".js-words-reverse",
        oe = function(t) {
            function e() {
                return o(this, e), f(this, d(e).apply(this, arguments))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    this.$words = this.$el.find(ne), this.$wordsReverse = this.$el.find(se), this.$words.length && (this.tl = new TimelineMax({
                        repeat: -1
                    }), this.tl.to(this.$words, 22, {
                        x: "-100%",
                        ease: Power0.easeNone,
                        force3D: !0
                    }), this.tl.to(this.$words, 0, {
                        x: 0,
                        force3D: !0
                    })), this.$wordsReverse.length && (this.tlReverse = new TimelineMax({
                        repeat: -1
                    }), this.tlReverse.to(this.$wordsReverse, 0, {
                        x: "-100%",
                        force3D: !0
                    }), this.tlReverse.to(this.$wordsReverse, 22, {
                        x: "0%",
                        ease: Power0.easeNone,
                        force3D: !0
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(e.prototype), "destroy", this).call(this)
                }
            }]), e
        }(),
        ae = "CursorZone",
        re = "".concat(t, ".").concat(ae),
        le = {
            CLICK: "click.".concat(re),
            MOUSEENTER: "mouseenter.".concat(re),
            MOUSELEAVE: "mouseleave.".concat(re),
            MOUSEMOVE: "mousemove.".concat(re),
            MOUSEDOWN: "mousedown.".concat(re),
            MOUSEUP: "mouseup.".concat(re),
            SET_TIMEOUT_DURATION: "setTimeoutDuration.".concat(re),
            SET_TEXT: "setText.".concat(re),
            RESIZE: "resize.".concat(re),
            TRIGGER: "trigger.".concat(ae)
        },
        he = "has-cursor-hover",
        ce = "is-dragging",
        ue = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).log = t.log, e.$cursor = $(".js-cursor", e.$el), e.$span = e.$cursor.find("span"), e.isHover = !1, e.isOverNoHover = !1, e.hideCursor = !1, e.cursorAlwaysVisible = e.$el.hasClass("js-video-cursor"), e.touch = !1, e.draggable = !!t.draggable && t.draggable, e.timeoutDuration = t["timeout-duration"] || !1, e.mouse = {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                }, e.realMouse = {
                    x: e.$el.width() / 2,
                    y: e.$el.height() / 2
                }, e.lastRealMouse = {
                    x: 0,
                    y: 0
                }, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    window.isMobile || (this.$el.on(le.MOUSELEAVE, ".js-no-drag, a:not(.js-hover), iframe", function() {
                        e.touch || (e.isOverNoHover = !1)
                    }), this.$el.on(le.MOUSEENTER, ".js-no-drag, a:not(.js-hover), iframe", function() {
                        e.touch || (e.isOverNoHover = !0)
                    }), this.$el.on(le.MOUSEENTER, function() {
                        clearTimeout(e.timeout)
                    }), this.onTouchStart = function() {
                        e.touch = !0
                    }, this.el.addEventListener("touchstart", this.onTouchStart, {
                        passive: !0
                    }), this.onTouchEnd = function() {
                        e.touch = !1
                    }, this.el.addEventListener("touchend", this.onTouchEnd, {
                        passive: !0
                    }), this.$el.on(le.MOUSEUP, ".js-drag-zone", function() {
                        return e.mouseup()
                    }), this.$el.on(le.MOUSEDOWN, ".js-drag-zone", function(t) {
                        return e.mousedown()
                    }), this.$el.on(le.TRIGGER, function(t) {
                        "enter" === t.way ? e.animate() : cancelAnimationFrame(e.raf)
                    }), this.$el.on(le.SET_TEXT, function(t) {
                        return e.setText(t.options.value)
                    }), this.$el.on(le.SET_TIMEOUT_DURATION, function(t) {
                        return e.setTimeoutDuration(t.options.value)
                    })), "home" === y.attr("data-template") && this.animate(), setTimeout(function() {
                        e.compute(), e.manageResize()
                    }, 700)
                }
            }, {
                key: "compute",
                value: function() {
                    this.hasSmoothScroll = !1, y.hasClass("has-smooth-scroll") && (this.hasSmoothScroll = !0), this.clientWidth = this.el.clientWidth, this.clientHeight = this.el.clientHeight;
                    var t = this.hasSmoothScroll ? window.scroll.y : 0;
                    this.offsetTop = this.$el.offset().top + t, this.offsetLeft = this.$el.offset().left, this.log && console.log(this.offsetTop, this.el)
                }
            }, {
                key: "manageResize",
                value: function() {
                    var t = this,
                        e = !1;
                    this.resizeCheckBind = function() {
                        e || (requestAnimationFrame(function() {
                            t.compute(), e = !1
                        }), e = !0)
                    }, v.on(le.RESIZE, this.resizeCheckBind)
                }
            }, {
                key: "mousedown",
                value: function() {
                    this.draggable && this.$el.addClass(ce)
                }
            }, {
                key: "mouseup",
                value: function() {
                    this.draggable && this.$el.removeClass(ce)
                }
            }, {
                key: "animate",
                value: function() {
                    this.realMouse = {
                        x: Math.round(100 * (window.cursor.x - this.offsetLeft)) / 100,
                        y: Math.round(100 * (window.cursor.y - (this.offsetTop - window.scroll.y))) / 100
                    }, this.log && console.log(this.realMouse), window.touch ? this.isHover = !1 : this.isHover = 0 <= this.realMouse.x && this.realMouse.x <= this.clientWidth && 0 <= this.realMouse.y && this.realMouse.y <= this.clientHeight, !this.timeoutDuration || window.touch || this.realMouse.x == this.lastRealMouse.x && this.realMouse.y == this.lastRealMouse.y || this.setTimeoutDuration(this.timeoutDuration), this.$el.toggleClass(he, this.isHover && !this.hideCursor && !this.isOverNoHover), !this.isHover && this.cursorAlwaysVisible && (this.realMouse = {
                        x: this.$el.width() / 2,
                        y: this.$el.height() / 2
                    }, this.mouse.x = Y(this.mouse.x, this.realMouse.x, .1), this.mouse.y = Y(this.mouse.y, this.realMouse.y, .1), this.$cursor.css({
                        "-webkit-transform": "translate3d(".concat(this.mouse.x, "px, ").concat(this.mouse.y, "px, 0px)"),
                        "-ms-transform": "translate3d(".concat(this.mouse.x, "px, ").concat(this.mouse.y, "px, 0px)"),
                        transform: "translate3d(".concat(this.mouse.x, "px, ").concat(this.mouse.y, "px, 0px)")
                    })), this.isHover && !window.touch && (this.mouse.x = Y(this.mouse.x, this.realMouse.x, .2), this.mouse.y = Y(this.mouse.y, this.realMouse.y, .2), this.$cursor.css({
                        "-webkit-transform": "translate3d(".concat(this.mouse.x, "px, ").concat(this.mouse.y, "px, 0px)"),
                        "-ms-transform": "translate3d(".concat(this.mouse.x, "px, ").concat(this.mouse.y, "px, 0px)"),
                        transform: "translate3d(".concat(this.mouse.x, "px, ").concat(this.mouse.y, "px, 0px)")
                    })), this.lastRealMouse = {
                        x: parseFloat(this.realMouse.x),
                        y: parseFloat(this.realMouse.y)
                    }, this.raf = requestAnimationFrame(this.animate.bind(this))
                }
            }, {
                key: "setTimeoutDuration",
                value: function(t) {
                    this.hideCursor = !1, this.timeoutDuration = t, this.resetTimeout()
                }
            }, {
                key: "resetTimeout",
                value: function() {
                    var t = this;
                    clearTimeout(this.timeout), this.timeoutDuration && this.isHover && (this.timeout = setTimeout(function() {
                        t.hideCursor = !0
                    }, this.timeoutDuration))
                }
            }, {
                key: "setText",
                value: function(t) {
                    var e = this;
                    this.textTl && this.textTl.kill && this.textTl.kill(), this.textTl = new TimelineMax, this.textTl.to(this.$span, .25, {
                        opacity: 0
                    }), this.textTl.addCallback(function() {
                        e.$span.text(t)
                    }), this.textTl.to(this.$span, .25, {
                        opacity: 1
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(re)), this.el.removeEventListener("touchstart", this.onTouchStart, {
                        passive: !0
                    }), this.el.removeEventListener("touchend", this.onTouchEnd, {
                        passive: !0
                    }), v.off(".".concat(re)), window.cancelAnimationFrame(this.raf)
                }
            }]), i
        }();

    function de(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var fe = "undefined" != typeof global && "[object global]" === {}.toString.call(global);

    function pe(t, e) {
        return 0 === t.indexOf(e.toLowerCase()) ? t : "".concat(e.toLowerCase()).concat(t.substr(0, 1).toUpperCase()).concat(t.substr(1))
    }

    function me(t) {
//alert(t);

        var fgh= /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g.test(t);
        //alert(fgh);
    }

    function ge() {
        var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            i = e.id,
            n = e.url,
            s = i || n;
        if (!s) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (t = s, !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t) return "https://vimeo.com/".concat(s);
        if (me(s)) return s.replace("en.html", "en.html");
        if (i) throw new TypeError("“".concat(i, "” is not a valid video id."));
        throw new TypeError("“".concat(s, "” is not a vimeo.com url."))
    }
    var ve = void 0 !== Array.prototype.indexOf,
        ye = "undefined" != typeof window && void 0 !== window.postMessage;
    if (!(fe || ve && ye)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var we = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    ! function(t) {
        if (!t.WeakMap) {
            var i = Object.prototype.hasOwnProperty,
                s = function(t, e, i) {
                    Object.defineProperty ? Object.defineProperty(t, e, {
                        configurable: !0,
                        writable: !0,
                        value: i
                    }) : t[e] = i
                };
            t.WeakMap = function() {
                function t() {
                    if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                    if (s(this, "_id", "_WeakMap" + "_" + e() + "." + e()), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported")
                }

                function n(t, e) {
                    if (!o(t) || !i.call(t, "_id")) throw new TypeError(e + " method called on incompatible receiver " + typeof t)
                }

                function e() {
                    return Math.random().toString().substring(2)
                }
                return s(t.prototype, "delete", function(t) {
                    if (n(this, "delete"), !o(t)) return !1;
                    var e = t[this._id];
                    return !(!e || e[0] !== t) && (delete t[this._id], !0)
                }), s(t.prototype, "get", function(t) {
                    if (n(this, "get"), o(t)) {
                        var e = t[this._id];
                        return e && e[0] === t ? e[1] : void 0
                    }
                }), s(t.prototype, "has", function(t) {
                    if (n(this, "has"), !o(t)) return !1;
                    var e = t[this._id];
                    return !(!e || e[0] !== t)
                }), s(t.prototype, "set", function(t, e) {
                    if (n(this, "set"), !o(t)) throw new TypeError("Invalid value used as weak map key");
                    var i = t[this._id];
                    return i && i[0] === t ? i[1] = e : s(t, this._id, [t, e]), this
                }), s(t, "_polyfill", !0), t
            }()
        }

        function o(t) {
            return Object(t) === t
        }
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : we);
    var Te, Ee = (function(t) {
            var e, i, n;
            n = function() {
                var e, a, i, t = Object.prototype.toString,
                    n = "undefined" != typeof setImmediate ? function(t) {
                        return setImmediate(t)
                    } : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}), e = function(t, e, i, n) {
                        return Object.defineProperty(t, e, {
                            value: i,
                            writable: !0,
                            configurable: !1 !== n
                        })
                    }
                } catch (t) {
                    e = function(t, e, i) {
                        return t[e] = i, t
                    }
                }

                function o(t, e) {
                    i.add(t, e), a || (a = n(i.drain))
                }

                function r(t) {
                    var e, i = typeof t;
                    return null == t || "object" != i && "function" != i || (e = t.then), "function" == typeof e && e
                }

                function l() {
                    for (var t = 0; t < this.chain.length; t++) s(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
                    this.chain.length = 0
                }

                function s(t, e, i) {
                    var n, s;
                    try {
                        !1 === e ? i.reject(t.msg) : (n = !0 === e ? t.msg : e.call(void 0, t.msg)) === i.promise ? i.reject(TypeError("Promise-chain cycle")) : (s = r(n)) ? s.call(n, i.resolve, i.reject) : i.resolve(n)
                    } catch (t) {
                        i.reject(t)
                    }
                }

                function h(t) {
                    var e = this;
                    e.triggered || (e.triggered = !0, e.def && (e = e.def), e.msg = t, e.state = 2, 0 < e.chain.length && o(l, e))
                }

                function c(t, i, n, s) {
                    for (var e = 0; e < i.length; e++) ! function(e) {
                        t.resolve(i[e]).then(function(t) {
                            n(e, t)
                        }, s)
                    }(e)
                }

                function u(t) {
                    this.def = t, this.triggered = !1
                }

                function d(t) {
                    this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                }

                function f(t) {
                    if ("function" != typeof t) throw TypeError("Not a function");
                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var n = new d(this);
                    this.then = function(t, e) {
                        var i = {
                            success: "function" != typeof t || t,
                            failure: "function" == typeof e && e
                        };
                        return i.promise = new this.constructor(function(t, e) {
                            if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
                            i.resolve = t, i.reject = e
                        }), n.chain.push(i), 0 !== n.state && o(l, n), i.promise
                    }, this.catch = function(t) {
                        return this.then(void 0, t)
                    };
                    try {
                        t.call(void 0, function(t) {
                            (function t(i) {
                                var n, s = this;
                                if (!s.triggered) {
                                    s.triggered = !0, s.def && (s = s.def);
                                    try {
                                        (n = r(i)) ? o(function() {
                                            var e = new u(s);
                                            try {
                                                n.call(i, function() {
                                                    t.apply(e, arguments)
                                                }, function() {
                                                    h.apply(e, arguments)
                                                })
                                            } catch (t) {
                                                h.call(e, t)
                                            }
                                        }): (s.msg = i, s.state = 1, 0 < s.chain.length && o(l, s))
                                    } catch (t) {
                                        h.call(new u(s), t)
                                    }
                                }
                            }).call(n, t)
                        }, function(t) {
                            h.call(n, t)
                        })
                    } catch (t) {
                        h.call(n, t)
                    }
                }
                i = function() {
                    var i, n, s;

                    function o(t, e) {
                        this.fn = t, this.self = e, this.next = void 0
                    }
                    return {
                        add: function(t, e) {
                            s = new o(t, e), n ? n.next = s : i = s, n = s, s = void 0
                        },
                        drain: function() {
                            var t = i;
                            for (i = n = a = void 0; t;) t.fn.call(t.self), t = t.next
                        }
                    }
                }();
                var p = e({}, "constructor", f, !1);
                return e(f.prototype = p, "__NPO__", 0, !1), e(f, "resolve", function(i) {
                    return i && "object" == typeof i && 1 === i.__NPO__ ? i : new this(function(t, e) {
                        if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
                        t(i)
                    })
                }), e(f, "reject", function(i) {
                    return new this(function(t, e) {
                        if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
                        e(i)
                    })
                }), e(f, "all", function(e) {
                    var a = this;
                    return "[object Array]" != t.call(e) ? a.reject(TypeError("Not an array")) : 0 === e.length ? a.resolve([]) : new a(function(i, t) {
                        if ("function" != typeof i || "function" != typeof t) throw TypeError("Not a function");
                        var n = e.length,
                            s = Array(n),
                            o = 0;
                        c(a, e, function(t, e) {
                            s[t] = e, ++o === n && i(s)
                        }, t)
                    })
                }), e(f, "race", function(e) {
                    var n = this;
                    return "[object Array]" != t.call(e) ? n.reject(TypeError("Not an array")) : new n(function(i, t) {
                        if ("function" != typeof i || "function" != typeof t) throw TypeError("Not a function");
                        c(n, e, function(t, e) {
                            i(e)
                        }, t)
                    })
                }), f
            }, (i = we)[e = "Promise"] = i[e] || n(), t.exports && (t.exports = i[e])
        }(Te = {
            exports: {}
        }, Te.exports), Te.exports),
        ke = new WeakMap;

    function be(t, e, i) {
        var n = ke.get(t.element) || {};
        e in n || (n[e] = []), n[e].push(i), ke.set(t.element, n)
    }

    function Se(t, e) {
        return (ke.get(t.element) || {})[e] || []
    }

    function Ce(t, e, i) {
        var n = ke.get(t.element) || {};
        if (!n[e]) return !0;
        if (!i) return n[e] = [], ke.set(t.element, n), !0;
        var s = n[e].indexOf(i);
        return -1 !== s && n[e].splice(s, 1), ke.set(t.element, n), n[e] && 0 === n[e].length
    }
    var xe = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

    function Me(n) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        return xe.reduce(function(t, e) {
            var i = n.getAttribute("data-vimeo-".concat(e));
            return (i || "" === i) && (t[e] = "" === i ? 1 : i), t
        }, t)
    }

    function $e(t, e) {
        var i = t.html;
        if (!e) throw new TypeError("An element must be provided");
        if (null !== e.getAttribute("data-vimeo-initialized")) return e.querySelector("iframe");
        var n = document.createElement("div");
        return n.innerHTML = i, e.appendChild(n.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe")
    }

    function Le(o) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            r = 2 < arguments.length ? arguments[2] : void 0;
        return new Promise(function(e, i) {
            if (!me(o)) throw new TypeError("“".concat(o, "” is not a vimeo.com url."));
            var t = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(o));
            for (var n in a) a.hasOwnProperty(n) && (t += "&".concat(n, "=").concat(encodeURIComponent(a[n])));
            var s = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
            s.open("GET.html", t, !0), s.onload = function() {
                if (404 !== s.status)
                    if (403 !== s.status) try {
                        var t = JSON.parse(s.responseText);
                        if (403 === t.domain_status_code) return $e(t, r), void i(new Error("“".concat(o, "” is not embeddable.")));
                        e(t)
                    } catch (t) {
                        i(t)
                    } else i(new Error("“".concat(o, "” is not embeddable.")));
                    else i(new Error("“".concat(o, "” was not found.")))
            }, s.onerror = function() {
                var t = s.status ? " (".concat(s.status, ")") : "";
                i(new Error("There was an error fetching the embed code from Vimeo".concat(t, ".")))
            }, s.send()
        })
    }

    function Re(t) {
        if ("string" == typeof t) try {
            t = JSON.parse(t)
        } catch (t) {
            return console.warn(t), {}
        }
        return t
    }

    function Oe(t, e, i) {
        if (t.element.contentWindow && t.element.contentWindow.postMessage) {
            var n = {
                method: e
            };
            void 0 !== i && (n.value = i);
            var s = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
            8 <= s && s < 10 && (n = JSON.stringify(n)), t.element.contentWindow.postMessage(n, t.origin)
        }
    }

    function Ie(i, n) {
        var e, t = [];
        if ((n = Re(n)).event) {
            if ("error" === n.event) Se(i, n.data.method).forEach(function(t) {
                var e = new Error(n.data.message);
                e.name = n.data.name, t.reject(e), Ce(i, n.data.method, t)
            });
            t = Se(i, "event:".concat(n.event)), e = n.data
        } else if (n.method) {
            var s = function(t, e) {
                var i = Se(t, e);
                if (i.length < 1) return !1;
                var n = i.shift();
                return Ce(t, e, n), n
            }(i, n.method);
            s && (t.push(s), e = n.value)
        }
        t.forEach(function(t) {
            try {
                if ("function" == typeof t) return void t.call(i, e);
                t.resolve(e)
            } catch (t) {}
        })
    }
    var Pe = new WeakMap,
        Ae = new WeakMap,
        je = function() {
            function o(r) {
                var t, l = this,
                    i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                if (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), window.jQuery && r instanceof jQuery && (1 < r.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), r = r[0]), "undefined" != typeof document && "string" == typeof r && (r = document.getElementById(r)), t = r, !Boolean(t && 1 === t.nodeType && "nodeName" in t && t.ownerDocument && t.ownerDocument.defaultView)) throw new TypeError("You must pass either a valid element or a valid id.");
                var n = r.ownerDocument.defaultView;
                if ("IFRAME" !== r.nodeName) {
                    var e = r.querySelector("iframe");
                    e && (r = e)
                }
                //if ("IFRAME" === r.nodeName && !me(r.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
                if (Pe.has(r)) return Pe.get(r);
                this.element = r, this.origin = "*";
                var s = new Ee(function(o, a) {
                    var t = function(t) {
                        if (me(t.origin) && l.element.contentWindow === t.source) {
                            "*" === l.origin && (l.origin = t.origin);
                            var e = Re(t.data);
                            if (e && "error" === e.event && e.data && "ready" === e.data.method) {
                                var i = new Error(e.data.message);
                                return i.name = e.data.name, void a(i)
                            }
                            var n = e && "ready" === e.event,
                                s = e && "ping" === e.method;
                            if (n || s) return l.element.setAttribute("data-ready", "true"), void o();
                            Ie(l, e)
                        }
                    };
                    if (n.addEventListener ? n.addEventListener("message", t, !1) : n.attachEvent && n.attachEvent("onmessage", t), "IFRAME" !== l.element.nodeName) {
                        var e = Me(r, i);
                        Le(ge(e), e, r).then(function(t) {
                            var e, i, n, s = $e(t, r);
                            return l.element = s, l._originalElement = r, e = r, i = s, n = ke.get(e), ke.set(i, n), ke.delete(e), Pe.set(l.element, l), t
                        }).catch(a)
                    }
                });
                return Ae.set(this, s), Pe.set(this.element, this), "IFRAME" === this.element.nodeName && Oe(this, "ping"), this
            }
            var t, e, i;
            return t = o, (e = [{
                key: "callMethod",
                value: function(i) {
                    var n = this,
                        s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Ee(function(t, e) {
                        return n.ready().then(function() {
                            be(n, i, {
                                resolve: t,
                                reject: e
                            }), Oe(n, i, s)
                        }).catch(e)
                    })
                }
            }, {
                key: "get",
                value: function(i) {
                    var n = this;
                    return new Ee(function(t, e) {
                        return i = pe(i, "get"), n.ready().then(function() {
                            be(n, i, {
                                resolve: t,
                                reject: e
                            }), Oe(n, i)
                        }).catch(e)
                    })
                }
            }, {
                key: "set",
                value: function(i, n) {
                    var s = this;
                    return new Ee(function(t, e) {
                        if (i = pe(i, "set"), null == n) throw new TypeError("There must be a value to set.");
                        return s.ready().then(function() {
                            be(s, i, {
                                resolve: t,
                                reject: e
                            }), Oe(s, i, n)
                        }).catch(e)
                    })
                }
            }, {
                key: "on",
                value: function(t, e) {
                    if (!t) throw new TypeError("You must pass an event name.");
                    if (!e) throw new TypeError("You must pass a callback function.");
                    if ("function" != typeof e) throw new TypeError("The callback must be a function.");
                    0 === Se(this, "event:".concat(t)).length && this.callMethod("addEventListener", t).catch(function() {}), be(this, "event:".concat(t), e)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if (!t) throw new TypeError("You must pass an event name.");
                    if (e && "function" != typeof e) throw new TypeError("The callback must be a function.");
                    Ce(this, "event:".concat(t), e) && this.callMethod("removeEventListener", t).catch(function(t) {})
                }
            }, {
                key: "loadVideo",
                value: function(t) {
                    return this.callMethod("loadVideo", t)
                }
            }, {
                key: "ready",
                value: function() {
                    var t = Ae.get(this) || new Ee(function(t, e) {
                        e(new Error("Unknown player. Probably unloaded."))
                    });
                    return Ee.resolve(t)
                }
            }, {
                key: "addCuePoint",
                value: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.callMethod("addCuePoint", {
                        time: t,
                        data: e
                    })
                }
            }, {
                key: "removeCuePoint",
                value: function(t) {
                    return this.callMethod("removeCuePoint", t)
                }
            }, {
                key: "enableTextTrack",
                value: function(t, e) {
                    if (!t) throw new TypeError("You must pass a language.");
                    return this.callMethod("enableTextTrack", {
                        language: t,
                        kind: e
                    })
                }
            }, {
                key: "disableTextTrack",
                value: function() {
                    return this.callMethod("disableTextTrack")
                }
            }, {
                key: "pause",
                value: function() {
                    return this.callMethod("pause")
                }
            }, {
                key: "play",
                value: function() {
                    return this.callMethod("play")
                }
            }, {
                key: "unload",
                value: function() {
                    return this.callMethod("unload")
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    return new Ee(function(t) {
                        Ae.delete(e), Pe.delete(e.element), e._originalElement && (Pe.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element), t()
                    })
                }
            }, {
                key: "getAutopause",
                value: function() {
                    return this.get("autopause")
                }
            }, {
                key: "setAutopause",
                value: function(t) {
                    return this.set("autopause", t)
                }
            }, {
                key: "getBuffered",
                value: function() {
                    return this.get("buffered")
                }
            }, {
                key: "getColor",
                value: function() {
                    return this.get("color")
                }
            }, {
                key: "setColor",
                value: function(t) {
                    return this.set("color", t)
                }
            }, {
                key: "getCuePoints",
                value: function() {
                    return this.get("cuePoints")
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.get("currentTime")
                }
            }, {
                key: "setCurrentTime",
                value: function(t) {
                    return this.set("currentTime", t)
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.get("duration")
                }
            }, {
                key: "getEnded",
                value: function() {
                    return this.get("ended")
                }
            }, {
                key: "getLoop",
                value: function() {
                    return this.get("loop")
                }
            }, {
                key: "setLoop",
                value: function(t) {
                    return this.set("loop", t)
                }
            }, {
                key: "getPaused",
                value: function() {
                    return this.get("paused")
                }
            }, {
                key: "getPlaybackRate",
                value: function() {
                    return this.get("playbackRate")
                }
            }, {
                key: "setPlaybackRate",
                value: function(t) {
                    return this.set("playbackRate", t)
                }
            }, {
                key: "getPlayed",
                value: function() {
                    return this.get("played")
                }
            }, {
                key: "getSeekable",
                value: function() {
                    return this.get("seekable")
                }
            }, {
                key: "getSeeking",
                value: function() {
                    return this.get("seeking")
                }
            }, {
                key: "getTextTracks",
                value: function() {
                    return this.get("textTracks")
                }
            }, {
                key: "getVideoEmbedCode",
                value: function() {
                    return this.get("videoEmbedCode")
                }
            }, {
                key: "getVideoId",
                value: function() {
                    return this.get("videoId")
                }
            }, {
                key: "getVideoTitle",
                value: function() {
                    return this.get("videoTitle")
                }
            }, {
                key: "getVideoWidth",
                value: function() {
                    return this.get("videoWidth")
                }
            }, {
                key: "getVideoHeight",
                value: function() {
                    return this.get("videoHeight")
                }
            }, {
                key: "getVideoUrl",
                value: function() {
                    return this.get("videoUrl")
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.get("volume")
                }
            }, {
                key: "setVolume",
                value: function(t) {
                    return this.set("volume", t)
                }
            }]) && de(t.prototype, e), i && de(t, i), o
        }();
    fe || (function() {
        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document,
            e = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
            i = function(t) {
                "console" in window && console.error && console.error("There was an error creating an embed: ".concat(t))
            };
        e.forEach(function(e) {
            try {
                if (null !== e.getAttribute("data-vimeo-defer")) return;
                var t = Me(e);
                Le(ge(t), t, e).then(function(t) {
                    return $e(t, e)
                }).catch(i)
            } catch (t) {
                i(t)
            }
        })
    }(), function() {
        var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document;
        if (!window.VimeoPlayerResizeEmbeds_) {
            window.VimeoPlayerResizeEmbeds_ = !0;
            var t = function(t) {
                if (me(t.origin) && t.data && "spacechange" === t.data.event)
                    for (var e = n.querySelectorAll("iframe"), i = 0; i < e.length; i++)
                        if (e[i].contentWindow === t.source) {
                            e[i].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                            break
                        }
            };
            window.addEventListener ? window.addEventListener("message", t, !1) : window.attachEvent && window.attachEvent("onmessage", t)
        }
    }());
    var He = "".concat(t, ".").concat("FancyVideo"),
        De = {
            CLICK: "click.".concat(He)
        },
        Ne = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).$player = e.$el.find(".js-player"), e.$videoCursor = e.$el.find(".js-video-cursor"), e.active = !1, e.alreadyPlayed = !1, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.player = new je(this.$player.find("iframe")), this.player.on("ready", function() {
                        e.player.element.scrolling = "no", e.player.element.frameBorder = "0"
                    }), this.player.setVolume(1), this.player.on("pause", function() {
                        e.$el.toggleClass("-paused", !0), e.$videoCursor.triggerHandler({
                            type: le.SET_TEXT,
                            options: {
                                value: "Play"
                            }
                        }), e.$videoCursor.triggerHandler({
                            type: le.SET_TIMEOUT_DURATION,
                            options: {
                                value: !1
                            }
                        })
                    }), this.player.on("play", function() {
                        e.$el.toggleClass("-active", !0), e.$el.toggleClass("-paused", !1), e.$videoCursor.triggerHandler({
                            type: le.SET_TEXT,
                            options: {
                                value: "Pause"
                            }
                        }), e.$videoCursor.triggerHandler({
                            type: le.SET_TIMEOUT_DURATION,
                            options: {
                                value: 1e3
                            }
                        })
                    }), this.player.on("ended", function() {
                        e.active = !1, e.$el.toggleClass("-active", !1), e.$videoCursor.triggerHandler({
                            type: le.SET_TEXT,
                            options: {
                                value: "Play"
                            }
                        }), e.$videoCursor.triggerHandler({
                            type: le.SET_TIMEOUT_DURATION,
                            options: {
                                value: !1
                            }
                        })
                    }), this.$el.on(De.CLICK, function() {
                        e.active ? (clearTimeout(e.timeout), e.player.getPaused().then(function(t) {
                            t ? e.player.play() : e.player.pause()
                        })) : (e.active = !0, e.$el.toggleClass("is-active", !0), e.player.play())
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.player.off("ready"), this.player.off("pause"), this.player.off("play"), this.player.off("ended"), this.player.destroy(), p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(He))
                }
            }]), i
        }(),
        Be = JSON.parse(localStorage.getItem("lisa")),
        _e = {
            lisa: {
                context: null,
                lang: null,
                muted: !(!Be || !Be.muted),
                promises: [],
                session: {},
                trads: {},
                utterances: []
            },
            models3d: {}
        };
    window.locomotive = _e;
    var Ue = "ProjectHeader",
        ze = "".concat(t, ".").concat(Ue),
        Fe = {
            CLICK: "click.".concat(ze),
            PROGRESS: "progress.".concat(ze),
            RESIZE: "resize.".concat(ze),
            TRIGGER: "trigger.".concat(Ue)
        },
        We = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).inView = !1, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.compute(), this.checkScrollBind = this.checkScroll.bind(this), g.on(et.SCROLLING, this.checkScrollBind), this.checkResizeBind = this.checkResize.bind(this), v.on(Fe.RESIZE, this.checkResizeBind), this.$el.on(Fe.TRIGGER, function(t) {
                        "enter" === t.way ? e.inView = !0 : e.inView = !1
                    })
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (requestAnimationFrame(function() {
                        t.compute(), t.resizeTick = !1
                    }), this.resizeTick = !0)
                }
            }, {
                key: "compute",
                value: function() {
                    this.elBCR = this.$el[0].getBoundingClientRect();
                    var t = this.hasSmoothScroll ? window.scroll.y : 0;
                    this.offsetTop = this.$el.offset().top + t, this.scrollStart = 0, this.scrollEnd = this.scrollStart + window.innerHeight + this.elBCR.height
                }
            }, {
                key: "checkScroll",
                value: function(t) {
                    var e = this;
                    this.inView && (this.scrollTick || this.dirty || (requestAnimationFrame(function() {
                        e.scrollUpdate(t)
                    }), this.scrollTick = !0))
                }
            }, {
                key: "scrollUpdate",
                value: function(t) {
                    var e = (window.scroll.y - this.scrollStart) / (this.scrollEnd - this.scrollStart);
                    e = Math.max(0, Math.min(1, Math.round(1e3 * e) / 1e3)), g.triggerHandler({
                        type: Fe.PROGRESS,
                        options: {
                            progress: e
                        }
                    }), this.scrollTick = !1
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(ze)), g.off(et.SCROLLING, this.checkScrollBind), v.off(Fe.RESIZE, this.checkResizeBind)
                }
            }]), i
        }(),
        Ge = "".concat(t, ".").concat("ProjectDevice"),
        qe = {
            CLICK: "click.".concat(Ge),
            RESIZE: "resize.".concat(Ge),
            MOUSEMOVE: "mousemove.".concat(Ge),
            ORIENTATION: "deviceorientation.".concat(Ge)
        },
        Ve = "fbx",
        Ke = "obj",
        Ye = "glb",
        Xe = "gltf",
        Ze = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).showGui = t.gui, e.rotationAmplitudes = {
                    x: 35,
                    y: 2
                }, e.settings = {
                    camera: {
                        fov: 25,
                        position: [0, 0, 10]
                    }
                }, e.device = t.device, e.textureSrc = t.texture, e.deviceColor = t.color && t.color.length ? t.color : "ffffff", e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.initScene(), this.initLights();
                    var t = this.initObject();
                    this.initScrollTl(), this.showGui && t.then(function() {
                        e.initGui()
                    });
                    var i = new Promise(function(t) {
                        e.onReadyToAnimate = function() {
                            t(), g.off(xt.READYTOANIMATE, e.onReadyToAnimate)
                        }, g.on(xt.READYTOANIMATE, e.onReadyToAnimate)
                    });
                    Promise.all([t, i]).then(function() {
                        e.slideUp()
                    }), this.checkResizeBind = this.checkResize.bind(this), v.on(qe.RESIZE, this.checkResizeBind), this.checkResize(), this.animate(), this.manageInteractions()
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    window.isMobile ? this.resize() : this.resizeTick || (requestAnimationFrame(function() {
                        t.resize()
                    }), this.resizeTick = !0)
                }
            }, {
                key: "initScene",
                value: function() {
                    this.scene, this.camera, this.renderer, this.element, this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(this.settings.camera.fov, window.innerWidth / window.innerHeight, 1, 2e4), this.camera.position.set(this.settings.camera.position[0], this.settings.camera.position[1], this.settings.camera.position[2]), this.camera.lookAt(0, 0, 0), this.scene.add(this.camera), this.mouse = new THREE.Vector2, this.mouse.x = -window.innerWidth / 2, this.mouse.y = -window.innerHeight / 2, this.renderer = new THREE.WebGLRenderer({
                        antialias: !(2 <= window.devicePixelRatio),
                        alpha: !0
                    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)), this.element = this.renderer.domElement, this.container = this.el, this.container.width = this.$el[0].getBoundingClientRect().width, this.container.height = this.$el[0].getBoundingClientRect().height, this.element.width = this.container.width, this.element.height = this.container.height, this.renderer.setSize(this.container.width, this.container.height), this.renderer.gammaInput = !0, this.renderer.gammaOutput = !0, this.container.appendChild(this.element)
                } 
            }, {
                key: "initLights",
                value: function() {
                    this.spotLight = new THREE.DirectionalLight(13421772, .5), this.spotLight.position.set(-500, 500, 200), this.spotLight.castShadow = !0, this.camera.add(this.spotLight), this.ambientLight = new THREE.AmbientLight(16777215, .75), this.scene.add(this.ambientLight)
                }
            }, {
                key: "initObject",
                value: function() {
                    var e = this;
                    return this.scrollWrapper = new THREE.Object3D, this.slideUpWrapper = new THREE.Object3D, this.wrapper = new THREE.Object3D, this.wrapper.rotationTarget = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, this.texture = (new THREE.TextureLoader).load(this.textureSrc), this.loadModel(this.file).then(function(t) {
                        e.object = t, e.setupObject(), e.scrollWrapper.add(e.slideUpWrapper), e.slideUpWrapper.add(e.wrapper), e.wrapper.add(e.object), e.scene.add(e.scrollWrapper)
                    })
                }
            }, {
                key: "setupObject",
                value: function() {}
            }, {
                key: "initScrollTl",
                value: function() {
                    this.scrollTl = new TimelineMax({}), this.scrollTl.fromTo(this.scrollWrapper.rotation, 1, {
                        y: 5 * Math.PI / 180
                    }, {
                        y: -15 * Math.PI / 180,
                        ease: CustomEase.create("custom", "M0,0,C0.102,0.104,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1,1,1")
                    }, 0), this.scrollTl.pause()
                }
            }, {
                key: "slideUp",
                value: function() {
                    this.slideUpTl = new TimelineMax({}), this.slideUpTl.addLabel("start", 0), this.slideUpTl.fromTo(this.slideUpWrapper.position, 2, {
                        y: -200
                    }, {
                        y: 0,
                        ease: Power3.easeOut
                    }, "start"), this.slideUpTl.fromTo(this.slideUpWrapper.rotation, 2, {
                        y: 90 * Math.PI / 180
                    }, {
                        y: 0,
                        ease: Power3.easeOut
                    }, "start")
                }
            }, {
                key: "initGui",
                value: function() {
                    this.gui = new dat.GUI;
                    var t = this.gui.addFolder("Camera");
                    t.add(this.camera, "fov", 10, 500), t.add(this.camera.position, "x", 0, 20), t.add(this.camera.position, "y", 0, 20), t.add(this.camera.position, "z", 0, 20), t.open();
                    var e = this.gui.addFolder("Ambient Light");
                    e.add(this.ambientLight, "intensity", 0, 1), e.open();
                    var i = this.gui.addFolder("SpotLight");
                    i.add(this.spotLight, "intensity", 0, 1), i.open()
                }
            }, {
                key: "loadModel",
                value: function(e) {
                    var t, i = this,
                        n = "../../assets/3d/models/",
                        s = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
                    if (_e.models3d[n + e]) return s != Ye && s != Xe || (this.texture.flipY = !1), new Promise(function(t) {
                        t()
                    }).then(function() {
                        return _e.models3d[n + e].clone()
                    });
                    switch (s) {
                        case Ve:
                            this.fbxLoader || (this.fbxLoader = new THREE.FBXLoader), t = new Promise(function(t) {
                                i.fbxLoader.load(n + e, t)
                            });
                            break;
                        case Ke:
                            this.objLoader || (this.objLoader = new THREE.OBJLoader), t = new Promise(function(t) {
                                i.objLoader.load(n + e, t)
                            });
                            break;
                        case Ye:
                        case Xe:
                            this.gltfLoader || (this.gltfLoader = new THREE.GLTFLoader), this.texture.flipY = !1, t = new Promise(function(t) {
                                i.gltfLoader.load(n + e, t)
                            }).then(function(t) {
                                return t.scene
                            });
                            break;
                        default:
                            return !1
                    }
                    return t.then(function(t) {
                        return (_e.models3d[n + e] = t).clone()
                    })
                }
            }, {
                key: "manageInteractions",
                value: function() {
                    var e = this;
                    this.mouse = new THREE.Vector2, this.mouseMoveBind = function(t) {
                        e.mouse.x = (t.clientX - window.innerWidth / 2) / window.innerWidth * e.rotationAmplitudes.x, e.mouse.y = (t.clientY - window.innerHeight / 2) / window.innerHeight * e.rotationAmplitudes.y, e.wrapper.rotationTarget.x = -e.mouse.y * Math.PI / 180 * 2, e.wrapper.rotationTarget.y = -e.mouse.x * Math.PI / 180
                    }, v.on(qe.MOUSEMOVE, this.mouseMoveBind), this.onHeaderProgressBind = function(t) {
                        e.scrollTl.progress(t.options.progress)
                    }, g.on(Fe.PROGRESS, this.onHeaderProgressBind)
                }
            }, {
                key: "animate",
                value: function() {
                    var t = this;
                    this.raf = requestAnimationFrame(function() {
                        return t.animate()
                    }), this.render()
                }
            }, {
                key: "render",
                value: function() {
                    this.wrapper.rotation.x = Y(this.wrapper.rotation.x, this.wrapper.rotationTarget.x, .1), this.wrapper.rotation.y = Y(this.wrapper.rotation.y, this.wrapper.rotationTarget.y, .1), this.wrapper.rotation.z = Y(this.wrapper.rotation.z, this.wrapper.rotationTarget.z, .1), this.camera.updateProjectionMatrix(), this.renderer.render(this.scene, this.camera)
                }
            }, {
                key: "resize",
                value: function() {
                    this.container.width = this.$el[0].getBoundingClientRect().width, this.container.height = this.$el[0].getBoundingClientRect().height, this.element.width = this.container.width, this.element.height = this.container.height, this.camera.aspect = this.container.width / this.container.height, this.renderer.setSize(this.container.width, this.container.height), this.resizeTick = !1
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), cancelAnimationFrame(this.raf), this.$el.off(".".concat(Ge)), v.off(qe.RESIZE, this.checkResizeBind), v.off(qe.MOUSEMOVE, this.mouseMoveBind), g.off(Fe.PROGRESS, this.onHeaderProgressBind), g.off(xt.READYTOANIMATE, this.onReadyToAnimate)
                }
            }]), i
        }(),
        Qe = "".concat(t, ".").concat("ProjectSmartphone"),
        Je = function(t) {
            function r(t) {
                var e;
                return o(this, r), (e = f(this, d(r).call(this, t))).file = "smartphone.glb", e
            }
            return c(r, Ze), a(r, [{
                key: "initGui",
                value: function() {
                    var e = this;
                    p(d(r.prototype), "initGui", this).call(this);
                    var t = new function() {
                            this.rotation = {
                                x: -12,
                                y: -35,
                                z: -8
                            }
                        },
                        i = this.gui.addFolder("Phone"),
                        n = i.addFolder("Rotation"),
                        s = n.add(t.rotation, "x", -180, 180),
                        o = n.add(t.rotation, "y", -180, 180),
                        a = n.add(t.rotation, "z", -180, 180);
                    s.onChange(function(t) {
                        e.object.rotation.x = t * Math.PI / 180
                    }), o.onChange(function(t) {
                        e.object.rotation.y = t * Math.PI / 180
                    }), a.onChange(function(t) {
                        e.object.rotation.z = t * Math.PI / 180
                    }), i.open()
                }
            }, {
                key: "setupObject",
                value: function() {
                    this.deviceMaterial = new THREE.MeshLambertMaterial({
                        color: new THREE.Color(16777215),
                        map: this.texture
                    }), this.reposition(), this.object.rotation.x = -12 * Math.PI / 180, this.object.rotation.y = -35 * Math.PI / 180, this.object.rotation.z = -8 * Math.PI / 180, this.object.children[0].material = this.deviceMaterial
                }
            }, {
                key: "reposition",
                value: function() {
                    this.object && this.object.position && (700 < window.innerWidth ? this.camera.position.z = 14.5 : this.camera.position.z = 10.5)
                }
            }, {
                key: "resize",
                value: function() {
                    p(d(r.prototype), "resize", this).call(this), this.reposition()
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(r.prototype), "destroy", this).call(this), this.$el.off(".".concat(Qe))
                }
            }]), r
        }(),
        ti = "".concat(t, ".").concat("ProjectLaptop"),
        ei = function(t) {
            function h(t) {
                var e;
                return o(this, h), (e = f(this, d(h).call(this, t))).settings = {
                    camera: {
                        fov: 25,
                        position: [0, 0, 10]
                    }
                }, e.file = "", e
            }
            return c(h, Ze), a(h, [{
                key: "initGui",
                value: function() {
                    var e = this;
                    p(d(h.prototype), "initGui", this).call(this);
                    var t = new function() {
                            this.rotation = {
                                x: 0,
                                y: 0,
                                z: 0
                            }, this.color = "#ffffff"
                        },
                        i = this.gui.addFolder("device"),
                        n = i.addFolder("Rotation"),
                        s = n.add(t.rotation, "x", -180, 180),
                        o = n.add(t.rotation, "y", -180, 180),
                        a = n.add(t.rotation, "z", -180, 180);
                    s.onChange(function(t) {
                        e.object.rotation.x = t * Math.PI / 180
                    }), o.onChange(function(t) {
                        e.object.rotation.y = t * Math.PI / 180
                    }), a.onChange(function(t) {
                        e.object.rotation.z = t * Math.PI / 180
                    });
                    var r = i.addFolder("Position");
                    r.add(this.object.position, "x", -10, 10), r.add(this.object.position, "y", -10, 10), r.add(this.object.position, "z", -10, 10), i.open();
                    var l = i.addFolder("Light position");
                    l.add(this.spotLight.position, "x", -10, 10), l.add(this.spotLight.position, "y", -10, 10), l.add(this.spotLight.position, "z", -10, 10)
                }
            }, {
                key: "setupObject",
                value: function() {
                    this.deviceMaterial = new THREE.MeshLambertMaterial({
                        color: new THREE.Color(16777215),
                        map: this.texture
                    }), this.reposition(), this.object.rotation.x = 38 * Math.PI / 180, this.object.rotation.y = -26 * Math.PI / 180, this.object.rotation.z = 6 * Math.PI / 180, this.object.children[0].material = this.deviceMaterial
                }
            }, {
                key: "reposition",
                value: function() {
                    this.object && this.object.position && (700 < window.innerWidth ? (this.object.position.x = .15, this.object.position.y = .1, this.object.position.z = 0, this.camera.position.z = 12.5) : (this.object.position.x = -.1, this.object.position.y = .1, this.object.position.z = 0, this.camera.position.z = 10))
                }
            }, {
                key: "resize",
                value: function() {
                    p(d(h.prototype), "resize", this).call(this), this.reposition()
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(h.prototype), "destroy", this).call(this), this.$el.off(".".concat(ti))
                }
            }]), h
        }(),
        ii = "".concat(t, ".").concat("VimeoPlayer"),
        ni = {
            CLICK: "click.".concat(ii),
            LAUNCH: "launch.".concat(ii),
            PAUSE: "pause.".concat(ii)
        },
        si = function(t) {
            function e(t) {
                return o(this, e), f(this, d(e).call(this, t))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.player = new je(this.$el[0]), this.timeout, this.$el.on(ni.LAUNCH, function(t) {
                        "enter" == t.way ? e.timeout = setTimeout(function() {
                            e.player.play()
                        }, 600) : (clearTimeout(e.timeout), e.player.pause())
                    }), this.$el.on(ni.PAUSE, function(t) {
                        e.player.pause()
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.player.destroy(), p(d(e.prototype), "destroy", this).call(this), this.$el.off(".".concat(ii))
                }
            }]), e
        }(),
        oi = "".concat(t, ".").concat("VideoPlayer"),
        ai = {
            CLICK: "click.".concat(oi)
        },
        ri = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).active = !1, e.values = {
                    play: t.play,
                    pause: t.pause
                }, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.$video = this.$el.find(".js-video"), this.$videoCursor = this.$el.find(".js-video-cursor"), this.player = new je(this.$video.get(0)), this.player.setVolume(1), this.player.on("pause", function() {
                        e.$el.toggleClass("-paused", !0), e.$videoCursor.triggerHandler({
                            type: le.SET_TEXT,
                            options: {
                                value: e.values.play
                            }
                        }), e.$videoCursor.triggerHandler({
                            type: le.SET_TIMEOUT_DURATION,
                            options: {
                                value: !1
                            }
                        })
                    }), this.player.on("play", function() {
                        e.$el.toggleClass("-active", !0), e.$el.toggleClass("-paused", !1), e.$videoCursor.triggerHandler({
                            type: le.SET_TEXT,
                            options: {
                                value: e.values.pause
                            }
                        }), e.$videoCursor.triggerHandler({
                            type: le.SET_TIMEOUT_DURATION,
                            options: {
                                value: 1e3
                            }
                        })
                    }), this.player.on("ended", function() {
                        e.active = !1, e.$el.toggleClass("-active", !1), e.$videoCursor.triggerHandler({
                            type: le.SET_TEXT,
                            options: {
                                value: e.values.play
                            }
                        }), e.$videoCursor.triggerHandler({
                            type: le.SET_TIMEOUT_DURATION,
                            options: {
                                value: !1
                            }
                        })
                    }), this.$el.on(ai.CLICK, function() {
                        e.active ? e.player.getPaused().then(function(t) {
                            t ? e.player.play() : e.player.pause()
                        }) : (e.active = !0, e.player.play())
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.player.destroy(), this.$el.off(".".concat(oi))
                }
            }]), i
        }(),
        li = "Object3D",
        hi = "".concat(t, ".").concat(li),
        ci = {
            CLICK: "click.".concat(hi),
            MOUSEMOVE: "mousemove.".concat(hi),
            ORIENTATION: "deviceorientation.".concat(hi),
            CHANGE: "change.".concat(hi),
            RESIZE: "resize.".concat(hi),
            TRIGGER: "trigger.".concat(li)
        },
        ui = "fbx",
        di = "obj",
        fi = "glb",
        pi = "gltf",
        mi = function(t) {
            function i(t) {
                var e;
                (o(this, i), (e = f(this, d(i).call(this, t))).showGui = t.gui, e.settings = {
                    camera: {
                        fov: 45,
                        position: [0, 0, 10],
                        translateScroll: [0, 20, 0]
                    },
                    object: {
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [1, 1, 1],
                        rotationMouseMove: [40, 5],
                        rotationScroll: [0, 0, 0]
                    },
                    ambientLight: {
                        intensity: .1
                    },
                    spotLight: {
                        intensity: 1,
                        position: [0, 0, 20]
                    }
                }, e.inView = !1, t.settings && t.settings.camera && (e.settings.camera = Object.assign(e.settings.camera, t.settings.camera)), t.settings && t.settings.object && (e.settings.object = Object.assign(e.settings.object, t.settings.object)), t.settings && t.settings.ambientLight && (e.settings.ambientLight = Object.assign(e.settings.ambientLight, t.settings.ambientLight)), t.settings && t.settings.spotLight && (e.settings.spotLight = Object.assign(e.settings.spotLight, t.settings.spotLight)), e.files = t.models.split(","), e.$scrollRef = e.$el, t["scroll-ref"]) && ($(t["scroll-ref"]).length && (e.$scrollRef = $(t["scroll-ref"])));
                return e.scrollRef = e.$scrollRef[0], e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.initScene(), this.initLights(), this.initObject(), this.checkResizeBind = this.checkResize.bind(this), v.on(ci.RESIZE, this.checkResizeBind), this.checkResize(), this.initInteractions(), this.manageScroll(), this.initScrollTl(), this.scrollUpdate(), this.$scrollRef.on(ci.TRIGGER, function(t) {
                        "enter" === t.way ? (cancelAnimationFrame(e.raf), e.inView = !0, e.animate()) : (cancelAnimationFrame(e.raf), e.inView = !1)
                    })
                }
            }, {
                key: "initScene",
                value: function() {
                    this.scene, this.camera, this.renderer, this.element, this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(this.settings.camera.fov, window.innerWidth / window.innerHeight, 1, 2e4), this.camera.lookAt(0, 0, 0), this.scene.add(this.camera), this.mouse = new THREE.Vector2, this.mouse.x = -window.innerWidth / 2, this.mouse.y = -window.innerHeight / 2, this.renderer = new THREE.WebGLRenderer({
                        antialias: !(2 <= window.devicePixelRatio),
                        alpha: !0
                    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, this.element = this.renderer.domElement, this.container = this.el, this.container.width = this.$el[0].getBoundingClientRect().width, this.container.height = this.$el[0].getBoundingClientRect().height, this.element.width = this.container.width, this.element.height = this.container.height, this.renderer.setSize(this.container.width, this.container.height), this.renderer.shadowMap.enabled = !0, this.renderer.gammaInput = !0, this.renderer.gammaOutput = !0, this.container.appendChild(this.element)
                }
            }, {
                key: "initLights",
                value: function() {
                    this.spotLight = new THREE.DirectionalLight(13421772, this.settings.spotLight.intensity), this.spotLight.position.set(this.settings.spotLight.position[0], this.settings.spotLight.position[1], this.settings.spotLight.position[2]), this.spotLight.castShadow = !0, this.spotLight.shadow.mapSize.width = 2048, this.spotLight.shadow.mapSize.height = 2048, this.spotLight.shadow.camera.near = 1, this.spotLight.shadow.camera.far = 1e4, this.spotLight.shadow.bias = -1e-5;
                    this.spotLight.shadow.camera.left = 300, this.spotLight.shadow.camera.right = -300, this.spotLight.shadow.camera.top = -300, this.spotLight.shadow.camera.bottom = 300, this.camera.add(this.spotLight), this.ambientLight = new THREE.AmbientLight(16777215, this.settings.ambientLight.intensity), this.scene.add(this.ambientLight)
                }
            }, {
                key: "initObject",
                value: function() {
                    var n = this;
                    this.outerWrapper = new THREE.Object3D, this.innerWrapper = new THREE.Object3D, this.objects = new Array(this.files.length), this.outerWrapper.rotationTarget = {
                        x: 0,
                        y: 0,
                        z: 0
                    }, this.outerWrapper.add(this.innerWrapper), this.scene.add(this.outerWrapper);
                    var e = [],
                        s = 0,
                        t = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, r = function() {
                                var t = a.value,
                                    i = s;
                                e.push(new Promise(function(e) {
                                    n.loadModel(t).then(function(t) {
                                        n.objects[i] = t, n.objects[i].rotation.x = n.settings.object.rotation[0] * (Math.PI / 180), n.objects[i].rotation.y = n.settings.object.rotation[1] * (Math.PI / 180), n.objects[i].rotation.z = n.settings.object.rotation[2] * (Math.PI / 180), 0 == i ? (n.objects[i].scale.x = n.settings.object.scale[0], n.objects[i].scale.y = n.settings.object.scale[1], n.objects[i].scale.z = n.settings.object.scale[2]) : n.objects[i].scale.set(1e-4, 1e-4, 1e-4), n.objects[i].position.x = n.settings.object.position[0], n.objects[i].position.y = n.settings.object.position[1], n.objects[i].position.z = n.settings.object.position[2], 0 == i && n.innerWrapper.add(n.objects[i]), e()
                                    })
                                })), s++
                            }, l = this.files[Symbol.iterator](); !(t = (a = l.next()).done); t = !0) r()
                    } catch (t) {
                        i = !0, o = t
                    } finally {
                        try {
                            t || null == l.return || l.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    Promise.all(e).then(function() {
                        n.manageSlider(), window.isMobile || n.initScrollTl(), n.manageScroll(), n.initGui()
                    })
                }
            }, {
                key: "initInteractions",
                value: function() {
                    this.manageMouse()
                }
            }, {
                key: "initGui",
                value: function() {
                    var t = this;
                    if (this.showGui) {
                        this.gui = new dat.GUI, this.guiMain = this.gui.addFolder(this.uid), this.guiMain.open();
                        var e = this.guiMain.addFolder("Camera");
                        e.add(this.camera, "fov", 10, 500), e.add(this.settings.camera.position, "0", -10, 10).name("x").onChange(function() {
                            t.camera.lookAt(0, 0, 0), t.initScrollTl(), t.scrollUpdate()
                        }), e.add(this.settings.camera.position, "1", -10, 10).name("y").onChange(function() {
                            t.camera.lookAt(0, 0, 0), t.initScrollTl(), t.scrollUpdate()
                        }), e.add(this.settings.camera.position, "2", -10, 10).name("z").onChange(function() {
                            t.camera.lookAt(0, 0, 0), t.initScrollTl(), t.scrollUpdate()
                        });
                        var i = e.addFolder("translateScroll");
                        i.add(this.settings.camera.translateScroll, "0", -20, 20).name("x").onChange(function() {
                            t.initScrollTl(), t.scrollUpdate()
                        }), i.add(this.settings.camera.translateScroll, "1", -20, 20).name("y").onChange(function() {
                            t.initScrollTl(), t.scrollUpdate()
                        }), i.add(this.settings.camera.translateScroll, "2", -20, 20).name("z").onChange(function() {
                            t.initScrollTl(), t.scrollUpdate()
                        }), this.guiMain.addFolder("Ambient Light").add(this.ambientLight, "intensity", 0, 1);
                        var n = this.guiMain.addFolder("SpotLight");
                        n.add(this.spotLight, "intensity", 0, 1), n.add(this.spotLight.position, "x", -10, 10), n.add(this.spotLight.position, "y", -10, 10), n.add(this.spotLight.position, "z", -10, 10);
                        var s = this.guiMain.addFolder("Object"),
                            o = s.addFolder("Position");
                        o.add(this.objects[0].position, "x", -10, 10), o.add(this.objects[0].position, "y", -10, 10), o.add(this.objects[0].position, "z", -10, 10);
                        var a = s.addFolder("Rotation"),
                            r = {
                                x: parseFloat(180 * this.objects[0].rotation.x / Math.PI),
                                y: parseFloat(180 * this.objects[0].rotation.y / Math.PI),
                                z: parseFloat(180 * this.objects[0].rotation.z / Math.PI)
                            };
                        a.add(r, "x", -360, 360).onChange(function() {
                            t.objects[0].rotation.x = r.x * (Math.PI / 180)
                        }), a.add(r, "y", -360, 360).onChange(function() {
                            t.objects[0].rotation.y = r.y * (Math.PI / 180)
                        }), a.add(r, "z", -360, 360).onChange(function() {
                            t.objects[0].rotation.z = r.z * (Math.PI / 180)
                        });
                        var l = s.addFolder("RotationScroll");
                        l.add(this.settings.object.rotationScroll, "0", -180, 180).name("x").onChange(function() {
                            t.initScrollTl(), t.scrollUpdate()
                        }), l.add(this.settings.object.rotationScroll, "1", -180, 180).name("y").onChange(function() {
                            t.initScrollTl(), t.scrollUpdate()
                        }), l.add(this.settings.object.rotationScroll, "2", -180, 180).name("z").onChange(function() {
                            t.initScrollTl(), t.scrollUpdate()
                        });
                        var h = s.addFolder("RotationMouseMove");
                        h.add(this.settings.object.rotationMouseMove, "0", -180, 180).name("x"), h.add(this.settings.object.rotationMouseMove, "1", -180, 180).name("y");
                        var c = s.addFolder("Scale");
                        c.add(this.objects[0].scale, "x", 0, 4), c.add(this.objects[0].scale, "y", 0, 4), c.add(this.objects[0].scale, "z", 0, 4)
                    }
                }
            }, {
                key: "initScrollTl",
                value: function() {
                    var t = this;
                    this.scrollTl = new TimelineMax({
                        onUpdate: function() {
                            t.camera.lookAt(0, 0, 0)
                        }
                    }), this.scrollTl.fromTo(this.camera.position, 1, {
                        x: this.settings.camera.position[0] + this.settings.camera.translateScroll[0] / 2,
                        y: this.settings.camera.position[1] + this.settings.camera.translateScroll[1] / 2,
                        z: this.settings.camera.position[2] + this.settings.camera.translateScroll[2] / 2
                    }, {
                        x: this.settings.camera.position[0] - this.settings.camera.translateScroll[0] / 2,
                        y: this.settings.camera.position[1] - this.settings.camera.translateScroll[1] / 2,
                        z: this.settings.camera.position[2] - this.settings.camera.translateScroll[2] / 2,
                        ease: Linear.easeNone
                    }, 0), this.scrollTl.fromTo(this.innerWrapper.rotation, 1, {
                        x: this.settings.object.rotationScroll[0] / 2 * (Math.PI / 180),
                        y: this.settings.object.rotationScroll[1] / 2 * (Math.PI / 180),
                        z: this.settings.object.rotationScroll[2] / 2 * (Math.PI / 180)
                    }, {
                        x: -this.settings.object.rotationScroll[0] / 2 * (Math.PI / 180),
                        y: -this.settings.object.rotationScroll[1] / 2 * (Math.PI / 180),
                        z: -this.settings.object.rotationScroll[2] / 2 * (Math.PI / 180),
                        ease: Linear.easeNone
                    }, 0), this.scrollTl.pause()
                }
            }, {
                key: "manageMouse",
                value: function() {
                    var e = this;
                    this.mouse = new THREE.Vector2, this.mouseMoveBind = function(t) {
                        e.mouse.x = (t.clientX - window.innerWidth / 2) / window.innerWidth * e.settings.object.rotationMouseMove[0], e.mouse.y = (t.clientY - window.innerHeight / 2) / window.innerHeight * e.settings.object.rotationMouseMove[1], e.outerWrapper.rotationTarget.x = -e.mouse.y * Math.PI / 180 * 2, e.outerWrapper.rotationTarget.y = -e.mouse.x * Math.PI / 180
                    }, v.on(ci.MOUSEMOVE, this.mouseMoveBind)
                }
            }, {
                key: "manageScroll",
                value: function() {
                    this.checkScrollBind = this.checkScroll.bind(this), g.on(et.SCROLLING, this.checkScrollBind)
                }
            }, {
                key: "manageSlider",
                value: function() {
                    var e = this;
                    this.index = 0, this.hiding = !1, this.onChangeBind = function(t) {
                        e.targetIndex = t.options.index, e.showTl && e.showTl.kill && e.showTl.kill(), e.hiding || (e.hideTl && e.hideTl.kill && e.hideTl.kill(), e.hiding = !0, e.hidingPromise = new Promise(function(t) {
                            e.hideTl = new TimelineMax({
                                onComplete: t
                            }), e.hideTl.to(e.objects[e.index].scale, .4, {
                                x: .5,
                                y: .5,
                                z: .5
                            }, 0), e.hideTl.to(e.$el, .4, {
                                opacity: 0
                            }, 0)
                        }).then(function() {
                            e.hiding = !1, e.innerWrapper.remove(e.objects[e.index]), null != e.objects[e.targetIndex] && e.displayObject(e.targetIndex), e.index = e.targetIndex
                        }))
                    }, this.$el.on(ci.CHANGE, this.onChangeBind)
                }
            }, {
                key: "displayObject",
                value: function(t) {
                    this.innerWrapper.add(this.objects[t]), this.objects[t].scale.set(.5, .5, .5), this.showTl = new TimelineMax, this.showTl.to(this.objects[t].scale, .4, {
                        x: 1,
                        y: 1,
                        z: 1
                    }, 0), this.showTl.to(this.$el, .4, {
                        opacity: 1
                    }, 0)
                }
            }, {
                key: "loadModel",
                value: function(e) {
                    var t, i = this,
                        n = "assets/3d/models/",
                        s = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
                    if (_e.models3d[n + e]) return new Promise(function(t) {
                        t()
                    }).then(function() {
                        return _e.models3d[n + e].clone()
                    });
                    switch (s) {
                        case ui:
                            this.fbxLoader || (this.fbxLoader = new THREE.FBXLoader), t = new Promise(function(t) {
                                i.fbxLoader.load(n + e, t)
                            });
                            break;
                        case di:
                            this.objLoader || (this.objLoader = new THREE.OBJLoader), t = new Promise(function(t) {
                                i.objLoader.load(n + e, t)
                            });
                            break;
                        case fi:
                        case pi:
                            this.gltfLoader || (this.gltfLoader = new THREE.GLTFLoader), t = new Promise(function(t) {
                                i.gltfLoader.load(n + e, t)
                            }).then(function(t) {
                                return t.scene
                            });
                            break;
                        default:
                            return !1
                    }
                    return t.then(function(t) {
                        return (_e.models3d[n + e] = t).clone()
                    })
                }
            }, {
                key: "animate",
                value: function() {
                    var t = this;
                    this.raf = requestAnimationFrame(function() {
                        return t.animate()
                    }), this.render()
                }
            }, {
                key: "render",
                value: function() {
                    this.outerWrapper.rotation.x = Y(this.outerWrapper.rotation.x, this.outerWrapper.rotationTarget.x, .1), this.outerWrapper.rotation.y = Y(this.outerWrapper.rotation.y, this.outerWrapper.rotationTarget.y, .1), this.outerWrapper.rotation.z = Y(this.outerWrapper.rotation.z, this.outerWrapper.rotationTarget.z, .1), this.camera.updateProjectionMatrix(), this.renderer.render(this.scene, this.camera)
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    window.isMobile ? this.resize() : this.resizeTick || (requestAnimationFrame(function() {
                        t.resize(), t.resizeTick = !1
                    }), this.resizeTick = !0)
                }
            }, {
                key: "resize",
                value: function() {
                    this.hasSmoothScroll = !1, y.hasClass("has-smooth-scroll") && (this.hasSmoothScroll = !0), this.container.width = this.$el[0].getBoundingClientRect().width, this.container.height = this.$el[0].getBoundingClientRect().height, this.element.width = this.container.width, this.element.height = this.container.height, this.camera.aspect = this.container.width / this.container.height, this.renderer.setSize(this.container.width, this.container.height), this.scrollRefBCR = this.scrollRef.getBoundingClientRect();
                    var t = this.hasSmoothScroll ? window.scroll.y : 0;
                    this.offsetTop = this.$scrollRef.offset().top + t, this.scrollStart = this.offsetTop - window.innerHeight, this.scrollEnd = this.scrollStart + window.innerHeight + this.scrollRefBCR.height
                }
            }, {
                key: "checkScroll",
                value: function(t) {
                    var e = this;
                    this.inView && (this.scrollTick || this.dirty || (requestAnimationFrame(function() {
                        e.scrollUpdate(t)
                    }), this.scrollTick = !0))
                }
            }, {
                key: "scrollUpdate",
                value: function() {
                    var t = (window.scroll.y - this.scrollStart) / (this.scrollEnd - this.scrollStart);
                    t = Math.max(0, Math.min(1, Math.round(1e3 * t) / 1e3)), this.scrollTl.progress(t), this.scrollTick = !1
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(hi)), cancelAnimationFrame(this.raf), g.off(et.SCROLLING, this.checkScrollBind), v.off(ci.MOUSEMOVE, this.mouseMoveBind), v.off(ci.RESIZE, this.checkResizeBind)
                }
            }]), i
        }(),
        gi = "".concat(t, ".").concat("Slider"),
        vi = function(t) {
            function e() {
                return o(this, e), f(this, d(e).apply(this, arguments))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.$slider = this.$el.find(".js-slider"), this.$objects = $(".js-objects", this.$el), this.swiper = new Swiper(this.$slider, {
                        loop: !0,
                        slidesPerView: "auto",
                        parallax: !0,
                        touchStartPreventDefault: !1,
                        longSwipesRatio: .1
                    }), 0 < this.$objects.length && this.swiper.on("slideChangeTransitionStart", function(t) {
                        e.$objects.triggerHandler({
                            type: ci.CHANGE,
                            options: {
                                index: e.swiper.realIndex
                            }
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.swiper.destroy(), p(d(e.prototype), "destroy", this).call(this), this.$el.off(".".concat(gi))
                }
            }]), e
        }(),
        yi = "".concat(t, ".").concat("AwardsList"),
        wi = {
            CLICK: "click.".concat(yi),
            MOUSEMOVE: "mousemove.".concat(yi),
            MOUSEENTER: "mouseenter.".concat(yi),
            MOUSELEAVE: "mouseleave.".concat(yi),
            CHANGE: "change.".concat(yi),
            RESIZE: "resize.".concat(yi)
        },
        Ti = "fbx",
        Ei = "obj",
        ki = "glb",
        bi = "gltf",
        Si = "has-awards-list-hover",
        Ci = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).showGui = t.gui, e.settings = {
                    camera: {
                        fov: 45,
                        position: [0, 0, 5]
                    },
                    object: {
                        position: [0, 0, 0],
                        rotation: [0, 0, 0],
                        scale: [1, 1, 1],
                        rotationMouseMove: [40, 40]
                    },
                    ambientLight: {
                        intensity: .1
                    },
                    spotLight: {
                        intensity: 1,
                        position: [0, 0, 20]
                    }
                }, t.settings && t.settings.camera && (e.settings.camera = Object.assign(e.settings.camera, t.settings.camera)), t.settings && t.settings.object && (e.settings.object = Object.assign(e.settings.object, t.settings.object)), t.settings && t.settings.ambientLight && (e.settings.ambientLight = Object.assign(e.settings.ambientLight, t.settings.ambientLight)), t.settings && t.settings.spotLight && (e.settings.spotLight = Object.assign(e.settings.spotLight, t.settings.spotLight)), e.files = t.models.split(","), e.$scene = $("#js-awards-scene"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var i = this;
                    if (window.innerWidth < 1200) return !1;
                    this.initScene(), this.initLights(), this.initObject(), this.checkResizeBind = this.checkResize.bind(this), v.on(wi.RESIZE, this.checkResizeBind), this.checkResize(), this.initInteractions(), this.$el.on(wi.MOUSEENTER, ".js-item", function(t) {
                        var e = $(t.currentTarget);
                        i.display(e.attr("data-model"), e)
                    }), this.$el.on(wi.MOUSELEAVE, ".js-item", function(t) {
                        i.hide($(t.currentTarget).attr("data-model"))
                    }), this.$el.on(wi.MOUSEENTER, function(t) {
                        y.addClass(Si), i.outerWrapper.scale.set(1, 1, 1), i.animate()
                    }), this.$el.on(wi.MOUSELEAVE, function(t) {
                        y.removeClass(Si), TweenMax.to(i.outerWrapper.scale, .3, {
                            x: .001,
                            y: .001,
                            z: .001,
                            ease: Power2.easeIn,
                            onComplete: function() {
                                cancelAnimationFrame(i.raf)
                            }
                        })
                    })
                }
            }, {
                key: "initScene",
                value: function() {
                    this.scene, this.camera, this.renderer, this.element, this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(this.settings.camera.fov, window.innerWidth / window.innerHeight, 1, 2e4), this.camera.position.set(this.settings.camera.position[0], this.settings.camera.position[1], this.settings.camera.position[2]), this.camera.lookAt(0, 0, 0), this.scene.add(this.camera), this.mouse = new THREE.Vector2, this.mouse.x = -window.innerWidth / 2, this.mouse.y = -window.innerHeight / 2, this.mouseLerped = new THREE.Vector2, this.mouseLerped.x = -window.innerWidth / 2, this.mouseLerped.y = -window.innerHeight / 2, this.renderer = new THREE.WebGLRenderer({
                        antialias: !(2 <= window.devicePixelRatio),
                        alpha: !0
                    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, this.element = this.renderer.domElement, this.container = this.$scene[0], this.container.width = window.innerWidth, this.container.height = window.innerHeight, this.element.width = this.container.width, this.element.height = this.container.height, this.renderer.setSize(this.container.width, this.container.height), this.renderer.shadowMap.enabled = !0, this.renderer.gammaInput = !0, this.renderer.gammaOutput = !0, this.renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio)), this.container.appendChild(this.element)
                }
            }, {
                key: "initLights",
                value: function() {
                    this.spotLight = new THREE.DirectionalLight(13421772, this.settings.spotLight.intensity), this.spotLight.position.set(this.settings.spotLight.position[0], this.settings.spotLight.position[1], this.settings.spotLight.position[2]), this.spotLight.castShadow = !0, this.spotLight.shadow.mapSize.width = 2048, this.spotLight.shadow.mapSize.height = 2048, this.spotLight.shadow.camera.near = 1, this.spotLight.shadow.camera.far = 1e4, this.spotLight.shadow.bias = -1e-5;
                    this.spotLight.shadow.camera.left = 300, this.spotLight.shadow.camera.right = -300, this.spotLight.shadow.camera.top = -300, this.spotLight.shadow.camera.bottom = 300, this.camera.add(this.spotLight), this.ambientLight = new THREE.AmbientLight(16777215, this.settings.ambientLight.intensity), this.scene.add(this.ambientLight)
                }
            }, {
                key: "initObject",
                value: function() {
                    var n = this;
                    this.outerWrapper = new THREE.Object3D, this.innerWrapper = new THREE.Object3D, this.outerWrapper.add(this.innerWrapper), this.scene.add(this.outerWrapper), this.objects = new Array, this.innerWrapper.rotation.x = this.settings.object.rotation[0] * (Math.PI / 180), this.innerWrapper.rotation.y = this.settings.object.rotation[1] * (Math.PI / 180), this.innerWrapper.rotation.z = this.settings.object.rotation[2] * (Math.PI / 180), this.outerWrapper.rotationTarget = {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    for (var t = 0; t < this.files.length; t++) this.loadModel(this.files[t]).then(function(t) {
                        n.objects.push({
                            id: t.id,
                            object: t.object
                        });
                        for (var e = new THREE.MeshPhongMaterial({
                                color: 16777215
                            }), i = t.object.children.length - 1; 0 <= i; i--) t.object.children[i].material = e;
                        t.object.scale.set(.001, .001, .001), n.innerWrapper.add(t.object)
                    })
                }
            }, {
                key: "display",
                value: function(e, i) {
                    var n = this;
                    clearTimeout(this.displayTimeout), this.displayTimeout = setTimeout(function() {
                        i.prepend(n.$scene);
                        for (var t = n.objects.length - 1; 0 <= t; t--) n.objects[t].id === e ? TweenMax.to(n.objects[t].object.scale, .3, {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: Power2.easeOut
                        }) : TweenMax.to(n.objects[t].object.scale, .1, {
                            x: .001,
                            y: .001,
                            z: .001,
                            ease: Power2.easeIn
                        })
                    }, 200)
                }
            }, {
                key: "hide",
                value: function(t) {
                    for (var e = this.objects.length - 1; 0 <= e; e--) this.objects[e].id === t && TweenMax.to(this.objects[e].object.scale, .2, {
                        x: .001,
                        y: .001,
                        z: .001,
                        ease: Power2.easeIn
                    })
                }
            }, {
                key: "initInteractions",
                value: function() {
                    this.manageMouse()
                }
            }, {
                key: "manageMouse",
                value: function() {
                    var e = this;
                    this.mouse = new THREE.Vector2, this.mouseMoveBind = function(t) {
                        e.mouse.x = (t.clientX - window.innerWidth / 2) / window.innerWidth * e.settings.object.rotationMouseMove[0], e.mouse.y = (t.clientY - window.innerHeight / 2) / window.innerHeight * e.settings.object.rotationMouseMove[1], e.outerWrapper.rotationTarget.x = -e.mouse.y * Math.PI / 180 * 2, e.outerWrapper.rotationTarget.y = e.mouse.x * Math.PI / 180 * 2
                    }, v.on(wi.MOUSEMOVE, this.mouseMoveBind)
                }
            }, {
                key: "displayObject",
                value: function(t) {
                    this.outerWrapper.add(this.objects[t]), this.objects[t].scale.set(0, 0, 0), TweenMax.to(this.objects[t].scale, .4, {
                        x: 1,
                        y: 1,
                        z: 1
                    })
                }
            }, {
                key: "loadModel",
                value: function(e) {
                    var i = this,
                        n = "assets/3d/models/";
                    switch (e.substr(e.lastIndexOf(".") + 1).toLowerCase()) {
                        case Ti:
                            return this.fbxLoader || (this.fbxLoader = new THREE.FBXLoader), new Promise(function(t) {
                                i.fbxLoader.load(n + e, t)
                            });
                        case Ei:
                            return this.objLoader || (this.objLoader = new THREE.OBJLoader), new Promise(function(t) {
                                i.objLoader.load(n + e, t)
                            });
                        case ki:
                        case bi:
                            return this.gltfLoader || (this.gltfLoader = new THREE.GLTFLoader), new Promise(function(t) {
                                i.gltfLoader.load(n + e, t)
                            }).then(function(t) {
                                return {
                                    object: t.scene,
                                    id: e
                                }
                            });
                        default:
                            return !1
                    }
                }
            }, {
                key: "animate",
                value: function() {
                    var t = this;
                    this.raf = requestAnimationFrame(function() {
                        return t.animate()
                    }), this.render()
                }
            }, {
                key: "render",
                value: function() {
                    this.outerWrapper.rotation.x = Y(this.outerWrapper.rotation.x, this.outerWrapper.rotationTarget.x, .1), this.outerWrapper.rotation.y = Y(this.outerWrapper.rotation.y, this.outerWrapper.rotationTarget.y, .1), this.outerWrapper.rotation.z = Y(this.outerWrapper.rotation.z, this.outerWrapper.rotationTarget.z, .1), this.camera.updateProjectionMatrix(), this.mouseLerped.x = Y(this.mouseLerped.x, 10 * this.mouse.x, .1), this.$scene.css({
                        transform: "translate3d(".concat(-this.mouseLerped.x, "px, 0,0)")
                    }), this.renderer.render(this.scene, this.camera)
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (requestAnimationFrame(function() {
                        t.resize(), t.resizeTick = !1
                    }), this.resizeTick = !0)
                }
            }, {
                key: "resize",
                value: function() {
                    this.container.width = window.innerWidth, this.container.height = window.innerHeight, this.element.width = this.container.width, this.element.height = this.container.height, this.camera.aspect = this.container.width / this.container.height, this.renderer.setSize(this.container.width, this.container.height)
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(yi)), cancelAnimationFrame(this.raf), v.off(wi.MOUSEMOVE, this.mouseMoveBind), v.off(wi.RESIZE, this.checkResizeBind)
                }
            }]), i
        }(),
        xi = "".concat(t, ".").concat("LisaCircle"),
        Mi = .05,
        $i = .15,
        Li = {
            CLICK: "click.".concat(xi),
            SHOW: "show.".concat(xi),
            HIDE: "hide.".concat(xi),
            FOLLOW_CURSOR: "followCurosr.".concat(xi),
            UNFOLLOW_CURSOR: "unfollowCurosr.".concat(xi),
            MOUSEMOVE: "mousemove.".concat(xi),
            RESIZE: "resize.".concat(xi),
            SPEAK_START: "speakStart.".concat(xi),
            SPEAK_STOP: "speakStop.".concat(xi),
            SET_ACTIVE: "setActive.".concat(xi)
        },
        Ri = function(t) {
            function n(t) {
                var e;
                if (o(this, n), (e = f(this, d(n).call(this, t))).isFake = void 0 !== e.getiOSVersion() && 13 <= e.getiOSVersion()[0], e.currentLerpFactor = 0, e.followingCursor = !1, e.screenCenter = {
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2
                    }, e.mousePos = {
                        x: e.screenCenter.x,
                        y: e.screenCenter.y
                    }, e.currentPos = {
                        x: e.screenCenter.x,
                        y: e.screenCenter.y
                    }, e.active = !1, e.speaking = !1, e.currentNoise = 0, e.showGui = !1, e.frequencyLerp = .25, e.frequencyCaps = {
                        min: 110,
                        max: 256
                    }, e.isFake) e.tick = Math.floor(1e3 * Math.random()), e.noise = new H, e.noise.setScale(.15), e.currentNoise = 0;
                else {
                    var i = window.AudioContext || window.webkitAudioContext || !1;
                    e.audioCtx = new i, _e.lisa.audioCtx = e.audioCtx, _e.lisa.audioFrequency = 10
                }
                return e
            }
            return c(n, j), a(n, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.isFake || (this.analyser = this.audioCtx.createAnalyser(), this.stream = this.audioCtx.createMediaElementSource(_e.lisa.audio), this.analyser.fftSize = 1024, this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount), this.realFrequencyData = new Uint8Array(this.analyser.frequencyBinCount), this.stream.connect(this.analyser), this.analyser.connect(this.audioCtx.destination)), this.$glow = this.$el.find(".js-glow"), this.$main = this.$el.find(".js-main"), g.on(Li.SHOW, function() {
                        e.$el.toggleClass("-visible", !0)
                    }), g.on(Li.HIDE, function() {
                        e.$el.toggleClass("-visible", !1)
                    }), g.on(Li.FOLLOW_CURSOR, function() {
                        e.followingCursor = !0, e.$el.toggleClass("-compact", !0), e.lerpTween && e.lerpTween.kill && e.lerpTween.kill(), e.lerpTween = TweenMax.to(e, 1, {
                            currentLerpFactor: $i
                        })
                    }), g.on(Li.UNFOLLOW_CURSOR, function() {
                        e.followingCursor = !1, e.$el.toggleClass("-compact", !1), e.lerpTween && e.lerpTween.kill && e.lerpTween.kill(), e.currentLerpFactor = Mi
                    }), v.on(Li.MOUSEMOVE, function(t) {
                        window.isMobile || (e.mousePos.x = t.clientX, e.mousePos.y = t.clientY)
                    }), v.on(Li.RESIZE, function() {
                        e.screenCenter = {
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2
                        }, window.isMobile && (e.mousePos = {
                            x: e.screenCenter.x,
                            y: e.screenCenter.y
                        })
                    }), g.on(Li.SPEAK_START, function() {
                        e.speaking = !0
                    }), g.on(Li.SPEAK_STOP, function() {
                        e.speaking = !1
                    }), g.on(Li.SET_ACTIVE, function(t) {
                        e.setActive(t.options.value)
                    })
                }
            }, {
                key: "initGui",
                value: function() {
                    this.showGui && (this.gui = new dat.GUI, this.guiMain = this.gui.addFolder("LisaCircle"), this.guiMain.open(), this.guiMain.add(this, "frequencyLerp", 0, 1), this.guiMain.add(this.frequencyCaps, "min", 0, 256), this.guiMain.add(this.frequencyCaps, "max", 0, 256), this.guiMain.add(_e.lisa, "audioFrequency"))
                }
            }, {
                key: "setActive",
                value: function(t) {
                    t && !this.active ? (this.update(), this.active = !0) : !t && this.active && (cancelAnimationFrame(this.raf), this.active = !1)
                }
            }, {
                key: "update",
                value: function() {
                    if (this.currentPos.x = Y(this.currentPos.x, this.followingCursor ? this.mousePos.x : this.screenCenter.x, this.currentLerpFactor), this.currentPos.y = Y(this.currentPos.y, this.followingCursor ? this.mousePos.y : this.screenCenter.y, this.currentLerpFactor), TweenMax.set(this.$el, {
                            x: this.currentPos.x,
                            y: this.currentPos.y,
                            force3D: !0
                        }), this.isFake) this.currentNoise = Y(this.currentNoise, this.speaking ? this.noise.getVal(this.tick) : 0, .2), TweenMax.set(this.$main, {
                        x: "-50%",
                        y: "-50%",
                        scale: 1 + .1 * this.currentNoise,
                        force3D: !0
                    }), this.tick++;
                    else {
                        this.analyser.getByteFrequencyData(this.frequencyData);
                        var t = Math.max(0, Math.min(1, (this.frequencyData[_e.lisa.audioFrequency] - this.frequencyCaps.min) / (this.frequencyCaps.max - this.frequencyCaps.min)));
                        this.currentNoise = Y(this.currentNoise, this.speaking ? t : 0, this.frequencyLerp), TweenMax.set(this.$main, {
                            x: "-50%",
                            y: "-50%",
                            scale: .8 + .4 * this.currentNoise,
                            force3D: !0
                        })
                    }
                    TweenMax.set(this.$glow, {
                        opacity: this.currentNoise,
                        force3D: !0
                    }), this.raf = requestAnimationFrame(this.update.bind(this))
                }
            }, {
                key: "getiOSVersion",
                value: function() {
                    if (/iP(hone|od|ad)/.test(navigator.platform)) {
                        var t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        return [parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || 0, 10)]
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(n.prototype), "destroy", this).call(this), cancelAnimationFrame(this.raf), this.$el.off(".".concat(xi)), v.off(".".concat(xi)), g.off(".".concat(xi))
                }
            }]), n
        }(),
        Oi = "".concat(t, ".").concat("LisaStep"),
        Ii = {
            CLICK: "click.".concat(Oi),
            SHOW: "show.".concat(Oi),
            HIDE: "hide.".concat(Oi),
            SHOWING: "showing.".concat(Oi),
            SHOW_END: "showEnd.".concat(Oi),
            HIDING: "hiding.".concat(Oi),
            SKIP: "skip.".concat(Oi)
        },
        Pi = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).muteTimeout = 3e3, e.id = t.id, e.nextId = t.next, e.forceNext = null, e.preventBack = null != t["prevent-back"], e.progress = t.progress, e.subtitle = null != t.subtitle, e.sentences = t.sentences, e.active = !1, e.$toggleTroll = e.$el.find(".js-toggle-troll"), e.$troll = e.$el.find(".js-troll"), e.$trollVideo = e.$el.find(".js-troll-video"), e
            }
            var e, n;
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.$title = this.$el.find(".js-title"), g.on(Ii.SHOW, function(t) {
                        t.options.id === e.id && (e.show(), t.options.forceNext && (e.forceNext = t.options.forceNext))
                    }), g.on(Ii.HIDE, function(t) {
                        t.options.id === e.id && e.hide()
                    }), this.$toggleTroll.on(Ii.CLICK, function() {
                        e.$troll.toggleClass("is-active", !0);
                        var t = e.$trollVideo[0];
                        t.currentTime = 0, t.play(), t.onended = function() {
                            t.pause(), e.$troll.toggleClass("is-active", !1)
                        }
                    })
                }
            }, {
                key: "show",
                value: (n = s(regeneratorRuntime.mark(function t() {
                    var e = this;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return g.triggerHandler({
                                    type: Ii.SHOWING,
                                    options: {
                                        id: this.id,
                                        preventBack: this.preventBack,
                                        progress: this.progress
                                    }
                                }), t.next = 3, Promise.all(_e.lisa.promises);
                            case 3:
                                return this.el.scrollTop = 0, g.triggerHandler({
                                    type: Li.SHOW
                                }), g.triggerHandler({
                                    type: Li.UNFOLLOW_CURSOR
                                }), this.active = !0, this.$el.toggleClass("-active", !0), this.setText(), t.abrupt("return", new Promise(function(t) {
                                    TweenMax.staggerFrom(e.splitText.lines, .75, {
                                        opacity: 0,
                                        y: "100%",
                                        ease: Power2.easeOut
                                    }, .05), setTimeout(t, .5)
                                }).then(function() {
                                    var t = e.speak();
                                    return g.triggerHandler({
                                        type: Ii.SHOW_END,
                                        options: {
                                            id: e.id
                                        }
                                    }), t
                                }).then(function() {
                                    if (e.nextId && e.active) {
                                        var t = e.forceNext ? e.forceNext : e.nextId;
                                        e.hide(), g.triggerHandler({
                                            type: Ii.SHOW,
                                            options: {
                                                id: t
                                            }
                                        })
                                    }
                                }));
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "hide",
                value: function() {
                    var e = this,
                        t = new Promise(function(t) {
                            window.speechSynthesis.cancel(), _e.lisa.audio.pause(), g.triggerHandler({
                                type: Ii.HIDING,
                                options: {
                                    id: e.id
                                }
                            }), e.active = !1, e.$el.toggleClass("-active", !1), e.$el.toggleClass("-expanded", !1), setTimeout(t, 500)
                        }).then(function() {
                            e.forceNext = null, _e.lisa.promises.splice(_e.lisa.promises.indexOf(t), 1)
                        });
                    return _e.lisa.promises.push(t), t
                }
            }, {
                key: "setText",
                value: function() {
                    var t = _e.lisa,
                        e = Object.keys(this.sentences);
                    this.msgId = e[Math.floor(Math.random() * e.length)], this.msg = this.sentences[this.msgId], this.$title.html(this.msg), this.splitText = new SplitText(this.$title, {
                        wordsClass: "word"
                    }), this.subtitle && this.$title.attr("data-subtitle", t.trads[t.session.goal])
                }
            }, {
                key: "speak",
                value: (e = s(regeneratorRuntime.mark(function t() {
                    var i, n, s, e, o, a, r = this;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if ((i = _e.lisa).muted) return t.abrupt("return", new Promise(function(t) {
                                    setTimeout(function() {
                                        t()
                                    }, r.muteTimeout)
                                }));
                                t.next = 5;
                                break;
                            case 5:
                                return s = new Promise(function(t) {
                                    setTimeout(t, r.muteTimeout)
                                }), e = function t(e) {
                                    i.muted && (_e.lisa.audio.pause(), g.triggerHandler({
                                        type: Li.SPEAK_STOP
                                    }), s.then(n), g.off(ji.MUTED, t))
                                }, g.on(ji.MUTED, e), a = function t(e) {
                                    _e.lisa.audio.pause(), g.triggerHandler({
                                        type: Li.SPEAK_STOP
                                    }), o(), g.off(Ii.SKIP, t)
                                }, g.on(Ii.SKIP, a), void 0 !== _e.lisa.audioCtx && _e.lisa.audioCtx.resume(), _e.lisa.audio.src = "/assets/lisa/" + i.lang + "/" + this.msgId + ".mp3", _e.lisa.audio.currentTime = 0, _e.lisa.audio.play(), g.triggerHandler({
                                    type: Li.SPEAK_START
                                }), t.abrupt("return", new Promise(function(t) {
                                    _e.lisa.audio.onended = function() {
                                        g.triggerHandler({
                                            type: Li.SPEAK_STOP
                                        }), t(), g.off(ji.MUTED, e), g.off(Ii.SKIP, a)
                                    }, o = n = t
                                }));
                            case 16:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function() {
                    return e.apply(this, arguments)
                })
            }, {
                key: "destroy",
                value: function() {
                    this.$el.off(".".concat(Oi)), g.off(".".concat(Oi)), v.off(".".concat(Oi)), this.$toggleTroll.off(".".concat(Oi)), p(d(i.prototype), "destroy", this).call(this)
                }
            }]), i
        }(),
        Ai = "".concat(t, ".").concat("Lisa"),
        ji = {
            CLICK: "click.".concat(Ai),
            MUTED: "muted.".concat(Ai),
            SHOWING: "showing.".concat(Ai),
            HIDING: "hiding.".concat(Ai),
            SHOW: "show.".concat(Ai),
            HIDE: "hide.".concat(Ai)
        },
        Hi = {
            BACK: ".js-back",
            SETKEY: ".js-set-key"
        },
        Di = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).active = !1, e.current = null, e.history = [], e.isMutedTracked = !1, _e.lisa.lang = t.lang, _e.lisa.promises.push(e.getContext()), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = new Audio;
                    t.autoplay = !1, $(t).appendTo(this.$el), _e.lisa.audio = t, this.$back = this.$el.find(Hi.BACK), this.$setKey = this.$el.find(Hi.SETKEY), this.$skip = this.$el.find(Hi.SKIP), this.$el.toggleClass("-muted", _e.lisa.muted), new Promise(function(t) {
                        var e = speechSynthesis.getVoices();
                        e.length ? t(e) : speechSynthesis.onvoiceschanged = function() {
                            e = speechSynthesis.getVoices(), t(e)
                        }
                    }).then(function(t) {}), w.on(ji.CLICK, ".js-lisa-toggle", function(t) {
                        e.preventLisaToggle || (e.preventLisaToggle = !0, e.timeoutPreventLisaToggle = setTimeout(function() {
                            e.preventLisaToggle = !1
                        }, 1e3), e.active ? (ga("send", {
                            hitType: "event",
                            eventCategory: "contact.button",
                            eventAction: "close"
                        }), e.hide()) : (ga("send", {
                            hitType: "event",
                            eventCategory: "contact.button",
                            eventAction: "open"
                        }), e.show()))
                    }), g.on(Ii.SHOWING, function(t) {
                        e.showing = !0, e.current = t.options.id, e.$back.toggleClass("-hidden", t.options.preventBack)
                    }), g.on(Ii.SHOW_END, function(t) {
                        e.showing = !1
                    }), g.on(Ii.HIDING, function(t) {
                        e.history.push(t.options.id)
                    }), g.on(ji.SHOW, function(t) {
                        e.show(t.options)
                    }), g.on(ji.HIDE, function() {
                        e.hide()
                    }), g.on(xt.PAGE_CHANGE, function() {
                        e.hide()
                    }), this.$el.on(ji.CLICK, Hi.SKIP, function() {
                        g.triggerHandler(Ii.SKIP)
                    }), this.$el.on(ji.CLICK, Hi.BACK, function() {
                        e.showing || (g.triggerHandler({
                            type: Ii.HIDE,
                            options: {
                                id: e.current
                            }
                        }), e.history.pop(), g.triggerHandler({
                            type: Ii.SHOW,
                            options: {
                                id: e.history.pop()
                            }
                        }))
                    }), this.$el.on(ji.CLICK, ".js-mute", function() {
                        _e.lisa.muted = !_e.lisa.muted, e.$el.toggleClass("-muted", _e.lisa.muted), localStorage.setItem("lisa", JSON.stringify({
                            muted: _e.lisa.muted
                        })), !1 === e.isMutedTracked && !0 === _e.lisa.muted && (e.isMutedTracked = !0, ga("send", {
                            hitType: "event",
                            eventCategory: "contact.form",
                            eventAction: "muted"
                        })), g.triggerHandler({
                            type: ji.MUTED
                        })
                    }), this.$el.on(ji.CLICK, Hi.SETKEY, function(t) {
                        var e = $(t.currentTarget);
                        _e.lisa.session[e.data("key")] = e.data("value")
                    }), this.$setKey.each(function(t, e) {
                        var i = $(e);
                        _e.lisa.trads[$(e).data("value")] = i.find("span")[0].innerText
                    })
                }
            }, {
                key: "show",
                value: function(t) {
                    y.removeClass("has-nav-open");
                    var e = $(".js-lisa-toggle");
                    t && t.session && (_e.lisa.session = r({}, _e.lisa.session, JSON.parse(JSON.stringify(t.session)))), y.toggleClass("has-lisa-active", !0), clearTimeout(this.showTimeout), clearTimeout(this.hideTimeout), this.showTimeout = setTimeout(function() {
                        g.triggerHandler({
                            type: Ii.SHOW,
                            options: {
                                id: "greeting-1",
                                forceNext: t && t.step ? t.step : null
                            }
                        })
                    }, 500), this.active = !0, e.find(".js-lisa-toggle-open").toggleClass("-hidden", this.active), e.find(".js-lisa-toggle-close").toggleClass("-hidden", !this.active), g.triggerHandler({
                        type: ji.SHOWING
                    }), g.triggerHandler({
                        type: Li.SET_ACTIVE,
                        options: {
                            value: !0
                        }
                    })
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this,
                        e = $(".js-lisa-toggle");
                    g.triggerHandler({
                        type: Ii.HIDE,
                        options: {
                            id: this.current
                        }
                    }), this.history = [], g.triggerHandler({
                        type: Li.HIDE
                    }), clearTimeout(this.showTimeout), clearTimeout(this.hideTimeout), this.hideTimeout = setTimeout(function() {
                        e.find(".js-lisa-toggle-bg").toggleClass("-white", t.active), e.find(".js-lisa-toggle-open").toggleClass("-hidden", t.active), e.find(".js-lisa-toggle-close").toggleClass("-hidden", !t.active), g.triggerHandler({
                            type: Li.SET_ACTIVE,
                            options: {
                                value: !1
                            }
                        })
                    }, 800), y.removeClass("has-lisa-active"), g.triggerHandler({
                        type: ji.HIDING
                    }), this.active = !1
                }
            }, {
                key: "getContext",
                value: function() {
                    return new Promise(function(e) {
                        $.getJSON("#", {
                            lang: _e.lisa.lang
                        }, function(t) {
                            _e.lisa.context = t, e()
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$el.off(".".concat(Ai)), w.off(".".concat(Ai)), g.off(".".concat(Ai)), p(d(i.prototype), "destroy", this).call(this)
                }
            }]), i
        }(),
        Ni = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).muteTimeout = 1e3, e
            }
            var e;
            return c(i, Pi), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    p(d(i.prototype), "init", this).call(this), this.$el.on(Ii.CLICK, ".js-next-btn", function(t) {
                        e.hide(), g.triggerHandler({
                            type: Ii.SHOW,
                            options: {
                                id: $(t.currentTarget).data("target")
                            }
                        })
                    }), this.$el.on(Ii.CLICK, ".js-close-btn", function() {
                        g.triggerHandler({
                            type: ji.HIDE
                        })
                    })
                }
            }, {
                key: "show",
                value: (e = s(regeneratorRuntime.mark(function t() {
                    var e = this;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", p(d(i.prototype), "show", this).call(this).then(function() {
                                    e.active && (e.$el.toggleClass("-expanded", !0), g.triggerHandler({
                                        type: Li.FOLLOW_CURSOR
                                    }), e.noCursorFollow && g.triggerHandler({
                                        type: Li.HIDE
                                    }))
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function() {
                    return e.apply(this, arguments)
                })
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(Ii.CLICK)
                }
            }]), i
        }(),
        Bi = "".concat(t, ".").concat("LisaProgress"),
        _i = function(t) {
            function e() {
                return o(this, e), f(this, d(e).apply(this, arguments))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    g.on(Ii.SHOWING, function(t) {
                        TweenMax.set(e.$el, {
                            scaleX: t.options.progress,
                            force3D: !0
                        })
                    }), g.on(ji.HIDING, function(t) {
                        TweenMax.set(e.$el, {
                            scaleX: .02,
                            force3D: !0
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(e.prototype), "destroy", this).call(this), g.off(".".concat(Bi))
                }
            }]), e
        }(),
        Ui = "session-random",
        zi = "random-concat",
        Fi = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).type = t.type ? t.type : Ui, e.sessionProperties = t["session-properties"] && t["session-properties"].split ? t["session-properties"].split(",") : t["session-properties"], e
            }
            return c(i, Ni), a(i, [{
                key: "setText",
                value: function() {
                    var t = _e.lisa,
                        e = {};
                    switch (this.type) {
                        case Ui:
                            e = this.sentences[t.session[this.sessionProperties[0]]];
                            break;
                        case zi:
                            for (var i = Object.keys(this.sentences), n = 0; n < i.length; n++) {
                                var s = i[n],
                                    o = s,
                                    a = !0,
                                    r = !1,
                                    l = void 0;
                                try {
                                    for (var h, c = this.sessionProperties[Symbol.iterator](); !(a = (h = c.next()).done); a = !0) {
                                        var u = h.value;
                                        o += "." + t.session[u]
                                    }
                                } catch (t) {
                                    r = !0, l = t
                                } finally {
                                    try {
                                        a || null == c.return || c.return()
                                    } finally {
                                        if (r) throw l
                                    }
                                }
                                var d = this.sentences[s][o];
                                if (!e) throw "No sentence matches the properties given";
                                e[o] = d
                            }
                            break;
                        default:
                            throw "No type given. Please make it right 😠"
                    }
                    var f = Object.keys(e);
                    this.msgId = f[Math.floor(Math.random() * f.length)], this.msg = e[this.msgId], this.splitText = new SplitText(this.$title, {
                        wordsClass: "word"
                    }), this.$title.html(this.msg), this.subtitle && this.$title.attr("data-subtitle", t.trads[t.session.goal])
                }
            }]), i
        }(),
        Wi = "".concat(t, ".").concat("LisaFormStep"),
        Gi = {
            FOCUS: "focus.".concat(Wi),
            SUBMIT: "submit.".concat(Wi)
        },
        qi = ".js-captcha",
        Vi = ".js-form",
        Ki = ".js-input",
        Yi = "-loading",
        Xi = {
            isSubmitting: !1,
            isTransmitting: !1,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            usingFormData: !1,
            captchaId: null,
            isCaptchaRendered: !1
        },
        Zi = function(t) {
            function n(t) {
                var e;
                return o(this, n), (e = f(this, d(n).call(this, t))).errorMessage = t["error-message"], e.hasCaptcha = window.grecaptcha && window.recaptchaKey, e.isFocusTracked = !1, e.formStates = {}, e
            }
            var e;
            return c(n, Fi), a(n, [{
                key: "init",
                value: function() {
                    var e = this;
                    p(d(n.prototype), "init", this).call(this), this.$formList = this.$el.find(Vi), this.$message = this.$el.find(".js-message"), this.setFormStates(this.$formList), this.$el.on(Gi.FOCUS, Ki, function(t) {
                        return e.onInputFocus(t)
                    }), this.$el.on(Gi.SUBMIT, Vi, function(t) {
                        return e.onSubmit(t)
                    })
                }
            }, {
                key: "setFormStates",
                value: function(t) {
                    for (var e = 0, i = t.length; e < i; e++) {
                        var n = t.eq(e),
                            s = this.getFormIdent(n);
                        this.formStates[s] = r({}, Xi), 0 < n.find('input[type="file"]').length && (this.formStates[s].contentType = !1, this.formStates[s].processData = !1, this.formStates[s].usingFormData = !0)
                    }
                }
            }, {
                key: "getFormIdent",
                value: function(t) {
                    return t.attr("data-type")
                }
            }, {
                key: "onInputFocus",
                value: function(t) {
                    var e = $(t.currentTarget).parents(Vi),
                        i = this.getFormIdent(e);
                    this.hasCaptcha && (this.formStates[i].isCaptchaRendered || (this.formStates[i].captchaId = window.grecaptcha.render(e.find(qi).get(0)), this.formStates[i].isCaptchaRendered = !0)), !1 === this.isFocusTracked && (this.isFocusTracked = !0, ga("send", {
                        hitType: "event",
                        eventCategory: "contact.form",
                        eventAction: "focus",
                        eventLabel: i
                    }))
                }
            }, {
                key: "onSubmit",
                value: function(t) {
                    t.preventDefault(), t.stopPropagation();
                    var e = $(t.currentTarget),
                        i = this.getFormIdent(e);
                    if (!this.validate(e)) return this.message(this.errorMessage, !0), !1;
                    this.formStates[i].isSubmitting = !0, this.sendData(e, i)
                }
            }, {
                key: "sendData",
                value: function(t, a) {
                    var r = this;
                    if (!this.formStates[a].isTransmitting) {
                        this.formStates[a].isTransmitting = !0, t.addClass(Yi), this.message("", !1, !1);
                        var e = this.formStates[a].usingFormData ? new FormData(t.get(0)) : t.serialize();
                        setTimeout(function() {
                            $.ajax({
                                url: t.data("action") || t.prop("action"),
                                method: "POST",
                                contentType: r.formStates[a].contentType,
                                processData: r.formStates[a].processData,
                                dataType: "json",
                                data: e
                            }).done(function(t, e, i) {
                                "string" == typeof t.id ? (_e.lisa.session.name = t.firstName, r.hide(), g.triggerHandler({
                                    type: Ii.SHOW,
                                    options: {
                                        id: "end"
                                    }
                                }), ga("send", {
                                    hitType: "event",
                                    eventCategory: "contact.form",
                                    eventAction: "submit.success",
                                    eventLabel: a
                                })) : (console.group("Something went wrong with the request (fail, ".concat(e, ")")), console.log(t), console.log(i), console.log(e), console.groupEnd())
                            }).fail(function(t, e, i) {
                                var n = [],
                                    s = {};
                                try {
                                    if (t && t.responseJSON && (s = t.responseJSON), !($.isArray(s) && 0 < s.length)) throw new Error("Bad Response");
                                    n = s
                                } catch (t) {}
                                var o = n.map(function(t) {
                                    return "".concat(t.message, " <br>")
                                });
                                r.message(o, !0), ga("send", {
                                    hitType: "event",
                                    eventCategory: "contact.form",
                                    eventAction: "submit.fail",
                                    eventLabel: a
                                }), console.group("Something went wrong with the request (fail, ".concat(e, ")")), console.log(i), console.log(s), console.log(e), console.groupEnd()
                            }).always(function() {
                                t.removeClass(Yi), r.formStates[a].isSubmitting = !1, r.formStates[a].isTransmitting = !1
                            })
                        }, 600)
                    }
                }
            }, {
                key: "message",
                value: function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                    this.$message.toggleClass("-error", e).html(t), i ? this.$message.slideDown(250) : this.$message.slideUp(250)
                }
            }, {
                key: "show",
                value: (e = s(regeneratorRuntime.mark(function t() {
                    var i = this;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", p(d(n.prototype), "show", this).call(this).then(function() {
                                    if (i.active) {
                                        i.$formList.hide();
                                        var t = i.$formList.filter('[data-type="'.concat(_e.lisa.session.goal, '"]'));
                                        for (var e in t.show(), _e.lisa.session) t.find('input[name="'.concat(e, '"],select[name="').concat(e, '"]')).val(_e.lisa.session[e])
                                    }
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function() {
                    return e.apply(this, arguments)
                })
            }, {
                key: "resetCaptchas",
                value: function() {
                    if (this.hasCaptcha)
                        for (var t in this.formStates) null !== this.formStates[t].captchaId && window.grecaptcha.reset(this.formStates[t].captchaId)
                }
            }, {
                key: "hide",
                value: function() {
                    return this.message("", !1, !1), this.$formList.each(function(t, e) {
                        e.reset()
                    }), this.resetCaptchas(), p(d(n.prototype), "hide", this).call(this)
                }
            }, {
                key: "validate",
                value: function(t) {
                    var e = t.find("[data-is-required]:visible");
                    e.removeClass("-invalid");
                    var n = !1;
                    return e.each(function(t, e) {
                        var i = $(e);
                        switch (i.attr("type")) {
                            case "checkbox":
                                i.is("checked") || (i.addClass("-invalid"), n = !0);
                                break;
                            default:
                                i.val() || (i.addClass("-invalid"), n = !0)
                        }
                    }), !n
                }
            }, {
                key: "destroy",
                value: function() {
                    this.$el.off(".".concat(Wi)), p(d(n.prototype), "destroy", this).call(this)
                }
            }]), n
        }(),
        Qi = function(t) {
            function n(t) {
                return o(this, n), f(this, d(n).call(this, t))
            }
            var e;
            return c(n, Fi), a(n, [{
                key: "show",
                value: (e = s(regeneratorRuntime.mark(function t() {
                    var e, i = this;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e = p(d(n.prototype), "show", this).call(this), requestAnimationFrame(function() {
                                    i.$el.find("[data-project-type]").addClass("is-hidden"), i.$el.find('[data-project-type="'.concat(_e.lisa.session.projectType, '"]')).removeClass("is-hidden")
                                }), t.abrupt("return", e);
                            case 3:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                })), function() {
                    return e.apply(this, arguments)
                })
            }]), n
        }(),
        Ji = function(t) {
            function e(t) {
                return o(this, e), f(this, d(e).call(this, t))
            }
            return c(e, Ni), a(e, [{
                key: "setText",
                value: function() {
                    var t = _e.lisa,
                        e = void 0 !== t.context && "string" == typeof t.context.weatherIdent,
                        i = {};
                    if (e)
                        for (var n = Object.keys(this.sentences.context), s = 0; s < n.length; s++) {
                            var o = n[s],
                                a = o + "." + t.context.tod + "." + t.context.weatherIdent;
                            i[a] = this.sentences.context[o][a]
                        }
                    for (var r = {}, l = Object.keys(i), h = 0; h < l.length; h++) {
                        var c = l[h];
                        r[c] = i[c]
                    }
                    for (var u = Object.keys(this.sentences.generic), d = 0; d < u.length; d++) {
                        var f = u[d];
                        r[f] = this.sentences.generic[f]
                    }
                    var p = Object.keys(r);
                    if (this.msgId = p[Math.floor(Math.random() * p.length)], this.msg = r[this.msgId], e && .5 < Math.random() && this.sentences[t.context.weatherIdent] && Object.keys(this.sentences[t.context.weatherIdent]).length) {
                        var m = this.sentences[t.context.weatherIdent],
                            g = Object.keys(m);
                        this.msgId = g[Math.floor(Math.random() * g.length)], this.msg = m[this.msgId]
                    }
                    this.$title.html(this.msg), this.splitText = new SplitText(this.$title, {
                        wordsClass: "word"
                    }), this.subtitle && this.$title.attr("data-subtitle", _e.lisa.trads[_e.lisa.session.goal])
                }
            }]), e
        }(),
        tn = "".concat(t, ".").concat("LisaOpener"),
        en = {
            CLICK: "click.".concat(tn)
        },
        nn = function(t) {
            function e() {
                return o(this, e), f(this, d(e).apply(this, arguments))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.$el.on(en.CLICK, function(t) {
                        g.triggerHandler({
                            type: ji.SHOW,
                            options: {
                                session: e.$el.data("session"),
                                step: e.$el.data("step")
                            }
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(e.prototype), "destroy", this).call(this), this.$el.off(".".concat(tn))
                }
            }]), e
        }(),
        sn = "".concat(t, ".").concat("StickyLimiter"),
        on = 0,
        an = {
            RESIZE: "resize.".concat(sn)
        },
        rn = function(t) {
            function i(t) {
                var e;
                return o(this, i), e = f(this, d(i).call(this, t)), on++, window.stickyLimiters || (window.stickyLimiters = []), window.stickyLimiters.push(h(e)), e.zIndex = 99 - on, e.$inner = e.$el.find(".js-sticky-inner"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var t = this;
                    setTimeout(function() {
                        t.hasSmoothScroll = !1, y.hasClass("has-smooth-scroll") && (t.hasSmoothScroll = !0), t.hasSmoothScroll && (t.checkResizeBind = t.checkResize.bind(t), v.on(an.RESIZE, t.checkResizeBind), t.compute(), t.checkScrollBind = t.checkScroll.bind(t), g.on(et.SCROLLING, t.checkScrollBind), t.$el.before('<div class="o-sticky-shadow"></div>'), t.tw = TweenMax.fromTo(t.$inner, 1, {
                            y: "-100%"
                        }, {
                            y: "0%",
                            ease: Linear.easeNone
                        }), t.tw.pause())
                    }, 200)
                }
            }, {
                key: "compute",
                value: function() {
                    this.tw && this.tw.progress && this.tw.progress(0), this.elBCR = this.$el[0].getBoundingClientRect();
                    var t = this.hasSmoothScroll ? window.scroll.y : 0;
                    this.offsetTop = this.$el.offset().top + t, this.scrollStart = this.offsetTop - window.innerHeight, this.scrollEnd = this.scrollStart + this.elBCR.height
                }
            }, {
                key: "scrollUpdate",
                value: function(t) {
                    var e = (window.scroll.y - this.scrollStart) / (this.scrollEnd - this.scrollStart);
                    e = Math.max(0, Math.min(1, Math.round(1e3 * e) / 1e3)), this.hasSmoothScroll || (e = 1), this.tw.progress(e), this.scrollTick = !1
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.computeTick || (requestAnimationFrame(function() {
                        t.compute(), requestAnimationFrame(function() {
                            t.scrollUpdate()
                        }), t.computeTick = !1
                    }), this.computeTick = !0)
                }
            }, {
                key: "checkScroll",
                value: function(t) {
                    this.scrollUpdate(t)
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), v.off(an.RESIZE, this.checkResizeBind), g.off(et.SCROLLING, this.checkScrollBind)
                }
            }]), i
        }(),
        ln = "".concat(t, ".").concat("AccordionCareers"),
        hn = {
            CLICK: "click.".concat(ln),
            RESIZE: "resize.".concat(ln)
        },
        cn = ".js-accordion-item",
        un = ".js-accordion-triggerer",
        dn = ".js-accordion-content",
        fn = "is-open",
        pn = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).$scrollContainer = window.isMobile ? g : $(".o-scroll"), e.$target = $(t.target), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.$el.on(hn.CLICK, un, function(t) {
                        return e.trigger(t)
                    }), 0 < this.$target.length && this.open(this.$target)
                }
            }, {
                key: "trigger",
                value: function(t) {
                    var e = $(t.currentTarget).parents(cn);
                    e.hasClass(fn) ? this.close(e) : this.open(e)
                }
            }, {
                key: "open",
                value: function(t) {
                    var e = this;
                    this.checkActive(), t.find(dn).slideDown(300, function() {
                        return e.scrollTo(t)
                    }), t.addClass(fn)
                }
            }, {
                key: "close",
                value: function(t) {
                    t.find(dn).slideUp(300, function() {
                        v.triggerHandler({
                            type: "resize"
                        })
                    }), t.removeClass(fn)
                }
            }, {
                key: "checkActive",
                value: function() {
                    var t = this.$el.find(cn + "." + fn);
                    t.length && this.close(t)
                }
            }, {
                key: "scrollTo",
                value: function(t) {
                    g.triggerHandler({
                        type: et.SCROLLTO,
                        options: {
                            targetElem: t,
                            speed: 600
                        }
                    }), setTimeout(function() {
                        v.triggerHandler({
                            type: "resize"
                        })
                    }, 300)
                }
            }, {
                key: "handleResize",
                value: function() {
                    this.checkActive()
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(ln)), v.off(".".concat(ln))
                }
            }]), i
        }(),
        mn = "Panorama",
        gn = "".concat(t, ".").concat(mn),
        vn = {
            CLICK: "click.".concat(gn),
            RESIZE: "resize.".concat(gn),
            MOUSE_DOWN: "mousedown.".concat(gn),
            MOUSE_UP: "mouseup.".concat(gn),
            TRIGGER: "trigger.".concat(mn)
        },
        yn = "-dragging",
        wn = 1,
        Tn = .1,
        En = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).dragging = !1, e.progressTarget = .5, e.dirty = !1, e.inView = !1, e.lerpFactor = wn, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.tw = TweenMax.fromTo(this, .5, {
                        progressTarget: .15
                    }, {
                        progressTarget: 1,
                        ease: Power1.easeInOut
                    }), this.tw.pause(), this.$inner = this.$el.find(".js-inner"), this.checkResizeBind = this.checkResize.bind(this), v.on(vn.RESIZE, this.checkResizeBind), this.compute(), this.manageDragAndDrop(), this.update(), this.checkScrollBind = this.checkScroll.bind(this), g.on(et.SCROLLING, this.checkScrollBind), this.$el.on(vn.TRIGGER, function(t) {
                        "enter" === t.way ? e.inView = !0 : e.inView = !1
                    })
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.computeTick || (requestAnimationFrame(function() {
                        t.compute()
                    }), this.computeTick = !0)
                }
            }, {
                key: "checkScroll",
                value: function(t) {
                    if (!this.dirty) {
                        if (!this.inView) return;
                        this.scrollUpdate(t)
                    }
                }
            }, {
                key: "compute",
                value: function() {
                    this.hasSmoothScroll = !1, y.hasClass("has-smooth-scroll") && (this.hasSmoothScroll = !0), TweenMax.set(this.$inner, {
                        scale: 1,
                        transition: "none"
                    }), this.innerBCR = this.$inner[0].getBoundingClientRect(), this.wrapperBCR = this.$el[0].getBoundingClientRect(), this.deltaX = this.wrapperBCR.width - this.innerBCR.width, TweenMax.set(this.$inner, {
                        clearProps: "scale,transition"
                    }), this.tl && this.tl.kill && this.tl.kill(), this.tl = new TimelineMax({}), this.tl.fromTo(this.$inner, 1, {
                        x: 0
                    }, {
                        x: this.deltaX,
                        ease: Linear.easeNone
                    }), this.tl.progress(this.progressTarget).pause(), this.elBCR = this.$el[0].getBoundingClientRect();
                    var t = this.hasSmoothScroll ? window.scroll.y : 0;
                    this.offsetTop = this.$el.offset().top + t, this.scrollStart = this.offsetTop - window.innerHeight, this.scrollEnd = this.scrollStart + window.innerHeight + this.elBCR.height, this.computeTick = !1
                }
            }, {
                key: "scrollUpdate",
                value: function(t) {
                    var e = (window.scroll.y - this.scrollStart) / (this.scrollEnd - this.scrollStart);
                    e = Math.max(0, Math.min(1, Math.round(1e3 * e) / 1e3)), this.tw.progress(e), this.scrollTick = !1
                }
            }, {
                key: "manageDragAndDrop",
                value: function() {
                    var i = this;
                    this.panManager = new Hammer.Manager(this.$el[0]), this.panManager.add(new Hammer.Pan({
                        direction: Hammer.DIRECTION_HORIZONTAL,
                        threshold: 0
                    })), this.onPanStart = function(t) {
                        i.dragging = !0, i.progressOnGrabStart = i.tl.progress(), i.$el.toggleClass(yn, i.dragging), i.dirty = !0, i.lerpFactor = Tn, i.tw.kill()
                    }, this.panManager.on("panstart", this.onPanStart), this.$el.on(vn.MOUSE_DOWN, this.onPanStart), this.onPanMove = function(t) {
                        var e = t.deltaX / i.deltaX;
                        i.progressTarget = Math.max(0, Math.min(i.progressOnGrabStart + e, 1))
                    }, this.panManager.on("panmove", this.onPanMove), this.onPanEnd = function(t) {
                        i.dragging = !1, i.$el.toggleClass(yn, i.dragging)
                    }, this.panManager.on("panend", this.onPanEnd), this.$el.on(vn.MOUSE_UP, this.onPanEnd)
                }
            }, {
                key: "update",
                value: function() {
                    this.tl.progress(Y(this.tl.progress(), this.progressTarget, this.lerpFactor)), this.raf = requestAnimationFrame(this.update.bind(this))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(gn)), v.off(vn.RESIZE, this.resizeBind), g.off(et.SCROLLING, this.checkScrollBind), this.panManager.off("panstart", this.onPanStart), this.panManager.off("panmove", this.onPanMove), this.panManager.off("panend", this.onPanEnd), this.panManager.destroy(), this.panManager = null
                }
            }]), i
        }(),
        kn = "".concat(t, ".").concat("Quote"),
        bn = {
            CLICK: "click.".concat(kn),
            RESIZE: "resize.".concat(kn),
            MOUSE_DOWN: "mousedown.".concat(kn),
            MOUSE_UP: "mouseup.".concat(kn),
            TRIGGER: "trigger.".concat("Quote")
        },
        Sn = "-dragging",
        Cn = 1,
        xn = .1,
        Mn = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).dragging = !1, e.progressTarget = 0, e.dirty = !1, e.inView = !1, e.lerpFactor = Cn, e.$text = e.$el.find(".js-text"), e.$inner = e.$el.find(".js-inner"), e.$dragzone = e.$el.find(".js-drag-zone"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.tw = TweenMax.fromTo(this, .5, {
                        progressTarget: 0
                    }, {
                        progressTarget: .05,
                        ease: Power1.easeIn
                    }), this.tw.pause(), this.checkResizeBind = this.checkResize.bind(this), v.on(bn.RESIZE, this.checkResizeBind), this.compute(), this.manageDragAndDrop(), this.update(), this.$el.on(bn.TRIGGER, function(t) {
                        "enter" === t.way ? e.inView = !0 : e.inView = !1
                    })
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.computeTick || (requestAnimationFrame(function() {
                        t.compute()
                    }), this.computeTick = !0)
                }
            }, {
                key: "checkScroll",
                value: function(t) {
                    if (!this.dirty) {
                        if (!this.inView) return;
                        this.scrollUpdate(t)
                    }
                }
            }, {
                key: "compute",
                value: function() {
                    this.hasSmoothScroll = !1, y.hasClass("has-smooth-scroll") && (this.hasSmoothScroll = !0), TweenMax.set(this.$inner, {
                        scale: 1,
                        transition: "none"
                    }), this.textBCR = this.$text[0].getBoundingClientRect(), this.wrapperBCR = this.$el[0].getBoundingClientRect(), this.deltaX = this.wrapperBCR.width - this.textBCR.width, TweenMax.set(this.$inner, {
                        clearProps: "scale,transition"
                    }), this.tl && this.tl.kill && this.tl.kill(), this.tl = new TimelineMax({}), this.tl.fromTo(this.$text, 1, {
                        x: 0
                    }, {
                        x: this.deltaX,
                        ease: Linear.easeNone
                    }), this.tl.progress(this.progressTarget).pause(), this.elBCR = this.$el[0].getBoundingClientRect();
                    var t = this.hasSmoothScroll ? window.scroll.y : 0;
                    this.offsetTop = this.$el.offset().top + t, this.scrollStart = this.offsetTop - window.innerHeight, this.scrollEnd = this.scrollStart + window.innerHeight + this.elBCR.height, this.computeTick = !1
                }
            }, {
                key: "scrollUpdate",
                value: function(t) {
                    var e = (window.scroll.y - this.scrollStart) / (this.scrollEnd - this.scrollStart);
                    e = Math.max(0, Math.min(1, Math.round(1e3 * e) / 1e3)), this.tw.progress(e), this.scrollTick = !1
                }
            }, {
                key: "manageDragAndDrop",
                value: function() {
                    var i = this;
                    this.panManager = new Hammer.Manager(this.$dragzone[0]), this.panManager.add(new Hammer.Pan({
                        direction: Hammer.DIRECTION_HORIZONTAL,
                        threshold: 0
                    })), this.onPanStart = function(t) {
                        i.dragging = !0, i.progressOnGrabStart = i.tl.progress(), i.$el.toggleClass(Sn, i.dragging), i.dirty = !0, i.lerpFactor = xn, i.tw.kill()
                    }, this.panManager.on("panstart", this.onPanStart), this.$dragzone.on(bn.MOUSE_DOWN, this.onPanStart), this.onPanMove = function(t) {
                        var e = t.deltaX / (.8 * -i.wrapperBCR.width);
                        i.progressTarget = Math.max(0, Math.min(i.progressOnGrabStart + e, 1))
                    }, this.panManager.on("panmove", this.onPanMove), this.onPanEnd = function(t) {
                        i.dragging = !1, i.$el.toggleClass(Sn, i.dragging)
                    }, this.panManager.on("panend", this.onPanEnd), this.$dragzone.on(bn.MOUSE_UP, this.onPanEnd)
                }
            }, {
                key: "update",
                value: function() {
                    this.tl.progress(Y(this.tl.progress(), this.progressTarget, this.lerpFactor)), this.raf = requestAnimationFrame(this.update.bind(this))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(kn)), this.$dragzone.off(".".concat(kn)), g.off(et.SCROLLING, this.checkScrollBind), v.off(bn.RESIZE, this.checkResizeBind), this.panManager.off("panstart", this.onPanStart), this.panManager.off("panmove", this.onPanMove), this.panManager.off("panend", this.onPanEnd), this.panManager.destroy(), this.panManager = null
                }
            }]), i
        }(),
        $n = "".concat(t, ".").concat("Sprite"),
        Ln = {
            CLICK: "click.".concat($n),
            RESIZE: "resize.".concat($n),
            MOUSE_MOVE: "mousemove.".concat($n),
            REQUEST_UPDATE: "requestUpdate.".concat($n),
            SET_MODE: "setMode.".concat($n)
        },
        Rn = {
            INSTANT: "instant",
            FADE: "fade"
        },
        On = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).tick = 1, e.lastFrame = 0, e.updateRequest = !1, e.imageRequested = !1, e.imageToReplace = !1, e.setMode(Rn.INSTANT), e.FRAMERATE = null != t.framerate ? t.framerate : 30, e.NB_COLS = parseInt(t.cols), e.NB_ROWS = parseInt(t.rows), e.NB_FRAMES = null != t["frames-nb"] ? t["frames-nb"] : e.NB_COLS * e.NB_ROWS, e.FRAME_WIDTH = 100 / e.NB_COLS, e.FRAME_HEIGHT = 100 / e.NB_ROWS, e.$sizer = e.$el.find(".js-sizer"), e.$image = e.$el.find(".js-image"), e.src = e.$image.attr("data-src"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.getFrameValues(), TweenMax.set(this.$image, {
                        width: 100 * this.NB_COLS + "%"
                    }), this.$el.on(Ln.REQUEST_UPDATE, function(t) {
                        e.imageRequested ? !0 === t.options.value ? e.checkUpdate() : e.mode == Rn.FADE && e.hideSprite() : e.loadImage().then(function() {
                            e.updateRequest && (e.updateRequest = !1, e.checkUpdate())
                        }), e.updateRequest = t.options.value
                    }), this.$el.on(Ln.SET_MODE, function(t) {
                        e.setMode(t.options.value)
                    })
                }
            }, {
                key: "checkUpdate",
                value: function() {
                    var t = this;
                    this.updateRequest || (this.imageToReplace ? (this.setImgTimeout = setTimeout(function() {
                        t.$image[0].src = t.src, t.showSprite()
                    }, 300), this.imageToReplace = !1) : this.showSprite(), requestAnimationFrame(this.update.bind(this)), this.updateRequest = !0)
                }
            }, {
                key: "loadImage",
                value: function() {
                    var i = this;
                    return this.imageRequested = !0, this.$el.toggleClass("-loading", !0), new Promise(function(t) {
                        var e = new Image;
                        e.onload = function() {
                            i.imageToReplace = !0, t(), i.$el.toggleClass("-loading", !1)
                        }, e.src = i.src
                    })
                }
            }, {
                key: "getFrameValues",
                value: function() {
                    this.frames = [];
                    for (var t = 0; t < this.NB_FRAMES; t++) {
                        var e = t % this.NB_COLS,
                            i = Math.floor(t / this.NB_COLS),
                            n = {
                                column: e,
                                row: i,
                                x: e * this.FRAME_WIDTH + "%",
                                y: i * this.FRAME_HEIGHT + "%"
                            };
                        this.frames.push(n)
                    }
                }
            }, {
                key: "goToFrame",
                value: function(t) {
                    TweenMax.set(this.$image, {
                        x: "-" + this.frames[t].x,
                        y: "-" + this.frames[t].y
                    })
                }
            }, {
                key: "update",
                value: function(t) {
                    t - this.lastFrame > 1e3 / this.FRAMERATE && (this.lastFrame = t, this.goToFrame(Math.round(this.tick % this.NB_FRAMES)), this.tick++), this.updateRequest && requestAnimationFrame(this.update.bind(this))
                }
            }, {
                key: "setMode",
                value: function(n) {
                    var s = this;
                    this.mode = n, Object.entries(Rn).forEach(function(t) {
                        var e = m(t, 2),
                            i = (e[0], e[1]);
                        i == n ? s.$el.toggleClass("-" + i, !0) : s.$el.toggleClass("-" + i, !1)
                    })
                }
            }, {
                key: "showSprite",
                value: function() {
                    clearTimeout(this.hideSpriteTimeout), TweenMax.set(this.$sizer, {
                        opacity: 0
                    }), TweenMax.set(this.$image, {
                        opacity: 1,
                        visibility: "visible"
                    })
                }
            }, {
                key: "hideSprite",
                value: function() {
                    var t = this;
                    TweenMax.set(this.$sizer, {
                        opacity: 1
                    }), TweenMax.set(this.$image, {
                        opacity: 0
                    }), this.hideSpriteTimeout = setTimeout(function() {
                        TweenMax.set(t.$image, {
                            visibility: "hidden"
                        })
                    }, 500)
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat($n))
                }
            }]), i
        }(),
        In = "".concat(t, ".").concat("TeamMember"),
        Pn = {
            CLICK: "click.".concat(In),
            MOUSE_ENTER: "mouseenter.".concat(In),
            MOUSE_MOVE: "mousemove.".concat(In),
            MOUSE_LEAVE: "mouseleave.".concat(In),
            RESIZE: "resize.".concat(In)
        },
        An = "-active",
        jn = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).mousePos = {
                    x: 0,
                    y: 0
                }, e.facePos = {
                    x: 0,
                    y: 0
                }, e.entryPos = {
                    x: 0,
                    y: 0
                }, e.$text = e.$el.find(".js-text"), e.$face = e.$el.find(".js-face"), e.$faceInner = e.$el.find(".js-face-inner"), e.$sprite = e.$el.find(".js-sprite"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    this.checkResizeBind = this.checkResize.bind(this), v.on(Pn.RESIZE, this.checkResizeBind), this.checkResize(), this.$el.on(Pn.MOUSE_ENTER, this.onMouseEnter.bind(this)), this.$el.on(Pn.MOUSE_LEAVE, this.onMouseLeave.bind(this)), this.$el.on(Pn.MOUSE_MOVE, this.onMouseMove.bind(this))
                }
            }, {
                key: "onMouseEnter",
                value: function(t) {
                    var e = this;
                    this.$sprite.triggerHandler({
                        type: Ln.SET_MODE,
                        options: {
                            value: window.innerWidth < 700 ? Rn.FADE : Rn.INSTANT
                        }
                    }), TweenMax.set(this.$text, {
                        scaleX: this.factorX,
                        force3D: !0
                    }), TweenMax.set(this.$el, {
                        zIndex: 10
                    }), this.$face.toggleClass(An, !0), requestAnimationFrame(function() {
                        e.entering = !0, e.elBCR = e.$el[0].getBoundingClientRect(), e.entryPos.x = t.clientX - e.elBCR.left, e.entryPos.y = t.clientY - e.elBCR.top
                    }), clearTimeout(this.updateTimeout), this.checkUpdate(), this.timeout = setTimeout(function() {
                        e.$sprite.triggerHandler({
                            type: Ln.REQUEST_UPDATE,
                            options: {
                                value: !0
                            }
                        })
                    }, 300)
                }
            }, {
                key: "onMouseLeave",
                value: function(t) {
                    var e = this;
                    clearTimeout(this.timeout), TweenMax.set(this.$text, {
                        scaleX: 1,
                        force3D: !0
                    }), TweenMax.set(this.$el, {
                        clearProps: "zIndex"
                    }), this.$face.toggleClass(An, !1), this.updateTimeout = setTimeout(function() {
                        e.updateRequest = !1, e.$sprite.triggerHandler({
                            type: Ln.REQUEST_UPDATE,
                            options: {
                                value: !1
                            }
                        })
                    }, 500)
                }
            }, {
                key: "onMouseMove",
                value: function(t) {
                    var e = this;
                    cancelAnimationFrame(this.mouseRaf), this.mouseRaf = requestAnimationFrame(function() {
                        e.elBCR = e.$el[0].getBoundingClientRect(), e.mousePos.x = t.clientX - e.elBCR.left, e.mousePos.y = t.clientY - e.elBCR.top
                    })
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.computeTick || (requestAnimationFrame(function() {
                        t.$text.length && t.compute()
                    }), this.computeTick = !0)
                }
            }, {
                key: "checkUpdate",
                value: function() {
                    var t = this;
                    this.updateRequest || (requestAnimationFrame(function() {
                        t.update()
                    }), this.updateRequest = !0)
                }
            }, {
                key: "compute",
                value: function() {
                    this.textBCR = this.$text[0].getBoundingClientRect(), this.elBCR = this.$el[0].getBoundingClientRect(), this.factorX = this.elBCR.width / this.textBCR.width, this.computeTick = !1
                }
            }, {
                key: "update",
                value: function() {
                    1 == this.entering && (this.facePos.x = this.mousePos.x = this.entryPos.x, this.facePos.y = this.mousePos.y = this.entryPos.y, this.entering = !1), this.facePos.x = Y(this.facePos.x, this.mousePos.x, .2), this.facePos.y = Y(this.facePos.y, this.mousePos.y, .2), TweenMax.set(this.$face, {
                        x: this.facePos.x,
                        y: this.facePos.y,
                        force3D: !0
                    }), this.updateRequest && requestAnimationFrame(this.update.bind(this))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), v.off(Pn.RESIZE, this.checkResizeBind), this.$el.off(".".concat(In))
                }
            }]), i
        }(),
        Hn = "".concat(t, ".").concat("TriforceMember"),
        Dn = {
            CLICK: "click.".concat(Hn),
            MOUSE_ENTER: "mouseenter.".concat(Hn),
            MOUSE_LEAVE: "mouseleave.".concat(Hn),
            MOUSE_MOVE: "mousemove.".concat(Hn)
        },
        Nn = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).$shape = e.$el.find(".js-shape"), e
            }
            return c(i, jn), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.$shape.on(Dn.MOUSE_ENTER, function(t) {
                        e.$el.toggleClass("-active", !0), e.onMouseEnter(t)
                    }), this.$shape.on(Dn.MOUSE_LEAVE, function(t) {
                        e.$el.toggleClass("-active", !1), e.onMouseLeave(t)
                    }), this.$shape.on(Dn.MOUSE_MOVE, function(t) {
                        e.onMouseMove(t)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(Hn)), this.$shape.off(".".concat(Hn))
                }
            }]), i
        }(),
        Bn = "".concat(t, ".").concat("TeamList"),
        _n = {
            CLICK: "click.".concat(Bn)
        },
        Un = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).$category = e.$el.find(".js-category"), e.$list = e.$el.find(".js-list"), e.$member = e.$el.find(".js-member"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var n = this;
                    this.$category.on(_n.CLICK, function(t) {
                        var e = $(t.currentTarget),
                            i = e.attr("data-ident");
                        e.hasClass("-active") || (n.$category.toggleClass("-active", !1), e.toggleClass("-active", !0), n.$list.toggleClass("-hidden", !0), clearTimeout(n.hideTimeout), n.hideTimeout = setTimeout(function() {
                            null == i ? n.$member.show() : n.$member.hide().filter('[data-category="' + $(t.currentTarget).attr("data-ident") + '"]').show(), n.$list.toggleClass("-hidden", !1), v.trigger("resize")
                        }, 250))
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$category.off(".".concat(Bn)), clearTimeout(this.hideTimeout)
                }
            }]), i
        }(),
        zn = "".concat(t, ".").concat("HiddenWords"),
        Fn = {
            CLICK: "click.".concat(zn),
            MOUSE_ENTER: "mouseenter.".concat(zn),
            LAUNCH: "launch.".concat(zn)
        },
        Wn = function(t) {
            function e() {
                return o(this, e), f(this, d(e).apply(this, arguments))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    var n = this;
                    this.$words = this.$el.find(".js-word"), this.splitText = new SplitText(this.$words, {
                        type: "chars",
                        charsClass: "c-hidden-words_char"
                    }), this.$chars = $(this.splitText.chars), this.$chars.on(Fn.MOUSE_ENTER, function(t) {
                        $(t.currentTarget).toggleClass("-dirty", !0)
                    }), window.isMobile && this.$el.on(Fn.LAUNCH, function() {
                        var t = x(n.splitText.chars),
                            e = 0,
                            i = setInterval(function() {
                                $(t[e]).toggleClass("-dirty", !0), ++e >= t.length && clearInterval(i)
                            }, 100)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(e.prototype), "destroy", this).call(this), this.$chars.off(Fn.MOUSE_ENTER), this.$el.off(".".concat(zn))
                }
            }]), e
        }(),
        Gn = "".concat(t, ".").concat("Footer"),
        qn = {
            CLICK: "click.".concat(Gn),
            MOUSEDOWN: "mousedown.".concat(Gn),
            MOUSEUP: "mouseup.".concat(Gn)
        },
        Vn = "is-leaving",
        Kn = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).isLeaving = !1, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.$timelines = $(".js-timeline", e.$el), e.timeline = new TimelineMax({
                            onComplete: function() {
                                e.prepareTransition()
                            }
                        }), e.timeline.to(e.$timelines, 1, {
                            scaleY: 1,
                            ease: Power0.easeNone
                        }), e.timeline.pause(), e.$el.on(qn.CLICK, function(t) {
                            t.preventDefault(), t.stopPropagation(), window.innerWidth < 1200 && (e.timeline.timeScale(2), e.timeline.play())
                        }), 1200 <= window.innerWidth && (e.$el.on(qn.MOUSEDOWN, function() {
                            return e.hold()
                        }), e.$el.on(qn.MOUSEUP, function() {
                            return e.release()
                        }))
                    }, 600)
                }
            }, {
                key: "hold",
                value: function() {
                    this.isLeaving || (this.timeline.timeScale(1), this.timeline.play())
                }
            }, {
                key: "release",
                value: function() {
                    this.isLeaving || (this.timeline.timeScale(4), this.timeline.reverse())
                }
            }, {
                key: "prepareTransition",
                value: function() {
                    var t = this;
                    this.isLeaving = !0, this.$el.addClass(Vn), TweenMax.to(this.$timelines, 1, {
                        scaleY: 0,
                        ease: Power4.easeInOut
                    }), setTimeout(function() {
                        g.triggerHandler({
                            type: xt.GOTO,
                            target: t.el
                        })
                    }, 400)
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.timeline.kill(), this.$el.off(".".concat(Gn))
                }
            }]), i
        }(),
        Yn = "".concat(t, ".").concat("PlayGrid"),
        Xn = {
            CLICK: "click.".concat(Yn),
            RESIZE: "resize.".concat(Yn)
        },
        Zn = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).gridDimensions = {
                    w: 0,
                    h: 0
                }, e.position = {
                    x: 0,
                    y: 0
                }, e.target = {
                    x: 0,
                    y: 0,
                    scale: 1
                }, e.viewport = {
                    w: e.el.clientWidth,
                    h: window.innerHeight
                }, e.oldWidth = 0, e.panSpeed = {
                    x: 0,
                    y: 0
                }, e.$grid = e.$el.find(".js-grid"), e.grid = e.$grid[0], e.$wrapper = e.$el.find(".js-wrapper"), e.wrapper = e.$grid[0], e.$itemsWrapper = e.$el.find(".js-play-items"), e.$item = e.$el.find(".js-play-grid-item"), e.$spot = e.$el.find(".js-play-grid-spot"), e.isPlayTracked = !1, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.insertAndShuffle(), this.compute(), window.innerWidth < 1200 || (this.manageInteractions(), this.onResizeBind = function() {
                        t.resizeTick || (t.resizeTick = !0, requestAnimationFrame(function() {
                            t.compute(), t.resizeTick = !1
                        }))
                    }, v.on(Xn.RESIZE, this.onResizeBind))
                }
            }, {
                key: "insertAndShuffle",
                value: function() {
                    var a = this;
                    this.counters = {}, this.spots = {}, x(Array.from(this.$itemsWrapper.find(".js-play-grid-item"))).forEach(function(t) {
                        var e = $(t).data("type");
                        if (a.counters[e] || (a.counters[e] = 0), a.spots[e] || (a.spots[e] = Array.from(a.$spot).filter(function(t) {
                                return $(t).data("type") == e
                            })), !(a.counters[e] >= a.spots[e].length)) {
                            var i = a.spots[e][a.counters[e]],
                                n = i.parentNode,
                                s = Array.from(n.children).indexOf(a.spots[e][a.counters[e]]),
                                o = null != n.children[s + 1] ? n.children[s + 1] : null;
                            i.remove(), n.insertBefore(t, o), a.counters[e]++
                        }
                    }), this.$itemsWrapper.remove()
                }
            }, {
                key: "compute",
                value: function() {
                    var n = this;
                    if (this.el.clientWidth != this.oldWidth) {
                        var s = this.grid.getBoundingClientRect();
                        this.gridDimensions.w = s.width, this.gridDimensions.h = s.height, this.viewport.w = this.el.clientWidth, this.viewport.h = window.innerHeight, this.oldWidth = this.viewport.w, this.items = Array.from(this.$item).map(function(t) {
                            var e = t.getBoundingClientRect(),
                                i = {};
                            return i.el = t, i.w = e.width, i.h = e.height, i.x = e.left + n.position.x - s.left, i.y = e.top + n.position.y - s.top, i.inview = !1, i
                        }), this.position.x = this.target.x = Math.round(100 * (this.gridDimensions.w / 2 - this.viewport.w / 2)) / 100, this.position.y = this.target.y = Math.round(100 * (this.gridDimensions.h / 2 - this.viewport.h / 2)) / 100, this.boundaries = {
                            x: {
                                min: 0,
                                max: this.gridDimensions.w - this.viewport.w
                            },
                            y: {
                                min: 0,
                                max: this.gridDimensions.h - this.viewport.h
                            }
                        }
                    }
                }
            }, {
                key: "manageInteractions",
                value: function() {
                    this.hammerManager = new Hammer.Manager(this.el), this.hammerManager.add(new Hammer.Pan({
                        direction: Hammer.DIRECTION_VERTICAL,
                        threshold: 0
                    })), this.hammerManager.add(new Hammer.Pinch({})), this.managePan(), this.update()
                }
            }, {
                key: "managePan",
                value: function() {
                    var o = this;
                    this.onPanStart = function(t) {
                        !1 === o.isPlayTracked && (o.isPlayTracked = !0, ga("send", {
                            hitType: "event",
                            eventCategory: "play.pan",
                            eventAction: "click"
                        })), o.$wrapper.toggleClass("-panning", !0), o.dragStartPosition = {
                            x: o.position.x,
                            y: o.position.y
                        }, o.throwTw && o.throwTw.kill && (o.throwTw.kill(), o.throwTw = null)
                    }, this.hammerManager.on("panstart", this.onPanStart), this.onPanMove = function(t) {
                        o.target.x = o.dragStartPosition.x - 1.5 * t.deltaX, o.target.y = o.dragStartPosition.y - 1.5 * t.deltaY;
                        if (o.target.x < 0) {
                            var e = Math.abs(o.target.x - o.boundaries.x.min);
                            o.target.x = o.boundaries.x.min - e / 6
                        } else if (o.target.x > o.boundaries.x.max) {
                            var i = Math.abs(o.target.x - o.boundaries.x.max);
                            o.target.x = o.boundaries.x.max + i / 6
                        }
                        if (o.target.y < 0) {
                            var n = Math.abs(o.target.y - o.boundaries.y.min);
                            o.target.y = o.boundaries.y.min - n / 6
                        } else if (o.target.y > o.boundaries.y.max) {
                            var s = Math.abs(o.target.y - o.boundaries.y.max);
                            o.target.y = o.boundaries.y.max + s / 6
                        }
                        o.panSpeed.x = t.velocityX, o.panSpeed.y = t.velocityY
                    }, this.hammerManager.on("panstart panmove", this.onPanMove), this.onPanEnd = function(t) {
                        o.$wrapper.toggleClass("-panning", !1), o.throwTw = ThrowPropsPlugin.to(o.target, {
                            throwProps: {
                                x: {
                                    velocity: 1e3 * -o.panSpeed.x,
                                    resistance: 2500,
                                    min: o.boundaries.x.min,
                                    max: o.boundaries.x.max
                                },
                                y: {
                                    velocity: 1e3 * -o.panSpeed.y,
                                    resistance: 2500,
                                    min: o.boundaries.y.min,
                                    max: o.boundaries.y.max
                                }
                            },
                            ease: Power4.easeOut,
                            onUpdate: function() {}
                        }, null, null, 1)
                    }, this.hammerManager.on("panend", this.onPanEnd)
                }
            }, {
                key: "managePinch",
                value: function() {
                    var e = this;
                    this.onPinchStart = function(t) {
                        e.scaleOnPinchStart = e.target.scale
                    }, this.hammerManager.on("pinchstart", this.onPinchStart), this.onPinchMove = function(t) {
                        e.target.scale = Math.max(SCALE.SMALLEST, Math.min(SCALE.DEFAULT, e.scaleOnPinchStart * t.scale * 1.5))
                    }, this.hammerManager.on("pinchmove", this.onPinchMove)
                }
            }, {
                key: "update",
                value: function() {
                    void 0 !== this.target.x && (this.position.x = Y(this.position.x, this.target.x, .2)), void 0 !== this.target.y && (this.position.y = Y(this.position.y, this.target.y, .2)), Math.round(1 * this.position.x) == Math.round(1 * this.target.x) && (this.position.x = this.target.x = Math.round(this.target.x)), Math.round(1 * this.position.y) == Math.round(1 * this.target.y) && (this.position.y = this.target.y = Math.round(this.target.y));
                    var t = "matrix(1,0,0,1,".concat(Math.round(-this.position.x), ",").concat(Math.round(-this.position.y), ")"),
                        e = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var s, o = this.items[Symbol.iterator](); !(e = (s = o.next()).done); e = !0) {
                            var a = s.value;
                            a.el.style.webkitTransform = t, a.el.style.MozTransform = t, a.el.style.msTransform = t, a.el.style.OTransform = t, a.el.style.transform = t
                        }
                    } catch (t) {
                        i = !0, n = t
                    } finally {
                        try {
                            e || null == o.return || o.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    this.raf = window.requestAnimationFrame(this.update.bind(this))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(Yn)), v.off(Xn.RESIZE, this.onResizeBind), window.cancelAnimationFrame(this.raf), window.innerWidth < 1200 || (this.throwTw && this.throwTw.kill && this.throwTw.kill(), this.hammerManager.off("panstart", this.onPanStart), this.hammerManager.off("panstart panmove", this.onPanMove), this.hammerManager.off("panend", this.onPanEnd), this.hammerManager.destroy(), this.hammerManager = null)
                }
            }]), i
        }(),
        Qn = "".concat(t, ".").concat("PlayRail"),
        Jn = {
            CLICK: "click.".concat(Qn),
            RESIZE: "resize.".concat(Qn)
        },
        ts = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).speed = t.speed || 100, e.position = 0, e.vertical = "string" == typeof t.vertical || !0 === t.vertical, e.lastUpdate = Date.now(), e.resizeTick = !1, e.$containers = e.$el.find(".js-play-rail-container"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.compute(), this.update(), this.onResizeBind = function() {
                        t.resizeTick || (t.resizeTick = !0, requestAnimationFrame(function() {
                            t.compute(), t.resizeTick = !1
                        }))
                    }, v.on(Jn.RESIZE, this.onResizeBind)
                }
            }, {
                key: "compute",
                value: function() {
                    this.containerSize = this.vertical ? this.$containers[0].clientHeight : this.$containers[0].clientWidth
                }
            }, {
                key: "update",
                value: function() {
                    var t = Date.now(),
                        e = t - this.lastUpdate;
                    this.position -= this.speed * e / 1e3, this.position < -this.containerSize && (this.position = this.position + this.containerSize), 0 < this.position && (this.position = -this.containerSize + this.position);
                    var i = 0,
                        n = 0;
                    this.vertical ? n = this.position : i = this.position, this.lastUpdate = t, TweenMax.set(this.$containers, {
                        x: i,
                        y: n,
                        force3D: !0
                    }), this.raf = window.requestAnimationFrame(this.update.bind(this))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(Qn)), v.off(Jn.RESIZE, this.onResizeBind), window.cancelAnimationFrame(this.raf)
                }
            }]), i
        }(),
        es = "".concat(t, ".").concat("PlayModal"),
        is = {
            CLICK: "click.".concat(es),
            OPEN: "open.".concat(es),
            CLOSE: "close.".concat(es)
        },
        ns = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).id = t.id, e.active = !1, e.$close = e.$el.find(".js-close"), e.$content = e.$el.find(".js-content"), e.$title = e.$el.find(".js-modal-title"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.$el.on(is.CLICK, ".js-close", function() {
                        return e.close()
                    }), g.on(is.OPEN, function(t) {
                        t.options.id == e.id && e.openRequest(t)
                    }), g.on(is.CLOSE, function(t) {
                        t.options.id == e.id && e.closeRequest(t)
                    })
                }
            }, {
                key: "openRequest",
                value: function(t) {
                    this.open()
                }
            }, {
                key: "closeRequest",
                value: function(t) {
                    this.close()
                }
            }, {
                key: "open",
                value: function() {
                    this.toggle(!0)
                }
            }, {
                key: "close",
                value: function() {
                    this.$el.find('[data-module="VimeoPlayer"]').trigger(ni.PAUSE), this.$el.removeClass("is-loading is-loaded is-animated")
                }
            }, {
                key: "toggle",
                value: function(t) {
                    "undefined" === t && (t = !this.active), this.active = t, this.$el.toggleClass("is-loaded", this.active), this.$el.toggleClass("is-animated", this.active)
                }
            }, {
                key: "setTitle",
                value: function(t) {
                    this.$title.text(t)
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(es)), this.$close.off(".".concat(es)), g.off(is.OPEN, this.openRequestBind), g.off(is.CLOSE, this.closeRequestBind)
                }
            }]), i
        }(),
        ss = "".concat(t, ".").concat("PlayGridTeam"),
        os = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).memberId = t.id, e.$sprite = e.$el.find(".js-sprite"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var t = this;
                    1200 < window.innerWidth && requestAnimationFrame(function() {
                        setTimeout(function() {
                            t.$sprite.triggerHandler({
                                type: Ln.REQUEST_UPDATE,
                                options: {
                                    value: !0
                                }
                            })
                        }, 1e3 + 1e3 * Math.random())
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(ss))
                }
            }]), i
        }(),
        as = "".concat(t, ".").concat("PlayGridPicture"),
        rs = {
            CLICK: "click.".concat(as)
        },
        ls = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).id = t.id, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.$el.on(rs.CLICK, function() {
                        g.triggerHandler({
                            type: is.OPEN,
                            options: {
                                id: "pictures",
                                slideId: t.id
                            }
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(as))
                }
            }]), i
        }(),
        hs = "".concat(t, ".").concat("PlayModalSlider"),
        cs = function(t) {
            function n(t) {
                var e;
                o(this, n), (e = f(this, d(n).call(this, t))).$slider = e.$el.find(".js-slider"), e.$next = e.$el.find(".js-next"), e.$prev = e.$el.find(".js-prev");
                var i = h(e);
                return e.swiperOn = {
                    init: function() {
                        i.setTitle($(this.slides[this.activeIndex]).data("name"))
                    },
                    slideChange: function() {
                        i.setTitle($(this.slides[this.activeIndex]).data("name"))
                    }
                }, e
            }
            return c(n, ns), a(n, [{
                key: "init",
                value: function() {
                    p(d(n.prototype), "init", this).call(this), this.swiper = new Swiper(this.$slider, {
                        loop: !0,
                        slidesPerView: 1,
                        grabCursor: !0,
                        touchStartPreventDefault: !1,
                        touchMoveStopPropagation: !1,
                        navigation: {
                            nextEl: this.$next[0],
                            prevEl: this.$prev[0]
                        },
                        on: this.swiperOn
                    })
                }
            }, {
                key: "openRequest",
                value: function(e) {
                    if (p(d(n.prototype), "openRequest", this).call(this, e), e.options.slideId) {
                        var t = Array.from(this.swiper.slides).find(function(t) {
                            return $(t).data("id") == e.options.slideId
                        });
                        this.swiper.slideTo(Array.from(this.swiper.slides).indexOf(t), 0)
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(n.prototype), "destroy", this).call(this), this.$el.off(".".concat(hs)), this.swiper.destroy()
                }
            }]), n
        }(),
        us = "".concat(t, ".").concat("LeafsItem"),
        ds = {
            CLICK: "click.".concat(us),
            RESIZE: "resize.".concat(us),
            SET_ACTIVE: "setActive.".concat(us)
        },
        fs = function(t) {
            function e() {
                return o(this, e), f(this, d(e).apply(this, arguments))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.compute(), this.$video = this.$el.find(".js-leafs-item-video"), this.$el.on(ds.SET_ACTIVE, function(t) {
                        e.setActive(t.options.value)
                    }), this.$el.hasClass("is-active") && this.setActive(!0), this.checkResizeBind = this.checkResize.bind(this), v.on(ds.RESIZE, this.checkResizeBind)
                }
            }, {
                key: "compute",
                value: function() {
                    this.viewportW = window.innerWidth
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (requestAnimationFrame(function() {
                        t.compute(), t.resizeTick = !1
                    }), this.resizeTick = !0)
                }
            }, {
                key: "setActive",
                value: function(t) {
                    var e = this;
                    this.$video.length && (t ? this.timeout = setTimeout(function() {
                        e.$video[0].play()
                    }, 1e3 < this.viewportW ? 250 : 1e3) : (clearTimeout(this.timeout), this.$video[0].pause()))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(e.prototype), "destroy", this).call(this), this.$el.off(".".concat(us)), v.off(ds.RESIZE, this.checkResizeBind)
                }
            }]), e
        }(),
        ps = "".concat(t, ".").concat("Leafs"),
        ms = {
            CLICK: "click.".concat(ps),
            RESIZE: "resize.".concat(ps)
        },
        gs = ".js-leafs-item",
        vs = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).coords = [], e.lerpFactor = .2, e.progressTarget = 0, e.activeIndex = -1, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.$inner = this.$el.find(".js-leafs-inner"), this.$items = this.$el.find(gs), this.compute(), this.initTl(), this.manageDragAndDrop(), this.update(), this.checkResizeBind = this.checkResize.bind(this), v.on(ms.RESIZE, this.checkResizeBind), this.$el.on(ms.CLICK, gs, function(t) {
                        e.dragging || e.goTo($(t.currentTarget).attr("data-id"))
                    })
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (requestAnimationFrame(function() {
                        t.compute(), t.initTl(), t.resizeTick = !1
                    }), this.resizeTick = !0)
                }
            }, {
                key: "compute",
                value: function() {
                    this.innerBCR = this.$inner[0].getBoundingClientRect(), this.leafW = .57, window.innerWidth < 700 && (this.leafW = .75), this.leafDelta = 1 - 1 / this.leafW * (1 - this.leafW) / (this.$items.length - 1), this.progressDistDivider = -this.innerBCR.width * this.leafW * this.leafDelta * (this.$items.length - 1)
                }
            }, {
                key: "initTl",
                value: function() {
                    var n = this;
                    this.tl && this.tl.kill && this.tl.kill(), this.tl = new TimelineMax, this.tl.addLabel("start", 0);
                    var s = 100 * this.leafDelta;
                    this.$items.each(function(t, e) {
                        n.tl.set(e, {
                            x: -s * t + "%",
                            zIndex: n.$items.length - t
                        }, "start");
                        var i = 1 / (n.$items.length - 1) * t;
                        n.coords.push(i), n.$items.eq(t).attr("data-id", t), t != n.$items.length - 1 && n.tl.to(e, 1, {
                            x: -s * t - s + "%",
                            ease: Linear.easeNone
                        })
                    }), this.tl.progress(.01), this.tl.progress(this.progressTarget), this.tl.pause()
                }
            }, {
                key: "manageDragAndDrop",
                value: function() {
                    var i = this;
                    this.panManager = new Hammer.Manager(this.el), this.panManager.add(new Hammer.Pan({
                        direction: Hammer.DIRECTION_HORIZONTAL,
                        threshold: 0
                    })), this.onPanStart = function(t) {
                        i.dragging = !0, i.progressOnGrabStart = i.tl.progress(), i.throwTw && i.throwTw.kill && (i.throwTw.kill(), i.throwTw = null)
                    }, this.panManager.on("panstart", this.onPanStart), this.onPanMove = function(t) {
                        var e = t.deltaX / i.progressDistDivider;
                        i.progressTarget = Math.max(0, Math.min(i.progressOnGrabStart + e, 1)), i.panSpeed = t.velocityX
                    }, this.panManager.on("panmove", this.onPanMove), this.onPanEnd = function(t) {
                        i.throwTw = ThrowPropsPlugin.to(i, {
                            throwProps: {
                                progressTarget: {
                                    velocity: i.panSpeed / i.progressDistDivider * 1e3,
                                    resistance: 1e3,
                                    end: i.coords
                                }
                            },
                            ease: Power4.easeOut
                        }, null, null, 0), requestAnimationFrame(function() {
                            i.dragging = !1
                        })
                    }, this.panManager.on("panend", this.onPanEnd)
                }
            }, {
                key: "goTo",
                value: function(t) {
                    this.tw && this.tw.kill && (this.tw.kill(), this.tw = null), this.throwTw && this.throwTw.kill && (this.throwTw.kill(), this.throwTw = null), this.tw = TweenMax.to(this, .5, {
                        progressTarget: this.coords[t],
                        ease: Power2.easeOut
                    })
                }
            }, {
                key: "update",
                value: function() {
                    var t = this.coords.indexOf(L(this.progressTarget, this.coords));
                    t != this.activeIndex && (this.$items.eq(this.activeIndex).toggleClass("is-active", !1), this.$items.eq(this.activeIndex).triggerHandler({
                        type: ds.SET_ACTIVE,
                        options: {
                            value: !1
                        }
                    }), this.activeIndex = t, this.$items.eq(this.activeIndex).toggleClass("is-active", !0), this.$items.eq(this.activeIndex).triggerHandler({
                        type: ds.SET_ACTIVE,
                        options: {
                            value: !0
                        }
                    })), this.tl.progress(Y(this.tl.progress(), this.progressTarget, this.lerpFactor)), this.raf = requestAnimationFrame(this.update.bind(this))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(ps)), v.off(ms.RESIZE, this.checkResizeBind), this.panManager.off("panstart", this.onPanStart), this.panManager.off("panmove", this.onPanMove), this.panManager.off("panend", this.onPanEnd), this.panManager.destroy(), this.panManager = null, this.throwTw && this.throwTw.kill && (this.throwTw.kill(), this.throwTw = null)
                }
            }]), i
        }(),
        ys = "".concat(t, ".").concat("Error"),
        ws = {
            CLICK: "click.".concat(ys),
            RESIZE: "resize.".concat(ys)
        },
        Ts = "is-playing",
        Es = "fbx",
        ks = "obj",
        bs = "glb",
        Ss = "gltf",
        Cs = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).files = t.models.split(","), e.isSlow = !1, e.bassValue = {
                    from: 50,
                    to: 3500
                }, e.timeScale = {
                    value: .1
                }, e.backgroundColor = {
                    r: 0,
                    g: 0,
                    b: 0
                }, e.lightsValues = [{
                    r: 20,
                    g: 255,
                    b: 136
                }, {
                    r: 20,
                    g: 236,
                    b: 255
                }, {
                    r: 20,
                    g: 31,
                    b: 255
                }], e.isPlaying = !1, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.checkResizeBind = this.checkResize.bind(this), v.on(ws.RESIZE, this.checkResizeBind), this.checkResize(), this.timeScaleTl = new TimelineMax, this.timeScaleTl.to(this.timeScale, 1, {
                        value: 1
                    }), this.timeScaleTl.progress(.001), this.timeScaleTl.pause(), this.backgroundTl = new TimelineMax, this.backgroundTl.to(this.backgroundColor, 1, {
                        r: 255,
                        g: 255,
                        b: 255
                    }), this.backgroundTl.progress(1), this.backgroundTl.pause(), this.initScene(), this.initLights(), this.initObjects(), this.$el.on(ws.CLICK, ".js-play", function() {
                        return t.play()
                    })
                }
            }, {
                key: "play",
                value: function() {
                    var t = this;
                    this.isPlaying = !0, this.player = document.querySelector("#js-audio"), this.player.play();
                    var e = window.AudioContext || window.webkitAudioContext || !1;
                    this.audioCtx = new e, this.audioCtx.resume().then(function() {
                        t.player.play()
                    }), this.initAudioDetection(), this.$el.addClass(Ts)
                }
            }, {
                key: "initScene",
                value: function() {
                    this.scene, this.camera, this.renderer, this.element, this.scene = new THREE.Scene, this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 3e3), this.camera.position.set(0, 0, 10), this.camera.lookAt(0, 0, 0), this.scene.add(this.camera), this.mouse = new THREE.Vector2, this.mouse.x = -window.innerWidth / 2, this.mouse.y = -window.innerHeight / 2, this.renderer = new THREE.WebGLRenderer({
                        antialias: !(2 <= window.devicePixelRatio),
                        alpha: !0
                    }), this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)), this.renderer.shadowMap.enabled = !0, this.renderer.shadowMap.type = THREE.PCFSoftShadowMap, this.element = this.renderer.domElement, this.container = this.el.querySelector(".js-scene"), this.container.width = this.el.getBoundingClientRect().width, this.container.height = this.el.getBoundingClientRect().height, this.element.width = this.container.width, this.element.height = this.container.height, this.renderer.setSize(this.container.width, this.container.height), this.renderer.shadowMap.enabled = !0, this.renderer.gammaInput = !0, this.renderer.gammaOutput = !0, this.renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio)), this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement), this.controls.enableDamping = !0, this.controls.dampingFactor = .1, this.controls.enableZoom = !1, this.controls.rotateSpeed = .1, this.container.appendChild(this.element)
                }
            }, {
                key: "initObjects",
                value: function() {
                    var r = this,
                        t = 1;
                    this.objects = new Array, this.timelines = new Array;
                    var l = (new THREE.TextureLoader).load("/assets/images/hdri@2x.jpg");
                    l.mapping = THREE.SphericalReflectionMapping;
                    for (var e = 0; e < this.files.length; e++) this.loadModel(this.files[e]).then(function(t) {
                        var e = new THREE.Object3D;
                        e.add(t), t.position.set(10 * Math.random() + 2, 10 * Math.random() + 2, 10 * Math.random() + 2), e.rotation.set(Math.random() * (2 * Math.PI), Math.random() * (2 * Math.PI), Math.random() * (2 * Math.PI));
                        var i = new TimelineMax({
                            repeat: -1
                        });
                        i.to(e.rotation, 0, {
                            y: 0
                        }), i.to(e.rotation, 10, {
                            y: 2 * Math.PI,
                            ease: Power0.easeNone
                        });
                        var n = new TimelineMax({
                            repeat: -1
                        });
                        n.to(t.rotation, 0, {
                            y: 0
                        }), n.to(t.rotation, 10, {
                            y: 2 * Math.PI,
                            ease: Power0.easeNone
                        }), r.timelines.push(i), r.timelines.push(n);
                        for (var s = new THREE.MeshPhongMaterial({
                                color: 16777215,
                                shininess: 100,
                                envMap: l,
                                specular: 16777215,
                                emissive: 0
                            }), o = t.children.length - 1; 0 <= o; o--) {
                            t.children[o].material = s;
                            for (var a = t.children[o].children.length - 1; 0 <= a; a--) t.children[o].children[a].material = s
                        }
                        r.objects.push(e), r.scene.add(e)
                    }), ++t === this.files.length && this.animate()
                }
            }, {
                key: "slow",
                value: function() {}
            }, {
                key: "initLights",
                value: function() {
                    var t = new THREE.Color("rgb(".concat(this.lightsValues[0].r, ",").concat(this.lightsValues[0].g, ",").concat(this.lightsValues[0].b, ")")),
                        e = new THREE.Color("rgb(".concat(this.lightsValues[1].r, ",").concat(this.lightsValues[1].g, ",").concat(this.lightsValues[1].b, ")")),
                        i = new THREE.Color("rgb(".concat(this.lightsValues[2].r, ",").concat(this.lightsValues[2].g, ",").concat(this.lightsValues[2].b, ")")),
                        n = new THREE.PointLight(t, 1, 1e3);
                    n.position.set(2, 2, 2), this.scene.add(n);
                    var s = new THREE.PointLight(e, 1, 1e3);
                    s.position.set(2, -2, 2), this.scene.add(s);
                    var o = new THREE.PointLight(i, 1, 1e3);
                    o.position.set(-2, 2, 2), this.scene.add(o), this.lights = [n, s, o], this.colors = [t, e, i], this.firstLightTl = new TimelineMax, this.firstLightTl.to(this.colors[0], 1, {
                        r: 24 / 255,
                        g: 115 / 255,
                        b: 210 / 255
                    }), this.firstLightTl.pause(), this.secondLightTl = new TimelineMax, this.secondLightTl.to(this.colors[1], 1, {
                        r: 235 / 255,
                        g: 205 / 255,
                        b: 0
                    }), this.secondLightTl.pause(), this.thirdLightTl = new TimelineMax, this.thirdLightTl.to(this.colors[2], 1, {
                        r: 1,
                        g: 6 / 255,
                        b: 83 / 255
                    }), this.thirdLightTl.pause(), this.lightTimelines = [this.firstLightTl, this.secondLightTl, this.thirdLightTl]
                }
            }, {
                key: "animate",
                value: function() {
                    var t = this;
                    this.raf = requestAnimationFrame(function() {
                        return t.animate()
                    }), this.render();
                    for (var e = 0; e < this.timelines.length; e++) this.timelines[e].timeScale(this.timeScale.value);
                    if (this.isPlaying) {
                        this.analyser.getByteFrequencyData(this.realFrequencyData);
                        for (var i = 0; i < this.objects.length; i++) this.frequencyData[i] = Y(this.frequencyData[i], this.realFrequencyData[i], .15), this.objects[i].children[0].scale.set(.3 + this.frequencyData[i % 16] / 256 * (.5 + this.timeScale.value), .3 + this.frequencyData[i % 16] / 256 * (.5 + this.timeScale.value), .3 + this.frequencyData[i % 16] / 256 * (.5 + this.timeScale.value))
                    }
                    for (e = 0; e < this.lights.length; e++) this.lights[e].color = this.colors[e]
                }
            }, {
                key: "render",
                value: function() {
                    this.camera.updateProjectionMatrix(), this.controls.update();
                    var t = (this.camera.position.z + 10) / 20;
                    this.isPlaying && (this.bassTl.progress(t), this.timeScaleTl.progress(t), this.backgroundTl.progress(t));
                    for (var e = 0; e < this.lightTimelines.length; e++) this.lightTimelines[e].progress(t);
                    this.renderer.setClearColor(new THREE.Color("rgb(".concat(parseInt(this.backgroundColor.r), ",").concat(parseInt(this.backgroundColor.g), ",").concat(parseInt(this.backgroundColor.b), ")"))), this.renderer.render(this.scene, this.camera)
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (requestAnimationFrame(function() {
                        t.resize(), t.resizeTick = !1
                    }), this.resizeTick = !0)
                }
            }, {
                key: "resize",
                value: function() {
                    this.container.width = this.$el[0].getBoundingClientRect().width, this.container.height = this.$el[0].getBoundingClientRect().height, this.element.width = this.container.width, this.element.height = this.container.height, this.camera.aspect = this.container.width / this.container.height, this.renderer.setSize(this.container.width, this.container.height)
                }
            }, {
                key: "initAudioDetection",
                value: function() {
                    this.analyser = this.audioCtx.createAnalyser(), this.stream = this.audioCtx.createMediaElementSource(this.player), this.analyser.fftSize = 1024, this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount), this.realFrequencyData = new Uint8Array(this.analyser.frequencyBinCount), this.bassFilter = this.audioCtx.createBiquadFilter(), this.bassFilter.type = "lowpass", this.bassFilter.frequency.value = this.bassValue.from, this.stream.connect(this.bassFilter), this.bassFilter.connect(this.analyser), this.analyser.connect(this.audioCtx.destination), this.bassTl = new TimelineMax, this.bassTl.to(this.bassFilter.frequency, 1, {
                        value: this.bassValue.to
                    }), this.bassTl.progress(1), this.bassTl.pause()
                }
            }, {
                key: "loadModel",
                value: function(e) {
                    var t, i = this,
                        n = "assets/3d/models/",
                        s = e.substr(e.lastIndexOf(".") + 1).toLowerCase();
                    if (_e.models3d[n + e]) return new Promise(function(t) {
                        t()
                    }).then(function() {
                        return _e.models3d[n + e].clone()
                    });
                    switch (s) {
                        case Es:
                            this.fbxLoader || (this.fbxLoader = new THREE.FBXLoader), t = new Promise(function(t) {
                                i.fbxLoader.load(n + e, t)
                            });
                            break;
                        case ks:
                            this.objLoader || (this.objLoader = new THREE.OBJLoader), t = new Promise(function(t) {
                                i.objLoader.load(n + e, t)
                            });
                            break;
                        case bs:
                        case Ss:
                            this.gltfLoader || (this.gltfLoader = new THREE.GLTFLoader), t = new Promise(function(t) {
                                i.gltfLoader.load(n + e, t)
                            }).then(function(t) {
                                return t.scene
                            });
                            break;
                        default:
                            return !1
                    }
                    return t.then(function(t) {
                        return (_e.models3d[n + e] = t).clone()
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), void 0 !== this.player && this.player.remove(), cancelAnimationFrame(this.raf), this.$el.off(".".concat(ys))
                }
            }]), i
        }(),
        xs = "".concat(t, ".").concat("FileInput"),
        Ms = {
            CLICK: "click.".concat(xs),
            CHANGE: "change.".concat(xs)
        },
        $s = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).options = t, e.$input = e.$el.find(".js-fi-input"), e.$label = e.$el.find(".js-fi-label"), e.labelInitialVal = e.$label.find("span")[0].innerHTML, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var i = this;
                    this.$input.on(Ms.CHANGE, function(t) {
                        var e = "";
                        (e = this.files && 1 < this.files.length ? (i.options["multiple-caption"] || "").replace("{count}", this.files.length) : t.target.value.split("\\").pop()) ? i.$label.find("span").text(e): i.$label.find("span").text(i.labelInitialVal)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(xs)), this.$input.off(".".concat(xs))
                }
            }]), i
        }(),
        Ls = "".concat(t, ".").concat("Share"),
        Rs = {
            CLICK: "click.".concat(Ls),
            CHANGE: "change.".concat(Ls)
        },
        Os = "is-open",
        Is = function(t) {
            function e(t) {
                return o(this, e), f(this, d(e).call(this, t))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.$el.on(Rs.CLICK, ".js-share-open", function() {
                        e.$el.addClass(Os)
                    }), this.$el.on(Rs.CLICK, ".js-share-close", function() {
                        e.$el.removeClass(Os)
                    }), this.$el.on(Rs.CLICK, "[data-share-platform]", function(t) {
                        return e.share(t)
                    })
                }
            }, {
                key: "share",
                value: function(t) {
                    t.preventDefault();
                    var e, i = $(t.currentTarget),
                        n = i.attr("data-share-platform"),
                        s = i.attr("data-share-url");
                    switch (n) {
                        case "facebook":
                            e = "https://facebook.com/sharer/sharer.php?u=" + s, this.openWindow(e);
                            break;
                        case "twitter":
                            e = "https://twitter.com/share?url=" + s + "&amp;text=" + i.attr("data-share-text"), this.openWindow(e);
                            break;
                        case "mail":
                            var o = i.data("share-subject"),
                                a = i.data("share-body");
                            this.openMail(o, a)
                    }
                }
            }, {
                key: "openWindow",
                value: function(t) {
                    window.open(t, "", "menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=500, width=600")
                }
            }, {
                key: "openMail",
                value: function(t, e) {
                    window.location = "mailto:?subject=" + t + "&body=" + e
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(e.prototype), "destroy", this).call(this), this.$el.off(".".concat(Ls))
                }
            }]), e
        }(),
        Ps = "".concat(t, ".").concat("OrderList"),
        As = {
            CLICK: "click.".concat(Ps)
        },
        js = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).$headFields = e.$el.find(".js-head-field"), e.$content = e.$el.find(".js-list-content"), e.$items = e.$el.find(".js-list-item"), e.$borderBottom = e.$el.find(".js-list-border-bottom"), e.itemsMap = Array.from(e.$items).map(function(t) {
                    var e = $(t),
                        i = e.data("fields");
                    return {
                        el: t,
                        $el: e,
                        fields: i
                    }
                }), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    this.$headFields.on(As.CLICK, this.onOrderClick.bind(this))
                }
            }, {
                key: "onOrderClick",
                value: function(t) {
                    var e = this,
                        i = $(t.currentTarget);
                    Promise.all([this.listOut()]).then(function() {
                        e.orderBy(i.data("field")), e.listIn()
                    })
                }
            }, {
                key: "orderBy",
                value: function(t, e) {
                    var i = this;
                    null == e || "ASC" != e && "DESC" != e ? t != this.orderField ? (this.orderField = t, this.orderOrientation = "ASC") : "ASC" == this.orderOrientation ? this.orderOrientation = "DESC" : this.orderOrientation = "ASC" : (this.orderField = t, this.orderOrientation = e), this.$headFields.toggleClass("-active", !1), this.$headFields.filter('[data-field="' + this.orderField + '"]').toggleClass("-active", !0).toggleClass("-reverse", "ASC" == this.orderOrientation), this.itemsMap.sort(function(t, e) {
                        return (t = t.fields[i.orderField]) == (e = e.fields[i.orderField]) ? 0 : t < e ? 1 : -1
                    }), $.each(this.itemsMap, function(t, e) {
                        "ASC" == i.orderOrientation ? e.$el.prependTo(i.$content) : e.$el.appendTo(i.$content)
                    }), this.listIn()
                }
            }, {
                key: "listOut",
                value: function() {
                    var i = this;
                    return new Promise(function(t, e) {
                        TweenMax.to([i.$content, i.$borderBottom], .25, {
                            opacity: 0,
                            y: 10,
                            force3D: !0,
                            ease: Power2.easeInOut,
                            onComplete: t
                        })
                    })
                }
            }, {
                key: "listIn",
                value: function() {
                    var i = this;
                    return new Promise(function(t, e) {
                        TweenMax.to([i.$content, i.$borderBottom], .25, {
                            opacity: 1,
                            y: 0,
                            force3D: !0,
                            ease: Power2.easeInOut,
                            onComplete: t
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(Ps)), this.$headFields.off(".".concat(Ps))
                }
            }]), i
        }(),
        Hs = "".concat(t, ".").concat("FadeUpByRow"),
        Ds = {
            CLICK: "click.".concat(Hs),
            LAUNCH: "launch.".concat(Hs),
            RESIZE: "resize.".concat(Hs)
        },
        Ns = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).options = t, e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    this.split(), this.checkResizeBind = this.checkResize.bind(this), v.on(Ds.RESIZE, this.checkResizeBind)
                }
            }, {
                key: "checkResize",
                value: function() {
                    var t = this;
                    this.resizeTick || (requestAnimationFrame(function() {
                        t.split(), t.resizeTick = !1
                    }), this.resizeTick = !0)
                }
            }, {
                key: "split",
                value: function() {
                    var t = this,
                        e = {
                            w: window.innerWidth,
                            h: window.innerHeight
                        };
                    (!this.lastViewportDimensions || e.w != this.lastViewportDimensions.w || e.h != this.lastViewportDimensions.h) && (this.splitText && this.splitText.revert(), this.splitText = new SplitText(this.el, {
                        type: "lines",
                        linesClass: this.options["lines-class"]
                    }), requestAnimationFrame(function() {
                        requestAnimationFrame(function() {
                            t.$el.addClass("is-ready")
                        })
                    })), this.lastViewportDimensions = e
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(Hs))
                }
            }]), i
        }(),
        Bs = "".concat(t, ".").concat("Choochoo"),
        _s = {
            CLICK: "click.".concat(Bs),
            KEYUP: "keyup.".concat(Bs)
        },
        Us = "is-visible",
        zs = "is-launched",
        Fs = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).$el = $(".c-choo"), e.$lettersElem = $(".js-letter", e.el), e.$imagesContainer = $(".js-images-container", e.$el), e.lettersCodes = new Array(67, 72, 79, 79, 67, 72, 79, 79), e.lettersStep = 0, e.chooImages, e.timeoutIdle, e.letterBg = document.querySelector(".js-letter-bg", e.el), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    window.innerWidth < 1200 || (g.on(_s.KEYUP, function(t) {
                        return e.keyup(t)
                    }), this.$el.on(_s.CLICK, ".js-choo-close", function(t) {
                        return e.hideContent(t)
                    }))
                }
            }, {
                key: "keyup",
                value: function(t) {
                    if (!y.hasClass("has-lisa-active")) switch (t.keyCode) {
                        case 27:
                            this.hideContent();
                            break;
                        case this.lettersCodes[this.lettersStep]:
                            this.addLetter();
                            break;
                        default:
                            this.lettersStep < 6 && this.hideContent()
                    }
                }
            }, {
                key: "addLetter",
                value: function() {
                    var t = this;
                    0 === this.lettersStep && this.$el.addClass(Us), this.$lettersElem[this.lettersStep].classList.add(Us);
                    var e = this.lettersStep / (this.$lettersElem.length - 1);
                    TweenMax.to(this.letterBg, .3, {
                        scaleY: e,
                        ease: Power2.easeInOut
                    }), this.lettersStep == this.$lettersElem.length - 1 && (this.trainDeparture(), clearTimeout(this.timeoutIdle)), this.lettersStep < 7 && (this.lettersStep++, this.timeoutIdle && clearTimeout(this.timeoutIdle), this.timeoutIdle = setTimeout(function() {
                        return t.hideContent()
                    }, 1500))
                }
            }, {
                key: "hideContent",
                value: function() {
                    var t = this;
                    if (clearTimeout(this.timeoutIdle), this.letterAnim && this.letterAnim.kill(), this.el.classList.remove("u-pointer-auto"), this.$el.removeClass("".concat(Us, " ").concat(zs)), TweenMax.to(this.letterBg, 1, {
                            scaleY: 0,
                            ease: Power1.easeInOut
                        }), this.$lettersElem.removeClass(Us), void(this.lettersStep = 0) !== this.$chooImages)
                        for (var e = 0; e < this.$chooImages.length; e++) TweenMax.to($(this.$chooImages[e]), .6, {
                            x: "0%",
                            y: "0%",
                            rotation: 0
                        });
                    setTimeout(function() {
                        return t.removeImages()
                    }, 2e3)
                }
            }, {
                key: "removeImages",
                value: function() {
                    for (var t = document.querySelector(".js-images-container", this.el); t.lastChild;) t.removeChild(t.lastChild)
                }
            }, {
                key: "trainDeparture",
                value: function() {
                    this.$el.addClass(zs), this.loadImages(), this.el.classList.add("u-pointer-auto");
                    for (var t = 0; t < this.$lettersElem.length; t++) {
                        var e = new TimelineMax({
                            repeat: -1,
                            delay: .1 * t
                        });
                        e.to(this.$lettersElem[t], 0, {
                            y: 0
                        }), e.to(this.$lettersElem[t], .3, {
                            y: -50,
                            scale: .5 * Math.random() + 1,
                            rotation: 30 * Math.random() - 15,
                            ease: Power1.easeInOut
                        }), e.to(this.$lettersElem[t], .6, {
                            y: 0,
                            scale: 1,
                            rotation: 0,
                            ease: Power1.easeInOut
                        })
                    }
                }
            }, {
                key: "loadImages",
                value: function() {
                    for (var t = this, e = 0, i = [], n = 0; n < 29; n++) {
                        var s = document.createElement("img");
                        s.src = "assets/images/choochoo/".concat(n, ".jpg"), s.classList.add("c-choo_img_style"), s.classList.add("js-img"), i.push(s), s.addEventListener("load", function() {
                            29 === ++e && t.animateImages()
                        })
                    }
                    i = x(i);
                    var o = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (var l, h = i[Symbol.iterator](); !(o = (l = h.next()).done); o = !0) {
                            var c = l.value;
                            $(c).appendTo(this.$imagesContainer)
                        }
                    } catch (t) {
                        a = !0, r = t
                    } finally {
                        try {
                            o || null == h.return || h.return()
                        } finally {
                            if (a) throw r
                        }
                    }
                }
            }, {
                key: "animateImages",
                value: function() {
                    this.$chooImages = $(".js-img", this.$el);
                    for (var t = 0; t < this.$chooImages.length; t++) {
                        TweenMax.to($(this.$chooImages[t]), .6, {
                            x: "".concat(100 * Math.random() - 50, "vw"),
                            y: "".concat(-(70 * Math.random() + 30), "vh"),
                            rotation: 90 * Math.random() - 45,
                            delay: .3 * t
                        });
                        var e = new TimelineMax({
                            repeat: -1,
                            delay: .1 * t
                        });
                        e.to(this.$chooImages[t], 0, {
                            scale: 1
                        }), e.to(this.$chooImages[t], .3, {
                            scale: .5 * Math.random() + 1,
                            ease: Power1.easeInOut
                        }), e.to(this.$chooImages[t], .6, {
                            scale: 1,
                            ease: Power1.easeInOut
                        })
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(Bs)), g.off(".".concat(Bs))
                }
            }]), i
        }(),
        Ws = "".concat(t, ".").concat("EmployeeMonth"),
        Gs = {
            CLICK: "click.".concat(Ws),
            INVIEW: "inview.".concat(Ws),
            MOUSEENTER: "mouseenter.".concat(Ws),
            MOUSELEAVE: "mouseleave.".concat(Ws),
            TOUCHSTART: "touchstart.".concat(Ws),
            TOUCHEND: "touchend.".concat(Ws)
        },
        qs = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).launched = !1, e.$sprite = e.$el.find(".js-sprite"), e.$image = e.$el.find(".js-image"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.onInviewBind = function(t) {
                        "enter" == t.way ? e.launched ? e.requestUpdate(!0) : e.launch() : e.requestUpdate(!1)
                    }, this.$el.on(Gs.INVIEW, this.onInviewBind)
                }
            }, {
                key: "launch",
                value: function() {
                    var t = this;
                    if (!this.launched) {
                        this.launched = !0;
                        for (var e = [], n = Array.from(this.$image), i = function() {
                                var i = n[s];
                                e.push(new Promise(function(t) {
                                    var e = new Image;
                                    e.onload = function() {
                                        t()
                                    }, e.src = i.dataset.src
                                }))
                            }, s = 0; s < n.length; s++) i();
                        Promise.all(e).then(function() {
                            requestAnimationFrame(function() {
                                t.requestUpdate(!0), t.onEnter = function() {
                                    y.toggleClass("is-in-love", !0), t.$el.toggleClass("-active", !0)
                                }, t.$el.on(Gs.MOUSEENTER, t.onEnter), t.$el.on(Gs.TOUCHSTART, t.onEnter), t.onLeave = function() {
                                    y.toggleClass("is-in-love", !1), t.$el.toggleClass("-active", !1)
                                }, t.$el.on(Gs.MOUSELEAVE, t.onLeave), t.$el.on(Gs.TOUCHEND, t.onLeave)
                            })
                        })
                    }
                }
            }, {
                key: "requestUpdate",
                value: function() {
                    var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
                    this.$sprite.trigger({
                        type: Ln.REQUEST_UPDATE,
                        options: {
                            value: t
                        }
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.$el.off(".".concat(Ws)), this.$el.off(Gs.LAUNCH, this.launch.bind(this))
                }
            }]), i
        }(),
        Vs = "".concat(t, ".").concat("SliderFields"),
        Ks = function(t) {
            function i(t) {
                var e;
                return o(this, i), (e = f(this, d(i).call(this, t))).$main = e.$el.find(".js-main-slider"), e.$mainSlide = e.$el.find(".js-main-slide"), e.nbSlides = e.$mainSlide.length, e.$secondary = e.$el.find(".js-secondary-slider"), e.$object3d = e.$el.find(".js-object3d"), e
            }
            return c(i, j), a(i, [{
                key: "init",
                value: function() {
                    var t = this;
                    1 < this.nbSlides ? (this.mainSlider = new Swiper(this.$main, {
                        loop: !0,
                        loopedSlides: this.nbSlides,
                        grabCursor: !0,
                        touchStartPreventDefault: !1,
                        longSwipesRatio: .1,
                        spaceBetween: 40,
                        slideToClickedSlide: !0,
                        on: {
                            slideChange: function() {
                                t.mainSlider && t.$object3d.trigger({
                                    type: ci.CHANGE,
                                    options: {
                                        index: t.mainSlider.realIndex
                                    }
                                })
                            }
                        }
                    }), this.secondarySlider = new Swiper(this.$secondary, {
                        loop: !0,
                        loopedSlides: this.nbSlides,
                        effect: "fade",
                        fadeEffect: {
                            crossFade: !0
                        }
                    }), this.mainSlider.controller.control = this.secondarySlider, this.secondarySlider.controller.control = this.mainSlider) : (this.$mainSlide.toggleClass("swiper-slide-active", !0), this.$object3d.trigger({
                        type: ci.CHANGE,
                        options: {
                            index: 0
                        }
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    p(d(i.prototype), "destroy", this).call(this), this.mainSlider && this.mainSlider.destroy && this.mainSlider.destroy(), this.secondarySlider && this.secondarySlider.destroy && this.secondarySlider.destroy(), this.$el.off(".".concat(Vs))
                }
            }]), i
        }(),
        Ys = "".concat(t, ".").concat("NavButton"),
        Xs = {
            CLICK: "click.".concat(Ys)
        },
        Zs = "has-nav-open",
        Qs = function(t) {
            function e(t) {
                return o(this, e), f(this, d(e).call(this, t))
            }
            return c(e, j), a(e, [{
                key: "init",
                value: function() {
                    this.$el.on(Xs.CLICK, function(t) {
                        y.toggleClass("".concat(Zs))
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    y.removeClass(Zs), clearTimeout(this.timeout), p(d(e.prototype), "destroy", this).call(this), this.$el.off(".".concat(Ys))
                }
            }]), e
        }(),
        Js = Object.freeze({
            Load: Mt,
            Scroll: ie,
            Banner: oe,
            FancyVideo: Ne,
            ProjectDevice: Ze,
            ProjectSmartphone: Je,
            ProjectLaptop: ei,
            ProjectHeader: We,
            VimeoPlayer: si,
            VideoPlayer: ri,
            Slider: vi,
            CursorZone: ue,
            Object3D: mi,
            AwardsList: Ci,
            Lisa: Di,
            LisaStep: Pi,
            LisaChoicesStep: Ni,
            LisaCircle: Ri,
            LisaProgress: _i,
            LisaFormStep: Zi,
            LisaSessionStep: Fi,
            LisaBudgetStep: Qi,
            LisaContextStep: Ji,
            LisaOpener: nn,
            StickyLimiter: rn,
            AccordionCareers: pn,
            Panorama: En,
            Quote: Mn,
            Sprite: On,
            TeamMember: jn,
            TriforceMember: Nn,
            TeamList: Un,
            Rail: lt,
            HiddenWords: Wn,
            Footer: Kn,
            PlayGrid: Zn,
            PlayRail: ts,
            PlayGridTeam: os,
            PlayGridPicture: ls,
            PlayModal: ns,
            PlayModalSlider: cs,
            Leafs: vs,
            LeafsItem: fs,
            Error: Cs,
            FileInput: $s,
            Share: Is,
            OrderList: js,
            FadeUpByRow: Ns,
            Choochoo: Fs,
            EmployeeMonth: qs,
            SliderFields: Ks,
            HomeFlag: V,
            HomeSimpleSlider: ft,
            HomeLinkSlider: Tt,
            Rope: gt,
            FancySlider: St,
            NavButton: Qs,
            PlayShapes: z
        });
    // console.log("%c👋 – 🔨 with ❤️ by iBridge", "font-size:10px;font-weight: bold;color:#fff; background-color:#4D84F1; padding:5px;border-radius:4px;");
    var to = function() {
        function t() {
            var e = this;
            o(this, t), this.modules = Js, this.currentModules = [], window.scroll = {
                x: 0,
                y: 0,
                direction: null,
                limit: 0
            }, window.cursor = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            }, v.on("mousemove", function(t) {
                window.cursor.x = t.clientX, window.cursor.y = t.clientY
            }), window.isTouch = "ontouchstart" in document.documentElement, y.toggleClass("is-touch", window.isTouch), g.on(xt.INIT_MODULES, function(t) {
                e.initGlobals(t.firstBlood).deleteModules(t).initModules(t)
            }), g.on(xt.INIT_SCOPED_MODULES, function(t) {
                e.initModules(t)
            }), g.on(xt.INIT_GLOBALS, function(t) {
                e.initGlobals(t.firstBlood)
            }), g.on(xt.DELETE_SCOPED_MODULES, function(t) {
                e.deleteModules(t)
            })
        }
        return a(t, [{
            key: "deleteModules",
            value: function(t) {
                var e = !0,
                    i = [];
                if (t.$scope instanceof jQuery && 0 < t.$scope.length) {
                    var n = t.$scope.find("[data-module]");
                    if (!(0 < (i = $.makeArray(n.map(function(t) {
                            return n.eq(t).data("uid")
                        }))).length)) return this;
                    e = !1
                }
                for (var s = this.currentModules.length; s--;)(e || C(i, this.currentModules[s].uid)) && this.currentModules[s].destroy();
                return this
            }
        }, {
            key: "initGlobals",
            value: function(t) {
                return function(t) {
                    var e = S.mobile || S.tablet || !1;
                    (window.isMobile = e) && y.addClass("is-mobile");
                    var i = S.msedge;
                    (window.isEdge = i) && y.addClass("is-edge");
                    var n = S.firefox;
                    (window.isFirefox = n) && y.addClass("is-firefox");
                    var s = S.safari;
                    window.isSafari = s, /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && y.addClass("is-ios");
                    var o = S.msie;
                    (window.isIE = o) && y.addClass("is-ie")
                }(), this
            }
        }, {
            key: "initModules",
            value: function(t) {
                var e = [];
                t.firstBlood ? e = g.find("[data-module]") : t.$scope instanceof jQuery && 0 < t.$scope.length && (e = t.$scope.find("[data-module]"));
                for (var i = 0, n = e.length; i < n; i++) {
                    var s = e[i],
                        o = R(s);
                    o.el = s, o.$el = e.eq(i);
                    for (var a = o.module.split(/[,\s]+/g), r = 0, l = a.length; r < l; r++) {
                        var h = a[r];
                        if ("function" == typeof this.modules[h]) {
                            var c = new this.modules[h](o);
                            this.currentModules.push(c), c.init()
                        }
                    }
                }
                return this
            }
        }]), t
    }();
    y.addClass("has-dom-loading has-dom-first-loading -first"), "default" == y.attr("data-pageColor") ? TweenMax.set(T, {
        clearProps: "background-color"
    }) : TweenMax.set(T, {
        backgroundColor: y.attr("data-pageColor")
    }), setTimeout(function() {
        new to, g.triggerHandler({
            type: xt.INIT_MODULES,
            firstBlood: !0
        }), y.addClass("has-dom-loaded has-dom-first-loaded"), y.removeClass("has-dom-loading has-dom-first-loading"), setTimeout(function() {
            y.addClass("has-dom-animated")
        }, 800), g.triggerHandler({
            type: xt.READYTOANIMATE
        })
    }, 1e3)
}();