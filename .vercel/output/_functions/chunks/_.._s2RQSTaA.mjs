import { c as createComponent } from "./astro-component_CpBXEvhD.mjs";
import "piccolore";
import { C as renderSlot, Q as renderTemplate, z as maybeRenderHead } from "./params-and-props_DqdMoWg6.mjs";
import { r as renderComponent } from "./entrypoint_BemXhXYK.mjs";
import { $ as $$InternalUIComponentRenderer, b as $$CustomProfilePageRenderer, a as $$Layout } from "./Layout_CB6J4B5l.mjs";
const $$OrganizationProfile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OrganizationProfile;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "organization-profile" })} ${renderSlot($$result, $$slots["default"])}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/OrganizationProfile/OrganizationProfile.astro", void 0);
const $$OrganizationProfileLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OrganizationProfileLink;
  const { url, label } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CustomProfilePageRenderer", $$CustomProfilePageRenderer, { "label": label, "url": url, "type": "link", "component": "organization-profile" }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/OrganizationProfile/OrganizationProfileLink.astro", void 0);
const $$OrganizationProfilePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OrganizationProfilePage;
  const reorderItemsLabels = ["general", "members", "billing", "apiKeys"];
  const { url, label } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CustomProfilePageRenderer", $$CustomProfilePageRenderer, { "label": label, "url": url, "type": "page", "component": "organization-profile", "reorderItemsLabels": reorderItemsLabels }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])} `, "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/OrganizationProfile/OrganizationProfilePage.astro", void 0);
const OrganizationProfile = Object.assign($$OrganizationProfile, {
  Page: $$OrganizationProfilePage,
  Link: $$OrganizationProfileLink
});
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Organization Profile | DoSales", "data-astro-cid-4w4mpsdy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="profile-container" data-astro-cid-4w4mpsdy> ${renderComponent($$result2, "OrganizationProfile", OrganizationProfile, { "data-astro-cid-4w4mpsdy": true })} </div> ` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/organization-profile/[...slug].astro", void 0);
const $$file = "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/organization-profile/[...slug].astro";
const $$url = "/organization-profile/[...slug]";
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
