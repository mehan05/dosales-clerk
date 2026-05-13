import { c as createComponent } from "./astro-component_CpBXEvhD.mjs";
import "piccolore";
import { T as createRenderInstruction, Q as renderTemplate, z as maybeRenderHead, C as renderSlot, bg as defineScriptVars, be as unescapeHTML, F as Fragment, a3 as addAttribute, bh as renderHead } from "./params-and-props_DqdMoWg6.mjs";
import { r as renderComponent, m as mergeSlots, s as spreadAttributes } from "./entrypoint_WzNd_4CP.mjs";
import "clsx";
import { g as generateSafeId } from "./index_CXb2IEQ0.mjs";
async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}<\/script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}
const $$ShowCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ShowCSR;
  const { when, class: className } = Astro2.props;
  const isStringWhen = typeof when === "string";
  const whenCondition = isStringWhen ? when : null;
  const role = !isStringWhen && typeof when === "object" ? when.role : void 0;
  const permission = !isStringWhen && typeof when === "object" ? when.permission : void 0;
  const feature = !isStringWhen && typeof when === "object" ? when.feature : void 0;
  const plan = !isStringWhen && typeof when === "object" ? when.plan : void 0;
  return renderTemplate`${renderComponent($$result, "clerk-show", "clerk-show", { "data-when": whenCondition, "data-role": role, "data-permission": permission, "data-feature": feature, "data-plan": plan, "class": className }, { "default": () => renderTemplate` ${maybeRenderHead()}<div hidden data-clerk-control-slot-default> ${renderSlot($$result, $$slots["default"])} </div> <div hidden data-clerk-control-slot-fallback> ${renderSlot($$result, $$slots["fallback"])} </div> ` })} ${renderScript($$result, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/control/ShowCSR.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/control/ShowCSR.astro", void 0);
const $$ShowSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ShowSSR;
  const { has, userId } = Astro2.locals.auth();
  const { when } = Astro2.props;
  const showContent = (() => {
    if (when === "signed-in") return !!userId;
    if (when === "signed-out") return !userId;
    if (typeof when === "function") return !!userId && when(has);
    if (typeof when === "object" && when !== null) {
      if (!userId) return false;
      return has(when);
    }
    return !!userId;
  })();
  const hasShowFallback = Astro2.slots.has("show-fallback");
  return renderTemplate`${showContent ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : hasShowFallback ? renderTemplate`${renderSlot($$result, $$slots["show-fallback"])}` : renderTemplate`${renderSlot($$result, $$slots["fallback"])}`}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/control/ShowSSR.astro", void 0);
