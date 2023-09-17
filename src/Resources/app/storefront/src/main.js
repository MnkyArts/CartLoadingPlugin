const { PluginManager } = window;

import CartLoadingPlugin from "./plugin/cart-loading.plugin";

PluginManager.override("AddToCart", CartLoadingPlugin, "[data-add-to-cart]");
