/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-5e35ea81641515a9379a.js"
  },
  {
    "url": "commons.ca8a5ee70911e5b73ba7.css"
  },
  {
    "url": "commons-2e44566e50cf25ed4e5d.js"
  },
  {
    "url": "app-19bd8076c305c5b5d2f5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d39fddecc8f7eedb1009.js"
  },
  {
    "url": "index.html",
    "revision": "e29bdb994d6fb35122afa71144a58e4e"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "76101e402902cca8afa48b8c48877009"
  },
  {
    "url": "styles.00cfeeb722d43064dc96.css"
  },
  {
    "url": "component---src-pages-index-jsx-35698532bb4003d6648f.js"
  },
  {
    "url": "styles-2dde18c4ff83c31542ba.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "9f88ae2c1debd9194399847889f0fb34"
  },
  {
    "url": "component---src-pages-404-jsx-1c7ece89de930eddd502.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "854bb5f7b838e204f022173baa50b1d9"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "8c4b7a58e6fc4a6a2a65319db22faa79"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/me/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});