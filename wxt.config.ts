import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: "WXT + Solid",
    description: "A WXT extension with SolidJS",
    version: "0.0.1",
    permissions: ["storage", "scripting", "tabs", "activeTab"],
    action: {
      default_popup: "popup.html",
      default_title: "Default Popup Title",
    },
    icons: {
      16: "/icon/16.png",
      48: "/icon/48.png",
      128: "/icon/128.png",
    },
    host_permissions: [
      "https://linkedin.com/*"
    ],
  },
});
