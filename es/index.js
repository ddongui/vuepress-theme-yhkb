import { path as l, fs as f, getDirname as H } from "@vuepress/utils";
import { createPage as A } from "@vuepress/core";
import "vue";
import { defaultTheme as D } from "@vuepress/theme-default";
async function P(e) {
  if (e.pages.every((t) => t.path !== "/")) {
    const t = await A(e, {
      path: "/",
      frontmatter: {
        layout: "Layout"
      },
      content: "<Home />"
    });
    e.pages.push(t);
  }
}
function S(e) {
  return e.slice(0, e.length - 1);
}
function m(e, t) {
  const n = /* @__PURE__ */ new Map();
  return e.length === 1 ? n.set(e[0], t) : n.set(e[0], m(e.slice(1), t)), n;
}
function d(e, t, n) {
  return M(e, t, n), e;
}
function M(e, t, n) {
  if (t.length === 1) {
    e.set(t[0], n);
    return;
  }
  const r = e.get(t[0]);
  if (r && r.set) {
    d(r, t.slice(1), n);
    return;
  }
  e.set(t[0], m(t.slice(1), n));
}
function p(e) {
  let t = {};
  for (const n of e)
    n[1] instanceof Map ? t = { ...t, [n[0]]: p(n[1]) } : t = { ...t, [n[0]]: n[1] };
  return t;
}
function b(e, t, n) {
  for (let r = e; r < t; r++)
    if (n(r) === !1)
      return !1;
}
function T(e) {
  const t = /* @__PURE__ */ new Map();
  e.pages.forEach((n) => {
    const r = decodeURI(n.path);
    if (!x(r)) {
      const i = _(r);
      d(t, i, r);
    }
  }), e.writeTemp(
    "siderItems.js",
    `
        export const siderItems = ${JSON.stringify(p(t))}
    `
  );
}
function _(e) {
  let t = e.split("/").slice(1);
  return t[t.length - 1] === "" && (t = t.slice(0, t.length - 1)), t;
}
function x(e) {
  return e === "/404.html";
}
function E(e) {
  var r;
  const t = [], n = e.contentRendered.matchAll(/<h(\d)\s+id="(.*?)".*><a.*>.*<\/a>(.*)<\/h\d>/g);
  for (const i of n) {
    const s = parseInt(i[1]), c = "#" + i[2], a = i[3];
    let o = j(t);
    s === 1 ? (o = t[t.length] = u(1), o.level = s, o.link = c, o.title = a, o.children = []) : (((r = t == null ? void 0 : t[0]) == null ? void 0 : r.title) === "JavaSE \u91CD\u5B66\u62D3\u5C55" && (console.log(s), console.log("lastHeader", o)), b(1, s + 1, (v) => {
      o === void 0 && (o = t[t.length] = u(v)), o = y(o.children, s);
    }), o.link = c, o.title = a);
  }
  return t;
}
function u(e) {
  return {
    level: e || -1,
    link: "",
    title: "",
    children: []
  };
}
function j(e) {
  return e[e.length - 1];
}
function y(e, t) {
  return e[e.length] = u(t);
}
const I = /[A-Z]:\\/;
function O(e) {
  return e = e.replace(I, "/"), e = e.replaceAll(/\\/g, "/"), e;
}
function R(e, t) {
  const n = l.resolve(h(e), g(t));
  try {
    f.mkdirsSync(l.resolve(h(e), w(g(t)))), f.copyFileSync(t, n);
  } catch (r) {
    console.log(r);
  }
}
function h(e) {
  return e.dir.public();
}
function w(e) {
  return S(e.split("\\")).join("/");
}
function g(e) {
  return e.replace(I, "");
}
function L(e, t) {
  const n = t.renderer.rules.image;
  t.renderer.rules.image = (...r) => {
    var s;
    let i = n == null ? void 0 : n(...r);
    if (i) {
      const c = (s = i.match(/src="(.*?)"/)) == null ? void 0 : s[1];
      return c && N(c) && (R(e, c), i = O(i)), i;
    }
    return "";
  };
}
function N(e) {
  return /^[A-Z]/.test(e);
}
const B = H(import.meta.url);
function Z(e) {
  return (t) => ({
    name: "vuepress-theme-yhkb",
    plugins: [],
    clientConfigFile: l.resolve(B, "./client"),
    extendsPage(n) {
      n.data.headers = E(n);
    },
    extendsMarkdown(n) {
      n.use(() => L(t, n));
    },
    async onInitialized(n) {
      T(n), P(n);
    },
    extends: D()
  });
}
export {
  Z as theme
};
