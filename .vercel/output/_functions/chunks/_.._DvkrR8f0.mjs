import { c as createComponent } from "./astro-component_CpBXEvhD.mjs";
import "piccolore";
import { Q as renderTemplate, z as maybeRenderHead } from "./params-and-props_DqdMoWg6.mjs";
import { r as renderComponent } from "./entrypoint_BemXhXYK.mjs";
import { $ as $$InternalUIComponentRenderer, a as $$Layout } from "./Layout_CB6J4B5l.mjs";
const $$SignUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SignUp;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "sign-up" })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/SignUp.astro", void 0);
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign Up | DoSales", "data-astro-cid-jjxcmoo4": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="auth-container" data-astro-cid-jjxcmoo4> ${renderComponent($$result2, "SignUp", $$SignUp, { "data-astro-cid-jjxcmoo4": true })} </div> ` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/sign-up/[...slug].astro", void 0);
const $$file = "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/sign-up/[...slug].astro";
const $$url = "/sign-up/[...slug]";
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
