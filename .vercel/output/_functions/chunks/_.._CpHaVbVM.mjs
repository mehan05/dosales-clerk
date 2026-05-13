import { c as createComponent } from "./astro-component_CpBXEvhD.mjs";
import "piccolore";
import { Q as renderTemplate, z as maybeRenderHead } from "./params-and-props_DqdMoWg6.mjs";
import { r as renderComponent } from "./entrypoint_WzNd_4CP.mjs";
import { $ as $$InternalUIComponentRenderer, a as $$Layout } from "./Layout_Dd7GixNW.mjs";
const $$CreateOrganization = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CreateOrganization;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "create-organization" })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/CreateOrganization.astro", void 0);
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Create Organization | DoSales", "data-astro-cid-6gw5u6yx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="profile-container" data-astro-cid-6gw5u6yx> ${renderComponent($$result2, "CreateOrganization", $$CreateOrganization, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@clerk/astro/components", "client:component-export": "CreateOrganization", "data-astro-cid-6gw5u6yx": true })} </div> ` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/create-organization/[...slug].astro", void 0);
const $$file = "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/create-organization/[...slug].astro";
const $$url = "/create-organization/[...slug]";
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
