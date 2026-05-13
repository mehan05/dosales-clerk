import { c as createComponent } from "./astro-component_CpBXEvhD.mjs";
import "piccolore";
import { Q as renderTemplate, z as maybeRenderHead } from "./params-and-props_DqdMoWg6.mjs";
import { r as renderComponent } from "./entrypoint_BemXhXYK.mjs";
import { $ as $$InternalUIComponentRenderer, a as $$Layout } from "./Layout_CB6J4B5l.mjs";
const $$OrganizationList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OrganizationList;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "organization-list" })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/OrganizationList.astro", void 0);
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Organizations | DoSales", "data-astro-cid-io6hvsby": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="list-container" data-astro-cid-io6hvsby> <h1 class="page-title" data-astro-cid-io6hvsby>Manage Your Organizations</h1> <p class="page-description" data-astro-cid-io6hvsby>Switch between your existing organizations or create a new one.</p> <div class="clerk-list-wrapper" data-astro-cid-io6hvsby> ${renderComponent($$result2, "OrganizationList", $$OrganizationList, { "hidePersonal": false, "afterCreateOrganizationUrl": "/organization-profile", "afterSelectOrganizationUrl": "/", "data-astro-cid-io6hvsby": true })} </div> </div> ` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/organizations/index.astro", void 0);
const $$file = "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/organizations/index.astro";
const $$url = "/organizations";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
