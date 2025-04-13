import {x as e, c as t, g as o, h as n, k as l, p as i, i as a, y as s, q as r, j as c, t as d, r as u, o as m, b as _, e as v, z as p, u as f, l as h, A as x, w, n as y, s as g, B as b, F as k, m as E, a as L, C as M, D as S, E as V, G as C, v as T} from "./runtime-dom.esm-bundler-3c6fceb0.js";
import {T as U, c as q, l as $, i as j, g as O, a as I, s as B, d as A, b as N, e as D, r as R, f as F, h as P, j as z, k as J, n as W, o as G, u as H, p as K, q as X, t as Y, v as Q} from "./util-86a8139d.js";
import {v as Z, x as ee} from "./index-9000aff5.js";
import {_ as te, J as oe, s as ne, i as le} from "./Jsq-b86ddcf2.js";
import {g as ie, o as ae, i as se, a as re, b as ce, c as de, d as ue, I as me, e as _e, G as ve} from "./stat-481b0a88.js";
import {o as pe, a as fe, s as he, g as xe, d as we} from "./tool-13238bfa.js";
const ye = {
    key: 0
}
  , ge = {
    key: 0,
    class: "modal-header"
}
  , be = {
    class: "modal-title"
}
  , ke = {
    class: "modal-body"
}
  , Ee = {
    key: 1,
    class: "modal-footer"
}
  , Le = ["disabled"]
  , Me = {
    class: "ok-icon-container"
}
  , Se = {
    key: 0,
    class: "modal-loading-icon"
}
  , Ve = te({
    __name: "Modal",
    props: {
        modelValue: {
            type: Boolean,
            default: !1
        },
        title: {
            type: String,
            default: "对话框"
        },
        width: {
            type: [String, Number],
            default: "400px"
        },
        okText: {
            type: String,
            default: "确定"
        },
        cancelText: {
            type: String,
            default: "取消"
        },
        showCancelButton: {
            type: Boolean,
            default: !0
        },
        closable: {
            type: Boolean,
            default: !0
        },
        maskClosable: {
            type: Boolean,
            default: !0
        },
        confirmLoading: {
            type: Boolean,
            default: !1
        },
        customClass: {
            type: String,
            default: ""
        },
        showHeader: {
            type: Boolean,
            default: !0
        },
        showFooter: {
            type: Boolean,
            default: !0
        },
        position: {
            type: String,
            default: "center",
            validator: e => ["center", "corner"].includes(e)
        },
        showMask: {
            type: Boolean,
            default: !0
        },
        closeOnOk: {
            type: Boolean,
            default: !0
        },
        handler: {
            type: Function,
            default: null
        },
        animation: {
            type: String,
            default: "fade",
            validator: e => ["slide", "bounce", "fade", "flip", "shake", "slideUp"].includes(e)
        },
        teleportTarget: {
            type: String,
            default: "body"
        }
    },
    emits: ["update:modelValue", "ok", "cancel", "close"],
    setup(u, {emit: m}) {
        const _ = u
          , v = m;
        e();
        const p = () => {
            v("update:modelValue", !1),
            v("close")
        }
          , f = async () => {
            if (v("ok"),
            "function" == typeof _.handler)
                try {
                    await _.handler(),
                    _.closeOnOk && p()
                } catch (e) {}
            else
                _.closeOnOk && p()
        }
          , h = () => {
            v("cancel"),
            p()
        }
          , x = t( () => "number" == typeof _.width ? _.width + "px" : _.width);
        return (e, t) => u.modelValue ? (o(),
        n("div", ye, [u.showMask ? (o(),
        n("div", {
            key: 0,
            class: l(["modal-mask modal-4DB361DE-01F7-4376-B494-639E489D19ED", {
                "modal-mask-show": u.modelValue,
                "modal-mask-corner": "corner" === u.position
            }]),
            onClick: t[0] || (t[0] = e => u.maskClosable ? p() : null)
        }, null, 2)) : i("", !0), a("div", {
            class: l(["modal-wrapper", {
                "modal-wrapper-show": u.modelValue,
                "modal-wrapper-corner": "corner" === u.position,
                "modal-wrapper-no-mask": !u.showMask,
                [u.customClass]: u.customClass,
                ["animation-" + u.animation]: "corner" === u.position
            }]),
            style: r({
                width: x.value
            })
        }, [u.showHeader ? (o(),
        n("div", ge, [a("div", be, [s(e.$slots, "title", {}, () => [c(d(u.title), 1)], !0)]), u.closable ? (o(),
        n("button", {
            key: 0,
            class: "modal-close",
            onClick: p
        })) : i("", !0)])) : i("", !0), a("div", ke, [s(e.$slots, "default", {}, void 0, !0)]), u.showFooter ? (o(),
        n("div", Ee, [s(e.$slots, "footer", {}, () => [u.cancelText && u.showCancelButton ? (o(),
        n("button", {
            key: 0,
            class: "modal-btn modal-btn-cancel",
            onClick: h
        }, d(u.cancelText), 1)) : i("", !0), u.okText ? (o(),
        n("button", {
            key: 1,
            class: "modal-btn modal-btn-primary",
            onClick: f,
            disabled: u.confirmLoading
        }, [s(e.$slots, "ok-button", {}, () => [a("span", Me, [s(e.$slots, "ok-icon", {}, void 0, !0)]), u.confirmLoading ? (o(),
        n("span", Se)) : i("", !0), c(" " + d(u.okText), 1)], !0)], 8, Le)) : i("", !0)], !0)])) : i("", !0)], 6)])) : i("", !0)
    }
}, [["__scopeId", "data-v-352ade69"]]);
function Ce(e, t={}) {
    const {timeout: o=8e3, mutationDebounce: n=500, idleTimeout: l=500, earlySuccessDelay: i=600} = t;
    let a = !1
      , s = null
      , r = null;
    const c = {
        domMutation: !1,
        animationComplete: !1,
        idleTime: !1
    };
    function d() {
        return !!c.domMutation && (a = !0,
        m(),
        e({
            allReady: !0,
            timedOut: !1,
            states: {
                ...c
            }
        }),
        !0)
    }
    const u = function(e, t={}) {
        const o = "undefined" != typeof document && document && document.body
          , {targetNode: n=(o ? document.body : null), debounceTime: l=500, timeout: i=1e4, subtree: a=!0, childList: s=!0, attributes: r=!1, characterData: c=!0} = t;
        if (!n)
            return {
                stop: () => {}
            };
        let d = null
          , u = null
          , m = 0;
        const _ = new MutationObserver(t => {
            m += t.length,
            clearTimeout(d),
            d = setTimeout( () => {
                _.disconnect(),
                e({
                    type: "mutation",
                    stable: !0,
                    changes: m,
                    timedOut: !1
                })
            }
            , l)
        }
        );
        i && (u = setTimeout( () => {
            _.disconnect(),
            clearTimeout(d),
            e({
                type: "mutation",
                stable: !1,
                changes: m,
                timedOut: !0
            })
        }
        , i));
        const v = {
            subtree: a,
            childList: s,
            attributes: r,
            characterData: c
        };
        return _.observe(n, v),
        {
            stop: () => {
                _.disconnect(),
                clearTimeout(d),
                clearTimeout(u)
            }
        }
    }(e => {
        c.domMutation = e.stable,
        d()
    }
    , {
        debounceTime: n,
        timeout: .8 * o
    });
    function m() {
        s && clearTimeout(s),
        r && clearTimeout(r),
        u && "function" == typeof u.stop && u.stop()
    }
    return "undefined" != typeof window && window.requestIdleCallback ? window.requestIdleCallback( () => {
        c.idleTime = !0,
        d()
    }
    , {
        timeout: l
    }) : "undefined" != typeof setTimeout && setTimeout( () => {
        c.idleTime = !0,
        d()
    }
    , l),
    "undefined" != typeof setTimeout && (s = setTimeout( () => {
        a || (m(),
        e({
            allReady: c.domMutation,
            timedOut: !0,
            partialSuccess: c.domMutation,
            states: {
                ...c
            }
        }))
    }
    , o)),
    function() {
        if ("undefined" != typeof document && document && document.body)
            try {
                const t = document.querySelectorAll('main, article, .content, [role="main"]');
                (t.length > 0 || document.body.textContent.trim().length > 500) && (r = setTimeout( () => {
                    a || (m(),
                    e({
                        allReady: !0,
                        timedOut: !1,
                        earlySuccess: !0,
                        states: {
                            ...c
                        }
                    }))
                }
                , i))
            } catch (t) {}
    }(),
    {
        stop: m
    }
}
function Te({urls: e, groupName: t=(e => {
    return null == (e = null == (t = null == document ? void 0 : document.title) ? void 0 : t.trim().split(/\s+/)) ? void 0 : e[0];
    var t
}
)()}) {
    var o;
    const n = {
        taskGroupName: t,
        tasks: e.map(e => ({
            url: U(e),
            size: 0
        }))
    };
    let l = "thunderx://" + JSON.stringify(n);
    "mac" === (null == (o = ie()) ? void 0 : o.toLowerCase()) && (l = "thunders://" + JSON.stringify(n)),
    q(l),
    ae()
}
const Ue = () => new Promise( (e, t) => {
    const o = Date.now();
    let n = 0;
    const l = () => {
        n++;
        const t = Date.now() - o;
        if (n > 30 || t > 6e4)
            return void e(!1);
        const i = Array.from(document.querySelectorAll("button")).find(e => e.textContent.trim().includes("Load more files"));
        i ? (i.click(),
        setTimeout(l, 500)) : e(!0)
    }
    ;
    l()
}
)
  , qe = () => Array.from(document.querySelectorAll("a[download]")).filter(e => e.href && "" !== e.href.trim()).map(e => e.href)
  , $e = () => {
    const e = window.location.href
      , t = e.match(/\/([^\/]+)\/tree\/main/);
    if (t && t[1])
        return t[1];
    const o = new URL(e).pathname.split("/")
      , n = o.indexOf("tree");
    return n > 0 ? o[n - 1] : o[o.length - 1] || "unknown"
}
  , je = Object.freeze(Object.defineProperty({
    __proto__: null,
    downloadAllFiles: async () => {
        try {
            await Ue();
            const e = qe();
            if (0 === e.length)
                throw new Error("没有下载链接");
            return await Te({
                urls: e,
                groupName: $e()
            }),
            e
        } catch (e) {
            throw $.error("huggingface-analyze 批量下载失败", e),
            e
        }
    }
    ,
    getDownloadUrls: qe,
    getFileName: $e,
    getIcon: () => {
        const e = document.querySelector("h1");
        if (e) {
            const t = e.querySelector("img");
            if (t)
                return t.src
        }
    }
    ,
    loadMore: Ue
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Oe = () => new Promise( (e, t) => {
    const o = Date.now();
    let n = 0;
    const l = () => {
        n++;
        const t = Date.now() - o;
        if (n > 20 || t > 2e4)
            return void e(!1);
        const i = Array.from(document.querySelectorAll("button")).find(e => e.textContent.trim().includes("Load more files"));
        i ? (i.click(),
        setTimeout(l, 500)) : e(!0)
    }
    ;
    l()
}
)
  , Ie = () => Array.from(document.querySelectorAll("a[download]")).filter(e => e.href && "" !== e.href.trim()).map(e => e.href)
  , Be = () => {
    const e = document.querySelector(".topTitleMark");
    if (e) {
        const t = e.querySelector("div");
        if (t)
            return t.innerText
    }
}
  , Ae = Object.freeze(Object.defineProperty({
    __proto__: null,
    downloadAllFiles: async () => {
        try {
            await Oe();
            const e = Ie();
            return await Te({
                urls: e,
                groupName: Be()
            }),
            e
        } catch (e) {
            throw $.error("huggingface-analyze 批量下载失败", e),
            e
        }
    }
    ,
    getDownloadUrls: Ie,
    getFileName: Be,
    getIcon: () => {
        const e = document.querySelector(".topTitleMark");
        if (e) {
            const t = e.querySelector("img");
            if (t)
                return t.src
        }
    }
    ,
    loadMore: Oe
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ne = {
    "huggingface.co": async () => window.location.pathname.includes("/tree/main") ? je : null,
    "modelscope.cn": async () => window.location.pathname.includes("/files") ? Ae : null,
    "hf-mirror.com": async () => window.location.pathname.includes("/tree/main") ? je : null
}
  , De = {
    container: "_container_wq4mj_4",
    title: "_title_wq4mj_8",
    badge: "_badge_wq4mj_28",
    downloadContent: "_downloadContent_wq4mj_38"
}
  , Re = a("span", {
    class: "ok-icon-container"
}, null, -1)
  , Fe = ["src"]
  , Pe = te({
    __name: "big-model",
    setup(e) {
        const s = u(!1)
          , r = u(null)
          , c = u("")
          , h = u("")
          , x = u("")
          , w = u(!1)
          , y = u(!1)
          , g = u("initial")
          , b = t( () => ({
            initial: {
                title: c.value,
                icon: h.value,
                content: w.value ? "使用迅雷一键下载全部文件，告别逐个下载！" : y.value ? "安装迅雷后，请刷新此页面！" : "安装迅雷一键下载全部文件，告别逐个下载！",
                okText: w.value ? "一键下载" : "安装迅雷",
                cancelText: ""
            },
            loading: {
                title: "正在加载模型全部文件列表，请稍候",
                icon: "",
                content: "如遇等待时间过长，请尝试刷新页面后，重新下载",
                okText: "",
                cancelText: "取消"
            },
            success: {
                title: "下载任务已创建",
                icon: "",
                content: "所有文件已添加到迅雷下载队列，可打开迅雷查看下载进度。",
                okText: "",
                cancelText: "关闭"
            },
            error: {
                title: "加载全部文件列表失败！",
                icon: "",
                content: '请尝试刷新页面后，重新点击"一键下载"',
                okText: "",
                cancelText: "关闭"
            }
        }))
          , k = async () => {
            if (!w.value)
                return await function() {
                    if (!j)
                        return S({
                            name: "xl_install_thunder"
                        }, "Thunder installation").then(e => e.success);
                    window.open("https://mac.xunlei.com/", "_blank")
                }(),
                C("install"),
                void (y.value = !0);
            try {
                g.value = "loading",
                await r.value.downloadAllFiles(),
                s.value = !1,
                g.value = "success",
                C("download")
            } catch (e) {
                g.value = "error",
                C("error")
            }
        }
          , E = () => {
            C("close"),
            M()
        }
        ;
        let L = null;
        function M() {
            s.value = !1,
            y.value = !1,
            g.value = "initial"
        }
        function S(e, t="Chrome message") {
            return new Promise(t => {
                chrome.runtime.sendMessage(e, e => {
                    chrome.runtime.lastError ? t({
                        success: !1,
                        error: chrome.runtime.lastError
                    }) : t({
                        success: !0,
                        data: e
                    })
                }
                )
            }
            )
        }
        async function V() {
            L && (L.stop(),
            L = null);
            const e = window.location.hostname.split(".").slice(-2).join(".")
              , t = await Ne[e];
            if (!t)
                return r.value = null,
                void (s.value = !1);
            await async function() {
                var e;
                try {
                    if (j) {
                        const e = await S({
                            name: pe.CheckEnabled
                        }, "Mac Thunder installation check");
                        return e.success && e.data ? (w.value = !!e.data.isInstallThunder,
                        w.value) : (w.value = !1,
                        !1)
                    }
                    {
                        const t = await S({
                            name: "xl_check_installed"
                        }, "Thunder installation check")
                          , o = t.success && !!(null == (e = t.data) ? void 0 : e.version);
                        return w.value = o,
                        o
                    }
                } catch (t) {
                    return w.value = !1,
                    !1
                }
            }();
            const o = await t();
            if (!o)
                return r.value = null,
                void (s.value = !1);
            r.value = o;
            const {getFileName: n, getIcon: l} = r.value;
            try {
                i = e => {
                    if (e) {
                        e.allReady || e.timedOut;
                        try {
                            h.value = l(),
                            c.value = n(),
                            x.value = c.value,
                            s.value = !0,
                            C("show")
                        } catch (t) {}
                    }
                }
                ,
                L = "undefined" != typeof document && document && document.body ? Ce(e => {
                    e.allReady || (e.timedOut && e.partialSuccess ? e.allReady = !0 : e.timedOut),
                    i(e)
                }
                , {
                    timeout: 8e3,
                    mutationDebounce: 500,
                    earlySuccessDelay: 600
                }) : {
                    stop: () => {}
                }
            } catch (a) {
                try {
                    h.value = l(),
                    c.value = n(),
                    x.value = c.value,
                    s.value = !0,
                    C("show")
                } catch (d) {}
            }
            var i
        }
        function C(e, t) {
            let o = 0
              , n = {};
            switch (e) {
            case "show":
                o = 979,
                n = {
                    value5: c.value
                };
                break;
            case "download":
                o = 980,
                n = {
                    value5: c.value,
                    value6: "allclick_dl"
                };
                break;
            case "close":
                o = 980,
                n = {
                    value5: c.value,
                    value6: "close"
                };
                break;
            case "install":
                o = 980,
                n = {
                    value5: c.value,
                    value6: "install_xl"
                };
                break;
            case "error":
                o = 981,
                n = {
                    value5: c.value
                }
            }
            chrome.runtime.sendMessage({
                name: "xl_stat",
                eventId: o,
                extParam: {
                    ...n
                }
            })
        }
        return m( () => {
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", () => {
                V()
            }
            ) : V();
            const e = function() {
                let e = window.location.pathname;
                const t = () => {
                    const t = window.location.pathname;
                    t !== e && (e = t,
                    M(),
                    V())
                }
                ;
                window.addEventListener("popstate", t),
                window.addEventListener("hashchange", t);
                const o = history.pushState
                  , n = history.replaceState;
                history.pushState = function(...e) {
                    o.apply(this, e),
                    t()
                }
                ,
                history.replaceState = function(...e) {
                    n.apply(this, e),
                    t()
                }
                ;
                const l = setInterval(t, 1e3);
                return window.addEventListener("focus", t),
                () => {
                    window.removeEventListener("popstate", t),
                    window.removeEventListener("hashchange", t),
                    window.removeEventListener("focus", t),
                    clearInterval(l),
                    history.pushState = o,
                    history.replaceState = n
                }
            }();
            _( () => {
                e(),
                L && (L.stop(),
                L = null),
                M()
            }
            )
        }
        ),
        (e, t) => (o(),
        n("div", {
            class: l(e.$style.container)
        }, [v(f(Ve), {
            modelValue: s.value,
            "onUpdate:modelValue": t[0] || (t[0] = e => s.value = e),
            title: "",
            width: 360,
            okText: b.value[g.value].okText,
            cancelText: b.value[g.value].cancelText,
            customClass: "thunder-download-modal",
            position: "corner",
            showMask: !1,
            closeOnOk: !1,
            teleportTarget: "#xl-teleport-container",
            onOk: k,
            onClose: E
        }, {
            "ok-icon": p( () => [Re]),
            title: p( () => [a("div", {
                class: l(e.$style.title)
            }, [b.value[g.value].icon ? (o(),
            n("img", {
                key: 0,
                src: b.value[g.value].icon,
                alt: "模型图标",
                width: "20",
                height: "20"
            }, null, 8, Fe)) : i("", !0), a("span", {
                class: l(e.$style.badge)
            }, d(b.value[g.value].title), 3)], 2)]),
            default: p( () => [a("div", {
                class: l(e.$style.downloadContent)
            }, [a("p", null, d(b.value[g.value].content), 1)], 2)]),
            _: 1
        }, 8, ["modelValue", "okText", "cancelText"])], 2))
    }
}, [["__cssModules", {
    $style: De
}]])
  , ze = ["id"]
  , Je = ["onClick"]
  , We = te({
    __name: "content-mac",
    setup(e) {
        const t = "xl_chrome_ext_" + ee
          , s = u(Z)
          , r = u(!1)
          , c = u(!1)
          , d = u("")
          , _ = u("")
          , p = u([])
          , f = u(!1)
          , x = u([])
          , w = u(!1)
          , y = u(!1)
          , g = () => {
            $.info("downloadVideo", d.value),
            d.value && chrome.runtime.sendMessage({
                name: pe.xl_download,
                linkUrl: _.value,
                refererUrl: document.location.href,
                cookie: document.cookie
            })
        }
        ;
        m( () => {
            document.addEventListener("scroll", M),
            document.body.addEventListener("mousemove", S),
            window.self !== window.top && document.body.addEventListener("mouseout", L),
            document.addEventListener("scroll", M),
            C()
        }
        );
        const b = () => {
            const e = document.getElementById(t);
            e && (e.style.display = "none")
        }
          , k = () => {
            const e = document.getElementById(t);
            e && (e.remove(),
            document.body.removeEventListener("mousemove", S, !0),
            window.self !== window.top && document.body.removeEventListener("mouseout", L),
            document.body.removeEventListener("scroll", M),
            d.value = null,
            _.value = void 0,
            p.value = [])
        }
          , E = e => {
            const o = document.getElementById(t);
            if (!o)
                return;
            o.style.display = "block",
            c.value = !0;
            const n = e.getBoundingClientRect()
              , l = `position:fixed;left: ${n.x + 4}px; top: ${n.y + 4}px; height: 30px; z-index: 10000000000 !important`;
            o.style = l,
            w.value || (w.value = !0,
            chrome.runtime.sendMessage({
                name: pe.xl_video_show,
                referurl: document.location.href,
                videoSrc: e.src
            }))
        }
          , L = e => {
            if (d.value) {
                const t = document.getElementById(Z).contains(e.toElement);
                t || (d.value = null,
                _.value = void 0,
                $.info("isToChildDom :>> ", t),
                b())
            }
        }
          , M = () => {
            d.value && E(d.value)
        }
          , S = e => {
            const t = document.elementFromPoint(e.x, e.y);
            if (!t)
                return;
            if ("video" === t.tagName.toLocaleLowerCase()) {
                const e = t.src || O(t);
                if (!e || 0 === e.toLocaleLowerCase().indexOf("blob:"))
                    return;
                if (t === d.value)
                    return;
                return d.value = t,
                _.value = e,
                E(t),
                void $.info("video src", _.value)
            }
            if (d.value) {
                if (!I(e, d.value))
                    return d.value = null,
                    _.value = void 0,
                    void b()
            } else {
                let t = null;
                for (const o of p.value)
                    if ("none" !== window.getComputedStyle(o).display)
                        if (I(e, o))
                            if (t) {
                                (Number(window.getComputedStyle(o).zIndex) || 0) > (Number(window.getComputedStyle(t).zIndex) || 0) && (t = o)
                            } else
                                t = o;
                        else if (t) {
                            const e = t.src || O(t);
                            e && 0 !== e.toLowerCase().indexOf("blob:") && (d.value = t,
                            _.value = e,
                            E(t))
                        }
                if (t) {
                    const e = t.src || O(t);
                    e && 0 !== e.toLowerCase().indexOf("blob:") && (d.value = t,
                    _.value = e,
                    E(t))
                }
            }
        }
          , V = async () => {
            chrome.runtime.sendMessage({
                name: pe.xl_call_function,
                method: fe.getWebsiteDomains
            }, async e => {
                x.value = new Set(await e.websiteDomains);
                const t = A.exec(document.location.host)[2];
                y.value = x.value.has(t),
                $.warn((f.value ? "已安装xunlei" : "未安装xunlei") + " "),
                $.info("isInWebsiteDomains", y.value),
                f.value && !y.value && (r.value = !0)
            }
            )
        }
          , C = async () => {
            $.info("init"),
            await (async () => {
                const e = await chrome.runtime.sendMessage({
                    name: pe.CheckEnabled
                });
                e && (f.value = e.isInstallThunder)
            }
            )(),
            await V();
            const e = document.getElementsByTagName("video");
            p.value = e,
            $.info("==========allVideos.value", p.value.length, "=========="),
            !p.value.length > 0 || B(p.value)
        }
        ;
        return (e, t) => (o(),
        n("div", {
            class: l([e.$style["content-wrapper"], e.$style["mac-content-wrapper"]]),
            id: s.value
        }, [c.value ? (o(),
        n("div", {
            key: 0,
            class: l(e.$style["video-wrapper"])
        }, [a("div", {
            class: l([e.$style["options-wrapper"]])
        }, [a("div", {
            class: l(e.$style["xl-chrome-ext-bar__logo"])
        }, null, 2), a("div", {
            class: l([e.$style["xl-chrome-ext-tips"], e.$style.download]),
            onClick: h(g, ["stop"])
        }, [a("a", {
            id: "xl_chrome_ext_bar_download",
            class: l([e.$style["xl-chrome-ext-bar__option"]]),
            href: "javascript:;"
        }, null, 2), a("div", {
            class: l([e.$style["xl-chrome-ext-title"]])
        }, "下载视频", 2)], 10, Je), a("a", {
            id: "xl_chrome_ext_close",
            class: l([e.$style["xl-chrome-ext-bar__option"]]),
            title: "本次关闭",
            href: "javascript:;",
            onClick: k
        }, [a("div", {
            class: l(["xl-close img", [e.$style["xl-close"], e.$style.img]])
        }, null, 2)], 2)], 2)], 2)) : i("", !0), v(Pe)], 10, ze))
    }
}, [["__cssModules", {
    $style: {
        video_op_wrapper: "_video_op_wrapper_1aqct_1",
        video_op_list: "_video_op_list_1aqct_1",
        op_icon: "_op_icon_1aqct_1",
        op_text: "_op_text_1aqct_1",
        op_item: "_op_item_1aqct_1",
        download: "_download_1aqct_1",
        play: "_play_1aqct_1",
        screen: "_screen_1aqct_1",
        "options-wrapper": "_options-wrapper_1aqct_20",
        "xl-chrome-ext-bar-toast": "_xl-chrome-ext-bar-toast_1aqct_14",
        "xl-chrome-ext-bar__logo": "_xl-chrome-ext-bar__logo_1aqct_1",
        "xl-chrome-ext-bar-toast__success": "_xl-chrome-ext-bar-toast__success_1aqct_1",
        "xl-chrome-ext-bar-toast__error": "_xl-chrome-ext-bar-toast__error_1aqct_1",
        "xl-chrome-ext-bar-toast__text": "_xl-chrome-ext-bar-toast__text_1aqct_1",
        "xl-chrome-ext-tips": "_xl-chrome-ext-tips_1aqct_1",
        "xl-chrome-ext-title": "_xl-chrome-ext-title_1aqct_1",
        "xl-chrome-ext-title--footer": "_xl-chrome-ext-title--footer_1aqct_1",
        "xl-chrome-ext-bar__option": "_xl-chrome-ext-bar__option_1aqct_1",
        img: "_img_1aqct_1",
        "xl-download": "_xl-download_1aqct_1",
        "xl-screen": "_xl-screen_1aqct_1",
        "xl-close": "_xl-close_1aqct_1",
        "content-wrapper": "_content-wrapper_1aqct_3",
        "video-wrapper": "_video-wrapper_1aqct_8",
        "mac-content-wrapper": "_mac-content-wrapper_1aqct_11"
    }
}]]);
function Ge(e) {
    !function(e) {
        chrome.runtime.sendMessage(e)
    }({
        name: "xl_prompt_click",
        ...e
    })
}
const He = ["id"]
  , Ke = {
    class: "xl-chrome-ext-dialog__title"
}
  , Xe = x('<ul class="xl-chrome-ext-dialog__content"><li class="xl-chrome-ext-dialog__content-li"><div class="xl-chrome-ext-dialog__content-icon xl-download"></div><div class="xl-chrome-ext-dialog__content-text">一键读取网页中的可下载链接</div></li><li class="xl-chrome-ext-dialog__content-li"><div class="xl-chrome-ext-dialog__content-icon xl-video"></div><div class="xl-chrome-ext-dialog__content-text">网页视频下载、存云盘、投屏播放</div></li><li class="xl-chrome-ext-dialog__content-li"><div class="xl-chrome-ext-dialog__content-icon xl-picture"></div><div class="xl-chrome-ext-dialog__content-text">批量下载图片</div></li></ul>', 1)
  , Ye = {
    class: "xl-chrome-ext-dialog__footer"
}
  , Qe = {
    __name: "ActionErrorDialog",
    props: {
        text: {
            type: String,
            required: !0
        }
    },
    emits: ["submit", "cancel"],
    setup(e) {
        const t = u(N("action"));
        return m(async () => {}
        ),
        (l, i) => (o(),
        n("div", {
            class: "xl-chrome-ext-dialog",
            id: t.value
        }, [a("h2", Ke, "无法" + d(e.text) + "，请安装迅雷客户端后重试", 1), a("a", {
            action: "close",
            href: "javascript:;",
            class: "xl-chrome-ext-dialog__close",
            title: "关闭",
            onClick: i[0] || (i[0] = h(e => l.$emit("cancel", "close"), ["stop"]))
        }), Xe, a("div", Ye, [a("button", {
            onClick: i[1] || (i[1] = h(e => l.$emit("submit", "install"), ["stop"])),
            action: "install",
            class: "xl-chrome-ext-dialog__button xl-download"
        }, " 迅雷高速下载 "), a("button", {
            onClick: i[2] || (i[2] = e => l.$emit("cancel", "once-close")),
            action: "once-close",
            class: "xl-chrome-ext-dialog__button xl-close"
        }, " 取消 ")])], 8, He))
    }
}
  , Ze = {
    animate__bounceOutUp: "_animate__bounceOutUp_ti0wz_29",
    bounceInUp: "_bounceInUp_ti0wz_1",
    "xl-chrome-ext-footer__ball": "_xl-chrome-ext-footer__ball_ti0wz_33",
    "xl-chrome-ext-footer__name": "_xl-chrome-ext-footer__name_ti0wz_50"
}
  , et = {
    id: "xl-chrome-ext-footer",
    class: "xl-chrome-ext-footer"
}
  , tt = ["onClick", "onMouseenter", "onMouseleave", "onAnimationend"]
  , ot = a("div", {
    class: "xl-chrome-ext-footer__logo"
}, null, -1)
  , nt = {
    class: "xl-chrome-ext-footer__quantity"
}
  , lt = ["onMouseenter", "onMouseleave", "onAnimationend"]
  , it = {
    key: 0,
    class: "xl-chrome-ext-footer__jsq"
}
  , at = {
    class: "xl-chrome-ext-footer__content"
}
  , st = {
    class: "xl-chrome-ext-footer__text"
}
  , rt = {
    class: "xl-chrome-ext-footer__action"
}
  , ct = ["onClick", "onMouseenter", "onMouseleave"]
  , dt = a("h3", null, "用迅雷享高速下载", -1)
  , ut = a("div", {
    class: "xl-chrome-ext-footer__explain"
}, "当前页面含资源如下：", -1)
  , mt = {
    class: "xl-chrome-ext-footer__list"
}
  , _t = ["data", "onClick"]
  , vt = a("div", {
    class: "xl-chrome-ext-footer__action-name"
}, "下载", -1)
  , pt = ["onClick", "onMouseenter", "onMouseleave"]
  , ft = {
    class: "xl-chrome-ext-footer__action-name"
}
  , ht = {
    class: "xl-chrome-ext-footer__button-text"
}
  , xt = a("h3", null, "存迅雷云盘，享高清播放、高速下载", -1)
  , wt = a("div", {
    class: "xl-chrome-ext-footer__explain"
}, "当前页面含资源如下：", -1)
  , yt = {
    class: "xl-chrome-ext-footer__list"
}
  , gt = ["onClick"]
  , bt = {
    class: "xl-chrome-ext-footer__button-text"
}
  , kt = {
    key: 0,
    class: "xl-chrome-ext-footer__agreement"
}
  , Et = a("span", null, "启用插件访问在线视频时，插件将在播放窗口展示对播放链接的快捷功能", -1)
  , Lt = ["onClick"]
  , Mt = {
    class: "xl-chrome-ext-footer__close-wrapper"
}
  , St = {
    class: "xl-chrome-ext-tips"
}
  , Vt = ["onClick"]
  , Ct = a("div", {
    class: "xl-chrome-ext-title xl-chrome-ext-title--footer"
}, "本次关闭", -1)
  , Tt = te({
    __name: "Footer",
    props: {
        resourceList: {
            type: Object,
            required: !0
        },
        exception: {
            type: Boolean,
            required: !0
        },
        isShowJsqEntry: {
            type: Boolean,
            required: !0
        },
        jsqText: {
            type: Object,
            required: !0
        }
    },
    emits: ["removeFooter", "showActionError", "showVersionError", "handleDownload", "handleCloseBar"],
    setup(e, {emit: t}) {
        const s = t
          , c = e
          , _ = u(null)
          , p = u(!1)
          , f = u(null)
          , x = u(null)
          , L = u(!1)
          , M = u(!1)
          , S = u(!1)
          , V = u(0)
          , C = u(0)
          , T = u(null)
          , U = u(null)
          , q = u(!1)
          , $ = u(!0)
          , j = u(c.resourceList.playList.length === c.resourceList.length)
          , O = u(0 === c.resourceList.saveList.length);
        function I() {
            p.value = !0,
            _.value = setTimeout( () => {
                p.value = !1
            }
            , 5e3)
        }
        function B() {
            q.value = !0,
            c.resourceList.downloadList.length > 0 && y( () => {
                if (T.value) {
                    const {height: e} = window.getComputedStyle(T.value);
                    V.value = `-${parseFloat(e) + 16}px`
                }
            }
            ),
            c.resourceList.saveList.length > 0 && y( () => {
                if (U.value) {
                    const {height: e} = window.getComputedStyle(U.value);
                    C.value = `-${parseFloat(e) + 16}px`
                }
            }
            )
        }
        function A(e) {
            return e.isInIframe && ".m3u8" === e.suffix && (e.fileName = xe(e.suffix, e.url)),
            e.fileName
        }
        function N() {
            x.value = setTimeout( () => {
                M.value = !1
            }
            , 300)
        }
        function D() {
            x.value && clearTimeout(x.value),
            M.value = !0
        }
        function R() {
            z(c.resourceList.saveList[0])
        }
        function F() {
            f.value = setTimeout( () => {
                S.value = !1
            }
            , 300)
        }
        function P() {
            f.value && clearTimeout(f.value),
            S.value = !0
        }
        async function z(e) {
            const t = e;
            if (c.exception)
                return s("showActionError", "流畅播", "fluent_play"),
                void chrome.runtime.sendMessage({
                    name: "xl_cloudadd_stat",
                    from: "bottom_bar",
                    isSuccess: !1,
                    data: t
                });
            if (t.isVideoURL) {
                L.value = !0;
                const {isAccept: e} = await chrome.runtime.sendMessage({
                    name: "xl_check_blacklist"
                });
                if (L.value = !1,
                !e)
                    return chrome.runtime.sendMessage({
                        name: "xl_show_toast",
                        text: "链接异常，无法流畅播",
                        type: "info"
                    }),
                    void chrome.runtime.sendMessage({
                        name: "xl_cloudadd_stat",
                        from: "bottom_bar",
                        isSuccess: !1,
                        data: t
                    })
            }
            var o;
            (o = t).suffix && chrome.runtime.sendMessage({
                name: "xl_cloudadd",
                from: "bottom_bar",
                data: {
                    opt: "web:cloudadd",
                    params: {
                        url: o.url,
                        name: o.fileName,
                        ext: o.suffix,
                        isVideo: o.isVideoURL,
                        cookie: document.cookie,
                        webTitle: document.title
                    }
                },
                isM3U8Video: ".m3u8" === o.suffix
            }, e => {
                e && ("version" === e.errType && s("showVersionError", e.text),
                chrome.runtime.sendMessage({
                    name: "xl_cloudadd_stat",
                    from: "bottom_bar",
                    isSuccess: e.result,
                    data: o
                }))
            }
            )
        }
        function J() {
            if (c.exception) {
                s("showActionError", "下载", "download");
                const e = c.resourceList.downloadList[0];
                chrome.runtime.sendMessage({
                    name: "xl_download_stat",
                    link: e.url,
                    stat: e.isVideoURL ? "chrome_download_video" : "chrome_download_other",
                    from: "bottom_bar",
                    status: "fail"
                })
            } else {
                W(c.resourceList.downloadList[0])
            }
        }
        function W(e) {
            chrome.runtime.sendMessage({
                name: "xl_download",
                link: e.url,
                cookie: document.cookie,
                referurl: document.location.href,
                stat: e.isVideoURL ? "chrome_download_video" : "chrome_download_other",
                from: "bottom_bar",
                isM3U8Video: ".m3u8" === e.suffix
            }, e => {
                e && "version" === e.errType && s("showVersionError", e.text)
            }
            )
        }
        w(p, e => {
            !0 === e && B()
        }
        );
        const G = u(!0);
        function H() {
            chrome.runtime.sendMessage({
                name: "xl_footer_other_click",
                clickId: "close"
            }),
            s("removeFooter")
        }
        function K() {
            chrome.storage.local.set({
                isAgreementVisible: !1
            }),
            $.value = !1
        }
        function X() {
            const e = G.value ? "fix_bar" : "release_bar";
            G.value = !G.value,
            p.value = !G.value,
            chrome.runtime.sendMessage({
                name: "xl_footer_other_click",
                clickId: e
            })
        }
        function Y() {
            _.value && clearTimeout(_.value),
            p.value || (p.value = !0)
        }
        function Q() {
            G.value && (p.value = !1)
        }
        function Z() {
            G.value && (x.value = setTimeout( () => {
                p.value = !1
            }
            , 800))
        }
        function ee() {
            _.value && clearTimeout(_.value),
            x.value && clearTimeout(x.value),
            G.value && (p.value = !0)
        }
        function te() {
            const e = document.querySelector("#xl-chrome-ext-footer");
            if (!e.nextSibling)
                return;
            e.parentElement.appendChild(e)
        }
        return chrome.storage.local.get("isAgreementVisible", e => {
            e && !1 === e.isAgreementVisible ? $.value = !1 : $.value = !0
        }
        ),
        m( () => {
            chrome.runtime.sendMessage({
                name: "xl_footer_show",
                url: document.location.href,
                downloadShow: 0 !== c.resourceList.downloadList.length ? 1 : 0,
                playShow: !O.value && j.value ? 1 : 0,
                saveShow: O.value || j.value ? 0 : 1,
                resourceList: JSON.stringify(c.resourceList)
            }),
            he(te, 3e5, !0)
        }
        ),
        (t, u) => (o(),
        n("div", et, [a("div", {
            class: l(["", [t.$style.animate__bounceOutUp, t.$style["xl-chrome-ext-footer__ball"]]]),
            onClick: h(X, ["stop"]),
            onMouseenter: h(Y, ["stop"]),
            onMouseleave: h(Q, ["stop"]),
            onAnimationend: h(I, ["stop"])
        }, [ot, a("div", nt, d(e.resourceList.length), 1)], 42, tt), a("div", {
            onMouseenter: h(ee, ["stop"]),
            onMouseleave: h(Z, ["stop"]),
            onAnimationend: h(B, ["stop"]),
            class: l({
                "xl-chrome-ext-footer__bar": !0,
                "xl-chrome-ext-footer__bar--show": p.value
            })
        }, [e.isShowJsqEntry ? (o(),
        n("div", it, [v(oe, {
            source: "footer",
            text: e.jsqText
        }, null, 8, ["text"])])) : i("", !0), a("div", at, [a("p", st, " 检测到页面存在 " + d(e.resourceList.length <= 99 ? e.resourceList.length : 99) + " 个资源 ", 1), a("div", rt, [g(a("div", {
            class: "xl-chrome-ext-footer__url download",
            onClick: h(J, ["stop"]),
            onMouseenter: h(D, ["stop"]),
            onMouseleave: h(N, ["stop"])
        }, [e.resourceList.downloadList.length > 0 ? (o(),
        n("div", {
            key: 0,
            ref_key: "downloadPopoverRef",
            ref: T,
            style: r({
                top: V.value
            }),
            class: l({
                "xl-chrome-ext-footer__popover": !0,
                "xl-chrome-ext-footer__popover--show": M.value,
                "xl-chrome-ext-footer__popover--hidden": !M.value
            })
        }, [dt, ut, a("ul", mt, [(o(!0),
        n(k, null, E(e.resourceList.downloadList, (e, i) => (o(),
        n("li", {
            class: "xl-chrome-ext-footer__item",
            key: i
        }, [a("div", {
            class: l({
                "xl-chrome-ext-footer__type": !0,
                "xl-video": e.isVideoURL,
                "xl-link": !e.isVideoURL
            })
        }, null, 2), a("div", {
            class: l(t.$style["xl-chrome-ext-footer__name"])
        }, d(A(e)), 3), a("button", {
            type: "download",
            data: JSON.stringify(e),
            onClick: h(t => {
                return o = e,
                void (c.exception ? (s("showActionError", "下载", "download"),
                chrome.runtime.sendMessage({
                    name: "xl_download_stat",
                    link: o.url,
                    stat: o.isVideoURL ? "chrome_download_video" : "chrome_download_other",
                    from: "bottom_bar",
                    status: "fail"
                })) : W(o));
                var o
            }
            , ["stop"])
        }, " 下载 ", 8, _t)]))), 128))])], 6)) : i("", !0), vt], 40, ct), [[b, e.resourceList.downloadList.length > 0]]), e.resourceList.saveList.length > 0 ? (o(),
        n("div", {
            key: 0,
            class: "xl-chrome-ext-footer__url cloudAdd",
            onClick: h(R, ["stop"]),
            onMouseenter: h(P, ["stop"]),
            onMouseleave: h(F, ["stop"])
        }, [a("div", ft, [a("div", {
            class: l({
                "xl-chrome-ext-footer__button-icon": !0,
                loading: L.value,
                save: !j.value,
                play: !!j.value
            })
        }, null, 2), a("span", ht, d(L.value ? "添加中" : j.value ? "流畅播" : "存云盘"), 1)]), e.resourceList.saveList.length > 0 ? (o(),
        n("div", {
            key: 0,
            ref_key: "cloudAddPopoverRef",
            ref: U,
            style: r({
                top: C.value
            }),
            class: l({
                "xl-chrome-ext-footer__popover": !0,
                "xl-chrome-ext-footer__popover--show": S.value,
                "xl-chrome-ext-footer__popover--hidden": !S.value
            })
        }, [xt, wt, a("ul", yt, [(o(!0),
        n(k, null, E(e.resourceList.saveList, (e, i) => (o(),
        n("li", {
            class: "xl-chrome-ext-footer__item",
            key: i
        }, [a("div", {
            class: l({
                "xl-chrome-ext-footer__type": !0,
                "xl-video": e.isVideoURL,
                "xl-link": !e.isVideoURL
            })
        }, null, 2), a("div", {
            class: l(t.$style["xl-chrome-ext-footer__name"])
        }, d(A(e)), 3), a("button", {
            onClick: h(t => function(e, t) {
                z(t)
            }(0, e), ["stop"])
        }, [a("div", {
            class: l({
                "xl-chrome-ext-footer__button-icon": !0,
                small: !0,
                loading: L.value,
                save: !e.isVideoURL,
                play: !!e.isVideoURL
            })
        }, null, 2), a("span", bt, d(e.isVideoURL ? "流畅播" : "存云盘"), 1)], 8, gt)]))), 128))])], 6)) : i("", !0)], 40, pt)) : i("", !0)]), $.value ? (o(),
        n("div", kt, [Et, a("span", {
            class: "xl-chrome-ext-footer__know",
            onClick: h(K, ["stop"])
        }, "我知道了", 8, Lt)])) : i("", !0), a("div", Mt, [a("div", St, [a("div", {
            class: "xl-chrome-ext-footer__close",
            onClick: h(H, ["stop"])
        }, null, 8, Vt), Ct])])])], 42, lt)]))
    }
}, [["__cssModules", {
    $style: Ze
}]])
  , Ut = ["id"]
  , qt = a("h2", {
    class: "xl-chrome-ext-dialog__title"
}, "浏览器无法直接打开磁力链等特殊格式链接", -1)
  , $t = x('<ul class="xl-chrome-ext-dialog__content"><li class="xl-chrome-ext-dialog__content-li"><div class="xl-chrome-ext-dialog__content-icon xl-download"></div><div class="xl-chrome-ext-dialog__content-text">高速下载：基础加速、超级通道、会员加速三重加速</div></li><li class="xl-chrome-ext-dialog__content-li"><div class="xl-chrome-ext-dialog__content-icon xl-compatible"></div><div class="xl-chrome-ext-dialog__content-text">强大兼容：支持磁力、种子、在线视频</div></li><li class="xl-chrome-ext-dialog__content-li"><div class="xl-chrome-ext-dialog__content-icon xl-pan"></div><div class="xl-chrome-ext-dialog__content-text">超大云盘：最高12TB备份</div></li></ul>', 1)
  , jt = {
    class: "xl-chrome-ext-dialog__footer"
}
  , Ot = {
    __name: "ResourceDialog",
    emits: ["submit", "cancel"],
    setup(e) {
        const t = u(N("resource"));
        return m(async () => {}
        ),
        (e, l) => (o(),
        n("div", {
            class: "xl-chrome-ext-dialog",
            id: t.value
        }, [qt, a("a", {
            action: "close",
            href: "javascript:;",
            class: "xl-chrome-ext-dialog__close",
            title: "关闭",
            onClick: l[0] || (l[0] = h(t => e.$emit("cancel", "close"), ["stop"]))
        }), $t, a("div", jt, [a("button", {
            action: "install",
            class: "xl-chrome-ext-dialog__button xl-download",
            onClick: l[1] || (l[1] = h(t => e.$emit("submit", "install"), ["stop"]))
        }, " 迅雷高速下载 "), a("button", {
            action: "close",
            class: "xl-chrome-ext-dialog__button xl-close",
            onClick: l[2] || (l[2] = h(t => e.$emit("cancel", "close"), ["stop"]))
        }, " 取消 ")])], 8, Ut))
    }
};
const It = new class {
    constructor() {
        this.options = {
            enabled: !0,
            colors: {
                info: "#0000FF",
                warn: "#FFA500",
                error: "#FF0000",
                log: "#000000"
            }
        }
    }
    setEnabled(e) {
        this.options.enabled = e
    }
    setColors(e) {
        this.options.colors = {
            ...this.options.colors,
            ...e
        }
    }
    logMessage(e, t, ...o) {
        if (!this.options.enabled)
            return;
        this.options.colors[e]
    }
    info(e, ...t) {
        this.logMessage("info", e, ...t)
    }
    warn(e, ...t) {
        this.logMessage("warn", e, ...t)
    }
    error(e, ...t) {
        this.logMessage("error", e, ...t)
    }
    log(e, ...t) {
        this.logMessage("log", e, ...t)
    }
}
  , Bt = ["onMouseenter", "onMouseleave", "onClick"]
  , At = te({
    __name: "link-badge-win",
    props: {
        exception: {
            type: Boolean,
            required: !0
        }
    },
    emits: ["showActionError", "showVersionError"],
    setup(e, {emit: t}) {
        const i = t
          , s = e;
        u([]);
        const r = "badge_wrapper_" + ee
          , c = u(null)
          , d = u(null)
          , v = u("");
        u(null);
        const p = u(!1);
        u({
            top: 0,
            left: 0
        }),
        u(1e3);
        const f = R;
        function x() {
            const e = {
                link: v.value,
                stat: "chrome_download_other"
            };
            It.info("badge tag click", e),
            s.exception ? i("showActionError", "下载", "download") : async function({link: e=""}) {
                const t = {
                    link: e,
                    stat: "chrome_download_other",
                    isM3U8Video: !1
                };
                try {
                    const e = await async function({fileName: e="", link: t="", stat: o=""}) {
                        return await chrome.runtime.sendMessage({
                            name: "xl_download",
                            link: t,
                            fileName: e,
                            cookie: document.cookie,
                            referurl: document.location.href,
                            stat: o,
                            from: p.value ? "text_hover" : "link_hover",
                            isInIframe: D(),
                            isM3U8Video: !1
                        })
                    }(t);
                    It.info("badge dl resp", e)
                } catch (o) {
                    "version" === (null == o ? void 0 : o.errType) && (It.info("badge dl error", null == o ? void 0 : o.text),
                    i("showVersionError", null == o ? void 0 : o.text))
                }
            }(e)
        }
        const w = () => {
            It.log("enter badge浮层")
        }
          , y = () => {
            g()
        }
        ;
        function g() {
            try {
                c.value.style.display = "none"
            } catch (e) {
                It.warn("hideLinkPopover", e)
            }
        }
        const b = e => {
            var t;
            const o = e.target
              , n = o.href || ""
              , l = function(e) {
                let t = "";
                return e.childNodes.forEach(e => {
                    e.nodeType === Node.TEXT_NODE && (t += e.textContent.trim())
                }
                ),
                t
            }(o)
              , i = f.test(n)
              , a = f.test(l)
              , s = a ? null == (t = l.match(f)) ? void 0 : t[0] : "";
            (i || a) && (e.preventDefault(),
            v.value = i ? n : s,
            d.value = o,
            p.value = !i,
            function(e, t) {
                const o = c.value;
                o.style.display = "flex";
                const n = o.getBoundingClientRect()
                  , l = t.getBoundingClientRect()
                  , i = e.clientX - n.width / 4
                  , a = l.top - n.height;
                o.style.left = i + "px",
                o.style.top = a + "px"
            }(e, o),
            chrome.runtime.sendMessage({
                name: "xl_stat",
                eventId: 977,
                extParam: {
                    value2: v.value,
                    value7: p.value ? "text_hover" : "link_hover"
                }
            }))
        }
        ;
        function k(e) {
            var t;
            (null == (t = null == e ? void 0 : e.toElement) ? void 0 : t.id.includes(r)) || e.target !== d.value || g()
        }
        return m( () => {
            function e() {
                document.body.addEventListener("mouseenter", b, !0),
                document.body.addEventListener("mouseleave", k, !0)
            }
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", () => {
                e()
            }
            ) : e()
        }
        ),
        _( () => {
            document.body.removeEventListener("mouseenter", b, !0),
            clearTimeout(null),
            It.info("link-badge onUnmounted")
        }
        ),
        (e, t) => (o(),
        n("div", {
            class: l([r, e.$style.badge_wrapper]),
            id: r,
            ref_key: "linkPopRef",
            ref: c,
            onMouseenter: h(w, ["stop"]),
            onMouseleave: h(y, ["stop"]),
            onClick: h(x, ["stop"])
        }, [a("div", {
            class: l(e.$style.logo)
        }, null, 2), a("span", {
            class: l(e.$style.line)
        }, null, 2), a("div", {
            class: l(e.$style.text_wrapper)
        }, [a("span", {
            class: l(e.$style.download_icon)
        }, null, 2), a("span", {
            class: l(e.$style.text)
        }, "高速下载", 2)], 2)], 42, Bt))
    }
}, [["__cssModules", {
    $style: {
        badge_wrapper: "_badge_wrapper_eor63_1",
        logo: "_logo_eor63_20",
        line: "_line_eor63_27",
        text_wrapper: "_text_wrapper_eor63_33",
        download_icon: "_download_icon_eor63_39",
        text: "_text_eor63_33"
    }
}]])
  , Nt = {
    class: "dialog-wrapper xly-dialog-prompt"
}
  , Dt = [a("i", {
    class: "xl-icon-close"
}, null, -1)]
  , Rt = {
    class: "xly-dialog-prompt__text"
}
  , Ft = a("p", {
    class: "xly-dialog-prompt__text"
}, "（升级提示：主菜单-检查更新）", -1)
  , Pt = {
    class: "xly-dialog-prompt__footer"
}
  , zt = {
    class: "xly-dialog-prompt__button"
}
  , Jt = {
    __name: "VersionError",
    props: {
        text: {
            type: String,
            required: !0
        }
    },
    emits: ["submit", "cancel"],
    setup: (e, {emit: t}) => (m(async () => {}
    ),
    (t, l) => (o(),
    n("div", Nt, [a("h2", null, d(e.text) + "调用失败", 1), a("a", {
        action: "close",
        href: "javascript:;",
        onClick: l[0] || (l[0] = h(e => t.$emit("cancel", "close"), ["stop"])),
        class: "xly-dialog-close",
        title: "关闭"
    }, Dt), a("p", Rt, "客户端版本过低，无法启用" + d(e.text) + "。", 1), Ft, a("div", Pt, [a("div", zt, [a("button", {
        action: "close",
        class: "td-button--other",
        style: {
            width: "65px",
            "border-radius": "4px"
        },
        onClick: l[1] || (l[1] = e => t.$emit("cancel", "close"))
    }, " 取消 "), a("button", {
        action: "startThunder",
        class: "td-button",
        onClick: l[2] || (l[2] = h(e => t.$emit("submit", "startThunder"), ["stop"]))
    }, "前往升级")])])])))
}
  , Wt = {
    video_op_wrapper: "_video_op_wrapper_pujw6_1",
    video_op_list: "_video_op_list_pujw6_1",
    op_icon: "_op_icon_pujw6_1",
    op_text: "_op_text_pujw6_1",
    op_item: "_op_item_pujw6_1",
    download: "_download_pujw6_1",
    play: "_play_pujw6_1",
    screen: "_screen_pujw6_1",
    "options-wrapper": "_options-wrapper_pujw6_3",
    "xl-chrome-ext-bar-toast": "_xl-chrome-ext-bar-toast_pujw6_15",
    "xl-chrome-ext-bar__logo": "_xl-chrome-ext-bar__logo_pujw6_30",
    "xl-chrome-ext-bar-toast__success": "_xl-chrome-ext-bar-toast__success_pujw6_38",
    "xl-chrome-ext-bar-toast__error": "_xl-chrome-ext-bar-toast__error_pujw6_46",
    "xl-chrome-ext-bar-toast__text": "_xl-chrome-ext-bar-toast__text_pujw6_54",
    "xl-chrome-ext-tips": "_xl-chrome-ext-tips_pujw6_62",
    "xl-chrome-ext-title": "_xl-chrome-ext-title_pujw6_69",
    "xl-chrome-ext-title--footer": "_xl-chrome-ext-title--footer_pujw6_74",
    "xl-chrome-ext-bar__option": "_xl-chrome-ext-bar__option_pujw6_78",
    img: "_img_pujw6_94",
    "xl-download": "_xl-download_pujw6_101",
    "xl-screen": "_xl-screen_pujw6_105",
    "xl-close": "_xl-close_pujw6_109"
}
  , Gt = ["onClick"]
  , Ht = ["onClick"]
  , Kt = ["onClick"]
  , Xt = ["onClick"]
  , Yt = te({
    __name: "VideoTagV1",
    props: {
        latestVideoSrc: {
            type: String,
            required: !0
        },
        latestVideoElement: {
            type: Object,
            required: !1,
            default: () => ({})
        },
        exception: {
            type: Boolean,
            required: !0
        },
        isShowVideoTag: {
            type: Boolean,
            required: !0
        },
        isShowDownloadBar: {
            type: Boolean,
            required: !0
        },
        isShowCloudAddBar: {
            type: Boolean,
            required: !0
        }
    },
    emits: ["showActionError", "showVersionError", "handleDownload", "handleCloseBar"],
    setup(e, {emit: t}) {
        const s = t
          , r = e
          , c = u(!1)
          , _ = u("")
          , v = u("success")
          , p = u(null)
          , f = L({
            isM3U8Video: !1,
            M3U8VideoUrl: ""
        });
        function x() {
            if (r.exception)
                return s("showActionError", "下载", "download"),
                void chrome.runtime.sendMessage({
                    name: "xl_download_stat",
                    link: f.M3U8VideoUrl || r.latestVideoSrc,
                    stat: "chrome_download_video",
                    from: "video_hover",
                    status: "fail",
                    videoUIVersion: "v1"
                });
            !function() {
                do {
                    if (!r.latestVideoElement)
                        break;
                    const e = r.latestVideoElement;
                    if (!r.latestVideoSrc)
                        break;
                    let t = ""
                      , o = "";
                    if (document.title) {
                        const n = document.title.replace(/[*?/:|<>"]/g, "");
                        n && (o = F(P(r.latestVideoSrc)),
                        o || (o = E(e)),
                        t = `${n}${o}`)
                    }
                    chrome.runtime.sendMessage({
                        name: "xl_download",
                        link: f.M3U8VideoUrl || r.latestVideoSrc,
                        cookie: document.cookie,
                        referurl: document.location.href,
                        fileName: t,
                        stat: "chrome_download_video",
                        from: "video_hover",
                        isInIframe: D(),
                        isM3U8Video: !!f.M3U8VideoUrl,
                        videoUIVersion: "v1"
                    })
                } while (0)
            }()
        }
        async function w() {
            const e = z(f.M3U8VideoUrl || r.latestVideoSrc)
              , t = {
                from: "video_hover",
                data: {
                    opt: "web:cloudadd",
                    params: {
                        url: e.url,
                        name: e.fileName,
                        ext: e.suffix,
                        isVideo: e.isVideoURL
                    }
                }
            };
            if (D() ? t.name = "xl_cloudadd_in_iframe" : (t.name = "xl_cloudadd",
            t.cookie = document.cookie,
            t.webTitle = document.title),
            r.exception)
                return s("showActionError", "流畅播", "fluent_play"),
                void chrome.runtime.sendMessage({
                    name: "xl_cloudadd_stat",
                    from: "video_hover",
                    isSuccess: !1,
                    data: e
                });
            const {isAccept: o} = await chrome.runtime.sendMessage({
                name: "xl_check_blacklist"
            });
            if (!o)
                return chrome.runtime.sendMessage({
                    name: "xl_show_toast",
                    text: "链接异常，无法流畅播。",
                    type: "info"
                }),
                void chrome.runtime.sendMessage({
                    name: "xl_cloudadd_stat",
                    from: "video_hover",
                    isSuccess: !1,
                    data: e
                });
            chrome.runtime.sendMessage(t, e => {
                e && "version" === e.errType && s("showVersionError", e.text)
            }
            )
        }
        function y() {
            if (r.exception)
                return void s("showActionError", "投屏", "projection");
            const e = {
                url: r.latestVideoSrc,
                name: document.title,
                playForm: document.referrer,
                dlnaPlay: !0,
                stat: "browser_plugin_tv_sp_click"
            };
            chrome.runtime.sendMessage({
                name: "xl_screen",
                type: "click",
                videoUIVersion: "v1",
                data: {
                    opt: "web:play",
                    params: e
                }
            }, e => {
                e && "version" === e.errType && s("showVersionError", "投屏")
            }
            )
        }
        function E(e) {
            let t = void 0;
            for (let o = 0; o < e.children.length; o++) {
                const n = e.children[o];
                if ("source" === n.tagName.toLowerCase() && n.type) {
                    const e = n.type.split("/");
                    e.length > 0 && (t = e[e.length - 1]);
                    break
                }
            }
            return t ? "." + t : ""
        }
        function M() {
            navigator.clipboard ? chrome.runtime.sendMessage({
                name: "xl_copy",
                text: f.M3U8VideoUrl || r.latestVideoSrc
            }, e => {
                e.status && S({
                    isShow: !0,
                    msg: "复制成功",
                    type: "success"
                })
            }
            ) : S({
                isShow: !0,
                msg: "复制失败",
                type: "error"
            })
        }
        function S(e) {
            const {isShow: t, msg: o, type: n} = e;
            c.value = t,
            _.value = o,
            v.value = n,
            p.value && clearTimeout(p.value),
            p.value = setTimeout( () => {
                c.value = !1
            }
            , 1500)
        }
        return m(async () => {
            chrome.runtime.sendMessage({
                name: "xl_screen",
                type: "init",
                videoUIVersion: "v1",
                data: {
                    params: {
                        playForm: document.referrer
                    }
                }
            }, e => {
                f.isM3U8Video = (null == e ? void 0 : e.isM3U8Video) || !1,
                f.M3U8VideoUrl = (null == e ? void 0 : e.M3U8VideoUrl) || ""
            }
            )
        }
        ),
        (t, s) => (o(),
        n(k, null, [c.value ? (o(),
        n("div", {
            key: 0,
            class: l([t.$style["xl-chrome-ext-bar-toast"]])
        }, [a("div", {
            class: l(["success" === v.value ? t.$style["xl-chrome-ext-bar-toast__success"] : "", "error" === v.value ? t.$style["xl-chrome-ext-bar-toast__error"] : ""])
        }, null, 2), a("div", {
            class: l([t.$style["xl-chrome-ext-bar-toast__text"]])
        }, d(_.value), 3)], 2)) : i("", !0), g(a("div", {
            class: l([t.$style["options-wrapper"]])
        }, [a("a", {
            onClick: s[0] || (s[0] = h(e => t.$emit("handleCloseBar"), ["stop"])),
            id: "xl_chrome_ext_bar_close",
            href: "javascript:;"
        }), a("div", {
            class: l(t.$style["xl-chrome-ext-bar__logo"])
        }, null, 2), e.isShowCloudAddBar ? (o(),
        n("div", {
            key: 0,
            class: l([t.$style["xl-chrome-ext-tips"], t.$style["cloud-add"]]),
            onClick: h(w, ["stop"])
        }, [a("a", {
            id: "xl_chrome_ext_bar_cloudAdd",
            class: l(t.$style["xl-chrome-ext-bar__option"]),
            href: "javascript:;"
        }, null, 2), a("div", {
            class: l(t.$style["xl-chrome-ext-title"])
        }, "流畅播", 2)], 10, Gt)) : i("", !0), e.isShowDownloadBar ? (o(),
        n("div", {
            key: 1,
            class: l([t.$style["xl-chrome-ext-tips"], t.$style.download]),
            onClick: h(x, ["stop"])
        }, [a("a", {
            id: "xl_chrome_ext_bar_download",
            class: l([t.$style["xl-chrome-ext-bar__option"]]),
            href: "javascript:;"
        }, null, 2), a("div", {
            class: l([t.$style["xl-chrome-ext-title"]])
        }, "下载视频", 2)], 10, Ht)) : i("", !0), a("div", {
            onClick: h(y, ["stop"]),
            class: l([t.$style["xl-chrome-ext-tips"]])
        }, [a("a", {
            id: "xl_chrome_ext_bar_screen",
            href: "javascript:;",
            class: l([t.$style["xl-chrome-ext-bar__option"]])
        }, null, 2), a("div", {
            class: l([t.$style["xl-chrome-ext-title"]])
        }, "投屏", 2)], 10, Kt), a("div", {
            onClick: h(M, ["stop"]),
            class: l([t.$style["xl-chrome-ext-tips"]])
        }, [a("a", {
            id: "xl_chrome_ext_bar_copy",
            class: l([t.$style["xl-chrome-ext-bar__option"]]),
            href: "javascript:;"
        }, null, 2), a("div", {
            class: l([t.$style["xl-chrome-ext-title"]])
        }, "复制链接", 2)], 10, Xt)], 2), [[b, e.isShowVideoTag]])], 64))
    }
}, [["__cssModules", {
    $style: Wt
}]])
  , Qt = ["onClick"]
  , Zt = te({
    __name: "VideoTagV2",
    props: {
        latestVideoSrc: {
            type: String,
            required: !0
        },
        latestVideoElement: {
            type: Object,
            required: !1,
            default: () => ({})
        },
        exception: {
            type: Boolean,
            required: !0
        },
        isShowVideoTag: {
            type: Boolean,
            required: !0
        },
        isShowDownloadBar: {
            type: Boolean,
            required: !0
        },
        isShowCloudAddBar: {
            type: Boolean,
            required: !0
        }
    },
    emits: ["showActionError", "showVersionError", "handleDownload", "handleCloseBar"],
    setup(e, {emit: i}) {
        const s = i
          , r = e;
        u(!1),
        u(""),
        u("success"),
        u(null);
        const c = L({
            isM3U8Video: !1,
            M3U8VideoUrl: ""
        });
        m( () => {}
        ),
        w(c, e => {}
        );
        const _ = u([{
            text: "下载",
            id: "download",
            icon: "download"
        }, {
            text: "流畅播",
            id: "play",
            icon: "play"
        }, {
            text: "投屏",
            id: "screen",
            icon: "screen"
        }])
          , v = t( () => {
            let e = [..._.value];
            return r.isShowCloudAddBar || (e = e.filter(e => "play" !== e.id)),
            e
        }
        );
        function p(e) {
            switch (e.id) {
            case "download":
                !function() {
                    if (It.info("badge tag click"),
                    r.exception)
                        return s("showActionError", "下载", "download"),
                        void chrome.runtime.sendMessage({
                            name: "xl_download_stat",
                            link: c.M3U8VideoUrl || r.latestVideoSrc,
                            stat: "chrome_download_video",
                            from: "video_hover",
                            status: "fail",
                            videoUIVersion: "v2"
                        });
                    !function() {
                        if (!r.latestVideoElement)
                            return;
                        const e = r.latestVideoElement;
                        if (!r.latestVideoSrc)
                            return;
                        let t = ""
                          , o = "";
                        if (document.title) {
                            const n = document.title.replace(/[*?/:|<>"]/g, "");
                            n && (o = F(P(r.latestVideoSrc)),
                            o || (o = function(e) {
                                let t = void 0;
                                for (let o = 0; o < e.children.length; o++) {
                                    const n = e.children[o];
                                    if ("source" === n.tagName.toLowerCase() && n.type) {
                                        const e = n.type.split("/");
                                        e.length > 0 && (t = e[e.length - 1]);
                                        break
                                    }
                                }
                                return t ? "." + t : ""
                            }(e)),
                            t = `${n}${o}`)
                        }
                        !function({fileName: e="", link: t=""}) {
                            chrome.runtime.sendMessage({
                                name: "xl_download",
                                link: t,
                                fileName: e,
                                cookie: document.cookie,
                                referurl: document.location.href,
                                stat: "chrome_download_video",
                                from: "video_hover",
                                isInIframe: D(),
                                isM3U8Video: !!c.M3U8VideoUrl,
                                videoUIVersion: "v2"
                            })
                        }({
                            link: c.M3U8VideoUrl || r.latestVideoSrc,
                            fileName: t
                        })
                    }()
                }();
                break;
            case "screen":
                !function() {
                    if (r.exception)
                        return void s("showActionError", "投屏", "projection");
                    const e = {
                        url: r.latestVideoSrc,
                        name: document.title,
                        playForm: document.referrer,
                        dlnaPlay: !0,
                        stat: "browser_plugin_tv_sp_click"
                    };
                    chrome.runtime.sendMessage({
                        name: "xl_screen",
                        type: "click",
                        videoUIVersion: "v2",
                        data: {
                            opt: "web:play",
                            params: e
                        }
                    }, e => {
                        e && "version" === e.errType && s("showVersionError", "投屏")
                    }
                    )
                }();
                break;
            case "play":
                !async function() {
                    const e = z(c.M3U8VideoUrl || r.latestVideoSrc)
                      , t = {
                        from: "video_hover",
                        data: {
                            opt: "web:cloudadd",
                            params: {
                                url: e.url,
                                name: e.fileName,
                                ext: e.suffix,
                                isVideo: e.isVideoURL
                            }
                        }
                    };
                    D() ? t.name = "xl_cloudadd_in_iframe" : (t.name = "xl_cloudadd",
                    t.cookie = document.cookie,
                    t.webTitle = document.title);
                    if (r.exception)
                        return s("showActionError", "流畅播", "fluent_play"),
                        void chrome.runtime.sendMessage({
                            name: "xl_cloudadd_stat",
                            from: "video_hover",
                            isSuccess: !1,
                            data: e
                        });
                    const {isAccept: o} = await chrome.runtime.sendMessage({
                        name: "xl_check_blacklist"
                    });
                    if (!o)
                        return chrome.runtime.sendMessage({
                            name: "xl_show_toast",
                            text: "链接异常，无法流畅播。",
                            type: "info"
                        }),
                        void chrome.runtime.sendMessage({
                            name: "xl_cloudadd_stat",
                            from: "video_hover",
                            isSuccess: !1,
                            data: e
                        });
                    chrome.runtime.sendMessage(t, e => {
                        e && "version" === e.errType && s("showVersionError", e.text)
                    }
                    )
                }()
            }
        }
        function f() {
            chrome.runtime.sendMessage({
                name: "xl_screen",
                type: "init",
                videoUIVersion: "v2",
                data: {
                    params: {
                        playForm: document.referrer
                    }
                }
            }),
            setTimeout( () => {
                c.M3U8VideoUrl || r.latestVideoSrc
            }
            , 2e3)
        }
        return m(async () => {
            chrome.runtime.onMessage.addListener( (e, t, o) => {
                var n, l;
                "newM3u8Request" === e.action && (c.isM3U8Video = (null == (n = null == e ? void 0 : e.data) ? void 0 : n.isM3U8Video) || !1,
                c.M3U8VideoUrl = (null == (l = null == e ? void 0 : e.data) ? void 0 : l.url) || "",
                f())
            }
            )
        }
        ),
        (t, i) => g((o(),
        n("div", {
            class: l([t.$style.video_op_wrapper])
        }, [a("ul", {
            class: l(t.$style.video_op_list)
        }, [(o(!0),
        n(k, null, E(v.value, (e, i) => (o(),
        n("li", {
            key: i,
            class: l([t.$style.op_item, t.$style[e.id]]),
            onClick: h(t => p(e), ["stop"])
        }, [a("span", {
            class: l(t.$style.op_icon)
        }, null, 2), a("span", {
            class: l(t.$style.op_text)
        }, d(e.text), 3)], 10, Qt))), 128))], 2)], 2)), [[b, e.isShowVideoTag]])
    }
}, [["__cssModules", {
    $style: {
        video_op_wrapper: "_video_op_wrapper_96mx8_1",
        video_op_list: "_video_op_list_96mx8_17",
        op_icon: "_op_icon_96mx8_25",
        op_text: "_op_text_96mx8_31",
        op_item: "_op_item_96mx8_39",
        download: "_download_96mx8_45",
        play: "_play_96mx8_48",
        screen: "_screen_96mx8_51"
    }
}]])
  , eo = ["id"]
  , to = te({
    __name: "videoTag",
    setup(e) {
        const t = u(Z)
          , l = u(null);
        return async function() {
            try {
                const e = await ne({
                    name: "GetConfig"
                });
                if (e) {
                    const t = (null == e ? void 0 : e.videoTagVersion) || "v2";
                    l.value = "v2" === t ? Zt : Yt
                }
            } catch (e) {}
        }(),
        (e, i) => (o(),
        n("div", {
            id: t.value
        }, [(o(),
        M(C(l.value), S(V(e.$attrs)), null, 16))], 8, eo))
    }
}, [["__cssModules", {
    $style: Wt
}]]);
function oo() {
    this.states = {},
    this._current = void 0
}
oo.prototype.start = function(e) {
    if (void 0 !== this._current)
        throw "State machine already started";
    if (null == e)
        throw "Please give a valid state name";
    setTimeout(oo._changeState, 0, this, e)
}
,
oo.prototype.fireEvent = function(e, t) {
    if (void 0 === this._current)
        throw "State machine not started";
    if (null === this._current)
        throw "State machine terminated";
    setTimeout(oo._handleEvent, 0, this, e, t)
}
,
oo._changeState = function(e, t) {
    if (null !== t && !e.states.hasOwnProperty(t))
        throw e._current = null,
        'No such state "' + t + '"';
    let o = e._current;
    if (void 0 !== o && o.hasOwnProperty("__exit__") && o.__exit__.apply(e),
    null === t)
        return void (e._current = null);
    if (o = e._current = e.states[t],
    !o.hasOwnProperty("__enter__"))
        return;
    const n = o.__enter__.apply(e);
    void 0 !== n && setTimeout(oo._changeState, 0, e, n)
}
,
oo._handleEvent = function(e, t, o) {
    let n = e._current[t];
    "function" == typeof n && (n = n.apply(e, o)),
    void 0 !== n && setTimeout(oo._changeState, 0, e, n)
}
;
let no = {};
const lo = {
    glass: "ncennffkjdiamlpmcbajkmaiiiddgioo-glass",
    help: "ncennffkjdiamlpmcbajkmaiiiddgioo-help",
    overlay: "ncennffkjdiamlpmcbajkmaiiiddgioo-overlay"
}
  , io = {
    closing: "ncennffkjdiamlpmcbajkmaiiiddgioo-closing",
    exiting: "ncennffkjdiamlpmcbajkmaiiiddgioo-exiting",
    inverted: "ncennffkjdiamlpmcbajkmaiiiddgioo-inverted",
    invisible: "ncennffkjdiamlpmcbajkmaiiiddgioo-invisible",
    loading: "ncennffkjdiamlpmcbajkmaiiiddgioo-loading",
    relative: "ncennffkjdiamlpmcbajkmaiiiddgioo-relative",
    selected: "ncennffkjdiamlpmcbajkmaiiiddgioo-selected",
    selectionRectangle: "ncennffkjdiamlpmcbajkmaiiiddgioo-selection-rectangle"
};
function ao() {
    this._invertedSelection = !1,
    this._curpos = {
        x: 0,
        y: 0
    },
    this._selectableElements = [],
    this._visibleElements = [];
    const e = this
      , t = document.createElement("div");
    t.id = lo.overlay;
    const o = document.createElement("div");
    o.id = lo.glass;
    const n = document.createElement("div");
    n.id = lo.help,
    n.innerHTML = chrome.i18n.getMessage("usage"),
    n.onmouseover = function() {
        n.classList.add(io.invisible)
    }
    ,
    n.onmouseout = function() {
        n.classList.remove(io.invisible)
    }
    ;
    const l = function(e) {
        e.preventDefault(),
        e.stopPropagation()
    }
      , i = function(t) {
        e._curpos.x = t.clientX,
        e._curpos.y = t.clientY
    };
    let a = null;
    const s = {
        contextmenu: function(e) {
            l(e)
        },
        mousemove: function(t) {
            i(t),
            e.sm.fireEvent("mousemove")
        },
        mousedown: function(t) {
            if (null === a && (0 == t.button || 2 == t.button)) {
                switch (a = 0 == t.button ? t.ctrlKey ? 1 : 0 : 2,
                a) {
                case 0:
                    i(t),
                    e.sm.fireEvent("mousedown");
                    break;
                case 1:
                case 2:
                    i(t),
                    e.sm.fireEvent("alt_mousedown")
                }
                l(t)
            }
        },
        mouseup: function(t) {
            if (null !== a && (t.button == a || 0 == t.button || 1 == a)) {
                switch (t.button) {
                case 0:
                    i(t),
                    e.sm.fireEvent(1 == a ? "alt_mouseup" : "mouseup");
                    break;
                case 2:
                    i(t),
                    e.sm.fireEvent("alt_mouseup")
                }
                a = null,
                l(t)
            }
        },
        keydown: function(t) {
            if (t.isTrusted) {
                switch (t.keyCode) {
                case 13:
                    e.sm.fireEvent("req_download");
                    break;
                case 27:
                    e.sm.fireEvent("req_exit");
                    break;
                default:
                    return
                }
                l(t)
            }
        },
        resize: function() {
            let t = null;
            const o = function() {
                t = null,
                e.updateVisibleElements()
            };
            return function() {
                null !== t && clearTimeout(t),
                t = setTimeout(o, 100)
            }
        }(),
        scroll: function() {
            let t = null;
            const o = function() {
                t = null,
                e.updateVisibleElements()
            };
            return function() {
                null !== t && clearTimeout(t),
                t = setTimeout(o, 100)
            }
        }()
    };
    document.addEventListener("contextmenu", s.contextmenu),
    document.addEventListener("scroll", s.scroll),
    window.addEventListener("resize", s.resize),
    document.addEventListener("keydown", s.keydown, !0),
    document.body.addEventListener("mousedown", s.mousedown, !0),
    document.body.addEventListener("mouseup", s.mouseup, !0),
    t.appendChild(n),
    t.appendChild(o);
    const r = new oo;
    r.states.load = {
        __enter__: function() {
            document.documentElement.classList.add(io.loading),
            document.body.appendChild(t),
            t.addEventListener("webkitTransitionEnd", (function o() {
                t.removeEventListener("webkitTransitionEnd", o),
                e.sm.fireEvent("load_done")
            }
            )),
            setTimeout((function() {
                e.populate(),
                e.updateVisibleElements(),
                document.documentElement.classList.remove(io.loading)
            }
            ), 0)
        },
        load_done: "idle"
    },
    r.states.exit = {
        __enter__: function() {
            e._cursel && m(),
            document.removeEventListener("mousemove", s.mousemove),
            document.removeEventListener("scroll", s.scroll),
            window.removeEventListener("resize", s.resize),
            document.removeEventListener("contextmenu", s.contextmenu),
            document.removeEventListener("keydown", s.keydown, !0),
            document.body.removeEventListener("mousedown", s.mousedown, !0),
            document.body.removeEventListener("mouseup", s.mouseup, !0),
            e._selectableElements.forEach((function(e) {
                e._private.delegate.classList.remove(io.selected),
                e._private.delegate.classList.remove(io.relative),
                delete e._private
            }
            ));
            const o = () => {
                t.removeEventListener("webkitTransitionEnd", o),
                document.body.removeChild(t),
                document.documentElement.classList.remove(io.exiting),
                e.sm.fireEvent("exit_done")
            }
            ;
            t.addEventListener("webkitTransitionEnd", o),
            document.documentElement.classList.add(io.exiting)
        },
        __exit__: function() {
            no.instance = null
        },
        exit_done: null
    },
    r.states.idle = {
        mousedown: "selection",
        alt_mousedown: "deselection",
        req_exit: "exit",
        req_download: "action-download"
    };
    let c = null
      , d = null;
    const u = function() {
        const t = document.createElement("div");
        t.classList.add(io.selectionRectangle),
        t.style.left = e._curpos.x + "px",
        t.style.top = e._curpos.y + "px",
        e._invertedSelection && t.classList.add(io.inverted),
        e._cursel = document.body.appendChild(t),
        e._startpos = {
            x: e._curpos.x,
            y: e._curpos.y
        },
        e._selrect = {
            x: e._curpos.x,
            y: e._curpos.y,
            w: 0,
            h: 0
        },
        e._lastDrawn = {},
        c = setInterval(e.drawSelection.bind(e), 30),
        d = setInterval(e.calcSelectedElements.bind(e), 30),
        document.addEventListener("mousemove", s.mousemove)
    }
      , m = function() {
        document.removeEventListener("mousemove", s.mousemove),
        clearInterval(c),
        clearInterval(d),
        c = null,
        d = null,
        e.calcSelectedElements();
        for (const t in e._selectableElements) {
            const o = e._selectableElements[t]._private;
            o.selected = o.selected2
        }
        return e._cursel.addEventListener("webkitTransitionEnd", function() {
            document.body.removeChild(this)
        }
        .bind(e._cursel)),
        e._cursel.classList.add(io.closing),
        delete e._cursel,
        delete e._startpos,
        delete e._selrect,
        delete e._lastDrawn,
        "idle"
    }
      , _ = function() {
        if (!e._startpos)
            return;
        const t = e._startpos
          , o = e._curpos
          , n = e._selrect;
        n.x = Math.min(t.x, o.x),
        n.y = Math.min(t.y, o.y),
        n.w = Math.abs(t.x - o.x),
        n.h = Math.abs(t.y - o.y)
    };
    r.states.selection = {
        __enter__: function() {
            e._invertedSelection = !1,
            u()
        },
        mousemove: _,
        mouseup: m,
        req_exit: "exit"
    },
    r.states.deselection = {
        __enter__: function() {
            e._invertedSelection = !0,
            u()
        },
        mousemove: _,
        alt_mouseup: m,
        req_exit: "exit"
    },
    r.states["action-download"] = {
        __enter__: function() {
            const t = function(e) {
                const t = {};
                return e.forEach((function(e) {
                    if (e._private.selected) {
                        const o = function(e) {
                            let t = e.href;
                            do {
                                const o = e.getAttribute("thunderhref");
                                if (o) {
                                    t = o;
                                    break
                                }
                                if (null === e.getAttribute("thundertype"))
                                    break;
                                const n = e.attributes.length;
                                if (n <= 0)
                                    break;
                                for (let l = 0; l < n; l++) {
                                    const o = e.attributes[l].value;
                                    if (o && 0 === o.toLowerCase().indexOf("thunder://")) {
                                        t = o;
                                        break
                                    }
                                }
                            } while (0);
                            return t
                        }(e);
                        t[o] = null
                    }
                }
                )),
                Object.keys(t)
            }(e._selectableElements);
            chrome.runtime.sendMessage({
                name: "xl_download_multi",
                referurl: document.location.href,
                cookie: document.cookie,
                urls: t
            }),
            e.sm.fireEvent("done")
        },
        done: "exit"
    },
    this.sm = r
}
function so(e, t) {
    for (const o in e)
        e[o].classList.add(io.selected);
    for (const o in t)
        t[o].classList.remove(io.selected)
}
function ro(e, t) {
    return !(e.bottom < t.y || t.y + t.h < e.top || e.right < t.x || t.x + t.w < e.left)
}
ao.prototype.populate = function() {
    const e = document.links
      , t = /^javascript:/;
    for (let o = 0; o < e.length; o++) {
        const n = e[o];
        if (null == n.href || t.test(n.href))
            continue;
        let l = n;
        const i = n.getElementsByTagName("img");
        i.length && (l = i[0]),
        n._private = {
            selected: !1,
            selected2: !1,
            delegate: l,
            positionfix: !1
        },
        this._selectableElements.push(n)
    }
}
,
ao.prototype.updateVisibleElements = function() {
    const e = {
        x: 0,
        y: 0,
        w: window.innerWidth,
        h: window.innerHeight
    }
      , t = this._visibleElements
      , o = this._selectableElements;
    t.splice(0);
    for (const n in o) {
        const l = o[n]
          , i = l._private
          , a = i.delegate;
        ro(a.getBoundingClientRect(), e) && (t.push(l),
        i.positionfix || (i.positionfix = !0,
        "static" == window.getComputedStyle(a).position && a.classList.add(io.relative)))
    }
}
,
ao.prototype.drawSelection = function() {
    const e = this._selrect
      , t = this._lastDrawn
      , o = this._cursel.style;
    e.x == t.x && e.y == t.y && e.w == t.w && e.h == t.h || (o.left = (t.x = e.x) + "px",
    o.top = (t.y = e.y) + "px",
    o.width = (t.w = e.w) + "px",
    o.height = (t.h = e.h) + "px")
}
,
ao.prototype.calcSelectedElements = function() {
    const e = this._visibleElements
      , t = this._selrect
      , o = []
      , n = [];
    for (const l in e) {
        const i = e[l]._private
          , a = i.delegate
          , s = i.delegate.getClientRects();
        let r = !1;
        for (let e = 0; e < s.length; e++) {
            if (ro(s[e], t)) {
                r = !0;
                break
            }
        }
        const c = r ? !this._invertedSelection : i.selected;
        c != i.selected2 && ((c ? o : n).push(a),
        i.selected2 = c)
    }
    (o || n) && setTimeout(so, 0, o, n)
}
,
no = {
    instance: null,
    enter: function() {
        null === no.instance && (no.instance = new ao,
        no.instance.sm.start("load"),
        chrome.runtime.sendMessage({
            name: "xl_download_multi_start",
            referurl: document.location.href
        }))
    },
    quit: function() {
        no.instance && no.instance.sm.fireEvent("req_exit")
    },
    download: function() {
        no.instance && no.instance.sm.fireEvent("req_download")
    }
};
const co = no
  , uo = te({
    __name: "content-win",
    setup(e) {
        const t = "xl_chrome_ext_" + ee;
        u(null),
        u(null),
        u(null);
        const a = u({})
          , s = u(!1)
          , r = u("v2")
          , c = u("")
          , d = u({})
          , p = u(!1)
          , h = u(!1)
          , x = u(!1)
          , y = u(!1)
          , g = u(!1)
          , b = u("");
        u(null);
        const k = u(!1)
          , E = u(!1)
          , S = u(!1)
          , V = u(!1)
          , C = u(!1)
          , T = u("")
          , U = u("")
          , q = u("")
          , j = u(!1)
          , O = u("")
          , I = u(!1)
          , A = u(null)
          , N = u(!1)
          , R = u(null)
          , F = L({
            isM3U8Video: !1,
            M3U8VideoUrl: ""
        })
          , P = L({
            downloadList: [],
            playList: {
                M3U8List: [],
                normalVideoList: [],
                length: 0
            },
            saveList: [],
            length: 0
        });
        let te, oe, ie, ae, pe, fe, he = !1, xe = !1, ye = !1, ge = !1, be = !1, ke = !0, Ee = !0, Le = !1, Me = null, Se = [], Ve = new Set, Ce = null, Te = null;
        function Ue(e) {
            k.value = !1,
            Ge({
                action: e,
                source: U.value,
                stat: "xl_action_error"
            })
        }
        function qe(e) {
            Ue(e)
        }
        function $e(e) {
            C.value = !1,
            Ge({
                action: e
            })
        }
        function je(e) {
            $e(e)
        }
        function Oe(e) {
            j.value = !1,
            Ge({
                action: e,
                stat: "xl_reminder_install"
            })
        }
        function Ie(e) {
            Oe(e)
        }
        function Be() {
            j.value = !0,
            chrome.runtime.sendMessage({
                name: "xl_prompt_show"
            })
        }
        function Ae(e) {
            C.value = !0,
            q.value = e
        }
        function Ne() {
            E.value = !1,
            tt(),
            h.value = !0,
            chrome.runtime.sendMessage({
                name: "xl_screen",
                type: "close",
                stat: "browser_plugin_close_click",
                videoUIVersion: r.value
            })
        }
        function De(e, t) {
            return 0 != e.length && (0 != ge && (0 != function(e) {
                if (0 == e.length)
                    return !1;
                const t = e
                  , o = t.indexOf(":");
                if (-1 == o)
                    return !1;
                const n = t.substr(0, o + 1).toUpperCase();
                if ("" == n)
                    return !1;
                let l = !0;
                return -1 != X.indexOf(n) ? 0 == he && (l = !1) : -1 != Y.indexOf(n) ? 0 == xe && (l = !1) : -1 != Q.indexOf(n) ? 0 == ye && (l = !1) : l = !1,
                l
            }(e) && (0 != function(e) {
                if (0 == e.length)
                    return !0;
                const t = []
                  , o = ae.split("||");
                for (const i in o) {
                    const e = o[i].slice(2).trimRight("|");
                    t.push(e)
                }
                let n = !0;
                const l = e;
                for (const i in t)
                    if (t[i].length > 0 && -1 != l.indexOf(t[i])) {
                        n = !1;
                        break
                    }
                return n
            }(t) && (!_e(t, pe) && 0 != function(e) {
                if (0 == e.length)
                    return !1;
                const t = e.indexOf(":");
                if (-1 == t)
                    return !1;
                const o = e.toLowerCase();
                if ("xlapp://" == o.substr(0, t + 3).trimLeft(" "))
                    return !0;
                if (-1 != o.indexOf("ed2k://") || -1 != o.indexOf("magnet:?"))
                    return !0;
                let n = !1
                  , l = ve(o);
                return l.length > 0 && (l += ";",
                -1 != fe.indexOf(l) && (n = !0)),
                n
            }(e)))))
        }
        function Re(e) {
            return t = e,
            document.cookie,
            o = document.location.href,
            !me(t) && De(t, o);
            var t, o
        }
        function Fe(e) {
            var t;
            if (e.ctrlKey)
                return;
            if (!e.isTrusted)
                return;
            const o = (null == (t = null == e ? void 0 : e.target) ? void 0 : t.href) || "";
            if (te && oe && ie) {
                let t = ue(o);
                if (null != t)
                    return;
                if (t = Re(o),
                t)
                    return chrome.runtime.sendMessage({
                        name: "xl_download",
                        link: o,
                        cookie: document.cookie,
                        referurl: document.location.href
                    }),
                    e.stopPropagation(),
                    void e.preventDefault()
            } else
                I.value && ((n = (n = o).toLowerCase()).startsWith("thunder://") || n.startsWith("ed2k://") || n.startsWith("magnet:?") || n.includes(".torrent")) && chrome.runtime.sendMessage({
                    name: "xl_prompt_enable"
                }, (function(e) {
                    e && e.enable && Be()
                }
                ));
            var n
        }
        function ze() {
            $.info("RegisterClickEventListener", x.value, document.links);
            const e = e => {
                Fe(e)
            }
            ;
            if (x.value)
                for (const t of document.links)
                    t.addEventListener("click", e, !1);
            else
                for (const t of document.links)
                    t.outerHTML.match(W),
                    t.addEventListener("click", e, !1)
        }
        function Je() {
            document.getElementById(t);
            E.value = !1
        }
        async function We(e) {
            do {
                if (h.value)
                    break;
                const {M3U8VideoUrl: o} = F
                  , n = document.getElementById(t)
                  , l = z(o || O.value);
                n.style.display = "block";
                const i = n.querySelector(".xl-chrome-ext-tips.cloud-add")
                  , a = n.querySelector(".xl-chrome-ext-tips.download")
                  , s = G(Ce, l.suffix, l.protocol)
                  , c = G(Te, l.suffix, l.protocol);
                i && !s && (V.value = !1),
                a && !c && (S.value = !1);
                const d = e.getBoundingClientRect();
                let u = "position: fixed !important; z-index: 10000000000 !important;";
                u += `left: ${d.x + 4}px; top: ${d.y + 4}px;`,
                g.value && (b.value = `top:${d.y + 16}px`),
                n.style = u,
                be || (be = !0,
                chrome.runtime.sendMessage({
                    name: "VideoShow",
                    referurl: document.location.href,
                    hasDownload: c,
                    videoSrc: e.src,
                    videoUIVersion: r.value
                }, (function() {}
                ))),
                E.value = !0,
                H(n)
            } while (0)
        }
        function He(e) {
            e.isTrusted && (e.ctrlKey && chrome.runtime.sendMessage({
                name: "EnabledCapture",
                capture: !1
            }, (function() {}
            )),
            window.top !== window.self && chrome.runtime.sendMessage({
                name: "xl_chrome_iframe_keydown",
                keyCode: e.keyCode
            }))
        }
        function Ke(e) {
            if (e.isTrusted && (e.ctrlKey && chrome.runtime.sendMessage({
                name: "EnabledCapture",
                capture: !0
            }, (function() {}
            )),
            Ee))
                switch (e.keyCode) {
                case 68:
                    e.shiftKey && (se() || te && (window.top === window.self ? co.enter() : chrome.runtime.sendMessage({
                        name: "xl_chrome_iframe_multi_hotkey"
                    })))
                }
        }
        function Xe(e) {
            var t, o;
            try {
                const n = document.elementFromPoint(e.x, e.y);
                do {
                    if (!n)
                        break;
                    if (null == (t = null == n ? void 0 : n.tagName) || t.toUpperCase(),
                    "VIDEO" === (null == (o = null == n ? void 0 : n.tagName) ? void 0 : o.toUpperCase())) {
                        const {isM3U8Video: e} = F
                          , t = n.src || re(n, e);
                        if (!t)
                            break;
                        if (0 === (null == t ? void 0 : t.toLowerCase().indexOf("blob:")) && !e)
                            break;
                        if (n === A.value)
                            break;
                        A.value = n,
                        O.value = t || "",
                        We(n);
                        break
                    }
                    if (A.value) {
                        if (!ce(e, A.value)) {
                            A.value = null,
                            O.value = "",
                            Je();
                            break
                        }
                    } else {
                        const t = document.getElementsByTagName("video");
                        if (Se = t,
                        0 === Se.length)
                            break;
                        let o = null;
                        for (let n = 0; n < Se.length; n++) {
                            const t = Se[n];
                            if ("none" !== window.getComputedStyle(t).display)
                                if (ce(e, t))
                                    if (o) {
                                        const e = Number(window.getComputedStyle(t).zIndex) || 0;
                                        e > (Number(window.getComputedStyle(o).zIndex) || 0) && (o = t)
                                    } else
                                        o = t;
                                else if (o)
                                    break
                        }
                        if (o) {
                            const e = o.src || re(o)
                              , {isM3U8Video: t} = F;
                            (e && 0 !== e.toLowerCase().indexOf("blob:") || t) && (A.value = o,
                            O.value = e,
                            We(o));
                            break
                        }
                    }
                } while (0)
            } catch (n) {}
        }
        function Ye(e) {
            var t;
            const o = null == (t = document.getElementById(Z)) ? void 0 : t.contains(e.toElement);
            A.value && (o || (A.value = null,
            O.value = "",
            Je()))
        }
        function Ze(e) {
            Xe(e)
        }
        function et() {
            A.value && We(A.value)
        }
        function tt() {
            !function() {
                try {
                    document.body && (document.body.removeEventListener("mousemove", Xe, !0),
                    window.self !== window.top && document.body.removeEventListener("mouseout", Ye),
                    document.body.removeEventListener("wheel", Ze)),
                    document.removeEventListener("scroll", et)
                } catch (e) {}
            }(),
            A.value = null,
            O.value = "",
            Se = [],
            Me && (Me.disconnect(),
            Me = null)
        }
        function ot() {
            return window.top === window.self
        }
        function nt(e) {
            if ("data" === e.data.type && ot())
                try {
                    const t = JSON.parse(e.data.payload);
                    Object.assign(P, {
                        ...t
                    }),
                    s.value = !0
                } catch (t) {}
        }
        function lt(e, t) {
            chrome.runtime.sendMessage({
                name: "xl_show_action_error_dialog",
                source: t
            }),
            k.value = !0,
            T.value = e,
            U.value = t
        }
        function it() {
            ke && Le && !h.value && (tt(),
            async function() {
                do {
                    if (Me)
                        break;
                    let t = null;
                    try {
                        t = window.top.document.getElementsByTagName("title")[0]
                    } catch (e) {}
                    t && (Me = new MutationObserver((function() {
                        const e = document.getElementsByTagName("video");
                        Se = e
                    }
                    )),
                    Me.observe(t, {
                        childList: !0
                    })),
                    Se = await K(),
                    B(Se)
                } while (0)
            }(),
            function() {
                try {
                    document.body && (document.body.addEventListener("mousemove", Xe, !0),
                    window.self !== window.top && document.body.addEventListener("mouseout", Ye),
                    document.body.addEventListener("wheel", Ze)),
                    document.addEventListener("scroll", et)
                } catch (e) {}
            }())
        }
        function at() {
            chrome.runtime.onMessage.addListener( (e, t, o) => {
                "newM3u8Request" === e.action && (F.isM3U8Video = e.data.isM3U8Video,
                F.M3U8VideoUrl = e.data.url,
                chrome.runtime.sendMessage({
                    name: "xl_screen",
                    type: "init",
                    data: {
                        params: {
                            playForm: document.referrer
                        }
                    }
                }))
            }
            )
        }
        w(x, () => {
            ze()
        }
        ),
        w(p, e => {
            e && chrome.runtime.sendMessage({
                name: "xl_stat",
                eventId: 974,
                extParam: {
                    tabUrl: window.location.href
                }
            })
        }
        );
        const st = async () => {
            const e = de();
            Ve = e instanceof Set ? e : new Set;
            0 !== (await async function() {
                return new Promise(e => {
                    Ve instanceof Set || (Ve = new Set);
                    for (const t of Ve) {
                        const o = z(t) || {}
                          , {suffix: n, isVideoURL: l, protocol: i} = o
                          , a = G(Ce, n, i)
                          , s = G(Te, n, i);
                        let r = !1;
                        if (("unknown" !== n || i) && (s && (P.downloadList.push(o),
                        r = !0),
                        a && (l && (P.playList[".m3u8" === n ? "M3U8List" : "normalVideoList"].push(o),
                        P.playList.length += 1),
                        P.saveList.push(o),
                        r = !0),
                        r && (P.length += 1),
                        99 === P.length))
                            return void e(P)
                    }
                    setTimeout( () => {
                        const {M3U8VideoUrl: t} = F;
                        if (t) {
                            if (P.downloadList.some(e => e.url === t))
                                return void e(P);
                            const o = z(t);
                            if (!G(Ce, o.suffix, o.protocol) || !G(Te, o.suffix, o.protocol))
                                return;
                            P.downloadList.unshift(o),
                            P.playList.M3U8List.unshift(o),
                            P.saveList.unshift(o),
                            P.playList.length += 1,
                            P.length += 1
                        }
                        e(P)
                    }
                    , 1500)
                }
                )
            }()).length && (ot() ? (s.value = !0,
            $.warn("页面底部弹出资源列表，", JSON.stringify(P || {}), "非iframe")) : ($.warn("在 iframe 內部， 向上传递数据：", JSON.stringify(P)),
            window.parent.postMessage({
                type: "data",
                payload: JSON.stringify(P)
            }, "*")))
        }
        ;
        function rt() {
            s.value = !1
        }
        const ct = async () => {
            var e;
            N.value = !0,
            e = document.location.href,
            chrome.runtime.sendMessage({
                name: "CheckActivated",
                url: e
            }),
            ze(),
            function(e) {
                chrome.runtime.sendMessage({
                    name: "CheckVideoInWhiteList",
                    url: e
                }, (async function(e) {
                    var t, o;
                    I.value = null == e ? void 0 : e.exception,
                    Le = null == e ? void 0 : e.videoInWhiteList,
                    te = null == e ? void 0 : e.bPlugin,
                    ke = null == e ? void 0 : e.bMonitorVideo,
                    oe = null == e ? void 0 : e.bWebsite,
                    Ce = (null == e ? void 0 : e.fluentPlayConfig) || {},
                    V.value = !!(null == (t = null == e ? void 0 : e.fluentPlayConfig) ? void 0 : t.switch),
                    Te = (null == e ? void 0 : e.downloadSniffConfig) || {},
                    S.value = !!(null == (o = null == e ? void 0 : e.downloadSniffConfig) ? void 0 : o.switch),
                    Le && ke && oe && (it(),
                    ((null == Ce ? void 0 : Ce.switch) || (null == Te ? void 0 : Te.switch)) && st(),
                    !te && x.value && await J() && chrome.runtime.sendMessage({
                        name: "xl_show_notifications"
                    }))
                }
                ))
            }(document.location.href),
            document.addEventListener("keydown", He),
            document.addEventListener("keyup", Ke, !0),
            window.addEventListener("message", nt),
            async function() {
                var e;
                try {
                    const t = await ne({
                        name: "GetConfig"
                    });
                    if (!t)
                        return void (a.value = {});
                    a.value = t,
                    he = t.bMonitorEmule,
                    xe = t.bMonitorMagnet,
                    ye = t.bMonitorTradition,
                    ge = t.bMonitorIE,
                    ae = t.monitorDomains,
                    pe = t.filterDomains,
                    fe = t.monitorFileExts,
                    y.value = le(window.location.href, t.jsqConfig),
                    d.value = (null == (e = null == t ? void 0 : t.jsqConfig) ? void 0 : e.text) || {},
                    p.value = t.isStatGlobal,
                    r.value = (null == t ? void 0 : t.videoTagVersion) || we,
                    $.info("视频操作按钮UI版本", r.value)
                } catch (t) {
                    a.value = {}
                }
            }()
        }
        ;
        return chrome.runtime.onMessage.addListener((function(e, t, o) {
            if ("UpdatePluginEnabled" == e.name)
                I.value = e.exception,
                te = e.enable,
                te || co.quit();
            else if ("UpdateMoniterVideoTags" == e.name)
                ke = e.enable;
            else if ("UpdateMultiSelectShortcutEnable" == e.name)
                Ee = e.enable;
            else if ("UpdateWebsiteEnabled" == e.name)
                oe = e.enable;
            else if ("UpdatePageEnabled" == e.name)
                ie = e.enable;
            else if ("OnActivated" == e.name)
                N.value && async function(e, t, o) {
                    try {
                        const n = await chrome.runtime.sendMessage({
                            name: "CheckEnabled",
                            url: e,
                            tabId: t,
                            topFrame: o
                        });
                        if (te = n.bPlugin,
                        ke = n.bMonitorVideo,
                        oe = n.bWebsite,
                        ie = n.bPage,
                        Ee = n.bShortcutEnable,
                        x.value = n.isShowRecallInfo,
                        !ke || !oe)
                            return void tt();
                        it()
                    } catch (n) {}
                }(document.location.href, e.tabId, window.top === window.self);
            else if ("UpdateMonitorDomains" == e.name)
                ae = e.monitorDomains;
            else {
                if ("GetCookie" == e.name)
                    return o({
                        cookie: document.cookie
                    }),
                    !0;
                if ("ThunderSupportReminder" === e.name)
                    window.self === window.top && Be(e.text);
                else if ("EnterMultiSelect" === e.name) {
                    if (D())
                        return;
                    co.enter()
                } else if ("xl_chrome_iframe_keydown" === e.name) {
                    if (window.top === window.self)
                        switch (e.keyCode) {
                        case 13:
                            co.download();
                            break;
                        case 27:
                            co.quit()
                        }
                } else if ("xl_chrome_iframe_multi_hotkey" === e.name)
                    window.top === window.self && co.enter();
                else if ("GetAllImages" === e.name) {
                    if (window.top === window.self) {
                        const e = [];
                        for (const t of document.images)
                            t.src && e.push({
                                src: t.src,
                                width: t.width,
                                height: t.height,
                                naturalWidth: t.naturalWidth,
                                naturalHeight: t.naturalHeight
                            });
                        return o(e),
                        !0
                    }
                } else
                    "xl_recall_entry_click" === e.name || "appendFooterUI" === e.name && (s.value = !0)
            }
        }
        )),
        m(async () => {
            ct(),
            at()
        }
        ),
        _( () => {
            try {
                window.removeEventListener("message", nt),
                document.removeEventListener("keydown", He),
                document.removeEventListener("keyup", Ke, !0),
                document.body && (document.body.removeEventListener("mousemove", Xe, !0),
                ot() || document.body.removeEventListener("mouseout", Ye),
                document.body.removeEventListener("wheel", Ze)),
                document.removeEventListener("scroll", et)
            } catch (e) {}
        }
        ),
        (e, t) => {
            var r;
            return o(),
            n("div", {
                class: l(e.$style.content_wrapper),
                ref_key: "panelRef",
                ref: R
            }, [v(to, {
                config: a.value,
                uiVersion: (null == (r = a.value) ? void 0 : r.videoTagVersion) || "v2",
                exception: I.value,
                latestVideoSrc: O.value,
                isShowVideoTag: E.value,
                isShowDownloadBar: S.value,
                isShowCloudAddBar: V.value,
                latestVideoElement: A.value,
                onShowActionError: lt,
                onShowVersionError: Ae,
                onHandleCloseBar: Ne
            }, null, 8, ["config", "uiVersion", "exception", "latestVideoSrc", "isShowVideoTag", "isShowDownloadBar", "isShowCloudAddBar", "latestVideoElement"]), v(At, {
                onShowActionError: lt,
                exception: I.value
            }, null, 8, ["exception"]), j.value ? (o(),
            M(f(Ot), {
                key: 0,
                onSubmit: Ie,
                onCancel: Oe
            })) : i("", !0), k.value ? (o(),
            M(f(Qe), {
                key: 1,
                text: T.value,
                onSubmit: qe,
                onCancel: Ue
            }, null, 8, ["text"])) : i("", !0), C.value ? (o(),
            M(f(Jt), {
                key: 2,
                text: q.value,
                onSubmit: je,
                onCancel: $e
            }, null, 8, ["text"])) : i("", !0), s.value ? (o(),
            M(f(Tt), {
                key: 3,
                tabUrl: c.value,
                isShowJsqEntry: y.value,
                jsqText: d.value,
                onRemoveFooter: rt,
                onShowActionError: lt,
                resourceList: P,
                exception: I.value
            }, null, 8, ["tabUrl", "isShowJsqEntry", "jsqText", "resourceList", "exception"])) : i("", !0), v(Pe)], 2)
        }
    }
}, [["__cssModules", {
    $style: {
        "content-wrapper": "_content-wrapper_20md8_1",
        "xl-chrome-ext-bar-toast": "_xl-chrome-ext-bar-toast_20md8_1",
        "options-wrapper": "_options-wrapper_20md8_7"
    }
}]])
  , mo = "xl_chrome_ext_" + ee;
let _o = !1;
function vo() {
    if (document.getElementById(mo))
        return;
    document.body.parentNode;
    const e = document.createElement("div");
    e.className = "xl-chrome-ext-bar_" + ee,
    e.style.display = "block",
    e.id = mo,
    document.documentElement.appendChild(e)
}
try {
    $.warn("" + (window.self === window.top ? "window top" : "window iframe")),
    vo(),
    po(),
    _o = !0,
    $.info("mounted root success")
} catch (fo) {
    $.error("error", fo),
    _o = !1
}
function po() {
    j ? T(We).mount("#" + mo) : T(uo).mount("#" + mo)
}
window.addEventListener("load", () => {
    setTimeout( () => {
        _o || (vo(),
        po(),
        _o = !0)
    }
    , 0)
}
);
