import { c as createComponent } from "./astro-component_CpBXEvhD.mjs";
import "piccolore";
import { Q as renderTemplate, z as maybeRenderHead } from "./params-and-props_DqdMoWg6.mjs";
import { r as renderComponent } from "./entrypoint_WzNd_4CP.mjs";
import { $ as $$InternalUIComponentRenderer, a as $$Layout } from "./Layout_Dd7GixNW.mjs";
const $$PricingTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PricingTable;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "pricing-table" })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/PricingTable.astro", void 0);
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pricing | DoSales", "data-astro-cid-lmkygsfs": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pricing-page" data-astro-cid-lmkygsfs> <header class="page-header" data-astro-cid-lmkygsfs> <h1 class="title" data-astro-cid-lmkygsfs>Transparent Pricing for Every Team</h1> <p class="subtitle" data-astro-cid-lmkygsfs>Choose the plan that's right for your sales organization. All plans include our core Clerk-powered security.</p> </header> ${renderComponent($$result2, "PricingTable", $$PricingTable, { "client:load": true, "for": "organization", "client:component-hydration": "load", "client:component-path": "@clerk/astro/components", "client:component-export": "PricingTable", "data-astro-cid-lmkygsfs": true })} <section class="faq" data-astro-cid-lmkygsfs> <h2 class="faq-title" data-astro-cid-lmkygsfs>Frequently Asked Questions</h2> <div class="faq-grid" data-astro-cid-lmkygsfs> <div class="faq-item" data-astro-cid-lmkygsfs> <h3 data-astro-cid-lmkygsfs>Can I change plans later?</h3> <p data-astro-cid-lmkygsfs>Yes, you can upgrade or downgrade your plan at any time from your organization settings.</p> </div> <div class="faq-item" data-astro-cid-lmkygsfs> <h3 data-astro-cid-lmkygsfs>Do you offer annual discounts?</h3> <p data-astro-cid-lmkygsfs>Yes! Contact our sales team for information on annual billing and volume discounts.</p> </div> <div class="faq-item" data-astro-cid-lmkygsfs> <h3 data-astro-cid-lmkygsfs>Is my data secure?</h3> <p data-astro-cid-lmkygsfs>Absolutely. We use Clerk for industry-leading authentication and follow all security best practices.</p> </div> </div> </section> </div> ` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/pricing.astro", void 0);
const $$file = "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/pricing.astro";
const $$url = "/pricing";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
