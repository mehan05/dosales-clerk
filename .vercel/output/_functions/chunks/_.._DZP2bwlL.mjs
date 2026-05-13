import { c as createComponent } from "./astro-component_CpBXEvhD.mjs";
import "piccolore";
import { Q as renderTemplate, z as maybeRenderHead } from "./params-and-props_DqdMoWg6.mjs";
import { r as renderComponent } from "./entrypoint_BemXhXYK.mjs";
import { $ as $$InternalUIComponentRenderer, a as $$Layout } from "./Layout_CB6J4B5l.mjs";
const $$SignIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SignIn;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "sign-in" })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/SignIn.astro", void 0);
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign In | DoSales", "data-astro-cid-gn4dgnlg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-container" data-astro-cid-gn4dgnlg> ${renderComponent($$result2, "SignIn", $$SignIn, { "data-astro-cid-gn4dgnlg": true })} </div> ` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/sign-in/[...slug].astro", void 0);
const $$file = "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/sign-in/[...slug].astro";
const $$url = "/sign-in/[...slug]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
