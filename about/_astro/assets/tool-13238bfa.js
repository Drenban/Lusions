const e = {
    xl_call_function: "xl_call_function",
    CheckEnabled: "CheckEnabled",
    xl_download: "xl_download",
    xl_video_show: "xl_video_show",
    xl_sniff_video_info: "xl_sniff_video_info",
    xl_install_thunder: "xl_install_thunder"
}
  , t = {
    startThunder: "startThunder",
    addBlackListWebsite: "addBlackListWebsite",
    removeBlackListWebsite: "removeBlackListWebsite",
    getWebsiteDomains: "getWebsiteDomains",
    trackEvent: "trackEvent"
}
  , n = {
    ENABLE: {
        icon: "assets/icon19_normal.png",
        tips: "迅雷Chrome支持",
        badgeText: ""
    },
    EXCEPTION: {
        icon: "assets/icon19_normal.png",
        tips: "迅雷Chrome支持出现异常",
        badgeText: "!"
    },
    DISABLE: {
        icon: "assets/icon19_disabled.png",
        tips: "迅雷Chrome支持已被禁用",
        badgeText: ""
    },
    PAGE_DISABLE: {
        icon: "assets/icon19_pageDisable.png",
        tips: "当前页面已禁用迅雷Chrome支持",
        badgeText: ""
    }
}
  , o = "https://down.sandai.net/thunder11/XunLeiWebSetup_extrecall.exe"
  , s = {
    switch: !1,
    ban_type: [],
    ban_protocol: []
}
  , _ = {
    switch: !1,
    ban_type: [".m3u8"],
    ban_protocol: []
}
  , i = "v1"
  , a = {
    NOT_OPEN_SITE: "not_open_site",
    OPEN_NOT_CONTROL_SITE: "open_not_control_site",
    OPEN_CONTROL_SITE: "open_control_site",
    STOP_ALL_CONTROL: "stop_all_control"
}
  , c = {
    MORE_CHOICE_DOWNLOAD: "more_choice_download",
    OPEN_XUNLEI: "open_xunlei",
    ADVANCED_SETTING: "advanced_setting",
    STOP_ALL_CONTROL: "stop_all_control",
    START_ALL_CONTROL: "start_all_control",
    CANCEL_CONTROL_CURRENT_SITE: "cancel_control_current_site",
    OPEN_CONTROL_CURRENT_SITE: "open_control_current_site",
    DOWNLOAD_PICTURE_ENTRANCE_CLICK: "download_picture_entrance_click"
};
function r(e, t) {
    for (const n in t) {
        const o = new RegExp(t[n],"i").exec(e);
        if (null !== o)
            return o
    }
    return null
}
function l(e) {
    try {
        return new URL(e).host
    } catch (t) {
        return d(e)
    }
}
function d(e) {
    const t = /^(ftp|http[s]?):\/\/([^\/]*)[\/]?/.exec(e);
    return t && t[2] ? t[2] : ""
}
function u(e, t, n) {
    const o = n || document.title;
    return o ? o + e : t.replace(/\?.*$/, "").replace(/.*\//, "")
}
function E(e, t, n=!1) {
    let o, s, _ = 0, i = n;
    return o = requestAnimationFrame((function n(a) {
        s = s || a,
        _ += a - s,
        i ? (e(),
        i = !1) : _ >= t && (e(),
        _ = 0),
        s = a,
        o = requestAnimationFrame(n)
    }
    )),
    {
        cancel: () => {
            cancelAnimationFrame(o)
        }
    }
}
function p(e, t) {
    if (0 === e.length)
        return !0;
    const n = l(e);
    if ("" === n)
        return !0;
    const o = new Array
      , s = t.split("||");
    for (const i in s) {
        let e = s[i];
        0 === e.indexOf("*.") && (e = e.slice(2));
        const t = e.trimRight("|");
        o.push(t)
    }
    let _ = !0;
    for (const i in o)
        if (o[i].length > 0 && -1 !== n.indexOf(o[i])) {
            _ = !1;
            break
        }
    return _
}
export {t as a, d as b, r as c, i as d, s as e, _ as f, u as g, a as h, p as i, l as j, e as o, c as p, o as r, E as s, n as t};