const configOutput = "server";
function isStaticOutput(forceStatic) {
  if (forceStatic !== void 0) {
    return forceStatic;
  }
  return configOutput === "static";
}
const $$Show = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Show;
  const { isStatic, when, ...rest } = Astro2.props;
  if (typeof when === "undefined") {
    throw new Error("@clerk/astro: <Show /> requires a `when` prop.");
  }
  const props = { ...rest, when };
  const shouldUseCSR = isStatic !== void 0 ? isStaticOutput(isStatic) : !Astro2.locals?.auth;
  const ShowComponent = shouldUseCSR ? $$ShowCSR : $$ShowSSR;
  const hasShowFallback = Astro2.slots.has("show-fallback");
  return renderTemplate`${renderComponent($$result, "ShowComponent", ShowComponent, { ...props }, mergeSlots({ "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }, hasShowFallback ? { "show-fallback": () => renderTemplate`${renderSlot($$result, $$slots["show-fallback"])}` } : { "fallback": () => renderTemplate`${renderSlot($$result, $$slots["fallback"])}` }))}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/control/Show.astro", void 0);
function addUnstyledAttributeToFirstTag(html, attributeValue) {
  return html.replace(/(<[^>]+)>/, `$1 data-clerk-unstyled-id="${attributeValue}">`);
}
var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$SignInButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SignInButton;
  const safeId = generateSafeId();
  const {
    asChild,
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl,
    mode,
    ...props
  } = Astro2.props;
  const signInOptions = {
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl
  };
  let htmlElement = "";
  if (asChild) {
    htmlElement = await Astro2.slots.render("default");
    htmlElement = addUnstyledAttributeToFirstTag(htmlElement, safeId);
  }
  return renderTemplate(_a$5 || (_a$5 = __template$5(["", "<script>(function(){", "\n  const btn = document.querySelector(`[data-clerk-unstyled-id=\"${safeId}\"]`);\n\n  btn.addEventListener('click', () => {\n    const clerk = window.Clerk;\n\n    if (mode === 'modal') {\n      return clerk.openSignIn({ ...signInOptions, appearance: props.appearance });\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>"], ["", "<script>(function(){", "\n  const btn = document.querySelector(\\`[data-clerk-unstyled-id=\"\\${safeId}\"]\\`);\n\n  btn.addEventListener('click', () => {\n    const clerk = window.Clerk;\n\n    if (mode === 'modal') {\n      return clerk.openSignIn({ ...signInOptions, appearance: props.appearance });\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>"])), asChild ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(htmlElement)}` })}` : renderTemplate`${maybeRenderHead()}<button${spreadAttributes(props)}${addAttribute(safeId, "data-clerk-unstyled-id")}>${renderSlot($$result, $$slots["default"], renderTemplate`Sign in`)}</button>`, defineScriptVars({ props, signInOptions, mode, safeId }));
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/unstyled/SignInButton.astro", void 0);
var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$SignUpButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SignUpButton;
  const safeId = generateSafeId();
  const {
    asChild,
    fallbackRedirectUrl,
    forceRedirectUrl,
    signInFallbackRedirectUrl,
    signInForceRedirectUrl,
    mode,
    unsafeMetadata,
    ...props
  } = Astro2.props;
  const signUpOptions = {
    fallbackRedirectUrl,
    forceRedirectUrl,
    signInFallbackRedirectUrl,
    signInForceRedirectUrl,
    unsafeMetadata
  };
  let htmlElement = "";
  if (asChild) {
    htmlElement = await Astro2.slots.render("default");
    htmlElement = addUnstyledAttributeToFirstTag(htmlElement, safeId);
  }
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", "<script>(function(){", "\n  const btn = document.querySelector(`[data-clerk-unstyled-id=\"${safeId}\"]`);\n\n  btn.addEventListener('click', () => {\n    const clerk = window.Clerk;\n\n    if (mode === 'modal') {\n      return clerk.openSignUp({ ...signUpOptions, appearance: props.appearance });\n    }\n\n    return clerk.redirectToSignUp({\n      ...signUpOptions,\n      signUpFallbackRedirectUrl: signUpOptions.fallbackRedirectUrl,\n      signUpForceRedirectUrl: signUpOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>"], ["", "<script>(function(){", "\n  const btn = document.querySelector(\\`[data-clerk-unstyled-id=\"\\${safeId}\"]\\`);\n\n  btn.addEventListener('click', () => {\n    const clerk = window.Clerk;\n\n    if (mode === 'modal') {\n      return clerk.openSignUp({ ...signUpOptions, appearance: props.appearance });\n    }\n\n    return clerk.redirectToSignUp({\n      ...signUpOptions,\n      signUpFallbackRedirectUrl: signUpOptions.fallbackRedirectUrl,\n      signUpForceRedirectUrl: signUpOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>"])), asChild ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(htmlElement)}` })}` : renderTemplate`${maybeRenderHead()}<button${spreadAttributes(props)}${addAttribute(safeId, "data-clerk-unstyled-id")}>${renderSlot($$result, $$slots["default"], renderTemplate`Sign up`)}</button>`, defineScriptVars({ props, signUpOptions, mode, safeId }));
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/unstyled/SignUpButton.astro", void 0);
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$InternalUIComponentRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$InternalUIComponentRenderer;
  const { component, id, ...props } = Astro2.props;
  const safeId = id || generateSafeId();
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by `mountAllClerkAstroJSComponents`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: `clerk-${component}-${safeId}`,\n    props,\n  });\n})();<\/script>"], ["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by \\`mountAllClerkAstroJSComponents\\`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: \\`clerk-\\${component}-\\${safeId}\\`,\n    props,\n  });\n})();<\/script>"])), maybeRenderHead(), addAttribute(`clerk-${component}-${safeId}`, "data-clerk-id"), defineScriptVars({ props, component, safeId }));
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/InternalUIComponentRenderer.astro", void 0);
const $$UserButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserButton;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "user-button" })} ${renderSlot($$result, $$slots["default"])}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro", void 0);
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$MenuItemRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MenuItemRenderer;
  const { label, href, open, clickIdentifier, parent } = Astro2.props;
  let labelIcon = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  const isDevMode = false;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script>(function(){", "\n  const parentElement = document.currentScript.parentElement;\n\n  // We used a web component in the `<UserButton.MenuItems>` component.\n  const hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\n  if (!hasParentMenuItem) {\n    if (isDevMode) {\n      throw new Error(\n        `Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.`,\n      );\n    }\n    return;\n  }\n\n  // Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const reorderItemsLabels = ['manageAccount', 'signOut'];\n  const isReorderItem = reorderItemsLabels.includes(label);\n\n  let newMenuItem = {\n    label,\n  };\n\n  if (!isReorderItem) {\n    newMenuItem = {\n      ...newMenuItem,\n      mountIcon: el => {\n        el.innerHTML = labelIcon;\n      },\n      unmountIcon: () => {\n        /* What to clean up? */\n      },\n    };\n\n    if (href) {\n      newMenuItem.href = href;\n    } else if (open) {\n      newMenuItem.open = open.startsWith('/') ? open : `/${open}`;\n    } else if (clickIdentifier) {\n      const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n      newMenuItem.onClick = () => {\n        document.dispatchEvent(clickEvent);\n      };\n    }\n  }\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    customMenuItems: [...(currentOptions?.customMenuItems ?? []), newMenuItem],\n  });\n})();<\/script>"], ["<script>(function(){", "\n  const parentElement = document.currentScript.parentElement;\n\n  // We used a web component in the \\`<UserButton.MenuItems>\\` component.\n  const hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\n  if (!hasParentMenuItem) {\n    if (isDevMode) {\n      throw new Error(\n        \\`Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.\\`,\n      );\n    }\n    return;\n  }\n\n  // Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const reorderItemsLabels = ['manageAccount', 'signOut'];\n  const isReorderItem = reorderItemsLabels.includes(label);\n\n  let newMenuItem = {\n    label,\n  };\n\n  if (!isReorderItem) {\n    newMenuItem = {\n      ...newMenuItem,\n      mountIcon: el => {\n        el.innerHTML = labelIcon;\n      },\n      unmountIcon: () => {\n        /* What to clean up? */\n      },\n    };\n\n    if (href) {\n      newMenuItem.href = href;\n    } else if (open) {\n      newMenuItem.open = open.startsWith('/') ? open : \\`/\\${open}\\`;\n    } else if (clickIdentifier) {\n      const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n      newMenuItem.onClick = () => {\n        document.dispatchEvent(clickEvent);\n      };\n    }\n  }\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    customMenuItems: [...(currentOptions?.customMenuItems ?? []), newMenuItem],\n  });\n})();<\/script>"])), defineScriptVars({ label, href, open, clickIdentifier, labelIcon, isDevMode, parent }));
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro", void 0);
const $$UserButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserButtonLink;
  const { label, href, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "href": href, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro", void 0);
const $$UserButtonAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserButtonAction;
  const { label, open, clickIdentifier, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "open": open, "clickIdentifier": clickIdentifier, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro", void 0);
const $$UserButtonMenuItems = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "clerk-user-button-menu-items", "clerk-user-button-menu-items", {}, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$UserButtonUserProfilePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserButtonUserProfilePage;
  const { url, label, parent } = Astro2.props;
  let labelIcon = "";
  let content = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  if (Astro2.slots.has("default")) {
    content = await Astro2.slots.render("default");
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\n  // Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const newCustomPage = {\n    label,\n    url,\n    mountIcon: el => {\n      el.innerHTML = labelIcon;\n    },\n    unmountIcon: () => {\n      /* What to clean up? */\n    },\n    mount: el => {\n      el.innerHTML = content;\n    },\n    unmount: () => {\n      /* What to clean up? */\n    },\n  };\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    userProfileProps: {\n      customPages: [...(currentOptions?.userProfileProps?.customPages ?? []), newCustomPage],\n    },\n  });\n})();<\/script>"], ["<script>(function(){", "\n  // Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const newCustomPage = {\n    label,\n    url,\n    mountIcon: el => {\n      el.innerHTML = labelIcon;\n    },\n    unmountIcon: () => {\n      /* What to clean up? */\n    },\n    mount: el => {\n      el.innerHTML = content;\n    },\n    unmount: () => {\n      /* What to clean up? */\n    },\n  };\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    userProfileProps: {\n      customPages: [...(currentOptions?.userProfileProps?.customPages ?? []), newCustomPage],\n    },\n  });\n})();<\/script>"])), defineScriptVars({ url, label, content, labelIcon, parent }));
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro", void 0);
const UserButton = Object.assign($$UserButton, {
  MenuItems: $$UserButtonMenuItems,
  Link: $$UserButtonLink,
  Action: $$UserButtonAction,
  UserProfilePage: $$UserButtonUserProfilePage
});
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$CustomProfilePageRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CustomProfilePageRenderer;
  const { url, label, type, component, reorderItemsLabels = [] } = Astro2.props;
  let labelIcon = "";
  let content = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  if (Astro2.slots.has("default") && type === "page") {
    content = await Astro2.slots.render("default");
  }
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n  // Get the component map from window that we set in the `<InternalUIComponentRenderer />`.\n  const clerkComponentMap = window.__astro_clerk_component_props.get(component);\n\n  const componentElement = document.querySelector(`[data-clerk-id^=\"clerk-${component}\"]`);\n\n  const safeId = componentElement.getAttribute('data-clerk-id');\n  const currentOptions = clerkComponentMap.get(safeId);\n\n  const isReorderItem = reorderItemsLabels.includes(label);\n\n  let newCustomPage = { label };\n\n  if (!isReorderItem) {\n    newCustomPage = {\n      ...newCustomPage,\n      url,\n      mountIcon: el => {\n        el.innerHTML = labelIcon;\n      },\n      unmountIcon: () => {\n        /* Implement cleanup if needed */\n      },\n    };\n\n    if (type === 'page') {\n      newCustomPage = {\n        ...newCustomPage,\n        mount: el => {\n          el.innerHTML = content;\n        },\n        unmount: () => {\n          /* Implement cleanup if needed */\n        },\n      };\n    }\n  }\n\n  // Custom <OrganizationProfile /> pages can be added inside\n  // the <OrganizationSwitcher /> component.\n  if (component === 'organization-switcher') {\n    clerkComponentMap.set(safeId, {\n      ...currentOptions,\n      organizationProfileProps: {\n        ...currentOptions.organizationProfileProps,\n        customPages: [...(currentOptions?.organizationProfileProps?.customPages ?? []), newCustomPage],\n      },\n    });\n  } else {\n    clerkComponentMap.set(safeId, {\n      ...currentOptions,\n      customPages: [...(currentOptions?.customPages ?? []), newCustomPage],\n    });\n  }\n})();<\/script>"], ["<script>(function(){", "\n  // Get the component map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\n  const clerkComponentMap = window.__astro_clerk_component_props.get(component);\n\n  const componentElement = document.querySelector(\\`[data-clerk-id^=\"clerk-\\${component}\"]\\`);\n\n  const safeId = componentElement.getAttribute('data-clerk-id');\n  const currentOptions = clerkComponentMap.get(safeId);\n\n  const isReorderItem = reorderItemsLabels.includes(label);\n\n  let newCustomPage = { label };\n\n  if (!isReorderItem) {\n    newCustomPage = {\n      ...newCustomPage,\n      url,\n      mountIcon: el => {\n        el.innerHTML = labelIcon;\n      },\n      unmountIcon: () => {\n        /* Implement cleanup if needed */\n      },\n    };\n\n    if (type === 'page') {\n      newCustomPage = {\n        ...newCustomPage,\n        mount: el => {\n          el.innerHTML = content;\n        },\n        unmount: () => {\n          /* Implement cleanup if needed */\n        },\n      };\n    }\n  }\n\n  // Custom <OrganizationProfile /> pages can be added inside\n  // the <OrganizationSwitcher /> component.\n  if (component === 'organization-switcher') {\n    clerkComponentMap.set(safeId, {\n      ...currentOptions,\n      organizationProfileProps: {\n        ...currentOptions.organizationProfileProps,\n        customPages: [...(currentOptions?.organizationProfileProps?.customPages ?? []), newCustomPage],\n      },\n    });\n  } else {\n    clerkComponentMap.set(safeId, {\n      ...currentOptions,\n      customPages: [...(currentOptions?.customPages ?? []), newCustomPage],\n    });\n  }\n})();<\/script>"])), defineScriptVars({ url, label, content, labelIcon, type, component, reorderItemsLabels }));
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/CustomProfilePageRenderer.astro", void 0);
const $$OrganizationSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OrganizationSwitcher;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "organization-switcher" })} ${renderSlot($$result, $$slots["default"])}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/OrganizationSwitcher/OrganizationSwitcher.astro", void 0);
const $$OrganizationProfilePage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OrganizationProfilePage;
  const reorderItemsLabels = ["general", "members", "billing", "apiKeys"];
  const { url, label } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CustomProfilePageRenderer", $$CustomProfilePageRenderer, { "label": label, "url": url, "type": "page", "component": "organization-switcher", "reorderItemsLabels": reorderItemsLabels }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])} `, "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/OrganizationSwitcher/OrganizationProfilePage.astro", void 0);
const $$OrganizationProfileLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$OrganizationProfileLink;
  const { url, label } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CustomProfilePageRenderer", $$CustomProfilePageRenderer, { "label": label, "url": url, "type": "link", "component": "organization-switcher" }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/node_modules/@clerk/astro/components/interactive/OrganizationSwitcher/OrganizationProfileLink.astro", void 0);
const OrganizationSwitcher = Object.assign($$OrganizationSwitcher, {
  OrganizationProfilePage: $$OrganizationProfilePage,
  OrganizationProfileLink: $$OrganizationProfileLink
});
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <div class="logo" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <span class="logo-text" data-astro-cid-3ef6ksr2>DoSales</span> </a> </div> <nav class="nav" data-astro-cid-3ef6ksr2> <a href="/" class="nav-link" data-astro-cid-3ef6ksr2>Home</a> <a href="/pricing" class="nav-link" data-astro-cid-3ef6ksr2>Pricing</a> ${renderComponent($$result, "Show", $$Show, { "when": "signed-in", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <a href="/organizations" class="nav-link" data-astro-cid-3ef6ksr2>Organizations</a> <a href="/user-profile" class="nav-link" data-astro-cid-3ef6ksr2>Profile</a> ` })} </nav> <div class="actions" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Show", $$Show, { "when": "signed-out", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignInButton", $$SignInButton, { "mode": "modal", "asChild": true, "data-astro-cid-3ef6ksr2": true }, { "default": ($$result3) => renderTemplate` <button class="btn btn-secondary" data-astro-cid-3ef6ksr2>Sign In</button> ` })} ${renderComponent($$result2, "SignUpButton", $$SignUpButton, { "mode": "modal", "asChild": true, "data-astro-cid-3ef6ksr2": true }, { "default": ($$result3) => renderTemplate` <button class="btn btn-primary" data-astro-cid-3ef6ksr2>Sign Up</button> ` })} ` })} ${renderComponent($$result, "Show", $$Show, { "when": "signed-in", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "OrganizationSwitcher", OrganizationSwitcher, { "client:load": true, "afterCreateOrganizationUrl": "/organization-profile", "appearance": {
    elements: {
      organizationSwitcherTrigger: "org-switcher-trigger"
    }
  }, "client:component-hydration": "load", "client:component-path": "@clerk/astro/components", "client:component-export": "OrganizationSwitcher", "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result2, "UserButton", UserButton, { "client:load": true, "userProfileMode": "navigation", "userProfileUrl": "/user-profile", "client:component-hydration": "load", "client:component-path": "@clerk/astro/components", "client:component-export": "UserButton", "data-astro-cid-3ef6ksr2": true })} ` })} </div> </div> </header>`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/components/Header.astro", void 0);
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet"><title>DoSales + Clerk</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main></body></html>`;
}, "/home/mehan/Step_7/calibraint/dosales-clerk/src/layouts/Layout.astro", void 0);
export {
  $$InternalUIComponentRenderer as $,
  $$Layout as a,
  $$CustomProfilePageRenderer as b,
  $$Show as c
};
