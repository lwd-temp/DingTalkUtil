! function(t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.d = function(t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = ".package/", e(e.s = 152)
}([
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }
        e.a = r;
        var i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return l
        });
        var r = n(0),
            i = n(34),
            o = n(124),
            a = n(9),
            s = n(109),
            u = n(44),
            c = n(107),
            l = function(t) {
                function e(n, r, i) {
                    var a = t.call(this) || this;
                    switch (a.syncErrorValue = null, a.syncErrorThrown = !1, a.syncErrorThrowable = !1, a.isStopped = !1, arguments.length) {
                        case 0:
                            a.destination = o.a;
                            break;
                        case 1:
                            if (!n) {
                                a.destination = o.a;
                                break
                            }
                            if ("object" == typeof n) {
                                n instanceof e ? (a.syncErrorThrowable = n.syncErrorThrowable, a.destination = n, n.add(a)) : (a.syncErrorThrowable = !0, a.destination = new d(a, n));
                                break
                            }
                        default:
                            a.syncErrorThrowable = !0, a.destination = new d(a, n, r, i)
                    }
                    return a
                }
                return r.a(e, t), e.prototype[s.a] = function() {
                    return this
                }, e.create = function(t, n, r) {
                    var i = new e(t, n, r);
                    return i.syncErrorThrowable = !1, i
                }, e.prototype.next = function(t) {
                    this.isStopped || this._next(t)
                }, e.prototype.error = function(t) {
                    this.isStopped || (this.isStopped = !0, this._error(t))
                }, e.prototype.complete = function() {
                    this.isStopped || (this.isStopped = !0, this._complete())
                }, e.prototype.unsubscribe = function() {
                    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                }, e.prototype._next = function(t) {
                    this.destination.next(t)
                }, e.prototype._error = function(t) {
                    this.destination.error(t), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.destination.complete(), this.unsubscribe()
                }, e.prototype._unsubscribeAndRecycle = function() {
                    var t = this._parentOrParents;
                    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                }, e
            }(a.a),
            d = function(t) {
                function e(e, n, r, a) {
                    var s = t.call(this) || this;
                    s._parentSubscriber = e;
                    var u, c = s;
                    return Object(i.a)(n) ? u = n : n && (u = n.next, r = n.error, a = n.complete, n !== o.a && (c = Object.create(n), Object(i.a)(c.unsubscribe) && s.add(c.unsubscribe.bind(c)), c.unsubscribe = s.unsubscribe.bind(s))), s._context = c, s._next = u, s._error = r, s._complete = a, s
                }
                return r.a(e, t), e.prototype.next = function(t) {
                    if (!this.isStopped && this._next) {
                        var e = this._parentSubscriber;
                        u.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                    }
                }, e.prototype.error = function(t) {
                    if (!this.isStopped) {
                        var e = this._parentSubscriber,
                            n = u.a.useDeprecatedSynchronousErrorHandling;
                        if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                        else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Object(c.a)(t), this.unsubscribe();
                        else {
                            if (this.unsubscribe(), n) throw t;
                            Object(c.a)(t)
                        }
                    }
                }, e.prototype.complete = function() {
                    var t = this;
                    if (!this.isStopped) {
                        var e = this._parentSubscriber;
                        if (this._complete) {
                            var n = function() {
                                return t._complete.call(t._context)
                            };
                            u.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }, e.prototype.__tryOrUnsub = function(t, e) {
                    try {
                        t.call(this._context, e)
                    } catch (n) {
                        if (this.unsubscribe(), u.a.useDeprecatedSynchronousErrorHandling) throw n;
                        Object(c.a)(n)
                    }
                }, e.prototype.__tryOrSetError = function(t, e, n) {
                    if (!u.a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        e.call(this._context, n)
                    } catch (r) {
                        return u.a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (Object(c.a)(r), !0)
                    }
                    return !1
                }, e.prototype._unsubscribe = function() {
                    var t = this._parentSubscriber;
                    this._context = null, this._parentSubscriber = null, t.unsubscribe()
                }, e
            }(l)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            if (t || (t = u.a.Promise || Promise), !t) throw new Error("no Promise impl found");
            return t
        }
        n.d(e, "a", function() {
            return c
        });
        var i = n(106),
            o = n(204),
            a = n(25),
            s = n(110),
            u = n(44),
            c = function() {
                function t(t) {
                    this._isScalar = !1, t && (this._subscribe = t)
                }
                return t.prototype.lift = function(e) {
                    var n = new t;
                    return n.source = this, n.operator = e, n
                }, t.prototype.subscribe = function(t, e, n) {
                    var r = this.operator,
                        i = Object(o.a)(t, e, n);
                    if (r ? i.add(r.call(i, this.source)) : i.add(this.source || u.a.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), u.a.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                    return i
                }, t.prototype._trySubscribe = function(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        u.a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), Object(i.a)(t) ? t.error(e) : console.warn(e)
                    }
                }, t.prototype.forEach = function(t, e) {
                    var n = this;
                    return new(e = r(e))(function(e, r) {
                        var i;
                        i = n.subscribe(function(e) {
                            try {
                                t(e)
                            } catch (n) {
                                r(n), i && i.unsubscribe()
                            }
                        }, r, e)
                    })
                }, t.prototype._subscribe = function(t) {
                    var e = this.source;
                    return e && e.subscribe(t)
                }, t.prototype[a.a] = function() {
                    return this
                }, t.prototype.pipe = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return 0 === t.length ? this : Object(s.b)(t)(this)
                }, t.prototype.toPromise = function(t) {
                    var e = this;
                    return new(t = r(t))(function(t, n) {
                        var r;
                        e.subscribe(function(t) {
                            return r = t
                        }, function(t) {
                            return n(t)
                        }, function() {
                            return t(r)
                        })
                    })
                }, t.create = function(e) {
                    return new t(e)
                }, t
            }()
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(1),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(e)
                }, e.prototype.notifyError = function(t, e) {
                    this.destination.error(t)
                }, e.prototype.notifyComplete = function(t) {
                    this.destination.complete()
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n, r, s) {
            return void 0 === s && (s = new i.a(t, n, r)), s.closed ? void 0 : e instanceof a.a ? e.subscribe(s) : Object(o.a)(e)(s)
        }
        e.a = r;
        var i = n(21),
            o = n(116),
            a = n(2)
    },
    function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];
                    n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                }
                return t.join("")
            }, t.i = function(e, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (r[o] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var a = e[i];
                    "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    },
    function(t, e, n) {
        function r(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e],
                    r = l[n.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                    for (; i < n.parts.length; i++) r.parts.push(o(n.parts[i]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                } else {
                    for (var a = [], i = 0; i < n.parts.length; i++) a.push(o(n.parts[i]));
                    l[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }

        function i() {
            var t = document.createElement("style");
            return t.type = "text/css", d.appendChild(t), t
        }

        function o(t) {
            var e, n, r = document.querySelector("style[" + m + '~="' + t.id + '"]');
            if (r) {
                if (h) return v;
                r.parentNode.removeChild(r)
            }
            if (b) {
                var o = p++;
                r = f || (f = i()), e = a.bind(null, r, o, !1), n = a.bind(null, r, o, !0)
            } else r = i(), e = s.bind(null, r), n = function() {
                r.parentNode.removeChild(r)
            };
            return e(t),
                function(r) {
                    if (r) {
                        if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) return;
                        e(t = r)
                    } else n()
                }
        }

        function a(t, e, n, r) {
            var i = n ? "" : r.css;
            if (t.styleSheet) t.styleSheet.cssText = y(e, i);
            else {
                var o = document.createTextNode(i),
                    a = t.childNodes;
                a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
            }
        }

        function s(t, e) {
            var n = e.css,
                r = e.media,
                i = e.sourceMap;
            if (r && t.setAttribute("media", r), g.ssrId && t.setAttribute(m, e.id), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }
        var u = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !u) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var c = n(30),
            l = {},
            d = u && (document.head || document.getElementsByTagName("head")[0]),
            f = null,
            p = 0,
            h = !1,
            v = function() {},
            g = null,
            m = "data-vue-ssr-id",
            b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        t.exports = function(t, e, n, i) {
            h = n, g = i || {};
            var o = c(t, e);
            return r(o),
                function(e) {
                    for (var n = [], i = 0; i < o.length; i++) {
                        var a = o[i],
                            s = l[a.id];
                        s.refs--, n.push(s)
                    }
                    e ? (o = c(t, e), r(o)) : o = [];
                    for (var i = 0; i < n.length; i++) {
                        var s = n[i];
                        if (0 === s.refs) {
                            for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                            delete l[s.id]
                        }
                    }
                }
        };
        var y = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }()
    },
    function(t, e) {
        t.exports = function(t, e, n, r, i, o) {
            var a, s = t = t || {},
                u = typeof t["default"];
            ("object" === u || "function" === u) && (a = t, s = t["default"]);
            var c = "function" == typeof s ? s.options : s;
            e && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0), n && (c.functional = !0), i && (c._scopeId = i);
            var l;
            if (o ? (l = function(t) {
                t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o)
            }, c._ssrRegister = l) : r && (l = r), l) {
                var d = c.functional,
                    f = d ? c.render : c.beforeCreate;
                d ? (c._injectStyles = l, c.render = function(t, e) {
                    return l.call(e), f(t, e)
                }) : c.beforeCreate = f ? [].concat(f, l) : [l]
            }
            return {
                esModule: a,
                exports: s,
                options: c
            }
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(58),
            i = r,
            o = n(68),
            a = o,
            s = n(76),
            u = o["default"] || a,
            c = r["default"] || i;
        e.i18next = c;
        var l = "dd_l",
            d = "translation";
        e.supportLngTypes = ["zh_CN", "zh_TW", "zh_HK", "en_US"];
        var f = [];
        e.supportLngDesc = [{
            text: "简体中文",
            type: "zh_CN"
        }, {
            text: "繁體中文（台灣）",
            type: "zh_TW"
        }, {
            text: "繁體中文（香港）",
            type: "zh_HK"
        }, {
            text: "English",
            type: "en_US"
        }], e.languageMap = {
            "zh-CN": "zh_CN",
            zh_CN: "zh_CN",
            zh: "zh_CN",
            zh_cn: "zh_CN",
            en_US: "en_US",
            "en-US": "en_US",
            en: "en_US",
            zh_TW: "zh_TW",
            "zh-TW": "zh_TW",
            "zh-HK": "zh_HK",
            zh_HK: "zh_HK",
            "zh-Hans": "zh_CN",
            zh_Hans: "zh_CN",
            "zh-Hant": "zh_TW",
            zh_Hant: "zh_TW",
            "zh-Hans-CN": "zh_CN",
            "zh-Hant-CN": "zh_TW",
            "zh-Hant-HK": "zh_HK",
            "zh-Hant-MO": "zh_TW",
            "zh-Hant-SG": "zh_TW",
            "zh-Hant-TW": "zh_TW"
        }, e.languageMapping = function(t) {
            var n = t.split(/-|_/g),
                r = function(t, e) {
                    var n = e[t.join("_")];
                    return n ? n : (t.pop(), t.length > 0 ? r(t, e) : "en_US")
                };
            return r(n, e.languageMap)
        };
        var p = !1,
            h = function() {
                var t;
                f.length > 0 && (t = f, f = [], t.forEach(function(t) {
                    e.addResourceBundle(t.resource, t.namespace)
                }))
            };
        e.initI18Next = function(t, n) {
            if (p === !0) throw new Error("Do not repeat init i18n");
            p = !0;
            var r = {};
            t && (t = e.languageMapping(t)), n && Object.keys(e.languageMap).forEach(function(t) {
                r[t] = {
                    translation: n[e.languageMap[t]]
                }
            });
            var i = {
                zh_HK: ["zh_TW", "zh_CN"],
                "zh-HK": ["zh_TW", "zh_CN"],
                "default": ["en_US"]
            };
            t ? c.init({
                lng: t,
                fallbackLng: i,
                resources: r
            }) : c.use(u).init({
                fallbackLng: i,
                resources: r,
                detection: {
                    order: ["navigator"],
                    caches: []
                }
            }), h()
        }, e.hasInitFromOtherLib = function() {
            p = !0, h()
        }, e.addResourceBundle = function(t, n) {
            var r = d;
            n && (r = n), p ? Object.keys(e.languageMap).forEach(function(n) {
                t[e.languageMap[n]] && c.addResourceBundle(n, r, t[e.languageMap[n]])
            }) : f.push({
                namespace: r,
                resource: t
            })
        }, e.changeLanguage = function(t) {
            c.changeLanguage(t)
        }, e.clear = function(t) {
            var n = d;
            t && (n = t), Object.keys(e.languageMap).forEach(function(t) {
                c.removeResourceBundle && c.removeResourceBundle(t, n)
            }), p = !1
        }, e.autoInit = function(t) {
            var n = window.navigator.userAgent,
                r = "",
                i = n.match(/language\/(\S+)/);
            if (i && i.length > 0) r = i[1];
            else {
                try {
                    var o = JSON.parse(window.name);
                    o && o.language && (r = o.language)
                } catch (a) {}
                if (!r) {
                    var u = s.get(l);
                    u && (r = u)
                }
            }
            e.initI18Next(r, t)
        }, e.setLanguageCookie = function(t, e) {
            void 0 === e && (e = !1);
            var n = window.location.hostname,
                r = n.split("."),
                i = r.length,
                o = e ? n : "." + r[i - 2] + "." + r[i - 1];
            s.erase(l), s.set(l, t, {
                expires: 365,
                domain: o
            })
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t.reduce(function(t, e) {
                return t.concat(e instanceof s.a ? e.errors : e)
            }, [])
        }
        n.d(e, "a", function() {
            return u
        });
        var i = n(12),
            o = n(108),
            a = n(34),
            s = n(125),
            u = function() {
                function t(t) {
                    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                }
                return t.prototype.unsubscribe = function() {
                    var e;
                    if (!this.closed) {
                        var n = this,
                            u = n._parentOrParents,
                            c = n._unsubscribe,
                            l = n._subscriptions;
                        if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, u instanceof t) u.remove(this);
                        else if (null !== u)
                            for (var d = 0; d < u.length; ++d) {
                                var f = u[d];
                                f.remove(this)
                            }
                        if (Object(a.a)(c)) try {
                            c.call(this)
                        } catch (p) {
                            e = p instanceof s.a ? r(p.errors) : [p]
                        }
                        if (Object(i.a)(l))
                            for (var d = -1, h = l.length; ++d < h;) {
                                var v = l[d];
                                if (Object(o.a)(v)) try {
                                    v.unsubscribe()
                                } catch (p) {
                                    e = e || [], p instanceof s.a ? e = e.concat(r(p.errors)) : e.push(p)
                                }
                            }
                        if (e) throw new s.a(e)
                    }
                }, t.prototype.add = function(e) {
                    var n = e;
                    if (!e) return t.EMPTY;
                    switch (typeof e) {
                        case "function":
                            n = new t(e);
                        case "object":
                            if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                            if (this.closed) return n.unsubscribe(), n;
                            if (!(n instanceof t)) {
                                var r = n;
                                n = new t, n._subscriptions = [r]
                            }
                            break;
                        default:
                            throw new Error("unrecognized teardown " + e + " added to Subscription.")
                    }
                    var i = n._parentOrParents;
                    if (null === i) n._parentOrParents = this;
                    else if (i instanceof t) {
                        if (i === this) return n;
                        n._parentOrParents = [i, this]
                    } else {
                        if (-1 !== i.indexOf(this)) return n;
                        i.push(this)
                    }
                    var o = this._subscriptions;
                    return null === o ? this._subscriptions = [n] : o.push(n), n
                }, t.prototype.remove = function(t) {
                    var e = this._subscriptions;
                    if (e) {
                        var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                    }
                }, t.EMPTY = function(t) {
                    return t.closed = !0, t
                }(new t), t
            }()
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }
        var o = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            a = {
                type: "logger",
                log: function(t) {
                    this.output("log", t)
                },
                warn: function(t) {
                    this.output("warn", t)
                },
                error: function(t) {
                    this.output("error", t)
                },
                output: function(t, e) {
                    var n;
                    console && console[t] && (n = console)[t].apply(n, i(e))
                }
            },
            s = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, t), this.init(e, n)
                }
                return t.prototype.init = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = e.prefix || "i18next:", this.logger = t || a, this.options = e, this.debug = e.debug
                }, t.prototype.setDebug = function(t) {
                    this.debug = t
                }, t.prototype.log = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
                    return this.forward(e, "log", "", !0)
                }, t.prototype.warn = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
                    return this.forward(e, "warn", "", !0)
                }, t.prototype.error = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
                    return this.forward(e, "error", "")
                }, t.prototype.deprecate = function() {
                    for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
                    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
                }, t.prototype.forward = function(t, e, n, r) {
                    return r && !this.debug ? null : ("string" == typeof t[0] && (t[0] = "" + n + this.prefix + " " + t[0]), this.logger[e](t))
                }, t.prototype.create = function(e) {
                    return new t(this.logger, o({
                        prefix: this.prefix + ":" + e + ":"
                    }, this.options))
                }, t
            }();
        e.a = new s
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return l
        }), n.d(e, "a", function() {
            return d
        });
        var r = n(0),
            i = n(2),
            o = n(1),
            a = n(9),
            s = n(46),
            u = n(127),
            c = n(109),
            l = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.destination = e, n
                }
                return r.a(e, t), e
            }(o.a),
            d = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                }
                return r.a(e, t), e.prototype[c.a] = function() {
                    return new l(this)
                }, e.prototype.lift = function(t) {
                    var e = new f(this, this);
                    return e.operator = t, e
                }, e.prototype.next = function(t) {
                    if (this.closed) throw new s.a;
                    if (!this.isStopped)
                        for (var e = this.observers, n = e.length, r = e.slice(), i = 0; n > i; i++) r[i].next(t)
                }, e.prototype.error = function(t) {
                    if (this.closed) throw new s.a;
                    this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                    for (var e = this.observers, n = e.length, r = e.slice(), i = 0; n > i; i++) r[i].error(t);
                    this.observers.length = 0
                }, e.prototype.complete = function() {
                    if (this.closed) throw new s.a;
                    this.isStopped = !0;
                    for (var t = this.observers, e = t.length, n = t.slice(), r = 0; e > r; r++) n[r].complete();
                    this.observers.length = 0
                }, e.prototype.unsubscribe = function() {
                    this.isStopped = !0, this.closed = !0, this.observers = null
                }, e.prototype._trySubscribe = function(e) {
                    if (this.closed) throw new s.a;
                    return t.prototype._trySubscribe.call(this, e)
                }, e.prototype._subscribe = function(t) {
                    if (this.closed) throw new s.a;
                    return this.hasError ? (t.error(this.thrownError), a.a.EMPTY) : this.isStopped ? (t.complete(), a.a.EMPTY) : (this.observers.push(t), new u.a(this, t))
                }, e.prototype.asObservable = function() {
                    var t = new i.a;
                    return t.source = this, t
                }, e.create = function(t, e) {
                    return new f(t, e)
                }, e
            }(i.a),
            f = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.destination = e, r.source = n, r
                }
                return r.a(e, t), e.prototype.next = function(t) {
                    var e = this.destination;
                    e && e.next && e.next(t)
                }, e.prototype.error = function(t) {
                    var e = this.destination;
                    e && e.error && this.destination.error(t)
                }, e.prototype.complete = function() {
                    var t = this.destination;
                    t && t.complete && this.destination.complete()
                }, e.prototype._subscribe = function(t) {
                    var e = this.source;
                    return e ? this.source.subscribe(t) : a.a.EMPTY
                }, e
            }(d)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var r = function() {
            return Array.isArray || function(t) {
                return t && "number" == typeof t.length
            }
        }()
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(35),
            i = n(36),
            o = new i.a(r.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return n.lift(new a(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e) {
                    this.project = t, this.thisArg = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.project, this.thisArg))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.project = n, i.count = 0, i.thisArg = r || i, i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.project.call(this.thisArg, t, this.count++)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(e)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function t() {
                r(this, t), this.observers = {}
            }
            return t.prototype.on = function(t, e) {
                var n = this;
                t.split(" ").forEach(function(t) {
                    n.observers[t] = n.observers[t] || [], n.observers[t].push(e)
                })
            }, t.prototype.off = function(t, e) {
                var n = this;
                this.observers[t] && this.observers[t].forEach(function() {
                    if (e) {
                        var r = n.observers[t].indexOf(e);
                        r > -1 && n.observers[t].splice(r, 1)
                    } else delete n.observers[t]
                })
            }, t.prototype.emit = function(t) {
                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
                if (this.observers[t]) {
                    var i = [].concat(this.observers[t]);
                    i.forEach(function(t) {
                        t.apply(void 0, n)
                    })
                }
                if (this.observers["*"]) {
                    var o = [].concat(this.observers["*"]);
                    o.forEach(function(e) {
                        var r;
                        e.apply(e, (r = [t]).concat.apply(r, n))
                    })
                }
            }, t
        }();
        e.a = i
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t ? i(t) : a
        }

        function i(t) {
            return new o.a(function(e) {
                return t.schedule(function() {
                    return e.complete()
                })
            })
        }
        n.d(e, "a", function() {
            return a
        }), e.b = r;
        var o = n(2),
            a = new o.a(function(t) {
                return t.complete()
            })
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && "function" == typeof t.schedule
        }
        e.a = r
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return e ? Object(a.a)(t, e) : t instanceof i.a ? t : new i.a(Object(o.a)(t))
        }
        e.a = r;
        var i = n(2),
            o = n(116),
            a = n(139)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return null == t ? "" : "" + t
        }

        function i(t, e, n) {
            t.forEach(function(t) {
                e[t] && (n[t] = e[t])
            })
        }

        function o(t, e, n) {
            function r(t) {
                return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
            }

            function i() {
                return !t || "string" == typeof t
            }
            for (var o = "string" != typeof e ? [].concat(e) : e.split("."); o.length > 1;) {
                if (i()) return {};
                var a = r(o.shift());
                !t[a] && n && (t[a] = new n), t = t[a]
            }
            return i() ? {} : {
                obj: t,
                k: r(o.shift())
            }
        }

        function a(t, e, n) {
            var r = o(t, e, Object),
                i = r.obj,
                a = r.k;
            i[a] = n
        }

        function s(t, e, n, r) {
            var i = o(t, e, Object),
                a = i.obj,
                s = i.k;
            a[s] = a[s] || [], r && (a[s] = a[s].concat(n)), r || a[s].push(n)
        }

        function u(t, e) {
            var n = o(t, e),
                r = n.obj,
                i = n.k;
            return r ? r[i] : void 0
        }

        function c(t, e, n) {
            for (var r in e) r in t ? "string" == typeof t[r] || t[r] instanceof String || "string" == typeof e[r] || e[r] instanceof String ? n && (t[r] = e[r]) : c(t[r], e[r], n) : t[r] = e[r];
            return t
        }

        function l(t) {
            return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }

        function d(t) {
            return "string" == typeof t ? t.replace(/[&<>"'\/]/g, function(t) {
                return f[t]
            }) : t
        }
        e.e = r, e.a = i, e.h = a, e.f = s, e.d = u, e.b = c, e.g = l, e.c = d;
        var f = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            for (var e = [], n = 0, r = 0, i = 0; i < t.length;) n = t.charCodeAt(i++), r ? (e.push((65536 + (r - 55296 << 10) + (n - 56320)).toString(16)), r = 0) : n >= 55296 && 56319 >= n ? r = n : e.push(n.toString(16));
            return e.join("-")
        }

        function i(t, e) {
            return r("?" === e ? t.slice(0, -1) : 3 === t.length && "?" === t.charAt(1) ? t.charAt(0) + t.charAt(2) : t)
        }

        function o(t) {
            if ("string" == typeof t) return p(t);
            var e = "";
            return "" !== t.htmlTag && (e += "<" + t.htmlTag, t.attr && Object.keys(t.attr).length > 0 && Object.keys(t.attr).forEach(function(n) {
                t.attr && (e += " " + p(n) + '="' + h(t.attr[n]) + '"')
            }), e += t.selfClose === !0 ? " />" : ">"), t.selfClose !== !0 && (e += t.children && Array.isArray(t.children) && t.children.length > 0 ? t.children.reduce(function(t, e) {
                return t + o(e)
            }, "") : p(t.text || ""), "" !== t.htmlTag && (e += "</" + t.htmlTag + ">")), e
        }

        function a(t, e) {
            var n = t;
            return e.forEach(function(t, e) {
                n = n.map(function(e, n) {
                    if ("string" == typeof e) {
                        var r = t.regExp;
                        r.lastIndex = 0;
                        for (var i = [], o = 0;;) {
                            var s = r.exec(e);
                            if (!s) {
                                i.push(e.slice(o));
                                break
                            }
                            s.index !== o && i.push(e.slice(o, s.index)), i.push(t.transform(s[0], s.slice(1))), o = r.lastIndex
                        }
                        return 0 === i.length ? i[0] : {
                            htmlTag: "",
                            text: "",
                            preventChildTransform: !1,
                            children: i
                        }
                    }
                    return e.preventChildTransform === !0 || e.selfClose === !0 ? e : (Array.isArray(e.children) ? e.children = a(e.children, [t]) : e.text && (e.children = a([e.text], [t])), e)
                })
            }), n
        }

        function s(t, e) {
            var n = a([t], e),
                r = "";
            return n.forEach(function(t) {
                r += o(t)
            }), r
        }

        function u(t) {
            return "string" != typeof t ? "" : s(t, [v])
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.boolValueForModuleKey = e.toast = e.BSearchUpperBoundOfBarrage = e.compareVersion = e.formatTime = e.padLeft = e.parse = e.getColor = void 0, e.transformEmoji = u;
        var c = n(77),
            l = ["#17c295", "#4da9eb", "#f7b55e", "#f2725e", "#568aad", "#b38979", "#5f70a7"],
            d = l.length,
            f = (e.getColor = function(t) {
                if ("string" != typeof t) return l[0];
                var e = 0,
                    n = void 0;
                for (n = 0; n < t.length; n++) e += t.charCodeAt(n);
                return l[e % d]
            }, {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            }),
            p = function(t) {
                return t.replace(/[&<>"'\/]/g, function(t) {
                    return f[t]
                })
            },
            h = function(t) {
                return t.replace(/"/g, function(t) {
                    return f[t]
                })
            },
            v = {
                regExp: /((?:\ud83c\udde8\ud83c\uddf3|\ud83c\uddfa\ud83c\uddf8|\ud83c\uddf7\ud83c\uddfa|\ud83c\uddf0\ud83c\uddf7|\ud83c\uddef\ud83c\uddf5|\ud83c\uddee\ud83c\uddf9|\ud83c\uddec\ud83c\udde7|\ud83c\uddeb\ud83c\uddf7|\ud83c\uddea\ud83c\uddf8|\ud83c\udde9\ud83c\uddea|\u0039\ufe0f?\u20e3|\u0038\ufe0f?\u20e3|\u0037\ufe0f?\u20e3|\u0036\ufe0f?\u20e3|\u0035\ufe0f?\u20e3|\u0034\ufe0f?\u20e3|\u0033\ufe0f?\u20e3|\u0032\ufe0f?\u20e3|\u0031\ufe0f?\u20e3|\u0030\ufe0f?\u20e3|\u0023\ufe0f?\u20e3|\ud83d\udeb3|\ud83d\udeb1|\ud83d\udeb0|\ud83d\udeaf|\ud83d\udeae|\ud83d\udea6|\ud83d\udea3|\ud83d\udea1|\ud83d\udea0|\ud83d\ude9f|\ud83d\ude9e|\ud83d\ude9d|\ud83d\ude9c|\ud83d\ude9b|\ud83d\ude98|\ud83d\ude96|\ud83d\ude94|\ud83d\ude90|\ud83d\ude8e|\ud83d\ude8d|\ud83d\ude8b|\ud83d\ude8a|\ud83d\ude88|\ud83d\ude86|\ud83d\ude82|\ud83d\ude81|\ud83d\ude36|\ud83d\ude34|\ud83d\ude2f|\ud83d\ude2e|\ud83d\ude2c|\ud83d\ude27|\ud83d\ude26|\ud83d\ude1f|\ud83d\ude1b|\ud83d\ude19|\ud83d\ude17|\ud83d\ude15|\ud83d\ude11|\ud83d\ude10|\ud83d\ude0e|\ud83d\ude08|\ud83d\ude07|\ud83d\ude00|\ud83d\udd67|\ud83d\udd66|\ud83d\udd65|\ud83d\udd64|\ud83d\udd63|\ud83d\udd62|\ud83d\udd61|\ud83d\udd60|\ud83d\udd5f|\ud83d\udd5e|\ud83d\udd5d|\ud83d\udd5c|\ud83d\udd2d|\ud83d\udd2c|\ud83d\udd15|\ud83d\udd09|\ud83d\udd08|\ud83d\udd07|\ud83d\udd06|\ud83d\udd05|\ud83d\udd04|\ud83d\udd02|\ud83d\udd01|\ud83d\udd00|\ud83d\udcf5|\ud83d\udcef|\ud83d\udced|\ud83d\udcec|\ud83d\udcb7|\ud83d\udcb6|\ud83d\udcad|\ud83d\udc6d|\ud83d\udc6c|\ud83d\udc65|\ud83d\udc2a|\ud83d\udc16|\ud83d\udc15|\ud83d\udc13|\ud83d\udc10|\ud83d\udc0f|\ud83d\udc0b|\ud83d\udc0a|\ud83d\udc09|\ud83d\udc08|\ud83d\udc07|\ud83d\udc06|\ud83d\udc05|\ud83d\udc04|\ud83d\udc03|\ud83d\udc02|\ud83d\udc01|\ud83d\udc00|\ud83c\udfe4|\ud83c\udfc9|\ud83c\udfc7|\ud83c\udf7c|\ud83c\udf50|\ud83c\udf4b|\ud83c\udf33|\ud83c\udf32|\ud83c\udf1e|\ud83c\udf1d|\ud83c\udf1c|\ud83c\udf1a|\ud83c\udf18|\ud83c\udccf|\ud83c\udd70|\ud83c\udd71|\ud83c\udd7e|\ud83c\udd8e|\ud83c\udd91|\ud83c\udd92|\ud83c\udd93|\ud83c\udd94|\ud83c\udd95|\ud83c\udd96|\ud83c\udd97|\ud83c\udd98|\ud83c\udd99|\ud83c\udd9a|\ud83d\udc77|\ud83d\udec5|\ud83d\udec4|\ud83d\udec3|\ud83d\udec2|\ud83d\udec1|\ud83d\udebf|\ud83d\udeb8|\ud83d\udeb7|\ud83d\udeb5|\ud83c\ude01|\ud83c\ude02|\ud83c\ude32|\ud83c\ude33|\ud83c\ude34|\ud83c\ude35|\ud83c\ude36|\ud83c\ude37|\ud83c\ude38|\ud83c\ude39|\ud83c\ude3a|\ud83c\ude50|\ud83c\ude51|\ud83c\udf00|\ud83c\udf01|\ud83c\udf02|\ud83c\udf03|\ud83c\udf04|\ud83c\udf05|\ud83c\udf06|\ud83c\udf07|\ud83c\udf08|\ud83c\udf09|\ud83c\udf0a|\ud83c\udf0b|\ud83c\udf0c|\ud83c\udf0f|\ud83c\udf11|\ud83c\udf13|\ud83c\udf14|\ud83c\udf15|\ud83c\udf19|\ud83c\udf1b|\ud83c\udf1f|\ud83c\udf20|\ud83c\udf30|\ud83c\udf31|\ud83c\udf34|\ud83c\udf35|\ud83c\udf37|\ud83c\udf38|\ud83c\udf39|\ud83c\udf3a|\ud83c\udf3b|\ud83c\udf3c|\ud83c\udf3d|\ud83c\udf3e|\ud83c\udf3f|\ud83c\udf40|\ud83c\udf41|\ud83c\udf42|\ud83c\udf43|\ud83c\udf44|\ud83c\udf45|\ud83c\udf46|\ud83c\udf47|\ud83c\udf48|\ud83c\udf49|\ud83c\udf4a|\ud83c\udf4c|\ud83c\udf4d|\ud83c\udf4e|\ud83c\udf4f|\ud83c\udf51|\ud83c\udf52|\ud83c\udf53|\ud83c\udf54|\ud83c\udf55|\ud83c\udf56|\ud83c\udf57|\ud83c\udf58|\ud83c\udf59|\ud83c\udf5a|\ud83c\udf5b|\ud83c\udf5c|\ud83c\udf5d|\ud83c\udf5e|\ud83c\udf5f|\ud83c\udf60|\ud83c\udf61|\ud83c\udf62|\ud83c\udf63|\ud83c\udf64|\ud83c\udf65|\ud83c\udf66|\ud83c\udf67|\ud83c\udf68|\ud83c\udf69|\ud83c\udf6a|\ud83c\udf6b|\ud83c\udf6c|\ud83c\udf6d|\ud83c\udf6e|\ud83c\udf6f|\ud83c\udf70|\ud83c\udf71|\ud83c\udf72|\ud83c\udf73|\ud83c\udf74|\ud83c\udf75|\ud83c\udf76|\ud83c\udf77|\ud83c\udf78|\ud83c\udf79|\ud83c\udf7a|\ud83c\udf7b|\ud83c\udf80|\ud83c\udf81|\ud83c\udf82|\ud83c\udf83|\ud83c\udf84|\ud83c\udf85|\ud83c\udf86|\ud83c\udf87|\ud83c\udf88|\ud83c\udf89|\ud83c\udf8a|\ud83c\udf8b|\ud83c\udf8c|\ud83c\udf8d|\ud83c\udf8e|\ud83c\udf8f|\ud83c\udf90|\ud83c\udf91|\ud83c\udf92|\ud83c\udf93|\ud83c\udfa0|\ud83c\udfa1|\ud83c\udfa2|\ud83c\udfa3|\ud83c\udfa4|\ud83c\udfa5|\ud83c\udfa6|\ud83c\udfa7|\ud83c\udfa8|\ud83c\udfa9|\ud83c\udfaa|\ud83c\udfab|\ud83c\udfac|\ud83c\udfad|\ud83c\udfae|\ud83c\udfaf|\ud83c\udfb0|\ud83c\udfb1|\ud83c\udfb2|\ud83c\udfb3|\ud83c\udfb4|\ud83c\udfb5|\ud83c\udfb6|\ud83c\udfb7|\ud83c\udfb8|\ud83c\udfb9|\ud83c\udfba|\ud83c\udfbb|\ud83c\udfbc|\ud83c\udfbd|\ud83c\udfbe|\ud83c\udfbf|\ud83c\udfc0|\ud83c\udfc1|\ud83c\udfc2|\ud83c\udfc3|\ud83c\udfc4|\ud83c\udfc6|\ud83c\udfc8|\ud83c\udfca|\ud83c\udfe0|\ud83c\udfe1|\ud83c\udfe2|\ud83c\udfe3|\ud83c\udfe5|\ud83c\udfe6|\ud83c\udfe7|\ud83c\udfe8|\ud83c\udfe9|\ud83c\udfea|\ud83c\udfeb|\ud83c\udfec|\ud83c\udfed|\ud83c\udfee|\ud83c\udfef|\ud83c\udff0|\ud83d\udc0c|\ud83d\udc0d|\ud83d\udc0e|\ud83d\udc11|\ud83d\udc12|\ud83d\udc14|\ud83d\udc17|\ud83d\udc18|\ud83d\udc19|\ud83d\udc1a|\ud83d\udc1b|\ud83d\udc1c|\ud83d\udc1d|\ud83d\udc1e|\ud83d\udc1f|\ud83d\udc20|\ud83d\udc21|\ud83d\udc22|\ud83d\udc23|\ud83d\udc24|\ud83d\udc25|\ud83d\udc26|\ud83d\udc27|\ud83d\udc28|\ud83d\udc29|\ud83d\udc2b|\ud83d\udc2c|\ud83d\udc2d|\ud83d\udc2e|\ud83d\udc2f|\ud83d\udc30|\ud83d\udc31|\ud83d\udc32|\ud83d\udc33|\ud83d\udc34|\ud83d\udc35|\ud83d\udc36|\ud83d\udc37|\ud83d\udc38|\ud83d\udc39|\ud83d\udc3a|\ud83d\udc3b|\ud83d\udc3c|\ud83d\udc3d|\ud83d\udc3e|\ud83d\udc40|\ud83d\udc42|\ud83d\udc43|\ud83d\udc44|\ud83d\udc45|\ud83d\udc46|\ud83d\udc47|\ud83d\udc48|\ud83d\udc49|\ud83d\udc4a|\ud83d\udc4b|\ud83d\udc4c|\ud83d\udc4d|\ud83d\udc4e|\ud83d\udc4f|\ud83d\udc50|\ud83d\udc51|\ud83d\udc52|\ud83d\udc53|\ud83d\udc54|\ud83d\udc55|\ud83d\udc56|\ud83d\udc57|\ud83d\udc58|\ud83d\udc59|\ud83d\udc5a|\ud83d\udc5b|\ud83d\udc5c|\ud83d\udc5d|\ud83d\udc5e|\ud83d\udc5f|\ud83d\udc60|\ud83d\udc61|\ud83d\udc62|\ud83d\udc63|\ud83d\udc64|\ud83d\udc66|\ud83d\udc67|\ud83d\udc68|\ud83d\udc69|\ud83d\udc6a|\ud83d\udc6b|\ud83d\udc6e|\ud83d\udc6f|\ud83d\udc70|\ud83d\udc71|\ud83d\udc72|\ud83d\udc73|\ud83d\udc74|\ud83d\udc75|\ud83d\udc76|\ud83d\udeb4|\ud83d\udc78|\ud83d\udc79|\ud83d\udc7a|\ud83d\udc7b|\ud83d\udc7c|\ud83d\udc7d|\ud83d\udc7e|\ud83d\udc7f|\ud83d\udc80|\ud83d\udc81|\ud83d\udc82|\ud83d\udc83|\ud83d\udc84|\ud83d\udc85|\ud83d\udc86|\ud83d\udc87|\ud83d\udc88|\ud83d\udc89|\ud83d\udc8a|\ud83d\udc8b|\ud83d\udc8c|\ud83d\udc8d|\ud83d\udc8e|\ud83d\udc8f|\ud83d\udc90|\ud83d\udc91|\ud83d\udc92|\ud83d\udc93|\ud83d\udc94|\ud83d\udc95|\ud83d\udc96|\ud83d\udc97|\ud83d\udc98|\ud83d\udc99|\ud83d\udc9a|\ud83d\udc9b|\ud83d\udc9c|\ud83d\udc9d|\ud83d\udc9e|\ud83d\udc9f|\ud83d\udca0|\ud83d\udca1|\ud83d\udca2|\ud83d\udca3|\ud83d\udca4|\ud83d\udca5|\ud83d\udca6|\ud83d\udca7|\ud83d\udca8|\ud83d\udca9|\ud83d\udcaa|\ud83d\udcab|\ud83d\udcac|\ud83d\udcae|\ud83d\udcaf|\ud83d\udcb0|\ud83d\udcb1|\ud83d\udcb2|\ud83d\udcb3|\ud83d\udcb4|\ud83d\udcb5|\ud83d\udcb8|\ud83d\udcb9|\ud83d\udcba|\ud83d\udcbb|\ud83d\udcbc|\ud83d\udcbd|\ud83d\udcbe|\ud83d\udcbf|\ud83d\udcc0|\ud83d\udcc1|\ud83d\udcc2|\ud83d\udcc3|\ud83d\udcc4|\ud83d\udcc5|\ud83d\udcc6|\ud83d\udcc7|\ud83d\udcc8|\ud83d\udcc9|\ud83d\udcca|\ud83d\udccb|\ud83d\udccc|\ud83d\udccd|\ud83d\udcce|\ud83d\udccf|\ud83d\udcd0|\ud83d\udcd1|\ud83d\udcd2|\ud83d\udcd3|\ud83d\udcd4|\ud83d\udcd5|\ud83d\udcd6|\ud83d\udcd7|\ud83d\udcd8|\ud83d\udcd9|\ud83d\udcda|\ud83d\udcdb|\ud83d\udcdc|\ud83d\udcdd|\ud83d\udcde|\ud83d\udcdf|\ud83d\udce0|\ud83d\udce1|\ud83d\udce2|\ud83d\udce3|\ud83d\udce4|\ud83d\udce5|\ud83d\udce6|\ud83d\udce7|\ud83d\udce8|\ud83d\udce9|\ud83d\udcea|\ud83d\udceb|\ud83d\udcee|\ud83d\udcf0|\ud83d\udcf1|\ud83d\udcf2|\ud83d\udcf3|\ud83d\udcf4|\ud83d\udcf6|\ud83d\udcf7|\ud83d\udcf9|\ud83d\udcfa|\ud83d\udcfb|\ud83d\udcfc|\ud83d\udd03|\ud83d\udd0a|\ud83d\udd0b|\ud83d\udd0c|\ud83d\udd0d|\ud83d\udd0e|\ud83d\udd0f|\ud83d\udd10|\ud83d\udd11|\ud83d\udd12|\ud83d\udd13|\ud83d\udd14|\ud83d\udd16|\ud83d\udd17|\ud83d\udd18|\ud83d\udd19|\ud83d\udd1a|\ud83d\udd1b|\ud83d\udd1c|\ud83d\udd1d|\ud83d\udd1e|\ud83d\udd1f|\ud83d\udd20|\ud83d\udd21|\ud83d\udd22|\ud83d\udd23|\ud83d\udd24|\ud83d\udd25|\ud83d\udd26|\ud83d\udd27|\ud83d\udd28|\ud83d\udd29|\ud83d\udd2a|\ud83d\udd2b|\ud83d\udd2e|\ud83d\udd2f|\ud83d\udd30|\ud83d\udd31|\ud83d\udd32|\ud83d\udd33|\ud83d\udd34|\ud83d\udd35|\ud83d\udd36|\ud83d\udd37|\ud83d\udd38|\ud83d\udd39|\ud83d\udd3a|\ud83d\udd3b|\ud83d\udd3c|\ud83d\udd3d|\ud83d\udd50|\ud83d\udd51|\ud83d\udd52|\ud83d\udd53|\ud83d\udd54|\ud83d\udd55|\ud83d\udd56|\ud83d\udd57|\ud83d\udd58|\ud83d\udd59|\ud83d\udd5a|\ud83d\udd5b|\ud83d\uddfb|\ud83d\uddfc|\ud83d\uddfd|\ud83d\uddfe|\ud83d\uddff|\ud83d\ude01|\ud83d\ude02|\ud83d\ude03|\ud83d\ude04|\ud83d\ude05|\ud83d\ude06|\ud83d\ude09|\ud83d\ude0a|\ud83d\ude0b|\ud83d\ude0c|\ud83d\ude0d|\ud83d\ude0f|\ud83d\ude12|\ud83d\ude13|\ud83d\ude14|\ud83d\ude16|\ud83d\ude18|\ud83d\ude1a|\ud83d\ude1c|\ud83d\ude1d|\ud83d\ude1e|\ud83d\ude20|\ud83d\ude21|\ud83d\ude22|\ud83d\ude23|\ud83d\ude24|\ud83d\ude25|\ud83d\ude28|\ud83d\ude29|\ud83d\ude2a|\ud83d\ude2b|\ud83d\ude2d|\ud83d\ude30|\ud83d\ude31|\ud83d\ude32|\ud83d\ude33|\ud83d\ude35|\ud83d\ude37|\ud83d\ude38|\ud83d\ude39|\ud83d\ude3a|\ud83d\ude3b|\ud83d\ude3c|\ud83d\ude3d|\ud83d\ude3e|\ud83d\ude3f|\ud83d\ude40|\ud83d\ude45|\ud83d\ude46|\ud83d\ude47|\ud83d\ude48|\ud83d\ude49|\ud83d\ude4a|\ud83d\ude4b|\ud83d\ude4c|\ud83d\ude4d|\ud83d\ude4e|\ud83d\ude4f|\ud83d\ude80|\ud83d\ude83|\ud83d\ude84|\ud83d\ude85|\ud83d\ude87|\ud83d\ude89|\ud83d\ude8c|\ud83d\ude8f|\ud83d\ude91|\ud83d\ude92|\ud83d\ude93|\ud83d\ude95|\ud83d\ude97|\ud83d\ude99|\ud83d\ude9a|\ud83d\udea2|\ud83d\udea4|\ud83d\udea5|\ud83d\udea7|\ud83d\udea8|\ud83d\udea9|\ud83d\udeaa|\ud83d\udeab|\ud83d\udeac|\ud83d\udead|\ud83d\udeb2|\ud83d\udeb6|\ud83d\udeb9|\ud83d\udeba|\ud83d\udebb|\ud83d\udebc|\ud83d\udebd|\ud83d\udebe|\ud83d\udec0|\ud83c\udde6|\ud83c\udde7|\ud83c\udde8|\ud83c\udde9|\ud83c\uddea|\ud83c\uddeb|\ud83c\uddec|\ud83c\udded|\ud83c\uddee|\ud83c\uddef|\ud83c\uddf0|\ud83c\uddf1|\ud83c\uddf2|\ud83c\uddf3|\ud83c\uddf4|\ud83c\uddf5|\ud83c\uddf6|\ud83c\uddf7|\ud83c\uddf8|\ud83c\uddf9|\ud83c\uddfa|\ud83c\uddfb|\ud83c\uddfc|\ud83c\uddfd|\ud83c\uddfe|\ud83c\uddff|\ud83c\udf0d|\ud83c\udf0e|\ud83c\udf10|\ud83c\udf12|\ud83c\udf16|\ud83c\udf17|\ue50a|\u3030|\u27b0|\u2797|\u2796|\u2795|\u2755|\u2754|\u2753|\u274e|\u274c|\u2728|\u270b|\u270a|\u2705|\u26ce|\u23f3|\u23f0|\u23ec|\u23eb|\u23ea|\u23e9|\u2122|\u27bf|\u00a9|\u00ae)|(?:(?:\ud83c\udc04|\ud83c\udd7f|\ud83c\ude1a|\ud83c\ude2f|\u3299|\u303d|\u2b55|\u2b50|\u2b1c|\u2b1b|\u2b07|\u2b06|\u2b05|\u2935|\u2934|\u27a1|\u2764|\u2757|\u2747|\u2744|\u2734|\u2733|\u2716|\u2714|\u2712|\u270f|\u270c|\u2709|\u2708|\u2702|\u26fd|\u26fa|\u26f5|\u26f3|\u26f2|\u26ea|\u26d4|\u26c5|\u26c4|\u26be|\u26bd|\u26ab|\u26aa|\u26a1|\u26a0|\u2693|\u267f|\u267b|\u3297|\u2666|\u2665|\u2663|\u2660|\u2653|\u2652|\u2651|\u2650|\u264f|\u264e|\u264d|\u264c|\u264b|\u264a|\u2649|\u2648|\u263a|\u261d|\u2615|\u2614|\u2611|\u260e|\u2601|\u2600|\u25fe|\u25fd|\u25fc|\u25fb|\u25c0|\u25b6|\u25ab|\u25aa|\u24c2|\u231b|\u231a|\u21aa|\u21a9|\u2199|\u2198|\u2197|\u2196|\u2195|\u2194|\u2139|\u2049|\u203c|\u2668|\ud83e\udd12|\ud83c\udf99|\ud83c\udfd5|\ud83c\udff8|\ud83d\udcf8|\ud83d\udd6f|\ud83d\udd8b|\ud83d\udda5|\ud83d\ude41|\ud83d\ude44|\ud83d\udecf|\ud83e\udd10|\ud83e\udd11|\ud83c\udfc5|\ud83e\udd13|\ud83e\udd14|\ud83e\udd15|\ud83e\udd17|\ud83e\udd18|\ud83e\udd1b|\ud83e\udd1c|\ud83e\udd1d|\ud83e\udd26|\ud83e\udd33|\ud83e\udd47|\ud83e\udd4b|\u26f1)([\uFE0E\uFE0F]?)))/g,
                transform: function(t, e) {
                    var n = e[0],
                        r = e[1];
                    if ("?" !== r) {
                        n = i(n, r);
                        var o = c.assetsResolve("img/emoji/36x36/" + n + ".png");
                        return {
                            htmlTag: "img",
                            selfClose: !0,
                            attr: {
                                src: o,
                                alt: t,
                                "class": "emoji",
                                draggable: "false"
                            }
                        }
                    }
                    return t
                }
            },
            g = (e.parse = function(t) {
                try {
                    if ("string" == typeof t) return JSON.parse(t)
                } catch (t) {
                    return {}
                }
                return t
            }, e.padLeft = function(t) {
                return t >= 10 ? t.toString() : "0" + t
            });
        e.formatTime = function(t) {
            if (void 0 === t) return "00:00:00";
            var e = 36e5,
                n = 6e4,
                r = 1e3,
                i = Math.floor(t / e),
                o = Math.floor((t - i * e) / n),
                a = Math.floor((t - i * e - o * n) / r);
            return g(i) + ":" + g(o) + ":" + g(a)
        }, e.compareVersion = function(t, e, n) {
            if ("string" != typeof t || "string" != typeof e) return !1;
            for (var r, i, o = t.split("."), a = e.split("."); r === i && a.length > 0;) r = o.shift(), i = a.shift();
            return n ? (0 | i) >= (0 | r) : (0 | i) > (0 | r)
        }, e.BSearchUpperBoundOfBarrage = function(t, e) {
            var n = 0,
                r = t.length - 1;
            if (n > r || e <= t[r].time) return -1;
            for (var i = Math.floor((n + r) / 2); r > n;) t[i].time < e ? r = i : n = i + 1, i = Math.floor((n + r) / 2);
            return i
        }, e.toast = function(t, e) {
            var n = {
                SUCCESS: 0,
                INFO: 1,
                ERROR: 2
            };
            dingtalk && dingtalk.window && dingtalk.window.toast && dingtalk.window.toast(n[t] || n.INFO, e || "")
        }, e.boolValueForModuleKey = function(t, e) {
            return new Promise(function(n, r) {
                dingtalk && dingtalk.graySwitchLemon && dingtalk.graySwitchLemon.boolValueForModuleKey ? dingtalk.graySwitchLemon.boolValueForModuleKey(t, e, function(t, e) {
                    t ? r(!1) : n(e)
                }) : n(!1)
            })
        }
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(1),
            o = function(t) {
                function e(e, n, r) {
                    var i = t.call(this) || this;
                    return i.parent = e, i.outerValue = n, i.outerIndex = r, i.index = 0, i
                }
                return r.a(e, t), e.prototype._next = function(t) {
                    this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                }, e.prototype._error = function(t) {
                    this.parent.notifyError(t, this), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.parent.notifyComplete(this), this.unsubscribe()
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";
        (function(e) {
            function n(t) {
                return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
            }

            function r(t) {
                var e = parseFloat(t);
                return isNaN(e) ? t : e
            }

            function i(t, e) {
                for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
                return e ? function(t) {
                    return n[t.toLowerCase()]
                } : function(t) {
                    return n[t]
                }
            }

            function o(t, e) {
                if (t.length) {
                    var n = t.indexOf(e);
                    if (n > -1) return t.splice(n, 1)
                }
            }

            function a(t, e) {
                return kn.call(t, e)
            }

            function s(t) {
                return "string" == typeof t || "number" == typeof t
            }

            function u(t) {
                var e = Object.create(null);
                return function(n) {
                    var r = e[n];
                    return r || (e[n] = t(n))
                }
            }

            function c(t, e) {
                function n(n) {
                    var r = arguments.length;
                    return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
                }
                return n._length = t.length, n
            }

            function l(t, e) {
                e = e || 0;
                for (var n = t.length - e, r = new Array(n); n--;) r[n] = t[n + e];
                return r
            }

            function d(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function f(t) {
                return null !== t && "object" == typeof t
            }

            function p(t) {
                return Tn.call(t) === Pn
            }

            function h(t) {
                for (var e = {}, n = 0; n < t.length; n++) t[n] && d(e, t[n]);
                return e
            }

            function v() {}

            function g(t) {
                return t.reduce(function(t, e) {
                    return t.concat(e.staticKeys || [])
                }, []).join(",")
            }

            function m(t, e) {
                var n = f(t),
                    r = f(e);
                return n && r ? JSON.stringify(t) === JSON.stringify(e) : n || r ? !1 : String(t) === String(e)
            }

            function b(t, e) {
                for (var n = 0; n < t.length; n++)
                    if (m(t[n], e)) return n;
                return -1
            }

            function y(t) {
                var e = (t + "").charCodeAt(0);
                return 36 === e || 95 === e
            }

            function _(t, e, n, r) {
                Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !!r,
                    writable: !0,
                    configurable: !0
                })
            }

            function w(t) {
                if (!Nn.test(t)) {
                    var e = t.split(".");
                    return function(t) {
                        for (var n = 0; n < e.length; n++) {
                            if (!t) return;
                            t = t[e[n]]
                        }
                        return t
                    }
                }
            }

            function x(t) {
                return /native code/.test(t.toString())
            }

            function k(t) {
                Kn.target && Gn.push(Kn.target), Kn.target = t
            }

            function O() {
                Kn.target = Gn.pop()
            }

            function E(t, e) {
                t.__proto__ = e
            }

            function S(t, e, n) {
                for (var r = 0, i = n.length; i > r; r++) {
                    var o = n[r];
                    _(t, o, e[o])
                }
            }

            function C(t, e) {
                if (f(t)) {
                    var n;
                    return a(t, "__ob__") && t.__ob__ instanceof er ? n = t.__ob__ : tr.shouldConvert && !$n() && (Array.isArray(t) || p(t)) && Object.isExtensible(t) && !t._isVue && (n = new er(t)), e && n && n.vmCount++, n
                }
            }

            function j(t, e, n, r) {
                var i = new Kn,
                    o = Object.getOwnPropertyDescriptor(t, e);
                if (!o || o.configurable !== !1) {
                    var a = o && o.get,
                        s = o && o.set,
                        u = C(n);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var e = a ? a.call(t) : n;
                            return Kn.target && (i.depend(), u && u.dep.depend(), Array.isArray(e) && L(e)), e
                        },
                        set: function(e) {
                            var r = a ? a.call(t) : n;
                            e === r || e !== e && r !== r || (s ? s.call(t, e) : n = e, u = C(e), i.notify())
                        }
                    })
                }
            }

            function T(t, e, n) {
                if (Array.isArray(t)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
                if (a(t, e)) return void(t[e] = n);
                var r = t.__ob__;
                if (!(t._isVue || r && r.vmCount)) return r ? (j(r.value, e, n), r.dep.notify(), n) : void(t[e] = n)
            }

            function P(t, e) {
                var n = t.__ob__;
                t._isVue || n && n.vmCount || a(t, e) && (delete t[e], n && n.dep.notify())
            }

            function L(t) {
                for (var e = void 0, n = 0, r = t.length; r > n; n++) e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && L(e)
            }

            function I(t, e) {
                if (!e) return t;
                for (var n, r, i, o = Object.keys(e), s = 0; s < o.length; s++) n = o[s], r = t[n], i = e[n], a(t, n) ? p(r) && p(i) && I(r, i) : T(t, n, i);
                return t
            }

            function A(t, e) {
                return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
            }

            function N(t, e) {
                var n = Object.create(t || null);
                return e ? d(n, e) : n
            }

            function R(t) {
                var e = t.props;
                if (e) {
                    var n, r, i, o = {};
                    if (Array.isArray(e))
                        for (n = e.length; n--;) r = e[n], "string" == typeof r && (i = En(r), o[i] = {
                            type: null
                        });
                    else if (p(e))
                        for (var a in e) r = e[a], i = En(a), o[i] = p(r) ? r : {
                            type: r
                        };
                    t.props = o
                }
            }

            function M(t) {
                var e = t.directives;
                if (e)
                    for (var n in e) {
                        var r = e[n];
                        "function" == typeof r && (e[n] = {
                            bind: r,
                            update: r
                        })
                    }
            }

            function V(t, e, n) {
                function r(r) {
                    var i = nr[r] || rr;
                    l[r] = i(t[r], e[r], n, r)
                }
                R(e), M(e);
                var i = e["extends"];
                if (i && (t = "function" == typeof i ? V(t, i.options, n) : V(t, i, n)), e.mixins)
                    for (var o = 0, s = e.mixins.length; s > o; o++) {
                        var u = e.mixins[o];
                        u.prototype instanceof $t && (u = u.options), t = V(t, u, n)
                    }
                var c, l = {};
                for (c in t) r(c);
                for (c in e) a(t, c) || r(c);
                return l
            }

            function X(t, e, n, r) {
                if ("string" == typeof n) {
                    var i = t[e];
                    if (a(i, n)) return i[n];
                    var o = En(n);
                    if (a(i, o)) return i[o];
                    var s = Sn(o);
                    if (a(i, s)) return i[s];
                    var u = i[n] || i[o] || i[s];
                    return u
                }
            }

            function D(t, e, n, r) {
                var i = e[t],
                    o = !a(n, t),
                    s = n[t];
                if (F(Boolean, i.type) && (o && !a(i, "default") ? s = !1 : F(String, i.type) || "" !== s && s !== jn(t) || (s = !0)), void 0 === s) {
                    s = U(r, i, t);
                    var u = tr.shouldConvert;
                    tr.shouldConvert = !0, C(s), tr.shouldConvert = u
                }
                return s
            }

            function U(t, e, n) {
                if (!a(e, "default")) return void 0;
                var r = e["default"];
                return f(r), t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t[n] ? t[n] : "function" == typeof r && e.type !== Function ? r.call(t) : r
            }

            function B(t) {
                var e = t && t.toString().match(/^\s*function (\w+)/);
                return e && e[1]
            }

            function F(t, e) {
                if (!Array.isArray(e)) return B(e) === B(t);
                for (var n = 0, r = e.length; r > n; n++)
                    if (B(e[n]) === B(t)) return !0;
                return !1
            }

            function $(t) {
                return new or(void 0, void 0, void 0, String(t))
            }

            function H(t) {
                var e = new or(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions);
                return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isCloned = !0, e
            }

            function z(t) {
                for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = H(t[n]);
                return e
            }

            function W(t, e, n, r, i) {
                if (t) {
                    var o = n.$options._base;
                    if (f(t) && (t = o.extend(t)), "function" == typeof t) {
                        if (!t.cid)
                            if (t.resolved) t = t.resolved;
                            else if (t = Z(t, o, function() {
                            n.$forceUpdate()
                        }), !t) return;
                        Ft(t), e = e || {};
                        var a = tt(e, t);
                        if (t.options.functional) return q(t, a, e, n, r);
                        var s = e.on;
                        e.on = e.nativeOn, t.options["abstract"] && (e = {}), nt(e);
                        var u = t.options.name || i,
                            c = new or("vue-component-" + t.cid + (u ? "-" + u : ""), e, void 0, void 0, void 0, n, {
                                Ctor: t,
                                propsData: a,
                                listeners: s,
                                tag: i,
                                children: r
                            });
                        return c
                    }
                }
            }

            function q(t, e, n, r, i) {
                var o = {},
                    a = t.options.props;
                if (a)
                    for (var s in a) o[s] = D(s, a, e);
                var u = Object.create(r),
                    c = function(t, e, n, r) {
                        return dt(u, t, e, n, r, !0)
                    },
                    l = t.options.render.call(null, c, {
                        props: o,
                        data: n,
                        parent: r,
                        children: i,
                        slots: function() {
                            return gt(i, r)
                        }
                    });
                return l instanceof or && (l.functionalContext = r, n.slot && ((l.data || (l.data = {})).slot = n.slot)), l
            }

            function Y(t, e, n, r) {
                var i = t.componentOptions,
                    o = {
                        _isComponent: !0,
                        parent: e,
                        propsData: i.propsData,
                        _componentTag: i.tag,
                        _parentVnode: t,
                        _parentListeners: i.listeners,
                        _renderChildren: i.children,
                        _parentElm: n || null,
                        _refElm: r || null
                    },
                    a = t.data.inlineTemplate;
                return a && (o.render = a.render, o.staticRenderFns = a.staticRenderFns), new i.Ctor(o)
            }

            function K(t, e, n, r) {
                if (!t.componentInstance || t.componentInstance._isDestroyed) {
                    var i = t.componentInstance = Y(t, hr, n, r);
                    i.$mount(e ? t.elm : void 0, e)
                } else if (t.data.keepAlive) {
                    var o = t;
                    G(o, o)
                }
            }

            function G(t, e) {
                var n = e.componentOptions,
                    r = e.componentInstance = t.componentInstance;
                r._updateFromParent(n.propsData, n.listeners, e, n.children)
            }

            function J(t) {
                t.componentInstance._isMounted || (t.componentInstance._isMounted = !0, Ot(t.componentInstance, "mounted")), t.data.keepAlive && (t.componentInstance._inactive = !1, Ot(t.componentInstance, "activated"))
            }

            function Q(t) {
                t.componentInstance._isDestroyed || (t.data.keepAlive ? (t.componentInstance._inactive = !0, Ot(t.componentInstance, "deactivated")) : t.componentInstance.$destroy())
            }

            function Z(t, e, n) {
                if (!t.requested) {
                    t.requested = !0;
                    var r = t.pendingCallbacks = [n],
                        i = !0,
                        o = function(n) {
                            if (f(n) && (n = e.extend(n)), t.resolved = n, !i)
                                for (var o = 0, a = r.length; a > o; o++) r[o](n)
                        },
                        a = function(t) {},
                        s = t(o, a);
                    return s && "function" == typeof s.then && !t.resolved && s.then(o, a), i = !1, t.resolved
                }
                t.pendingCallbacks.push(n)
            }

            function tt(t, e) {
                var n = e.options.props;
                if (n) {
                    var r = {},
                        i = t.attrs,
                        o = t.props,
                        a = t.domProps;
                    if (i || o || a)
                        for (var s in n) {
                            var u = jn(s);
                            et(r, o, s, u, !0) || et(r, i, s, u) || et(r, a, s, u)
                        }
                    return r
                }
            }

            function et(t, e, n, r, i) {
                if (e) {
                    if (a(e, n)) return t[n] = e[n], i || delete e[n], !0;
                    if (a(e, r)) return t[n] = e[r], i || delete e[r], !0
                }
                return !1
            }

            function nt(t) {
                t.hook || (t.hook = {});
                for (var e = 0; e < lr.length; e++) {
                    var n = lr[e],
                        r = t.hook[n],
                        i = cr[n];
                    t.hook[n] = r ? rt(i, r) : i
                }
            }

            function rt(t, e) {
                return function(n, r, i, o) {
                    t(n, r, i, o), e(n, r, i, o)
                }
            }

            function it(t, e, n, r) {
                r += e;
                var i = t.__injected || (t.__injected = {});
                if (!i[r]) {
                    i[r] = !0;
                    var o = t[e];
                    o ? t[e] = function() {
                        o.apply(this, arguments), n.apply(this, arguments)
                    } : t[e] = n
                }
            }

            function ot(t) {
                var e = {
                    fn: t,
                    invoker: function() {
                        var t = arguments,
                            n = e.fn;
                        if (Array.isArray(n))
                            for (var r = 0; r < n.length; r++) n[r].apply(null, t);
                        else n.apply(null, arguments)
                    }
                };
                return e
            }

            function at(t, e, n, r, i) {
                var o, a, s, u;
                for (o in t) a = t[o], s = e[o], u = dr(o), a && (s ? a !== s && (s.fn = a, t[o] = s) : (a.invoker || (a = t[o] = ot(a)), n(u.name, a.invoker, u.once, u.capture)));
                for (o in e) t[o] || (u = dr(o), r(u.name, e[o].invoker, u.capture))
            }

            function st(t) {
                for (var e = 0; e < t.length; e++)
                    if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t
            }

            function ut(t) {
                return s(t) ? [$(t)] : Array.isArray(t) ? ct(t) : void 0
            }

            function ct(t, e) {
                var n, r, i, o = [];
                for (n = 0; n < t.length; n++) r = t[n], null != r && "boolean" != typeof r && (i = o[o.length - 1], Array.isArray(r) ? o.push.apply(o, ct(r, (e || "") + "_" + n)) : s(r) ? i && i.text ? i.text += String(r) : "" !== r && o.push($(r)) : r.text && i && i.text ? o[o.length - 1] = $(i.text + r.text) : (r.tag && null == r.key && null != e && (r.key = "__vlist" + e + "_" + n + "__"), o.push(r)));
                return o
            }

            function lt(t) {
                return t && t.filter(function(t) {
                    return t && t.componentOptions
                })[0]
            }

            function dt(t, e, n, r, i, o) {
                return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), o && (i = pr), ft(t, e, n, r, i)
            }

            function ft(t, e, n, r, i) {
                if (n && n.__ob__) return ur();
                if (!e) return ur();
                Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = {
                    "default": r[0]
                }, r.length = 0), i === pr ? r = ut(r) : i === fr && (r = st(r));
                var o, a;
                if ("string" == typeof e) {
                    var s;
                    a = An.getTagNamespace(e), o = An.isReservedTag(e) ? new or(An.parsePlatformTagName(e), n, r, void 0, void 0, t) : (s = X(t.$options, "components", e)) ? W(s, n, t, r, e) : new or(e, n, r, void 0, void 0, t)
                } else o = W(e, n, t, r);
                return o ? (a && pt(o, a), o) : ur()
            }

            function pt(t, e) {
                if (t.ns = e, "foreignObject" !== t.tag && t.children)
                    for (var n = 0, r = t.children.length; r > n; n++) {
                        var i = t.children[n];
                        i.tag && !i.ns && pt(i, e)
                    }
            }

            function ht(t) {
                t.$vnode = null, t._vnode = null, t._staticTrees = null;
                var e = t.$options._parentVnode,
                    n = e && e.context;
                t.$slots = gt(t.$options._renderChildren, n), t.$scopedSlots = {}, t._c = function(e, n, r, i) {
                    return dt(t, e, n, r, i, !1)
                }, t.$createElement = function(e, n, r, i) {
                    return dt(t, e, n, r, i, !0)
                }
            }

            function vt(t) {
                function e(t, e, n) {
                    if (Array.isArray(t))
                        for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && i(t[r], e + "_" + r, n);
                    else i(t, e, n)
                }

                function i(t, e, n) {
                    t.isStatic = !0, t.key = e, t.isOnce = n
                }
                t.prototype.$nextTick = function(t) {
                    return zn(t, this)
                }, t.prototype._render = function() {
                    var t = this,
                        e = t.$options,
                        n = e.render,
                        r = e.staticRenderFns,
                        i = e._parentVnode;
                    if (t._isMounted)
                        for (var o in t.$slots) t.$slots[o] = z(t.$slots[o]);
                    i && i.data.scopedSlots && (t.$scopedSlots = i.data.scopedSlots), r && !t._staticTrees && (t._staticTrees = []), t.$vnode = i;
                    var a;
                    try {
                        a = n.call(t._renderProxy, t.$createElement)
                    } catch (s) {
                        if (!An.errorHandler) throw s;
                        An.errorHandler.call(null, s, t), a = t._vnode
                    }
                    return a instanceof or || (a = ur()), a.parent = i, a
                }, t.prototype._s = n, t.prototype._v = $, t.prototype._n = r, t.prototype._e = ur, t.prototype._q = m, t.prototype._i = b, t.prototype._m = function(t, n) {
                    var r = this._staticTrees[t];
                    return r && !n ? Array.isArray(r) ? z(r) : H(r) : (r = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy), e(r, "__static__" + t, !1), r)
                }, t.prototype._o = function(t, n, r) {
                    return e(t, "__once__" + n + (r ? "_" + r : ""), !0), t
                }, t.prototype._f = function(t) {
                    return X(this.$options, "filters", t, !0) || In
                }, t.prototype._l = function(t, e) {
                    var n, r, i, o, a;
                    if (Array.isArray(t) || "string" == typeof t)
                        for (n = new Array(t.length), r = 0, i = t.length; i > r; r++) n[r] = e(t[r], r);
                    else if ("number" == typeof t)
                        for (n = new Array(t), r = 0; t > r; r++) n[r] = e(r + 1, r);
                    else if (f(t))
                        for (o = Object.keys(t), n = new Array(o.length), r = 0, i = o.length; i > r; r++) a = o[r], n[r] = e(t[a], a, r);
                    return n
                }, t.prototype._t = function(t, e, n, r) {
                    var i = this.$scopedSlots[t];
                    if (i) return n = n || {}, r && d(n, r), i(n) || e;
                    var o = this.$slots[t];
                    return o || e
                }, t.prototype._b = function(t, e, n, r) {
                    if (n)
                        if (f(n)) {
                            Array.isArray(n) && (n = h(n));
                            for (var i in n)
                                if ("class" === i || "style" === i) t[i] = n[i];
                                else {
                                    var o = t.attrs && t.attrs.type,
                                        a = r || An.mustUseProp(e, o, i) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                                    a[i] = n[i]
                                }
                        } else;
                    return t
                }, t.prototype._k = function(t, e, n) {
                    var r = An.keyCodes[e] || n;
                    return Array.isArray(r) ? -1 === r.indexOf(t) : r !== t
                }
            }

            function gt(t, e) {
                var n = {};
                if (!t) return n;
                for (var r, i, o = [], a = 0, s = t.length; s > a; a++)
                    if (i = t[a], (i.context === e || i.functionalContext === e) && i.data && (r = i.data.slot)) {
                        var u = n[r] || (n[r] = []);
                        "template" === i.tag ? u.push.apply(u, i.children) : u.push(i)
                    } else o.push(i);
                return o.length && (1 !== o.length || " " !== o[0].text && !o[0].isComment) && (n["default"] = o), n
            }

            function mt(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && _t(t, e)
            }

            function bt(t, e, n) {
                n ? sr.$once(t, e) : sr.$on(t, e)
            }

            function yt(t, e) {
                sr.$off(t, e)
            }

            function _t(t, e, n) {
                sr = t, at(e, n || {}, bt, yt, t)
            }

            function wt(t) {
                var e = /^hook:/;
                t.prototype.$on = function(t, n) {
                    var r = this;
                    return (r._events[t] || (r._events[t] = [])).push(n), e.test(t) && (r._hasHookEvent = !0), r
                }, t.prototype.$once = function(t, e) {
                    function n() {
                        r.$off(t, n), e.apply(r, arguments)
                    }
                    var r = this;
                    return n.fn = e, r.$on(t, n), r
                }, t.prototype.$off = function(t, e) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    var r = n._events[t];
                    if (!r) return n;
                    if (1 === arguments.length) return n._events[t] = null, n;
                    for (var i, o = r.length; o--;)
                        if (i = r[o], i === e || i.fn === e) {
                            r.splice(o, 1);
                            break
                        }
                    return n
                }, t.prototype.$emit = function(t) {
                    var e = this,
                        n = e._events[t];
                    if (n) {
                        n = n.length > 1 ? l(n) : n;
                        for (var r = l(arguments, 1), i = 0, o = n.length; o > i; i++) n[i].apply(e, r)
                    }
                    return e
                }
            }

            function xt(t) {
                var e = t.$options,
                    n = e.parent;
                if (n && !e["abstract"]) {
                    for (; n.$options["abstract"] && n.$parent;) n = n.$parent;
                    n.$children.push(t)
                }
                t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
            }

            function kt(t) {
                t.prototype._mount = function(t, e) {
                    var n = this;
                    return n.$el = t, n.$options.render || (n.$options.render = ur), Ot(n, "beforeMount"), n._watcher = new wr(n, function() {
                        n._update(n._render(), e)
                    }, v), e = !1, null == n.$vnode && (n._isMounted = !0, Ot(n, "mounted")), n
                }, t.prototype._update = function(t, e) {
                    var n = this;
                    n._isMounted && Ot(n, "beforeUpdate");
                    var r = n.$el,
                        i = n._vnode,
                        o = hr;
                    hr = n, n._vnode = t, i ? n.$el = n.__patch__(i, t) : n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), hr = o, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                }, t.prototype._updateFromParent = function(t, e, n, r) {
                    var i = this,
                        o = !(!i.$options._renderChildren && !r);
                    if (i.$options._parentVnode = n, i.$vnode = n, i._vnode && (i._vnode.parent = n), i.$options._renderChildren = r, t && i.$options.props) {
                        tr.shouldConvert = !1;
                        for (var a = i.$options._propKeys || [], s = 0; s < a.length; s++) {
                            var u = a[s];
                            i[u] = D(u, i.$options.props, t, i)
                        }
                        tr.shouldConvert = !0, i.$options.propsData = t
                    }
                    if (e) {
                        var c = i.$options._parentListeners;
                        i.$options._parentListeners = e, _t(i, e, c)
                    }
                    o && (i.$slots = gt(r, n.context), i.$forceUpdate())
                }, t.prototype.$forceUpdate = function() {
                    var t = this;
                    t._watcher && t._watcher.update()
                }, t.prototype.$destroy = function() {
                    var t = this;
                    if (!t._isBeingDestroyed) {
                        Ot(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                        var e = t.$parent;
                        !e || e._isBeingDestroyed || t.$options["abstract"] || o(e.$children, t), t._watcher && t._watcher.teardown();
                        for (var n = t._watchers.length; n--;) t._watchers[n].teardown();
                        t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, Ot(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.__patch__(t._vnode, null)
                    }
                }
            }

            function Ot(t, e) {
                var n = t.$options[e];
                if (n)
                    for (var r = 0, i = n.length; i > r; r++) n[r].call(t);
                t._hasHookEvent && t.$emit("hook:" + e)
            }

            function Et() {
                vr.length = 0, gr = {}, mr = br = !1
            }

            function St() {
                br = !0;
                var t, e, n;
                for (vr.sort(function(t, e) {
                    return t.id - e.id
                }), yr = 0; yr < vr.length; yr++) t = vr[yr], e = t.id, gr[e] = null, t.run();
                for (yr = vr.length; yr--;) t = vr[yr], n = t.vm, n._watcher === t && n._isMounted && Ot(n, "updated");
                Hn && An.devtools && Hn.emit("flush"), Et()
            }

            function Ct(t) {
                var e = t.id;
                if (null == gr[e]) {
                    if (gr[e] = !0, br) {
                        for (var n = vr.length - 1; n >= 0 && vr[n].id > t.id;) n--;
                        vr.splice(Math.max(n, yr) + 1, 0, t)
                    } else vr.push(t);
                    mr || (mr = !0, zn(St))
                }
            }

            function jt(t) {
                xr.clear(), Tt(t, xr)
            }

            function Tt(t, e) {
                var n, r, i = Array.isArray(t);
                if ((i || f(t)) && Object.isExtensible(t)) {
                    if (t.__ob__) {
                        var o = t.__ob__.dep.id;
                        if (e.has(o)) return;
                        e.add(o)
                    }
                    if (i)
                        for (n = t.length; n--;) Tt(t[n], e);
                    else
                        for (r = Object.keys(t), n = r.length; n--;) Tt(t[r[n]], e)
                }
            }

            function Pt(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && Lt(t, e.props), e.methods && Rt(t, e.methods), e.data ? It(t) : C(t._data = {}, !0), e.computed && At(t, e.computed), e.watch && Mt(t, e.watch)
            }

            function Lt(t, e) {
                var n = t.$options.propsData || {},
                    r = t.$options._propKeys = Object.keys(e),
                    i = !t.$parent;
                tr.shouldConvert = i;
                for (var o = function(i) {
                    var o = r[i];
                    j(t, o, D(o, e, n, t))
                }, a = 0; a < r.length; a++) o(a);
                tr.shouldConvert = !0
            }

            function It(t) {
                var e = t.$options.data;
                e = t._data = "function" == typeof e ? e.call(t) : e || {}, p(e) || (e = {});
                for (var n = Object.keys(e), r = t.$options.props, i = n.length; i--;) r && a(r, n[i]) || Dt(t, n[i]);
                C(e, !0)
            }

            function At(t, e) {
                for (var n in e) {
                    var r = e[n];
                    "function" == typeof r ? (kr.get = Nt(r, t), kr.set = v) : (kr.get = r.get ? r.cache !== !1 ? Nt(r.get, t) : c(r.get, t) : v, kr.set = r.set ? c(r.set, t) : v), Object.defineProperty(t, n, kr)
                }
            }

            function Nt(t, e) {
                var n = new wr(e, t, v, {
                    lazy: !0
                });
                return function() {
                    return n.dirty && n.evaluate(), Kn.target && n.depend(), n.value
                }
            }

            function Rt(t, e) {
                for (var n in e) t[n] = null == e[n] ? v : c(e[n], t)
            }

            function Mt(t, e) {
                for (var n in e) {
                    var r = e[n];
                    if (Array.isArray(r))
                        for (var i = 0; i < r.length; i++) Vt(t, n, r[i]);
                    else Vt(t, n, r)
                }
            }

            function Vt(t, e, n) {
                var r;
                p(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r)
            }

            function Xt(t) {
                var e = {};
                e.get = function() {
                    return this._data
                }, Object.defineProperty(t.prototype, "$data", e), t.prototype.$set = T, t.prototype.$delete = P, t.prototype.$watch = function(t, e, n) {
                    var r = this;
                    n = n || {}, n.user = !0;
                    var i = new wr(r, t, e, n);
                    return n.immediate && e.call(r, i.value),
                        function() {
                            i.teardown()
                        }
                }
            }

            function Dt(t, e) {
                y(e) || Object.defineProperty(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return t._data[e]
                    },
                    set: function(n) {
                        t._data[e] = n
                    }
                })
            }

            function Ut(t) {
                t.prototype._init = function(t) {
                    var e = this;
                    e._uid = Or++, e._isVue = !0, t && t._isComponent ? Bt(e, t) : e.$options = V(Ft(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, xt(e), mt(e), ht(e), Ot(e, "beforeCreate"), Pt(e), Ot(e, "created"), e.$options.el && e.$mount(e.$options.el)
                }
            }

            function Bt(t, e) {
                var n = t.$options = Object.create(t.constructor.options);
                n.parent = e.parent, n.propsData = e.propsData, n._parentVnode = e._parentVnode, n._parentListeners = e._parentListeners, n._renderChildren = e._renderChildren, n._componentTag = e._componentTag, n._parentElm = e._parentElm, n._refElm = e._refElm, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
            }

            function Ft(t) {
                var e = t.options;
                if (t["super"]) {
                    var n = t["super"].options,
                        r = t.superOptions,
                        i = t.extendOptions;
                    n !== r && (t.superOptions = n, i.render = e.render, i.staticRenderFns = e.staticRenderFns, i._scopeId = e._scopeId, e = t.options = V(n, i), e.name && (e.components[e.name] = t))
                }
                return e
            }

            function $t(t) {
                this._init(t)
            }

            function Ht(t) {
                t.use = function(t) {
                    if (!t.installed) {
                        var e = l(arguments, 1);
                        return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), t.installed = !0, this
                    }
                }
            }

            function zt(t) {
                t.mixin = function(t) {
                    this.options = V(this.options, t)
                }
            }

            function Wt(t) {
                t.cid = 0;
                var e = 1;
                t.extend = function(t) {
                    t = t || {};
                    var n = this,
                        r = n.cid,
                        i = t._Ctor || (t._Ctor = {});
                    if (i[r]) return i[r];
                    var o = t.name || n.options.name,
                        a = function(t) {
                            this._init(t)
                        };
                    return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, a.options = V(n.options, t), a["super"] = n, a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, An._assetTypes.forEach(function(t) {
                        a[t] = n[t]
                    }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, i[r] = a, a
                }
            }

            function qt(t) {
                An._assetTypes.forEach(function(e) {
                    t[e] = function(t, n) {
                        return n ? ("component" === e && p(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t]
                    }
                })
            }

            function Yt(t) {
                return t && (t.Ctor.options.name || t.tag)
            }

            function Kt(t, e) {
                return "string" == typeof t ? t.split(",").indexOf(e) > -1 : t.test(e)
            }

            function Gt(t, e) {
                for (var n in t) {
                    var r = t[n];
                    if (r) {
                        var i = Yt(r.componentOptions);
                        i && !e(i) && (Jt(r), t[n] = null)
                    }
                }
            }

            function Jt(t) {
                t && (t.componentInstance._inactive || Ot(t.componentInstance, "deactivated"), t.componentInstance.$destroy())
            }

            function Qt(t) {
                var e = {};
                e.get = function() {
                    return An
                }, Object.defineProperty(t, "config", e), t.util = ir, t.set = T, t["delete"] = P, t.nextTick = zn, t.options = Object.create(null), An._assetTypes.forEach(function(e) {
                    t.options[e + "s"] = Object.create(null)
                }), t.options._base = t, d(t.options.components, Cr), Ht(t), zt(t), Wt(t), qt(t)
            }

            function Zt(t) {
                for (var e = t.data, n = t, r = t; r.componentInstance;) r = r.componentInstance._vnode, r.data && (e = te(r.data, e));
                for (; n = n.parent;) n.data && (e = te(e, n.data));
                return ee(e)
            }

            function te(t, e) {
                return {
                    staticClass: ne(t.staticClass, e.staticClass),
                    "class": t["class"] ? [t["class"], e["class"]] : e["class"]
                }
            }

            function ee(t) {
                var e = t["class"],
                    n = t.staticClass;
                return n || e ? ne(n, re(e)) : ""
            }

            function ne(t, e) {
                return t ? e ? t + " " + e : t : e || ""
            }

            function re(t) {
                var e = "";
                if (!t) return e;
                if ("string" == typeof t) return t;
                if (Array.isArray(t)) {
                    for (var n, r = 0, i = t.length; i > r; r++) t[r] && (n = re(t[r])) && (e += n + " ");
                    return e.slice(0, -1)
                }
                if (f(t)) {
                    for (var o in t) t[o] && (e += o + " ");
                    return e.slice(0, -1)
                }
                return e
            }

            function ie(t) {
                return Ur(t) ? "svg" : "math" === t ? "math" : void 0
            }

            function oe(t) {
                if (!Mn) return !0;
                if (Br(t)) return !1;
                if (t = t.toLowerCase(), null != Fr[t]) return Fr[t];
                var e = document.createElement(t);
                return t.indexOf("-") > -1 ? Fr[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Fr[t] = /HTMLUnknownElement/.test(e.toString())
            }

            function ae(t) {
                if ("string" == typeof t) {
                    if (t = document.querySelector(t), !t) return document.createElement("div")
                }
                return t
            }

            function se(t, e) {
                var n = document.createElement(t);
                return "select" !== t ? n : (e.data && e.data.attrs && "multiple" in e.data.attrs && n.setAttribute("multiple", "multiple"), n)
            }

            function ue(t, e) {
                return document.createElementNS(Xr[t], e)
            }

            function ce(t) {
                return document.createTextNode(t)
            }

            function le(t) {
                return document.createComment(t)
            }

            function de(t, e, n) {
                t.insertBefore(e, n)
            }

            function fe(t, e) {
                t.removeChild(e)
            }

            function pe(t, e) {
                t.appendChild(e)
            }

            function he(t) {
                return t.parentNode
            }

            function ve(t) {
                return t.nextSibling
            }

            function ge(t) {
                return t.tagName
            }

            function me(t, e) {
                t.textContent = e
            }

            function be(t, e, n) {
                t.setAttribute(e, n)
            }

            function ye(t, e) {
                var n = t.data.ref;
                if (n) {
                    var r = t.context,
                        i = t.componentInstance || t.elm,
                        a = r.$refs;
                    e ? Array.isArray(a[n]) ? o(a[n], i) : a[n] === i && (a[n] = void 0) : t.data.refInFor ? Array.isArray(a[n]) && a[n].indexOf(i) < 0 ? a[n].push(i) : a[n] = [i] : a[n] = i
                }
            }

            function _e(t) {
                return null == t
            }

            function we(t) {
                return null != t
            }

            function xe(t, e) {
                return t.key === e.key && t.tag === e.tag && t.isComment === e.isComment && !t.data == !e.data
            }

            function ke(t, e, n) {
                var r, i, o = {};
                for (r = e; n >= r; ++r) i = t[r].key, we(i) && (o[i] = r);
                return o
            }

            function Oe(t) {
                function e(t) {
                    return new or(C.tagName(t).toLowerCase(), {}, [], void 0, t)
                }

                function n(t, e) {
                    function n() {
                        0 === --n.listeners && r(t)
                    }
                    return n.listeners = e, n
                }

                function r(t) {
                    var e = C.parentNode(t);
                    e && C.removeChild(e, t)
                }

                function o(t, e, n, r, i) {
                    if (t.isRootInsert = !i, !a(t, e, n, r)) {
                        var o = t.data,
                            s = t.children,
                            u = t.tag;
                        we(u) ? (t.elm = t.ns ? C.createElementNS(t.ns, u) : C.createElement(u, t), h(t), d(t, s, e), we(o) && p(t, e), l(n, t.elm, r)) : t.isComment ? (t.elm = C.createComment(t.text), l(n, t.elm, r)) : (t.elm = C.createTextNode(t.text), l(n, t.elm, r))
                    }
                }

                function a(t, e, n, r) {
                    var i = t.data;
                    if (we(i)) {
                        var o = we(t.componentInstance) && i.keepAlive;
                        if (we(i = i.hook) && we(i = i.init) && i(t, !1, n, r), we(t.componentInstance)) return u(t, e), o && c(t, e, n, r), !0
                    }
                }

                function u(t, e) {
                    t.data.pendingInsert && e.push.apply(e, t.data.pendingInsert), t.elm = t.componentInstance.$el, f(t) ? (p(t, e), h(t)) : (ye(t), e.push(t))
                }

                function c(t, e, n, r) {
                    for (var i, o = t; o.componentInstance;)
                        if (o = o.componentInstance._vnode, we(i = o.data) && we(i = i.transition)) {
                            for (i = 0; i < E.activate.length; ++i) E.activate[i](zr, o);
                            e.push(o);
                            break
                        }
                    l(n, t.elm, r)
                }

                function l(t, e, n) {
                    t && (n ? C.insertBefore(t, e, n) : C.appendChild(t, e))
                }

                function d(t, e, n) {
                    if (Array.isArray(e))
                        for (var r = 0; r < e.length; ++r) o(e[r], n, t.elm, null, !0);
                    else s(t.text) && C.appendChild(t.elm, C.createTextNode(t.text))
                }

                function f(t) {
                    for (; t.componentInstance;) t = t.componentInstance._vnode;
                    return we(t.tag)
                }

                function p(t, e) {
                    for (var n = 0; n < E.create.length; ++n) E.create[n](zr, t);
                    k = t.data.hook, we(k) && (k.create && k.create(zr, t), k.insert && e.push(t))
                }

                function h(t) {
                    var e;
                    we(e = t.context) && we(e = e.$options._scopeId) && C.setAttribute(t.elm, e, ""), we(e = hr) && e !== t.context && we(e = e.$options._scopeId) && C.setAttribute(t.elm, e, "")
                }

                function v(t, e, n, r, i, a) {
                    for (; i >= r; ++r) o(n[r], a, t, e)
                }

                function g(t) {
                    var e, n, r = t.data;
                    if (we(r))
                        for (we(e = r.hook) && we(e = e.destroy) && e(t), e = 0; e < E.destroy.length; ++e) E.destroy[e](t);
                    if (we(e = t.children))
                        for (n = 0; n < t.children.length; ++n) g(t.children[n])
                }

                function m(t, e, n, i) {
                    for (; i >= n; ++n) {
                        var o = e[n];
                        we(o) && (we(o.tag) ? (b(o), g(o)) : r(o.elm))
                    }
                }

                function b(t, e) {
                    if (e || we(t.data)) {
                        var i = E.remove.length + 1;
                        for (e ? e.listeners += i : e = n(t.elm, i), we(k = t.componentInstance) && we(k = k._vnode) && we(k.data) && b(k, e), k = 0; k < E.remove.length; ++k) E.remove[k](t, e);
                        we(k = t.data.hook) && we(k = k.remove) ? k(t, e) : e()
                    } else r(t.elm)
                }

                function y(t, e, n, r, i) {
                    for (var a, s, u, c, l = 0, d = 0, f = e.length - 1, p = e[0], h = e[f], g = n.length - 1, b = n[0], y = n[g], w = !i; f >= l && g >= d;) _e(p) ? p = e[++l] : _e(h) ? h = e[--f] : xe(p, b) ? (_(p, b, r), p = e[++l], b = n[++d]) : xe(h, y) ? (_(h, y, r), h = e[--f], y = n[--g]) : xe(p, y) ? (_(p, y, r), w && C.insertBefore(t, p.elm, C.nextSibling(h.elm)), p = e[++l], y = n[--g]) : xe(h, b) ? (_(h, b, r), w && C.insertBefore(t, h.elm, p.elm), h = e[--f], b = n[++d]) : (_e(a) && (a = ke(e, l, f)), s = we(b.key) ? a[b.key] : null, _e(s) ? (o(b, r, t, p.elm), b = n[++d]) : (u = e[s], xe(u, b) ? (_(u, b, r), e[s] = void 0, w && C.insertBefore(t, b.elm, p.elm), b = n[++d]) : (o(b, r, t, p.elm), b = n[++d])));
                    l > f ? (c = _e(n[g + 1]) ? null : n[g + 1].elm, v(t, c, n, d, g, r)) : d > g && m(t, e, l, f)
                }

                function _(t, e, n, r) {
                    if (t !== e) {
                        if (e.isStatic && t.isStatic && e.key === t.key && (e.isCloned || e.isOnce)) return e.elm = t.elm, void(e.componentInstance = t.componentInstance);
                        var i, o = e.data,
                            a = we(o);
                        a && we(i = o.hook) && we(i = i.prepatch) && i(t, e);
                        var s = e.elm = t.elm,
                            u = t.children,
                            c = e.children;
                        if (a && f(e)) {
                            for (i = 0; i < E.update.length; ++i) E.update[i](t, e);
                            we(i = o.hook) && we(i = i.update) && i(t, e)
                        }
                        _e(e.text) ? we(u) && we(c) ? u !== c && y(s, u, c, n, r) : we(c) ? (we(t.text) && C.setTextContent(s, ""), v(s, null, c, 0, c.length - 1, n)) : we(u) ? m(s, u, 0, u.length - 1) : we(t.text) && C.setTextContent(s, "") : t.text !== e.text && C.setTextContent(s, e.text), a && we(i = o.hook) && we(i = i.postpatch) && i(t, e)
                    }
                }

                function w(t, e, n) {
                    if (n && t.parent) t.parent.data.pendingInsert = e;
                    else
                        for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r])
                }

                function x(t, e, n) {
                    e.elm = t;
                    var r = e.tag,
                        i = e.data,
                        o = e.children;
                    if (we(i) && (we(k = i.hook) && we(k = k.init) && k(e, !0), we(k = e.componentInstance))) return u(e, n), !0;
                    if (we(r)) {
                        if (we(o))
                            if (t.hasChildNodes()) {
                                for (var a = !0, s = t.firstChild, c = 0; c < o.length; c++) {
                                    if (!s || !x(s, o[c], n)) {
                                        a = !1;
                                        break
                                    }
                                    s = s.nextSibling
                                }
                                if (!a || s) return !1
                            } else d(e, o, n);
                        if (we(i))
                            for (var l in i)
                                if (!j(l)) {
                                    p(e, n);
                                    break
                                }
                    } else t.data !== e.text && (t.data = e.text);
                    return !0
                }
                var k, O, E = {},
                    S = t.modules,
                    C = t.nodeOps;
                for (k = 0; k < Wr.length; ++k)
                    for (E[Wr[k]] = [], O = 0; O < S.length; ++O) void 0 !== S[O][Wr[k]] && E[Wr[k]].push(S[O][Wr[k]]);
                var j = i("attrs,style,class,staticClass,staticStyle,key");
                return function(t, n, r, i, a, s) {
                    if (!n) return void(t && g(t));
                    var u = !1,
                        c = [];
                    if (t) {
                        var l = we(t.nodeType);
                        if (!l && xe(t, n)) _(t, n, c, i);
                        else {
                            if (l) {
                                if (1 === t.nodeType && t.hasAttribute("server-rendered") && (t.removeAttribute("server-rendered"), r = !0), r && x(t, n, c)) return w(n, c, !0), t;
                                t = e(t)
                            }
                            var d = t.elm,
                                p = C.parentNode(d);
                            if (o(n, c, d._leaveCb ? null : p, C.nextSibling(d)), n.parent) {
                                for (var h = n.parent; h;) h.elm = n.elm, h = h.parent;
                                if (f(n))
                                    for (var v = 0; v < E.create.length; ++v) E.create[v](zr, n.parent)
                            }
                            null !== p ? m(p, [t], 0, 0) : we(t.tag) && g(t)
                        }
                    } else u = !0, o(n, c, a, s);
                    return w(n, c, u), n.elm
                }
            }

            function Ee(t, e) {
                (t.data.directives || e.data.directives) && Se(t, e)
            }

            function Se(t, e) {
                var n, r, i, o = t === zr,
                    a = e === zr,
                    s = Ce(t.data.directives, t.context),
                    u = Ce(e.data.directives, e.context),
                    c = [],
                    l = [];
                for (n in u) r = s[n], i = u[n], r ? (i.oldValue = r.value, Te(i, "update", e, t), i.def && i.def.componentUpdated && l.push(i)) : (Te(i, "bind", e, t), i.def && i.def.inserted && c.push(i));
                if (c.length) {
                    var d = function() {
                        for (var n = 0; n < c.length; n++) Te(c[n], "inserted", e, t)
                    };
                    o ? it(e.data.hook || (e.data.hook = {}), "insert", d, "dir-insert") : d()
                }
                if (l.length && it(e.data.hook || (e.data.hook = {}), "postpatch", function() {
                    for (var n = 0; n < l.length; n++) Te(l[n], "componentUpdated", e, t)
                }, "dir-postpatch"), !o)
                    for (n in s) u[n] || Te(s[n], "unbind", t, t, a)
            }

            function Ce(t, e) {
                var n = Object.create(null);
                if (!t) return n;
                var r, i;
                for (r = 0; r < t.length; r++) i = t[r], i.modifiers || (i.modifiers = Yr), n[je(i)] = i, i.def = X(e.$options, "directives", i.name, !0);
                return n
            }

            function je(t) {
                return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
            }

            function Te(t, e, n, r, i) {
                var o = t.def && t.def[e];
                o && o(n.elm, t, n, r, i)
            }

            function Pe(t, e) {
                if (t.data.attrs || e.data.attrs) {
                    var n, r, i, o = e.elm,
                        a = t.data.attrs || {},
                        s = e.data.attrs || {};
                    s.__ob__ && (s = e.data.attrs = d({}, s));
                    for (n in s) r = s[n], i = a[n], i !== r && Le(o, n, r);
                    Dn && s.value !== a.value && Le(o, "value", s.value);
                    for (n in a) null == s[n] && (Rr(n) ? o.removeAttributeNS(Nr, Mr(n)) : Ir(n) || o.removeAttribute(n))
                }
            }

            function Le(t, e, n) {
                Ar(e) ? Vr(n) ? t.removeAttribute(e) : t.setAttribute(e, e) : Ir(e) ? t.setAttribute(e, Vr(n) || "false" === n ? "false" : "true") : Rr(e) ? Vr(n) ? t.removeAttributeNS(Nr, Mr(e)) : t.setAttributeNS(Nr, e, n) : Vr(n) ? t.removeAttribute(e) : t.setAttribute(e, n)
            }

            function Ie(t, e) {
                var n = e.elm,
                    r = e.data,
                    i = t.data;
                if (r.staticClass || r["class"] || i && (i.staticClass || i["class"])) {
                    var o = Zt(e),
                        a = n._transitionClasses;
                    a && (o = ne(o, re(a))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o)
                }
            }

            function Ae(t, e, n, r) {
                if (n) {
                    var i = e,
                        o = jr;
                    e = function(n) {
                        Ne(t, e, r, o), 1 === arguments.length ? i(n) : i.apply(null, arguments)
                    }
                }
                jr.addEventListener(t, e, r)
            }

            function Ne(t, e, n, r) {
                (r || jr).removeEventListener(t, e, n)
            }

            function Re(t, e) {
                if (t.data.on || e.data.on) {
                    var n = e.data.on || {},
                        r = t.data.on || {};
                    jr = e.elm, at(n, r, Ae, Ne, e.context)
                }
            }

            function Me(t, e) {
                if (t.data.domProps || e.data.domProps) {
                    var n, r, i = e.elm,
                        o = t.data.domProps || {},
                        a = e.data.domProps || {};
                    a.__ob__ && (a = e.data.domProps = d({}, a));
                    for (n in o) null == a[n] && (i[n] = "");
                    for (n in a)
                        if (r = a[n], "textContent" !== n && "innerHTML" !== n || (e.children && (e.children.length = 0), r !== o[n]))
                            if ("value" === n) {
                                i._value = r;
                                var s = null == r ? "" : String(r);
                                Ve(i, e, s) && (i.value = s)
                            } else i[n] = r
                }
            }

            function Ve(t, e, n) {
                return !t.composing && ("option" === e.tag || Xe(t, n) || De(e, n))
            }

            function Xe(t, e) {
                return document.activeElement !== t && t.value !== e
            }

            function De(t, e) {
                var n = t.elm.value,
                    i = t.elm._vModifiers;
                return i && i.number || "number" === t.elm.type ? r(n) !== r(e) : i && i.trim ? n.trim() !== e.trim() : n !== e
            }

            function Ue(t) {
                var e = Be(t.style);
                return t.staticStyle ? d(t.staticStyle, e) : e
            }

            function Be(t) {
                return Array.isArray(t) ? h(t) : "string" == typeof t ? ti(t) : t
            }

            function Fe(t, e) {
                var n, r = {};
                if (e)
                    for (var i = t; i.componentInstance;) i = i.componentInstance._vnode, i.data && (n = Ue(i.data)) && d(r, n);
                (n = Ue(t.data)) && d(r, n);
                for (var o = t; o = o.parent;) o.data && (n = Ue(o.data)) && d(r, n);
                return r
            }

            function $e(t, e) {
                var n = e.data,
                    r = t.data;
                if (n.staticStyle || n.style || r.staticStyle || r.style) {
                    var i, o, a = e.elm,
                        s = t.data.staticStyle,
                        u = t.data.style || {},
                        c = s || u,
                        l = Be(e.data.style) || {};
                    e.data.style = l.__ob__ ? d({}, l) : l;
                    var f = Fe(e, !0);
                    for (o in c) null == f[o] && ri(a, o, "");
                    for (o in f) i = f[o], i !== c[o] && ri(a, o, null == i ? "" : i)
                }
            }

            function He(t, e) {
                if (e && e.trim())
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                        return t.classList.add(e)
                    }) : t.classList.add(e);
                    else {
                        var n = " " + t.getAttribute("class") + " ";
                        n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
                    }
            }

            function ze(t, e) {
                if (e && e.trim())
                    if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                        return t.classList.remove(e)
                    }) : t.classList.remove(e);
                    else {
                        for (var n = " " + t.getAttribute("class") + " ", r = " " + e + " "; n.indexOf(r) >= 0;) n = n.replace(r, " ");
                        t.setAttribute("class", n.trim())
                    }
            }

            function We(t) {
                hi(function() {
                    hi(t)
                })
            }

            function qe(t, e) {
                (t._transitionClasses || (t._transitionClasses = [])).push(e), He(t, e)
            }

            function Ye(t, e) {
                t._transitionClasses && o(t._transitionClasses, e), ze(t, e)
            }

            function Ke(t, e, n) {
                var r = Ge(t, e),
                    i = r.type,
                    o = r.timeout,
                    a = r.propCount;
                if (!i) return n();
                var s = i === ui ? di : pi,
                    u = 0,
                    c = function() {
                        t.removeEventListener(s, l), n()
                    },
                    l = function(e) {
                        e.target === t && ++u >= a && c()
                    };
                setTimeout(function() {
                    a > u && c()
                }, o + 1), t.addEventListener(s, l)
            }

            function Ge(t, e) {
                var n, r = window.getComputedStyle(t),
                    i = r[li + "Delay"].split(", "),
                    o = r[li + "Duration"].split(", "),
                    a = Je(i, o),
                    s = r[fi + "Delay"].split(", "),
                    u = r[fi + "Duration"].split(", "),
                    c = Je(s, u),
                    l = 0,
                    d = 0;
                e === ui ? a > 0 && (n = ui, l = a, d = o.length) : e === ci ? c > 0 && (n = ci, l = c, d = u.length) : (l = Math.max(a, c), n = l > 0 ? a > c ? ui : ci : null, d = n ? n === ui ? o.length : u.length : 0);
                var f = n === ui && vi.test(r[li + "Property"]);
                return {
                    type: n,
                    timeout: l,
                    propCount: d,
                    hasTransform: f
                }
            }

            function Je(t, e) {
                for (; t.length < e.length;) t = t.concat(t);
                return Math.max.apply(null, e.map(function(e, n) {
                    return Qe(e) + Qe(t[n])
                }))
            }

            function Qe(t) {
                return 1e3 * Number(t.slice(0, -1))
            }

            function Ze(t, e) {
                var n = t.elm;
                n._leaveCb && (n._leaveCb.cancelled = !0, n._leaveCb());
                var r = en(t.data.transition);
                if (r && !n._enterCb && 1 === n.nodeType) {
                    for (var i = r.css, o = r.type, a = r.enterClass, s = r.enterToClass, u = r.enterActiveClass, c = r.appearClass, l = r.appearToClass, d = r.appearActiveClass, f = r.beforeEnter, p = r.enter, h = r.afterEnter, v = r.enterCancelled, g = r.beforeAppear, m = r.appear, b = r.afterAppear, y = r.appearCancelled, _ = hr, w = hr.$vnode; w && w.parent;) w = w.parent, _ = w.context;
                    var x = !_._isMounted || !t.isRootInsert;
                    if (!x || m || "" === m) {
                        var k = x ? c : a,
                            O = x ? d : u,
                            E = x ? l : s,
                            S = x ? g || f : f,
                            C = x && "function" == typeof m ? m : p,
                            j = x ? b || h : h,
                            T = x ? y || v : v,
                            P = i !== !1 && !Dn,
                            L = C && (C._length || C.length) > 1,
                            I = n._enterCb = nn(function() {
                                P && (Ye(n, E), Ye(n, O)), I.cancelled ? (P && Ye(n, k), T && T(n)) : j && j(n), n._enterCb = null
                            });
                        t.data.show || it(t.data.hook || (t.data.hook = {}), "insert", function() {
                            var e = n.parentNode,
                                r = e && e._pending && e._pending[t.key];
                            r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), C && C(n, I)
                        }, "transition-insert"), S && S(n), P && (qe(n, k), qe(n, O), We(function() {
                            qe(n, E), Ye(n, k), I.cancelled || L || Ke(n, o, I)
                        })), t.data.show && (e && e(), C && C(n, I)), P || L || I()
                    }
                }
            }

            function tn(t, e) {
                function n() {
                    m.cancelled || (t.data.show || ((r.parentNode._pending || (r.parentNode._pending = {}))[t.key] = t), l && l(r), v && (qe(r, s), qe(r, c), We(function() {
                        qe(r, u), Ye(r, s), m.cancelled || g || Ke(r, a, m)
                    })), d && d(r, m), v || g || m())
                }
                var r = t.elm;
                r._enterCb && (r._enterCb.cancelled = !0, r._enterCb());
                var i = en(t.data.transition);
                if (!i) return e();
                if (!r._leaveCb && 1 === r.nodeType) {
                    var o = i.css,
                        a = i.type,
                        s = i.leaveClass,
                        u = i.leaveToClass,
                        c = i.leaveActiveClass,
                        l = i.beforeLeave,
                        d = i.leave,
                        f = i.afterLeave,
                        p = i.leaveCancelled,
                        h = i.delayLeave,
                        v = o !== !1 && !Dn,
                        g = d && (d._length || d.length) > 1,
                        m = r._leaveCb = nn(function() {
                            r.parentNode && r.parentNode._pending && (r.parentNode._pending[t.key] = null), v && (Ye(r, u), Ye(r, c)), m.cancelled ? (v && Ye(r, s), p && p(r)) : (e(), f && f(r)), r._leaveCb = null
                        });
                    h ? h(n) : n()
                }
            }

            function en(t) {
                if (t) {
                    if ("object" == typeof t) {
                        var e = {};
                        return t.css !== !1 && d(e, gi(t.name || "v")), d(e, t), e
                    }
                    return "string" == typeof t ? gi(t) : void 0
                }
            }

            function nn(t) {
                var e = !1;
                return function() {
                    e || (e = !0, t())
                }
            }

            function rn(t, e) {
                e.data.show || Ze(e)
            }

            function on(t, e, n) {
                var r = e.value,
                    i = t.multiple;
                if (!i || Array.isArray(r)) {
                    for (var o, a, s = 0, u = t.options.length; u > s; s++)
                        if (a = t.options[s], i) o = b(r, sn(a)) > -1, a.selected !== o && (a.selected = o);
                        else if (m(sn(a), r)) return void(t.selectedIndex !== s && (t.selectedIndex = s));
                    i || (t.selectedIndex = -1)
                }
            }

            function an(t, e) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (m(sn(e[n]), t)) return !1;
                return !0
            }

            function sn(t) {
                return "_value" in t ? t._value : t.value
            }

            function un(t) {
                t.target.composing = !0
            }

            function cn(t) {
                t.target.composing = !1, ln(t.target, "input")
            }

            function ln(t, e) {
                var n = document.createEvent("HTMLEvents");
                n.initEvent(e, !0, !0), t.dispatchEvent(n)
            }

            function dn(t) {
                return !t.componentInstance || t.data && t.data.transition ? t : dn(t.componentInstance._vnode)
            }

            function fn(t) {
                var e = t && t.componentOptions;
                return e && e.Ctor.options["abstract"] ? fn(lt(e.children)) : t
            }

            function pn(t) {
                var e = {},
                    n = t.$options;
                for (var r in n.propsData) e[r] = t[r];
                var i = n._parentListeners;
                for (var o in i) e[En(o)] = i[o].fn;
                return e
            }

            function hn(t, e) {
                return /\d-keep-alive$/.test(e.tag) ? t("keep-alive") : null
            }

            function vn(t) {
                for (; t = t.parent;)
                    if (t.data.transition) return !0
            }

            function gn(t, e) {
                return e.key === t.key && e.tag === t.tag
            }

            function mn(t) {
                t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
            }

            function bn(t) {
                t.data.newPos = t.elm.getBoundingClientRect()
            }

            function yn(t) {
                var e = t.data.pos,
                    n = t.data.newPos,
                    r = e.left - n.left,
                    i = e.top - n.top;
                if (r || i) {
                    t.data.moved = !0;
                    var o = t.elm.style;
                    o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
                }
            }
            var _n, wn, xn = i("slot,component", !0),
                kn = Object.prototype.hasOwnProperty,
                On = /-(\w)/g,
                En = u(function(t) {
                    return t.replace(On, function(t, e) {
                        return e ? e.toUpperCase() : ""
                    })
                }),
                Sn = u(function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }),
                Cn = /([^-])([A-Z])/g,
                jn = u(function(t) {
                    return t.replace(Cn, "$1-$2").replace(Cn, "$1-$2").toLowerCase()
                }),
                Tn = Object.prototype.toString,
                Pn = "[object Object]",
                Ln = function() {
                    return !1
                },
                In = function(t) {
                    return t
                },
                An = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    devtools: !1,
                    errorHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: Ln,
                    isUnknownElement: Ln,
                    getTagNamespace: v,
                    parsePlatformTagName: In,
                    mustUseProp: Ln,
                    _assetTypes: ["component", "directive", "filter"],
                    _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
                    _maxUpdateCount: 100
                },
                Nn = /[^\w.$]/,
                Rn = "__proto__" in {},
                Mn = "undefined" != typeof window,
                Vn = Mn && window.navigator.userAgent.toLowerCase(),
                Xn = Vn && /msie|trident/.test(Vn),
                Dn = Vn && Vn.indexOf("msie 9.0") > 0,
                Un = Vn && Vn.indexOf("edge/") > 0,
                Bn = Vn && Vn.indexOf("android") > 0,
                Fn = Vn && /iphone|ipad|ipod|ios/.test(Vn),
                $n = function() {
                    return void 0 === _n && (_n = Mn || "undefined" == typeof e ? !1 : "server" === e.process.env.VUE_ENV), _n
                },
                Hn = Mn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
                zn = function() {
                    function t() {
                        r = !1;
                        var t = n.slice(0);
                        n.length = 0;
                        for (var e = 0; e < t.length; e++) t[e]()
                    }
                    var e, n = [],
                        r = !1;
                    if ("undefined" != typeof Promise && x(Promise)) {
                        var i = Promise.resolve(),
                            o = function(t) {
                                console.error(t)
                            };
                        e = function() {
                            i.then(t)["catch"](o), Fn && setTimeout(v)
                        }
                    } else if ("undefined" == typeof MutationObserver || !x(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) e = function() {
                        setTimeout(t, 0)
                    };
                    else {
                        var a = 1,
                            s = new MutationObserver(t),
                            u = document.createTextNode(String(a));
                        s.observe(u, {
                            characterData: !0
                        }), e = function() {
                            a = (a + 1) % 2, u.data = String(a)
                        }
                    }
                    return function(t, i) {
                        var o;
                        return n.push(function() {
                            t && t.call(i), o && o(i)
                        }), r || (r = !0, e()), t || "undefined" == typeof Promise ? void 0 : new Promise(function(t) {
                            o = t
                        })
                    }
                }();
            wn = "undefined" != typeof Set && x(Set) ? Set : function() {
                function t() {
                    this.set = Object.create(null)
                }
                return t.prototype.has = function(t) {
                    return this.set[t] === !0
                }, t.prototype.add = function(t) {
                    this.set[t] = !0
                }, t.prototype.clear = function() {
                    this.set = Object.create(null)
                }, t
            }();
            var Wn, qn = v,
                Yn = 0,
                Kn = function() {
                    this.id = Yn++, this.subs = []
                };
            Kn.prototype.addSub = function(t) {
                this.subs.push(t)
            }, Kn.prototype.removeSub = function(t) {
                o(this.subs, t)
            }, Kn.prototype.depend = function() {
                Kn.target && Kn.target.addDep(this)
            }, Kn.prototype.notify = function() {
                for (var t = this.subs.slice(), e = 0, n = t.length; n > e; e++) t[e].update()
            }, Kn.target = null;
            var Gn = [],
                Jn = Array.prototype,
                Qn = Object.create(Jn);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
                var e = Jn[t];
                _(Qn, t, function() {
                    for (var n = arguments, r = arguments.length, i = new Array(r); r--;) i[r] = n[r];
                    var o, a = e.apply(this, i),
                        s = this.__ob__;
                    switch (t) {
                        case "push":
                            o = i;
                            break;
                        case "unshift":
                            o = i;
                            break;
                        case "splice":
                            o = i.slice(2)
                    }
                    return o && s.observeArray(o), s.dep.notify(), a
                })
            });
            var Zn = Object.getOwnPropertyNames(Qn),
                tr = {
                    shouldConvert: !0,
                    isSettingProps: !1
                },
                er = function(t) {
                    if (this.value = t, this.dep = new Kn, this.vmCount = 0, _(t, "__ob__", this), Array.isArray(t)) {
                        var e = Rn ? E : S;
                        e(t, Qn, Zn), this.observeArray(t)
                    } else this.walk(t)
                };
            er.prototype.walk = function(t) {
                for (var e = Object.keys(t), n = 0; n < e.length; n++) j(t, e[n], t[e[n]])
            }, er.prototype.observeArray = function(t) {
                for (var e = 0, n = t.length; n > e; e++) C(t[e])
            };
            var nr = An.optionMergeStrategies;
            nr.data = function(t, e, n) {
                return n ? t || e ? function() {
                    var r = "function" == typeof e ? e.call(n) : e,
                        i = "function" == typeof t ? t.call(n) : void 0;
                    return r ? I(r, i) : i
                } : void 0 : e ? "function" != typeof e ? t : t ? function() {
                    return I(e.call(this), t.call(this))
                } : e : t
            }, An._lifecycleHooks.forEach(function(t) {
                nr[t] = A
            }), An._assetTypes.forEach(function(t) {
                nr[t + "s"] = N
            }), nr.watch = function(t, e) {
                if (!e) return t;
                if (!t) return e;
                var n = {};
                d(n, t);
                for (var r in e) {
                    var i = n[r],
                        o = e[r];
                    i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : [o]
                }
                return n
            }, nr.props = nr.methods = nr.computed = function(t, e) {
                if (!e) return t;
                if (!t) return e;
                var n = Object.create(null);
                return d(n, t), d(n, e), n
            };
            var rr = function(t, e) {
                    return void 0 === e ? t : e
                },
                ir = Object.freeze({
                    defineReactive: j,
                    _toString: n,
                    toNumber: r,
                    makeMap: i,
                    isBuiltInTag: xn,
                    remove: o,
                    hasOwn: a,
                    isPrimitive: s,
                    cached: u,
                    camelize: En,
                    capitalize: Sn,
                    hyphenate: jn,
                    bind: c,
                    toArray: l,
                    extend: d,
                    isObject: f,
                    isPlainObject: p,
                    toObject: h,
                    noop: v,
                    no: Ln,
                    identity: In,
                    genStaticKeys: g,
                    looseEqual: m,
                    looseIndexOf: b,
                    isReserved: y,
                    def: _,
                    parsePath: w,
                    hasProto: Rn,
                    inBrowser: Mn,
                    UA: Vn,
                    isIE: Xn,
                    isIE9: Dn,
                    isEdge: Un,
                    isAndroid: Bn,
                    isIOS: Fn,
                    isServerRendering: $n,
                    devtools: Hn,
                    nextTick: zn,
                    get _Set() {
                        return wn
                    },
                    mergeOptions: V,
                    resolveAsset: X,
                    get warn() {
                        return qn
                    },
                    get formatComponentName() {
                        return Wn
                    },
                    validateProp: D
                }),
                or = function(t, e, n, r, i, o, a) {
                    this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.functionalContext = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1
                },
                ar = {
                    child: {}
                };
            ar.child.get = function() {
                return this.componentInstance
            }, Object.defineProperties(or.prototype, ar);
            var sr, ur = function() {
                    var t = new or;
                    return t.text = "", t.isComment = !0, t
                },
                cr = {
                    init: K,
                    prepatch: G,
                    insert: J,
                    destroy: Q
                },
                lr = Object.keys(cr),
                dr = u(function(t) {
                    var e = "~" === t.charAt(0);
                    t = e ? t.slice(1) : t;
                    var n = "!" === t.charAt(0);
                    return t = n ? t.slice(1) : t, {
                        name: t,
                        once: e,
                        capture: n
                    }
                }),
                fr = 1,
                pr = 2,
                hr = null,
                vr = [],
                gr = {},
                mr = !1,
                br = !1,
                yr = 0,
                _r = 0,
                wr = function(t, e, n, r) {
                    this.vm = t, t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++_r, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new wn, this.newDepIds = new wn, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = w(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get()
                };
            wr.prototype.get = function() {
                k(this);
                var t = this.getter.call(this.vm, this.vm);
                return this.deep && jt(t), O(), this.cleanupDeps(), t
            }, wr.prototype.addDep = function(t) {
                var e = t.id;
                this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
            }, wr.prototype.cleanupDeps = function() {
                for (var t = this, e = this.deps.length; e--;) {
                    var n = t.deps[e];
                    t.newDepIds.has(n.id) || n.removeSub(t)
                }
                var r = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0
            }, wr.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : Ct(this)
            }, wr.prototype.run = function() {
                if (this.active) {
                    var t = this.get();
                    if (t !== this.value || f(t) || this.deep) {
                        var e = this.value;
                        if (this.value = t, this.user) try {
                            this.cb.call(this.vm, t, e)
                        } catch (n) {
                            if (!An.errorHandler) throw n;
                            An.errorHandler.call(null, n, this.vm)
                        } else this.cb.call(this.vm, t, e)
                    }
                }
            }, wr.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1
            }, wr.prototype.depend = function() {
                for (var t = this, e = this.deps.length; e--;) t.deps[e].depend()
            }, wr.prototype.teardown = function() {
                var t = this;
                if (this.active) {
                    this.vm._isBeingDestroyed || o(this.vm._watchers, this);
                    for (var e = this.deps.length; e--;) t.deps[e].removeSub(t);
                    this.active = !1
                }
            };
            var xr = new wn,
                kr = {
                    enumerable: !0,
                    configurable: !0,
                    get: v,
                    set: v
                },
                Or = 0;
            Ut($t), Xt($t), wt($t), kt($t), vt($t);
            var Er = [String, RegExp],
                Sr = {
                    name: "keep-alive",
                    "abstract": !0,
                    props: {
                        include: Er,
                        exclude: Er
                    },
                    created: function() {
                        this.cache = Object.create(null)
                    },
                    destroyed: function() {
                        var t = this;
                        for (var e in this.cache) Jt(t.cache[e])
                    },
                    watch: {
                        include: function(t) {
                            Gt(this.cache, function(e) {
                                return Kt(t, e)
                            })
                        },
                        exclude: function(t) {
                            Gt(this.cache, function(e) {
                                return !Kt(t, e)
                            })
                        }
                    },
                    render: function() {
                        var t = lt(this.$slots["default"]),
                            e = t && t.componentOptions;
                        if (e) {
                            var n = Yt(e);
                            if (n && (this.include && !Kt(this.include, n) || this.exclude && Kt(this.exclude, n))) return t;
                            var r = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;
                            this.cache[r] ? t.componentInstance = this.cache[r].componentInstance : this.cache[r] = t, t.data.keepAlive = !0
                        }
                        return t
                    }
                },
                Cr = {
                    KeepAlive: Sr
                };
            Qt($t), Object.defineProperty($t.prototype, "$isServer", {
                get: $n
            }), $t.version = "2.1.10";
            var jr, Tr, Pr = i("input,textarea,option,select"),
                Lr = function(t, e, n) {
                    return "value" === n && Pr(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
                },
                Ir = i("contenteditable,draggable,spellcheck"),
                Ar = i("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                Nr = "http://www.w3.org/1999/xlink",
                Rr = function(t) {
                    return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
                },
                Mr = function(t) {
                    return Rr(t) ? t.slice(6, t.length) : ""
                },
                Vr = function(t) {
                    return null == t || t === !1
                },
                Xr = {
                    svg: "http://www.w3.org/2000/svg",
                    math: "http://www.w3.org/1998/Math/MathML"
                },
                Dr = i("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
                Ur = i("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                Br = function(t) {
                    return Dr(t) || Ur(t)
                },
                Fr = Object.create(null),
                $r = Object.freeze({
                    createElement: se,
                    createElementNS: ue,
                    createTextNode: ce,
                    createComment: le,
                    insertBefore: de,
                    removeChild: fe,
                    appendChild: pe,
                    parentNode: he,
                    nextSibling: ve,
                    tagName: ge,
                    setTextContent: me,
                    setAttribute: be
                }),
                Hr = {
                    create: function(t, e) {
                        ye(e)
                    },
                    update: function(t, e) {
                        t.data.ref !== e.data.ref && (ye(t, !0), ye(e))
                    },
                    destroy: function(t) {
                        ye(t, !0)
                    }
                },
                zr = new or("", {}, []),
                Wr = ["create", "activate", "update", "remove", "destroy"],
                qr = {
                    create: Ee,
                    update: Ee,
                    destroy: function(t) {
                        Ee(t, zr)
                    }
                },
                Yr = Object.create(null),
                Kr = [Hr, qr],
                Gr = {
                    create: Pe,
                    update: Pe
                },
                Jr = {
                    create: Ie,
                    update: Ie
                },
                Qr = {
                    create: Re,
                    update: Re
                },
                Zr = {
                    create: Me,
                    update: Me
                },
                ti = u(function(t) {
                    var e = {},
                        n = /;(?![^(]*\))/g,
                        r = /:(.+)/;
                    return t.split(n).forEach(function(t) {
                        if (t) {
                            var n = t.split(r);
                            n.length > 1 && (e[n[0].trim()] = n[1].trim())
                        }
                    }), e
                }),
                ei = /^--/,
                ni = /\s*!important$/,
                ri = function(t, e, n) {
                    ei.test(e) ? t.style.setProperty(e, n) : ni.test(n) ? t.style.setProperty(e, n.replace(ni, ""), "important") : t.style[oi(e)] = n
                },
                ii = ["Webkit", "Moz", "ms"],
                oi = u(function(t) {
                    if (Tr = Tr || document.createElement("div"), t = En(t), "filter" !== t && t in Tr.style) return t;
                    for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < ii.length; n++) {
                        var r = ii[n] + e;
                        if (r in Tr.style) return r
                    }
                }),
                ai = {
                    create: $e,
                    update: $e
                },
                si = Mn && !Dn,
                ui = "transition",
                ci = "animation",
                li = "transition",
                di = "transitionend",
                fi = "animation",
                pi = "animationend";
            si && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (li = "WebkitTransition", di = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (fi = "WebkitAnimation", pi = "webkitAnimationEnd"));
            var hi = Mn && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
                vi = /\b(transform|all)(,|$)/,
                gi = u(function(t) {
                    return {
                        enterClass: t + "-enter",
                        leaveClass: t + "-leave",
                        appearClass: t + "-enter",
                        enterToClass: t + "-enter-to",
                        leaveToClass: t + "-leave-to",
                        appearToClass: t + "-enter-to",
                        enterActiveClass: t + "-enter-active",
                        leaveActiveClass: t + "-leave-active",
                        appearActiveClass: t + "-enter-active"
                    }
                }),
                mi = Mn ? {
                    create: rn,
                    activate: rn,
                    remove: function(t, e) {
                        t.data.show ? e() : tn(t, e)
                    }
                } : {},
                bi = [Gr, Jr, Qr, Zr, ai, mi],
                yi = bi.concat(Kr),
                _i = Oe({
                    nodeOps: $r,
                    modules: yi
                });
            Dn && document.addEventListener("selectionchange", function() {
                var t = document.activeElement;
                t && t.vmodel && ln(t, "input")
            });
            var wi = {
                    inserted: function(t, e, n) {
                        if ("select" === n.tag) {
                            var r = function() {
                                on(t, e, n.context)
                            };
                            r(), (Xn || Un) && setTimeout(r, 0)
                        } else("textarea" === n.tag || "text" === t.type) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (Bn || (t.addEventListener("compositionstart", un), t.addEventListener("compositionend", cn)), Dn && (t.vmodel = !0)))
                    },
                    componentUpdated: function(t, e, n) {
                        if ("select" === n.tag) {
                            on(t, e, n.context);
                            var r = t.multiple ? e.value.some(function(e) {
                                return an(e, t.options)
                            }) : e.value !== e.oldValue && an(e.value, t.options);
                            r && ln(t, "change")
                        }
                    }
                },
                xi = {
                    bind: function(t, e, n) {
                        var r = e.value;
                        n = dn(n);
                        var i = n.data && n.data.transition,
                            o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                        r && i && !Dn ? (n.data.show = !0, Ze(n, function() {
                            t.style.display = o
                        })) : t.style.display = r ? o : "none"
                    },
                    update: function(t, e, n) {
                        var r = e.value,
                            i = e.oldValue;
                        if (r !== i) {
                            n = dn(n);
                            var o = n.data && n.data.transition;
                            o && !Dn ? (n.data.show = !0, r ? Ze(n, function() {
                                t.style.display = t.__vOriginalDisplay
                            }) : tn(n, function() {
                                t.style.display = "none"
                            })) : t.style.display = r ? t.__vOriginalDisplay : "none"
                        }
                    },
                    unbind: function(t, e, n, r, i) {
                        i || (t.style.display = t.__vOriginalDisplay)
                    }
                },
                ki = {
                    model: wi,
                    show: xi
                },
                Oi = {
                    name: String,
                    appear: Boolean,
                    css: Boolean,
                    mode: String,
                    type: String,
                    enterClass: String,
                    leaveClass: String,
                    enterToClass: String,
                    leaveToClass: String,
                    enterActiveClass: String,
                    leaveActiveClass: String,
                    appearClass: String,
                    appearActiveClass: String,
                    appearToClass: String
                },
                Ei = {
                    name: "transition",
                    props: Oi,
                    "abstract": !0,
                    render: function(t) {
                        var e = this,
                            n = this.$slots["default"];
                        if (n && (n = n.filter(function(t) {
                            return t.tag
                        }), n.length)) {
                            var r = this.mode,
                                i = n[0];
                            if (vn(this.$vnode)) return i;
                            var o = fn(i);
                            if (!o) return i;
                            if (this._leaving) return hn(t, i);
                            var a = "__transition-" + this._uid + "-",
                                u = o.key = null == o.key ? a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key,
                                c = (o.data || (o.data = {})).transition = pn(this),
                                l = this._vnode,
                                f = fn(l);
                            if (o.data.directives && o.data.directives.some(function(t) {
                                return "show" === t.name
                            }) && (o.data.show = !0), f && f.data && !gn(o, f)) {
                                var p = f && (f.data.transition = d({}, c));
                                if ("out-in" === r) return this._leaving = !0, it(p, "afterLeave", function() {
                                    e._leaving = !1, e.$forceUpdate()
                                }, u), hn(t, i);
                                if ("in-out" === r) {
                                    var h, v = function() {
                                        h()
                                    };
                                    it(c, "afterEnter", v, u), it(c, "enterCancelled", v, u), it(p, "delayLeave", function(t) {
                                        h = t
                                    }, u)
                                }
                            }
                            return i
                        }
                    }
                },
                Si = d({
                    tag: String,
                    moveClass: String
                }, Oi);
            delete Si.mode;
            var Ci = {
                    props: Si,
                    render: function(t) {
                        for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots["default"] || [], o = this.children = [], a = pn(this), s = 0; s < i.length; s++) {
                            var u = i[s];
                            if (u.tag)
                                if (null != u.key && 0 !== String(u.key).indexOf("__vlist")) o.push(u), n[u.key] = u, (u.data || (u.data = {})).transition = a;
                                else;
                        }
                        if (r) {
                            for (var c = [], l = [], d = 0; d < r.length; d++) {
                                var f = r[d];
                                f.data.transition = a, f.data.pos = f.elm.getBoundingClientRect(), n[f.key] ? c.push(f) : l.push(f)
                            }
                            this.kept = t(e, null, c), this.removed = l
                        }
                        return t(e, null, o)
                    },
                    beforeUpdate: function() {
                        this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
                    },
                    updated: function() {
                        var t = this.prevChildren,
                            e = this.moveClass || (this.name || "v") + "-move";
                        if (t.length && this.hasMove(t[0].elm, e)) {
                            t.forEach(mn), t.forEach(bn), t.forEach(yn);
                            document.body.offsetHeight;
                            t.forEach(function(t) {
                                if (t.data.moved) {
                                    var n = t.elm,
                                        r = n.style;
                                    qe(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(di, n._moveCb = function i(t) {
                                        (!t || /transform$/.test(t.propertyName)) && (n.removeEventListener(di, i), n._moveCb = null, Ye(n, e))
                                    })
                                }
                            })
                        }
                    },
                    methods: {
                        hasMove: function(t, e) {
                            if (!si) return !1;
                            if (null != this._hasMove) return this._hasMove;
                            qe(t, e);
                            var n = Ge(t);
                            return Ye(t, e), this._hasMove = n.hasTransform
                        }
                    }
                },
                ji = {
                    Transition: Ei,
                    TransitionGroup: Ci
                };
            $t.config.isUnknownElement = oe, $t.config.isReservedTag = Br, $t.config.getTagNamespace = ie, $t.config.mustUseProp = Lr, d($t.options.directives, ki), d($t.options.components, ji), $t.prototype.__patch__ = Mn ? _i : v, $t.prototype.$mount = function(t, e) {
                return t = t && Mn ? ae(t) : void 0, this._mount(t, e)
            }, setTimeout(function() {
                An.devtools && Hn && Hn.emit("init", $t)
            }, 0), t.exports = $t
        }).call(e, n(29))
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(22),
            o = r(i),
            a = n(43),
            s = r(a),
            u = n(8),
            c = n(20),
            l = n(33),
            d = n(24);
        u.autoInit(s["default"]);
        var f = new o["default"],
            p = {
                INFO: 0,
                WARN: 1,
                ERROR: 2
            },
            h = {
                created: function() {
                    this.$eventBus = f
                },
                methods: {
                    toast: function v(t, e) {
                        var n = document.createElement("div"),
                            v = document.createElement("p");
                        n.className = "toast-wrap", n.appendChild(v), v.className = "toast", v.innerHTML = t, document.body.appendChild(n), setTimeout(function() {
                            document.body.removeChild(n), e && e()
                        }, 2e3)
                    },
                    messageBox: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments[2];
                        window.dingtalk.window.openMsgBox("", t, e[0] || "Ok", e[1] || "", function(t, e) {
                            n && n(e)
                        })
                    },
                    signLiveUrl: function(t, e, n) {
                        var r = this;
                        return new Promise(function(i, o) {
                            window.dingtalk.grouplive.signLiveUrl(t, e, n, function(t, a) {
                                return t ? (r.localLog("ERROR", "signLiveUrl faild: " + JSON.stringify(t) + "; live uuid=" + e + " , url=" + n), void o(t)) : (r.localLog("INFO", "signLiveUrl success: live uuid=" + e + " , url=" + n), void i(a.replace("http://", "//")))
                            })
                        })
                    },
                    signPlaybackUrl: function(t, e, n, r) {
                        var i = this;
                        return new Promise(function(o, a) {
                            window.dingtalk.grouplive.signPlaybackUrl(t, e, n, r, function(t, r) {
                                return t ? (i.localLog("ERROR", "signPlaybackUrl faild: " + JSON.stringify(t) + "; live uuid=" + e + " , url=" + n), void a(t)) : (i.localLog("INFO", "signPlaybackUrl success: live uuid=" + e + " , url=" + n), void o(r.replace("http://", "//")))
                            })
                        })
                    },
                    generatorPlayUrlArr: function(t) {
                        for (var e = Object.keys(t), n = [], r = 0, i = e.length; i > r; r++) {
                            var o = e[r];
                            t[o] && ("liveUrlUltraLow" === o ? n.push({
                                name: u.i18next.t("dt_lv_live_bit_rate_1"),
                                url: t[o],
                                enumNumber: d.VIDDEO_CLARITY_ENUM.ULTRALOW
                            }) : "liveUrlVeryLow" === o ? n.push({
                                name: u.i18next.t("dt_lv_live_bit_rate_2"),
                                url: t[o],
                                enumNumber: d.VIDDEO_CLARITY_ENUM.VERYLOW
                            }) : "liveUrlLow" === o ? n.push({
                                name: u.i18next.t("dt_lv_live_bit_rate_3"),
                                url: t[o],
                                enumNumber: d.VIDDEO_CLARITY_ENUM.LOW
                            }) : "liveUrlNormal" === o ? n.push({
                                name: u.i18next.t("dt_lv_live_bit_rate_4"),
                                url: t[o],
                                enumNumber: d.VIDDEO_CLARITY_ENUM.NORMAL
                            }) : "liveUrlHigh" === o && n.push({
                                name: u.i18next.t("dt_lv_live_bit_rate_5"),
                                url: t[o],
                                enumNumber: d.VIDDEO_CLARITY_ENUM.HIGH
                            }))
                        }
                        return n
                    },
                    addQuery: function(t, e, n) {
                        var r = encodeURIComponent(n);
                        return t.indexOf("?") > -1 ? t + "&" + e + "=" + r : t + "?" + e + "=" + r
                    },
                    getLiveStats: function(t, e) {
                        var n = this;
                        return new Promise(function(r, i) {
                            return window.dingtalk && window.dingtalk.grouplive ? void window.dingtalk.grouplive.getLiveStats(t, e, function(t, e) {
                                return t ? (n.toast(t.message), void i(t.message)) : void r(e)
                            }) : void i("no dingtalk")
                        })
                    },
                    getData: function(t, e, n) {
                        var r = this;
                        return new Promise(function(i, o) {
                            if (!window.dingtalk || !window.dingtalk.grouplive) return void o("no dingtalk");
                            var a = "live" === r.type;
                            r.localLog("INFO", "start to getData, isLive=" + a + " and live uuid=" + e), window.dingtalk.grouplive.getLivePageInfo(t, e, n, a, function(n, s) {
                                if (n) return r.toast(n.message), void o(n.message);
                                var u = s.anchorUserProfile,
                                    c = s.liveInfo,
                                    l = c.liveType;
                                if (r.coverUrl = c.coverUrl, r.title = c.title, r.avatarUrl = u.avatarUrl, r.displayName = u.displayName, r._key = c.key, c.enableLinkMic && (r.enableLinkMic = c.enableLinkMic), r.liveType = l, r.localLog("INFO", "getData success: live uuid=" + e + ", isLive=" + a + ", liveTitle=" + r.title + ", displayName=" + r.displayName), a) {
                                    var d = c.playUrl;
                                    if (c.liveUrlUltraLow) {
                                        var f = c.liveUrlHigh,
                                            p = c.liveUrlNormal,
                                            h = c.liveUrlLow,
                                            v = c.liveUrlVeryLow,
                                            g = c.liveUrlUltraLow,
                                            m = c.playUrl;
                                        r.liveUrlVO = {
                                            liveUrlHigh: f,
                                            liveUrlNormal: p,
                                            liveUrlLow: h,
                                            liveUrlVeryLow: v,
                                            liveUrlUltraLow: g,
                                            playUrl: m
                                        }, r.playUrlArr = r.generatorPlayUrlArr(r.liveUrlVO), r.currentUrlVO ? d = r.currentUrlVO.url : (r.currentUrlVO = r.playUrlArr[0] ? r.playUrlArr[0] : null, f ? d = f : h && (d = h))
                                    }
                                    r.signLiveUrl(t, e, d).then(function(t) {
                                        return r.playUrl = t
                                    })["catch"](function(t) {
                                        return r.toast(t.message)
                                    }).then(function(t) {
                                        i(s)
                                    })
                                } else {
                                    var b = c.datetime,
                                        y = c.duration,
                                        _ = c.viewerShareType;
                                    r.viewerShareType = _, b && y && (r.liveDatetime = b, dingtalk.grouplive.getLiveBarrage && (r.liveDatetime = parseInt(b) + y + "")), r.signPlaybackUrl(t, e, c.playUrl, r._key).then(function(t) {
                                        return r.playUrl = t
                                    })["catch"](function(t) {
                                        return r.toast(t.message)
                                    }).then(function(t) {
                                        i(s)
                                    })
                                }
                            })
                        })
                    },
                    bindLog: function(t, e, n) {
                        var r = this;
                        n = n || 1;
                        var i = this.genUuid();
                        this.startTimingV2(t, e, n, i), window.addEventListener("beforeunload", function(o) {
                            r.stopTimingV2(t, e, n, i)
                        })
                    },
                    bindOverEvent: function(t, e, n) {
                        var r = this;
                        window.dingtalk && window.dingtalk.grouplive && dingtalk.event.register(function(i, o) {
                            if ("live.statusChanged" === i && (o.cid == t && o.uuid == e && "stopped" == o.status && (t = encodeURIComponent(t), e = encodeURIComponent(e), dingtalk.window.openModalWithLocalPage("", "liveDetail.html?cid=" + t + "&uuid=" + e + "&anchorId=" + n + "&from=liveover", {
                                height: 588,
                                width: 420
                            })), console.log("live.statusChanged:: eventData %o", o)), "live.endImmediately" === i && o.cid === t && o.uuid === e && (r.globalHasEndedLive = !0), o && o.hasOwnProperty("liveUuid") && o.liveUuid === e && ("live.viewsCountChanged" === i && r.viewsCountChanged && r.viewsCountChanged(o), "live.likesCountChanged" === i && (r.likesCountChanged && r.likesCountChanged(o), r.$eventBus.$emit("video:like")), "live.videoStreamBreak" === i && (r.videoStreamBreak && r.videoStreamBreak(), r.addBarrageMessage && r.addBarrageMessage({
                                username: "",
                                content: u.i18next.t("pc_grouplive_live_player_status_anchors_leave"),
                                type: 0
                            }), r.isFirstTimePlay && (r.isFirstTimePlay = !1), r.$eventBus.$emit("video:pause")), "live.videoStreamRestore" === i && (r.videoStreamRestore && r.videoStreamRestore(), r.addBarrageMessage && !r.isFirstTimePlay && r.addBarrageMessage({
                                username: "",
                                content: u.i18next.t("pc_grouplive_live_player_status_anchors_back"),
                                type: 0
                            }))), "im.conversation.disband" === i && ("live" === r.type ? r.messageText = u.i18next.t("pc_grouplive_disband") : r.messageText = u.i18next.t("pc_grouplive_playback_disband"), o.cId && o.cId === t && (r.showMessage = !0, r.$eventBus.$emit("video:pause"), console.log("im.conversation.disband:: eventData %o", o))), "im.conversation.kickedStatusChange" === i && ("live" === r.type ? r.messageText = u.i18next.t("pc_grouplive_kicked") : r.messageText = u.i18next.t("pc_grouplive_playback_kicked"), o.cId && o.cId === t && (r.showMessage = !0, r.$eventBus.$emit("video:pause"), console.log("im.conversation.kickedStatusChange:: eventData %o", o))), "im.conversation.quit" === i && ("live" === r.type ? r.messageText = u.i18next.t("pc_grouplive_quit") : r.messageText = u.i18next.t("pc_grouplive_playback_quit"), o.cId && o.cId === t && (r.showMessage = !0, r.$eventBus.$emit("video:pause"), console.log("im.conversation.quit:: eventData %o", o))), "live.barrageMesasge" === i)
                                if (r.showCrossBarrage) {
                                    if (r.canvasBarrage) {
                                        var a = o.username + ": " + o.content;
                                        r.canvasBarrage.add({
                                            value: a
                                        })
                                    }
                                } else r.addBarrageMessage && r.addBarrageMessage({
                                    username: o.username,
                                    content: o.content
                                });
                                "live.applyCountChange" === i && (r.applyCountChange && r.applyCountChange(o), console.log("live.applyCountChange:: eventData %o", o))
                        })
                    },
                    localLog: function(t, e) {
                        window.dingtalk && window.dingtalk.util.log && (e = "【GroupLive】" + e, dingtalk.util.log(p[t], e))
                    },
                    vipAlarm: function(t, e) {
                        var n = 6004,
                            r = "live";
                        if (window.dingtalk && window.dingtalk.util.vipAlarm) {
                            var i = /DingTalk\((\d+\.\d+\.\d+)/,
                                o = "4.3.5",
                                a = !1;
                            try {
                                var s = i.exec(window.navigator.userAgent)[1];
                                a = c.compareVersion(o, s, !0)
                            } catch (u) {}
                            a && (t = t || "Play Live Failed", e = e || [], window.dingtalk.util.vipAlarm(r, n, t, e))
                        }
                    },
                    liveToggleFullScreen: function() {
                        console.log("toggleFullScreen"), window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.liveToggleFullScreen && window.dingtalk.grouplive.liveToggleFullScreen()
                    },
                    applyLink: function(t, e) {
                        return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.applyLink ? new Promise(function(n, r) {
                            window.dingtalk.grouplive.applyLink(t, e, function(t, e) {
                                return t ? void r(t) : void n(e)
                            })
                        }) : Promise.reject()
                    },
                    cancelApplyLink: function(t, e) {
                        return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.cancelApplyLink ? new Promise(function(n, r) {
                            window.dingtalk.grouplive.cancelApplyLink(t, e, function(t, e) {
                                return t ? void r(t) : void n(e)
                            })
                        }) : Promise.reject()
                    },
                    getApplyLinkData: function(t, e) {
                        return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getApplyLinkData ? new Promise(function(n, r) {
                            window.dingtalk.grouplive.getApplyLinkData(t, e, function(t, e) {
                                return t ? void r(t) : void n(e)
                            })
                        }) : Promise.reject()
                    },
                    startTimingV2: function(t, e, n, r) {
                        var i = this;
                        this.continueTimingTimer && clearInterval(this.continueTimingTimer), l.commonRpc(l.apiList.startTimingV2, {}, [{
                            cid: t,
                            uuid: e,
                            type: n,
                            transId: r
                        }]).then(function(o) {
                            if (o) {
                                var a = o.heartbeatIntervalSeconds;
                                a && (i.continueTimingTimer = setInterval(function() {
                                    l.commonRpc(l.apiList.continueTiming, {}, [{
                                        cid: t,
                                        uuid: e,
                                        type: n,
                                        transId: r
                                    }])
                                }, 1e3 * a))
                            }
                        })
                    },
                    stopTimingV2: function(t, e, n, r) {
                        this.continueTimingTimer && clearInterval(this.continueTimingTimer), l.commonRpc(l.apiList.endTimingV2, {}, [{
                            cid: t,
                            uuid: e,
                            type: n,
                            transId: r
                        }])
                    },
                    genUuid: function(t, e) {
                        var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                            r = [],
                            i = void 0;
                        if (e = e || n.length, t)
                            for (i = 0; t > i; i++) r[i] = n[0 | Math.random() * e];
                        else {
                            var o = void 0;
                            for (r[8] = r[13] = r[18] = r[23] = "-", r[14] = "4", i = 0; 36 > i; i++) r[i] || (o = 0 | 16 * Math.random(), r[i] = n[19 == i ? 3 & o | 8 : o])
                        }
                        return r.join("")
                    },
                    isFirstTimeUserApplyLinkFunc: function() {
                        return window.dingtalk.grouplive.hasApplied ? new Promise(function(t, e) {
                            window.dingtalk.grouplive.hasApplied(function(n, r) {
                                return n ? void e(n) : void t(r)
                            })
                        }) : Promise.reject()
                    },
                    setNativeHasApplied: function() {
                        window.dingtalk.grouplive.setApplied && window.dingtalk.grouplive.setApplied()
                    },
                    recordLiveQuota: function(t, e, n) {
                        window.dingtalk.grouplive.liveStat && window.dingtalk.grouplive.liveStat(t, e, n, function(t) {})
                    },
                    startWatching: function(t, e, n) {
                        window.dingtalk.grouplive && window.dingtalk.grouplive.startWatching && window.dingtalk.grouplive.startWatching(t, e, n, function(t, e) {})
                    },
                    getLiveBarrage: function(t, e, n) {
                        return new Promise(function(r, i) {
                            return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getLiveBarrage ? void window.dingtalk.grouplive.getLiveBarrage(t, e, n, function(t, e) {
                                t && i(t), r(e)
                            }) : void r([])
                        })
                    },
                    getPlaybackBarrage: function(t, e, n) {
                        var r = this;
                        return new Promise(function(i, o) {
                            return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getPlaybackBarrage ? void window.dingtalk.grouplive.getPlaybackBarrage(t, e, n, function(a, s) {
                                if (a) o(a), r.localLog("INFO", "getPlaybackBarrage failed: [cid]" + t + ",[msgTime]" + e + ",[count]" + n);
                                else {
                                    i(s);
                                    var u = s.msgs,
                                        c = u.length || 0;
                                    r.localLog("INFO", "getPlaybackBarrage success: [cid]" + t + ",[msgTime]" + e + ",[count]" + n + ",[result length]" + c)
                                }
                            }) : void i({
                                end: !0,
                                msgs: []
                            })
                        })
                    },
                    getLiveLatestMessage: function(t, e, n) {
                        var r = this;
                        return new Promise(function(i, o) {
                            return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getLiveLatestMessage ? void window.dingtalk.grouplive.getLiveLatestMessage(t, e, n, function(a, s) {
                                if (a) o(a), r.localLog("INFO", "getLiveLatestMessage failed: [cid]" + t + ",[msgTime]" + e + ",[count]" + n);
                                else {
                                    i(s);
                                    var u = s.length || 0;
                                    r.localLog("INFO", "getLiveLatestMessage success: [cid]" + t + ",[msgTime]" + e + ",[count]" + n + ",[result length]" + u)
                                }
                            }) : void i([])
                        })
                    },
                    getLiveSignedPlayUrl: function(t, e) {
                        var n = this;
                        return new Promise(function(r, i) {
                            return window.dingtalk && window.dingtalk.grouplive && window.dingtalk.grouplive.getLivePlayUrl ? void window.dingtalk.grouplive.getLivePlayUrl(t, e, function(t, o) {
                                if (t) i(t), n.localLog("INFO", "getLivePlayUrl failed: live uuid=" + e);
                                else {
                                    var a = o.signedPlayUrl;
                                    a && (n.playUrl = a.replace("http://", "//")), r(a), n.localLog("INFO", "getLivePlayUrl success: live uuid=" + e)
                                }
                            }) : void i("no dingtalk.grouplive.getLivePlayUrl")
                        })
                    }
                }
            };
        e["default"] = h
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.LIVE_OPEN_CODE = {
            OPEN_LIVE_SUCCESS: 0,
            OPEN_LIVE_PAUSE: 1,
            NETWORK_TIMEOUT: 2,
            CEF_NOT_SUPPORT_FLV: 3,
            NETWORK_NO_SOURCE: 4,
            OPEN_LIVE_OTHERS: 49
        }, e.LIVE_ERROR_CODE = {
            LIVE_SUCCESS: 0,
            NETWORK_TIMEOUT: 1,
            NETWORK_NO_SOURCE: 2,
            CEF_NOT_SUPPORT_FLV: 3,
            OTHERS_ERROR: 49
        }, e.LIVE_TYPE = {
            LIVE: 1,
            PLAYBACK: 2
        }, e.MAX_BARRAGE_PAGE_SIZE = 20, e.LATEST_LIVE_BARRAGE_COUNT = 10, e.MAX_BARRAGE_COUNT = 500, e.VIDDEO_CLARITY_ENUM = {
            ULTRALOW: 4,
            VERYLOW: 3,
            LOW: 2,
            NORMAL: 1,
            HIGH: 0,
            OTHERS: 999
        }, e.LIVE_OPEN_SUCCESS_CODE = {
            OPEN_LIVE_SUCCESS: 1,
            OPEN_LIVE_FAIL: 0
        }, e.PUBLIC_GROUP_LIVE_TYPE = {
            PRIVATE: 0,
            PUBLIC: 1
        }
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var r = function() {
            return "function" == typeof Symbol && Symbol.observable || "@@observable"
        }()
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t
        }
        e.a = r
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return n.lift(new a(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e) {
                    this.predicate = t, this.thisArg = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.predicate, this.thisArg))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.predicate = n, i.thisArg = r, i.count = 0, i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.predicate.call(this.thisArg, t, this.count++)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    e && this.destination.next(t)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                var r;
                if (r = "function" == typeof t ? t : function() {
                    return t
                }, "function" == typeof e) return n.lift(new o(r, e));
                var a = Object.create(n, i.b);
                return a.source = n, a.subjectFactory = r, a
            }
        }
        e.a = r;
        var i = n(126),
            o = function() {
                function t(t, e) {
                    this.subjectFactory = t, this.selector = e
                }
                return t.prototype.call = function(t, e) {
                    var n = this.selector,
                        r = this.subjectFactory(),
                        i = n(r).subscribe(t);
                    return i.add(e.subscribe(r)), i
                }, t
            }()
    },
    function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (1, eval)("this")
        } catch (r) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    },
    function(t, e) {
        t.exports = function(t, e) {
            for (var n = [], r = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    a = o[0],
                    s = o[1],
                    u = o[2],
                    c = o[3],
                    l = {
                        id: t + ":" + i,
                        css: s,
                        media: u,
                        sourceMap: c
                    };
                r[a] ? r[a].parts.push(l) : n.push(r[a] = {
                    id: a,
                    parts: [l]
                })
            }
            return n
        }
    },
    function(t, e, n) {
        "use strict";
        e.a = {
            processors: {},
            addPostProcessor: function(t) {
                this.processors[t.name] = t
            },
            handle: function(t, e, n, r, i) {
                var o = this;
                return t.forEach(function(t) {
                    o.processors[t] && (e = o.processors[t].process(e, n, r, i))
                }), e
            }
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t.interpolation = {
                unescapeSuffix: "HTML"
            }, t.interpolation.prefix = t.interpolationPrefix || "__", t.interpolation.suffix = t.interpolationSuffix || "__", t.interpolation.escapeValue = t.escapeInterpolation || !1, t.interpolation.nestingPrefix = t.reusePrefix || "$t(", t.interpolation.nestingSuffix = t.reuseSuffix || ")", t
        }

        function i(t) {
            return t.resStore && (t.resources = t.resStore), t.ns && t.ns.defaultNs ? (t.defaultNS = t.ns.defaultNs, t.ns = t.ns.namespaces) : t.defaultNS = t.ns || "translation", t.fallbackToDefaultNS && t.defaultNS && (t.fallbackNS = t.defaultNS), t.saveMissing = t.sendMissing, t.saveMissingTo = t.sendMissingTo || "current", t.returnNull = !t.fallbackOnNull, t.returnEmptyString = !t.fallbackOnEmpty, t.returnObjects = t.returnObjectTrees, t.joinArrays = "\n", t.returnedObjectHandler = t.objectTreeKeyHandler, t.parseMissingKeyHandler = t.parseMissingKey, t.appendNamespaceToMissingKey = !0, t.nsSeparator = t.nsseparator || ":", t.keySeparator = t.keyseparator || ".", "sprintf" === t.shortcutFunction && (t.overloadTranslationOptionHandler = function(t) {
                for (var e = [], n = 1; n < t.length; n++) e.push(t[n]);
                return {
                    postProcess: "sprintf",
                    sprintf: e
                }
            }), t.whitelist = t.lngWhitelist, t.preload = t.preload, "current" === t.load && (t.load = "currentOnly"), "unspecific" === t.load && (t.load = "languageOnly"), t.backend = t.backend || {}, t.backend.loadPath = t.resGetPath || "locales/__lng__/__ns__.json", t.backend.addPath = t.resPostPath || "locales/add/__lng__/__ns__", t.backend.allowMultiLoading = t.dynamicLoad, t.cache = t.cache || {}, t.cache.prefix = "res_", t.cache.expirationTime = 6048e5, t.cache.enabled = t.useLocalStorage, t = r(t), t.defaultVariables && (t.interpolation.defaultVariables = t.defaultVariables), t
        }

        function o(t) {
            return t = r(t), t.joinArrays = "\n", t
        }

        function a(t) {
            return (t.interpolationPrefix || t.interpolationSuffix || void 0 !== t.escapeInterpolation) && (t = r(t)), t.nsSeparator = t.nsseparator, t.keySeparator = t.keyseparator, t.returnObjects = t.returnObjectTrees, t
        }

        function s(t) {
            t.lng = function() {
                return u.a.deprecate("i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup."), t.services.languageUtils.toResolveHierarchy(t.language)[0]
            }, t.preload = function(e, n) {
                u.a.deprecate("i18next.preload() can be replaced with i18next.loadLanguages()"), t.loadLanguages(e, n)
            }, t.setLng = function(e, n, r) {
                return u.a.deprecate("i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace."), "function" == typeof n && (r = n, n = {}), n || (n = {}), n.fixLng === !0 && r ? r(null, t.getFixedT(e)) : t.changeLanguage(e, r)
            }, t.addPostProcessor = function(e, n) {
                u.a.deprecate("i18next.addPostProcessor() can be replaced by i18next.use({ type: 'postProcessor', name: 'name', process: fc })"), t.use({
                    type: "postProcessor",
                    name: e,
                    process: n
                })
            }
        }
        e.b = i, e.c = o, e.d = a, e.a = s;
        var u = n(10)
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = (e.apiList = {
            startTimingV2: "/r/Adaptor/LiveStatistics/startTimingV2",
            endTimingV2: "/r/Adaptor/LiveStatistics/endTimingV2",
            continueTiming: "/r/Adaptor/LiveStatistics/continueTiming"
        }, e.commonRpc = function(t, e, n) {
            if (window.dingtalk && window.dingtalk.net) try {
                var i = JSON.stringify(n);
                return new Promise(function(o, a) {
                    dingtalk.net.rpc(t, e, i, function(e, i) {
                        e ? (a(e), r(t, e, n)) : o(JSON.parse(i))
                    })
                })
            } catch (o) {
                return Promise.reject(o)
            }
        }, e.retCodeRpcLog = function(t, e, n) {
            if (e && n) try {
                var r = JSON.stringify(e),
                    i = JSON.stringify(n),
                    o = "rpc " + t + " error: " + r + ", request body: " + i;
                window.__WPO && window.__WPO.log(o, 1)
            } catch (e) {}
        });
        e.getGrayValueOfCssconfigByKey = function(t) {
            return new Promise(function(e, n) {
                dingtalk.orgFeatureSwitcher.getValueByKeyForOrg(t, function(t, r) {
                    t ? n(t) : e(r)
                })
            })
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return "function" == typeof t
        }
        e.a = r
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(206),
            o = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.scheduler = e, r.work = n, r.pending = !1, r
                }
                return r.a(e, t), e.prototype.schedule = function(t, e) {
                    if (void 0 === e && (e = 0), this.closed) return this;
                    this.state = t;
                    var n = this.id,
                        r = this.scheduler;
                    return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
                }, e.prototype.requestAsyncId = function(t, e, n) {
                    return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
                }, e.prototype.recycleAsyncId = function(t, e, n) {
                    return void 0 === n && (n = 0), null !== n && this.delay === n && this.pending === !1 ? e : void clearInterval(e)
                }, e.prototype.execute = function(t, e) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    var n = this._execute(t, e);
                    return n ? n : void(this.pending === !1 && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)))
                }, e.prototype._execute = function(t, e) {
                    var n = !1,
                        r = void 0;
                    try {
                        this.work(t)
                    } catch (i) {
                        n = !0, r = !!i && i || new Error(i)
                    }
                    return n ? (this.unsubscribe(), r) : void 0
                }, e.prototype._unsubscribe = function() {
                    var t = this.id,
                        e = this.scheduler,
                        n = e.actions,
                        r = n.indexOf(this);
                    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(131),
            o = function(t) {
                function e(n, r) {
                    void 0 === r && (r = i.a.now);
                    var o = t.call(this, n, function() {
                        return e.delegate && e.delegate !== o ? e.delegate.now() : r()
                    }) || this;
                    return o.actions = [], o.active = !1, o.scheduled = void 0, o
                }
                return r.a(e, t), e.prototype.schedule = function(n, r, i) {
                    return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, i) : t.prototype.schedule.call(this, n, r, i)
                }, e.prototype.flush = function(t) {
                    var e = this.actions;
                    if (this.active) return void e.push(t);
                    var n;
                    this.active = !0;
                    do
                        if (n = t.execute(t.state, t.delay)) break;
                    while (t = e.shift());
                    if (this.active = !1, n) {
                        for (; t = e.shift();) t.unsubscribe();
                        throw n
                    }
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return e ? Object(a.a)(t, e) : new i.a(Object(o.a)(t))
        }
        e.a = r;
        var i = n(2),
            o = n(133),
            a = n(113)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = function() {
                function t() {
                    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }(),
            i = r
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = function() {
                function t() {
                    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }(),
            i = r
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }
        n.d(e, "a", function() {
            return i
        });
        var i = r()
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(i) {
                return i.pipe(r(function(n, r) {
                    return Object(c.a)(t(n, r)).pipe(Object(u.a)(function(t, i) {
                        return e(n, t, r, i)
                    }))
                }, n))
            } : ("number" == typeof e && (n = e), function(e) {
                return e.lift(new l(t, n))
            })
        }
        e.a = r;
        var i = n(0),
            o = n(4),
            a = n(3),
            s = n(21),
            u = n(14),
            c = n(18),
            l = function() {
                function t(t, e) {
                    void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new d(t, this.project, this.concurrent))
                }, t
            }(),
            d = function(t) {
                function e(e, n, r) {
                    void 0 === r && (r = Number.POSITIVE_INFINITY);
                    var i = t.call(this, e) || this;
                    return i.project = n, i.concurrent = r, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                }, e.prototype._tryNext = function(t) {
                    var e, n = this.index++;
                    try {
                        e = this.project(t, n)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    this.active++, this._innerSub(e, t, n)
                }, e.prototype._innerSub = function(t, e, n) {
                    var r = new s.a(this, e, n),
                        i = this.destination;
                    i.add(r);
                    var a = Object(o.a)(this, t, void 0, void 0, r);
                    a !== r && i.add(a)
                }, e.prototype._complete = function() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(e)
                }, e.prototype.notifyComplete = function(t) {
                    var e = this.buffer;
                    this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return void 0 === t && (t = null),
                function(e) {
                    return e.lift(new a(t))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t) {
                    this.defaultValue = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.defaultValue))
                }, t
            }(),
            s = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.defaultValue = n, r.isEmpty = !0, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.isEmpty = !1, this.destination.next(t)
                }, e.prototype._complete = function() {
                    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(54),
            o = r(i),
            a = n(55),
            s = r(a),
            u = n(56),
            c = r(u),
            l = n(57),
            d = r(l),
            f = {
                en_US: o["default"],
                zh_CN: s["default"],
                zh_TW: c["default"],
                zh_HK: d["default"]
            };
        e["default"] = f
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = !1,
            i = {
                Promise: void 0,
                set useDeprecatedSynchronousErrorHandling(t) {
                    if (t) {
                        var e = new Error;
                        console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + e.stack)
                    } else r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                    r = t
                },
                get useDeprecatedSynchronousErrorHandling() {
                    return r
                }
            }
    },
    function(t, e, n) {
        "use strict";

        function r() {}
        e.a = r
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = function() {
                function t() {
                    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }(),
            i = r
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r
        }), n.d(e, "a", function() {
            return s
        });
        var r, i = n(16),
            o = n(48),
            a = n(114);
        ! function(t) {
            t.NEXT = "N", t.ERROR = "E", t.COMPLETE = "C"
        }(r || (r = {}));
        var s = function() {
            function t(t, e, n) {
                this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
            }
            return t.prototype.observe = function(t) {
                switch (this.kind) {
                    case "N":
                        return t.next && t.next(this.value);
                    case "E":
                        return t.error && t.error(this.error);
                    case "C":
                        return t.complete && t.complete()
                }
            }, t.prototype["do"] = function(t, e, n) {
                var r = this.kind;
                switch (r) {
                    case "N":
                        return t && t(this.value);
                    case "E":
                        return e && e(this.error);
                    case "C":
                        return n && n()
                }
            }, t.prototype.accept = function(t, e, n) {
                return t && "function" == typeof t.next ? this.observe(t) : this["do"](t, e, n)
            }, t.prototype.toObservable = function() {
                var t = this.kind;
                switch (t) {
                    case "N":
                        return Object(o.a)(this.value);
                    case "E":
                        return Object(a.a)(this.error);
                    case "C":
                        return Object(i.b)()
                }
                throw new Error("unexpected notification kind value")
            }, t.createNext = function(e) {
                return "undefined" != typeof e ? new t("N", e) : t.undefinedValueNotification
            }, t.createError = function(e) {
                return new t("E", void 0, e)
            }, t.createComplete = function() {
                return t.completeNotification
            }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
        }()
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = t[t.length - 1];
            return Object(i.a)(n) ? (t.pop(), Object(a.a)(t, n)) : Object(o.a)(t)
        }
        e.a = r;
        var i = n(17),
            o = n(37),
            a = n(113)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        });
        var r = n(0),
            i = n(11),
            o = n(9),
            a = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.value = null, e.hasNext = !1, e.hasCompleted = !1, e
                }
                return r.a(e, t), e.prototype._subscribe = function(e) {
                    return this.hasError ? (e.error(this.thrownError), o.a.EMPTY) : this.hasCompleted && this.hasNext ? (e.next(this.value), e.complete(), o.a.EMPTY) : t.prototype._subscribe.call(this, e)
                }, e.prototype.next = function(t) {
                    this.hasCompleted || (this.value = t, this.hasNext = !0)
                }, e.prototype.error = function(e) {
                    this.hasCompleted || t.prototype.error.call(this, e)
                }, e.prototype.complete = function() {
                    this.hasCompleted = !0, this.hasNext && t.prototype.next.call(this, this.value), t.prototype.complete.call(this)
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return Object(o.a)()(i.a.apply(void 0, t))
        }
        e.a = r;
        var i = n(48),
            o = n(138)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return !Object(i.a)(t) && t - parseFloat(t) + 1 >= 0
        }
        e.a = r;
        var i = n(12)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return void 0 === t && (t = i),
                function(e) {
                    return e.lift(new u(t))
                }
        }

        function i() {
            return new a.a
        }
        e.a = r;
        var o = n(0),
            a = n(39),
            s = n(1),
            u = function() {
                function t(t) {
                    this.errorFactory = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.errorFactory))
                }, t
            }(),
            c = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.errorFactory = n, r.hasValue = !1, r
                }
                return o.a(e, t), e.prototype._next = function(t) {
                    this.hasValue = !0, this.destination.next(t)
                }, e.prototype._complete = function() {
                    if (this.hasValue) return this.destination.complete();
                    var t = void 0;
                    try {
                        t = this.errorFactory()
                    } catch (e) {
                        t = e
                    }
                    this.destination.error(t)
                }, e
            }(s.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return arguments.length >= 2 ? function(n) {
                return Object(s.a)(Object(i.a)(t, e), Object(o.a)(1), Object(a.a)(e))(n)
            } : function(e) {
                return Object(s.a)(Object(i.a)(function(e, n, r) {
                    return t(e, n, r + 1)
                }), Object(o.a)(1))(e)
            }
        }
        e.a = r;
        var i = n(122),
            o = n(121),
            a = n(42),
            s = n(110)
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            pc_grouplive_all_live: "Playbacks",
            pc_grouplive_my_live: "My Live",
            pc_grouplive_expire_notice_playback: "Playback List (recent 12 months)",
            pc_grouplive_data_live_over: "Great. Congratulations on completing a live broadcast.",
            pc_grouplive_data_duration: "Duration",
            pc_grouplive_data_view_count: "Views",
            pc_grouplive_data_total_count: "Watched",
            pc_grouplive_data_member_count: "Members",
            pc_grouplive_data_view_detail_member: "View details",
            pc_grouplive_view_playback: "View Playback",
            pc_grouplive_data_join: "Attendee",
            pc_grouplive_data_unjoin: "Absence",
            pc_grouplive_data_view_time: "Duration",
            pc_grouplive_data_anchor_title: "Host",
            pc_grouplive_data_thumbs_up: "Likes",
            pc_grouplive_data_message_count: "Messages",
            pc_grouplive_data_detail_entry_prompt: 'You can view data details again in "Live Playback List" and set playback download permissions',
            pc_grouplive_data_export: "Export data",
            pc_grouplive_data_exporting: "Exporting",
            pc_grouplive_disband: "Group owner disband the group. Live window will close.",
            pc_grouplive_quit: "You quit from the group. Live window will close.",
            pc_grouplive_kicked: "You have been removed from the group. Live window will close.",
            pc_grouplive_playback_kicked: "You have been removed from this group, the playback window will close automatically",
            pc_grouplive_playback_disband: "This group has been disbanded by the owner, the playback window will close automatically",
            pc_grouplive_playback_quit: "You have left this group, the playback window will close automatically ",
            pc_grouplive_i_know: "OK",
            pc_grouplive_notice: "Notice",
            pc_grouplive_live_position: "Chat position",
            pc_grouplive_live_status: "Live",
            pc_grouplive_live_views: "watching",
            pc_grouplive_h5_my_live: "My Live",
            pc_groupsetting_h5_set_anchor: "Select anchors",
            pc_grouplive_pause_status: "Live paused",
            pc_grouplive_live_over_save: 'This live replay has been saved to "Live Playback"',
            pc_grouplive_live_over_fail: "broadcast time less than 1 minutes, do not keep looking back on",
            pc_grouplive_playback_all_viewer: "All members have viewed",
            pc_grouplive_playback_no_viewer: "No one has viewed",
            pc_grouplive_playback_no_live: "No live playback",
            pc_grouplive_view_more: "See more",
            dt_lv_group_live_title_placeholder: "Live in {{value1}}",
            pc_grouplive_back_to_conversation: "Back",
            pc_grouplive_data_export_success: "Live statistics has been exported successfully.",
            pc_grouplive_data_export_failure: "Live statistics export failed!",
            dt_common_confirm: "OK",
            pc_grouplive_live_praise: "like",
            pc_grouplive_live_player_error_text: "Host is on leave, wait minutes",
            pc_grouplive_live_player_force_stop: "Do you want to end current live?",
            pc_grouplive_live_player_force_stop_title: "End the Live",
            pc_grouplive_live_message_box_cancel: "Cancel",
            pc_grouplive_live_player_force_stop_ok_btn: "End",
            pc_grouplive_live_player_report: "Report",
            pc_grouplive_live_player_stalled_text: "Error, please try again",
            pc_grouplive_live_player_pausing: "Live pause",
            pc_grouplive_live_player_status_anchors_leave: "Anchors away, live pause",
            pc_grouplive_live_player_status_anchors_back: "Anchor back it, the forthcoming resumption of broadcast content",
            pc_grouplive_live_player_rotate_btn_tips: "Screen rotation",
            pc_grouplive_live_player_barrage_btn_tips: "Barrage",
            dt_lv_live_bit_rate_1: "Prioritize Speed",
            dt_lv_live_bit_rate_2: "Smooth",
            dt_lv_live_bit_rate_3: "SD",
            dt_lv_live_bit_rate_4: "HD",
            dt_lv_live_bit_rate_5: "Ultra HD",
            pc_grouplive_live_player_network_timeout_text: "Network timeout, please try again later",
            pc_grouplive_live_player_unsurpport_text: "The current version does not support video playback",
            pc_grouplive_apply_link_preview_title: "Effect Preview",
            pc_grouplive_apply_link_cancel_text: "Later",
            pc_grouplive_apply_link_confirm_text: "Apply",
            pc_grouplive_apply_link_btn_text: "Apply for connecting",
            pc_grouplive_apply_link_waiting_number_text: "{{value1}} applying",
            pc_grouplive_apply_link_webrtc_permission_deny_text: "Permission denied",
            pc_grouplive_apply_link_webrtc_notfound_text: "Camera not found",
            pc_grouplive_apply_link_webrtc_default_error_text: "Current version does not support preview",
            pc_grouplive_apply_linking_member_list: "Apply linking member list",
            pc_grouplive_apply_link_cancel_btn_text: "Cancel",
            pc_grouplive_introduction_btn_text: "Live Introduction",
            pc_grouplive_multi_live_tag: "Cross Group Live",
            pc_grouplive_playback_playrate: "Speed",
            pc_grouplive_apply_link_waiting_text: "Applying",
            pc_grouplive_live_player_share_btn_tips: "Share",
            pc_grouplive_live_favor_ban_tips: "The anchor has turned on disable like, not like at present",
            pc_grouplive_live_local_preview_btn_text: "Local Preview",
            pc_grouplive_live_send_comment_btn_text: "Send",
            pc_grouplive_live_send_comment_input_placeholder: "Say something...",
            pc_grouplive_live_send_comment_exception_text: "Sending exception",
            pc_text_too_long: "Message too long , please reduce to {{value1}}"
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            pc_grouplive_all_live: "全部直播",
            pc_grouplive_my_live: "我的直播",
            pc_grouplive_expire_notice_playback: "保存群内近12个月的回放视频",
            pc_grouplive_data_live_over: "太棒了，恭喜你完成一场直播",
            pc_grouplive_data_duration: "直播时长",
            pc_grouplive_data_view_count: "观看次数",
            pc_grouplive_data_total_count: "观看人数",
            pc_grouplive_data_member_count: "群人数",
            pc_grouplive_data_view_detail_member: "查看详细数据",
            pc_grouplive_view_playback: "查看回放",
            pc_grouplive_data_join: "参与人员",
            pc_grouplive_data_unjoin: "未参与人员",
            pc_grouplive_data_view_time: "观看时长",
            pc_grouplive_data_anchor_title: "讲师",
            pc_grouplive_data_thumbs_up: "点赞数",
            pc_grouplive_data_message_count: "消息数",
            pc_grouplive_data_detail_entry_prompt: "你可以在“直播回放”中再次查看数据详情， 并设置回放下载权限",
            pc_grouplive_data_export: "导出数据",
            pc_grouplive_data_exporting: "导出中",
            pc_grouplive_disband: "此群已被群主解散，直播窗口将自动关闭",
            pc_grouplive_quit: "你已退出此群，直播窗口将自动关闭",
            pc_grouplive_kicked: "你已被移除此群，直播窗口将自动关闭",
            pc_grouplive_playback_kicked: "你已被移除此群，回放窗口将自动关闭",
            pc_grouplive_playback_disband: "此群已被群主解散，回放窗口将自动关闭",
            pc_grouplive_playback_quit: "你已退出此群，回放窗口将自动关闭",
            pc_grouplive_i_know: "我知道了",
            pc_grouplive_notice: "通知",
            pc_grouplive_live_position: "定位聊天",
            pc_grouplive_live_status: "直播中",
            pc_grouplive_live_views: "人观看",
            pc_grouplive_h5_my_live: "我发起的直播",
            pc_groupsetting_h5_set_anchor: "设置讲师",
            pc_grouplive_pause_status: "直播暂停",
            pc_grouplive_live_over_save: "本次直播回放已保存到“直播回放”中",
            pc_grouplive_live_over_fail: "直播时间不足1分钟，不保存回看",
            pc_grouplive_playback_all_viewer: "全部成员已观看",
            pc_grouplive_playback_no_viewer: "暂无人观看",
            pc_grouplive_playback_no_live: "暂无直播回放",
            pc_grouplive_view_more: "查看更多",
            dt_lv_group_live_title_placeholder: "{{value1}}群直播",
            pc_grouplive_back_to_conversation: "返回群聊",
            pc_grouplive_data_export_success: "直播数据导出成功。",
            pc_grouplive_data_export_failure: "直播数据导出失败！",
            dt_common_confirm: "确定",
            pc_grouplive_live_praise: "赞",
            pc_grouplive_live_player_error_text: "主播离开一会，稍等片刻",
            pc_grouplive_live_player_force_stop: "确定要结束直播吗？",
            pc_grouplive_live_player_force_stop_title: "结束直播",
            pc_grouplive_live_message_box_cancel: "取消",
            pc_grouplive_live_player_force_stop_ok_btn: "结束",
            pc_grouplive_live_player_report: "举报",
            pc_grouplive_live_player_stalled_text: "出错了，请重试",
            pc_grouplive_live_player_pausing: "直播暂停中",
            pc_grouplive_live_player_status_anchors_leave: "主播离开，直播暂停",
            pc_grouplive_live_player_status_anchors_back: "主播回来啦，直播内容即将恢复",
            pc_grouplive_live_player_rotate_btn_tips: "屏幕旋转",
            pc_grouplive_live_player_barrage_btn_tips: "消息弹幕",
            dt_lv_live_bit_rate_1: "极速",
            dt_lv_live_bit_rate_2: "流畅",
            dt_lv_live_bit_rate_3: "标清",
            dt_lv_live_bit_rate_4: "高清",
            dt_lv_live_bit_rate_5: "超清",
            pc_grouplive_live_player_network_timeout_text: "网络超时，请稍后重试",
            pc_grouplive_live_player_unsurpport_text: "当前版本不支持视频播放",
            pc_grouplive_apply_link_preview_title: "效果预览",
            pc_grouplive_apply_link_cancel_text: "稍后再说",
            pc_grouplive_apply_link_confirm_text: "申请连麦",
            pc_grouplive_apply_link_btn_text: "申请连麦",
            pc_grouplive_apply_link_waiting_number_text: "{{value1}}人申请",
            pc_grouplive_apply_link_webrtc_permission_deny_text: "用户代理或者当前平台不允许请求使用摄像设备",
            pc_grouplive_apply_link_webrtc_notfound_text: "未找到摄像设备",
            pc_grouplive_apply_link_webrtc_default_error_text: "当前版本不支持效果预览",
            pc_grouplive_apply_linking_member_list: "连麦申请",
            pc_grouplive_apply_link_cancel_btn_text: "取消申请",
            pc_grouplive_introduction_btn_text: "群直播介绍",
            pc_grouplive_multi_live_tag: "联播",
            pc_grouplive_playback_playrate: "倍速",
            pc_grouplive_apply_link_waiting_text: "连麦申请中",
            pc_grouplive_live_player_share_btn_tips: "分享",
            pc_grouplive_live_favor_ban_tips: "主播开启了禁用点赞，当前不可点赞",
            pc_grouplive_live_local_preview_btn_text: "本地预览",
            pc_grouplive_live_send_comment_btn_text: "发送",
            pc_grouplive_live_send_comment_input_placeholder: "说点什么...",
            pc_grouplive_live_send_comment_exception_text: "发送异常",
            pc_text_too_long: "消息过长，请调整至 {{value1}} 字以内"
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            pc_grouplive_all_live: "全部直播",
            pc_grouplive_my_live: "我的直播",
            pc_grouplive_expire_notice_playback: "保存群內近12個月的重播視頻",
            pc_grouplive_data_live_over: "太棒了，恭喜你完成一場直播",
            pc_grouplive_data_duration: "直播時長",
            pc_grouplive_data_view_count: "观看次数",
            pc_grouplive_data_total_count: "觀看人數",
            pc_grouplive_data_member_count: "群人数",
            pc_grouplive_data_view_detail_member: "查看詳細數據",
            pc_grouplive_view_playback: "查看回放",
            pc_grouplive_data_join: "參與人員",
            pc_grouplive_data_unjoin: "未参与人员",
            pc_grouplive_data_view_time: "观看时长",
            pc_grouplive_data_anchor_title: "主播",
            pc_grouplive_data_thumbs_up: "點贊數",
            pc_grouplive_data_message_count: "消息數",
            pc_grouplive_data_detail_entry_prompt: "你可以在「直播重播」中再次查看資料詳情， 並設置重播下載許可權",
            pc_grouplive_data_export: "匯出數據",
            pc_grouplive_data_exporting: "匯出中",
            pc_grouplive_disband: "此群已被群主解散，直播窗口将自动关闭",
            pc_grouplive_quit: "你已退出此群，直播窗口将自动关闭",
            pc_grouplive_kicked: "你已被移除此群，直播窗口将自动关闭",
            pc_grouplive_playback_kicked: "你已被移除此群，回放窗口将自动关闭",
            pc_grouplive_playback_disband: "此群已被群主解散，回放窗口将自动关闭",
            pc_grouplive_playback_quit: "你已退出此群，回放窗口将自动关闭",
            pc_grouplive_i_know: "我知道了",
            pc_grouplive_notice: "通知",
            pc_grouplive_live_position: "定位聊天",
            pc_grouplive_live_status: "直播中",
            pc_grouplive_live_views: "人觀看",
            pc_grouplive_h5_my_live: "我發起的直播",
            pc_groupsetting_h5_set_anchor: "設置讲师",
            pc_grouplive_pause_status: "直播暫停",
            pc_grouplive_live_over_save: "本次直播重播已保存到“直播重播”中",
            pc_grouplive_live_over_fail: "直播時間不足1分鐘，不保存回看",
            pc_grouplive_playback_all_viewer: "全部成员已观看",
            pc_grouplive_playback_no_viewer: "暂无人观看",
            pc_grouplive_playback_no_live: "暫無直播重播",
            pc_grouplive_view_more: "查看更多",
            dt_lv_group_live_title_placeholder: "{{value1}}群直播",
            pc_grouplive_back_to_conversation: "返回群聊",
            pc_grouplive_data_export_success: "直播數據匯出成功。",
            pc_grouplive_data_export_failure: "直播數據匯出失敗！",
            dt_common_confirm: "確定",
            pc_grouplive_live_praise: "赞",
            pc_grouplive_live_player_error_text: "主播离开一会，稍等片刻",
            pc_grouplive_live_player_force_stop: "確定要結束直播嗎？",
            pc_grouplive_live_player_force_stop_title: "結束直播",
            pc_grouplive_live_message_box_cancel: "取消",
            pc_grouplive_live_player_force_stop_ok_btn: "結束",
            pc_grouplive_live_player_report: "舉報",
            pc_grouplive_live_player_stalled_text: "出错了，请重试",
            pc_grouplive_live_player_pausing: "直播暫停中",
            pc_grouplive_live_player_status_anchors_leave: "主播離開，直播暫停",
            pc_grouplive_live_player_status_anchors_back: "主播回來啦，直播內容即將恢復",
            pc_grouplive_live_player_rotate_btn_tips: "荧幕旋轉",
            pc_grouplive_live_player_barrage_btn_tips: "消息彈幕",
            dt_lv_live_bit_rate_1: "極速",
            dt_lv_live_bit_rate_2: "流暢",
            dt_lv_live_bit_rate_3: "標清",
            dt_lv_live_bit_rate_4: "高清",
            dt_lv_live_bit_rate_5: "超清",
            pc_grouplive_live_player_network_timeout_text: "網絡超時，請稍後重試",
            pc_grouplive_live_player_unsurpport_text: "當前版本不支持視頻播放",
            pc_grouplive_apply_link_preview_title: "效果預覽",
            pc_grouplive_apply_link_cancel_text: "稍後再說",
            pc_grouplive_apply_link_confirm_text: "申請連麥",
            pc_grouplive_apply_link_btn_text: "申請連麥",
            pc_grouplive_apply_link_waiting_number_text: "{{value1}}人申請",
            pc_grouplive_apply_link_webrtc_permission_deny_text: "用戶代理或者當前平臺不允許請求使用攝像設備",
            pc_grouplive_apply_link_webrtc_notfound_text: "未找到攝像設備",
            pc_grouplive_apply_link_webrtc_default_error_text: "當前版本不支持效果預覽",
            pc_grouplive_apply_linking_member_list: "連麥申請",
            pc_grouplive_apply_link_cancel_btn_text: "取消申請",
            pc_grouplive_introduction_btn_text: "群直播介紹",
            pc_grouplive_multi_live_tag: "聯播",
            pc_grouplive_playback_playrate: "倍速",
            pc_grouplive_apply_link_waiting_text: "連麥申請中",
            pc_grouplive_live_player_share_btn_tips: "分享",
            pc_grouplive_live_favor_ban_tips: "主播開啟了禁用點贊，當前不可點贊",
            pc_grouplive_live_local_preview_btn_text: "本地預覽",
            pc_grouplive_live_send_comment_btn_text: "發送",
            pc_grouplive_live_send_comment_input_placeholder: "說點什麼...",
            pc_grouplive_live_send_comment_exception_text: "發送異常",
            pc_text_too_long: "訊息過長，請調整至 {{value1}} 字以內再發送"
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            pc_grouplive_all_live: "全部直播",
            pc_grouplive_my_live: "我的直播",
            pc_grouplive_expire_notice_playback: "保存群內近12個月的重播視頻",
            pc_grouplive_data_live_over: "太棒了，恭喜你完成一場直播",
            pc_grouplive_data_duration: "直播時長",
            pc_grouplive_data_view_count: "觀看次數",
            pc_grouplive_data_total_count: "觀看人數",
            pc_grouplive_data_member_count: "群人數",
            pc_grouplive_data_view_detail_member: "查看詳細數據",
            pc_grouplive_view_playback: "查看回放",
            pc_grouplive_data_join: "參與人員",
            pc_grouplive_data_unjoin: "未參與人員",
            pc_grouplive_data_view_time: "觀看時長",
            pc_grouplive_data_anchor_title: "講師",
            pc_grouplive_data_thumbs_up: "點贊數",
            pc_grouplive_data_message_count: "消息數",
            pc_grouplive_data_detail_entry_prompt: "你可以在「直播重播」中再次查看資料詳情， 並設置重播下載許可權",
            pc_grouplive_data_export: "導出數據",
            pc_grouplive_data_exporting: "導出中",
            pc_grouplive_disband: "此群已被群主解散，直播窗口將自動關閉",
            pc_grouplive_quit: "你已退出此群，直播窗口將自動關閉",
            pc_grouplive_kicked: "你已被移除此群，直播窗口將自動關閉",
            pc_grouplive_playback_kicked: "你已被移除此群，回放窗口將自動關閉",
            pc_grouplive_playback_disband: "此群已被群主解散，回放窗口將自動關閉",
            pc_grouplive_playback_quit: "你已退出此群，回放窗口將自動關閉",
            pc_grouplive_i_know: "我知道了",
            pc_grouplive_notice: "通知",
            pc_grouplive_live_position: "定位聊天",
            pc_grouplive_live_status: "直播中",
            pc_grouplive_live_views: "人觀看",
            pc_grouplive_h5_my_live: "我發起的直播",
            pc_groupsetting_h5_set_anchor: "設置講師",
            pc_grouplive_pause_status: "直播暫停",
            pc_grouplive_live_over_save: "本次直播回放已保存到“直播回放”中",
            pc_grouplive_live_over_fail: "直播時間不足1分鐘，不保存回看",
            pc_grouplive_playback_all_viewer: "全部成員已觀看",
            pc_grouplive_playback_no_viewer: "暫無人觀看",
            pc_grouplive_playback_no_live: "暫無直播回放",
            pc_grouplive_view_more: "查看更多",
            dt_lv_group_live_title_placeholder: "{{value1}}群直播",
            pc_grouplive_back_to_conversation: "返回群聊",
            pc_grouplive_data_export_success: "直播數據導出成功。",
            pc_grouplive_data_export_failure: "直播數據導出失敗！",
            dt_common_confirm: "確定",
            pc_grouplive_live_praise: "贊",
            pc_grouplive_live_player_error_text: "主播離開一會，稍等片刻",
            pc_grouplive_live_player_force_stop: "確定要結束直播嗎？",
            pc_grouplive_live_player_force_stop_title: "結束直播",
            pc_grouplive_live_message_box_cancel: "取消",
            pc_grouplive_live_player_force_stop_ok_btn: "結束",
            pc_grouplive_live_player_report: "舉報",
            pc_grouplive_live_player_stalled_text: "出错了，请重试",
            pc_grouplive_live_player_pausing: "直播暫停中",
            pc_grouplive_live_player_status_anchors_leave: "主播離開，直播暫停",
            pc_grouplive_live_player_status_anchors_back: "主播回來啦，直播內容即將恢復",
            pc_grouplive_live_player_rotate_btn_tips: "荧幕旋轉",
            pc_grouplive_live_player_barrage_btn_tips: "消息彈幕",
            dt_lv_live_bit_rate_1: "極速",
            dt_lv_live_bit_rate_2: "流暢",
            dt_lv_live_bit_rate_3: "標清",
            dt_lv_live_bit_rate_4: "高清",
            dt_lv_live_bit_rate_5: "超清",
            pc_grouplive_live_player_network_timeout_text: "網絡超時，請稍後重試",
            pc_grouplive_live_player_unsurpport_text: "當前版本不支持視頻播放",
            pc_grouplive_apply_link_preview_title: "效果預覽",
            pc_grouplive_apply_link_cancel_text: "稍後再說",
            pc_grouplive_apply_link_confirm_text: "申請連麥",
            pc_grouplive_apply_link_btn_text: "申請連麥",
            pc_grouplive_apply_link_waiting_number_text: "{{value1}}人申請",
            pc_grouplive_apply_link_webrtc_permission_deny_text: "用戶代理或者當前平臺不允許請求使用攝像設備",
            pc_grouplive_apply_link_webrtc_notfound_text: "未找到攝像設備",
            pc_grouplive_apply_link_webrtc_default_error_text: "當前版本不支持效果預覽",
            pc_grouplive_apply_linking_member_list: "連麥申請",
            pc_grouplive_apply_link_cancel_btn_text: "取消申請",
            pc_grouplive_introduction_btn_text: "群直播介紹",
            pc_grouplive_multi_live_tag: "聯播",
            pc_grouplive_playback_playrate: "倍速",
            pc_grouplive_apply_link_waiting_text: "連麥申請中",
            pc_grouplive_live_player_share_btn_tips: "分享",
            pc_grouplive_live_favor_ban_tips: "主播開啟了禁用點贊，當前不可點贊",
            pc_grouplive_live_local_preview_btn_text: "本地預覽",
            pc_grouplive_live_send_comment_btn_text: "發送",
            pc_grouplive_live_send_comment_input_placeholder: "說點什麼...",
            pc_grouplive_live_send_comment_exception_text: "發送異常",
            pc_text_too_long: "消息過長，請調整至 {{value1}} 字以內"
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n.d(e, "changeLanguage", function() {
            return i
        }), n.d(e, "cloneInstance", function() {
            return o
        }), n.d(e, "createInstance", function() {
            return a
        }), n.d(e, "dir", function() {
            return s
        }), n.d(e, "exists", function() {
            return u
        }), n.d(e, "getFixedT", function() {
            return c
        }), n.d(e, "init", function() {
            return l
        }), n.d(e, "loadLanguages", function() {
            return d
        }), n.d(e, "loadNamespaces", function() {
            return f
        }), n.d(e, "loadResources", function() {
            return p
        }), n.d(e, "off", function() {
            return h
        }), n.d(e, "on", function() {
            return v
        }), n.d(e, "setDefaultNamespace", function() {
            return g
        }), n.d(e, "t", function() {
            return m
        }), n.d(e, "use", function() {
            return b
        });
        var r = n(59);
        e["default"] = r.a;
        var i = r.a.changeLanguage.bind(r.a),
            o = r.a.cloneInstance.bind(r.a),
            a = r.a.createInstance.bind(r.a),
            s = r.a.dir.bind(r.a),
            u = r.a.exists.bind(r.a),
            c = r.a.getFixedT.bind(r.a),
            l = r.a.init.bind(r.a),
            d = r.a.loadLanguages.bind(r.a),
            f = r.a.loadNamespaces.bind(r.a),
            p = r.a.loadResources.bind(r.a),
            h = r.a.off.bind(r.a),
            v = r.a.on.bind(r.a),
            g = r.a.setDefaultNamespace.bind(r.a),
            m = r.a.t.bind(r.a),
            b = r.a.use.bind(r.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                var i = n[r],
                    o = Object.getOwnPropertyDescriptor(e, i);
                o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
            }
            return t
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
        }

        function s() {}
        var u = n(10),
            c = n(15),
            l = n(60),
            d = n(61),
            f = n(62),
            p = n(63),
            h = n(64),
            v = n(65),
            g = n(66),
            m = n(67),
            b = n(31),
            y = n(32),
            _ = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            w = function(t) {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments[1];
                    i(this, e);
                    var a = o(this, t.call(this));
                    if (a.options = Object(m.b)(n), a.services = {}, a.logger = u.a, a.modules = {
                        external: []
                    }, r && !a.isInitialized && !n.isClone) {
                        var s;
                        if (!a.options.initImmediate) return s = a.init(n, r), o(a, s);
                        setTimeout(function() {
                            a.init(n, r)
                        }, 0)
                    }
                    return a
                }
                return a(e, t), e.prototype.init = function(t, e) {
                    function n(t) {
                        return t ? "function" == typeof t ? new t : t : null
                    }
                    var r = this;
                    if ("function" == typeof t && (e = t, t = {}), t || (t = {}), "v1" === t.compatibilityAPI ? this.options = _({}, Object(m.a)(), Object(m.b)(y.b(t)), {}) : "v1" === t.compatibilityJSON ? this.options = _({}, Object(m.a)(), Object(m.b)(y.c(t)), {}) : this.options = _({}, Object(m.a)(), this.options, Object(m.b)(t)), this.format = this.options.interpolation.format, e || (e = s), !this.options.isClone) {
                        this.modules.logger ? u.a.init(n(this.modules.logger), this.options) : u.a.init(null, this.options);
                        var i = new f.a(this.options);
                        this.store = new l.a(this.options.resources, this.options);
                        var o = this.services;
                        o.logger = u.a, o.resourceStore = this.store, o.resourceStore.on("added removed", function(t, e) {
                            o.cacheConnector.save()
                        }), o.languageUtils = i, o.pluralResolver = new p.a(i, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), o.interpolator = new h.a(this.options), o.backendConnector = new v.a(n(this.modules.backend), o.resourceStore, o, this.options), o.backendConnector.on("*", function(t) {
                            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; e > i; i++) n[i - 1] = arguments[i];
                            r.emit.apply(r, [t].concat(n))
                        }), o.backendConnector.on("loaded", function(t) {
                            o.cacheConnector.save()
                        }), o.cacheConnector = new g.a(n(this.modules.cache), o.resourceStore, o, this.options), o.cacheConnector.on("*", function(t) {
                            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; e > i; i++) n[i - 1] = arguments[i];
                            r.emit.apply(r, [t].concat(n))
                        }), this.modules.languageDetector && (o.languageDetector = n(this.modules.languageDetector), o.languageDetector.init(o, this.options.detection, this.options)), this.translator = new d.a(this.services, this.options), this.translator.on("*", function(t) {
                            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; e > i; i++) n[i - 1] = arguments[i];
                            r.emit.apply(r, [t].concat(n))
                        }), this.modules.external.forEach(function(t) {
                            t.init && t.init(r)
                        })
                    }
                    var a = ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"];
                    a.forEach(function(t) {
                        r[t] = function() {
                            var e;
                            return (e = r.store)[t].apply(e, arguments)
                        }
                    }), "v1" === this.options.compatibilityAPI && y.a(this);
                    var c = function() {
                        r.changeLanguage(r.options.lng, function(t, n) {
                            r.isInitialized = !0, r.logger.log("initialized", r.options), r.emit("initialized", r.options), e(t, n)
                        })
                    };
                    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), this
                }, e.prototype.loadResources = function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                    if (this.options.resources) e(null);
                    else {
                        if (this.language && "cimode" === this.language.toLowerCase()) return e();
                        var n = [],
                            r = function(e) {
                                if (e) {
                                    var r = t.services.languageUtils.toResolveHierarchy(e);
                                    r.forEach(function(t) {
                                        n.indexOf(t) < 0 && n.push(t)
                                    })
                                }
                            };
                        if (this.language) r(this.language);
                        else {
                            var i = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            i.forEach(function(t) {
                                return r(t)
                            })
                        }
                        this.options.preload && this.options.preload.forEach(function(t) {
                            return r(t)
                        }), this.services.cacheConnector.load(n, this.options.ns, function() {
                            t.services.backendConnector.load(n, t.options.ns, e)
                        })
                    }
                }, e.prototype.reloadResources = function(t, e) {
                    t || (t = this.languages), e || (e = this.options.ns), this.services.backendConnector.reload(t, e)
                }, e.prototype.use = function(t) {
                    return "backend" === t.type && (this.modules.backend = t), "cache" === t.type && (this.modules.cache = t), ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t), "languageDetector" === t.type && (this.modules.languageDetector = t), "postProcessor" === t.type && b.a.addPostProcessor(t), "3rdParty" === t.type && this.modules.external.push(t), this
                }, e.prototype.changeLanguage = function(t, e) {
                    var n = this,
                        r = function(t, r) {
                            r && (n.emit("languageChanged", r), n.logger.log("languageChanged", r)), e && e(t, function() {
                                return n.t.apply(n, arguments)
                            })
                        },
                        i = function(t) {
                            t && (n.language = t, n.languages = n.services.languageUtils.toResolveHierarchy(t), n.translator.changeLanguage(t), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(t)), n.loadResources(function(e) {
                                r(e, t)
                            })
                        };
                    t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(t) : i(this.services.languageDetector.detect())
                }, e.prototype.getFixedT = function(t, e) {
                    var n = this,
                        r = function i(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = _({}, e);
                            return r.lng = r.lng || i.lng, r.lngs = r.lngs || i.lngs, r.ns = r.ns || i.ns, n.t(t, r)
                        };
                    return "string" == typeof t ? r.lng = t : r.lngs = t, r.ns = e, r
                }, e.prototype.t = function() {
                    var t;
                    return this.translator && (t = this.translator).translate.apply(t, arguments)
                }, e.prototype.exists = function() {
                    var t;
                    return this.translator && (t = this.translator).exists.apply(t, arguments)
                }, e.prototype.setDefaultNamespace = function(t) {
                    this.options.defaultNS = t
                }, e.prototype.loadNamespaces = function(t, e) {
                    var n = this;
                    return this.options.ns ? ("string" == typeof t && (t = [t]), t.forEach(function(t) {
                        n.options.ns.indexOf(t) < 0 && n.options.ns.push(t)
                    }), void this.loadResources(e)) : e && e()
                }, e.prototype.loadLanguages = function(t, e) {
                    "string" == typeof t && (t = [t]);
                    var n = this.options.preload || [],
                        r = t.filter(function(t) {
                            return n.indexOf(t) < 0
                        });
                    return r.length ? (this.options.preload = n.concat(r), void this.loadResources(e)) : e()
                }, e.prototype.dir = function(t) {
                    if (t || (t = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !t) return "rtl";
                    var e = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"];
                    return e.indexOf(this.services.languageUtils.getLanguagePartFromCode(t)) >= 0 ? "rtl" : "ltr"
                }, e.prototype.createInstance = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments[1];
                    return new e(t, n)
                }, e.prototype.cloneInstance = function() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                        i = _({}, this.options, n, {
                            isClone: !0
                        }),
                        o = new e(i, r),
                        a = ["store", "services", "language"];
                    return a.forEach(function(e) {
                        o[e] = t[e]
                    }), o.translator = new d.a(o.services, o.options), o.translator.on("*", function(t) {
                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
                        o.emit.apply(o, [t].concat(n))
                    }), o.init(i, r), o
                }, e
            }(c.a);
        e.a = new w
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                var i = n[r],
                    o = Object.getOwnPropertyDescriptor(e, i);
                o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
            }
            return t
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
        }
        var s = n(15),
            u = n(19),
            c = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            l = function(t) {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                    i(this, e);
                    var a = o(this, t.call(this));
                    return a.data = n, a.options = r, a
                }
                return a(e, t), e.prototype.addNamespaces = function(t) {
                    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
                }, e.prototype.removeNamespaces = function(t) {
                    var e = this.options.ns.indexOf(t);
                    e > -1 && this.options.ns.splice(e, 1)
                }, e.prototype.getResource = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = r.keySeparator || this.options.keySeparator;
                    void 0 === i && (i = ".");
                    var o = [t, e];
                    return n && "string" != typeof n && (o = o.concat(n)), n && "string" == typeof n && (o = o.concat(i ? n.split(i) : n)), t.indexOf(".") > -1 && (o = t.split(".")), u.d(this.data, o)
                }, e.prototype.addResource = function(t, e, n, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                            silent: !1
                        },
                        o = this.options.keySeparator;
                    void 0 === o && (o = ".");
                    var a = [t, e];
                    n && (a = a.concat(o ? n.split(o) : n)), t.indexOf(".") > -1 && (a = t.split("."), r = e, e = a[1]), this.addNamespaces(e), u.h(this.data, a, r), i.silent || this.emit("added", t, e, n, r)
                }, e.prototype.addResources = function(t, e, n) {
                    for (var r in n) "string" == typeof n[r] && this.addResource(t, e, r, n[r], {
                        silent: !0
                    });
                    this.emit("added", t, e, n)
                }, e.prototype.addResourceBundle = function(t, e, n, r, i) {
                    var o = [t, e];
                    t.indexOf(".") > -1 && (o = t.split("."), r = n, n = e, e = o[1]), this.addNamespaces(e);
                    var a = u.d(this.data, o) || {};
                    r ? u.b(a, n, i) : a = c({}, a, n), u.h(this.data, o, a), this.emit("added", t, e, n)
                }, e.prototype.removeResourceBundle = function(t, e) {
                    this.hasResourceBundle(t, e) && delete this.data[t][e], this.removeNamespaces(e), this.emit("removed", t, e)
                }, e.prototype.hasResourceBundle = function(t, e) {
                    return void 0 !== this.getResource(t, e)
                }, e.prototype.getResourceBundle = function(t, e) {
                    return e || (e = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? c({}, this.getResource(t, e)) : this.getResource(t, e)
                }, e.prototype.toJSON = function() {
                    return this.data
                }, e
            }(s.a);
        e.a = l
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                var i = n[r],
                    o = Object.getOwnPropertyDescriptor(e, i);
                o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
            }
            return t
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
        }
        var s = n(10),
            u = n(15),
            c = n(31),
            l = n(32),
            d = n(19),
            f = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            h = function(t) {
                function e(n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e);
                    var a = o(this, t.call(this));
                    return d.a(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], n, a), a.options = r, a.logger = s.a.create("translator"), a
                }
                return a(e, t), e.prototype.changeLanguage = function(t) {
                    t && (this.language = t)
                }, e.prototype.exists = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    return "v1" === this.options.compatibilityAPI && (e = l.d(e)), void 0 !== this.resolve(t, e)
                }, e.prototype.extractFromKey = function(t, e) {
                    var n = e.nsSeparator || this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r = e.keySeparator || this.options.keySeparator || ".",
                        i = e.ns || this.options.defaultNS;
                    if (n && t.indexOf(n) > -1) {
                        var o = t.split(n);
                        (n !== r || n === r && this.options.ns.indexOf(o[0]) > -1) && (i = o.shift()), t = o.join(r)
                    }
                    return "string" == typeof i && (i = [i]), {
                        key: t,
                        namespaces: i
                    }
                }, e.prototype.translate = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ("object" !== ("undefined" == typeof e ? "undefined" : p(e)) ? e = this.options.overloadTranslationOptionHandler(arguments) : "v1" === this.options.compatibilityAPI && (e = l.d(e)), void 0 === t || null === t || "" === t) return "";
                    "number" == typeof t && (t = String(t)), "string" == typeof t && (t = [t]);
                    var n = e.keySeparator || this.options.keySeparator || ".",
                        r = this.extractFromKey(t[t.length - 1], e),
                        i = r.key,
                        o = r.namespaces,
                        a = o[o.length - 1],
                        s = e.lng || this.language,
                        u = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (s && "cimode" === s.toLowerCase()) {
                        if (u) {
                            var c = e.nsSeparator || this.options.nsSeparator;
                            return a + c + i
                        }
                        return i
                    }
                    var d = this.resolve(t, e),
                        h = Object.prototype.toString.apply(d),
                        v = ["[object Number]", "[object Function]", "[object RegExp]"],
                        g = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays;
                    if (d && "string" != typeof d && v.indexOf(h) < 0 && (!g || "[object Array]" !== h)) {
                        if (!e.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(i, d, e) : "key '" + i + " (" + this.language + ")' returned an object instead of string.";
                        if (e.keySeparator || this.options.keySeparator) {
                            var m = "[object Array]" === h ? [] : {};
                            for (var b in d) Object.prototype.hasOwnProperty.call(d, b) && (m[b] = this.translate("" + i + n + b, f({}, e, {
                                joinArrays: !1,
                                ns: o
                            })));
                            d = m
                        }
                    } else if (g && "[object Array]" === h) d = d.join(g), d && (d = this.extendTranslation(d, i, e));
                    else {
                        var y = !1,
                            _ = !1;
                        if (this.isValidLookup(d) || void 0 === e.defaultValue || (y = !0, d = e.defaultValue), this.isValidLookup(d) || (_ = !0, d = i), _ || y) {
                            this.logger.log("missingKey", s, a, i, d);
                            var w = [],
                                x = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && x && x[0])
                                for (var k = 0; k < x.length; k++) w.push(x[k]);
                            else "all" === this.options.saveMissingTo ? w = this.languageUtils.toResolveHierarchy(e.lng || this.language) : w.push(e.lng || this.language);
                            this.options.saveMissing && (this.options.missingKeyHandler ? this.options.missingKeyHandler(w, a, i, d) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(w, a, i, d)), this.emit("missingKey", w, a, i, d)
                        }
                        d = this.extendTranslation(d, i, e), _ && d === i && this.options.appendNamespaceToMissingKey && (d = a + ":" + i), _ && this.options.parseMissingKeyHandler && (d = this.options.parseMissingKeyHandler(d))
                    }
                    return d
                }, e.prototype.extendTranslation = function(t, e, n) {
                    var r = this;
                    n.interpolation && this.interpolator.init(f({}, n, {
                        interpolation: f({}, this.options.interpolation, n.interpolation)
                    }));
                    var i = n.replace && "string" != typeof n.replace ? n.replace : n;
                    this.options.interpolation.defaultVariables && (i = f({}, this.options.interpolation.defaultVariables, i)), t = this.interpolator.interpolate(t, i, n.lng || this.language), n.nest !== !1 && (t = this.interpolator.nest(t, function() {
                        return r.translate.apply(r, arguments)
                    }, n)), n.interpolation && this.interpolator.reset();
                    var o = n.postProcess || this.options.postProcess,
                        a = "string" == typeof o ? [o] : o;
                    return void 0 !== t && a && a.length && n.applyPostProcessor !== !1 && (t = c.a.handle(a, t, e, n, this)), t
                }, e.prototype.resolve = function(t) {
                    var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = void 0;
                    return "string" == typeof t && (t = [t]), t.forEach(function(t) {
                        if (!e.isValidLookup(r)) {
                            var i = e.extractFromKey(t, n),
                                o = i.key,
                                a = i.namespaces;
                            e.options.fallbackNS && (a = a.concat(e.options.fallbackNS));
                            var s = void 0 !== n.count && "string" != typeof n.count,
                                u = void 0 !== n.context && "string" == typeof n.context && "" !== n.context,
                                c = n.lngs ? n.lngs : e.languageUtils.toResolveHierarchy(n.lng || e.language);
                            a.forEach(function(t) {
                                e.isValidLookup(r) || c.forEach(function(i) {
                                    if (!e.isValidLookup(r)) {
                                        var a = o,
                                            c = [a],
                                            l = void 0;
                                        s && (l = e.pluralResolver.getSuffix(i, n.count)), s && u && c.push(a + l), u && c.push(a += "" + e.options.contextSeparator + n.context), s && c.push(a += l);
                                        for (var d = void 0; d = c.pop();) e.isValidLookup(r) || (r = e.getResource(i, t, d, n))
                                    }
                                })
                            })
                        }
                    }), r
                }, e.prototype.isValidLookup = function(t) {
                    return !(void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t)
                }, e.prototype.getResource = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.resourceStore.getResource(t, e, n, r)
                }, e
            }(u.a);
        e.a = h
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }
        var o = n(10),
            a = function() {
                function t(e) {
                    r(this, t), this.options = e, this.whitelist = this.options.whitelist || !1, this.logger = o.a.create("languageUtils")
                }
                return t.prototype.getScriptPartFromCode = function(t) {
                    if (!t || t.indexOf("-") < 0) return null;
                    var e = t.split("-");
                    return 2 === e.length ? null : (e.pop(), this.formatLanguageCode(e.join("-")))
                }, t.prototype.getLanguagePartFromCode = function(t) {
                    if (!t || t.indexOf("-") < 0) return t;
                    var e = t.split("-");
                    return this.formatLanguageCode(e[0])
                }, t.prototype.formatLanguageCode = function(t) {
                    if ("string" == typeof t && t.indexOf("-") > -1) {
                        var e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            n = t.split("-");
                        return this.options.lowerCaseLng ? n = n.map(function(t) {
                            return t.toLowerCase()
                        }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = i(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = i(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = i(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
                }, t.prototype.isWhitelisted = function(t) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (t = this.getLanguagePartFromCode(t)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(t) > -1
                }, t.prototype.getFallbackCodes = function(t, e) {
                    if (!t) return [];
                    if ("string" == typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.apply(t)) return t;
                    if (!e) return t["default"] || [];
                    var n = t[e];
                    return n || (n = t[this.getScriptPartFromCode(e)]), n || (n = t[this.formatLanguageCode(e)]), n || (n = t["default"]), n || []
                }, t.prototype.toResolveHierarchy = function(t, e) {
                    var n = this,
                        r = this.getFallbackCodes(e || this.options.fallbackLng || [], t),
                        i = [],
                        o = function(t) {
                            t && (n.isWhitelisted(t) ? i.push(t) : n.logger.warn("rejecting non-whitelisted language code: " + t))
                        };
                    return "string" == typeof t && t.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(t)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(t)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(t))) : "string" == typeof t && o(this.formatLanguageCode(t)), r.forEach(function(t) {
                        i.indexOf(t) < 0 && o(n.formatLanguageCode(t))
                    }), i
                }, t
            }();
        e.a = a
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i() {
            var t = {};
            return a.forEach(function(e) {
                e.lngs.forEach(function(n) {
                    t[n] = {
                        numbers: e.nr,
                        plurals: s[e.fc]
                    }
                })
            }), t
        }
        var o = n(10),
            a = [{
                lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "tg", "ti", "tr", "uz", "wa"],
                nr: [1, 2],
                fc: 1
            }, {
                lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "es_ar", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt", "pt_br", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                nr: [1, 2],
                fc: 2
            }, {
                lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                nr: [1],
                fc: 3
            }, {
                lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
                nr: [1, 2, 5],
                fc: 4
            }, {
                lngs: ["ar"],
                nr: [0, 1, 2, 3, 11, 100],
                fc: 5
            }, {
                lngs: ["cs", "sk"],
                nr: [1, 2, 5],
                fc: 6
            }, {
                lngs: ["csb", "pl"],
                nr: [1, 2, 5],
                fc: 7
            }, {
                lngs: ["cy"],
                nr: [1, 2, 3, 8],
                fc: 8
            }, {
                lngs: ["fr"],
                nr: [1, 2],
                fc: 9
            }, {
                lngs: ["ga"],
                nr: [1, 2, 3, 7, 11],
                fc: 10
            }, {
                lngs: ["gd"],
                nr: [1, 2, 3, 20],
                fc: 11
            }, {
                lngs: ["is"],
                nr: [1, 2],
                fc: 12
            }, {
                lngs: ["jv"],
                nr: [0, 1],
                fc: 13
            }, {
                lngs: ["kw"],
                nr: [1, 2, 3, 4],
                fc: 14
            }, {
                lngs: ["lt"],
                nr: [1, 2, 10],
                fc: 15
            }, {
                lngs: ["lv"],
                nr: [1, 2, 0],
                fc: 16
            }, {
                lngs: ["mk"],
                nr: [1, 2],
                fc: 17
            }, {
                lngs: ["mnk"],
                nr: [0, 1, 2],
                fc: 18
            }, {
                lngs: ["mt"],
                nr: [1, 2, 11, 20],
                fc: 19
            }, {
                lngs: ["or"],
                nr: [2, 1],
                fc: 2
            }, {
                lngs: ["ro"],
                nr: [1, 2, 20],
                fc: 20
            }, {
                lngs: ["sl"],
                nr: [5, 1, 2, 3],
                fc: 21
            }],
            s = {
                1: function(t) {
                    return Number(t > 1)
                },
                2: function(t) {
                    return Number(1 != t)
                },
                3: function(t) {
                    return 0
                },
                4: function(t) {
                    return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? 1 : 2)
                },
                5: function(t) {
                    return Number(0 === t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && 10 >= t % 100 ? 3 : t % 100 >= 11 ? 4 : 5)
                },
                6: function(t) {
                    return Number(1 == t ? 0 : t >= 2 && 4 >= t ? 1 : 2)
                },
                7: function(t) {
                    return Number(1 == t ? 0 : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? 1 : 2)
                },
                8: function(t) {
                    return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
                },
                9: function(t) {
                    return Number(t >= 2)
                },
                10: function(t) {
                    return Number(1 == t ? 0 : 2 == t ? 1 : 7 > t ? 2 : 11 > t ? 3 : 4)
                },
                11: function(t) {
                    return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && 20 > t ? 2 : 3)
                },
                12: function(t) {
                    return Number(t % 10 != 1 || t % 100 == 11)
                },
                13: function(t) {
                    return Number(0 !== t)
                },
                14: function(t) {
                    return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
                },
                15: function(t) {
                    return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (10 > t % 100 || t % 100 >= 20) ? 1 : 2)
                },
                16: function(t) {
                    return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
                },
                17: function(t) {
                    return Number(1 == t || t % 10 == 1 ? 0 : 1)
                },
                18: function(t) {
                    return Number(0 == t ? 0 : 1 == t ? 1 : 2)
                },
                19: function(t) {
                    return Number(1 == t ? 0 : 0 === t || t % 100 > 1 && 11 > t % 100 ? 1 : t % 100 > 10 && 20 > t % 100 ? 2 : 3)
                },
                20: function(t) {
                    return Number(1 == t ? 0 : 0 === t || t % 100 > 0 && 20 > t % 100 ? 1 : 2)
                },
                21: function(t) {
                    return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
                }
            },
            u = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    r(this, t), this.languageUtils = e, this.options = n, this.logger = o.a.create("pluralResolver"), this.rules = i()
                }
                return t.prototype.addRule = function(t, e) {
                    this.rules[t] = e
                }, t.prototype.getRule = function(t) {
                    return this.rules[this.languageUtils.getLanguagePartFromCode(t)]
                }, t.prototype.needsPlural = function(t) {
                    var e = this.getRule(t);
                    return e && e.numbers.length > 1
                }, t.prototype.getSuffix = function(t, e) {
                    var n = this,
                        r = this.getRule(t);
                    if (r) {
                        if (1 === r.numbers.length) return "";
                        var i = r.noAbs ? r.plurals(e) : r.plurals(Math.abs(e)),
                            o = r.numbers[i];
                        this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                        var a = function() {
                            return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                        };
                        return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? "_plural_" + o.toString() : a() : "v2" === this.options.compatibilityJSON || 2 === r.numbers.length && 1 === r.numbers[0] ? a() : 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
                    }
                    return this.logger.warn("no plural rule found for: " + t), ""
                }, t
            }();
        e.a = u
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var i = n(19),
            o = n(10),
            a = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            s = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    r(this, t), this.logger = o.a.create("interpolator"), this.init(e, !0)
                }
                return t.prototype.init = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments[1];
                    e && (this.options = t, this.format = t.interpolation && t.interpolation.format || function(t) {
                        return t
                    }, this.escape = t.interpolation && t.interpolation.escape || i.c), t.interpolation || (t.interpolation = {
                        escapeValue: !0
                    });
                    var n = t.interpolation;
                    this.escapeValue = void 0 !== n.escapeValue ? n.escapeValue : !0, this.prefix = n.prefix ? i.g(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? i.g(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? i.g(n.nestingPrefix) : n.nestingPrefixEscaped || i.g("$t("), this.nestingSuffix = n.nestingSuffix ? i.g(n.nestingSuffix) : n.nestingSuffixEscaped || i.g(")"), this.resetRegExp()
                }, t.prototype.reset = function() {
                    this.options && this.init(this.options)
                }, t.prototype.resetRegExp = function() {
                    var t = this.prefix + "(.+?)" + this.suffix;
                    this.regexp = new RegExp(t, "g");
                    var e = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
                    this.regexpUnescape = new RegExp(e, "g");
                    var n = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
                    this.nestingRegexp = new RegExp(n, "g")
                }, t.prototype.interpolate = function(t, e, n) {
                    function r(t) {
                        return t.replace(/\$/g, "$$$$")
                    }
                    var o = this,
                        a = void 0,
                        s = void 0,
                        u = function(t) {
                            if (t.indexOf(o.formatSeparator) < 0) return i.d(e, t);
                            var r = t.split(o.formatSeparator),
                                a = r.shift().trim(),
                                s = r.join(o.formatSeparator).trim();
                            return o.format(i.d(e, a), s, n)
                        };
                    for (this.resetRegExp(); a = this.regexpUnescape.exec(t);) s = u(a[1].trim()), t = t.replace(a[0], s), this.regexpUnescape.lastIndex = 0;
                    for (; a = this.regexp.exec(t);) s = u(a[1].trim()), "string" != typeof s && (s = i.e(s)), s || (this.logger.warn("missed to pass in variable " + a[1] + " for interpolating " + t), s = ""), s = r(this.escapeValue ? this.escape(s) : s), t = t.replace(a[0], s), this.regexp.lastIndex = 0;
                    return t
                }, t.prototype.nest = function(t, e) {
                    function n(t) {
                        if (t.indexOf(",") < 0) return t;
                        var e = t.split(",");
                        t = e.shift();
                        var n = e.join(",");
                        n = this.interpolate(n, u), n = n.replace(/'/g, '"');
                        try {
                            u = JSON.parse(n)
                        } catch (r) {
                            this.logger.error("failed parsing options string in nesting for key " + t, r)
                        }
                        return t
                    }
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = void 0,
                        s = void 0,
                        u = a({}, r);
                    for (u.applyPostProcessor = !1; o = this.nestingRegexp.exec(t);) {
                        if (s = e(n.call(this, o[1].trim()), u), s && o[0] === t && "string" != typeof s) return s;
                        "string" != typeof s && (s = i.e(s)), s || (this.logger.warn("missed to resolve " + o[1] + " for nesting " + t), s = ""), t = t.replace(o[0], s), this.regexp.lastIndex = 0
                    }
                    return t
                }, t
            }();
        e.a = s
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                var i = n[r],
                    o = Object.getOwnPropertyDescriptor(e, i);
                o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
            }
            return t
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
        }

        function s(t, e) {
            for (var n = t.indexOf(e); - 1 !== n;) t.splice(n, 1), n = t.indexOf(e)
        }
        var u = n(19),
            c = n(10),
            l = n(15),
            d = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            f = function() {
                function t(t, e) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (u) {
                        i = !0, o = u
                    } finally {
                        try {
                            !r && s["return"] && s["return"]()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }
                return function(e, n) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return t(e, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            p = function(t) {
                function e(n, r, a) {
                    var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    i(this, e);
                    var u = o(this, t.call(this));
                    return u.backend = n, u.store = r, u.services = a, u.options = s, u.logger = c.a.create("backendConnector"), u.state = {}, u.queue = [], u.backend && u.backend.init && u.backend.init(a, s.backend, s), u
                }
                return a(e, t), e.prototype.queueLoad = function(t, e, n) {
                    var r = this,
                        i = [],
                        o = [],
                        a = [],
                        s = [];
                    return t.forEach(function(t) {
                        var n = !0;
                        e.forEach(function(e) {
                            var a = t + "|" + e;
                            r.store.hasResourceBundle(t, e) ? r.state[a] = 2 : r.state[a] < 0 || (1 === r.state[a] ? o.indexOf(a) < 0 && o.push(a) : (r.state[a] = 1, n = !1, o.indexOf(a) < 0 && o.push(a), i.indexOf(a) < 0 && i.push(a), s.indexOf(e) < 0 && s.push(e)))
                        }), n || a.push(t)
                    }), (i.length || o.length) && this.queue.push({
                        pending: o,
                        loaded: {},
                        errors: [],
                        callback: n
                    }), {
                        toLoad: i,
                        pending: o,
                        toLoadLanguages: a,
                        toLoadNamespaces: s
                    }
                }, e.prototype.loaded = function(t, e, n) {
                    var r = this,
                        i = t.split("|"),
                        o = f(i, 2),
                        a = o[0],
                        c = o[1];
                    e && this.emit("failedLoading", a, c, e), n && this.store.addResourceBundle(a, c, n), this.state[t] = e ? -1 : 2, this.queue.forEach(function(n) {
                        u.f(n.loaded, [a], c), s(n.pending, t), e && n.errors.push(e), 0 !== n.pending.length || n.done || (r.emit("loaded", n.loaded), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    }), this.queue = this.queue.filter(function(t) {
                        return !t.done
                    })
                }, e.prototype.read = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = this,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
                        a = arguments[5];
                    return t.length ? this.backend[n](t, e, function(s, u) {
                        return s && u && 5 > r ? void setTimeout(function() {
                            i.read.call(i, t, e, n, r + 1, 2 * o, a)
                        }, o) : void a(s, u)
                    }) : a(null, {})
                }, e.prototype.load = function(t, e, n) {
                    var r = this;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
                    var i = d({}, this.backend.options, this.options.backend);
                    "string" == typeof t && (t = this.services.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]);
                    var o = this.queueLoad(t, e, n);
                    return o.toLoad.length ? void(i.allowMultiLoading && this.backend.readMulti ? this.read(o.toLoadLanguages, o.toLoadNamespaces, "readMulti", null, null, function(t, e) {
                        t && r.logger.warn("loading namespaces " + o.toLoadNamespaces.join(", ") + " for languages " + o.toLoadLanguages.join(", ") + " via multiloading failed", t), !t && e && r.logger.log("successfully loaded namespaces " + o.toLoadNamespaces.join(", ") + " for languages " + o.toLoadLanguages.join(", ") + " via multiloading", e),
                            o.toLoad.forEach(function(n) {
                                var i = n.split("|"),
                                    o = f(i, 2),
                                    a = o[0],
                                    s = o[1],
                                    c = u.d(e, [a, s]);
                                if (c) r.loaded(n, t, c);
                                else {
                                    var l = "loading namespace " + s + " for language " + a + " via multiloading failed";
                                    r.loaded(n, l), r.logger.error(l)
                                }
                            })
                    }) : o.toLoad.forEach(function(t) {
                        r.loadOne(t)
                    })) : (o.pending.length || n(), null)
                }, e.prototype.reload = function(t, e) {
                    var n = this;
                    this.backend || this.logger.warn("No backend was added via i18next.use. Will not load resources.");
                    var r = d({}, this.backend.options, this.options.backend);
                    "string" == typeof t && (t = this.services.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]), r.allowMultiLoading && this.backend.readMulti ? this.read(t, e, "readMulti", null, null, function(r, i) {
                        r && n.logger.warn("reloading namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading failed", r), !r && i && n.logger.log("successfully reloaded namespaces " + e.join(", ") + " for languages " + t.join(", ") + " via multiloading", i), t.forEach(function(t) {
                            e.forEach(function(e) {
                                var o = u.d(i, [t, e]);
                                if (o) n.loaded(t + "|" + e, r, o);
                                else {
                                    var a = "reloading namespace " + e + " for language " + t + " via multiloading failed";
                                    n.loaded(t + "|" + e, a), n.logger.error(a)
                                }
                            })
                        })
                    }) : t.forEach(function(t) {
                        e.forEach(function(e) {
                            n.loadOne(t + "|" + e, "re")
                        })
                    })
                }, e.prototype.loadOne = function(t) {
                    var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = t.split("|"),
                        i = f(r, 2),
                        o = i[0],
                        a = i[1];
                    this.read(o, a, "read", null, null, function(r, i) {
                        r && e.logger.warn(n + "loading namespace " + a + " for language " + o + " failed", r), !r && i && e.logger.log(n + "loaded namespace " + a + " for language " + o, i), e.loaded(t, r, i)
                    })
                }, e.prototype.saveMissing = function(t, e, n, r) {
                    this.backend && this.backend.create && this.backend.create(t, e, n, r), t && t[0] && this.store.addResource(t[0], e, n, r)
                }, e
            }(l.a);
        e.a = p
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                var i = n[r],
                    o = Object.getOwnPropertyDescriptor(e, i);
                o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
            }
            return t
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function a(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : r(t, e))
        }
        var s = n(10),
            u = n(15),
            c = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            l = function(t) {
                function e(n, r, a) {
                    var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    i(this, e);
                    var c = o(this, t.call(this));
                    return c.cache = n, c.store = r, c.services = a, c.options = u, c.logger = s.a.create("cacheConnector"), c.cache && c.cache.init && c.cache.init(a, u.cache, u), c
                }
                return a(e, t), e.prototype.load = function(t, e, n) {
                    var r = this;
                    if (!this.cache) return n && n();
                    var i = c({}, this.cache.options, this.options.cache),
                        o = "string" == typeof t ? this.services.languageUtils.toResolveHierarchy(t) : t;
                    i.enabled ? this.cache.load(o, function(t, e) {
                        if (t && r.logger.error("loading languages " + o.join(", ") + " from cache failed", t), e)
                            for (var i in e)
                                if (Object.prototype.hasOwnProperty.call(e, i))
                                    for (var a in e[i])
                                        if (Object.prototype.hasOwnProperty.call(e[i], a) && "i18nStamp" !== a) {
                                            var s = e[i][a];
                                            s && r.store.addResourceBundle(i, a, s)
                                        }
                        n && n()
                    }) : n && n()
                }, e.prototype.save = function() {
                    this.cache && this.options.cache && this.options.cache.enabled && this.cache.save(this.store.data)
                }, e
            }(u.a);
        e.a = l
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                whitelist: !1,
                nonExplicitWhitelist: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                saveMissing: !1,
                saveMissingTo: "fallback",
                missingKeyHandler: !1,
                postProcess: !1,
                returnNull: !0,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: function() {},
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function(t) {
                    return {
                        defaultValue: t[1]
                    }
                },
                interpolation: {
                    escapeValue: !0,
                    format: function(t, e, n) {
                        return t
                    },
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    defaultVariables: void 0
                }
            }
        }

        function i(t) {
            return "string" == typeof t.ns && (t.ns = [t.ns]), "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]), "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]), t.whitelist && t.whitelist.indexOf("cimode") < 0 && t.whitelist.push("cimode"), t
        }
        n.d(e, "a", function() {
            return r
        }), e.b = i
    },
    function(t, e, n) {
        t.exports = n(69)["default"]
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function i(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e["default"] = t, e
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a() {
            return {
                order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
                lookupQuerystring: "lng",
                lookupCookie: "i18next",
                lookupLocalStorage: "i18nextLng",
                caches: ["localStorage"]
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = n(70),
            c = i(u),
            l = n(71),
            d = r(l),
            f = n(72),
            p = r(f),
            h = n(73),
            v = r(h),
            g = n(74),
            m = r(g),
            b = n(75),
            y = r(b),
            _ = function() {
                function t(e) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    o(this, t), this.type = "languageDetector", this.detectors = {}, this.init(e, n)
                }
                return s(t, [{
                    key: "init",
                    value: function(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                        this.services = t, this.options = c.defaults(e, this.options || {}, a()), this.i18nOptions = n, this.addDetector(d["default"]), this.addDetector(p["default"]), this.addDetector(v["default"]), this.addDetector(m["default"]), this.addDetector(y["default"])
                    }
                }, {
                    key: "addDetector",
                    value: function(t) {
                        this.detectors[t.name] = t
                    }
                }, {
                    key: "detect",
                    value: function(t) {
                        var e = this;
                        t || (t = this.options.order);
                        var n = [];
                        t.forEach(function(t) {
                            if (e.detectors[t]) {
                                var r = e.detectors[t].lookup(e.options);
                                r && "string" == typeof r && (r = [r]), r && (n = n.concat(r))
                            }
                        });
                        var r = void 0;
                        return n.forEach(function(t) {
                            if (!r) {
                                var n = e.services.languageUtils.formatLanguageCode(t);
                                e.services.languageUtils.isWhitelisted(n) && (r = n)
                            }
                        }), r || this.i18nOptions.fallbackLng[0]
                    }
                }, {
                    key: "cacheUserLanguage",
                    value: function(t, e) {
                        var n = this;
                        e || (e = this.options.caches), e && e.forEach(function(e) {
                            n.detectors[e] && n.detectors[e].cacheUserLanguage(t, n.options)
                        })
                    }
                }]), t
            }();
        _.type = "languageDetector", e["default"] = _
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return a.call(s.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        }

        function i(t) {
            return a.call(s.call(arguments, 1), function(e) {
                if (e)
                    for (var n in e) t[n] = e[n]
            }), t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.defaults = r, e.extend = i;
        var o = [],
            a = o.forEach,
            s = o.slice
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = {
            create: function(t, e, n, r) {
                var i = void 0;
                if (n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 60 * n * 1e3), i = "; expires=" + o.toGMTString()
                } else i = "";
                r = r ? "domain=" + r + ";" : "", document.cookie = t + "=" + e + i + ";" + r + "path=/"
            },
            read: function(t) {
                for (var e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                    for (var i = n[r];
                        " " === i.charAt(0);) i = i.substring(1, i.length);
                    if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
                }
                return null
            },
            remove: function(t) {
                this.create(t, "", -1)
            }
        };
        e["default"] = {
            name: "cookie",
            lookup: function(t) {
                var e = void 0;
                if (t.lookupCookie && "undefined" != typeof document) {
                    var n = r.read(t.lookupCookie);
                    n && (e = n)
                }
                return e
            },
            cacheUserLanguage: function(t, e) {
                e.lookupCookie && "undefined" != typeof document && r.create(e.lookupCookie, t, e.cookieMinutes, e.cookieDomain)
            }
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            name: "querystring",
            lookup: function(t) {
                var e = void 0;
                if ("undefined" != typeof window)
                    for (var n = window.location.search.substring(1), r = n.split("&"), i = 0; i < r.length; i++) {
                        var o = r[i].indexOf("=");
                        if (o > 0) {
                            var a = r[i].substring(0, o);
                            a === t.lookupQuerystring && (e = r[i].substring(o + 1))
                        }
                    }
                return e
            }
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = void 0;
        try {
            r = "undefined" !== window && null !== window.localStorage;
            var i = "i18next.translate.boo";
            window.localStorage.setItem(i, "foo"), window.localStorage.removeItem(i)
        } catch (o) {
            r = !1
        }
        e["default"] = {
            name: "localStorage",
            lookup: function(t) {
                var e = void 0;
                if (t.lookupLocalStorage && r) {
                    var n = window.localStorage.getItem(t.lookupLocalStorage);
                    n && (e = n)
                }
                return e
            },
            cacheUserLanguage: function(t, e) {
                e.lookupLocalStorage && r && window.localStorage.setItem(e.lookupLocalStorage, t)
            }
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            name: "navigator",
            lookup: function(t) {
                var e = [];
                if ("undefined" != typeof navigator) {
                    if (navigator.languages)
                        for (var n = 0; n < navigator.languages.length; n++) e.push(navigator.languages[n]);
                    navigator.userLanguage && e.push(navigator.userLanguage), navigator.language && e.push(navigator.language)
                }
                return e.length > 0 ? e : void 0
            }
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = {
            name: "htmlTag",
            lookup: function(t) {
                var e = void 0,
                    n = t.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                return n && "function" == typeof n.getAttribute && (e = n.getAttribute("lang")), e
            }
        }
    },
    function(t, e) {
        e.defaults = {}, e.set = function(t, n, r) {
            var i = r || {},
                o = e.defaults,
                a = i.expires || o.expires,
                s = i.domain || o.domain,
                u = void 0 !== i.path ? i.path : void 0 !== o.path ? o.path : "/",
                c = void 0 !== i.secure ? i.secure : o.secure,
                l = void 0 !== i.httponly ? i.httponly : o.httponly,
                d = void 0 !== i.samesite ? i.samesite : o.samesite,
                f = a ? new Date("number" == typeof a ? (new Date).getTime() + 864e5 * a : a) : 0;
            document.cookie = t.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + n.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (f && f.getTime() >= 0 ? ";expires=" + f.toUTCString() : "") + (s ? ";domain=" + s : "") + (u ? ";path=" + u : "") + (c ? ";secure" : "") + (l ? ";httponly" : "") + (d ? ";samesite=" + d : "")
        }, e.get = function(t) {
            for (var e = document.cookie.split(";"); e.length;) {
                var n = e.pop(),
                    r = n.indexOf("=");
                r = 0 > r ? n.length : r;
                var i = decodeURIComponent(n.slice(0, r).replace(/^\s+/, ""));
                if (i === t) return decodeURIComponent(n.slice(r + 1))
            }
            return null
        }, e.erase = function(t, n) {
            e.set(t, "", {
                expires: -1,
                domain: n && n.domain,
                path: n && n.path,
                secure: 0,
                httponly: 0
            })
        }, e.all = function() {
            for (var t = {}, e = document.cookie.split(";"); e.length;) {
                var n = e.pop(),
                    r = n.indexOf("=");
                r = 0 > r ? n.length : r;
                var i = decodeURIComponent(n.slice(0, r).replace(/^\s+/, ""));
                t[i] = decodeURIComponent(n.slice(r + 1))
            }
            return t
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return "//" === t.slice(0, 2) ? "https:" + t : "http" === t.slice(0, 4) ? t : "https://" + i + "/dingding/desktop-assets/" + o + "/" + t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.assetsResolve = r;
        var i = "g.alicdn.com",
            o = e.ASSETS_V = "1.1.1"
    },
    function(t, e, n) {
        "use strict";
        e.decode = e.parse = n(79), e.encode = e.stringify = n(80)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        t.exports = function(t, e, n, o) {
            e = e || "&", n = n || "=";
            var a = {};
            if ("string" != typeof t || 0 === t.length) return a;
            var s = /\+/g;
            t = t.split(e);
            var u = 1e3;
            o && "number" == typeof o.maxKeys && (u = o.maxKeys);
            var c = t.length;
            u > 0 && c > u && (c = u);
            for (var l = 0; c > l; ++l) {
                var d, f, p, h, v = t[l].replace(s, "%20"),
                    g = v.indexOf(n);
                g >= 0 ? (d = v.substr(0, g), f = v.substr(g + 1)) : (d = v, f = ""), p = decodeURIComponent(d), h = decodeURIComponent(f), r(a, p) ? i(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
            }
            return a
        };
        var i = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (t.map) return t.map(e);
            for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
            return n
        }
        var i = function(t) {
            switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
            }
        };
        t.exports = function(t, e, n, s) {
            return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? r(a(t), function(a) {
                var s = encodeURIComponent(i(a)) + n;
                return o(t[a]) ? r(t[a], function(t) {
                    return s + encodeURIComponent(i(t))
                }).join(e) : s + encodeURIComponent(i(t[a]))
            }).join(e) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(t)) : ""
        };
        var o = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            a = Object.keys || function(t) {
                var e = [];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                return e
            }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(82)
        }
        var i = n(7),
            o = n(84),
            a = n(85),
            s = !1,
            u = r,
            c = "data-v-719bf907",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(83);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("13180f07", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.live-multi-tag[data-v-719bf907],.live-type-tag-wrap[data-v-719bf907]{display:-webkit-box;display:-webkit-flex;display:flex\n}\n.live-multi-tag[data-v-719bf907]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:inherit;height:inherit;margin-left:.133333rem;text-align:center;color:#ff943e\n}\n.live-multi-tag>span[data-v-719bf907]{display:inline-block;white-space:nowrap;padding:0 .04rem;font-size:.16rem;border-radius:.04rem;border:.013333rem solid #ff943e;-webkit-transform:scale(.8);transform:scale(.8)\n}", ""])
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(8),
            i = {
                NORMAL: 0,
                CROSS_GROUP: 1,
                FORWARD_GROUP: 2
            };
        e["default"] = {
            props: {
                liveType: {
                    "default": 0
                }
            },
            components: {},
            data: function() {
                return {
                    tagName: "",
                    canShowTag: !1
                }
            },
            created: function() {},
            watch: {
                liveType: function(t, e) {
                    t === i.CROSS_GROUP && (this.tagName = r.i18next.t("pc_grouplive_multi_live_tag"), this.canShowTag = !0)
                }
            }
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "live-type-tag-wrap"
                }, [t.canShowTag ? n("div", {
                    staticClass: "live-multi-tag"
                }, [n("span", [t._v(t._s(t.tagName))])]) : t._e()])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(87)
        }
        var i = n(7),
            o = n(89),
            a = n(94),
            s = !1,
            u = r,
            c = "data-v-19be6841",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(88);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("5c657442", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.favor-wrap[data-v-19be6841]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end\n}\n.favor-btn[data-v-19be6841]{cursor:pointer;width:.533333rem;height:.533333rem;border-radius:.533333rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);background-repeat:no-repeat;background-position:center center;background-image:url(https://gw.alicdn.com/tfs/TB1wd7pfZrI8KJjy0FhXXbfnpXa-48-48.png);background-size:.333333rem .333333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out\n}\n.favor-btn-release[data-v-19be6841]{background-size:.266667rem .266667rem\n}\n.favor-count[data-v-19be6841]{background-image:-webkit-linear-gradient(231deg,#6163fd 1%,#3296fa);background-image:linear-gradient(-141deg,#6163fd 1%,#3296fa);border-radius:.026667rem;font-size:.16rem;color:#fff;padding:.053333rem .106667rem\n}\n.like-container[data-v-19be6841]{width:1.333333rem;height:4rem;position:absolute;right:0;bottom:.8rem;z-index:100\n}", ""])
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(8),
            o = n(90),
            a = n(93),
            s = r(a);
        e["default"] = {
            props: {
                cid: {
                    "default": "",
                    type: String
                },
                favorCount: {
                    "default": 0
                },
                favorCountType: {
                    "default": ""
                }
            },
            components: {},
            data: function() {
                return {
                    activitCls: "",
                    likeText: i.i18next.t("pc_grouplive_live_praise")
                }
            },
            created: function() {},
            mounted: function() {
                this.initLikeAnim()
            },
            methods: {
                favor: function() {
                    var t = this;
                    this.activitCls = "favor-btn-release", setTimeout(function() {
                        t.activitCls = ""
                    }, 300), this.$emit("favor")
                },
                initLikeAnim: function() {
                    this.likeAnim = new o.LikeAnim({
                        container: "#J_Like_Container",
                        showLikeBtn: !1,
                        xLimitAttenuationRate: 1,
                        ySpeedBase: 6,
                        random: !0,
                        visualSizeRatio: 2.8,
                        icons: s["default"]
                    })
                }
            },
            watch: {
                favorCount: function(t, e) {
                    var n = this;
                    if ("message" === this.favorCountType || "action" === this.favorCountType) {
                        var r = t - e;
                        isNaN(r) && (r = 1), r = r > 10 ? 10 : r;
                        for (var i = 0; r > i; i++) setTimeout(function() {
                            n.likeAnim.like()
                        }, 200 * i)
                    }
                }
            },
            filters: {
                numOmit: function(t) {
                    var e = 1e5;
                    return parseInt(t) > e ? (t / 1e4).toFixed(1) + "万" : t
                }
            }
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LikeAnim = void 0;
        var o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = n(91),
            s = r(a),
            u = n(92),
            c = r(u),
            l = ["//gw.alicdn.com/tfs/TB1lqdXLpXXXXcwXpXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1T6lgLpXXXXajXpXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1V.tmLpXXXXaVXXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1mHc4LXXXXXaoXVXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1h.33LXXXXXaGXVXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1KXtoLpXXXXahXXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1oqAYLXXXXXaGaXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1uYXjLpXXXXchXXXXXXXXXXXX-154-181.png", "//gw.alicdn.com/tfs/TB1oWMZLXXXXXa.XVXXXXXXXXXX-154-181.png"],
            d = {
                canvasId: "J_LiveAnimCanvas",
                showLikeBtn: !0,
                likeBtnImg: "//img.alicdn.com/tfs/TB17.kVLXXXXXXAapXXXXXXXXXX-72-74.png",
                likeBtnWidth: 36,
                likeBtnHeight: 36,
                likeBtnClass: "live-anim-btn",
                likeBtnId: "J_LiveAnimBtn",
                canvasIconOpacity: .8,
                icons: l,
                iconWidth: 80,
                iconWidthRatio: .6,
                iconHeight: 80,
                giftNumberLimit: 40,
                xSpeedBase: 1,
                xSpeedRandomRange: .5,
                xLimitRandomRange: .2,
                xLimitAttenuationRate: .95,
                ySpeedBase: 3,
                ySpeedRandomRange: .3,
                yLimitRandomRange: .3,
                stayDuration: 200,
                visualSizeRatio: 2,
                activeFading: !0
            },
            f = function() {
                function t(e) {
                    i(this, t), e = e || {}, e.container || console.warn("未找到 like-anim 容器!"), this.cfg = s["default"].merge(d, e), this.clickHandler = e.clickHandler || function() {}, this.initCanvas(e.container), this.initIcon(e)
                }
                return o(t, [{
                    key: "initCanvas",
                    value: function() {
                        try {
                            var t = document.querySelector(this.cfg.container)
                        } catch (e) {
                            return void console.warn(e)
                        }
                        var n = t.clientWidth,
                            r = t.clientHeight;
                        if (n && r) {
                            t.className += " live-anim-wrap", this.cfg.canvasWidth = Math.floor(n * this.cfg.visualSizeRatio), this.cfg.canvasHeight = Math.floor(r * this.cfg.visualSizeRatio);
                            var i = document.createElement("canvas");
                            if (i.style.width = n + "px", i.style.height = r + "px", i.setAttribute("id", this.cfg.canvasId), i.setAttribute("width", this.cfg.canvasWidth), i.setAttribute("height", this.cfg.canvasHeight), this.cxt = i.getContext("2d"), this.cxt.globalAlpha = this.cfg.canvasIconOpacity, t.appendChild(i), this.cfg.showLikeBtn) {
                                var o = document.createElement("div");
                                o.style.backgroundImage = "url('" + this.cfg.likeBtnImg + "')", o.style.width = this.cfg.likeBtnWidth + "px", o.style.height = this.cfg.likeBtnHeight + "px", o.style.marginLeft = -this.cfg.likeBtnWidth / 2 + "px", o.className = this.cfg.likeBtnClass, o.setAttribute("id", this.cfg.likeBtnId), o.addEventListener("click", this.clickHandler), t.appendChild(o)
                            }
                            this.initComplete = !0, this.giftArr = []
                        }
                    }
                }, {
                    key: "initIcon",
                    value: function(t) {
                        this.cfg.iconWidth = t.iconWidth || this.cfg.canvasWidth * this.cfg.iconWidthRatio, this.cfg.iconHeight = t.iconHeight || this.cfg.iconWidth
                    }
                }, {
                    key: "like",
                    value: function(t) {
                        if (this.initComplete && !(this.giftArr.length > this.cfg.giftNumberLimit)) {
                            if (t = t || {}, !t.iconSrc) {
                                if (!this.cfg.icons.length) return;
                                this.cfg.random === !0 ? this.i = Math.floor(Math.random() * this.cfg.icons.length) : this.i = this.i ? (this.i + 1) % this.cfg.icons.length : 1, t.iconSrc = this.cfg.icons[this.i]
                            }
                            t = s["default"].merge(this.cfg, t);
                            var e = new c["default"](t);
                            this.giftArr.push(e), this.startLoop()
                        }
                    }
                }, {
                    key: "startLoop",
                    value: function() {
                        var t = this;
                        if (!this.animFrame) {
                            var e = function n() {
                                return t.cxt.clearRect(0, 0, t.cfg.canvasWidth, t.cfg.canvasHeight), t.recycle(), t.giftArr.length ? (t.giftArr.forEach(function(t) {
                                    t.move()
                                }), void(t.animFrame = window.requestAnimFrame(n))) : void t.stopLoop()
                            };
                            this.animFrame = window.requestAnimFrame(e)
                        }
                    }
                }, {
                    key: "stopLoop",
                    value: function() {
                        window.cancelAnimationFrame(this.animFrame), delete this.animFrame
                    }
                }, {
                    key: "recycle",
                    value: function() {
                        var t = [];
                        this.giftArr.forEach(function(e) {
                            !e.finished && t.push(e)
                        }), this.giftArr = t
                    }
                }]), t
            }();
        window.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60)
            }
        }(), e.LikeAnim = f
    },
    function(t, e, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        t.exports = {
            mix: function(t, e, n, r, i) {
                var o;
                return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
                    if (e)
                        for (var n in e) void 0 !== (o = e[n]) && (t[n] = o)
                }), t
            },
            merge: function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return this.mix.apply(null, [{}].concat(t))
            },
            isObject: function(t) {
                return "object" == ("undefined" == typeof t ? "undefined" : r(t))
            },
            isRegExp: function(t) {
                return t instanceof RegExp
            },
            isArray: function(t) {
                return "[object Array]" == Object.prototype.toString.call(t)
            },
            isFunction: function(t) {
                return t instanceof Function
            },
            isString: function(t) {
                return "string" == typeof t
            },
            isNumber: function(t) {
                return "number" == typeof t
            }
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = function() {
                function t(e) {
                    r(this, t), e = e || {}, this.cfg = e, this.drawIcon()
                }
                return i(t, [{
                    key: "drawIcon",
                    value: function() {
                        var t = this;
                        this.iconElem = new Image, this.iconElem.onload = function() {
                            var e = document.getElementById(t.cfg.canvasId);
                            t.cxt = e.getContext("2d"), t.x = (t.cfg.canvasWidth - t.cfg.iconWidth) / 2, t.y = t.cfg.canvasHeight - t.cfg.iconHeight - 40, t.directLeft = Math.random() > .5, t.xSpeed = 1 - (1 - 2 * Math.random()) * t.cfg.xSpeedRandomRange, t.ySpeed = 1 - (1 - 2 * Math.random()) * t.cfg.ySpeedRandomRange, t.maxHorizontalOffset = 1 - (1 - Math.random()) * t.cfg.xLimitRandomRange, t.maxVerticalOffset = 1 - (1 - Math.random()) * t.cfg.yLimitRandomRange, t.cxt.drawImage(t.iconElem, t.x, t.y, t.cfg.iconWidth, t.cfg.iconHeight)
                        }, this.iconElem.src = this.cfg.iconSrc
                    }
                }, {
                    key: "move",
                    value: function() {
                        var t = this;
                        if (this.cxt && !this.destroy) {
                            var e = this.cfg.xSpeedBase * this.xSpeed,
                                n = this.cfg.ySpeedBase * this.ySpeed;
                            this.y - n > (1 - this.maxVerticalOffset) * this.cfg.canvasHeight ? (this.y -= n, this.directLeft ? this.x - e >= this.cfg.canvasWidth * (1 - this.maxHorizontalOffset) / 2 ? this.x -= e : (this.directLeft = !this.directLeft, this.maxHorizontalOffset *= this.cfg.xLimitAttenuationRate) : this.x + this.cfg.iconWidth + e <= this.cfg.canvasWidth * (1 + this.maxHorizontalOffset) / 2 ? this.x += e : (this.directLeft = !this.directLeft, this.maxHorizontalOffset *= this.cfg.xLimitAttenuationRate)) : this.finishTimeout = this.finishTimeout || setTimeout(function() {
                                t.finished = !0
                            }, this.cfg.stayDuration), this.cfg.activeFading && (this.cxt.globalAlpha = (this.y / this.cfg.canvasHeight).toFixed(2)), this.cxt.drawImage(this.iconElem, this.x, this.y, this.cfg.iconWidth, this.cfg.iconHeight)
                        }
                    }
                }]), t
            }();
        e["default"] = o
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = ["//gw.alicdn.com/tfs/TB106EyhRfH8KJjy1XbXXbLdXXa-60-60.png", "//gw.alicdn.com/tfs/TB1Y7AYhIrI8KJjy0FhXXbfnpXa-60-60.png", "//gw.alicdn.com/tfs/TB15FBch3vD8KJjy0FlXXagBFXa-60-60.png", "//gw.alicdn.com/tfs/TB1zaxvh3DD8KJjy0FdXXcjvXXa-60-60.png"]
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "favor-wrap"
                }, [n("div", {
                    staticClass: "like-container",
                    attrs: {
                        id: "J_Like_Container"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "favor-count"
                }, [t._v(t._s(t.likeText) + " " + t._s(t._f("numOmit")(t.favorCount)))]), t._v(" "), n("div", {
                    ref: "btn",
                    "class": ["favor-btn", t.activitCls],
                    on: {
                        click: t.favor
                    }
                })])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        ! function(e, n) {
            t.exports = n()
        }("undefined" != typeof self ? self : this, function() {
            return function(t) {
                function e(n) {
                    if (r[n]) return r[n].exports;
                    var i = r[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
                }
                var n = window.webpackJsonpVideoX;
                window.webpackJsonpVideoX = function(e, r, o) {
                    for (var a, s, u = 0, c = []; u < e.length; u++) s = e[u], i[s] && c.push(i[s][0]), i[s] = 0;
                    for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
                    for (n && n(e, r, o); c.length;) c.shift()()
                };
                var r = {},
                    i = {
                        2: 0
                    };
                return e.e = function(t) {
                    function n() {
                        s.onerror = s.onload = null, clearTimeout(u);
                        var e = i[t];
                        0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")), i[t] = void 0)
                    }
                    var r = i[t];
                    if (0 === r) return new Promise(function(t) {
                        t()
                    });
                    if (r) return r[2];
                    var o = new Promise(function(e, n) {
                        r = i[t] = [e, n]
                    });
                    r[2] = o;
                    var a = document.getElementsByTagName("head")[0],
                        s = document.createElement("script");
                    s.type = "text/javascript", s.charset = "utf-8", s.async = !0, s.timeout = 12e4, e.nc && s.setAttribute("nonce", e.nc), s.src = e.p + "" + t + ".js";
                    var u = setTimeout(n, 12e4);
                    return s.onerror = s.onload = n, a.appendChild(s), o
                }, e.m = t, e.c = r, e.d = function(t, n, r) {
                    e.o(t, n) || Object.defineProperty(t, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, e.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t["default"]
                    } : function() {
                        return t
                    };
                    return e.d(n, "a", n), n
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "", e.oe = function(t) {
                    throw console.error(t), t
                }, e(e.s = 167)
            }([
                function(t, e) {
                    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = n)
                },
                function(t, e, n) {
                    "use strict";
                    e.__esModule = !0, e["default"] = function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                },
                function(t, e, n) {
                    "use strict";
                    e.__esModule = !0;
                    var r = n(77),
                        i = function(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }(r);
                    e["default"] = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), i["default"](t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }()
                },
                function(t, e) {
                    var n = t.exports = {
                        version: "2.6.11"
                    };
                    "number" == typeof __e && (__e = n)
                },
                function(t, e, n) {
                    var r = n(19),
                        i = n(56),
                        o = n(36),
                        a = Object.defineProperty;
                    e.f = n(5) ? Object.defineProperty : function(t, e, n) {
                        if (r(t), e = o(e, !0), r(n), i) try {
                            return a(t, e, n)
                        } catch (t) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                        return "value" in n && (t[e] = n.value), t
                    }
                },
                function(t, e, n) {
                    t.exports = !n(24)(function() {
                        return 7 != Object.defineProperty({}, "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    })
                },
                function(t, e) {
                    var n = {}.hasOwnProperty;
                    t.exports = function(t, e) {
                        return n.call(t, e)
                    }
                },
                function(t, e) {
                    function n(t) {
                        return !!t && "object" == typeof t
                    }
                    t.exports = n
                },
                function(t, e, n) {
                    var r = n(91),
                        i = n(35);
                    t.exports = function(t) {
                        return r(i(t))
                    }
                },
                function(t, e, n) {
                    var r = n(4),
                        i = n(26);
                    t.exports = n(5) ? function(t, e, n) {
                        return r.f(t, e, i(1, n))
                    } : function(t, e, n) {
                        return t[e] = n, t
                    }
                },
                function(t, e) {
                    t.exports = function(t) {
                        return "object" == typeof t ? null !== t : "function" == typeof t
                    }
                },
                function(t, e, n) {
                    var r = n(41)("wks"),
                        i = n(27),
                        o = n(0).Symbol,
                        a = "function" == typeof o;
                    (t.exports = function(t) {
                        return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
                    }).store = r
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = {
                        VIDEO_ABORT: "video:abort",
                        VIDEO_ENDED: "video:ended",
                        VIDEO_ERROR: "video:error",
                        VIDEO_PLAY: "video:play",
                        VIDEO_PLAYING: "video:playing",
                        VIDEO_PROGRESS: "video:progress",
                        VIDEO_LOADSTART: "video:loadstart",
                        VIDEO_SUSPEND: "video:suspend",
                        VIDEO_STALLED: "video:stalled",
                        VIDEO_WAITING: "video:waiting",
                        VIDEO_CANPLAY: "video:canplay",
                        VIDEO_CANPLAYTHROUGH: "video:canplaythrough",
                        VIDEO_TIMEUPDATE: "video:timeupdate",
                        VIDEO_VOLUMECHANGE: "video:volumechange",
                        VIDEO_SEEKING: "video:seeking",
                        VIDEO_SEEKED: "video:seeked",
                        VIDEO_PAUSE: "video:pause",
                        VIDEO_REALPLAY: "video:realPlay",
                        VIDEO_EXITFULLSCREEN: "video:exitFullscreen",
                        VIDEO_ENTERFULLSCREEN: "video:enterFullscreen",
                        VIDEO_RECOVERED_EARLY_EOF: "video:recoveredEarlyEOF",
                        VIDEO_LOADING_COMPLETE: "video:loadingComplete"
                    };
                    e["default"] = r
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }

                    function i(t) {
                        return "string" == typeof t && /\S/.test(t)
                    }

                    function o(t) {
                        if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
                    }

                    function a(t) {
                        return new RegExp("(^|\\s)" + t + "($|\\s)")
                    }

                    function s(t) {
                        return function(e, n) {
                            return i(e) ? (i(n) && (n = document.querySelector(n)), (E(n) ? n : document)[t](e)) : document[t](null)
                        }
                    }

                    function u(t) {
                        return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
                    }

                    function c() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = document.createElement(t);
                        return Object.getOwnPropertyNames(e).forEach(function(t) {
                            var n = e[t]; - 1 !== t.indexOf("aria-") || "role" === t || "type" === t ? r.setAttribute(t, n) : r[t] = n
                        }), Object.getOwnPropertyNames(n).forEach(function(t) {
                            n[t], r.setAttribute(t, n[t])
                        }), r
                    }

                    function l(t, e) {
                        void 0 === t.textContent ? t.innerText = e : t.textContent = e
                    }

                    function d(t, e) {
                        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
                    }

                    function f(t) {
                        var e = t[V];
                        return e || (e = t[V] = N.newGUID()), M[e] || (M[e] = {}), M[e]
                    }

                    function p(t) {
                        var e = t[V];
                        return !!e && !!Object.getOwnPropertyNames(M[e]).length
                    }

                    function h(t) {
                        var e = t[V];
                        if (e) {
                            delete M[e];
                            try {
                                delete t[V]
                            } catch (e) {
                                t.removeAttribute ? t.removeAttribute(V) : t[V] = null
                            }
                        }
                    }

                    function v(t, e) {
                        return t.classList ? t.classList.contains(e) : (o(e), a(e).test(t.className))
                    }

                    function g(t, e) {
                        return t.classList ? t.classList.add(e) : v(t, e) || (t.className = (t.className + " " + e).trim()), t
                    }

                    function m(t, e) {
                        return t.classList ? t.classList.remove(e) : (o(e), t.className = t.className.split(/\s+/).filter(function(t) {
                            return t !== e
                        }).join(" ")), t
                    }

                    function b(t, e, n) {
                        var r = v(t, e);
                        return "function" == typeof n && (n = n(t, e)), "boolean" != typeof n && (n = !r), n !== r ? (n ? g(t, e) : m(t, e), t) : void 0
                    }

                    function y(t, e) {
                        Object.getOwnPropertyNames(e).forEach(function(n) {
                            var r = e[n];
                            null === r || void 0 === r || !1 === r ? t.removeAttribute(n) : t.setAttribute(n, !0 === r ? "" : r)
                        })
                    }

                    function _(t) {
                        var e, n, r, i, o;
                        if (e = {}, n = ",autoplay,controls,loop,muted,default,", t && t.attributes && t.attributes.length > 0) {
                            r = t.attributes;
                            for (var a = r.length - 1; a >= 0; a--) i = r[a].name, o = r[a].value, "boolean" != typeof t[i] && -1 === n.indexOf("," + i + ",") || (o = null !== o), e[i] = o
                        }
                        return e
                    }

                    function w() {
                        document.body.focus(), document.onselectstart = function() {
                            return !1
                        }
                    }

                    function x() {
                        document.onselectstart = function() {
                            return !0
                        }
                    }

                    function k(t) {
                        var e = void 0;
                        if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
                            left: 0,
                            top: 0
                        };
                        var n = document.documentElement,
                            r = document.body,
                            i = n.clientLeft || r.clientLeft || 0,
                            o = window.pageXOffset || r.scrollLeft,
                            a = e.left + o - i,
                            s = n.clientTop || r.clientTop || 0,
                            u = window.pageYOffset || r.scrollTop,
                            c = e.top + u - s;
                        return {
                            left: Math.round(a),
                            top: Math.round(c)
                        }
                    }

                    function O(t, e) {
                        var n = {},
                            r = k(t),
                            i = t.offsetWidth,
                            o = t.offsetHeight,
                            a = r.top,
                            s = r.left,
                            u = e.pageY,
                            c = e.pageX;
                        return e.changedTouches && (c = e.changedTouches[0].pageX, u = e.changedTouches[0].pageY), n.y = Math.max(0, Math.min(1, (a - u + o) / o)), n.x = Math.max(0, Math.min(1, (c - s) / i)), n
                    }

                    function E(t) {
                        return !!t && "object" === (void 0 === t ? "undefined" : I["default"](t)) && 1 === t.nodeType
                    }

                    function S(t) {
                        return !!t && "object" === (void 0 === t ? "undefined" : I["default"](t)) && 3 === t.nodeType;
                    }

                    function C(t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        return t
                    }

                    function j(t) {
                        return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function(t) {
                            return "function" == typeof t && (t = t()), E(t) || S(t) ? t : "string" == typeof t && /\S/.test(t) ? document.createTextNode(t) : void 0
                        }).filter(function(t) {
                            return t
                        })
                    }

                    function T(t, e) {
                        return j(e).forEach(function(e) {
                            return t.appendChild(e)
                        }), t
                    }

                    function P(t, e) {
                        return T(C(t), e)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.$$ = e.$ = void 0;
                    var L = n(17),
                        I = r(L);
                    e.getEl = u, e.createEl = c, e.textContent = l, e.insertElFirst = d, e.getElData = f, e.hasElData = p, e.removeElData = h, e.hasElClass = v, e.addElClass = g, e.removeElClass = m, e.toggleElClass = b, e.setElAttributes = y, e.getElAttributes = _, e.blockTextSelection = w, e.unblockTextSelection = x, e.findElPosition = k, e.getPointerPosition = O, e.isEl = E, e.isTextNode = S, e.emptyEl = C, e.normalizeContent = j, e.appendContent = T, e.insertContent = P;
                    var A = n(64),
                        N = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e["default"] = t, e
                        }(A),
                        R = n(21),
                        M = (r(R), {}),
                        V = "vdata" + (new Date).getTime();
                    e.$ = s("querySelector"), e.$$ = s("querySelectorAll")
                },
                function(t, e) {
                    function n(t) {
                        var e = typeof t;
                        return !!t && ("object" == e || "function" == e)
                    }
                    t.exports = n
                },
                function(t, e, n) {
                    "use strict";
                    e.__esModule = !0;
                    var r = n(17),
                        i = function(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }(r);
                    e["default"] = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" !== (void 0 === e ? "undefined" : i["default"](e)) && "function" != typeof e ? t : e
                    }
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    e.__esModule = !0;
                    var i = n(112),
                        o = r(i),
                        a = n(116),
                        s = r(a),
                        u = n(17),
                        c = r(u);
                    e["default"] = function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : c["default"](e)));
                        t.prototype = s["default"](e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (o["default"] ? o["default"](t, e) : t.__proto__ = e)
                    }
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    e.__esModule = !0;
                    var i = n(84),
                        o = r(i),
                        a = n(100),
                        s = r(a),
                        u = "function" == typeof s["default"] && "symbol" == typeof o["default"] ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof s["default"] && t.constructor === s["default"] && t !== s["default"].prototype ? "symbol" : typeof t
                        };
                    e["default"] = "function" == typeof s["default"] && "symbol" === u(o["default"]) ? function(t) {
                        return void 0 === t ? "undefined" : u(t)
                    } : function(t) {
                        return t && "function" == typeof s["default"] && t.constructor === s["default"] && t !== s["default"].prototype ? "symbol" : void 0 === t ? "undefined" : u(t)
                    }
                },
                function(t, e, n) {
                    var r = n(0),
                        i = n(3),
                        o = n(55),
                        a = n(9),
                        s = n(6),
                        u = function(t, e, n) {
                            var c, l, d, f = t & u.F,
                                p = t & u.G,
                                h = t & u.S,
                                v = t & u.P,
                                g = t & u.B,
                                m = t & u.W,
                                b = p ? i : i[e] || (i[e] = {}),
                                y = b.prototype,
                                _ = p ? r : h ? r[e] : (r[e] || {}).prototype;
                            p && (n = e);
                            for (c in n)(l = !f && _ && void 0 !== _[c]) && s(b, c) || (d = l ? _[c] : n[c], b[c] = p && "function" != typeof _[c] ? n[c] : g && l ? o(d, r) : m && _[c] == d ? function(t) {
                                var e = function(e, n, r) {
                                    if (this instanceof t) {
                                        switch (arguments.length) {
                                            case 0:
                                                return new t;
                                            case 1:
                                                return new t(e);
                                            case 2:
                                                return new t(e, n)
                                        }
                                        return new t(e, n, r)
                                    }
                                    return t.apply(this, arguments)
                                };
                                return e.prototype = t.prototype, e
                            }(d) : v && "function" == typeof d ? o(Function.call, d) : d, v && ((b.virtual || (b.virtual = {}))[c] = d, t & u.R && y && !y[c] && a(y, c, d)))
                        };
                    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
                },
                function(t, e, n) {
                    var r = n(10);
                    t.exports = function(t) {
                        if (!r(t)) throw TypeError(t + " is not an object!");
                        return t
                    }
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = {
                        INIT: "vx:init",
                        SOURCE_ATTACHED: "vx:sourceattached",
                        LOADING: "vx:loading",
                        TRIGGER_PAUSE: "vx:triggerpause",
                        TRIGGER_PLAY: "vx:triggerplay",
                        VIDEO_CLICK: "vx:videoclick",
                        PLAYER_INNER_ERROR: "vx:playererror"
                    };
                    e["default"] = r
                },
                function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        var n = Array.prototype.slice.call(e),
                            r = function() {},
                            o = window.console || {
                                log: r,
                                warn: r,
                                error: r
                            };
                        t ? n.unshift(t.toUpperCase() + ":") : t = "log", i.history.push(n), n.unshift("LIB-PLAYER-VIDEO:"), o[t].apply ? o[t].apply(o, n) : o[t](n.join(" "))
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                        window.libVideoPlayerDebug && r(null, arguments)
                    };
                    i.history = [], i.error = function() {
                        r("error", arguments)
                    }, i.warn = function() {
                        r("warn", arguments)
                    }, e["default"] = i
                },
                function(t, e, n) {
                    function r(t) {
                        return null != t && o(i(t))
                    }
                    var i = n(133),
                        o = n(23);
                    t.exports = r
                },
                function(t, e) {
                    function n(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && r >= t
                    }
                    var r = 9007199254740991;
                    t.exports = n
                },
                function(t, e) {
                    t.exports = function(t) {
                        try {
                            return !!t()
                        } catch (t) {
                            return !0
                        }
                    }
                },
                function(t, e) {
                    t.exports = !0
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        return {
                            enumerable: !(1 & t),
                            configurable: !(2 & t),
                            writable: !(4 & t),
                            value: e
                        }
                    }
                },
                function(t, e) {
                    var n = 0,
                        r = Math.random();
                    t.exports = function(t) {
                        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
                    }
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n(1),
                        o = r(i),
                        a = n(2),
                        s = r(a),
                        u = function() {
                            function t() {
                                o["default"](this, t)
                            }
                            return s["default"](t, [{
                                key: "on",
                                value: function(t, e) {
                                    return this._eventCollection = this._eventCollection || {}, this._eventCollection[t] = this._eventCollection[t] || [], this._eventCollection[t].push(e), this
                                }
                            }, {
                                key: "once",
                                value: function(t, e) {
                                    function n() {
                                        r.off(t, n), e.apply(this, arguments)
                                    }
                                    var r = this;
                                    return n.listener = e, this.on(t, n), this
                                }
                            }, {
                                key: "off",
                                value: function(t, e) {
                                    var n = void 0;
                                    return this._eventCollection && (n = this._eventCollection[t]) ? (n.forEach(function(t, r) {
                                        t !== e && t.listener !== e || n.splice(r, 1)
                                    }), 0 === n.length && delete this._eventCollection[t], this) : this
                                }
                            }, {
                                key: "emit",
                                value: function(t) {
                                    for (var e = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; n > i; i++) r[i - 1] = arguments[i];
                                    var o = void 0;
                                    return this._eventCollection && (o = this._eventCollection[t]) ? (o = o.slice(0), o.forEach(function(t) {
                                        return t.apply(e, r)
                                    }), this) : this
                                }
                            }]), t
                        }();
                    e["default"] = u
                },
                function(t, e, n) {
                    function r(t) {
                        return o(t) && i(t) && s.call(t, "callee") && !u.call(t, "callee")
                    }
                    var i = n(22),
                        o = n(7),
                        a = Object.prototype,
                        s = a.hasOwnProperty,
                        u = a.propertyIsEnumerable;
                    t.exports = r
                },
                function(t, e) {
                    var n = Array.prototype,
                        r = Error.prototype,
                        i = Object.prototype,
                        o = i.propertyIsEnumerable,
                        a = n.splice,
                        s = {};
                    ! function(t) {
                        var e = function() {
                                this.x = 1
                            },
                            n = {
                                0: 1,
                                length: 1
                            },
                            i = [];
                        e.prototype = {
                            valueOf: 1,
                            y: 1
                        };
                        for (var u in new e) i.push(u);
                        s.enumErrorProps = o.call(r, "message") || o.call(r, "name"), s.enumPrototypes = o.call(e, "prototype"), s.nonEnumShadows = !/valueOf/.test(i), s.ownLast = "x" != i[0], s.spliceObjects = (a.call(n, 0, 1), !n[0]), s.unindexedChars = "x" [0] + Object("x")[0] != "xx"
                    }(), t.exports = s
                },
                function(t, e, n) {
                    var r = n(68),
                        i = n(23),
                        o = n(7),
                        a = Object.prototype,
                        s = a.toString,
                        u = r(Array, "isArray"),
                        c = u || function(t) {
                            return o(t) && i(t.length) && "[object Array]" == s.call(t)
                        };
                    t.exports = c
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.Version = e.params = e.thirdapp = e.aliapp = e.os = e.browser = void 0;
                    var i = n(150),
                        o = r(i),
                        a = n(151),
                        s = r(a),
                        u = n(72),
                        c = r(u),
                        l = n(152),
                        d = r(l),
                        f = n(153),
                        p = r(f),
                        h = n(33),
                        v = r(h);
                    e.browser = s["default"], e.os = c["default"], e.aliapp = o["default"], e.thirdapp = d["default"], e.params = p["default"], e.Version = v["default"]
                },
                function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n), r && t(e, r), e
                            }
                        }(),
                        o = function() {
                            function t(e) {
                                r(this, t), this.val = e ? e.toString() : ""
                            }
                            return i(t, null, [{
                                key: "compare",
                                value: function(t, e) {
                                    t = t.toString().split("."), e = e.toString().split(".");
                                    for (var n = 0; n < t.length || n < e.length; n++) {
                                        var r = parseInt(t[n], 10),
                                            i = parseInt(e[n], 10);
                                        if (isNaN(r) && (r = 0), isNaN(i) && (i = 0), i > r) return -1;
                                        if (r > i) return 1
                                    }
                                    return 0
                                }
                            }]), i(t, [{
                                key: "gt",
                                value: function(e) {
                                    return t.compare(this, e) > 0
                                }
                            }, {
                                key: "gte",
                                value: function(e) {
                                    return t.compare(this, e) >= 0
                                }
                            }, {
                                key: "lt",
                                value: function(e) {
                                    return t.compare(this, e) < 0
                                }
                            }, {
                                key: "lte",
                                value: function(e) {
                                    return t.compare(this, e) <= 0
                                }
                            }, {
                                key: "eq",
                                value: function(e) {
                                    return 0 === t.compare(this, e)
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    return this.val.toString()
                                }
                            }]), t
                        }();
                    e["default"] = o
                },
                function(t, e) {
                    var n = Math.ceil,
                        r = Math.floor;
                    t.exports = function(t) {
                        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
                    }
                },
                function(t, e) {
                    t.exports = function(t) {
                        if (void 0 == t) throw TypeError("Can't call method on  " + t);
                        return t
                    }
                },
                function(t, e, n) {
                    var r = n(10);
                    t.exports = function(t, e) {
                        if (!r(t)) return t;
                        var n, i;
                        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
                        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
                        throw TypeError("Can't convert object to primitive value")
                    }
                },
                function(t, e) {
                    t.exports = {}
                },
                function(t, e, n) {
                    var r = n(19),
                        i = n(90),
                        o = n(42),
                        a = n(40)("IE_PROTO"),
                        s = function() {},
                        u = function() {
                            var t, e = n(57)("iframe"),
                                r = o.length;
                            for (e.style.display = "none", n(95).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object\x3c/script>"), t.close(), u = t.F; r--;) delete u.prototype[o[r]];
                            return u()
                        };
                    t.exports = Object.create || function(t, e) {
                        var n;
                        return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = u(), void 0 === e ? n : i(n, e)
                    }
                },
                function(t, e, n) {
                    var r = n(59),
                        i = n(42);
                    t.exports = Object.keys || function(t) {
                        return r(t, i)
                    }
                },
                function(t, e, n) {
                    var r = n(41)("keys"),
                        i = n(27);
                    t.exports = function(t) {
                        return r[t] || (r[t] = i(t))
                    }
                },
                function(t, e, n) {
                    var r = n(3),
                        i = n(0),
                        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
                    (t.exports = function(t, e) {
                        return o[t] || (o[t] = void 0 !== e ? e : {})
                    })("versions", []).push({
                        version: r.version,
                        mode: n(25) ? "pure" : "global",
                        copyright: "? 2019 Denis Pushkarev (zloirock.ru)"
                    })
                },
                function(t, e) {
                    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
                },
                function(t, e, n) {
                    var r = n(4).f,
                        i = n(6),
                        o = n(11)("toStringTag");
                    t.exports = function(t, e, n) {
                        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                            configurable: !0,
                            value: e
                        })
                    }
                },
                function(t, e, n) {
                    e.f = n(11)
                },
                function(t, e, n) {
                    var r = n(0),
                        i = n(3),
                        o = n(25),
                        a = n(44),
                        s = n(4).f;
                    t.exports = function(t) {
                        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
                        "_" == t.charAt(0) || t in e || s(e, t, {
                            value: a.f(t)
                        })
                    }
                },
                function(t, e) {
                    e.f = {}.propertyIsEnumerable
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }

                    function i(t) {
                        return !!t && "object" === (void 0 === t ? "undefined" : s["default"](t)) && "[object Object]" === t.toString() && t.constructor === Object
                    }

                    function o() {
                        var t = Array.prototype.slice.call(arguments);
                        return t.unshift({}), t.push(l), c["default"].apply(null, t), t[0]
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = n(17),
                        s = r(a);
                    e["default"] = o;
                    var u = n(129),
                        c = r(u),
                        l = function(t, e) {
                            return i(e) ? i(t) ? void 0 : o(e) : e
                        }
                },
                function(t, e, n) {
                    function r(t) {
                        return "string" == typeof t || i(t) && s.call(t) == o
                    }
                    var i = n(7),
                        o = "[object String]",
                        a = Object.prototype,
                        s = a.toString;
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t) {
                        if (null == t) return [];
                        l(t) || (t = Object(t));
                        var e = t.length;
                        e = e && c(e) && (a(t) || o(t) || d(t)) && e || 0;
                        for (var n = t.constructor, r = -1, i = s(n) && n.prototype || b, k = i === t, O = Array(e), E = e > 0, S = f.enumErrorProps && (t === m || t instanceof Error), C = f.enumPrototypes && s(t); ++r < e;) O[r] = r + "";
                        for (var j in t) C && "prototype" == j || S && ("message" == j || "name" == j) || E && u(j, e) || "constructor" == j && (k || !_.call(t, j)) || O.push(j);
                        if (f.nonEnumShadows && t !== b) {
                            var T = t === y ? v : t === m ? p : w.call(t),
                                P = x[T] || x[h];
                            for (T == h && (i = b), e = g.length; e--;) {
                                j = g[e];
                                var L = P[j];
                                k && L || (L ? !_.call(t, j) : t[j] === i[j]) || O.push(j)
                            }
                        }
                        return O
                    }
                    var i = n(66),
                        o = n(29),
                        a = n(31),
                        s = n(69),
                        u = n(50),
                        c = n(23),
                        l = n(14),
                        d = n(48),
                        f = n(30),
                        p = "[object Error]",
                        h = "[object Object]",
                        v = "[object String]",
                        g = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                        m = Error.prototype,
                        b = Object.prototype,
                        y = String.prototype,
                        _ = b.hasOwnProperty,
                        w = b.toString,
                        x = {};
                    x["[object Array]"] = x["[object Date]"] = x["[object Number]"] = {
                        constructor: !0,
                        toLocaleString: !0,
                        toString: !0,
                        valueOf: !0
                    }, x["[object Boolean]"] = x[v] = {
                        constructor: !0,
                        toString: !0,
                        valueOf: !0
                    }, x[p] = x["[object Function]"] = x["[object RegExp]"] = {
                        constructor: !0,
                        toString: !0
                    }, x[h] = {
                        constructor: !0
                    }, i(g, function(t) {
                        for (var e in x)
                            if (_.call(x, e)) {
                                var n = x[e];
                                n[t] = _.call(n, t)
                            }
                    }), t.exports = r
                },
                function(t, e) {
                    function n(t, e) {
                        return t = "number" == typeof t || r.test(t) ? +t : -1, e = null == e ? i : e, t > -1 && t % 1 == 0 && e > t
                    }
                    var r = /^\d+$/,
                        i = 9007199254740991;
                    t.exports = n
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e["default"] = t, e
                    }

                    function i(t, e, n) {
                        if (Array.isArray(e)) return l(i, t, e, n);
                        var r = f.getElData(t);
                        r.handlers || (r.handlers = {}), r.handlers[e] || (r.handlers[e] = []), n.guid || (n.guid = h.newGUID()), r.handlers[e].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function(e, n) {
                            if (!r.disabled) {
                                e = u(e);
                                var i = r.handlers[e.type];
                                if (i)
                                    for (var o = i.slice(0), a = 0, s = o.length; s > a && !e.isImmediatePropagationStopped(); a++) o[a].call(t, e, n)
                            }
                        }), 1 === r.handlers[e].length && (t.addEventListener ? t.addEventListener(e, r.dispatcher, !1) : t.attachEvent && t.attachEvent("on" + e, r.dispatcher))
                    }

                    function o(t, e, n) {
                        if (f.hasElData(t)) {
                            var r = f.getElData(t);
                            if (r.handlers) {
                                if (Array.isArray(e)) return l(o, t, e, n);
                                var i = function(e) {
                                    r.handlers[e] = [], c(t, e)
                                };
                                if (e) {
                                    var a = r.handlers[e];
                                    if (a) {
                                        if (!n) return void i(e);
                                        if (n.guid)
                                            for (var s = 0; s < a.length; s++) a[s].guid === n.guid && a.splice(s--, 1);
                                        c(t, e)
                                    }
                                } else
                                    for (var u in r.handlers) i(u)
                            }
                        }
                    }

                    function a(t, e, n) {
                        var r = f.hasElData(t) ? f.getElData(t) : {},
                            i = t.parentNode || t.ownerDocument;
                        if ("string" == typeof e && (e = {
                            type: e,
                            target: t
                        }), e = u(e), r.dispatcher && r.dispatcher.call(t, e, n), i && !e.isPropagationStopped() && !0 === e.bubbles) a.call(null, i, e, n);
                        else if (!i && !e.defaultPrevented) {
                            var o = f.getElData(e.target);
                            e.target[e.type] && (o.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), o.disabled = !1)
                        }
                        return !e.defaultPrevented
                    }

                    function s(t, e, n) {
                        if (Array.isArray(e)) return l(s, t, e, n);
                        var r = function a() {
                            o(t, e, a), n.apply(this, arguments)
                        };
                        r.guid = n.guid = n.guid || h.newGUID(), i(t, e, r)
                    }

                    function u(t) {
                        function e() {
                            return !0
                        }

                        function n() {
                            return !1
                        }
                        if (!t || !t.isPropagationStopped) {
                            var r = t || window.event;
                            t = {};
                            for (var i in r) "layerX" !== i && "layerY" !== i && "keyLocation" !== i && "webkitMovementX" !== i && "webkitMovementY" !== i && ("returnValue" === i && r.preventDefault || (t[i] = r[i]));
                            if (t.target || (t.target = t.srcElement || document), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function() {
                                r.preventDefault && r.preventDefault(), t.returnValue = !1, r.returnValue = !1, t.defaultPrevented = !0
                            }, t.defaultPrevented = !1, t.stopPropagation = function() {
                                r.stopPropagation && r.stopPropagation(), t.cancelBubble = !0, r.cancelBubble = !0, t.isPropagationStopped = e
                            }, t.isPropagationStopped = n, t.stopImmediatePropagation = function() {
                                r.stopImmediatePropagation && r.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                            }, t.isImmediatePropagationStopped = n, null != t.clientX) {
                                var o = document.documentElement,
                                    a = document.body;
                                t.pageX = t.clientX + (o && o.scrollLeft || a && a.scrollLeft || 0) - (o && o.clientLeft || a && a.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || a && a.scrollTop || 0) - (o && o.clientTop || a && a.clientTop || 0)
                            }
                            t.which = t.charCode || t.keyCode, null != t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
                        }
                        return t
                    }

                    function c(t, e) {
                        var n = f.getElData(t);
                        0 === n.handlers[e].length && (delete n.handlers[e], t.removeEventListener ? t.removeEventListener(e, n.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, n.dispatcher)), Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled), 0 === Object.getOwnPropertyNames(n).length && f.removeElData(t)
                    }

                    function l(t, e, n, r) {
                        n.forEach(function(n) {
                            t(e, n, r)
                        })
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.on = i, e.off = o, e.trigger = a, e.one = s, e.fixEvent = u;
                    var d = n(13),
                        f = r(d),
                        p = n(64),
                        h = r(p)
                },
                function(t, e, n) {
                    var r = n(35);
                    t.exports = function(t) {
                        return Object(r(t))
                    }
                },
                function(t, e, n) {
                    var r = n(46),
                        i = n(26),
                        o = n(8),
                        a = n(36),
                        s = n(6),
                        u = n(56),
                        c = Object.getOwnPropertyDescriptor;
                    e.f = n(5) ? c : function(t, e) {
                        if (t = o(t), e = a(e, !0), u) try {
                            return c(t, e)
                        } catch (t) {}
                        return s(t, e) ? i(!r.f.call(t, e), t[e]) : void 0
                    }
                },
                function(t, e, n) {
                    "use strict";
                    var r = n(25),
                        i = n(18),
                        o = n(58),
                        a = n(9),
                        s = n(37),
                        u = n(89),
                        c = n(43),
                        l = n(76),
                        d = n(11)("iterator"),
                        f = !([].keys && "next" in [].keys()),
                        p = function() {
                            return this
                        };
                    t.exports = function(t, e, n, h, v, g, m) {
                        u(n, e, h);
                        var b, y, _, w = function(t) {
                                if (!f && t in E) return E[t];
                                switch (t) {
                                    case "keys":
                                    case "values":
                                        return function() {
                                            return new n(this, t)
                                        }
                                }
                                return function() {
                                    return new n(this, t)
                                }
                            },
                            x = e + " Iterator",
                            k = "values" == v,
                            O = !1,
                            E = t.prototype,
                            S = E[d] || E["@@iterator"] || v && E[v],
                            C = S || w(v),
                            j = v ? k ? w("entries") : C : void 0,
                            T = "Array" == e ? E.entries || S : S;
                        if (T && (_ = l(T.call(new t))) !== Object.prototype && _.next && (c(_, x, !0), r || "function" == typeof _[d] || a(_, d, p)), k && S && "values" !== S.name && (O = !0, C = function() {
                            return S.call(this)
                        }), r && !m || !f && !O && E[d] || a(E, d, C), s[e] = C, s[x] = p, v)
                            if (b = {
                                values: k ? C : w("values"),
                                keys: g ? C : w("keys"),
                                entries: j
                            }, m)
                                for (y in b) y in E || o(E, y, b[y]);
                            else i(i.P + i.F * (f || O), e, b);
                        return b
                    }
                },
                function(t, e, n) {
                    var r = n(88);
                    t.exports = function(t, e, n) {
                        if (r(t), void 0 === e) return t;
                        switch (n) {
                            case 1:
                                return function(n) {
                                    return t.call(e, n)
                                };
                            case 2:
                                return function(n, r) {
                                    return t.call(e, n, r)
                                };
                            case 3:
                                return function(n, r, i) {
                                    return t.call(e, n, r, i)
                                }
                        }
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }
                },
                function(t, e, n) {
                    t.exports = !n(5) && !n(24)(function() {
                        return 7 != Object.defineProperty(n(57)("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    })
                },
                function(t, e, n) {
                    var r = n(10),
                        i = n(0).document,
                        o = r(i) && r(i.createElement);
                    t.exports = function(t) {
                        return o ? i.createElement(t) : {}
                    }
                },
                function(t, e, n) {
                    t.exports = n(9)
                },
                function(t, e, n) {
                    var r = n(6),
                        i = n(8),
                        o = n(92)(!1),
                        a = n(40)("IE_PROTO");
                    t.exports = function(t, e) {
                        var n, s = i(t),
                            u = 0,
                            c = [];
                        for (n in s) n != a && r(s, n) && c.push(n);
                        for (; e.length > u;) r(s, n = e[u++]) && (~o(c, n) || c.push(n));
                        return c
                    }
                },
                function(t, e) {
                    var n = {}.toString;
                    t.exports = function(t) {
                        return n.call(t).slice(8, -1)
                    }
                },
                function(t, e) {
                    e.f = Object.getOwnPropertySymbols
                },
                function(t, e, n) {
                    var r = n(59),
                        i = n(42).concat("length", "prototype");
                    e.f = Object.getOwnPropertyNames || function(t) {
                        return r(t, i)
                    }
                },
                function(t, e, n) {
                    "use strict";

                    function r() {
                        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
                    }

                    function i(t, e, n) {
                        if (t && c.isObject(t) && t instanceof r) return t;
                        var i = new r;
                        return i.parse(t, e, n), i
                    }

                    function o(t) {
                        return c.isString(t) && (t = i(t)), t instanceof r ? t.format() : r.prototype.format.call(t)
                    }

                    function a(t, e) {
                        return i(t, !1, !0).resolve(e)
                    }

                    function s(t, e) {
                        return t ? i(t, !1, !0).resolveObject(e) : e
                    }
                    var u = n(123),
                        c = n(125);
                    e.parse = i, e.resolve = a, e.resolveObject = s, e.format = o, e.Url = r;
                    var l = /^([a-z0-9.+-]+:)/i,
                        d = /:[0-9]*$/,
                        f = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                        p = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
                        h = ["{", "}", "|", "\\", "^", "`"].concat(p),
                        v = ["'"].concat(h),
                        g = ["%", "/", "?", ";", "#"].concat(v),
                        m = ["/", "?", "#"],
                        b = /^[+a-z0-9A-Z_-]{0,63}$/,
                        y = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                        _ = {
                            javascript: !0,
                            "javascript:": !0
                        },
                        w = {
                            javascript: !0,
                            "javascript:": !0
                        },
                        x = {
                            http: !0,
                            https: !0,
                            ftp: !0,
                            gopher: !0,
                            file: !0,
                            "http:": !0,
                            "https:": !0,
                            "ftp:": !0,
                            "gopher:": !0,
                            "file:": !0
                        },
                        k = n(126);
                    r.prototype.parse = function(t, e, n) {
                        if (!c.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                        var r = t.indexOf("?"),
                            i = -1 !== r && r < t.indexOf("#") ? "?" : "#",
                            o = t.split(i),
                            a = /\\/g;
                        o[0] = o[0].replace(a, "/"), t = o.join(i);
                        var s = t;
                        if (s = s.trim(), !n && 1 === t.split("#").length) {
                            var d = f.exec(s);
                            if (d) return this.path = s, this.href = s, this.pathname = d[1], d[2] ? (this.search = d[2], this.query = e ? k.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
                        }
                        var p = l.exec(s);
                        if (p) {
                            p = p[0];
                            var h = p.toLowerCase();
                            this.protocol = h, s = s.substr(p.length)
                        }
                        if (n || p || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                            var O = "//" === s.substr(0, 2);
                            !O || p && w[p] || (s = s.substr(2), this.slashes = !0)
                        }
                        if (!w[p] && (O || p && !x[p])) {
                            for (var E = -1, S = 0; S < m.length; S++) {
                                var C = s.indexOf(m[S]); - 1 !== C && (-1 === E || E > C) && (E = C)
                            }
                            var j, T;
                            T = -1 === E ? s.lastIndexOf("@") : s.lastIndexOf("@", E), -1 !== T && (j = s.slice(0, T), s = s.slice(T + 1), this.auth = decodeURIComponent(j)), E = -1;
                            for (var S = 0; S < g.length; S++) {
                                var C = s.indexOf(g[S]); - 1 !== C && (-1 === E || E > C) && (E = C)
                            } - 1 === E && (E = s.length), this.host = s.slice(0, E), s = s.slice(E), this.parseHost(), this.hostname = this.hostname || "";
                            var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                            if (!P)
                                for (var L = this.hostname.split(/\./), S = 0, I = L.length; I > S; S++) {
                                    var A = L[S];
                                    if (A && !A.match(b)) {
                                        for (var N = "", R = 0, M = A.length; M > R; R++) N += A.charCodeAt(R) > 127 ? "x" : A[R];
                                        if (!N.match(b)) {
                                            var V = L.slice(0, S),
                                                X = L.slice(S + 1),
                                                D = A.match(y);
                                            D && (V.push(D[1]), X.unshift(D[2])), X.length && (s = "/" + X.join(".") + s), this.hostname = V.join(".");
                                            break
                                        }
                                    }
                                }
                            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = u.toASCII(this.hostname));
                            var U = this.port ? ":" + this.port : "",
                                B = this.hostname || "";
                            this.host = B + U, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
                        }
                        if (!_[h])
                            for (var S = 0, I = v.length; I > S; S++) {
                                var F = v[S];
                                if (-1 !== s.indexOf(F)) {
                                    var $ = encodeURIComponent(F);
                                    $ === F && ($ = escape(F)), s = s.split(F).join($)
                                }
                            }
                        var H = s.indexOf("#"); - 1 !== H && (this.hash = s.substr(H), s = s.slice(0, H));
                        var z = s.indexOf("?");
                        if (-1 !== z ? (this.search = s.substr(z), this.query = s.substr(z + 1), e && (this.query = k.parse(this.query)), s = s.slice(0, z)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), x[h] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                            var U = this.pathname || "",
                                W = this.search || "";
                            this.path = U + W
                        }
                        return this.href = this.format(), this
                    }, r.prototype.format = function() {
                        var t = this.auth || "";
                        t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
                        var e = this.protocol || "",
                            n = this.pathname || "",
                            r = this.hash || "",
                            i = !1,
                            o = "";
                        this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && c.isObject(this.query) && Object.keys(this.query).length && (o = k.stringify(this.query));
                        var a = this.search || o && "?" + o || "";
                        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || x[e]) && !1 !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), n = n.replace(/[?#]/g, function(t) {
                            return encodeURIComponent(t)
                        }), a = a.replace("#", "%23"), e + i + n + a + r
                    }, r.prototype.resolve = function(t) {
                        return this.resolveObject(i(t, !1, !0)).format()
                    }, r.prototype.resolveObject = function(t) {
                        if (c.isString(t)) {
                            var e = new r;
                            e.parse(t, !1, !0), t = e
                        }
                        for (var n = new r, i = Object.keys(this), o = 0; o < i.length; o++) {
                            var a = i[o];
                            n[a] = this[a]
                        }
                        if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;
                        if (t.slashes && !t.protocol) {
                            for (var s = Object.keys(t), u = 0; u < s.length; u++) {
                                var l = s[u];
                                "protocol" !== l && (n[l] = t[l])
                            }
                            return x[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
                        }
                        if (t.protocol && t.protocol !== n.protocol) {
                            if (!x[t.protocol]) {
                                for (var d = Object.keys(t), f = 0; f < d.length; f++) {
                                    var p = d[f];
                                    n[p] = t[p]
                                }
                                return n.href = n.format(), n
                            }
                            if (n.protocol = t.protocol, t.host || w[t.protocol]) n.pathname = t.pathname;
                            else {
                                for (var h = (t.pathname || "").split("/"); h.length && !(t.host = h.shift()););
                                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== h[0] && h.unshift(""), h.length < 2 && h.unshift(""), n.pathname = h.join("/")
                            } if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
                                var v = n.pathname || "",
                                    g = n.search || "";
                                n.path = v + g
                            }
                            return n.slashes = n.slashes || t.slashes, n.href = n.format(), n
                        }
                        var m = n.pathname && "/" === n.pathname.charAt(0),
                            b = t.host || t.pathname && "/" === t.pathname.charAt(0),
                            y = b || m || n.host && t.pathname,
                            _ = y,
                            k = n.pathname && n.pathname.split("/") || [],
                            h = t.pathname && t.pathname.split("/") || [],
                            O = n.protocol && !x[n.protocol];
                        if (O && (n.hostname = "", n.port = null, n.host && ("" === k[0] ? k[0] = n.host : k.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === h[0] ? h[0] = t.host : h.unshift(t.host)), t.host = null), y = y && ("" === h[0] || "" === k[0])), b) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, k = h;
                        else if (h.length) k || (k = []), k.pop(), k = k.concat(h), n.search = t.search, n.query = t.query;
                        else if (!c.isNullOrUndefined(t.search)) {
                            if (O) {
                                n.hostname = n.host = k.shift();
                                var E = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                                E && (n.auth = E.shift(), n.host = n.hostname = E.shift())
                            }
                            return n.search = t.search, n.query = t.query, c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
                        }
                        if (!k.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
                        for (var S = k.slice(-1)[0], C = (n.host || t.host || k.length > 1) && ("." === S || ".." === S) || "" === S, j = 0, T = k.length; T >= 0; T--) S = k[T], "." === S ? k.splice(T, 1) : ".." === S ? (k.splice(T, 1), j++) : j && (k.splice(T, 1), j--);
                        if (!y && !_)
                            for (; j--; j) k.unshift("..");
                        !y || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""), C && "/" !== k.join("/").substr(-1) && k.push("");
                        var P = "" === k[0] || k[0] && "/" === k[0].charAt(0);
                        if (O) {
                            n.hostname = n.host = P ? "" : k.length ? k.shift() : "";
                            var E = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                            E && (n.auth = E.shift(), n.host = n.hostname = E.shift())
                        }
                        return y = y || n.host && k.length, y && !P && k.unshift(""), k.length ? n.pathname = k.join("/") : (n.pathname = null, n.path = null), c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n
                    }, r.prototype.parseHost = function() {
                        var t = this.host,
                            e = d.exec(t);
                        e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
                    }
                },
                function(t, e, n) {
                    "use strict";

                    function r() {
                        return i++
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.newGUID = r;
                    var i = 1
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e["default"] = t, e
                    }

                    function i(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n(1),
                        a = i(o),
                        s = n(2),
                        u = i(s),
                        c = n(15),
                        l = i(c),
                        d = n(16),
                        f = i(d),
                        p = n(13),
                        h = r(p),
                        v = n(47),
                        g = i(v),
                        m = n(21),
                        b = i(m),
                        y = n(149),
                        _ = i(y),
                        w = n(154),
                        x = i(w),
                        k = n(51),
                        O = r(k),
                        E = n(32),
                        S = r(E),
                        C = n(155),
                        j = r(C),
                        T = n(28),
                        P = i(T),
                        L = n(20),
                        I = i(L),
                        A = n(12),
                        N = i(A),
                        R = function(t) {
                            return t.preventDefault && t.preventDefault(), t.returnValue = !1, t.stopPropagation && t.stopPropagation(), !1
                        };
                    JSON.stringify(window.navigator.userAgent).indexOf("DingTalk");
                    var M = function(t) {
                        function e(t) {
                            a["default"](this, e);
                            var n = l["default"](this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
                                r = n.player = n.videox = t,
                                i = n.opts = t.config;
                            return n.options = {
                                playButtonClassName: "vjs-play-control",
                                playStatusButtonClassName: "vjs-playing",
                                playFullscreenClassName: "vjs-fullscreen-control",
                                showHiddenFullscreenClassName: "vjs-fullscreen",
                                itemClassName: "J_Interact_Item"
                            }, n.options = g["default"](n.options, i), n.rootElement = r.rootElement, n.screen = "Vertical", n.rootElement = t.rootElement, n.player = r, n._addEventListener(), n
                        }
                        return f["default"](e, t), u["default"](e, [{
                            key: "_addEventListener",
                            value: function() {
                                this.videox.on(I["default"].INIT, this.onInit.bind(this)), this.videox.on(I["default"].VIDEO_CLICK, this.onVideoClick.bind(this)), this.videox.on(N["default"].VIDEO_PLAY, this.onVideoPlay.bind(this)), this.videox.on(N["default"].VIDEO_ENDED, this.onVideoEnded.bind(this)), this.videox.on(N["default"].VIDEO_PAUSE, this.onVideoPause.bind(this))
                            }
                        }, {
                            key: "onInit",
                            value: function() {
                                this.el = this.createEl(), this.playBtnEl = h.$(".vjs-play-control", this.el), this.fullScreenBtnEl = h.$(".vjs-fullscreen-control", this.el), !0 !== this.options.live && (this.controlProgress = new _["default"](this.videox)), this.options.volumeControls && !1 !== this.options.controls && (this.volumeProgress = new x["default"](this.videox)), this.bindEvent()
                            }
                        }, {
                            key: "onVideoPlay",
                            value: function(t) {
                                h.addElClass(this.playBtnEl, this.options.playStatusButtonClassName)
                            }
                        }, {
                            key: "onVideoPause",
                            value: function(t) {
                                this.exePause(this.playBtnEl, !0)
                            }
                        }, {
                            key: "onVideoEnded",
                            value: function(t) {
                                this.exePause(this.playBtnEl, !0)
                            }
                        }, {
                            key: "onVideoClick",
                            value: function(t) {
                                this.triggerShowHideBar()
                            }
                        }, {
                            key: "createEl",
                            value: function() {
                                var t = "",
                                    e = "",
                                    n = "vjs-hidden",
                                    r = navigator.userAgent.match(/UCBrowser/);
                                (S.aliapp && "TB" == S.aliapp.appname && !r && S.os.isAndroid || this.options.noFullscreen || !1 === this.options.controls) && (t = "vjs-hidden"), !1 !== this.options.controls && !0 !== this.options.live || (e = "vjs-hidden"), this.options.interact && (n = "");
                                var i = h.createEl("div", {
                                    className: "vjs-control-bar",
                                    innerHTML: '\n        <button class="' + e + ' vjs-play-control vjs-control vjs-button" tabindex="0" role="button" type="button">\n          <span class="vjs-control-text">Play</span>\n        </button>\n        <div class="progress-wrap"></div>\n        <div class="volume-wrap"></div>\n        <button class="interact-item J_Interact_Item ' + n + '"></button>\n        <button class="' + t + ' vjs-fullscreen-control vjs-control vjs-button " tabindex="0" role="button" type="button">\n          <span class="vjs-control-text">Fullscreen</span>\n        </button>\n      '
                                });
                                return h.appendContent(this.rootElement, i), i
                            }
                        }, {
                            key: "bindEvent",
                            value: function() {
                                var t = this;
                                O.on(this.el, "click", function(e) {
                                    return t._triggerControllBarClick(e)
                                }), this.options.disableAutoHideControlbar && (O.on(this.el, "mouseover", function(e) {
                                    return t.showControlBar()
                                }), O.on(this.el, "mouseleave", function(e) {
                                    return t.hiddenControlBar_()
                                }))
                            }
                        }, {
                            key: "volumeupdate",
                            value: function(t) {
                                this.volumeProgress && this.volumeProgress.volumeupdate(t)
                            }
                        }, {
                            key: "triggerShowHideBar",
                            value: function() {
                                h.hasElClass(this.el, "vjs-opacity-hidden") ? this.showControlBar() : this.hiddenControlBar_()
                            }
                        }, {
                            key: "showControlBar",
                            value: function() {
                                var t = this,
                                    e = this.options.disableAutoHideControlbar || !1;
                                this.timer_ && clearTimeout(this.timer_), h.removeElClass(this.el, "vjs-hidden"), setTimeout(function() {
                                    h.removeElClass(t.el, "vjs-opacity-hidden")
                                }, 0), e || this.autoHiddenControlBar()
                            }
                        }, {
                            key: "hiddenControlBar_",
                            value: function() {
                                var t = this;
                                h.addElClass(this.el, "vjs-opacity-hidden"), setTimeout(function() {
                                    h.addElClass(t.el, "vjs-hidden")
                                }, 300)
                            }
                        }, {
                            key: "autoHiddenControlBar",
                            value: function() {
                                var t = this;
                                this.timer_ = setTimeout(function() {
                                    var e = t.controlProgress && t.controlProgress.progressing,
                                        n = t.volumeProgress && t.volumeProgress.progressing;
                                    return e || n ? void t.showControlBar() : void t.hiddenControlBar_()
                                }, 4e3)
                            }
                        }, {
                            key: "_triggerControllBarClick",
                            value: function(t) {
                                b["default"]("ControlBar::triggerControllBarClick_()");
                                var e = t.target;
                                t.preventDefault(), h.hasElClass(e, this.options.playButtonClassName) ? this.playButton(e) : h.hasElClass(e, this.options.playFullscreenClassName) ? this.fullscreenButton(e) : h.hasElClass(e, this.options.itemClassName) && this.player.emit("video:item:click")
                            }
                        }, {
                            key: "fullscreenButton",
                            value: function(t) {
                                "default" != this.options.fullscreen && S.os.isIPhone && j.isAvailable ? this.mockFullScreen_(t || this.fullScreenBtnEl) : "default" != this.options.fullscreen && S.os.isAndroid && j.isAvailable ? this.mockFullScreenRotateY_(t || this.fullScreenBtnEl) : "default" == this.options.fullscreen ? this.mockFullScreenVertical_(t || this.fullScreenBtnEl) : this.enterFullScreen()
                            }
                        }, {
                            key: "enterFullScreen",
                            value: function() {
                                var t = this.videox.videoDom;
                                "webkitDisplayingFullscreen" in t && O.one(t, "webkitbeginfullscreen", function() {
                                    O.one(t, "webkitendfullscreen", function() {
                                        O.trigger(t, "fullscreenchange", {
                                            isFullscreen: !1
                                        })
                                    }), O.trigger(t, "fullscreenchange", {
                                        isFullscreen: !0
                                    })
                                }), t.paused && t.networkState <= t.HAVE_METADATA ? (t.play(), setTimeout(function() {
                                    t.pause(), t.webkitEnterFullScreen()
                                }, 0)) : this.canFullScreen_() || S.os.isIPhone ? t.webkitEnterFullScreen() : this.rotatePage_(), this.videox.emit(N["default"].VIDEO_ENTERFULLSCREEN)
                            }
                        }, {
                            key: "mockFullScreen_",
                            value: function(t) {
                                var e = this,
                                    n = "Vertical" === this.screen;
                                this.transverseFullScreen_(n, function(t) {
                                    !t && n ? (h.addElClass(document.body, "vjs-body-fullscreen"), h.addElClass(e.rootElement, "vjs-player-fullscreen"), window.scrollTo(0, 0), e.screen = "landscape", e.player.emit("video:enterFullscreen")) : t || n ? (e.videoPlayer.enterFullScreen(), e.player.emit("video:enterFullscreen")) : (h.removeElClass(document.body, "vjs-body-fullscreen"),
                                        h.removeElClass(e.rootElement, "vjs-player-fullscreen"), e.screen = "Vertical", window.scrollTo(0, e.rootElement.offsetTop - window.scrollY), e.player.emit("video:exitFullscreen"))
                                })
                            }
                        }, {
                            key: "mockFullScreenRotateY_",
                            value: function(t) {
                                var e = this,
                                    n = "Vertical" === this.screen,
                                    r = document.documentElement.getBoundingClientRect();
                                r.width, r.height, document.querySelector('meta[name="viewport"]'), this.options["initial-scale"], this.androidBgMaskEl = h.$(".vjs-android-bg-mask"), this.androidBgMaskEl || (this.androidBgMaskEl = h.createEl("div", {
                                    className: "vjs-android-bg-mask"
                                })), this.oldWidth || (this.oldWidth = this.rootElement.offsetWidth, this.oldHeight = this.rootElement.offsetHeight), n ? window.WindVane.call("WebAppInterface", "setNaviBarHidden", {
                                    hidden: "1",
                                    animated: "1"
                                }, function() {
                                    e._canSetNav = !0, e.rotatePage_(), e.player.emit("video:enterFullscreen")
                                }, function() {
                                    e._canSetNav = !1, e.videoPlayer.enterFullScreen(), e.player.emit("video:enterFullscreen")
                                }) : (window.WindVane.call("WebAppInterface", "setNaviBarHidden", {
                                    hidden: "0",
                                    animated: "0"
                                }, function() {}, function() {}), this.rotateBackPage_(), this.player.emit("video:exitFullscreen"))
                            }
                        }, {
                            key: "mockFullScreenVertical_",
                            value: function(t) {
                                "Vertical" === this.screen ? (h.addElClass(document.body, "vjs-body-fullscreen"), h.addElClass(this.rootElement, "vjs-player-fullscreen"), window.scrollTo(0, 0), this.screen = "landscape", this.player.emit("video:enterFullscreen")) : (h.removeElClass(document.body, "vjs-body-fullscreen"), h.removeElClass(this.rootElement, "vjs-player-fullscreen"), this.screen = "Vertical", window.scrollTo(0, this.rootElement.offsetTop - window.scrollY), this.player.emit("video:exitFullscreen"))
                            }
                        }, {
                            key: "transverseFullScreen_",
                            value: function(t, e) {
                                window.WindVane.call("WebAppInterface", "transverseFullScreen", {
                                    open: t.toString()
                                }, function(t) {
                                    e(null, !0)
                                }, function(t) {
                                    e(!0, t)
                                })
                            }
                        }, {
                            key: "playButton",
                            value: function(t, e) {
                                this.showControlBar(), h.hasElClass(t, this.options.playStatusButtonClassName) ? this.exePause(t, e) : this.exePlay(t, e)
                            }
                        }, {
                            key: "playEnded",
                            value: function() {
                                this.exePause(this.playBtnEl, !0)
                            }
                        }, {
                            key: "playPause",
                            value: function() {
                                this.exePause(this.playBtnEl, !0)
                            }
                        }, {
                            key: "realPlay",
                            value: function() {
                                this.showControlBar(), this.exePlay(this.playBtnEl, !0)
                            }
                        }, {
                            key: "exePlay",
                            value: function(t, e) {
                                h.addElClass(this.playBtnEl, this.options.playStatusButtonClassName), !e && this.videox.emit(I["default"].TRIGGER_PLAY, {})
                            }
                        }, {
                            key: "exePause",
                            value: function(t, e) {
                                h.removeElClass(this.playBtnEl, this.options.playStatusButtonClassName), e || this.videox.emit(I["default"].TRIGGER_PAUSE, {})
                            }
                        }, {
                            key: "canFullScreen_",
                            value: function() {
                                return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled
                            }
                        }, {
                            key: "requestFullScreen_",
                            value: function() {
                                var t = this.videoPlayer.video;
                                t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                            }
                        }, {
                            key: "rotatePage_",
                            value: function() {
                                var t = this._canSetNav ? 0 : 70,
                                    e = document.documentElement.getBoundingClientRect(),
                                    n = e.width,
                                    r = e.height,
                                    i = this.options["initial-scale"] || 1,
                                    o = n + "px",
                                    a = r + 50 / i - t + "px";
                                h.addElClass(document.body, "vjs-body-fullscreen"), h.addElClass(this.rootElement, "vjs-player-fullscreen-rotate"), h.appendContent(this.rootElement.parentNode.parentNode, this.androidBgMaskEl), this.rootElement.style.height = o, this.rootElement.style.width = a, document.body.style.height = o, this.screen = "landscape", window.scrollTo(0, 0), O.on(this.rootElement, "touchmove", R), this.player.emit("video:enterFullscreen")
                            }
                        }, {
                            key: "rotateBackPage_",
                            value: function() {
                                var t = this;
                                h.removeElClass(document.body, "vjs-body-fullscreen"), h.removeElClass(this.rootElement, "vjs-player-fullscreen-rotate"), this.androidBgMaskEl && this.rootElement.parentNode.parentNode.removeChild(this.androidBgMaskEl), this.rootElement.style.height = this.oldHeight + "px", this.rootElement.style.width = this.oldWidth + "px", document.body.style.height = "100%", this.screen = "Vertical", O.off(this.rootElement, "touchmove", R), setTimeout(function() {
                                    window.scrollTo(0, t.rootElement.offsetTop - window.scrollY)
                                }, 500)
                            }
                        }]), e
                    }(P["default"]);
                    e["default"] = M
                },
                function(t, e) {
                    function n(t, e) {
                        for (var n = -1, r = t.length; ++n < r && !1 !== e(t[n], n, t););
                        return t
                    }
                    t.exports = n
                },
                function(t, e, n) {
                    function r(t) {
                        if (a.unindexedChars && o(t)) {
                            for (var e = -1, n = t.length, r = Object(t); ++e < n;) r[e] = t.charAt(e);
                            return r
                        }
                        return i(t) ? t : Object(t)
                    }
                    var i = n(14),
                        o = n(48),
                        a = n(30);
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t, e) {
                        var n = null == t ? void 0 : t[e];
                        return i(n) ? n : void 0
                    }
                    var i = n(135);
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t) {
                        return i(t) && s.call(t) == o
                    }
                    var i = n(14),
                        o = "[object Function]",
                        a = Object.prototype,
                        s = a.toString;
                    t.exports = r
                },
                function(t, e) {
                    var n = function() {
                        try {
                            Object({
                                toString: 0
                            } + "")
                        } catch (t) {
                            return function() {
                                return !1
                            }
                        }
                        return function(t) {
                            return "function" != typeof t.toString && "string" == typeof(t + "")
                        }
                    }();
                    t.exports = n
                },
                function(t, e, n) {
                    function r(t) {
                        return o(t) && i(t.length) && !!a[u.call(t)]
                    }
                    var i = n(23),
                        o = n(7),
                        a = {};
                    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1;
                    var s = Object.prototype,
                        u = s.toString;
                    t.exports = r
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r, i, o = n(33),
                        a = function(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }(o),
                        s = window.navigator.userAgent;
                    if (i = s.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)) r = {
                        name: "Windows Phone",
                        isWindowsPhone: !0,
                        version: new a["default"](i[1])
                    };
                    else if (s.match(/Safari/) && (i = s.match(/Android[\s\/]([\d\.]+)/))) r = {
                        version: new a["default"](i[1])
                    }, s.match(/Mobile\s+Safari/) ? (r.name = "Android", r.isAndroid = !0) : (r.name = "AndroidPad", r.isAndroidPad = !0);
                    else if (i = s.match(/(iPhone|iPad|iPod)/)) {
                        var u = i[1];
                        (i = s.match(/OS ([\d_\.]+) like Mac OS X/)) && (r = {
                            name: u,
                            isIPhone: "iPhone" === u || "iPod" === u,
                            isIPad: "iPad" === u,
                            isIOS: !0,
                            version: new a["default"](i[1].split("_").join("."))
                        })
                    }
                    r || (r = {
                        name: "unknown",
                        version: new a["default"]("0.0.0")
                    }), e["default"] = r
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(63),
                        i = function(t) {
                            try {
                                var e = r.parse(t);
                                return "rtmp:" === e.protocol ? "rtmp" : e.pathname.split(".").pop().split(/\#|\?/)[0].toLowerCase()
                            } catch (t) {
                                return ""
                            }
                        };
                    e["default"] = i
                },
                function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    var i = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                } catch (t) {
                                    i = !0, o = t
                                } finally {
                                    try {
                                        !r && s["return"] && s["return"]()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                            return function(e, n) {
                                if (Array.isArray(e)) return e;
                                if (Symbol.iterator in Object(e)) return t(e, n);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }(),
                        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
                        },
                        a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n), r && t(e, r), e
                            }
                        }();
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i"),
                        u = function() {
                            function t(e) {
                                r(this, t), this._params = {}, this._hash = "", e && this.assign(e.toString())
                            }
                            return a(t, [{
                                key: "assign",
                                value: function(t) {
                                    t = t || "";
                                    var e = t.match(s);
                                    if (!e) throw new Error("Parse Error");
                                    this.protocol = e[1] || ("object" === ("undefined" == typeof location ? "undefined" : o(location)) ? location.protocol : ""), this.username = e[2] || "", this.password = e[3] || "", this.hostname = e[4], this.port = e[5] || "", this.pathname = e[6] || "/", this.search = e[7] || "", this.hash = e[8] || "", this.origin = this.protocol + "//" + this.host
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    var t = this.protocol + "//";
                                    return this.username && (t += this.username, this.password && (t += ":" + this.password), t += "@"), t += this.hostname, this.port && "80" !== this.port && (t += ":" + this.port), this.pathname && (t += this.pathname), this.search && (t += this.search), this.hash && (t += this.hash), t
                                }
                            }, {
                                key: "params",
                                get: function() {
                                    return this._params
                                },
                                set: function(t) {
                                    if (t && "object" === (void 0 === t ? "undefined" : o(t)) && !(t instanceof Date) && !(t instanceof RegExp) && !(t instanceof Array) && !(t instanceof String) && !(t instanceof Number) && !(t instanceof Boolean)) {
                                        for (var e in this._params) delete this._params[e];
                                        for (var e in t) this._params[e] = t[e]
                                    }
                                }
                            }, {
                                key: "search",
                                get: function() {
                                    var t = [];
                                    for (var e in this._params)
                                        if (void 0 !== this._params[e])
                                            if ("" !== this._params[e]) try {
                                                t.push(encodeURIComponent(e) + "=" + encodeURIComponent(this._params[e]))
                                            } catch (n) {
                                                t.push(e + "=" + this._params[e])
                                            } else try {
                                                t.push(encodeURIComponent(e))
                                            } catch (n) {
                                                t.push(e)
                                            }
                                            return t.length ? "?" + t.join("&") : ""
                                },
                                set: function(t) {
                                    if ("string" == typeof t || t instanceof String) {
                                        t = t.toString(), 0 === t.indexOf("?") && (t = t.substr(1));
                                        var e = t.split("&");
                                        for (var n in this._params) delete this._params[n];
                                        for (var r = 0; r < e.length; r++) {
                                            var o = e[r].split("="),
                                                a = i(o, 2),
                                                s = a[0],
                                                u = a[1];
                                            if (void 0 !== u && (u = u.toString()), s) try {
                                                this._params[decodeURIComponent(s)] = decodeURIComponent(u)
                                            } catch (t) {
                                                this._params[s] = u
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "hash",
                                get: function() {
                                    return this._hash
                                },
                                set: function(t) {
                                    ("string" == typeof t || t instanceof String) && (t = t.toString(), t && t.indexOf("#") < 0 && (t = "#" + t), this._hash = t || "")
                                }
                            }, {
                                key: "host",
                                get: function() {
                                    return this.hostname + (this.port ? ":" + this.port : "")
                                },
                                set: function(t) {
                                    if ("string" == typeof t || t instanceof String) {
                                        t = t.toString();
                                        var e = t.match(/([^:\/?#]+)(?:[:]([0-9]+))?/);
                                        e && (this.hostname = e[1], this.port = e[2] || "")
                                    }
                                }
                            }]), t
                        }();
                    e["default"] = u
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        console && console.warn && console.warn(t)
                    }

                    function i() {
                        i.init.call(this)
                    }

                    function o(t) {
                        return void 0 === t._maxListeners ? i.defaultMaxListeners : t._maxListeners
                    }

                    function a(t, e, n, i) {
                        var a, s, u;
                        if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
                        if (s = t._events, void 0 === s ? (s = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== s.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), s = t._events), u = s[e]), void 0 === u) u = s[e] = n, ++t._eventsCount;
                        else if ("function" == typeof u ? u = s[e] = i ? [n, u] : [u, n] : i ? u.unshift(n) : u.push(n), (a = o(t)) > 0 && u.length > a && !u.warned) {
                            u.warned = !0;
                            var c = new Error("Possible EventEmitter memory leak detected. " + u.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                            c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = u.length, r(c)
                        }
                        return t
                    }

                    function s() {
                        for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
                        this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, g(this.listener, this.target, t))
                    }

                    function u(t, e, n) {
                        var r = {
                                fired: !1,
                                wrapFn: void 0,
                                target: t,
                                type: e,
                                listener: n
                            },
                            i = s.bind(r);
                        return i.listener = n, r.wrapFn = i, i
                    }

                    function c(t, e, n) {
                        var r = t._events;
                        if (void 0 === r) return [];
                        var i = r[e];
                        return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? p(i) : d(i, i.length)
                    }

                    function l(t) {
                        var e = this._events;
                        if (void 0 !== e) {
                            var n = e[t];
                            if ("function" == typeof n) return 1;
                            if (void 0 !== n) return n.length
                        }
                        return 0
                    }

                    function d(t, e) {
                        for (var n = new Array(e), r = 0; e > r; ++r) n[r] = t[r];
                        return n
                    }

                    function f(t, e) {
                        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                        t.pop()
                    }

                    function p(t) {
                        for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                        return e
                    }
                    var h, v = "object" == typeof Reflect ? Reflect : null,
                        g = v && "function" == typeof v.apply ? v.apply : function(t, e, n) {
                            return Function.prototype.apply.call(t, e, n)
                        };
                    h = v && "function" == typeof v.ownKeys ? v.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                    } : function(t) {
                        return Object.getOwnPropertyNames(t)
                    };
                    var m = Number.isNaN || function(t) {
                        return t !== t
                    };
                    t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
                    var b = 10;
                    Object.defineProperty(i, "defaultMaxListeners", {
                        enumerable: !0,
                        get: function() {
                            return b
                        },
                        set: function(t) {
                            if ("number" != typeof t || 0 > t || m(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                            b = t
                        }
                    }), i.init = function() {
                        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                    }, i.prototype.setMaxListeners = function(t) {
                        if ("number" != typeof t || 0 > t || m(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                        return this._maxListeners = t, this
                    }, i.prototype.getMaxListeners = function() {
                        return o(this)
                    }, i.prototype.emit = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
                        var r = "error" === t,
                            i = this._events;
                        if (void 0 !== i) r = r && void 0 === i.error;
                        else if (!r) return !1;
                        if (r) {
                            var o;
                            if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
                            var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                            throw a.context = o, a
                        }
                        var s = i[t];
                        if (void 0 === s) return !1;
                        if ("function" == typeof s) g(s, this, e);
                        else
                            for (var u = s.length, c = d(s, u), n = 0; u > n; ++n) g(c[n], this, e);
                        return !0
                    }, i.prototype.addListener = function(t, e) {
                        return a(this, t, e, !1)
                    }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(t, e) {
                        return a(this, t, e, !0)
                    }, i.prototype.once = function(t, e) {
                        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                        return this.on(t, u(this, t, e)), this
                    }, i.prototype.prependOnceListener = function(t, e) {
                        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                        return this.prependListener(t, u(this, t, e)), this
                    }, i.prototype.removeListener = function(t, e) {
                        var n, r, i, o, a;
                        if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                        if (void 0 === (r = this._events)) return this;
                        if (void 0 === (n = r[t])) return this;
                        if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
                        else if ("function" != typeof n) {
                            for (i = -1, o = n.length - 1; o >= 0; o--)
                                if (n[o] === e || n[o].listener === e) {
                                    a = n[o].listener, i = o;
                                    break
                                }
                            if (0 > i) return this;
                            0 === i ? n.shift() : f(n, i), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, a || e)
                        }
                        return this
                    }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(t) {
                        var e, n, r;
                        if (void 0 === (n = this._events)) return this;
                        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
                        if (0 === arguments.length) {
                            var i, o = Object.keys(n);
                            for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                        }
                        if ("function" == typeof(e = n[t])) this.removeListener(t, e);
                        else if (void 0 !== e)
                            for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
                        return this
                    }, i.prototype.listeners = function(t) {
                        return c(this, t, !0)
                    }, i.prototype.rawListeners = function(t) {
                        return c(this, t, !1)
                    }, i.listenerCount = function(t, e) {
                        return "function" == typeof t.listenerCount ? t.listenerCount(e) : l.call(t, e)
                    }, i.prototype.listenerCount = l, i.prototype.eventNames = function() {
                        return this._eventsCount > 0 ? h(this._events) : []
                    }
                },
                function(t, e, n) {
                    var r = n(6),
                        i = n(52),
                        o = n(40)("IE_PROTO"),
                        a = Object.prototype;
                    t.exports = Object.getPrototypeOf || function(t) {
                        return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
                    }
                },
                function(t, e, n) {
                    t.exports = {
                        "default": n(110),
                        __esModule: !0
                    }
                },
                function(t, e) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || Function("return this")() || (0, eval)("this")
                    } catch (t) {
                        "object" == typeof window && (n = window)
                    }
                    t.exports = n
                },
                function(t, e) {
                    function n() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function r() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function i(t) {
                        if (l === setTimeout) return setTimeout(t, 0);
                        if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
                        try {
                            return l(t, 0)
                        } catch (e) {
                            try {
                                return l.call(null, t, 0)
                            } catch (e) {
                                return l.call(this, t, 0)
                            }
                        }
                    }

                    function o(t) {
                        if (d === clearTimeout) return clearTimeout(t);
                        if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(t);
                        try {
                            return d(t)
                        } catch (e) {
                            try {
                                return d.call(null, t)
                            } catch (e) {
                                return d.call(this, t)
                            }
                        }
                    }

                    function a() {
                        v && p && (v = !1, p.length ? h = p.concat(h) : g = -1, h.length && s())
                    }

                    function s() {
                        if (!v) {
                            var t = i(a);
                            v = !0;
                            for (var e = h.length; e;) {
                                for (p = h, h = []; ++g < e;) p && p[g].run();
                                g = -1, e = h.length
                            }
                            p = null, v = !1, o(t)
                        }
                    }

                    function u(t, e) {
                        this.fun = t, this.array = e
                    }

                    function c() {}
                    var l, d, f = t.exports = {};
                    ! function() {
                        try {
                            l = "function" == typeof setTimeout ? setTimeout : n
                        } catch (t) {
                            l = n
                        }
                        try {
                            d = "function" == typeof clearTimeout ? clearTimeout : r
                        } catch (t) {
                            d = r
                        }
                    }();
                    var p, h = [],
                        v = !1,
                        g = -1;
                    f.nextTick = function(t) {
                        var e = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        h.push(new u(t, e)), 1 !== h.length || v || i(s)
                    }, u.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(t) {
                        return []
                    }, f.binding = function(t) {
                        throw new Error("process.binding is not supported")
                    }, f.cwd = function() {
                        return "/"
                    }, f.chdir = function(t) {
                        throw new Error("process.chdir is not supported")
                    }, f.umask = function() {
                        return 0
                    }
                },
                function(t, e) {
                    function n(t, e) {
                        var n = t[1] || "",
                            i = t[3];
                        if (!i) return n;
                        if (e && "function" == typeof btoa) {
                            var o = r(i);
                            return [n].concat(i.sources.map(function(t) {
                                return "/*# sourceURL=" + i.sourceRoot + t + " */"
                            })).concat([o]).join("\n")
                        }
                        return [n].join("\n")
                    }

                    function r(t) {
                        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
                    }
                    t.exports = function(t) {
                        var e = [];
                        return e.toString = function() {
                            return this.map(function(e) {
                                var r = n(e, t);
                                return e[2] ? "@media " + e[2] + "{" + r + "}" : r
                            }).join("")
                        }, e.i = function(t, n) {
                            "string" == typeof t && (t = [
                                [null, t, ""]
                            ]);
                            for (var r = {}, i = 0; i < this.length; i++) {
                                var o = this[i][0];
                                "number" == typeof o && (r[o] = !0)
                            }
                            for (i = 0; i < t.length; i++) {
                                var a = t[i];
                                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                            }
                        }, e
                    }
                },
                function(t, e, n) {
                    function r(t, e) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n],
                                i = h[r.id];
                            if (i) {
                                i.refs++;
                                for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
                                for (; o < r.parts.length; o++) i.parts.push(l(r.parts[o], e))
                            } else {
                                for (var a = [], o = 0; o < r.parts.length; o++) a.push(l(r.parts[o], e));
                                h[r.id] = {
                                    id: r.id,
                                    refs: 1,
                                    parts: a
                                }
                            }
                        }
                    }

                    function i(t, e) {
                        for (var n = [], r = {}, i = 0; i < t.length; i++) {
                            var o = t[i],
                                a = e.base ? o[0] + e.base : o[0],
                                s = o[1],
                                u = o[2],
                                c = o[3],
                                l = {
                                    css: s,
                                    media: u,
                                    sourceMap: c
                                };
                            r[a] ? r[a].parts.push(l) : n.push(r[a] = {
                                id: a,
                                parts: [l]
                            })
                        }
                        return n
                    }

                    function o(t, e) {
                        var n = g(t.insertInto);
                        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                        var r = y[y.length - 1];
                        if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), y.push(e);
                        else {
                            if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                            n.appendChild(e)
                        }
                    }

                    function a(t) {
                        if (null === t.parentNode) return !1;
                        t.parentNode.removeChild(t);
                        var e = y.indexOf(t);
                        e >= 0 && y.splice(e, 1)
                    }

                    function s(t) {
                        var e = document.createElement("style");
                        return t.attrs.type = "text/css", c(e, t.attrs), o(t, e), e
                    }

                    function u(t) {
                        var e = document.createElement("link");
                        return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", c(e, t.attrs), o(t, e), e
                    }

                    function c(t, e) {
                        Object.keys(e).forEach(function(n) {
                            t.setAttribute(n, e[n])
                        })
                    }

                    function l(t, e) {
                        var n, r, i, o;
                        if (e.transform && t.css) {
                            if (!(o = e.transform(t.css))) return function() {};
                            t.css = o
                        }
                        if (e.singleton) {
                            var c = b++;
                            n = m || (m = s(e)), r = d.bind(null, n, c, !1), i = d.bind(null, n, c, !0)
                        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(e), r = p.bind(null, n, e), i = function() {
                            a(n), n.href && URL.revokeObjectURL(n.href)
                        }) : (n = s(e), r = f.bind(null, n), i = function() {
                            a(n)
                        });
                        return r(t),
                            function(e) {
                                if (e) {
                                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                                    r(t = e)
                                } else i()
                            }
                    }

                    function d(t, e, n, r) {
                        var i = n ? "" : r.css;
                        if (t.styleSheet) t.styleSheet.cssText = w(e, i);
                        else {
                            var o = document.createTextNode(i),
                                a = t.childNodes;
                            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
                        }
                    }

                    function f(t, e) {
                        var n = e.css,
                            r = e.media;
                        if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n;
                        else {
                            for (; t.firstChild;) t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(n))
                        }
                    }

                    function p(t, e, n) {
                        var r = n.css,
                            i = n.sourceMap,
                            o = void 0 === e.convertToAbsoluteUrls && i;
                        (e.convertToAbsoluteUrls || o) && (r = _(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
                        var a = new Blob([r], {
                                type: "text/css"
                            }),
                            s = t.href;
                        t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
                    }
                    var h = {},
                        v = function(t) {
                            var e;
                            return function() {
                                return void 0 === e && (e = t.apply(this, arguments)), e
                            }
                        }(function() {
                            return window && document && document.all && !window.atob
                        }),
                        g = function(t) {
                            var e = {};
                            return function(n) {
                                return void 0 === e[n] && (e[n] = t.call(this, n)), e[n]
                            }
                        }(function(t) {
                            return document.querySelector(t)
                        }),
                        m = null,
                        b = 0,
                        y = [],
                        _ = n(82);
                    t.exports = function(t, e) {
                        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                        e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = v()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                        var n = i(t, e);
                        return r(n, e),
                            function(t) {
                                for (var o = [], a = 0; a < n.length; a++) {
                                    var s = n[a],
                                        u = h[s.id];
                                    u.refs--, o.push(u)
                                }
                                t && r(i(t, e), e);
                                for (var a = 0; a < o.length; a++) {
                                    var u = o[a];
                                    if (0 === u.refs) {
                                        for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                                        delete h[u.id]
                                    }
                                }
                            }
                    };
                    var w = function() {
                        var t = [];
                        return function(e, n) {
                            return t[e] = n, t.filter(Boolean).join("\n")
                        }
                    }()
                },
                function(t, e) {
                    t.exports = function(t) {
                        var e = "undefined" != typeof window && window.location;
                        if (!e) throw new Error("fixUrls requires window.location");
                        if (!t || "string" != typeof t) return t;
                        var n = e.protocol + "//" + e.host,
                            r = n + e.pathname.replace(/\/[^\/]*$/, "/");
                        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                            var i = e.trim().replace(/^"(.*)"$/, function(t, e) {
                                return e
                            }).replace(/^'(.*)'$/, function(t, e) {
                                return e
                            });
                            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return t;
                            var o;
                            return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")"
                        })
                    }
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n(1),
                        o = r(i),
                        a = n(15),
                        s = r(a),
                        u = n(2),
                        c = r(u),
                        l = n(16),
                        d = r(l),
                        f = n(119),
                        p = n(75),
                        h = r(p),
                        v = n(120),
                        g = r(v),
                        m = n(65),
                        b = r(m),
                        y = n(12),
                        _ = r(y),
                        w = n(20),
                        x = r(w),
                        k = n(13);
                    n.p = "//g.alicdn.com/mtb/lcps-videox/" + f.version + "/";
                    var O = function(t) {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            o["default"](this, e);
                            var n = s["default"](this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return n.Events = _["default"], n.config = t, n.rootElement = k.createEl("div", {
                                className: "lib-video"
                            }), n.player = new g["default"](n), !1 !== t.controls && (n.controlBar = new b["default"](n)), n.emit(x["default"].INIT, {}), n._bindEvent(), n
                        }
                        return d["default"](e, t), c["default"](e, null, [{
                            key: "version",
                            get: function() {
                                return f.version
                            }
                        }]), c["default"](e, [{
                            key: "getVideoEl",
                            value: function() {
                                return this.videoDom
                            }
                        }, {
                            key: "play",
                            value: function() {
                                this.player.play()
                            }
                        }, {
                            key: "pause",
                            value: function() {
                                this.player.pause()
                            }
                        }, {
                            key: "reload",
                            value: function(t) {
                                this.player.reload(t)
                            }
                        }, {
                            key: "updateErrorMsg",
                            value: function(t) {
                                this.player.updateErrorMsg(t)
                            }
                        }, {
                            key: "setCurrentTime",
                            value: function(t) {
                                this.videoDom.currentTime = t
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.player._cleanPlayer(), this.player.container.innerHTML = ""
                            }
                        }, {
                            key: "_bindEvent",
                            value: function() {
                                var t = this;
                                this.rootElement.addEventListener("touchend", function(e) {
                                    return t._triggerPlayerClick(e)
                                }, !0), this.rootElement.addEventListener("click", function(e) {
                                    return t._triggerPlayerClick(e)
                                }, !0)
                            }
                        }, {
                            key: "_triggerPlayerClick",
                            value: function(t) {
                                "VIDEO" === t.target.nodeName.toUpperCase() && ("touchend" == t.type && (t.stopPropagation(), t.preventDefault()), this.emit(x["default"].VIDEO_CLICK))
                            }
                        }], [{
                            key: "videoDom",
                            set: function(t) {
                                e.videoDom = t
                            }
                        }]), e
                    }(h["default"]);
                    e["default"] = O
                },
                function(t, e, n) {
                    t.exports = {
                        "default": n(85),
                        __esModule: !0
                    }
                },
                function(t, e, n) {
                    n(86), n(96), t.exports = n(44).f("iterator")
                },
                function(t, e, n) {
                    "use strict";
                    var r = n(87)(!0);
                    n(54)(String, "String", function(t) {
                        this._t = String(t), this._i = 0
                    }, function() {
                        var t, e = this._t,
                            n = this._i;
                        return n >= e.length ? {
                            value: void 0,
                            done: !0
                        } : (t = r(e, n), this._i += t.length, {
                            value: t,
                            done: !1
                        })
                    })
                },
                function(t, e, n) {
                    var r = n(34),
                        i = n(35);
                    t.exports = function(t) {
                        return function(e, n) {
                            var o, a, s = String(i(e)),
                                u = r(n),
                                c = s.length;
                            return 0 > u || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u), 55296 > o || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536)
                        }
                    }
                },
                function(t, e) {
                    t.exports = function(t) {
                        if ("function" != typeof t) throw TypeError(t + " is not a function!");
                        return t
                    }
                },
                function(t, e, n) {
                    "use strict";
                    var r = n(38),
                        i = n(26),
                        o = n(43),
                        a = {};
                    n(9)(a, n(11)("iterator"), function() {
                        return this
                    }), t.exports = function(t, e, n) {
                        t.prototype = r(a, {
                            next: i(1, n)
                        }), o(t, e + " Iterator")
                    }
                },
                function(t, e, n) {
                    var r = n(4),
                        i = n(19),
                        o = n(39);
                    t.exports = n(5) ? Object.defineProperties : function(t, e) {
                        i(t);
                        for (var n, a = o(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
                        return t
                    }
                },
                function(t, e, n) {
                    var r = n(60);
                    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                        return "String" == r(t) ? t.split("") : Object(t)
                    }
                },
                function(t, e, n) {
                    var r = n(8),
                        i = n(93),
                        o = n(94);
                    t.exports = function(t) {
                        return function(e, n, a) {
                            var s, u = r(e),
                                c = i(u.length),
                                l = o(a, c);
                            if (t && n != n) {
                                for (; c > l;)
                                    if ((s = u[l++]) != s) return !0
                            } else
                                for (; c > l; l++)
                                    if ((t || l in u) && u[l] === n) return t || l || 0; return !t && -1
                        }
                    }
                },
                function(t, e, n) {
                    var r = n(34),
                        i = Math.min;
                    t.exports = function(t) {
                        return t > 0 ? i(r(t), 9007199254740991) : 0
                    }
                },
                function(t, e, n) {
                    var r = n(34),
                        i = Math.max,
                        o = Math.min;
                    t.exports = function(t, e) {
                        return t = r(t), 0 > t ? i(t + e, 0) : o(t, e)
                    }
                },
                function(t, e, n) {
                    var r = n(0).document;
                    t.exports = r && r.documentElement
                },
                function(t, e, n) {
                    n(97);
                    for (var r = n(0), i = n(9), o = n(37), a = n(11)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
                        var c = s[u],
                            l = r[c],
                            d = l && l.prototype;
                        d && !d[a] && i(d, a, c), o[c] = o.Array
                    }
                },
                function(t, e, n) {
                    "use strict";
                    var r = n(98),
                        i = n(99),
                        o = n(37),
                        a = n(8);
                    t.exports = n(54)(Array, "Array", function(t, e) {
                        this._t = a(t), this._i = 0, this._k = e
                    }, function() {
                        var t = this._t,
                            e = this._k,
                            n = this._i++;
                        return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]])
                    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
                },
                function(t, e) {
                    t.exports = function() {}
                },
                function(t, e) {
                    t.exports = function(t, e) {
                        return {
                            value: e,
                            done: !!t
                        }
                    }
                },
                function(t, e, n) {
                    t.exports = {
                        "default": n(101),
                        __esModule: !0
                    }
                },
                function(t, e, n) {
                    n(102), n(107), n(108), n(109), t.exports = n(3).Symbol
                },
                function(t, e, n) {
                    "use strict";
                    var r = n(0),
                        i = n(6),
                        o = n(5),
                        a = n(18),
                        s = n(58),
                        u = n(103).KEY,
                        c = n(24),
                        l = n(41),
                        d = n(43),
                        f = n(27),
                        p = n(11),
                        h = n(44),
                        v = n(45),
                        g = n(104),
                        m = n(105),
                        b = n(19),
                        y = n(10),
                        _ = n(52),
                        w = n(8),
                        x = n(36),
                        k = n(26),
                        O = n(38),
                        E = n(106),
                        S = n(53),
                        C = n(61),
                        j = n(4),
                        T = n(39),
                        P = S.f,
                        L = j.f,
                        I = E.f,
                        A = r.Symbol,
                        N = r.JSON,
                        R = N && N.stringify,
                        M = p("_hidden"),
                        V = p("toPrimitive"),
                        X = {}.propertyIsEnumerable,
                        D = l("symbol-registry"),
                        U = l("symbols"),
                        B = l("op-symbols"),
                        F = Object.prototype,
                        $ = "function" == typeof A && !!C.f,
                        H = r.QObject,
                        z = !H || !H.prototype || !H.prototype.findChild,
                        W = o && c(function() {
                            return 7 != O(L({}, "a", {
                                get: function() {
                                    return L(this, "a", {
                                        value: 7
                                    }).a
                                }
                            })).a
                        }) ? function(t, e, n) {
                            var r = P(F, e);
                            r && delete F[e], L(t, e, n), r && t !== F && L(F, e, r)
                        } : L,
                        q = function(t) {
                            var e = U[t] = O(A.prototype);
                            return e._k = t, e
                        },
                        Y = $ && "symbol" == typeof A.iterator ? function(t) {
                            return "symbol" == typeof t
                        } : function(t) {
                            return t instanceof A
                        },
                        K = function(t, e, n) {
                            return t === F && K(B, e, n), b(t), e = x(e, !0), b(n), i(U, e) ? (n.enumerable ? (i(t, M) && t[M][e] && (t[M][e] = !1), n = O(n, {
                                enumerable: k(0, !1)
                            })) : (i(t, M) || L(t, M, k(1, {})), t[M][e] = !0), W(t, e, n)) : L(t, e, n)
                        },
                        G = function(t, e) {
                            b(t);
                            for (var n, r = g(e = w(e)), i = 0, o = r.length; o > i;) K(t, n = r[i++], e[n]);
                            return t
                        },
                        J = function(t, e) {
                            return void 0 === e ? O(t) : G(O(t), e)
                        },
                        Q = function(t) {
                            var e = X.call(this, t = x(t, !0));
                            return !(this === F && i(U, t) && !i(B, t)) && (!(e || !i(this, t) || !i(U, t) || i(this, M) && this[M][t]) || e)
                        },
                        Z = function(t, e) {
                            if (t = w(t), e = x(e, !0), t !== F || !i(U, e) || i(B, e)) {
                                var n = P(t, e);
                                return !n || !i(U, e) || i(t, M) && t[M][e] || (n.enumerable = !0), n
                            }
                        },
                        tt = function(t) {
                            for (var e, n = I(w(t)), r = [], o = 0; n.length > o;) i(U, e = n[o++]) || e == M || e == u || r.push(e);
                            return r
                        },
                        et = function(t) {
                            for (var e, n = t === F, r = I(n ? B : w(t)), o = [], a = 0; r.length > a;)!i(U, e = r[a++]) || n && !i(F, e) || o.push(U[e]);
                            return o
                        };
                    $ || (A = function() {
                        if (this instanceof A) throw TypeError("Symbol is not a constructor!");
                        var t = f(arguments.length > 0 ? arguments[0] : void 0),
                            e = function(n) {
                                this === F && e.call(B, n), i(this, M) && i(this[M], t) && (this[M][t] = !1), W(this, t, k(1, n))
                            };
                        return o && z && W(F, t, {
                            configurable: !0,
                            set: e
                        }), q(t)
                    }, s(A.prototype, "toString", function() {
                        return this._k
                    }), S.f = Z, j.f = K, n(62).f = E.f = tt, n(46).f = Q, C.f = et, o && !n(25) && s(F, "propertyIsEnumerable", Q, !0), h.f = function(t) {
                        return q(p(t))
                    }), a(a.G + a.W + a.F * !$, {
                        Symbol: A
                    });
                    for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; nt.length > rt;) p(nt[rt++]);
                    for (var it = T(p.store), ot = 0; it.length > ot;) v(it[ot++]);
                    a(a.S + a.F * !$, "Symbol", {
                        "for": function(t) {
                            return i(D, t += "") ? D[t] : D[t] = A(t)
                        },
                        keyFor: function(t) {
                            if (!Y(t)) throw TypeError(t + " is not a symbol!");
                            for (var e in D)
                                if (D[e] === t) return e
                        },
                        useSetter: function() {
                            z = !0
                        },
                        useSimple: function() {
                            z = !1
                        }
                    }), a(a.S + a.F * !$, "Object", {
                        create: J,
                        defineProperty: K,
                        defineProperties: G,
                        getOwnPropertyDescriptor: Z,
                        getOwnPropertyNames: tt,
                        getOwnPropertySymbols: et
                    });
                    var at = c(function() {
                        C.f(1)
                    });
                    a(a.S + a.F * at, "Object", {
                        getOwnPropertySymbols: function(t) {
                            return C.f(_(t))
                        }
                    }), N && a(a.S + a.F * (!$ || c(function() {
                        var t = A();
                        return "[null]" != R([t]) || "{}" != R({
                            a: t
                        }) || "{}" != R(Object(t))
                    })), "JSON", {
                        stringify: function(t) {
                            for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                            return n = e = r[1], !y(e) && void 0 === t || Y(t) ? void 0 : (m(e) || (e = function(t, e) {
                                return "function" == typeof n && (e = n.call(this, t, e)), Y(e) ? void 0 : e
                            }), r[1] = e, R.apply(N, r))
                        }
                    }), A.prototype[V] || n(9)(A.prototype, V, A.prototype.valueOf), d(A, "Symbol"), d(Math, "Math", !0), d(r.JSON, "JSON", !0)
                },
                function(t, e, n) {
                    var r = n(27)("meta"),
                        i = n(10),
                        o = n(6),
                        a = n(4).f,
                        s = 0,
                        u = Object.isExtensible || function() {
                            return !0
                        },
                        c = !n(24)(function() {
                            return u(Object.preventExtensions({}))
                        }),
                        l = function(t) {
                            a(t, r, {
                                value: {
                                    i: "O" + ++s,
                                    w: {}
                                }
                            })
                        },
                        d = function(t, e) {
                            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                            if (!o(t, r)) {
                                if (!u(t)) return "F";
                                if (!e) return "E";
                                l(t)
                            }
                            return t[r].i
                        },
                        f = function(t, e) {
                            if (!o(t, r)) {
                                if (!u(t)) return !0;
                                if (!e) return !1;
                                l(t)
                            }
                            return t[r].w
                        },
                        p = function(t) {
                            return c && h.NEED && u(t) && !o(t, r) && l(t), t
                        },
                        h = t.exports = {
                            KEY: r,
                            NEED: !1,
                            fastKey: d,
                            getWeak: f,
                            onFreeze: p
                        }
                },
                function(t, e, n) {
                    var r = n(39),
                        i = n(61),
                        o = n(46);
                    t.exports = function(t) {
                        var e = r(t),
                            n = i.f;
                        if (n)
                            for (var a, s = n(t), u = o.f, c = 0; s.length > c;) u.call(t, a = s[c++]) && e.push(a);
                        return e;
                    }
                },
                function(t, e, n) {
                    var r = n(60);
                    t.exports = Array.isArray || function(t) {
                        return "Array" == r(t)
                    }
                },
                function(t, e, n) {
                    var r = n(8),
                        i = n(62).f,
                        o = {}.toString,
                        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
                        s = function(t) {
                            try {
                                return i(t)
                            } catch (t) {
                                return a.slice()
                            }
                        };
                    t.exports.f = function(t) {
                        return a && "[object Window]" == o.call(t) ? s(t) : i(r(t))
                    }
                },
                function(t, e) {},
                function(t, e, n) {
                    n(45)("asyncIterator")
                },
                function(t, e, n) {
                    n(45)("observable")
                },
                function(t, e, n) {
                    n(111);
                    var r = n(3).Object;
                    t.exports = function(t, e, n) {
                        return r.defineProperty(t, e, n)
                    }
                },
                function(t, e, n) {
                    var r = n(18);
                    r(r.S + r.F * !n(5), "Object", {
                        defineProperty: n(4).f
                    })
                },
                function(t, e, n) {
                    t.exports = {
                        "default": n(113),
                        __esModule: !0
                    }
                },
                function(t, e, n) {
                    n(114), t.exports = n(3).Object.setPrototypeOf
                },
                function(t, e, n) {
                    var r = n(18);
                    r(r.S, "Object", {
                        setPrototypeOf: n(115).set
                    })
                },
                function(t, e, n) {
                    var r = n(10),
                        i = n(19),
                        o = function(t, e) {
                            if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
                        };
                    t.exports = {
                        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
                            try {
                                r = n(55)(Function.call, n(53).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array)
                            } catch (t) {
                                e = !0
                            }
                            return function(t, n) {
                                return o(t, n), e ? t.__proto__ = n : r(t, n), t
                            }
                        }({}, !1) : void 0),
                        check: o
                    }
                },
                function(t, e, n) {
                    t.exports = {
                        "default": n(117),
                        __esModule: !0
                    }
                },
                function(t, e, n) {
                    n(118);
                    var r = n(3).Object;
                    t.exports = function(t, e) {
                        return r.create(t, e)
                    }
                },
                function(t, e, n) {
                    var r = n(18);
                    r(r.S, "Object", {
                        create: n(38)
                    })
                },
                function(t, e) {
                    t.exports = {
                        name: "@ali/lcps-videox",
                        description: "支持多种视频格式、适用于点播和直播场景的统一播放器",
                        version: "0.1.50",
                        repository: {
                            type: "git",
                            url: "git@gitlab.alibaba-inc.com:mtb/lcps-videox.git"
                        },
                        author: [{
                            name: "yingyi.zj",
                            email: "yingyi.zj@alibaba-inc.com"
                        }],
                        license: "MIT",
                        keywords: ["lib", "mtb", "javascript", "es6", "es2015"],
                        publishConfig: {
                            registry: "http://registry.npm.alibaba-inc.com"
                        },
                        scripts: {
                            clear: "rm -rf dist coverage release",
                            build: "webpack --config ./webpack/webpack.pub.js",
                            bundle: "webpack --config ./webpack/webpack.dev.js",
                            dev: "webpack --config ./webpack/webpack.dev.js --watch",
                            lint: "eslint --fix --config .eslintrc src/**/*.js test/**/*.js",
                            test: "mocha --compilers js:babel-core/register test/**/*.js",
                            cover: "babel-node node_modules/isparta/bin/isparta cover --report text node_modules/mocha/bin/_mocha test/**/*.js --reporter dot",
                            ci: "tnpm run lint && tnpm run test",
                            release: "tnpm run build && sh ./build/release.sh && sh ./build/pubcdn.sh",
                            "site:update": "sh ./build/site.sh update",
                            "site:build": "sh ./build/site.sh build",
                            "site:watch": 'watch -p "doc/**/*.md" -p "README.md" -c "tnpm run site:build"',
                            "site:serve": "sh ./build/site.sh serve",
                            "site:publish": "sh ./build/site.sh publish"
                        },
                        dependencies: {
                            "@ali/lib-httpurl": "~2.0.0",
                            "@ali/lib-video-tool": "^0.1.1",
                            "@ali/lib-windvane": "^2.1.8",
                            "amfe-env": "^2.0.0",
                            "es6-promise": "^4.0.5",
                            "lodash-compat": "^3.10.2",
                            url: "^0.11.0",
                            "url-toolkit": "^2.0.1",
                            webworkify: "^1.4.0"
                        },
                        devDependencies: {
                            autoprefixer: "^7.1.1",
                            babel: "^6.23.0",
                            "babel-cli": "~6.4.5",
                            "babel-core": "^6.25.0",
                            "babel-loader": "^7.1.1",
                            "babel-plugin-syntax-async-functions": "^6.13.0",
                            "babel-plugin-syntax-dynamic-import": "^6.18.0",
                            "babel-plugin-transform-async-to-generator": "^6.24.1",
                            "babel-plugin-transform-regenerator": "^6.24.1",
                            "babel-plugin-transform-runtime": "^6.23.0",
                            "babel-preset-es2015": "~6.3.13",
                            "babel-runtime": "^6.23.0",
                            chai: "~3.4.1",
                            "css-loader": "^0.28.4",
                            cssnano: "^3.10.0",
                            eslint: "~2.1.0",
                            "gitbook-cli": "~1.0.1",
                            isparta: "~4.0.0",
                            mocha: "~2.4.5",
                            "postcss-loader": "^2.0.6",
                            "postcss-px2rem": "^0.3.0",
                            precss: "^2.0.0",
                            serve: "~1.4.0",
                            "style-loader": "^0.18.2",
                            "watch-cli": "~0.2.1",
                            webpack: "^3.0.0",
                            "webworkify-webpack": "^2.1.0"
                        },
                        main: "./src/videox.js"
                    }
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n(17),
                        o = r(i),
                        a = n(1),
                        s = r(a),
                        u = n(2),
                        c = r(u),
                        l = n(15),
                        d = r(l),
                        f = n(16),
                        p = r(f);
                    n(121);
                    var h = n(28),
                        v = r(h),
                        g = n(20),
                        m = r(g),
                        b = n(12),
                        y = r(b),
                        _ = n(122),
                        w = r(_),
                        x = n(13),
                        k = n(65),
                        O = (r(k), n(32)),
                        E = function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                            return e["default"] = t, e
                        }(O),
                        S = n(21),
                        C = r(S),
                        j = n(156),
                        T = n(164),
                        P = r(T),
                        L = new j.VideoTool,
                        I = {
                            m3u8: "application/x-mpegURL",
                            mp4: "video/mp4",
                            flv: "video/x-flv"
                        },
                        A = function(t) {
                            function e(t) {
                                s["default"](this, e);
                                var n = d["default"](this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                n.videox = t;
                                var r = n.opts = t.config;
                                return n.hlsPlayer = null, n.flvPlayer = null, n.options = {
                                    controls: !1,
                                    autoplay: !1,
                                    flvOptions: {}
                                }, n.firstPlay = !0, n.flvHadPlayed = !1, Object.assign(n.options, r), n.rootElement = t.rootElement, n._addEventListener(), n
                            }
                            return p["default"](e, t), c["default"](e, [{
                                key: "_addEventListener",
                                value: function() {
                                    this.videox.on(m["default"].INIT, this.onInit.bind(this)), this.videox.on(m["default"].SOURCE_ATTACHED, this.onSourceAttached.bind(this)), this.videox.on(m["default"].TRIGGER_PAUSE, this.onTriggerPause.bind(this)), this.videox.on(m["default"].TRIGGER_PLAY, this.onTriggerPlay.bind(this)), this.videox.on(y["default"].VIDEO_PLAY, this.onVideoPlay.bind(this)), this.videox.on(y["default"].VIDEO_WAITING, this.onVideoWaiting.bind(this)), this.videox.on(y["default"].VIDEO_PLAYING, this.onVideoPlaying.bind(this)), this.videox.on(y["default"].VIDEO_ERROR, this.onVideoError.bind(this)), this.videox.on(y["default"].VIDEO_PAUSE, this.onVideoPause.bind(this))
                                }
                            }, {
                                key: "onInit",
                                value: function() {
                                    var t = this.opts;
                                    "object" === o["default"](t.container) ? this.container = t.container : "string" == typeof t.container && (this.container = x.$(t.container)), t.from || console.error("参数from为必填项，用作业务埋点统计，请联系@霜草进行分配"), this.video = x.createEl("video", {
                                        className: "lib-video",
                                        loop: t.loop || !1,
                                        volume: void 0 == t.volume ? 1 : t.volume,
                                        muted: t.muted || !1
                                    }, {
                                        "webkit-playsinline": "webkit-playsinline",
                                        playsinline: "playsinline",
                                        poster: t.poster || ""
                                    }), this.logParams = {
                                        videoId: "",
                                        type: t.live ? "live" : "video"
                                    }, this._render(), this._appendSource(), this._bindEvent(!1), this._bindDomEvent(), this.videox.videoDom = this.getVideoEl(), this._initLogTrack()
                                }
                            }, {
                                key: "onTriggerPause",
                                value: function() {
                                    this.pause()
                                }
                            }, {
                                key: "onTriggerPlay",
                                value: function() {
                                    this.play()
                                }
                            }, {
                                key: "onVideoWaiting",
                                value: function() {
                                    x.removeElClass(this.startPlayEl.parentNode, "error"), x.addElClass(this.startPlayEl.parentNode, "loading"), x.removeElClass(this.rootElement, "vjs-has-started")
                                }
                            }, {
                                key: "onVideoPlay",
                                value: function(t) {
                                    x.addElClass(this.startPlayEl.parentNode, "loading"), x.removeElClass(this.startPlayEl.parentNode, "error")
                                }
                            }, {
                                key: "onVideoPlaying",
                                value: function(t) {
                                    x.removeElClass(this.startPlayEl.parentNode, "loading"), x.addElClass(this.rootElement, "vjs-has-started")
                                }
                            }, {
                                key: "onVideoPause",
                                value: function(t) {}
                            }, {
                                key: "onVideoError",
                                value: function(t) {
                                    x.removeElClass(this.rootElement, "vjs-has-started"), x.removeElClass(this.rootElement, "vjs-has-paused"), x.removeElClass(this.startPlayEl.parentNode, "loading"), this.videox.videoDom.poster = "", x.addElClass(this.startPlayEl.parentNode, "error")
                                }
                            }, {
                                key: "onSourceAttached",
                                value: function(t) {
                                    return this.tagType = t.tagType, t.reload ? void this.play() : void(this.options.autoplay && ("NATIVE" == this.tagType ? this.video.autoplay = !0 : this.play()))
                                }
                            }, {
                                key: "_appendSource",
                                value: function(t) {
                                    var e = this,
                                        r = t || this.options.url,
                                        i = !!t,
                                        o = w["default"].checkFileType(r);
                                    if (this.video.innerHTML = "", L.canPlay(r)) {
                                        this.video.removeAttribute("src");
                                        var a = x.createEl("source", {
                                            src: r
                                        });
                                        this.video.appendChild(a), this.videox.emit(m["default"].SOURCE_ATTACHED, {
                                            tagType: "NATIVE",
                                            reload: i
                                        }), w["default"].isSafari() && (this.video.removeAttribute("autoplay"), this.video.pause())
                                    } else if ("flv" === o) n.e(1).then(n.bind(null, 165)).then(function(t) {
                                        if (t.isSupported()) {
                                            var n = {},
                                                r = t.Events,
                                                o = r.ERROR,
                                                a = r.LOADING_COMPLETE,
                                                s = r.RECOVERED_EARLY_EOF,
                                                u = r.MEDIA_INFO,
                                                c = r.STATISTICS_INFO;
                                            Object.assign(n, e.options, {
                                                type: "flv"
                                            });
                                            var l = e.flvPlayer = t.createPlayer(n, e.options.flvOptions);
                                            l.attachMediaElement(e.video), l.load(), e.videox.emit(m["default"].SOURCE_ATTACHED, {
                                                tagType: "FLV",
                                                reload: i
                                            }), l.on(o, function(t, n, r) {
                                                var i = {
                                                    event: t,
                                                    detail: n,
                                                    info: r
                                                };
                                                e.videox.emit(y["default"].VIDEO_ERROR, t), e.videox.emit(m["default"].PLAYER_INNER_ERROR, i)
                                            }), l.on(a, function(t) {
                                                e.videox.emit(y["default"].VIDEO_LOADING_COMPLETE, t)
                                            }), l.on(s, function(t) {
                                                e.videox.emit(y["default"].VIDEO_RECOVERED_EARLY_EOF, t)
                                            }), l.on(u, function(t) {
                                                return e.videox.emit(u, t)
                                            }), l.on(c, function(t) {
                                                return e.videox.emit(c, t)
                                            })
                                        } else e.videox.emit(y["default"].VIDEO_ERROR, {
                                            isSupport: !1
                                        }), console.error("FLV is not support!")
                                    });
                                    else if ("m3u8" === o) w["default"].hlsSupport() ? (this.video.setAttribute("type", I[o] || ""), this.video.setAttribute("src", r), this.videox.emit(m["default"].SOURCE_ATTACHED, {
                                        tagType: "NATIVE",
                                        reload: i
                                    })) : n.e(0).then(n.bind(null, 166)).then(function(t) {
                                        var n = e.options.oldhls ? t.oldHls : t.hls;
                                        n.isSupported() ? (e.hlsPlayer = new n(e.options.codecConfig), e.hlsPlayer.attachMedia(e.video), e.hlsPlayer.loadSource(r), e.videoPlayerType = "hls", e.videox.emit(m["default"].SOURCE_ATTACHED, {
                                            tagType: "HLS",
                                            reload: i
                                        }), e.hlsPlayer.on(n.Events.ERROR, function(t, n) {
                                            var r = {
                                                event: t,
                                                data: n
                                            };
                                            e.videox.emit(m["default"].PLAYER_INNER_ERROR, r)
                                        })) : (e.videox.emit(y["default"].VIDEO_ERROR, {
                                            isSupport: !1
                                        }), console.error("HLS is not support!"))
                                    });
                                    else {
                                        this.video.removeAttribute("src");
                                        var s = x.createEl("source", {
                                            src: r
                                        });
                                        this.video.appendChild(s), this.videox.emit(m["default"].SOURCE_ATTACHED, {
                                            tagType: "NATIVE",
                                            reload: i
                                        })
                                    }
                                }
                            }, {
                                key: "play",
                                value: function() {
                                    var t = this.video,
                                        e = t.play();
                                    void 0 !== e && e.then(function() {})["catch"](function(t) {
                                        console.log(t)
                                    })
                                }
                            }, {
                                key: "pause",
                                value: function() {
                                    this.video.pause()
                                }
                            }, {
                                key: "stop",
                                value: function() {
                                    this.pause(), this.video.currentTime = 0
                                }
                            }, {
                                key: "flvPlay",
                                value: function() {
                                    this.flvPlayer.pause(), this.flvPlayer.unload(), this.flvPlayer.load(), this.flvPlayer.play()
                                }
                            }, {
                                key: "setCurrentTime",
                                value: function(t) {
                                    this.video.currentTime = t
                                }
                            }, {
                                key: "getVideoEl",
                                value: function() {
                                    return this.video
                                }
                            }, {
                                key: "updateErrorMsg",
                                value: function(t) {
                                    if (t && this.rootElement) {
                                        var e = this.rootElement.getElementsByClassName("error-message-wrap");
                                        e && e[0] && (e[0].innerHTML = t)
                                    }
                                }
                            }, {
                                key: "getStatus",
                                value: function() {
                                    return this.video.networkState
                                }
                            }, {
                                key: "enterFullScreen",
                                value: function() {
                                    this.controlBar && this.controlBar.enterFullScreen(), this.logTrack.fullScreenLog()
                                }
                            }, {
                                key: "reload",
                                value: function(t) {
                                    if (!this.video) return void console.error("Unable to find a video element");
                                    var e = t || this.options.url;
                                    e && (this.onVideoWaiting(), this._cleanPlayer(), this.options.url = e, this._appendSource(this.options.url, this.options.codecConfig))
                                }
                            }, {
                                key: "_initLogTrack",
                                value: function() {
                                    var t = {
                                        videox: this.videox
                                    };
                                    Object.assign(t, this.videox.config), this.logTrack = new P["default"](t)
                                }
                            }, {
                                key: "_cleanPlayer",
                                value: function() {
                                    this.video.pause(), this.flvPlayer && this.flvPlayer.destroy(), this.flvPlayer = null, this.hlsPlayer && this.hlsPlayer.destroy(), this.hlsPlayer = null, this.video.src = "", this.video.load(), this.video.currentTime = 0, this.video.innerHTML = ""
                                }
                            }, {
                                key: "_render",
                                value: function() {
                                    var t = this.options.stalledText || "有点小卡，请重试",
                                        e = void 0 === this.options.showRetry || !0 === this.options.showRetry,
                                        n = e ? '\n      <button class="vjs-center-retry vjs-button" role="button" type="button">\n        <span class="vjs-control-text">retry</span>\n      </button>' : "",
                                        r = x.createEl("div", {
                                            className: "vjs-center-container",
                                            innerHTML: '\n        <button class="vjs-center-load vjs-button" role="button" type="button">\n          <span class="vjs-control-text">Load</span>\n        </button>\n        <button class="vjs-center-start vjs-button" role="button" type="button">\n          <span class="vjs-control-text">start</span>\n        </button>\n        <div class="error-content">\n          <p class="error-message-wrap">' + t + "</p>\n          " + n + "\n        </div>\n      "
                                        });
                                    x.createEl("div", {
                                        className: "vjs-center-container error",
                                        innerHTML: "\n\n        \n      "
                                    }), x.appendContent(this.rootElement, [this.video, r]), this.startPlayEl = x.$(".vjs-center-start", this.rootElement), this.retryEl = x.$(".vjs-center-retry", this.rootElement), this.container.appendChild(this.rootElement)
                                }
                            }, {
                                key: "_bindEvent",
                                value: function(t) {
                                    var e = this;
                                    this.rootElement, !t && this.startPlayEl.addEventListener("click", function(t) {
                                        return e._triggerStartPlayerClick(t)
                                    }), !t && this.retryEl.addEventListener("click", function(t) {
                                        return e.reload()
                                    })
                                }
                            }, {
                                key: "_bindDomEvent",
                                value: function() {
                                    var t = this;
                                    this.video.addEventListener("error", function(e) {
                                        return t._errorEmit(e)
                                    }), this.video.addEventListener("ended", function(e) {
                                        return t._endedEmit(e)
                                    }), this.video.addEventListener("progress", function(e) {
                                        return t._progressEmit(e)
                                    }), this.video.addEventListener("play", function(e) {
                                        return t._playEmit(e)
                                    }), this.video.addEventListener("loadstart", function(e) {
                                        return t._loadstartEmit(e)
                                    }), this.video.addEventListener("playing", function(e) {
                                        return t._playingEmit(e)
                                    }), this.video.addEventListener("suspend", function(e) {
                                        return t._suspendEmit(e)
                                    }), this.video.addEventListener("abort", function(e) {
                                        return t._abortEmit(e)
                                    }), this.video.addEventListener("stalled", function(e) {
                                        return t._stalledEmit(e)
                                    }), this.video.addEventListener("waiting", function(e) {
                                        return t._waitingEmit(e)
                                    }), this.video.addEventListener("canplay", function(e) {
                                        return t._canplayEmit(e)
                                    }), this.video.addEventListener("canplaythrough", function(e) {
                                        return t._canplaythroughEmit(e)
                                    }), this.video.addEventListener("timeupdate", function(e) {
                                        return t._timeupdateEmit(e)
                                    }), this.video.addEventListener("seeking", function(e) {
                                        return t._seekingEmit(e)
                                    }), this.video.addEventListener("seeked", function(e) {
                                        return t._seekedEmit(e)
                                    }), this.video.addEventListener("pause", function(e) {
                                        return t._pauseEmit(e)
                                    }), this.video.addEventListener("volumechange", function(e) {
                                        return t._volumechangeEmit(e)
                                    })
                                }
                            }, {
                                key: "_error",
                                value: function() {
                                    x.addElClass(this.rootElement, "vjs-error"), x.removeElClass(this.startPlayEl.parentNode, "loading"), this.videoLoading = !1
                                }
                            }, {
                                key: "_triggerStartPlayerClick",
                                value: function(t) {
                                    t && t.preventDefault(), C["default"]("Player::triggerStartPlayerClick_()"), this.play()
                                }
                            }, {
                                key: "_checkUC",
                                value: function() {
                                    var t = navigator.userAgent.match(/UCBrowser/);
                                    return !(!E.aliapp || !t)
                                }
                            }, {
                                key: "_pauseEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:pause::" + (new Date).getTime()), this.videox.emit(y["default"].VIDEO_PAUSE, t), this.logTrack.pauseLog()
                                }
                            }, {
                                key: "_emitFlvEvent",
                                value: function(t, e) {
                                    C["default"]("HTML5:emit:::flv:" + t + "::" + (new Date).getTime()), this.emit(t, e)
                                }
                            }, {
                                key: "_seekingEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:seeking::" + (new Date).getTime()), this.emit && this.emit(y["default"].VIDEO_SEEKING, t)
                                }
                            }, {
                                key: "_seekedEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:seeked::" + (new Date).getTime()), this.emit && this.emit(y["default"].VIDEO_SEEKED, t)
                                }
                            }, {
                                key: "_stalledEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:stalled::" + (new Date).getTime()), this.emit && this.emit(y["default"].VIDEO_STALLED, t)
                                }
                            }, {
                                key: "_waitingEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:waiting::" + (new Date).getTime()), this.videox.emit(m["default"].LOADING), this.videox.emit(y["default"].VIDEO_WAITING, t), this._setTimeoutError()
                                }
                            }, {
                                key: "_abortEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:abort::" + (new Date).getTime()), this.emit && this.emit(y["default"].VIDEO_ABORT, t)
                                }
                            }, {
                                key: "_suspendEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:suspend::" + (new Date).getTime()), this.emit && this.emit(y["default"].VIDEO_SUSPEND, t)
                                }
                            }, {
                                key: "_canplayEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:canplay::" + (new Date).getTime()), this.emit && this.emit(y["default"].VIDEO_CANPLAY, t)
                                }
                            }, {
                                key: "_canplaythroughEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:canplaythrough::" + (new Date).getTime()), this.emit && this.emit(y["default"].VIDEO_CANPLAYTHROUGH, t)
                                }
                            }, {
                                key: "_errorEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:error::" + (new Date).getTime()), this.videox.emit(y["default"].VIDEO_ERROR, t), this.logTrack.errorLog(t)
                                }
                            }, {
                                key: "_progressEmit",
                                value: function() {
                                    C["default"]("HTML5:emit:::video:progress::" + (new Date).getTime()), this.controlBar && this.controlBar.emit(y["default"].VIDEO_PROGRESS)
                                }
                            }, {
                                key: "_endedEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:ended::"), this.videox.emit(y["default"].VIDEO_ENDED, t)
                                }
                            }, {
                                key: "_timeupdateEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:timeupdate::" + this.video.currentTime);
                                    var e = t.currentTarget.currentTime;
                                    navigator.userAgent.match(/UCBrowser/), this.playEmited || (e > 0 || this.videoLoading && this.options.live && E.os.isAndroid) && (this.waitTimer_ && (clearTimeout(this.waitTimer_), this.waitTimer_ = 0), this.videox.emit(y["default"].VIDEO_TIMEUPDATE, t))
                                }
                            }, {
                                key: "_volumechangeEmit",
                                value: function(t) {
                                    this.videox.emit(y["default"].VIDEO_VOLUMECHANGE, t), C["default"]("HTML5:emit:::video:volumechange::" + this.video.volume + "::muted::" + this.video.muted)
                                }
                            }, {
                                key: "_playEmit",
                                value: function(t) {
                                    this.videox.emit(y["default"].VIDEO_PLAY, t), this.logTrack.playLog()
                                }
                            }, {
                                key: "_loadstartEmit",
                                value: function(t) {
                                    C["default"]("HTML5:emit:::video:loadstart::" + (new Date).getTime()), this.videox.emit(y["default"].VIDEO_LOADSTART)
                                }
                            }, {
                                key: "_playingEmit",
                                value: function() {
                                    C["default"]("HTML5:emit:::video:playing::" + (new Date).getTime()), this.videox.emit(y["default"].VIDEO_PLAYING)
                                }
                            }, {
                                key: "_setTimeoutError",
                                value: function() {
                                    var t = this;
                                    this.waitTimer_ || (this.waitTimer_ = setTimeout(function() {
                                        t.video.networkState === t.video.NETWORK_NO_SOURCE ? t.videox.emit(y["default"].VIDEO_ERROR, {
                                            errorCode: "NETWORK_NO_SOURCE"
                                        }) : t.videox.emit(y["default"].VIDEO_ERROR, {
                                            errorCode: "NETWORK_TIMEOUT"
                                        }), t.waitTimer_ = null
                                    }, this.options.timeout || 1e4))
                                }
                            }]), e
                        }(v["default"]);
                    e["default"] = A
                },
                function(t, e, n) {
                    "use strict";
                    "function" != typeof Object.assign && (Object.assign = function(t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        for (var n = Object(t), r = 1; r < arguments.length; r++) {
                            var i = arguments[r];
                            if (null != i)
                                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
                        }
                        return n
                    })
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(63);
                    e["default"] = {
                        checkFileType: function(t) {
                            return r.parse(t).pathname.split(".").pop().split(/\#|\?/)[0].toLowerCase()
                        },
                        isSafari: function() {
                            return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
                        },
                        hlsSupport: function() {
                            return document.createElement("video").canPlayType("application/x-mpegURL")
                        }
                    }
                },
                function(t, e, n) {
                    (function(t, r) {
                        var i;
                        ! function(o) {
                            function a(t) {
                                throw new RangeError(L[t])
                            }

                            function s(t, e) {
                                for (var n = t.length, r = []; n--;) r[n] = e(t[n]);
                                return r
                            }

                            function u(t, e) {
                                var n = t.split("@"),
                                    r = "";
                                return n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(P, "."), r + s(t.split("."), e).join(".")
                            }

                            function c(t) {
                                for (var e, n, r = [], i = 0, o = t.length; o > i;) e = t.charCodeAt(i++), e >= 55296 && 56319 >= e && o > i ? (n = t.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e), i--)) : r.push(e);
                                return r
                            }

                            function l(t) {
                                return s(t, function(t) {
                                    var e = "";
                                    return t > 65535 && (t -= 65536, e += N(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += N(t)
                                }).join("")
                            }

                            function d(t) {
                                return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : _
                            }

                            function f(t, e) {
                                return t + 22 + 75 * (26 > t) - ((0 != e) << 5)
                            }

                            function p(t, e, n) {
                                var r = 0;
                                for (t = n ? A(t / O) : t >> 1, t += A(t / e); t > I * x >> 1; r += _) t = A(t / I);
                                return A(r + (I + 1) * t / (t + k))
                            }

                            function h(t) {
                                var e, n, r, i, o, s, u, c, f, h, v = [],
                                    g = t.length,
                                    m = 0,
                                    b = S,
                                    k = E;
                                for (n = t.lastIndexOf(C), 0 > n && (n = 0), r = 0; n > r; ++r) t.charCodeAt(r) >= 128 && a("not-basic"), v.push(t.charCodeAt(r));
                                for (i = n > 0 ? n + 1 : 0; g > i;) {
                                    for (o = m, s = 1, u = _; i >= g && a("invalid-input"), c = d(t.charCodeAt(i++)), (c >= _ || c > A((y - m) / s)) && a("overflow"), m += c * s, f = k >= u ? w : u >= k + x ? x : u - k, !(f > c); u += _) h = _ - f, s > A(y / h) && a("overflow"), s *= h;
                                    e = v.length + 1, k = p(m - o, e, 0 == o), A(m / e) > y - b && a("overflow"), b += A(m / e), m %= e, v.splice(m++, 0, b)
                                }
                                return l(v)
                            }

                            function v(t) {
                                var e, n, r, i, o, s, u, l, d, h, v, g, m, b, k, O = [];
                                for (t = c(t), g = t.length, e = S, n = 0, o = E, s = 0; g > s; ++s)(v = t[s]) < 128 && O.push(N(v));
                                for (r = i = O.length, i && O.push(C); g > r;) {
                                    for (u = y, s = 0; g > s; ++s)(v = t[s]) >= e && u > v && (u = v);
                                    for (m = r + 1, u - e > A((y - n) / m) && a("overflow"), n += (u - e) * m, e = u, s = 0; g > s; ++s)
                                        if (v = t[s], e > v && ++n > y && a("overflow"), v == e) {
                                            for (l = n, d = _; h = o >= d ? w : d >= o + x ? x : d - o, !(h > l); d += _) k = l - h, b = _ - h, O.push(N(f(h + k % b, 0))), l = A(k / b);
                                            O.push(N(f(l, 0))), o = p(n, m, r == i), n = 0, ++r
                                        }++n, ++e
                                }
                                return O.join("")
                            }

                            function g(t) {
                                return u(t, function(t) {
                                    return j.test(t) ? h(t.slice(4).toLowerCase()) : t
                                })
                            }

                            function m(t) {
                                return u(t, function(t) {
                                    return T.test(t) ? "xn--" + v(t) : t
                                })
                            }
                            var b, y = ("object" == typeof e && e && e.nodeType, "object" == typeof t && t && t.nodeType, "object" == typeof r && r, 2147483647),
                                _ = 36,
                                w = 1,
                                x = 26,
                                k = 38,
                                O = 700,
                                E = 72,
                                S = 128,
                                C = "-",
                                j = /^xn--/,
                                T = /[^\x20-\x7E]/,
                                P = /[\x2E\u3002\uFF0E\uFF61]/g,
                                L = {
                                    overflow: "Overflow: input needs wider integers to process",
                                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                                    "invalid-input": "Invalid input"
                                },
                                I = _ - w,
                                A = Math.floor,
                                N = String.fromCharCode;
                            b = {
                                version: "1.4.1",
                                ucs2: {
                                    decode: c,
                                    encode: l
                                },
                                decode: h,
                                encode: v,
                                toASCII: m,
                                toUnicode: g
                            }, void 0 !== (i = function() {
                                return b
                            }.call(e, n, e, t)) && (t.exports = i)
                        }()
                    }).call(e, n(124)(t), n(78))
                },
                function(t, e) {
                    t.exports = function(t) {
                        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                            enumerable: !0,
                            get: function() {
                                return t.l
                            }
                        }), Object.defineProperty(t, "id", {
                            enumerable: !0,
                            get: function() {
                                return t.i
                            }
                        }), t.webpackPolyfill = 1), t
                    }
                },
                function(t, e, n) {
                    "use strict";
                    t.exports = {
                        isString: function(t) {
                            return "string" == typeof t
                        },
                        isObject: function(t) {
                            return "object" == typeof t && null !== t
                        },
                        isNull: function(t) {
                            return null === t
                        },
                        isNullOrUndefined: function(t) {
                            return null == t
                        }
                    }
                },
                function(t, e, n) {
                    "use strict";
                    e.decode = e.parse = n(127), e.encode = e.stringify = n(128)
                },
                function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }
                    t.exports = function(t, e, n, o) {
                        e = e || "&", n = n || "=";
                        var a = {};
                        if ("string" != typeof t || 0 === t.length) return a;
                        var s = /\+/g;
                        t = t.split(e);
                        var u = 1e3;
                        o && "number" == typeof o.maxKeys && (u = o.maxKeys);
                        var c = t.length;
                        u > 0 && c > u && (c = u);
                        for (var l = 0; c > l; ++l) {
                            var d, f, p, h, v = t[l].replace(s, "%20"),
                                g = v.indexOf(n);
                            g >= 0 ? (d = v.substr(0, g), f = v.substr(g + 1)) : (d = v, f = ""), p = decodeURIComponent(d), h = decodeURIComponent(f), r(a, p) ? i(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
                        }
                        return a
                    };
                    var i = Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }
                },
                function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        if (t.map) return t.map(e);
                        for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
                        return n
                    }
                    var i = function(t) {
                        switch (typeof t) {
                            case "string":
                                return t;
                            case "boolean":
                                return t ? "true" : "false";
                            case "number":
                                return isFinite(t) ? t : "";
                            default:
                                return ""
                        }
                    };
                    t.exports = function(t, e, n, s) {
                        return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? r(a(t), function(a) {
                            var s = encodeURIComponent(i(a)) + n;
                            return o(t[a]) ? r(t[a], function(t) {
                                return s + encodeURIComponent(i(t))
                            }).join(e) : s + encodeURIComponent(i(t[a]))
                        }).join(e) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(t)) : ""
                    };
                    var o = Array.isArray || function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        a = Object.keys || function(t) {
                            var e = [];
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                            return e
                        }
                },
                function(t, e, n) {
                    var r = n(130),
                        i = n(144),
                        o = i(r);
                    t.exports = o
                },
                function(t, e, n) {
                    function r(t, e, n, f, p) {
                        if (!u(t)) return t;
                        var h = s(e) && (a(e) || l(e)),
                            v = h ? void 0 : d(e);
                        return i(v || e, function(i, a) {
                            if (v && (a = i, i = e[a]), c(i)) f || (f = []), p || (p = []), o(t, e, a, r, n, f, p);
                            else {
                                var s = t[a],
                                    u = n ? n(s, i, a, t, e) : void 0,
                                    l = void 0 === u;
                                l && (u = i), void 0 === u && (!h || a in t) || !l && (u === u ? u === s : s !== s) || (t[a] = u)
                            }
                        }), t
                    }
                    var i = n(66),
                        o = n(131),
                        a = n(31),
                        s = n(22),
                        u = n(14),
                        c = n(7),
                        l = n(71),
                        d = n(142);
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t, e, n, r, d, f, p) {
                        for (var h = f.length, v = e[n]; h--;)
                            if (f[h] == v) return void(t[n] = p[h]);
                        var g = t[n],
                            m = d ? d(g, v, n, t, e) : void 0,
                            b = void 0 === m;
                        b && (m = v, s(v) && (a(v) || c(v)) ? m = a(g) ? g : s(g) ? i(g) : [] : u(v) || o(v) ? m = o(g) ? l(g) : u(g) ? g : {} : b = !1), f.push(v), p.push(m), b ? t[n] = r(m, v, d, f, p) : (m === m ? m !== g : g === g) && (t[n] = m)
                    }
                    var i = n(132),
                        o = n(29),
                        a = n(31),
                        s = n(22),
                        u = n(136),
                        c = n(71),
                        l = n(140);
                    t.exports = r
                },
                function(t, e) {
                    function n(t, e) {
                        var n = -1,
                            r = t.length;
                        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                        return e
                    }
                    t.exports = n
                },
                function(t, e, n) {
                    var r = n(134),
                        i = r("length");
                    t.exports = i
                },
                function(t, e, n) {
                    function r(t) {
                        return function(e) {
                            return null == e ? void 0 : i(e)[t]
                        }
                    }
                    var i = n(67);
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t) {
                        return null != t && (i(t) ? d.test(c.call(t)) : a(t) && (o(t) ? d : s).test(t))
                    }
                    var i = n(69),
                        o = n(70),
                        a = n(7),
                        s = /^\[object .+?Constructor\]$/,
                        u = Object.prototype,
                        c = Function.prototype.toString,
                        l = u.hasOwnProperty,
                        d = RegExp("^" + c.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t) {
                        var e;
                        if (!s(t) || f.call(t) != c || a(t) || o(t) || !d.call(t, "constructor") && "function" == typeof(e = t.constructor) && !(e instanceof e)) return !1;
                        var n;
                        return u.ownLast ? (i(t, function(t, e, r) {
                            return n = d.call(r, e), !1
                        }), !1 !== n) : (i(t, function(t, e) {
                            n = e
                        }), void 0 === n || d.call(t, n))
                    }
                    var i = n(137),
                        o = n(29),
                        a = n(70),
                        s = n(7),
                        u = n(30),
                        c = "[object Object]",
                        l = Object.prototype,
                        d = l.hasOwnProperty,
                        f = l.toString;
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t, e) {
                        return i(t, e, o)
                    }
                    var i = n(138),
                        o = n(49);
                    t.exports = r
                },
                function(t, e, n) {
                    var r = n(139),
                        i = r();
                    t.exports = i
                },
                function(t, e, n) {
                    function r(t) {
                        return function(e, n, r) {
                            for (var o = i(e), a = r(e), s = a.length, u = t ? s : -1; t ? u-- : ++u < s;) {
                                var c = a[u];
                                if (!1 === n(o[c], c, o)) break
                            }
                            return e
                        }
                    }
                    var i = n(67);
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t) {
                        return i(t, o(t))
                    }
                    var i = n(141),
                        o = n(49);
                    t.exports = r
                },
                function(t, e) {
                    function n(t, e, n) {
                        n || (n = {});
                        for (var r = -1, i = e.length; ++r < i;) {
                            var o = e[r];
                            n[o] = t[o]
                        }
                        return n
                    }
                    t.exports = n
                },
                function(t, e, n) {
                    var r = n(68),
                        i = n(22),
                        o = n(14),
                        a = n(143),
                        s = n(30),
                        u = r(Object, "keys"),
                        c = u ? function(t) {
                            var e = null == t ? void 0 : t.constructor;
                            return "function" == typeof e && e.prototype === t || ("function" == typeof t ? s.enumPrototypes : i(t)) ? a(t) : o(t) ? u(t) : []
                        } : a;
                    t.exports = c
                },
                function(t, e, n) {
                    function r(t) {
                        for (var e = c(t), n = e.length, r = n && t.length, l = !!r && s(r) && (o(t) || i(t) || u(t)), f = -1, p = []; ++f < n;) {
                            var h = e[f];
                            (l && a(h, r) || d.call(t, h)) && p.push(h)
                        }
                        return p
                    }
                    var i = n(29),
                        o = n(31),
                        a = n(50),
                        s = n(23),
                        u = n(48),
                        c = n(49),
                        l = Object.prototype,
                        d = l.hasOwnProperty;
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t) {
                        return a(function(e, n) {
                            var r = -1,
                                a = null == e ? 0 : n.length,
                                s = a > 2 ? n[a - 2] : void 0,
                                u = a > 2 ? n[2] : void 0,
                                c = a > 1 ? n[a - 1] : void 0;
                            for ("function" == typeof s ? (s = i(s, c, 5), a -= 2) : (s = "function" == typeof c ? c : void 0, a -= s ? 1 : 0), u && o(n[0], n[1], u) && (s = 3 > a ? void 0 : s, a = 1); ++r < a;) {
                                var l = n[r];
                                l && t(e, l, s)
                            }
                            return e
                        })
                    }
                    var i = n(145),
                        o = n(147),
                        a = n(148);
                    t.exports = r
                },
                function(t, e, n) {
                    function r(t, e, n) {
                        if ("function" != typeof t) return i;
                        if (void 0 === e) return t;
                        switch (n) {
                            case 1:
                                return function(n) {
                                    return t.call(e, n)
                                };
                            case 3:
                                return function(n, r, i) {
                                    return t.call(e, n, r, i)
                                };
                            case 4:
                                return function(n, r, i, o) {
                                    return t.call(e, n, r, i, o)
                                };
                            case 5:
                                return function(n, r, i, o, a) {
                                    return t.call(e, n, r, i, o, a)
                                }
                        }
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }
                    var i = n(146);
                    t.exports = r
                },
                function(t, e) {
                    function n(t) {
                        return t
                    }
                    t.exports = n
                },
                function(t, e, n) {
                    function r(t, e, n) {
                        if (!a(n)) return !1;
                        var r = typeof e;
                        if ("number" == r ? i(n) && o(e, n.length) : "string" == r && e in n) {
                            var s = n[e];
                            return t === t ? t === s : s !== s
                        }
                        return !1
                    }
                    var i = n(22),
                        o = n(50),
                        a = n(14);
                    t.exports = r
                },
                function(t, e) {
                    function n(t, e) {
                        if ("function" != typeof t) throw new TypeError(r);
                        return e = i(void 0 === e ? t.length - 1 : +e || 0, 0),
                            function() {
                                for (var n = arguments, r = -1, o = i(n.length - e, 0), a = Array(o); ++r < o;) a[r] = n[e + r];
                                switch (e) {
                                    case 0:
                                        return t.call(this, a);
                                    case 1:
                                        return t.call(this, n[0], a);
                                    case 2:
                                        return t.call(this, n[0], n[1], a)
                                }
                                var s = Array(e + 1);
                                for (r = -1; ++r < e;) s[r] = n[r];
                                return s[e] = a, t.apply(this, s)
                            }
                    }
                    var r = "Expected a function",
                        i = Math.max;
                    t.exports = n
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e["default"] = t, e
                    }

                    function i(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n(1),
                        a = i(o),
                        s = n(2),
                        u = i(s),
                        c = n(15),
                        l = i(c),
                        d = n(16),
                        f = i(d),
                        p = n(13),
                        h = r(p),
                        v = n(47),
                        g = (i(v), n(21)),
                        m = (i(g), n(32)),
                        b = r(m),
                        y = n(51),
                        _ = r(y),
                        w = n(28),
                        x = i(w),
                        k = n(20),
                        O = i(k),
                        E = n(12),
                        S = i(E),
                        C = function(t) {
                            function e(t) {
                                a["default"](this, e);
                                var n = l["default"](this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, S["default"].VIDEO_TIMEUPDATE));
                                return n.videox = t, n.options = n.videox.config, n.media = n.videox.videoDom, n.parent_ = n.videox.controlBar.el, n.el = n.getProgressEl(), n.totalTimeEl = h.$(".J_TotalTime", n.el), n.currentTimeEl = h.$(".J_CurrentTime", n.el), n.progressBarEl = h.$(".J_ProgressBar", n.el), n.progressEl = h.$(".J_Progress", n.el), n.videox.videoDom.addEventListener("loadedmetadata", function(t) {
                                    n.updateTimeCount_(t)
                                }), n.bindEvent(), n._addEventListener(), n
                            }
                            return f["default"](e, t), u["default"](e, [{
                                key: "_addEventListener",
                                value: function() {
                                    this.videox.on(O["default"].INIT, this.onInit.bind(this)), this.videox.on(S["default"].VIDEO_TIMEUPDATE, this.onVideoTimeupdate.bind(this))
                                }
                            }, {
                                key: "onInit",
                                value: function() {}
                            }, {
                                key: "onVideoTimeupdate",
                                value: function(t) {
                                    this.timeupdate(t)
                                }
                            }, {
                                key: "getProgressEl",
                                value: function() {
                                    var t = !0 === this.options.live ? "vjs-hidden" : "",
                                        e = h.createEl("div", {
                                            className: "vjs-progress-bar " + t,
                                            innerHTML: '\n        <span class="current-time"><em class="J_CurrentTime">00:00</em></span>\n        <span class="progress-bar J_ProgressBar">\n          <span class="progress J_Progress">\n            <span class="control J_Update"></span>\n          </span>\n        </span>\n        <span class="total-time"><em class="J_TotalTime">--:--</em></span>\n      '
                                        });
                                    return h.appendContent(h.$(".progress-wrap", this.parent_), e), e
                                }
                            }, {
                                key: "bindEvent",
                                value: function() {
                                    var t = this,
                                        e = !1,
                                        n = !1,
                                        r = "",
                                        i = this.videox.videoDom,
                                        o = function(r) {
                                            t.progressing = !0, e = !0, n = !i.paused, t.setMediaProgress(r)
                                        },
                                        a = function(i) {
                                            console.log(i.type + ":::mouseUp"), i.preventDefault(), clearInterval(r), e = !1, 1 == n && (n = !1), t.progressing = !1
                                        },
                                        s = function(n) {
                                            n.preventDefault(), !0 === e && (r = setInterval(t.setMediaProgress(n), 1e3))
                                        };
                                    _.on(this.el, "touchstart", function(t) {
                                        return o(t)
                                    }), _.on(this.el, "touchmove", function(t) {
                                        return s(t)
                                    }), _.on(this.el, "touchend", function(t) {
                                        return a(t)
                                    }), _.on(this.el, "mousedown", function(t) {
                                        return o(t)
                                    }), _.on(this.el, "mousemove", function(t) {
                                        return s(t)
                                    }), _.on(this.el, "mouseup", function(t) {
                                        return a(t)
                                    })
                                }
                            }, {
                                key: "setMediaProgress",
                                value: function(t) {
                                    var e = this.media,
                                        n = this.timeFromCursorPosition(this.progressBarEl, t, e.duration);
                                    e.currentTime = n, this.updateProgress_()
                                }
                            }, {
                                key: "timeFromCursorPosition",
                                value: function(t, e, n) {
                                    var r = t.getBoundingClientRect(),
                                        i = (e.clientX || e.changedTouches[0].clientX) - r.left,
                                        o = r.width;
                                    return b.aliapp && "TB" == b.aliapp.appname && b.os.isAndroid && (i = (e.clientY || e.changedTouches[0].clientY) - r.top, o = r.height), i / o * n
                                }
                            }, {
                                key: "timeupdate",
                                value: function(t) {
                                    this.updateProgress_(t), this.updateTimeCount_(t)
                                }
                            }, {
                                key: "updateProgress_",
                                value: function(t) {
                                    var e = this.media,
                                        n = 0;
                                    e.currentTime > 0 && (n = 100 / e.duration * e.currentTime), this.progressEl.style.width = n + "%"
                                }
                            }, {
                                key: "updateTimeCount_",
                                value: function(t) {
                                    var e = this.media,
                                        n = this.formatTime(e.currentTime),
                                        r = this.formatTime(e.duration);
                                    !0 === isNaN(e.duration) && (r = "00:00"), this.currentTimeEl.innerHTML = n, this.totalTimeEl.innerHTML = r
                                }
                            }, {
                                key: "formatTime",
                                value: function(t) {
                                    return Math.floor(t / 60) + ":" + ("0" + parseInt(t % 60, 10)).slice(-2)
                                }
                            }, {
                                key: "setTimeline",
                                value: function(t) {
                                    var e = h.createEl("span", {
                                            className: "vjs-progress-tag"
                                        }),
                                        n = this.media,
                                        r = 100 / n.duration * t;
                                    return e.style.left = r + "%", h.appendContent(this.progressBarEl, e), e
                                }
                            }]), e
                        }(x["default"]);
                    e["default"] = C
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i, o, a = n(33),
                        s = r(a),
                        u = n(72),
                        c = r(u),
                        l = window.navigator.userAgent,
                        d = !1,
                        f = "",
                        p = "",
                        h = "";
                    (o = l.match(/WindVane[\/\s]([\d\.\_]+)/i)) && (i = o[1]), (o = l.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (d = !0, f = o[1], h = o[2], p = f.indexOf("-PD") > 0 ? c["default"].isIOS ? "iPad" : c["default"].isAndroid ? "AndroidPad" : c["default"].name : c["default"].name), !f && l.indexOf("TBIOS") > 0 && (f = "TB");
                    var v = window._ua_popLayer || "",
                        g = !1,
                        m = "";
                    v && (o = v.match(/PopLayer\/([\d\.]+)/i)) && (g = !0, m = o[1]), d && (d = {
                        windvane: new s["default"](i || "0.0.0"),
                        appname: f || "unkown",
                        version: new s["default"](h || "0.0.0"),
                        platform: p || c["default"].name,
                        poplayer: g || !1,
                        poplayerVersion: new s["default"](m || "0.0.0")
                    }), e["default"] = d
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r, i, o = n(33),
                        a = function(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }(o),
                        s = window.navigator.userAgent;
                    (i = s.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? r = {
                        name: "UC",
                        isUC: !0,
                        version: new a["default"](i[1])
                    }: (i = s.match(/MQQBrowser\/([\d\.]+)/)) ? r = {
                        name: "QQ",
                        isQQ: !0,
                        version: new a["default"](i[1])
                    } : (i = s.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? r = {
                        name: "Firefox",
                        isFirefox: !0,
                        version: new a["default"](i[1])
                    } : (i = s.match(/MSIE\s([\d\.]+)/)) || (i = s.match(/IEMobile\/([\d\.]+)/)) ? (r = {
                        version: new a["default"](i[1])
                    }, s.match(/IEMobile/) ? (r.name = "IEMobile", r.isIEMobile = !0) : (r.name = "IE", r.isIE = !0), s.match(/Android|iPhone/) && (r.isIELikeWebkit = !0)) : (i = s.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (r = {
                        name: "Chrome",
                        isChrome: !0,
                        version: new a["default"](i[1])
                    }, s.match(/Version\/[\d+\.]+\s*Chrome/) && (r.name = "Chrome Webview", r.isWebview = !0)) : s.match(/Safari/) && (i = s.match(/Android[\s\/]([\d\.]+)/)) ? r = {
                        name: "Android",
                        isAndroid: !0,
                        version: new a["default"](i[1])
                    } : s.match(/iPhone|iPad|iPod/) && (s.match(/Safari/) && (i = s.match(/Version\/([\d\.]+)/)) ? r = {
                        name: "Safari",
                        isSafari: !0,
                        version: new a["default"](i[1])
                    } : (i = s.match(/OS ([\d_\.]+) like Mac OS X/)) && (r = {
                        name: "iOS Webview",
                        isWebview: !0,
                        version: new a["default"](i[1].replace(/\_/g, "."))
                    })), r || (r = {
                        name: "unknown",
                        version: new a["default"]("0.0.0")
                    }), e["default"] = r
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r, i = window.navigator.userAgent;
                    r = i.match(/Weibo/i) ? {
                        appname: "Weibo",
                        isWeibo: !0
                    } : !!i.match(/MicroMessenger/i) && {
                        appname: "Weixin",
                        isWeixin: !0
                    }, e["default"] = r
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = {},
                        i = window.location.search.replace(/^\?/, "");
                    if (i)
                        for (var o = i.split("&"), a = 0; a < o.length; a++) {
                            o[a] = o[a].split("=");
                            try {
                                r[o[a][0]] = decodeURIComponent(o[a][1])
                            } catch (t) {
                                r[o[a][0]] = o[a][1]
                            }
                        }
                    e["default"] = r
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e["default"] = t, e
                    }

                    function i(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n(1),
                        a = i(o),
                        s = n(2),
                        u = i(s),
                        c = n(15),
                        l = i(c),
                        d = n(16),
                        f = i(d),
                        p = n(13),
                        h = r(p),
                        v = n(47),
                        g = (i(v), n(21)),
                        m = (i(g), n(32)),
                        b = (r(m), n(51)),
                        y = r(b),
                        _ = n(28),
                        w = i(_),
                        x = n(20),
                        k = i(x),
                        O = n(12),
                        E = i(O),
                        S = function(t) {
                            function e(t) {
                                a["default"](this, e);
                                var n = l["default"](this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                                return n.videox = t, n.media = n.videox.videoDom, n.parent_ = n.videox.controlBar.el, n.el = n.getVolumeEl(), n.progressBarEl = h.$(".J_VolumeBar", n.el), n.progressEl = h.$(".J_Volume", n.el), n.volumeIcon = h.$(".J_VolumeIcon", n.el), n.initStatus(), n.bindEvent(), n._addEventListener(), n.loadImage(), n
                            }
                            return f["default"](e, t), u["default"](e, [{
                                key: "initStatus",
                                value: function() {
                                    this.updateVolumn_()
                                }
                            }, {
                                key: "getVolumeEl",
                                value: function() {
                                    var t = h.createEl("div", {
                                        className: "vjs-volume-bar",
                                        innerHTML: '\n        <span class="vjs-icon-volume J_VolumeIcon"></span>\n        <span class="volume-bar J_VolumeBar">\n          <span class="volume J_Volume">\n            <span class="control J_Update"></span>\n          </span>\n        </span>\n      '
                                    });
                                    return h.appendContent(h.$(".volume-wrap", this.parent_), t), t
                                }
                            }, {
                                key: "bindEvent",
                                value: function() {
                                    var t = this,
                                        e = !1,
                                        n = "",
                                        r = (this.media, function(n) {
                                            t.progressing = !0, e = !0, t.setMediaVolume(n)
                                        }),
                                        i = function(r) {
                                            r.preventDefault(), clearInterval(n), e = !1, t.progressing = !1
                                        },
                                        o = function(r) {
                                            r.preventDefault(), !0 === e && (n = setInterval(t.setMediaVolume(r), 1e3))
                                        },
                                        a = function(e) {
                                            var n = t.media;
                                            n.muted = !n.muted
                                        };
                                    y.on(this.el, "touchstart", function(t) {
                                        return r(t)
                                    }), y.on(this.el, "touchmove", function(t) {
                                        return o(t)
                                    }), y.on(this.el, "touchend", function(t) {
                                        return i(t)
                                    }), y.on(this.volumeIcon, "touch", function(t) {
                                        return a()
                                    }), y.on(this.el, "mousedown", function(t) {
                                        return r(t)
                                    }), y.on(this.el, "mousemove", function(t) {
                                        return o(t)
                                    }), y.on(this.el, "mouseup", function(t) {
                                        return i(t)
                                    }), y.on(this.volumeIcon, "click", function(t) {
                                        return a()
                                    })
                                }
                            }, {
                                key: "_addEventListener",
                                value: function() {
                                    this.videox.on(k["default"].INIT, this.volumeupdate.bind(this)), this.videox.on(E["default"].VIDEO_VOLUMECHANGE, this.volumeupdate.bind(this))
                                }
                            }, {
                                key: "loadImage",
                                value: function() {
                                    (new Image).src = "//gw.alicdn.com/tfs/TB1fdLdSFXXXXXAaXXXXXXXXXXX-80-80.png", (new Image).src = "//gw.alicdn.com/tfs/TB1A2bRSFXXXXahXXXXXXXXXXXX-80-80.png"
                                }
                            }, {
                                key: "setMediaMutedStatus",
                                value: function(t) {
                                    this.media.muted ? h.addElClass(this.volumeIcon, "vjs-icon-volume-muted") : h.removeElClass(this.volumeIcon, "vjs-icon-volume-muted")
                                }
                            }, {
                                key: "setMediaVolume",
                                value: function(t) {
                                    var e = this.media,
                                        n = this.volumeFromCursorPosition(this.progressBarEl, t, 1);
                                    0 > n || n > 1 || (e.volume = n, this.updateVolumn_())
                                }
                            }, {
                                key: "volumeFromCursorPosition",
                                value: function(t, e, n) {
                                    var r = t.getBoundingClientRect();
                                    return ((e.clientX || e.changedTouches[0].clientX) - r.left) / r.width * n
                                }
                            }, {
                                key: "updateVolumn_",
                                value: function() {
                                    var t = this.media,
                                        e = (t.muted, 0);
                                    t.volume > 0 && (e = 100 * t.volume), this.progressEl.style.width = e + "%", this.setMediaMutedStatus(t)
                                }
                            }, {
                                key: "volumeupdate",
                                value: function() {
                                    this.updateVolumn_()
                                }
                            }]), e
                        }(w["default"]);
                    e["default"] = S
                },
                function(t, e) {
                    "undefined" == typeof window && (window = {
                            ctrl: {},
                            lib: {}
                        }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}),
                        function(t, e) {
                            function n(t, e) {
                                t = t.toString().split("."), e = e.toString().split(".");
                                for (var n = 0; n < t.length || n < e.length; n++) {
                                    var r = parseInt(t[n], 10),
                                        i = parseInt(e[n], 10);
                                    if (window.isNaN(r) && (r = 0), window.isNaN(i) && (i = 0), i > r) return -1;
                                    if (r > i) return 1
                                }
                                return 0
                            }
                            var r = t.Promise,
                                i = t.document,
                                o = t.navigator.userAgent,
                                a = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(o) || /Windows\sNT\s[\d\.]+/i.test(o),
                                s = a && t.WindVane_Win_Private && t.WindVane_Win_Private.call,
                                u = /iPhone|iPad|iPod/i.test(o),
                                c = /Android/i.test(o),
                                l = o.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),
                                d = Object.prototype.hasOwnProperty,
                                f = e.windvane = t.WindVane || (t.WindVane = {
                                    version: "2.1.12"
                                }),
                                p = Math.floor(65536 * Math.random()),
                                h = 1,
                                v = [],
                                g = "hybrid",
                                m = "iframe_",
                                b = "param_";
                            l = l ? (l[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0";
                            var y = {
                                isAvailable: 1 === n(l, "0"),
                                isNewBridgeAvailable: 1 === n(l, c ? "8.3.0" : "8.2.0"),
                                call2: function(t, e, n, r, i) {
                                    var o = t.indexOf(".");
                                    return y.call(t.substr(0, o), t.substr(o + 1), e, n, r, i)
                                },
                                call: function(e, n, i, o, a, s) {
                                    var u, l;
                                    if ("number" == typeof arguments[arguments.length - 1] && (s = arguments[arguments.length - 1]), "function" != typeof o && (o = null), "function" != typeof a && (a = null), !r || o || a || (l = new r(function(t, e) {
                                        o = t, a = e
                                    })), !c && y.isNewBridgeAvailable && t.__windvane__ && t.__windvane__.call) return t.__windvane__.call(e + "." + n, i, o, a, s), l;
                                    u = _.getSid();
                                    var d = {
                                        success: o,
                                        failure: a
                                    };
                                    return s > 0 && (d.timeout = setTimeout(function() {
                                        y.onFailure(u, {
                                            ret: "HY_TIMEOUT"
                                        })
                                    }, s)), _.registerCall(u, d), _.registerGC(u, s), y.isAvailable ? _.callMethod(e, n, i, u) : y.onFailure(u, {
                                        ret: "HY_NOT_IN_WINDVANE"
                                    }), l
                                },
                                fireEvent: function(t, e, n) {
                                    var r = i.createEvent("HTMLEvents");
                                    r.initEvent(t, !1, !0), r.param = _.parseData(e), i.dispatchEvent(r)
                                },
                                getParam: function(t) {
                                    return _.getParam(t)
                                },
                                setData: function(t, e) {},
                                find: function(t, e) {
                                    e || _.unregisterCall(t, !1)
                                },
                                onSuccess: function(t, e, n) {
                                    _.onComplete(t, e, "success", n)
                                },
                                onFailure: function(t, e) {
                                    _.onComplete(t, e, "failure")
                                }
                            };
                            y.isNewBridgeAvailable && t.__windvane__ && t.__windvane__.callSync && (y.callSync = function(t, e) {
                                if (u) return i.__windvane__.callSync(t, e);
                                if (c) {
                                    var n = {
                                        name: t
                                    };
                                    e && (n.params = JSON.stringify(e));
                                    var r = i.__windvane__.callSync(n);
                                    if (r) try {
                                        return JSON.parse(r)
                                    } catch (i) {}
                                }
                            });
                            var _ = {
                                params: {},
                                calls: {},
                                getSid: function() {
                                    return (p + h++) % 65536 + ""
                                },
                                buildParam: function(t) {
                                    return t && "object" == typeof t ? JSON.stringify(t) : t || ""
                                },
                                getParam: function(t) {
                                    return this.params[b + t] || ""
                                },
                                setParam: function(t, e) {
                                    this.params[b + t] = e
                                },
                                parseData: function(t) {
                                    var e;
                                    if (t && "string" == typeof t) try {
                                        e = JSON.parse(t)
                                    } catch (n) {
                                        e = {
                                            ret: "HY_RESULT_PARSE_ERROR",
                                            originValue: t
                                        }
                                    } else e = t || {};
                                    return e
                                },
                                registerCall: function(t, e) {
                                    this.calls[t] = e
                                },
                                unregisterCall: function(t, e) {
                                    var n = this.calls[t] || {},
                                        r = n.timeout;
                                    return r && clearTimeout(r), e || delete this.calls[t], n
                                },
                                useIframe: function(t, e) {
                                    var n = m + t,
                                        r = v.pop();
                                    r || (r = i.createElement("iframe"), r.setAttribute("frameborder", "0"), r.style.cssText = "width:0;height:0;border:0;display:none;"), r.setAttribute("id", n), r.setAttribute("src", e), r.parentNode || setTimeout(function() {
                                        i.body.appendChild(r)
                                    }, 5)
                                },
                                retrieveIframe: function(t) {
                                    var e = m + t,
                                        n = i.querySelector("#" + e);
                                    if (n)
                                        if (v.length >= 3) try {
                                            i.body.removeChild(n)
                                        } catch (t) {} else v.indexOf(n) < 0 && v.push(n)
                                },
                                callMethod: function(e, n, r, i) {
                                    var o = _.buildParam(r);
                                    if (a) s ? t.WindVane_Win_Private.call(e, n, i, o) : this.onComplete(i, {
                                        ret: "HY_NO_HANDLER_ON_WP"
                                    }, "failure");
                                    else if (u) {
                                        this.setParam(i, o);
                                        var l = g + "://" + e + ":" + i + "/" + n + "?" + encodeURIComponent(o);
                                        this.useIframe(i, l)
                                    } else if (c) {
                                        this.setParam(i, r);
                                        var l = g + "://" + e + ":" + i + "/" + n + "?" + o;
                                        window.prompt(l, "wv_hybrid:")
                                    } else this.onComplete(i, {
                                        ret: "HY_NOT_SUPPORT_DEVICE"
                                    }, "failure")
                                },
                                registerGC: function(t, e) {
                                    var n = this,
                                        r = Math.max(e || 0, 6e5),
                                        i = Math.max(e || 0, 6e4);
                                    setTimeout(function() {
                                        n.unregisterCall(t)
                                    }, r), u && setTimeout(function() {
                                        n.params[b + t] && delete n.params[b + t]
                                    }, i)
                                },
                                onComplete: function(t, e, n, r) {
                                    var i = this.unregisterCall(t, r),
                                        o = i.success,
                                        a = i.failure;
                                    e = this.parseData(e);
                                    var s = e.ret;
                                    "string" == typeof s && (e = e.value || e, e.ret || (e.ret = [s])), "success" === n ? o && o(e) : "failure" === n && a && a(e), u && (this.retrieveIframe(t), this.params[b + t] && delete this.params[b + t])
                                }
                            };
                            for (var w in y) d.call(f, w) || (f[w] = y[w])
                        }(window, window.lib || (window.lib = {})), t.exports = window.lib.windvane
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.HttpURL = e.VideoTool = e.version = void 0;
                    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        o = n(157),
                        a = r(o),
                        s = n(74),
                        u = r(s),
                        c = new a["default"],
                        l = c.version;
                    "function" == typeof alert && ("undefined" == typeof console || i(console)), e.version = l, e.VideoTool = a["default"], e.HttpURL = u["default"]
                },
                function(t, e, n) {
                    "use strict";
                    (function(t) {
                        function r(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }

                        function i(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var o = function() {
                                function t(t, e) {
                                    for (var n = 0; n < e.length; n++) {
                                        var r = e[n];
                                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                    }
                                }
                                return function(e, n, r) {
                                    return n && t(e.prototype, n), r && t(e, r), e
                                }
                            }(),
                            a = n(158),
                            s = r(a),
                            u = n(162),
                            c = r(u),
                            l = n(73),
                            d = r(l),
                            f = t.env.VERSION,
                            p = function() {
                                function t() {
                                    i(this, t), this.version = f
                                }
                                return o(t, [{
                                    key: "getFileType",
                                    value: function(t) {
                                        return d["default"](t)
                                    }
                                }, {
                                    key: "getDuration",
                                    value: function(t) {
                                        return s["default"](t)
                                    }
                                }, {
                                    key: "canPlay",
                                    value: function(t) {
                                        return c["default"](t)
                                    }
                                }]), t
                            }();
                        e["default"] = p
                    }).call(e, n(79))
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n(73),
                        o = r(i),
                        a = n(159),
                        s = r(a),
                        u = n(161),
                        c = new RegExp([/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
                        l = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
                        d = function(t, e) {
                            var n = document.createElement("video");
                            n.src = t, n.preload = "metadata", n.onloadedmetadata = function() {
                                e(n.duration), n = null
                            }
                        },
                        f = function(t, e, n, r) {
                            var i, o, a = 0,
                                s = {};
                            for (c.lastIndex = 0; null !== (i = c.exec(t));) {
                                var u = i[1];
                                if (u) s.duration = parseFloat(u);
                                else if (i[3]) isNaN(s.duration) || (a += s.duration);
                                else if (i[4]);
                                else if (i[5]);
                                else
                                    for (i = i[0].match(l), o = 1; o < i.length && void 0 === i[o]; o++);
                            }
                            return a
                        },
                        p = function(t, e) {
                            var n = t.data;
                            0 === n.indexOf("#EXTM3U") && n.indexOf("#EXTINF:") > 0 && e(f(n)), e(void 0)
                        },
                        h = function(t) {
                            var e = o["default"](t);
                            return new Promise(function(n, r) {
                                if ("mp4" == e) return d(t, n);
                                if ("m3u8" == e) {
                                    var i = new s["default"],
                                        o = {
                                            url: t,
                                            responseType: ""
                                        };
                                    i.load(o, u.loaderConfig, {
                                        onSuccess: function(t) {
                                            p(t, n)
                                        }
                                    })
                                } else n(void 0)
                            })
                        };
                    e["default"] = h
                },
                function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) {
                                return n && t(e.prototype, n), r && t(e, r), e
                            }
                        }(),
                        o = n(160),
                        a = function() {
                            function t(e) {
                                r(this, t), e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                            }
                            return i(t, [{
                                key: "destroy",
                                value: function() {
                                    this.abort(), this.loader = null
                                }
                            }, {
                                key: "abort",
                                value: function() {
                                    var t = this.loader;
                                    t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                                }
                            }, {
                                key: "load",
                                value: function(t, e, n) {
                                    this.context = t, this.config = e, this.callbacks = n, this.stats = {
                                        trequest: performance.now(),
                                        retry: 0
                                    }, this.retryDelay = e.retryDelay, this.loadInternal()
                                }
                            }, {
                                key: "loadInternal",
                                value: function() {
                                    var t, e = this.context;
                                    t = "undefined" != typeof XDomainRequest ? this.loader = new XDomainRequest : this.loader = new XMLHttpRequest;
                                    var n = this.stats;
                                    n.tfirst = 0, n.loaded = 0;
                                    var r = this.xhrSetup;
                                    try {
                                        if (r) try {
                                            r(t, e.url)
                                        } catch (n) {
                                            t.open("GET", e.url, !0), r(t, e.url)
                                        }
                                        t.readyState || t.open("GET", e.url, !0)
                                    } catch (n) {
                                        return void this.callbacks.onError({
                                            code: t.status,
                                            text: n.message
                                        }, e, t)
                                    }
                                    e.rangeEnd && t.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), t.onreadystatechange = this.readystatechange.bind(this), t.onprogress = this.loadprogress.bind(this), t.responseType = e.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), t.send()
                                }
                            }, {
                                key: "readystatechange",
                                value: function(t) {
                                    var e = t.currentTarget,
                                        n = e.readyState,
                                        r = this.stats,
                                        i = this.context,
                                        a = this.config;
                                    if (!r.aborted && n >= 2)
                                        if (window.clearTimeout(this.requestTimeout), 0 === r.tfirst && (r.tfirst = Math.max(performance.now(), r.trequest)), 4 === n) {
                                            var s = e.status;
                                            if (s >= 200 && 300 > s) {
                                                r.tload = Math.max(r.tfirst, performance.now());
                                                var u = void 0,
                                                    c = void 0;
                                                "arraybuffer" === i.responseType ? (u = e.response, c = u.byteLength) : (u = e.responseText, c = u.length), r.loaded = r.total = c;
                                                var l = {
                                                    url: e.responseURL,
                                                    data: u
                                                };
                                                this.callbacks.onSuccess(l, r, i, e)
                                            } else r.retry >= a.maxRetry || s >= 400 && 499 > s ? (o.logger.error(s + " while loading " + i.url), this.callbacks.onError({
                                                code: s,
                                                text: e.statusText
                                            }, i, e)) : (o.logger.warn(s + " while loading " + i.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), r.retry++)
                                        } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
                                }
                            }, {
                                key: "loadtimeout",
                                value: function() {
                                    o.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
                                }
                            }, {
                                key: "loadprogress",
                                value: function(t) {
                                    var e = t.currentTarget,
                                        n = this.stats;
                                    n.loaded = t.loaded, t.lengthComputable && (n.total = t.total);
                                    var r = this.callbacks.onProgress;
                                    r && r(n, this.context, null, e)
                                }
                            }]), t
                        }();
                    e["default"] = a
                },
                function(t, e, n) {
                    "use strict";

                    function r() {}

                    function i(t, e) {
                        return e = "[" + t + "] > " + e
                    }

                    function o(t) {
                        var e = self.console[t];
                        return e ? function() {
                            for (var n = arguments.length, r = Array(n), o = 0; n > o; o++) r[o] = arguments[o];
                            r[0] && (r[0] = i(t, r[0])), e.apply(self.console, r)
                        } : r
                    }

                    function a(t) {
                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
                        n.forEach(function(e) {
                            c[e] = t[e] ? t[e].bind(t) : o(e)
                        })
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        },
                        u = {
                            trace: r,
                            debug: r,
                            log: r,
                            warn: r,
                            info: r,
                            error: r
                        },
                        c = u;
                    e.enableLogs = function(t) {
                        if (!0 === t || "object" === (void 0 === t ? "undefined" : s(t))) {
                            a(t, "debug", "log", "info", "warn", "error");
                            try {
                                c.log()
                            } catch (t) {
                                c = u
                            }
                        } else c = u
                    }, e.logger = c
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = e.loaderConfig = {
                        maxRetry: 1,
                        maxRetryDelay: 64e3,
                        retryDelay: 1e3,
                        timeout: 1e4
                    };
                    e["default"] = r
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(163),
                        i = function(t) {
                            var e = o(t, r.MIMETYPES);
                            return 0 == e.length && (e = o(t, r.AUDIO_MIMETYPES)), e
                        },
                        o = function(t, e, n) {
                            var r = (t.split("?")[0].match(/.*\.(.*)$/) || [])[1],
                                i = n || r && e[r.toLowerCase()] || [];
                            return i.constructor === Array ? i : [i]
                        },
                        a = function(t, e, n) {
                            var r = i(t),
                                o = document.createElement("video");
                            return !!r.filter(function(t) {
                                return !!o.canPlayType(t).replace(/no/, "")
                            })[0]
                        };
                    e["default"] = a
                },
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = e.MIMETYPES = {
                        mp4: ["avc1.42E01E", "avc1.58A01E", "avc1.4D401E", "avc1.64001E", "mp4v.20.8", "mp4v.20.240"].map(function(t) {
                            return "video/mp4; codecs=" + t + ", mp4a.40.2"
                        }),
                        ogg: ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
                        "3gpp": ['video/3gpp; codecs="mp4v.20.8, samr"'],
                        webm: ['video/webm; codecs="vp8, vorbis"'],
                        mkv: ['video/x-matroska; codecs="theora, vorbis"'],
                        m3u8: ["application/x-mpegURL"]
                    };
                    r.ogv = r.ogg, r["3gp"] = r["3gpp"], e.AUDIO_MIMETYPES = {
                        wav: ["audio/wav"],
                        mp3: ["audio/mp3", 'audio/mpeg;codecs="mp3"'],
                        aac: ['audio/mp4;codecs="mp4a.40.5"'],
                        oga: ["audio/ogg"]
                    }, e["default"] = r
                },
                function(t, e, n) {
                    "use strict";

                    function r(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n(1),
                        o = r(i),
                        a = n(2),
                        s = r(a),
                        u = n(74),
                        c = r(u),
                        l = n(12),
                        d = r(l),
                        f = window.goldlog,
                        p = function() {
                            function t(e) {
                                o["default"](this, t), this.options = {}, Object.assign(this.options, e), this._initLogParams(), this.initLog(), this.videox = e.videox, this._bindEvent(), this._isPlaying = !1, this._isInView = !1, this._startPlayTime = 0, this._playTime = 0, this._startExposeTime = 0, this._startSeekTime = 0
                            }
                            return s["default"](t, [{
                                key: "_initLogParams",
                                value: function() {
                                    var t = "";
                                    try {
                                        t = new c["default"](this.options.url)
                                    } catch (t) {
                                        return void console.error(t, "url不合法")
                                    }
                                    var e = t.pathname.split(".").pop(),
                                        n = "",
                                        r = "unkown",
                                        i = this.options.live ? "live" : "video";
                                    switch (e) {
                                        case "m3u8":
                                            r = t.pathname.split("/")[1], n = t.pathname.split("/")[2].split(".")[0];
                                            break;
                                        case "mp4":
                                            r = "tbvideo", n = t.pathname.split("/").pop().split(".")[0];
                                            break;
                                        case "flv":
                                            r = t.pathname.split("/")[1], n = t.pathname.split("/")[2].split(".")[0]
                                    }
                                    this.logParams = {
                                        app: r,
                                        media_id: n,
                                        ext: e,
                                        video_type: i,
                                        from: this.options.from
                                    }
                                }
                            }, {
                                key: "_bindEvent",
                                value: function() {
                                    var t = this,
                                        e = this.videox;
                                    e.on(d["default"].VIDEO_PLAY, function(e) {
                                        t._isPlaying = !0, t._recordStartTime()
                                    }), e.on(d["default"].VIDEO_PAUSE, function(e) {
                                        t._isPlaying = !1, t._addPlayTime()
                                    }), e.on(d["default"].VIDEO_ERROR, function(e) {
                                        t.errorLog(e)
                                    }), e.on(d["default"].VIDEO_SEEKING, function(e) {
                                        t.seekLog(), t._recordStartSeekTime()
                                    }), e.on(d["default"].VIDEO_SEEKED, function(e) {
                                        t.seekLog()
                                    }), document.addEventListener("visibilitychange", function(e) {
                                        "hidden" === document.visibilityState && (t._addPlayTime(), t.exposeLog(), t.playTimeLog())
                                    });
                                    var n = function() {
                                        var e = t._getOffset(window),
                                            n = t._getOffset(t.videox.getVideoEl()),
                                            r = t._compareOffset(e, n);
                                        r && !t._isInView ? (t._isInView = !0, t._recordStartExposeTime(), t._isPlaying && t._recordStartTime()) : !r && t._isInView && (t._isInView = !1, t.exposeLog(), t._isPlaying && t._addPlayTime())
                                    };
                                    document.addEventListener("scroll", this._throttle(n, 300)), n()
                                }
                            }, {
                                key: "_throttle",
                                value: function(t, e) {
                                    var n = (Date.now(), 0),
                                        r = null,
                                        i = void 0,
                                        o = void 0,
                                        a = void 0,
                                        s = function() {
                                            n = Date.now(), r = null, t.apply(i, o)
                                        };
                                    return function() {
                                        var u = Date.now();
                                        i = this, o = arguments;
                                        var c = e - (u - n);
                                        return 0 >= c || c >= e ? (clearTimeout(r), r = null, a = t.apply(i, o)) : null == r && (r = setTimeout(s, c)), a
                                    }
                                }
                            }, {
                                key: "_addPlayTime",
                                value: function() {
                                    this._startPlayTime > 0 && (this._playTime += Date.now() - this._startPlayTime)
                                }
                            }, {
                                key: "_recordStartTime",
                                value: function() {
                                    this._startPlayTime = Date.now()
                                }
                            }, {
                                key: "_recordStartExposeTime",
                                value: function() {
                                    this._startExposeTime = Date.now()
                                }
                            }, {
                                key: "_recordStartSeekTime",
                                value: function() {
                                    this._startSeekTime = this.videox.getVideoEl().currentTime
                                }
                            }, {
                                key: "_getOffset",
                                value: function(t, e) {
                                    var t, n, r, i, o, a = window.innerHeight,
                                        s = window.innerWidth;
                                    return t ? (e || (e = {
                                        x: 0,
                                        y: 0
                                    }), t != window ? (t = t.getBoundingClientRect(), n = t.left, r = t.top, i = t.right, o = t.bottom) : (n = 0, r = 0, i = n + s, o = r + a), e.w && (i = e.w), e.h && (r = a - e.h), {
                                        left: n,
                                        top: r,
                                        right: i + e.x,
                                        bottom: o + e.y
                                    }) : void 0
                                }
                            }, {
                                key: "_compareOffset",
                                value: function(t, e) {
                                    var n = e.right > t.left && e.left < t.right,
                                        r = e.bottom > t.top && e.top < t.bottom;
                                    return n && r
                                }
                            }, {
                                key: "_getLogParamsString",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        e = this.logParams,
                                        n = Object.keys(e).map(function(t) {
                                            return t + "=" + e[t]
                                        }),
                                        r = Object.keys(t).map(function(e) {
                                            return e + "=" + t[e]
                                        });
                                    return n.concat(r).join("&")
                                }
                            }, {
                                key: "initLog",
                                value: function() {
                                    var t = this._getLogParamsString();
                                    f && f.record("/taobaolive.videox.init", "CLK", t, "H1479648468")
                                }
                            }, {
                                key: "playLog",
                                value: function() {
                                    var t = this._getLogParamsString();
                                    f && f.record("/taobaolive.videox.play", "CLK", t, "H1479648494")
                                }
                            }, {
                                key: "pauseLog",
                                value: function() {
                                    var t = this._getLogParamsString();
                                    f && f.record("/taobaolive.videox.pause", "CLK", t, "H1480571953")
                                }
                            }, {
                                key: "fullScreenLog",
                                value: function() {
                                    var t = this._getLogParamsString();
                                    f && f.record("/taobaolive.videox.fullscreen", "CLK", t, "H1485189588")
                                }
                            }, {
                                key: "playTimeLog",
                                value: function() {
                                    var t = this._getLogParamsString({
                                        duration: this._playTime
                                    });
                                    f && f.record("/taobaolive.videox.playtime", "OTHER", t, "H1483342516")
                                }
                            }, {
                                key: "exposeLog",
                                value: function() {
                                    var t = this._getLogParamsString({
                                        duration: Date.now() - this._startExposeTime
                                    });
                                    f && f.record("/taobaolive.videox.expose", "EXP", t, "H1481495474")
                                }
                            }, {
                                key: "errorLog",
                                value: function(t) {
                                    var e = this.videox.getVideoEl().error,
                                        n = e ? e.code : t.errorCode,
                                        r = this._getLogParamsString({
                                            error_type: n
                                        });
                                    f && f.record("/taobaolive.videox.error", "OTHER", r, "H1480571987")
                                }
                            }, {
                                key: "seekLog",
                                value: function() {
                                    var t = 1e3 * (this.videox.getVideoEl().currentTime - this._startSeekTime);
                                    if (t > 10) {
                                        var e = this._getLogParamsString({
                                            duration: t
                                        });
                                        f && f.record("/taobaolive.videox.seek", "OTHER", e, "H1479648438"), this._startSeekTime = 0
                                    }
                                }
                            }]), t
                        }();
                    e["default"] = p
                }, , ,
                function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), n(168);
                    var r = n(83),
                        i = function(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }(r);
                    e["default"] = i["default"]
                },
                function(t, e, n) {
                    var r = n(169);
                    "string" == typeof r && (r = [
                        [t.i, r, ""]
                    ]);
                    var i = {};
                    i.transform = void 0, n(81)(r, i), r.locals && (t.exports = r.locals)
                },
                function(t, e, n) {
                    e = t.exports = n(80)(!1), e.push([t.i, '.lib-video,body,html{height:100%}.lib-video{position:relative;width:100%}.lib-video::-webkit-media-controls-start-playback-button{display:none}.lib-video video{background:#000;width:100%;height:100%}.vjs-hidden{display:none!important}.vjs-opacity-hidden{opacity:0!important}.lib-video .interact-item{display:-webkit-box;display:-webkit-flex;display:flex;width:1.173333rem;height:.533333rem;background-image:url(//gw.alicdn.com/mt/TB1_qhcPVXXXXcNXpXXXXXXXXXX-88-40.png);background-size:contain;background-repeat:no-repeat;border:none;background-color:transparent;margin-right:.266667rem;margin-left:.133333rem}.lib-video .vjs-big-play-button:before,.lib-video .vjs-control:before{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center}.vjs-body-fullscreen{overflow-x:hidden;overflow-y:hidden;overflow:hidden;max-width:100%}.vjs-body-fullscreen .lib-video.vjs-player-fullscreen{position:fixed;left:0;top:0;bottom:0;right:0;z-index:100;width:100%!important;height:100%!important}.vjs-body-fullscreen .lib-video.vjs-player-fullscreen-rotate{position:fixed;left:100%;top:0;z-index:9999;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:0 0;transform-origin:0 0}.vjs-body-fullscreen .vjs-android-bg-mask{width:100%;height:100%;position:fixed;background:#000;z-index:1;left:0;top:0}.lib-video .vjs-control-bar{width:100%;position:absolute;z-index:2;bottom:0;left:0;right:0;padding:.133333rem 0;background-image:url(//gw.alicdn.com/mt/TB1xK4uPVXXXXcRXXXXXXXXXXXX-750-80.png);background-size:cover;-webkit-transition:all .3s ease;transition:all .3s ease;opacity:1;display:box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-justify-content:space-between;-o-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}.lib-video .vjs-control{outline:none;position:relative;text-align:center;margin:0;padding:0;height:.533333rem;width:.533333rem;-webkit-box-flex:none;-webkit-flex:none;flex:none}.lib-video .vjs-play-control,.vjs-icon-play{left:0}.vjs-button{background:none;border:none;color:#fff;outline:none}.lib-video .vjs-play-control:before,.vjs-icon-play:before{background-image:url(//gw.alicdn.com/mt/TB1..XoPVXXXXX2XpXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.vjs-icon-volume{width:.533333rem;height:.533333rem;margin-right:.133333rem;cursor:pointer}.vjs-icon-volume:before{background-image:url(//gw.alicdn.com/tfs/TB1fdLdSFXXXXXAaXXXXXXXXXXX-80-80.png);background-size:.4rem .4rem;background-repeat:no-repeat;background-position:center center;width:.533333rem;height:.533333rem;content:"";position:absolute;top:0;left:0;text-align:center}.vjs-icon-volume-muted:before{background-image:url(//gw.alicdn.com/tfs/TB1A2bRSFXXXXahXXXXXXXXXXXX-80-80.png)}.vjs-icon-play-circle{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-play-circle:before{content:"\\F102"}.lib-video .vjs-playing:before,.vjs-icon-pause:before{background-image:url(//gw.alicdn.com/mt/TB1gkQVPFXXXXcwXVXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.lib-video,.lib-video .vjs-fullscreen-control,.vjs-icon-fullscreen-enter{font-family:VideoJS;font-weight:400;font-style:normal}.lib-video .vjs-fullscreen-control:before,.vjs-icon-fullscreen-enter:before{background-image:url(//gw.alicdn.com/mt/TB1pIhEPVXXXXayXXXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.lib-video.vjs-player-fullscreen .vjs-fullscreen-control,.vjs-icon-fullscreen-exit{font-family:VideoJS;font-weight:400;font-style:normal}.lib-video.vjs-player-fullscreen-rotate .vjs-fullscreen-control:before,.lib-video.vjs-player-fullscreen .vjs-fullscreen-control:before,.vjs-icon-fullscreen-exit:before{background-image:url(//gw.alicdn.com/mt/TB1l9n5PVXXXXahXXXXXXXXXXXX-60-60.png);background-size:cover;width:.533333rem;height:.533333rem;content:""}.lib-video .vjs-control:focus,.lib-video .vjs-control:focus:before,.lib-video .vjs-control:hover:before{text-shadow:0 0 1em #fff}.lib-video .vjs-control-text{border:0;clip:rect(0 0 0 0);height:.013333rem;margin:-.013333rem;overflow:hidden;padding:0;position:absolute;width:.013333rem}.vjs-no-flex .vjs-control{display:table-cell;vertical-align:middle}.vjs-center-container{position:absolute;left:0;right:0;bottom:0;top:0;width:1.333333rem;height:1.333333rem;text-align:center;margin:auto;z-index:2}.vjs-center-container.loading .vjs-center-load{opacity:1;display:inline-block}.vjs-center-container.loading .vjs-center-start{display:none}.vjs-center-start{width:1.333333rem;height:1.333333rem;background-image:url(https://gw.alicdn.com/mt/TB1exduPVXXXXcIXpXXXXXXXXXX-136-136.png)}.vjs-center-retry,.vjs-center-start{background-size:contain;border:none;background-repeat:no-repeat}.vjs-center-retry{width:.8rem;height:.8rem;background-image:url(https://gw.alicdn.com/mt/TB1U1JfXMfHK1Jjy1zbXXahRFXa-200-200.png)}.vjs-center-container.error{color:#fff;width:100%;height:1.066667rem;font-size:.266667rem}.error-content{opacity:0;display:none}.vjs-center-container.error .error-content{opacity:1;display:inline-block}.vjs-center-container.error .vjs-center-start,.vjs-center-load{opacity:0;display:none}.vjs-center-load{border-radius:100%;-webkit-animation-fill-mode:both;animation-fill-mode:both;border:.013333rem solid #fff;border-bottom-color:transparent;width:1.2rem;height:1.2rem;background:transparent!important;-webkit-animation:rotate .75s 0s linear infinite;animation:rotate .75s 0s linear infinite}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vjs-center-poster,.vjs-mock-mask{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;opacity:0;z-index:1;background:#000}.vjs-center-poster{opacity:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;background-size:contain;background-repeat:no-repeat;background-position:center center}.vjs-has-started .vjs-center-container,.vjs-has-started .vjs-center-poster,.vjs-has-started .vjs-mock-mask{display:none}.vjs-flash{width:100%;height:100%}.progress-wrap{-webkit-box-flex:1;-moz-box-flex:1;width:20%;-webkit-flex:1;flex:1}.progress-wrap,.volume-wrap{overflow:hidden}.vjs-progress-bar,.vjs-volume-bar{position:relative;display:inline-block;width:100%;vertical-align:top;display:box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-o-flex-direction:row;flex-direction:row;-webkit-box-pack:space-between;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-justify-content:space-between;-o-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.vjs-progress-bar .current-time,.vjs-progress-bar .total-time{color:#fff;line-height:.373333rem;height:.373333rem;text-align:center;display:inline-block;vertical-align:middle;font-weight:400!important}.vjs-progress-bar .current-time em,.vjs-progress-bar .total-time em{display:inline-block;margin:0 .133333rem;font-size:.293333rem;font-weight:400!important;float:left;color:#fff;vertical-align:middle;font-style:normal}.vjs-progress-bar .progress-bar,.vjs-volume-bar .volume-bar{display:block;height:.04rem;border-radius:.04rem;background-color:hsla(0,0%,100%,.4);position:relative;-webkit-box-flex:1;-moz-box-flex:1;width:20%;-webkit-flex:1;flex:1}.vjs-volume-bar .volume-bar{margin-right:.133333rem;width:1.6rem}.vjs-progress-bar .progress,.vjs-volume-bar .volume{width:0;top:0;left:0;background:#ff5000;position:absolute;border-radius:.04rem;height:.04rem}// .vjs-volume-bar .volume{margin-right:.133333rem}.vjs-progress-bar .progress .control,.vjs-volume-bar .volume .control{position:absolute;background:0 0;right:0;top:0}.vjs-progress-bar .progress .control:after,.vjs-volume-bar .volume .control:after{position:absolute;content:"";border-radius:100%;background:#fff;top:-.08rem;left:-.106667rem;width:.186667rem;height:.186667rem}.vjs-progress-bar .vjs-progress-tag{width:.133333rem;height:.133333rem;top:-.04rem;border-radius:100%;background:#fff;position:absolute}.vjs-danmaku-container{position:absolute;left:0;top:0;overflow:"hidden";width:100%;height:100%}.vjs-danmaku-item{-webkit-transition:all 4s linear;transition:all 4s linear;overflow:hidden;vertical-align:middle}.vjs-danmaku-item p{padding:.013333rem .053333rem .026667rem;vertical-align:middle;border-radius:.053333rem}', ""])
                }
            ])
        })
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(97)
        }
        var i = n(7),
            o = n(99),
            a = n(100),
            s = !1,
            u = r,
            c = "data-v-71d2be07",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(98);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("542acf92", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.message-main[data-v-71d2be07]{position:absolute;z-index:10000;left:0;top:0;width:100%;height:100%;-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n}\n.message-main[data-v-71d2be07],.message-wrap[data-v-71d2be07]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-direction:normal\n}\n.message-wrap[data-v-71d2be07]{width:5.6rem;height:2.64rem;border-radius:.08rem;background-color:#fff;box-shadow:0 0 .12rem 0 rgba(0,0,0,.1),0 .12rem .24rem 0 rgba(0,0,0,.3);overflow:hidden;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column\n}\n.message-header[data-v-71d2be07]{width:100%;height:.64rem;background:rgba(230,235,240,.88);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-left:.4rem;padding-right:.266667rem;box-sizing:border-box\n}\n.message-header .tit[data-v-71d2be07]{font-size:.213333rem;color:#333\n}\n.message-header .close-btn[data-v-71d2be07]{width:.266667rem;height:.266667rem;background-repeat:no-repeat;background-position:center center;background-size:.266667rem .266667rem;-webkit-transform:rotate(45deg);transform:rotate(45deg);cursor:pointer;background-image:url(//gw.alicdn.com/tfs/TB1Mx3ZrgMPMeJjy1XcXXXpppXa-32-32.png)\n}\n.message-content[data-v-71d2be07]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:.186667rem;color:#333;line-height:1.5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:.4rem;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center\n}\n.message-footer[data-v-71d2be07]{height:.72rem;box-shadow:0 -.013333rem 0 0 rgba(0,0,0,.06);-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding-right:.4rem\n}\n.comfirm-btn[data-v-71d2be07],.message-footer[data-v-71d2be07]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center\n}\n.comfirm-btn[data-v-71d2be07]{background:#3296fa;border-radius:.053333rem;padding:.106667rem .32rem;font-size:.186667rem;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:.48rem;cursor:pointer\n}\n.comfirm-btn-danger[data-v-71d2be07]{background-color:#f25643;color:#fff;margin-right:.2rem\n}\n.comfirm-btn-default[data-v-71d2be07]{background-color:#fbfbfb;color:#333;border:.013333rem solid rgba(25,31,37,.12)\n}", ""])
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(8);
        e["default"] = {
            props: {
                message: {
                    "default": ""
                },
                title: {
                    "default": r.i18next.t("pc_grouplive_notice")
                },
                comfirmText: {
                    "default": r.i18next.t("pc_grouplive_i_know")
                },
                type: {
                    "default": "confirm"
                },
                cancelText: {
                    "default": r.i18next.t("pc_grouplive_live_message_box_cancel")
                }
            },
            components: {},
            data: function() {
                return {}
            },
            created: function() {},
            mounted: function() {},
            methods: {
                close: function() {
                    this.$emit("close")
                },
                comfirm: function() {
                    this.$emit("comfirm")
                }
            },
            watch: {},
            filters: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "message-main"
                }, [n("div", {
                    staticClass: "message-wrap"
                }, [n("div", {
                    staticClass: "message-header"
                }, [n("span", {
                    staticClass: "tit"
                }, [t._v(t._s(t.title))]), t._v(" "), n("span", {
                    staticClass: "close-btn",
                    on: {
                        click: t.close
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "message-content"
                }, [t._v("\n        " + t._s(t.message) + "\n    ")]), t._v(" "), n("div", {
                    staticClass: "message-footer"
                }, ["confirm" === t.type ? n("div", {
                    staticClass: "comfirm-btn",
                    on: {
                        click: t.comfirm
                    }
                }, [t._v(t._s(t.comfirmText))]) : t._e(), t._v(" "), "dialog" === t.type ? n("div", {
                    staticClass: "comfirm-btn comfirm-btn-danger",
                    on: {
                        click: t.comfirm
                    }
                }, [t._v(t._s(t.comfirmText))]) : t._e(), t._v(" "), "dialog" === t.type ? n("div", {
                    staticClass: "comfirm-btn comfirm-btn-default",
                    on: {
                        click: t.close
                    }
                }, [t._v(t._s(t.cancelText))]) : t._e()])])])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(102)
        }
        var i = n(7),
            o = n(104),
            a = n(105),
            s = !1,
            u = r,
            c = "data-v-104d8d2e",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(103);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("48a1ba2a", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.barrage-switch-wrap[data-v-104d8d2e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end\n}\n.switch-btn[data-v-104d8d2e]{cursor:pointer;width:.533333rem;height:.533333rem;border-radius:.533333rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);background-repeat:no-repeat;background-position:center center;background-image:url(https://img.alicdn.com/tfs/TB1FAHSXStYBeNjSspaXXaOOFXa-48-48.png);background-size:.333333rem .333333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out\n}\n.switch-btn-on[data-v-104d8d2e]{background-image:url(https://img.alicdn.com/tfs/TB1FAHSXStYBeNjSspaXXaOOFXa-48-48.png)\n}\n.switch-btn-off[data-v-104d8d2e]{background-image:url(https://img.alicdn.com/tfs/TB1NdybXL5TBuNjSspcXXbnGFXa-48-48.png)\n}\n.switch-btn-release[data-v-104d8d2e]{background-size:.266667rem .266667rem\n}\n.switch-container[data-v-104d8d2e]{width:.533333rem;height:.533333rem;margin-left:.2rem;cursor:pointer\n}", ""])
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(8);
        e["default"] = {
            props: {
                switchOnOrOff: {
                    "default": !0
                }
            },
            components: {},
            data: function() {
                return {
                    activitCls: "",
                    tips: r.i18next.t("pc_grouplive_live_player_barrage_btn_tips")
                }
            },
            created: function() {},
            mounted: function() {},
            methods: {
                switchEvent: function() {
                    var t = this;
                    this.activitCls = "switch-btn-release", setTimeout(function() {
                        t.activitCls = ""
                    }, 300), this.$emit("switchEvent")
                }
            },
            watch: {},
            filters: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "barrage-switch-wrap"
                }, [n("div", {
                    staticClass: "switch-container",
                    attrs: {
                        title: t.tips
                    }
                }, [n("div", {
                    ref: "btn",
                    "class": ["switch-btn", t.switchOnOrOff ? "switch-btn-off" : "switch-btn-on", t.activitCls],
                    on: {
                        click: t.switchEvent
                    }
                })])])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            for (; t;) {
                var e = t,
                    n = e.closed,
                    r = e.destination,
                    o = e.isStopped;
                if (n || o) return !1;
                t = r && r instanceof i.a ? r : null
            }
            return !0
        }
        e.a = r;
        var i = n(1)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            setTimeout(function() {
                throw t
            }, 0)
        }
        e.a = r
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return null !== t && "object" == typeof t
        }
        e.a = r
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var r = function() {
            return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        }()
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return i(t)
        }

        function i(t) {
            return t ? 1 === t.length ? t[0] : function(e) {
                return t.reduce(function(t, e) {
                    return e(t)
                }, e)
            } : o.a
        }
        e.a = r, e.b = i;
        var o = n(45)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return function(t) {
                return t.lift(new a(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t) {
                    this.connectable = t
                }
                return t.prototype.call = function(t, e) {
                    var n = this.connectable;
                    n._refCount++;
                    var r = new s(t, n),
                        i = e.subscribe(r);
                    return r.closed || (r.connection = n.connect()), i
                }, t
            }(),
            s = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.connectable = n, r
                }
                return i.a(e, t), e.prototype._unsubscribe = function() {
                    var t = this.connectable;
                    if (!t) return void(this.connection = null);
                    this.connectable = null;
                    var e = t._refCount;
                    if (0 >= e) return void(this.connection = null);
                    if (t._refCount = e - 1, e > 1) return void(this.connection = null);
                    var n = this.connection,
                        r = t._connection;
                    this.connection = null, !r || n && r !== n || r.unsubscribe()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return l
        });
        var r = n(0),
            i = n(11),
            o = n(130),
            a = n(9),
            s = n(132),
            u = n(46),
            c = n(127),
            l = function(t) {
                function e(e, n, r) {
                    void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === n && (n = Number.POSITIVE_INFINITY);
                    var i = t.call(this) || this;
                    return i.scheduler = r, i._events = [], i._infiniteTimeWindow = !1, i._bufferSize = 1 > e ? 1 : e, i._windowTime = 1 > n ? 1 : n, n === Number.POSITIVE_INFINITY ? (i._infiniteTimeWindow = !0, i.next = i.nextInfiniteTimeWindow) : i.next = i.nextTimeWindow, i
                }
                return r.a(e, t), e.prototype.nextInfiniteTimeWindow = function(e) {
                    var n = this._events;
                    n.push(e), n.length > this._bufferSize && n.shift(), t.prototype.next.call(this, e)
                }, e.prototype.nextTimeWindow = function(e) {
                    this._events.push(new d(this._getNow(), e)), this._trimBufferThenGetEvents(), t.prototype.next.call(this, e)
                }, e.prototype._subscribe = function(t) {
                    var e, n = this._infiniteTimeWindow,
                        r = n ? this._events : this._trimBufferThenGetEvents(),
                        i = this.scheduler,
                        o = r.length;
                    if (this.closed) throw new u.a;
                    if (this.isStopped || this.hasError ? e = a.a.EMPTY : (this.observers.push(t), e = new c.a(this, t)), i && t.add(t = new s.a(t, i)), n)
                        for (var l = 0; o > l && !t.closed; l++) t.next(r[l]);
                    else
                        for (var l = 0; o > l && !t.closed; l++) t.next(r[l].value);
                    return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), e
                }, e.prototype._getNow = function() {
                    return (this.scheduler || o.a).now()
                }, e.prototype._trimBufferThenGetEvents = function() {
                    for (var t = this._getNow(), e = this._bufferSize, n = this._windowTime, r = this._events, i = r.length, o = 0; i > o && !(t - r[o].time < n);) o++;
                    return i > e && (o = Math.max(o, i - e)), o > 0 && r.splice(0, o), r
                }, e
            }(i.a),
            d = function() {
                function t(t, e) {
                    this.time = t, this.value = e
                }
                return t
            }()
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return new i.a(function(n) {
                var r = new o.a,
                    i = 0;
                return r.add(e.schedule(function() {
                    return i === t.length ? void n.complete() : (n.next(t[i++]), void(n.closed || r.add(this.schedule())))
                })), r
            })
        }
        e.a = r;
        var i = n(2),
            o = n(9)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return e ? new o.a(function(n) {
                return e.schedule(i, 0, {
                    error: t,
                    subscriber: n
                })
            }) : new o.a(function(e) {
                return e.error(t)
            })
        }

        function i(t) {
            var e = t.error,
                n = t.subscriber;
            n.error(e)
        }
        e.a = r;
        var o = n(2)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = null,
                r = null;
            return Object(o.a)(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && Object(a.a)(t[0]) && (t = t[0]), Object(c.a)(t, r).lift(new d(n))
        }
        e.b = r, n.d(e, "a", function() {
            return d
        });
        var i = n(0),
            o = n(17),
            a = n(12),
            s = n(3),
            u = n(4),
            c = n(37),
            l = {},
            d = function() {
                function t(t) {
                    this.resultSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new f(t, this.resultSelector))
                }, t
            }(),
            f = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.values.push(l), this.observables.push(t)
                }, e.prototype._complete = function() {
                    var t = this.observables,
                        e = t.length;
                    if (0 === e) this.destination.complete();
                    else {
                        this.active = e, this.toRespond = e;
                        for (var n = 0; e > n; n++) {
                            var r = t[n];
                            this.add(Object(u.a)(this, r, r, n))
                        }
                    }
                }, e.prototype.notifyComplete = function(t) {
                    0 === (this.active -= 1) && this.destination.complete()
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    var o = this.values,
                        a = o[n],
                        s = this.toRespond ? a === l ? --this.toRespond : this.toRespond : 0;
                    o[n] = e, 0 === s && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()))
                }, e.prototype._tryResultSelector = function(t) {
                    var e;
                    try {
                        e = this.resultSelector.apply(this, t)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(e)
                }, e
            }(s.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return f
        });
        var r = n(133),
            i = n(218),
            o = n(219),
            a = n(220),
            s = n(136),
            u = n(137),
            c = n(108),
            l = n(40),
            d = n(25),
            f = function(t) {
                if (t && "function" == typeof t[d.a]) return Object(a.a)(t);
                if (Object(s.a)(t)) return Object(r.a)(t);
                if (Object(u.a)(t)) return Object(i.a)(t);
                if (t && "function" == typeof t[l.a]) return Object(o.a)(t);
                var e = Object(c.a)(t) ? "an invalid object" : "'" + t + "'",
                    n = "You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
                throw new TypeError(n)
            }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return void 0 === t && (t = Number.POSITIVE_INFINITY), Object(i.a)(o.a, t)
        }
        e.a = r;
        var i = n(41),
            o = n(26)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return new i.a(function(e) {
                var n;
                try {
                    n = t()
                } catch (r) {
                    return void e.error(r)
                }
                var i = n ? Object(o.a)(n) : Object(a.b)();
                return i.subscribe(e)
            })
        }
        e.a = r;
        var i = n(2),
            o = n(18),
            a = n(16)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = t[t.length - 1];
            return "function" == typeof n && t.pop(), Object(o.a)(t, void 0).lift(new d(n))
        }
        e.b = r, n.d(e, "a", function() {
            return d
        });
        var i = n(0),
            o = n(37),
            a = n(12),
            s = n(1),
            u = n(3),
            c = n(4),
            l = n(40),
            d = function() {
                function t(t) {
                    this.resultSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new f(t, this.resultSelector))
                }, t
            }(),
            f = function(t) {
                function e(e, n, r) {
                    void 0 === r && (r = Object.create(null));
                    var i = t.call(this, e) || this;
                    return i.iterators = [], i.active = 0, i.resultSelector = "function" == typeof n ? n : null, i.values = r, i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e = this.iterators;
                    Object(a.a)(t) ? e.push(new h(t)) : "function" == typeof t[l.a] ? e.push(new p(t[l.a]())) : e.push(new v(this.destination, this, t))
                }, e.prototype._complete = function() {
                    var t = this.iterators,
                        e = t.length;
                    if (this.unsubscribe(), 0 === e) return void this.destination.complete();
                    this.active = e;
                    for (var n = 0; e > n; n++) {
                        var r = t[n];
                        if (r.stillUnsubscribed) {
                            var i = this.destination;
                            i.add(r.subscribe(r, n))
                        } else this.active--
                    }
                }, e.prototype.notifyInactive = function() {
                    this.active--, 0 === this.active && this.destination.complete()
                }, e.prototype.checkIterators = function() {
                    for (var t = this.iterators, e = t.length, n = this.destination, r = 0; e > r; r++) {
                        var i = t[r];
                        if ("function" == typeof i.hasValue && !i.hasValue()) return
                    }
                    for (var o = !1, a = [], r = 0; e > r; r++) {
                        var i = t[r],
                            s = i.next();
                        if (i.hasCompleted() && (o = !0), s.done) return void n.complete();
                        a.push(s.value)
                    }
                    this.resultSelector ? this._tryresultSelector(a) : n.next(a), o && n.complete()
                }, e.prototype._tryresultSelector = function(t) {
                    var e;
                    try {
                        e = this.resultSelector.apply(this, t)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(e)
                }, e
            }(s.a),
            p = function() {
                function t(t) {
                    this.iterator = t, this.nextResult = t.next()
                }
                return t.prototype.hasValue = function() {
                    return !0
                }, t.prototype.next = function() {
                    var t = this.nextResult;
                    return this.nextResult = this.iterator.next(), t
                }, t.prototype.hasCompleted = function() {
                    var t = this.nextResult;
                    return t && t.done
                }, t
            }(),
            h = function() {
                function t(t) {
                    this.array = t, this.index = 0, this.length = 0, this.length = t.length
                }
                return t.prototype[l.a] = function() {
                    return this
                }, t.prototype.next = function(t) {
                    var e = this.index++,
                        n = this.array;
                    return e < this.length ? {
                        value: n[e],
                        done: !1
                    } : {
                        value: null,
                        done: !0
                    }
                }, t.prototype.hasValue = function() {
                    return this.array.length > this.index
                }, t.prototype.hasCompleted = function() {
                    return this.array.length === this.index
                }, t
            }(),
            v = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.parent = n, i.observable = r, i.stillUnsubscribed = !0, i.buffer = [], i.isComplete = !1, i
                }
                return i.a(e, t), e.prototype[l.a] = function() {
                    return this
                }, e.prototype.next = function() {
                    var t = this.buffer;
                    return 0 === t.length && this.isComplete ? {
                        value: null,
                        done: !0
                    } : {
                        value: t.shift(),
                        done: !1
                    }
                }, e.prototype.hasValue = function() {
                    return this.buffer.length > 0
                }, e.prototype.hasCompleted = function() {
                    return 0 === this.buffer.length && this.isComplete
                }, e.prototype.notifyComplete = function() {
                    this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.buffer.push(e), this.parent.checkIterators()
                }, e.prototype.subscribe = function(t, e) {
                    return Object(c.a)(this, this.observable, this, e)
                }, e
            }(u.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return 0 === t ? Object(s.b)() : e.lift(new u(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(38),
            s = n(16),
            u = function() {
                function t(t) {
                    if (this.total = t, this.total < 0) throw new a.a
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.total))
                }, t
            }(),
            c = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.total = n, r.count = 0, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e = this.total,
                        n = ++this.count;
                    e >= n && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return 0 === t ? Object(s.b)() : e.lift(new u(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(38),
            s = n(16),
            u = function() {
                function t(t) {
                    if (this.total = t, this.total < 0) throw new a.a
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.total))
                }, t
            }(),
            c = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.total = n, r.ring = new Array, r.count = 0, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e = this.ring,
                        n = this.total,
                        r = this.count++;
                    if (e.length < n) e.push(t);
                    else {
                        var i = r % n;
                        e[i] = t
                    }
                }, e.prototype._complete = function() {
                    var t = this.destination,
                        e = this.count;
                    if (e > 0)
                        for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; n > i; i++) {
                            var o = e++ % n;
                            t.next(r[o])
                        }
                    t.complete()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = !1;
            return arguments.length >= 2 && (n = !0),
                function(r) {
                    return r.lift(new a(t, e, n))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e, n) {
                    void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.accumulator, this.seed, this.hasSeed))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.accumulator = n, o._seed = r, o.hasSeed = i, o.index = 0, o
                }
                return i.a(e, t), Object.defineProperty(e.prototype, "seed", {
                    get: function() {
                        return this._seed
                    },
                    set: function(t) {
                        this.hasSeed = !0, this._seed = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._next = function(t) {
                    return this.hasSeed ? this._tryNext(t) : (this.seed = t, void this.destination.next(t))
                }, e.prototype._tryNext = function(t) {
                    var e, n = this.index++;
                    try {
                        e = this.accumulator(this.seed, t, n)
                    } catch (r) {
                        this.destination.error(r)
                    }
                    this.seed = e, this.destination.next(e)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return "function" == typeof e ? function(n) {
                return n.pipe(r(function(n, r) {
                    return Object(c.a)(t(n, r)).pipe(Object(u.a)(function(t, i) {
                        return e(n, t, r, i)
                    }))
                }))
            } : function(e) {
                return e.lift(new l(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(21),
            s = n(4),
            u = n(14),
            c = n(18),
            l = function() {
                function t(t) {
                    this.project = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new d(t, this.project))
                }, t
            }(),
            d = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.project = n, r.index = 0, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e, n = this.index++;
                    try {
                        e = this.project(t, n)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    this._innerSub(e, t, n)
                }, e.prototype._innerSub = function(t, e, n) {
                    var r = this.innerSubscription;
                    r && r.unsubscribe();
                    var i = new a.a(this, e, n),
                        o = this.destination;
                    o.add(i), this.innerSubscription = Object(s.a)(this, t, void 0, void 0, i), this.innerSubscription !== i && o.add(this.innerSubscription)
                }, e.prototype._complete = function() {
                    var e = this.innerSubscription;
                    (!e || e.closed) && t.prototype._complete.call(this), this.unsubscribe()
                }, e.prototype._unsubscribe = function() {
                    this.innerSubscription = null
                }, e.prototype.notifyComplete = function(e) {
                    var n = this.destination;
                    n.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this)
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(e)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(44),
            i = n(107),
            o = {
                closed: !0,
                next: function(t) {},
                error: function(t) {
                    if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
                    Object(i.a)(t)
                },
                complete: function() {}
            }
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = function() {
                function t(t) {
                    return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(t, e) {
                        return e + 1 + ") " + t.toString()
                    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
                }
                return t.prototype = Object.create(Error.prototype), t
            }(),
            i = r
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return c
        }), n.d(e, "b", function() {
            return l
        });
        var r = n(0),
            i = n(11),
            o = n(2),
            a = n(1),
            s = n(9),
            u = n(111),
            c = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
                }
                return r.a(e, t), e.prototype._subscribe = function(t) {
                    return this.getSubject().subscribe(t)
                }, e.prototype.getSubject = function() {
                    var t = this._subject;
                    return (!t || t.isStopped) && (this._subject = this.subjectFactory()), this._subject
                }, e.prototype.connect = function() {
                    var t = this._connection;
                    return t || (this._isComplete = !1, t = this._connection = new s.a, t.add(this.source.subscribe(new d(this.getSubject(), this))), t.closed && (this._connection = null, t = s.a.EMPTY)), t
                }, e.prototype.refCount = function() {
                    return Object(u.a)()(this)
                }, e
            }(o.a),
            l = function() {
                var t = c.prototype;
                return {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: t._subscribe
                    },
                    _isComplete: {
                        value: t._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: t.getSubject
                    },
                    connect: {
                        value: t.connect
                    },
                    refCount: {
                        value: t.refCount
                    }
                }
            }(),
            d = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.connectable = n, r
                }
                return r.a(e, t), e.prototype._error = function(e) {
                    this._unsubscribe(), t.prototype._error.call(this, e)
                }, e.prototype._complete = function() {
                    this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
                }, e.prototype._unsubscribe = function() {
                    var t = this.connectable;
                    if (t) {
                        this.connectable = null;
                        var e = t._connection;
                        t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                    }
                }, e
            }(i.b),
            f = (function() {
                function t(t) {
                    this.connectable = t
                }
                return t.prototype.call = function(t, e) {
                    var n = this.connectable;
                    n._refCount++;
                    var r = new f(t, n),
                        i = e.subscribe(r);
                    return r.closed || (r.connection = n.connect()), i
                }, t
            }(), function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.connectable = n, r
                }
                return r.a(e, t), e.prototype._unsubscribe = function() {
                    var t = this.connectable;
                    if (!t) return void(this.connection = null);
                    this.connectable = null;
                    var e = t._refCount;
                    if (0 >= e) return void(this.connection = null);
                    if (t._refCount = e - 1, e > 1) return void(this.connection = null);
                    var n = this.connection,
                        r = t._connection;
                    this.connection = null, !r || n && r !== n || r.unsubscribe()
                }, e
            }(a.a))
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(9),
            o = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.subject = e, r.subscriber = n, r.closed = !1, r
                }
                return r.a(e, t), e.prototype.unsubscribe = function() {
                    if (!this.closed) {
                        this.closed = !0;
                        var t = this.subject,
                            e = t.observers;
                        if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                            var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                        }
                    }
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            return function(i) {
                return i.lift(new c(t, e, n, r))
            }
        }
        e.b = r, n.d(e, "a", function() {
            return f
        });
        var i = n(0),
            o = n(1),
            a = n(9),
            s = n(2),
            u = n(11),
            c = function() {
                function t(t, e, n, r) {
                    this.keySelector = t, this.elementSelector = e, this.durationSelector = n, this.subjectSelector = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new l(t, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector))
                }, t
            }(),
            l = function(t) {
                function e(e, n, r, i, o) {
                    var a = t.call(this, e) || this;
                    return a.keySelector = n, a.elementSelector = r, a.durationSelector = i, a.subjectSelector = o, a.groups = null, a.attemptedToUnsubscribe = !1, a.count = 0, a
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e;
                    try {
                        e = this.keySelector(t)
                    } catch (n) {
                        return void this.error(n)
                    }
                    this._group(t, e)
                }, e.prototype._group = function(t, e) {
                    var n = this.groups;
                    n || (n = this.groups = new Map);
                    var r, i = n.get(e);
                    if (this.elementSelector) try {
                        r = this.elementSelector(t)
                    } catch (o) {
                        this.error(o)
                    } else r = t;
                    if (!i) {
                        i = this.subjectSelector ? this.subjectSelector() : new u.a, n.set(e, i);
                        var a = new f(e, i, this);
                        if (this.destination.next(a), this.durationSelector) {
                            var s = void 0;
                            try {
                                s = this.durationSelector(new f(e, i))
                            } catch (o) {
                                return void this.error(o)
                            }
                            this.add(s.subscribe(new d(e, i, this)))
                        }
                    }
                    i.closed || i.next(r)
                }, e.prototype._error = function(t) {
                    var e = this.groups;
                    e && (e.forEach(function(e, n) {
                        e.error(t)
                    }), e.clear()), this.destination.error(t)
                }, e.prototype._complete = function() {
                    var t = this.groups;
                    t && (t.forEach(function(t, e) {
                        t.complete()
                    }), t.clear()), this.destination.complete()
                }, e.prototype.removeGroup = function(t) {
                    this.groups["delete"](t)
                }, e.prototype.unsubscribe = function() {
                    this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && t.prototype.unsubscribe.call(this))
                }, e
            }(o.a),
            d = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, n) || this;
                    return i.key = e, i.group = n, i.parent = r, i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.complete()
                }, e.prototype._unsubscribe = function() {
                    var t = this,
                        e = t.parent,
                        n = t.key;
                    this.key = this.parent = null, e && e.removeGroup(n)
                }, e
            }(o.a),
            f = function(t) {
                function e(e, n, r) {
                    var i = t.call(this) || this;
                    return i.key = e, i.groupSubject = n, i.refCountSubscription = r, i
                }
                return i.a(e, t), e.prototype._subscribe = function(t) {
                    var e = new a.a,
                        n = this,
                        r = n.refCountSubscription,
                        i = n.groupSubject;
                    return r && !r.closed && e.add(new p(r)), e.add(i.subscribe(t)), e
                }, e
            }(s.a),
            p = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n.parent = e, e.count++, n
                }
                return i.a(e, t), e.prototype.unsubscribe = function() {
                    var e = this.parent;
                    e.closed || this.closed || (t.prototype.unsubscribe.call(this), e.count -= 1, 0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe())
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        });
        var r = n(0),
            i = n(11),
            o = n(46),
            a = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n._value = e, n
                }
                return r.a(e, t), Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this.getValue()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._subscribe = function(e) {
                    var n = t.prototype._subscribe.call(this, e);
                    return n && !n.closed && e.next(this._value), n
                }, e.prototype.getValue = function() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new o.a;
                    return this._value
                }, e.prototype.next = function(e) {
                    t.prototype.next.call(this, this._value = e)
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(205),
            i = n(207),
            o = new i.a(r.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var r = function() {
            function t(e, n) {
                void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
            }
            return t.prototype.schedule = function(t, e, n) {
                return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
            }, t.now = function() {
                return Date.now()
            }, t
        }()
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = 0),
                function(n) {
                    return n.lift(new s(t, e))
                }
        }
        e.b = r, n.d(e, "a", function() {
            return u
        });
        var i = n(0),
            o = n(1),
            a = n(47),
            s = function() {
                function t(t, e) {
                    void 0 === e && (e = 0), this.scheduler = t, this.delay = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.scheduler, this.delay))
                }, t
            }(),
            u = function(t) {
                function e(e, n, r) {
                    void 0 === r && (r = 0);
                    var i = t.call(this, e) || this;
                    return i.scheduler = n, i.delay = r, i
                }
                return i.a(e, t), e.dispatch = function(t) {
                    var e = t.notification,
                        n = t.destination;
                    e.observe(n), this.unsubscribe()
                }, e.prototype.scheduleMessage = function(t) {
                    var n = this.destination;
                    n.add(this.scheduler.schedule(e.dispatch, this.delay, new c(t, this.destination)))
                }, e.prototype._next = function(t) {
                    this.scheduleMessage(a.a.createNext(t))
                }, e.prototype._error = function(t) {
                    this.scheduleMessage(a.a.createError(t)), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.scheduleMessage(a.a.createComplete()), this.unsubscribe()
                }, e
            }(o.a),
            c = function() {
                function t(t, e) {
                    this.notification = t, this.destination = e
                }
                return t
            }()
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var r = function(t) {
            return function(e) {
                for (var n = 0, r = t.length; r > n && !e.closed; n++) e.next(t[n]);
                e.complete()
            }
        }
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(208),
            i = n(210),
            o = new i.a(r.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = function() {
                function t() {
                    return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this
                }
                return t.prototype = Object.create(Error.prototype), t
            }(),
            i = r
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var r = function(t) {
            return t && "number" == typeof t.length && "function" != typeof t
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }
        e.a = r
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return Object(i.a)(1)
        }
        e.a = r;
        var i = n(117)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (null != t) {
                if (Object(u.a)(t)) return Object(i.a)(t, e);
                if (Object(c.a)(t)) return Object(o.a)(t, e);
                if (Object(l.a)(t)) return Object(a.a)(t, e);
                if (Object(d.a)(t) || "string" == typeof t) return Object(s.a)(t, e)
            }
            throw new TypeError((null !== t && typeof t || t) + " is not observable")
        }
        e.a = r;
        var i = n(221),
            o = n(222),
            a = n(113),
            s = n(223),
            u = n(224),
            c = n(137),
            l = n(136),
            d = n(225)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = Number.POSITIVE_INFINITY,
                r = null,
                u = t[t.length - 1];
            return Object(o.a)(u) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof u && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof i.a ? t[0] : Object(a.a)(n)(Object(s.a)(t, r))
        }
        e.a = r;
        var i = n(2),
            o = n(17),
            a = n(117),
            s = n(37)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return a
        }
        n.d(e, "a", function() {
            return a
        }), e.b = r;
        var i = n(2),
            o = n(45),
            a = new i.a(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n() {
                return !n.pred.apply(n.thisArg, arguments)
            }
            return n.pred = t, n.thisArg = e, n
        }
        e.a = r
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (1 === t.length) {
                if (!Object(o.a)(t[0])) return t[0];
                t = t[0]
            }
            return Object(a.a)(t, void 0).lift(new c)
        }
        e.a = r;
        var i = n(0),
            o = n(12),
            a = n(37),
            s = n(3),
            u = n(4),
            c = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new l(t))
                }, t
            }(),
            l = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.hasFirst = !1, n.observables = [], n.subscriptions = [], n
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.observables.push(t)
                }, e.prototype._complete = function() {
                    var t = this.observables,
                        e = t.length;
                    if (0 === e) this.destination.complete();
                    else {
                        for (var n = 0; e > n && !this.hasFirst; n++) {
                            var r = t[n],
                                i = Object(u.a)(this, r, r, n);
                            this.subscriptions && this.subscriptions.push(i), this.add(i)
                        }
                        this.observables = null
                    }
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    if (!this.hasFirst) {
                        this.hasFirst = !0;
                        for (var o = 0; o < this.subscriptions.length; o++)
                            if (o !== n) {
                                var a = this.subscriptions[o];
                                a.unsubscribe(), this.remove(a)
                            }
                        this.subscriptions = null
                    }
                    this.destination.next(e)
                }, e
            }(s.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            void 0 === t && (t = 0);
            var r = -1;
            return Object(s.a)(e) ? r = Number(e) < 1 && 1 || Number(e) : Object(u.a)(e) && (n = e), Object(u.a)(n) || (n = a.a), new o.a(function(e) {
                var o = Object(s.a)(t) ? t : +t - n.now();
                return n.schedule(i, o, {
                    index: 0,
                    period: r,
                    subscriber: e
                })
            })
        }

        function i(t) {
            var e = t.index,
                n = t.period,
                r = t.subscriber;
            if (r.next(e), !r.closed) {
                if (-1 === n) return r.complete();
                t.index = e + 1, this.schedule(t, n)
            }
        }
        e.a = r;
        var o = n(2),
            a = n(13),
            s = n(51),
            u = n(17)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new s(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = function() {
                function t(t) {
                    this.durationSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.durationSelector))
                }, t
            }(),
            u = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.durationSelector = n, r.hasValue = !1, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    if (this.value = t, this.hasValue = !0, !this.throttled) {
                        var e = void 0;
                        try {
                            var n = this.durationSelector;
                            e = n(t)
                        } catch (r) {
                            return this.destination.error(r)
                        }
                        var i = Object(a.a)(this, e);
                        !i || i.closed ? this.clearThrottle() : this.add(this.throttled = i)
                    }
                }, e.prototype.clearThrottle = function() {
                    var t = this,
                        e = t.value,
                        n = t.hasValue,
                        r = t.throttled;
                    r && (this.remove(r), this.throttled = null, r.unsubscribe()), n && (this.value = null, this.hasValue = !1, this.destination.next(e))
                }, e.prototype.notifyNext = function(t, e, n, r) {
                    this.clearThrottle()
                }, e.prototype.notifyComplete = function() {
                    this.clearThrottle()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return Object(i.a)(t, e, 1)
        }
        e.a = r;
        var i = n(41);
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t instanceof Date && !isNaN(+t)
        }
        e.a = r
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return n.lift(new a(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e) {
                    this.compare = t, this.keySelector = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.compare, this.keySelector))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.keySelector = r, i.hasKey = !1, "function" == typeof n && (i.compare = n), i
                }
                return i.a(e, t), e.prototype.compare = function(t, e) {
                    return t === e
                }, e.prototype._next = function(t) {
                    var e;
                    try {
                        var n = this.keySelector;
                        e = n ? n(t) : t
                    } catch (r) {
                        return this.destination.error(r)
                    }
                    var i = !1;
                    if (this.hasKey) try {
                        var o = this.compare;
                        i = o(this.key, e)
                    } catch (r) {
                        return this.destination.error(r)
                    } else this.hasKey = !0;
                    i || (this.key = e, this.destination.next(t))
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if ("function" != typeof t) throw new TypeError("predicate is not a function");
            return function(n) {
                return n.lift(new a(t, n, !1, e))
            }
        }
        e.b = r, n.d(e, "a", function() {
            return a
        });
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e, n, r) {
                    this.predicate = t, this.source = e, this.yieldIndex = n, this.thisArg = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.predicate, this.source, this.yieldIndex, this.thisArg))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r, i, o) {
                    var a = t.call(this, e) || this;
                    return a.predicate = n, a.source = r, a.yieldIndex = i, a.thisArg = o, a.index = 0, a
                }
                return i.a(e, t), e.prototype.notifyComplete = function(t) {
                    var e = this.destination;
                    e.next(t), e.complete(), this.unsubscribe()
                }, e.prototype._next = function(t) {
                    var e = this,
                        n = e.predicate,
                        r = e.thisArg,
                        i = this.index++;
                    try {
                        var o = n.call(r || this, t, i, this.source);
                        o && this.notifyComplete(this.yieldIndex ? i : t)
                    } catch (a) {
                        this.destination.error(a)
                    }
                }, e.prototype._complete = function() {
                    this.notifyComplete(this.yieldIndex ? -1 : void 0)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = s),
                function(n) {
                    return n.lift(new u(t, e.leading, e.trailing))
                }
        }
        n.d(e, "a", function() {
            return s
        }), e.b = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = {
                leading: !0,
                trailing: !1
            },
            u = function() {
                function t(t, e, n) {
                    this.durationSelector = t, this.leading = e, this.trailing = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.durationSelector, this.leading, this.trailing))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.destination = e, o.durationSelector = n, o._leading = r, o._trailing = i, o._hasValue = !1, o
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this._hasValue = !0, this._sendValue = t, this._throttled || (this._leading ? this.send() : this.throttle(t))
                }, e.prototype.send = function() {
                    var t = this,
                        e = t._hasValue,
                        n = t._sendValue;
                    e && (this.destination.next(n), this.throttle(n)), this._hasValue = !1, this._sendValue = null
                }, e.prototype.throttle = function(t) {
                    var e = this.tryDurationSelector(t);
                    e && this.add(this._throttled = Object(a.a)(this, e))
                }, e.prototype.tryDurationSelector = function(t) {
                    try {
                        return this.durationSelector(t)
                    } catch (e) {
                        return this.destination.error(e), null
                    }
                }, e.prototype.throttlingDone = function() {
                    var t = this,
                        e = t._throttled,
                        n = t._trailing;
                    e && e.unsubscribe(), this._throttled = null, n && this.send()
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.throttlingDone()
                }, e.prototype.notifyComplete = function() {
                    this.throttlingDone()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return void 0 === n && (n = o.a),
                function(r) {
                    var i = Object(a.a)(t),
                        o = i ? +t - n.now() : Math.abs(t);
                    return r.lift(new c(o, i, e, n))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(13),
            a = n(147),
            s = n(3),
            u = n(4),
            c = function() {
                function t(t, e, n, r) {
                    this.waitFor = t, this.absoluteTimeout = e, this.withObservable = n, this.scheduler = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new l(t, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler))
                }, t
            }(),
            l = function(t) {
                function e(e, n, r, i, o) {
                    var a = t.call(this, e) || this;
                    return a.absoluteTimeout = n, a.waitFor = r, a.withObservable = i, a.scheduler = o, a.action = null, a.scheduleTimeout(), a
                }
                return i.a(e, t), e.dispatchTimeout = function(t) {
                    var e = t.withObservable;
                    t._unsubscribeAndRecycle(), t.add(Object(u.a)(t, e))
                }, e.prototype.scheduleTimeout = function() {
                    var t = this.action;
                    t ? this.action = t.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(e.dispatchTimeout, this.waitFor, this))
                }, e.prototype._next = function(e) {
                    this.absoluteTimeout || this.scheduleTimeout(), t.prototype._next.call(this, e)
                }, e.prototype._unsubscribe = function() {
                    this.action = null, this.scheduler = null, this.withObservable = null
                }, e
            }(s.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var i = n(22),
            o = r(i);
        addEventListener("DOMContentLoaded", function() {
            var t = n(153),
                e = new o["default"](t).$mount("#app");
            window.app = e
        })
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(154)
        }
        var i = n(7),
            o = n(156),
            a = n(320),
            s = !1,
            u = r,
            c = null,
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(155);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("49e076bc", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.toast-wrap{position:fixed;z-index:99999;bottom:10%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%\n}\n.toast{padding:.066667rem .266667rem;background-color:rgba(0,0,0,.6);color:#fff;border-radius:.133333rem;font-size:.32rem\n}\n.main{width:100%;height:100%\n}\n.anchor-info-wrap{position:absolute;top:0;left:0;z-index:1;width:100%\n}\n.stop-live-btn{right:.533333rem;top:.133333rem\n}\n.favor,.stop-live-btn{position:absolute;z-index:1\n}\n.favor{right:.306667rem;bottom:0\n}\n#canvasBarrage{position:absolute;z-index:1;width:100%;height:100%\n}\n.control-btns{position:absolute;left:0;bottom:.266667rem;z-index:99;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:100%\n}\n.lianmai{position:absolute;z-index:1;right:.84rem;bottom:0\n}\n.control-bar-active{-webkit-transition:all .3s ease-in;transition:all .3s ease-in\n}", ""])
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(23),
            o = r(i),
            a = n(78),
            s = r(a),
            u = n(157),
            c = r(u),
            l = n(162),
            d = r(l),
            f = n(86),
            p = r(f),
            h = n(167),
            v = r(h),
            g = n(96),
            m = r(g),
            b = n(172),
            y = r(b),
            _ = n(101),
            w = r(_),
            x = n(177),
            k = r(x),
            O = n(182),
            E = r(O),
            S = n(187),
            C = r(S),
            j = n(192),
            T = r(j),
            P = n(197),
            L = r(P),
            I = n(8),
            A = n(202),
            N = r(A),
            R = n(20),
            M = n(203),
            V = (n(237), n(24)),
            X = n(33),
            D = s["default"].decode(location.search.slice(1)),
            U = D.cid,
            B = D.uuid,
            F = D.anchorId,
            $ = 2e3;
        e["default"] = {
            components: {
                vAnchorInfo: c["default"],
                vAnchorControl: d["default"],
                vVideo: v["default"],
                vMessageBox: m["default"],
                vFavor: p["default"],
                vMessageBarrage: y["default"],
                vBarrageSwitch: w["default"],
                vRotateSwitch: k["default"],
                vClaritySelector: E["default"],
                vLianmaiBtn: C["default"],
                vShareSwitch: T["default"],
                vCommentInput: L["default"]
            },
            mixins: [o["default"]],
            props: {},
            data: function() {
                return {
                    playUrl: "",
                    coverUrl: "",
                    title: "",
                    avatarUrl: "",
                    displayName: "",
                    uuid: "",
                    cid: "",
                    anchorId: "",
                    myOpenId: "",
                    viewCount: "-",
                    type: "live",
                    showMessage: !1,
                    showStopLive: !1,
                    messageText: "",
                    stopLiveMessage: I.i18next.t("pc_grouplive_live_player_force_stop"),
                    status: "living",
                    stopLiveBtnVisible: !1,
                    favorCount: 0,
                    favorCountType: "",
                    cancelTitleText: I.i18next.t("pc_grouplive_live_player_force_stop_title"),
                    cancelBtnText: I.i18next.t("pc_grouplive_live_player_force_stop_ok_btn"),
                    favorCountCache: 0,
                    msgList: [],
                    newChatMsg: {},
                    showBarrage: !0,
                    showCrossBarrage: !1,
                    isInitBarrageBtn: !1,
                    isFirstTimePlay: !0,
                    rotateCounter: 1,
                    videoRatio: 0,
                    isShowClaritySelector: !1,
                    liveUrlVO: null,
                    playUrlArr: [],
                    currentUrlVO: null,
                    liveStatus: 0,
                    linkingMembers: [],
                    enableLinkMic: "0",
                    hasAppliedLink: !1,
                    isFirstTimeUserApplyLinkFlag: !0,
                    showHeaderAndControlSwitch: !0,
                    shouldShowApplyLinkBtn: !1,
                    liveType: 0,
                    isFirstFrameRenderedInSec: 0,
                    isStalled: 0,
                    stallCount: 0,
                    isBroken: 0,
                    brokenCount: 0,
                    firstFrameRenderedMs: -999,
                    firstFrameRenderedMsFromDomready: -999,
                    openCode: V.LIVE_OPEN_CODE.OPEN_LIVE_SUCCESS,
                    isSurportLocalSignedPlayUrl: !1,
                    isOpenSuc: 0,
                    viewerShareType: void 0,
                    hasInitedLikesCount: !1,
                    disableThumbup: !1,
                    enableSendCommentGrayer: !1
                }
            },
            computed: {
                enableShare: function() {
                    return this.viewerShareType === V.PUBLIC_GROUP_LIVE_TYPE.PUBLIC
                }
            },
            methods: {
                favor: function() {
                    this.disableThumbup ? this.messageBox(I.i18next.t("pc_grouplive_live_favor_ban_tips"), [I.i18next.t("pc_grouplive_i_know"), ""]) : (this.favorCountType = "action", this.favorCount++, this.favorCountCache++)
                },
                viewsCountChanged: function(t) {
                    var e = t.count;
                    e && 0 !== e && (this.viewCount = e), console.log("viewsCountChanged")
                },
                likesCountChanged: function(t) {
                    var e = t.count;
                    this.hasInitedLikesCount && this.favorCount < e && (this.favorCountType = "message", this.favorCount = e), console.log("likesCountChanged")
                },
                videoStreamRestore: function() {
                    var t = this;
                    this.localLog("INFO", "videoStreamRestore event trigger; isLive=" + ("live" === this.type) + ", live uuid=" + B), setTimeout(function() {
                        t.getData(U, B, F)["catch"](function() {}).then(function() {
                            t.$refs.videox.clearContainer(), t.$refs.videox.initPlayer(), t.recordRotatePosition(), t.status = "living"
                        })
                    }, 5e3), console.log("videoStreamRestore")
                },
                videoStreamBreak: function() {
                    this.localLog("INFO", "videoStreamBreak event trigger; isLive=" + ("live" === this.type) + ", live uuid=" + B);
                    try {
                        var t = this.$refs.videox,
                            e = t.$el.querySelector(".error-content");
                        t.videox.pause(), this.status = "pause", e && (e.innerHTML = "<p>" + I.i18next.t("pc_grouplive_pause_status") + "</p>", t.videox.player.videox.emit("video:error"))
                    } catch (n) {}
                    this.brokenCount++, this.isBroken || (this.isBroken = 1), console.log("videoStreamBreak")
                },
                getDisplayName: function() {
                    return new Promise(function(t, e) {
                        dingtalk.my.getMyOpenId(function(n, r) {
                            return n ? void e() : void dingtalk.user.getProfile(r, function(n, r) {
                                return n ? void e() : void t({
                                    name: r.userProfile.nick || r.userProfile.name,
                                    uid: r.userProfile.uid
                                })
                            })
                        })
                    })
                },
                getLiveDetail: function(t, e) {
                    return new Promise(function(n, r) {
                        dingtalk.grouplive.getLiveDetail(t, e, function(t, e) {
                            return t ? void r(t) : void n(e)
                        })
                    })
                },
                getGroupOwerId: function() {
                    return new Promise(function(t, e) {
                        dingtalk.conversation.getBaseConversation(U, function(n, r) {
                            return n ? void e(n) : void t({
                                uid: r.ownerId
                            })
                        })
                    })
                },
                getMyOpenId: function() {
                    return new Promise(function(t, e) {
                        dingtalk.my.getMyOpenId(U, function(n, r) {
                            return n ? void e(n) : void t({
                                uid: r
                            })
                        })
                    })
                },
                closeWindow: function() {
                    dingtalk.window.closeLiveWindow()
                },
                openStopLiveConfirm: function() {
                    this.showStopLive = !0
                },
                closeStopLive: function() {
                    this.showStopLive = !1
                },
                stopLive: function() {
                    dingtalk.grouplive.stopLive(U, B, function(t, e) {}), this.closeWindow()
                },
                report: function() {
                    dingtalk.grouplive.report(B, F)
                },
                addBarrageMessage: function(t) {
                    if (this.msgList.push(t), this.msgList.length > 500) {
                        var e = this.msgList.length - 500;
                        this.msgList = this.msgList.splice(e)
                    }
                },
                showBarrageSwitch: function() {
                    this.showBarrage = !this.showBarrage
                },
                isSurportBarrage: function() {
                    var t = /DingTalk\((\d+\.\d+\.\d+)/,
                        e = "4.3.0";
                    try {
                        var n = t.exec(window.navigator.userAgent)[1];
                        this.isInitBarrageBtn = R.compareVersion(e, n, !0)
                    } catch (r) {}
                },
                isSurportApplyLink: function() {
                    var t = /DingTalk\((\d+\.\d+\.\d+)/,
                        e = "4.5.3";
                    try {
                        var n = !1,
                            r = t.exec(window.navigator.userAgent)[1];
                        return n = R.compareVersion(e, r, !1)
                    } catch (i) {
                        return !1
                    }
                },
                rotateVideo: function() {
                    if (this.$refs.videox && this.$refs.videox.videox && this.$refs.videox.videox.videoDom) {
                        var t = this.$refs.videox.videox.videoDom,
                            e = this.$refs.videox.videox.rootElement,
                            n = this.rotateCounter;
                        this.videoRatio || (this.videoRatio = t.videoHeight / t.videoWidth), t.style.transition || (t.style.transition = "0.5s linear"), this.videoRatio < 1 ? this.crossScreenRotation(t, e, n) : t.style.transform = "rotate(-" + 90 * n + "deg) translateZ(0)", this.rotateCounter++
                    }
                },
                crossScreenRotation: function(t, e, n) {
                    var r = this,
                        i = this.rotateCounter % 4;
                    this.oddRotateTimer && clearTimeout(this.oddRotateTimer), this.evenRotateTimer && clearTimeout(this.evenRotateTimer), 1 === i || 3 === i ? (e.style.display = "flex", e.style.justifyContent = "center", this.oddRotateTimer = setTimeout(function() {
                        t.style.transform = "rotate(-" + 90 * n + "deg) translateZ(0)", t.style.width = 100 * r.videoRatio + "%", t.style.height = "100%"
                    }, 100)) : this.evenRotateTimer = setTimeout(function() {
                        t.style.transform = "rotate(-" + 90 * n + "deg) translateZ(0)", t.style.width = "100%", t.style.height = "100%"
                    }, 100)
                },
                recordRotatePosition: function() {
                    var t = this;
                    window.__videox && window.__videox.on("video:loadstart", function(e) {
                        if (t.$refs.videox && t.$refs.videox.videox && t.$refs.videox.videox.videoDom) {
                            var n = t.$refs.videox.videox.videoDom,
                                r = t.rotateCounter - 1;
                            n.style.display = "none", n.style.transform = "rotate(-" + 90 * r + "deg)", setTimeout(function(t) {
                                n.style.display = "block"
                            }, 500)
                        }
                    })
                },
                switchClarityUrlHalder: function(t) {
                    var e = this,
                        n = t.url;
                    this.$eventBus && this.$eventBus.$emit("video:url:switch:start"), this.signLiveUrl(U, B, n).then(function(n) {
                        e.playUrl = n, e.currentUrlVO = t, window.__videox.reload(n), e.$eventBus && e.$eventBus.$emit("video:url:switch:end")
                    })["catch"](function(t) {
                        return e.toast(t.message)
                    })
                },
                doLianmaiHandler: function() {
                    var t = this;
                    this.applyLink(U, B).then(function(e) {
                        t.hasAppliedLink = !0
                    })
                },
                doCancelApplyLinkHandler: function() {
                    var t = this;
                    this.cancelApplyLink(U, B).then(function(e) {
                        t.hasAppliedLink = !1
                    })
                },
                applyCountChange: function(t) {
                    var e = (t.cid, t.users);
                    e && Array.isArray(e) && (this.linkingMembers = e)
                },
                addVedioClickEventEmiter: function() {
                    var t = this,
                        e = this.$refs["v-barrage-wrap"],
                        n = this.$refs["v-favor-wrap"];
                    e && e.$el && (e.$el.onclick = function(e) {
                        t.$eventBus.$emit("videowrap:click")
                    }), n && n.$el && (n.$el.onclick = function(e) {
                        t.$eventBus.$emit("videowrap:click")
                    })
                },
                initObservable: function() {
                    var t = this,
                        e = this.$refs["v-main"];
                    if (e) {
                        var n = void 0,
                            r = void 0;
                        r = setTimeout(function() {
                            t.showHeaderAndControlSwitch = !1
                        }, $), this.hideCtlBarAndHeader$ = M.fromEvent(e, "mousemove", {}, function(e) {
                            return r && (clearTimeout(r), r = null), t.showHeaderAndControlSwitch || (t.showHeaderAndControlSwitch = !0), e
                        }).subscribe(function(e) {
                            n && (clearTimeout(n), n = void 0);
                            var r = e.target.className,
                                i = ["clarity-item", "lianmai-btn-wrap", "lianmai-preview-box-header", "lianmai-preview-box", "lianmai-btns", "webrtc-video", "lianmai-preview-box-confirm-btn", "lianmai-preview-box-cancel-btn", "lianmai-preview-box-view-btn", "lianmai-audio-visulization-box-canvas", "lianmai-audio-visulization-box-icon"];
                            if (!(i.indexOf(r) > -1)) {
                                var o = t.$refs["v-control-btns"],
                                    a = t.$refs["v-header-bar"];
                                e.pageY > a.offsetTop + a.offsetHeight && e.pageY < o.offsetTop && (n = setTimeout(function() {
                                    t.showHeaderAndControlSwitch && (t.showHeaderAndControlSwitch = !1)
                                }, $))
                            }
                        })
                    }
                },
                stallCounter: function() {
                    var t = this;
                    setTimeout(function() {
                        t.globalHasEndedLive || t.stallCount++
                    }, 2e3)
                },
                isFirstFrameRenderedInSecond: function() {
                    this.isFirstFrameRenderedInSec || (this.isFirstFrameRenderedInSec = 1)
                },
                firstFrameRenderedTime: function(t) {
                    if (this.firstFrameRenderedMs < 0) {
                        var e = t.loadstartToPlayingTime,
                            n = t.pageReadyToPlayingTime;
                        this.firstFrameRenderedMs = e, this.firstFrameRenderedMsFromDomready = n
                    }
                },
                recordOpenCode: function(t) {
                    void 0 !== t && (this.openCode = t)
                },
                recordOpenSuccess: function(t) {
                    void 0 !== t && (this.isOpenSuc = t)
                },
                reportVideoQuota: function() {
                    if (this.recordLiveQuota) {
                        this.stallCount >= 1 && (this.isStalled = 1);
                        var t = V.VIDDEO_CLARITY_ENUM.OTHERS;
                        this.currentUrlVO && void 0 !== this.currentUrlVO.enumNumber && (t = this.currentUrlVO.enumNumber);
                        var e = {
                            live_resolution: t,
                            broken_count: this.brokenCount,
                            is_broken: this.isBroken,
                            stall_count: this.stallCount,
                            is_stalled: this.isStalled,
                            is_first_frame_rendered_in_sec: this.isFirstFrameRenderedInSec,
                            first_frame_rendered_ms: this.firstFrameRenderedMs,
                            consume_from_dom_ready_to_first_frame: this.firstFrameRenderedMsFromDomready,
                            open_code: this.openCode,
                            is_open_suc: this.isOpenSuc
                        };
                        this.recordLiveQuota(U, B, e)
                    }
                },
                fetchLiveData: function() {
                    var t = this;
                    this.getData(U, B, F).then(function() {
                        t.isSurportLocalSignedPlayUrl || t.$refs.videox.initPlayer(), t.liveUrlVO && (t.isShowClaritySelector = !0)
                    }), Promise.all([this.getGroupOwerId(), this.getMyOpenId()]).then(function(e) {
                        var n = e[0],
                            r = e[1],
                            i = t.isSurportApplyLink();
                        (n.uid === r.uid || F === r.uid) && (t.stopLiveBtnVisible = !0), i && F !== r.uid && (t.shouldShowApplyLinkBtn = !0), t.myOpenId = r
                    }), this.getLiveStats(U, B).then(function(e) {
                        var n = e.thumbsUp,
                            r = parseInt(n);
                        isNaN(r) || (t.favorCountType = "init", t.favorCount = e.thumbsUp), t.hasInitedLikesCount = !0
                    }), this.getDisplayName().then(function(e) {
                        t.displayName = e.name
                    }), this.getLiveDetail(U, B).then(function(e) {
                        var n = e.liveInfo,
                            r = n.status,
                            i = n.viewerShareType,
                            o = n.disableThumbup,
                            a = void 0 === o ? !1 : o;
                        t.viewCount = e.liveStats.audienceCount, t.liveStatus = r, t.viewerShareType = i, t.disableThumbup = a, 2 === r && (t.status = "pause")
                    }), this.getApplyLinkData(U, B).then(function(e) {
                        var n = e[0].users;
                        n && Array.isArray(n) && n.length > 0 && (t.hasAppliedLink = !0, t.linkingMembers = n)
                    })["catch"](function(t) {}), this.getLiveLatestMessage(U, (new Date).getTime() + "", V.LATEST_LIVE_BARRAGE_COUNT).then(function(e) {
                        e && Array.isArray(e) && e.length && (t.msgList = e.reverse())
                    })["catch"](function(t) {})
                },
                onShareHandler: function() {
                    var t = this;
                    dingtalk.grouplive && dingtalk.grouplive.showShareLinkWnd && dingtalk.grouplive.showShareLinkWnd(U, B, function(e, n) {
                        e ? t.localLog("INFO", "[showShareLinkWnd error][live uuid]" + B) : t.localLog("INFO", "[showShareLinkWnd success][live uuid]" + B)
                    })
                },
                sendedCommentEvent: function() {
                    this.showBarrage || (this.showBarrage = !0)
                }
            },
            created: function() {
                this.cid = U, this.uuid = B, this.anchorId = F
            },
            mounted: function() {
                var t = this;
                window.__WPO && window.__WPO.logPageMount(), dingtalk.grouplive.getLivePlayUrl ? (this.isSurportLocalSignedPlayUrl = !0, this.getLiveSignedPlayUrl(U, B).then(function(e) {
                    t.$refs.videox.initPlayer(), t.fetchLiveData()
                })["catch"](function(t) {})) : this.fetchLiveData();
                var e = 1;
                if (this.bindLog(U, B, e), this.bindOverEvent(U, B, F), this.addVedioClickEventEmiter(), this.likeCounterTimer = setInterval(function() {
                    t.favorCountCache > 0 && (dingtalk.grouplive.uploadLikesClick(B, t.favorCountCache), t.favorCountCache = 0)
                }, 1e4), this.showCrossBarrage) {
                    var n = document.getElementById("canvasBarrage");
                    this.canvasBarrage = new N["default"](n, {
                        data: []
                    })
                }
                X.getGrayValueOfCssconfigByKey("im_live_comment_degrade").then(function(e) {
                    "true" !== e && t.isSurportBarrage()
                }), R.boolValueForModuleKey("live", "enable_grouplive_send_coment").then(function(e) {
                    t.enableSendCommentGrayer = e
                }), this.isFirstTimeUserApplyLinkFunc().then(function(e) {
                    t.isFirstTimeUserApplyLinkFlag = !e
                })["catch"](function() {}), this.initObservable(), window.addEventListener("beforeunload", function(e) {
                    t.hasAppliedLink && t.doCancelApplyLinkHandler(), t.reportVideoQuota()
                })
            },
            destroyed: function() {
                this.hideCtlBarAndHeader$ && this.hideCtlBarAndHeader$.unsubscribe(), this.likeCounterTimer && clearInterval(this.likeCounterTimer), window.removeEventListener("beforeunload")
            }
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(158)
        }
        var i = n(7),
            o = n(160),
            a = n(161),
            s = !1,
            u = r,
            c = "data-v-6b95405c",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(159);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("f263bfea", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n@-webkit-keyframes flash-data-v-6b95405c{\n0%{opacity:1\n}\n50%{opacity:0\n}\nto{opacity:1\n}\n}\n@keyframes flash-data-v-6b95405c{\n0%{opacity:1\n}\n50%{opacity:0\n}\nto{opacity:1\n}\n}\n.anchor-wrap[data-v-6b95405c]{-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row;height:.853333rem;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-linear-gradient(rgba(25,31,37,.36),rgba(25,31,37,0));background:linear-gradient(rgba(25,31,37,.36),rgba(25,31,37,0))\n}\n.anchor-info[data-v-6b95405c],.anchor-wrap[data-v-6b95405c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-direction:normal\n}\n.anchor-info[data-v-6b95405c]{color:#fff;text-shadow:0 .026667rem .026667rem rgba(0,0,0,.5);height:100%;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-left:.16rem\n}\n.anchor-name[data-v-6b95405c]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:.186667rem;height:.213333rem;line-height:1;margin-bottom:.106667rem\n}\n.anchor-name>span[data-v-6b95405c]:first-child{-webkit-transform:translateX(.04rem);transform:translateX(.04rem)\n}\n.live-info[data-v-6b95405c]{font-size:.16rem;height:.16rem;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start\n}\n.dot[data-v-6b95405c]{border-radius:.08rem;width:.08rem;height:.08rem;margin-left:.053333rem;-webkit-animation:flash-data-v-6b95405c 2s infinite;animation:flash-data-v-6b95405c 2s infinite\n}\n.dot[data-v-6b95405c],.status[data-v-6b95405c]{background:#f25643\n}\n.status[data-v-6b95405c]{border-radius:.026667rem;padding:.053333rem;text-shadow:none;-webkit-transform:scale(.83);transform:scale(.83)\n}\n.view-status[data-v-6b95405c]{margin-left:.266667rem;padding-left:.333333rem;background-repeat:no-repeat;background-position:left center;background-size:contain;background-image:url(https://gw.alicdn.com/tfs/TB1F8Uwf0zJ8KJjSspkXXbF7VXa-24-24.png);height:.266667rem;line-height:.266667rem\n}", ""])
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = (n(20), n(8)),
            o = n(81),
            a = r(o);
        e["default"] = {
            props: {
                title: {
                    "default": ""
                },
                type: {
                    "default": ""
                },
                viewCount: {
                    "default": "-"
                },
                status: {
                    "default": "living"
                },
                liveType: {
                    "default": 0
                }
            },
            components: {
                vLiveTypeTag: a["default"]
            },
            data: function() {
                return {
                    liveStatusText: i.i18next.t("pc_grouplive_live_status"),
                    pauseStatusText: i.i18next.t("pc_grouplive_pause_status"),
                    viewerText: i.i18next.t("pc_grouplive_live_views")
                }
            },
            created: function() {},
            mounted: function() {},
            methods: {},
            watch: {},
            filters: {},
            computed: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "anchor-wrap"
                }, [n("div", {
                    staticClass: "anchor-info"
                }, [n("p", {
                    staticClass: "anchor-name"
                }, [n("span", [t._v(t._s(t.title))]), t._v(" "), n("v-live-type-tag", {
                    attrs: {
                        "live-type": t.liveType
                    }
                })], 1), t._v(" "), "live" === t.type ? n("p", {
                    staticClass: "live-info"
                }, [n("span", {
                    staticClass: "status"
                }, [t._v(t._s("living" === t.status ? t.liveStatusText : t.pauseStatusText))]), t._v(" "), n("span", {
                    staticClass: "dot"
                }), t._v(" "), n("span", {
                    staticClass: "view-status"
                }, [t._v(t._s(t.viewCount) + " " + t._s(t.viewerText))])]) : t._e()])])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(163)
        }
        var i = n(7),
            o = n(165),
            a = n(166),
            s = !1,
            u = r,
            c = "data-v-20313302",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(164);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("9a7174ba", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.control-wrap[data-v-20313302]{color:#fff;font-size:.16rem;text-shadow:0 .026667rem .026667rem rgba(0,0,0,.5)\n}\n.division[data-v-20313302]{display:inline-block;padding-left:.066667rem;padding-right:.066667rem\n}\n.handler[data-v-20313302]{cursor:pointer\n}\n.live-intro-wrap[data-v-20313302]{position:relative;display:inline-block\n}\n.live-intro-iframe[data-v-20313302]{position:absolute;top:.373333rem;right:-50%;width:5.333333rem;height:2.666667rem\n}\n.live-intro-iframe>iframe[data-v-20313302]{width:5.333333rem;height:100%;border-radius:.08rem\n}", ""])
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(8),
            o = n(23),
            a = r(o);
        e["default"] = {
            mixins: [a["default"]],
            props: {
                stopVisible: {
                    "default": !1
                }
            },
            components: {},
            data: function() {
                return {
                    positionText: i.i18next.t("pc_grouplive_live_player_force_stop_ok_btn"),
                    reportText: i.i18next.t("pc_grouplive_live_player_report"),
                    liveIntroText: i.i18next.t("pc_grouplive_introduction_btn_text"),
                    liveIntroVisible: !1,
                    liveIntroSwitch: !1,
                    introPageUrl: ""
                }
            },
            created: function() {
                this.liveIntroVisible = "zh-CN" === i.i18next.language;
                var t = window.location.origin;
                this.introPageUrl = t + "/tblive/dingtalk/live-introduce.html"
            },
            mounted: function() {
                this.subscribeVideoWrapClickListener()
            },
            methods: {
                click: function() {
                    this.$emit("click")
                },
                report: function() {
                    this.$emit("report")
                },
                showOrHideIntroduce: function() {
                    this.liveIntroSwitch = !this.liveIntroSwitch
                },
                subscribeVideoWrapClickListener: function() {
                    var t = this;
                    this.$eventBus.$on("videowrap:click", function(e) {
                        t.liveIntroSwitch && (t.liveIntroSwitch = !1)
                    })
                }
            },
            watch: {},
            filters: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "control-wrap"
                }, [t.stopVisible ? n("span", {
                    staticClass: "handler",
                    on: {
                        click: t.click
                    }
                }, [t._v(t._s(t.positionText))]) : t._e(), t._v(" "), t.stopVisible ? n("span", {
                    staticClass: "division"
                }, [t._v("|")]) : t._e(), t._v(" "), t.liveIntroVisible ? n("div", {
                    staticClass: "live-intro-wrap"
                }, [n("span", {
                    staticClass: "handler",
                    on: {
                        click: t.showOrHideIntroduce
                    }
                }, [t._v(t._s(t.liveIntroText))]), t._v(" "), n("span", {
                    staticClass: "division"
                }, [t._v("|")]), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.liveIntroSwitch,
                        expression: "liveIntroSwitch"
                    }],
                    staticClass: "live-intro-iframe"
                }, [n("iframe", {
                    attrs: {
                        src: t.introPageUrl,
                        frameborder: "”no”",
                        border: "”0″",
                        marginwidth: "”0″",
                        marginheight: "”0″",
                        scrolling: "”no”",
                        allowtransparency: "”yes”"
                    }
                })])]) : t._e(), t._v(" "), n("span", {
                    staticClass: "handler",
                    on: {
                        click: t.report
                    }
                }, [t._v(t._s(t.reportText))])])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(168)
        }
        var i = n(7),
            o = n(170),
            a = n(171),
            s = !1,
            u = r,
            c = "data-v-1a4666c0",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(169);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("0ce5a94a", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.video-wrap[data-v-1a4666c0]{position:relative;width:100%;height:100%;background-color:#000\n}", ""])
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(95),
            o = r(i),
            a = n(23),
            s = r(a),
            u = n(8),
            c = n(24);
        e["default"] = {
            mixins: [s["default"]],
            props: {
                type: {
                    "default": "live"
                },
                src: {
                    "default": ""
                },
                cid: {
                    "default": ""
                },
                uuid: {
                    "default": ""
                },
                anchorId: {
                    "default": ""
                },
                displayName: {
                    "default": ""
                },
                liveStatus: {
                    "default": 0
                }
            },
            components: {},
            data: function() {
                return {
                    hasPlayed: !1,
                    isSwitchingClarity: !1
                }
            },
            created: function() {},
            mounted: function() {
                var t = this;
                this.$eventBus.$on("video:pause", function(e) {
                    t.videox && t.videox.pause(), "live" === t.type && t.clearTimer()
                }), this.$eventBus.$on("video:url:switch:start", function(e) {
                    t.isSwitchingClarity = !0
                }), this.$eventBus.$on("video:url:switch:end", function(e) {
                    setTimeout(function() {
                        t.isSwitchingClarity = !1
                    }, 2e3)
                })
            },
            methods: {
                initPlayer: function() {
                    var t = this,
                        e = this,
                        n = !0,
                        r = "live" !== this.type,
                        i = "live" !== this.type,
                        a = {};
                    "live" === this.type && (a = {
                        isLive: !0
                    }), this.videox = new o["default"]({
                        container: this.$refs["video-wrap"],
                        from: "dingtalk-group-live",
                        url: this.src,
                        controls: r,
                        autoplay: n,
                        volumeControls: i,
                        flvOptions: a,
                        stalledText: u.i18next.t("pc_grouplive_live_player_pausing")
                    }), window.__videox = this.videox, window.__videox.on("video:error", function(e) {
                        t.showErrorMsg(e), t.logError(e)
                    }), window.__videox.on("video:playing", function(e) {
                        t.localLog("INFO", "initPlayer success and success to play; isLive=" + !r + " and live uuid=" + t.uuid)
                    }), window.__videox.on("vx:playererror", function(e) {
                        var n = void 0;
                        try {
                            n = JSON.stringify(e)
                        } catch (i) {
                            n = "stringify error object failed"
                        }
                        t.localLog("ERROR", "[vx:playererror]" + n + "[isLive]" + !r + "[uuid]" + t.uuid)
                    }), this.$refs["video-wrap"].ondblclick = function() {
                        e.liveToggleFullScreen()
                    }, this.$refs["video-wrap"].onclick = function() {
                        e.$eventBus.$emit("videowrap:click")
                    }, this.recordVideoQuota(), this.retCodeLogStuckInfo()
                },
                clearContainer: function() {
                    this.$refs["video-wrap"] && (this.$refs["video-wrap"].innerHTML = ""), this.clearTimer()
                },
                showErrorMsg: function(t) {
                    var e = this.liveStatus,
                        n = void 0;
                    if (window.__videox.updateErrorMsg)
                        if (2 === e) n = c.LIVE_OPEN_CODE.OPEN_LIVE_PAUSE;
                        else if (1 === e) {
                        var r = t.errorCode,
                            i = t.isSupport;
                        r ? "NETWORK_TIMEOUT" === r ? (n = c.LIVE_OPEN_CODE.NETWORK_TIMEOUT, window.__videox.updateErrorMsg(u.i18next.t("pc_grouplive_live_player_network_timeout_text"))) : "NETWORK_NO_SOURCE" === r ? (n = c.LIVE_OPEN_CODE.NETWORK_NO_SOURCE, window.__videox.updateErrorMsg(u.i18next.t("pc_grouplive_live_player_network_timeout_text"))) : (n = c.LIVE_OPEN_CODE.OPEN_LIVE_OTHERS, window.__videox.updateErrorMsg(u.i18next.t("pc_grouplive_live_player_stalled_text"))) : void 0 !== i && i === !1 && (n = c.LIVE_OPEN_CODE.CEF_NOT_SUPPORT_FLV, window.__videox.updateErrorMsg(u.i18next.t("pc_grouplive_live_player_unsurpport_text")))
                    }
                    this.hasPlayed || this.$emit("openCode")
                },
                recordVideoQuota: function() {
                    var t = this;
                    if (window.__videox) {
                        var e = void 0,
                            n = void 0,
                            r = void 0,
                            i = void 0;
                        window.__videox.on("video:loadstart", function(t) {
                            n = (new Date).getTime()
                        }), window.__videox.on("video:playing", function(o) {
                            if (t.hasPlayed || (t.hasPlayed = !0, t.recordUserExperience(), window.__videox.rootElement && window.__videox.rootElement.querySelector("video") && (t.stuckIntervalTimer = t.detectVideoStuck(window.__videox.rootElement.querySelector("video"))), t.$emit("openSuccess", c.LIVE_OPEN_SUCCESS_CODE.OPEN_LIVE_SUCCESS)), !e) {
                                var a = (new Date).getTime();
                                r = a - n, i = a - window.pageDomReadyTime;
                                var s = {
                                    loadstartToPlayingTime: r,
                                    pageReadyToPlayingTime: i
                                };
                                t.$emit("renderSecondTime", s), 1e3 >= r && t.$emit("renderSecond"), e = !0
                            }
                        }), window.__videox.on("video:error", function(e) {
                            t.recordUserExperience(e)
                        })
                    }
                },
                recordUserExperience: function(t) {
                    if (this.startWatching && !this.hasCallStartWatching) {
                        if (t) {
                            var e = t.errorCode,
                                n = t.isSupport,
                                r = void 0;
                            e ? "NETWORK_TIMEOUT" === e ? r = c.LIVE_ERROR_CODE.NETWORK_TIMEOUT : "NETWORK_NO_SOURCE" === e && (r = c.LIVE_ERROR_CODE.NETWORK_NO_SOURCE) : r = void 0 !== n && n === !1 ? c.LIVE_ERROR_CODE.CEF_NOT_SUPPORT_FLV : c.LIVE_ERROR_CODE.OTHERS_ERROR, this.hasPlayed || this.startWatching(this.cid, this.uuid, {
                                is_open_suc: !1,
                                err_code: r,
                                type: 1
                            })
                        } else this.hasPlayed && this.startWatching(this.cid, this.uuid, {
                            is_open_suc: !0,
                            err_code: c.LIVE_ERROR_CODE.LIVE_SUCCESS,
                            type: 1
                        });
                        this.hasCallStartWatching = !0
                    }
                },
                logError: function(t) {
                    var e = void 0,
                        n = void 0,
                        r = "live" !== this.type;
                    if (t) {
                        var i = {
                            errorCode: t.errorCode,
                            message: t.message,
                            name: t.name,
                            url: this.src,
                            cid: this.cid,
                            uuid: this.uuid,
                            anchorId: this.anchorId,
                            displayName: this.displayName
                        };
                        __WPO.log(JSON.stringify({
                            errorCode: t.errorCode,
                            message: t.message,
                            name: t.name,
                            cid: this.cid,
                            uuid: this.uuid
                        }), 1), n = i
                    } else __WPO.log("has no error message", 1), n = "has no error message";
                    try {
                        e = JSON.stringify(t)
                    } catch (o) {
                        e = "stringify error object failed"
                    }
                    this.vipAlarm("GroupLive fail to play", [{
                        key: "error",
                        value: JSON.stringify(n)
                    }, {
                        key: "internalError",
                        value: e
                    }]), this.localLog("ERROR", "player fail to play, internal error: " + e + "; isLive=" + !r + " and live uuid=" + this.uuid)
                },
                retCodeLogStuckInfo: function() {
                    var t = this,
                        e = void 0,
                        n = void 0;
                    window.__videox.on("video:playing", function(r) {
                        if (e) {
                            var i = (new Date).getTime() - n,
                                o = {
                                    stuckTime: i,
                                    uuid: t.uuid,
                                    cid: t.cid
                                };
                            __WPO && __WPO.log(JSON.stringify(o), 1)
                        }
                        e = !1
                    }), window.__videox.on("video:waiting", function(r) {
                        t.hasPlayed && (e = !0, n = (new Date).getTime())
                    })
                },
                detectVideoStuck: function(t, e) {
                    var n = this,
                        r = void 0;
                    if (!t) return r;
                    var i = e || 500,
                        o = 0,
                        a = 0,
                        s = !1,
                        u = function() {
                            a = t.currentTime;
                            var e = (i - 200) / 1e3;
                            !s && o + e > a && !t.paused && (s = !0, n.isSwitchingClarity || (n.$emit("waiting"), n.localLog("INFO", "detected video stuck [uuid]" + n.uuid))), s && a > o + e && !t.paused && (s = !1), o = a
                        };
                    return r = setInterval(u, i)
                },
                clearTimer: function() {
                    this.stuckIntervalTimer && clearInterval(this.stuckIntervalTimer)
                }
            },
            watch: {},
            destroyed: function() {
                this.clearTimer()
            }
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    ref: "video-wrap",
                    staticClass: "video-wrap"
                })
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(173)
        }
        var i = n(7),
            o = n(175),
            a = n(176),
            s = !1,
            u = r,
            c = null,
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(174);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("1371392f", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n::-webkit-scrollbar{display:none\n}\n.message-barrage-wrap-65dj{position:absolute;bottom:1.2rem;left:0;width:40%;height:30%;max-height:5.333333rem;overflow-x:hidden;overflow-y:scroll;background-color:transparent;z-index:9\n}\n.barrage-item-65dj{float:left;clear:both;margin:0 .2rem .066667rem;padding:.053333rem;background:rgba(0,0,0,.4);border-radius:.046667rem;font-size:.2rem;line-height:.266667rem;letter-spacing:-.0032rem;text-shadow:0 .013333rem .013333rem rgba(0,0,0,.56)\n}\n.chat-message-content-wrap-65dj{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all;color:#fff\n}\n.username-65dj{color:#3296fa\n}\n.chat-message-65dj,.chat-message-colon-65dj{color:#fff\n}\n.specail-message-65dj{color:#ff943e;text-shadow:0 .013333rem .013333rem rgba(0,0,0,.5)\n}", ""]);
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        n(8);
        e["default"] = {
            props: {
                msgList: {
                    "default": []
                },
                newChatMsg: {},
                showBarrage: {
                    "default": !0
                }
            },
            components: {},
            data: function() {
                return {}
            },
            created: function() {},
            mounted: function() {},
            methods: {},
            watch: {
                msgList: function(t, e) {
                    var n = this.$refs["message-barrage-wrap"];
                    setTimeout(function() {
                        n.scrollTop = n.scrollHeight
                    }, 300)
                },
                showBarrage: function(t, e) {
                    var n = this.$refs["message-barrage-wrap"];
                    t ? n.removeAttribute("style") : n.style.display = "none"
                }
            },
            filters: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    ref: "message-barrage-wrap",
                    staticClass: "message-barrage-wrap-65dj"
                }, t._l(t.msgList, function(e, r) {
                    return n("div", {
                        staticClass: "barrage-item-65dj"
                    }, [0 === e.type ? n("span", [n("span", {
                        staticClass: "specail-message-65dj",
                        domProps: {
                            textContent: t._s(e.content)
                        }
                    })]) : n("span", {
                        staticClass: "chat-message-content-wrap-65dj"
                    }, [n("span", {
                        staticClass: "username-65dj",
                        domProps: {
                            textContent: t._s(e.username)
                        }
                    }), t._v(" "), e.username ? n("span", {
                        staticClass: "chat-message-colon-65dj"
                    }, [t._v(":")]) : t._e(), t._v(" "), t._v("\n            " + t._s(e.content) + "\n        ")])])
                }), 0)
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(178)
        }
        var i = n(7),
            o = n(180),
            a = n(181),
            s = !1,
            u = r,
            c = "data-v-39017211",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(179);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("186feee7", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.rotate-switch-wrap[data-v-39017211]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end\n}\n.switch-btn[data-v-39017211]{cursor:pointer;width:.533333rem;height:.533333rem;border-radius:.533333rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);background-repeat:no-repeat;background-position:center center;background-image:url(//img.alicdn.com/tfs/TB1GYnqJbSYBuNjSspiXXXNzpXa-48-48.png);background-size:.333333rem .333333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out\n}\n.switch-btn-release[data-v-39017211]{background-size:.266667rem .266667rem\n}\n.switch-container[data-v-39017211]{width:.533333rem;height:.533333rem;margin-left:.2rem;cursor:pointer\n}", ""])
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(8);
        e["default"] = {
            props: {},
            components: {},
            data: function() {
                return {
                    activitCls: "",
                    tips: r.i18next.t("pc_grouplive_live_player_rotate_btn_tips")
                }
            },
            created: function() {},
            mounted: function() {},
            methods: {
                rotate: function() {
                    var t = this;
                    this.debounceFlag || (this.debounceFlag = !0, this.clickTimeOut && clearTimeout(this.clickTimeOut), this.activitCls = "switch-btn-release", this.clickTimeOut = setTimeout(function() {
                        t.activitCls = "", t.debounceFlag = !1
                    }, 300), this.$emit("rotate"))
                }
            },
            watch: {},
            filters: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "rotate-switch-wrap"
                }, [n("div", {
                    staticClass: "switch-container",
                    attrs: {
                        title: t.tips
                    }
                }, [n("div", {
                    ref: "btn",
                    "class": ["switch-btn", t.activitCls],
                    on: {
                        click: t.rotate
                    }
                })])])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(183)
        }
        var i = n(7),
            o = n(185),
            a = n(186),
            s = !1,
            u = r,
            c = "data-v-1d3102db",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(184);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("641fa8f6", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.clarity-selector-wrap[data-v-1d3102db]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;color:#fff;font-size:.16rem\n}\n.clarity-items-wrap[data-v-1d3102db]{position:absolute;bottom:.546667rem;left:20%;display:none;width:.853333rem;border:.013333rem solid hsla(0,0%,100%,.12);background:rgba(69,69,69,.45)\n}\n.clarity-item[data-v-1d3102db]{padding:.066667rem .026667rem;text-align:center;cursor:pointer\n}\n.active[data-v-1d3102db]{color:#ff943e\n}\n.clarity-item[data-v-1d3102db]:hover{background:#454545\n}\n.selector-btn[data-v-1d3102db]{-webkit-box-flex:1.0;-webkit-flex:1.0;flex:1.0;cursor:pointer;width:.853333rem;height:.533333rem;line-height:.533333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out;text-align:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap\n}\n.icon-down[data-v-1d3102db]{width:.266667rem\n}\n.arrow-down[data-v-1d3102db]{content:'';width:0;height:0;border-left:.053333rem solid transparent;border-right:.053333rem solid transparent;border-top:.053333rem solid #fff\n}\n.selector-container[data-v-1d3102db]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:.853333rem;height:.533333rem;margin-left:.2rem;border-radius:.666667rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);cursor:pointer\n}\n.clarity-selector-wrap:hover .clarity-items-wrap[data-v-1d3102db]{display:block\n}", ""])
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        n(8);
        e["default"] = {
            props: {
                liveUrlVO: {
                    "default": {}
                },
                playUrlArr: {
                    "default": []
                },
                current: {
                    "default": {
                        name: "",
                        url: ""
                    }
                }
            },
            components: {},
            data: function() {
                return {
                    activitCls: ""
                }
            },
            created: function() {},
            computed: {},
            mounted: function() {},
            methods: {
                switchClarityUrl: function(t, e) {
                    t.url !== this.current.url && this.$emit("switchClarityUrlHalder", t)
                },
                isActive: function(t) {
                    return t.url === this.current.url ? "active" : ""
                }
            },
            watch: {},
            filters: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "clarity-selector-wrap"
                }, [n("div", {
                    staticClass: "clarity-items-wrap"
                }, [n("ul", t._l(t.playUrlArr, function(e, r) {
                    return n("li", {
                        "class": ["clarity-item", t.isActive(e)],
                        on: {
                            click: function(n) {
                                return t.switchClarityUrl(e)
                            }
                        }
                    }, [t._v(t._s(e.name))])
                }), 0)]), t._v(" "), n("div", {
                    staticClass: "selector-container"
                }, [n("div", {
                    staticClass: "selector-btn"
                }, [t._v(t._s(t.current.name))]), t._v(" "), t._m(0)])])
            },
            r = [
                function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "icon-down"
                    }, [n("div", {
                        staticClass: "arrow-down"
                    })])
                }
            ];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(188)
        }
        var i = n(7),
            o = n(190),
            a = n(191),
            s = !1,
            u = r,
            c = "data-v-7913aecb",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(189);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("e95cbb60", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.lianmai-btn-wrap[data-v-7913aecb]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;color:#fff;font-size:.16rem\n}\n.lianmai-btn-wrap[data-v-7913aecb],.lianmai-member-list-container[data-v-7913aecb],.members-and-btn-wrap[data-v-7913aecb]{display:-webkit-box;display:-webkit-flex;display:flex\n}\n.lianmai-member-list-container[data-v-7913aecb]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-right:.213333rem\n}\n.lianmai-member-list-header[data-v-7913aecb]{font-size:.186667rem;color:#333;margin:.133333rem 0 .133333rem .2rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all\n}\n.lianmai-member-list[data-v-7913aecb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1.0;-webkit-flex:1.0;flex:1.0;overflow-y:scroll\n}\n.lianmai-member[data-v-7913aecb]{height:.533333rem;width:.533333rem;border-radius:50%;background:#3296fa;border:.013333rem solid #fff\n}\n.lianmai-member-num[data-v-7913aecb]{background:#fff;font-size:.186667rem;color:rgba(25,31,37,.72);letter-spacing:-.002933rem\n}\n.lianmai-member-avatar[data-v-7913aecb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all\n}\n.lianmai-member-avatar[data-v-7913aecb],.lianmai-member-avatar img[data-v-7913aecb]{height:.533333rem;width:.533333rem;border-radius:50%\n}\n.lianmai-member-nick[data-v-7913aecb]{font-size:.173333rem;color:#333\n}\n.btn-container[data-v-7913aecb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:1.386667rem;height:.533333rem;margin-right:.4rem;border-radius:.666667rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);cursor:pointer\n}\n.btn[data-v-7913aecb]{position:relative;-webkit-transform:scale(1);transform:scale(1);padding:0 .026667rem\n}\n.btn-active[data-v-7913aecb]{background:#3296fa\n}\n.btn-text[data-v-7913aecb]{max-width:1.333333rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all\n}\n.new-red-dot[data-v-7913aecb]{position:absolute;top:-.093333rem;right:-.026667rem;width:.08rem;height:.08rem;border-radius:50%;background:#f25643\n}\n.lianmai-btns[data-v-7913aecb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:.64rem;padding:0 .213333rem\n}", ""])
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(8),
            o = n(23),
            a = r(o);
        e["default"] = {
            mixins: [a["default"]],
            props: {
                linkingMembers: {
                    "default": []
                },
                hasAppliedLink: {
                    "default": !1
                },
                isNewUser: {
                    "default": !0
                }
            },
            components: {},
            data: function() {
                return {
                    lianmaiBtnText: i.i18next.t("pc_grouplive_apply_link_btn_text"),
                    cancelLianmaiBtnText: i.i18next.t("pc_grouplive_apply_link_cancel_btn_text"),
                    activitCls: "",
                    userProfiles: [],
                    shouldShowNewRedDot: !0,
                    linkingWatingLable: i.i18next.t("pc_grouplive_apply_link_waiting_text")
                }
            },
            created: function() {},
            computed: {},
            mounted: function() {},
            methods: {
                toggleClickLinmaiBtn: function() {
                    this.linkingMembers.length <= 0 ? this.handleLianmai() : this.handleCancelApplyLink(), this.isNewUser && (this.shouldShowNewRedDot = !1, this.setNativeHasApplied())
                },
                handleCancelApplyLink: function() {
                    this.$emit("cancelLinmaiHandler"), this.activitCls = "", __WPO && __WPO.custom("count", "group_live_cancel_apply_link_click")
                },
                handleLianmai: function() {
                    this.$emit("lianmaiHandler"), this.activitCls = "btn-active", __WPO && __WPO.custom("count", "group_live_apply_link_click")
                }
            },
            watch: {
                linkingMembers: function(t, e) {
                    if (t.length > 0) {
                        var n = t.slice(-3).reverse();
                        this.userProfiles = n
                    } else this.userProfiles = []
                }
            },
            filters: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    ref: "lianMai",
                    staticClass: "lianmai-btn-wrap"
                }, [n("div", {
                    staticClass: "members-and-btn-wrap"
                }, [n("div", {
                    staticClass: "lianmai-member-list-container"
                }, [n("div", {
                    staticClass: "lianmai-member-list",
                    style: {
                        transform: "translateX(" + 10 * t.userProfiles.length + "px)"
                    }
                }, [t._l(t.userProfiles, function(e, r) {
                    return n("div", {
                        staticClass: "lianmai-member",
                        style: {
                            zIndex: t.userProfiles.length - r,
                            transform: "translateX(-" + 10 * r + "px)"
                        }
                    }, [e.avatar_url ? n("div", {
                        staticClass: "lianmai-member-avatar"
                    }, [n("img", {
                        attrs: {
                            src: e.avatar_url
                        }
                    })]) : n("div", {
                        staticClass: "lianmai-member-avatar"
                    }, [t._v(t._s(e.nick))])])
                }), t._v(" "), t.userProfiles.length > 3 ? n("div", {
                    staticClass: "lianmai-member lianmai-member-num",
                    style: {
                        transform: "translateX(-" + 10 * t.userProfiles.length + "px)"
                    }
                }, [n("div", {
                    staticClass: "lianmai-member-avatar"
                }, [t._v(t._s(t.userProfiles.length))])]) : t._e()], 2)]), t._v(" "), n("div", {
                    "class": ["btn-container", t.activitCls],
                    on: {
                        click: t.toggleClickLinmaiBtn
                    }
                }, [n("div", {
                    staticClass: "btn"
                }, [t.isNewUser ? n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.shouldShowNewRedDot,
                        expression: "shouldShowNewRedDot"
                    }],
                    staticClass: "new-red-dot"
                }) : t._e(), t._v(" "), n("div", {
                    staticClass: "btn-text"
                }, [t._v(t._s(t.linkingMembers.length <= 0 ? t.lianmaiBtnText : t.cancelLianmaiBtnText))])])])])])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(193)
        }
        var i = n(7),
            o = n(195),
            a = n(196),
            s = !1,
            u = r,
            c = "data-v-f66ce83e",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(194);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("033b7ace", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.share-switch-wrap[data-v-f66ce83e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end\n}\n.switch-btn[data-v-f66ce83e]{cursor:pointer;width:.533333rem;height:.533333rem;border-radius:.533333rem;background:rgba(0,0,0,.4);border:.013333rem solid hsla(0,0%,100%,.12);background-repeat:no-repeat;background-position:center center;background-image:url(//gw.alicdn.com/tfs/TB1F71wo4v1gK0jSZFFXXb0sXXa-48-48.png);background-size:.333333rem .333333rem;-webkit-transition:all .1s ease-out;transition:all .1s ease-out\n}\n.switch-btn-release[data-v-f66ce83e]{background-size:.266667rem .266667rem\n}\n.switch-container[data-v-f66ce83e]{width:.533333rem;height:.533333rem;margin-left:.2rem;cursor:pointer\n}", ""])
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(8);
        e["default"] = {
            props: {},
            components: {},
            data: function() {
                return {
                    activitCls: "",
                    tips: r.i18next.t("pc_grouplive_live_player_share_btn_tips")
                }
            },
            created: function() {},
            mounted: function() {},
            methods: {
                share: function() {
                    var t = this;
                    __WPO && __WPO.custom("count", "group_live_share_click"), this.debounceFlag || (this.debounceFlag = !0, this.clickTimeOut && clearTimeout(this.clickTimeOut), this.activitCls = "switch-btn-release", this.clickTimeOut = setTimeout(function() {
                        t.activitCls = "", t.debounceFlag = !1
                    }, 300), this.$emit("share"))
                }
            },
            watch: {},
            filters: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "share-switch-wrap"
                }, [n("div", {
                    staticClass: "switch-container",
                    attrs: {
                        title: t.tips
                    }
                }, [n("div", {
                    ref: "btn",
                    "class": ["switch-btn", t.activitCls],
                    on: {
                        click: t.share
                    }
                })])])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            n(198)
        }
        var i = n(7),
            o = n(200),
            a = n(201),
            s = !1,
            u = r,
            c = "data-v-7cbd87b4",
            l = null,
            d = i(o, a, s, u, c, l);
        t.exports = d.exports
    },
    function(t, e, n) {
        var r = n(199);
        "string" == typeof r && (r = [
            [t.i, r, ""]
        ]), r.locals && (t.exports = r.locals);
        n(6)("0d514b8a", r, !0, {})
    },
    function(t, e, n) {
        e = t.exports = n(5)(), e.push([t.i, "\n.comment-input-wrap[data-v-7cbd87b4]{width:4rem;height:.546667rem;margin-left:.2rem;background:rgba(0,0,0,.4);border-radius:.273333rem;border:.013333rem solid hsla(0,0%,100%,.12);overflow:hidden\n}\n.comment-input-container[data-v-7cbd87b4]{position:relative;display:table;width:100%;border-collapse:separate;border-spacing:0;line-height:1.5\n}\n.comment-input-container>input[data-v-7cbd87b4]{display:table-cell;box-sizing:border-box;float:left;width:100%;height:.533333rem;padding:.133333rem 0 .133333rem .213333rem;list-style:none;line-height:1.5;-webkit-transition:all .3s;transition:all .3s;background:transparent;text-align:left;font-size:.186667rem;color:#fff;letter-spacing:-.002933rem;border:0;-webkit-appearance:none;appearance:none;box-shadow:none;outline:none\n}\n.comment-input-container>input[data-v-7cbd87b4]::-webkit-input-placeholder{color:#fff\n}\n.comment-send-btn[data-v-7cbd87b4]{position:relative;display:table-cell;padding:.026667rem .24rem 0 .16rem;width:.013333rem;max-width:.786667rem;white-space:nowrap;vertical-align:middle;color:#fff;overflow:hidden;text-overflow:ellipsis;word-break:break-all;font-size:.186667rem;text-align:center;-webkit-transition:all .3s;transition:all .3s;cursor:pointer\n}\n.comment-send-btn[data-v-7cbd87b4]:hover{color:#0089ff!important\n}", ""])
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(8),
            i = n(20),
            o = 3e3;
        e["default"] = {
            props: {
                cid: {
                    "default": "",
                    type: String
                },
                uuid: {
                    "default": "",
                    type: String
                },
                localLog: {
                    type: Function
                }
            },
            components: {},
            data: function() {
                return {
                    commentValue: "",
                    sendBtnText: r.i18next.t("pc_grouplive_live_send_comment_btn_text"),
                    commentInputPlaceholder: r.i18next.t("pc_grouplive_live_send_comment_input_placeholder")
                }
            },
            created: function() {},
            mounted: function() {},
            methods: {
                onSendComment: function(t) {
                    this.commentValue && this.commentValue.trim() && this.sendTextMsg(this.commentValue.trim())
                },
                sendTextMsg: function(t) {
                    var e = this;
                    try {
                        var n = (t || "").trim(),
                            a = n.length,
                            s = n.substring(0, 50);
                        o >= a && this.cid ? (this.localLog("INFO", "[sendTextMsg start][msg]" + s + "[conv]" + this.cid + "[uuid]" + this.uuid), dingtalk.message.sendTextMsg(this.cid, t.trim(), {}, function(t) {
                            t ? (i.toast("ERROR", r.i18next.t("pc_grouplive_live_send_comment_exception_text")), e.localLog("ERROR", "[sendTextMsg fail][err]" + JSON.stringify(t) + "[msg]" + s + "[conv]" + e.cid + "[uuid]" + e.uuid)) : (e.commentValue = "", e.$emit("sended"), e.localLog("INFO", "[sendTextMsg success][msg]" + s + "[conv]" + e.cid + "[uuid]" + e.uuid))
                        })) : a > o && (i.toast("ERROR", r.i18next.t("pc_text_too_long", {
                            value1: o
                        })), this.localLog("WARN", "[sendTextMsg warn]msg is too long[msg]" + s + "[conv]" + this.cid + "[uuid]" + this.uuid))
                    } catch (u) {
                        this.localLog("ERROR", "[sendTextMsg]throw exception[msg]" + commentLogStr + "[conv]" + this.cid + "[uuid]" + this.uuid)
                    }
                }
            },
            watch: {},
            filters: {}
        }
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "comment-input-wrap"
                }, [n("span", {
                    staticClass: "comment-input-container"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.commentValue,
                        expression: "commentValue"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: t.commentInputPlaceholder
                    },
                    domProps: {
                        value: t.commentValue
                    },
                    on: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onSendComment(e)
                        },
                        input: function(e) {
                            e.target.composing || (t.commentValue = e.target.value)
                        }
                    }
                }), t._v(" "), n("span", {
                    staticClass: "comment-send-btn",
                    on: {
                        click: t.onSendComment
                    }
                }, [t._v("\n      " + t._s(t.sendBtnText) + "\n    ")])])])
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function(t, e) {
            if (t) {
                var n = {
                    opacity: 100,
                    fontSize: 24,
                    speed: 2,
                    range: [0, 1],
                    color: "white",
                    data: []
                };
                e = e || {};
                var r = {};
                for (var i in n) e[i] ? r[i] = e[i] : r[i] = n[i], this[i] = r[i];
                var o = this,
                    a = o.data;
                if (a) {
                    if ("string" == typeof t) return t = document.querySelector(t), void canvasBarrage(t, a);
                    var s = t.getContext("2d");
                    t.width = t.clientWidth, t.height = t.clientHeight;
                    var u = {},
                        c = function(e, n) {
                            this.value = e.value, this.init = function() {
                                var n = o.speed;
                                e.hasOwnProperty("speed") && (n = e.speed), 0 !== n && (n += e.value.length / 100);
                                var r = e.fontSize || o.fontSize,
                                    i = e.color || o.color;
                                i = function() {
                                    var t = document.createElement("div");
                                    t.style.backgroundColor = i, document.body.appendChild(t);
                                    var e = window.getComputedStyle(t).backgroundColor;
                                    return document.body.removeChild(t), e
                                }();
                                var a = e.range || o.range,
                                    s = e.opacity || o.opacity;
                                s /= 100;
                                var u = document.createElement("span");
                                u.style.position = "absolute", u.style.whiteSpace = "nowrap", u.style.font = "bold " + r + 'px "microsoft yahei", sans-serif', u.innerText = e.value, u.textContent = e.value, document.body.appendChild(u), this.width = u.clientWidth, document.body.removeChild(u), this.x = t.width, 0 == n && (this.x = (this.x - this.width) / 2), this.actualX = t.width, this.y = a[0] * t.height + (a[1] - a[0]) * t.height * Math.random(), this.y < r ? this.y = r : this.y > t.height - r && (this.y = t.height - r), this.moveX = n, this.opacity = s, this.color = i, this.range = a, this.fontSize = r
                            }, this.draw = function() {
                                s.shadowColor = "rgba(0,0,0," + this.opacity + ")", s.shadowBlur = 2, s.font = this.fontSize + 'px "microsoft yahei", sans-serif', /rgb\(/.test(this.color) ? s.fillStyle = "rgba(" + this.color.split("(")[1].split(")")[0] + "," + this.opacity + ")" : s.fillStyle = this.color, s.fillText(this.value, this.x, this.y)
                            }
                        };
                    a.forEach(function(t, e) {
                        u[e] = new c(t, e)
                    });
                    var l = function() {
                            for (var t in u) {
                                var e = u[t];
                                e && !e.disabled && (e.inited || (e.init(), e.inited = !0), e.x -= e.moveX, 0 == e.moveX ? e.actualX -= o.speed : e.actualX = e.x, e.actualX < -1 * e.width && (e.x = e.actualX, e.disabled = !0, u[t] && delete u[t]), e.draw())
                            }
                        },
                        d = function f() {
                            s.clearRect(0, 0, t.width, t.height);
                            try {
                                "{}" !== JSON.stringify(u) && l()
                            } catch (e) {}
                            requestAnimationFrame(f)
                        };
                    d(), this.add = function(t) {
                        u[Object.keys(u).length] = new c(t)
                    }
                }
            }
        };
        e["default"] = r
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(2);
        n.d(e, "Observable", function() {
            return r.a
        });
        var i = n(126);
        n.d(e, "ConnectableObservable", function() {
            return i.a
        });
        var o = n(128);
        n.d(e, "GroupedObservable", function() {
            return o.a
        });
        var a = n(25);
        n.d(e, "observable", function() {
            return a.a
        });
        var s = n(11);
        n.d(e, "Subject", function() {
            return s.a
        });
        var u = n(129);
        n.d(e, "BehaviorSubject", function() {
            return u.a
        });
        var c = n(112);
        n.d(e, "ReplaySubject", function() {
            return c.a
        });
        var l = n(49);
        n.d(e, "AsyncSubject", function() {
            return l.a
        });
        var d = n(134);
        n.d(e, "asapScheduler", function() {
            return d.a
        });
        var f = n(13);
        n.d(e, "asyncScheduler", function() {
            return f.a
        });
        var p = n(130);
        n.d(e, "queueScheduler", function() {
            return p.a
        });
        var h = n(211);
        n.d(e, "animationFrameScheduler", function() {
            return h.a
        });
        var v = n(214);
        n.d(e, "VirtualTimeScheduler", function() {
            return v.b
        }), n.d(e, "VirtualAction", function() {
            return v.a
        });
        var g = n(131);
        n.d(e, "Scheduler", function() {
            return g.a
        });
        var m = n(9);
        n.d(e, "Subscription", function() {
            return m.a
        });
        var b = n(1);
        n.d(e, "Subscriber", function() {
            return b.a
        });
        var y = n(47);
        n.d(e, "Notification", function() {
            return y.a
        }), n.d(e, "NotificationKind", function() {
            return y.b
        });
        var _ = n(110);
        n.d(e, "pipe", function() {
            return _.a
        });
        var w = n(45);
        n.d(e, "noop", function() {
            return w.a
        });
        var x = n(26);
        n.d(e, "identity", function() {
            return x.a
        });
        var k = n(215);
        n.d(e, "isObservable", function() {
            return k.a
        });
        var O = n(38);
        n.d(e, "ArgumentOutOfRangeError", function() {
            return O.a
        });
        var E = n(39);
        n.d(e, "EmptyError", function() {
            return E.a
        });
        var S = n(46);
        n.d(e, "ObjectUnsubscribedError", function() {
            return S.a
        });
        var C = n(125);
        n.d(e, "UnsubscriptionError", function() {
            return C.a
        });
        var j = n(135);
        n.d(e, "TimeoutError", function() {
            return j.a
        });
        var T = n(216);
        n.d(e, "bindCallback", function() {
            return T.a
        });
        var P = n(217);
        n.d(e, "bindNodeCallback", function() {
            return P.a
        });
        var L = n(115);
        n.d(e, "combineLatest", function() {
            return L.b
        });
        var I = n(50);
        n.d(e, "concat", function() {
            return I.a
        });
        var A = n(118);
        n.d(e, "defer", function() {
            return A.a
        });
        var N = n(16);
        n.d(e, "empty", function() {
            return N.b
        });
        var R = n(226);
        n.d(e, "forkJoin", function() {
            return R.a
        });
        var M = n(18);
        n.d(e, "from", function() {
            return M.a
        });
        var V = n(227);
        n.d(e, "fromEvent", function() {
            return V.a
        });
        var X = n(228);
        n.d(e, "fromEventPattern", function() {
            return X.a
        });
        var D = n(229);
        n.d(e, "generate", function() {
            return D.a
        });
        var U = n(230);
        n.d(e, "iif", function() {
            return U.a
        });
        var B = n(231);
        n.d(e, "interval", function() {
            return B.a
        });
        var F = n(140);
        n.d(e, "merge", function() {
            return F.a
        });
        var $ = n(141);
        n.d(e, "never", function() {
            return $.b
        });
        var H = n(48);
        n.d(e, "of", function() {
            return H.a
        });
        var z = n(232);
        n.d(e, "onErrorResumeNext", function() {
            return z.a
        });
        var W = n(233);
        n.d(e, "pairs", function() {
            return W.a
        });
        var q = n(234);
        n.d(e, "partition", function() {
            return q.a
        });
        var Y = n(143);
        n.d(e, "race", function() {
            return Y.a
        });
        var K = n(235);
        n.d(e, "range", function() {
            return K.a
        });
        var G = n(114);
        n.d(e, "throwError", function() {
            return G.a
        });
        var J = n(144);
        n.d(e, "timer", function() {
            return J.a
        });
        var Q = n(236);
        n.d(e, "using", function() {
            return Q.a
        });
        var Z = n(119);
        n.d(e, "zip", function() {
            return Z.b
        });
        var tt = n(139);
        n.d(e, "scheduled", function() {
            return tt.a
        }), n.d(e, "EMPTY", function() {
            return N.a
        }), n.d(e, "NEVER", function() {
            return $.a
        });
        var et = n(44);
        n.d(e, "config", function() {
            return et.a
        })
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            if (t) {
                if (t instanceof i.a) return t;
                if (t[o.a]) return t[o.a]()
            }
            return t || e || n ? new i.a(t, e, n) : new i.a(a.a)
        }
        e.a = r;
        var i = n(1),
            o = n(109),
            a = n(124)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(35),
            o = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.scheduler = e, r.work = n, r
                }
                return r.a(e, t), e.prototype.schedule = function(e, n) {
                    return void 0 === n && (n = 0), n > 0 ? t.prototype.schedule.call(this, e, n) : (this.delay = n, this.state = e, this.scheduler.flush(this), this)
                }, e.prototype.execute = function(e, n) {
                    return n > 0 || this.closed ? t.prototype.execute.call(this, e, n) : this._execute(e, n)
                }, e.prototype.requestAsyncId = function(e, n, r) {
                    return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : e.flush(this)
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(9),
            o = function(t) {
                function e(e, n) {
                    return t.call(this) || this
                }
                return r.a(e, t), e.prototype.schedule = function(t, e) {
                    return void 0 === e && (e = 0), this
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(36),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r.a(e, t), e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        });
        var r = n(0),
            i = n(209),
            o = n(35),
            a = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.scheduler = e, r.work = n, r
                }
                return r.a(e, t), e.prototype.requestAsyncId = function(e, n, r) {
                    return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = i.a.setImmediate(e.flush.bind(e, null))))
                }, e.prototype.recycleAsyncId = function(e, n, r) {
                    return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? t.prototype.recycleAsyncId.call(this, e, n, r) : void(0 === e.actions.length && (i.a.clearImmediate(n), e.scheduled = void 0))
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t in a ? (delete a[t], !0) : !1
        }
        n.d(e, "a", function() {
            return s
        });
        var i = 1,
            o = function() {
                return Promise.resolve()
            }(),
            a = {},
            s = {
                setImmediate: function(t) {
                    var e = i++;
                    return a[e] = !0, o.then(function() {
                        return r(e) && t()
                    }), e
                },
                clearImmediate: function(t) {
                    r(t)
                }
            }
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(36),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r.a(e, t), e.prototype.flush = function(t) {
                    this.active = !0, this.scheduled = void 0;
                    var e, n = this.actions,
                        r = -1,
                        i = n.length;
                    t = t || n.shift();
                    do
                        if (e = t.execute(t.state, t.delay)) break;
                    while (++r < i && (t = n.shift()));
                    if (this.active = !1, e) {
                        for (; ++r < i && (t = n.shift());) t.unsubscribe();
                        throw e
                    }
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(212),
            i = n(213),
            o = new i.a(r.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(35),
            o = function(t) {
                function e(e, n) {
                    var r = t.call(this, e, n) || this;
                    return r.scheduler = e, r.work = n, r
                }
                return r.a(e, t), e.prototype.requestAsyncId = function(e, n, r) {
                    return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = requestAnimationFrame(function() {
                        return e.flush(null)
                    })))
                }, e.prototype.recycleAsyncId = function(e, n, r) {
                    return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? t.prototype.recycleAsyncId.call(this, e, n, r) : void(0 === e.actions.length && (cancelAnimationFrame(n), e.scheduled = void 0))
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var r = n(0),
            i = n(36),
            o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return r.a(e, t), e.prototype.flush = function(t) {
                    this.active = !0, this.scheduled = void 0;
                    var e, n = this.actions,
                        r = -1,
                        i = n.length;
                    t = t || n.shift();
                    do
                        if (e = t.execute(t.state, t.delay)) break;
                    while (++r < i && (t = n.shift()));
                    if (this.active = !1, e) {
                        for (; ++r < i && (t = n.shift());) t.unsubscribe();
                        throw e
                    }
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a
        }), n.d(e, "a", function() {
            return s
        });
        var r = n(0),
            i = n(35),
            o = n(36),
            a = function(t) {
                function e(e, n) {
                    void 0 === e && (e = s), void 0 === n && (n = Number.POSITIVE_INFINITY);
                    var r = t.call(this, e, function() {
                        return r.frame
                    }) || this;
                    return r.maxFrames = n, r.frame = 0, r.index = -1, r
                }
                return r.a(e, t), e.prototype.flush = function() {
                    for (var t, e, n = this, r = n.actions, i = n.maxFrames;
                        (e = r[0]) && e.delay <= i && (r.shift(), this.frame = e.delay, !(t = e.execute(e.state, e.delay))););
                    if (t) {
                        for (; e = r.shift();) e.unsubscribe();
                        throw t
                    }
                }, e.frameTimeFactor = 10, e
            }(o.a),
            s = function(t) {
                function e(e, n, r) {
                    void 0 === r && (r = e.index += 1);
                    var i = t.call(this, e, n) || this;
                    return i.scheduler = e, i.work = n, i.index = r, i.active = !0, i.index = e.index = r, i
                }
                return r.a(e, t), e.prototype.schedule = function(n, r) {
                    if (void 0 === r && (r = 0), !this.id) return t.prototype.schedule.call(this, n, r);
                    this.active = !1;
                    var i = new e(this.scheduler, this.work);
                    return this.add(i), i.schedule(n, r)
                }, e.prototype.requestAsyncId = function(t, n, r) {
                    void 0 === r && (r = 0), this.delay = t.frame + r;
                    var i = t.actions;
                    return i.push(this), i.sort(e.sortActions), !0
                }, e.prototype.recycleAsyncId = function(t, e, n) {
                    return void(void 0 === n && (n = 0))
                }, e.prototype._execute = function(e, n) {
                    return this.active === !0 ? t.prototype._execute.call(this, e, n) : void 0
                }, e.sortActions = function(t, e) {
                    return t.delay === e.delay ? t.index === e.index ? 0 : t.index > e.index ? 1 : -1 : t.delay > e.delay ? 1 : -1
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return !!t && (t instanceof i.a || "function" == typeof t.lift && "function" == typeof t.subscribe)
        }
        e.a = r;
        var i = n(2)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            if (e) {
                if (!Object(d.a)(e)) return function() {
                    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                    return r(t, n).apply(void 0, i).pipe(Object(u.a)(function(t) {
                        return Object(l.a)(t) ? e.apply(void 0, t) : e(t)
                    }))
                };
                n = e
            }
            return function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                var o, u = this,
                    l = {
                        context: u,
                        subject: o,
                        callbackFunc: t,
                        scheduler: n
                    };
                return new a.a(function(r) {
                    if (n) {
                        var a = {
                            args: e,
                            subscriber: r,
                            params: l
                        };
                        return n.schedule(i, 0, a)
                    }
                    if (!o) {
                        o = new s.a;
                        var d = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            o.next(t.length <= 1 ? t[0] : t), o.complete()
                        };
                        try {
                            t.apply(u, e.concat([d]))
                        } catch (f) {
                            Object(c.a)(o) ? o.error(f) : console.warn(f)
                        }
                    }
                    return o.subscribe(r)
                })
            }
        }

        function i(t) {
            var e = this,
                n = t.args,
                r = t.subscriber,
                i = t.params,
                a = i.callbackFunc,
                u = i.context,
                c = i.scheduler,
                l = i.subject;
            if (!l) {
                l = i.subject = new s.a;
                var d = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = t.length <= 1 ? t[0] : t;
                    e.add(c.schedule(o, 0, {
                        value: r,
                        subject: l
                    }))
                };
                try {
                    a.apply(u, n.concat([d]))
                } catch (f) {
                    l.error(f)
                }
            }
            this.add(l.subscribe(r))
        }

        function o(t) {
            var e = t.value,
                n = t.subject;
            n.next(e), n.complete()
        }
        e.a = r;
        var a = n(2),
            s = n(49),
            u = n(14),
            c = n(106),
            l = n(12),
            d = n(17)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            if (e) {
                if (!Object(d.a)(e)) return function() {
                    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                    return r(t, n).apply(void 0, i).pipe(Object(c.a)(function(t) {
                        return Object(f.a)(t) ? e.apply(void 0, t) : e(t)
                    }))
                };
                n = e
            }
            return function() {
                for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                var o = {
                    subject: void 0,
                    args: e,
                    callbackFunc: t,
                    scheduler: n,
                    context: this
                };
                return new s.a(function(r) {
                    var a = o.context,
                        s = o.subject;
                    if (n) return n.schedule(i, 0, {
                        params: o,
                        subscriber: r,
                        context: a
                    });
                    if (!s) {
                        s = o.subject = new u.a;
                        var c = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = t.shift();
                            return n ? void s.error(n) : (s.next(t.length <= 1 ? t[0] : t), void s.complete())
                        };
                        try {
                            t.apply(a, e.concat([c]))
                        } catch (d) {
                            Object(l.a)(s) ? s.error(d) : console.warn(d)
                        }
                    }
                    return s.subscribe(r)
                })
            }
        }

        function i(t) {
            var e = this,
                n = t.params,
                r = t.subscriber,
                i = t.context,
                s = n.callbackFunc,
                c = n.args,
                l = n.scheduler,
                d = n.subject;
            if (!d) {
                d = n.subject = new u.a;
                var f = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    var r = t.shift();
                    if (r) e.add(l.schedule(a, 0, {
                        err: r,
                        subject: d
                    }));
                    else {
                        var i = t.length <= 1 ? t[0] : t;
                        e.add(l.schedule(o, 0, {
                            value: i,
                            subject: d
                        }))
                    }
                };
                try {
                    s.apply(i, c.concat([f]))
                } catch (p) {
                    this.add(l.schedule(a, 0, {
                        err: p,
                        subject: d
                    }))
                }
            }
            this.add(d.subscribe(r))
        }

        function o(t) {
            var e = t.value,
                n = t.subject;
            n.next(e), n.complete()
        }

        function a(t) {
            var e = t.err,
                n = t.subject;
            n.error(e)
        }
        e.a = r;
        var s = n(2),
            u = n(49),
            c = n(14),
            l = n(106),
            d = n(17),
            f = n(12);
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = n(107),
            i = function(t) {
                return function(e) {
                    return t.then(function(t) {
                        e.closed || (e.next(t), e.complete())
                    }, function(t) {
                        return e.error(t)
                    }).then(null, r.a), e
                }
            }
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = n(40),
            i = function(t) {
                return function(e) {
                    for (var n = t[r.a]();;) {
                        var i = n.next();
                        if (i.done) {
                            e.complete();
                            break
                        }
                        if (e.next(i.value), e.closed) break
                    }
                    return "function" == typeof n["return"] && e.add(function() {
                        n["return"] && n["return"]()
                    }), e
                }
            }
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var r = n(25),
            i = function(t) {
                return function(e) {
                    var n = t[r.a]();
                    if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                    return n.subscribe(e)
                }
            }
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return new i.a(function(n) {
                var r = new o.a;
                return r.add(e.schedule(function() {
                    var i = t[a.a]();
                    r.add(i.subscribe({
                        next: function(t) {
                            r.add(e.schedule(function() {
                                return n.next(t)
                            }))
                        },
                        error: function(t) {
                            r.add(e.schedule(function() {
                                return n.error(t)
                            }))
                        },
                        complete: function() {
                            r.add(e.schedule(function() {
                                return n.complete()
                            }))
                        }
                    }))
                })), r
            })
        }
        e.a = r;
        var i = n(2),
            o = n(9),
            a = n(25)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return new i.a(function(n) {
                var r = new o.a;
                return r.add(e.schedule(function() {
                    return t.then(function(t) {
                        r.add(e.schedule(function() {
                            n.next(t), r.add(e.schedule(function() {
                                return n.complete()
                            }))
                        }))
                    }, function(t) {
                        r.add(e.schedule(function() {
                            return n.error(t)
                        }))
                    })
                })), r
            })
        }
        e.a = r;
        var i = n(2),
            o = n(9)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (!t) throw new Error("Iterable cannot be null");
            return new i.a(function(n) {
                var r, i = new o.a;
                return i.add(function() {
                    r && "function" == typeof r["return"] && r["return"]()
                }), i.add(e.schedule(function() {
                    r = t[a.a](), i.add(e.schedule(function() {
                        if (!n.closed) {
                            var t, e;
                            try {
                                var i = r.next();
                                t = i.value, e = i.done
                            } catch (o) {
                                return void n.error(o)
                            }
                            e ? n.complete() : (n.next(t), this.schedule())
                        }
                    }))
                })), i
            })
        }
        e.a = r;
        var i = n(2),
            o = n(9),
            a = n(40)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && "function" == typeof t[i.a]
        }
        e.a = r;
        var i = n(25)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t && "function" == typeof t[i.a]
        }
        e.a = r;
        var i = n(40)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (1 === t.length) {
                var n = t[0];
                if (Object(a.a)(n)) return i(n, null);
                if (Object(u.a)(n) && Object.getPrototypeOf(n) === Object.prototype) {
                    var r = Object.keys(n);
                    return i(r.map(function(t) {
                        return n[t]
                    }), r)
                }
            }
            if ("function" == typeof t[t.length - 1]) {
                var o = t.pop();
                return t = 1 === t.length && Object(a.a)(t[0]) ? t[0] : t, i(t, null).pipe(Object(s.a)(function(t) {
                    return o.apply(void 0, t)
                }))
            }
            return i(t, null)
        }

        function i(t, e) {
            return new o.a(function(n) {
                var r = t.length;
                if (0 === r) return void n.complete();
                for (var i = new Array(r), o = 0, a = 0, s = function(s) {
                    var u = Object(c.a)(t[s]),
                        l = !1;
                    n.add(u.subscribe({
                        next: function(t) {
                            l || (l = !0, a++), i[s] = t
                        },
                        error: function(t) {
                            return n.error(t)
                        },
                        complete: function() {
                            o++, o !== r && l || (a === r && n.next(e ? e.reduce(function(t, e, n) {
                                return t[e] = i[n], t
                            }, {}) : i), n.complete())
                        }
                    }))
                }, u = 0; r > u; u++) s(u)
            })
        }
        e.a = r;
        var o = n(2),
            a = n(12),
            s = n(14),
            u = n(108),
            c = n(18)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n, o) {
            return Object(l.a)(n) && (o = n, n = void 0), o ? r(t, e, n).pipe(Object(d.a)(function(t) {
                return Object(c.a)(t) ? o.apply(void 0, t) : o(t)
            })) : new u.a(function(r) {
                function o(t) {
                    arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(t)
                }
                i(t, e, o, r, n)
            })
        }

        function i(t, e, n, r, u) {
            var c;
            if (s(t)) {
                var l = t;
                t.addEventListener(e, n, u), c = function() {
                    return l.removeEventListener(e, n, u)
                }
            } else if (a(t)) {
                var d = t;
                t.on(e, n), c = function() {
                    return d.off(e, n)
                }
            } else if (o(t)) {
                var f = t;
                t.addListener(e, n), c = function() {
                    return f.removeListener(e, n)
                }
            } else {
                if (!t || !t.length) throw new TypeError("Invalid event target");
                for (var p = 0, h = t.length; h > p; p++) i(t[p], e, n, r, u)
            }
            r.add(c)
        }

        function o(t) {
            return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
        }

        function a(t) {
            return t && "function" == typeof t.on && "function" == typeof t.off
        }

        function s(t) {
            return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
        }
        e.a = r;
        var u = n(2),
            c = n(12),
            l = n(34),
            d = n(14);
        (function() {
            return Object.prototype.toString
        })()
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return n ? r(t, e).pipe(Object(s.a)(function(t) {
                return Object(o.a)(t) ? n.apply(void 0, t) : n(t)
            })) : new i.a(function(n) {
                var r, i = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return n.next(1 === t.length ? t[0] : t)
                };
                try {
                    r = t(i)
                } catch (o) {
                    return void n.error(o)
                }
                return Object(a.a)(e) ? function() {
                    return e(i, r)
                } : void 0
            })
        }
        e.a = r;
        var i = n(2),
            o = n(12),
            a = n(34),
            s = n(14)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n, r, u) {
            var c, l;
            if (1 == arguments.length) {
                var d = t;
                l = d.initialState, e = d.condition, n = d.iterate, c = d.resultSelector || a.a, u = d.scheduler
            } else void 0 === r || Object(s.a)(r) ? (l = t, c = a.a, u = r) : (l = t, c = r);
            return new o.a(function(t) {
                var r = l;
                if (u) return u.schedule(i, 0, {
                    subscriber: t,
                    iterate: n,
                    condition: e,
                    resultSelector: c,
                    state: r
                });
                for (;;) {
                    if (e) {
                        var o = void 0;
                        try {
                            o = e(r)
                        } catch (a) {
                            return void t.error(a)
                        }
                        if (!o) {
                            t.complete();
                            break
                        }
                    }
                    var s = void 0;
                    try {
                        s = c(r)
                    } catch (a) {
                        return void t.error(a)
                    }
                    if (t.next(s), t.closed) break;
                    try {
                        r = n(r)
                    } catch (a) {
                        return void t.error(a)
                    }
                }
                return void 0
            })
        }

        function i(t) {
            var e = t.subscriber,
                n = t.condition;
            if (e.closed) return void 0;
            if (t.needIterate) try {
                t.state = t.iterate(t.state)
            } catch (r) {
                return void e.error(r)
            } else t.needIterate = !0;
            if (n) {
                var i = void 0;
                try {
                    i = n(t.state)
                } catch (r) {
                    return void e.error(r)
                }
                if (!i) return void e.complete();
                if (e.closed) return void 0
            }
            var o;
            try {
                o = t.resultSelector(t.state)
            } catch (r) {
                return void e.error(r)
            }
            return e.closed ? void 0 : (e.next(o), e.closed ? void 0 : this.schedule(t))
        }
        e.a = r;
        var o = n(2),
            a = n(26),
            s = n(17)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return void 0 === e && (e = o.a), void 0 === n && (n = o.a), Object(i.a)(function() {
                return t() ? e : n
            })
        }
        e.a = r;
        var i = n(118),
            o = n(16)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = a.a), (!Object(s.a)(t) || 0 > t) && (t = 0), e && "function" == typeof e.schedule || (e = a.a), new o.a(function(n) {
                return n.add(e.schedule(i, t, {
                    subscriber: n,
                    counter: 0,
                    period: t
                })), n
            })
        }

        function i(t) {
            var e = t.subscriber,
                n = t.counter,
                r = t.period;
            e.next(n), this.schedule({
                subscriber: e,
                counter: n + 1,
                period: r
            }, r)
        }
        e.a = r;
        var o = n(2),
            a = n(13),
            s = n(51)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            if (0 === t.length) return s.a;
            var n = t[0],
                u = t.slice(1);
            return 1 === t.length && Object(a.a)(n) ? r.apply(void 0, n) : new i.a(function(t) {
                var e = function() {
                    return t.add(r.apply(void 0, u).subscribe(t))
                };
                return Object(o.a)(n).subscribe({
                    next: function(e) {
                        t.next(e)
                    },
                    error: e,
                    complete: e
                })
            })
        }
        e.a = r;
        var i = n(2),
            o = n(18),
            a = n(12),
            s = n(16)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return e ? new o.a(function(n) {
                var r = Object.keys(t),
                    o = new a.a;
                return o.add(e.schedule(i, 0, {
                    keys: r,
                    index: 0,
                    subscriber: n,
                    subscription: o,
                    obj: t
                })), o
            }) : new o.a(function(e) {
                for (var n = Object.keys(t), r = 0; r < n.length && !e.closed; r++) {
                    var i = n[r];
                    t.hasOwnProperty(i) && e.next([i, t[i]])
                }
                e.complete()
            })
        }

        function i(t) {
            var e = t.keys,
                n = t.index,
                r = t.subscriber,
                i = t.subscription,
                o = t.obj;
            if (!r.closed)
                if (n < e.length) {
                    var a = e[n];
                    r.next([a, o[a]]), i.add(this.schedule({
                        keys: e,
                        index: n + 1,
                        subscriber: r,
                        subscription: i,
                        obj: o
                    }))
                } else r.complete()
        }
        e.a = r;
        var o = n(2),
            a = n(9)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return [Object(a.a)(e, n)(new s.a(Object(o.a)(t))), Object(a.a)(Object(i.a)(e, n))(new s.a(Object(o.a)(t)))]
        }
        e.a = r;
        var i = n(142),
            o = n(116),
            a = n(27),
            s = n(2)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return void 0 === t && (t = 0), new o.a(function(r) {
                void 0 === e && (e = t, t = 0);
                var o = 0,
                    a = t;
                if (n) return n.schedule(i, 0, {
                    index: o,
                    count: e,
                    start: t,
                    subscriber: r
                });
                for (;;) {
                    if (o++ >= e) {
                        r.complete();
                        break
                    }
                    if (r.next(a++), r.closed) break
                }
                return void 0
            })
        }

        function i(t) {
            var e = t.start,
                n = t.index,
                r = t.count,
                i = t.subscriber;
            return n >= r ? void i.complete() : (i.next(e), void(i.closed || (t.index = n + 1, t.start = e + 1, this.schedule(t))))
        }
        e.a = r;
        var o = n(2)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return new i.a(function(n) {
                var r;
                try {
                    r = t()
                } catch (i) {
                    return void n.error(i)
                }
                var s;
                try {
                    s = e(r)
                } catch (i) {
                    return void n.error(i)
                }
                var u = s ? Object(o.a)(s) : a.a,
                    c = u.subscribe(n);
                return function() {
                    c.unsubscribe(), r && r.unsubscribe()
                }
            })
        }
        e.a = r;
        var i = n(2),
            o = n(18),
            a = n(16)
    },
    function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(145);
        n.d(e, "audit", function() {
            return r.a
        });
        var i = n(238);
        n.d(e, "auditTime", function() {
            return i.a
        });
        var o = n(239);
        n.d(e, "buffer", function() {
            return o.a
        });
        var a = n(240);
        n.d(e, "bufferCount", function() {
            return a.a
        });
        var s = n(241);
        n.d(e, "bufferTime", function() {
            return s.a
        });
        var u = n(242);
        n.d(e, "bufferToggle", function() {
            return u.a
        });
        var c = n(243);
        n.d(e, "bufferWhen", function() {
            return c.a
        });
        var l = n(244);
        n.d(e, "catchError", function() {
            return l.a
        });
        var d = n(245);
        n.d(e, "combineAll", function() {
            return d.a
        });
        var f = n(246);
        n.d(e, "combineLatest", function() {
            return f.a
        });
        var p = n(247);
        n.d(e, "concat", function() {
            return p.a
        });
        var h = n(138);
        n.d(e, "concatAll", function() {
            return h.a
        });
        var v = n(146);
        n.d(e, "concatMap", function() {
            return v.a
        });
        var g = n(248);
        n.d(e, "concatMapTo", function() {
            return g.a
        });
        var m = n(249);
        n.d(e, "count", function() {
            return m.a
        });
        var b = n(250);
        n.d(e, "debounce", function() {
            return b.a
        });
        var y = n(251);
        n.d(e, "debounceTime", function() {
            return y.a
        });
        var _ = n(42);
        n.d(e, "defaultIfEmpty", function() {
            return _.a
        });
        var w = n(252);
        n.d(e, "delay", function() {
            return w.a
        });
        var x = n(253);
        n.d(e, "delayWhen", function() {
            return x.a
        });
        var k = n(254);
        n.d(e, "dematerialize", function() {
            return k.a
        });
        var O = n(255);
        n.d(e, "distinct", function() {
            return O.a
        });
        var E = n(148);
        n.d(e, "distinctUntilChanged", function() {
            return E.a
        });
        var S = n(256);
        n.d(e, "distinctUntilKeyChanged", function() {
            return S.a
        });
        var C = n(257);
        n.d(e, "elementAt", function() {
            return C.a
        });
        var j = n(258);
        n.d(e, "endWith", function() {
            return j.a
        });
        var T = n(259);
        n.d(e, "every", function() {
            return T.a
        });
        var P = n(260);
        n.d(e, "exhaust", function() {
            return P.a
        });
        var L = n(261);
        n.d(e, "exhaustMap", function() {
            return L.a
        });
        var I = n(262);
        n.d(e, "expand", function() {
            return I.a
        });
        var A = n(27);
        n.d(e, "filter", function() {
            return A.a
        });
        var N = n(263);
        n.d(e, "finalize", function() {
            return N.a
        });
        var R = n(149);
        n.d(e, "find", function() {
            return R.b
        });
        var M = n(264);
        n.d(e, "findIndex", function() {
            return M.a
        });
        var V = n(265);
        n.d(e, "first", function() {
            return V.a
        });
        var X = n(128);
        n.d(e, "groupBy", function() {
            return X.b
        });
        var D = n(266);
        n.d(e, "ignoreElements", function() {
            return D.a
        });
        var U = n(267);
        n.d(e, "isEmpty", function() {
            return U.a
        });
        var B = n(268);
        n.d(e, "last", function() {
            return B.a
        });
        var F = n(14);
        n.d(e, "map", function() {
            return F.a
        });
        var $ = n(269);
        n.d(e, "mapTo", function() {
            return $.a
        });
        var H = n(270);
        n.d(e, "materialize", function() {
            return H.a
        });
        var z = n(271);
        n.d(e, "max", function() {
            return z.a
        });
        var W = n(272);
        n.d(e, "merge", function() {
            return W.a
        });
        var q = n(117);
        n.d(e, "mergeAll", function() {
            return q.a
        });
        var Y = n(41);
        n.d(e, "mergeMap", function() {
            return Y.a
        }), n.d(e, "flatMap", function() {
            return Y.a
        });
        var K = n(273);
        n.d(e, "mergeMapTo", function() {
            return K.a
        });
        var G = n(274);
        n.d(e, "mergeScan", function() {
            return G.a
        });
        var J = n(275);
        n.d(e, "min", function() {
            return J.a
        });
        var Q = n(28);
        n.d(e, "multicast", function() {
            return Q.a
        });
        var Z = n(132);
        n.d(e, "observeOn", function() {
            return Z.b
        });
        var tt = n(276);
        n.d(e, "onErrorResumeNext", function() {
            return tt.a
        });
        var et = n(277);
        n.d(e, "pairwise", function() {
            return et.a
        });
        var nt = n(278);
        n.d(e, "partition", function() {
            return nt.a
        });
        var rt = n(279);
        n.d(e, "pluck", function() {
            return rt.a
        });
        var it = n(280);
        n.d(e, "publish", function() {
            return it.a
        });
        var ot = n(281);
        n.d(e, "publishBehavior", function() {
            return ot.a
        });
        var at = n(282);
        n.d(e, "publishLast", function() {
            return at.a
        });
        var st = n(283);
        n.d(e, "publishReplay", function() {
            return st.a
        });
        var ut = n(284);
        n.d(e, "race", function() {
            return ut.a
        });
        var ct = n(53);
        n.d(e, "reduce", function() {
            return ct.a
        });
        var lt = n(285);
        n.d(e, "repeat", function() {
            return lt.a
        });
        var dt = n(286);
        n.d(e, "repeatWhen", function() {
            return dt.a
        });
        var ft = n(287);
        n.d(e, "retry", function() {
            return ft.a
        });
        var pt = n(288);
        n.d(e, "retryWhen", function() {
            return pt.a
        });
        var ht = n(111);
        n.d(e, "refCount", function() {
            return ht.a
        });
        var vt = n(289);
        n.d(e, "sample", function() {
            return vt.a
        });
        var gt = n(290);
        n.d(e, "sampleTime", function() {
            return gt.a
        });
        var mt = n(122);
        n.d(e, "scan", function() {
            return mt.a
        });
        var bt = n(291);
        n.d(e, "sequenceEqual", function() {
            return bt.a
        });
        var yt = n(292);
        n.d(e, "share", function() {
            return yt.a
        });
        var _t = n(293);
        n.d(e, "shareReplay", function() {
            return _t.a
        });
        var wt = n(294);
        n.d(e, "single", function() {
            return wt.a
        });
        var xt = n(295);
        n.d(e, "skip", function() {
            return xt.a
        });
        var kt = n(296);
        n.d(e, "skipLast", function() {
            return kt.a
        });
        var Ot = n(297);
        n.d(e, "skipUntil", function() {
            return Ot.a
        });
        var Et = n(298);
        n.d(e, "skipWhile", function() {
            return Et.a
        });
        var St = n(299);
        n.d(e, "startWith", function() {
            return St.a
        });
        var Ct = n(300);
        n.d(e, "subscribeOn", function() {
            return Ct.a
        });
        var jt = n(302);
        n.d(e, "switchAll", function() {
            return jt.a
        });
        var Tt = n(123);
        n.d(e, "switchMap", function() {
            return Tt.a
        });
        var Pt = n(303);
        n.d(e, "switchMapTo", function() {
            return Pt.a
        });
        var Lt = n(120);
        n.d(e, "take", function() {
            return Lt.a
        });
        var It = n(121);
        n.d(e, "takeLast", function() {
            return It.a
        });
        var At = n(304);
        n.d(e, "takeUntil", function() {
            return At.a
        });
        var Nt = n(305);
        n.d(e, "takeWhile", function() {
            return Nt.a
        });
        var Rt = n(306);
        n.d(e, "tap", function() {
            return Rt.a
        });
        var Mt = n(150);
        n.d(e, "throttle", function() {
            return Mt.b
        });
        var Vt = n(307);
        n.d(e, "throttleTime", function() {
            return Vt.a
        });
        var Xt = n(52);
        n.d(e, "throwIfEmpty", function() {
            return Xt.a
        });
        var Dt = n(308);
        n.d(e, "timeInterval", function() {
            return Dt.a
        });
        var Ut = n(309);
        n.d(e, "timeout", function() {
            return Ut.a
        });
        var Bt = n(151);
        n.d(e, "timeoutWith", function() {
            return Bt.a
        });
        var Ft = n(310);
        n.d(e, "timestamp", function() {
            return Ft.a
        });
        var $t = n(311);
        n.d(e, "toArray", function() {
            return $t.a
        });
        var Ht = n(312);
        n.d(e, "window", function() {
            return Ht.a
        });
        var zt = n(313);
        n.d(e, "windowCount", function() {
            return zt.a
        });
        var Wt = n(314);
        n.d(e, "windowTime", function() {
            return Wt.a
        });
        var qt = n(315);
        n.d(e, "windowToggle", function() {
            return qt.a
        });
        var Yt = n(316);
        n.d(e, "windowWhen", function() {
            return Yt.a
        });
        var Kt = n(317);
        n.d(e, "withLatestFrom", function() {
            return Kt.a
        });
        var Gt = n(318);
        n.d(e, "zip", function() {
            return Gt.a
        });
        var Jt = n(319);
        n.d(e, "zipAll", function() {
            return Jt.a
        })
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = i.a), Object(o.a)(function() {
                return Object(a.a)(t, e)
            })
        }
        e.a = r;
        var i = n(13),
            o = n(145),
            a = n(144)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new s(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = function() {
                function t(t) {
                    this.closingNotifier = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.closingNotifier))
                }, t
            }(),
            u = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.buffer = [], r.add(Object(a.a)(r, n)), r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.buffer.push(t)
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    var o = this.buffer;
                    this.buffer = [], this.destination.next(o)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = null),
                function(n) {
                    return n.lift(new a(t, e))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e) {
                    this.bufferSize = t, this.startBufferEvery = e, e && t !== e ? this.subscriberClass = u : this.subscriberClass = s
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new this.subscriberClass(t, this.bufferSize, this.startBufferEvery))
                }, t
            }(),
            s = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.bufferSize = n, r.buffer = [], r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e = this.buffer;
                    e.push(t), e.length == this.bufferSize && (this.destination.next(e), this.buffer = [])
                }, e.prototype._complete = function() {
                    var e = this.buffer;
                    e.length > 0 && this.destination.next(e), t.prototype._complete.call(this)
                }, e
            }(o.a),
            u = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.bufferSize = n, i.startBufferEvery = r, i.buffers = [], i.count = 0, i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e = this,
                        n = e.bufferSize,
                        r = e.startBufferEvery,
                        i = e.buffers,
                        o = e.count;
                    this.count++, o % r === 0 && i.push([]);
                    for (var a = i.length; a--;) {
                        var s = i[a];
                        s.push(t), s.length === n && (i.splice(a, 1), this.destination.next(s))
                    }
                }, e.prototype._complete = function() {
                    for (var e = this, n = e.buffers, r = e.destination; n.length > 0;) {
                        var i = n.shift();
                        i.length > 0 && r.next(i)
                    }
                    t.prototype._complete.call(this)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            var e = arguments.length,
                n = u.a;
            Object(l.a)(arguments[arguments.length - 1]) && (n = arguments[arguments.length - 1], e--);
            var r = null;
            e >= 2 && (r = arguments[1]);
            var i = Number.POSITIVE_INFINITY;
            return e >= 3 && (i = arguments[2]),
                function(e) {
                    return e.lift(new d(t, r, i, n))
                }
        }

        function i(t) {
            var e = t.subscriber,
                n = t.context;
            n && e.closeContext(n), e.closed || (t.context = e.openContext(), t.context.closeAction = this.schedule(t, t.bufferTimeSpan))
        }

        function o(t) {
            var e = t.bufferCreationInterval,
                n = t.bufferTimeSpan,
                r = t.subscriber,
                i = t.scheduler,
                o = r.openContext(),
                s = this;
            r.closed || (r.add(o.closeAction = i.schedule(a, n, {
                subscriber: r,
                context: o
            })), s.schedule(t, e))
        }

        function a(t) {
            var e = t.subscriber,
                n = t.context;
            e.closeContext(n)
        }
        e.a = r;
        var s = n(0),
            u = n(13),
            c = n(1),
            l = n(17),
            d = function() {
                function t(t, e, n, r) {
                    this.bufferTimeSpan = t, this.bufferCreationInterval = e, this.maxBufferSize = n, this.scheduler = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new p(t, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler))
                }, t
            }(),
            f = function() {
                function t() {
                    this.buffer = []
                }
                return t
            }(),
            p = function(t) {
                function e(e, n, r, s, u) {
                    var c = t.call(this, e) || this;
                    c.bufferTimeSpan = n, c.bufferCreationInterval = r, c.maxBufferSize = s, c.scheduler = u, c.contexts = [];
                    var l = c.openContext();
                    if (c.timespanOnly = null == r || 0 > r, c.timespanOnly) {
                        var d = {
                            subscriber: c,
                            context: l,
                            bufferTimeSpan: n
                        };
                        c.add(l.closeAction = u.schedule(i, n, d))
                    } else {
                        var f = {
                                subscriber: c,
                                context: l
                            },
                            p = {
                                bufferTimeSpan: n,
                                bufferCreationInterval: r,
                                subscriber: c,
                                scheduler: u
                            };
                        c.add(l.closeAction = u.schedule(a, n, f)), c.add(u.schedule(o, r, p))
                    }
                    return c
                }
                return s.a(e, t), e.prototype._next = function(t) {
                    for (var e, n = this.contexts, r = n.length, i = 0; r > i; i++) {
                        var o = n[i],
                            a = o.buffer;
                        a.push(t), a.length == this.maxBufferSize && (e = o)
                    }
                    e && this.onBufferFull(e)
                }, e.prototype._error = function(e) {
                    this.contexts.length = 0, t.prototype._error.call(this, e)
                }, e.prototype._complete = function() {
                    for (var e = this, n = e.contexts, r = e.destination; n.length > 0;) {
                        var i = n.shift();
                        r.next(i.buffer)
                    }
                    t.prototype._complete.call(this)
                }, e.prototype._unsubscribe = function() {
                    this.contexts = null
                }, e.prototype.onBufferFull = function(t) {
                    this.closeContext(t);
                    var e = t.closeAction;
                    if (e.unsubscribe(), this.remove(e), !this.closed && this.timespanOnly) {
                        t = this.openContext();
                        var n = this.bufferTimeSpan,
                            r = {
                                subscriber: this,
                                context: t,
                                bufferTimeSpan: n
                            };
                        this.add(t.closeAction = this.scheduler.schedule(i, n, r))
                    }
                }, e.prototype.openContext = function() {
                    var t = new f;
                    return this.contexts.push(t), t
                }, e.prototype.closeContext = function(t) {
                    this.destination.next(t.buffer);
                    var e = this.contexts,
                        n = e ? e.indexOf(t) : -1;
                    n >= 0 && e.splice(e.indexOf(t), 1)
                }, e
            }(c.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return n.lift(new u(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(9),
            a = n(4),
            s = n(3),
            u = function() {
                function t(t, e) {
                    this.openings = t, this.closingSelector = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.openings, this.closingSelector))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.openings = n, i.closingSelector = r, i.contexts = [], i.add(Object(a.a)(i, n)), i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    for (var e = this.contexts, n = e.length, r = 0; n > r; r++) e[r].buffer.push(t)
                }, e.prototype._error = function(e) {
                    for (var n = this.contexts; n.length > 0;) {
                        var r = n.shift();
                        r.subscription.unsubscribe(), r.buffer = null, r.subscription = null
                    }
                    this.contexts = null, t.prototype._error.call(this, e)
                }, e.prototype._complete = function() {
                    for (var e = this.contexts; e.length > 0;) {
                        var n = e.shift();
                        this.destination.next(n.buffer), n.subscription.unsubscribe(), n.buffer = null, n.subscription = null
                    }
                    this.contexts = null, t.prototype._complete.call(this)
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    t ? this.closeBuffer(t) : this.openBuffer(e)
                }, e.prototype.notifyComplete = function(t) {
                    this.closeBuffer(t.context)
                }, e.prototype.openBuffer = function(t) {
                    try {
                        var e = this.closingSelector,
                            n = e.call(this, t);
                        n && this.trySubscribe(n)
                    } catch (r) {
                        this._error(r)
                    }
                }, e.prototype.closeBuffer = function(t) {
                    var e = this.contexts;
                    if (e && t) {
                        var n = t.buffer,
                            r = t.subscription;
                        this.destination.next(n), e.splice(e.indexOf(t), 1), this.remove(r), r.unsubscribe()
                    }
                }, e.prototype.trySubscribe = function(t) {
                    var e = this.contexts,
                        n = [],
                        r = new o.a,
                        i = {
                            buffer: n,
                            subscription: r
                        };
                    e.push(i);
                    var s = Object(a.a)(this, t, i);
                    !s || s.closed ? this.closeBuffer(i) : (s.context = i, this.add(s), r.add(s))
                }, e
            }(s.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new u(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(9),
            a = n(3),
            s = n(4),
            u = function() {
                function t(t) {
                    this.closingSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.closingSelector))
                }, t
            }(),
            c = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.closingSelector = n, r.subscribing = !1, r.openBuffer(), r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.buffer.push(t)
                }, e.prototype._complete = function() {
                    var e = this.buffer;
                    e && this.destination.next(e), t.prototype._complete.call(this)
                }, e.prototype._unsubscribe = function() {
                    this.buffer = null, this.subscribing = !1
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.openBuffer()
                }, e.prototype.notifyComplete = function() {
                    this.subscribing ? this.complete() : this.openBuffer()
                }, e.prototype.openBuffer = function() {
                    var t = this.closingSubscription;
                    t && (this.remove(t), t.unsubscribe());
                    var e = this.buffer;
                    this.buffer && this.destination.next(e), this.buffer = [];
                    var n;
                    try {
                        var r = this.closingSelector;
                        n = r()
                    } catch (i) {
                        return this.error(i)
                    }
                    t = new o.a, this.closingSubscription = t, this.add(t), this.subscribing = !0, t.add(Object(s.a)(this, n)), this.subscribing = !1
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                var n = new u(t),
                    r = e.lift(n);
                return n.caught = r
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(21),
            s = n(4),
            u = function() {
                function t(t) {
                    this.selector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.selector, this.caught))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.selector = n, i.caught = r, i
                }
                return i.a(e, t), e.prototype.error = function(e) {
                    if (!this.isStopped) {
                        var n = void 0;
                        try {
                            n = this.selector(e, this.caught)
                        } catch (r) {
                            return void t.prototype.error.call(this, r)
                        }
                        this._unsubscribeAndRecycle();
                        var i = new a.a(this, void 0, void 0);
                        this.add(i);
                        var o = Object(s.a)(this, n, void 0, void 0, i);
                        o !== i && this.add(o)
                    }
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new i.a(t))
            }
        }
        e.a = r;
        var i = n(115)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = null;
            return "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && Object(i.a)(t[0]) && (t = t[0].slice()),
                function(e) {
                    return e.lift.call(Object(a.a)([e].concat(t)), new o.a(n))
                }
        }
        e.a = r;
        var i = n(12),
            o = n(115),
            a = n(18)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function(e) {
                return e.lift.call(i.a.apply(void 0, [e].concat(t)))
            }
        }
        e.a = r;
        var i = n(50)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return Object(i.a)(function() {
                return t
            }, e)
        }
        e.a = r;
        var i = n(146)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new a(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e) {
                    this.predicate = t, this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.predicate, this.source))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.predicate = n, i.source = r, i.count = 0, i.index = 0, i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.predicate ? this._tryPredicate(t) : this.count++
                }, e.prototype._tryPredicate = function(t) {
                    var e;
                    try {
                        e = this.predicate(t, this.index++, this.source)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    e && this.count++
                }, e.prototype._complete = function() {
                    this.destination.next(this.count), this.destination.complete()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new s(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = function() {
                function t(t) {
                    this.durationSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.durationSelector))
                }, t
            }(),
            u = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.durationSelector = n, r.hasValue = !1, r.durationSubscription = null, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    try {
                        var e = this.durationSelector.call(this, t);
                        e && this._tryNext(t, e)
                    } catch (n) {
                        this.destination.error(n)
                    }
                }, e.prototype._complete = function() {
                    this.emitValue(), this.destination.complete()
                }, e.prototype._tryNext = function(t, e) {
                    var n = this.durationSubscription;
                    this.value = t, this.hasValue = !0, n && (n.unsubscribe(), this.remove(n)), n = Object(a.a)(this, e), n && !n.closed && this.add(this.durationSubscription = n)
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.emitValue()
                }, e.prototype.notifyComplete = function() {
                    this.emitValue()
                }, e.prototype.emitValue = function() {
                    if (this.hasValue) {
                        var e = this.value,
                            n = this.durationSubscription;
                        n && (this.durationSubscription = null, n.unsubscribe(), this.remove(n)), this.value = null, this.hasValue = !1, t.prototype._next.call(this, e)
                    }
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = s.a),
                function(n) {
                    return n.lift(new u(t, e))
                }
        }

        function i(t) {
            t.debouncedNext()
        }
        e.a = r;
        var o = n(0),
            a = n(1),
            s = n(13),
            u = function() {
                function t(t, e) {
                    this.dueTime = t, this.scheduler = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.dueTime, this.scheduler))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.dueTime = n, i.scheduler = r, i.debouncedSubscription = null, i.lastValue = null, i.hasValue = !1, i
                }
                return o.a(e, t), e.prototype._next = function(t) {
                    this.clearDebounce(), this.lastValue = t, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(i, this.dueTime, this))
                }, e.prototype._complete = function() {
                    this.debouncedNext(), this.destination.complete()
                }, e.prototype.debouncedNext = function() {
                    if (this.clearDebounce(), this.hasValue) {
                        var t = this.lastValue;
                        this.lastValue = null, this.hasValue = !1, this.destination.next(t)
                    }
                }, e.prototype.clearDebounce = function() {
                    var t = this.debouncedSubscription;
                    null !== t && (this.remove(t), t.unsubscribe(), this.debouncedSubscription = null)
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            void 0 === e && (e = o.a);
            var n = Object(a.a)(t),
                r = n ? +t - e.now() : Math.abs(t);
            return function(t) {
                return t.lift(new c(r, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(13),
            a = n(147),
            s = n(1),
            u = n(47),
            c = function() {
                function t(t, e) {
                    this.delay = t, this.scheduler = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new l(t, this.delay, this.scheduler))
                }, t
            }(),
            l = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.delay = n, i.scheduler = r, i.queue = [], i.active = !1, i.errored = !1, i
                }
                return i.a(e, t), e.dispatch = function(t) {
                    for (var e = t.source, n = e.queue, r = t.scheduler, i = t.destination; n.length > 0 && n[0].time - r.now() <= 0;) n.shift().notification.observe(i);
                    if (n.length > 0) {
                        var o = Math.max(0, n[0].time - r.now());
                        this.schedule(t, o)
                    } else this.unsubscribe(), e.active = !1
                }, e.prototype._schedule = function(t) {
                    this.active = !0;
                    var n = this.destination;
                    n.add(t.schedule(e.dispatch, this.delay, {
                        source: this,
                        destination: this.destination,
                        scheduler: t
                    }))
                }, e.prototype.scheduleNotification = function(t) {
                    if (this.errored !== !0) {
                        var e = this.scheduler,
                            n = new d(e.now() + this.delay, t);
                        this.queue.push(n), this.active === !1 && this._schedule(e)
                    }
                }, e.prototype._next = function(t) {
                    this.scheduleNotification(u.a.createNext(t))
                }, e.prototype._error = function(t) {
                    this.errored = !0, this.queue = [], this.destination.error(t), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.scheduleNotification(u.a.createComplete()), this.unsubscribe()
                }, e
            }(s.a),
            d = function() {
                function t(t, e) {
                    this.time = t, this.notification = e
                }
                return t
            }()
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return e ? function(n) {
                return new d(n, e).lift(new c(t))
            } : function(e) {
                return e.lift(new c(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(2),
            s = n(3),
            u = n(4),
            c = function() {
                function t(t) {
                    this.delayDurationSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new l(t, this.delayDurationSelector))
                }, t
            }(),
            l = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.delayDurationSelector = n, r.completed = !1, r.delayNotifierSubscriptions = [], r.index = 0, r
                }
                return i.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(t), this.removeSubscription(i), this.tryComplete()
                }, e.prototype.notifyError = function(t, e) {
                    this._error(t)
                }, e.prototype.notifyComplete = function(t) {
                    var e = this.removeSubscription(t);
                    e && this.destination.next(e), this.tryComplete()
                }, e.prototype._next = function(t) {
                    var e = this.index++;
                    try {
                        var n = this.delayDurationSelector(t, e);
                        n && this.tryDelay(n, t)
                    } catch (r) {
                        this.destination.error(r)
                    }
                }, e.prototype._complete = function() {
                    this.completed = !0, this.tryComplete(), this.unsubscribe()
                }, e.prototype.removeSubscription = function(t) {
                    t.unsubscribe();
                    var e = this.delayNotifierSubscriptions.indexOf(t);
                    return -1 !== e && this.delayNotifierSubscriptions.splice(e, 1), t.outerValue
                }, e.prototype.tryDelay = function(t, e) {
                    var n = Object(u.a)(this, t, e);
                    if (n && !n.closed) {
                        var r = this.destination;
                        r.add(n), this.delayNotifierSubscriptions.push(n)
                    }
                }, e.prototype.tryComplete = function() {
                    this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete()
                }, e
            }(s.a),
            d = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.source = e, r.subscriptionDelay = n, r
                }
                return i.a(e, t), e.prototype._subscribe = function(t) {
                    this.subscriptionDelay.subscribe(new f(t, this.source))
                }, e
            }(a.a),
            f = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r.parent = e, r.source = n, r.sourceSubscribed = !1, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.subscribeToSource()
                }, e.prototype._error = function(t) {
                    this.unsubscribe(), this.parent.error(t)
                }, e.prototype._complete = function() {
                    this.unsubscribe(), this.subscribeToSource()
                }, e.prototype.subscribeToSource = function() {
                    this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent))
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return function(t) {
                return t.lift(new a)
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t))
                }, t
            }(),
            s = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    t.observe(this.destination)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return n.lift(new s(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = function() {
                function t(t, e) {
                    this.keySelector = t, this.flushes = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.keySelector, this.flushes))
                }, t
            }(),
            u = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.keySelector = n, i.values = new Set, r && i.add(Object(a.a)(i, r)), i
                }
                return i.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.values.clear()
                }, e.prototype.notifyError = function(t, e) {
                    this._error(t)
                }, e.prototype._next = function(t) {
                    this.keySelector ? this._useKeySelector(t) : this._finalizeNext(t, t)
                }, e.prototype._useKeySelector = function(t) {
                    var e, n = this.destination;
                    try {
                        e = this.keySelector(t)
                    } catch (r) {
                        return void n.error(r)
                    }
                    this._finalizeNext(e, t)
                }, e.prototype._finalizeNext = function(t, e) {
                    var n = this.values;
                    n.has(t) || (n.add(t), this.destination.next(e))
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return Object(i.a)(function(n, r) {
                return e ? e(n[t], r[t]) : n[t] === r[t]
            })
        }
        e.a = r;
        var i = n(148)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (0 > t) throw new i.a;
            var n = arguments.length >= 2;
            return function(r) {
                return r.pipe(Object(o.a)(function(e, n) {
                    return n === t
                }), Object(u.a)(1), n ? Object(s.a)(e) : Object(a.a)(function() {
                    return new i.a
                }))
            }
        }
        e.a = r;
        var i = n(38),
            o = n(27),
            a = n(52),
            s = n(42),
            u = n(120)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function(e) {
                return Object(i.a)(e, o.a.apply(void 0, t))
            }
        }
        e.a = r;
        var i = n(50),
            o = n(48)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return n.lift(new a(t, e, n))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e, n) {
                    this.predicate = t, this.thisArg = e, this.source = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.predicate, this.thisArg, this.source))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.predicate = n, o.thisArg = r, o.source = i, o.index = 0, o.thisArg = r || o, o
                }
                return i.a(e, t), e.prototype.notifyComplete = function(t) {
                    this.destination.next(t), this.destination.complete()
                }, e.prototype._next = function(t) {
                    var e = !1;
                    try {
                        e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    e || this.notifyComplete(!1)
                }, e.prototype._complete = function() {
                    this.notifyComplete(!0)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return function(t) {
                return t.lift(new s)
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t))
                }, t
            }(),
            u = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.hasCompleted = !1, n.hasSubscription = !1, n
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.hasSubscription || (this.hasSubscription = !0, this.add(Object(a.a)(this, t)))
                }, e.prototype._complete = function() {
                    this.hasCompleted = !0, this.hasSubscription || this.destination.complete()
                }, e.prototype.notifyComplete = function(t) {
                    this.remove(t), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return e ? function(n) {
                return n.pipe(r(function(n, r) {
                    return Object(c.a)(t(n, r)).pipe(Object(u.a)(function(t, i) {
                        return e(n, t, r, i)
                    }))
                }))
            } : function(e) {
                return e.lift(new l(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(21),
            s = n(4),
            u = n(14),
            c = n(18),
            l = function() {
                function t(t) {
                    this.project = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new d(t, this.project))
                }, t
            }(),
            d = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.project = n, r.hasSubscription = !1, r.hasCompleted = !1, r.index = 0, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.hasSubscription || this.tryNext(t)
                }, e.prototype.tryNext = function(t) {
                    var e, n = this.index++;
                    try {
                        e = this.project(t, n)
                    } catch (r) {
                        return void this.destination.error(r)
                    }
                    this.hasSubscription = !0, this._innerSub(e, t, n)
                }, e.prototype._innerSub = function(t, e, n) {
                    var r = new a.a(this, e, n),
                        i = this.destination;
                    i.add(r);
                    var o = Object(s.a)(this, t, void 0, void 0, r);
                    o !== r && i.add(o)
                }, e.prototype._complete = function() {
                    this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe()
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.destination.next(e)
                }, e.prototype.notifyError = function(t) {
                    this.destination.error(t)
                }, e.prototype.notifyComplete = function(t) {
                    var e = this.destination;
                    e.remove(t), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === n && (n = void 0), e = 1 > (e || 0) ? Number.POSITIVE_INFINITY : e,
                function(r) {
                    return r.lift(new s(t, e, n))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = function() {
                function t(t, e, n) {
                    this.project = t, this.concurrent = e, this.scheduler = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.project, this.concurrent, this.scheduler))
                }, t
            }(),
            u = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.project = n, o.concurrent = r, o.scheduler = i, o.index = 0, o.active = 0, o.hasCompleted = !1, r < Number.POSITIVE_INFINITY && (o.buffer = []), o
                }
                return i.a(e, t), e.dispatch = function(t) {
                    var e = t.subscriber,
                        n = t.result,
                        r = t.value,
                        i = t.index;
                    e.subscribeToProjection(n, r, i)
                }, e.prototype._next = function(t) {
                    var n = this.destination;
                    if (n.closed) return void this._complete();
                    var r = this.index++;
                    if (this.active < this.concurrent) {
                        n.next(t);
                        try {
                            var i = this.project,
                                o = i(t, r);
                            if (this.scheduler) {
                                var a = {
                                        subscriber: this,
                                        result: o,
                                        value: t,
                                        index: r
                                    },
                                    s = this.destination;
                                s.add(this.scheduler.schedule(e.dispatch, 0, a))
                            } else this.subscribeToProjection(o, t, r)
                        } catch (u) {
                            n.error(u)
                        }
                    } else this.buffer.push(t)
                }, e.prototype.subscribeToProjection = function(t, e, n) {
                    this.active++;
                    var r = this.destination;
                    r.add(Object(a.a)(this, t, e, n))
                }, e.prototype._complete = function() {
                    this.hasCompleted = !0, this.hasCompleted && 0 === this.active && this.destination.complete(), this.unsubscribe()
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this._next(e)
                }, e.prototype.notifyComplete = function(t) {
                    var e = this.buffer,
                        n = this.destination;
                    n.remove(t), this.active--, e && e.length > 0 && this._next(e.shift()), this.hasCompleted && 0 === this.active && this.destination.complete()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new s(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(9),
            s = function() {
                function t(t) {
                    this.callback = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.callback))
                }, t
            }(),
            u = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.add(new a.a(n)), r
                }
                return i.a(e, t), e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return n.lift(new i.a(t, n, !0, e))
            }
        }
        e.a = r;
        var i = n(149)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = arguments.length >= 2;
            return function(r) {
                return r.pipe(t ? Object(o.a)(function(e, n) {
                    return t(e, n, r)
                }) : c.a, Object(a.a)(1), n ? Object(s.a)(e) : Object(u.a)(function() {
                    return new i.a
                }))
            }
        }
        e.a = r;
        var i = n(39),
            o = n(27),
            a = n(120),
            s = n(42),
            u = n(52),
            c = n(26)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return function(t) {
                return t.lift(new a)
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t))
                }, t
            }(),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i.a(e, t), e.prototype._next = function(t) {}, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return function(t) {
                return t.lift(new a)
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t))
                }, t
            }(),
            s = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return i.a(e, t), e.prototype.notifyComplete = function(t) {
                    var e = this.destination;
                    e.next(t), e.complete()
                }, e.prototype._next = function(t) {
                    this.notifyComplete(!1)
                }, e.prototype._complete = function() {
                    this.notifyComplete(!0)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = arguments.length >= 2;
            return function(r) {
                return r.pipe(t ? Object(o.a)(function(e, n) {
                    return t(e, n, r)
                }) : c.a, Object(a.a)(1), n ? Object(u.a)(e) : Object(s.a)(function() {
                    return new i.a
                }))
            }
        }
        e.a = r;
        var i = n(39),
            o = n(27),
            a = n(121),
            s = n(52),
            u = n(42),
            c = n(26)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new a(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t) {
                    this.value = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.value))
                }, t
            }(),
            s = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.value = n, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.destination.next(this.value)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return function(t) {
                return t.lift(new s)
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(47),
            s = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t))
                }, t
            }(),
            u = function(t) {
                function e(e) {
                    return t.call(this, e) || this
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.destination.next(a.a.createNext(t))
                }, e.prototype._error = function(t) {
                    var e = this.destination;
                    e.next(a.a.createError(t)), e.complete()
                }, e.prototype._complete = function() {
                    var t = this.destination;
                    t.next(a.a.createComplete()), t.complete()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            var e = "function" == typeof t ? function(e, n) {
                return t(e, n) > 0 ? e : n
            } : function(t, e) {
                return t > e ? t : e
            };
            return Object(i.a)(e)
        }
        e.a = r;
        var i = n(53)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function(e) {
                return e.lift.call(i.a.apply(void 0, [e].concat(t)))
            }
        }
        e.a = r;
        var i = n(140)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? Object(i.a)(function() {
                return t
            }, e, n) : ("number" == typeof e && (n = e), Object(i.a)(function() {
                return t
            }, n))
        }
        e.a = r;
        var i = n(41)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return void 0 === n && (n = Number.POSITIVE_INFINITY),
                function(r) {
                    return r.lift(new u(t, e, n))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(4),
            a = n(3),
            s = n(21),
            u = function() {
                function t(t, e, n) {
                    this.accumulator = t, this.seed = e, this.concurrent = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.accumulator, this.seed, this.concurrent))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o.accumulator = n, o.acc = r, o.concurrent = i, o.hasValue = !1, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    if (this.active < this.concurrent) {
                        var e = this.index++,
                            n = this.destination,
                            r = void 0;
                        try {
                            var i = this.accumulator;
                            r = i(this.acc, t, e)
                        } catch (o) {
                            return n.error(o)
                        }
                        this.active++, this._innerSub(r, t, e)
                    } else this.buffer.push(t)
                }, e.prototype._innerSub = function(t, e, n) {
                    var r = new s.a(this, e, n),
                        i = this.destination;
                    i.add(r);
                    var a = Object(o.a)(this, t, void 0, void 0, r);
                    a !== r && i.add(a)
                }, e.prototype._complete = function() {
                    this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete()), this.unsubscribe()
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    var o = this.destination;
                    this.acc = e, this.hasValue = !0, o.next(e)
                }, e.prototype.notifyComplete = function(t) {
                    var e = this.buffer,
                        n = this.destination;
                    n.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete())
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            var e = "function" == typeof t ? function(e, n) {
                return t(e, n) < 0 ? e : n
            } : function(t, e) {
                return e > t ? t : e
            };
            return Object(i.a)(e)
        }
        e.a = r;
        var i = n(53)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return 1 === t.length && Object(o.a)(t[0]) && (t = t[0]),
                function(e) {
                    return e.lift(new c(t))
                }
        }
        e.a = r;
        var i = n(0),
            o = (n(18), n(12)),
            a = n(3),
            s = n(21),
            u = n(4),
            c = function() {
                function t(t) {
                    this.nextSources = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new l(t, this.nextSources))
                }, t
            }(),
            l = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.destination = e, r.nextSources = n, r
                }
                return i.a(e, t), e.prototype.notifyError = function(t, e) {
                    this.subscribeToNextSource()
                }, e.prototype.notifyComplete = function(t) {
                    this.subscribeToNextSource()
                }, e.prototype._error = function(t) {
                    this.subscribeToNextSource(), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.subscribeToNextSource(), this.unsubscribe()
                }, e.prototype.subscribeToNextSource = function() {
                    var t = this.nextSources.shift();
                    if (t) {
                        var e = new s.a(this, void 0, void 0),
                            n = this.destination;
                        n.add(e);
                        var r = Object(u.a)(this, t, void 0, void 0, e);
                        r !== e && n.add(r)
                    } else this.destination.complete()
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return function(t) {
                return t.lift(new a)
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t() {}
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t))
                }, t
            }(),
            s = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.hasPrev = !1, n
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e;
                    this.hasPrev ? e = [this.prev, t] : this.hasPrev = !0, this.prev = t, e && this.destination.next(e)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return [Object(o.a)(t, e)(n), Object(o.a)(Object(i.a)(t, e))(n)]
            }
        }
        e.a = r;
        var i = n(142),
            o = n(27)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = t.length;
            if (0 === n) throw new Error("list of properties cannot be empty.");
            return function(e) {
                return Object(o.a)(i(t, n))(e)
            }
        }

        function i(t, e) {
            var n = function(n) {
                for (var r = n, i = 0; e > i; i++) {
                    var o = r[t[i]];
                    if ("undefined" == typeof o) return void 0;
                    r = o
                }
                return r
            };
            return n
        }
        e.a = r;
        var o = n(14)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return t ? Object(o.a)(function() {
                return new i.a
            }, t) : Object(o.a)(new i.a)
        }
        e.a = r;
        var i = n(11),
            o = n(28)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return Object(o.a)(new i.a(t))(e)
            }
        }
        e.a = r;
        var i = n(129),
            o = n(28)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return function(t) {
                return Object(o.a)(new i.a)(t)
            }
        }
        e.a = r;
        var i = n(49),
            o = n(28)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            n && "function" != typeof n && (r = n);
            var a = "function" == typeof n ? n : void 0,
                s = new i.a(t, e, r);
            return function(t) {
                return Object(o.a)(function() {
                    return s
                }, a)(t)
            }
        }
        e.a = r;
        var i = n(112),
            o = n(28)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function(e) {
                return 1 === t.length && Object(i.a)(t[0]) && (t = t[0]), e.lift.call(o.a.apply(void 0, [e].concat(t)))
            }
        }
        e.a = r;
        var i = n(12),
            o = n(143)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return void 0 === t && (t = -1),
                function(e) {
                    return 0 === t ? Object(a.b)() : 0 > t ? e.lift(new s(-1, e)) : e.lift(new s(t - 1, e))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(16),
            s = function() {
                function t(t, e) {
                    this.count = t, this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.count, this.source))
                }, t
            }(),
            u = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.count = n, i.source = r, i
                }
                return i.a(e, t), e.prototype.complete = function() {
                    if (!this.isStopped) {
                        var e = this,
                            n = e.source,
                            r = e.count;
                        if (0 === r) return t.prototype.complete.call(this);
                        r > -1 && (this.count = r - 1), n.subscribe(this._unsubscribeAndRecycle())
                    }
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new u(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(11),
            a = n(3),
            s = n(4),
            u = function() {
                function t(t) {
                    this.notifier = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.notifier, e))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.notifier = n, i.source = r, i.sourceIsBeingSubscribedTo = !0, i
                }
                return i.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this)
                }, e.prototype.notifyComplete = function(e) {
                    return this.sourceIsBeingSubscribedTo === !1 ? t.prototype.complete.call(this) : void 0
                }, e.prototype.complete = function() {
                    if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
                        if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed) return t.prototype.complete.call(this);
                        this._unsubscribeAndRecycle(), this.notifications.next()
                    }
                }, e.prototype._unsubscribe = function() {
                    var t = this,
                        e = t.notifications,
                        n = t.retriesSubscription;
                    e && (e.unsubscribe(), this.notifications = null), n && (n.unsubscribe(), this.retriesSubscription = null), this.retries = null
                }, e.prototype._unsubscribeAndRecycle = function() {
                    var e = this._unsubscribe;
                    return this._unsubscribe = null, t.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = e, this
                }, e.prototype.subscribeToRetries = function() {
                    this.notifications = new o.a;
                    var e;
                    try {
                        var n = this.notifier;
                        e = n(this.notifications)
                    } catch (r) {
                        return t.prototype.complete.call(this)
                    }
                    this.retries = e, this.retriesSubscription = Object(s.a)(this, e)
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return void 0 === t && (t = -1),
                function(e) {
                    return e.lift(new a(t, e))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e) {
                    this.count = t, this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.count, this.source))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.count = n, i.source = r, i
                }
                return i.a(e, t), e.prototype.error = function(e) {
                    if (!this.isStopped) {
                        var n = this,
                            r = n.source,
                            i = n.count;
                        if (0 === i) return t.prototype.error.call(this, e);
                        i > -1 && (this.count = i - 1), r.subscribe(this._unsubscribeAndRecycle())
                    }
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new u(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(11),
            a = n(3),
            s = n(4),
            u = function() {
                function t(t, e) {
                    this.notifier = t, this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.notifier, this.source))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.notifier = n, i.source = r, i
                }
                return i.a(e, t), e.prototype.error = function(e) {
                    if (!this.isStopped) {
                        var n = this.errors,
                            r = this.retries,
                            i = this.retriesSubscription;
                        if (r) this.errors = null, this.retriesSubscription = null;
                        else {
                            n = new o.a;
                            try {
                                var a = this.notifier;
                                r = a(n)
                            } catch (u) {
                                return t.prototype.error.call(this, u)
                            }
                            i = Object(s.a)(this, r)
                        }
                        this._unsubscribeAndRecycle(), this.errors = n, this.retries = r, this.retriesSubscription = i, n.next(e)
                    }
                }, e.prototype._unsubscribe = function() {
                    var t = this,
                        e = t.errors,
                        n = t.retriesSubscription;
                    e && (e.unsubscribe(), this.errors = null), n && (n.unsubscribe(), this.retriesSubscription = null), this.retries = null
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    var o = this._unsubscribe;
                    this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = o, this.source.subscribe(this)
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new s(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = function() {
                function t(t) {
                    this.notifier = t
                }
                return t.prototype.call = function(t, e) {
                    var n = new u(t),
                        r = e.subscribe(n);
                    return r.add(Object(a.a)(n, this.notifier)), r
                }, t
            }(),
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.hasValue = !1, e
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.value = t, this.hasValue = !0
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.emitValue()
                }, e.prototype.notifyComplete = function() {
                    this.emitValue()
                }, e.prototype.emitValue = function() {
                    this.hasValue && (this.hasValue = !1, this.destination.next(this.value))
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = s.a),
                function(n) {
                    return n.lift(new u(t, e))
                }
        }

        function i(t) {
            var e = t.subscriber,
                n = t.period;
            e.notifyNext(), this.schedule(t, n)
        }
        e.a = r;
        var o = n(0),
            a = n(1),
            s = n(13),
            u = function() {
                function t(t, e) {
                    this.period = t, this.scheduler = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.period, this.scheduler))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r) {
                    var o = t.call(this, e) || this;
                    return o.period = n, o.scheduler = r, o.hasValue = !1, o.add(r.schedule(i, n, {
                        subscriber: o,
                        period: n
                    })), o
                }
                return o.a(e, t), e.prototype._next = function(t) {
                    this.lastValue = t, this.hasValue = !0
                }, e.prototype.notifyNext = function() {
                    this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue))
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return n.lift(new a(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e) {
                    this.compareTo = t, this.comparator = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.compareTo, this.comparator))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.compareTo = n, i.comparator = r, i._a = [], i._b = [], i._oneComplete = !1, i.destination.add(n.subscribe(new u(e, i))), i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this._oneComplete && 0 === this._b.length ? this.emit(!1) : (this._a.push(t), this.checkValues())
                }, e.prototype._complete = function() {
                    this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0, this.unsubscribe()
                }, e.prototype.checkValues = function() {
                    for (var t = this, e = t._a, n = t._b, r = t.comparator; e.length > 0 && n.length > 0;) {
                        var i = e.shift(),
                            o = n.shift(),
                            a = !1;
                        try {
                            a = r ? r(i, o) : i === o
                        } catch (s) {
                            this.destination.error(s)
                        }
                        a || this.emit(!1)
                    }
                }, e.prototype.emit = function(t) {
                    var e = this.destination;
                    e.next(t), e.complete()
                }, e.prototype.nextB = function(t) {
                    this._oneComplete && 0 === this._a.length ? this.emit(!1) : (this._b.push(t), this.checkValues())
                }, e.prototype.completeB = function() {
                    this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0
                }, e
            }(o.a),
            u = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.parent = n, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    this.parent.nextB(t)
                }, e.prototype._error = function(t) {
                    this.parent.error(t), this.unsubscribe()
                }, e.prototype._complete = function() {
                    this.parent.completeB(), this.unsubscribe()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return new s.a
        }

        function i() {
            return function(t) {
                return Object(a.a)()(Object(o.a)(r)(t))
            }
        }
        e.a = i;
        var o = n(28),
            a = n(111),
            s = n(11)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            var r;
            return r = t && "object" == typeof t ? t : {
                    bufferSize: t,
                    windowTime: e,
                    refCount: !1,
                    scheduler: n
                },
                function(t) {
                    return t.lift(i(r))
                }
        }

        function i(t) {
            var e, n, r = t.bufferSize,
                i = void 0 === r ? Number.POSITIVE_INFINITY : r,
                a = t.windowTime,
                s = void 0 === a ? Number.POSITIVE_INFINITY : a,
                u = t.refCount,
                c = t.scheduler,
                l = 0,
                d = !1,
                f = !1;
            return function(t) {
                l++, (!e || d) && (d = !1, e = new o.a(i, s, c), n = t.subscribe({
                    next: function(t) {
                        e.next(t)
                    },
                    error: function(t) {
                        d = !0, e.error(t)
                    },
                    complete: function() {
                        f = !0, n = void 0, e.complete()
                    }
                }));
                var r = e.subscribe(this);
                this.add(function() {
                    l--, r.unsubscribe(), n && !f && u && 0 === l && (n.unsubscribe(), n = void 0, e = void 0)
                })
            }
        }
        e.a = r;
        var o = n(112)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new s(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(39),
            s = function() {
                function t(t, e) {
                    this.predicate = t, this.source = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.predicate, this.source))
                }, t
            }(),
            u = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.predicate = n, i.source = r, i.seenValue = !1, i.index = 0, i
                }
                return i.a(e, t), e.prototype.applySingleValue = function(t) {
                    this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = t)
                }, e.prototype._next = function(t) {
                    var e = this.index++;
                    this.predicate ? this.tryNext(t, e) : this.applySingleValue(t)
                }, e.prototype.tryNext = function(t, e) {
                    try {
                        this.predicate(t, e, this.source) && this.applySingleValue(t)
                    } catch (n) {
                        this.destination.error(n)
                    }
                }, e.prototype._complete = function() {
                    var t = this.destination;
                    this.index > 0 ? (t.next(this.seenValue ? this.singleValue : void 0), t.complete()) : t.error(new a.a)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new a(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t) {
                    this.total = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.total))
                }, t
            }(),
            s = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.total = n, r.count = 0, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    ++this.count > this.total && this.destination.next(t)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new s(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(38),
            s = function() {
                function t(t) {
                    if (this._skipCount = t, this._skipCount < 0) throw new a.a
                }
                return t.prototype.call = function(t, e) {
                    return 0 === this._skipCount ? e.subscribe(new o.a(t)) : e.subscribe(new u(t, this._skipCount))
                }, t
            }(),
            u = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r._skipCount = n, r._count = 0, r._ring = new Array(n), r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e = this._skipCount,
                        n = this._count++;
                    if (e > n) this._ring[n] = t;
                    else {
                        var r = n % e,
                            i = this._ring,
                            o = i[r];
                        i[r] = t, this.destination.next(o)
                    }
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new u(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(21),
            s = n(4),
            u = function() {
                function t(t) {
                    this.notifier = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.notifier))
                }, t
            }(),
            c = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    r.hasValue = !1;
                    var i = new a.a(r, void 0, void 0);
                    r.add(i), r.innerSubscription = i;
                    var o = Object(s.a)(r, n, void 0, void 0, i);
                    return o !== i && (r.add(o), r.innerSubscription = o), r
                }
                return i.a(e, t), e.prototype._next = function(e) {
                    this.hasValue && t.prototype._next.call(this, e)
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe()
                }, e.prototype.notifyComplete = function() {}, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new a(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t) {
                    this.predicate = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.predicate))
                }, t
            }(),
            s = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.predicate = n, r.skipping = !0, r.index = 0, r
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e = this.destination;
                    this.skipping && this.tryCallPredicate(t), this.skipping || e.next(t)
                }, e.prototype.tryCallPredicate = function(t) {
                    try {
                        var e = this.predicate(t, this.index++);
                        this.skipping = Boolean(e)
                    } catch (n) {
                        this.destination.error(n)
                    }
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            var n = t[t.length - 1];
            return Object(o.a)(n) ? (t.pop(), function(e) {
                return Object(i.a)(t, e, n)
            }) : function(e) {
                return Object(i.a)(t, e)
            }
        }
        e.a = r;
        var i = n(50),
            o = n(17)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = 0),
                function(n) {
                    return n.lift(new o(t, e))
                }
        }
        e.a = r;
        var i = n(301),
            o = function() {
                function t(t, e) {
                    this.scheduler = t, this.delay = e
                }
                return t.prototype.call = function(t, e) {
                    return new i.a(e, this.delay, this.scheduler).subscribe(t)
                }, t
            }()
    },
    function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return s
        });
        var r = n(0),
            i = n(2),
            o = n(134),
            a = n(51),
            s = function(t) {
                function e(e, n, r) {
                    void 0 === n && (n = 0), void 0 === r && (r = o.a);
                    var i = t.call(this) || this;
                    return i.source = e, i.delayTime = n, i.scheduler = r, (!Object(a.a)(n) || 0 > n) && (i.delayTime = 0), r && "function" == typeof r.schedule || (i.scheduler = o.a), i
                }
                return r.a(e, t), e.create = function(t, n, r) {
                    return void 0 === n && (n = 0), void 0 === r && (r = o.a), new e(t, n, r)
                }, e.dispatch = function(t) {
                    var e = t.source,
                        n = t.subscriber;
                    return this.add(e.subscribe(n))
                }, e.prototype._subscribe = function(t) {
                    var n = this.delayTime,
                        r = this.source,
                        i = this.scheduler;
                    return i.schedule(e.dispatch, n, {
                        source: r,
                        subscriber: t
                    })
                }, e
            }(i.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            return Object(i.a)(o.a)
        }
        e.a = r;
        var i = n(123),
            o = n(26)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return e ? Object(i.a)(function() {
                return t
            }, e) : Object(i.a)(function() {
                return t
            })
        }
        e.a = r;
        var i = n(123)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new s(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = function() {
                function t(t) {
                    this.notifier = t
                }
                return t.prototype.call = function(t, e) {
                    var n = new u(t),
                        r = Object(a.a)(n, this.notifier);
                    return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n
                }, t
            }(),
            u = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.seenValue = !1, n
                }
                return i.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.seenValue = !0, this.complete()
                }, e.prototype.notifyComplete = function() {}, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = !1),
                function(n) {
                    return n.lift(new a(t, e))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = function() {
                function t(t, e) {
                    this.predicate = t, this.inclusive = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new s(t, this.predicate, this.inclusive))
                }, t
            }(),
            s = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.predicate = n, i.inclusive = r, i.index = 0, i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e, n = this.destination;
                    try {
                        e = this.predicate(t, this.index++)
                    } catch (r) {
                        return void n.error(r)
                    }
                    this.nextOrComplete(t, e)
                }, e.prototype.nextOrComplete = function(t, e) {
                    var n = this.destination;
                    Boolean(e) ? n.next(t) : (this.inclusive && n.next(t), n.complete())
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return function(r) {
                return r.lift(new u(t, e, n))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(45),
            s = n(34),
            u = function() {
                function t(t, e, n) {
                    this.nextOrObserver = t, this.error = e, this.complete = n
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.nextOrObserver, this.error, this.complete))
                }, t
            }(),
            c = function(t) {
                function e(e, n, r, i) {
                    var o = t.call(this, e) || this;
                    return o._tapNext = a.a, o._tapError = a.a, o._tapComplete = a.a, o._tapError = r || a.a, o._tapComplete = i || a.a, Object(s.a)(n) ? (o._context = o, o._tapNext = n) : n && (o._context = n, o._tapNext = n.next || a.a, o._tapError = n.error || a.a, o._tapComplete = n.complete || a.a), o
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    try {
                        this._tapNext.call(this._context, t)
                    } catch (e) {
                        return void this.destination.error(e)
                    }
                    this.destination.next(t)
                }, e.prototype._error = function(t) {
                    try {
                        this._tapError.call(this._context, t)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    this.destination.error(t)
                }, e.prototype._complete = function() {
                    try {
                        this._tapComplete.call(this._context)
                    } catch (t) {
                        return void this.destination.error(t)
                    }
                    return this.destination.complete()
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return void 0 === e && (e = s.a), void 0 === n && (n = u.a),
                function(r) {
                    return r.lift(new c(t, e, n.leading, n.trailing))
                }
        }

        function i(t) {
            var e = t.subscriber;
            e.clearThrottle()
        }
        e.a = r;
        var o = n(0),
            a = n(1),
            s = n(13),
            u = n(150),
            c = function() {
                function t(t, e, n, r) {
                    this.duration = t, this.scheduler = e, this.leading = n, this.trailing = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new l(t, this.duration, this.scheduler, this.leading, this.trailing))
                }, t
            }(),
            l = function(t) {
                function e(e, n, r, i, o) {
                    var a = t.call(this, e) || this;
                    return a.duration = n, a.scheduler = r, a.leading = i, a.trailing = o, a._hasTrailingValue = !1, a._trailingValue = null, a
                }
                return o.a(e, t), e.prototype._next = function(t) {
                    this.throttled ? this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(i, this.duration, {
                        subscriber: this
                    })), this.leading ? this.destination.next(t) : this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0))
                }, e.prototype._complete = function() {
                    this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete()
                }, e.prototype.clearThrottle = function() {
                    var t = this.throttled;
                    t && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), t.unsubscribe(), this.remove(t), this.throttled = null)
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return void 0 === t && (t = i.a),
                function(e) {
                    return Object(a.a)(function() {
                        return e.pipe(Object(o.a)(function(e, n) {
                            var r = e.current;
                            return {
                                value: n,
                                current: t.now(),
                                last: r
                            }
                        }, {
                            current: t.now(),
                            value: void 0,
                            last: void 0
                        }), Object(s.a)(function(t) {
                            var e = t.current,
                                n = t.last,
                                r = t.value;
                            return new u(r, e - n)
                        }))
                    })
                }
        }
        e.a = r;
        var i = n(13),
            o = n(122),
            a = n(118),
            s = n(14),
            u = function() {
                function t(t, e) {
                    this.value = t, this.interval = e
                }
                return t
            }()
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = i.a), Object(a.a)(t, Object(s.a)(new o.a), e)
        }
        e.a = r;
        var i = n(13),
            o = n(135),
            a = n(151),
            s = n(114)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return void 0 === t && (t = i.a), Object(o.a)(function(e) {
                return new a(e, t.now())
            })
        }
        e.a = r;
        var i = n(13),
            o = n(14),
            a = function() {
                function t(t, e) {
                    this.value = t, this.timestamp = e
                }
                return t
            }()
    },
    function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            return 0 === n ? [e] : (t.push(e), t)
        }

        function i() {
            return Object(o.a)(r, [])
        }
        e.a = i;
        var o = n(53)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new u(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(11),
            a = n(3),
            s = n(4),
            u = function() {
                function t(t) {
                    this.windowBoundaries = t
                }
                return t.prototype.call = function(t, e) {
                    var n = new c(t),
                        r = e.subscribe(n);
                    return r.closed || n.add(Object(s.a)(n, this.windowBoundaries)), r
                }, t
            }(),
            c = function(t) {
                function e(e) {
                    var n = t.call(this, e) || this;
                    return n.window = new o.a, e.next(n.window), n
                }
                return i.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.openWindow()
                }, e.prototype.notifyError = function(t, e) {
                    this._error(t)
                }, e.prototype.notifyComplete = function(t) {
                    this._complete()
                }, e.prototype._next = function(t) {
                    this.window.next(t)
                }, e.prototype._error = function(t) {
                    this.window.error(t), this.destination.error(t)
                }, e.prototype._complete = function() {
                    this.window.complete(), this.destination.complete()
                }, e.prototype._unsubscribe = function() {
                    this.window = null
                }, e.prototype.openWindow = function() {
                    var t = this.window;
                    t && t.complete();
                    var e = this.destination,
                        n = this.window = new o.a;
                    e.next(n)
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return void 0 === e && (e = 0),
                function(n) {
                    return n.lift(new s(t, e))
                }
        }
        e.a = r;
        var i = n(0),
            o = n(1),
            a = n(11),
            s = function() {
                function t(t, e) {
                    this.windowSize = t, this.startWindowEvery = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.windowSize, this.startWindowEvery))
                }, t
            }(),
            u = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.destination = e, i.windowSize = n, i.startWindowEvery = r, i.windows = [new a.a], i.count = 0, e.next(i.windows[0]), i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    for (var e = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, n = this.destination, r = this.windowSize, i = this.windows, o = i.length, s = 0; o > s && !this.closed; s++) i[s].next(t);
                    var u = this.count - r + 1;
                    if (u >= 0 && u % e === 0 && !this.closed && i.shift().complete(), ++this.count % e === 0 && !this.closed) {
                        var c = new a.a;
                        i.push(c), n.next(c)
                    }
                }, e.prototype._error = function(t) {
                    var e = this.windows;
                    if (e)
                        for (; e.length > 0 && !this.closed;) e.shift().error(t);
                    this.destination.error(t)
                }, e.prototype._complete = function() {
                    var t = this.windows;
                    if (t)
                        for (; t.length > 0 && !this.closed;) t.shift().complete();
                    this.destination.complete()
                }, e.prototype._unsubscribe = function() {
                    this.count = 0, this.windows = null
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            var e = c.a,
                n = null,
                r = Number.POSITIVE_INFINITY;
            return Object(f.a)(arguments[3]) && (e = arguments[3]), Object(f.a)(arguments[2]) ? e = arguments[2] : Object(d.a)(arguments[2]) && (r = arguments[2]), Object(f.a)(arguments[1]) ? e = arguments[1] : Object(d.a)(arguments[1]) && (n = arguments[1]),
                function(i) {
                    return i.lift(new p(t, n, r, e))
                }
        }

        function i(t) {
            var e = t.subscriber,
                n = t.windowTimeSpan,
                r = t.window;
            r && e.closeWindow(r), t.window = e.openWindow(), this.schedule(t, n)
        }

        function o(t) {
            var e = t.windowTimeSpan,
                n = t.subscriber,
                r = t.scheduler,
                i = t.windowCreationInterval,
                o = n.openWindow(),
                s = this,
                u = {
                    action: s,
                    subscription: null
                },
                c = {
                    subscriber: n,
                    window: o,
                    context: u
                };
            u.subscription = r.schedule(a, e, c), s.add(u.subscription), s.schedule(t, i)
        }

        function a(t) {
            var e = t.subscriber,
                n = t.window,
                r = t.context;
            r && r.action && r.subscription && r.action.remove(r.subscription), e.closeWindow(n)
        }
        e.a = r;
        var s = n(0),
            u = n(11),
            c = n(13),
            l = n(1),
            d = n(51),
            f = n(17),
            p = function() {
                function t(t, e, n, r) {
                    this.windowTimeSpan = t, this.windowCreationInterval = e, this.maxWindowSize = n, this.scheduler = r
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new v(t, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler))
                }, t
            }(),
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._numberOfNextedValues = 0, e
                }
                return s.a(e, t), e.prototype.next = function(e) {
                    this._numberOfNextedValues++, t.prototype.next.call(this, e)
                }, Object.defineProperty(e.prototype, "numberOfNextedValues", {
                    get: function() {
                        return this._numberOfNextedValues
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(u.a),
            v = function(t) {
                function e(e, n, r, s, u) {
                    var c = t.call(this, e) || this;
                    c.destination = e, c.windowTimeSpan = n, c.windowCreationInterval = r, c.maxWindowSize = s, c.scheduler = u, c.windows = [];
                    var l = c.openWindow();
                    if (null !== r && r >= 0) {
                        var d = {
                                subscriber: c,
                                window: l,
                                context: null
                            },
                            f = {
                                windowTimeSpan: n,
                                windowCreationInterval: r,
                                subscriber: c,
                                scheduler: u
                            };
                        c.add(u.schedule(a, n, d)), c.add(u.schedule(o, r, f))
                    } else {
                        var p = {
                            subscriber: c,
                            window: l,
                            windowTimeSpan: n
                        };
                        c.add(u.schedule(i, n, p))
                    }
                    return c
                }
                return s.a(e, t), e.prototype._next = function(t) {
                    for (var e = this.windows, n = e.length, r = 0; n > r; r++) {
                        var i = e[r];
                        i.closed || (i.next(t), i.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(i))
                    }
                }, e.prototype._error = function(t) {
                    for (var e = this.windows; e.length > 0;) e.shift().error(t);
                    this.destination.error(t)
                }, e.prototype._complete = function() {
                    for (var t = this.windows; t.length > 0;) {
                        var e = t.shift();
                        e.closed || e.complete()
                    }
                    this.destination.complete()
                }, e.prototype.openWindow = function() {
                    var t = new h;
                    this.windows.push(t);
                    var e = this.destination;
                    return e.next(t), t
                }, e.prototype.closeWindow = function(t) {
                    t.complete();
                    var e = this.windows;
                    e.splice(e.indexOf(t), 1)
                }, e
            }(l.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t, e) {
            return function(n) {
                return n.lift(new c(t, e))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(11),
            a = n(9),
            s = n(3),
            u = n(4),
            c = function() {
                function t(t, e) {
                    this.openings = t, this.closingSelector = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new l(t, this.openings, this.closingSelector))
                }, t
            }(),
            l = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    return i.openings = n, i.closingSelector = r, i.contexts = [], i.add(i.openSubscription = Object(u.a)(i, n, n)), i
                }
                return i.a(e, t), e.prototype._next = function(t) {
                    var e = this.contexts;
                    if (e)
                        for (var n = e.length, r = 0; n > r; r++) e[r].window.next(t)
                }, e.prototype._error = function(e) {
                    var n = this.contexts;
                    if (this.contexts = null, n)
                        for (var r = n.length, i = -1; ++i < r;) {
                            var o = n[i];
                            o.window.error(e), o.subscription.unsubscribe()
                        }
                    t.prototype._error.call(this, e)
                }, e.prototype._complete = function() {
                    var e = this.contexts;
                    if (this.contexts = null, e)
                        for (var n = e.length, r = -1; ++r < n;) {
                            var i = e[r];
                            i.window.complete(), i.subscription.unsubscribe()
                        }
                    t.prototype._complete.call(this)
                }, e.prototype._unsubscribe = function() {
                    var t = this.contexts;
                    if (this.contexts = null, t)
                        for (var e = t.length, n = -1; ++n < e;) {
                            var r = t[n];
                            r.window.unsubscribe(), r.subscription.unsubscribe()
                        }
                }, e.prototype.notifyNext = function(t, e, n, r, i) {
                    if (t === this.openings) {
                        var s = void 0;
                        try {
                            var c = this.closingSelector;
                            s = c(e)
                        } catch (l) {
                            return this.error(l)
                        }
                        var d = new o.a,
                            f = new a.a,
                            p = {
                                window: d,
                                subscription: f
                            };
                        this.contexts.push(p);
                        var h = Object(u.a)(this, s, p);
                        h.closed ? this.closeWindow(this.contexts.length - 1) : (h.context = p, f.add(h)), this.destination.next(d)
                    } else this.closeWindow(this.contexts.indexOf(t))
                }, e.prototype.notifyError = function(t) {
                    this.error(t)
                }, e.prototype.notifyComplete = function(t) {
                    t !== this.openSubscription && this.closeWindow(this.contexts.indexOf(t.context))
                }, e.prototype.closeWindow = function(t) {
                    if (-1 !== t) {
                        var e = this.contexts,
                            n = e[t],
                            r = n.window,
                            i = n.subscription;
                        e.splice(t, 1), r.complete(), i.unsubscribe()
                    }
                }, e
            }(s.a)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new u(t))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(11),
            a = n(3),
            s = n(4),
            u = function() {
                function t(t) {
                    this.closingSelector = t
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new c(t, this.closingSelector))
                }, t
            }(),
            c = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.destination = e, r.closingSelector = n, r.openWindow(), r
                }
                return i.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.openWindow(i)
                }, e.prototype.notifyError = function(t, e) {
                    this._error(t)
                }, e.prototype.notifyComplete = function(t) {
                    this.openWindow(t)
                }, e.prototype._next = function(t) {
                    this.window.next(t)
                }, e.prototype._error = function(t) {
                    this.window.error(t), this.destination.error(t), this.unsubscribeClosingNotification()
                }, e.prototype._complete = function() {
                    this.window.complete(), this.destination.complete(), this.unsubscribeClosingNotification()
                }, e.prototype.unsubscribeClosingNotification = function() {
                    this.closingNotification && this.closingNotification.unsubscribe()
                }, e.prototype.openWindow = function(t) {
                    void 0 === t && (t = null), t && (this.remove(t), t.unsubscribe());
                    var e = this.window;
                    e && e.complete();
                    var n = this.window = new o.a;
                    this.destination.next(n);
                    var r;
                    try {
                        var i = this.closingSelector;
                        r = i()
                    } catch (a) {
                        return this.destination.error(a), void this.window.error(a)
                    }
                    this.add(this.closingNotification = Object(s.a)(this, r))
                }, e
            }(a.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function(e) {
                var n;
                "function" == typeof t[t.length - 1] && (n = t.pop());
                var r = t;
                return e.lift(new s(r, n))
            }
        }
        e.a = r;
        var i = n(0),
            o = n(3),
            a = n(4),
            s = function() {
                function t(t, e) {
                    this.observables = t, this.project = e
                }
                return t.prototype.call = function(t, e) {
                    return e.subscribe(new u(t, this.observables, this.project))
                }, t
            }(),
            u = function(t) {
                function e(e, n, r) {
                    var i = t.call(this, e) || this;
                    i.observables = n, i.project = r, i.toRespond = [];
                    var o = n.length;
                    i.values = new Array(o);
                    for (var s = 0; o > s; s++) i.toRespond.push(s);
                    for (var s = 0; o > s; s++) {
                        var u = n[s];
                        i.add(Object(a.a)(i, u, u, s))
                    }
                    return i
                }
                return i.a(e, t), e.prototype.notifyNext = function(t, e, n, r, i) {
                    this.values[n] = e;
                    var o = this.toRespond;
                    if (o.length > 0) {
                        var a = o.indexOf(n); - 1 !== a && o.splice(a, 1)
                    }
                }, e.prototype.notifyComplete = function() {}, e.prototype._next = function(t) {
                    if (0 === this.toRespond.length) {
                        var e = [t].concat(this.values);
                        this.project ? this._tryProject(e) : this.destination.next(e)
                    }
                }, e.prototype._tryProject = function(t) {
                    var e;
                    try {
                        e = this.project.apply(this, t)
                    } catch (n) {
                        return void this.destination.error(n)
                    }
                    this.destination.next(e)
                }, e
            }(o.a)
    },
    function(t, e, n) {
        "use strict";

        function r() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return function(e) {
                return e.lift.call(i.b.apply(void 0, [e].concat(t)))
            }
        }
        e.a = r;
        var i = n(119)
    },
    function(t, e, n) {
        "use strict";

        function r(t) {
            return function(e) {
                return e.lift(new i.a(t))
            }
        }
        e.a = r;
        var i = n(119)
    },
    function(t, e) {
        var n = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    ref: "v-main",
                    staticClass: "main"
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showHeaderAndControlSwitch,
                        expression: "showHeaderAndControlSwitch"
                    }],
                    ref: "v-header-bar",
                    staticClass: "anchor-info-wrap"
                }, [n("v-anchor-info", {
                    attrs: {
                        title: t.title,
                        "view-count": t.viewCount,
                        status: t.status,
                        type: t.type,
                        liveType: t.liveType
                    }
                }), t._v(" "), n("v-anchor-control", {
                    staticClass: "stop-live-btn",
                    attrs: {
                        "stop-visible": t.stopLiveBtnVisible
                    },
                    on: {
                        click: t.openStopLiveConfirm,
                        report: t.report
                    }
                })], 1), t._v(" "), t.showCrossBarrage ? n("canvas", {
                    attrs: {
                        id: "canvasBarrage"
                    }
                }) : t._e(), t._v(" "), n("v-video", {
                    ref: "videox",
                    attrs: {
                        src: t.playUrl,
                        cid: t.cid,
                        uuid: t.uuid,
                        "anchor-id": t.anchorId,
                        "display-name": t.displayName,
                        "live-status": t.liveStatus
                    },
                    on: {
                        waiting: t.stallCounter,
                        renderSecond: t.isFirstFrameRenderedInSecond,
                        renderSecondTime: t.firstFrameRenderedTime,
                        openCode: t.recordOpenCode,
                        openSuccess: t.recordOpenSuccess
                    }
                }), t._v(" "), t.isInitBarrageBtn ? n("v-message-barrage", {
                    ref: "v-barrage-wrap",
                    attrs: {
                        "show-barrage": t.showBarrage,
                        "new-chat-msg": t.newChatMsg,
                        "msg-list": t.msgList
                    }
                }) : t._e(), t._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showHeaderAndControlSwitch,
                        expression: "showHeaderAndControlSwitch"
                    }],
                    ref: "v-control-btns",
                    "class": ["control-btns", t.showHeaderAndControlSwitch ? "control-bar-active" : ""]
                }, [t.isInitBarrageBtn ? n("v-barrage-switch", {
                    attrs: {
                        "switch-on-or-off": t.showBarrage
                    },
                    on: {
                        switchEvent: t.showBarrageSwitch
                    }
                }) : t._e(), t._v(" "), n("v-rotate-switch", {
                    on: {
                        rotate: t.rotateVideo
                    }
                }), t._v(" "), t.enableShare ? n("v-share-switch", {
                    on: {
                        share: t.onShareHandler
                    }
                }) : t._e(), t._v(" "), t.isShowClaritySelector ? n("v-clarity-selector", {
                    attrs: {
                        liveUrlVO: t.liveUrlVO,
                        "play-url-arr": t.playUrlArr,
                        current: t.currentUrlVO
                    },
                    on: {
                        switchClarityUrlHalder: t.switchClarityUrlHalder
                    }
                }) : t._e(), t._v(" "), t.enableSendCommentGrayer ? n("v-comment-input", {
                    attrs: {
                        cid: t.cid,
                        uuid: t.uuid,
                        "local-log": t.localLog
                    },
                    on: {
                        sended: t.sendedCommentEvent
                    }
                }) : t._e(), t._v(" "), "1" === t.enableLinkMic ? n("v-lianmai-btn", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.shouldShowApplyLinkBtn,
                        expression: "shouldShowApplyLinkBtn"
                    }],
                    staticClass: "lianmai",
                    attrs: {
                        "linking-members": t.linkingMembers,
                        "has-applied-link": t.hasAppliedLink,
                        "is-new-user": t.isFirstTimeUserApplyLinkFlag
                    },
                    on: {
                        lianmaiHandler: t.doLianmaiHandler,
                        cancelLinmaiHandler: t.doCancelApplyLinkHandler
                    }
                }) : t._e(), t._v(" "), n("v-favor", {
                    ref: "v-favor-wrap",
                    staticClass: "favor",
                    attrs: {
                        "favor-count": t.favorCount,
                        "favor-count-type": t.favorCountType
                    },
                    on: {
                        favor: t.favor
                    }
                })], 1), t._v(" "), t.showMessage ? n("v-message-box", {
                    attrs: {
                        message: t.messageText
                    },
                    on: {
                        close: t.closeWindow,
                        comfirm: t.closeWindow
                    }
                }) : t._e(), t._v(" "), t.showStopLive ? n("v-message-box", {
                    attrs: {
                        title: t.cancelTitleText,
                        message: t.stopLiveMessage,
                        comfirmText: t.cancelBtnText,
                        type: "dialog"
                    },
                    on: {
                        close: t.closeStopLive,
                        comfirm: t.stopLive
                    }
                }) : t._e()], 1)
            },
            r = [];
        t.exports = {
            render: n,
            staticRenderFns: r
        }
    }
]); 