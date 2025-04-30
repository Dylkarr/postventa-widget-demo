import { resolveComponent as h, createElementBlock as l, openBlock as a, createVNode as f, ref as g, Fragment as i, createElementVNode as t, renderList as v, toDisplayString as u, pushScopeId as b, popScopeId as k, computed as V } from "vue";
import { useRouter as _, useRoute as I, createRouter as R, createWebHashHistory as $ } from "vue-router";
const d = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [c, r] of n)
    o[c] = r;
  return o;
}, w = {}, y = { class: "widget-shell" };
function D(e, n) {
  const o = h("RouterView");
  return a(), l("div", y, [
    f(o)
  ]);
}
const S = /* @__PURE__ */ d(w, [["render", D], ["__scopeId", "data-v-81cd1122"]]), p = (e) => (b("data-v-959d0378"), e = e(), k(), e), x = /* @__PURE__ */ p(() => /* @__PURE__ */ t("h2", { class: "mb-3" }, "Tabla de registros", -1)), C = /* @__PURE__ */ p(() => /* @__PURE__ */ t("thead", null, [
  /* @__PURE__ */ t("tr", null, [
    /* @__PURE__ */ t("th", null, "ID"),
    /* @__PURE__ */ t("th", null, "Nombre"),
    /* @__PURE__ */ t("th", null, "Estado"),
    /* @__PURE__ */ t("th")
  ])
], -1)), E = ["onClick"], T = {
  __name: "TableView",
  setup(e) {
    const n = _(), o = g([
      { id: 1, name: "Primer registro", status: "Activo" },
      { id: 2, name: "Segundo registro", status: "Pendiente" },
      { id: 3, name: "Tercer registro", status: "Cerrado" }
    ]);
    function c(r) {
      n.push({ path: `${n.currentRoute.value.path}/${r.id}` });
    }
    return (r, m) => (a(), l(i, null, [
      x,
      t("table", null, [
        C,
        t("tbody", null, [
          (a(!0), l(i, null, v(o.value, (s) => (a(), l("tr", {
            key: s.id
          }, [
            t("td", null, u(s.id), 1),
            t("td", null, u(s.name), 1),
            t("td", null, u(s.status), 1),
            t("td", null, [
              t("button", {
                onClick: (H) => c(s)
              }, "Ver más", 8, E)
            ])
          ]))), 128))
        ])
      ])
    ], 64));
  }
}, B = /* @__PURE__ */ d(T, [["__scopeId", "data-v-959d0378"]]), N = {
  __name: "DetailView",
  setup(e) {
    const n = I(), o = _(), c = V(() => n.params.id);
    function r() {
      o.back();
    }
    return (m, s) => (a(), l(i, null, [
      t("h2", null, "Detalle de la fila " + u(c.value), 1),
      t("p", null, "Aquí mostrarías la información completa del registro con ID " + u(c.value) + ".", 1),
      t("button", { onClick: r }, "← Volver")
    ], 64));
  }
}, W = /* @__PURE__ */ d(N, [["__scopeId", "data-v-accffcbe"]]);
function A(e = "/widget") {
  return [
    {
      path: `${e}`,
      component: B
    },
    {
      path: `${e}/:id`,
      component: W,
      props: !0
    }
  ];
}
const F = {
  /** @param {import('vue').App} app */
  install(e, { router: n, base: o = "/widget" } = {}) {
    const c = A(o);
    if (n)
      c.forEach((r) => n.addRoute(r));
    else {
      const r = R({
        history: $(o),
        routes: c
      });
      e.use(r);
    }
    e.component("WidgetShell", S);
  }
};
export {
  W as DetailView,
  B as TableView,
  F as default
};
