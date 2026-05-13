import { c as createComponent } from "./astro-component_CpBXEvhD.mjs";
import "piccolore";
import { Q as renderTemplate, z as maybeRenderHead } from "./params-and-props_DqdMoWg6.mjs";
import { r as renderComponent } from "./entrypoint_WzNd_4CP.mjs";
import { a as $$Layout, c as $$Show } from "./Layout_Dd7GixNW.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DoSales | Sales Management with Clerk", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Show", $$Show, { "when": "signed-out", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h1 class="hero-title" data-astro-cid-j7pv25f6>Elevate Your Sales Workflow</h1> <p class="hero-subtitle" data-astro-cid-j7pv25f6>The all-in-one platform for sales teams. Sign in to start managing your organizations and closing deals.</p> <div class="hero-actions" data-astro-cid-j7pv25f6> <a href="/sign-up" class="btn btn-primary" data-astro-cid-j7pv25f6>Get Started for Free</a> <a href="/sign-in" class="btn btn-secondary" data-astro-cid-j7pv25f6>Sign In</a> </div> ` })} ${renderComponent($$result2, "Show", $$Show, { "when": "signed-in", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h1 class="hero-title" data-astro-cid-j7pv25f6>Welcome Back to DoSales</h1> <p class="hero-subtitle" data-astro-cid-j7pv25f6>You are successfully signed in. Manage your organizations or update your profile.</p> <div class="hero-actions" data-astro-cid-j7pv25f6> <a href="/organizations" class="btn btn-primary" data-astro-cid-j7pv25f6>Go to Dashboard</a> <a href="/user-profile" class="btn btn-secondary" data-astro-cid-j7pv25f6>View Profile</a> </div> ` })} </div> <section class="features" data-astro-cid-j7pv25f6> <div class="feature-card" data-astro-cid-j7pv25f6> <div class="feature-icon" data-astro-cid-j7pv25f6>🏢</div> <h3 data-astro-cid-j7pv25f6>Multi-Org Support</h3> <p data-astro-cid-j7pv25f6>Easily switch between different organizations and teams.</p> </div> <div class="feature-card" data-astro-cid-j7pv25f6> <div class="feature-icon" data-astro-cid-j7pv25f6>🔒</div> <h3 data-astro-cid-j7pv25f6>Secure Auth</h3> <p data-astro-cid-j7pv25f6>Powered by Clerk for enterprise-grade security and ease of use.</p> </div> <div class="feature-card" data-astro-cid-j7pv25f6> <div class="feature-icon" data-astro-cid-j7pv25f6>⚡</div> <h3 data-astro-cid-j7pv25f6>Fast Performance</h3> <p data-astro-cid-j7pv25f6>Built with Astro for lightning-fast server-side rendering.</p> </div> </section> ` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/index.astro", void 0);
const $$file = "/home/mehan/Step_7/calibraint/dosales-clerk/src/pages/index.astro";
const $$url = "";
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
