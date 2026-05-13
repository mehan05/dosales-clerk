import { c as createComponent } from "./astro-component_CpBXEvhD.mjs";
import "piccolore";
import { C as renderSlot, Q as renderTemplate, z as maybeRenderHead } from "./params-and-props_DqdMoWg6.mjs";
import { r as renderComponent } from "./entrypoint_WzNd_4CP.mjs";
import { $ as $$InternalUIComponentRenderer, b as $$CustomProfilePageRenderer, a as $$Layout } from "./Layout_Dd7GixNW.mjs";
const $$UserProfile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserProfile;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "user-profile" })} ${renderSlot($$result, $$slots["default"])}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserProfile/UserProfile.astro", void 0);
const $$UserProfileLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserProfileLink;
  const { url, label } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CustomProfilePageRenderer", $$CustomProfilePageRenderer, { "label": label, "url": url, "type": "link", "component": "user-profile" }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserProfile/UserProfileLink.astro", void 0);
const $$UserProfilePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserProfilePage;
  const reorderItemsLabels = ["account", "security", "billing", "apiKeys"];
  const { url, label } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CustomProfilePageRenderer", $$CustomProfilePageRenderer, { "label": label, "url": url, "type": "page", "component": "user-profile", "reorderItemsLabels": reorderItemsLabels }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])} `, "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserProfile/UserProfilePage.astro", void 0);
const UserProfile = Object.assign($$UserProfile, {
  Page: $$UserProfilePage,
  Link: $$UserProfileLink
});
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "User Profile | DoSales", "data-astro-cid-6tyafp4b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="profile-container" data-astro-cid-6tyafp4b> ${renderComponent($$result2, "UserProfile", UserProfile, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@clerk/astro/components", "client:component-export": "UserProfile", "data-astro-cid-6tyafp4b": true })} </div> ` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/user-profile/[...slug].astro", void 0);
const $$file = "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/user-profile/[...slug].astro";
const $$url = "/user-profile/[...slug]";
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
