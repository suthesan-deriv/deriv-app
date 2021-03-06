!(function(e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
        }),
        (n.r = function(e) {
            Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (n.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return n.d(t, 'a', t), t;
        }),
        (n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ''),
        n((n.s = 6));
})([
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__assign) ||
                Object.assign ||
                function(e) {
                    for (var t, n = 1, r = arguments.length; r > n; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                },
            i =
                (this && this.__rest) ||
                function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); r.length > i; i++)
                            0 > t.indexOf(r[i]) && (n[r[i]] = e[r[i]]);
                    }
                    return n;
                };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(2),
            s = n(1);
        function a() {
            return Function('return this')();
        }
        function u() {
            return !!a().safari && navigator.userAgent.indexOf('Safari') > -1;
        }
        function c() {
            return navigator.serviceWorker && 'PushManager' in window && 'Notification' in window;
        }
        function l() {
            return (u() && 'PC' === p()) || c();
        }
        function h() {
            return u()
                ? s.BROWSER_TYPE_SAFARI
                : ~navigator.userAgent.toLowerCase().indexOf('firefox')
                ? s.BROWSER_TYPE_FF
                : s.BROWSER_TYPE_CHROME;
        }
        function p() {
            var e = navigator.userAgent;
            return e.match(/Android/i) ||
                e.match(/webOS/i) ||
                e.match(/iPhone/i) ||
                e.match(/iPad/i) ||
                e.match(/iPod/i) ||
                e.match(/BlackBerry/i) ||
                e.match(/Windows Phone/i)
                ? 'Phone'
                : 'PC';
        }
        function d(e) {
            for (var t = '', n = 0; 32 > n; n++) {
                var r = e.length - n - 1,
                    i = 0;
                0 > r || (i = e.charCodeAt(r)), (t += '0123456789abcdef'.substr(i % 16, 1));
            }
            return t;
        }
        function f() {
            return localStorage.getItem(s.KEY_FAKE_PUSH_TOKEN);
        }
        function b() {
            var e = (function(e) {
                e = e || 32;
                for (
                    var t = '', n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', r = 0;
                    e > r;
                    r++
                )
                    t += n.charAt(Math.floor(62 * Math.random()));
                return t;
            })();
            return localStorage.setItem(s.KEY_FAKE_PUSH_TOKEN, e), e;
        }
        function _(e, t) {
            var n = e && e.getKey && e.getKey(t);
            return n ? btoa(String.fromCharCode.apply(String, new Uint8Array(n))) : '';
        }
        function g() {
            return 'Promise' in a();
        }
        (t.getGlobal = a),
            (t.getVersion = function() {
                return '3.2.15';
            }),
            (t.isSafariBrowser = u),
            (t.isOperaBrowser = function() {
                return -1 !== navigator.userAgent.indexOf('Opera') || -1 !== navigator.userAgent.indexOf('OPR');
            }),
            (t.canUseServiceWorkers = c),
            (t.isSupportSDK = l),
            (t.getBrowserType = h),
            (t.getBrowserVersion = function() {
                var e = navigator.userAgent,
                    t = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
                    n = null;
                return /trident/i.test(t[1])
                    ? 'IE ' + ((n = /\brv[ :]+(\d+)/g.exec(e) || [])[1] || '')
                    : 'Chrome' === t[1] && null !== (n = e.match(/\bOPR\/(\d+)/))
                    ? 'Opera ' + n[1]
                    : ((t = t[2] ? [t[1], t[2]] : [navigator.appName, navigator.appVersion, '-?']),
                      null !== (n = e.match(/version\/([.\d]+)/i)) && t.splice(1, 1, n[1]),
                      t.join(' '));
            }),
            (t.urlB64ToUint8Array = function(e) {
                for (
                    var t = (e + '='.repeat((4 - (e.length % 4)) % 4)).replace(/-/g, '+').replace(/_/g, '/'),
                        n = window.atob(t),
                        r = new Uint8Array(n.length),
                        i = 0;
                    n.length > i;
                    ++i
                )
                    r[i] = n.charCodeAt(i);
                return r;
            }),
            (t.getDeviceName = p),
            (t.createUUID = d),
            (t.generateHwid = function(e, t) {
                return e + '_' + d((t = f() || t || b()));
            }),
            (t.getFakePushToken = f),
            (t.generateFakePushToken = b),
            (t.getPushToken = function(e) {
                return e
                    ? e.subscriptionId
                        ? e.subscriptionId
                        : 12 === h()
                        ? e.endpoint
                        : e.endpoint.split('/').pop() || ''
                    : '';
            }),
            (t.getFcmKey = function(e, t) {
                return e
                    ? new Promise(function(e) {
                          o.keyValue
                              .get(s.KEY_FCM_SUBSCRIPTION)
                              .then(function(n) {
                                  e((n && n[t]) || '');
                              })
                              .catch(function() {
                                  e('');
                              });
                      })
                    : Promise.resolve('');
            }),
            (t.getAuthToken = function(e) {
                return _(e, 'auth');
            }),
            (t.getPublicKey = function(e) {
                return _(e, 'p256dh');
            }),
            (t.getPushwooshUrl = function(e, t) {
                var n = 'cp';
                u() || !e || ~e.indexOf('.') || (n = e + '.api');
                var r = 'https://' + (t || n + '.pushwoosh.com') + '/json/1.3/';
                return new Promise(function(e) {
                    o.keyValue
                        .get(s.KEY_API_BASE_URL)
                        .then(function(t) {
                            void 0 === t && (t = null), e(t || r);
                        })
                        .catch(function() {
                            e(r);
                        });
                });
            }),
            (t.patchConsole = function() {
                for (
                    var e,
                        t = function() {},
                        n = [
                            'assert',
                            'clear',
                            'count',
                            'debug',
                            'dir',
                            'dirxml',
                            'error',
                            'exception',
                            'group',
                            'groupCollapsed',
                            'groupEnd',
                            'info',
                            'log',
                            'markTimeline',
                            'profile',
                            'profileEnd',
                            'table',
                            'time',
                            'timeEnd',
                            'timeStamp',
                            'trace',
                            'warn',
                        ],
                        r = n.length,
                        i = a(),
                        o = (i.console = i.console || {});
                    r--;

                )
                    o[(e = n[r])] || (o[e] = t);
            }),
            (t.patchPromise = function() {
                var e = a();
                !g() &&
                    l() &&
                    (e.Promise = function() {
                        return { then: function() {}, catch: function() {} };
                    });
            }),
            (t.canUsePromise = g),
            (t.clearLocationHash = function() {
                'history' in a() && history.pushState ? history.pushState(null, '', '#') : (location.hash = '#');
            }),
            (t.prepareDuration = function(e) {
                return isNaN(e) ? 20 : Math.min(60, 0 > (e = Math.round(e)) ? 20 : e);
            }),
            (t.validateParams = function(e) {
                var t = i(e, []);
                return !t.userId || ('user_id' !== t.userId && 0 != !!t.userId) || delete t.userId, t;
            }),
            (t.sendInternalPostEvent = function(e) {
                o.keyValue.get(s.KEY_INTERNAL_EVENTS).then(function(t) {
                    void 0 === t && (t = {}), 0 === Object.keys(t).length && o.keyValue.set(s.KEY_INTERNAL_EVENTS, {});
                    var n,
                        i = new Date().setHours(0, 0, 0, 0),
                        a = t[e.event];
                    if (!a || i > a) {
                        o.keyValue.extend(s.KEY_INTERNAL_EVENTS, (((n = {})[e.event] = i), n));
                        var u = new XMLHttpRequest(),
                            c = r({ application: 'DD275-06947' }, e);
                        u.open('POST', 'https://cp.pushwoosh.com/json/1.3/postEvent', !0),
                            u.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8'),
                            u.send(JSON.stringify({ request: c }));
                    }
                });
            });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.DEFAULT_SERVICE_WORKER_URL = 'pushwoosh-service-worker.js'),
            (t.PERIOD_SEND_APP_OPEN = 36e5),
            (t.PERIOD_GOAL_EVENT = 864e5),
            (t.DEFAULT_NOTIFICATION_TITLE = 'Pushwoosh notification'),
            (t.DEFAULT_NOTIFICATION_IMAGE = 'https://cp.pushwoosh.com/img/logo-medium.png'),
            (t.DEFAULT_NOTIFICATION_URL = '/'),
            (t.KEY_API_PARAMS = 'API_PARAMS'),
            (t.KEY_INIT_PARAMS = 'INIT_PARAMS'),
            (t.KEY_SDK_VERSION = 'SDK_VERSION'),
            (t.KEY_WORKER_VERSION = 'WORKER_VERSION'),
            (t.KEY_LAST_SENT_APP_OPEN = 'LAST_SENT_APP_OPEN'),
            (t.KEY_LAST_OPEN_MESSAGE = 'LAST_OPEN_MESSAGE'),
            (t.KEY_API_BASE_URL = 'API_BASE_URL'),
            (t.KEY_SHOW_SUBSCRIBE_WIDGET = 'WIDGET_SHOWED'),
            (t.KEY_CLICK_SUBSCRIBE_WIDGET = 'WIDGET_CLICKED'),
            (t.KEY_DELAYED_EVENT = 'DELAYED_EVENT'),
            (t.KEY_COMMUNICATION_ENABLED = 'COMMUNICATION_ENABLED'),
            (t.KEY_DEVICE_DATA_REMOVED = 'DEVICE_DATA_REMOVED'),
            (t.KEY_INTERNAL_EVENTS = 'INTERNAL_EVENTS'),
            (t.KEY_FAKE_PUSH_TOKEN = 'fakePushToken'),
            (t.KEY_DEVICE_REGISTRATION_STATUS = 'deviceRegistrationStatus'),
            (t.KEY_SAFARI_PREVIOUS_PERMISSION = 'safariPreviousPermission'),
            (t.MANUAL_SET_LOGGER_LEVEL = 'PW_SET_LOGGER_LEVEL'),
            (t.DEVICE_REGISTRATION_STATUS_REGISTERED = 'registered'),
            (t.DEVICE_REGISTRATION_STATUS_UNREGISTERED = 'unregistered'),
            (t.KEY_SENDER_ID = 'GCM_SENDER_ID'),
            (t.KEY_FCM_SUBSCRIPTION = 'FCM_SUBSCRIPTION'),
            (t.PERMISSION_DENIED = 'denied'),
            (t.PERMISSION_GRANTED = 'granted'),
            (t.PERMISSION_PROMPT = 'default'),
            (t.BROWSER_TYPE_SAFARI = 10),
            (t.BROWSER_TYPE_CHROME = 11),
            (t.BROWSER_TYPE_FF = 12),
            (t.EVENT_ON_READY = 'onReady'),
            (t.EVENT_ON_SUBSCRIBE = 'onSubscribe'),
            (t.EVENT_ON_UNSUBSCRIBE = 'onUnsubscribe'),
            (t.EVENT_ON_REGISTER = 'onRegister'),
            (t.EVENT_ON_PERMISSION_PROMPT = 'onPermissionPrompt'),
            (t.EVENT_ON_PERMISSION_DENIED = 'onPermissionDenied'),
            (t.EVENT_ON_PERMISSION_GRANTED = 'onPermissionGranted'),
            (t.EVENT_ON_SW_INIT_ERROR = 'onSWInitError'),
            (t.EVENT_ON_PUSH_DELIVERY = 'onPushDelivery'),
            (t.EVENT_ON_NOTIFICATION_CLICK = 'onNotificationClick'),
            (t.EVENT_ON_NOTIFICATION_CLOSE = 'onNotificationClose'),
            (t.EVENT_ON_CHANGE_COMMUNICATION_ENABLED = 'onChangeCommunicationEnabled'),
            (t.EVENT_SHOW_SUBSCRIBE_BUTTON = 'showSubscribeButton'),
            (t.EVENT_CLICK_SUBSCRIBE_BUTTON = 'clickSubscribeButton'),
            (t.EVENT_GDPR_CONSENT = 'GDPRConsent'),
            (t.EVENT_GDPR_DELETE = 'GDPRDelete');
    },
    function(e, t, n) {
        'use strict';
        var r,
            i =
                (this && this.__extends) ||
                ((r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function(e, t) {
                            e.__proto__ = t;
                        }) ||
                    function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    }),
                function(e, t) {
                    function n() {
                        this.constructor = e;
                    }
                    r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
                }),
            o =
                (this && this.__assign) ||
                Object.assign ||
                function(e) {
                    for (var t, n = 1, r = arguments.length; r > n; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                },
            s =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                u(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            e.done
                                ? i(e.value)
                                : new n(function(t) {
                                      t(e.value);
                                  }).then(s, a);
                        }
                        u((r = r.apply(e, t || [])).next());
                    });
                },
            a =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: a(0), throw: a(1), return: a(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function a(o) {
                        return function(a) {
                            return (function(o) {
                                if (n) throw new TypeError('Generator is already executing.');
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i = r[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (((r = 0), i && (o = [0, i.value]), o[0])) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return s.label++, { value: o[1], done: !1 };
                                            case 5:
                                                s.label++, (r = o[1]), (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                                                    (6 === o[0] || 2 === o[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === o[0] && (!i || (o[1] > i[0] && i[3] > o[1]))) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (6 === o[0] && i[1] > s.label) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && i[2] > s.label) {
                                                    (s.label = i[2]), s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, a]);
                        };
                    }
                },
            u =
                (this && this.__rest) ||
                function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); r.length > i; i++)
                            0 > t.indexOf(r[i]) && (n[r[i]] = e[r[i]]);
                    }
                    return n;
                };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var c,
            l = 'keyValue',
            h = 'logs',
            p = 'messages';
        function d(e) {
            console.info('onversionchange', e);
        }
        function f(e) {
            return (c ||
                (c = new Promise(function(e, t) {
                    var n = indexedDB.open('PUSHWOOSH_SDK_STORE', 6);
                    (n.onsuccess = function(t) {
                        var n = t.target.result;
                        (n.onversionchange = d), e(n);
                    }),
                        (n.onerror = function() {
                            return t(n.error);
                        }),
                        (n.onupgradeneeded = function(e) {
                            var t = e.target.result;
                            (t.onversionchange = d),
                                t.objectStoreNames.contains(l) || t.createObjectStore(l, { keyPath: 'key' });
                            var n = { keyPath: 'id', autoIncrement: !0 },
                                r = { unique: !1 };
                            if (!t.objectStoreNames.contains(h)) {
                                var i = t.createObjectStore(h, n);
                                i.createIndex('environment', 'environment', r),
                                    i.createIndex('date', 'date', r),
                                    i.createIndex('type', 'type', r);
                            }
                            t.objectStoreNames.contains(p) || t.createObjectStore(p, n).createIndex('date', 'date', r);
                        });
                })),
            c).then(function(t) {
                return new Promise(function(n, r) {
                    return e(t, n, r);
                });
            });
        }
        var b = (function() {
            function e() {}
            return (
                (e.prototype._add = function(e) {
                    var t = this;
                    return f(function(n, r, i) {
                        var o = n
                            .transaction([t.name], 'readwrite')
                            .objectStore(t.name)
                            .add(e);
                        (o.onsuccess = function() {
                            r(e);
                        }),
                            (o.onerror = function() {
                                i(o.error);
                            });
                    }).then(function(e) {
                        return t.getAll().then(function(n) {
                            if (Array.isArray(n)) {
                                var r = n
                                    .map(function(e) {
                                        return e.id;
                                    })
                                    .sort(function(e, t) {
                                        return e == t ? 0 : t > e ? 1 : -1;
                                    });
                                if (r.length > t.maxItems)
                                    return Promise.all(
                                        r.slice(t.maxItems).map(function(e) {
                                            return t.delete(e);
                                        })
                                    ).then(function() {
                                        return e;
                                    });
                            }
                            return e;
                        });
                    });
                }),
                (e.prototype.delete = function(e) {
                    var t = this;
                    return f(function(n, r, i) {
                        var o = n
                            .transaction([t.name], 'readwrite')
                            .objectStore(t.name)
                            .delete(e);
                        (o.onsuccess = function() {
                            r(o.result);
                        }),
                            (o.onerror = function() {
                                i(o.error);
                            });
                    });
                }),
                (e.prototype.getAll = function() {
                    var e = this;
                    return f(function(t, n, r) {
                        var i = [],
                            o = t
                                .transaction(e.name)
                                .objectStore(e.name)
                                .openCursor();
                        (o.onsuccess = function(e) {
                            var t = e.target.result;
                            t ? (i.push(t.value), t.continue()) : n(i);
                        }),
                            (o.onerror = function() {
                                r(o.error);
                            });
                    });
                }),
                e
            );
        })();
        t.LogBase = b;
        var _ = (function(e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.name = h),
                    (t.maxItems = 100),
                    (t.environment = 'undefined' != typeof self && self.registration ? 'worker' : 'browser'),
                    t
                );
            }
            return (
                i(t, e),
                (t.prototype.add = function(e, t, n) {
                    var r = { type: e, environment: this.environment, message: '' + t, date: new Date() };
                    return t instanceof Error && (r.stack = t.stack), n && (r.additional = n), this._add(r);
                }),
                t
            );
        })(b);
        t.LogLog = _;
        var g,
            E = (function(e) {
                function t() {
                    var t = (null !== e && e.apply(this, arguments)) || this;
                    return (t.name = p), (t.maxItems = 25), t;
                }
                return (
                    i(t, e),
                    (t.prototype.add = function(e) {
                        return this._add(o({}, e, { date: new Date() }));
                    }),
                    t
                );
            })(b);
        (t.LogMessage = E),
            (t.keyValue =
                ((g = l),
                {
                    get: function(e) {
                        return f(function(t, n, r) {
                            var i = t
                                .transaction(g)
                                .objectStore(g)
                                .get(e);
                            (i.onsuccess = function() {
                                var e = i.result;
                                n(e && e.value);
                            }),
                                (i.onerror = function() {
                                    r(i.error);
                                });
                        });
                    },
                    getAll: function() {
                        return f(function(e, t, n) {
                            var r = {},
                                i = e
                                    .transaction(g)
                                    .objectStore(g)
                                    .openCursor();
                            (i.onsuccess = function(e) {
                                var n = e.target.result;
                                n ? ((r[n.key] = n.value.value), n.continue()) : t(r);
                            }),
                                (i.onerror = function() {
                                    n(i.error);
                                });
                        });
                    },
                    extend: function(e, t) {
                        return s(this, void 0, void 0, function() {
                            var n, r;
                            return a(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.get(e)];
                                    case 1:
                                        return (n = i.sent()), (r = u(t, [])), [4, this.set(e, o({}, n, r))];
                                    case 2:
                                        return i.sent(), [2];
                                }
                            });
                        });
                    },
                    set: function(e, t) {
                        return f(function(n, r, i) {
                            var o = n
                                .transaction([g], 'readwrite')
                                .objectStore(g)
                                .put({ key: e, value: t });
                            (o.onsuccess = function() {
                                r(e);
                            }),
                                (o.onerror = function() {
                                    i(o.error);
                                });
                        });
                    },
                })),
            (t.log = new _()),
            (t.message = new E());
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(2),
            i = { error: 1, info: 2, debug: 3 },
            o = 3;
        n(0).patchConsole();
        var s = {
            setLevel: function(e) {
                i[e] || (e = 'error'), (o = i[e]);
            },
            write: function(e, t, n) {
                return 'error' === e ? this.error(t) : this.info(t), r.log.add(e, t, n);
            },
        };
        Object.keys(i).forEach(function(e) {
            var t = i[e];
            s[e] = function() {
                for (var n = [], r = 0; arguments.length > r; r++) n[r] = arguments[r];
                t > o ||
                    (console.groupCollapsed(e),
                    console.info.apply(console, [''].concat(n)),
                    console.trace('trace'),
                    console.groupEnd());
            };
        }),
            (t.logAndThrowError = function(e) {
                var t = Error(e);
                throw (s.write('error', t, 'logAndThrowError'), t);
            }),
            (t.logAndRejectError = function(e, t) {
                var n = Error(e);
                s.write('error', n, 'logAndRejectError'), t(n);
            }),
            (t.default = s);
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__assign) ||
                Object.assign ||
                function(e) {
                    for (var t, n = 1, r = arguments.length; r > n; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                },
            i =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                u(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            e.done
                                ? i(e.value)
                                : new n(function(t) {
                                      t(e.value);
                                  }).then(s, a);
                        }
                        u((r = r.apply(e, t || [])).next());
                    });
                },
            o =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: a(0), throw: a(1), return: a(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function a(o) {
                        return function(a) {
                            return (function(o) {
                                if (n) throw new TypeError('Generator is already executing.');
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i = r[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (((r = 0), i && (o = [0, i.value]), o[0])) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return s.label++, { value: o[1], done: !1 };
                                            case 5:
                                                s.label++, (r = o[1]), (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                                                    (6 === o[0] || 2 === o[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === o[0] && (!i || (o[1] > i[0] && i[3] > o[1]))) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (6 === o[0] && i[1] > s.label) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && i[2] > s.label) {
                                                    (s.label = i[2]), s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, a]);
                        };
                    }
                };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var s = n(1),
            a = n(0),
            u = n(2),
            c = n(3),
            l = (function() {
                function e(e, t, n) {
                    (this.doPushwooshApiMethod = e),
                        (this.apiParams = t),
                        (this.lastOpenMessage = n),
                        (this.timezone = 60 * -new Date().getTimezoneOffset());
                }
                return (
                    Object.defineProperty(e.prototype, 'params', {
                        get: function() {
                            return (
                                console.error(
                                    'Property "Pushwoosh.api.params" will be deprecated in next minor version. Instead, use the async method "Pushwoosh.api.getParams()"'
                                ),
                                a.sendInternalPostEvent({
                                    hwid: this.apiParams.hwid,
                                    userId: this.apiParams.userId,
                                    device_type: this.apiParams.deviceType,
                                    event: 'API Params',
                                    attributes: {
                                        app_code: this.apiParams.applicationCode,
                                        device_type: this.apiParams.deviceType,
                                        url:
                                            this.apiParams.applicationCode +
                                            ' - ' +
                                            (location ? location.href : 'none'),
                                    },
                                }),
                                this.apiParams
                            );
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, 'isSafari', {
                        get: function() {
                            return a.isSafariBrowser();
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.getParams = function() {
                        return i(this, void 0, void 0, function() {
                            var e;
                            return o(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, u.keyValue.getAll()];
                                    case 1:
                                        return (e = t.sent()), [2, r({}, e[s.KEY_API_PARAMS], e[s.KEY_INIT_PARAMS])];
                                }
                            });
                        });
                    }),
                    (e.prototype.callAPI = function(e, t) {
                        return i(this, void 0, void 0, function() {
                            var n, i, l, h, p, d, f, b;
                            return o(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, this.getParams()];
                                    case 1:
                                        return (n = o.sent()), [4, u.keyValue.get(s.KEY_DEVICE_DATA_REMOVED)];
                                    case 2:
                                        return o.sent()
                                            ? (c.default.error('Device data has been removed'), [2])
                                            : ((l = void 0 === (i = n.hwid) ? '' : i),
                                              (p = void 0 === (h = n.applicationCode) ? '' : h),
                                              (f = void 0 === (d = n.userId) ? '' : d),
                                              this.isSafari && !l
                                                  ? [2]
                                                  : ((b = {
                                                        hwid: l,
                                                        application: p,
                                                        userId: (t && t.userId) || f || l,
                                                        device_type: n.deviceType,
                                                        v: a.getVersion(),
                                                    }),
                                                    [2, this.doPushwooshApiMethod(e, r({}, t, b))]));
                                }
                            });
                        });
                    }),
                    (e.prototype.registerDevice = function() {
                        return i(this, void 0, void 0, function() {
                            var e, t;
                            return o(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.getParams()];
                                    case 1:
                                        if (!(e = n.sent()).pushToken || this.isSafari) return [2];
                                        n.label = 2;
                                    case 2:
                                        return (
                                            n.trys.push([2, 5, , 6]), [4, u.keyValue.get(s.KEY_COMMUNICATION_ENABLED)]
                                        );
                                    case 3:
                                        return 0 !== n.sent()
                                            ? [
                                                  4,
                                                  this.callAPI('registerDevice', {
                                                      push_token: e.pushToken,
                                                      public_key: e.publicKey,
                                                      auth_token: e.authToken,
                                                      fcm_token: e.fcmToken,
                                                      fcm_push_set: e.fcmPushSet,
                                                      language: e.tags.Language,
                                                      timezone: this.timezone,
                                                      device_model: e.tags['Device Model'],
                                                  }),
                                              ]
                                            : (c.default.error('Communication is disabled'), [2]);
                                    case 4:
                                        return (
                                            n.sent(),
                                            localStorage.setItem(
                                                s.KEY_DEVICE_REGISTRATION_STATUS,
                                                s.DEVICE_REGISTRATION_STATUS_REGISTERED
                                            ),
                                            [3, 6]
                                        );
                                    case 5:
                                        return (t = n.sent()), c.logAndThrowError(t), [3, 6];
                                    case 6:
                                        return [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.unregisterDevice = function() {
                        return i(this, void 0, void 0, function() {
                            var e;
                            return o(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.isSafari) return [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.callAPI('unregisterDevice')];
                                    case 2:
                                        return (
                                            t.sent(),
                                            localStorage.setItem(
                                                s.KEY_DEVICE_REGISTRATION_STATUS,
                                                s.DEVICE_REGISTRATION_STATUS_UNREGISTERED
                                            ),
                                            [3, 4]
                                        );
                                    case 3:
                                        return (e = t.sent()), c.logAndThrowError(e), [3, 4];
                                    case 4:
                                        return [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.registerUser = function(e) {
                        return i(this, void 0, void 0, function() {
                            var t, n;
                            return o(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.getParams()];
                                    case 1:
                                        return (t = r.sent()).userId || e
                                            ? [
                                                  4,
                                                  u.keyValue.extend(
                                                      s.KEY_INIT_PARAMS,
                                                      a.validateParams(
                                                          (n = { timezone: this.timezone, userId: e || t.userId })
                                                      )
                                                  ),
                                              ]
                                            : [2];
                                    case 2:
                                        return r.sent(), this.callAPI('registerUser', n), [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.applicationOpen = function() {
                        return i(this, void 0, void 0, function() {
                            var e;
                            return o(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.getParams()];
                                    case 1:
                                        return (
                                            (e = t.sent()),
                                            this.callAPI('applicationOpen', {
                                                push_token: e.pushToken,
                                                timezone: this.timezone,
                                            }),
                                            [2]
                                        );
                                }
                            });
                        });
                    }),
                    (e.prototype.setTags = function(e) {
                        return this.callAPI('setTags', { tags: e });
                    }),
                    (e.prototype.getTags = function() {
                        return this.callAPI('getTags');
                    }),
                    (e.prototype.pushStat = function(e) {
                        return this.callAPI('pushStat', { hash: e });
                    }),
                    (e.prototype.messageDeliveryEvent = function(e) {
                        return this.callAPI('messageDeliveryEvent', { hash: e });
                    }),
                    (e.prototype.postEvent = function(e, t) {
                        var n = this.lastOpenMessage,
                            i = new Date(),
                            o = i.getTime(),
                            s = Math.floor(o / 1e3),
                            a = s - (i.getTimezoneOffset() / 60) * 3600;
                        if (n.expiry > Date.now()) {
                            if (t.msgHash) return Promise.reject('attribute msgHash already defined');
                            t = r({}, t, { msgHash: n.messageHash });
                        }
                        return this.callAPI('postEvent', {
                            event: e,
                            attributes: t,
                            timestampUTC: s,
                            timestampCurrent: a,
                        });
                    }),
                    (e.prototype.triggerEvent = function(e, t) {
                        return i(this, void 0, void 0, function() {
                            var n;
                            return o(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t ? [4, u.keyValue.get(t)] : [3, 2];
                                    case 1:
                                        return (n = r.sent()), [3, 3];
                                    case 2:
                                        (n = null), (r.label = 3);
                                    case 3:
                                        return t && n ? [2] : [4, this.callAPI('triggerEvent', e)];
                                    case 4:
                                        return r.sent(), t && u.keyValue.set(t, 1), [2];
                                }
                            });
                        });
                    }),
                    e
                );
            })();
        t.default = l;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.BELL_POSITION_BOTTOM_RIGHT = 'bottomRight'),
            (t.BELL_POSITION_BOTTOM_LEFT = 'bottomLeft'),
            (t.BELL_POSITION_TOP_RIGHT = 'topRight'),
            (t.BELL_POSITION_TOP_LEFT = 'topLeft'),
            (t.WIDGET_CONTAINER_ID = 'pushwooshBellWidget'),
            (t.SUBSCRIBE_WIDGET_DEFAULT_CONFIG = {
                position: t.BELL_POSITION_BOTTOM_LEFT,
                bgColor: '#12AE7E',
                bellColor: 'white',
                bellStrokeColor: '#08754f',
                bellButtonBorder: '1px solid #379676',
                shadow: '0px 0px 6px rgba(0, 0, 0, 0.75)',
                size: '48px',
                indent: '20px',
                zIndex: '999999',
                tooltipText: {
                    successSubscribe: 'You are successfully subscribed!',
                    needSubscribe: 'Get notifications about important news!',
                    blockSubscribe: 'Click to see how to get notifications',
                    alreadySubscribed: 'You are already subscribed',
                },
            });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(7),
            i = n(0);
        function o() {
            var e,
                t = i.getGlobal(),
                n = t.Pushwoosh;
            n && (e = n),
                (n = new r.default()),
                Array.isArray(e) &&
                    e.forEach(function(e) {
                        return n.push(e);
                    }),
                (t.Pushwoosh = n);
        }
        n(12), 'complete' === document.readyState ? o() : window.addEventListener('load', o);
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__assign) ||
                Object.assign ||
                function(e) {
                    for (var t, n = 1, r = arguments.length; r > n; n++)
                        for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                },
            i =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                u(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            e.done
                                ? i(e.value)
                                : new n(function(t) {
                                      t(e.value);
                                  }).then(s, a);
                        }
                        u((r = r.apply(e, t || [])).next());
                    });
                },
            o =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: a(0), throw: a(1), return: a(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function a(o) {
                        return function(a) {
                            return (function(o) {
                                if (n) throw new TypeError('Generator is already executing.');
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i = r[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (((r = 0), i && (o = [0, i.value]), o[0])) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return s.label++, { value: o[1], done: !1 };
                                            case 5:
                                                s.label++, (r = o[1]), (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                                                    (6 === o[0] || 2 === o[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === o[0] && (!i || (o[1] > i[0] && i[3] > o[1]))) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (6 === o[0] && i[1] > s.label) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && i[2] > s.label) {
                                                    (s.label = i[2]), s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, a]);
                        };
                    }
                };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var s = n(8),
            a = n(4),
            u = n(0),
            c = n(1),
            l = n(3),
            h = n(9),
            p = n(10),
            d = n(11),
            f = n(2);
        u.patchPromise();
        var b = (function() {
            function e() {
                var e,
                    t = this;
                (this._ee = new s.default()),
                    (this._isNeedResubscribe = !1),
                    (this.isSafari = u.isSafariBrowser()),
                    (this.ready = !1),
                    (this.debug = {
                        showLog: function() {
                            return i(this, void 0, void 0, function() {
                                var e;
                                return o(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, f.log.getAll()];
                                        case 1:
                                            return (e = t.sent()), console.log(e), [2];
                                    }
                                });
                            });
                        },
                        showKeyValues: function() {
                            return i(this, void 0, void 0, function() {
                                var e;
                                return o(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, f.keyValue.getAll()];
                                        case 1:
                                            return (e = t.sent()), console.log(e), [2];
                                    }
                                });
                            });
                        },
                        showMessages: function() {
                            return i(this, void 0, void 0, function() {
                                return o(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, f.message.getAll()];
                                        case 1:
                                            return (
                                                e.sent().forEach(function(e) {
                                                    return console.log(e);
                                                }),
                                                [2]
                                            );
                                    }
                                });
                            });
                        },
                    }),
                    (this._onPromises = {}),
                    u.canUsePromise() &&
                        (this._onPromises =
                            (((e = {})[c.EVENT_ON_PERMISSION_DENIED] = new Promise(function(e) {
                                return t._ee.once(c.EVENT_ON_PERMISSION_DENIED, e);
                            })),
                            (e[c.EVENT_ON_PERMISSION_PROMPT] = new Promise(function(e) {
                                return t._ee.once(c.EVENT_ON_PERMISSION_PROMPT, e);
                            })),
                            (e[c.EVENT_ON_PERMISSION_GRANTED] = new Promise(function(e) {
                                return t._ee.once(c.EVENT_ON_PERMISSION_GRANTED, e);
                            })),
                            e)),
                    (this.onServiceWorkerMessage = this.onServiceWorkerMessage.bind(this));
            }
            return (
                (e.prototype.onReadyHandler = function(e) {
                    var t = this;
                    this.ready
                        ? e(this.api)
                        : this._ee.on(c.EVENT_ON_READY, function(n) {
                              return e(t.api, n);
                          });
                }),
                (e.prototype.push = function(e) {
                    var t = this;
                    if ('function' == typeof e) this.onReadyHandler(e);
                    else {
                        if (!Array.isArray(e)) throw Error('invalid command');
                        var n = e[0],
                            r = e[1];
                        switch (n) {
                            case 'init':
                                if (this.shouldInit()) {
                                    if ('object' != typeof r) break;
                                    this.init(r).catch(function(e) {
                                        return l.default.info('Pushwoosh init failed', e);
                                    });
                                }
                                break;
                            case c.EVENT_ON_READY:
                                if ('function' != typeof r) break;
                                this.onReadyHandler(r);
                                break;
                            case c.EVENT_ON_REGISTER:
                            case c.EVENT_ON_SUBSCRIBE:
                            case c.EVENT_ON_UNSUBSCRIBE:
                            case c.EVENT_ON_SW_INIT_ERROR:
                            case c.EVENT_ON_PUSH_DELIVERY:
                            case c.EVENT_ON_NOTIFICATION_CLICK:
                            case c.EVENT_ON_NOTIFICATION_CLOSE:
                            case c.EVENT_ON_CHANGE_COMMUNICATION_ENABLED:
                                if ('function' != typeof r) break;
                                this._ee.on(n, function(e) {
                                    return r(t.api, e);
                                });
                                break;
                            case c.EVENT_ON_PERMISSION_DENIED:
                            case c.EVENT_ON_PERMISSION_PROMPT:
                            case c.EVENT_ON_PERMISSION_GRANTED:
                                if ('function' != typeof r) break;
                                this._onPromises[n] &&
                                    this._onPromises[n].then(function() {
                                        return r(t.api);
                                    });
                                break;
                            default:
                                throw Error('unknown command');
                        }
                    }
                }),
                (e.prototype.shouldInit = function() {
                    return !!u.isSupportSDK() || (l.default.info('This browser does not support pushes'), !1);
                }),
                (e.prototype.init = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t,
                            n,
                            i,
                            s,
                            a,
                            d,
                            f,
                            b,
                            _,
                            g,
                            E,
                            v,
                            w = this;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (
                                        ((this._initParams = e),
                                        (t = e.scope),
                                        (n = e.applicationCode),
                                        (s = void 0 === (i = e.logLevel) ? 'error' : i),
                                        (a = e.pushwooshApiUrl),
                                        !n)
                                    )
                                        throw Error('no application code');
                                    return [4, this.getParams()];
                                case 1:
                                    return (
                                        (d = o.sent()).applicationCode &&
                                            d.applicationCode !== n &&
                                            (this._isNeedResubscribe = !0),
                                        [4, u.getPushwooshUrl(n, a)]
                                    );
                                case 2:
                                    if (
                                        ((f = o.sent()),
                                        (b = this.params = r(
                                            { autoSubscribe: !0, serviceWorkerUrl: null, pushwooshUrl: f },
                                            e,
                                            {
                                                deviceType: u.getBrowserType(),
                                                tags: r({ Language: navigator.language || 'en' }, e.tags, {
                                                    'Device Model': u.getBrowserVersion(),
                                                }),
                                                driversSettings: {
                                                    worker: r(
                                                        {
                                                            serviceWorkerUrl: c.DEFAULT_SERVICE_WORKER_URL,
                                                            applicationServerPublicKey: void 0,
                                                        },
                                                        e.driversSettings && e.driversSettings.worker
                                                    ),
                                                },
                                                subscribeWidget: r({ enable: !1 }, e.subscribeWidget),
                                            }
                                        )),
                                        (this.subscribeWidgetConfig = b.subscribeWidget),
                                        (_ = localStorage.getItem(c.MANUAL_SET_LOGGER_LEVEL)),
                                        l.default.setLevel(_ || s),
                                        !u.canUseServiceWorkers())
                                    )
                                        return [3, 8];
                                    (this.driver = new h.default({
                                        eventEmitter: this._ee,
                                        scope: t,
                                        applicationCode: n,
                                        serviceWorkerUrl: b.serviceWorkerUrl,
                                        applicationServerPublicKey: b.driversSettings.worker.applicationServerPublicKey,
                                    })),
                                        (o.label = 3);
                                case 3:
                                    return (
                                        o.trys.push([3, 6, , 7]),
                                        this.driver && this.driver.initWorker ? [4, this.driver.initWorker()] : [3, 5]
                                    );
                                case 4:
                                    o.sent(), (o.label = 5);
                                case 5:
                                    return [3, 7];
                                case 6:
                                    return (
                                        (g = o.sent()),
                                        l.default.write('error', g, 'driver initialization failed'),
                                        [3, 7]
                                    );
                                case 7:
                                    return [3, 9];
                                case 8:
                                    if (!this.isSafari || !b.safariWebsitePushID)
                                        throw Error("can't initialize safari");
                                    (this.driver = new p.default({
                                        eventEmitter: this._ee,
                                        applicationCode: n,
                                        pushwooshUrl: f,
                                        pushwooshApiUrl: b.pushwooshApiUrl,
                                        webSitePushID: b.safariWebsitePushID,
                                    })),
                                        this._ee.on(c.EVENT_ON_READY, function() {
                                            var e = /#P(.*)/,
                                                t = decodeURIComponent(document.location.hash);
                                            e.test(t) && w.api.pushStat(e.exec(t)[1]).then(u.clearLocationHash);
                                        }),
                                        (o.label = 9);
                                case 9:
                                    return o.trys.push([9, 11, , 12]), [4, this.defaultProcess()];
                                case 10:
                                    return (
                                        o.sent(),
                                        'serviceWorker' in navigator &&
                                            (navigator.serviceWorker.onmessage = this.onServiceWorkerMessage),
                                        [3, 12]
                                    );
                                case 11:
                                    return (E = o.sent()), l.default.write('error', E, 'defaultProcess fail'), [3, 12];
                                case 12:
                                    return (
                                        (v = new CustomEvent('pushwoosh.initialized', { detail: { pw: this } })),
                                        document.dispatchEvent(v),
                                        [2]
                                    );
                            }
                        });
                    });
                }),
                (e.prototype.onServiceWorkerMessage = function(e) {
                    var t = (e || {}).data,
                        n = (void 0 === t ? {} : t) || {},
                        r = n.type,
                        i = n.payload;
                    this._ee.emit(void 0 === r ? '' : r, void 0 === i ? {} : i);
                }),
                (e.prototype.initApi = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t, n, i, s;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return (e = this.params), [4, this.driver.getAPIParams()];
                                case 1:
                                    return (t = o.sent()), [4, f.keyValue.get(c.KEY_LAST_OPEN_MESSAGE)];
                                case 2:
                                    return (
                                        (n = o.sent() || {}),
                                        (i = r({}, t, {
                                            deviceType: e.deviceType,
                                            deviceModel: e.tags['Device Model'],
                                            applicationCode: e.applicationCode,
                                            language: e.tags.Language,
                                            pushwooshApiUrl: e.pushwooshApiUrl,
                                        })),
                                        e.userId && (i.userId = e.userId),
                                        [
                                            4,
                                            Promise.all([
                                                f.keyValue.extend(c.KEY_INIT_PARAMS, u.validateParams(this.params)),
                                                f.keyValue.extend(c.KEY_API_PARAMS, t),
                                            ]),
                                        ]
                                    );
                                case 3:
                                    return (
                                        o.sent(),
                                        (s = d.default(e.applicationCode, e.pushwooshApiUrl)),
                                        (this.api = new a.default(s, i, n)),
                                        [2]
                                    );
                            }
                        });
                    });
                }),
                (e.prototype.subscribe = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t;
                        return o(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.isCommunicationEnabled()];
                                case 1:
                                    if (!n.sent()) return l.default.error('Communication is disabled'), [2];
                                    n.label = 2;
                                case 2:
                                    return n.trys.push([2, 9, , 10]), [4, this.driver.isSubscribed()];
                                case 3:
                                    return (e = n.sent()), [4, this.driver.askSubscribe(this.isDeviceRegistered())];
                                case 4:
                                    return (
                                        n.sent(),
                                        this.isDeviceRegistered() ? [3, 6] : [4, this.registerDuringSubscribe()]
                                    );
                                case 5:
                                    n.sent(), (n.label = 6);
                                case 6:
                                    return e ? [3, 8] : [4, this.onSubscribeEmitter()];
                                case 7:
                                    n.sent(), (n.label = 8);
                                case 8:
                                    return [3, 10];
                                case 9:
                                    return (t = n.sent()), l.default.write('error', t, 'subscribe fail'), [3, 10];
                                case 10:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.registerDuringSubscribe = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t;
                        return o(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.driver.isSubscribed()];
                                case 1:
                                    return (e = n.sent()), this.isSafari ? [4, this.needForcedOpen()] : [3, 4];
                                case 2:
                                    return (t = n.sent()), [4, this.open(t)];
                                case 3:
                                    n.sent(), (n.label = 4);
                                case 4:
                                    return [4, this.register(e)];
                                case 5:
                                    return n.sent(), [2];
                            }
                        });
                    });
                }),
                (e.prototype.onSubscribeEmitter = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.driver.isSubscribed()];
                                case 1:
                                    return e.sent() && this._ee.emit(c.EVENT_ON_SUBSCRIBE), [2];
                            }
                        });
                    });
                }),
                (e.prototype.unsubscribe = function(e) {
                    return (
                        void 0 === e && (e = !0),
                        i(this, void 0, void 0, function() {
                            var t;
                            return o(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 3, , 4]), [4, this.driver.unsubscribe()];
                                    case 1:
                                        return n.sent(), [4, this.api.unregisterDevice()];
                                    case 2:
                                        return n.sent(), e && this._ee.emit(c.EVENT_ON_UNSUBSCRIBE), [3, 4];
                                    case 3:
                                        return (
                                            (t = n.sent()),
                                            l.default.write('error', t, 'Error occurred during the unsubscribe'),
                                            [3, 4]
                                        );
                                    case 4:
                                        return [2];
                                }
                            });
                        })
                    );
                }),
                (e.prototype.isDeviceRegistered = function() {
                    return (
                        localStorage.getItem(c.KEY_DEVICE_REGISTRATION_STATUS) ===
                        c.DEVICE_REGISTRATION_STATUS_REGISTERED
                    );
                }),
                (e.prototype.isDeviceUnregistered = function() {
                    return (
                        localStorage.getItem(c.KEY_DEVICE_REGISTRATION_STATUS) ===
                        c.DEVICE_REGISTRATION_STATUS_UNREGISTERED
                    );
                }),
                (e.prototype.isSubscribed = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            return [
                                2,
                                ((this.isSafari || this.isDeviceRegistered()) && this.driver.isSubscribed()) || !1,
                            ];
                        });
                    });
                }),
                (e.prototype.register = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t, n, i, s, a, l;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (!this.api) throw Error('API is not inited');
                                    return [4, this.isCommunicationEnabled()];
                                case 1:
                                    return o.sent() ? [4, f.keyValue.getAll()] : [2];
                                case 2:
                                    return (
                                        (t = o.sent()),
                                        (n = t[c.KEY_SDK_VERSION]),
                                        (i = t[c.KEY_API_PARAMS]),
                                        (s = t[c.KEY_INIT_PARAMS]),
                                        [4, this.driver.getAPIParams()]
                                    );
                                case 3:
                                    return (
                                        (a = o.sent()),
                                        (l = this.params),
                                        !(
                                            u.getVersion() === n &&
                                            JSON.stringify(i) === JSON.stringify(a) &&
                                            JSON.stringify(s.tags) === JSON.stringify(l.tags)
                                        ) || e
                                            ? [
                                                  4,
                                                  Promise.all([
                                                      f.keyValue.set(c.KEY_API_PARAMS, a),
                                                      f.keyValue.extend(c.KEY_INIT_PARAMS, { tags: l.tags }),
                                                      f.keyValue.set(c.KEY_SDK_VERSION, u.getVersion()),
                                                  ]),
                                              ]
                                            : [3, 6]
                                    );
                                case 4:
                                    return (
                                        o.sent(),
                                        [
                                            4,
                                            Promise.all([
                                                this.api.registerDevice(),
                                                this.api.setTags(r({}, l.tags)),
                                                this.api.registerUser(),
                                            ]),
                                        ]
                                    );
                                case 5:
                                    o.sent(), this._ee.emit(c.EVENT_ON_REGISTER), (o.label = 6);
                                case 6:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.isCommunicationEnabled = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, f.keyValue.get(c.KEY_COMMUNICATION_ENABLED)];
                                case 1:
                                    return [2, 0 !== e.sent()];
                            }
                        });
                    });
                }),
                (e.prototype.setCommunicationEnabled = function(e) {
                    return (
                        void 0 === e && (e = !0),
                        i(this, void 0, void 0, function() {
                            var t;
                            return o(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!this.api) throw Error('API is not inited');
                                        return [4, this.getParams()];
                                    case 1:
                                        return (
                                            (t = n.sent().deviceType),
                                            [
                                                4,
                                                this.api.postEvent(c.EVENT_GDPR_CONSENT, {
                                                    channel: !!e,
                                                    device_type: t,
                                                }),
                                            ]
                                        );
                                    case 2:
                                        return n.sent(), [4, f.keyValue.set(c.KEY_COMMUNICATION_ENABLED, e ? 1 : 0)];
                                    case 3:
                                        return (
                                            n.sent(),
                                            this._ee.emit(c.EVENT_ON_CHANGE_COMMUNICATION_ENABLED, !!e),
                                            e ? [2, this.api.registerDevice()] : [2, this.api.unregisterDevice()]
                                        );
                                }
                            });
                        })
                    );
                }),
                (e.prototype.removeAllDeviceData = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t, n;
                        return o(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.api) throw Error('API is not inited');
                                    return [4, this.getParams()];
                                case 1:
                                    return (e = r.sent().deviceType), [4, this.api.getTags()];
                                case 2:
                                    return (
                                        (t = r.sent()),
                                        (n = Object.keys(t.result).reduce(function(e, t) {
                                            return (e[t] = null), e;
                                        }, {})),
                                        [4, this.api.postEvent(c.EVENT_GDPR_DELETE, { status: !0, device_type: e })]
                                    );
                                case 3:
                                    return (
                                        r.sent(), [4, Promise.all([this.api.setTags(n), this.api.unregisterDevice()])]
                                    );
                                case 4:
                                    return r.sent(), [2, f.keyValue.set(c.KEY_DEVICE_DATA_REMOVED, 1)];
                            }
                        });
                    });
                }),
                (e.prototype.open = function(e) {
                    return i(this, void 0, void 0, function() {
                        var t, n, r, i;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.driver.getAPIParams()];
                                case 1:
                                    return (
                                        (t = o.sent()), (n = Date.now()), [4, f.keyValue.get(c.KEY_LAST_SENT_APP_OPEN)]
                                    );
                                case 2:
                                    return (
                                        (r = o.sent()),
                                        (i = isNaN(r) ? 0 : +r),
                                        this.isSafari && !t.hwid
                                            ? [2, Promise.resolve()]
                                            : e || n - i > c.PERIOD_SEND_APP_OPEN
                                            ? [
                                                  4,
                                                  Promise.all([
                                                      f.keyValue.set(c.KEY_LAST_SENT_APP_OPEN, n || Date.now()),
                                                      this.api.applicationOpen(),
                                                  ]),
                                              ]
                                            : [3, 4]
                                    );
                                case 3:
                                    o.sent(), (o.label = 4);
                                case 4:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.needForcedOpen = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t, n, r;
                        return o(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.isSafari
                                        ? [4, f.keyValue.get(c.KEY_SAFARI_PREVIOUS_PERMISSION)]
                                        : [2, Promise.resolve(!1)];
                                case 1:
                                    return (e = i.sent()), [4, this.driver.getPermission()];
                                case 2:
                                    return (
                                        (t = i.sent()),
                                        (n = function(e, t) {
                                            return e !== c.PERMISSION_GRANTED && t === c.PERMISSION_GRANTED;
                                        }),
                                        [4, f.keyValue.set(c.KEY_SAFARI_PREVIOUS_PERMISSION, t)]
                                    );
                                case 3:
                                    return (
                                        i.sent(), (r = n(this.permissionOnInit, t) || n(e, t)), [2, Promise.resolve(r)]
                                    );
                            }
                        });
                    });
                }),
                (e.prototype.defaultProcess = function() {
                    return i(this, void 0, void 0, function() {
                        var e, t, n, r;
                        return o(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return (
                                        (t = void 0 === (e = (this.params || {}).autoSubscribe) || e),
                                        (n = this),
                                        [4, this.driver.getPermission()]
                                    );
                                case 1:
                                    return (n.permissionOnInit = i.sent()), [4, this.initApi()];
                                case 2:
                                    return i.sent(), [4, this.open()];
                                case 3:
                                    return (
                                        i.sent(),
                                        this.driver.isNeedUnsubscribe ? [4, this.driver.isNeedUnsubscribe()] : [3, 7]
                                    );
                                case 4:
                                    return i.sent() && this.isDeviceRegistered() ? [4, this.unsubscribe(!1)] : [3, 6];
                                case 5:
                                    i.sent(), (i.label = 6);
                                case 6:
                                    i.label = 7;
                                case 7:
                                    return this._isNeedResubscribe ? [4, this.unsubscribe(!1)] : [3, 9];
                                case 8:
                                    i.sent(), (i.label = 9);
                                case 9:
                                    return [4, f.keyValue.get(c.KEY_DEVICE_DATA_REMOVED)];
                                case 10:
                                    if (i.sent()) return l.default.error('Device data has been removed'), [2];
                                    switch (this.permissionOnInit) {
                                        case c.PERMISSION_DENIED:
                                            return [3, 11];
                                        case c.PERMISSION_PROMPT:
                                            return [3, 14];
                                        case c.PERMISSION_GRANTED:
                                            return [3, 20];
                                    }
                                    return [3, 23];
                                case 11:
                                    return (
                                        this._ee.emit(c.EVENT_ON_PERMISSION_DENIED),
                                        this.isSafari || !this.isDeviceRegistered() ? [3, 13] : [4, this.unsubscribe()]
                                    );
                                case 12:
                                    i.sent(), (i.label = 13);
                                case 13:
                                    return localStorage.removeItem(c.KEY_DEVICE_REGISTRATION_STATUS), [3, 24];
                                case 14:
                                    return this.isSafari || !this.isDeviceRegistered()
                                        ? [3, 16]
                                        : [4, this.unsubscribe()];
                                case 15:
                                    i.sent(), (i.label = 16);
                                case 16:
                                    return (
                                        localStorage.removeItem(c.KEY_DEVICE_REGISTRATION_STATUS),
                                        t ? [4, this.subscribe()] : [3, 18]
                                    );
                                case 17:
                                    return i.sent(), [3, 19];
                                case 18:
                                    this._ee.emit(c.EVENT_ON_PERMISSION_PROMPT), (i.label = 19);
                                case 19:
                                    return [3, 24];
                                case 20:
                                    return (
                                        this._ee.emit(c.EVENT_ON_PERMISSION_GRANTED),
                                        (this.isSafari || this.isDeviceRegistered() || this.isDeviceUnregistered()) &&
                                        !this._isNeedResubscribe
                                            ? [3, 22]
                                            : [4, this.subscribe()]
                                    );
                                case 21:
                                    i.sent(), (i.label = 22);
                                case 22:
                                    return [3, 24];
                                case 23:
                                    l.default.write('error', this.permissionOnInit, 'unknown permission value'),
                                        (i.label = 24);
                                case 24:
                                    return [4, this.initApi()];
                                case 25:
                                    return i.sent(), [4, this.register()];
                                case 26:
                                    return i.sent(), [4, this.needForcedOpen()];
                                case 27:
                                    return i.sent() ? [4, this.open(!0)] : [3, 29];
                                case 28:
                                    i.sent(), (i.label = 29);
                                case 29:
                                    return (
                                        this._ee.emit(c.EVENT_ON_READY),
                                        (this.ready = !0),
                                        [4, f.keyValue.get(c.KEY_DELAYED_EVENT)]
                                    );
                                case 30:
                                    return (r = i.sent()) ? [4, this._ee.emit(r.type, r.payload)] : [3, 33];
                                case 31:
                                    return i.sent(), [4, f.keyValue.set(c.KEY_DELAYED_EVENT, null)];
                                case 32:
                                    i.sent(), (i.label = 33);
                                case 33:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.getHWID = function() {
                    return i(this, void 0, void 0, function() {
                        var e;
                        return o(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.driver.getAPIParams()];
                                case 1:
                                    return (e = t.sent().hwid), [2, Promise.resolve(e)];
                            }
                        });
                    });
                }),
                (e.prototype.getPushToken = function() {
                    return i(this, void 0, void 0, function() {
                        var e;
                        return o(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.driver.getAPIParams()];
                                case 1:
                                    return (e = t.sent().pushToken), [2, Promise.resolve(e)];
                            }
                        });
                    });
                }),
                (e.prototype.getUserId = function() {
                    return i(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getParams()];
                                case 1:
                                    return [2, e.sent().userId || this.params.userId || null];
                            }
                        });
                    });
                }),
                (e.prototype.getParams = function() {
                    return i(this, void 0, void 0, function() {
                        var e;
                        return o(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, f.keyValue.getAll()];
                                case 1:
                                    return (e = t.sent()), [2, r({}, e[c.KEY_API_PARAMS], e[c.KEY_INIT_PARAMS])];
                            }
                        });
                    });
                }),
                e
            );
        })();
        t.default = b;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = (function() {
            function e() {
                this._events = {};
            }
            return (
                (e.prototype.emit = function(e, t) {
                    var n = this._events[e] && this._events[e].slice();
                    if (n && n.length) for (var r = 0; n.length > r; r++) n[r](t);
                }),
                (e.prototype.on = function(e, t) {
                    return this._events[e] || (this._events[e] = []), this._events[e].push(t), this;
                }),
                (e.prototype.once = function(e, t) {
                    var n = this,
                        r = !1,
                        i = function(o) {
                            if (!r) return (r = !0), n.removeListener(e, i), t(o);
                        };
                    return this.on(e, i);
                }),
                (e.prototype.removeListener = function(e, t) {
                    var n = this._events[e];
                    if (n) {
                        var r = n.indexOf(t);
                        r > -1 && n.splice(r, 1), 1 > n.length && delete this._events[e];
                    }
                }),
                e
            );
        })();
        t.default = r;
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                u(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            e.done
                                ? i(e.value)
                                : new n(function(t) {
                                      t(e.value);
                                  }).then(s, a);
                        }
                        u((r = r.apply(e, t || [])).next());
                    });
                },
            i =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: a(0), throw: a(1), return: a(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function a(o) {
                        return function(a) {
                            return (function(o) {
                                if (n) throw new TypeError('Generator is already executing.');
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i = r[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (((r = 0), i && (o = [0, i.value]), o[0])) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return s.label++, { value: o[1], done: !1 };
                                            case 5:
                                                s.label++, (r = o[1]), (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                                                    (6 === o[0] || 2 === o[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === o[0] && (!i || (o[1] > i[0] && i[3] > o[1]))) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (6 === o[0] && i[1] > s.label) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && i[2] > s.label) {
                                                    (s.label = i[2]), s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, a]);
                        };
                    }
                };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(0),
            s = n(1),
            a = n(2),
            u = n(3),
            c = (function() {
                function e(e) {
                    this.params = e;
                }
                return (
                    (e.prototype.initWorker = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t, n, r, a;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return (
                                            (t = (e = this.params).serviceWorkerUrl),
                                            (r = (n = e.scope) ? { scope: n } : void 0),
                                            (a =
                                                null === t
                                                    ? '/' + s.DEFAULT_SERVICE_WORKER_URL + '?version=' + o.getVersion()
                                                    : t + '?version=' + o.getVersion()),
                                            [4, navigator.serviceWorker.register(a, r)]
                                        );
                                    case 1:
                                        return i.sent(), [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.getPermission = function() {
                        return r(this, void 0, void 0, function() {
                            return i(this, function(e) {
                                return [2, Notification.permission];
                            });
                        });
                    }),
                    (e.prototype.isSubscribed = function() {
                        return r(this, void 0, void 0, function() {
                            var e;
                            return i(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, navigator.serviceWorker.getRegistration()];
                                    case 1:
                                        return (e = t.sent()) ? [4, e.pushManager.getSubscription()] : [2, !1];
                                    case 2:
                                        return [2, !!t.sent()];
                                }
                            });
                        });
                    }),
                    (e.prototype.emit = function(e) {
                        var t = (this.params || {}).eventEmitter;
                        (void 0 === t
                            ? {
                                  emit: function(e) {
                                      return e;
                                  },
                              }
                            : t
                        ).emit(e);
                    }),
                    (e.prototype.askSubscribe = function(e) {
                        return r(this, void 0, void 0, function() {
                            var t, n, r;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, navigator.serviceWorker.ready];
                                    case 1:
                                        return [4, (t = i.sent()).pushManager.getSubscription()];
                                    case 2:
                                        return (n = i.sent()) && n.unsubscribe && e ? [4, n.unsubscribe()] : [3, 4];
                                    case 3:
                                        i.sent(), (i.label = 4);
                                    case 4:
                                        return [4, a.keyValue.get(s.KEY_DEVICE_DATA_REMOVED)];
                                    case 5:
                                        return i.sent()
                                            ? (u.default.error('Device data has been removed'), [2])
                                            : [4, window.Notification.requestPermission()];
                                    case 6:
                                        return (r = i.sent()) !== s.PERMISSION_GRANTED
                                            ? [3, 8]
                                            : [4, this.subscribe(t)];
                                    case 7:
                                        return [2, i.sent()];
                                    case 8:
                                        r === s.PERMISSION_DENIED && this.emit(s.EVENT_ON_PERMISSION_DENIED),
                                            (i.label = 9);
                                    case 9:
                                        return [2, n];
                                }
                            });
                        });
                    }),
                    (e.prototype.subscribe = function(e) {
                        return r(this, void 0, void 0, function() {
                            var t, n;
                            return i(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, a.keyValue.get(s.KEY_DEVICE_DATA_REMOVED)];
                                    case 1:
                                        return r.sent()
                                            ? (u.default.error('Device data has been removed'), [2])
                                            : ((t = { userVisibleOnly: !0 }),
                                              11 == o.getBrowserType() &&
                                                  this.params.applicationServerPublicKey &&
                                                  (t.applicationServerKey = o.urlB64ToUint8Array(
                                                      this.params.applicationServerPublicKey
                                                  )),
                                              [4, e.pushManager.subscribe(t)]);
                                    case 2:
                                        return (
                                            (n = r.sent()),
                                            this.emit(s.EVENT_ON_PERMISSION_GRANTED),
                                            [4, this.getFCMToken()]
                                        );
                                    case 3:
                                        return r.sent(), [2, n];
                                }
                            });
                        });
                    }),
                    (e.prototype.unsubscribe = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t;
                            return i(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, navigator.serviceWorker.getRegistration()];
                                    case 1:
                                        return (e = n.sent()) ? [4, e.pushManager.getSubscription()] : [2, !1];
                                    case 2:
                                        return (t = n.sent()) && t.unsubscribe ? [2, t.unsubscribe()] : [2, !1];
                                }
                            });
                        });
                    }),
                    (e.prototype.getAPIParams = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t, n, r, u;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, navigator.serviceWorker.getRegistration()];
                                    case 1:
                                        return i.sent() ? [3, 3] : ((e = s.KEY_API_PARAMS), [4, a.keyValue.getAll()]);
                                    case 2:
                                        if ((t = i.sent()[e])) return [2, t];
                                        throw (this.emit(s.EVENT_ON_SW_INIT_ERROR),
                                        Error('No service worker registration'));
                                    case 3:
                                        return [4, navigator.serviceWorker.ready];
                                    case 4:
                                        return [4, i.sent().pushManager.getSubscription()];
                                    case 5:
                                        return (
                                            (n = i.sent()),
                                            (r = o.getPushToken(n)),
                                            (u = {
                                                pushToken: r,
                                                hwid: o.generateHwid(this.params.applicationCode, r),
                                                publicKey: o.getPublicKey(n),
                                                authToken: o.getAuthToken(n),
                                            }),
                                            [4, o.getFcmKey(n, 'pushSet')]
                                        );
                                    case 6:
                                        return (u.fcmPushSet = i.sent()), [4, o.getFcmKey(n, 'token')];
                                    case 7:
                                        return [2, ((u.fcmToken = i.sent()), u)];
                                }
                            });
                        });
                    }),
                    (e.prototype.getFCMToken = function() {
                        return r(this, void 0, void 0, function() {
                            var e,
                                t,
                                n,
                                r,
                                u,
                                c = this;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, navigator.serviceWorker.getRegistration()];
                                    case 1:
                                        return (
                                            (e = i.sent()),
                                            (t = null),
                                            e ? [4, e.pushManager.getSubscription()] : [3, 3]
                                        );
                                    case 2:
                                        (t = i.sent()), (i.label = 3);
                                    case 3:
                                        return [4, a.keyValue.get(s.KEY_SENDER_ID)];
                                    case 4:
                                        return (
                                            (n = i.sent()),
                                            (r = 'https://fcm.googleapis.com/fcm/connect/subscribe'),
                                            n
                                                ? ((u = {
                                                      endpoint: t ? t.endpoint : '',
                                                      encryption_key: o.getPublicKey(t),
                                                      encryption_auth: o.getAuthToken(t),
                                                      authorized_entity: n,
                                                  }),
                                                  [
                                                      4,
                                                      fetch(r, {
                                                          method: 'post',
                                                          headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
                                                          body: JSON.stringify(u),
                                                      }).then(function(e) {
                                                          return c.onFCMSubscribe(e);
                                                      }),
                                                  ])
                                                : (console.warn('SenderID can not be found'), [2])
                                        );
                                    case 5:
                                        return i.sent(), [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.onFCMSubscribe = function(e) {
                        return r(this, void 0, void 0, function() {
                            var t, n;
                            return i(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (200 !== e.status) return [3, 6];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 4, , 5]), [4, e.json()];
                                    case 2:
                                        return (
                                            (t = r.sent()),
                                            [
                                                4,
                                                a.keyValue.set(s.KEY_FCM_SUBSCRIPTION, {
                                                    token: t.token || '',
                                                    pushSet: t.pushSet || '',
                                                }),
                                            ]
                                        );
                                    case 3:
                                        return r.sent(), [3, 5];
                                    case 4:
                                        return (n = r.sent()), console.warn("Can't parse FCM response", n), [3, 5];
                                    case 5:
                                        return [3, 7];
                                    case 6:
                                        return console.warn('Error while FCM Subscribe', e.text()), [2];
                                    case 7:
                                        return [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.isNeedUnsubscribe = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t;
                            return i(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.checkSenderId()];
                                    case 1:
                                        return (e = n.sent()), [4, this.checkFCMKeys()];
                                    case 2:
                                        return (t = n.sent()), [2, !e || !t];
                                }
                            });
                        });
                    }),
                    (e.prototype.checkFCMKeys = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t, n;
                            return i(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, a.keyValue.get(s.KEY_FCM_SUBSCRIPTION)];
                                    case 1:
                                        return (
                                            (e = r.sent() || {}),
                                            (n = e.token),
                                            [2, !(!(void 0 === (t = e.pushSet) ? '' : t) || !(void 0 === n ? '' : n))]
                                        );
                                }
                            });
                        });
                    }),
                    (e.prototype.checkSenderId = function() {
                        return r(this, void 0, void 0, function() {
                            var e,
                                t,
                                n = this;
                            return i(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (null === (e = document.querySelector('link[rel="manifest"]')))
                                            throw Error('Link to manifest can not find');
                                        return (
                                            (t = e.getAttribute('href') || ''),
                                            [
                                                4,
                                                fetch(t, {
                                                    method: 'get',
                                                    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
                                                }).then(function(e) {
                                                    return n.isSameManifest(e);
                                                }),
                                            ]
                                        );
                                    case 1:
                                        return [2, r.sent()];
                                }
                            });
                        });
                    }),
                    (e.prototype.isSameManifest = function(e) {
                        return r(this, void 0, void 0, function() {
                            var t, n, r, o;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return 200 !== e.status ? [3, 5] : [4, e.text()];
                                    case 1:
                                        return (
                                            (t = i.sent()),
                                            (n = t.match(/("|')?gcm_sender_id("|')?:\s*("|')?(\d+)("|')?/)),
                                            (r = ''),
                                            n && (r = n[4]),
                                            [4, a.keyValue.get(s.KEY_SENDER_ID)]
                                        );
                                    case 2:
                                        return (
                                            (o = i.sent()),
                                            r && o !== r ? [4, a.keyValue.set(s.KEY_SENDER_ID, r)] : [3, 4]
                                        );
                                    case 3:
                                        return i.sent(), [2, !1];
                                    case 4:
                                        return [2, !0];
                                    case 5:
                                        throw Error('Cant load manifest.json');
                                }
                            });
                        });
                    }),
                    e
                );
            })();
        t.default = c;
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                u(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            e.done
                                ? i(e.value)
                                : new n(function(t) {
                                      t(e.value);
                                  }).then(s, a);
                        }
                        u((r = r.apply(e, t || [])).next());
                    });
                },
            i =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: a(0), throw: a(1), return: a(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function a(o) {
                        return function(a) {
                            return (function(o) {
                                if (n) throw new TypeError('Generator is already executing.');
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i = r[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (((r = 0), i && (o = [0, i.value]), o[0])) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return s.label++, { value: o[1], done: !1 };
                                            case 5:
                                                s.label++, (r = o[1]), (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                                                    (6 === o[0] || 2 === o[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === o[0] && (!i || (o[1] > i[0] && i[3] > o[1]))) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (6 === o[0] && i[1] > s.label) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && i[2] > s.label) {
                                                    (s.label = i[2]), s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, a]);
                        };
                    }
                };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(0),
            s = n(1),
            a = (function() {
                function e(e) {
                    this.params = e;
                }
                return (
                    (e.prototype.getPermissionObject = function() {
                        return safari.pushNotification.permission(this.params.webSitePushID);
                    }),
                    (e.prototype.getPermission = function() {
                        return r(this, void 0, void 0, function() {
                            return i(this, function(e) {
                                return [2, this.getPermissionObject().permission];
                            });
                        });
                    }),
                    (e.prototype.isSubscribed = function() {
                        return r(this, void 0, void 0, function() {
                            return i(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.getPermission()];
                                    case 1:
                                        return [2, e.sent() === s.PERMISSION_GRANTED];
                                }
                            });
                        });
                    }),
                    (e.prototype.askSubscribe = function() {
                        var e = this.params || {},
                            t = e.eventEmitter,
                            n =
                                void 0 === t
                                    ? {
                                          emit: function(e) {
                                              return e;
                                          },
                                      }
                                    : t,
                            r = e.applicationCode,
                            i = void 0 === r ? '' : r,
                            a = e.webSitePushID,
                            u = void 0 === a ? '' : a,
                            c = e.pushwooshApiUrl,
                            l = void 0 === c ? '' : c;
                        return new Promise(function(e, t) {
                            o.getPushwooshUrl(i, l).then(function(r) {
                                safari.pushNotification.requestPermission(r + 'safari', u, { application: i }, function(
                                    r
                                ) {
                                    r.permission === s.PERMISSION_GRANTED
                                        ? (n.emit(s.EVENT_ON_PERMISSION_GRANTED), e(!0))
                                        : (n.emit(s.EVENT_ON_PERMISSION_DENIED), t('Safari permission denied'));
                                });
                            });
                        });
                    }),
                    (e.prototype.unsubscribe = function() {
                        return new Promise(function(e) {
                            return e(!0);
                        });
                    }),
                    (e.prototype.getAPIParams = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t, n, r;
                            return i(this, function(i) {
                                return (
                                    (e = (this.getPermissionObject() || {}).deviceToken),
                                    (n = ((t = void 0 === e ? '' : e) && t.toLowerCase()) || ''),
                                    (r = (t && t.toUpperCase()) || ''),
                                    [2, { hwid: n, pushToken: r }]
                                );
                            });
                        });
                    }),
                    e
                );
            })();
        t.default = a;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(3),
            i = n(2),
            o = n(1),
            s = n(0);
        t.default = function(e, t) {
            return function(n, a) {
                return new Promise(function(u, c) {
                    s.getPushwooshUrl(e, t).then(function(e) {
                        try {
                            var t = '' + e + n,
                                s = { request: a },
                                l = new XMLHttpRequest();
                            l.open('POST', t, !0),
                                l.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8'),
                                (l.onload = function() {
                                    if (200 == l.status)
                                        try {
                                            var e = JSON.parse(l.responseText),
                                                t = (e || {}).base_url,
                                                s = void 0 === t ? null : t;
                                            s && i.keyValue.set(o.KEY_API_BASE_URL, s),
                                                200 == e.status_code
                                                    ? (r.default.write(
                                                          'apirequest',
                                                          n +
                                                              ' call with arguments: ' +
                                                              JSON.stringify(a) +
                                                              ' to Pushwoosh has been successful. Result: ' +
                                                              JSON.stringify(e.response),
                                                          'createDoApiXHR'
                                                      ),
                                                      u(e.response))
                                                    : (i.keyValue.set(o.KEY_API_BASE_URL, null),
                                                      r.logAndRejectError(
                                                          'Error occurred during the ' +
                                                              n +
                                                              ' call to Pushwoosh: ' +
                                                              e.status_message,
                                                          c
                                                      ));
                                        } catch (e) {
                                            i.keyValue.set(o.KEY_API_BASE_URL, null),
                                                r.logAndRejectError('Error parse responce: ' + e, c);
                                        }
                                    else
                                        i.keyValue.set(o.KEY_API_BASE_URL, null),
                                            r.logAndRejectError('Error occurred, status code: ' + l.status, c);
                                }),
                                (l.onerror = function(e) {
                                    r.logAndRejectError('Pushwoosh response to ' + n + ' call in not ok: ' + e, c);
                                }),
                                l.send(JSON.stringify(s));
                        } catch (e) {
                            r.logAndRejectError('Exception while ' + n + ' the device: ' + e, c);
                        }
                    });
                });
            };
        };
    },
    function(e, t, n) {
        'use strict';
        var r =
                (this && this.__awaiter) ||
                function(e, t, n, r) {
                    return new (n || (n = Promise))(function(i, o) {
                        function s(e) {
                            try {
                                u(r.next(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function a(e) {
                            try {
                                u(r.throw(e));
                            } catch (e) {
                                o(e);
                            }
                        }
                        function u(e) {
                            e.done
                                ? i(e.value)
                                : new n(function(t) {
                                      t(e.value);
                                  }).then(s, a);
                        }
                        u((r = r.apply(e, t || [])).next());
                    });
                },
            i =
                (this && this.__generator) ||
                function(e, t) {
                    var n,
                        r,
                        i,
                        o,
                        s = {
                            label: 0,
                            sent: function() {
                                if (1 & i[0]) throw i[1];
                                return i[1];
                            },
                            trys: [],
                            ops: [],
                        };
                    return (
                        (o = { next: a(0), throw: a(1), return: a(2) }),
                        'function' == typeof Symbol &&
                            (o[Symbol.iterator] = function() {
                                return this;
                            }),
                        o
                    );
                    function a(o) {
                        return function(a) {
                            return (function(o) {
                                if (n) throw new TypeError('Generator is already executing.');
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            r &&
                                                (i = r[2 & o[0] ? 'return' : o[0] ? 'throw' : 'next']) &&
                                                !(i = i.call(r, o[1])).done)
                                        )
                                            return i;
                                        switch (((r = 0), i && (o = [0, i.value]), o[0])) {
                                            case 0:
                                            case 1:
                                                i = o;
                                                break;
                                            case 4:
                                                return s.label++, { value: o[1], done: !1 };
                                            case 5:
                                                s.label++, (r = o[1]), (o = [0]);
                                                continue;
                                            case 7:
                                                (o = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                                                    (6 === o[0] || 2 === o[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === o[0] && (!i || (o[1] > i[0] && i[3] > o[1]))) {
                                                    s.label = o[1];
                                                    break;
                                                }
                                                if (6 === o[0] && i[1] > s.label) {
                                                    (s.label = i[1]), (i = o);
                                                    break;
                                                }
                                                if (i && i[2] > s.label) {
                                                    (s.label = i[2]), s.ops.push(o);
                                                    break;
                                                }
                                                i[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        o = t.call(e, s);
                                    } catch (e) {
                                        (o = [6, e]), (r = 0);
                                    } finally {
                                        n = i = 0;
                                    }
                                if (5 & o[0]) throw o[1];
                                return { value: o[0] ? o[1] : void 0, done: !0 };
                            })([o, a]);
                        };
                    }
                };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o = n(1),
            s = n(0),
            a = n(5),
            u = n(13),
            c = n(14),
            l = (function() {
                function e(e) {
                    var t = this;
                    if (((this.pw = e), this.pw.shouldInit())) {
                        (this.clickBell = this.clickBell.bind(this)),
                            (this.onSubscribeEvent = this.onSubscribeEvent.bind(this)),
                            (this.onPermissionDeniedEvent = this.onPermissionDeniedEvent.bind(this)),
                            (this.clickOutOfPopover = this.clickOutOfPopover.bind(this));
                        var n = Object.assign(
                            a.SUBSCRIBE_WIDGET_DEFAULT_CONFIG.tooltipText,
                            this.pw.subscribeWidgetConfig.tooltipText
                        );
                        (this.config = Object.assign(a.SUBSCRIBE_WIDGET_DEFAULT_CONFIG, this.pw.subscribeWidgetConfig)),
                            (this.config.tooltipText = n),
                            this.pw.isSubscribed().then(function(e) {
                                e || t.pw.isDeviceUnregistered() || t.render();
                            });
                    } else console.warn('Browser does not support push notifications');
                }
                return (
                    (e.prototype.addStylesToElement = function(e, t) {
                        Object.keys(e).forEach(function(n) {
                            t.style[n] = e[n];
                        });
                    }),
                    (e.prototype.createContainer = function() {
                        var e = document.createElement('div');
                        (e.id = a.WIDGET_CONTAINER_ID), (e.className = 'pushwoosh-subscribe-widget');
                        var t = u.default.getBellPosition(this.config.position, this.config.indent),
                            n = Object.assign({ zIndex: this.config.zIndex }, t);
                        return this.addStylesToElement(n, e), e;
                    }),
                    (e.prototype.createStyle = function() {
                        var e = n(15),
                            t = document.createElement('style');
                        return (t.innerHTML = e), t;
                    }),
                    (e.prototype.createBell = function() {
                        var e = document.createElement('div');
                        return (
                            (e.className = 'pushwoosh-subscribe-widget__bell-button'),
                            this.addStylesToElement(
                                {
                                    width: this.config.size,
                                    height: this.config.size,
                                    backgroundColor: this.config.bgColor,
                                    boxShadow: this.config.shadow,
                                    lineHeight: this.config.size,
                                    border: this.config.bellButtonBorder,
                                },
                                e
                            ),
                            (e.innerHTML = c.default(this.config.bellColor, this.config.bellStrokeColor)),
                            e
                        );
                    }),
                    (e.prototype.createTooltip = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t, n, r, o;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return (
                                            (e = document.createElement('div')),
                                            (t = u.default.getTooltipPosition(this.config.position, this.config.size)),
                                            (n = t[0]),
                                            (e.className =
                                                'pushwoosh-subscribe-widget__tooltip pushwoosh-subscribe-widget__tooltip__' +
                                                t[1]),
                                            this.addStylesToElement(n, e),
                                            (o = (r = e).appendChild),
                                            [4, this.createTooltipContent()]
                                        );
                                    case 1:
                                        return o.call(r, i.sent()), [2, e];
                                }
                            });
                        });
                    }),
                    (e.prototype.createTooltipContent = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t;
                            return i(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return (
                                            (e = document.createElement('div')), (t = e), [4, this.tooltipTextFactory()]
                                        );
                                    case 1:
                                        return (
                                            (t.innerText = n.sent()),
                                            (e.className = 'pushwoosh-subscribe-widget__tooltip-content'),
                                            [2, e]
                                        );
                                }
                            });
                        });
                    }),
                    (e.prototype.tooltipTextFactory = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t;
                            return i(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.pw.driver.getPermission()];
                                    case 1:
                                        switch (((e = n.sent()), (t = this.config.tooltipText), e)) {
                                            case o.PERMISSION_GRANTED:
                                                return [2, t.alreadySubscribed];
                                            case o.PERMISSION_PROMPT:
                                                return [2, t.needSubscribe];
                                            case o.PERMISSION_DENIED:
                                                return [2, t.blockSubscribe];
                                            default:
                                                return [2, t.needSubscribe];
                                        }
                                        return [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.createPopover = function() {
                        var e = document.createElement('div'),
                            t = document.createElement('div'),
                            n = u.default.getPopoverPosition(this.config.position, this.config.size),
                            r = n[0];
                        (t.className =
                            'pushwoosh-subscribe-widget__popover pushwoosh-subscribe-widget__popover__' + n[1]),
                            (e.className = 'pushwoosh-subscribe-widget__popover-content-wrapper'),
                            (this.style.innerHTML += u.default.getPopoverArrowPosition(
                                this.config.position,
                                this.config.size
                            ));
                        var i = Object.assign(
                            { maxWidth: 'calc(100vw - ' + this.config.indent + ' - ' + this.config.indent + ')' },
                            r
                        );
                        return (
                            this.addStylesToElement(i, t),
                            e.appendChild(this.createPopoverContent()),
                            t.appendChild(e),
                            t
                        );
                    }),
                    (e.prototype.createPopoverContent = function() {
                        var e = document.createElement('div');
                        e.className = 'pushwoosh-subscribe-widget__popover-content';
                        var t = document.createElement('img');
                        (t.width = 500), (t.height = 130);
                        var n,
                            r = document.createElement('img');
                        return (
                            (r.width = 500),
                            (r.height = 230),
                            (n = this.helpImageSourceFactory()),
                            (t.src = n[0]),
                            (r.src = n[1]),
                            e.appendChild(t),
                            e.appendChild(r),
                            e
                        );
                    }),
                    (e.prototype.helpImageSourceFactory = function() {
                        var e, t;
                        if (s.isOperaBrowser())
                            return [
                                (e = 'https://cdn.pushwoosh.com/webpush/img/opera.jpg'),
                                (t = 'https://cdn.pushwoosh.com/webpush/img/opera_unlock.jpg'),
                            ];
                        switch (s.getBrowserType()) {
                            case o.BROWSER_TYPE_CHROME:
                                navigator.userAgent.match(/Android/i)
                                    ? ((e = 'https://cdn.pushwoosh.com/webpush/img/mobile_chrome.jpg'),
                                      (t = 'https://cdn.pushwoosh.com/webpush/img/mobile_chrome_unlock.jpg'))
                                    : ((e = 'https://cdn.pushwoosh.com/webpush/img/chrome.jpg'),
                                      (t = 'https://cdn.pushwoosh.com/webpush/img/chrome_unlock.jpg'));
                                break;
                            case o.BROWSER_TYPE_FF:
                                (e = 'https://cdn.pushwoosh.com/webpush/img/FF.jpg'),
                                    (t = 'https://cdn.pushwoosh.com/webpush/img/FF_unlock.jpg');
                                break;
                            case o.BROWSER_TYPE_SAFARI:
                                (e = 'https://cdn.pushwoosh.com/webpush/img/safari.jpg'),
                                    (t = 'https://cdn.pushwoosh.com/webpush/img/safari_unlock.jpg');
                                break;
                            default:
                                (e = 'https://cdn.pushwoosh.com/webpush/img/chrome.jpg'),
                                    (t = 'https://cdn.pushwoosh.com/webpush/img/chrome_unlock.jpg');
                        }
                        return [e, t];
                    }),
                    (e.prototype.render = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t, n;
                            return i(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return (
                                            (this.widget = this.createContainer()),
                                            (this.style = this.createStyle()),
                                            (e = this.createBell()),
                                            (t = this),
                                            [4, this.createTooltip()]
                                        );
                                    case 1:
                                        return (t.tooltip = r.sent()), (n = this), [4, this.createPopover()];
                                    case 2:
                                        return (
                                            (n.popover = r.sent()),
                                            this.widget.appendChild(this.style),
                                            this.widget.appendChild(e),
                                            this.widget.appendChild(this.tooltip),
                                            this.widget.appendChild(this.popover),
                                            document.body.appendChild(this.widget),
                                            e.addEventListener('click', this.clickBell),
                                            this.pw.push(['onSubscribe', this.onSubscribeEvent]),
                                            this.pw.push(['onPermissionDenied', this.onPermissionDeniedEvent]),
                                            window.addEventListener('click', this.clickOutOfPopover),
                                            [
                                                4,
                                                this.triggerPwEvent(
                                                    o.EVENT_SHOW_SUBSCRIBE_BUTTON,
                                                    o.KEY_SHOW_SUBSCRIBE_WIDGET
                                                ),
                                            ]
                                        );
                                    case 3:
                                        return r.sent(), [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.toggleHelpPopover = function() {
                        this.popover.classList.toggle('pushwoosh-subscribe-widget__popover__visible');
                    }),
                    (e.prototype.clickBell = function() {
                        return r(this, void 0, void 0, function() {
                            var e;
                            return i(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.pw.driver.getPermission()];
                                    case 1:
                                        return (
                                            (e = t.sent()),
                                            [
                                                4,
                                                this.triggerPwEvent(
                                                    o.EVENT_CLICK_SUBSCRIBE_BUTTON,
                                                    o.KEY_CLICK_SUBSCRIBE_WIDGET
                                                ),
                                            ]
                                        );
                                    case 2:
                                        switch ((t.sent(), e)) {
                                            case o.PERMISSION_GRANTED:
                                                return [2];
                                            case o.PERMISSION_PROMPT:
                                                return this.pw.subscribe(), [2];
                                            case o.PERMISSION_DENIED:
                                                return this.toggleHelpPopover(), [2];
                                            default:
                                                console.warn('Unknown browser notification permission');
                                        }
                                        return [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.onSubscribeEvent = function() {
                        return r(this, void 0, void 0, function() {
                            var e,
                                t = this;
                            return i(this, function(n) {
                                return null === (e = this.tooltip.querySelector('div'))
                                    ? [2]
                                    : ((e.innerText = this.config.tooltipText.successSubscribe),
                                      this.tooltip.classList.add('pushwoosh-subscribe-widget__tooltip__visible'),
                                      setTimeout(function() {
                                          return r(t, void 0, void 0, function() {
                                              var t;
                                              return i(this, function(n) {
                                                  switch (n.label) {
                                                      case 0:
                                                          return (
                                                              this.tooltip.classList.remove(
                                                                  'pushwoosh-subscribe-widget__tooltip__visible'
                                                              ),
                                                              (t = e),
                                                              [4, this.tooltipTextFactory()]
                                                          );
                                                      case 1:
                                                          return (
                                                              (t.innerText = n.sent()),
                                                              this.widget.classList.add(
                                                                  'pushwoosh-subscribe-widget__subscribed'
                                                              ),
                                                              [2]
                                                          );
                                                  }
                                              });
                                          });
                                      }, 2e3),
                                      [2]);
                            });
                        });
                    }),
                    (e.prototype.onPermissionDeniedEvent = function() {
                        return r(this, void 0, void 0, function() {
                            var e, t;
                            return i(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return null === (e = this.tooltip.querySelector('div'))
                                            ? [2]
                                            : ((t = e), [4, this.tooltipTextFactory()]);
                                    case 1:
                                        return (t.innerText = n.sent()), [2];
                                }
                            });
                        });
                    }),
                    (e.prototype.clickOutOfPopover = function(e) {
                        this.popover.classList.contains('pushwoosh-subscribe-widget__popover__visible') &&
                            !e.target.classList.contains('pushwoosh-subscribe-widget__popover') &&
                            null === e.target.closest('.pushwoosh-subscribe-widget__popover') &&
                            !e.target.classList.contains('pushwoosh-subscribe-widget__bell-button') &&
                            null === e.target.closest('.pushwoosh-subscribe-widget__bell-button') &&
                            this.popover.classList.remove('pushwoosh-subscribe-widget__popover__visible');
                    }),
                    (e.prototype.triggerPwEvent = function(e, t) {
                        return r(this, void 0, void 0, function() {
                            var n;
                            return i(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return void 0 === this.pw.api ? [2] : [4, this.pw.getParams()];
                                    case 1:
                                        return (
                                            (n = r.sent().applicationCode),
                                            this.pw.api.triggerEvent({ event_id: e, application: n }, t),
                                            [2]
                                        );
                                }
                            });
                        });
                    }),
                    e
                );
            })();
        document.addEventListener('pushwoosh.initialized', function(e) {
            e.detail.pw.subscribeWidgetConfig.enable && new l(e.detail.pw);
        });
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = n(5),
            i = (function() {
                function e() {}
                return (
                    (e.getBellPosition = function(e, t) {
                        var n;
                        switch (e) {
                            case r.BELL_POSITION_BOTTOM_RIGHT:
                                n = { top: 'auto', left: 'auto', bottom: t, right: t };
                                break;
                            case r.BELL_POSITION_BOTTOM_LEFT:
                                n = { top: 'auto', left: t, bottom: t, right: 'auto' };
                                break;
                            case r.BELL_POSITION_TOP_LEFT:
                                n = { top: t, left: t, bottom: 'auto', right: 'auto' };
                                break;
                            case r.BELL_POSITION_TOP_RIGHT:
                                n = { top: t, left: 'auto', bottom: 'auto', right: t };
                                break;
                            default:
                                n = { top: 'auto', left: 'auto', bottom: t, right: t };
                        }
                        return n;
                    }),
                    (e.getTooltipPosition = function(e, t) {
                        var n,
                            i,
                            o = parseInt(t) + 12 + 'px';
                        switch (e) {
                            case r.BELL_POSITION_BOTTOM_RIGHT:
                                (n = { right: o }), (i = 'right');
                                break;
                            case r.BELL_POSITION_BOTTOM_LEFT:
                            case r.BELL_POSITION_TOP_LEFT:
                                (n = { left: o }), (i = 'left');
                                break;
                            case r.BELL_POSITION_TOP_RIGHT:
                                (n = { right: o }), (i = 'right');
                                break;
                            default:
                                (n = { right: o }), (i = 'right');
                        }
                        return [n, i];
                    }),
                    (e.getPopoverPosition = function(e, t) {
                        var n,
                            i,
                            o = parseInt(t) + 15 + 'px';
                        switch (e) {
                            case r.BELL_POSITION_BOTTOM_RIGHT:
                                (n = { bottom: o, right: '0', left: 'auto', top: 'auto' }), (i = 'bottom');
                                break;
                            case r.BELL_POSITION_BOTTOM_LEFT:
                                (n = { bottom: o, left: '0', right: 'auto', top: 'auto' }), (i = 'bottom');
                                break;
                            case r.BELL_POSITION_TOP_LEFT:
                                (n = { top: o, left: '0', right: 'auto', bottom: 'auto' }), (i = 'top');
                                break;
                            case r.BELL_POSITION_TOP_RIGHT:
                                (n = { top: o, right: '0', left: 'auto', bottom: 'auto' }), (i = 'top');
                                break;
                            default:
                                (n = { bottom: o, right: '0', left: 'auto', top: 'auto' }), (i = 'bottom');
                        }
                        return [n, i];
                    }),
                    (e.getPopoverArrowPosition = function(e, t) {
                        var n;
                        switch (e) {
                            case r.BELL_POSITION_BOTTOM_RIGHT:
                                n =
                                    '\n.pushwoosh-subscribe-widget__popover__bottom:after {left: auto; right: ' +
                                    (parseInt(t) / 2 - 4) +
                                    'px';
                                break;
                            case r.BELL_POSITION_BOTTOM_LEFT:
                                n =
                                    '\n.pushwoosh-subscribe-widget__popover__bottom:after {right: auto; left: ' +
                                    (parseInt(t) / 2 - 12) +
                                    'px';
                                break;
                            case r.BELL_POSITION_TOP_LEFT:
                                n =
                                    '\n.pushwoosh-subscribe-widget__popover__top:after {right: auto; left: ' +
                                    (parseInt(t) / 2 - 12) +
                                    'px';
                                break;
                            case r.BELL_POSITION_TOP_RIGHT:
                                n =
                                    '\n.pushwoosh-subscribe-widget__popover__top:after {left: auto; right: ' +
                                    (parseInt(t) / 2 - 4) +
                                    'px';
                                break;
                            default:
                                n =
                                    '\n.pushwoosh-subscribe-widget__popover__bottom:after {left: auto; right: ' +
                                    (parseInt(t) / 2 - 4) +
                                    'px';
                        }
                        return n;
                    }),
                    e
                );
            })();
        t.default = i;
    },
    function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
            (t.default = function(e, t) {
                return (
                    '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   version="1.1"\n   id="Capa_1"\n   x="0px"\n   y="0px"\n   viewBox="0 0 346.013 346.013"\n   style="enable-background:new 0 0 346.013 346.013;width: 80%; height: auto; vertical-align: middle;"\n   xml:space="preserve"\n   inkscape:version="0.91 r13725"\n   sodipodi:docname="alarm_white.svg"><metadata\n     id="metadata51"><rdf:RDF><cc:Work\n         rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type\n           rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs\n     id="defs49" /><sodipodi:namedview\n     borderopacity="1"\n     objecttolerance="10"\n     gridtolerance="10"\n     guidetolerance="10"\n     inkscape:pageopacity="0"\n     inkscape:pageshadow="2"\n     inkscape:window-width="1618"\n     inkscape:window-height="828"\n     id="namedview47"\n     showgrid="false"\n     inkscape:zoom="0.6820553"\n     inkscape:cx="173.0065"\n     inkscape:cy="173.0065"\n     inkscape:window-x="0"\n     inkscape:window-y="0"\n     inkscape:window-maximized="0"\n     inkscape:current-layer="g3" /><g\n     id="g3"><path\n       d="m 256.76227,220.19006 c -1.77513,-2.69766 -3.45154,-5.24564 -3.98966,-7.46382 -0.042,-0.17861 -0.0911,-0.36128 -0.16237,-0.61436 -2.28354,-7.67647 0.69147,-24.43921 2.46886,-34.45124 0.26788,-1.50394 0.52274,-2.94197 0.75286,-4.29035 0.0232,-0.13675 0.044,-0.27211 0.0724,-0.48006 1.95582,-15.28051 2.58811,-37.91956 -5.51044,-58.99147 -5.6032,-14.57978 -14.45978,-25.82612 -26.3559,-33.48393 1.26598,-9.812938 -4.85967,-19.343691 -14.66682,-22.0511 -9.80715,-2.70741 -19.95724,2.33226 -23.90298,11.405413 -14.1382,0.467533 -27.51111,5.577097 -39.80114,15.219267 -17.76129,13.9298 -28.83431,33.68757 -34.99389,47.80757 l -0.0479,0.11335 c -0.0512,0.12175 -0.0998,0.24114 -0.13249,0.32962 -0.49733,1.28292 -1.01552,2.64514 -1.55689,4.07255 -3.61311,9.51043 -9.66004,25.42824 -15.611995,30.89342 -0.106524,0.10027 -0.208228,0.20187 -0.362362,0.35435 -1.636243,1.66563 -4.382941,2.99463 -7.288979,4.40101 -7.145531,3.45301 -22.013613,10.64166 -17.206389,31.67844 0.929154,4.07105 4.008437,7.29057 8.033861,8.40185 l 167.570804,46.2604 c 4.02253,1.11048 8.31521,-0.0729 11.2052,-3.08958 14.91617,-15.58874 5.84693,-29.38668 1.48625,-36.02133 z"\n       id="path5"\n       inkscape:connector-curvature="0"\n       vector-effect="non-scaling-stroke"\n       style="fill:' +
                    e +
                    '; stroke: ' +
                    t +
                    '; stroke-width: 1; " /><path\n       vector-effect="non-scaling-stroke"\n       d="m 174.26737,259.72378 -38.76399,-10.70137 c -1.59243,-0.43962 -3.28183,-0.15596 -4.63548,0.7754 -2.53909,1.7494 -2.84182,4.93159 -3.02304,6.83188 l -0.0151,0.15247 c -1.22819,12.67106 6.79854,24.33046 19.08688,27.72284 12.51583,3.45518 25.8324,-2.91586 30.9681,-14.80385 l 0.0935,-0.19205 c 0.52305,-1.06418 1.74613,-3.55554 0.50882,-6.31116 -0.44302,-0.98439 -1.5794,-2.74529 -4.21964,-3.47416 z"\n       id="path7"\n       inkscape:connector-curvature="0"\n       style="fill:' +
                    e +
                    '; stroke: ' +
                    t +
                    '; stroke-width: 1;" /></g><g\n     id="g17" /><g\n     id="g19" /><g\n     id="g21" /><g\n     id="g23" /><g\n     id="g25" /><g\n     id="g27" /><g\n     id="g29" /><g\n     id="g31" /><g\n     id="g33" /><g\n     id="g35" /><g\n     id="g37" /><g\n     id="g39" /><g\n     id="g41" /><g\n     id="g43" /><g\n     id="g45" /></svg>'
                );
            });
    },
    function(e, t, n) {
        var r = n(16);
        e.exports = 'string' == typeof r ? r : '' + r;
    },
    function(e, t, n) {
        (e.exports = n(17)(void 0)).push([
            e.i,
            '/* Widget */\n.pushwoosh-subscribe-widget {\n  position: fixed;\n  display: block;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.pushwoosh-subscribe-widget__subscribed {\n  display: none;\n}\n\n.pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__bell-button {\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  cursor: pointer;\n  font-size: 0;\n  text-align: center;\n  -webkit-transform: scale(0.9) translate3d(0, 0, 0);\n          transform: scale(0.9) translate3d(0, 0, 0);\n  -webkit-transition: -webkit-transform .3s ease-in-out;\n  transition: -webkit-transform .3s ease-in-out;\n  -o-transition: transform .3s ease-in-out;\n  transition: transform .3s ease-in-out;\n  transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;\n  position: relative;\n}\n\n.pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__bell-button:hover {\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n}\n\n/* Tooltip */\n.pushwoosh-subscribe-widget__tooltip {\n  position: absolute;\n  height: 48px;\n  max-width: 300px;\n  min-width: 200px;\n  padding: 5px 7px;\n  background-color: #3b444b;\n  color: #ffffff;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: 38px;\n  font-size: 0;\n  font-weight: normal;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s ease-in .3s,\n              opacity .3s ease-in;\n  -o-transition: visibility 0s ease-in .3s,\n              opacity .3s ease-in;\n  transition: visibility 0s ease-in .3s,\n              opacity .3s ease-in;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n      -ms-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  -webkit-box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.5);\n          box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.5);\n}\n\n.pushwoosh-subscribe-widget__tooltip__right:after,\n.pushwoosh-subscribe-widget__tooltip__left:after {\n  content: "";\n  top: 50%;\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  background: #3b444b;\n}\n\n.pushwoosh-subscribe-widget__tooltip__right:after {\n  left: -webkit-calc(100% - 7px);\n  left: calc(100% - 7px);\n  border-top: 5px solid #3b444b;\n  border-left: 5px solid #3b444b;\n  border-right: 5px solid transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transform-origin: 0 0;\n      -ms-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.25);\n          box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.25);\n}\n\n.pushwoosh-subscribe-widget__tooltip__left:after {\n  left: -7px;\n  border-top: 5px solid #3b444b;\n  border-right: 5px solid #3b444b;\n  border-left: 5px solid transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transform-origin: 0 0;\n      -ms-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  -webkit-box-shadow: -2px -2px 2px 0 rgba(0, 0, 0, 0.25);\n          box-shadow: -2px -2px 2px 0 rgba(0, 0, 0, 0.25);\n}\n\n.pushwoosh-subscribe-widget__bell-button:hover + .pushwoosh-subscribe-widget__tooltip,\n.pushwoosh-subscribe-widget__tooltip.pushwoosh-subscribe-widget__tooltip__visible {\n  display: block;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n       -o-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__tooltip-content {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  padding-right: 5px;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  max-width: 100%;\n}\n\n/* Popover */\n\n.pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover {\n  position: absolute;\n  right: auto;\n  -webkit-box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #9ca8b1;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 0s ease-in .5s,\n              opacity .5s ease-in;\n  -o-transition: visibility 0s ease-in .5s,\n              opacity .5s ease-in;\n  transition: visibility 0s ease-in .5s,\n              opacity .5s ease-in;\n}\n\n.pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover__visible {\n  display: block;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n       -o-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.pushwoosh-subscribe-widget__popover__bottom:after,\n.pushwoosh-subscribe-widget__popover__top:after {\n  content: "";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-right: 8px solid transparent;\n  border-left: 8px solid #9ca8b1;\n  background: #9ca8b1;\n  -webkit-transform-origin: 0 0;\n      -ms-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.pushwoosh-subscribe-widget__popover__bottom:after {\n  border-bottom: 8px solid #9ca8b1;\n  border-top: 8px solid transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-shadow: -2px 2px 1px 0 rgba(0, 0, 0, 0.25);\n          box-shadow: -2px 2px 1px 0 rgba(0, 0, 0, 0.25);\n  bottom: -16px;\n}\n\n.pushwoosh-subscribe-widget__popover__top:after {\n  top: 0;\n  border-top: 8px solid #9ca8b1;\n  border-bottom: 8px solid transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-shadow: 1px -1px 1px 0 rgba(0, 0, 0, 0.25);\n          box-shadow: 1px -1px 1px 0 rgba(0, 0, 0, 0.25);\n}\n\n.pushwoosh-subscribe-widget__popover-content-wrapper {\n  overflow: auto;\n  max-width: 100%;\n}\n\n\n.pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  float: left;\n  min-width: 100%;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover img {\n  display: block;\n}\n\n.pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover img:first-child {\n  margin-bottom: 14px;\n}\n\n@media (max-width: 767px) and (orientation: portrait) {\n  .pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover img {\n    max-width: 280px;\n    height: auto;\n  }\n  .pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover img:first-child {\n    margin-right: 0;\n    margin-bottom: 14px;\n  }\n}\n@media (max-width: 767px) and (orientation: landscape) {\n  .pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover-content {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n  .pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover img {\n    max-width: 280px;\n    height: auto;\n  }\n  .pushwoosh-subscribe-widget .pushwoosh-subscribe-widget__popover img:first-child {\n    margin-right: 14px;\n    margin-bottom: 0;\n  }\n}\n',
            '',
        ]);
    },
    function(e, t) {
        e.exports = function(e) {
            var t = [];
            return (
                (t.toString = function() {
                    return this.map(function(t) {
                        var n = (function(e, t) {
                            var n = e[1] || '',
                                r = e[3];
                            if (!r) return n;
                            if (t && 'function' == typeof btoa) {
                                var i =
                                        '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                                        btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                                        ' */',
                                    o = r.sources.map(function(e) {
                                        return '/*# sourceURL=' + r.sourceRoot + e + ' */';
                                    });
                                return [n]
                                    .concat(o)
                                    .concat([i])
                                    .join('\n');
                            }
                            return '' + n;
                        })(t, e);
                        return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
                    }).join('');
                }),
                (t.i = function(e, n) {
                    'string' == typeof e && (e = [[null, e, '']]);
                    for (var r = {}, i = 0; this.length > i; i++) {
                        var o = this[i][0];
                        'number' == typeof o && (r[o] = !0);
                    }
                    for (i = 0; e.length > i; i++) {
                        var s = e[i];
                        ('number' == typeof s[0] && r[s[0]]) ||
                            (n && !s[2] ? (s[2] = n) : n && (s[2] = '(' + s[2] + ') and (' + n + ')'), t.push(s));
                    }
                }),
                t
            );
        };
    },
]);
